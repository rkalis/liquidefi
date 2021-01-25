const MockToken = artifacts.require('MockToken');
const SharkToken = artifacts.require('SharkToken');

module.exports = async function(deployer) {
  await deployer.deploy(MockToken);
  deployer.deploy(SharkToken, 'Shark MockToken', 'shMCK', MockToken.address);
};