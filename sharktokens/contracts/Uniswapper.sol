pragma solidity ^0.6.0;

import "./lib/uniswap/IUniswapFactory.sol";
import "./lib/uniswap/IUniswapExchange.sol";
import "./lib/aave/WadRayMath.sol";
import "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol";

contract Uniswapper {
    using WadRayMath for uint256;

    IUniswapFactory constant uniswapFactory = IUniswapFactory(0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95);

    function _getUniswapExchange(address tokenAddress) internal view returns (IUniswapExchange) {
        return IUniswapExchange(uniswapFactory.getExchange(tokenAddress));
    }

    function _getTokenToEthInputPrice(address tokenAddress, uint256 tokenAmount) internal view returns (uint256) {
        return _getUniswapExchange(tokenAddress).getTokenToEthInputPrice(tokenAmount);
    }

    function _getTokenToEthOutputPrice(address tokenAddress, uint256 ethAmount) internal view returns (uint256) {
        return _getUniswapExchange(tokenAddress).getTokenToEthOutputPrice(ethAmount);
    }

    function _getEthToTokenInputPrice(address tokenAddress, uint256 ethAmount) internal view returns (uint256) {
        return _getUniswapExchange(tokenAddress).getEthToTokenInputPrice(ethAmount);
    }

    function _getEthToTokenOutputPrice(address tokenAddress, uint256 tokenAmount) internal view returns (uint256) {
        return _getUniswapExchange(tokenAddress).getEthToTokenOutputPrice(tokenAmount);
    }

    function _getTokenToTokenInputPrice(address from, address to, uint256 fromAmount) internal view returns (uint256) {
        uint ethAmount = _getTokenToEthInputPrice(from, fromAmount);
        return _getEthToTokenInputPrice(to, ethAmount);
    }

    function _getTokenToTokenOutputPrice(address from, address to, uint256 toAmount) internal view returns (uint256) {
        uint256 ethAmount = _getEthToTokenOutputPrice(to, toAmount);
        return _getTokenToEthOutputPrice(from, ethAmount);
    }

    function _swapEthToTokenInput(address tokenAddress, uint256 sellAmount) internal returns (uint256) {
        return _getUniswapExchange(tokenAddress)
            .ethToTokenSwapInput{value: sellAmount}(uint256(1), uint256(now + 60));
    }

    function _swapEthToTokenOutput(address tokenAddress, uint256 buyAmount) internal returns (uint256) {
        uint256 ethValue = _getEthToTokenOutputPrice(tokenAddress, buyAmount).wadMul(1.1 ether);
        return _getUniswapExchange(tokenAddress)
            .ethToTokenSwapOutput{value: ethValue}(buyAmount, uint256(now + 60));
    }

    function _swapTokenToEthInput(address tokenAddress, uint256 sellAmount) internal returns (uint256) {
        IUniswapExchange exchange = _getUniswapExchange(tokenAddress);
        IERC20(tokenAddress).approve(address(exchange), sellAmount);
        return exchange.tokenToEthSwapInput(sellAmount, uint256(1), uint256(now + 60));
    }

    function _swapTokenToEthOutput(address tokenAddress, uint256 buyAmount) internal returns (uint256) {
        IUniswapExchange exchange = _getUniswapExchange(tokenAddress);
        uint256 approvalAmount = _getTokenToEthOutputPrice(tokenAddress, buyAmount).wadMul(1.1 ether);
        IERC20(tokenAddress).approve(address(exchange), approvalAmount);
        return exchange.tokenToEthSwapOutput(buyAmount, approvalAmount, uint256(now + 60));
    }

    function _swapTokenToTokenInput(address from, address to, uint256 sellAmount) internal returns (uint256) {
        IUniswapExchange exchange = _getUniswapExchange(from);
        IERC20(from).approve(address(exchange), sellAmount);
        return exchange.tokenToTokenSwapInput(sellAmount, uint256(1), uint256(1), uint256(now + 60), to);
    }

    function _swapTokenToTokenOutput(address from, address to, uint256 buyAmount) internal returns (uint256) {
        IUniswapExchange exchange = _getUniswapExchange(from);
        uint256 approvalAmount = _getTokenToTokenOutputPrice(from, to, buyAmount).wadMul(1.1 ether);
        IERC20(from).approve(address(exchange), approvalAmount);
        return exchange.tokenToTokenSwapInput(buyAmount, approvalAmount, uint256(-1), uint256(now + 60), to);
    }
}
