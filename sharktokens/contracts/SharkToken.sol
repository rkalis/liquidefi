
pragma solidity ^0.6.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/utils/ReentrancyGuard.sol";
import "./lib/DSAuth.sol";
import "./lib/DSMath.sol";

contract SharkToken is ERC20, DSAuth, DSMath, ReentrancyGuard {
    uint256 public constant UINT_MAX_VALUE = uint256(-1);

    ERC20 public underlying;

    constructor(
        string memory name,
        string memory symbol,
        ERC20 _underlying
    ) ERC20(name, symbol) public {
        underlying = _underlying;
    }

    // Supply of the underlying asset
    function underlyingSupply() public view returns (uint256) {
        return underlying.balanceOf(address(this));
    }

    // Exchange rate Token/shToken
    function exchangeRate() public view returns (uint256) {
        return wdiv(underlyingSupply(), totalSupply());
    }

    // Exchange `tokenAmount` from tokens to shark tokens
    function toSharkToken(uint256 tokenAmount) public view returns (uint256) {
        return wdiv(tokenAmount, exchangeRate());
    }

    // Exchange `sharkTokenAmount` from shark tokens to tokens
    function fromSharkToken(uint256 sharkTokenAmount) public view returns (uint256) {
        return wmul(sharkTokenAmount, exchangeRate());
    }

    // Join the shark token pool with `amount` of tokens
    // Requires APPROVAL
    function join(uint256 amount) external nonReentrant {
        _mint(msg.sender, toSharkToken(amount));
        underlying.transferFrom(msg.sender, address(this), amount);
    }

    // Exit the shark token pool with `amount` of shark tokens
    function exit(uint256 amount) external nonReentrant {
        _burn(msg.sender, amount);
        underlying.transfer(msg.sender, fromSharkToken(amount));
    }
}

// Aave liquidation stuff (from Aave docs example)
// /// Retrieve the LendingPool address
// LendingPoolAddressesProvider provider = LendingPoolAddressesProvider("0x24a42fD28C976A61Df5D00D0599C34c4f90748c8"); // mainnet address, for other addresses: https://docs.aave.com/developers/developing-on-aave/deployed-contract-instances
// LendingPool lendingPool = LendingPool(provider.getLendingPool());
// ​
// /// Input variables
// address collateralAddress = /*collateral_address*/;
// address daiAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F"; // mainnet
// address userAddress = /*user_address_being_liquidated*/;
// uint256 purchaseAmount = 100 * 1e18;
// bool receiveATokens = true;
// ​
// /// Approve LendingPool contract to move your DAI
// IERC20(daiAddress).approve(provider.getLendingPoolCore(), purchaseAmount);
// ​
// /// LiquidationCall method call
// lendingPool.liquidationCall(
//     collateralAddress,
//     daiAddress,
//     userAddress,
//     purchaseAmount,
//     receiveATokens
// );

