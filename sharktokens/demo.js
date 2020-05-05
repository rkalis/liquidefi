const { contract, web3 } = require('@openzeppelin/test-environment');
const SharkToken = contract.fromArtifact('SharkToken')
const IERC20 = contract.fromArtifact('IERC20')
const delay = require('delay')
const { createLoan, repayLoan, replacePriceOracle, crashAsset } = require('./test/fixture/fixture')
const { DAI_ADDRESS, USDC_ADDRESS, MOONNET_ACCOUNTS, ZERO_ADDRESS } = require('./test/fixture/addresses')
const { mintDAI } = require('./test/util')

describe('Week 2 Demo', () => {
  const [admin, investor, target] = MOONNET_ACCOUNTS

  let sharkToken
  let daiToken

  it('Connected with contracts', async () => {
    sharkToken = await SharkToken.new('Shark Dai', 'shDAI', DAI_ADDRESS, { from: admin })
    daiToken = await IERC20.at(DAI_ADDRESS)

    console.log(`    DAI Address: ${daiToken.address}`)
    console.log(`    sharkDAI Address: ${sharkToken.address}`)
  })

  it('Introduced participants', async () => {
    await delay(2000)
    console.log(`    Liquidation bot: ${admin}`)
    console.log(`    sharkDAI investor: ${investor}`)
    console.log(`    Liquidation target: ${target}`)
  })

  it('Birth of a shark', async() => {
    await delay(2000)
    await mintDAI(investor, '1000')
    console.log(`    Investor has ${web3.utils.fromWei(await daiToken.balanceOf(investor))} DAI`)
    console.log('    Investor turns 100 DAI into sharkDAI to rek some noobs')
    await daiToken.approve(sharkToken.address, '-1', { from: investor })
    await sharkToken.deposit(web3.utils.toWei('100'), { from: investor })
  })

  it('Financial prudence', async () => {
    await delay(2000)
    console.log(`    Target deposits 100 USDC into Aave and borrows 50 DAI`)
    await createLoan(target)
    console.log('    Blows it all on ice cream')
  })

  it('Black Thursday', async () => {
    await delay(2000)
    console.log(`    OH NO FLASH CRASH! USDC price drops by 50%!`)
    await replacePriceOracle()
    await crashAsset(USDC_ADDRESS, 0.5)
  })

  it('Get rekt ice cream boy', async () => {
    await delay(2000)
    console.log(`    Bot capitalises on this great opportunity`)
    const amount = web3.utils.toBN(web3.utils.toWei('50'))
    await sharkToken.liquidateOnAave(USDC_ADDRESS, target, amount, { from: admin })
  })

  it('Scrooge McDuck', async () => {
    await delay(2000)
    console.log(`    Investor reaps the profits and turns his 100 sharkDAI back into DAI`)
    await sharkToken.withdraw(web3.utils.toWei('100'), { from: investor })
    console.log(`    Investor now has ${web3.utils.fromWei(await daiToken.balanceOf(investor))} DAI`)
  })

  it('Aftermath', async () => {
    await delay(2000)
    console.log('    USDC price recovers')
    await crashAsset(ZERO_ADDRESS)
    console.log('    Target repays remainder of the loan')
    await repayLoan(target)
  })
})
