/* global web3, artifacts, contract, before */
const SharkToken = artifacts.require('SharkToken')
const IERC20 = artifacts.require('IERC20')
const chai = require("chai")
const { DAI_ADDRESS, MINTER, USDC_ADDRESS } = require('./fixture/addresses')
const { setup_usdc_collateral, teardown_oracle } = require('./fixture/fixture')
const { mintDAI } = require('./util')
const truffleAssert = require('truffle-assertions')

chai.use(require('chai-bn')(web3.utils.BN));
const { expect } = chai

contract('SharkToken', (accounts) => {
  const admin = accounts[0]
  const investor = accounts[1]
  const target = accounts[2]

  let sharkToken
  let daiToken

  beforeEach(async () => {
    sharkToken = await SharkToken.new('Shark Dai', 'shDAI', DAI_ADDRESS, { from: admin })
    daiToken = await IERC20.at(DAI_ADDRESS)

    await mintDAI(investor, '1000')
    await setup_usdc_collateral(target)

    await daiToken.approve(sharkToken.address, '-1', { from: investor })
    await sharkToken.deposit(web3.utils.toBN(web3.utils.toWei('100')), { from: investor })
  })

  afterEach(async () => {
    await teardown_oracle()
  })

  describe('LiquidateOnAave', () => {
    it('can liquidate for USDC collateral on Aave', async () => {
      // given
      const amount = web3.utils.toBN(web3.utils.toWei('20'))

      // when
      const tx = await sharkToken.liquidateOnAave(USDC_ADDRESS, target, amount, { from: admin })

      // then
      expect(await sharkToken.exchangeRate()).to.be.bignumber.above('1')
      truffleAssert.eventEmitted(tx, 'Liquidated')
    })
  })

})
