pragma solidity ^0.6.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol";
import "openzeppelin-solidity/contracts/utils/ReentrancyGuard.sol";
import "./lib/dappsys/DSAuth.sol";
import "./lib/aave/ILendingPoolAddressesProvider.sol";
import "./lib/aave/ILendingPool.sol";
import "./lib/aave/WadRayMath.sol";
import "./Uniswapper.sol";
import './interfaces/IWETH.sol';
import './interfaces/IUniswapV2Router01.sol';

/**
 * @title SharkToken
 * @author LiquiDeFi
 *
 * @notice A SharkToken wraps any ERC20 token and uses the underlying token to
 * liquidate loans on popular lending platforms. The profits of these liquidations
 * are shared among the SharkToken holders.
 */
contract SharkToken is ERC20, DSAuth, ReentrancyGuard, Uniswapper {
    uint256 public constant UINT_MAX_VALUE = uint256(-1);
    address public constant ETH_MOCK_ADDRESS = 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE;

    using WadRayMath for uint256;

    ILendingPoolAddressesProvider private aaveAddressProvider = ILendingPoolAddressesProvider(0x24a42fD28C976A61Df5D00D0599C34c4f90748c8);
    IERC20 public underlying;

    address immutable factory;
    IWETH immutable WETH;

    event Deposited(address indexed account, uint256 tokenAmount, uint256 sharkTokenAmount);
    event Withdrawn(address indexed account, uint256 tokenAmount, uint256 sharkTokenAmount);
    event Liquidated(bytes4 indexed platform, address liquidatedUser, uint256 profit);

    constructor(string memory name, string memory symbol, IERC20 _underlying,address _factory, address router) ERC20(name, symbol) public {
        underlying = _underlying;
        factory = _factory;
        WETH = IWETH(IUniswapV2Router01(router).WETH());
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
     * @return The exchange rate (Token / shToken) in RAY (27 decimals)
     */
    function exchangeRate() public view returns (uint256) {
        if (totalSupply() == 0) return 1e27;
        return underlyingSupply().wadToRay()
            .rayDiv(totalSupply().wadToRay());
    }

    /**
     * @notice Calculate the amount of SharkTokens equal in value to `amount` underlying tokens
     * @param amount The amount of underlying tokens to convert
     * @return The amount of SharkTokens equal to `amount` underlying tokens
     */
    function toSharkToken(uint256 amount) public view returns (uint256) {
        uint256 rayAmount = amount.wadToRay();
        uint256 rayResult = rayAmount.rayDiv(exchangeRate());
        return rayResult.rayToWad();
    }

    /**
     * @notice Calculate the amount of underlying tokens equal in value to `amount` SharkTokens
     * @param amount The amount of SharkTokens to convert
     * @return The amount of underlying tokens equal to `amount` SharkTokens
     */
    function fromSharkToken(uint256 amount) public view returns (uint256) {
        uint256 rayAmount = amount.wadToRay();
        uint256 rayResult = rayAmount.rayMul(exchangeRate());
        return rayResult.rayToWad();
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
        uint256 mintAmount = toSharkToken(amount);
        _mint(msg.sender, mintAmount);
        underlying.transferFrom(msg.sender, address(this), amount);
        emit Deposited(msg.sender, amount, mintAmount);
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

    /**
     * @notice Liquidate a loan on Aave.
     * @param collateralAddress The address of the collateral token
     * @param userAddress The address of the user that gets liquidated
     * @param purchaseAmount The amount of underlying tokens to use in the liquidation
     */
    function liquidateOnAave(
        address collateralAddress,
        address userAddress,
        uint256 purchaseAmount
    ) external auth nonReentrant {
        uint256 initialSupply = underlyingSupply();

        // Liquidate on Aave
        ILendingPool lendingPool = ILendingPool(aaveAddressProvider.getLendingPool());
        underlying.approve(aaveAddressProvider.getLendingPoolCore(), purchaseAmount);
        lendingPool.liquidationCall(
            collateralAddress,
            address(underlying),
            userAddress,
            purchaseAmount,
            false
        );

        // Swap received collateral back to underlying token
        if (collateralAddress == ETH_MOCK_ADDRESS) {
            _swapEthToTokenInput(address(underlying), address(this).balance);
        } else {
            uint256 swapAmount = IERC20(collateralAddress).balanceOf(address(this));
            _swapTokenToTokenInput(collateralAddress, address(underlying), swapAmount);
        }

        // TODO: Take platform fee

        require(underlyingSupply() >= initialSupply, "Need to make a profit");
        emit Liquidated(bytes4(0), userAddress, underlyingSupply() - initialSupply);
    }
}
