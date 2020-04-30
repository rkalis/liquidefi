
pragma solidity ^0.6.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/utils/ReentrancyGuard.sol";
import "./lib/DSAuth.sol";
import "./lib/DSMath.sol";

/**
 * @title SharkToken
 * @author LiquiDeFi
 *
 * @notice A SharkToken wraps any ERC20 token and uses the underlying token to
 * liquidate loans on popular lending platforms. The profits of these liquidations
 * are shared among the SharkToken holders.
 */
contract SharkToken is ERC20, DSAuth, DSMath, ReentrancyGuard {
    uint256 public constant UINT_MAX_VALUE = uint256(-1);

    ERC20 public underlying;

    event Deposited(address indexed account, uint256 tokenAmount, uint256 sharkTokenAmount);
    event Withdrawn(address indexed account, uint256 tokenAmount, uint256 sharkTokenAmount);

    constructor(string memory name, string memory symbol, ERC20 _underlying) ERC20(name, symbol) public {
        underlying = _underlying;
    }

    /**
     * @notice Get the supply of underlying tokens inside this contract (i.e. the contract's balance)
     * @return The contract's balance of underlying tokens
     */
    function underlyingSupply() public view returns (uint256) {
        return underlying.balanceOf(address(this));
    }

    /**
     * @notice Get the exchange rate between the underlying token and the SharkToken (Token / shToken)
     * @return The exchange rate (Token / shToken)
     */
    function exchangeRate() public view returns (uint256) {
        return totalSupply() == 0 ? 1 ether : wdiv(underlyingSupply(), totalSupply());
    }

    /**
     * @notice Calculate the amount of SharkTokens equal in value to `amount` underlying tokens
     * @param amount The amount of underlying tokens to convert
     * @return The amount of SharkTokens equal to `amount` underlying tokens
     */
    function toSharkToken(uint256 amount) public view returns (uint256) {
        return wdiv(amount, exchangeRate());
    }

    /**
     * @notice Calculate the amount of underlying tokens equal in value to `amount` SharkTokens
     * @param amount The amount of SharkTokens to convert
     * @return The amount of underlying tokens equal to `amount` SharkTokens
     */
    function fromSharkToken(uint256 amount) public view returns (uint256) {
        return wmul(amount, exchangeRate());
    }

    /**
     * @notice Get the amount of underlying tokens that `account` can receive in exchange for
     * its balance in SharkTokens
     * @param account The account whose balance is checked
     * @return The amount of underlying tokens equal to the SharkToken balance of `account`
     */
    function underlyingBalanceOf(address account) public view returns (uint256) {
        return fromSharkToken(balanceOf(account));
    }

    /**
     * @notice Deposit `amount` of underlying tokens into the liquidation pool. Requires
     * an approval from `msg.sender` to this contract of at least `amount`. Transfers
     * underlying tokens from `msg.sender` to this contract and mints new SharkTokens.
     * @param amount The amount of tokens to deposit into the pool
     */
    function deposit(uint256 amount) external nonReentrant {
        uint256 transferAmount = toSharkToken(amount);(amount);
        _mint(msg.sender, transferAmount);
        underlying.transferFrom(msg.sender, address(this), amount);
        emit Deposited(msg.sender, amount, transferAmount);
    }

    /**
     * @notice Withdraw `amount` of SharkTokens from the liquidation pool. Transfers
     * underlying tokens from this contract to `msg.sender` and burns SharkTokens.
     * @param amount The amount of SharkTokens to withdraw from the pool
     */
    function withdraw(uint256 amount) external nonReentrant {
        uint256 transferAmount = fromSharkToken(amount);
        _burn(msg.sender, amount);
        underlying.transfer(msg.sender, transferAmount);
        emit Withdrawn(msg.sender, transferAmount, amount);
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

