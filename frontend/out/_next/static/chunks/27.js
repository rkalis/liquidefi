(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/bnc-onboard/dist/esm/fortmatic-91b8612a.js":
/*!*****************************************************************!*\
  !*** ./node_modules/bnc-onboard/dist/esm/fortmatic-91b8612a.js ***!
  \*****************************************************************/
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






var fortmaticIcon = "\n  <svg \n    height=\"40\" \n    viewBox=\"0 0 40 40\" \n    width=\"40\" \n    xmlns=\"http://www.w3.org/2000/svg\"\n  >\n    <path d=\"m2744.99995 1155h9.99997 10.00008v9.98139h-10.00008-9.99997-9.99998v9.9814.64001 9.28323.05815 9.9234h-9.99997v-9.9234-.05815-9.28323-.64001-9.9814-9.98139h9.99997zm9.99961 29.88552h-9.94167v-9.92324h19.93595v10.27235c0 2.55359-1.01622 5.00299-2.82437 6.80909-1.80867 1.8061-4.26182 2.82181-6.82018 2.82335h-.34973z\" \n      fill=\"#617bff\" \n      fill-rule=\"evenodd\" \n      transform=\"translate(-2725 -1155)\"/>\n  </svg>\n";

function fortmatic(options) {
  var apiKey = options.apiKey,
      networkId = options.networkId,
      preferred = options.preferred,
      label = options.label,
      iconSrc = options.iconSrc,
      svg = options.svg;
  return {
    name: label || 'Fortmatic',
    svg: svg || fortmaticIcon,
    iconSrc: iconSrc,
    wallet: function () {
      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(helpers) {
        var _yield$import, Fortmatic, instance, provider, BigNumber;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __webpack_require__.e(/*! import() */ 35).then(__webpack_require__.t.bind(null, /*! fortmatic */ "./node_modules/fortmatic/lib/fortmatic.js", 7));

              case 2:
                _yield$import = _context.sent;
                Fortmatic = _yield$import["default"];
                instance = new Fortmatic(apiKey, networkId === 1 ? undefined : Object(_onboard_9d401f90_js__WEBPACK_IMPORTED_MODULE_1__["n"])(networkId));
                provider = instance.getProvider();
                BigNumber = helpers.BigNumber;
                return _context.abrupt("return", {
                  provider: provider,
                  instance: instance,
                  "interface": {
                    name: 'Fortmatic',
                    connect: instance.user.login,
                    disconnect: instance.user.logout,
                    address: {
                      get: function get() {
                        return Promise.resolve(provider.account);
                      }
                    },
                    network: {
                      get: function get() {
                        return Promise.resolve(networkId);
                      }
                    },
                    balance: {
                      get: function get() {
                        return provider.account && instance.user.getBalances().then(function (res) {
                          return res[0] ? BigNumber(res[0].crypto_amount).times(BigNumber('1000000000000000000')).toString(10) : null;
                        });
                      }
                    }
                  }
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function wallet(_x) {
        return _wallet.apply(this, arguments);
      }

      return wallet;
    }(),
    type: 'sdk',
    desktop: true,
    mobile: true,
    preferred: preferred
  };
}

/* harmony default export */ __webpack_exports__["default"] = (fortmatic);

/***/ })

}]);
//# sourceMappingURL=27.js.map