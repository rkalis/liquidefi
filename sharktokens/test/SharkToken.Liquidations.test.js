/* global web3, artifacts, contract, before */
const SharkToken = artifacts.require('SharkToken')
const IERC20 = artifacts.require('IERC20')
const chai = require("chai")
const { DAI_ADDRESS, BORROWER, USDC_ADDRESS } = require('./fixture/addresses')
const { replacePriceOracle } = require('./fixture/dummy_loans')

chai.use(require('chai-bn')(web3.utils.BN));
const { expect } = chai

contract('SharkToken', (accounts) => {
  const admin = accounts[0]
  const investor = BORROWER
  const target = BORROWER

  let sharkToken
  let daiToken

  beforeEach(async () => {
    sharkToken = await SharkToken.new('Shark Dai', 'shDAI', DAI_ADDRESS)
    daiToken = await IERC20.at(DAI_ADDRESS)
    await replacePriceOracle()
    await daiToken.approve(sharkToken.address, '-1', { from: investor })
    await sharkToken.deposit(web3.utils.toBN(web3.utils.toWei('100')), { from: investor })
  })

  describe('LiquidateOnAave', () => {
    it('can liquidate', async () => {
      // given
      const amount = web3.utils.toBN(web3.utils.toWei('20'))

      // when
      // Currently reverts, because USDC is not converted to DAI in the contract
      const tx = await sharkToken.liquidateOnAave(USDC_ADDRESS, target, amount)

      // then
      // Do checks
    })
  })
})
