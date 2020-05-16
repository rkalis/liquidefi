pragma solidity ^0.6.0;

import "./DyDx.sol";
import "./Structs.sol";
import "./lib/dappsys/DSAuth.sol";

contract DyDxBorrow {

address internal soloMarginAddress;
mapping(address => uint256) internal tokenAddressToMarketId;

constructor(address _soloMarginAddress) public {
  soloMarginAddress = _soloMarginAddress;
}

function registerMarketID((uint256 marketId,address _tokenaddress) external auth {
  tokenAddressToMarketId[_tokenAddress] = marketId;
}

function borrow(address tokenAddress, uint256 tokenAmount) external {
  Structs.Info[] memory infos = new Structs.Info[](1);
  Structs.ActionArgs[] memory args = new Structs.ActionArgs[](3);
  infos[0] = Structs.Info(address(this), 0);

  ISoloMargin solo = ISoloMargin(_soloMarginAddress);
  Strcuts.ActionArgs[] memory operations = new Structs.ActionArgs[](3);










}




}
