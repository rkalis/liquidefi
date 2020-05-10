(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/bnc-onboard/dist/esm/squarelink-2217b3a9.js":
/*!******************************************************************!*\
  !*** ./node_modules/bnc-onboard/dist/esm/squarelink-2217b3a9.js ***!
  \******************************************************************/
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






var sqlkIcon = "\n  <svg width=\"40px\" height=\"40px\" viewBox=\"0 0 88 88\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n  <g id=\"Identity\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n      <g id=\"Artboard\" transform=\"translate(-11.000000, -220.000000)\">\n          <g id=\"Group\" transform=\"translate(11.508925, 220.556971)\">\n              <circle id=\"Oval\" fill=\"#313D53\" cx=\"43.4910749\" cy=\"43.4910749\" r=\"43.4910749\"></circle>\n              <path d=\"M26.9807751,53.5120539 L26.9807751,56.7049531 C26.9807751,58.9140921 28.7716361,60.7049531 30.9807751,60.7049531 L56.0422363,60.7049531 C58.2513753,60.7049531 60.0422363,58.9140921 60.0422363,56.7049531 L60.0422363,30.2473297 C60.0422363,28.0381907 58.2513753,26.2473297 56.0422363,26.2473297 L26.9807751,26.2473297 L26.9807751,47.8897807 L26.9807751,53.5120539 Z M20.4910749,20.4430293 L56.4910749,20.4430293 C62.0139224,20.4430293 66.4910749,24.9201818 66.4910749,30.4430293 L66.4910749,56.5391205 C66.4910749,62.061968 62.0139224,66.5391205 56.4910749,66.5391205 L30.4910749,66.5391205 C24.9682274,66.5391205 20.4910749,62.061968 20.4910749,56.5391205 L20.4910749,20.4430293 Z M33.9720552,26.2473297 L40.419051,26.2473297 L40.419051,41.0316245 L40.419051,49.5120539 C40.419051,51.7211929 38.62819,53.5120539 36.419051,53.5120539 L26.9807751,53.5120539 L26.9807751,47.8897807 L33.9720552,47.8897807 L33.9720552,26.2473297 Z M33.9720552,26.2473297 L40.419051,26.2473297 L33.9720552,26.2473297 Z M53.0509562,60.7049531 L46.6039605,60.7049531 L46.6039605,45.9206584 L46.6039605,37.4402289 C46.6039605,35.2310899 48.3948215,33.4402289 50.6039605,33.4402289 L60.0422363,33.4402289 L60.0422363,39.0625021 L53.0509562,39.0625021 L53.0509562,60.7049531 Z M46.6039605,60.7049531 L53.0509562,60.7049531 L46.6039605,60.7049531 Z M60.0422363,39.0625021 L60.0422363,33.4402289 L60.0422363,39.0625021 Z\" id=\"Icon-Blue\" fill=\"#E8EEFF\"></path>\n          </g>\n      </g>\n  </g>\n  </svg>\n";

function squarelink(options) {
  var apiKey = options.apiKey,
      networkId = options.networkId,
      preferred = options.preferred,
      label = options.label,
      iconSrc = options.iconSrc,
      svg = options.svg;
  return {
    name: label || 'Squarelink',
    svg: svg || sqlkIcon,
    iconSrc: iconSrc,
    wallet: function () {
      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(helpers) {
        var _yield$import, Squarelink, instance, provider, BigNumber;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __webpack_require__.e(/*! import() */ 36).then(__webpack_require__.t.bind(null, /*! squarelink */ "./node_modules/squarelink/lib/squarelink.min.js", 7));

              case 2:
                _yield$import = _context.sent;
                Squarelink = _yield$import["default"];
                instance = new Squarelink(apiKey, Object(_onboard_9d401f90_js__WEBPACK_IMPORTED_MODULE_1__["n"])(networkId), {
                  useSync: true
                });
                provider = instance.getProviderSync();
                BigNumber = helpers.BigNumber;
                return _context.abrupt("return", {
                  provider: provider,
                  instance: instance,
                  "interface": {
                    name: 'Squarelink',
                    connect: provider.enable,
                    disconnect: function disconnect() {
                      return provider.stop();
                    },
                    address: {
                      get: function get() {
                        return Promise.resolve(instance.accounts[0]);
                      }
                    },
                    network: {
                      get: function get() {
                        return Promise.resolve(Object(_onboard_9d401f90_js__WEBPACK_IMPORTED_MODULE_1__["a"])(instance.network));
                      }
                    },
                    balance: {
                      get: function get() {
                        return new Promise(function (resolve) {
                          if (!instance.accounts.length) {
                            resolve(null);
                            return;
                          }

                          provider.sendAsync({
                            jsonrpc: '2.0',
                            method: 'eth_getBalance',
                            params: [instance.accounts[0], 'latest'],
                            id: 1
                          }, function (e, res) {
                            resolve(BigNumber(res.result).toString(10));
                          });
                        });
                      }
                    },
                    dashboard: function dashboard() {
                      return Object(_onboard_9d401f90_js__WEBPACK_IMPORTED_MODULE_1__["o"])('https://app.squarelink.com/');
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

/* harmony default export */ __webpack_exports__["default"] = (squarelink);

/***/ })

}]);
//# sourceMappingURL=31.js.map