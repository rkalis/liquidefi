/* global web3, artifacts, contract, before */
const SharkToken = artifacts.require('SharkToken')
const MockToken = artifacts.require('MockToken')
const chai = require("chai")
const truffleAssert = require('truffle-assertions')

chai.use(require('chai-bn')(web3.utils.BN));
const { expect } = chai

contract('SharkToken', (accounts) => {
  const admin = accounts[0]
  const investor = accounts[1]
  const investorBalance = web3.utils.toBN(web3.utils.toWei('100'))

  let mockToken
  let sharkToken

  beforeEach(async () => {
    mockToken = await MockToken.new()
    sharkToken = await SharkToken.new('Shark MockToken', 'shMCK', mockToken.address)
    await mockToken.transfer(investor, investorBalance, { from: admin })
  })

  describe('Deposit', () => {
    it('cannot deposit without approval', () => {
      // when, then
      truffleAssert.reverts(sharkToken.deposit(investorBalance, { from: investor }))
    })
    it('cannot deposit more than user balance', async () => {
      // given
      await mockToken.approve(sharkToken.address, '-1', { from: investor })

      // when, then
      truffleAssert.reverts(sharkToken.deposit(investorBalance.muln(11).divn(10), { from: investor }))
    })

    it('can deposit MockToken into the liquidation pool', async () => {
      // given
      await mockToken.approve(sharkToken.address, '-1', { from: investor })

      const initialMockTokenBalance = await mockToken.balanceOf(investor)
      const depositSize = web3.utils.toBN(web3.utils.toWei('10'))

      // when
      const tx = await sharkToken.deposit(depositSize, { from: investor })

      // then
      const sharkTokenSupply = await sharkToken.totalSupply()
      const underlyingTokenSupply = await sharkToken.underlyingSupply()
      const mockTokenBalance = await mockToken.balanceOf(investor)
      const sharkTokenBalance = await sharkToken.balanceOf(investor)
      const underlyingTokenBalance = await sharkToken.underlyingBalanceOf(investor)

      expect(sharkTokenSupply).to.bignumber.equal(depositSize)
      expect(underlyingTokenSupply).to.bignumber.equal(depositSize)
      expect(mockTokenBalance).to.bignumber.equal(initialMockTokenBalance.sub(depositSize))
      expect(sharkTokenBalance).to.bignumber.equal(depositSize)
      expect(underlyingTokenBalance).to.bignumber.equal(depositSize)
      truffleAssert.eventEmitted(tx, 'Deposited', { account: investor, tokenAmount: depositSize })
    })

    it('exchange rate does not change on initial deposit', async () => {
      // given
      await mockToken.approve(sharkToken.address, '-1', { from: investor })
      const depositSize = web3.utils.toBN(web3.utils.toWei('10'))
      const initialExchangeRate = await sharkToken.exchangeRate()

      // when
      await sharkToken.deposit(depositSize, { from: investor })

      // then
      expect(await sharkToken.exchangeRate()).to.bignumber.equal(initialExchangeRate)
    })

    it('exchange rate does not change on deposit after profit', async () => {
      // given
      await mockToken.approve(sharkToken.address, '-1', { from: investor })
      const depositSize = web3.utils.toBN(web3.utils.toWei('10'))
      await sharkToken.deposit(depositSize, { from: investor })

      const profitSize = web3.utils.toBN(web3.utils.toWei('1'))
      await mockToken.transfer(sharkToken.address, profitSize, { from: admin })

      const initialExchangeRate =  await sharkToken.exchangeRate()

      // when
      await sharkToken.deposit(depositSize, { from: investor })

      // then
      expect(await sharkToken.exchangeRate()).to.bignumber.equal(initialExchangeRate)
    })
  })

  describe('Withdraw', () => {
    beforeEach(async () => {
      await mockToken.approve(sharkToken.address, '-1', { from: investor })
      await sharkToken.deposit(web3.utils.toBN(web3.utils.toWei('10')), { from: investor })
    })

    it('cannot withdraw more than user balance', async () => {
      // given
      const userBalance = await sharkToken.balanceOf(investor)

      // when, then
      truffleAssert.reverts(sharkToken.withdraw(userBalance.muln(11).divn(10), { from: investor }))
    })

    it('can withdraw partial balance', async () => {
      // given
      const initialUserBalance = await sharkToken.balanceOf(investor)
      const initialUnderlyingBalance = await sharkToken.underlyingBalanceOf(investor)
      const initialTokenBalance = await mockToken.balanceOf(investor)
      const withdrawalSize = initialUserBalance.divn(2)

      // when
      const tx = await sharkToken.withdraw(withdrawalSize, { from: investor })

      // then
      const userBalance = await sharkToken.balanceOf(investor)
      const underlyingBalance = await sharkToken.underlyingBalanceOf(investor)
      const tokenBalance = await mockToken.balanceOf(investor)

      expect(userBalance).to.bignumber.equal(initialUserBalance.sub(withdrawalSize))
      expect(underlyingBalance).to.bignumber.equal(initialUnderlyingBalance.sub(withdrawalSize))
      expect(tokenBalance).to.bignumber.equal(initialTokenBalance.add(withdrawalSize))
      truffleAssert.eventEmitted(tx, 'Withdrawn', (ev) => (ev.account === investor && ev.sharkTokenAmount.eq(withdrawalSize)))
    })

    it('can withdraw full balance', async () => {
      // given
      const initialUserBalance = await sharkToken.balanceOf(investor)
      const initialTokenBalance = await mockToken.balanceOf(investor)

      // when
      const tx = await sharkToken.withdraw(initialUserBalance, { from: investor })

      // then
      const userBalance = await sharkToken.balanceOf(investor)
      const underlyingBalance = await sharkToken.underlyingBalanceOf(investor)
      const tokenBalance = await mockToken.balanceOf(investor)

      expect(userBalance).to.bignumber.equal('0')
      expect(underlyingBalance).to.bignumber.equal('0')
      expect(tokenBalance).to.bignumber.equal(initialTokenBalance.add(initialUserBalance))
      truffleAssert.eventEmitted(tx, 'Withdrawn', { account: investor, sharkTokenAmount: initialUserBalance })
    })

    it('can withdraw after profit', async () => {
      // given
      const profitSize = web3.utils.toBN(web3.utils.toWei('1'))
      await mockToken.transfer(sharkToken.address, profitSize, { from: admin })

      const initialUserBalance = await sharkToken.balanceOf(investor)
      const initialUnderlyingBalance = await sharkToken.underlyingBalanceOf(investor)
      const initialTokenBalance = await mockToken.balanceOf(investor)
      const withdrawalSize = profitSize

      // when
      const tx = await sharkToken.withdraw(withdrawalSize, { from: investor })

      // then
      const userBalance = await sharkToken.balanceOf(investor)
      const underlyingBalance = await sharkToken.underlyingBalanceOf(investor)
      const tokenBalance = await mockToken.balanceOf(investor)

      expect(userBalance).to.bignumber.equal(initialUserBalance.sub(withdrawalSize))
      expect(underlyingBalance).to.bignumber.equal(initialUnderlyingBalance.sub(withdrawalSize.muln(11).divn(10)))
      expect(tokenBalance).to.bignumber.equal(initialTokenBalance.add(withdrawalSize.muln(11).divn(10)))
      truffleAssert.eventEmitted(tx, 'Withdrawn', (ev) => (
        ev.account === investor && ev.tokenAmount.eq(withdrawalSize.muln(11).divn(10)) && ev.sharkTokenAmount.eq(withdrawalSize)
      ))
    })

    it('exchange rate does not change on initial withdrawal', async () => {
      // given
      const initialExchangeRate = await sharkToken.exchangeRate()
      const withdrawalSize = web3.utils.toBN(web3.utils.toWei('1'))

      // when
      await sharkToken.withdraw(withdrawalSize, { from: investor })

      // then
      expect(await sharkToken.exchangeRate()).to.bignumber.equal(initialExchangeRate)
    })

    it('exchange rate does not change on withdrawal after profit', async () => {
      // given
      const profitSize = web3.utils.toBN(web3.utils.toWei('1'))
      await mockToken.transfer(sharkToken.address, profitSize, { from: admin })

      const withdrawalSize = profitSize
      const initialExchangeRate = await sharkToken.exchangeRate()

      // when
      await sharkToken.withdraw(withdrawalSize, { from: investor })

      // then
      expect(await sharkToken.exchangeRate()).to.bignumber.equal(initialExchangeRate)
    })
  })

  describe('Exchange rate', () => {
    beforeEach(async () => {
      await mockToken.approve(sharkToken.address, '-1', { from: investor })
      await sharkToken.deposit(web3.utils.toBN(web3.utils.toWei('10')), { from: investor })
    })

    it('updates exchange rate after profit', async () => {
      // given
      const initialExchangeRate = await sharkToken.exchangeRate()
      const initialSharkTokenSupply = await sharkToken.totalSupply()
      const initialUnderlyingTokenSupply = await sharkToken.underlyingSupply()
      const initialSharkTokenBalance = await sharkToken.balanceOf(investor)
      const initialUnderlyingTokenBalance = await sharkToken.underlyingBalanceOf(investor)
      const profitSize = web3.utils.toBN(web3.utils.toWei('1'))

      // when
      await mockToken.transfer(sharkToken.address, profitSize, { from: admin })

      // then
      const exchangeRate = await sharkToken.exchangeRate()
      const sharkTokenSupply = await sharkToken.totalSupply()
      const underlyingTokenSupply = await sharkToken.underlyingSupply()
      const sharkTokenBalance = await sharkToken.balanceOf(investor)
      const underlyingTokenBalance = await sharkToken.underlyingBalanceOf(investor)

      expect(exchangeRate).to.bignumber.equal(initialExchangeRate.muln(11).divn(10))
      expect(sharkTokenSupply).to.bignumber.equal(initialSharkTokenSupply)
      expect(underlyingTokenSupply).to.bignumber.equal(initialUnderlyingTokenSupply.muln(11).divn(10))
      expect(sharkTokenBalance).to.bignumber.equal(initialSharkTokenBalance)
      expect(underlyingTokenBalance).to.bignumber.equal(initialUnderlyingTokenBalance.muln(11).divn(10))
    })
  })
})
