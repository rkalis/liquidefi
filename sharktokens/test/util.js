const IERC20 = artifacts.require('IERC20')
const { DAI_ADDRESS, USDC_ADDRESS, MINTER } = require('./fixture/addresses')

async function mintDAI(to, amount) {
  const dai = await IERC20.at(DAI_ADDRESS)
  await dai.transfer(to, web3.utils.toBN(web3.utils.toWei(amount)), { from: MINTER })
}

async function mintUSDC(to, amount) {
  const usdc = await IERC20.at(USDC_ADDRESS)
  await usdc.transfer(to, web3.utils.toBN(amount).muln(1000000), { from: MINTER })
}

module.exports = {
  mintDAI,
  mintUSDC
}
