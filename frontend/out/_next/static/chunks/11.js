(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/@ledgerhq/errors/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@ledgerhq/errors/dist/index.js ***!
  \*****************************************************/
/*! exports provided: AccountNameRequiredError, AccountNotSupported, AmountRequired, BluetoothRequired, BtcUnmatchedApp, CantOpenDevice, CantScanQRCode, CashAddrNotSupported, CurrencyNotSupported, DBNotReset, DBWrongPassword, DeviceAppVerifyNotSupported, DeviceGenuineSocketEarlyClose, DeviceHalted, DeviceInOSUExpected, DeviceNameInvalid, DeviceNotGenuineError, DeviceOnDashboardExpected, DeviceOnDashboardUnexpected, DeviceShouldStayInApp, DeviceSocketFail, DeviceSocketNoBulkStatus, DisconnectedDevice, DisconnectedDeviceDuringOperation, ETHAddressNonEIP, EnpointConfigError, EthAppPleaseEnableContractData, FeeEstimationFailed, FeeNotLoaded, FeeRequired, FeeTooHigh, FirmwareNotRecognized, FirmwareOrAppUpdateRequired, GasLessThanEstimate, GenuineCheckFailed, HardResetFail, InvalidAddress, InvalidAddressBecauseDestinationIsAlsoSource, InvalidXRPTag, LatestMCUInstalledError, LedgerAPI4xx, LedgerAPI5xx, LedgerAPIError, LedgerAPIErrorWithMessage, LedgerAPINotAvailable, MCUNotGenuineToDashboard, ManagerAppAlreadyInstalledError, ManagerAppDepInstallRequired, ManagerAppDepUninstallRequired, ManagerAppRelyOnBTCError, ManagerDeviceLockedError, ManagerFirmwareNotEnoughSpaceError, ManagerNotEnoughSpaceError, ManagerUninstallBTCDep, NetworkDown, NoAccessToCamera, NoAddressesFound, NoDBPathGiven, NotEnoughBalance, NotEnoughBalanceBecauseDestinationNotCreated, NotEnoughBalanceInParentAccount, NotEnoughBalanceToDelegate, NotEnoughGas, NotEnoughSpendableBalance, NotSupportedLegacyAddress, PairingFailed, PasswordIncorrectError, PasswordsDontMatchError, RecipientRequired, RecommendSubAccountsToEmpty, RecommendUndelegation, StatusCodes, SyncError, TimeoutTagged, TransportError, TransportInterfaceNotAvailable, TransportOpenUserCancelled, TransportRaceCondition, TransportStatusError, TransportWebUSBGestureRequired, UnavailableTezosOriginatedAccountReceive, UnavailableTezosOriginatedAccountSend, UnexpectedBootloader, UnknownMCU, UpdateFetchFileFail, UpdateIncorrectHash, UpdateIncorrectSig, UpdateYourApp, UserRefusedAddress, UserRefusedAllowManager, UserRefusedDeviceNameChange, UserRefusedFirmwareUpdate, UserRefusedOnDevice, WebsocketConnectionError, WebsocketConnectionFailed, WrongAppForCurrency, WrongDeviceForAccount, addCustomErrorDeserializer, createCustomErrorClass, deserializeError, getAltStatusMessage, serializeError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountNameRequiredError", function() { return AccountNameRequiredError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountNotSupported", function() { return AccountNotSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmountRequired", function() { return AmountRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluetoothRequired", function() { return BluetoothRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtcUnmatchedApp", function() { return BtcUnmatchedApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CantOpenDevice", function() { return CantOpenDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CantScanQRCode", function() { return CantScanQRCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashAddrNotSupported", function() { return CashAddrNotSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyNotSupported", function() { return CurrencyNotSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DBNotReset", function() { return DBNotReset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DBWrongPassword", function() { return DBWrongPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceAppVerifyNotSupported", function() { return DeviceAppVerifyNotSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceGenuineSocketEarlyClose", function() { return DeviceGenuineSocketEarlyClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceHalted", function() { return DeviceHalted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceInOSUExpected", function() { return DeviceInOSUExpected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceNameInvalid", function() { return DeviceNameInvalid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceNotGenuineError", function() { return DeviceNotGenuineError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceOnDashboardExpected", function() { return DeviceOnDashboardExpected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceOnDashboardUnexpected", function() { return DeviceOnDashboardUnexpected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceShouldStayInApp", function() { return DeviceShouldStayInApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceSocketFail", function() { return DeviceSocketFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceSocketNoBulkStatus", function() { return DeviceSocketNoBulkStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisconnectedDevice", function() { return DisconnectedDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisconnectedDeviceDuringOperation", function() { return DisconnectedDeviceDuringOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ETHAddressNonEIP", function() { return ETHAddressNonEIP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnpointConfigError", function() { return EnpointConfigError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EthAppPleaseEnableContractData", function() { return EthAppPleaseEnableContractData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeeEstimationFailed", function() { return FeeEstimationFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeeNotLoaded", function() { return FeeNotLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeeRequired", function() { return FeeRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeeTooHigh", function() { return FeeTooHigh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirmwareNotRecognized", function() { return FirmwareNotRecognized; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirmwareOrAppUpdateRequired", function() { return FirmwareOrAppUpdateRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GasLessThanEstimate", function() { return GasLessThanEstimate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenuineCheckFailed", function() { return GenuineCheckFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HardResetFail", function() { return HardResetFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvalidAddress", function() { return InvalidAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvalidAddressBecauseDestinationIsAlsoSource", function() { return InvalidAddressBecauseDestinationIsAlsoSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvalidXRPTag", function() { return InvalidXRPTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestMCUInstalledError", function() { return LatestMCUInstalledError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedgerAPI4xx", function() { return LedgerAPI4xx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedgerAPI5xx", function() { return LedgerAPI5xx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedgerAPIError", function() { return LedgerAPIError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedgerAPIErrorWithMessage", function() { return LedgerAPIErrorWithMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedgerAPINotAvailable", function() { return LedgerAPINotAvailable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MCUNotGenuineToDashboard", function() { return MCUNotGenuineToDashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerAppAlreadyInstalledError", function() { return ManagerAppAlreadyInstalledError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerAppDepInstallRequired", function() { return ManagerAppDepInstallRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerAppDepUninstallRequired", function() { return ManagerAppDepUninstallRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerAppRelyOnBTCError", function() { return ManagerAppRelyOnBTCError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerDeviceLockedError", function() { return ManagerDeviceLockedError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerFirmwareNotEnoughSpaceError", function() { return ManagerFirmwareNotEnoughSpaceError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerNotEnoughSpaceError", function() { return ManagerNotEnoughSpaceError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerUninstallBTCDep", function() { return ManagerUninstallBTCDep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkDown", function() { return NetworkDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoAccessToCamera", function() { return NoAccessToCamera; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoAddressesFound", function() { return NoAddressesFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoDBPathGiven", function() { return NoDBPathGiven; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotEnoughBalance", function() { return NotEnoughBalance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotEnoughBalanceBecauseDestinationNotCreated", function() { return NotEnoughBalanceBecauseDestinationNotCreated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotEnoughBalanceInParentAccount", function() { return NotEnoughBalanceInParentAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotEnoughBalanceToDelegate", function() { return NotEnoughBalanceToDelegate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotEnoughGas", function() { return NotEnoughGas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotEnoughSpendableBalance", function() { return NotEnoughSpendableBalance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotSupportedLegacyAddress", function() { return NotSupportedLegacyAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PairingFailed", function() { return PairingFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordIncorrectError", function() { return PasswordIncorrectError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordsDontMatchError", function() { return PasswordsDontMatchError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipientRequired", function() { return RecipientRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendSubAccountsToEmpty", function() { return RecommendSubAccountsToEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendUndelegation", function() { return RecommendUndelegation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusCodes", function() { return StatusCodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncError", function() { return SyncError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutTagged", function() { return TimeoutTagged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportError", function() { return TransportError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportInterfaceNotAvailable", function() { return TransportInterfaceNotAvailable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportOpenUserCancelled", function() { return TransportOpenUserCancelled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportRaceCondition", function() { return TransportRaceCondition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportStatusError", function() { return TransportStatusError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportWebUSBGestureRequired", function() { return TransportWebUSBGestureRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnavailableTezosOriginatedAccountReceive", function() { return UnavailableTezosOriginatedAccountReceive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnavailableTezosOriginatedAccountSend", function() { return UnavailableTezosOriginatedAccountSend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnexpectedBootloader", function() { return UnexpectedBootloader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnknownMCU", function() { return UnknownMCU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateFetchFileFail", function() { return UpdateFetchFileFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateIncorrectHash", function() { return UpdateIncorrectHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateIncorrectSig", function() { return UpdateIncorrectSig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateYourApp", function() { return UpdateYourApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRefusedAddress", function() { return UserRefusedAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRefusedAllowManager", function() { return UserRefusedAllowManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRefusedDeviceNameChange", function() { return UserRefusedDeviceNameChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRefusedFirmwareUpdate", function() { return UserRefusedFirmwareUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRefusedOnDevice", function() { return UserRefusedOnDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketConnectionError", function() { return WebsocketConnectionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketConnectionFailed", function() { return WebsocketConnectionFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrongAppForCurrency", function() { return WrongAppForCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrongDeviceForAccount", function() { return WrongDeviceForAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCustomErrorDeserializer", function() { return addCustomErrorDeserializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCustomErrorClass", function() { return createCustomErrorClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserializeError", function() { return deserializeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAltStatusMessage", function() { return getAltStatusMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeError", function() { return serializeError; });
/* eslint-disable no-continue */
/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */
var errorClasses = {};
var deserializers = {};
var addCustomErrorDeserializer = function (name, deserializer) {
    deserializers[name] = deserializer;
};
var createCustomErrorClass = function (name) {
    var C = function CustomError(message, fields) {
        Object.assign(this, fields);
        this.name = name;
        this.message = message || name;
        this.stack = new Error().stack;
    };
    C.prototype = new Error();
    errorClasses[name] = C;
    return C;
};
// inspired from https://github.com/programble/errio/blob/master/index.js
var deserializeError = function (object) {
    if (typeof object === "object" && object) {
        try {
            // $FlowFixMe FIXME HACK
            var msg = JSON.parse(object.message);
            if (msg.message && msg.name) {
                object = msg;
            }
        }
        catch (e) {
            // nothing
        }
        var error = void 0;
        if (typeof object.name === "string") {
            var name_1 = object.name;
            var des = deserializers[name_1];
            if (des) {
                error = des(object);
            }
            else {
                var constructor = name_1 === "Error" ? Error : errorClasses[name_1];
                if (!constructor) {
                    console.warn("deserializing an unknown class '" + name_1 + "'");
                    constructor = createCustomErrorClass(name_1);
                }
                error = Object.create(constructor.prototype);
                try {
                    for (var prop in object) {
                        if (object.hasOwnProperty(prop)) {
                            error[prop] = object[prop];
                        }
                    }
                }
                catch (e) {
                    // sometimes setting a property can fail (e.g. .name)
                }
            }
        }
        else {
            error = new Error(object.message);
        }
        if (!error.stack && Error.captureStackTrace) {
            Error.captureStackTrace(error, deserializeError);
        }
        return error;
    }
    return new Error(String(object));
};
// inspired from https://github.com/sindresorhus/serialize-error/blob/master/index.js
var serializeError = function (value) {
    if (!value)
        return value;
    if (typeof value === "object") {
        return destroyCircular(value, []);
    }
    if (typeof value === "function") {
        return "[Function: " + (value.name || "anonymous") + "]";
    }
    return value;
};
// https://www.npmjs.com/package/destroy-circular
function destroyCircular(from, seen) {
    var to = {};
    seen.push(from);
    for (var _i = 0, _a = Object.keys(from); _i < _a.length; _i++) {
        var key = _a[_i];
        var value = from[key];
        if (typeof value === "function") {
            continue;
        }
        if (!value || typeof value !== "object") {
            to[key] = value;
            continue;
        }
        if (seen.indexOf(from[key]) === -1) {
            to[key] = destroyCircular(from[key], seen.slice(0));
            continue;
        }
        to[key] = "[Circular]";
    }
    if (typeof from.name === "string") {
        to.name = from.name;
    }
    if (typeof from.message === "string") {
        to.message = from.message;
    }
    if (typeof from.stack === "string") {
        to.stack = from.stack;
    }
    return to;
}

var AccountNameRequiredError = createCustomErrorClass("AccountNameRequired");
var AccountNotSupported = createCustomErrorClass("AccountNotSupported");
var AmountRequired = createCustomErrorClass("AmountRequired");
var BluetoothRequired = createCustomErrorClass("BluetoothRequired");
var BtcUnmatchedApp = createCustomErrorClass("BtcUnmatchedApp");
var CantOpenDevice = createCustomErrorClass("CantOpenDevice");
var CashAddrNotSupported = createCustomErrorClass("CashAddrNotSupported");
var CurrencyNotSupported = createCustomErrorClass("CurrencyNotSupported");
var DeviceAppVerifyNotSupported = createCustomErrorClass("DeviceAppVerifyNotSupported");
var DeviceGenuineSocketEarlyClose = createCustomErrorClass("DeviceGenuineSocketEarlyClose");
var DeviceNotGenuineError = createCustomErrorClass("DeviceNotGenuine");
var DeviceOnDashboardExpected = createCustomErrorClass("DeviceOnDashboardExpected");
var DeviceOnDashboardUnexpected = createCustomErrorClass("DeviceOnDashboardUnexpected");
var DeviceInOSUExpected = createCustomErrorClass("DeviceInOSUExpected");
var DeviceHalted = createCustomErrorClass("DeviceHalted");
var DeviceNameInvalid = createCustomErrorClass("DeviceNameInvalid");
var DeviceSocketFail = createCustomErrorClass("DeviceSocketFail");
var DeviceSocketNoBulkStatus = createCustomErrorClass("DeviceSocketNoBulkStatus");
var DisconnectedDevice = createCustomErrorClass("DisconnectedDevice");
var DisconnectedDeviceDuringOperation = createCustomErrorClass("DisconnectedDeviceDuringOperation");
var EnpointConfigError = createCustomErrorClass("EnpointConfig");
var EthAppPleaseEnableContractData = createCustomErrorClass("EthAppPleaseEnableContractData");
var FeeEstimationFailed = createCustomErrorClass("FeeEstimationFailed");
var FirmwareNotRecognized = createCustomErrorClass("FirmwareNotRecognized");
var HardResetFail = createCustomErrorClass("HardResetFail");
var InvalidXRPTag = createCustomErrorClass("InvalidXRPTag");
var InvalidAddress = createCustomErrorClass("InvalidAddress");
var InvalidAddressBecauseDestinationIsAlsoSource = createCustomErrorClass("InvalidAddressBecauseDestinationIsAlsoSource");
var LatestMCUInstalledError = createCustomErrorClass("LatestMCUInstalledError");
var UnknownMCU = createCustomErrorClass("UnknownMCU");
var LedgerAPIError = createCustomErrorClass("LedgerAPIError");
var LedgerAPIErrorWithMessage = createCustomErrorClass("LedgerAPIErrorWithMessage");
var LedgerAPINotAvailable = createCustomErrorClass("LedgerAPINotAvailable");
var ManagerAppAlreadyInstalledError = createCustomErrorClass("ManagerAppAlreadyInstalled");
var ManagerAppRelyOnBTCError = createCustomErrorClass("ManagerAppRelyOnBTC");
var ManagerAppDepInstallRequired = createCustomErrorClass("ManagerAppDepInstallRequired");
var ManagerAppDepUninstallRequired = createCustomErrorClass("ManagerAppDepUninstallRequired");
var ManagerDeviceLockedError = createCustomErrorClass("ManagerDeviceLocked");
var ManagerFirmwareNotEnoughSpaceError = createCustomErrorClass("ManagerFirmwareNotEnoughSpace");
var ManagerNotEnoughSpaceError = createCustomErrorClass("ManagerNotEnoughSpace");
var ManagerUninstallBTCDep = createCustomErrorClass("ManagerUninstallBTCDep");
var NetworkDown = createCustomErrorClass("NetworkDown");
var NoAddressesFound = createCustomErrorClass("NoAddressesFound");
var NotEnoughBalance = createCustomErrorClass("NotEnoughBalance");
var NotEnoughBalanceToDelegate = createCustomErrorClass("NotEnoughBalanceToDelegate");
var NotEnoughBalanceInParentAccount = createCustomErrorClass("NotEnoughBalanceInParentAccount");
var NotEnoughSpendableBalance = createCustomErrorClass("NotEnoughSpendableBalance");
var NotEnoughBalanceBecauseDestinationNotCreated = createCustomErrorClass("NotEnoughBalanceBecauseDestinationNotCreated");
var NoAccessToCamera = createCustomErrorClass("NoAccessToCamera");
var NotEnoughGas = createCustomErrorClass("NotEnoughGas");
var NotSupportedLegacyAddress = createCustomErrorClass("NotSupportedLegacyAddress");
var GasLessThanEstimate = createCustomErrorClass("GasLessThanEstimate");
var PasswordsDontMatchError = createCustomErrorClass("PasswordsDontMatch");
var PasswordIncorrectError = createCustomErrorClass("PasswordIncorrect");
var RecommendSubAccountsToEmpty = createCustomErrorClass("RecommendSubAccountsToEmpty");
var RecommendUndelegation = createCustomErrorClass("RecommendUndelegation");
var TimeoutTagged = createCustomErrorClass("TimeoutTagged");
var UnexpectedBootloader = createCustomErrorClass("UnexpectedBootloader");
var MCUNotGenuineToDashboard = createCustomErrorClass("MCUNotGenuineToDashboard");
var RecipientRequired = createCustomErrorClass("RecipientRequired");
var UnavailableTezosOriginatedAccountReceive = createCustomErrorClass("UnavailableTezosOriginatedAccountReceive");
var UnavailableTezosOriginatedAccountSend = createCustomErrorClass("UnavailableTezosOriginatedAccountSend");
var UpdateFetchFileFail = createCustomErrorClass("UpdateFetchFileFail");
var UpdateIncorrectHash = createCustomErrorClass("UpdateIncorrectHash");
var UpdateIncorrectSig = createCustomErrorClass("UpdateIncorrectSig");
var UpdateYourApp = createCustomErrorClass("UpdateYourApp");
var UserRefusedDeviceNameChange = createCustomErrorClass("UserRefusedDeviceNameChange");
var UserRefusedAddress = createCustomErrorClass("UserRefusedAddress");
var UserRefusedFirmwareUpdate = createCustomErrorClass("UserRefusedFirmwareUpdate");
var UserRefusedAllowManager = createCustomErrorClass("UserRefusedAllowManager");
var UserRefusedOnDevice = createCustomErrorClass("UserRefusedOnDevice"); // TODO rename because it's just for transaction refusal
var TransportOpenUserCancelled = createCustomErrorClass("TransportOpenUserCancelled");
var TransportInterfaceNotAvailable = createCustomErrorClass("TransportInterfaceNotAvailable");
var TransportRaceCondition = createCustomErrorClass("TransportRaceCondition");
var TransportWebUSBGestureRequired = createCustomErrorClass("TransportWebUSBGestureRequired");
var DeviceShouldStayInApp = createCustomErrorClass("DeviceShouldStayInApp");
var WebsocketConnectionError = createCustomErrorClass("WebsocketConnectionError");
var WebsocketConnectionFailed = createCustomErrorClass("WebsocketConnectionFailed");
var WrongDeviceForAccount = createCustomErrorClass("WrongDeviceForAccount");
var WrongAppForCurrency = createCustomErrorClass("WrongAppForCurrency");
var ETHAddressNonEIP = createCustomErrorClass("ETHAddressNonEIP");
var CantScanQRCode = createCustomErrorClass("CantScanQRCode");
var FeeNotLoaded = createCustomErrorClass("FeeNotLoaded");
var FeeRequired = createCustomErrorClass("FeeRequired");
var FeeTooHigh = createCustomErrorClass("FeeTooHigh");
var SyncError = createCustomErrorClass("SyncError");
var PairingFailed = createCustomErrorClass("PairingFailed");
var GenuineCheckFailed = createCustomErrorClass("GenuineCheckFailed");
var LedgerAPI4xx = createCustomErrorClass("LedgerAPI4xx");
var LedgerAPI5xx = createCustomErrorClass("LedgerAPI5xx");
var FirmwareOrAppUpdateRequired = createCustomErrorClass("FirmwareOrAppUpdateRequired");
// db stuff, no need to translate
var NoDBPathGiven = createCustomErrorClass("NoDBPathGiven");
var DBWrongPassword = createCustomErrorClass("DBWrongPassword");
var DBNotReset = createCustomErrorClass("DBNotReset");
/**
 * TransportError is used for any generic transport errors.
 * e.g. Error thrown when data received by exchanges are incorrect or if exchanged failed to communicate with the device for various reason.
 */
function TransportError(message, id) {
    this.name = "TransportError";
    this.message = message;
    this.stack = new Error().stack;
    this.id = id;
}
TransportError.prototype = new Error();
addCustomErrorDeserializer("TransportError", function (e) { return new TransportError(e.message, e.id); });
var StatusCodes = {
    PIN_REMAINING_ATTEMPTS: 0x63c0,
    INCORRECT_LENGTH: 0x6700,
    MISSING_CRITICAL_PARAMETER: 0x6800,
    COMMAND_INCOMPATIBLE_FILE_STRUCTURE: 0x6981,
    SECURITY_STATUS_NOT_SATISFIED: 0x6982,
    CONDITIONS_OF_USE_NOT_SATISFIED: 0x6985,
    INCORRECT_DATA: 0x6a80,
    NOT_ENOUGH_MEMORY_SPACE: 0x6a84,
    REFERENCED_DATA_NOT_FOUND: 0x6a88,
    FILE_ALREADY_EXISTS: 0x6a89,
    INCORRECT_P1_P2: 0x6b00,
    INS_NOT_SUPPORTED: 0x6d00,
    CLA_NOT_SUPPORTED: 0x6e00,
    TECHNICAL_PROBLEM: 0x6f00,
    OK: 0x9000,
    MEMORY_PROBLEM: 0x9240,
    NO_EF_SELECTED: 0x9400,
    INVALID_OFFSET: 0x9402,
    FILE_NOT_FOUND: 0x9404,
    INCONSISTENT_FILE: 0x9408,
    ALGORITHM_NOT_SUPPORTED: 0x9484,
    INVALID_KCV: 0x9485,
    CODE_NOT_INITIALIZED: 0x9802,
    ACCESS_CONDITION_NOT_FULFILLED: 0x9804,
    CONTRADICTION_SECRET_CODE_STATUS: 0x9808,
    CONTRADICTION_INVALIDATION: 0x9810,
    CODE_BLOCKED: 0x9840,
    MAX_VALUE_REACHED: 0x9850,
    GP_AUTH_FAILED: 0x6300,
    LICENSING: 0x6f42,
    HALTED: 0x6faa,
};
function getAltStatusMessage(code) {
    switch (code) {
        // improve text of most common errors
        case 0x6700:
            return "Incorrect length";
        case 0x6800:
            return "Missing critical parameter";
        case 0x6982:
            return "Security not satisfied (dongle locked or have invalid access rights)";
        case 0x6985:
            return "Condition of use not satisfied (denied by the user?)";
        case 0x6a80:
            return "Invalid data received";
        case 0x6b00:
            return "Invalid parameter received";
    }
    if (0x6f00 <= code && code <= 0x6fff) {
        return "Internal error, please report";
    }
}
/**
 * Error thrown when a device returned a non success status.
 * the error.statusCode is one of the `StatusCodes` exported by this library.
 */
function TransportStatusError(statusCode) {
    this.name = "TransportStatusError";
    var statusText = Object.keys(StatusCodes).find(function (k) { return StatusCodes[k] === statusCode; }) ||
        "UNKNOWN_ERROR";
    var smsg = getAltStatusMessage(statusCode) || statusText;
    var statusCodeStr = statusCode.toString(16);
    this.message = "Ledger device: " + smsg + " (0x" + statusCodeStr + ")";
    this.stack = new Error().stack;
    this.statusCode = statusCode;
    this.statusText = statusText;
}
TransportStatusError.prototype = new Error();
addCustomErrorDeserializer("TransportStatusError", function (e) { return new TransportStatusError(e.statusCode); });




/***/ }),

/***/ "./node_modules/@ledgerhq/hw-transport-u2f/lib-es/TransportU2F.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ledgerhq/hw-transport-u2f/lib-es/TransportU2F.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TransportU2F; });
/* harmony import */ var u2f_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! u2f-api */ "./node_modules/u2f-api/index.js");
/* harmony import */ var u2f_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(u2f_api__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ledgerhq_hw_transport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ledgerhq/hw-transport */ "./node_modules/@ledgerhq/hw-transport/lib-es/Transport.js");
/* harmony import */ var _ledgerhq_logs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ledgerhq/logs */ "./node_modules/@ledgerhq/logs/lib-es/index.js");
/* harmony import */ var _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ledgerhq/errors */ "./node_modules/@ledgerhq/errors/dist/index.js");





function wrapU2FTransportError(originalError, message, id) {
  const err = new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_3__["TransportError"](message, id); // $FlowFixMe

  err.originalError = originalError;
  return err;
}

function wrapApdu(apdu, key) {
  const result = Buffer.alloc(apdu.length);

  for (let i = 0; i < apdu.length; i++) {
    result[i] = apdu[i] ^ key[i % key.length];
  }

  return result;
} // Convert from normal to web-safe, strip trailing "="s


const webSafe64 = base64 => base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); // Convert from web-safe to normal, add trailing "="s


const normal64 = base64 => base64.replace(/-/g, "+").replace(/_/g, "/") + "==".substring(0, 3 * base64.length % 4);

function attemptExchange(apdu, timeoutMillis, scrambleKey, unwrap) {
  const keyHandle = wrapApdu(apdu, scrambleKey);
  const challenge = Buffer.from("0000000000000000000000000000000000000000000000000000000000000000", "hex");
  const signRequest = {
    version: "U2F_V2",
    keyHandle: webSafe64(keyHandle.toString("base64")),
    challenge: webSafe64(challenge.toString("base64")),
    appId: location.origin
  };
  Object(_ledgerhq_logs__WEBPACK_IMPORTED_MODULE_2__["log"])("apdu", "=> " + apdu.toString("hex"));
  return Object(u2f_api__WEBPACK_IMPORTED_MODULE_0__["sign"])(signRequest, timeoutMillis / 1000).then(response => {
    const {
      signatureData
    } = response;

    if (typeof signatureData === "string") {
      const data = Buffer.from(normal64(signatureData), "base64");
      let result;

      if (!unwrap) {
        result = data;
      } else {
        result = data.slice(5);
      }

      Object(_ledgerhq_logs__WEBPACK_IMPORTED_MODULE_2__["log"])("apdu", "<= " + result.toString("hex"));
      return result;
    } else {
      throw response;
    }
  });
}

let transportInstances = [];

function emitDisconnect() {
  transportInstances.forEach(t => t.emit("disconnect"));
  transportInstances = [];
}

function isTimeoutU2FError(u2fError) {
  return u2fError.metaData.code === 5;
}
/**
 * U2F web Transport implementation
 * @example
 * import TransportU2F from "@ledgerhq/hw-transport-u2f";
 * ...
 * TransportU2F.create().then(transport => ...)
 */


class TransportU2F extends _ledgerhq_hw_transport__WEBPACK_IMPORTED_MODULE_1__["default"] {
  /*
   */

  /*
   */

  /**
   * static function to create a new Transport from a connected Ledger device discoverable via U2F (browser support)
   */
  static async open(_, _openTimeout = 5000) {
    return new TransportU2F();
  }

  constructor() {
    super();
    this.scrambleKey = void 0;
    this.unwrap = true;
    transportInstances.push(this);
  }
  /**
   * Exchange with the device using APDU protocol.
   * @param apdu
   * @returns a promise of apdu response
   */


  async exchange(apdu) {
    try {
      return await attemptExchange(apdu, this.exchangeTimeout, this.scrambleKey, this.unwrap);
    } catch (e) {
      const isU2FError = typeof e.metaData === "object";

      if (isU2FError) {
        if (isTimeoutU2FError(e)) {
          emitDisconnect();
        } // the wrapping make error more usable and "printable" to the end user.


        throw wrapU2FTransportError(e, "Failed to sign with Ledger device: U2F " + e.metaData.type, "U2F_" + e.metaData.code);
      } else {
        throw e;
      }
    }
  }
  /**
   */


  setScrambleKey(scrambleKey) {
    this.scrambleKey = Buffer.from(scrambleKey, "ascii");
  }
  /**
   */


  setUnwrap(unwrap) {
    this.unwrap = unwrap;
  }

  close() {
    // u2f have no way to clean things up
    return Promise.resolve();
  }

}
TransportU2F.isSupported = u2f_api__WEBPACK_IMPORTED_MODULE_0__["isSupported"];

TransportU2F.list = () => // this transport is not discoverable but we are going to guess if it is here with isSupported()
Object(u2f_api__WEBPACK_IMPORTED_MODULE_0__["isSupported"])().then(supported => supported ? [null] : []);

TransportU2F.listen = observer => {
  let unsubscribed = false;
  Object(u2f_api__WEBPACK_IMPORTED_MODULE_0__["isSupported"])().then(supported => {
    if (unsubscribed) return;

    if (supported) {
      observer.next({
        type: "add",
        descriptor: null
      });
      observer.complete();
    } else {
      observer.error(new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_3__["TransportError"]("U2F browser support is needed for Ledger. " + "Please use Chrome, Opera or Firefox with a U2F extension. " + "Also make sure you're on an HTTPS connection", "U2FNotSupported"));
    }
  });
  return {
    unsubscribe: () => {
      unsubscribed = true;
    }
  };
};
//# sourceMappingURL=TransportU2F.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/@ledgerhq/hw-transport/lib-es/Transport.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ledgerhq/hw-transport/lib-es/Transport.js ***!
  \*****************************************************************/
/*! exports provided: TransportError, TransportStatusError, StatusCodes, getAltStatusMessage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Transport; });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ledgerhq/errors */ "./node_modules/@ledgerhq/errors/dist/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransportError", function() { return _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["TransportError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransportStatusError", function() { return _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["TransportStatusError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatusCodes", function() { return _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["StatusCodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAltStatusMessage", function() { return _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["getAltStatusMessage"]; });




/**
 */

/**
 * Transport defines the generic interface to share between node/u2f impl
 * A **Descriptor** is a parametric type that is up to be determined for the implementation.
 * it can be for instance an ID, an file path, a URL,...
 */
class Transport {
  constructor() {
    this.exchangeTimeout = 30000;
    this.unresponsiveTimeout = 15000;
    this.deviceModel = null;
    this._events = new events__WEBPACK_IMPORTED_MODULE_0___default.a();

    this.send = async (cla, ins, p1, p2, data = Buffer.alloc(0), statusList = [_ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["StatusCodes"].OK]) => {
      if (data.length >= 256) {
        throw new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["TransportError"]("data.length exceed 256 bytes limit. Got: " + data.length, "DataLengthTooBig");
      }

      const response = await this.exchange(Buffer.concat([Buffer.from([cla, ins, p1, p2]), Buffer.from([data.length]), data]));
      const sw = response.readUInt16BE(response.length - 2);

      if (!statusList.some(s => s === sw)) {
        throw new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["TransportStatusError"](sw);
      }

      return response;
    };

    this.exchangeBusyPromise = void 0;

    this.exchangeAtomicImpl = async f => {
      if (this.exchangeBusyPromise) {
        throw new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["TransportRaceCondition"]("An action was already pending on the Ledger device. Please deny or reconnect.");
      }

      let resolveBusy;
      const busyPromise = new Promise(r => {
        resolveBusy = r;
      });
      this.exchangeBusyPromise = busyPromise;
      let unresponsiveReached = false;
      const timeout = setTimeout(() => {
        unresponsiveReached = true;
        this.emit("unresponsive");
      }, this.unresponsiveTimeout);

      try {
        const res = await f();

        if (unresponsiveReached) {
          this.emit("responsive");
        }

        return res;
      } finally {
        clearTimeout(timeout);
        if (resolveBusy) resolveBusy();
        this.exchangeBusyPromise = null;
      }
    };

    this._appAPIlock = null;
  }

  /**
   * low level api to communicate with the device
   * This method is for implementations to implement but should not be directly called.
   * Instead, the recommanded way is to use send() method
   * @param apdu the data to send
   * @return a Promise of response data
   */
  exchange(_apdu) {
    throw new Error("exchange not implemented");
  }
  /**
   * set the "scramble key" for the next exchanges with the device.
   * Each App can have a different scramble key and they internally will set it at instanciation.
   * @param key the scramble key
   */


  setScrambleKey(_key) {}
  /**
   * close the exchange with the device.
   * @return a Promise that ends when the transport is closed.
   */


  close() {
    return Promise.resolve();
  }

  /**
   * Listen to an event on an instance of transport.
   * Transport implementation can have specific events. Here is the common events:
   * * `"disconnect"` : triggered if Transport is disconnected
   */
  on(eventName, cb) {
    this._events.on(eventName, cb);
  }
  /**
   * Stop listening to an event on an instance of transport.
   */


  off(eventName, cb) {
    this._events.removeListener(eventName, cb);
  }

  emit(event, ...args) {
    this._events.emit(event, ...args);
  }
  /**
   * Enable or not logs of the binary exchange
   */


  setDebugMode() {
    console.warn("setDebugMode is deprecated. use @ledgerhq/logs instead. No logs are emitted in this anymore.");
  }
  /**
   * Set a timeout (in milliseconds) for the exchange call. Only some transport might implement it. (e.g. U2F)
   */


  setExchangeTimeout(exchangeTimeout) {
    this.exchangeTimeout = exchangeTimeout;
  }
  /**
   * Define the delay before emitting "unresponsive" on an exchange that does not respond
   */


  setExchangeUnresponsiveTimeout(unresponsiveTimeout) {
    this.unresponsiveTimeout = unresponsiveTimeout;
  }
  /**
   * wrapper on top of exchange to simplify work of the implementation.
   * @param cla
   * @param ins
   * @param p1
   * @param p2
   * @param data
   * @param statusList is a list of accepted status code (shorts). [0x9000] by default
   * @return a Promise of response buffer
   */


  /**
   * create() allows to open the first descriptor available or
   * throw if there is none or if timeout is reached.
   * This is a light helper, alternative to using listen() and open() (that you may need for any more advanced usecase)
   * @example
  TransportFoo.create().then(transport => ...)
   */
  static create(openTimeout = 3000, listenTimeout) {
    return new Promise((resolve, reject) => {
      let found = false;
      const sub = this.listen({
        next: e => {
          found = true;
          if (sub) sub.unsubscribe();
          if (listenTimeoutId) clearTimeout(listenTimeoutId);
          this.open(e.descriptor, openTimeout).then(resolve, reject);
        },
        error: e => {
          if (listenTimeoutId) clearTimeout(listenTimeoutId);
          reject(e);
        },
        complete: () => {
          if (listenTimeoutId) clearTimeout(listenTimeoutId);

          if (!found) {
            reject(new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["TransportError"](this.ErrorMessage_NoDeviceFound, "NoDeviceFound"));
          }
        }
      });
      const listenTimeoutId = listenTimeout ? setTimeout(() => {
        sub.unsubscribe();
        reject(new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["TransportError"](this.ErrorMessage_ListenTimeout, "ListenTimeout"));
      }, listenTimeout) : null;
    });
  }

  decorateAppAPIMethods(self, methods, scrambleKey) {
    for (let methodName of methods) {
      self[methodName] = this.decorateAppAPIMethod(methodName, self[methodName], self, scrambleKey);
    }
  }

  decorateAppAPIMethod(methodName, f, ctx, scrambleKey) {
    return async (...args) => {
      const {
        _appAPIlock
      } = this;

      if (_appAPIlock) {
        return Promise.reject(new _ledgerhq_errors__WEBPACK_IMPORTED_MODULE_1__["TransportError"]("Ledger Device is busy (lock " + _appAPIlock + ")", "TransportLocked"));
      }

      try {
        this._appAPIlock = methodName;
        this.setScrambleKey(scrambleKey);
        return await f.apply(ctx, args);
      } finally {
        this._appAPIlock = null;
      }
    };
  }

}
Transport.isSupported = void 0;
Transport.list = void 0;
Transport.listen = void 0;
Transport.open = void 0;
Transport.ErrorMessage_ListenTimeout = "No Ledger device found (timeout)";
Transport.ErrorMessage_NoDeviceFound = "No Ledger device found";
//# sourceMappingURL=Transport.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/@ledgerhq/logs/lib-es/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@ledgerhq/logs/lib-es/index.js ***!
  \*****************************************************/
/*! exports provided: log, listen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listen", function() { return listen; });
/**
 * A Log object
 */
let id = 0;
const subscribers = [];
/**
 * log something
 * @param type a namespaced identifier of the log (it is not a level like "debug", "error" but more like "apdu-in", "apdu-out", etc...)
 * @param message a clear message of the log associated to the type
 */

const log = (type, message, data) => {
  const obj = {
    type,
    id: String(++id),
    date: new Date()
  };
  if (message) obj.message = message;
  if (data) obj.data = data;
  dispatch(obj);
};
/**
 * listen to logs.
 * @param cb that is called for each future log() with the Log object
 * @return a function that can be called to unsubscribe the listener
 */

const listen = cb => {
  subscribers.push(cb);
  return () => {
    const i = subscribers.indexOf(cb);

    if (i !== -1) {
      // equivalent of subscribers.splice(i, 1) // https://twitter.com/Rich_Harris/status/1125850391155965952
      subscribers[i] = subscribers[subscribers.length - 1];
      subscribers.pop();
    }
  };
};

function dispatch(log) {
  for (let i = 0; i < subscribers.length; i++) {
    try {
      subscribers[i](log);
    } catch (e) {
      console.error(e);
    }
  }
} // for debug purpose


if (typeof window !== "undefined") {
  window.__ledgerLogsListen = listen;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/u2f-api/index.js":
/*!***************************************!*\
  !*** ./node_modules/u2f-api/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__( /*! ./lib/u2f-api */ "./node_modules/u2f-api/lib/u2f-api.js" );

/***/ }),

/***/ "./node_modules/u2f-api/lib/google-u2f-api.js":
/*!****************************************************!*\
  !*** ./node_modules/u2f-api/lib/google-u2f-api.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright 2014 Google Inc. All rights reserved
//
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file or at
// https://developers.google.com/open-source/licenses/bsd

/**
 * @fileoverview The U2F api.
 */



/** Namespace for the U2F api.
 * @type {Object}
 */
var u2f = u2f || {};

module.exports = u2f; // Adaptation for u2f-api package

/**
 * The U2F extension id
 * @type {string}
 * @const
 */
u2f.EXTENSION_ID = 'kmendfapggjehodndflmmgagdbamhnfd';

/**
 * Message types for messsages to/from the extension
 * @const
 * @enum {string}
 */
u2f.MessageTypes = {
  'U2F_REGISTER_REQUEST': 'u2f_register_request',
  'U2F_SIGN_REQUEST': 'u2f_sign_request',
  'U2F_REGISTER_RESPONSE': 'u2f_register_response',
  'U2F_SIGN_RESPONSE': 'u2f_sign_response'
};

/**
 * Response status codes
 * @const
 * @enum {number}
 */
u2f.ErrorCodes = {
  'OK': 0,
  'OTHER_ERROR': 1,
  'BAD_REQUEST': 2,
  'CONFIGURATION_UNSUPPORTED': 3,
  'DEVICE_INELIGIBLE': 4,
  'TIMEOUT': 5
};

/**
 * A message type for registration requests
 * @typedef {{
 *   type: u2f.MessageTypes,
 *   signRequests: Array.<u2f.SignRequest>,
 *   registerRequests: ?Array.<u2f.RegisterRequest>,
 *   timeoutSeconds: ?number,
 *   requestId: ?number
 * }}
 */
u2f.Request;

/**
 * A message for registration responses
 * @typedef {{
 *   type: u2f.MessageTypes,
 *   responseData: (u2f.Error | u2f.RegisterResponse | u2f.SignResponse),
 *   requestId: ?number
 * }}
 */
u2f.Response;

/**
 * An error object for responses
 * @typedef {{
 *   errorCode: u2f.ErrorCodes,
 *   errorMessage: ?string
 * }}
 */
u2f.Error;

/**
 * Data object for a single sign request.
 * @typedef {{
 *   version: string,
 *   challenge: string,
 *   keyHandle: string,
 *   appId: string
 * }}
 */
u2f.SignRequest;

/**
 * Data object for a sign response.
 * @typedef {{
 *   keyHandle: string,
 *   signatureData: string,
 *   clientData: string
 * }}
 */
u2f.SignResponse;

/**
 * Data object for a registration request.
 * @typedef {{
 *   version: string,
 *   challenge: string,
 *   appId: string
 * }}
 */
u2f.RegisterRequest;

/**
 * Data object for a registration response.
 * @typedef {{
 *   registrationData: string,
 *   clientData: string
 * }}
 */
u2f.RegisterResponse;


// Low level MessagePort API support

/**
 * Call MessagePort disconnect
 */
u2f.disconnect = function() {
  if (u2f.port_ && u2f.port_.port_) {
    u2f.port_.port_.disconnect();
    u2f.port_ = null;
  }
};

/**
 * Sets up a MessagePort to the U2F extension using the
 * available mechanisms.
 * @param {function((MessagePort|u2f.WrappedChromeRuntimePort_))} callback
 */
u2f.getMessagePort = function(callback) {
  if (typeof chrome != 'undefined' && chrome.runtime) {
    // The actual message here does not matter, but we need to get a reply
    // for the callback to run. Thus, send an empty signature request
    // in order to get a failure response.
    var msg = {
      type: u2f.MessageTypes.U2F_SIGN_REQUEST,
      signRequests: []
    };
    chrome.runtime.sendMessage(u2f.EXTENSION_ID, msg, function() {
      if (!chrome.runtime.lastError) {
        // We are on a whitelisted origin and can talk directly
        // with the extension.
        u2f.getChromeRuntimePort_(callback);
      } else {
        // chrome.runtime was available, but we couldn't message
        // the extension directly, use iframe
        u2f.getIframePort_(callback);
      }
    });
  } else {
    // chrome.runtime was not available at all, which is normal
    // when this origin doesn't have access to any extensions.
    u2f.getIframePort_(callback);
  }
};

/**
 * Connects directly to the extension via chrome.runtime.connect
 * @param {function(u2f.WrappedChromeRuntimePort_)} callback
 * @private
 */
u2f.getChromeRuntimePort_ = function(callback) {
  var port = chrome.runtime.connect(u2f.EXTENSION_ID,
    {'includeTlsChannelId': true});
  setTimeout(function() {
    callback(null, new u2f.WrappedChromeRuntimePort_(port));
  }, 0);
};

/**
 * A wrapper for chrome.runtime.Port that is compatible with MessagePort.
 * @param {Port} port
 * @constructor
 * @private
 */
u2f.WrappedChromeRuntimePort_ = function(port) {
  this.port_ = port;
};

/**
 * Posts a message on the underlying channel.
 * @param {Object} message
 */
u2f.WrappedChromeRuntimePort_.prototype.postMessage = function(message) {
  this.port_.postMessage(message);
};

/**
 * Emulates the HTML 5 addEventListener interface. Works only for the
 * onmessage event, which is hooked up to the chrome.runtime.Port.onMessage.
 * @param {string} eventName
 * @param {function({data: Object})} handler
 */
u2f.WrappedChromeRuntimePort_.prototype.addEventListener =
    function(eventName, handler) {
  var name = eventName.toLowerCase();
  if (name == 'message' || name == 'onmessage') {
    this.port_.onMessage.addListener(function(message) {
      // Emulate a minimal MessageEvent object
      handler({'data': message});
    });
  } else {
    console.error('WrappedChromeRuntimePort only supports onMessage');
  }
};

/**
 * Sets up an embedded trampoline iframe, sourced from the extension.
 * @param {function(MessagePort)} callback
 * @private
 */
u2f.getIframePort_ = function(callback) {
  // Create the iframe
  var iframeOrigin = 'chrome-extension://' + u2f.EXTENSION_ID;
  var iframe = document.createElement('iframe');
  iframe.src = iframeOrigin + '/u2f-comms.html';
  iframe.setAttribute('style', 'display:none');
  document.body.appendChild(iframe);

  var hasCalledBack = false;

  var channel = new MessageChannel();
  var ready = function(message) {
    if (message.data == 'ready') {
      channel.port1.removeEventListener('message', ready);
      if (!hasCalledBack)
      {
        hasCalledBack = true;
        callback(null, channel.port1);
      }
    } else {
      console.error('First event on iframe port was not "ready"');
    }
  };
  channel.port1.addEventListener('message', ready);
  channel.port1.start();

  iframe.addEventListener('load', function() {
    // Deliver the port to the iframe and initialize
    iframe.contentWindow.postMessage('init', iframeOrigin, [channel.port2]);
  });

  // Give this 200ms to initialize, after that, we treat this method as failed
  setTimeout(function() {
    if (!hasCalledBack)
    {
      hasCalledBack = true;
      callback(new Error("IFrame extension not supported"));
    }
  }, 200);
};


// High-level JS API

/**
 * Default extension response timeout in seconds.
 * @const
 */
u2f.EXTENSION_TIMEOUT_SEC = 30;

/**
 * A singleton instance for a MessagePort to the extension.
 * @type {MessagePort|u2f.WrappedChromeRuntimePort_}
 * @private
 */
u2f.port_ = null;

/**
 * Callbacks waiting for a port
 * @type {Array.<function((MessagePort|u2f.WrappedChromeRuntimePort_))>}
 * @private
 */
u2f.waitingForPort_ = [];

/**
 * A counter for requestIds.
 * @type {number}
 * @private
 */
u2f.reqCounter_ = 0;

/**
 * A map from requestIds to client callbacks
 * @type {Object.<number,(function((u2f.Error|u2f.RegisterResponse))
 *                       |function((u2f.Error|u2f.SignResponse)))>}
 * @private
 */
u2f.callbackMap_ = {};

/**
 * Creates or retrieves the MessagePort singleton to use.
 * @param {function((MessagePort|u2f.WrappedChromeRuntimePort_))} callback
 * @private
 */
u2f.getPortSingleton_ = function(callback) {
  if (u2f.port_) {
    callback(null, u2f.port_);
  } else {
    if (u2f.waitingForPort_.length == 0) {
      u2f.getMessagePort(function(err, port) {
        if (!err) {
          u2f.port_ = port;
          u2f.port_.addEventListener('message',
            /** @type {function(Event)} */ (u2f.responseHandler_));
        }

        // Careful, here be async callbacks. Maybe.
        while (u2f.waitingForPort_.length)
          u2f.waitingForPort_.shift()(err, port);
      });
    }
    u2f.waitingForPort_.push(callback);
  }
};

/**
 * Handles response messages from the extension.
 * @param {MessageEvent.<u2f.Response>} message
 * @private
 */
u2f.responseHandler_ = function(message) {
  var response = message.data;
  var reqId = response['requestId'];
  if (!reqId || !u2f.callbackMap_[reqId]) {
    console.error('Unknown or missing requestId in response.');
    return;
  }
  var cb = u2f.callbackMap_[reqId];
  delete u2f.callbackMap_[reqId];
  cb(null, response['responseData']);
};

/**
 * Calls the callback with true or false as first and only argument
 * @param {Function} callback
 */
u2f.isSupported = function(callback) {
  u2f.getPortSingleton_(function(err, port) {
    callback(!err);
  });
}

/**
 * Dispatches an array of sign requests to available U2F tokens.
 * @param {Array.<u2f.SignRequest>} signRequests
 * @param {function((u2f.Error|u2f.SignResponse))} callback
 * @param {number=} opt_timeoutSeconds
 */
u2f.sign = function(signRequests, callback, opt_timeoutSeconds) {
  u2f.getPortSingleton_(function(err, port) {
    if (err)
      return callback(err);

    var reqId = ++u2f.reqCounter_;
    u2f.callbackMap_[reqId] = callback;
    var req = {
      type: u2f.MessageTypes.U2F_SIGN_REQUEST,
      signRequests: signRequests,
      timeoutSeconds: (typeof opt_timeoutSeconds !== 'undefined' ?
        opt_timeoutSeconds : u2f.EXTENSION_TIMEOUT_SEC),
      requestId: reqId
    };
    port.postMessage(req);
  });
};

/**
 * Dispatches register requests to available U2F tokens. An array of sign
 * requests identifies already registered tokens.
 * @param {Array.<u2f.RegisterRequest>} registerRequests
 * @param {Array.<u2f.SignRequest>} signRequests
 * @param {function((u2f.Error|u2f.RegisterResponse))} callback
 * @param {number=} opt_timeoutSeconds
 */
u2f.register = function(registerRequests, signRequests,
    callback, opt_timeoutSeconds) {
  u2f.getPortSingleton_(function(err, port) {
    if (err)
      return callback(err);

    var reqId = ++u2f.reqCounter_;
    u2f.callbackMap_[reqId] = callback;
    var req = {
      type: u2f.MessageTypes.U2F_REGISTER_REQUEST,
      signRequests: signRequests,
      registerRequests: registerRequests,
      timeoutSeconds: (typeof opt_timeoutSeconds !== 'undefined' ?
        opt_timeoutSeconds : u2f.EXTENSION_TIMEOUT_SEC),
      requestId: reqId
    };
    port.postMessage(req);
  });
};


/***/ }),

/***/ "./node_modules/u2f-api/lib/u2f-api.js":
/*!*********************************************!*\
  !*** ./node_modules/u2f-api/lib/u2f-api.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

module.exports = API;

var chromeApi = __webpack_require__( /*! ./google-u2f-api */ "./node_modules/u2f-api/lib/google-u2f-api.js" );

// Feature detection (yes really)
var isBrowser = ( typeof navigator !== 'undefined' ) && !!navigator.userAgent;
var isSafari = isBrowser && navigator.userAgent.match( /Safari\// )
	&& !navigator.userAgent.match( /Chrome\// );
var isEDGE = isBrowser && navigator.userAgent.match( /Edge\/1[2345]/ );

var _backend = null;
function getBackend( Promise )
{
	if ( !_backend )
		_backend = new Promise( function( resolve, reject )
		{
			function notSupported( )
			{
				// Note; {native: true} means *not* using Google's hack
				resolve( { u2f: null, native: true } );
			}

			if ( !isBrowser )
				return notSupported( );

			if ( isSafari )
				// Safari doesn't support U2F, and the Safari-FIDO-U2F
				// extension lacks full support (Multi-facet apps), so we
				// block it until proper support.
				return notSupported( );

			var hasNativeSupport =
				( typeof window.u2f !== 'undefined' ) &&
				( typeof window.u2f.sign === 'function' );

			if ( hasNativeSupport )
				resolve( { u2f: window.u2f, native: true } );

			if ( isEDGE )
				// We don't want to check for Google's extension hack on EDGE
				// as it'll cause trouble (popups, etc)
				return notSupported( );

			if ( location.protocol === 'http:' )
				// U2F isn't supported over http, only https
				return notSupported( );

			if ( typeof MessageChannel === 'undefined' )
				// Unsupported browser, the chrome hack would throw
				return notSupported( );

			// Test for google extension support
			chromeApi.isSupported( function( ok )
			{
				if ( ok )
					resolve( { u2f: chromeApi, native: false } );
				else
					notSupported( );
			} );
		} );

	return _backend;
}

function API( Promise )
{
	return {
		isSupported   : isSupported.bind( Promise ),
		ensureSupport : ensureSupport.bind( Promise ),
		register      : register.bind( Promise ),
		sign          : sign.bind( Promise ),
		ErrorCodes    : API.ErrorCodes,
		ErrorNames    : API.ErrorNames
	};
}

API.ErrorCodes = {
	CANCELLED: -1,
	OK: 0,
	OTHER_ERROR: 1,
	BAD_REQUEST: 2,
	CONFIGURATION_UNSUPPORTED: 3,
	DEVICE_INELIGIBLE: 4,
	TIMEOUT: 5
};
API.ErrorNames = {
	"-1": "CANCELLED",
	"0": "OK",
	"1": "OTHER_ERROR",
	"2": "BAD_REQUEST",
	"3": "CONFIGURATION_UNSUPPORTED",
	"4": "DEVICE_INELIGIBLE",
	"5": "TIMEOUT"
};

function makeError( msg, err )
{
	var code = err != null ? err.errorCode : 1; // Default to OTHER_ERROR
	var type = API.ErrorNames[ '' + code ];
	var error = new Error( msg );
	error.metaData = {
		type: type,
		code: code
	}
	return error;
}

function deferPromise( Promise, promise )
{
	var ret = { };
	ret.promise = new Promise( function( resolve, reject ) {
		ret.resolve = resolve;
		ret.reject = reject;
		promise.then( resolve, reject );
	} );
	/**
	 * Reject request promise and disconnect port if 'disconnect' flag is true
	 * @param {string} msg
	 * @param {boolean} disconnect
	 */
	ret.promise.cancel = function( msg, disconnect )
	{
		getBackend( Promise )
		.then( function( backend )
		{
			if ( disconnect && !backend.native )
				backend.u2f.disconnect( );

			ret.reject( makeError( msg, { errorCode: -1 } ) );
		} );
	};
	return ret;
}

function defer( Promise, fun )
{
	return deferPromise( Promise, new Promise( function( resolve, reject )
	{
		try
		{
			fun && fun( resolve, reject );
		}
		catch ( err )
		{
			reject( err );
		}
	} ) );
}

function isSupported( )
{
	var Promise = this;

	return getBackend( Promise )
	.then( function( backend )
	{
		return !!backend.u2f;
	} );
}

function _ensureSupport( backend )
{
	if ( !backend.u2f )
	{
		if ( location.protocol === 'http:' )
			throw new Error( "U2F isn't supported over http, only https" );
		throw new Error( "U2F not supported" );
	}
}

function ensureSupport( )
{
	var Promise = this;

	return getBackend( Promise )
	.then( _ensureSupport );
}

function register( registerRequests, signRequests /* = null */, timeout )
{
	var Promise = this;

	if ( !Array.isArray( registerRequests ) )
		registerRequests = [ registerRequests ];

	if ( typeof signRequests === 'number' && typeof timeout === 'undefined' )
	{
		timeout = signRequests;
		signRequests = null;
	}

	if ( !signRequests )
		signRequests = [ ];

	return deferPromise( Promise, getBackend( Promise )
	.then( function( backend )
	{
		_ensureSupport( backend );

		var native = backend.native;
		var u2f = backend.u2f;

		return new Promise( function( resolve, reject )
		{
			function cbNative( response )
			{
				if ( response.errorCode )
					reject( makeError( "Registration failed", response ) );
				else
				{
					delete response.errorCode;
					resolve( response );
				}
			}

			function cbChrome( err, response )
			{
				if ( err )
					reject( err );
				else if ( response.errorCode )
					reject( makeError( "Registration failed", response ) );
				else
					resolve( response );
			}

			if ( native )
			{
				var appId = registerRequests[ 0 ].appId;

				u2f.register(
					appId, registerRequests, signRequests, cbNative, timeout );
			}
			else
			{
				u2f.register(
					registerRequests, signRequests, cbChrome, timeout );
			}
		} );
	} ) ).promise;
}

function sign( signRequests, timeout )
{
	var Promise = this;

	if ( !Array.isArray( signRequests ) )
		signRequests = [ signRequests ];

	return deferPromise( Promise, getBackend( Promise )
	.then( function( backend )
	{
		_ensureSupport( backend );

		var native = backend.native;
		var u2f = backend.u2f;

		return new Promise( function( resolve, reject )
		{
			function cbNative( response )
			{
				if ( response.errorCode )
					reject( makeError( "Sign failed", response ) );
				else
				{
					delete response.errorCode;
					resolve( response );
				}
			}

			function cbChrome( err, response )
			{
				if ( err )
					reject( err );
				else if ( response.errorCode )
					reject( makeError( "Sign failed", response ) );
				else
					resolve( response );
			}

			if ( native )
			{
				var appId = signRequests[ 0 ].appId;
				var challenge = signRequests[ 0 ].challenge;

				u2f.sign( appId, challenge, signRequests, cbNative, timeout );
			}
			else
			{
				u2f.sign( signRequests, cbChrome, timeout );
			}
		} );
	} ) ).promise;
}

function makeDefault( func )
{
	API[ func ] = function( )
	{
		if ( !global.Promise )
			// This is very unlikely to ever happen, since browsers
			// supporting U2F will most likely support Promises.
			throw new Error( "The platform doesn't natively support promises" );

		var args = [ ].slice.call( arguments );
		return API( global.Promise )[ func ].apply( null, args );
	};
}

// Provide default functions using the built-in Promise if available.
makeDefault( 'isSupported' );
makeDefault( 'ensureSupport' );
makeDefault( 'register' );
makeDefault( 'sign' );

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);
//# sourceMappingURL=11.js.map