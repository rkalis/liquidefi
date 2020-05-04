const ILendingPoolAddressesProvider = artifacts.require('ILendingPoolAddressesProvider')
const ILendingPool = artifacts.require('ILendingPool')
const IERC20 = artifacts.require('IERC20')
const MockPriceOracle = artifacts.require('MockPriceOracle')
const { ADDRESSES_PROVIDER, ADDRESSES_PROVIDER_OWNER, DAI_ADDRESS, USDC_ADDRESS, ZERO_ADDRESS } = require('./addresses')
const { mintDAI, mintUSDC } = require('../util')

// Replace the existing Aave price oracle with a mock oracle that can crash asset prices
async function replacePriceOracle() {
  const provider = await ILendingPoolAddressesProvider.at(ADDRESSES_PROVIDER)
  const mockOracle = await MockPriceOracle.new()
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

// Crash the price of an asset using the MockPriceOracle
async function crashAsset(assetAddress) {
  const provider = await ILendingPoolAddressesProvider.at(ADDRESSES_PROVIDER)
  const mockOracleAddress = await provider.getPriceOracle()
  const mockOracle = await MockPriceOracle.at(mockOracleAddress)
  await mockOracle.crashAsset(assetAddress)
}

async function setup_usdc_collateral(borrower) {
  await replacePriceOracle()
  await createLoan(borrower)
  await crashAsset(USDC_ADDRESS)
}

async function teardown_oracle() {
  await crashAsset(ZERO_ADDRESS)
}

module.exports = {
  setup_usdc_collateral,
  teardown_oracle
}
