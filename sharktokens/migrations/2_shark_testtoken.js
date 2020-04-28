const TestToken = artifacts.require('TestToken');
const SharkToken = artifacts.require('SharkToken');

module.exports = async function(deployer) {
  await deployer.deploy(TestToken);
  deployer.deploy(SharkToken, 'Shark TestToken', 'shTT', TestToken.address);
};
