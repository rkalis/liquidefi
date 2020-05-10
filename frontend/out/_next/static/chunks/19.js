(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

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

/***/ "./node_modules/bnc-onboard/dist/esm/status-f09721f6.js":
/*!**************************************************************!*\
  !*** ./node_modules/bnc-onboard/dist/esm/status-f09721f6.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content_eeaca1cc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-eeaca1cc.js */ "./node_modules/bnc-onboard/dist/esm/content-eeaca1cc.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var statusIcon = "\n<svg width=\"40\" height=\"40\" viewBox=\"0 0 109 109\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M54.7 0C24.7 0 0.400024 24.3 0.400024 54.3C0.400024 84.3 24.7 108.6 54.7 108.6C84.7 108.6 109 84.3 109 54.3C108.9 24.3 84.6 0 54.7 0ZM47.3 77.6C40.4 78 33.4 74 33.1 67.5C32.7 61.1 37.9 56.8 46.5 56.4C49.7 56.2 52.3 56.5 54.8 56.7C57.4 57 60 57.2 63.1 57C64.6 56.9 66.2 56.7 67.8 56.4C67 67.4 58.6 77 47.3 77.6ZM65.3 52.3C61.9 52.5 59.2 52.2 56.5 51.9C53.8 51.6 51 51.3 47.7 51.5C46.1 51.6 44.4 51.8 42.8 52.2C43.8 40.2 52.6 29.7 64.5 29.1C71.8 28.7 79.1 33.1 79.5 40.2C79.9 47.2 74.4 51.8 65.3 52.3Z\" fill=\"#4360DF\"/>\n</svg>\n";

function status(options) {
  var preferred = options.preferred,
      label = options.label,
      iconSrc = options.iconSrc,
      svg = options.svg;
  return {
    name: label || 'Status',
    iconSrc: iconSrc,
    iconSrcSet: iconSrc,
    svg: svg || statusIcon,
    wallet: function () {
      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(helpers) {
        var getProviderName, createModernProviderInterface, provider;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                getProviderName = helpers.getProviderName, createModernProviderInterface = helpers.createModernProviderInterface;
                provider = window.ethereum;
                return _context.abrupt("return", {
                  provider: provider,
                  "interface": provider && getProviderName(provider) === 'Status' ? createModernProviderInterface(provider) : null
                });

              case 3:
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
    link: 'https://status.im/',
    installMessage: _content_eeaca1cc_js__WEBPACK_IMPORTED_MODULE_0__["e"],
    mobile: true,
    preferred: preferred
  };
}

/* harmony default export */ __webpack_exports__["default"] = (status);

/***/ })

}]);
//# sourceMappingURL=19.js.map