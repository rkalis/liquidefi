(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/bnc-onboard/dist/esm/torus-17977f74.js":
/*!*************************************************************!*\
  !*** ./node_modules/bnc-onboard/dist/esm/torus-17977f74.js ***!
  \*************************************************************/
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






var torusIcon = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"40px\" height=\"40px\" viewBox=\"0 0 500 500\" enable-background=\"new 0 0 500 500\" xml:space=\"preserve\">  <image id=\"image0\" width=\"500\" height=\"500\" x=\"0\" y=\"0\"\n    href=\"data:image/png;base64,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\nxoGyRqRxZmNvk6ipozm1uf3g2IOtLf4tBw6NPLT9sOXh6iOGR5YfpR4tOTpwrOhY33Hp8Z4TWSc6\nW6e23jk54eS1U+NPtZ2OOn32t/DfTp5hnzl2NuDs4XN+5w6e9znfdMHrQuNFz4sHfvf8/UCbV1vj\nJe9LzZd9L7e0j2k/eiXoyomroVd/u8a9duF6zPX2G0k3bt2cdLPjluDW09u5t1/+UfBH/535dwl3\ny+7p3qu4b3q/9j+O/9nd4dVx5EHog4sPEx7e6eR3Pn8kf/Spq+Qx/XHFE4sndU/dnx7uDu++/Gzi\ns67n0uf9PaV/6v1Z88Lhxf6/gv+62Duht+ul7OXAq6WvjV9vfzP6TWtfXN/9t3lv+9+VvTd+v+OD\nz4czH1M+Pumf8Yn0qfKz4+eWL1Ff7g7kDQxIeTKeaiuAwYZmZgLwajsA9FQAGJfh/mGi+pynEkR9\nNlUh8L+w+iyoEi8AGuBFuV3nHAdgD2x2wZB7PgDKrXpiMEA9PIaaRuSZHu5qLho88RDeDwy8NgOA\n1ALAZ9nAQP+GgYHPW2GwtwE4Pl19vlQKEZ4NfgpWoutGSZPBd/JfZxSAO16j6r8AAAAgY0hSTQAA\neiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAcVQTFRF////jbn6c6n4ZKD4XZz3\ne6757PP+0OP9udT8o8f7lb76hrX5fbD5eq75d6z5hLT5kLv6n8T7s9H7yd784+7+/P3/U5b3Y6D4\n+/3/0uT9qcv7grL5Xp34WJn3ncP6xtz88/j+9fn/wNn8iLf5W5v3VJf3ea35rs776/P+/v//j7v6\ne6/5v9j8+Pv/vNb8b6f4X534psn77/b+Z6L48vf+y9/9bKX4+vz/aqT4uNT8Wpv3lr/69/r/a6T4\n2+n9Vpj3utX8w9r8mMD6/f7/rc37eK35m8L6tdL8yt/9msH65e/++Pr/3er9bab49vn/ZaH41eX9\nnML6bqb44u3+VZf3stD7f7H53Or9q8z7jrr6Yp/4sdD7gLH5dav5VJb37fT+5vD+r877frD5ocb7\nrMz7irj6Wpr3/v7/a6X45/D+0eP9ocX7t9P8qcr7ttP8wtr80OL9n8X7aaT4qsv79vr/9Pj+caj4\n7/X+irf61+f9pcj7nsT67vX++fv/YZ/4z+L9xNv8kr36aKP43+z+kbz6mcH68fb+osb70+T9V5j3\n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\" />\n</svg>";

function torus(options) {
  var networkId = options.networkId,
      preferred = options.preferred,
      label = options.label,
      iconSrc = options.iconSrc,
      svg = options.svg,
      buildEnv = options.buildEnv,
      buttonPosition = options.buttonPosition,
      enableLogging = options.enableLogging,
      loginMethod = options.loginMethod,
      showTorusButton = options.showTorusButton,
      enabledVerifiers = options.enabledVerifiers;
  return {
    name: label || 'Torus',
    svg: svg || torusIcon,
    iconSrc: iconSrc,
    wallet: function () {
      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _yield$import, Torus, instance, provider;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.t.bind(null, /*! @toruslabs/torus-embed */ "./node_modules/@toruslabs/torus-embed/dist/torus.cjs.js", 7));

              case 2:
                _yield$import = _context3.sent;
                Torus = _yield$import["default"];
                instance = new Torus({
                  buttonPosition: buttonPosition // default: bottom-left

                });
                _context3.next = 7;
                return instance.init({
                  buildEnv: buildEnv,
                  enableLogging: enableLogging,
                  network: {
                    host: Object(_onboard_9d401f90_js__WEBPACK_IMPORTED_MODULE_1__["n"])(networkId),
                    chainId: networkId,
                    networkName: "".concat(Object(_onboard_9d401f90_js__WEBPACK_IMPORTED_MODULE_1__["n"])(networkId), " Network") // default: Main Ethereum Network

                  },
                  showTorusButton: showTorusButton,
                  enabledVerifiers: enabledVerifiers
                });

              case 7:
                provider = instance.provider;
                return _context3.abrupt("return", {
                  provider: provider,
                  instance: instance,
                  "interface": {
                    name: 'Torus',
                    connect: function () {
                      var _connect = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var result;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                _context.next = 2;
                                return instance.login({
                                  verifier: loginMethod
                                });

                              case 2:
                                result = _context.sent;
                                return _context.abrupt("return", {
                                  message: result[0]
                                });

                              case 4:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee);
                      }));

                      function connect() {
                        return _connect.apply(this, arguments);
                      }

                      return connect;
                    }(),
                    disconnect: function disconnect() {
                      return instance.cleanUp();
                    },
                    address: {
                      get: function get() {
                        return Promise.resolve(instance.web3.eth.accounts[0]);
                      }
                    },
                    network: {
                      get: function get() {
                        return Promise.resolve(Number(instance.web3.version.network));
                      }
                    },
                    balance: {
                      get: function get() {
                        return new Promise( /*#__PURE__*/function () {
                          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(resolve, reject) {
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                    instance.web3.eth.getBalance(instance.web3.eth.accounts[0], function (err, data) {
                                      if (err) {
                                        reject("Error while checking Balance: ".concat(err));
                                      } else {
                                        resolve(data.toString(10));
                                      }
                                    });

                                  case 1:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _callee2);
                          }));

                          return function (_x, _x2) {
                            return _ref.apply(this, arguments);
                          };
                        }());
                      }
                    },
                    dashboard: function dashboard() {
                      return Object(_onboard_9d401f90_js__WEBPACK_IMPORTED_MODULE_1__["o"])('https://app.tor.us/');
                    }
                  }
                });

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function wallet() {
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

/* harmony default export */ __webpack_exports__["default"] = (torus);

/***/ })

}]);
//# sourceMappingURL=32.js.map