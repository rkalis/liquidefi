const ILendingPoolAddressesProvider = artifacts.require('ILendingPoolAddressesProvider')
const ILendingPool = artifacts.require('ILendingPool')
const IERC20 = artifacts.require('IERC20')
const MockPriceOracle = artifacts.require('MockPriceOracle')
const { ADDRESSES_PROVIDER, ADDRESSES_PROVIDER_OWNER, DAI_ADDRESS } = require('./addresses')
const { mintDAI } = require('../util')

// Replace the existing Aave price oracle with a mock oracle that crashes the USDC
// price on purpose
async function replacePriceOracle() {
  const provider = await ILendingPoolAddressesProvider.at(ADDRESSES_PROVIDER)
  const mockOracle = await MockPriceOracle.new()
  await provider.setPriceOracle(mockOracle.address, { from: ADDRESSES_PROVIDER_OWNER })
}

// Not actually using this because it takes forever to run. Instead I have a
// loan open on mainnet with USDC collateral and DAI principal
async function createLoan(borrower) {
  const provider = await ILendingPoolAddressesProvider.at(ADDRESSES_PROVIDER)
  const lendingPoolAddress = await provider.getLendingPool()
  const lendingPoolCoreAddress = await provider.getLendingPoolCore()
  const lendingPool = await ILendingPool.at(lendingPoolAddress)
  const depositSize = web3.utils.toBN(web3.utils.toWei('100'))
  const dai = await IERC20.at(DAI_ADDRESS)

  await mintDAI(borrower, '200')

  console.log('depositing DAI into Aave')
  await dai.approve(lendingPoolCoreAddress, depositSize, { from: user })
  await lendingPool.deposit(DAI_ADDRESS, depositSize, 0, { from: user })
  console.log('Borrowing DAI from Aave')
  await lendingPool.borrow(DAI_ADDRESS, web3.utils.toWei('50'), 2, 0, { from: user })

  console.log('User balances:')
  console.log(`DAI: ${await dai.balanceOf(user)}`)
}

module.exports = {
  createLoan,
  replacePriceOracle
}
