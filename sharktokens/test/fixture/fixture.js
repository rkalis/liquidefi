const { contract, web3 } = require('@openzeppelin/test-environment');
const ILendingPoolAddressesProvider = contract.fromArtifact('ILendingPoolAddressesProvider')
const ILendingPool = contract.fromArtifact('ILendingPool')
const IERC20 = contract.fromArtifact('IERC20')
const MockPriceOracle = contract.fromArtifact('MockPriceOracle')
const { ADDRESSES_PROVIDER, ADDRESSES_PROVIDER_OWNER, DAI_ADDRESS, USDC_ADDRESS, ZERO_ADDRESS, MOONNET_ACCOUNTS } = require('./addresses')
const { mintDAI, mintUSDC } = require('../util')

// Replace the existing Aave price oracle with a mock oracle that can crash asset prices
async function replacePriceOracle() {
  const provider = await ILendingPoolAddressesProvider.at(ADDRESSES_PROVIDER)
  const mockOracle = await MockPriceOracle.new({ from: MOONNET_ACCOUNTS[0] })
  await provider.setPriceOracle(mockOracle.address, { from: ADDRESSES_PROVIDER_OWNER })
}

// Open a loan on Aave with USDC collateral and DAI principal
async function createLoan(borrower) {
  const provider = await ILendingPoolAddressesProvider.at(ADDRESSES_PROVIDER)
  const lendingPoolAddress = await provider.getLendingPool()
  const lendingPoolCoreAddress = await provider.getLendingPoolCore()
  const lendingPool = await ILendingPool.at(lendingPoolAddress)
  const usdc = await IERC20.at(USDC_ADDRESS)

  await mintDAI(borrower, '200')
  await mintUSDC(borrower, '200')

  const depositSize = web3.utils.toBN('100').muln(1000000)
  await usdc.approve(lendingPoolCoreAddress, depositSize, { from: borrower })
  await lendingPool.deposit(USDC_ADDRESS, depositSize, 0, { from: borrower })
  await lendingPool.borrow(DAI_ADDRESS, web3.utils.toWei('50'), 2, 0, { from: borrower })
}

// Open a loan on Aave with USDC collateral and DAI principal
async function repayLoan(borrower) {
  const provider = await ILendingPoolAddressesProvider.at(ADDRESSES_PROVIDER)
  const lendingPoolAddress = await provider.getLendingPool()
  const lendingPoolCoreAddress = await provider.getLendingPoolCore()
  const lendingPool = await ILendingPool.at(lendingPoolAddress)

  await mintDAI(borrower, '200')
  const dai = await IERC20.at(DAI_ADDRESS)
  await dai.approve(lendingPoolCoreAddress, '-1', { from: borrower })
  await lendingPool.repay(DAI_ADDRESS, '-1', borrower, { from: borrower })
}

// Crash the price of an asset using the MockPriceOracle
async function crashAsset(assetAddress, multiplier = 0.5) {
  const provider = await ILendingPoolAddressesProvider.at(ADDRESSES_PROVIDER)
  const mockOracleAddress = await provider.getPriceOracle()
  const mockOracle = await MockPriceOracle.at(mockOracleAddress)

  let assetPrice = web3.utils.toBN(0)
  try {
    assetPrice = await mockOracle.getAssetPrice(assetAddress)
  } catch (ignored) {}

  const newAssetPrice = assetPrice.muln(multiplier * 100).divn(100)
  await mockOracle.crashAsset(assetAddress, newAssetPrice, { from: MOONNET_ACCOUNTS[0] })
}

async function setup_usdc_collateral(borrower) {
  await replacePriceOracle()
  await createLoan(borrower)
  await crashAsset(USDC_ADDRESS)
}

async function teardown_usdc_collateral(borrower) {
  await crashAsset(ZERO_ADDRESS)
  await repayLoan(borrower)
}

module.exports = {
  replacePriceOracle,
  createLoan,
  repayLoan,
  crashAsset,
  setup_usdc_collateral,
  teardown_usdc_collateral
}
