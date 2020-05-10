(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/bnc-onboard/dist/esm/balance-834327cb.js":
/*!***************************************************************!*\
  !*** ./node_modules/bnc-onboard/dist/esm/balance-834327cb.js ***!
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







function balance() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    minimumBalance: '0'
  };
  Object(_onboard_9d401f90_js__WEBPACK_IMPORTED_MODULE_1__["v"])({
    name: 'balance options',
    value: options,
    type: 'object'
  });
  var minimumBalance = options.minimumBalance,
      heading = options.heading,
      description = options.description,
      icon = options.icon;
  Object(_onboard_9d401f90_js__WEBPACK_IMPORTED_MODULE_1__["v"])({
    name: 'minimumBalance',
    value: minimumBalance,
    type: 'string'
  });
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(StateAndHelpers) {
      var balance, BigNumber, stateSyncStatus, stateStore;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              balance = StateAndHelpers.balance, BigNumber = StateAndHelpers.BigNumber, stateSyncStatus = StateAndHelpers.stateSyncStatus, stateStore = StateAndHelpers.stateStore;

              if (!(balance === null)) {
                _context.next = 10;
                break;
              }

              if (!stateSyncStatus.balance) {
                _context.next = 10;
                break;
              }

              _context.prev = 3;
              _context.next = 6;
              return stateSyncStatus.balance;

            case 6:
              _context.next = 10;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](3);

            case 10:
              if (!BigNumber(stateStore.balance.get()).lt(BigNumber(minimumBalance))) {
                _context.next = 12;
                break;
              }

              return _context.abrupt("return", {
                heading: heading || 'Get Some ETH',
                description: description || "Your current account has less than the necessary minimum balance of ".concat(BigNumber(minimumBalance).div(BigNumber('1000000000000000000')).toString(10), " ETH."),
                eventCode: 'nsfFail',
                icon: icon || _onboard_9d401f90_js__WEBPACK_IMPORTED_MODULE_1__["d"]
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 8]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

/* harmony default export */ __webpack_exports__["default"] = (balance);

/***/ })

}]);
//# sourceMappingURL=25.js.map