pragma solidity ^0.6.0;

import "../lib/aave/IPriceOracleGetter.sol";

contract MockPriceOracle is IPriceOracleGetter {
    address public crashedAsset;
    uint256 public crashedPrice;

    function getAssetPrice(address _asset) public view override returns (uint256) {
        if (_asset == crashedAsset) return crashedPrice;
        return IPriceOracleGetter(0x76B47460d7F7c5222cFb6b6A75615ab10895DDe4).getAssetPrice(_asset);
    }

    function getAssetsPrices(address[] calldata _assets) external view override returns(uint256[] memory) {
        uint256[] memory prices = new uint256[](_assets.length);
        for (uint256 i = 0; i < _assets.length; i++) {
            prices[i] = getAssetPrice(_assets[i]);
        }
        return prices;
    }

    // Change the crashed asset
    function crashAsset(address _asset, uint256 _price) public {
        crashedAsset = _asset;
        crashedPrice = _price;
    }
}
