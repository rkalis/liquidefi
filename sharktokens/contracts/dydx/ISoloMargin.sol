pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;

import "./Structs.sol";

abstract contract ISoloMargin {
    function operate(Structs.Info[] memory accounts, Structs.ActionArgs[] memory actions) virtual public;
}
