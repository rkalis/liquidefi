var HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv').config();

const moonmonic = 'myth like bonus scare over problem client lizard pioneer submit female collect'

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
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
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(`${process.env.MNEMONIC}`, `https://ropsten.infura.io/v3/${process.env.INFURA_ID}`)
      },
      network_id: 3,
      gas: 8000000
    }
  },
  compilers: {
    solc: {
<<<<<<< HEAD
      version: "0.6.2"
=======
      version: "0.6.6"
>>>>>>> f0426c886cceab23ec2fba7d0a55afde47939a9f
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
