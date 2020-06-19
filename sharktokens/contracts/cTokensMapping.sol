pragma solidity ^0.6.0;

contract cTokensMapping {
  mapping(address => address) public cTokenMapping;

  constructor() public {
    cTokenMapping[0x0000000000000000000000000000000000000000] = 0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5; // ETH
    cTokenMapping[0x6b175474e89094c44da98b954eedeac495271d0f] = 0x5d3a536e4d6dbd6114cc1ead35777bab948e3643; // DAI
    cTokenMapping[0x0d8775f648430679a709e98d2b0cb6250d2887ef] = 0x6c8c6b02e7b2be14d4fa6022dfd6d75921d90e4e; // BAT
    cTokenMapping[0x1985365e9f78359a9B6AD760e32412f4a445E862] = 0x158079ee67fce2f58472a96584a73c7ab9ac95c1; // REP
    cTokenMapping[0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359] = 0xf5dce57282a584d2746faf1593d3121fcac444dc; // SAI
    cTokenMapping[0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48] = 0x39aa39c021dfbae8fac545936693ac917d5e7563; // USDC
    cTokenMapping[0xdac17f958d2ee523a2206206994597c13d831ec7] = 0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9; // USDT
    cTokenMapping[0x2260fac5e5542a773aa44fbcfedf7c193bc2c599] = 0xc11b1268c1a384e55c48c2391d8d480264a3a7f4; // wBTC
    cTokenMapping[0xe41d2489571d322189246dafa5ebde1f4699f498] = 0xb3319f5d18bc0d84dd1b4825dcde5d5f7266d407; // ZRX
  }
}