
pragma solidity ^0.6.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol";
import "openzeppelin-solidity/contracts/utils/ReentrancyGuard.sol";
import "./lib/DSAuth.sol";
import "./lib/DSMath.sol";

contract SharkToken is ERC20, DSAuth, DSMath, ReentrancyGuard {
    uint256 public constant UINT_MAX_VALUE = uint256(-1);

    IERC20 public underlying;

    constructor(
        string memory name,
        string memory symbol,
        IERC20 _underlying
    ) ERC20(name, symbol) public {
        underlying = _underlying;
    }
}
