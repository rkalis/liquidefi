/*
for local deployment only;
To-Do make mockatoken
pass it as parameter while deploying sharktoken

const MockToken = artifacts.require('MockToken');
const SharkToken = artifacts.require('SharkToken');

module.exports = async function(deployer) {
  await deployer.deploy(MockToken);
  deployer.deploy(SharkToken, 'Shark MockToken', 'shMCK', MockToken.address);
};
*/

//public testnet deployment
const SharkToken = artifacts.require('SharkToken');
const underlyingaddress = '';
const daiaddress = '';

module.exports = async function(deployer) {
  deployer.deploy(SharkToken, 'SharkToken', 'shMCK',
  web3.utils.toChecksumAddress(underlyingaddress),
  web3.utils.toChecksumAddress(daiaddress));
};


