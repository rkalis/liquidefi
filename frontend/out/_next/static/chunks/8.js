(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct */ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/isNativeFunction.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeFunction.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/wrapNativeSuper.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

var isNativeFunction = __webpack_require__(/*! ./isNativeFunction */ "./node_modules/@babel/runtime/helpers/isNativeFunction.js");

var construct = __webpack_require__(/*! ./construct */ "./node_modules/@babel/runtime/helpers/construct.js");

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals self */exports.Headers=self.Headers;exports.Request=self.Request;exports.Response=self.Response;exports.fetch=self.fetch;

/***/ }),

/***/ "./node_modules/trezor-connect/lib/constants/blockchain.js":
/*!*****************************************************************!*\
  !*** ./node_modules/trezor-connect/lib/constants/blockchain.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // blockchain events

exports.__esModule = true;
exports.NOTIFICATION = exports.BLOCK = exports.CONNECT = exports.ERROR = void 0;
var ERROR = 'blockchain-error';
exports.ERROR = ERROR;
var CONNECT = 'blockchain-connect';
exports.CONNECT = CONNECT;
var BLOCK = 'blockchain-block';
exports.BLOCK = BLOCK;
var NOTIFICATION = 'blockchain-notification';
exports.NOTIFICATION = NOTIFICATION;

/***/ }),

/***/ "./node_modules/trezor-connect/lib/constants/device.js":
/*!*************************************************************!*\
  !*** ./node_modules/trezor-connect/lib/constants/device.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // device list events

exports.__esModule = true;
exports.UNREADABLE = exports.WAIT_FOR_SELECTION = exports.WORD = exports.PASSPHRASE_ON_DEVICE = exports.PASSPHRASE = exports.PIN = exports.BUTTON = exports.LOADING = exports.USED_ELSEWHERE = exports.RELEASED = exports.ACQUIRED = exports.RELEASE = exports.ACQUIRE = exports.CHANGED = exports.DISCONNECT = exports.CONNECT_UNACQUIRED = exports.CONNECT = void 0;
var CONNECT = 'device-connect';
exports.CONNECT = CONNECT;
var CONNECT_UNACQUIRED = 'device-connect_unacquired';
exports.CONNECT_UNACQUIRED = CONNECT_UNACQUIRED;
var DISCONNECT = 'device-disconnect';
exports.DISCONNECT = DISCONNECT;
var CHANGED = 'device-changed';
exports.CHANGED = CHANGED;
var ACQUIRE = 'device-acquire';
exports.ACQUIRE = ACQUIRE;
var RELEASE = 'device-release';
exports.RELEASE = RELEASE;
var ACQUIRED = 'device-acquired';
exports.ACQUIRED = ACQUIRED;
var RELEASED = 'device-released';
exports.RELEASED = RELEASED;
var USED_ELSEWHERE = 'device-used_elsewhere';
exports.USED_ELSEWHERE = USED_ELSEWHERE;
var LOADING = 'device-loading'; // trezor-link events in protobuf format

exports.LOADING = LOADING;
var BUTTON = 'button';
exports.BUTTON = BUTTON;
var PIN = 'pin';
exports.PIN = PIN;
var PASSPHRASE = 'passphrase';
exports.PASSPHRASE = PASSPHRASE;
var PASSPHRASE_ON_DEVICE = 'passphrase_on_device';
exports.PASSPHRASE_ON_DEVICE = PASSPHRASE_ON_DEVICE;
var WORD = 'word'; // custom

exports.WORD = WORD;
var WAIT_FOR_SELECTION = 'device-wait_for_selection'; // this string has different prefix than other constants and it's used as device path

exports.WAIT_FOR_SELECTION = WAIT_FOR_SELECTION;
var UNREADABLE = 'unreadable-device';
exports.UNREADABLE = UNREADABLE;

/***/ }),

/***/ "./node_modules/trezor-connect/lib/constants/errors.js":
/*!*************************************************************!*\
  !*** ./node_modules/trezor-connect/lib/constants/errors.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.NO_COIN_INFO = exports.BACKEND_NO_URL = exports.WEBUSB_ERROR_MESSAGE = exports.INVALID_PIN_ERROR_MESSAGE = exports.WRONG_PREVIOUS_SESSION_ERROR_MESSAGE = exports.INVALID_STATE = exports.CALL_OVERRIDE = exports.INITIALIZATION_FAILED = exports.DEVICE_USED_ELSEWHERE = exports.PERMISSIONS_NOT_GRANTED = exports.POPUP_CLOSED = exports.INVALID_PARAMETERS = exports.DEVICE_CALL_IN_PROGRESS = exports.DEVICE_NOT_FOUND = exports.WRONG_TRANSPORT_CONFIG = exports.NO_TRANSPORT = exports.MANIFEST_NOT_SET = exports.BROWSER_NOT_SUPPORTED = exports.POPUP_TIMEOUT = exports.IFRAME_TIMEOUT = exports.IFRAME_INITIALIZED = exports.IFRAME_BLOCKED = exports.NO_IFRAME = exports.invalidParameter = exports.TrezorError = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ "./node_modules/@babel/runtime/helpers/wrapNativeSuper.js"));

var TrezorError =
/*#__PURE__*/
function (_Error) {
  (0, _inheritsLoose2.default)(TrezorError, _Error);

  function TrezorError(code, message) {
    var _this;

    _this = _Error.call(this, message) || this;
    _this.code = code;
    _this.message = message;
    return _this;
  }

  return TrezorError;
}((0, _wrapNativeSuper2.default)(Error));

exports.TrezorError = TrezorError;

var invalidParameter = function invalidParameter(message) {
  return new TrezorError('Connect_InvalidParameter', message);
}; // level 100 error during initialization


exports.invalidParameter = invalidParameter;
var NO_IFRAME = new TrezorError(100, 'TrezorConnect not yet initialized');
exports.NO_IFRAME = NO_IFRAME;
var IFRAME_BLOCKED = new TrezorError('iframe_blocked', 'TrezorConnect iframe was blocked');
exports.IFRAME_BLOCKED = IFRAME_BLOCKED;
var IFRAME_INITIALIZED = new TrezorError(101, 'TrezorConnect has been already initialized');
exports.IFRAME_INITIALIZED = IFRAME_INITIALIZED;
var IFRAME_TIMEOUT = new TrezorError(102, 'Iframe timeout');
exports.IFRAME_TIMEOUT = IFRAME_TIMEOUT;
var POPUP_TIMEOUT = new TrezorError(103, 'Popup timeout');
exports.POPUP_TIMEOUT = POPUP_TIMEOUT;
var BROWSER_NOT_SUPPORTED = new TrezorError(104, 'Browser not supported');
exports.BROWSER_NOT_SUPPORTED = BROWSER_NOT_SUPPORTED;
var MANIFEST_NOT_SET = new TrezorError(105, 'Manifest not set. Read more at https://github.com/trezor/connect/blob/develop/docs/index.md');
exports.MANIFEST_NOT_SET = MANIFEST_NOT_SET;
var NO_TRANSPORT = new TrezorError(500, 'Transport is missing');
exports.NO_TRANSPORT = NO_TRANSPORT;
var WRONG_TRANSPORT_CONFIG = new TrezorError(5002, 'Wrong config response'); // config_signed

exports.WRONG_TRANSPORT_CONFIG = WRONG_TRANSPORT_CONFIG;
var DEVICE_NOT_FOUND = new TrezorError(501, 'Device not found'); // export const DEVICE_CALL_IN_PROGRESS: TrezorError = new TrezorError(502, "Device call in progress.");

exports.DEVICE_NOT_FOUND = DEVICE_NOT_FOUND;
var DEVICE_CALL_IN_PROGRESS = new TrezorError(503, 'Device call in progress');
exports.DEVICE_CALL_IN_PROGRESS = DEVICE_CALL_IN_PROGRESS;
var INVALID_PARAMETERS = new TrezorError(504, 'Invalid parameters');
exports.INVALID_PARAMETERS = INVALID_PARAMETERS;
var POPUP_CLOSED = new Error('Popup closed');
exports.POPUP_CLOSED = POPUP_CLOSED;
var PERMISSIONS_NOT_GRANTED = new TrezorError(403, 'Permissions not granted');
exports.PERMISSIONS_NOT_GRANTED = PERMISSIONS_NOT_GRANTED;
var DEVICE_USED_ELSEWHERE = new TrezorError(700, 'Device is used in another window');
exports.DEVICE_USED_ELSEWHERE = DEVICE_USED_ELSEWHERE;
var INITIALIZATION_FAILED = new TrezorError('Failure_Initialize', 'Initialization failed');
exports.INITIALIZATION_FAILED = INITIALIZATION_FAILED;
var CALL_OVERRIDE = new TrezorError('Failure_ActionOverride', 'override');
exports.CALL_OVERRIDE = CALL_OVERRIDE;
var INVALID_STATE = new TrezorError('Failure_PassphraseState', 'Passphrase is incorrect'); // a slight hack
// this error string is hard-coded
// in both bridge and extension

exports.INVALID_STATE = INVALID_STATE;
var WRONG_PREVIOUS_SESSION_ERROR_MESSAGE = 'wrong previous session';
exports.WRONG_PREVIOUS_SESSION_ERROR_MESSAGE = WRONG_PREVIOUS_SESSION_ERROR_MESSAGE;
var INVALID_PIN_ERROR_MESSAGE = 'PIN invalid';
exports.INVALID_PIN_ERROR_MESSAGE = INVALID_PIN_ERROR_MESSAGE;
var WEBUSB_ERROR_MESSAGE = 'NetworkError: Unable to claim interface.'; // BlockBook

exports.WEBUSB_ERROR_MESSAGE = WEBUSB_ERROR_MESSAGE;
var BACKEND_NO_URL = new TrezorError('Backend_init', 'Url not found');
exports.BACKEND_NO_URL = BACKEND_NO_URL;
var NO_COIN_INFO = invalidParameter('Coin not found.');
exports.NO_COIN_INFO = NO_COIN_INFO;

/***/ }),

/***/ "./node_modules/trezor-connect/lib/constants/iframe.js":
/*!*************************************************************!*\
  !*** ./node_modules/trezor-connect/lib/constants/iframe.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.RESPONSE = exports.CALL = exports.ERROR = exports.BOOTSTRAP = void 0;
var BOOTSTRAP = 'iframe-bootstrap';
exports.BOOTSTRAP = BOOTSTRAP;
var ERROR = 'iframe-error';
exports.ERROR = ERROR;
var CALL = 'iframe-call';
exports.CALL = CALL;
var RESPONSE = 'iframe-response';
exports.RESPONSE = RESPONSE;

/***/ }),

/***/ "./node_modules/trezor-connect/lib/constants/index.js":
/*!************************************************************!*\
  !*** ./node_modules/trezor-connect/lib/constants/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.BLOCKCHAIN_EVENT = exports.RESPONSE_EVENT = exports.TRANSPORT_EVENT = exports.DEVICE_EVENT = exports.UI_EVENT = exports.CORE_EVENT = void 0;
var CORE_EVENT = 'CORE_EVENT';
exports.CORE_EVENT = CORE_EVENT;
var UI_EVENT = 'UI_EVENT';
exports.UI_EVENT = UI_EVENT;
var DEVICE_EVENT = 'DEVICE_EVENT';
exports.DEVICE_EVENT = DEVICE_EVENT;
var TRANSPORT_EVENT = 'TRANSPORT_EVENT';
exports.TRANSPORT_EVENT = TRANSPORT_EVENT;
var RESPONSE_EVENT = 'RESPONSE_EVENT';
exports.RESPONSE_EVENT = RESPONSE_EVENT;
var BLOCKCHAIN_EVENT = 'BLOCKCHAIN_EVENT';
exports.BLOCKCHAIN_EVENT = BLOCKCHAIN_EVENT;

/***/ }),

/***/ "./node_modules/trezor-connect/lib/constants/popup.js":
/*!************************************************************!*\
  !*** ./node_modules/trezor-connect/lib/constants/popup.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.CLOSE_WINDOW = exports.CANCEL_POPUP_REQUEST = exports.CLOSED = exports.CLOSE = exports.HANDSHAKE = exports.OPEN_TIMEOUT = exports.OPENED = exports.LOG = exports.EXTENSION_USB_PERMISSIONS = exports.EXTENSION_REQUEST = exports.BOOTSTRAP = exports.INIT = void 0;
var INIT = 'popup-init';
exports.INIT = INIT;
var BOOTSTRAP = 'popup-bootstrap';
exports.BOOTSTRAP = BOOTSTRAP;
var EXTENSION_REQUEST = 'popup-extension_request';
exports.EXTENSION_REQUEST = EXTENSION_REQUEST;
var EXTENSION_USB_PERMISSIONS = 'open-usb-permissions';
exports.EXTENSION_USB_PERMISSIONS = EXTENSION_USB_PERMISSIONS;
var LOG = 'popup-log';
exports.LOG = LOG;
var OPENED = 'popup-opened';
exports.OPENED = OPENED;
var OPEN_TIMEOUT = 'popup-open_timeout';
exports.OPEN_TIMEOUT = OPEN_TIMEOUT;
var HANDSHAKE = 'popup-handshake';
exports.HANDSHAKE = HANDSHAKE;
var CLOSE = 'popup-close';
exports.CLOSE = CLOSE;
var CLOSED = 'popup-closed';
exports.CLOSED = CLOSED;
var CANCEL_POPUP_REQUEST = 'ui-cancel-popup-request';
exports.CANCEL_POPUP_REQUEST = CANCEL_POPUP_REQUEST;
var CLOSE_WINDOW = 'window.close';
exports.CLOSE_WINDOW = CLOSE_WINDOW;

/***/ }),

/***/ "./node_modules/trezor-connect/lib/constants/transport.js":
/*!****************************************************************!*\
  !*** ./node_modules/trezor-connect/lib/constants/transport.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.START_PENDING = exports.RECONNECT = exports.REQUEST = exports.STREAM = exports.UPDATE = exports.ERROR = exports.START = void 0;
var START = 'transport-start';
exports.START = START;
var ERROR = 'transport-error';
exports.ERROR = ERROR;
var UPDATE = 'transport-update';
exports.UPDATE = UPDATE;
var STREAM = 'transport-stream';
exports.STREAM = STREAM;
var REQUEST = 'transport-request_device';
exports.REQUEST = REQUEST;
var RECONNECT = 'transport-reconnect';
exports.RECONNECT = RECONNECT;
var START_PENDING = 'transport-start_pending';
exports.START_PENDING = START_PENDING;

/***/ }),

/***/ "./node_modules/trezor-connect/lib/constants/ui.js":
/*!*********************************************************!*\
  !*** ./node_modules/trezor-connect/lib/constants/ui.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ADDRESS_VALIDATION = exports.BUNDLE_PROGRESS = exports.LOGIN_CHALLENGE_RESPONSE = exports.LOGIN_CHALLENGE_REQUEST = exports.CUSTOM_MESSAGE_RESPONSE = exports.CUSTOM_MESSAGE_REQUEST = exports.CHANGE_SETTINGS = exports.RECEIVE_FEE = exports.RECEIVE_ACCOUNT = exports.CHANGE_ACCOUNT = exports.RECEIVE_DEVICE = exports.RECEIVE_PASSPHRASE = exports.RECEIVE_PIN = exports.RECEIVE_CONFIRMATION = exports.RECEIVE_PERMISSION = exports.REQUEST_BUTTON = exports.INSUFFICIENT_FUNDS = exports.UPDATE_CUSTOM_FEE = exports.SELECT_FEE = exports.SELECT_ACCOUNT = exports.SELECT_DEVICE = exports.SET_OPERATION = exports.LOADING = exports.CONNECT = exports.INVALID_PASSPHRASE_ACTION = exports.INVALID_PASSPHRASE = exports.REQUEST_PASSPHRASE_ON_DEVICE = exports.REQUEST_PASSPHRASE = exports.INVALID_PIN = exports.REQUEST_PIN = exports.REQUEST_CONFIRMATION = exports.REQUEST_PERMISSION = exports.CLOSE_UI_WINDOW = exports.REQUEST_UI_WINDOW = exports.RECEIVE_BROWSER = exports.BROWSER_OUTDATED = exports.BROWSER_NOT_SUPPORTED = exports.DEVICE_NEEDS_BACKUP = exports.FIRMWARE_NOT_COMPATIBLE = exports.FIRMWARE_NOT_SUPPORTED = exports.FIRMWARE_OUTDATED = exports.FIRMWARE_OLD = exports.SEEDLESS = exports.INITIALIZE = exports.BOOTLOADER = exports.TRANSPORT = exports.IFRAME_HANDSHAKE = void 0;
var IFRAME_HANDSHAKE = 'iframe-handshake';
exports.IFRAME_HANDSHAKE = IFRAME_HANDSHAKE;
var TRANSPORT = 'ui-no_transport';
exports.TRANSPORT = TRANSPORT;
var BOOTLOADER = 'ui-device_bootloader_mode';
exports.BOOTLOADER = BOOTLOADER;
var INITIALIZE = 'ui-device_not_initialized';
exports.INITIALIZE = INITIALIZE;
var SEEDLESS = 'ui-device_seedless';
exports.SEEDLESS = SEEDLESS;
var FIRMWARE_OLD = 'ui-device_firmware_old';
exports.FIRMWARE_OLD = FIRMWARE_OLD;
var FIRMWARE_OUTDATED = 'ui-device_firmware_outdated';
exports.FIRMWARE_OUTDATED = FIRMWARE_OUTDATED;
var FIRMWARE_NOT_SUPPORTED = 'ui-device_firmware_unsupported';
exports.FIRMWARE_NOT_SUPPORTED = FIRMWARE_NOT_SUPPORTED;
var FIRMWARE_NOT_COMPATIBLE = 'ui-device_firmware_not_compatible';
exports.FIRMWARE_NOT_COMPATIBLE = FIRMWARE_NOT_COMPATIBLE;
var DEVICE_NEEDS_BACKUP = 'ui-device_needs_backup';
exports.DEVICE_NEEDS_BACKUP = DEVICE_NEEDS_BACKUP;
var BROWSER_NOT_SUPPORTED = 'ui-browser_not_supported';
exports.BROWSER_NOT_SUPPORTED = BROWSER_NOT_SUPPORTED;
var BROWSER_OUTDATED = 'ui-browser_outdated';
exports.BROWSER_OUTDATED = BROWSER_OUTDATED;
var RECEIVE_BROWSER = 'ui-receive_browser';
exports.RECEIVE_BROWSER = RECEIVE_BROWSER;
var REQUEST_UI_WINDOW = 'ui-request_window';
exports.REQUEST_UI_WINDOW = REQUEST_UI_WINDOW;
var CLOSE_UI_WINDOW = 'ui-close_window';
exports.CLOSE_UI_WINDOW = CLOSE_UI_WINDOW;
var REQUEST_PERMISSION = 'ui-request_permission';
exports.REQUEST_PERMISSION = REQUEST_PERMISSION;
var REQUEST_CONFIRMATION = 'ui-request_confirmation';
exports.REQUEST_CONFIRMATION = REQUEST_CONFIRMATION;
var REQUEST_PIN = 'ui-request_pin';
exports.REQUEST_PIN = REQUEST_PIN;
var INVALID_PIN = 'ui-invalid_pin';
exports.INVALID_PIN = INVALID_PIN;
var REQUEST_PASSPHRASE = 'ui-request_passphrase';
exports.REQUEST_PASSPHRASE = REQUEST_PASSPHRASE;
var REQUEST_PASSPHRASE_ON_DEVICE = 'ui-request_passphrase_on_device';
exports.REQUEST_PASSPHRASE_ON_DEVICE = REQUEST_PASSPHRASE_ON_DEVICE;
var INVALID_PASSPHRASE = 'ui-invalid_passphrase';
exports.INVALID_PASSPHRASE = INVALID_PASSPHRASE;
var INVALID_PASSPHRASE_ACTION = 'ui-invalid_passphrase_action';
exports.INVALID_PASSPHRASE_ACTION = INVALID_PASSPHRASE_ACTION;
var CONNECT = 'ui-connect';
exports.CONNECT = CONNECT;
var LOADING = 'ui-loading';
exports.LOADING = LOADING;
var SET_OPERATION = 'ui-set_operation';
exports.SET_OPERATION = SET_OPERATION;
var SELECT_DEVICE = 'ui-select_device';
exports.SELECT_DEVICE = SELECT_DEVICE;
var SELECT_ACCOUNT = 'ui-select_account';
exports.SELECT_ACCOUNT = SELECT_ACCOUNT;
var SELECT_FEE = 'ui-select_fee';
exports.SELECT_FEE = SELECT_FEE;
var UPDATE_CUSTOM_FEE = 'ui-update_custom_fee';
exports.UPDATE_CUSTOM_FEE = UPDATE_CUSTOM_FEE;
var INSUFFICIENT_FUNDS = 'ui-insufficient_funds';
exports.INSUFFICIENT_FUNDS = INSUFFICIENT_FUNDS;
var REQUEST_BUTTON = 'ui-button';
exports.REQUEST_BUTTON = REQUEST_BUTTON;
var RECEIVE_PERMISSION = 'ui-receive_permission';
exports.RECEIVE_PERMISSION = RECEIVE_PERMISSION;
var RECEIVE_CONFIRMATION = 'ui-receive_confirmation';
exports.RECEIVE_CONFIRMATION = RECEIVE_CONFIRMATION;
var RECEIVE_PIN = 'ui-receive_pin';
exports.RECEIVE_PIN = RECEIVE_PIN;
var RECEIVE_PASSPHRASE = 'ui-receive_passphrase';
exports.RECEIVE_PASSPHRASE = RECEIVE_PASSPHRASE;
var RECEIVE_DEVICE = 'ui-receive_device';
exports.RECEIVE_DEVICE = RECEIVE_DEVICE;
var CHANGE_ACCOUNT = 'ui-change_account';
exports.CHANGE_ACCOUNT = CHANGE_ACCOUNT;
var RECEIVE_ACCOUNT = 'ui-receive_account';
exports.RECEIVE_ACCOUNT = RECEIVE_ACCOUNT;
var RECEIVE_FEE = 'ui-receive_fee';
exports.RECEIVE_FEE = RECEIVE_FEE;
var CHANGE_SETTINGS = 'ui-change_settings';
exports.CHANGE_SETTINGS = CHANGE_SETTINGS;
var CUSTOM_MESSAGE_REQUEST = 'ui-custom_request';
exports.CUSTOM_MESSAGE_REQUEST = CUSTOM_MESSAGE_REQUEST;
var CUSTOM_MESSAGE_RESPONSE = 'ui-custom_response';
exports.CUSTOM_MESSAGE_RESPONSE = CUSTOM_MESSAGE_RESPONSE;
var LOGIN_CHALLENGE_REQUEST = 'ui-login_challenge_request';
exports.LOGIN_CHALLENGE_REQUEST = LOGIN_CHALLENGE_REQUEST;
var LOGIN_CHALLENGE_RESPONSE = 'ui-login_challenge_response';
exports.LOGIN_CHALLENGE_RESPONSE = LOGIN_CHALLENGE_RESPONSE;
var BUNDLE_PROGRESS = 'ui-bundle_progress';
exports.BUNDLE_PROGRESS = BUNDLE_PROGRESS;
var ADDRESS_VALIDATION = 'ui-address_validation';
exports.ADDRESS_VALIDATION = ADDRESS_VALIDATION;

/***/ }),

/***/ "./node_modules/trezor-connect/lib/data/ConnectSettings.js":
/*!*****************************************************************!*\
  !*** ./node_modules/trezor-connect/lib/data/ConnectSettings.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.parse = exports.DEFAULT_PRIORITY = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

/*
 * Initial settings for connect.
 * It could be changed by passing values into TrezorConnect.init(...) method
 */
var VERSION = '7.0.1';
var versionN = VERSION.split('.').map(function (s) {
  return parseInt(s);
});
var DIRECTORY = "" + versionN[0] + (versionN[1] > 0 ? "." + versionN[1] : '') + "/";
var DEFAULT_DOMAIN = "https://connect.trezor.io/" + DIRECTORY;
var DEFAULT_PRIORITY = 2;
exports.DEFAULT_PRIORITY = DEFAULT_PRIORITY;
var initialSettings = {
  configSrc: 'data/config.json',
  // constant
  version: VERSION,
  // constant
  debug: false,
  origin: null,
  priority: DEFAULT_PRIORITY,
  trustedHost: false,
  connectSrc: DEFAULT_DOMAIN,
  iframeSrc: DEFAULT_DOMAIN + "iframe.html",
  popup: true,
  popupSrc: DEFAULT_DOMAIN + "popup.html",
  webusbSrc: DEFAULT_DOMAIN + "webusb.html",
  transportReconnect: false,
  webusb: true,
  pendingTransportEvent: true,
  supportedBrowser: typeof navigator !== 'undefined' ? !/Trident|MSIE/.test(navigator.userAgent) : true,
  extension: null,
  manifest: null
};
var currentSettings = initialSettings;

var parseManifest = function parseManifest(manifest) {
  if (typeof manifest.email !== 'string') {
    return null;
  }

  if (typeof manifest.appUrl !== 'string') {
    return null;
  }

  return {
    email: manifest.email,
    appUrl: manifest.appUrl
  };
};

var parse = function parse(input) {
  if (!input) return currentSettings;
  var settings = (0, _objectSpread2.default)({}, currentSettings);

  if (input.hasOwnProperty('debug')) {
    if (Array.isArray(input)) {// enable log with prefix
    }

    if (typeof input.debug === 'boolean') {
      settings.debug = input.debug;
    } else if (typeof input.debug === 'string') {
      settings.debug = input.debug === 'true';
    }
  }

  if (typeof input.connectSrc === 'string') {
    // TODO: escape string, validate url
    settings.connectSrc = input.connectSrc;
  } else if (typeof window !== 'undefined' && typeof window.__TREZOR_CONNECT_SRC === 'string') {
    settings.connectSrc = window.__TREZOR_CONNECT_SRC;
  }

  settings.iframeSrc = settings.connectSrc + "iframe.html";
  settings.popupSrc = settings.connectSrc + "popup.html";
  settings.webusbSrc = settings.connectSrc + "webusb.html";

  if (typeof input.transportReconnect === 'boolean') {
    settings.transportReconnect = input.transportReconnect;
  }

  if (typeof input.webusb === 'boolean') {
    settings.webusb = input.webusb;
  }

  if (typeof input.popup === 'boolean') {
    settings.popup = input.popup;
  }

  if (typeof input.pendingTransportEvent === 'boolean') {
    settings.pendingTransportEvent = input.pendingTransportEvent;
  } // local files


  if (typeof window !== 'undefined' && window.location.protocol === 'file:') {
    settings.origin = "file://" + window.location.pathname;
    settings.webusb = false;
  }

  if (typeof input.extension === 'string') {
    settings.extension = input.extension;
  }

  if (typeof input.manifest === 'object') {
    settings.manifest = parseManifest(input.manifest);
  }

  currentSettings = settings;
  return currentSettings;
};

exports.parse = parse;

/***/ }),

/***/ "./node_modules/trezor-connect/lib/iframe/builder.js":
/*!***********************************************************!*\
  !*** ./node_modules/trezor-connect/lib/iframe/builder.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.clearTimeout = exports.dispose = exports.postMessage = exports.init = exports.messagePromises = exports.error = exports.timeout = exports.initPromise = exports.origin = exports.instance = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _deferred = __webpack_require__(/*! ../utils/deferred */ "./node_modules/trezor-connect/lib/utils/deferred.js");

var _ui = __webpack_require__(/*! ../constants/ui */ "./node_modules/trezor-connect/lib/constants/ui.js");

var _errors = __webpack_require__(/*! ../constants/errors */ "./node_modules/trezor-connect/lib/constants/errors.js");

var _inlineStyles = _interopRequireDefault(__webpack_require__(/*! ./inline-styles */ "./node_modules/trezor-connect/lib/iframe/inline-styles.js"));

var instance;
exports.instance = instance;
var origin;
exports.origin = origin;
var initPromise = (0, _deferred.create)();
exports.initPromise = initPromise;
var timeout = 0;
exports.timeout = timeout;
var error;
exports.error = error;
var _messageID = 0; // every postMessage to iframe has its own promise to resolve

var messagePromises = {};
exports.messagePromises = messagePromises;

var init =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(settings) {
    var existedFrame, manifest, src, iframeSrcHost, onLoad;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            existedFrame = document.getElementById('trezorconnect');

            if (existedFrame) {
              exports.instance = instance = existedFrame;
            } else {
              exports.instance = instance = document.createElement('iframe');
              instance.frameBorder = '0';
              instance.width = '0px';
              instance.height = '0px';
              instance.style.position = 'absolute';
              instance.style.display = 'none';
              instance.style.border = '0px';
              instance.style.width = '0px';
              instance.style.height = '0px';
              instance.id = 'trezorconnect';
            }

            manifest = "&version=" + settings.version + "&manifest=" + encodeURIComponent(btoa(JSON.stringify(settings.manifest)));
            src = settings.iframeSrc + "?" + Date.now() + manifest;
            instance.setAttribute('src', src);

            if (settings.webusb) {
              instance.setAttribute('allow', 'usb');
            } // eslint-disable-next-line no-irregular-whitespace, no-useless-escape


            iframeSrcHost = instance.src.match(/^.+\:\/\/[^\/]+/);

            if (iframeSrcHost && iframeSrcHost.length > 0) {
              exports.origin = origin = iframeSrcHost[0];
            }

            exports.timeout = timeout = window.setTimeout(function () {
              initPromise.reject(_errors.IFRAME_TIMEOUT);
            }, 10000);

            onLoad = function onLoad() {
              if (!instance) {
                initPromise.reject(_errors.IFRAME_BLOCKED);
                return;
              }

              try {
                // if hosting page is able to access cross-origin location it means that the iframe is not loaded
                var iframeOrigin = instance.contentWindow.location.origin;

                if (!iframeOrigin || iframeOrigin === 'null') {
                  // eslint-disable-next-line no-use-before-define
                  handleIframeBlocked();
                  return;
                }
              } catch (e) {// empty
              }

              var extension; // $FlowIssue chrome is not declared outside

              if (typeof chrome !== 'undefined' && chrome.runtime && typeof chrome.runtime.onConnect !== 'undefined') {
                chrome.runtime.onConnect.addListener(function () {});
                extension = chrome.runtime.id;
              }

              instance.contentWindow.postMessage({
                type: _ui.IFRAME_HANDSHAKE,
                payload: {
                  settings: settings,
                  extension: extension
                }
              }, origin);
              instance.onload = undefined;
            }; // IE hack


            if (instance.attachEvent) {
              instance.attachEvent('onload', onLoad);
            } else {
              instance.onload = onLoad;
            } // inject iframe into host document body


            if (document.body) {
              document.body.appendChild(instance); // eslint-disable-next-line no-use-before-define

              injectStyleSheet();
            }

            _context.prev = 12;
            _context.next = 15;
            return initPromise.promise;

          case 15:
            _context.next = 20;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](12);
            throw _context.t0.message || _context.t0;

          case 20:
            _context.prev = 20;
            window.clearTimeout(timeout);
            exports.timeout = timeout = 0;
            return _context.finish(20);

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[12, 17, 20, 24]]);
  }));

  return function init(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.init = init;

var injectStyleSheet = function injectStyleSheet() {
  if (!instance) {
    throw _errors.IFRAME_BLOCKED;
  }

  var doc = instance.ownerDocument;
  var head = doc.head || doc.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.setAttribute('type', 'text/css');
  style.setAttribute('id', 'TrezorConnectStylesheet'); // $FlowIssue

  if (style.styleSheet) {
    // IE
    // $FlowIssue
    style.styleSheet.cssText = _inlineStyles.default;
  } else {
    style.appendChild(document.createTextNode(_inlineStyles.default));
  }

  head.append(style);
};

var handleIframeBlocked = function handleIframeBlocked() {
  window.clearTimeout(timeout);
  exports.error = error = _errors.IFRAME_BLOCKED.message; // eslint-disable-next-line no-use-before-define

  dispose();
  initPromise.reject(_errors.IFRAME_BLOCKED);
}; // post messages to iframe


var postMessage = function postMessage(message, usePromise) {
  if (usePromise === void 0) {
    usePromise = true;
  }

  if (!instance) {
    throw _errors.IFRAME_BLOCKED;
  }

  if (usePromise) {
    _messageID++;
    message.id = _messageID;
    messagePromises[_messageID] = (0, _deferred.create)();
    instance.contentWindow.postMessage(message, origin);
    return messagePromises[_messageID].promise;
  }

  instance.contentWindow.postMessage(message, origin);
  return null;
};

exports.postMessage = postMessage;

var dispose = function dispose() {
  if (instance && instance.parentNode) {
    try {
      instance.parentNode.removeChild(instance);
    } catch (error) {// do nothing
    }
  }

  exports.instance = instance = null;
  exports.timeout = timeout = 0;
};

exports.dispose = dispose;

var clearTimeout = function clearTimeout() {
  window.clearTimeout(timeout);
};

exports.clearTimeout = clearTimeout;

/***/ }),

/***/ "./node_modules/trezor-connect/lib/iframe/inline-styles.js":
/*!*****************************************************************!*\
  !*** ./node_modules/trezor-connect/lib/iframe/inline-styles.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var css = '.trezorconnect-container{position:fixed!important;display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-webkit-flex-direction:column!important;-ms-flex-direction:column!important;flex-direction:column!important;-webkit-box-align:center!important;-webkit-align-items:center!important;-ms-flex-align:center!important;align-items:center!important;z-index:10000!important;width:100%!important;height:100%!important;top:0!important;left:0!important;background:rgba(0,0,0,.35)!important;overflow:auto!important;padding:20px!important;margin:0!important}.trezorconnect-container .trezorconnect-window{position:relative!important;display:block!important;width:370px!important;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif!important;margin:auto!important;border-radius:3px!important;background-color:#fff!important;text-align:center!important;overflow:hidden!important}.trezorconnect-container .trezorconnect-window .trezorconnect-head{text-align:left;padding:12px 24px!important;display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-align:center!important;-webkit-align-items:center!important;-ms-flex-align:center!important;align-items:center!important}.trezorconnect-container .trezorconnect-window .trezorconnect-head .trezorconnect-logo{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.trezorconnect-container .trezorconnect-window .trezorconnect-head .trezorconnect-close{cursor:pointer!important;height:24px!important}.trezorconnect-container .trezorconnect-window .trezorconnect-head .trezorconnect-close svg{fill:#757575;-webkit-transition:fill .3s ease-in-out!important;transition:fill .3s ease-in-out!important}.trezorconnect-container .trezorconnect-window .trezorconnect-head .trezorconnect-close:hover svg{fill:#494949}.trezorconnect-container .trezorconnect-window .trezorconnect-body{padding:24px 24px 32px!important;background:#FBFBFB!important;border-top:1px solid #EBEBEB}.trezorconnect-container .trezorconnect-window .trezorconnect-body h3{color:#505050!important;font-size:16px!important;font-weight:500!important}.trezorconnect-container .trezorconnect-window .trezorconnect-body p{margin:8px 0 24px!important;font-weight:400!important;color:#A9A9A9!important;font-size:12px!important}.trezorconnect-container .trezorconnect-window .trezorconnect-body button{width:100%!important;padding:12px 24px!important;margin:0!important;border-radius:3px!important;font-size:14px!important;font-weight:300!important;cursor:pointer!important;background:#01B757!important;color:#fff!important;border:0!important;-webkit-transition:background-color .3s ease-in-out!important;transition:background-color .3s ease-in-out!important}.trezorconnect-container .trezorconnect-window .trezorconnect-body button:hover{background-color:#00AB51!important}.trezorconnect-container .trezorconnect-window .trezorconnect-body button:active{background-color:#009546!important}/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0IiwiJHN0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNBLHlCQUNJLFNBQUEsZ0JBQ0EsUUFBQSxzQkFDQSxRQUFBLHVCQUNBLFFBQUEsc0JBRUEsUUFBQSxlQUNBLG1CQUFBLG1CQUNBLHNCQUFBLGlCQUNBLHVCQUFBLGlCQUNBLG1CQUFBLGlCQUNBLGVBQUEsaUJBRUEsa0JBQUEsaUJBQ0Esb0JBQUEsaUJBQ0EsZUFBQSxpQkNmTSxZQUFhLGlCREFyQixRQUFTLGdCQWtCSCxNQUFBLGVBQ0EsT0FBQSxlQUNBLElBQUEsWUFDQSxLQUFBLFlBQ0EsV0FBQSwwQkFDQSxTQUFBLGVBQ0EsUUFBQSxlQUNBLE9BQUEsWUNkUiwrQ0RYRSxTQUFVLG1CQTZCQSxRQUFBLGdCQUNBLE1BQUEsZ0JBQ0EsWUFBQSxjQUFBLG1CQUFBLFdBQUEsT0FBQSxpQkFBQSxNQUFBLHFCQUNBLE9BQUEsZUNmVixjQUFlLGNEakJmLGlCQWlCRSxlQWtCWSxXQUFBLGlCQ2ZkLFNBQVUsaUJEbUJJLG1FQUNBLFdBQUEsS0NoQmQsUUFBUyxLQUFLLGVEeEJkLFFBQVMsc0JBMENTLFFBQUEsdUJBQ0EsUUFBQSxzQkNmbEIsUUFBUyxlRGlCSyxrQkE1QlosaUJBOEJvQixvQkFBQSxpQkNoQmxCLGVBQWdCLGlCRC9CWixZQWlCTixpQkFzQ1EsdUZBQ0EsaUJBQUEsRUNwQlYsYUFBYyxFRHBDVixTQUFVLEVBMkRBLEtBQUEsRUFFQSx3RkNwQmQsT0FBUSxrQkR6Q1IsT0FBUSxlQWlFTSw0RkFDQSxLQUFBLFFBQ0EsbUJBQUEsS0FBQSxJQUFBLHNCQ3BCZCxXQUFZLEtBQUssSUFBSyxzQkR3QlIsa0dBQ0EsS0FBQSxRQUVBLG1FQUNBLFFBQUEsS0FBQSxLQUFBLGVBQ0EsV0FBQSxrQkFDQSxXQUFBLElBQUEsTUFBQSxRQUVBLHNFQUNBLE1BQUEsa0JBQ0EsVUFBQSxlQ3JCZCxZQUFhLGNEd0JLLHFFQ3JCbEIsT0FBUSxJQUFJLEVBQUksZUR3QkYsWUFBQSxjQUNJLE1BQUEsa0JDdEJsQixVQUFXLGVBRWIsMEVBQ0UsTUFBTyxlQUNQLFFBQVMsS0FBSyxlQUNkLE9BQVEsWUFDUixjQUFlLGNBQ2YsVUFBVyxlQUNYLFlBQWEsY0FDYixPQUFRLGtCQUNSLFdBQVksa0JBQ1osTUFBTyxlQUNQLE9BQVEsWUFDUixtQkFBb0IsaUJBQWlCLElBQUssc0JBQzFDLFdBQVksaUJBQWlCLElBQUssc0JBRXBDLGdGQUNFLGlCQUFrQixrQkFFcEIsaUZBQ0UsaUJBQWtCIn0= */';
var _default = css;
exports.default = _default;

/***/ }),

/***/ "./node_modules/trezor-connect/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/trezor-connect/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
var _exportNames = {
  UI_EVENT: true,
  DEVICE_EVENT: true,
  TRANSPORT_EVENT: true,
  BLOCKCHAIN_EVENT: true,
  TRANSPORT: true,
  UI: true,
  DEVICE: true,
  BLOCKCHAIN: true
};
exports.BLOCKCHAIN = exports.DEVICE = exports.UI = exports.TRANSPORT = exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _events = _interopRequireDefault(__webpack_require__(/*! events */ "./node_modules/events/events.js"));

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/trezor-connect/lib/constants/index.js");

exports.UI_EVENT = _constants.UI_EVENT;
exports.DEVICE_EVENT = _constants.DEVICE_EVENT;
exports.TRANSPORT_EVENT = _constants.TRANSPORT_EVENT;
exports.BLOCKCHAIN_EVENT = _constants.BLOCKCHAIN_EVENT;

var TRANSPORT = _interopRequireWildcard(__webpack_require__(/*! ./constants/transport */ "./node_modules/trezor-connect/lib/constants/transport.js"));

exports.TRANSPORT = TRANSPORT;

var POPUP = _interopRequireWildcard(__webpack_require__(/*! ./constants/popup */ "./node_modules/trezor-connect/lib/constants/popup.js"));

var IFRAME = _interopRequireWildcard(__webpack_require__(/*! ./constants/iframe */ "./node_modules/trezor-connect/lib/constants/iframe.js"));

var UI = _interopRequireWildcard(__webpack_require__(/*! ./constants/ui */ "./node_modules/trezor-connect/lib/constants/ui.js"));

exports.UI = UI;

var DEVICE = _interopRequireWildcard(__webpack_require__(/*! ./constants/device */ "./node_modules/trezor-connect/lib/constants/device.js"));

exports.DEVICE = DEVICE;

var BLOCKCHAIN = _interopRequireWildcard(__webpack_require__(/*! ./constants/blockchain */ "./node_modules/trezor-connect/lib/constants/blockchain.js"));

exports.BLOCKCHAIN = BLOCKCHAIN;

var ERROR = _interopRequireWildcard(__webpack_require__(/*! ./constants/errors */ "./node_modules/trezor-connect/lib/constants/errors.js"));

var _PopupManager = _interopRequireDefault(__webpack_require__(/*! ./popup/PopupManager */ "./node_modules/trezor-connect/lib/popup/PopupManager.js"));

var iframe = _interopRequireWildcard(__webpack_require__(/*! ./iframe/builder */ "./node_modules/trezor-connect/lib/iframe/builder.js"));

var _button = _interopRequireDefault(__webpack_require__(/*! ./webusb/button */ "./node_modules/trezor-connect/lib/webusb/button.js"));

var _debug = _interopRequireWildcard(__webpack_require__(/*! ./utils/debug */ "./node_modules/trezor-connect/lib/utils/debug.js"));

var _message = __webpack_require__(/*! ./message */ "./node_modules/trezor-connect/lib/message/index.js");

var _ConnectSettings = __webpack_require__(/*! ./data/ConnectSettings */ "./node_modules/trezor-connect/lib/data/ConnectSettings.js");

var $T = _interopRequireWildcard(__webpack_require__(/*! ./types */ "./node_modules/trezor-connect/lib/types/index.js"));

var _blockchainEvent = __webpack_require__(/*! ./types/blockchainEvent */ "./node_modules/trezor-connect/lib/types/blockchainEvent.js");

Object.keys(_blockchainEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _blockchainEvent[key];
});

var _account = __webpack_require__(/*! ./types/account */ "./node_modules/trezor-connect/lib/types/account.js");

Object.keys(_account).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _account[key];
});
var eventEmitter = new _events.default();

var _log = (0, _debug.init)('[trezor-connect.js]');

var _settings;

var _popupManager;

var initPopupManager = function initPopupManager() {
  var pm = new _PopupManager.default(_settings);
  pm.on(POPUP.CLOSED, function () {
    iframe.postMessage({
      type: POPUP.CLOSED
    }, false);
  });
  return pm;
}; // handle message received from iframe


var handleMessage = function handleMessage(messageEvent) {
  // ignore messages from domain other then iframe origin
  if (messageEvent.origin !== iframe.origin) return;
  var message = (0, _message.parseMessage)(messageEvent.data); // TODO: destructuring with type
  // https://github.com/Microsoft/TypeScript/issues/240
  // const { id, event, type, data, error }: CoreMessage = message;

  var id = message.id || 0;
  var event = message.event;
  var type = message.type;
  var payload = message.payload;

  _log.log('handleMessage', message);

  switch (event) {
    case _constants.RESPONSE_EVENT:
      if (iframe.messagePromises[id]) {
        // clear unnecessary fields from message object
        delete message.type;
        delete message.event; // delete message.id;
        // message.__id = id;
        // resolve message promise (send result of call method)

        iframe.messagePromises[id].resolve(message);
        delete iframe.messagePromises[id];
      } else {
        _log.warn("Unknown message id " + id);
      }

      break;

    case _constants.DEVICE_EVENT:
      // pass DEVICE event up to html
      eventEmitter.emit(event, message);
      eventEmitter.emit(type, payload); // DEVICE_EVENT also emit single events (connect/disconnect...)

      break;

    case _constants.TRANSPORT_EVENT:
      eventEmitter.emit(event, message);
      eventEmitter.emit(type, payload);
      break;

    case _constants.BLOCKCHAIN_EVENT:
      eventEmitter.emit(event, message);
      eventEmitter.emit(type, payload);
      break;

    case _constants.UI_EVENT:
      if (type === IFRAME.BOOTSTRAP) {
        iframe.clearTimeout();
        break;
      } else if (type === POPUP.BOOTSTRAP) {
        // Popup did open but is still loading JS
        _popupManager.cancelOpenTimeout();

        break;
      } // pass UI event up


      eventEmitter.emit(event, message);
      eventEmitter.emit(type, payload);

      if (type === UI.IFRAME_HANDSHAKE) {
        if (payload.error) {
          iframe.initPromise.reject(new Error(payload.error));
        } else {
          _popupManager.setBroadcast(payload.broadcast);

          iframe.initPromise.resolve();
        }
      } else if (type === POPUP.CANCEL_POPUP_REQUEST) {
        _popupManager.cancel();
      } else if (type === UI.CLOSE_UI_WINDOW) {
        _popupManager.close();
      }

      break;

    default:
      _log.log('Undefined message', event, messageEvent);

  }
};

var init =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(settings) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (settings === void 0) {
              settings = {};
            }

            if (!iframe.instance) {
              _context.next = 3;
              break;
            }

            throw ERROR.IFRAME_INITIALIZED;

          case 3:
            if (!_settings) {
              _settings = (0, _ConnectSettings.parse)(settings);
            }

            if (_settings.manifest) {
              _context.next = 6;
              break;
            }

            throw ERROR.MANIFEST_NOT_SET;

          case 6:
            if (_settings.supportedBrowser) {
              _context.next = 8;
              break;
            }

            throw ERROR.BROWSER_NOT_SUPPORTED;

          case 8:
            if (!_popupManager) {
              _popupManager = initPopupManager();
            }

            _log.enabled = _settings.debug;
            window.addEventListener('message', handleMessage);
            window.addEventListener('beforeunload', function () {
              if (_popupManager) {
                _popupManager.onBeforeUnload();
              }

              iframe.dispose();
            });
            _context.next = 14;
            return iframe.init(_settings);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function init(_x) {
    return _ref.apply(this, arguments);
  };
}();

var call =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(params) {
    var response;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(!iframe.instance && !iframe.timeout)) {
              _context2.next = 19;
              break;
            }

            // init popup with lazy loading before iframe initialization
            _settings = (0, _ConnectSettings.parse)(_settings);

            if (_settings.manifest) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", {
              success: false,
              payload: {
                error: ERROR.MANIFEST_NOT_SET.message
              }
            });

          case 4:
            if (_settings.supportedBrowser) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", {
              success: false,
              payload: {
                error: ERROR.BROWSER_NOT_SUPPORTED.message
              }
            });

          case 6:
            _popupManager = initPopupManager();

            _popupManager.request(true); // auto init with default settings


            _context2.prev = 8;
            _context2.next = 11;
            return init(_settings);

          case 11:
            _context2.next = 13;
            return _popupManager.resolveLazyLoad();

          case 13:
            _context2.next = 19;
            break;

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](8);

            _popupManager.close();

            return _context2.abrupt("return", {
              success: false,
              payload: {
                error: _context2.t0
              }
            });

          case 19:
            if (!iframe.timeout) {
              _context2.next = 23;
              break;
            }

            return _context2.abrupt("return", {
              success: false,
              payload: {
                error: ERROR.NO_IFRAME.message
              }
            });

          case 23:
            if (!iframe.error) {
              _context2.next = 25;
              break;
            }

            return _context2.abrupt("return", {
              success: false,
              payload: {
                error: iframe.error
              }
            });

          case 25:
            // request popup window it might be used in the future
            // if (eventEmitter.listeners(UI_EVENT).length < 1) { _popupManager.request(params); }
            if (_settings.popup) {
              _popupManager.request();
            } // post message to iframe


            _context2.prev = 26;
            _context2.next = 29;
            return iframe.postMessage({
              type: IFRAME.CALL,
              payload: params
            });

          case 29:
            response = _context2.sent;

            if (!response) {
              _context2.next = 35;
              break;
            }

            // TODO: unlock popupManager request only if there wasn't error "in progress"
            if (response.payload.error !== ERROR.DEVICE_CALL_IN_PROGRESS.message) {
              _popupManager.unlock();
            }

            return _context2.abrupt("return", response);

          case 35:
            _popupManager.unlock(); // TODO


            return _context2.abrupt("return", {
              success: false,
              payload: {
                error: 'No response from iframe'
              }
            });

          case 37:
            _context2.next = 43;
            break;

          case 39:
            _context2.prev = 39;
            _context2.t1 = _context2["catch"](26);

            _log.error('__call error', _context2.t1);

            return _context2.abrupt("return", _context2.t1);

          case 43:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[8, 15], [26, 39]]);
  }));

  return function call(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var customMessageResponse = function customMessageResponse(payload) {
  iframe.postMessage({
    event: _constants.UI_EVENT,
    type: UI.CUSTOM_MESSAGE_RESPONSE,
    payload: payload
  });
};

var TrezorConnect = function TrezorConnect() {};

(0, _defineProperty2.default)(TrezorConnect, "manifest", function (data) {
  _settings = (0, _ConnectSettings.parse)({
    manifest: data
  });
});
(0, _defineProperty2.default)(TrezorConnect, "init",
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3(settings) {
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return init(settings);

          case 2:
            return _context3.abrupt("return", _context3.sent);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function (_x3) {
    return _ref3.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "on", function (type, fn) {
  eventEmitter.on(type, fn);
});
(0, _defineProperty2.default)(TrezorConnect, "off", function (type, fn) {
  eventEmitter.removeListener(type, fn);
});
(0, _defineProperty2.default)(TrezorConnect, "uiResponse", function (response) {
  iframe.postMessage((0, _objectSpread2.default)({
    event: _constants.UI_EVENT
  }, response));
});
(0, _defineProperty2.default)(TrezorConnect, "changeSettings", function (settings) {
  var parsedSettings = (0, _ConnectSettings.parse)(settings);
  _log.enabled = parsedSettings.debug;
  iframe.postMessage({
    type: UI.CHANGE_SETTINGS,
    payload: parsedSettings
  }, false);
});
(0, _defineProperty2.default)(TrezorConnect, "blockchainDisconnect",
/*#__PURE__*/
function () {
  var _ref4 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee4(params) {
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return call((0, _objectSpread2.default)({
              method: 'blockchainDisconnect'
            }, params));

          case 2:
            return _context4.abrupt("return", _context4.sent);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function (_x4) {
    return _ref4.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "blockchainEstimateFee",
/*#__PURE__*/
function () {
  var _ref5 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee5(params) {
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return call((0, _objectSpread2.default)({
              method: 'blockchainEstimateFee'
            }, params));

          case 2:
            return _context5.abrupt("return", _context5.sent);

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function (_x5) {
    return _ref5.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "blockchainSubscribe",
/*#__PURE__*/
function () {
  var _ref6 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee6(params) {
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return call((0, _objectSpread2.default)({
              method: 'blockchainSubscribe'
            }, params));

          case 2:
            return _context6.abrupt("return", _context6.sent);

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function (_x6) {
    return _ref6.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "blockchainUnsubscribe",
/*#__PURE__*/
function () {
  var _ref7 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee7(params) {
    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return call((0, _objectSpread2.default)({
              method: 'blockchainUnsubscribe'
            }, params));

          case 2:
            return _context7.abrupt("return", _context7.sent);

          case 3:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function (_x7) {
    return _ref7.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "customMessage",
/*#__PURE__*/
function () {
  var _ref8 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee9(params) {
    var callback, customMessageListener, response;
    return _regenerator.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            if (!(typeof params.callback !== 'function')) {
              _context9.next = 2;
              break;
            }

            return _context9.abrupt("return", {
              success: false,
              payload: {
                error: 'Parameter "callback" is not a function'
              }
            });

          case 2:
            // TODO: set message listener only if iframe is loaded correctly
            callback = params.callback;
            delete params.callback;

            customMessageListener =
            /*#__PURE__*/
            function () {
              var _ref9 = (0, _asyncToGenerator2.default)(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee8(event) {
                var data, payload;
                return _regenerator.default.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        data = event.data;

                        if (!(data && data.type === UI.CUSTOM_MESSAGE_REQUEST)) {
                          _context8.next = 6;
                          break;
                        }

                        _context8.next = 4;
                        return callback(data.payload);

                      case 4:
                        payload = _context8.sent;

                        if (payload) {
                          customMessageResponse(payload);
                        } else {
                          customMessageResponse({
                            message: 'release'
                          });
                        }

                      case 6:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8, this);
              }));

              return function customMessageListener(_x9) {
                return _ref9.apply(this, arguments);
              };
            }();

            window.addEventListener('message', customMessageListener, false);
            _context9.next = 8;
            return call((0, _objectSpread2.default)({
              method: 'customMessage'
            }, params));

          case 8:
            response = _context9.sent;
            window.removeEventListener('message', customMessageListener);
            return _context9.abrupt("return", response);

          case 11:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, this);
  }));

  return function (_x8) {
    return _ref8.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "requestLogin",
/*#__PURE__*/
function () {
  var _ref10 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee11(params) {
    var callback, loginChallengeListener, response;
    return _regenerator.default.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            if (!(typeof params.callback === 'function')) {
              _context11.next = 12;
              break;
            }

            callback = params.callback;
            delete params.callback; // delete callback value. this field cannot be sent using postMessage function
            // TODO: set message listener only if iframe is loaded correctly

            loginChallengeListener =
            /*#__PURE__*/
            function () {
              var _ref11 = (0, _asyncToGenerator2.default)(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee10(event) {
                var data, payload;
                return _regenerator.default.wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        data = event.data;

                        if (!(data && data.type === UI.LOGIN_CHALLENGE_REQUEST)) {
                          _context10.next = 13;
                          break;
                        }

                        _context10.prev = 2;
                        _context10.next = 5;
                        return callback();

                      case 5:
                        payload = _context10.sent;
                        iframe.postMessage({
                          event: _constants.UI_EVENT,
                          type: UI.LOGIN_CHALLENGE_RESPONSE,
                          payload: payload
                        });
                        _context10.next = 13;
                        break;

                      case 9:
                        _context10.prev = 9;
                        _context10.t0 = _context10["catch"](2);
                        console.warn('TrezorConnect.requestLogin: callback error', _context10.t0);
                        iframe.postMessage({
                          event: _constants.UI_EVENT,
                          type: UI.LOGIN_CHALLENGE_RESPONSE,
                          payload: _context10.t0.message
                        });

                      case 13:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10, this, [[2, 9]]);
              }));

              return function loginChallengeListener(_x11) {
                return _ref11.apply(this, arguments);
              };
            }();

            window.addEventListener('message', loginChallengeListener, false);
            _context11.next = 7;
            return call((0, _objectSpread2.default)({
              method: 'requestLogin'
            }, params, {
              asyncChallenge: true
            }));

          case 7:
            response = _context11.sent;
            window.removeEventListener('message', loginChallengeListener);
            return _context11.abrupt("return", response);

          case 12:
            _context11.next = 14;
            return call((0, _objectSpread2.default)({
              method: 'requestLogin'
            }, params));

          case 14:
            return _context11.abrupt("return", _context11.sent);

          case 15:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, this);
  }));

  return function (_x10) {
    return _ref10.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "resetDevice",
/*#__PURE__*/
function () {
  var _ref12 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee12(params) {
    return _regenerator.default.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return call((0, _objectSpread2.default)({
              method: 'resetDevice'
            }, params));

          case 2:
            return _context12.abrupt("return", _context12.sent);

          case 3:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, this);
  }));

  return function (_x12) {
    return _ref12.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "cardanoGetAddress",
/*#__PURE__*/
function () {
  var _ref13 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee13(params) {
    var useEventListener;
    return _regenerator.default.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            useEventListener = eventEmitter.listenerCount(UI.ADDRESS_VALIDATION) > 0;
            _context13.next = 3;
            return call((0, _objectSpread2.default)({
              method: 'cardanoGetAddress'
            }, params, {
              useEventListener: useEventListener
            }));

          case 3:
            return _context13.abrupt("return", _context13.sent);

          case 4:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, this);
  }));

  return function (_x13) {
    return _ref13.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "cardanoGetPublicKey",
/*#__PURE__*/
function () {
  var _ref14 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee14(params) {
    return _regenerator.default.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.next = 2;
            return call((0, _objectSpread2.default)({
              method: 'cardanoGetPublicKey'
            }, params));

          case 2:
            return _context14.abrupt("return", _context14.sent);

          case 3:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14, this);
  }));

  return function (_x14) {
    return _ref14.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "cardanoSignTransaction",
/*#__PURE__*/
function () {
  var _ref15 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee15(params) {
    return _regenerator.default.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.next = 2;
            return call((0, _objectSpread2.default)({
              method: 'cardanoSignTransaction'
            }, params));

          case 2:
            return _context15.abrupt("return", _context15.sent);

          case 3:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15, this);
  }));

  return function (_x15) {
    return _ref15.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "cipherKeyValue",
/*#__PURE__*/
function () {
  var _ref16 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee16(params) {
    return _regenerator.default.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _context16.next = 2;
            return call((0, _objectSpread2.default)({
              method: 'cipherKeyValue'
            }, params));

          case 2:
            return _context16.abrupt("return", _context16.sent);

          case 3:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16, this);
  }));

  return function (_x16) {
    return _ref16.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "composeTransaction",
/*#__PURE__*/
function () {
  var _ref17 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee17(params) {
    return _regenerator.default.wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _context17.next = 2;
            return call((0, _objectSpread2.default)({
              method: 'composeTransaction'
            }, params));

          case 2:
            return _context17.abrupt("return", _context17.sent);

          case 3:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17, this);
  }));

  return function (_x17) {
    return _ref17.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "debugLinkDecision",
/*#__PURE__*/
function () {
  var _ref18 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee18(params) {
    return _regenerator.default.wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            _context18.next = 2;
            return call((0, _objectSpread2.default)({
              method: 'debugLinkDecision'
            }, params));

          case 2:
            return _context18.abrupt("return", _context18.sent);

          case 3:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18, this);
  }));

  return function (_x18) {
    return _ref18.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "debugLinkGetState",
/*#__PURE__*/
function () {
  var _ref19 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee19(params) {
    return _regenerator.default.wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            _context19.next = 2;
            return call((0, _objectSpread2.default)({
              method: 'debugLinkGetState'
            }, params));

          case 2:
            return _context19.abrupt("return", _context19.sent);

          case 3:
          case "end":
            return _context19.stop();
        }
      }
    }, _callee19, this);
  }));

  return function (_x19) {
    return _ref19.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "ethereumGetAccountInfo",
/*#__PURE__*/
function () {
  var _ref20 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee20(params) {
    return _regenerator.default.wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            _context20.next = 2;
            return call((0, _objectSpread2.default)({
              method: 'ethereumGetAccountInfo'
            }, params));

          case 2:
            return _context20.abrupt("return", _context20.sent);

          case 3:
          case "end":
            return _context20.stop();
        }
      }
    }, _callee20, this);
  }));

  return function (_x20) {
    return _ref20.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "ethereumGetAddress",
/*#__PURE__*/
function () {
  var _ref21 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee21(params) {
    var useEventListener;
    return _regenerator.default.wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            useEventListener = eventEmitter.listenerCount(UI.ADDRESS_VALIDATION) > 0;
            _context21.next = 3;
            return call((0, _objectSpread2.default)({
              method: 'ethereumGetAddress'
            }, params, {
              useEventListener: useEventListener
            }));

          case 3:
            return _context21.abrupt("return", _context21.sent);

          case 4:
          case "end":
            return _context21.stop();
        }
      }
    }, _callee21, this);
  }));

  return function (_x21) {
    return _ref21.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "ethereumGetPublicKey",
/*#__PURE__*/
function () {
  var _ref22 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee22(params) {
    return _regenerator.default.wrap(function _callee22$(_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            _context22.next = 2;
            return call((0, _objectSpread2.default)({
              method: 'ethereumGetPublicKey'
            }, params));

          case 2:
            return _context22.abrupt("return", _context22.sent);

          case 3:
          case "end":
            return _context22.stop();
        }
      }
    }, _callee22, this);
  }));

  return function (_x22) {
    return _ref22.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "ethereumSignMessage",
/*#__PURE__*/
function () {
  var _ref23 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee23(params) {
    return _regenerator.default.wrap(function _callee23$(_context23) {
      while (1) {
        switch (_context23.prev = _context23.next) {
          case 0:
            _context23.next = 2;
            return call((0, _objectSpread2.default)({
              method: 'ethereumSignMessage'
            }, params));

          case 2:
            return _context23.abrupt("return", _context23.sent);

          case 3:
          case "end":
            return _context23.stop();
        }
      }
    }, _callee23, this);
  }));

  return function (_x23) {
    return _ref23.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "ethereumSignTransaction",
/*#__PURE__*/
function () {
  var _ref24 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee24(params) {
    return _regenerator.default.wrap(function _callee24$(_context24) {
      while (1) {
        switch (_context24.prev = _context24.next) {
          case 0:
            _context24.next = 2;
            return call((0, _objectSpread2.default)({
              method: 'ethereumSignTransaction'
            }, params));

          case 2:
            return _context24.abrupt("return", _context24.sent);

          case 3:
          case "end":
            return _context24.stop();
        }
      }
    }, _callee24, this);
  }));

  return function (_x24) {
    return _ref24.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "ethereumVerifyMessage",
/*#__PURE__*/
function () {
  var _ref25 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee25(params) {
    return _regenerator.default.wrap(function _callee25$(_context25) {
      while (1) {
        switch (_context25.prev = _context25.next) {
          case 0:
            _context25.next = 2;
            return call((0, _objectSpread2.default)({
              method: 'ethereumVerifyMessage'
            }, params));

          case 2:
            return _context25.abrupt("return", _context25.sent);

          case 3:
          case "end":
            return _context25.stop();
        }
      }
    }, _callee25, this);
  }));

  return function (_x25) {
    return _ref25.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "getAccountInfo",
/*#__PURE__*/
function () {
  var _ref26 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee26(params) {
    return _regenerator.default.wrap(function _callee26$(_context26) {
      while (1) {
        switch (_context26.prev = _context26.next) {
          case 0:
            _context26.next = 2;
            return call((0, _objectSpread2.default)({
              method: 'getAccountInfo'
            }, params));

          case 2:
            return _context26.abrupt("return", _context26.sent);

          case 3:
          case "end":
            return _context26.stop();
        }
      }
    }, _callee26, this);
  }));

  return function (_x26) {
    return _ref26.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "getAddress",
/*#__PURE__*/
function () {
  var _ref27 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee27(params) {
    var useEventListener;
    return _regenerator.default.wrap(function _callee27$(_context27) {
      while (1) {
        switch (_context27.prev = _context27.next) {
          case 0:
            useEventListener = eventEmitter.listenerCount(UI.ADDRESS_VALIDATION) > 0;
            _context27.next = 3;
            return call((0, _objectSpread2.default)({
              method: 'getAddress'
            }, params, {
              useEventListener: useEventListener
            }));

          case 3:
            return _context27.abrupt("return", _context27.sent);

          case 4:
          case "end":
            return _context27.stop();
        }
      }
    }, _callee27, this);
  }));

  return function (_x27) {
    return _ref27.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "getDeviceState",
/*#__PURE__*/
function () {
  var _ref28 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee28(params) {
    return _regenerator.default.wrap(function _callee28$(_context28) {
      while (1) {
        switch (_context28.prev = _context28.next) {
          case 0:
            _context28.next = 2;
            return call((0, _objectSpread2.default)({
              method: 'getDeviceState'
            }, params));

          case 2:
            return _context28.abrupt("return", _context28.sent);

          case 3:
          case "end":
            return _context28.stop();
        }
      }
    }, _callee28, this);
  }));

  return function (_x28) {
    return _ref28.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "getFeatures",
/*#__PURE__*/
function () {
  var _ref29 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee29(params) {
    return _regenerator.default.wrap(function _callee29$(_context29) {
      while (1) {
        switch (_context29.prev = _context29.next) {
          case 0:
            _context29.next = 2;
            return call((0, _objectSpread2.default)({
              method: 'getFeatures'
            }, params));

          case 2:
            return _context29.abrupt("return", _context29.sent);

          case 3:
          case "end":
            return _context29.stop();
        }
      }
    }, _callee29, this);
  }));

  return function (_x29) {
    return _ref29.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "getPublicKey",
/*#__PURE__*/
function () {
  var _ref30 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee30(params) {
    return _regenerator.default.wrap(function _callee30$(_context30) {
      while (1) {
        switch (_context30.prev = _context30.next) {
          case 0:
            _context30.next = 2;
            return call((0, _objectSpread2.default)({
              method: 'getPublicKey'
            }, params));

          case 2:
            return _context30.abrupt("return", _context30.sent);

          case 3:
          case "end":
            return _context30.stop();
        }
      }
    }, _callee30, this);
  }));

  return function (_x30) {
    return _ref30.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "liskGetAddress",
/*#__PURE__*/
function () {
  var _ref31 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee31(params) {
    var useEventListener;
    return _regenerator.default.wrap(function _callee31$(_context31) {
      while (1) {
        switch (_context31.prev = _context31.next) {
          case 0:
            useEventListener = eventEmitter.listenerCount(UI.ADDRESS_VALIDATION) > 0;
            _context31.next = 3;
            return call((0, _objectSpread2.default)({
              method: 'liskGetAddress'
            }, params, {
              useEventListener: useEventListener
            }));

          case 3:
            return _context31.abrupt("return", _context31.sent);

          case 4:
          case "end":
            return _context31.stop();
        }
      }
    }, _callee31, this);
  }));

  return function (_x31) {
    return _ref31.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "liskGetPublicKey",
/*#__PURE__*/
function () {
  var _ref32 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee32(params) {
    return _regenerator.default.wrap(function _callee32$(_context32) {
      while (1) {
        switch (_context32.prev = _context32.next) {
          case 0:
            _context32.next = 2;
            return call((0, _objectSpread2.default)({
              method: 'liskGetPublicKey'
            }, params));

          case 2:
            return _context32.abrupt("return", _context32.sent);

          case 3:
          case "end":
            return _context32.stop();
        }
      }
    }, _callee32, this);
  }));

  return function (_x32) {
    return _ref32.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "liskSignMessage",
/*#__PURE__*/
function () {
  var _ref33 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee33(params) {
    return _regenerator.default.wrap(function _callee33$(_context33) {
      while (1) {
        switch (_context33.prev = _context33.next) {
          case 0:
            _context33.next = 2;
            return call((0, _objectSpread2.default)({
              method: 'liskSignMessage'
            }, params));

          case 2:
            return _context33.abrupt("return", _context33.sent);

          case 3:
          case "end":
            return _context33.stop();
        }
      }
    }, _callee33, this);
  }));

  return function (_x33) {
    return _ref33.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "liskSignTransaction",
/*#__PURE__*/
function () {
  var _ref34 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee34(params) {
    return _regenerator.default.wrap(function _callee34$(_context34) {
      while (1) {
        switch (_context34.prev = _context34.next) {
          case 0:
            _context34.next = 2;
            return call((0, _objectSpread2.default)({
              method: 'liskSignTransaction'
            }, params));

          case 2:
            return _context34.abrupt("return", _context34.sent);

          case 3:
          case "end":
            return _context34.stop();
        }
      }
    }, _callee34, this);
  }));

  return function (_x34) {
    return _ref34.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "liskVerifyMessage",
/*#__PURE__*/
function () {
  var _ref35 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee35(params) {
    return _regenerator.default.wrap(function _callee35$(_context35) {
      while (1) {
        switch (_context35.prev = _context35.next) {
          case 0:
            _context35.next = 2;
            return call((0, _objectSpread2.default)({
              method: 'liskVerifyMessage'
            }, params));

          case 2:
            return _context35.abrupt("return", _context35.sent);

          case 3:
          case "end":
            return _context35.stop();
        }
      }
    }, _callee35, this);
  }));

  return function (_x35) {
    return _ref35.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "nemGetAddress",
/*#__PURE__*/
function () {
  var _ref36 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee36(params) {
    var useEventListener;
    return _regenerator.default.wrap(function _callee36$(_context36) {
      while (1) {
        switch (_context36.prev = _context36.next) {
          case 0:
            useEventListener = eventEmitter.listenerCount(UI.ADDRESS_VALIDATION) > 0;
            _context36.next = 3;
            return call((0, _objectSpread2.default)({
              method: 'nemGetAddress'
            }, params, {
              useEventListener: useEventListener
            }));

          case 3:
            return _context36.abrupt("return", _context36.sent);

          case 4:
          case "end":
            return _context36.stop();
        }
      }
    }, _callee36, this);
  }));

  return function (_x36) {
    return _ref36.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "nemSignTransaction",
/*#__PURE__*/
function () {
  var _ref37 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee37(params) {
    return _regenerator.default.wrap(function _callee37$(_context37) {
      while (1) {
        switch (_context37.prev = _context37.next) {
          case 0:
            _context37.next = 2;
            return call((0, _objectSpread2.default)({
              method: 'nemSignTransaction'
            }, params));

          case 2:
            return _context37.abrupt("return", _context37.sent);

          case 3:
          case "end":
            return _context37.stop();
        }
      }
    }, _callee37, this);
  }));

  return function (_x37) {
    return _ref37.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "pushTransaction",
/*#__PURE__*/
function () {
  var _ref38 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee38(params) {
    return _regenerator.default.wrap(function _callee38$(_context38) {
      while (1) {
        switch (_context38.prev = _context38.next) {
          case 0:
            _context38.next = 2;
            return call((0, _objectSpread2.default)({
              method: 'pushTransaction'
            }, params));

          case 2:
            return _context38.abrupt("return", _context38.sent);

          case 3:
          case "end":
            return _context38.stop();
        }
      }
    }, _callee38, this);
  }));

  return function (_x38) {
    return _ref38.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "rippleGetAccountInfo",
/*#__PURE__*/
function () {
  var _ref39 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee39(params) {
    return _regenerator.default.wrap(function _callee39$(_context39) {
      while (1) {
        switch (_context39.prev = _context39.next) {
          case 0:
            _context39.next = 2;
            return call((0, _objectSpread2.default)({
              method: 'rippleGetAccountInfo'
            }, params));

          case 2:
            return _context39.abrupt("return", _context39.sent);

          case 3:
          case "end":
            return _context39.stop();
        }
      }
    }, _callee39, this);
  }));

  return function (_x39) {
    return _ref39.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "rippleGetAddress",
/*#__PURE__*/
function () {
  var _ref40 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee40(params) {
    var useEventListener;
    return _regenerator.default.wrap(function _callee40$(_context40) {
      while (1) {
        switch (_context40.prev = _context40.next) {
          case 0:
            useEventListener = eventEmitter.listenerCount(UI.ADDRESS_VALIDATION) > 0;
            _context40.next = 3;
            return call((0, _objectSpread2.default)({
              method: 'rippleGetAddress'
            }, params, {
              useEventListener: useEventListener
            }));

          case 3:
            return _context40.abrupt("return", _context40.sent);

          case 4:
          case "end":
            return _context40.stop();
        }
      }
    }, _callee40, this);
  }));

  return function (_x40) {
    return _ref40.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "rippleSignTransaction",
/*#__PURE__*/
function () {
  var _ref41 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee41(params) {
    return _regenerator.default.wrap(function _callee41$(_context41) {
      while (1) {
        switch (_context41.prev = _context41.next) {
          case 0:
            _context41.next = 2;
            return call((0, _objectSpread2.default)({
              method: 'rippleSignTransaction'
            }, params));

          case 2:
            return _context41.abrupt("return", _context41.sent);

          case 3:
          case "end":
            return _context41.stop();
        }
      }
    }, _callee41, this);
  }));

  return function (_x41) {
    return _ref41.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "signMessage",
/*#__PURE__*/
function () {
  var _ref42 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee42(params) {
    return _regenerator.default.wrap(function _callee42$(_context42) {
      while (1) {
        switch (_context42.prev = _context42.next) {
          case 0:
            _context42.next = 2;
            return call((0, _objectSpread2.default)({
              method: 'signMessage'
            }, params));

          case 2:
            return _context42.abrupt("return", _context42.sent);

          case 3:
          case "end":
            return _context42.stop();
        }
      }
    }, _callee42, this);
  }));

  return function (_x42) {
    return _ref42.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "signTransaction",
/*#__PURE__*/
function () {
  var _ref43 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee43(params) {
    return _regenerator.default.wrap(function _callee43$(_context43) {
      while (1) {
        switch (_context43.prev = _context43.next) {
          case 0:
            _context43.next = 2;
            return call((0, _objectSpread2.default)({
              method: 'signTransaction'
            }, params));

          case 2:
            return _context43.abrupt("return", _context43.sent);

          case 3:
          case "end":
            return _context43.stop();
        }
      }
    }, _callee43, this);
  }));

  return function (_x43) {
    return _ref43.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "stellarGetAddress",
/*#__PURE__*/
function () {
  var _ref44 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee44(params) {
    var useEventListener;
    return _regenerator.default.wrap(function _callee44$(_context44) {
      while (1) {
        switch (_context44.prev = _context44.next) {
          case 0:
            useEventListener = eventEmitter.listenerCount(UI.ADDRESS_VALIDATION) > 0;
            _context44.next = 3;
            return call((0, _objectSpread2.default)({
              method: 'stellarGetAddress'
            }, params, {
              useEventListener: useEventListener
            }));

          case 3:
            return _context44.abrupt("return", _context44.sent);

          case 4:
          case "end":
            return _context44.stop();
        }
      }
    }, _callee44, this);
  }));

  return function (_x44) {
    return _ref44.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "stellarSignTransaction",
/*#__PURE__*/
function () {
  var _ref45 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee45(params) {
    return _regenerator.default.wrap(function _callee45$(_context45) {
      while (1) {
        switch (_context45.prev = _context45.next) {
          case 0:
            _context45.next = 2;
            return call((0, _objectSpread2.default)({
              method: 'stellarSignTransaction'
            }, params));

          case 2:
            return _context45.abrupt("return", _context45.sent);

          case 3:
          case "end":
            return _context45.stop();
        }
      }
    }, _callee45, this);
  }));

  return function (_x45) {
    return _ref45.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "tezosGetAddress",
/*#__PURE__*/
function () {
  var _ref46 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee46(params) {
    var useEventListener;
    return _regenerator.default.wrap(function _callee46$(_context46) {
      while (1) {
        switch (_context46.prev = _context46.next) {
          case 0:
            useEventListener = eventEmitter.listenerCount(UI.ADDRESS_VALIDATION) > 0;
            _context46.next = 3;
            return call((0, _objectSpread2.default)({
              method: 'tezosGetAddress'
            }, params, {
              useEventListener: useEventListener
            }));

          case 3:
            return _context46.abrupt("return", _context46.sent);

          case 4:
          case "end":
            return _context46.stop();
        }
      }
    }, _callee46, this);
  }));

  return function (_x46) {
    return _ref46.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "tezosGetPublicKey",
/*#__PURE__*/
function () {
  var _ref47 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee47(params) {
    return _regenerator.default.wrap(function _callee47$(_context47) {
      while (1) {
        switch (_context47.prev = _context47.next) {
          case 0:
            _context47.next = 2;
            return call((0, _objectSpread2.default)({
              method: 'tezosGetPublicKey'
            }, params));

          case 2:
            return _context47.abrupt("return", _context47.sent);

          case 3:
          case "end":
            return _context47.stop();
        }
      }
    }, _callee47, this);
  }));

  return function (_x47) {
    return _ref47.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "tezosSignTransaction",
/*#__PURE__*/
function () {
  var _ref48 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee48(params) {
    return _regenerator.default.wrap(function _callee48$(_context48) {
      while (1) {
        switch (_context48.prev = _context48.next) {
          case 0:
            _context48.next = 2;
            return call((0, _objectSpread2.default)({
              method: 'tezosSignTransaction'
            }, params));

          case 2:
            return _context48.abrupt("return", _context48.sent);

          case 3:
          case "end":
            return _context48.stop();
        }
      }
    }, _callee48, this);
  }));

  return function (_x48) {
    return _ref48.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "verifyMessage",
/*#__PURE__*/
function () {
  var _ref49 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee49(params) {
    return _regenerator.default.wrap(function _callee49$(_context49) {
      while (1) {
        switch (_context49.prev = _context49.next) {
          case 0:
            _context49.next = 2;
            return call((0, _objectSpread2.default)({
              method: 'verifyMessage'
            }, params));

          case 2:
            return _context49.abrupt("return", _context49.sent);

          case 3:
          case "end":
            return _context49.stop();
        }
      }
    }, _callee49, this);
  }));

  return function (_x49) {
    return _ref49.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "wipeDevice",
/*#__PURE__*/
function () {
  var _ref50 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee50(params) {
    return _regenerator.default.wrap(function _callee50$(_context50) {
      while (1) {
        switch (_context50.prev = _context50.next) {
          case 0:
            _context50.next = 2;
            return call((0, _objectSpread2.default)({
              method: 'wipeDevice'
            }, params));

          case 2:
            return _context50.abrupt("return", _context50.sent);

          case 3:
          case "end":
            return _context50.stop();
        }
      }
    }, _callee50, this);
  }));

  return function (_x50) {
    return _ref50.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(TrezorConnect, "dispose", function () {
  iframe.dispose();

  if (_popupManager) {
    _popupManager.close();
  }
});
(0, _defineProperty2.default)(TrezorConnect, "cancel", function () {
  if (_popupManager) {
    _popupManager.emit(POPUP.CLOSED);
  }
});
(0, _defineProperty2.default)(TrezorConnect, "renderWebUSBButton", function (className) {
  (0, _button.default)(className, _settings.webusbSrc, iframe.origin);
});
var _default = TrezorConnect;
exports.default = _default;

/***/ }),

/***/ "./node_modules/trezor-connect/lib/message/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/trezor-connect/lib/message/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseMessage = void 0;

// parse MessageEvent .data into CoreMessage
var parseMessage = function parseMessage(messageData) {
  var message = {
    event: messageData.event,
    type: messageData.type,
    payload: messageData.payload
  };

  if (typeof messageData.id === 'number') {
    message.id = messageData.id;
  }

  if (typeof messageData.success === 'boolean') {
    message.success = messageData.success;
  }

  return message;
};

exports.parseMessage = parseMessage;

/***/ }),

/***/ "./node_modules/trezor-connect/lib/popup/PopupManager.js":
/*!***************************************************************!*\
  !*** ./node_modules/trezor-connect/lib/popup/PopupManager.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _events = _interopRequireDefault(__webpack_require__(/*! events */ "./node_modules/events/events.js"));

var POPUP = _interopRequireWildcard(__webpack_require__(/*! ../constants/popup */ "./node_modules/trezor-connect/lib/constants/popup.js"));

var ERROR = _interopRequireWildcard(__webpack_require__(/*! ../constants/errors */ "./node_modules/trezor-connect/lib/constants/errors.js"));

var _showPopupRequest = __webpack_require__(/*! ./showPopupRequest */ "./node_modules/trezor-connect/lib/popup/showPopupRequest.js");

var _networkUtils = __webpack_require__(/*! ../utils/networkUtils */ "./node_modules/trezor-connect/lib/utils/networkUtils.js");

var _deferred = __webpack_require__(/*! ../utils/deferred */ "./node_modules/trezor-connect/lib/utils/deferred.js");

// const POPUP_REQUEST_TIMEOUT: number = 602;
var POPUP_REQUEST_TIMEOUT = 850;
var POPUP_CLOSE_INTERVAL = 500;
var POPUP_OPEN_TIMEOUT = 2000;

var PopupManager =
/*#__PURE__*/
function (_EventEmitter) {
  (0, _inheritsLoose2.default)(PopupManager, _EventEmitter);

  // Window
  function PopupManager(settings) {
    var _this;

    _this = _EventEmitter.call(this) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "requestTimeout", 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "closeInterval", 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "extension", false);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "extensionTabId", 0);
    _this.settings = settings;
    _this.src = settings.popupSrc;
    _this.origin = (0, _networkUtils.getOrigin)(settings.popupSrc);
    _this.handleLazyLoading = _this.handleLazyLoading.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))); // $FlowIssue chrome not declared outside

    _this.extension = typeof chrome !== 'undefined' && chrome.runtime && typeof chrome.runtime.onConnect !== 'undefined';

    if (_this.extension) {
      _this.handleExtensionConnect = _this.handleExtensionConnect.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
      _this.handleExtensionMessage = _this.handleExtensionMessage.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))); // $FlowIssue chrome not declared outside

      chrome.runtime.onConnect.addListener(_this.handleExtensionConnect);
    }

    return _this;
  }

  var _proto = PopupManager.prototype;

  _proto.request = function request(lazyLoad) {
    var _this2 = this;

    if (lazyLoad === void 0) {
      lazyLoad = false;
    }

    // popup request
    // TODO: ie - open imediately and hide it but post handshake after timeout
    // bring popup window to front
    if (this.locked) {
      if (this._window) {
        if (this.extension) {
          // $FlowIssue chrome not declared outside
          chrome.tabs.update(this._window.id, {
            active: true
          });
        } else {
          this._window.focus();
        }
      }

      return;
    }

    this.lazyLoad = lazyLoad ? (0, _deferred.create)(POPUP.INIT) : null;

    if (this.lazyLoad) {
      if (!this.extension) {
        window.addEventListener('message', this.handleLazyLoading, false);
      }
    }

    var openFn = this.open.bind(this);
    this.locked = true;

    if (!this.settings.supportedBrowser) {
      openFn();
    } else {
      this.requestTimeout = window.setTimeout(function () {
        _this2.requestTimeout = 0;
        openFn();
      }, lazyLoad || this.extension ? 1 : POPUP_REQUEST_TIMEOUT);
    }
  };

  _proto.cancel = function cancel() {
    this.close();
  };

  _proto.unlock = function unlock() {
    this.locked = false;
  };

  _proto.open = function open() {
    var _this3 = this;

    if (!this.settings.supportedBrowser) {
      this.openWrapper(this.src + '#unsupported');
      return;
    }

    this.openWrapper(this.lazyLoad ? this.src + '#loading' : this.src);
    this.closeInterval = window.setInterval(function () {
      if (_this3._window) {
        if (_this3.extension) {
          // $FlowIssue chrome not declared outside
          chrome.tabs.get(_this3._window.id, function (tab) {
            if (!tab) {
              _this3.close();

              _this3.emit(POPUP.CLOSED);
            }
          });
        } else if (_this3._window.closed) {
          _this3.close();

          _this3.emit(POPUP.CLOSED);
        }
      }
    }, POPUP_CLOSE_INTERVAL);
    this.openTimeout = window.setTimeout(function () {
      if (!(_this3._window && !_this3._window.closed)) {
        _this3.close();

        (0, _showPopupRequest.showPopupRequest)(_this3.open.bind(_this3), function () {
          _this3.emit(POPUP.CLOSED);
        });
      }
    }, POPUP_OPEN_TIMEOUT);
  };

  _proto.openWrapper = function openWrapper(url) {
    var _this4 = this;

    if (this.extension) {
      // $FlowIssue chrome not declared outside
      chrome.windows.getCurrent(null, function (currentWindow) {
        // Request comming from extension popup,
        // create new window above instead of opening new tab
        if (currentWindow.type !== 'normal') {
          // $FlowIssue chrome not declared outside
          chrome.windows.create({
            url: url
          }, function (newWindow) {
            // $FlowIssue chrome not declared outside
            chrome.tabs.query({
              windowId: newWindow.id,
              active: true
            }, function (tabs) {
              _this4._window = tabs[0];
            });
          });
        } else {
          // $FlowIssue chrome not declared outside
          chrome.tabs.query({
            currentWindow: true,
            active: true
          }, function (tabs) {
            _this4.extensionTabId = tabs[0].id; // $FlowIssue chrome not declared outside

            chrome.tabs.create({
              url: url,
              index: tabs[0].index + 1
            }, function (tab) {
              _this4._window = tab;
            });
          });
        }
      });
    } else {
      this._window = window.open('', '_blank');

      if (this._window) {
        this._window.location.href = url; // otherwise android/chrome loose window.opener reference
      }
    }
  };

  _proto.handleExtensionConnect = function handleExtensionConnect(port) {
    if (port.name === 'trezor-connect') {
      if (!this._window || this._window && this._window.id !== port.sender.tab.id) {
        port.disconnect();
        return;
      }

      this.extensionPort = port;
      this.extensionPort.onMessage.addListener(this.handleExtensionMessage);
    } else if (port.name === 'trezor-usb-permissions') {
      port.postMessage({
        broadcast: this.broadcast
      });
    }
  };

  _proto.handleExtensionMessage = function handleExtensionMessage(message) {
    if (!this.extensionPort) return;

    if (message === POPUP.EXTENSION_REQUEST) {
      this.extensionPort.postMessage({
        type: POPUP.EXTENSION_REQUEST,
        broadcast: this.broadcast
      });
    } else if (message === POPUP.INIT && this.lazyLoad) {
      this.lazyLoad.resolve(true);
    } else if (message === POPUP.EXTENSION_USB_PERMISSIONS) {
      // $FlowIssue chrome not declared outside
      chrome.tabs.query({
        currentWindow: true,
        active: true
      }, function (tabs) {
        // $FlowIssue chrome not declared outside
        chrome.tabs.create({
          url: 'trezor-usb-permissions.html',
          index: tabs[0].index + 1
        }, function (tab) {// do nothing
        });
      });
    } else if (message === POPUP.CLOSE_WINDOW) {
      this.emit(POPUP.CLOSED);
      this.close();
    }
  };

  _proto.setBroadcast = function setBroadcast(broadcast) {
    this.broadcast = broadcast;
  };

  _proto.handleLazyLoading = function handleLazyLoading(event) {
    if (this.lazyLoad && event.data && event.data === POPUP.INIT) {
      this.lazyLoad.resolve(true);
      window.removeEventListener('message', this.handleLazyLoading, false);
    }
  };

  _proto.resolveLazyLoad =
  /*#__PURE__*/
  function () {
    var _resolveLazyLoad = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!this.lazyLoad) {
                _context.next = 5;
                break;
              }

              _context.next = 3;
              return this.lazyLoad.promise;

            case 3:
              _context.next = 6;
              break;

            case 5:
              throw ERROR.POPUP_CLOSED.message;

            case 6:
              if (this.extension) {
                if (this.extensionPort) {
                  this.extensionPort.postMessage({
                    type: POPUP.INIT
                  });
                }
              } else if (this._window) {
                this._window.postMessage({
                  type: POPUP.INIT
                }, this.origin);
              }

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function resolveLazyLoad() {
      return _resolveLazyLoad.apply(this, arguments);
    }

    return resolveLazyLoad;
  }();

  _proto.close = function close() {
    this.locked = false;

    if (this.requestTimeout) {
      window.clearTimeout(this.requestTimeout);
      this.requestTimeout = 0;
    }

    if (this.openTimeout) {
      window.clearTimeout(this.openTimeout);
      this.openTimeout = 0;
    }

    if (this.closeInterval) {
      window.clearInterval(this.closeInterval);
      this.closeInterval = 0;
    }

    if (this.extensionPort) {
      this.extensionPort.disconnect();
      this.extensionPort = null;
    }

    if (this.extensionTabId) {
      // $FlowIssue chrome not declared outside
      chrome.tabs.update(this.extensionTabId, {
        active: true
      });
      this.extensionTabId = 0;
    }

    if (this.lazyLoad) {
      this.lazyLoad = null;
    }

    if (this._window) {
      if (this.extension) {
        // $FlowIssue chrome not declared outside
        chrome.tabs.remove(this._window.id);
      } else {
        this._window.close();
      }

      this._window = null;
    }
  };

  _proto.postMessage = function postMessage(message) {
    var _this5 = this;

    // post message before popup request finalized
    if (this.requestTimeout) {
      return;
    } // device needs interaction but there is no popup/ui
    // maybe popup request wasn't handled
    // ignore "ui_request_window" type


    if (!this._window && message.type !== 'ui_request_window' && this.openTimeout) {
      this.close();
      (0, _showPopupRequest.showPopupRequest)(this.open.bind(this), function () {
        _this5.emit(POPUP.CLOSED);
      });
      return;
    } // post message to popup window


    if (this._window) {
      this._window.postMessage(message, this.origin);
    }
  };

  _proto.onBeforeUnload = function onBeforeUnload() {
    this.close();
  };

  _proto.cancelOpenTimeout = function cancelOpenTimeout() {
    window.clearTimeout(this.openTimeout);
  };

  return PopupManager;
}(_events.default);

exports.default = PopupManager;

/***/ }),

/***/ "./node_modules/trezor-connect/lib/popup/showPopupRequest.js":
/*!*******************************************************************!*\
  !*** ./node_modules/trezor-connect/lib/popup/showPopupRequest.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.showPopupRequest = void 0;
var layerID = 'TrezorConnectInteractionLayer';
var layerInnerHtml = "\n    <div class=\"trezorconnect-container\" id=\"" + layerID + "\">\n        <div class=\"trezorconnect-window\">\n            <div class=\"trezorconnect-head\">\n                <svg class=\"trezorconnect-logo\" x=\"0px\" y=\"0px\" viewBox=\"0 0 163.7 41.9\" width=\"78px\" height=\"20px\" preserveAspectRatio=\"xMinYMin meet\">\n                    <polygon points=\"101.1,12.8 118.2,12.8 118.2,17.3 108.9,29.9 118.2,29.9 118.2,35.2 101.1,35.2 101.1,30.7 110.4,18.1 101.1,18.1\"/>\n                    <path d=\"M158.8,26.9c2.1-0.8,4.3-2.9,4.3-6.6c0-4.5-3.1-7.4-7.7-7.4h-10.5v22.3h5.8v-7.5h2.2l4.1,7.5h6.7L158.8,26.9z M154.7,22.5 h-4V18h4c1.5,0,2.5,0.9,2.5,2.2C157.2,21.6,156.2,22.5,154.7,22.5z\"/>\n                    <path d=\"M130.8,12.5c-6.8,0-11.6,4.9-11.6,11.5s4.9,11.5,11.6,11.5s11.7-4.9,11.7-11.5S137.6,12.5,130.8,12.5z M130.8,30.3 c-3.4,0-5.7-2.6-5.7-6.3c0-3.8,2.3-6.3,5.7-6.3c3.4,0,5.8,2.6,5.8,6.3C136.6,27.7,134.2,30.3,130.8,30.3z\"/>\n                    <polygon points=\"82.1,12.8 98.3,12.8 98.3,18 87.9,18 87.9,21.3 98,21.3 98,26.4 87.9,26.4 87.9,30 98.3,30 98.3,35.2 82.1,35.2 \"/>\n                    <path d=\"M24.6,9.7C24.6,4.4,20,0,14.4,0S4.2,4.4,4.2,9.7v3.1H0v22.3h0l14.4,6.7l14.4-6.7h0V12.9h-4.2V9.7z M9.4,9.7 c0-2.5,2.2-4.5,5-4.5s5,2,5,4.5v3.1H9.4V9.7z M23,31.5l-8.6,4l-8.6-4V18.1H23V31.5z\"/>\n                    <path d=\"M79.4,20.3c0-4.5-3.1-7.4-7.7-7.4H61.2v22.3H67v-7.5h2.2l4.1,7.5H80l-4.9-8.3C77.2,26.1,79.4,24,79.4,20.3z M71,22.5h-4V18 h4c1.5,0,2.5,0.9,2.5,2.2C73.5,21.6,72.5,22.5,71,22.5z\"/>\n                    <polygon points=\"40.5,12.8 58.6,12.8 58.6,18.1 52.4,18.1 52.4,35.2 46.6,35.2 46.6,18.1 40.5,18.1 \"/>\n                </svg>\n                <div class=\"trezorconnect-close\">\n                    <svg x=\"0px\" y=\"0px\" viewBox=\"24 24 60 60\" width=\"24px\" height=\"24px\" preserveAspectRatio=\"xMinYMin meet\">\n                        <polygon class=\"st0\" points=\"40,67.9 42.1,70 55,57.1 67.9,70 70,67.9 57.1,55 70,42.1 67.9,40 55,52.9 42.1,40 40,42.1 52.9,55 \"/>\n                    </svg>\n                </div>\n            </div>\n            <div class=\"trezorconnect-body\">\n                <h3>Popup was blocked</h3>\n                <p>Please click to \u201CContinue\u201D to open popup manually</p>\n                <button class=\"trezorconnect-open\">Continue</button>\n            </div>\n        </div>\n    </div>\n";

var showPopupRequest = function showPopupRequest(open, cancel) {
  if (document.getElementById(layerID)) {
    return;
  }

  var div = document.createElement('div');
  div.id = layerID;
  div.className = 'trezorconnect-container';
  div.innerHTML = layerInnerHtml;

  if (document.body) {
    document.body.appendChild(div);
  }

  var button = div.getElementsByClassName('trezorconnect-open')[0];

  button.onclick = function () {
    open();

    if (document.body) {
      document.body.removeChild(div);
    }
  };

  var close = div.getElementsByClassName('trezorconnect-close')[0];

  close.onclick = function () {
    cancel();

    if (document.body) {
      document.body.removeChild(div);
    }
  };
};

exports.showPopupRequest = showPopupRequest;

/***/ }),

/***/ "./node_modules/trezor-connect/lib/types/account.js":
/*!**********************************************************!*\
  !*** ./node_modules/trezor-connect/lib/types/account.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./node_modules/trezor-connect/lib/types/blockchainEvent.js":
/*!******************************************************************!*\
  !*** ./node_modules/trezor-connect/lib/types/blockchainEvent.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var BLOCKCHAIN = _interopRequireWildcard(__webpack_require__(/*! ../constants/blockchain */ "./node_modules/trezor-connect/lib/constants/blockchain.js"));

/***/ }),

/***/ "./node_modules/trezor-connect/lib/types/cardano.js":
/*!**********************************************************!*\
  !*** ./node_modules/trezor-connect/lib/types/cardano.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./node_modules/trezor-connect/lib/types/coinInfo.js":
/*!***********************************************************!*\
  !*** ./node_modules/trezor-connect/lib/types/coinInfo.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./node_modules/trezor-connect/lib/types/ethereum.js":
/*!***********************************************************!*\
  !*** ./node_modules/trezor-connect/lib/types/ethereum.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./node_modules/trezor-connect/lib/types/index.js":
/*!********************************************************!*\
  !*** ./node_modules/trezor-connect/lib/types/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;

var _constants = __webpack_require__(/*! ../constants */ "./node_modules/trezor-connect/lib/constants/index.js");

var TRANSPORT = _interopRequireWildcard(__webpack_require__(/*! ../constants/transport */ "./node_modules/trezor-connect/lib/constants/transport.js"));

var POPUP = _interopRequireWildcard(__webpack_require__(/*! ../constants/popup */ "./node_modules/trezor-connect/lib/constants/popup.js"));

var UI = _interopRequireWildcard(__webpack_require__(/*! ../constants/ui */ "./node_modules/trezor-connect/lib/constants/ui.js"));

var DEVICE = _interopRequireWildcard(__webpack_require__(/*! ../constants/device */ "./node_modules/trezor-connect/lib/constants/device.js"));

var P = _interopRequireWildcard(__webpack_require__(/*! ./params */ "./node_modules/trezor-connect/lib/types/params.js"));

var R = _interopRequireWildcard(__webpack_require__(/*! ./response */ "./node_modules/trezor-connect/lib/types/response.js"));

Object.keys(R).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = R[key];
});

var CARDANO = _interopRequireWildcard(__webpack_require__(/*! ./cardano */ "./node_modules/trezor-connect/lib/types/cardano.js"));

var RIPPLE = _interopRequireWildcard(__webpack_require__(/*! ./ripple */ "./node_modules/trezor-connect/lib/types/ripple.js"));

var ETHEREUM = _interopRequireWildcard(__webpack_require__(/*! ./ethereum */ "./node_modules/trezor-connect/lib/types/ethereum.js"));

var NEM = _interopRequireWildcard(__webpack_require__(/*! ./nem */ "./node_modules/trezor-connect/lib/types/nem.js"));

var STELLAR = _interopRequireWildcard(__webpack_require__(/*! ./stellar */ "./node_modules/trezor-connect/lib/types/stellar.js"));

var LISK = _interopRequireWildcard(__webpack_require__(/*! ./lisk */ "./node_modules/trezor-connect/lib/types/lisk.js"));

var TEZOS = _interopRequireWildcard(__webpack_require__(/*! ./tezos */ "./node_modules/trezor-connect/lib/types/tezos.js"));

var _coinInfo = __webpack_require__(/*! ./coinInfo */ "./node_modules/trezor-connect/lib/types/coinInfo.js");

Object.keys(_coinInfo).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _coinInfo[key];
});

/***/ }),

/***/ "./node_modules/trezor-connect/lib/types/lisk.js":
/*!*******************************************************!*\
  !*** ./node_modules/trezor-connect/lib/types/lisk.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./node_modules/trezor-connect/lib/types/nem.js":
/*!******************************************************!*\
  !*** ./node_modules/trezor-connect/lib/types/nem.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./node_modules/trezor-connect/lib/types/params.js":
/*!*********************************************************!*\
  !*** ./node_modules/trezor-connect/lib/types/params.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./node_modules/trezor-connect/lib/types/response.js":
/*!***********************************************************!*\
  !*** ./node_modules/trezor-connect/lib/types/response.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./node_modules/trezor-connect/lib/types/ripple.js":
/*!*********************************************************!*\
  !*** ./node_modules/trezor-connect/lib/types/ripple.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./node_modules/trezor-connect/lib/types/stellar.js":
/*!**********************************************************!*\
  !*** ./node_modules/trezor-connect/lib/types/stellar.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./node_modules/trezor-connect/lib/types/tezos.js":
/*!********************************************************!*\
  !*** ./node_modules/trezor-connect/lib/types/tezos.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./node_modules/trezor-connect/lib/utils/debug.js":
/*!********************************************************!*\
  !*** ./node_modules/trezor-connect/lib/utils/debug.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) { // https://stackoverflow.com/questions/7505623/colors-in-javascript-console
// https://github.com/pimterry/loglevel/blob/master/lib/loglevel.js
// http://www.color-hex.com/color-palette/5016

exports.__esModule = true;
exports.popupConsole = exports.enableByPrefix = exports.getLog = exports.enable = exports.init = exports.default = void 0;

var _this = void 0;

var colors = {
  // green
  'DescriptorStream': 'color: #77ab59',
  'DeviceList': 'color: #36802d',
  'Device': 'color: #bada55',
  'Core': 'color: #c9df8a',
  'IFrame': 'color: #FFFFFF; background: #f4a742;',
  'Popup': 'color: #f48a00'
};

var Log =
/*#__PURE__*/
function () {
  function Log(prefix, enabled) {
    if (enabled === void 0) {
      enabled = false;
    }

    this.prefix = prefix;
    this.enabled = enabled;
    this.messages = [];
    this.css = colors[prefix] || 'color: #000000; background: #FFFFFF;';
  }

  var _proto = Log.prototype;

  _proto.addMessage = function addMessage(level, prefix) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    this.messages.push({
      level: level,
      prefix: prefix,
      message: args,
      timestamp: new Date().getTime()
    });
  };

  _proto.log = function log() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    this.addMessage.apply(this, ['log', this.prefix].concat(args));

    if (this.enabled) {
      var _console;

      (_console = console).log.apply(_console, [this.prefix].concat(args));
    }
  };

  _proto.error = function error() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    this.addMessage.apply(this, ['error', this.prefix].concat(args));

    if (this.enabled) {
      var _console2;

      (_console2 = console).error.apply(_console2, [this.prefix].concat(args));
    }
  };

  _proto.warn = function warn() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    this.addMessage.apply(this, ['warn', this.prefix].concat(args));

    if (this.enabled) {
      var _console3;

      (_console3 = console).warn.apply(_console3, [this.prefix].concat(args));
    }
  };

  _proto.debug = function debug() {
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    this.addMessage.apply(this, ['debug', this.prefix].concat(args));

    if (this.enabled) {
      var _console4;

      (_console4 = console).log.apply(_console4, ['%c' + this.prefix, this.css].concat(args));
    }
  };

  return Log;
}();

exports.default = Log;
var _logs = {};

var init = function init(prefix, enabled) {
  var enab = typeof enabled === 'boolean' ? enabled : false;
  var instance = new Log(prefix, enab);
  _logs[prefix] = instance;
  return instance;
};

exports.init = init;

var enable = function enable(enabled) {
  var _arr = Object.keys(_logs);

  for (var _i = 0; _i < _arr.length; _i++) {
    var l = _arr[_i];
    _logs[l].enabled = enabled;
  }
};

exports.enable = enable;

var getLog = function getLog(args) {
  // if
  var logs = [];

  var _arr2 = Object.keys(_logs);

  for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
    var l = _arr2[_i2];
    logs = logs.concat(_logs[l].messages);
  }

  logs.sort(function (a, b) {
    return a.timestamp - b.timestamp;
  });
  return logs;
};

exports.getLog = getLog;

var enableByPrefix = function enableByPrefix(prefix, enabled) {
  if (_logs[prefix]) {
    _logs[prefix].enabled = enabled;
  }
}; // TODO: enable/disable log at runtime


exports.enableByPrefix = enableByPrefix;

var popupConsole = function popupConsole(tag, postMessage) {
  var c = global.console;
  var orig = {
    error: c.error,
    // warn: c.warn,
    info: c.info,
    debug: c.debug,
    log: c.log
  };
  var log = [];

  var inject = function inject(method, level) {
    return function () {
      // args.unshift('[popup.js]');
      var time = new Date().toUTCString();

      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      log.push([level, time].concat(args));
      postMessage.apply(_this, [{
        type: tag,
        level: level,
        time: time,
        args: JSON.stringify(args)
      }]);
      return method.apply(c, args);
    };
  };

  for (var level in orig) {
    c[level] = inject(orig[level], level);
  }
};

exports.popupConsole = popupConsole;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/trezor-connect/lib/utils/deferred.js":
/*!***********************************************************!*\
  !*** ./node_modules/trezor-connect/lib/utils/deferred.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.create = create;
exports.createAsync = createAsync;
exports.resolveTimeoutPromise = resolveTimeoutPromise;
exports.rejectTimeoutPromise = rejectTimeoutPromise;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

function create(arg, device) {
  var localResolve = function localResolve(t) {};

  var localReject = function localReject(e) {};

  var id;
  var promise = new Promise(
  /*#__PURE__*/
  function () {
    var _ref = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(resolve, reject) {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              localResolve = resolve;
              localReject = reject;

              if (!(typeof arg === 'function')) {
                _context.next = 11;
                break;
              }

              _context.prev = 3;
              _context.next = 6;
              return arg();

            case 6:
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](3);
              reject(_context.t0);

            case 11:
              if (typeof arg === 'string') id = arg;

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[3, 8]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
  return {
    id: id,
    device: device,
    resolve: localResolve,
    reject: localReject,
    promise: promise
  };
}

function createAsync(innerFn) {
  var localResolve = function localResolve(t) {};

  var localReject = function localReject(e) {};

  var promise = new Promise(function (resolve, reject) {
    localResolve = resolve;
    localReject = reject;
  });

  var inner =
  /*#__PURE__*/
  function () {
    var _ref2 = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2() {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return innerFn();

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function inner() {
      return _ref2.apply(this, arguments);
    };
  }();

  return {
    resolve: localResolve,
    reject: localReject,
    promise: promise,
    run: function run() {
      inner();
      return promise;
    }
  };
}

function resolveTimeoutPromise(delay, result) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(result);
    }, delay);
  });
}

function rejectTimeoutPromise(delay, error) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(error);
    }, delay);
  });
}

/***/ }),

/***/ "./node_modules/trezor-connect/lib/utils/networkUtils.js":
/*!***************************************************************!*\
  !*** ./node_modules/trezor-connect/lib/utils/networkUtils.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.getOrigin = exports.httpRequest = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

__webpack_require__(/*! whatwg-fetch */ "./node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js");

var httpRequest =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(url, type) {
    var response, txt;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (type === void 0) {
              type = 'text';
            }

            _context.next = 3;
            return fetch(url, {
              credentials: 'same-origin'
            });

          case 3:
            response = _context.sent;

            if (!response.ok) {
              _context.next = 23;
              break;
            }

            if (!(type === 'json')) {
              _context.next = 12;
              break;
            }

            _context.next = 8;
            return response.text();

          case 8:
            txt = _context.sent;
            return _context.abrupt("return", JSON.parse(txt));

          case 12:
            if (!(type === 'binary')) {
              _context.next = 18;
              break;
            }

            _context.next = 15;
            return response.arrayBuffer();

          case 15:
            return _context.abrupt("return", _context.sent);

          case 18:
            _context.next = 20;
            return response.text();

          case 20:
            return _context.abrupt("return", _context.sent);

          case 21:
            _context.next = 24;
            break;

          case 23:
            throw new Error("httpRequest error: " + url + " " + response.statusText);

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function httpRequest(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.httpRequest = httpRequest;

var getOrigin = function getOrigin(url) {
  // eslint-disable-next-line no-irregular-whitespace, no-useless-escape
  var parts = url.match(/^.+\:\/\/[^\/]+/);
  return Array.isArray(parts) && parts.length > 0 ? parts[0] : 'unknown';
};

exports.getOrigin = getOrigin;

/***/ }),

/***/ "./node_modules/trezor-connect/lib/webusb/button.js":
/*!**********************************************************!*\
  !*** ./node_modules/trezor-connect/lib/webusb/button.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var render = function render(className, url, origin) {
  var query = className || '.trezor-webusb-button';
  var buttons = document.querySelectorAll(query);
  var src = url + "?" + Date.now();
  buttons.forEach(function (b) {
    if (b.getElementsByTagName('iframe').length < 1) {
      var bounds = b.getBoundingClientRect();
      var btnIframe = document.createElement('iframe');
      btnIframe.frameBorder = '0';
      btnIframe.width = Math.round(bounds.width) + 'px';
      btnIframe.height = Math.round(bounds.height) + 'px';
      btnIframe.style.position = 'absolute';
      btnIframe.style.top = '0px';
      btnIframe.style.left = '0px';
      btnIframe.style.zIndex = '1'; // btnIframe.style.opacity = '0'; // this makes click impossible on cross-origin

      btnIframe.setAttribute('allow', 'usb');
      btnIframe.setAttribute('scrolling', 'no');

      btnIframe.onload = function () {
        btnIframe.contentWindow.postMessage({// style: JSON.stringify( window.getComputedStyle(b) ),
          // outer: b.outerHTML,
          // inner: b.innerHTML
        }, origin);
      };

      btnIframe.src = src; // inject iframe into button

      b.append(btnIframe);
    }
  });
};

var _default = render;
exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=8.js.map