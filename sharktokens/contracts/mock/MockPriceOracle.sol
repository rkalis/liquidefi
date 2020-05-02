pragma solidity ^0.6.0;

import "../lib/aave/IPriceOracleGetter.sol";

contract MockPriceOracle is IPriceOracleGetter {
    function getAssetPrice(address _asset) public view override returns (uint256) {
        // Crash USDC price
        if (_asset == 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48) {
            return 0.0001 ether;
        }
        return IPriceOracleGetter(0x76B47460d7F7c5222cFb6b6A75615ab10895DDe4).getAssetPrice(_asset);
    }

    function getAssetsPrices(address[] calldata _assets) external view override returns(uint256[] memory) {
        uint256[] memory prices = new uint256[](_assets.length);
        for (uint256 i = 0; i < _assets.length; i++) {
            prices[i] = getAssetPrice(_assets[i]);
        }
        return prices;
    }
}
