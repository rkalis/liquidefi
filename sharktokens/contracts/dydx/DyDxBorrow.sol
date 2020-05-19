pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;

import "./Structs.sol";
import "../lib/dappsys/DSAuth.sol";
import "./ISoloMargin.sol";

contract DyDxBorrow is Structs, DSAuth {

address internal soloMarginAddress;
mapping(address => uint256) internal tokenAddressToMarketId;

constructor(address _soloMarginAddress) public {
  soloMarginAddress = _soloMarginAddress;
}

function registerMarketID(uint256 _marketId,address _tokenAddress) external auth {
  tokenAddressToMarketId[_tokenAddress] = _marketId;
}

function flashborrow(address _tokenAddress, uint256 _tokenAmount) external {

  ISoloMargin solo = ISoloMargin(soloMarginAddress);
  Info[] memory infos = new Info[](1);
  ActionArgs[] memory args = new ActionArgs[](3);
  infos[0] = Info(address(this), 0);
  uint256 tempMarketId = marketIdFromTokenAddress(_tokenAddress);

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
  AssetAmount memory depositAmt = AssetAmount(true, AssetDenomination.Wei, AssetReference.Delta, _tokenAmount);
  deposit.actionType = ActionType.Deposit;
  deposit.accountId = 0;
  deposit.amount = depositAmt;
  deposit.primaryMarketId = tempMarketId;
  deposit.otherAddress = address(this);

  args[2] = deposit;

  solo.operate(infos, args);
}

function marketIdFromTokenAddress(address tokenAddress) internal view returns (uint256) {
  return tokenAddressToMarketId[tokenAddress];
}

}
