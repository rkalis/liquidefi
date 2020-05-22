pragma solidity ^0.6.0;

import "./lib/uniswap/IUniswapFactory.sol";
import "./lib/uniswap/IUniswapExchange.sol";
import "./lib/uniswap/IUniswapRouter.sol";
import "./lib/aave/WadRayMath.sol";
import "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol";

contract UniswapperV2 {
    using WadRayMath for uint256;

    IUniswapRouter constant router = IUniswapRouter(0xf164fC0Ec4E93095b804a4795bBe1e041497b92a);

    function _swapEthToTokenInputV2(address tokenAddress, uint256 ethAmount) internal returns (uint256[] memory) {
        address[] memory path = new address[](2);
        path[0] = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;
        path[1] = tokenAddress;
        return router.swapExactETHForTokens.value(ethAmount)(uint256(1), path, address(this), uint256(-1));
    }

    function _swapTokenToTokenInputV2(address from, address to, uint256 sellAmount) internal returns (uint256[] memory) {
        address[] memory path = new address[](2);
        path[0] = from;
        path[1] = to;
        IERC20(from).approve(address(router), sellAmount);
        return router.swapExactTokensForTokens(sellAmount, uint256(1), path, address(this), uint256(-1));
    }
}
