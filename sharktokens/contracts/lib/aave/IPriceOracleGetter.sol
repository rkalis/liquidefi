pragma solidity ^0.6.0;

interface IPriceOracleGetter {
    function getAssetPrice(address _asset) external view returns (uint256);
    function getAssetsPrices(address[] calldata _assets) external view returns(uint256[] memory);
    // function getSourceOfAsset(address _asset) external view returns(address);
    // function getFallbackOracle() external view returns(address);
}
