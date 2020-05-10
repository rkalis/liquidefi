(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/bnc-onboard/dist/esm/network-2587d464.js":
/*!***************************************************************!*\
  !*** ./node_modules/bnc-onboard/dist/esm/network-2587d464.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _onboard_9d401f90_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onboard-9d401f90.js */ "./node_modules/bnc-onboard/dist/esm/onboard-9d401f90.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bnc_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bnc-sdk */ "./node_modules/bnc-sdk/dist/esm/index.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bowser */ "./node_modules/bowser/es5.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_4__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







function network() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var heading = options.heading,
      description = options.description,
      icon = options.icon;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(stateAndHelpers) {
      var network, appNetworkId, walletSelect, exit, stateSyncStatus, stateStore;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              network = stateAndHelpers.network, appNetworkId = stateAndHelpers.appNetworkId, walletSelect = stateAndHelpers.walletSelect, exit = stateAndHelpers.exit, stateSyncStatus = stateAndHelpers.stateSyncStatus, stateStore = stateAndHelpers.stateStore;

              if (!(network === null)) {
                _context.next = 5;
                break;
              }

              if (!stateSyncStatus.network) {
                _context.next = 5;
                break;
              }

              _context.next = 5;
              return new Promise(function (resolve) {
                stateSyncStatus.network && stateSyncStatus.network.then(resolve);
                setTimeout(function () {
                  if (network === null) {
                    // if prom isn't resolving after 500ms, then stop waiting
                    resolve();
                  }
                }, 500);
              });

            case 5:
              if (!(stateStore.network.get() != appNetworkId)) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", {
                heading: heading || 'You Must Change Networks',
                description: description || "We've detected that you need to switch your wallet's network from <b>".concat(Object(_onboard_9d401f90_js__WEBPACK_IMPORTED_MODULE_1__["n"])(network), "</b> to <b>").concat(Object(_onboard_9d401f90_js__WEBPACK_IMPORTED_MODULE_1__["n"])(appNetworkId), " network</b> for this Dapp. <br><br> <i style=\"font-size: inherit; font-family: inherit;\">*Some wallets may not support changing networks. If you can not change networks in your wallet you may consider switching to a different wallet.</i>"),
                eventCode: 'networkFail',
                button: {
                  onclick: function onclick() {
                    exit();
                    walletSelect();
                  },
                  text: 'Switch Wallet'
                },
                icon: icon || _onboard_9d401f90_js__WEBPACK_IMPORTED_MODULE_1__["b"]
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

/* harmony default export */ __webpack_exports__["default"] = (network);

/***/ })

}]);
//# sourceMappingURL=29.js.map