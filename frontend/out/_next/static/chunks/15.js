(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/bnc-onboard/dist/esm/content-eeaca1cc.js":
/*!***************************************************************!*\
  !*** ./node_modules/bnc-onboard/dist/esm/content-eeaca1cc.js ***!
  \***************************************************************/
/*! exports provided: e, m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return extensionInstallMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return mobileWalletInstallMessage; });
var extensionInstallMessage = function extensionInstallMessage(helpers) {
  var currentWallet = helpers.currentWallet,
      selectedWallet = helpers.selectedWallet;

  if (currentWallet) {
    return "\n    <p style=\"font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;\">\n    We have detected that you already have\n    <b>".concat(currentWallet, "</b>\n    installed. If you would prefer to use\n    <b>").concat(selectedWallet, "</b>\n    instead, then click below to install.\n    </p>\n    <p style=\"font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;\">\n    <b>Tip:</b>\n    If you already have ").concat(selectedWallet, " installed, check your\n    browser extension settings to make sure that you have it enabled\n    and that you have disabled any other browser extension wallets.\n    <span\n      class=\"bn-onboard-clickable\"\n      style=\"color: #4a90e2; font-size: 0.889rem; font-family: inherit;\"\n      onclick=\"window.location.reload();\">\n      Then refresh the page.\n    </span>\n    </p>\n    ");
  } else {
    return "\n    <p style=\"font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;\">\n    You'll need to install <b>".concat(selectedWallet, "</b> to continue. Once you have it installed, go ahead and\n    <span\n    class=\"bn-onboard-clickable\"\n      style=\"color: #4a90e2; font-size: 0.889rem; font-family: inherit;\"\n      onclick={window.location.reload();}>\n      refresh the page.\n    </span>\n    ").concat(selectedWallet === 'Opera' ? '<br><br><i>Hint: If you already have Opera installed, make sure that your web3 wallet is <a style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;" class="bn-onboard-clickable" href="https://help.opera.com/en/touch/crypto-wallet/" rel="noreferrer noopener" target="_blank">enabled</a></i>' : '', "\n    </p>\n    ");
  }
};

var mobileWalletInstallMessage = function mobileWalletInstallMessage(helpers) {
  var selectedWallet = helpers.selectedWallet;
  return "\n  <p style=\"font-size: 0.889rem;\">\n    You'll need to install <b>".concat(selectedWallet, "</b> to continue. Click below to install and then load this Dapp with <b>").concat(selectedWallet, "</b>.\n  </p>\n  ");
};



/***/ }),

/***/ "./node_modules/bnc-onboard/dist/esm/imtoken-84fe0dbe.js":
/*!***************************************************************!*\
  !*** ./node_modules/bnc-onboard/dist/esm/imtoken-84fe0dbe.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content_eeaca1cc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-eeaca1cc.js */ "./node_modules/bnc-onboard/dist/esm/content-eeaca1cc.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var imTokenIcon = "\n\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 93 93\">\n\t\t<defs>\n\t\t\t\t<linearGradient id=\"a\" x1=\"97.185%\" x2=\"-.038%\" y1=\"3.105%\" y2=\"99.699%\">\n\t\t\t\t\t\t<stop offset=\"0%\" stop-color=\"#11C4D1\"/>\n\t\t\t\t\t\t<stop offset=\"100%\" stop-color=\"#0062AD\"/>\n\t\t\t\t</linearGradient>\n\t\t</defs>\n\t\t<g fill=\"none\" fill-rule=\"nonzero\">\n\t\t\t\t<path fill=\"url(#a)\" d=\"M92.755 63.804s0 9.64-1.028 13.78c-1.028 4.187-2.985 7.06-5.09 9.202-2.154 2.142-4.993 4.09-9.3 5.112-4.356 1.023-13.754.974-13.754.974H29.417s-9.642 0-13.803-1.022c-4.16-1.071-7.097-2.97-9.25-5.113-2.155-2.142-4.112-4.966-5.091-9.3-1.028-4.333-.98-13.682-.98-13.682V29.671s0-9.64 1.029-13.78c1.027-4.187 2.985-7.06 5.09-9.202 2.154-2.142 4.993-4.09 9.3-5.113C20.068.554 29.466.603 29.466.603h34.166s9.642 0 13.803 1.022c4.16 1.071 7.097 2.97 9.25 5.113 2.154 2.142 4.112 4.966 5.091 9.3.98 4.333.98 13.682.98 13.682v34.084z\"/>\n\t\t\t\t<path fill=\"#FFF\" d=\"M78.267 28.795c1.909 26.244-15.614 38.71-31.326 40.073-14.587 1.265-28.292-7.304-29.467-20.597-.979-10.955 6.07-15.678 11.6-16.117 5.679-.486 10.427 3.263 10.867 7.84.392 4.382-2.447 6.427-4.454 6.573-1.566.146-3.524-.78-3.72-2.727-.147-1.704.538-1.899.342-3.7-.293-3.214-3.181-3.555-4.747-3.409-1.91.146-5.385 2.338-4.944 7.694.49 5.404 5.874 9.69 12.922 9.056 7.636-.682 12.971-6.378 13.363-14.412 0-.439.098-.828.293-1.218.098-.146.147-.292.294-.438.196-.292.392-.536.636-.779l.686-.682c3.328-3.019 15.37-10.225 26.676-7.985.098 0 .196.049.245.097.44 0 .685.341.734.73\"/>\n\t\t</g>\n\t</svg>\n";

function imtoken(options) {
  var preferred = options.preferred,
      label = options.label,
      iconSrc = options.iconSrc,
      svg = options.svg,
      rpcUrl = options.rpcUrl;
  return {
    name: label || 'imToken',
    iconSrc: iconSrc,
    svg: svg || imTokenIcon,
    wallet: function () {
      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(helpers) {
        var getProviderName, getBalance, imTokenProvider, isImToken, createProvider, provider, warned;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                getProviderName = helpers.getProviderName, getBalance = helpers.getBalance;
                imTokenProvider = window.ethereum;
                isImToken = getProviderName(imTokenProvider) === 'imToken';

                if (!(isImToken && rpcUrl)) {
                  _context.next = 7;
                  break;
                }

                _context.next = 6;
                return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./providerEngine-81ff17e9.js */ "./node_modules/bnc-onboard/dist/esm/providerEngine-81ff17e9.js"));

              case 6:
                createProvider = _context.sent["default"];

              case 7:
                provider = createProvider ? createProvider({
                  rpcUrl: rpcUrl
                }) : null;
                warned = false;
                return _context.abrupt("return", {
                  provider: imTokenProvider,
                  "interface": isImToken ? {
                    address: {
                      get: function get() {
                        return Promise.resolve(imTokenProvider.selectedAddress);
                      }
                    },
                    network: {
                      get: function get() {
                        return Promise.resolve(Number(imTokenProvider.networkVersion));
                      }
                    },
                    balance: {
                      get: function get() {
                        if (!provider) {
                          if (!warned) {
                            console.warn('The imToken provider does not allow rpc calls preventing Onboard.js from getting the balance. You can pass in a "rpcUrl" to the imToken wallet initialization object to get the balance.');
                            warned = true;
                          }

                          return Promise.resolve(null);
                        }

                        return getBalance(provider, imTokenProvider.selectedAddress);
                      }
                    },
                    name: getProviderName(imTokenProvider),
                    connect: function connect() {
                      return imTokenProvider.enable();
                    }
                  } : null
                });

              case 10:
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
    type: 'injected',
    link: "imtokenv2://navigate?screen=DappView&url=".concat(window.location.href),
    installMessage: _content_eeaca1cc_js__WEBPACK_IMPORTED_MODULE_0__["m"],
    mobile: true,
    preferred: preferred
  };
}

/* harmony default export */ __webpack_exports__["default"] = (imtoken);

/***/ })

}]);
//# sourceMappingURL=15.js.map