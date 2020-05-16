pragma solidity >=0.6.0;

interface IUniswapV1Factory {
    function getExchange(address) external view returns (address);
}
