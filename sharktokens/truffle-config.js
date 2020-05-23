var HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv').config();

const moonmonic = 'myth like bonus scare over problem client lizard pioneer submit female collect'

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
      gas: 10000000
    },
    moonnet: {
      provider: function() {
        return new HDWalletProvider(moonmonic, `https://node.moonnet.space/uuid/${process.env.MOONNET_UUID}`)
      },
      skipDryRun: true,
      network_id: "*"
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(`${process.env.MNEMONIC}`, `https://rinkeby.infura.io/v3/${process.env.INFURA_ID}`)
      },
      network_id: 4,
      gas: 10000000
    },
    kovan: {
      provider: function() {
        return new HDWalletProvider(`${process.env.MNEMONIC}`, `https://kovan.infura.io/v3/${process.env.INFURA_ID}`)
      },
      network_id: 42,
      gas: 10000000
    },
    goerli: {
      provider: function() {
        return new HDWalletProvider(`${process.env.MNEMONIC}`, `https://goerli.infura.io/v3/${process.env.INFURA_ID}`)
      },
      network_id: 5,
      gas: 10000000
    }
  },
  compilers: {
    solc: {
      version: "0.6.0"
    }
  },
  plugins: [
    'truffle-plugin-verify',
    'solidity-coverage'
  ],
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY
  },
  mocha: {
    enableTimeouts: false,
    before_timeout: 1200000 // Here is 2min but can be whatever timeout is suitable for you.
  }
};
