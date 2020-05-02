const IERC20 = artifacts.require('IERC20')
const { DAI_ADDRESS, DAI_MINTER } = require('./fixture/addresses')

async function mintDAI(to, amount) {
  await web3.eth.sendTransaction({ from: to, to: DAI_MINTER, value: web3.utils.toBN(web3.utils.toWei('0.1')) });
  const dai = await IERC20.at(DAI_ADDRESS)
  await dai.transfer(to, web3.utils.toBN(web3.utils.toWei(amount)), { from: DAI_MINTER })
}

module.exports = {
  mintDAI
}
