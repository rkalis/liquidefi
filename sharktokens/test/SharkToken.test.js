/* global web3, artifacts, contract, before */
const SharkToken = artifacts.require('SharkToken')
const TestToken = artifacts.require('TestToken')
const { assert } = require("chai")
const truffleAssert = require('truffle-assertions')

contract('SharkToken', (accounts) => {
  const admin = accounts[0]
  const investor = accounts[1]

  let testToken
  let sharkToken

  before(async () => {
    testToken = await TestToken.new()
    sharkToken = await SharkToken.new('Shark TestToken', 'shTT', testToken.address)
  })

  it('set up correctly', () => {
    console.log(testToken.address)
    console.log(sharkToken.address)
  })
})
