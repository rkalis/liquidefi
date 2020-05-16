pragma solidity ^0.6.0;

import "./DyDx.sol";
import "./Structs.sol";
import "./lib/dappsys/DSAuth.sol";

contract DyDxBorrow is Structs {

address internal soloMarginAddress;
mapping(address => uint256) internal tokenAddressToMarketId;

constructor(address _soloMarginAddress) public {
  soloMarginAddress = _soloMarginAddress;
}

function registerMarketID((uint256 _marketId,address _tokenaddress) external auth {
  tokenAddressToMarketId[tokenAddress] = marketId;
}

function borrow(address _tokenAddress, uint256 _tokenAmount) external {
  Info[] memory infos = new   Info[](1);
  ActionArgs[] memory args = new ActionArgs[](3);
  infos[0] = Info(address(this), 0);
  uint256 tempMarketId = marketIdFromTokenAddress(tokenAddress);

  AssetAmount memory withdrawAmt = AssetAmount(false, AssetDenomination.Wei, AssetReference.Delta, _tokenAmount);
  ActionArgs memory withdraw;
  withdraw.actionType = ActionType.Withdraw;
  withdraw.accountId = 0;
  withdraw.amount = withdrawAmt;
  withdraw.primaryMarketId = tempMarketId;
  withdraw.otherAddress = address(this);

  args[0] = withdraw;

  ActionArgs memory call;
  call.actionType = ActionType.Call;
  call.accountId = 0;
  call.otherAddress = address(this);

  args[1] = call;

  ActionArgs memory deposit;
  AssetAmount memory depositAmt = AssetAmount(true, AssetDenomination.Wei, AssetReference.Delta, _tokenAmount.add(1));
  deposit.actionType = ActionType.Deposit;
  deposit.accountId = 0;
  deposit.amount = depositAmt;
  deposit.primaryMarketId = tempMarketId;
  deposit.otherAddress = address(this);









}

function marketIdFromTokenAddress(address tokenAddress) internal view returns (uint256) {
  return tokenAddressToMarketId[tokenAddress];
}


}
