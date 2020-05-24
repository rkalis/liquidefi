pragma solidity ^0.6.0;

interface Iatoken {
  function UINT_MAX_VALUE (  ) external view returns ( uint256 );
  function allowance ( address owner, address spender ) external view returns ( uint256 );
  function approve ( address spender, uint256 value ) external returns ( bool );
  function decimals (  ) external view returns ( uint8 );
  function decreaseAllowance ( address spender, uint256 subtractedValue ) external returns ( bool );
  function increaseAllowance ( address spender, uint256 addedValue ) external returns ( bool );
  function name (  ) external view returns ( string memory );
  function symbol (  ) external view returns ( string memory );
  function transfer ( address recipient, uint256 amount ) external returns ( bool );
  function transferFrom ( address sender, address recipient, uint256 amount ) external returns ( bool );
  function underlyingAssetAddress (  ) external view returns ( address );
  function redirectInterestStream ( address _to ) external;
  function redirectInterestStreamOf ( address _from, address _to ) external;
  function allowInterestRedirectionTo ( address _to ) external;
  function redeem ( uint256 _amount ) external;
  function mintOnDeposit ( address _account, uint256 _amount ) external;
  function burnOnLiquidation ( address _account, uint256 _value ) external;
  function transferOnLiquidation ( address _from, address _to, uint256 _value ) external;
  function balanceOf ( address _user ) external view returns ( uint256 );
  function principalBalanceOf ( address _user ) external view returns ( uint256 );
  function totalSupply (  ) external view returns ( uint256 );
  function isTransferAllowed ( address _user, uint256 _amount ) external view returns ( bool );
  function getUserIndex ( address _user ) external view returns ( uint256 );
  function getInterestRedirectionAddress ( address _user ) external view returns ( address );
  function getRedirectedBalance ( address _user ) external view returns ( uint256 );
}
