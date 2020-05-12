const { contract, web3 } = require('@openzeppelin/test-environment');
const SharkToken = contract.fromArtifact('SharkToken')
const IERC20 = contract.fromArtifact('IERC20')

const { setup_usdc_collateral, teardown_usdc_collateral } = require('./fixture/fixture')
const { DAI_ADDRESS, USDC_ADDRESS, MOONNET_ACCOUNTS } = require('./fixture/addresses')
const { mintDAI } = require('./util')

const truffleAssert = require('truffle-assertions')
const chai = require('chai')
chai.use(require('chai-bn')(web3.utils.BN));
const { expect } = chai

describe('SharkToken Liquidations', () => {
  const [admin, investor, target] = MOONNET_ACCOUNTS

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
    await teardown_usdc_collateral(target)
  })

  describe('LiquidateOnAave', () => {
    it('can liquidate for USDC collateral on Aave', async () => {
      // given
      const amount = web3.utils.toBN(web3.utils.toWei('50'))

      // when
      const tx = await sharkToken.liquidateOnAave(USDC_ADDRESS, target, amount, '0', admin, { from: admin })

      // then
      const exchangeRate = await sharkToken.exchangeRate()
      expect(exchangeRate).to.be.bignumber.above('1')
      truffleAssert.eventEmitted(tx, 'Liquidated')
    })
  })
})
