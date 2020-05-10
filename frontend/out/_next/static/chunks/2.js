(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./components/SignInArea.js":
/*!**********************************!*\
  !*** ./components/SignInArea.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state/state */ "./state/state.js");
/* harmony import */ var _utils_Onboarding__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/Onboarding */ "./utils/Onboarding.js");
/* harmony import */ var _utils_addrShortener__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/addrShortener */ "./utils/addrShortener.js");



var _this = undefined,
    _jsxFileName = "/Users/jeffscottward/Documents/Development/liquidefi/liquidefi/frontend/components/SignInArea.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




var SignInArea = function SignInArea(_ref) {
  var stretch = _ref.stretch,
      fs = _ref.fs;

  var _useStateValue = Object(_state_state__WEBPACK_IMPORTED_MODULE_4__["useStateValue"])(),
      _useStateValue2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useStateValue, 2),
      dapp = _useStateValue2[0].dapp,
      dispatch = _useStateValue2[1];

  var onboard = Object(_utils_Onboarding__WEBPACK_IMPORTED_MODULE_5__["default"])({
    address: function address(_address) {
      dispatch({
        type: 'SET_ADDRESS',
        payload: _address
      });
    },
    network: function network(_network) {
      dispatch({
        type: 'SET_NETWORK',
        payload: _network
      });
    },
    balance: function balance(_balance) {
      dispatch({
        type: 'SET_BALANCE',
        payload: _balance
      });
    },
    wallet: function wallet(_wallet) {
      dispatch({
        type: 'SET_WALLET',
        payload: _wallet
      });
    }
  });

  var handleSignInClick = function handleSignInClick() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSignInClick$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(onboard.walletSelect());

          case 2:
            _context.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(onboard.walletCheck());

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2901195908", [stretch ? '100%' : 'auto', fs ? fs : 'inherit']]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, dapp === undefined ? __jsx("button", {
    onClick: handleSignInClick,
    onKeyUp: handleSignInClick,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2901195908", [stretch ? '100%' : 'auto', fs ? fs : 'inherit']]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, "Sign In") : __jsx("table", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2901195908", [stretch ? '100%' : 'auto', fs ? fs : 'inherit']]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("tbody", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2901195908", [stretch ? '100%' : 'auto', fs ? fs : 'inherit']]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx("tr", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2901195908", [stretch ? '100%' : 'auto', fs ? fs : 'inherit']]]) + " " + "wallet-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx("td", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2901195908", [stretch ? '100%' : 'auto', fs ? fs : 'inherit']]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, __jsx("b", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2901195908", [stretch ? '100%' : 'auto', fs ? fs : 'inherit']]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, "Wallet:")), __jsx("td", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2901195908", [stretch ? '100%' : 'auto', fs ? fs : 'inherit']]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, dapp.wallet.name)), __jsx("tr", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2901195908", [stretch ? '100%' : 'auto', fs ? fs : 'inherit']]]) + " " + "address-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx("td", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2901195908", [stretch ? '100%' : 'auto', fs ? fs : 'inherit']]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, __jsx("b", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2901195908", [stretch ? '100%' : 'auto', fs ? fs : 'inherit']]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, "Address:")), __jsx("td", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2901195908", [stretch ? '100%' : 'auto', fs ? fs : 'inherit']]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, dapp.address && Object(_utils_addrShortener__WEBPACK_IMPORTED_MODULE_6__["default"])(dapp.address))), __jsx("tr", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2901195908", [stretch ? '100%' : 'auto', fs ? fs : 'inherit']]]) + " " + "network-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx("td", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2901195908", [stretch ? '100%' : 'auto', fs ? fs : 'inherit']]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }, __jsx("b", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2901195908", [stretch ? '100%' : 'auto', fs ? fs : 'inherit']]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, "Network:")), __jsx("td", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2901195908", [stretch ? '100%' : 'auto', fs ? fs : 'inherit']]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, dapp.network)), __jsx("tr", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2901195908", [stretch ? '100%' : 'auto', fs ? fs : 'inherit']]]) + " " + "balance-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx("td", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2901195908", [stretch ? '100%' : 'auto', fs ? fs : 'inherit']]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, __jsx("b", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2901195908", [stretch ? '100%' : 'auto', fs ? fs : 'inherit']]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, "Balance:")), __jsx("td", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["2901195908", [stretch ? '100%' : 'auto', fs ? fs : 'inherit']]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, dapp.balance && String(web3.fromWei(dapp.balance, 'ether')).substring(0, 5), ' ', "ETH")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2901195908",
    dynamic: [stretch ? '100%' : 'auto', fs ? fs : 'inherit'],
    __self: _this
  }, ".wallet-row.__jsx-style-dynamic-selector,.address-row.__jsx-style-dynamic-selector,.network-row.__jsx-style-dynamic-selector,.balance-row.__jsx-style-dynamic-selector{display:none;}.address-row.__jsx-style-dynamic-selector{display:block;}.address-row.__jsx-style-dynamic-selector b.__jsx-style-dynamic-selector{display:none;}button.__jsx-style-dynamic-selector{border-radius:4px;border:none;color:white;cursor:pointer;padding:5px 10px;font-size:.8rem;background-color:rgba(0,52,132,1.0);width:".concat(stretch ? '100%' : 'auto', ";font-size:").concat(fs ? fs : 'inherit', ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZWZmc2NvdHR3YXJkL0RvY3VtZW50cy9EZXZlbG9wbWVudC9saXF1aWRlZmkvbGlxdWlkZWZpL2Zyb250ZW5kL2NvbXBvbmVudHMvU2lnbkluQXJlYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRWtCLEFBS29DLEFBRUMsQUFDQSxBQUdSLGFBTlEsQUFHQyxDQURBLElBS2YsWUFDRCxZQUNJLGVBQ0UsaUJBQ0QsZ0JBQ29CLG9DQUNELG1DQUV0Qyx1Q0FBQyIsImZpbGUiOiIvVXNlcnMvamVmZnNjb3R0d2FyZC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvbGlxdWlkZWZpL2xpcXVpZGVmaS9mcm9udGVuZC9jb21wb25lbnRzL1NpZ25JbkFyZWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZVZhbHVlIH0gZnJvbSAnLi4vc3RhdGUvc3RhdGUnXG5pbXBvcnQgZ2V0T25ib2FyZCBmcm9tICcuLi91dGlscy9PbmJvYXJkaW5nJ1xuaW1wb3J0IGFkZHJTaG9ydGVuZXIgZnJvbSAnLi4vdXRpbHMvYWRkclNob3J0ZW5lcidcblxuY29uc3QgU2lnbkluQXJlYSA9ICh7c3RyZXRjaCwgZnN9KSA9PiB7XG4gIGNvbnN0IFt7IGRhcHAgfSwgZGlzcGF0Y2hdID0gdXNlU3RhdGVWYWx1ZSgpXG5cbiAgY29uc3Qgb25ib2FyZCA9IGdldE9uYm9hcmQoe1xuICAgIGFkZHJlc3M6IChhZGRyZXNzKSA9PiB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6ICdTRVRfQUREUkVTUycsXG4gICAgICAgIHBheWxvYWQ6IGFkZHJlc3MsXG4gICAgICB9KVxuICAgIH0sXG4gICAgbmV0d29yazogKG5ldHdvcmspID0+IHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogJ1NFVF9ORVRXT1JLJyxcbiAgICAgICAgcGF5bG9hZDogbmV0d29yayxcbiAgICAgIH0pXG4gICAgfSxcbiAgICBiYWxhbmNlOiAoYmFsYW5jZSkgPT4ge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiAnU0VUX0JBTEFOQ0UnLFxuICAgICAgICBwYXlsb2FkOiBiYWxhbmNlLFxuICAgICAgfSlcbiAgICB9LFxuICAgIHdhbGxldDogKHdhbGxldCkgPT4ge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiAnU0VUX1dBTExFVCcsXG4gICAgICAgIHBheWxvYWQ6IHdhbGxldCxcbiAgICAgIH0pXG4gICAgfSxcbiAgfSlcblxuICBjb25zdCBoYW5kbGVTaWduSW5DbGljayA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBvbmJvYXJkLndhbGxldFNlbGVjdCgpXG4gICAgYXdhaXQgb25ib2FyZC53YWxsZXRDaGVjaygpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7ZGFwcCA9PT0gdW5kZWZpbmVkID8gKFxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNpZ25JbkNsaWNrfSBvbktleVVwPXtoYW5kbGVTaWduSW5DbGlja30+XG4gICAgICAgICAgU2lnbiBJblxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICkgOiAoXG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwid2FsbGV0LXJvd1wiPlxuICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgPGI+V2FsbGV0OjwvYj5cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPHRkPntkYXBwLndhbGxldC5uYW1lfTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImFkZHJlc3Mtcm93XCI+XG4gICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICA8Yj5BZGRyZXNzOjwvYj5cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPHRkPntkYXBwLmFkZHJlc3MgJiYgYWRkclNob3J0ZW5lcihkYXBwLmFkZHJlc3MpfTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cIm5ldHdvcmstcm93XCI+XG4gICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICA8Yj5OZXR3b3JrOjwvYj5cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPHRkPntkYXBwLm5ldHdvcmt9PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYmFsYW5jZS1yb3dcIj5cbiAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgIDxiPkJhbGFuY2U6PC9iPlxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAge2RhcHAuYmFsYW5jZSAmJlxuICAgICAgICAgICAgICAgICAgU3RyaW5nKHdlYjMuZnJvbVdlaShkYXBwLmJhbGFuY2UsICdldGhlcicpKS5zdWJzdHJpbmcoMCwgNSl9eycgJ31cbiAgICAgICAgICAgICAgICBFVEhcbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICl9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC53YWxsZXQtcm93LFxuICAgICAgICAuYWRkcmVzcy1yb3csXG4gICAgICAgIC5uZXR3b3JrLXJvdyxcbiAgICAgICAgLmJhbGFuY2Utcm93IHsgZGlzcGxheTogbm9uZTsgfVxuICAgICAgICBcbiAgICAgICAgLmFkZHJlc3Mtcm93IHsgZGlzcGxheTogYmxvY2s7IH1cbiAgICAgICAgLmFkZHJlc3Mtcm93IGJ7IGRpc3BsYXk6IG5vbmU7IH1cbiAgICAgICAgXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsNTIsMTMyLDEuMCk7XG4gICAgICAgICAgd2lkdGg6ICR7c3RyZXRjaCA/ICcxMDAlJyA6ICdhdXRvJyB9O1xuICAgICAgICAgIGZvbnQtc2l6ZTogJHtmcyA/IGZzIDogJ2luaGVyaXQnfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lnbkluQXJlYVxuIl19 */\n/*@ sourceURL=/Users/jeffscottward/Documents/Development/liquidefi/liquidefi/frontend/components/SignInArea.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (SignInArea);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/bignumber.js/bignumber.js":
/*!************************************************!*\
  !*** ./node_modules/bignumber.js/bignumber.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;;(function (globalObject) {
  'use strict';

/*
 *      bignumber.js v9.0.0
 *      A JavaScript library for arbitrary-precision arithmetic.
 *      https://github.com/MikeMcl/bignumber.js
 *      Copyright (c) 2019 Michael Mclaughlin <M8ch88l@gmail.com>
 *      MIT Licensed.
 *
 *      BigNumber.prototype methods     |  BigNumber methods
 *                                      |
 *      absoluteValue            abs    |  clone
 *      comparedTo                      |  config               set
 *      decimalPlaces            dp     |      DECIMAL_PLACES
 *      dividedBy                div    |      ROUNDING_MODE
 *      dividedToIntegerBy       idiv   |      EXPONENTIAL_AT
 *      exponentiatedBy          pow    |      RANGE
 *      integerValue                    |      CRYPTO
 *      isEqualTo                eq     |      MODULO_MODE
 *      isFinite                        |      POW_PRECISION
 *      isGreaterThan            gt     |      FORMAT
 *      isGreaterThanOrEqualTo   gte    |      ALPHABET
 *      isInteger                       |  isBigNumber
 *      isLessThan               lt     |  maximum              max
 *      isLessThanOrEqualTo      lte    |  minimum              min
 *      isNaN                           |  random
 *      isNegative                      |  sum
 *      isPositive                      |
 *      isZero                          |
 *      minus                           |
 *      modulo                   mod    |
 *      multipliedBy             times  |
 *      negated                         |
 *      plus                            |
 *      precision                sd     |
 *      shiftedBy                       |
 *      squareRoot               sqrt   |
 *      toExponential                   |
 *      toFixed                         |
 *      toFormat                        |
 *      toFraction                      |
 *      toJSON                          |
 *      toNumber                        |
 *      toPrecision                     |
 *      toString                        |
 *      valueOf                         |
 *
 */


  var BigNumber,
    isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
    mathceil = Math.ceil,
    mathfloor = Math.floor,

    bignumberError = '[BigNumber Error] ',
    tooManyDigits = bignumberError + 'Number primitive has more than 15 significant digits: ',

    BASE = 1e14,
    LOG_BASE = 14,
    MAX_SAFE_INTEGER = 0x1fffffffffffff,         // 2^53 - 1
    // MAX_INT32 = 0x7fffffff,                   // 2^31 - 1
    POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
    SQRT_BASE = 1e7,

    // EDITABLE
    // The limit on the value of DECIMAL_PLACES, TO_EXP_NEG, TO_EXP_POS, MIN_EXP, MAX_EXP, and
    // the arguments to toExponential, toFixed, toFormat, and toPrecision.
    MAX = 1E9;                                   // 0 to MAX_INT32


  /*
   * Create and return a BigNumber constructor.
   */
  function clone(configObject) {
    var div, convertBase, parseNumeric,
      P = BigNumber.prototype = { constructor: BigNumber, toString: null, valueOf: null },
      ONE = new BigNumber(1),


      //----------------------------- EDITABLE CONFIG DEFAULTS -------------------------------


      // The default values below must be integers within the inclusive ranges stated.
      // The values can also be changed at run-time using BigNumber.set.

      // The maximum number of decimal places for operations involving division.
      DECIMAL_PLACES = 20,                     // 0 to MAX

      // The rounding mode used when rounding to the above decimal places, and when using
      // toExponential, toFixed, toFormat and toPrecision, and round (default value).
      // UP         0 Away from zero.
      // DOWN       1 Towards zero.
      // CEIL       2 Towards +Infinity.
      // FLOOR      3 Towards -Infinity.
      // HALF_UP    4 Towards nearest neighbour. If equidistant, up.
      // HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
      // HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
      // HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
      // HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
      ROUNDING_MODE = 4,                       // 0 to 8

      // EXPONENTIAL_AT : [TO_EXP_NEG , TO_EXP_POS]

      // The exponent value at and beneath which toString returns exponential notation.
      // Number type: -7
      TO_EXP_NEG = -7,                         // 0 to -MAX

      // The exponent value at and above which toString returns exponential notation.
      // Number type: 21
      TO_EXP_POS = 21,                         // 0 to MAX

      // RANGE : [MIN_EXP, MAX_EXP]

      // The minimum exponent value, beneath which underflow to zero occurs.
      // Number type: -324  (5e-324)
      MIN_EXP = -1e7,                          // -1 to -MAX

      // The maximum exponent value, above which overflow to Infinity occurs.
      // Number type:  308  (1.7976931348623157e+308)
      // For MAX_EXP > 1e7, e.g. new BigNumber('1e100000000').plus(1) may be slow.
      MAX_EXP = 1e7,                           // 1 to MAX

      // Whether to use cryptographically-secure random number generation, if available.
      CRYPTO = false,                          // true or false

      // The modulo mode used when calculating the modulus: a mod n.
      // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
      // The remainder (r) is calculated as: r = a - n * q.
      //
      // UP        0 The remainder is positive if the dividend is negative, else is negative.
      // DOWN      1 The remainder has the same sign as the dividend.
      //             This modulo mode is commonly known as 'truncated division' and is
      //             equivalent to (a % n) in JavaScript.
      // FLOOR     3 The remainder has the same sign as the divisor (Python %).
      // HALF_EVEN 6 This modulo mode implements the IEEE 754 remainder function.
      // EUCLID    9 Euclidian division. q = sign(n) * floor(a / abs(n)).
      //             The remainder is always positive.
      //
      // The truncated division, floored division, Euclidian division and IEEE 754 remainder
      // modes are commonly used for the modulus operation.
      // Although the other rounding modes can also be used, they may not give useful results.
      MODULO_MODE = 1,                         // 0 to 9

      // The maximum number of significant digits of the result of the exponentiatedBy operation.
      // If POW_PRECISION is 0, there will be unlimited significant digits.
      POW_PRECISION = 0,                    // 0 to MAX

      // The format specification used by the BigNumber.prototype.toFormat method.
      FORMAT = {
        prefix: '',
        groupSize: 3,
        secondaryGroupSize: 0,
        groupSeparator: ',',
        decimalSeparator: '.',
        fractionGroupSize: 0,
        fractionGroupSeparator: '\xA0',      // non-breaking space
        suffix: ''
      },

      // The alphabet used for base conversion. It must be at least 2 characters long, with no '+',
      // '-', '.', whitespace, or repeated character.
      // '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_'
      ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyz';


    //------------------------------------------------------------------------------------------


    // CONSTRUCTOR


    /*
     * The BigNumber constructor and exported function.
     * Create and return a new instance of a BigNumber object.
     *
     * v {number|string|BigNumber} A numeric value.
     * [b] {number} The base of v. Integer, 2 to ALPHABET.length inclusive.
     */
    function BigNumber(v, b) {
      var alphabet, c, caseChanged, e, i, isNum, len, str,
        x = this;

      // Enable constructor call without `new`.
      if (!(x instanceof BigNumber)) return new BigNumber(v, b);

      if (b == null) {

        if (v && v._isBigNumber === true) {
          x.s = v.s;

          if (!v.c || v.e > MAX_EXP) {
            x.c = x.e = null;
          } else if (v.e < MIN_EXP) {
            x.c = [x.e = 0];
          } else {
            x.e = v.e;
            x.c = v.c.slice();
          }

          return;
        }

        if ((isNum = typeof v == 'number') && v * 0 == 0) {

          // Use `1 / n` to handle minus zero also.
          x.s = 1 / v < 0 ? (v = -v, -1) : 1;

          // Fast path for integers, where n < 2147483648 (2**31).
          if (v === ~~v) {
            for (e = 0, i = v; i >= 10; i /= 10, e++);

            if (e > MAX_EXP) {
              x.c = x.e = null;
            } else {
              x.e = e;
              x.c = [v];
            }

            return;
          }

          str = String(v);
        } else {

          if (!isNumeric.test(str = String(v))) return parseNumeric(x, str, isNum);

          x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
        }

        // Decimal point?
        if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');

        // Exponential form?
        if ((i = str.search(/e/i)) > 0) {

          // Determine exponent.
          if (e < 0) e = i;
          e += +str.slice(i + 1);
          str = str.substring(0, i);
        } else if (e < 0) {

          // Integer.
          e = str.length;
        }

      } else {

        // '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
        intCheck(b, 2, ALPHABET.length, 'Base');

        // Allow exponential notation to be used with base 10 argument, while
        // also rounding to DECIMAL_PLACES as with other bases.
        if (b == 10) {
          x = new BigNumber(v);
          return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
        }

        str = String(v);

        if (isNum = typeof v == 'number') {

          // Avoid potential interpretation of Infinity and NaN as base 44+ values.
          if (v * 0 != 0) return parseNumeric(x, str, isNum, b);

          x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1;

          // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
          if (BigNumber.DEBUG && str.replace(/^0\.0*|\./, '').length > 15) {
            throw Error
             (tooManyDigits + v);
          }
        } else {
          x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
        }

        alphabet = ALPHABET.slice(0, b);
        e = i = 0;

        // Check that str is a valid base b number.
        // Don't use RegExp, so alphabet can contain special characters.
        for (len = str.length; i < len; i++) {
          if (alphabet.indexOf(c = str.charAt(i)) < 0) {
            if (c == '.') {

              // If '.' is not the first character and it has not be found before.
              if (i > e) {
                e = len;
                continue;
              }
            } else if (!caseChanged) {

              // Allow e.g. hexadecimal 'FF' as well as 'ff'.
              if (str == str.toUpperCase() && (str = str.toLowerCase()) ||
                  str == str.toLowerCase() && (str = str.toUpperCase())) {
                caseChanged = true;
                i = -1;
                e = 0;
                continue;
              }
            }

            return parseNumeric(x, String(v), isNum, b);
          }
        }

        // Prevent later check for length on converted number.
        isNum = false;
        str = convertBase(str, b, 10, x.s);

        // Decimal point?
        if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');
        else e = str.length;
      }

      // Determine leading zeros.
      for (i = 0; str.charCodeAt(i) === 48; i++);

      // Determine trailing zeros.
      for (len = str.length; str.charCodeAt(--len) === 48;);

      if (str = str.slice(i, ++len)) {
        len -= i;

        // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
        if (isNum && BigNumber.DEBUG &&
          len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) {
            throw Error
             (tooManyDigits + (x.s * v));
        }

         // Overflow?
        if ((e = e - i - 1) > MAX_EXP) {

          // Infinity.
          x.c = x.e = null;

        // Underflow?
        } else if (e < MIN_EXP) {

          // Zero.
          x.c = [x.e = 0];
        } else {
          x.e = e;
          x.c = [];

          // Transform base

          // e is the base 10 exponent.
          // i is where to slice str to get the first element of the coefficient array.
          i = (e + 1) % LOG_BASE;
          if (e < 0) i += LOG_BASE;  // i < 1

          if (i < len) {
            if (i) x.c.push(+str.slice(0, i));

            for (len -= LOG_BASE; i < len;) {
              x.c.push(+str.slice(i, i += LOG_BASE));
            }

            i = LOG_BASE - (str = str.slice(i)).length;
          } else {
            i -= len;
          }

          for (; i--; str += '0');
          x.c.push(+str);
        }
      } else {

        // Zero.
        x.c = [x.e = 0];
      }
    }


    // CONSTRUCTOR PROPERTIES


    BigNumber.clone = clone;

    BigNumber.ROUND_UP = 0;
    BigNumber.ROUND_DOWN = 1;
    BigNumber.ROUND_CEIL = 2;
    BigNumber.ROUND_FLOOR = 3;
    BigNumber.ROUND_HALF_UP = 4;
    BigNumber.ROUND_HALF_DOWN = 5;
    BigNumber.ROUND_HALF_EVEN = 6;
    BigNumber.ROUND_HALF_CEIL = 7;
    BigNumber.ROUND_HALF_FLOOR = 8;
    BigNumber.EUCLID = 9;


    /*
     * Configure infrequently-changing library-wide settings.
     *
     * Accept an object with the following optional properties (if the value of a property is
     * a number, it must be an integer within the inclusive range stated):
     *
     *   DECIMAL_PLACES   {number}           0 to MAX
     *   ROUNDING_MODE    {number}           0 to 8
     *   EXPONENTIAL_AT   {number|number[]}  -MAX to MAX  or  [-MAX to 0, 0 to MAX]
     *   RANGE            {number|number[]}  -MAX to MAX (not zero)  or  [-MAX to -1, 1 to MAX]
     *   CRYPTO           {boolean}          true or false
     *   MODULO_MODE      {number}           0 to 9
     *   POW_PRECISION       {number}           0 to MAX
     *   ALPHABET         {string}           A string of two or more unique characters which does
     *                                       not contain '.'.
     *   FORMAT           {object}           An object with some of the following properties:
     *     prefix                 {string}
     *     groupSize              {number}
     *     secondaryGroupSize     {number}
     *     groupSeparator         {string}
     *     decimalSeparator       {string}
     *     fractionGroupSize      {number}
     *     fractionGroupSeparator {string}
     *     suffix                 {string}
     *
     * (The values assigned to the above FORMAT object properties are not checked for validity.)
     *
     * E.g.
     * BigNumber.config({ DECIMAL_PLACES : 20, ROUNDING_MODE : 4 })
     *
     * Ignore properties/parameters set to null or undefined, except for ALPHABET.
     *
     * Return an object with the properties current values.
     */
    BigNumber.config = BigNumber.set = function (obj) {
      var p, v;

      if (obj != null) {

        if (typeof obj == 'object') {

          // DECIMAL_PLACES {number} Integer, 0 to MAX inclusive.
          // '[BigNumber Error] DECIMAL_PLACES {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'DECIMAL_PLACES')) {
            v = obj[p];
            intCheck(v, 0, MAX, p);
            DECIMAL_PLACES = v;
          }

          // ROUNDING_MODE {number} Integer, 0 to 8 inclusive.
          // '[BigNumber Error] ROUNDING_MODE {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'ROUNDING_MODE')) {
            v = obj[p];
            intCheck(v, 0, 8, p);
            ROUNDING_MODE = v;
          }

          // EXPONENTIAL_AT {number|number[]}
          // Integer, -MAX to MAX inclusive or
          // [integer -MAX to 0 inclusive, 0 to MAX inclusive].
          // '[BigNumber Error] EXPONENTIAL_AT {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'EXPONENTIAL_AT')) {
            v = obj[p];
            if (v && v.pop) {
              intCheck(v[0], -MAX, 0, p);
              intCheck(v[1], 0, MAX, p);
              TO_EXP_NEG = v[0];
              TO_EXP_POS = v[1];
            } else {
              intCheck(v, -MAX, MAX, p);
              TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
            }
          }

          // RANGE {number|number[]} Non-zero integer, -MAX to MAX inclusive or
          // [integer -MAX to -1 inclusive, integer 1 to MAX inclusive].
          // '[BigNumber Error] RANGE {not a primitive number|not an integer|out of range|cannot be zero}: {v}'
          if (obj.hasOwnProperty(p = 'RANGE')) {
            v = obj[p];
            if (v && v.pop) {
              intCheck(v[0], -MAX, -1, p);
              intCheck(v[1], 1, MAX, p);
              MIN_EXP = v[0];
              MAX_EXP = v[1];
            } else {
              intCheck(v, -MAX, MAX, p);
              if (v) {
                MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
              } else {
                throw Error
                 (bignumberError + p + ' cannot be zero: ' + v);
              }
            }
          }

          // CRYPTO {boolean} true or false.
          // '[BigNumber Error] CRYPTO not true or false: {v}'
          // '[BigNumber Error] crypto unavailable'
          if (obj.hasOwnProperty(p = 'CRYPTO')) {
            v = obj[p];
            if (v === !!v) {
              if (v) {
                if (typeof crypto != 'undefined' && crypto &&
                 (crypto.getRandomValues || crypto.randomBytes)) {
                  CRYPTO = v;
                } else {
                  CRYPTO = !v;
                  throw Error
                   (bignumberError + 'crypto unavailable');
                }
              } else {
                CRYPTO = v;
              }
            } else {
              throw Error
               (bignumberError + p + ' not true or false: ' + v);
            }
          }

          // MODULO_MODE {number} Integer, 0 to 9 inclusive.
          // '[BigNumber Error] MODULO_MODE {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'MODULO_MODE')) {
            v = obj[p];
            intCheck(v, 0, 9, p);
            MODULO_MODE = v;
          }

          // POW_PRECISION {number} Integer, 0 to MAX inclusive.
          // '[BigNumber Error] POW_PRECISION {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'POW_PRECISION')) {
            v = obj[p];
            intCheck(v, 0, MAX, p);
            POW_PRECISION = v;
          }

          // FORMAT {object}
          // '[BigNumber Error] FORMAT not an object: {v}'
          if (obj.hasOwnProperty(p = 'FORMAT')) {
            v = obj[p];
            if (typeof v == 'object') FORMAT = v;
            else throw Error
             (bignumberError + p + ' not an object: ' + v);
          }

          // ALPHABET {string}
          // '[BigNumber Error] ALPHABET invalid: {v}'
          if (obj.hasOwnProperty(p = 'ALPHABET')) {
            v = obj[p];

            // Disallow if only one character,
            // or if it contains '+', '-', '.', whitespace, or a repeated character.
            if (typeof v == 'string' && !/^.$|[+-.\s]|(.).*\1/.test(v)) {
              ALPHABET = v;
            } else {
              throw Error
               (bignumberError + p + ' invalid: ' + v);
            }
          }

        } else {

          // '[BigNumber Error] Object expected: {v}'
          throw Error
           (bignumberError + 'Object expected: ' + obj);
        }
      }

      return {
        DECIMAL_PLACES: DECIMAL_PLACES,
        ROUNDING_MODE: ROUNDING_MODE,
        EXPONENTIAL_AT: [TO_EXP_NEG, TO_EXP_POS],
        RANGE: [MIN_EXP, MAX_EXP],
        CRYPTO: CRYPTO,
        MODULO_MODE: MODULO_MODE,
        POW_PRECISION: POW_PRECISION,
        FORMAT: FORMAT,
        ALPHABET: ALPHABET
      };
    };


    /*
     * Return true if v is a BigNumber instance, otherwise return false.
     *
     * If BigNumber.DEBUG is true, throw if a BigNumber instance is not well-formed.
     *
     * v {any}
     *
     * '[BigNumber Error] Invalid BigNumber: {v}'
     */
    BigNumber.isBigNumber = function (v) {
      if (!v || v._isBigNumber !== true) return false;
      if (!BigNumber.DEBUG) return true;

      var i, n,
        c = v.c,
        e = v.e,
        s = v.s;

      out: if ({}.toString.call(c) == '[object Array]') {

        if ((s === 1 || s === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {

          // If the first element is zero, the BigNumber value must be zero.
          if (c[0] === 0) {
            if (e === 0 && c.length === 1) return true;
            break out;
          }

          // Calculate number of digits that c[0] should have, based on the exponent.
          i = (e + 1) % LOG_BASE;
          if (i < 1) i += LOG_BASE;

          // Calculate number of digits of c[0].
          //if (Math.ceil(Math.log(c[0] + 1) / Math.LN10) == i) {
          if (String(c[0]).length == i) {

            for (i = 0; i < c.length; i++) {
              n = c[i];
              if (n < 0 || n >= BASE || n !== mathfloor(n)) break out;
            }

            // Last element cannot be zero, unless it is the only element.
            if (n !== 0) return true;
          }
        }

      // Infinity/NaN
      } else if (c === null && e === null && (s === null || s === 1 || s === -1)) {
        return true;
      }

      throw Error
        (bignumberError + 'Invalid BigNumber: ' + v);
    };


    /*
     * Return a new BigNumber whose value is the maximum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */
    BigNumber.maximum = BigNumber.max = function () {
      return maxOrMin(arguments, P.lt);
    };


    /*
     * Return a new BigNumber whose value is the minimum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */
    BigNumber.minimum = BigNumber.min = function () {
      return maxOrMin(arguments, P.gt);
    };


    /*
     * Return a new BigNumber with a random value equal to or greater than 0 and less than 1,
     * and with dp, or DECIMAL_PLACES if dp is omitted, decimal places (or less if trailing
     * zeros are produced).
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp}'
     * '[BigNumber Error] crypto unavailable'
     */
    BigNumber.random = (function () {
      var pow2_53 = 0x20000000000000;

      // Return a 53 bit integer n, where 0 <= n < 9007199254740992.
      // Check if Math.random() produces more than 32 bits of randomness.
      // If it does, assume at least 53 bits are produced, otherwise assume at least 30 bits.
      // 0x40000000 is 2^30, 0x800000 is 2^23, 0x1fffff is 2^21 - 1.
      var random53bitInt = (Math.random() * pow2_53) & 0x1fffff
       ? function () { return mathfloor(Math.random() * pow2_53); }
       : function () { return ((Math.random() * 0x40000000 | 0) * 0x800000) +
         (Math.random() * 0x800000 | 0); };

      return function (dp) {
        var a, b, e, k, v,
          i = 0,
          c = [],
          rand = new BigNumber(ONE);

        if (dp == null) dp = DECIMAL_PLACES;
        else intCheck(dp, 0, MAX);

        k = mathceil(dp / LOG_BASE);

        if (CRYPTO) {

          // Browsers supporting crypto.getRandomValues.
          if (crypto.getRandomValues) {

            a = crypto.getRandomValues(new Uint32Array(k *= 2));

            for (; i < k;) {

              // 53 bits:
              // ((Math.pow(2, 32) - 1) * Math.pow(2, 21)).toString(2)
              // 11111 11111111 11111111 11111111 11100000 00000000 00000000
              // ((Math.pow(2, 32) - 1) >>> 11).toString(2)
              //                                     11111 11111111 11111111
              // 0x20000 is 2^21.
              v = a[i] * 0x20000 + (a[i + 1] >>> 11);

              // Rejection sampling:
              // 0 <= v < 9007199254740992
              // Probability that v >= 9e15, is
              // 7199254740992 / 9007199254740992 ~= 0.0008, i.e. 1 in 1251
              if (v >= 9e15) {
                b = crypto.getRandomValues(new Uint32Array(2));
                a[i] = b[0];
                a[i + 1] = b[1];
              } else {

                // 0 <= v <= 8999999999999999
                // 0 <= (v % 1e14) <= 99999999999999
                c.push(v % 1e14);
                i += 2;
              }
            }
            i = k / 2;

          // Node.js supporting crypto.randomBytes.
          } else if (crypto.randomBytes) {

            // buffer
            a = crypto.randomBytes(k *= 7);

            for (; i < k;) {

              // 0x1000000000000 is 2^48, 0x10000000000 is 2^40
              // 0x100000000 is 2^32, 0x1000000 is 2^24
              // 11111 11111111 11111111 11111111 11111111 11111111 11111111
              // 0 <= v < 9007199254740992
              v = ((a[i] & 31) * 0x1000000000000) + (a[i + 1] * 0x10000000000) +
                 (a[i + 2] * 0x100000000) + (a[i + 3] * 0x1000000) +
                 (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];

              if (v >= 9e15) {
                crypto.randomBytes(7).copy(a, i);
              } else {

                // 0 <= (v % 1e14) <= 99999999999999
                c.push(v % 1e14);
                i += 7;
              }
            }
            i = k / 7;
          } else {
            CRYPTO = false;
            throw Error
             (bignumberError + 'crypto unavailable');
          }
        }

        // Use Math.random.
        if (!CRYPTO) {

          for (; i < k;) {
            v = random53bitInt();
            if (v < 9e15) c[i++] = v % 1e14;
          }
        }

        k = c[--i];
        dp %= LOG_BASE;

        // Convert trailing digits to zeros according to dp.
        if (k && dp) {
          v = POWS_TEN[LOG_BASE - dp];
          c[i] = mathfloor(k / v) * v;
        }

        // Remove trailing elements which are zero.
        for (; c[i] === 0; c.pop(), i--);

        // Zero?
        if (i < 0) {
          c = [e = 0];
        } else {

          // Remove leading elements which are zero and adjust exponent accordingly.
          for (e = -1 ; c[0] === 0; c.splice(0, 1), e -= LOG_BASE);

          // Count the digits of the first element of c to determine leading zeros, and...
          for (i = 1, v = c[0]; v >= 10; v /= 10, i++);

          // adjust the exponent accordingly.
          if (i < LOG_BASE) e -= LOG_BASE - i;
        }

        rand.e = e;
        rand.c = c;
        return rand;
      };
    })();


    /*
     * Return a BigNumber whose value is the sum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */
    BigNumber.sum = function () {
      var i = 1,
        args = arguments,
        sum = new BigNumber(args[0]);
      for (; i < args.length;) sum = sum.plus(args[i++]);
      return sum;
    };


    // PRIVATE FUNCTIONS


    // Called by BigNumber and BigNumber.prototype.toString.
    convertBase = (function () {
      var decimal = '0123456789';

      /*
       * Convert string of baseIn to an array of numbers of baseOut.
       * Eg. toBaseOut('255', 10, 16) returns [15, 15].
       * Eg. toBaseOut('ff', 16, 10) returns [2, 5, 5].
       */
      function toBaseOut(str, baseIn, baseOut, alphabet) {
        var j,
          arr = [0],
          arrL,
          i = 0,
          len = str.length;

        for (; i < len;) {
          for (arrL = arr.length; arrL--; arr[arrL] *= baseIn);

          arr[0] += alphabet.indexOf(str.charAt(i++));

          for (j = 0; j < arr.length; j++) {

            if (arr[j] > baseOut - 1) {
              if (arr[j + 1] == null) arr[j + 1] = 0;
              arr[j + 1] += arr[j] / baseOut | 0;
              arr[j] %= baseOut;
            }
          }
        }

        return arr.reverse();
      }

      // Convert a numeric string of baseIn to a numeric string of baseOut.
      // If the caller is toString, we are converting from base 10 to baseOut.
      // If the caller is BigNumber, we are converting from baseIn to base 10.
      return function (str, baseIn, baseOut, sign, callerIsToString) {
        var alphabet, d, e, k, r, x, xc, y,
          i = str.indexOf('.'),
          dp = DECIMAL_PLACES,
          rm = ROUNDING_MODE;

        // Non-integer.
        if (i >= 0) {
          k = POW_PRECISION;

          // Unlimited precision.
          POW_PRECISION = 0;
          str = str.replace('.', '');
          y = new BigNumber(baseIn);
          x = y.pow(str.length - i);
          POW_PRECISION = k;

          // Convert str as if an integer, then restore the fraction part by dividing the
          // result by its base raised to a power.

          y.c = toBaseOut(toFixedPoint(coeffToString(x.c), x.e, '0'),
           10, baseOut, decimal);
          y.e = y.c.length;
        }

        // Convert the number as integer.

        xc = toBaseOut(str, baseIn, baseOut, callerIsToString
         ? (alphabet = ALPHABET, decimal)
         : (alphabet = decimal, ALPHABET));

        // xc now represents str as an integer and converted to baseOut. e is the exponent.
        e = k = xc.length;

        // Remove trailing zeros.
        for (; xc[--k] == 0; xc.pop());

        // Zero?
        if (!xc[0]) return alphabet.charAt(0);

        // Does str represent an integer? If so, no need for the division.
        if (i < 0) {
          --e;
        } else {
          x.c = xc;
          x.e = e;

          // The sign is needed for correct rounding.
          x.s = sign;
          x = div(x, y, dp, rm, baseOut);
          xc = x.c;
          r = x.r;
          e = x.e;
        }

        // xc now represents str converted to baseOut.

        // THe index of the rounding digit.
        d = e + dp + 1;

        // The rounding digit: the digit to the right of the digit that may be rounded up.
        i = xc[d];

        // Look at the rounding digits and mode to determine whether to round up.

        k = baseOut / 2;
        r = r || d < 0 || xc[d + 1] != null;

        r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
              : i > k || i == k &&(rm == 4 || r || rm == 6 && xc[d - 1] & 1 ||
               rm == (x.s < 0 ? 8 : 7));

        // If the index of the rounding digit is not greater than zero, or xc represents
        // zero, then the result of the base conversion is zero or, if rounding up, a value
        // such as 0.00001.
        if (d < 1 || !xc[0]) {

          // 1^-dp or 0
          str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
        } else {

          // Truncate xc to the required number of decimal places.
          xc.length = d;

          // Round up?
          if (r) {

            // Rounding up may mean the previous digit has to be rounded up and so on.
            for (--baseOut; ++xc[--d] > baseOut;) {
              xc[d] = 0;

              if (!d) {
                ++e;
                xc = [1].concat(xc);
              }
            }
          }

          // Determine trailing zeros.
          for (k = xc.length; !xc[--k];);

          // E.g. [4, 11, 15] becomes 4bf.
          for (i = 0, str = ''; i <= k; str += alphabet.charAt(xc[i++]));

          // Add leading zeros, decimal point and trailing zeros as required.
          str = toFixedPoint(str, e, alphabet.charAt(0));
        }

        // The caller will add the sign.
        return str;
      };
    })();


    // Perform division in the specified base. Called by div and convertBase.
    div = (function () {

      // Assume non-zero x and k.
      function multiply(x, k, base) {
        var m, temp, xlo, xhi,
          carry = 0,
          i = x.length,
          klo = k % SQRT_BASE,
          khi = k / SQRT_BASE | 0;

        for (x = x.slice(); i--;) {
          xlo = x[i] % SQRT_BASE;
          xhi = x[i] / SQRT_BASE | 0;
          m = khi * xlo + xhi * klo;
          temp = klo * xlo + ((m % SQRT_BASE) * SQRT_BASE) + carry;
          carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
          x[i] = temp % base;
        }

        if (carry) x = [carry].concat(x);

        return x;
      }

      function compare(a, b, aL, bL) {
        var i, cmp;

        if (aL != bL) {
          cmp = aL > bL ? 1 : -1;
        } else {

          for (i = cmp = 0; i < aL; i++) {

            if (a[i] != b[i]) {
              cmp = a[i] > b[i] ? 1 : -1;
              break;
            }
          }
        }

        return cmp;
      }

      function subtract(a, b, aL, base) {
        var i = 0;

        // Subtract b from a.
        for (; aL--;) {
          a[aL] -= i;
          i = a[aL] < b[aL] ? 1 : 0;
          a[aL] = i * base + a[aL] - b[aL];
        }

        // Remove leading zeros.
        for (; !a[0] && a.length > 1; a.splice(0, 1));
      }

      // x: dividend, y: divisor.
      return function (x, y, dp, rm, base) {
        var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0,
          yL, yz,
          s = x.s == y.s ? 1 : -1,
          xc = x.c,
          yc = y.c;

        // Either NaN, Infinity or 0?
        if (!xc || !xc[0] || !yc || !yc[0]) {

          return new BigNumber(

           // Return NaN if either NaN, or both Infinity or 0.
           !x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN :

            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            xc && xc[0] == 0 || !yc ? s * 0 : s / 0
         );
        }

        q = new BigNumber(s);
        qc = q.c = [];
        e = x.e - y.e;
        s = dp + e + 1;

        if (!base) {
          base = BASE;
          e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
          s = s / LOG_BASE | 0;
        }

        // Result exponent may be one less then the current value of e.
        // The coefficients of the BigNumbers from convertBase may have trailing zeros.
        for (i = 0; yc[i] == (xc[i] || 0); i++);

        if (yc[i] > (xc[i] || 0)) e--;

        if (s < 0) {
          qc.push(1);
          more = true;
        } else {
          xL = xc.length;
          yL = yc.length;
          i = 0;
          s += 2;

          // Normalise xc and yc so highest order digit of yc is >= base / 2.

          n = mathfloor(base / (yc[0] + 1));

          // Not necessary, but to handle odd bases where yc[0] == (base / 2) - 1.
          // if (n > 1 || n++ == 1 && yc[0] < base / 2) {
          if (n > 1) {
            yc = multiply(yc, n, base);
            xc = multiply(xc, n, base);
            yL = yc.length;
            xL = xc.length;
          }

          xi = yL;
          rem = xc.slice(0, yL);
          remL = rem.length;

          // Add zeros to make remainder as long as divisor.
          for (; remL < yL; rem[remL++] = 0);
          yz = yc.slice();
          yz = [0].concat(yz);
          yc0 = yc[0];
          if (yc[1] >= base / 2) yc0++;
          // Not necessary, but to prevent trial digit n > base, when using base 3.
          // else if (base == 3 && yc0 == 1) yc0 = 1 + 1e-15;

          do {
            n = 0;

            // Compare divisor and remainder.
            cmp = compare(yc, rem, yL, remL);

            // If divisor < remainder.
            if (cmp < 0) {

              // Calculate trial digit, n.

              rem0 = rem[0];
              if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);

              // n is how many times the divisor goes into the current remainder.
              n = mathfloor(rem0 / yc0);

              //  Algorithm:
              //  product = divisor multiplied by trial digit (n).
              //  Compare product and remainder.
              //  If product is greater than remainder:
              //    Subtract divisor from product, decrement trial digit.
              //  Subtract product from remainder.
              //  If product was less than remainder at the last compare:
              //    Compare new remainder and divisor.
              //    If remainder is greater than divisor:
              //      Subtract divisor from remainder, increment trial digit.

              if (n > 1) {

                // n may be > base only when base is 3.
                if (n >= base) n = base - 1;

                // product = divisor * trial digit.
                prod = multiply(yc, n, base);
                prodL = prod.length;
                remL = rem.length;

                // Compare product and remainder.
                // If product > remainder then trial digit n too high.
                // n is 1 too high about 5% of the time, and is not known to have
                // ever been more than 1 too high.
                while (compare(prod, rem, prodL, remL) == 1) {
                  n--;

                  // Subtract divisor from product.
                  subtract(prod, yL < prodL ? yz : yc, prodL, base);
                  prodL = prod.length;
                  cmp = 1;
                }
              } else {

                // n is 0 or 1, cmp is -1.
                // If n is 0, there is no need to compare yc and rem again below,
                // so change cmp to 1 to avoid it.
                // If n is 1, leave cmp as -1, so yc and rem are compared again.
                if (n == 0) {

                  // divisor < remainder, so n must be at least 1.
                  cmp = n = 1;
                }

                // product = divisor
                prod = yc.slice();
                prodL = prod.length;
              }

              if (prodL < remL) prod = [0].concat(prod);

              // Subtract product from remainder.
              subtract(rem, prod, remL, base);
              remL = rem.length;

               // If product was < remainder.
              if (cmp == -1) {

                // Compare divisor and new remainder.
                // If divisor < new remainder, subtract divisor from remainder.
                // Trial digit n too low.
                // n is 1 too low about 5% of the time, and very rarely 2 too low.
                while (compare(yc, rem, yL, remL) < 1) {
                  n++;

                  // Subtract divisor from remainder.
                  subtract(rem, yL < remL ? yz : yc, remL, base);
                  remL = rem.length;
                }
              }
            } else if (cmp === 0) {
              n++;
              rem = [0];
            } // else cmp === 1 and n will be 0

            // Add the next digit, n, to the result array.
            qc[i++] = n;

            // Update the remainder.
            if (rem[0]) {
              rem[remL++] = xc[xi] || 0;
            } else {
              rem = [xc[xi]];
              remL = 1;
            }
          } while ((xi++ < xL || rem[0] != null) && s--);

          more = rem[0] != null;

          // Leading zero?
          if (!qc[0]) qc.splice(0, 1);
        }

        if (base == BASE) {

          // To calculate q.e, first get the number of digits of qc[0].
          for (i = 1, s = qc[0]; s >= 10; s /= 10, i++);

          round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);

        // Caller is convertBase.
        } else {
          q.e = e;
          q.r = +more;
        }

        return q;
      };
    })();


    /*
     * Return a string representing the value of BigNumber n in fixed-point or exponential
     * notation rounded to the specified decimal places or significant digits.
     *
     * n: a BigNumber.
     * i: the index of the last digit required (i.e. the digit that may be rounded up).
     * rm: the rounding mode.
     * id: 1 (toExponential) or 2 (toPrecision).
     */
    function format(n, i, rm, id) {
      var c0, e, ne, len, str;

      if (rm == null) rm = ROUNDING_MODE;
      else intCheck(rm, 0, 8);

      if (!n.c) return n.toString();

      c0 = n.c[0];
      ne = n.e;

      if (i == null) {
        str = coeffToString(n.c);
        str = id == 1 || id == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS)
         ? toExponential(str, ne)
         : toFixedPoint(str, ne, '0');
      } else {
        n = round(new BigNumber(n), i, rm);

        // n.e may have changed if the value was rounded up.
        e = n.e;

        str = coeffToString(n.c);
        len = str.length;

        // toPrecision returns exponential notation if the number of significant digits
        // specified is less than the number of digits necessary to represent the integer
        // part of the value in fixed-point notation.

        // Exponential notation.
        if (id == 1 || id == 2 && (i <= e || e <= TO_EXP_NEG)) {

          // Append zeros?
          for (; len < i; str += '0', len++);
          str = toExponential(str, e);

        // Fixed-point notation.
        } else {
          i -= ne;
          str = toFixedPoint(str, e, '0');

          // Append zeros?
          if (e + 1 > len) {
            if (--i > 0) for (str += '.'; i--; str += '0');
          } else {
            i += e - len;
            if (i > 0) {
              if (e + 1 == len) str += '.';
              for (; i--; str += '0');
            }
          }
        }
      }

      return n.s < 0 && c0 ? '-' + str : str;
    }


    // Handle BigNumber.max and BigNumber.min.
    function maxOrMin(args, method) {
      var n,
        i = 1,
        m = new BigNumber(args[0]);

      for (; i < args.length; i++) {
        n = new BigNumber(args[i]);

        // If any number is NaN, return NaN.
        if (!n.s) {
          m = n;
          break;
        } else if (method.call(m, n)) {
          m = n;
        }
      }

      return m;
    }


    /*
     * Strip trailing zeros, calculate base 10 exponent and check against MIN_EXP and MAX_EXP.
     * Called by minus, plus and times.
     */
    function normalise(n, c, e) {
      var i = 1,
        j = c.length;

       // Remove trailing zeros.
      for (; !c[--j]; c.pop());

      // Calculate the base 10 exponent. First get the number of digits of c[0].
      for (j = c[0]; j >= 10; j /= 10, i++);

      // Overflow?
      if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {

        // Infinity.
        n.c = n.e = null;

      // Underflow?
      } else if (e < MIN_EXP) {

        // Zero.
        n.c = [n.e = 0];
      } else {
        n.e = e;
        n.c = c;
      }

      return n;
    }


    // Handle values that fail the validity test in BigNumber.
    parseNumeric = (function () {
      var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
        dotAfter = /^([^.]+)\.$/,
        dotBefore = /^\.([^.]+)$/,
        isInfinityOrNaN = /^-?(Infinity|NaN)$/,
        whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;

      return function (x, str, isNum, b) {
        var base,
          s = isNum ? str : str.replace(whitespaceOrPlus, '');

        // No exception on ±Infinity or NaN.
        if (isInfinityOrNaN.test(s)) {
          x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
        } else {
          if (!isNum) {

            // basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i
            s = s.replace(basePrefix, function (m, p1, p2) {
              base = (p2 = p2.toLowerCase()) == 'x' ? 16 : p2 == 'b' ? 2 : 8;
              return !b || b == base ? p1 : m;
            });

            if (b) {
              base = b;

              // E.g. '1.' to '1', '.1' to '0.1'
              s = s.replace(dotAfter, '$1').replace(dotBefore, '0.$1');
            }

            if (str != s) return new BigNumber(s, base);
          }

          // '[BigNumber Error] Not a number: {n}'
          // '[BigNumber Error] Not a base {b} number: {n}'
          if (BigNumber.DEBUG) {
            throw Error
              (bignumberError + 'Not a' + (b ? ' base ' + b : '') + ' number: ' + str);
          }

          // NaN
          x.s = null;
        }

        x.c = x.e = null;
      }
    })();


    /*
     * Round x to sd significant digits using rounding mode rm. Check for over/under-flow.
     * If r is truthy, it is known that there are more digits after the rounding digit.
     */
    function round(x, sd, rm, r) {
      var d, i, j, k, n, ni, rd,
        xc = x.c,
        pows10 = POWS_TEN;

      // if x is not Infinity or NaN...
      if (xc) {

        // rd is the rounding digit, i.e. the digit after the digit that may be rounded up.
        // n is a base 1e14 number, the value of the element of array x.c containing rd.
        // ni is the index of n within x.c.
        // d is the number of digits of n.
        // i is the index of rd within n including leading zeros.
        // j is the actual index of rd within n (if < 0, rd is a leading zero).
        out: {

          // Get the number of digits of the first element of xc.
          for (d = 1, k = xc[0]; k >= 10; k /= 10, d++);
          i = sd - d;

          // If the rounding digit is in the first element of xc...
          if (i < 0) {
            i += LOG_BASE;
            j = sd;
            n = xc[ni = 0];

            // Get the rounding digit at index j of n.
            rd = n / pows10[d - j - 1] % 10 | 0;
          } else {
            ni = mathceil((i + 1) / LOG_BASE);

            if (ni >= xc.length) {

              if (r) {

                // Needed by sqrt.
                for (; xc.length <= ni; xc.push(0));
                n = rd = 0;
                d = 1;
                i %= LOG_BASE;
                j = i - LOG_BASE + 1;
              } else {
                break out;
              }
            } else {
              n = k = xc[ni];

              // Get the number of digits of n.
              for (d = 1; k >= 10; k /= 10, d++);

              // Get the index of rd within n.
              i %= LOG_BASE;

              // Get the index of rd within n, adjusted for leading zeros.
              // The number of leading zeros of n is given by LOG_BASE - d.
              j = i - LOG_BASE + d;

              // Get the rounding digit at index j of n.
              rd = j < 0 ? 0 : n / pows10[d - j - 1] % 10 | 0;
            }
          }

          r = r || sd < 0 ||

          // Are there any non-zero digits after the rounding digit?
          // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
          // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
           xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);

          r = rm < 4
           ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
           : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 &&

            // Check whether the digit to the left of the rounding digit is odd.
            ((i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10) & 1 ||
             rm == (x.s < 0 ? 8 : 7));

          if (sd < 1 || !xc[0]) {
            xc.length = 0;

            if (r) {

              // Convert sd to decimal places.
              sd -= x.e + 1;

              // 1, 0.1, 0.01, 0.001, 0.0001 etc.
              xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
              x.e = -sd || 0;
            } else {

              // Zero.
              xc[0] = x.e = 0;
            }

            return x;
          }

          // Remove excess digits.
          if (i == 0) {
            xc.length = ni;
            k = 1;
            ni--;
          } else {
            xc.length = ni + 1;
            k = pows10[LOG_BASE - i];

            // E.g. 56700 becomes 56000 if 7 is the rounding digit.
            // j > 0 means i > number of leading zeros of n.
            xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
          }

          // Round up?
          if (r) {

            for (; ;) {

              // If the digit to be rounded up is in the first element of xc...
              if (ni == 0) {

                // i will be the length of xc[0] before k is added.
                for (i = 1, j = xc[0]; j >= 10; j /= 10, i++);
                j = xc[0] += k;
                for (k = 1; j >= 10; j /= 10, k++);

                // if i != k the length has increased.
                if (i != k) {
                  x.e++;
                  if (xc[0] == BASE) xc[0] = 1;
                }

                break;
              } else {
                xc[ni] += k;
                if (xc[ni] != BASE) break;
                xc[ni--] = 0;
                k = 1;
              }
            }
          }

          // Remove trailing zeros.
          for (i = xc.length; xc[--i] === 0; xc.pop());
        }

        // Overflow? Infinity.
        if (x.e > MAX_EXP) {
          x.c = x.e = null;

        // Underflow? Zero.
        } else if (x.e < MIN_EXP) {
          x.c = [x.e = 0];
        }
      }

      return x;
    }


    function valueOf(n) {
      var str,
        e = n.e;

      if (e === null) return n.toString();

      str = coeffToString(n.c);

      str = e <= TO_EXP_NEG || e >= TO_EXP_POS
        ? toExponential(str, e)
        : toFixedPoint(str, e, '0');

      return n.s < 0 ? '-' + str : str;
    }


    // PROTOTYPE/INSTANCE METHODS


    /*
     * Return a new BigNumber whose value is the absolute value of this BigNumber.
     */
    P.absoluteValue = P.abs = function () {
      var x = new BigNumber(this);
      if (x.s < 0) x.s = 1;
      return x;
    };


    /*
     * Return
     *   1 if the value of this BigNumber is greater than the value of BigNumber(y, b),
     *   -1 if the value of this BigNumber is less than the value of BigNumber(y, b),
     *   0 if they have the same value,
     *   or null if the value of either is NaN.
     */
    P.comparedTo = function (y, b) {
      return compare(this, new BigNumber(y, b));
    };


    /*
     * If dp is undefined or null or true or false, return the number of decimal places of the
     * value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
     *
     * Otherwise, if dp is a number, return a new BigNumber whose value is the value of this
     * BigNumber rounded to a maximum of dp decimal places using rounding mode rm, or
     * ROUNDING_MODE if rm is omitted.
     *
     * [dp] {number} Decimal places: integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */
    P.decimalPlaces = P.dp = function (dp, rm) {
      var c, n, v,
        x = this;

      if (dp != null) {
        intCheck(dp, 0, MAX);
        if (rm == null) rm = ROUNDING_MODE;
        else intCheck(rm, 0, 8);

        return round(new BigNumber(x), dp + x.e + 1, rm);
      }

      if (!(c = x.c)) return null;
      n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;

      // Subtract the number of trailing zeros of the last number.
      if (v = c[v]) for (; v % 10 == 0; v /= 10, n--);
      if (n < 0) n = 0;

      return n;
    };


    /*
     *  n / 0 = I
     *  n / N = N
     *  n / I = 0
     *  0 / n = 0
     *  0 / 0 = N
     *  0 / N = N
     *  0 / I = 0
     *  N / n = N
     *  N / 0 = N
     *  N / N = N
     *  N / I = N
     *  I / n = I
     *  I / 0 = I
     *  I / N = N
     *  I / I = N
     *
     * Return a new BigNumber whose value is the value of this BigNumber divided by the value of
     * BigNumber(y, b), rounded according to DECIMAL_PLACES and ROUNDING_MODE.
     */
    P.dividedBy = P.div = function (y, b) {
      return div(this, new BigNumber(y, b), DECIMAL_PLACES, ROUNDING_MODE);
    };


    /*
     * Return a new BigNumber whose value is the integer part of dividing the value of this
     * BigNumber by the value of BigNumber(y, b).
     */
    P.dividedToIntegerBy = P.idiv = function (y, b) {
      return div(this, new BigNumber(y, b), 0, 1);
    };


    /*
     * Return a BigNumber whose value is the value of this BigNumber exponentiated by n.
     *
     * If m is present, return the result modulo m.
     * If n is negative round according to DECIMAL_PLACES and ROUNDING_MODE.
     * If POW_PRECISION is non-zero and m is not present, round to POW_PRECISION using ROUNDING_MODE.
     *
     * The modular power operation works efficiently when x, n, and m are integers, otherwise it
     * is equivalent to calculating x.exponentiatedBy(n).modulo(m) with a POW_PRECISION of 0.
     *
     * n {number|string|BigNumber} The exponent. An integer.
     * [m] {number|string|BigNumber} The modulus.
     *
     * '[BigNumber Error] Exponent not an integer: {n}'
     */
    P.exponentiatedBy = P.pow = function (n, m) {
      var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y,
        x = this;

      n = new BigNumber(n);

      // Allow NaN and ±Infinity, but not other non-integers.
      if (n.c && !n.isInteger()) {
        throw Error
          (bignumberError + 'Exponent not an integer: ' + valueOf(n));
      }

      if (m != null) m = new BigNumber(m);

      // Exponent of MAX_SAFE_INTEGER is 15.
      nIsBig = n.e > 14;

      // If x is NaN, ±Infinity, ±0 or ±1, or n is ±Infinity, NaN or ±0.
      if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {

        // The sign of the result of pow when x is negative depends on the evenness of n.
        // If +n overflows to ±Infinity, the evenness of n would be not be known.
        y = new BigNumber(Math.pow(+valueOf(x), nIsBig ? 2 - isOdd(n) : +valueOf(n)));
        return m ? y.mod(m) : y;
      }

      nIsNeg = n.s < 0;

      if (m) {

        // x % m returns NaN if abs(m) is zero, or m is NaN.
        if (m.c ? !m.c[0] : !m.s) return new BigNumber(NaN);

        isModExp = !nIsNeg && x.isInteger() && m.isInteger();

        if (isModExp) x = x.mod(m);

      // Overflow to ±Infinity: >=2**1e10 or >=1.0000024**1e15.
      // Underflow to ±0: <=0.79**1e10 or <=0.9999975**1e15.
      } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0
        // [1, 240000000]
        ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7
        // [80000000000000]  [99999750000000]
        : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {

        // If x is negative and n is odd, k = -0, else k = 0.
        k = x.s < 0 && isOdd(n) ? -0 : 0;

        // If x >= 1, k = ±Infinity.
        if (x.e > -1) k = 1 / k;

        // If n is negative return ±0, else return ±Infinity.
        return new BigNumber(nIsNeg ? 1 / k : k);

      } else if (POW_PRECISION) {

        // Truncating each coefficient array to a length of k after each multiplication
        // equates to truncating significant digits to POW_PRECISION + [28, 41],
        // i.e. there will be a minimum of 28 guard digits retained.
        k = mathceil(POW_PRECISION / LOG_BASE + 2);
      }

      if (nIsBig) {
        half = new BigNumber(0.5);
        if (nIsNeg) n.s = 1;
        nIsOdd = isOdd(n);
      } else {
        i = Math.abs(+valueOf(n));
        nIsOdd = i % 2;
      }

      y = new BigNumber(ONE);

      // Performs 54 loop iterations for n of 9007199254740991.
      for (; ;) {

        if (nIsOdd) {
          y = y.times(x);
          if (!y.c) break;

          if (k) {
            if (y.c.length > k) y.c.length = k;
          } else if (isModExp) {
            y = y.mod(m);    //y = y.minus(div(y, m, 0, MODULO_MODE).times(m));
          }
        }

        if (i) {
          i = mathfloor(i / 2);
          if (i === 0) break;
          nIsOdd = i % 2;
        } else {
          n = n.times(half);
          round(n, n.e + 1, 1);

          if (n.e > 14) {
            nIsOdd = isOdd(n);
          } else {
            i = +valueOf(n);
            if (i === 0) break;
            nIsOdd = i % 2;
          }
        }

        x = x.times(x);

        if (k) {
          if (x.c && x.c.length > k) x.c.length = k;
        } else if (isModExp) {
          x = x.mod(m);    //x = x.minus(div(x, m, 0, MODULO_MODE).times(m));
        }
      }

      if (isModExp) return y;
      if (nIsNeg) y = ONE.div(y);

      return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
    };


    /*
     * Return a new BigNumber whose value is the value of this BigNumber rounded to an integer
     * using rounding mode rm, or ROUNDING_MODE if rm is omitted.
     *
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {rm}'
     */
    P.integerValue = function (rm) {
      var n = new BigNumber(this);
      if (rm == null) rm = ROUNDING_MODE;
      else intCheck(rm, 0, 8);
      return round(n, n.e + 1, rm);
    };


    /*
     * Return true if the value of this BigNumber is equal to the value of BigNumber(y, b),
     * otherwise return false.
     */
    P.isEqualTo = P.eq = function (y, b) {
      return compare(this, new BigNumber(y, b)) === 0;
    };


    /*
     * Return true if the value of this BigNumber is a finite number, otherwise return false.
     */
    P.isFinite = function () {
      return !!this.c;
    };


    /*
     * Return true if the value of this BigNumber is greater than the value of BigNumber(y, b),
     * otherwise return false.
     */
    P.isGreaterThan = P.gt = function (y, b) {
      return compare(this, new BigNumber(y, b)) > 0;
    };


    /*
     * Return true if the value of this BigNumber is greater than or equal to the value of
     * BigNumber(y, b), otherwise return false.
     */
    P.isGreaterThanOrEqualTo = P.gte = function (y, b) {
      return (b = compare(this, new BigNumber(y, b))) === 1 || b === 0;

    };


    /*
     * Return true if the value of this BigNumber is an integer, otherwise return false.
     */
    P.isInteger = function () {
      return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
    };


    /*
     * Return true if the value of this BigNumber is less than the value of BigNumber(y, b),
     * otherwise return false.
     */
    P.isLessThan = P.lt = function (y, b) {
      return compare(this, new BigNumber(y, b)) < 0;
    };


    /*
     * Return true if the value of this BigNumber is less than or equal to the value of
     * BigNumber(y, b), otherwise return false.
     */
    P.isLessThanOrEqualTo = P.lte = function (y, b) {
      return (b = compare(this, new BigNumber(y, b))) === -1 || b === 0;
    };


    /*
     * Return true if the value of this BigNumber is NaN, otherwise return false.
     */
    P.isNaN = function () {
      return !this.s;
    };


    /*
     * Return true if the value of this BigNumber is negative, otherwise return false.
     */
    P.isNegative = function () {
      return this.s < 0;
    };


    /*
     * Return true if the value of this BigNumber is positive, otherwise return false.
     */
    P.isPositive = function () {
      return this.s > 0;
    };


    /*
     * Return true if the value of this BigNumber is 0 or -0, otherwise return false.
     */
    P.isZero = function () {
      return !!this.c && this.c[0] == 0;
    };


    /*
     *  n - 0 = n
     *  n - N = N
     *  n - I = -I
     *  0 - n = -n
     *  0 - 0 = 0
     *  0 - N = N
     *  0 - I = -I
     *  N - n = N
     *  N - 0 = N
     *  N - N = N
     *  N - I = N
     *  I - n = I
     *  I - 0 = I
     *  I - N = N
     *  I - I = N
     *
     * Return a new BigNumber whose value is the value of this BigNumber minus the value of
     * BigNumber(y, b).
     */
    P.minus = function (y, b) {
      var i, j, t, xLTy,
        x = this,
        a = x.s;

      y = new BigNumber(y, b);
      b = y.s;

      // Either NaN?
      if (!a || !b) return new BigNumber(NaN);

      // Signs differ?
      if (a != b) {
        y.s = -b;
        return x.plus(y);
      }

      var xe = x.e / LOG_BASE,
        ye = y.e / LOG_BASE,
        xc = x.c,
        yc = y.c;

      if (!xe || !ye) {

        // Either Infinity?
        if (!xc || !yc) return xc ? (y.s = -b, y) : new BigNumber(yc ? x : NaN);

        // Either zero?
        if (!xc[0] || !yc[0]) {

          // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
          return yc[0] ? (y.s = -b, y) : new BigNumber(xc[0] ? x :

           // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
           ROUNDING_MODE == 3 ? -0 : 0);
        }
      }

      xe = bitFloor(xe);
      ye = bitFloor(ye);
      xc = xc.slice();

      // Determine which is the bigger number.
      if (a = xe - ye) {

        if (xLTy = a < 0) {
          a = -a;
          t = xc;
        } else {
          ye = xe;
          t = yc;
        }

        t.reverse();

        // Prepend zeros to equalise exponents.
        for (b = a; b--; t.push(0));
        t.reverse();
      } else {

        // Exponents equal. Check digit by digit.
        j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;

        for (a = b = 0; b < j; b++) {

          if (xc[b] != yc[b]) {
            xLTy = xc[b] < yc[b];
            break;
          }
        }
      }

      // x < y? Point xc to the array of the bigger number.
      if (xLTy) t = xc, xc = yc, yc = t, y.s = -y.s;

      b = (j = yc.length) - (i = xc.length);

      // Append zeros to xc if shorter.
      // No need to add zeros to yc if shorter as subtract only needs to start at yc.length.
      if (b > 0) for (; b--; xc[i++] = 0);
      b = BASE - 1;

      // Subtract yc from xc.
      for (; j > a;) {

        if (xc[--j] < yc[j]) {
          for (i = j; i && !xc[--i]; xc[i] = b);
          --xc[i];
          xc[j] += BASE;
        }

        xc[j] -= yc[j];
      }

      // Remove leading zeros and adjust exponent accordingly.
      for (; xc[0] == 0; xc.splice(0, 1), --ye);

      // Zero?
      if (!xc[0]) {

        // Following IEEE 754 (2008) 6.3,
        // n - n = +0  but  n - n = -0  when rounding towards -Infinity.
        y.s = ROUNDING_MODE == 3 ? -1 : 1;
        y.c = [y.e = 0];
        return y;
      }

      // No need to check for Infinity as +x - +y != Infinity && -x - -y != Infinity
      // for finite x and y.
      return normalise(y, xc, ye);
    };


    /*
     *   n % 0 =  N
     *   n % N =  N
     *   n % I =  n
     *   0 % n =  0
     *  -0 % n = -0
     *   0 % 0 =  N
     *   0 % N =  N
     *   0 % I =  0
     *   N % n =  N
     *   N % 0 =  N
     *   N % N =  N
     *   N % I =  N
     *   I % n =  N
     *   I % 0 =  N
     *   I % N =  N
     *   I % I =  N
     *
     * Return a new BigNumber whose value is the value of this BigNumber modulo the value of
     * BigNumber(y, b). The result depends on the value of MODULO_MODE.
     */
    P.modulo = P.mod = function (y, b) {
      var q, s,
        x = this;

      y = new BigNumber(y, b);

      // Return NaN if x is Infinity or NaN, or y is NaN or zero.
      if (!x.c || !y.s || y.c && !y.c[0]) {
        return new BigNumber(NaN);

      // Return x if y is Infinity or x is zero.
      } else if (!y.c || x.c && !x.c[0]) {
        return new BigNumber(x);
      }

      if (MODULO_MODE == 9) {

        // Euclidian division: q = sign(y) * floor(x / abs(y))
        // r = x - qy    where  0 <= r < abs(y)
        s = y.s;
        y.s = 1;
        q = div(x, y, 0, 3);
        y.s = s;
        q.s *= s;
      } else {
        q = div(x, y, 0, MODULO_MODE);
      }

      y = x.minus(q.times(y));

      // To match JavaScript %, ensure sign of zero is sign of dividend.
      if (!y.c[0] && MODULO_MODE == 1) y.s = x.s;

      return y;
    };


    /*
     *  n * 0 = 0
     *  n * N = N
     *  n * I = I
     *  0 * n = 0
     *  0 * 0 = 0
     *  0 * N = N
     *  0 * I = N
     *  N * n = N
     *  N * 0 = N
     *  N * N = N
     *  N * I = N
     *  I * n = I
     *  I * 0 = N
     *  I * N = N
     *  I * I = I
     *
     * Return a new BigNumber whose value is the value of this BigNumber multiplied by the value
     * of BigNumber(y, b).
     */
    P.multipliedBy = P.times = function (y, b) {
      var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc,
        base, sqrtBase,
        x = this,
        xc = x.c,
        yc = (y = new BigNumber(y, b)).c;

      // Either NaN, ±Infinity or ±0?
      if (!xc || !yc || !xc[0] || !yc[0]) {

        // Return NaN if either is NaN, or one is 0 and the other is Infinity.
        if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
          y.c = y.e = y.s = null;
        } else {
          y.s *= x.s;

          // Return ±Infinity if either is ±Infinity.
          if (!xc || !yc) {
            y.c = y.e = null;

          // Return ±0 if either is ±0.
          } else {
            y.c = [0];
            y.e = 0;
          }
        }

        return y;
      }

      e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
      y.s *= x.s;
      xcL = xc.length;
      ycL = yc.length;

      // Ensure xc points to longer array and xcL to its length.
      if (xcL < ycL) zc = xc, xc = yc, yc = zc, i = xcL, xcL = ycL, ycL = i;

      // Initialise the result array with zeros.
      for (i = xcL + ycL, zc = []; i--; zc.push(0));

      base = BASE;
      sqrtBase = SQRT_BASE;

      for (i = ycL; --i >= 0;) {
        c = 0;
        ylo = yc[i] % sqrtBase;
        yhi = yc[i] / sqrtBase | 0;

        for (k = xcL, j = i + k; j > i;) {
          xlo = xc[--k] % sqrtBase;
          xhi = xc[k] / sqrtBase | 0;
          m = yhi * xlo + xhi * ylo;
          xlo = ylo * xlo + ((m % sqrtBase) * sqrtBase) + zc[j] + c;
          c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
          zc[j--] = xlo % base;
        }

        zc[j] = c;
      }

      if (c) {
        ++e;
      } else {
        zc.splice(0, 1);
      }

      return normalise(y, zc, e);
    };


    /*
     * Return a new BigNumber whose value is the value of this BigNumber negated,
     * i.e. multiplied by -1.
     */
    P.negated = function () {
      var x = new BigNumber(this);
      x.s = -x.s || null;
      return x;
    };


    /*
     *  n + 0 = n
     *  n + N = N
     *  n + I = I
     *  0 + n = n
     *  0 + 0 = 0
     *  0 + N = N
     *  0 + I = I
     *  N + n = N
     *  N + 0 = N
     *  N + N = N
     *  N + I = N
     *  I + n = I
     *  I + 0 = I
     *  I + N = N
     *  I + I = I
     *
     * Return a new BigNumber whose value is the value of this BigNumber plus the value of
     * BigNumber(y, b).
     */
    P.plus = function (y, b) {
      var t,
        x = this,
        a = x.s;

      y = new BigNumber(y, b);
      b = y.s;

      // Either NaN?
      if (!a || !b) return new BigNumber(NaN);

      // Signs differ?
       if (a != b) {
        y.s = -b;
        return x.minus(y);
      }

      var xe = x.e / LOG_BASE,
        ye = y.e / LOG_BASE,
        xc = x.c,
        yc = y.c;

      if (!xe || !ye) {

        // Return ±Infinity if either ±Infinity.
        if (!xc || !yc) return new BigNumber(a / 0);

        // Either zero?
        // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
        if (!xc[0] || !yc[0]) return yc[0] ? y : new BigNumber(xc[0] ? x : a * 0);
      }

      xe = bitFloor(xe);
      ye = bitFloor(ye);
      xc = xc.slice();

      // Prepend zeros to equalise exponents. Faster to use reverse then do unshifts.
      if (a = xe - ye) {
        if (a > 0) {
          ye = xe;
          t = yc;
        } else {
          a = -a;
          t = xc;
        }

        t.reverse();
        for (; a--; t.push(0));
        t.reverse();
      }

      a = xc.length;
      b = yc.length;

      // Point xc to the longer array, and b to the shorter length.
      if (a - b < 0) t = yc, yc = xc, xc = t, b = a;

      // Only start adding at yc.length - 1 as the further digits of xc can be ignored.
      for (a = 0; b;) {
        a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
        xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
      }

      if (a) {
        xc = [a].concat(xc);
        ++ye;
      }

      // No need to check for zero, as +x + +y != 0 && -x + -y != 0
      // ye = MAX_EXP + 1 possible
      return normalise(y, xc, ye);
    };


    /*
     * If sd is undefined or null or true or false, return the number of significant digits of
     * the value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
     * If sd is true include integer-part trailing zeros in the count.
     *
     * Otherwise, if sd is a number, return a new BigNumber whose value is the value of this
     * BigNumber rounded to a maximum of sd significant digits using rounding mode rm, or
     * ROUNDING_MODE if rm is omitted.
     *
     * sd {number|boolean} number: significant digits: integer, 1 to MAX inclusive.
     *                     boolean: whether to count integer-part trailing zeros: true or false.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
     */
    P.precision = P.sd = function (sd, rm) {
      var c, n, v,
        x = this;

      if (sd != null && sd !== !!sd) {
        intCheck(sd, 1, MAX);
        if (rm == null) rm = ROUNDING_MODE;
        else intCheck(rm, 0, 8);

        return round(new BigNumber(x), sd, rm);
      }

      if (!(c = x.c)) return null;
      v = c.length - 1;
      n = v * LOG_BASE + 1;

      if (v = c[v]) {

        // Subtract the number of trailing zeros of the last element.
        for (; v % 10 == 0; v /= 10, n--);

        // Add the number of digits of the first element.
        for (v = c[0]; v >= 10; v /= 10, n++);
      }

      if (sd && x.e + 1 > n) n = x.e + 1;

      return n;
    };


    /*
     * Return a new BigNumber whose value is the value of this BigNumber shifted by k places
     * (powers of 10). Shift to the right if n > 0, and to the left if n < 0.
     *
     * k {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {k}'
     */
    P.shiftedBy = function (k) {
      intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
      return this.times('1e' + k);
    };


    /*
     *  sqrt(-n) =  N
     *  sqrt(N) =  N
     *  sqrt(-I) =  N
     *  sqrt(I) =  I
     *  sqrt(0) =  0
     *  sqrt(-0) = -0
     *
     * Return a new BigNumber whose value is the square root of the value of this BigNumber,
     * rounded according to DECIMAL_PLACES and ROUNDING_MODE.
     */
    P.squareRoot = P.sqrt = function () {
      var m, n, r, rep, t,
        x = this,
        c = x.c,
        s = x.s,
        e = x.e,
        dp = DECIMAL_PLACES + 4,
        half = new BigNumber('0.5');

      // Negative/NaN/Infinity/zero?
      if (s !== 1 || !c || !c[0]) {
        return new BigNumber(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
      }

      // Initial estimate.
      s = Math.sqrt(+valueOf(x));

      // Math.sqrt underflow/overflow?
      // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
      if (s == 0 || s == 1 / 0) {
        n = coeffToString(c);
        if ((n.length + e) % 2 == 0) n += '0';
        s = Math.sqrt(+n);
        e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);

        if (s == 1 / 0) {
          n = '1e' + e;
        } else {
          n = s.toExponential();
          n = n.slice(0, n.indexOf('e') + 1) + e;
        }

        r = new BigNumber(n);
      } else {
        r = new BigNumber(s + '');
      }

      // Check for zero.
      // r could be zero if MIN_EXP is changed after the this value was created.
      // This would cause a division by zero (x/t) and hence Infinity below, which would cause
      // coeffToString to throw.
      if (r.c[0]) {
        e = r.e;
        s = e + dp;
        if (s < 3) s = 0;

        // Newton-Raphson iteration.
        for (; ;) {
          t = r;
          r = half.times(t.plus(div(x, t, dp, 1)));

          if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {

            // The exponent of r may here be one less than the final result exponent,
            // e.g 0.0009999 (e-4) --> 0.001 (e-3), so adjust s so the rounding digits
            // are indexed correctly.
            if (r.e < e) --s;
            n = n.slice(s - 3, s + 1);

            // The 4th rounding digit may be in error by -1 so if the 4 rounding digits
            // are 9999 or 4999 (i.e. approaching a rounding boundary) continue the
            // iteration.
            if (n == '9999' || !rep && n == '4999') {

              // On the first iteration only, check to see if rounding up gives the
              // exact result as the nines may infinitely repeat.
              if (!rep) {
                round(t, t.e + DECIMAL_PLACES + 2, 0);

                if (t.times(t).eq(x)) {
                  r = t;
                  break;
                }
              }

              dp += 4;
              s += 4;
              rep = 1;
            } else {

              // If rounding digits are null, 0{0,4} or 50{0,3}, check for exact
              // result. If not, then there are further digits and m will be truthy.
              if (!+n || !+n.slice(1) && n.charAt(0) == '5') {

                // Truncate to the first rounding digit.
                round(r, r.e + DECIMAL_PLACES + 2, 1);
                m = !r.times(r).eq(x);
              }

              break;
            }
          }
        }
      }

      return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
    };


    /*
     * Return a string representing the value of this BigNumber in exponential notation and
     * rounded using ROUNDING_MODE to dp fixed decimal places.
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */
    P.toExponential = function (dp, rm) {
      if (dp != null) {
        intCheck(dp, 0, MAX);
        dp++;
      }
      return format(this, dp, rm, 1);
    };


    /*
     * Return a string representing the value of this BigNumber in fixed-point notation rounding
     * to dp fixed decimal places using rounding mode rm, or ROUNDING_MODE if rm is omitted.
     *
     * Note: as with JavaScript's number type, (-0).toFixed(0) is '0',
     * but e.g. (-0.00001).toFixed(0) is '-0'.
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */
    P.toFixed = function (dp, rm) {
      if (dp != null) {
        intCheck(dp, 0, MAX);
        dp = dp + this.e + 1;
      }
      return format(this, dp, rm);
    };


    /*
     * Return a string representing the value of this BigNumber in fixed-point notation rounded
     * using rm or ROUNDING_MODE to dp decimal places, and formatted according to the properties
     * of the format or FORMAT object (see BigNumber.set).
     *
     * The formatting object may contain some or all of the properties shown below.
     *
     * FORMAT = {
     *   prefix: '',
     *   groupSize: 3,
     *   secondaryGroupSize: 0,
     *   groupSeparator: ',',
     *   decimalSeparator: '.',
     *   fractionGroupSize: 0,
     *   fractionGroupSeparator: '\xA0',      // non-breaking space
     *   suffix: ''
     * };
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     * [format] {object} Formatting options. See FORMAT pbject above.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     * '[BigNumber Error] Argument not an object: {format}'
     */
    P.toFormat = function (dp, rm, format) {
      var str,
        x = this;

      if (format == null) {
        if (dp != null && rm && typeof rm == 'object') {
          format = rm;
          rm = null;
        } else if (dp && typeof dp == 'object') {
          format = dp;
          dp = rm = null;
        } else {
          format = FORMAT;
        }
      } else if (typeof format != 'object') {
        throw Error
          (bignumberError + 'Argument not an object: ' + format);
      }

      str = x.toFixed(dp, rm);

      if (x.c) {
        var i,
          arr = str.split('.'),
          g1 = +format.groupSize,
          g2 = +format.secondaryGroupSize,
          groupSeparator = format.groupSeparator || '',
          intPart = arr[0],
          fractionPart = arr[1],
          isNeg = x.s < 0,
          intDigits = isNeg ? intPart.slice(1) : intPart,
          len = intDigits.length;

        if (g2) i = g1, g1 = g2, g2 = i, len -= i;

        if (g1 > 0 && len > 0) {
          i = len % g1 || g1;
          intPart = intDigits.substr(0, i);
          for (; i < len; i += g1) intPart += groupSeparator + intDigits.substr(i, g1);
          if (g2 > 0) intPart += groupSeparator + intDigits.slice(i);
          if (isNeg) intPart = '-' + intPart;
        }

        str = fractionPart
         ? intPart + (format.decimalSeparator || '') + ((g2 = +format.fractionGroupSize)
          ? fractionPart.replace(new RegExp('\\d{' + g2 + '}\\B', 'g'),
           '$&' + (format.fractionGroupSeparator || ''))
          : fractionPart)
         : intPart;
      }

      return (format.prefix || '') + str + (format.suffix || '');
    };


    /*
     * Return an array of two BigNumbers representing the value of this BigNumber as a simple
     * fraction with an integer numerator and an integer denominator.
     * The denominator will be a positive non-zero value less than or equal to the specified
     * maximum denominator. If a maximum denominator is not specified, the denominator will be
     * the lowest value necessary to represent the number exactly.
     *
     * [md] {number|string|BigNumber} Integer >= 1, or Infinity. The maximum denominator.
     *
     * '[BigNumber Error] Argument {not an integer|out of range} : {md}'
     */
    P.toFraction = function (md) {
      var d, d0, d1, d2, e, exp, n, n0, n1, q, r, s,
        x = this,
        xc = x.c;

      if (md != null) {
        n = new BigNumber(md);

        // Throw if md is less than one or is not an integer, unless it is Infinity.
        if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) {
          throw Error
            (bignumberError + 'Argument ' +
              (n.isInteger() ? 'out of range: ' : 'not an integer: ') + valueOf(n));
        }
      }

      if (!xc) return new BigNumber(x);

      d = new BigNumber(ONE);
      n1 = d0 = new BigNumber(ONE);
      d1 = n0 = new BigNumber(ONE);
      s = coeffToString(xc);

      // Determine initial denominator.
      // d is a power of 10 and the minimum max denominator that specifies the value exactly.
      e = d.e = s.length - x.e - 1;
      d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
      md = !md || n.comparedTo(d) > 0 ? (e > 0 ? d : n1) : n;

      exp = MAX_EXP;
      MAX_EXP = 1 / 0;
      n = new BigNumber(s);

      // n0 = d1 = 0
      n0.c[0] = 0;

      for (; ;)  {
        q = div(n, d, 0, 1);
        d2 = d0.plus(q.times(d1));
        if (d2.comparedTo(md) == 1) break;
        d0 = d1;
        d1 = d2;
        n1 = n0.plus(q.times(d2 = n1));
        n0 = d2;
        d = n.minus(q.times(d2 = d));
        n = d2;
      }

      d2 = div(md.minus(d0), d1, 0, 1);
      n0 = n0.plus(d2.times(n1));
      d0 = d0.plus(d2.times(d1));
      n0.s = n1.s = x.s;
      e = e * 2;

      // Determine which fraction is closer to x, n0/d0 or n1/d1
      r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(
          div(n0, d0, e, ROUNDING_MODE).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];

      MAX_EXP = exp;

      return r;
    };


    /*
     * Return the value of this BigNumber converted to a number primitive.
     */
    P.toNumber = function () {
      return +valueOf(this);
    };


    /*
     * Return a string representing the value of this BigNumber rounded to sd significant digits
     * using rounding mode rm or ROUNDING_MODE. If sd is less than the number of digits
     * necessary to represent the integer part of the value in fixed-point notation, then use
     * exponential notation.
     *
     * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
     */
    P.toPrecision = function (sd, rm) {
      if (sd != null) intCheck(sd, 1, MAX);
      return format(this, sd, rm, 2);
    };


    /*
     * Return a string representing the value of this BigNumber in base b, or base 10 if b is
     * omitted. If a base is specified, including base 10, round according to DECIMAL_PLACES and
     * ROUNDING_MODE. If a base is not specified, and this BigNumber has a positive exponent
     * that is equal to or greater than TO_EXP_POS, or a negative exponent equal to or less than
     * TO_EXP_NEG, return exponential notation.
     *
     * [b] {number} Integer, 2 to ALPHABET.length inclusive.
     *
     * '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
     */
    P.toString = function (b) {
      var str,
        n = this,
        s = n.s,
        e = n.e;

      // Infinity or NaN?
      if (e === null) {
        if (s) {
          str = 'Infinity';
          if (s < 0) str = '-' + str;
        } else {
          str = 'NaN';
        }
      } else {
        if (b == null) {
          str = e <= TO_EXP_NEG || e >= TO_EXP_POS
           ? toExponential(coeffToString(n.c), e)
           : toFixedPoint(coeffToString(n.c), e, '0');
        } else if (b === 10) {
          n = round(new BigNumber(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
          str = toFixedPoint(coeffToString(n.c), n.e, '0');
        } else {
          intCheck(b, 2, ALPHABET.length, 'Base');
          str = convertBase(toFixedPoint(coeffToString(n.c), e, '0'), 10, b, s, true);
        }

        if (s < 0 && n.c[0]) str = '-' + str;
      }

      return str;
    };


    /*
     * Return as toString, but do not accept a base argument, and include the minus sign for
     * negative zero.
     */
    P.valueOf = P.toJSON = function () {
      return valueOf(this);
    };


    P._isBigNumber = true;

    if (configObject != null) BigNumber.set(configObject);

    return BigNumber;
  }


  // PRIVATE HELPER FUNCTIONS

  // These functions don't need access to variables,
  // e.g. DECIMAL_PLACES, in the scope of the `clone` function above.


  function bitFloor(n) {
    var i = n | 0;
    return n > 0 || n === i ? i : i - 1;
  }


  // Return a coefficient array as a string of base 10 digits.
  function coeffToString(a) {
    var s, z,
      i = 1,
      j = a.length,
      r = a[0] + '';

    for (; i < j;) {
      s = a[i++] + '';
      z = LOG_BASE - s.length;
      for (; z--; s = '0' + s);
      r += s;
    }

    // Determine trailing zeros.
    for (j = r.length; r.charCodeAt(--j) === 48;);

    return r.slice(0, j + 1 || 1);
  }


  // Compare the value of BigNumbers x and y.
  function compare(x, y) {
    var a, b,
      xc = x.c,
      yc = y.c,
      i = x.s,
      j = y.s,
      k = x.e,
      l = y.e;

    // Either NaN?
    if (!i || !j) return null;

    a = xc && !xc[0];
    b = yc && !yc[0];

    // Either zero?
    if (a || b) return a ? b ? 0 : -j : i;

    // Signs differ?
    if (i != j) return i;

    a = i < 0;
    b = k == l;

    // Either Infinity?
    if (!xc || !yc) return b ? 0 : !xc ^ a ? 1 : -1;

    // Compare exponents.
    if (!b) return k > l ^ a ? 1 : -1;

    j = (k = xc.length) < (l = yc.length) ? k : l;

    // Compare digit by digit.
    for (i = 0; i < j; i++) if (xc[i] != yc[i]) return xc[i] > yc[i] ^ a ? 1 : -1;

    // Compare lengths.
    return k == l ? 0 : k > l ^ a ? 1 : -1;
  }


  /*
   * Check that n is a primitive number, an integer, and in range, otherwise throw.
   */
  function intCheck(n, min, max, name) {
    if (n < min || n > max || n !== mathfloor(n)) {
      throw Error
       (bignumberError + (name || 'Argument') + (typeof n == 'number'
         ? n < min || n > max ? ' out of range: ' : ' not an integer: '
         : ' not a primitive number: ') + String(n));
    }
  }


  // Assumes finite n.
  function isOdd(n) {
    var k = n.c.length - 1;
    return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
  }


  function toExponential(str, e) {
    return (str.length > 1 ? str.charAt(0) + '.' + str.slice(1) : str) +
     (e < 0 ? 'e' : 'e+') + e;
  }


  function toFixedPoint(str, e, z) {
    var len, zs;

    // Negative exponent?
    if (e < 0) {

      // Prepend zeros.
      for (zs = z + '.'; ++e; zs += z);
      str = zs + str;

    // Positive exponent
    } else {
      len = str.length;

      // Append zeros.
      if (++e > len) {
        for (zs = z, e -= len; --e; zs += z);
        str += zs;
      } else if (e < len) {
        str = str.slice(0, e) + '.' + str.slice(e);
      }
    }

    return str;
  }


  // EXPORT


  BigNumber = clone();
  BigNumber['default'] = BigNumber.BigNumber = BigNumber;

  // AMD.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () { return BigNumber; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

  // Node.js and other environments that support module.exports.
  } else {}
})(this);


/***/ }),

/***/ "./node_modules/bnc-onboard/dist/esm/onboard-9d401f90.js":
/*!***************************************************************!*\
  !*** ./node_modules/bnc-onboard/dist/esm/onboard-9d401f90.js ***!
  \***************************************************************/
/*! exports provided: a, b, c, d, i, n, o, v */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return networkToId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return networkIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return connectIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return balanceIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return init$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return networkName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return validateType; });
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bnc_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bnc-sdk */ "./node_modules/bnc-sdk/dist/esm/index.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bowser */ "./node_modules/bowser/es5.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_3__);
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }






function noop() {}

var identity = function identity(x) {
  return x;
};

function assign(tar, src) {
  // @ts-ignore
  for (var k in src) {
    tar[k] = src[k];
  }

  return tar;
}

function run(fn) {
  return fn();
}

function blank_object() {
  return Object.create(null);
}

function run_all(fns) {
  fns.forEach(run);
}

function is_function(thing) {
  return typeof thing === 'function';
}

function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a && _typeof(a) === 'object' || typeof a === 'function';
}

function subscribe(store) {
  if (store == null) {
    return noop;
  }

  for (var _len = arguments.length, callbacks = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    callbacks[_key - 1] = arguments[_key];
  }

  var unsub = store.subscribe.apply(store, callbacks);
  return unsub.unsubscribe ? function () {
    return unsub.unsubscribe();
  } : unsub;
}

function get_store_value(store) {
  var value;
  subscribe(store, function (_) {
    return value = _;
  })();
  return value;
}

function component_subscribe(component, store, callback) {
  component.$$.on_destroy.push(subscribe(store, callback));
}

function create_slot(definition, ctx, $$scope, fn) {
  if (definition) {
    var slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
    return definition[0](slot_ctx);
  }
}

function get_slot_context(definition, ctx, $$scope, fn) {
  return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
}

function get_slot_changes(definition, $$scope, dirty, fn) {
  if (definition[2] && fn) {
    var lets = definition[2](fn(dirty));

    if ($$scope.dirty === undefined) {
      return lets;
    }

    if (_typeof(lets) === 'object') {
      var merged = [];
      var len = Math.max($$scope.dirty.length, lets.length);

      for (var i = 0; i < len; i += 1) {
        merged[i] = $$scope.dirty[i] | lets[i];
      }

      return merged;
    }

    return $$scope.dirty | lets;
  }

  return $$scope.dirty;
}

var is_client = typeof window !== 'undefined';
var now = is_client ? function () {
  return window.performance.now();
} : function () {
  return Date.now();
};
var raf = is_client ? function (cb) {
  return requestAnimationFrame(cb);
} : noop;
var tasks = new Set();

function run_tasks(now) {
  tasks.forEach(function (task) {
    if (!task.c(now)) {
      tasks["delete"](task);
      task.f();
    }
  });
  if (tasks.size !== 0) raf(run_tasks);
}
/**
 * Creates a new task that runs on each raf frame
 * until it returns a falsy value or is aborted
 */


function loop(callback) {
  var task;
  if (tasks.size === 0) raf(run_tasks);
  return {
    promise: new Promise(function (fulfill) {
      tasks.add(task = {
        c: callback,
        f: fulfill
      });
    }),
    abort: function abort() {
      tasks["delete"](task);
    }
  };
}

function append(target, node) {
  target.appendChild(node);
}

function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}

function detach(node) {
  node.parentNode.removeChild(node);
}

function element(name) {
  return document.createElement(name);
}

function svg_element(name) {
  return document.createElementNS('http://www.w3.org/2000/svg', name);
}

function text(data) {
  return document.createTextNode(data);
}

function space() {
  return text(' ');
}

function empty() {
  return text('');
}

function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return function () {
    return node.removeEventListener(event, handler, options);
  };
}

function attr(node, attribute, value) {
  if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
}

function children(element) {
  return Array.from(element.childNodes);
}

function set_data(text, data) {
  data = '' + data;
  if (text.data !== data) text.data = data;
}

function set_style(node, key, value, important) {
  node.style.setProperty(key, value, important ? 'important' : '');
}

function toggle_class(element, name, toggle) {
  element.classList[toggle ? 'add' : 'remove'](name);
}

function custom_event(type, detail) {
  var e = document.createEvent('CustomEvent');
  e.initCustomEvent(type, false, false, detail);
  return e;
}

var HtmlTag = /*#__PURE__*/function () {
  function HtmlTag(html) {
    var anchor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, HtmlTag);

    this.e = element('div');
    this.a = anchor;
    this.u(html);
  }

  _createClass(HtmlTag, [{
    key: "m",
    value: function m(target) {
      var anchor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      for (var i = 0; i < this.n.length; i += 1) {
        insert(target, this.n[i], anchor);
      }

      this.t = target;
    }
  }, {
    key: "u",
    value: function u(html) {
      this.e.innerHTML = html;
      this.n = Array.from(this.e.childNodes);
    }
  }, {
    key: "p",
    value: function p(html) {
      this.d();
      this.u(html);
      this.m(this.t, this.a);
    }
  }, {
    key: "d",
    value: function d() {
      this.n.forEach(detach);
    }
  }]);

  return HtmlTag;
}();

var active_docs = new Set();
var active = 0; // https://github.com/darkskyapp/string-hash/blob/master/index.js

function hash(str) {
  var hash = 5381;
  var i = str.length;

  while (i--) {
    hash = (hash << 5) - hash ^ str.charCodeAt(i);
  }

  return hash >>> 0;
}

function create_rule(node, a, b, duration, delay, ease, fn) {
  var uid = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
  var step = 16.666 / duration;
  var keyframes = '{\n';

  for (var p = 0; p <= 1; p += step) {
    var t = a + (b - a) * ease(p);
    keyframes += p * 100 + "%{".concat(fn(t, 1 - t), "}\n");
  }

  var rule = keyframes + "100% {".concat(fn(b, 1 - b), "}\n}");
  var name = "__svelte_".concat(hash(rule), "_").concat(uid);
  var doc = node.ownerDocument;
  active_docs.add(doc);
  var stylesheet = doc.__svelte_stylesheet || (doc.__svelte_stylesheet = doc.head.appendChild(element('style')).sheet);
  var current_rules = doc.__svelte_rules || (doc.__svelte_rules = {});

  if (!current_rules[name]) {
    current_rules[name] = true;
    stylesheet.insertRule("@keyframes ".concat(name, " ").concat(rule), stylesheet.cssRules.length);
  }

  var animation = node.style.animation || '';
  node.style.animation = "".concat(animation ? "".concat(animation, ", ") : "").concat(name, " ").concat(duration, "ms linear ").concat(delay, "ms 1 both");
  active += 1;
  return name;
}

function delete_rule(node, name) {
  var previous = (node.style.animation || '').split(', ');
  var next = previous.filter(name ? function (anim) {
    return anim.indexOf(name) < 0;
  } // remove specific animation
  : function (anim) {
    return anim.indexOf('__svelte') === -1;
  } // remove all Svelte animations
  );
  var deleted = previous.length - next.length;

  if (deleted) {
    node.style.animation = next.join(', ');
    active -= deleted;
    if (!active) clear_rules();
  }
}

function clear_rules() {
  raf(function () {
    if (active) return;
    active_docs.forEach(function (doc) {
      var stylesheet = doc.__svelte_stylesheet;
      var i = stylesheet.cssRules.length;

      while (i--) {
        stylesheet.deleteRule(i);
      }

      doc.__svelte_rules = {};
    });
    active_docs.clear();
  });
}

var current_component;

function set_current_component(component) {
  current_component = component;
}

function get_current_component() {
  if (!current_component) throw new Error("Function called outside component initialization");
  return current_component;
}

function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}

function onDestroy(fn) {
  get_current_component().$$.on_destroy.push(fn);
}

var dirty_components = [];
var binding_callbacks = [];
var render_callbacks = [];
var flush_callbacks = [];
var resolved_promise = Promise.resolve();
var update_scheduled = false;

function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}

function add_render_callback(fn) {
  render_callbacks.push(fn);
}

var flushing = false;
var seen_callbacks = new Set();

function flush() {
  if (flushing) return;
  flushing = true;

  do {
    // first, call beforeUpdate functions
    // and update components
    for (var i = 0; i < dirty_components.length; i += 1) {
      var component = dirty_components[i];
      set_current_component(component);
      update(component.$$);
    }

    dirty_components.length = 0;

    while (binding_callbacks.length) {
      binding_callbacks.pop()();
    } // then, once components are updated, call
    // afterUpdate functions. This may cause
    // subsequent updates...


    for (var _i = 0; _i < render_callbacks.length; _i += 1) {
      var callback = render_callbacks[_i];

      if (!seen_callbacks.has(callback)) {
        // ...so guard against infinite loops
        seen_callbacks.add(callback);
        callback();
      }
    }

    render_callbacks.length = 0;
  } while (dirty_components.length);

  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }

  update_scheduled = false;
  flushing = false;
  seen_callbacks.clear();
}

function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    var dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}

var promise;

function wait() {
  if (!promise) {
    promise = Promise.resolve();
    promise.then(function () {
      promise = null;
    });
  }

  return promise;
}

function dispatch(node, direction, kind) {
  node.dispatchEvent(custom_event("".concat(direction ? 'intro' : 'outro').concat(kind)));
}

var outroing = new Set();
var outros;

function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros // parent group

  };
}

function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }

  outros = outros.p;
}

function transition_in(block, local) {
  if (block && block.i) {
    outroing["delete"](block);
    block.i(local);
  }
}

function transition_out(block, local, detach, callback) {
  if (block && block.o) {
    if (outroing.has(block)) return;
    outroing.add(block);
    outros.c.push(function () {
      outroing["delete"](block);

      if (callback) {
        if (detach) block.d(1);
        callback();
      }
    });
    block.o(local);
  }
}

var null_transition = {
  duration: 0
};

function create_in_transition(node, fn, params) {
  var config = fn(node, params);
  var running = false;
  var animation_name;
  var task;
  var uid = 0;

  function cleanup() {
    if (animation_name) delete_rule(node, animation_name);
  }

  function go() {
    var _ref = config || null_transition,
        _ref$delay = _ref.delay,
        delay = _ref$delay === void 0 ? 0 : _ref$delay,
        _ref$duration = _ref.duration,
        duration = _ref$duration === void 0 ? 300 : _ref$duration,
        _ref$easing = _ref.easing,
        easing = _ref$easing === void 0 ? identity : _ref$easing,
        _ref$tick = _ref.tick,
        tick = _ref$tick === void 0 ? noop : _ref$tick,
        css = _ref.css;

    if (css) animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
    tick(0, 1);
    var start_time = now() + delay;
    var end_time = start_time + duration;
    if (task) task.abort();
    running = true;
    add_render_callback(function () {
      return dispatch(node, true, 'start');
    });
    task = loop(function (now) {
      if (running) {
        if (now >= end_time) {
          tick(1, 0);
          dispatch(node, true, 'end');
          cleanup();
          return running = false;
        }

        if (now >= start_time) {
          var t = easing((now - start_time) / duration);
          tick(t, 1 - t);
        }
      }

      return running;
    });
  }

  var started = false;
  return {
    start: function start() {
      if (started) return;
      delete_rule(node);

      if (is_function(config)) {
        config = config();
        wait().then(go);
      } else {
        go();
      }
    },
    invalidate: function invalidate() {
      started = false;
    },
    end: function end() {
      if (running) {
        cleanup();
        running = false;
      }
    }
  };
}

function create_bidirectional_transition(node, fn, params, intro) {
  var config = fn(node, params);
  var t = intro ? 0 : 1;
  var running_program = null;
  var pending_program = null;
  var animation_name = null;

  function clear_animation() {
    if (animation_name) delete_rule(node, animation_name);
  }

  function init(program, duration) {
    var d = program.b - t;
    duration *= Math.abs(d);
    return {
      a: t,
      b: program.b,
      d: d,
      duration: duration,
      start: program.start,
      end: program.start + duration,
      group: program.group
    };
  }

  function go(b) {
    var _ref2 = config || null_transition,
        _ref2$delay = _ref2.delay,
        delay = _ref2$delay === void 0 ? 0 : _ref2$delay,
        _ref2$duration = _ref2.duration,
        duration = _ref2$duration === void 0 ? 300 : _ref2$duration,
        _ref2$easing = _ref2.easing,
        easing = _ref2$easing === void 0 ? identity : _ref2$easing,
        _ref2$tick = _ref2.tick,
        tick = _ref2$tick === void 0 ? noop : _ref2$tick,
        css = _ref2.css;

    var program = {
      start: now() + delay,
      b: b
    };

    if (!b) {
      // @ts-ignore todo: improve typings
      program.group = outros;
      outros.r += 1;
    }

    if (running_program) {
      pending_program = program;
    } else {
      // if this is an intro, and there's a delay, we need to do
      // an initial tick and/or apply CSS animation immediately
      if (css) {
        clear_animation();
        animation_name = create_rule(node, t, b, duration, delay, easing, css);
      }

      if (b) tick(0, 1);
      running_program = init(program, duration);
      add_render_callback(function () {
        return dispatch(node, b, 'start');
      });
      loop(function (now) {
        if (pending_program && now > pending_program.start) {
          running_program = init(pending_program, duration);
          pending_program = null;
          dispatch(node, running_program.b, 'start');

          if (css) {
            clear_animation();
            animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
          }
        }

        if (running_program) {
          if (now >= running_program.end) {
            tick(t = running_program.b, 1 - t);
            dispatch(node, running_program.b, 'end');

            if (!pending_program) {
              // we're done
              if (running_program.b) {
                // intro — we can tidy up immediately
                clear_animation();
              } else {
                // outro — needs to be coordinated
                if (! --running_program.group.r) run_all(running_program.group.c);
              }
            }

            running_program = null;
          } else if (now >= running_program.start) {
            var p = now - running_program.start;
            t = running_program.a + running_program.d * easing(p / running_program.duration);
            tick(t, 1 - t);
          }
        }

        return !!(running_program || pending_program);
      });
    }
  }

  return {
    run: function run(b) {
      if (is_function(config)) {
        wait().then(function () {
          // @ts-ignore
          config = config();
          go(b);
        });
      } else {
        go(b);
      }
    },
    end: function end() {
      clear_animation();
      running_program = pending_program = null;
    }
  };
}

function outro_and_destroy_block(block, lookup) {
  transition_out(block, 1, 1, function () {
    lookup["delete"](block.key);
  });
}

function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
  var o = old_blocks.length;
  var n = list.length;
  var i = o;
  var old_indexes = {};

  while (i--) {
    old_indexes[old_blocks[i].key] = i;
  }

  var new_blocks = [];
  var new_lookup = new Map();
  var deltas = new Map();
  i = n;

  while (i--) {
    var child_ctx = get_context(ctx, list, i);
    var key = get_key(child_ctx);
    var block = lookup.get(key);

    if (!block) {
      block = create_each_block(key, child_ctx);
      block.c();
    } else if (dynamic) {
      block.p(child_ctx, dirty);
    }

    new_lookup.set(key, new_blocks[i] = block);
    if (key in old_indexes) deltas.set(key, Math.abs(i - old_indexes[key]));
  }

  var will_move = new Set();
  var did_move = new Set();

  function insert(block) {
    transition_in(block, 1);
    block.m(node, next, lookup.has(block.key));
    lookup.set(block.key, block);
    next = block.first;
    n--;
  }

  while (o && n) {
    var new_block = new_blocks[n - 1];
    var old_block = old_blocks[o - 1];
    var new_key = new_block.key;
    var old_key = old_block.key;

    if (new_block === old_block) {
      // do nothing
      next = new_block.first;
      o--;
      n--;
    } else if (!new_lookup.has(old_key)) {
      // remove old block
      destroy(old_block, lookup);
      o--;
    } else if (!lookup.has(new_key) || will_move.has(new_key)) {
      insert(new_block);
    } else if (did_move.has(old_key)) {
      o--;
    } else if (deltas.get(new_key) > deltas.get(old_key)) {
      did_move.add(new_key);
      insert(new_block);
    } else {
      will_move.add(old_key);
      o--;
    }
  }

  while (o--) {
    var _old_block = old_blocks[o];
    if (!new_lookup.has(_old_block.key)) destroy(_old_block, lookup);
  }

  while (n) {
    insert(new_blocks[n - 1]);
  }

  return new_blocks;
}

function create_component(block) {
  block && block.c();
}

function mount_component(component, target, anchor) {
  var _component$$$ = component.$$,
      fragment = _component$$$.fragment,
      on_mount = _component$$$.on_mount,
      on_destroy = _component$$$.on_destroy,
      after_update = _component$$$.after_update;
  fragment && fragment.m(target, anchor); // onMount happens before the initial afterUpdate

  add_render_callback(function () {
    var new_on_destroy = on_mount.map(run).filter(is_function);

    if (on_destroy) {
      on_destroy.push.apply(on_destroy, _toConsumableArray(new_on_destroy));
    } else {
      // Edge case - component was destroyed immediately,
      // most likely as a result of a binding initialising
      run_all(new_on_destroy);
    }

    component.$$.on_mount = [];
  });
  after_update.forEach(add_render_callback);
}

function destroy_component(component, detaching) {
  var $$ = component.$$;

  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
    // preserve final state?)

    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}

function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }

  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}

function init(component, options, instance, create_fragment, not_equal, props) {
  var dirty = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [-1];
  var parent_component = current_component;
  set_current_component(component);
  var prop_values = options.props || {};
  var $$ = component.$$ = {
    fragment: null,
    ctx: null,
    // state
    props: props,
    update: noop,
    not_equal: not_equal,
    bound: blank_object(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    before_update: [],
    after_update: [],
    context: new Map(parent_component ? parent_component.$$.context : []),
    // everything else
    callbacks: blank_object(),
    dirty: dirty
  };
  var ready = false;
  $$.ctx = instance ? instance(component, prop_values, function (i, ret) {
    var value = (arguments.length <= 2 ? 0 : arguments.length - 2) ? arguments.length <= 2 ? undefined : arguments[2] : ret;

    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if ($$.bound[i]) $$.bound[i](value);
      if (ready) make_dirty(component, i);
    }

    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update); // `false` as a special case of no DOM component

  $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

  if (options.target) {
    if (options.hydrate) {
      var nodes = children(options.target); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      $$.fragment && $$.fragment.c();
    }

    if (options.intro) transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor);
    flush();
  }

  set_current_component(parent_component);
}

var SvelteComponent = /*#__PURE__*/function () {
  function SvelteComponent() {
    _classCallCheck(this, SvelteComponent);
  }

  _createClass(SvelteComponent, [{
    key: "$destroy",
    value: function $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }
  }, {
    key: "$on",
    value: function $on(type, callback) {
      var callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return function () {
        var index = callbacks.indexOf(callback);
        if (index !== -1) callbacks.splice(index, 1);
      };
    }
  }, {
    key: "$set",
    value: function $set() {// overridden by instance, if it has props
    }
  }]);

  return SvelteComponent;
}();

var subscriber_queue = [];
/**
 * Creates a `Readable` store that allows reading by subscription.
 * @param value initial value
 * @param {StartStopNotifier}start start and stop notifications for subscriptions
 */

function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */


function writable(value) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
  var stop;
  var subscribers = [];

  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;

      if (stop) {
        // store is ready
        var run_queue = !subscriber_queue.length;

        for (var i = 0; i < subscribers.length; i += 1) {
          var s = subscribers[i];
          s[1]();
          subscriber_queue.push(s, value);
        }

        if (run_queue) {
          for (var _i2 = 0; _i2 < subscriber_queue.length; _i2 += 2) {
            subscriber_queue[_i2][0](subscriber_queue[_i2 + 1]);
          }

          subscriber_queue.length = 0;
        }
      }
    }
  }

  function update(fn) {
    set(fn(value));
  }

  function subscribe(run) {
    var invalidate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
    var subscriber = [run, invalidate];
    subscribers.push(subscriber);

    if (subscribers.length === 1) {
      stop = start(set) || noop;
    }

    run(value);
    return function () {
      var index = subscribers.indexOf(subscriber);

      if (index !== -1) {
        subscribers.splice(index, 1);
      }

      if (subscribers.length === 0) {
        stop();
        stop = null;
      }
    };
  }

  return {
    set: set,
    update: update,
    subscribe: subscribe
  };
}

function derived(stores, fn, initial_value) {
  var single = !Array.isArray(stores);
  var stores_array = single ? [stores] : stores;
  var auto = fn.length < 2;
  return readable(initial_value, function (set) {
    var inited = false;
    var values = [];
    var pending = 0;
    var cleanup = noop;

    var sync = function sync() {
      if (pending) {
        return;
      }

      cleanup();
      var result = fn(single ? values[0] : values, set);

      if (auto) {
        set(result);
      } else {
        cleanup = is_function(result) ? result : noop;
      }
    };

    var unsubscribers = stores_array.map(function (store, i) {
      return subscribe(store, function (value) {
        values[i] = value;
        pending &= ~(1 << i);

        if (inited) {
          sync();
        }
      }, function () {
        pending |= 1 << i;
      });
    });
    inited = true;
    sync();
    return function stop() {
      run_all(unsubscribers);
      cleanup();
    };
  });
}

function fade(node, _ref3) {
  var _ref3$delay = _ref3.delay,
      delay = _ref3$delay === void 0 ? 0 : _ref3$delay,
      _ref3$duration = _ref3.duration,
      duration = _ref3$duration === void 0 ? 400 : _ref3$duration,
      _ref3$easing = _ref3.easing,
      easing = _ref3$easing === void 0 ? identity : _ref3$easing;
  var o = +getComputedStyle(node).opacity;
  return {
    delay: delay,
    duration: duration,
    easing: easing,
    css: function css(t) {
      return "opacity: ".concat(t * o);
    }
  };
}

var blocknative;

function initializeBlocknative(dappId, networkId, apiUrl) {
  blocknative = new bnc_sdk__WEBPACK_IMPORTED_MODULE_2__["default"]({
    dappId: dappId,
    networkId: networkId,
    name: 'Onboard',
    apiUrl: apiUrl
  });
  return blocknative;
}

function getBlocknative() {
  return blocknative;
}

function getNetwork(provider) {
  return new Promise(function (resolve, reject) {
    var params = {
      jsonrpc: '2.0',
      method: 'net_version',
      params: [],
      id: 42
    };

    var callback = function callback(e, res) {
      e && reject(e);
      var result = res && res.result;
      resolve(result && Number(result));
    };

    if (typeof provider.sendAsync === 'function') {
      provider.sendAsync(params, callback);
    } else if (typeof provider.send === 'function') {
      provider.send(params, callback);
    } else {
      resolve(null);
    }
  });
}

function getAddress(provider) {
  return new Promise(function (resolve, reject) {
    var params = {
      jsonrpc: '2.0',
      method: 'eth_accounts',
      params: [],
      id: 42
    };

    var callback = function callback(e, res) {
      e && reject(e);
      var result = res && res.result && res.result[0];
      resolve(result);
    };

    if (typeof provider.sendAsync === 'function') {
      provider.sendAsync(params, callback);
    } else if (typeof provider.send === 'function') {
      provider.send(params, callback);
    } else {
      resolve(null);
    }
  });
}

function getBalance(provider, address) {
  return new Promise( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
      var currentAddress, params, callback;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.t0 = address;

              if (_context.t0) {
                _context.next = 5;
                break;
              }

              _context.next = 4;
              return getAddress(provider);

            case 4:
              _context.t0 = _context.sent;

            case 5:
              currentAddress = _context.t0;

              if (currentAddress) {
                _context.next = 9;
                break;
              }

              resolve(null);
              return _context.abrupt("return");

            case 9:
              params = {
                jsonrpc: '2.0',
                method: 'eth_getBalance',
                params: [currentAddress, 'latest'],
                id: 42
              };

              callback = function callback(e, res) {
                e && reject(e);
                var result = res && res.result;
                resolve(result && new bignumber_js__WEBPACK_IMPORTED_MODULE_1___default.a(result).toString(10));
              };

              if (typeof provider.sendAsync === 'function') {
                provider.sendAsync(params, callback);
              } else if (typeof provider.send === 'function') {
                provider.send(params, callback);
              } else {
                resolve(null);
              }

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref4.apply(this, arguments);
    };
  }());
}

function createModernProviderInterface(provider) {
  provider.autoRefreshOnNetworkChange = false;
  var onFuncExists = typeof provider.on === 'function';
  return {
    address: onFuncExists ? {
      onChange: function onChange(func) {
        // get the initial value
        getAddress(provider).then(func);
        provider.on('accountsChanged', function (accounts) {
          return func(accounts && accounts[0]);
        });
      }
    } : {
      get: function get() {
        return getAddress(provider);
      }
    },
    network: onFuncExists ? {
      onChange: function onChange(func) {
        // get initial value
        getNetwork(provider).then(func);
        provider.on('networkChanged', function (netId) {
          return func(netId && Number(netId));
        });
      }
    } : {
      get: function get() {
        return getNetwork(provider);
      }
    },
    balance: {
      get: function get() {
        return getBalance(provider);
      }
    },
    connect: function connect() {
      return new Promise(function (resolve, reject) {
        provider.enable().then(resolve)["catch"](function () {
          return reject({
            message: 'This dapp needs access to your account information.'
          });
        });
      });
    },
    name: getProviderName(provider)
  };
}

function createLegacyProviderInterface(provider) {
  return {
    address: {
      get: function get() {
        return getAddress(provider);
      }
    },
    network: {
      get: function get() {
        return getNetwork(provider);
      }
    },
    balance: {
      get: function get() {
        return getBalance(provider);
      }
    },
    name: getProviderName(provider)
  };
}

function getProviderName(provider) {
  if (!provider) return;

  if (provider.isTorus) {
    return 'Torus';
  }

  if (provider.isImToken) {
    return 'imToken';
  }

  if (provider.isDapper) {
    return 'Dapper';
  }

  if (provider.isWalletConnect) {
    return 'WalletConnect';
  }

  if (provider.isTrust) {
    return 'Trust';
  }

  if (provider.isCoinbaseWallet) {
    return 'Coinbase';
  }

  if (provider.isToshi) {
    return 'Toshi';
  }

  if (provider.isCipher) {
    return 'Cipher';
  }

  if (provider.isOpera) {
    return 'Opera';
  }

  if (provider.isStatus) {
    return 'Status';
  }

  if (provider.isMetaMask) {
    return 'MetaMask';
  }

  if (provider.host && provider.host.indexOf('localhost') !== -1) {
    return 'localhost';
  }
}

function getDeviceInfo() {
  var browser = bowser__WEBPACK_IMPORTED_MODULE_3___default.a.getParser(window.navigator.userAgent);

  var _browser$getOS = browser.getOS(),
      name = _browser$getOS.name;

  var _browser$getPlatform = browser.getPlatform(),
      type = _browser$getPlatform.type;

  return {
    isMobile: type ? type !== 'desktop' : window.innerWidth < 600,
    os: name
  };
}

function networkName(id) {
  switch (id) {
    case 1:
      return 'mainnet';

    case 3:
      return 'ropsten';

    case 4:
      return 'rinkeby';

    case 5:
      return 'goerli';

    case 42:
      return 'kovan';

    default:
      return 'local';
  }
}

function networkToId(network) {
  switch (network) {
    case 'mainnet':
      return 1;

    case 'ropsten':
      return 3;

    case 'rinkeby':
      return 4;

    case 'goerli':
      return 5;

    case 'kovan':
      return 42;

    default:
      return 0;
  }
}

function wait$1(time) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, time);
  });
}

function makeCancelable(promise) {
  var rejectFn;
  var wrappedPromise = new Promise(function (resolve, reject) {
    rejectFn = reject;
    promise.then(resolve)["catch"](reject);
  });

  wrappedPromise.cancel = function () {
    rejectFn('canceled');
  };

  return wrappedPromise;
}

function isPromise(val) {
  if (val instanceof Promise) {
    return true;
  }

  return false;
}

function createInterval(func, interval) {
  var id = setInterval(func, interval);
  var status = {
    active: true
  };
  return {
    status: status,
    clear: function clear() {
      clearInterval(id);
      status.active = false;
    }
  };
}

function openLink(url) {
  window.open(url);
}

var validSubscriptionKeys = ['address', 'network', 'balance', 'wallet'];

function validateType(options) {
  var name = options.name,
      value = options.value,
      type = options.type,
      optional = options.optional;

  if (!optional && typeof value === 'undefined') {
    throw new Error("\"".concat(name, "\" is required"));
  }

  if (typeof value !== 'undefined' && (type === 'array' ? Array.isArray(type) : _typeof(value) !== type)) {
    throw new Error("\"".concat(name, "\" must be of type: ").concat(type, ", received type: ").concat(_typeof(value), " from value: ").concat(value));
  }
}

function invalidParams(params, validParams, functionName) {
  var keys = Object.keys(params);
  keys.forEach(function (key) {
    if (!validParams.includes(key)) {
      throw new Error("".concat(key, " is not a valid parameter for ").concat(functionName, ", must be one of the following valid parameters: ").concat(validParams.join(', ')));
    }
  });
}

function validateInit(init) {
  validateType({
    name: 'init',
    value: init,
    type: 'object'
  });

  var dappId = init.dappId,
      networkId = init.networkId,
      subscriptions = init.subscriptions,
      walletSelect = init.walletSelect,
      walletCheck = init.walletCheck,
      darkMode = init.darkMode,
      apiUrl = init.apiUrl,
      hideBranding = init.hideBranding,
      otherParams = _objectWithoutProperties(init, ["dappId", "networkId", "subscriptions", "walletSelect", "walletCheck", "darkMode", "apiUrl", "hideBranding"]);

  invalidParams(otherParams, ['dappId', 'networkId', 'subscriptions', 'walletSelect', 'walletCheck', 'darkMode', 'apiUrl', 'hideBranding'], 'init');
  validateType({
    name: 'dappId',
    value: dappId,
    type: 'string',
    optional: true
  });
  validateType({
    name: 'networkId',
    value: networkId,
    type: 'number'
  });
  validateType({
    name: 'darkMode',
    value: darkMode,
    type: 'boolean',
    optional: true
  });
  validateType({
    name: 'apiUrl',
    value: apiUrl,
    type: 'string',
    optional: true
  });
  validateType({
    name: 'hideBranding',
    value: hideBranding,
    type: 'boolean',
    optional: true
  });
  validateType({
    name: 'subscriptions',
    value: subscriptions,
    type: 'object',
    optional: true
  });

  if (subscriptions) {
    validateSubscriptions(subscriptions);
  }

  validateType({
    name: 'walletSelect',
    value: walletSelect,
    type: 'object',
    optional: true
  });

  if (walletSelect) {
    validateWalletSelect(walletSelect);
  }

  validateType({
    name: 'walletCheck',
    value: walletCheck,
    type: 'object',
    optional: true
  });

  if (walletCheck) {
    validateWalletCheck(walletCheck);
  }
}

function validateSubscriptions(subscriptions) {
  var address = subscriptions.address,
      network = subscriptions.network,
      balance = subscriptions.balance,
      wallet = subscriptions.wallet,
      otherParams = _objectWithoutProperties(subscriptions, ["address", "network", "balance", "wallet"]);

  invalidParams(otherParams, validSubscriptionKeys, 'subscriptions');
  validateType({
    name: 'subscriptions.address',
    value: address,
    type: 'function',
    optional: true
  });
  validateType({
    name: 'subscriptions.network',
    value: network,
    type: 'function',
    optional: true
  });
  validateType({
    name: 'subscriptions.balance',
    value: balance,
    type: 'function',
    optional: true
  });
  validateType({
    name: 'subscriptions.wallet',
    value: wallet,
    type: 'function',
    optional: true
  });
}

function validateWalletSelect(walletSelect) {
  validateType({
    name: 'walletSelect',
    value: walletSelect,
    type: 'object'
  });

  var heading = walletSelect.heading,
      description = walletSelect.description,
      explanation = walletSelect.explanation,
      wallets = walletSelect.wallets,
      otherParams = _objectWithoutProperties(walletSelect, ["heading", "description", "explanation", "wallets"]);

  invalidParams(otherParams, ['heading', 'description', 'explanation', 'wallets'], 'walletSelect');
  validateType({
    name: 'heading',
    value: heading,
    type: 'string',
    optional: true
  });
  validateType({
    name: 'description',
    value: description,
    type: 'string',
    optional: true
  });
  validateType({
    name: 'explanation',
    value: explanation,
    type: 'string',
    optional: true
  });

  if (Array.isArray(wallets)) {
    wallets.forEach(validateWallet);
  }
}

function isWalletModule(obj) {
  return obj.wallet !== undefined;
}

function isWalletInit(obj) {
  return obj.walletName !== undefined;
}

function validateWallet(obj) {
  validateType({
    name: 'selectWallet.wallets item',
    value: obj,
    type: 'object'
  });

  if (isWalletModule(obj)) {
    var name = obj.name,
        iconSrc = obj.iconSrc,
        iconSrcSet = obj.iconSrcSet,
        svg = obj.svg,
        _wallet = obj.wallet,
        link = obj.link,
        installMessage = obj.installMessage,
        preferred = obj.preferred,
        desktop = obj.desktop,
        mobile = obj.mobile,
        otherParams = _objectWithoutProperties(obj, ["name", "iconSrc", "iconSrcSet", "svg", "wallet", "link", "installMessage", "preferred", "desktop", "mobile"]);

    invalidParams(otherParams, ['name', 'iconSrc', 'iconSrcSet', 'svg', 'wallet', 'link', 'installMessage', 'preferred', 'desktop', 'mobile'], 'selectWallets.wallets item');
    validateType({
      name: 'name',
      value: name,
      type: 'string'
    });
    validateType({
      name: 'wallet',
      value: _wallet,
      type: 'function'
    });
    validateType({
      name: 'iconSrc',
      value: iconSrc,
      type: 'string',
      optional: true
    });
    validateType({
      name: 'iconSrcSet',
      value: iconSrcSet,
      type: 'string',
      optional: true
    });
    validateType({
      name: 'svg',
      value: svg,
      type: 'string',
      optional: true
    });
    validateType({
      name: 'link',
      value: link,
      type: 'string',
      optional: true
    });
    validateType({
      name: 'installMessage',
      value: installMessage,
      type: 'function',
      optional: true
    });
    validateType({
      name: 'preferred',
      value: preferred,
      type: 'boolean',
      optional: true
    });
    validateType({
      name: 'desktop',
      value: desktop,
      type: 'boolean',
      optional: true
    });
    validateType({
      name: 'mobile',
      value: mobile,
      type: 'boolean',
      optional: true
    });
    return;
  }

  validateWalletInit(obj);
}

function isWalletCheckModule(obj) {
  return typeof obj === 'function';
}

function validateWalletCheck(walletCheck) {
  validateType({
    name: 'walletCheck',
    value: walletCheck,
    type: 'array'
  });
  walletCheck.forEach(function (check) {
    if (isWalletCheckModule(check)) {
      validateWalletCheckModule(check);
    } else {
      validateType({
        name: 'walletCheck item',
        value: check,
        type: 'object'
      });

      var checkName = check.checkName,
          minimumBalance = check.minimumBalance,
          otherParams = _objectWithoutProperties(check, ["checkName", "minimumBalance"]);

      invalidParams(otherParams, ['checkName', 'minimumBalance'], 'walletCheck item');
      validateType({
        name: 'checkName',
        value: checkName,
        type: 'string'
      });
      validateType({
        name: 'minimumBalance',
        value: minimumBalance,
        type: 'string',
        optional: true
      });
    }
  });
}

function validateWalletCheckModule(module) {
  validateType({
    name: 'walletCheck module',
    value: module,
    type: 'function'
  });
}

function validateConfig(configuration) {
  validateType({
    name: 'configuration',
    value: configuration,
    type: 'object'
  });

  var darkMode = configuration.darkMode,
      networkId = configuration.networkId,
      otherParams = _objectWithoutProperties(configuration, ["darkMode", "networkId"]);

  invalidParams(otherParams, ['darkMode', 'networkId'], 'configuration');
  validateType({
    name: 'darkMode',
    value: darkMode,
    type: 'boolean',
    optional: true
  });
  validateType({
    name: 'networkId',
    value: networkId,
    type: 'number',
    optional: true
  });
}

function validateModal(modal) {
  validateType({
    name: 'modal',
    value: modal,
    type: 'object'
  });

  var heading = modal.heading,
      description = modal.description,
      button = modal.button,
      eventCode = modal.eventCode,
      action = modal.action,
      icon = modal.icon,
      html = modal.html,
      otherParams = _objectWithoutProperties(modal, ["heading", "description", "button", "eventCode", "action", "icon", "html"]);

  invalidParams(otherParams, ['heading', 'description', 'button', 'eventCode', 'action', 'icon', 'html'], 'modal');
  validateType({
    name: 'heading',
    value: heading,
    type: 'string'
  });
  validateType({
    name: 'description',
    value: description,
    type: 'string'
  });
  validateType({
    name: 'eventCode',
    value: eventCode,
    type: 'string'
  });
  validateType({
    name: 'action',
    value: action,
    type: 'function',
    optional: true
  });
  validateType({
    name: 'button',
    value: button,
    type: 'object',
    optional: true
  });
  validateType({
    name: 'html',
    value: html,
    type: 'string',
    optional: true
  });

  if (button) {
    var onclick = button.onclick,
        _text = button.text,
        restParams = _objectWithoutProperties(button, ["onclick", "text"]);

    invalidParams(restParams, ['onclick', 'text'], 'button');
    validateType({
      name: 'onclick',
      value: onclick,
      type: 'function'
    });
    validateType({
      name: 'text',
      value: _text,
      type: 'string'
    });
  }

  validateType({
    name: 'icon',
    value: icon,
    type: 'string',
    optional: true
  });
}

function validateWalletInterface(walletInterface) {
  validateType({
    name: 'walletInterface',
    value: walletInterface,
    type: 'object'
  });

  var name = walletInterface.name,
      connect = walletInterface.connect,
      disconnect = walletInterface.disconnect,
      address = walletInterface.address,
      network = walletInterface.network,
      balance = walletInterface.balance,
      otherParams = _objectWithoutProperties(walletInterface, ["name", "connect", "disconnect", "address", "network", "balance"]);

  invalidParams(otherParams, ['name', 'connect', 'disconnect', 'address', 'network', 'balance'], 'walletInterface');
  validateType({
    name: 'name',
    value: name,
    type: 'string'
  });
  validateType({
    name: 'connect',
    value: connect,
    type: 'function',
    optional: true
  });
  validateType({
    name: 'disconnect',
    value: disconnect,
    type: 'function',
    optional: true
  });
  validateType({
    name: 'address',
    value: address,
    type: 'object'
  });
  validateType({
    name: 'address.get',
    value: address.get,
    type: 'function',
    optional: true
  });
  validateType({
    name: 'address.onChange',
    value: address.onChange,
    type: 'function',
    optional: true
  });
  validateType({
    name: 'network',
    value: network,
    type: 'object'
  });
  validateType({
    name: 'network.get',
    value: network.get,
    type: 'function',
    optional: true
  });
  validateType({
    name: 'network.onChange',
    value: network.onChange,
    type: 'function',
    optional: true
  });
  validateType({
    name: 'balance',
    value: balance,
    type: 'object'
  });
  validateType({
    name: 'balance.get',
    value: balance.get,
    type: 'function',
    optional: true
  });
  validateType({
    name: 'balance.onChange',
    value: balance.onChange,
    type: 'function',
    optional: true
  });
}

function validateWalletInit(walletInit) {
  validateType({
    name: 'walletInit',
    value: walletInit,
    type: 'object'
  });

  var walletName = walletInit.walletName,
      preferred = walletInit.preferred,
      label = walletInit.label,
      iconSrc = walletInit.iconSrc,
      svg = walletInit.svg,
      otherParams = _objectWithoutProperties(walletInit, ["walletName", "preferred", "label", "iconSrc", "svg"]);

  invalidParams(otherParams, ['walletName', 'apiKey', 'networkId', 'infuraKey', 'rpc', 'bridge', 'preferred', 'label', 'iconSrc', 'svg', 'appUrl', 'email', 'rpcUrl', 'LedgerTransport', 'buildEnv', 'buttonPosition', 'enableLogging', 'loginMethod', 'showTorusButton', 'enabledVerifiers', 'disableNotifications'], 'walletInitObject');
  validateType({
    name: 'walletInit.walletName',
    value: walletName,
    type: 'string'
  });
  validateType({
    name: 'walletInit.preferred',
    value: preferred,
    type: 'boolean',
    optional: true
  });
  validateType({
    name: 'walletInit.label',
    value: label,
    type: 'string',
    optional: true
  });
  validateType({
    name: 'walletInit.iconSrc',
    value: iconSrc,
    type: 'string',
    optional: true
  });
  validateType({
    name: 'walletInit.svg',
    value: svg,
    type: 'string',
    optional: true
  });
}

var app = writable({
  dappId: '',
  networkId: 1,
  version: '',
  mobileDevice: false,
  os: '',
  darkMode: false,
  walletSelectInProgress: false,
  walletSelectCompleted: false,
  walletCheckInProgress: false,
  walletCheckCompleted: false,
  accountSelectInProgress: false,
  autoSelectWallet: '',
  checkModules: [],
  walletSelectDisplayedUI: false,
  walletCheckDisplayedUI: false,
  displayBranding: false
});
var stateSyncStatus = {
  balance: null,
  address: null,
  network: null
};
var address;
var network;
var balance;
var wallet;
var state;

function initializeStores() {
  address = createWalletStateSliceStore({
    parameter: 'address',
    initialState: null
  });
  network = createWalletStateSliceStore({
    parameter: 'network',
    initialState: null
  });
  balance = get_store_value(app).dappId ? createBalanceStore(null) : createWalletStateSliceStore({
    parameter: 'balance',
    initialState: null,
    intervalSetting: 1000
  });
  wallet = writable({
    name: null,
    provider: null,
    connect: null,
    instance: null,
    dashboard: null,
    type: null
  });
  state = derived([address, network, balance, wallet, app], function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 5),
        $address = _ref6[0],
        $network = _ref6[1],
        $balance = _ref6[2],
        $wallet = _ref6[3],
        $app = _ref6[4];

    return {
      address: $address,
      network: $network,
      balance: $balance,
      wallet: $wallet,
      mobileDevice: $app.mobileDevice,
      appNetworkId: $app.networkId
    };
  });
} // keep track of intervals that are syncing state so they can be cleared


var currentSyncerIntervals = [];
var walletInterface = createWalletInterfaceStore(null);
walletInterface.subscribe(function (walletInterface) {
  // make sure that stores have been initialized
  if (state) {
    // clear all current intervals if they exist
    currentSyncerIntervals.forEach(function (interval) {
      return interval && interval.clear();
    });
    var currentState = get_store_value(state); // reset state

    currentState.balance && balance.reset();
    currentState.address && address.reset();
    currentState.network && network.reset();

    if (walletInterface) {
      // start syncing state and save intervals
      currentSyncerIntervals = [address.setStateSyncer(walletInterface.address), network.setStateSyncer(walletInterface.network), balance.setStateSyncer(walletInterface.balance)];
    }

    resetCheckModules();
  }
});

function resetWalletState(options) {
  walletInterface.update(function (currentInterface) {
    // no interface then don't do anything
    if (!currentInterface) {
      return currentInterface;
    } // no options object, so do a full reset by disconnecting and setting interface to null


    if (!options) {
      wallet.update(function () {
        return {
          name: undefined,
          provider: undefined,
          connect: undefined,
          instance: undefined,
          dashboard: undefined,
          type: undefined
        };
      });
      currentInterface.disconnect && currentInterface.disconnect();
      return null;
    }

    var walletName = options.walletName,
        disconnected = options.disconnected; // if walletName is the same as the current interface name then do a full reset (checking if to do a disconnect)

    if (currentInterface.name === walletName) {
      wallet.update(function () {
        return {
          name: null,
          provider: null,
          connect: null,
          instance: null,
          dashboard: null
        };
      });
      !disconnected && currentInterface.disconnect && currentInterface.disconnect();
      return null;
    }

    return currentInterface;
  });
  resetCheckModules();
  app.update(function (store) {
    return _objectSpread(_objectSpread({}, store), {}, {
      walletSelectInProgress: false,
      walletSelectCompleted: false
    });
  });
}

function resetCheckModules() {
  var _get_store_value = get_store_value(app),
      checkModules = _get_store_value.checkModules;

  if (Array.isArray(checkModules)) {
    checkModules.forEach(function (m) {
      return m.reset && m.reset();
    });
  }
}

function createWalletInterfaceStore(initialState) {
  var _writable = writable(initialState),
      subscribe = _writable.subscribe,
      _set = _writable.set,
      update = _writable.update;

  return {
    subscribe: subscribe,
    update: update,
    set: function set(walletInterface) {
      if (walletInterface) {
        validateWalletInterface(walletInterface);
      }

      _set(walletInterface);
    }
  };
}

function createWalletStateSliceStore(options) {
  var parameter = options.parameter,
      initialState = options.initialState,
      intervalSetting = options.intervalSetting;

  var _writable2 = writable(initialState),
      subscribe = _writable2.subscribe,
      set = _writable2.set;

  var currentState;
  subscribe(function (store) {
    currentState = store;
  });
  return {
    subscribe: subscribe,
    reset: function reset() {
      set(undefined);
    },
    get: function get() {
      return currentState;
    },
    setStateSyncer: function setStateSyncer(stateSyncer) {
      validateType({
        name: 'stateSyncer',
        value: stateSyncer,
        type: 'object'
      });
      var get = stateSyncer.get,
          onChange = stateSyncer.onChange;
      validateType({
        name: "".concat(parameter, ".get"),
        value: get,
        type: 'function',
        optional: true
      });
      validateType({
        name: "".concat(parameter, ".onChange"),
        value: onChange,
        type: 'function',
        optional: true
      });

      if (onChange) {
        stateSyncStatus[parameter] = new Promise(function (resolve) {
          onChange(function (newVal) {
            resolve();

            if (newVal || currentState !== initialState) {
              set(newVal);
            }
          });
        });
        return;
      }

      if (get) {
        var interval = createInterval(function () {
          stateSyncStatus[parameter] = get().then(function (newVal) {
            stateSyncStatus[parameter] = null;

            if (newVal || currentState !== initialState) {
              interval.status.active && set(newVal);
            }
          })["catch"](function (err) {
            console.warn("Error getting ".concat(parameter, " from state syncer: ").concat(err));
            stateSyncStatus[parameter] = null;
          });
        }, intervalSetting || 200);
        return interval;
      }
    }
  };
}

function createBalanceStore(initialState) {
  var stateSyncer;
  var emitter;
  var emitterAddress;

  var cancel = function cancel() {};

  var _derived = derived([address, network], function (_ref7, set) {
    var _ref8 = _slicedToArray(_ref7, 2),
        $address = _ref8[0],
        $network = _ref8[1];

    if (stateSyncer && !stateSyncer.onChange) {
      if ($address && $network && stateSyncer.get && set) {
        cancel = syncStateWithTimeout({
          getState: stateSyncer.get,
          setState: set,
          timeout: 2000,
          currentBalance: get_store_value(balance)
        });

        if (emitterAddress !== $address) {
          var _blocknative = getBlocknative(); // unsubscribe from previous address


          if (emitterAddress) {
            _blocknative.unsubscribe(emitterAddress);
          }

          emitter = _blocknative.account($address).emitter;
          emitter.on('txConfirmed', function () {
            if (stateSyncer.get) {
              cancel = syncStateWithTimeout({
                getState: stateSyncer.get,
                setState: set,
                timeout: 2000,
                currentBalance: get_store_value(balance),
                pollStart: Date.now()
              });
            }

            return false;
          });
          emitterAddress = $address;
        }
      } else if (emitterAddress && !$address) {
        var _blocknative2 = getBlocknative(); // unsubscribe from previous address


        _blocknative2.unsubscribe(emitterAddress); // no address, so set balance to undefined


        set && set(undefined);
        emitterAddress = undefined;
      }
    }

    set(initialState);
  }),
      subscribe = _derived.subscribe;

  var currentState;
  subscribe(function (store) {
    currentState = store;
  });
  return {
    subscribe: subscribe,
    get: function get() {
      return currentState;
    },
    setStateSyncer: function setStateSyncer(syncer) {
      validateType({
        name: 'syncer',
        value: syncer,
        type: 'object'
      });
      var get = syncer.get,
          onChange = syncer.onChange;
      validateType({
        name: 'balance.get',
        value: get,
        type: 'function',
        optional: true
      });
      validateType({
        name: 'balance.onChange',
        value: onChange,
        type: 'function',
        optional: true
      });
      stateSyncer = syncer;
      return undefined;
    },
    reset: cancel
  };
}

function syncStateWithTimeout(options) {
  var getState = options.getState,
      setState = options.setState,
      timeout = options.timeout,
      currentBalance = options.currentBalance,
      pollStart = options.pollStart;

  if (pollStart && Date.now() - pollStart > 25000) {
    return function () {};
  }

  var prom = makeCancelable(getState());
  stateSyncStatus.balance = prom;
  prom.then( /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(result) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(result === currentBalance && pollStart)) {
                _context2.next = 6;
                break;
              }

              _context2.next = 3;
              return wait$1(350);

            case 3:
              syncStateWithTimeout(options);
              _context2.next = 8;
              break;

            case 6:
              stateSyncStatus.balance = null;
              setState(result);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x3) {
      return _ref9.apply(this, arguments);
    };
  }())["catch"](function () {
    stateSyncStatus.balance = null;
  });
  var timedOut = wait$1(timeout);
  timedOut.then(function () {
    prom.cancel();
  });
  return function () {
    return prom.cancel();
  };
}
/* src/elements/Branding.svelte generated by Svelte v3.22.2 */


function add_css() {
  var style = element("style");
  style.id = "svelte-15m9up6-style";
  style.textContent = ".bn-branding.svelte-15m9up6{font-size:0.75rem;font-family:inherit;margin:0.4rem;display:flex;justify-content:center;width:100%;align-items:center}span.svelte-15m9up6{opacity:0.3}a.svelte-15m9up6{color:inherit;display:flex;margin-left:0.25rem;align-items:center}.bn-logo.svelte-15m9up6{height:1.1rem;margin-left:0.25rem;margin-bottom:0.1rem}svg.svelte-15m9up6{height:100%;width:auto}";
  append(document.head, style);
} // (76:6) {:else}


function create_else_block(ctx) {
  var svg;
  var g;
  var path0;
  var path1;
  return {
    c: function c() {
      svg = svg_element("svg");
      g = svg_element("g");
      path0 = svg_element("path");
      path1 = svg_element("path");
      attr(path0, "d", "m1.35473654 25.2695268\n              41.68515786-24.21771792c.5647044-.32807482 1.2619836-.32807795\n              1.8266909-.00000821l19.9275013\n              11.57698923c.5635938.3274228.9088026.9314826.9048094\n              1.5832707l-.1501112 24.5017756 20.8472716\n              12.1113348c.5601525.3254236.9048434.9243111.9048434\n              1.5721317v48.4560123c0 .647825-.3446953 1.246715-.9048537\n              1.572138l-41.6835092\n              24.215895c-.5655731.328567-1.2640448.328023-1.8291052-.001426l-41.5311197-24.21401c-.5587764-.325785-.90240476-.923899-.90240476-1.570712v-49.505258-24.5082917c0-.6478147.34468473-1.2466978.9048293-1.5721235z");
      attr(path1, "d", "m22.0428451 114.442824v-25.2731141l-21.59284788-12.5449388\n              42.75014288 24.6551909c.5648507.325765 1.260898.324109\n              1.8241926-.004339l42.2766571-24.6508519-21.5955473\n              12.6370084v-24.2248276c0-.6488012-.3457266-1.2484405-.9072187-1.5735092l-20.9222804-12.1126883\n              21.6729314-12.6370084-42.4525958\n              24.4763352c-.5545159.3197099-1.236865.3218902-1.7934127.0057303l-20.85286908-11.8459598");
      set_style(g, "stroke", "#000");
      set_style(g, "stroke-width", "2.70793");
      set_style(g, "fill", "none");
      set_style(g, "fill-rule", "evenodd");
      set_style(g, "stroke-linecap", "round");
      set_style(g, "stroke-linejoin", "round");
      attr(g, "transform", "translate(1.818182 .909091)");
      attr(svg, "height", "130");
      attr(svg, "viewBox", "0 0 91 130");
      attr(svg, "width", "91");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "class", "svelte-15m9up6");
    },
    m: function m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, g);
      append(g, path0);
      append(g, path1);
    },
    d: function d(detaching) {
      if (detaching) detach(svg);
    }
  };
} // (48:6) {#if darkMode}


function create_if_block(ctx) {
  var svg;
  var g;
  var path0;
  var path1;
  return {
    c: function c() {
      svg = svg_element("svg");
      g = svg_element("g");
      path0 = svg_element("path");
      path1 = svg_element("path");
      attr(path0, "d", "m1.35473654 25.2695268\n              41.68515786-24.21771792c.5647044-.32807482 1.2619836-.32807795\n              1.8266909-.00000821l19.9275013\n              11.57698923c.5635938.3274228.9088026.9314826.9048094\n              1.5832707l-.1501112 24.5017756 20.8472716\n              12.1113348c.5601525.3254236.9048434.9243111.9048434\n              1.5721317v48.4560123c0 .647825-.3446953 1.246715-.9048537\n              1.572138l-41.6835092\n              24.215895c-.5655731.328567-1.2640448.328023-1.8291052-.001426l-41.5311197-24.21401c-.5587764-.325785-.90240476-.923899-.90240476-1.570712v-49.505258-24.5082917c0-.6478147.34468473-1.2466978.9048293-1.5721235z");
      attr(path1, "d", "m22.0428451 114.442824v-25.2731141l-21.59284788-12.5449388\n              42.75014288 24.6551909c.5648507.325765 1.260898.324109\n              1.8241926-.004339l42.2766571-24.6508519-21.5955473\n              12.6370084v-24.2248276c0-.6488012-.3457266-1.2484405-.9072187-1.5735092l-20.9222804-12.1126883\n              21.6729314-12.6370084-42.4525958\n              24.4763352c-.5545159.3197099-1.236865.3218902-1.7934127.0057303l-20.85286908-11.8459598");
      set_style(g, "stroke", "#fff");
      set_style(g, "stroke-width", "2.70793");
      set_style(g, "fill", "none");
      set_style(g, "fill-rule", "evenodd");
      set_style(g, "stroke-linecap", "round");
      set_style(g, "stroke-linejoin", "round");
      attr(g, "transform", "translate(1.818182 .909091)");
      attr(svg, "height", "130");
      attr(svg, "viewBox", "0 0 91 130");
      attr(svg, "width", "91");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "class", "svelte-15m9up6");
    },
    m: function m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, g);
      append(g, path0);
      append(g, path1);
    },
    d: function d(detaching) {
      if (detaching) detach(svg);
    }
  };
}

function create_fragment(ctx) {
  var div1;
  var span0;
  var t1;
  var a;
  var span1;
  var t3;
  var div0;

  function select_block_type(ctx, dirty) {
    if (
    /*darkMode*/
    ctx[0]) return create_if_block;
    return create_else_block;
  }

  var current_block_type = select_block_type(ctx);
  var if_block = current_block_type(ctx);
  return {
    c: function c() {
      div1 = element("div");
      span0 = element("span");
      span0.textContent = "Powered by";
      t1 = space();
      a = element("a");
      span1 = element("span");
      span1.textContent = "Blocknative";
      t3 = space();
      div0 = element("div");
      if_block.c();
      attr(span0, "class", "svelte-15m9up6");
      attr(span1, "class", "svelte-15m9up6");
      attr(div0, "class", "bn-logo svelte-15m9up6");
      attr(a, "href", "https://hubs.ly/H0qh2g10");
      attr(a, "class", "bn-onboard-clickable svelte-15m9up6");
      attr(a, "target", "_blank");
      attr(a, "rel", "noopener noreferrer");
      attr(div1, "class", "bn-branding svelte-15m9up6");
    },
    m: function m(target, anchor) {
      insert(target, div1, anchor);
      append(div1, span0);
      append(div1, t1);
      append(div1, a);
      append(a, span1);
      append(a, t3);
      append(a, div0);
      if_block.m(div0, null);
    },
    p: function p(ctx, _ref10) {
      var _ref11 = _slicedToArray(_ref10, 1),
          dirty = _ref11[0];

      if (current_block_type !== (current_block_type = select_block_type(ctx))) {
        if_block.d(1);
        if_block = current_block_type(ctx);

        if (if_block) {
          if_block.c();
          if_block.m(div0, null);
        }
      }
    },
    i: noop,
    o: noop,
    d: function d(detaching) {
      if (detaching) detach(div1);
      if_block.d();
    }
  };
}

function instance($$self, $$props, $$invalidate) {
  var darkMode = $$props.darkMode;

  $$self.$set = function ($$props) {
    if ("darkMode" in $$props) $$invalidate(0, darkMode = $$props.darkMode);
  };

  return [darkMode];
}

var Branding = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Branding, _SvelteComponent);

  var _super = _createSuper(Branding);

  function Branding(options) {
    var _this;

    _classCallCheck(this, Branding);

    _this = _super.call(this);
    if (!document.getElementById("svelte-15m9up6-style")) add_css();
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      darkMode: 0
    });
    return _this;
  }

  return Branding;
}(SvelteComponent);
/* src/components/Modal.svelte generated by Svelte v3.22.2 */


function add_css$1() {
  var style = element("style");
  style.id = "svelte-1cccy0j-style";
  style.textContent = "aside.svelte-1cccy0j{display:flex;font-family:'Helvetica Neue';justify-content:center;align-items:center;position:fixed;font-size:16px;z-index:99;top:0;left:0;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.3)}@media screen and (max-width: 420px){aside.svelte-1cccy0j{font-size:14px}}section.svelte-1cccy0j{display:block;box-sizing:content-box;background:#ffffff;border-radius:10px;box-shadow:0 1px 5px 0 rgba(0, 0, 0, 0.1);font-family:inherit;font-size:inherit;padding:1.33em;position:relative;overflow:hidden;max-width:37em;color:#4a4a4a}div.svelte-1cccy0j{height:0.66em;position:absolute;padding:0.8em;top:1.33em;right:1.33em;font-size:inherit;font-family:inherit;border-radius:5px;transition:background 200ms ease-in-out;display:flex;justify-content:center;align-items:center}div.svelte-1cccy0j:hover{cursor:pointer;background:#eeeeee}svg.svelte-1cccy0j{width:10px;height:10px}.bn-onboard-dark-mode-close-background.svelte-1cccy0j:hover{background:#00222c}.no-padding-branding.svelte-1cccy0j{padding-bottom:0}";
  append(document.head, style);
} // (96:4) {#if $app.displayBranding}


function create_if_block_1(ctx) {
  var current;
  var branding = new Branding({
    props: {
      darkMode:
      /*$app*/
      ctx[3].darkMode
    }
  });
  return {
    c: function c() {
      create_component(branding.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(branding, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var branding_changes = {};
      if (dirty &
      /*$app*/
      8) branding_changes.darkMode =
      /*$app*/
      ctx[3].darkMode;
      branding.$set(branding_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(branding.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(branding.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(branding, detaching);
    }
  };
} // (99:4) {#if closeable}


function create_if_block$1(ctx) {
  var div;
  var svg;
  var g0;
  var path;
  var g1;
  var g2;
  var g3;
  var g4;
  var g5;
  var g6;
  var g7;
  var g8;
  var g9;
  var g10;
  var g11;
  var g12;
  var g13;
  var g14;
  var g15;
  var svg_fill_value;
  var dispose;
  return {
    c: function c() {
      div = element("div");
      svg = svg_element("svg");
      g0 = svg_element("g");
      path = svg_element("path");
      g1 = svg_element("g");
      g2 = svg_element("g");
      g3 = svg_element("g");
      g4 = svg_element("g");
      g5 = svg_element("g");
      g6 = svg_element("g");
      g7 = svg_element("g");
      g8 = svg_element("g");
      g9 = svg_element("g");
      g10 = svg_element("g");
      g11 = svg_element("g");
      g12 = svg_element("g");
      g13 = svg_element("g");
      g14 = svg_element("g");
      g15 = svg_element("g");
      attr(path, "d", "M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88\n              c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242\n              C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879\n              s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "xmlns:xlink", "http://www.w3.org/1999/xlink");
      attr(svg, "x", "0px");
      attr(svg, "y", "0px");
      attr(svg, "viewBox", "0 0 47.971 47.971");
      set_style(svg, "enable-background", "new 0 0 47.971 47.971");
      set_style(svg, "transition", "fill 150ms\n          ease-in-out");
      attr(svg, "fill", svg_fill_value =
      /*closeHovered*/
      ctx[2] ?
      /*$app*/
      ctx[3].darkMode ? "#ffffff" : "#4a4a4a" : "#9B9B9B");
      attr(svg, "xml:space", "preserve");
      attr(svg, "class", "svelte-1cccy0j");
      attr(div, "class", "bn-onboard-custom bn-onboard-modal-content-close svelte-1cccy0j");
      toggle_class(div, "bn-onboard-dark-mode-close-background",
      /*$app*/
      ctx[3].darkMode);
    },
    m: function m(target, anchor, remount) {
      insert(target, div, anchor);
      append(div, svg);
      append(svg, g0);
      append(g0, path);
      append(svg, g1);
      append(svg, g2);
      append(svg, g3);
      append(svg, g4);
      append(svg, g5);
      append(svg, g6);
      append(svg, g7);
      append(svg, g8);
      append(svg, g9);
      append(svg, g10);
      append(svg, g11);
      append(svg, g12);
      append(svg, g13);
      append(svg, g14);
      append(svg, g15);
      if (remount) run_all(dispose);
      dispose = [listen(div, "click", function () {
        if (is_function(
        /*closeModal*/
        ctx[0]))
          /*closeModal*/
          ctx[0].apply(this, arguments);
      }), listen(div, "mouseenter",
      /*mouseenter_handler*/
      ctx[6]), listen(div, "mouseleave",
      /*mouseleave_handler*/
      ctx[7])];
    },
    p: function p(new_ctx, dirty) {
      ctx = new_ctx;

      if (dirty &
      /*closeHovered, $app*/
      12 && svg_fill_value !== (svg_fill_value =
      /*closeHovered*/
      ctx[2] ?
      /*$app*/
      ctx[3].darkMode ? "#ffffff" : "#4a4a4a" : "#9B9B9B")) {
        attr(svg, "fill", svg_fill_value);
      }

      if (dirty &
      /*$app*/
      8) {
        toggle_class(div, "bn-onboard-dark-mode-close-background",
        /*$app*/
        ctx[3].darkMode);
      }
    },
    d: function d(detaching) {
      if (detaching) detach(div);
      run_all(dispose);
    }
  };
}

function create_fragment$1(ctx) {
  var aside;
  var section;
  var t0;
  var t1;
  var aside_transition;
  var current;
  var dispose;
  var default_slot_template =
  /*$$slots*/
  ctx[5]["default"];
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[4], null);
  var if_block0 =
  /*$app*/
  ctx[3].displayBranding && create_if_block_1(ctx);
  var if_block1 =
  /*closeable*/
  ctx[1] && create_if_block$1(ctx);
  return {
    c: function c() {
      aside = element("aside");
      section = element("section");
      if (default_slot) default_slot.c();
      t0 = space();
      if (if_block0) if_block0.c();
      t1 = space();
      if (if_block1) if_block1.c();
      attr(section, "class", "bn-onboard-custom bn-onboard-modal-content svelte-1cccy0j");
      toggle_class(section, "bn-onboard-dark-mode",
      /*$app*/
      ctx[3].darkMode);
      toggle_class(section, "no-padding-branding",
      /*$app*/
      ctx[3].displayBranding);
      attr(aside, "class", "bn-onboard-custom bn-onboard-modal svelte-1cccy0j");
    },
    m: function m(target, anchor, remount) {
      insert(target, aside, anchor);
      append(aside, section);

      if (default_slot) {
        default_slot.m(section, null);
      }

      append(section, t0);
      if (if_block0) if_block0.m(section, null);
      append(section, t1);
      if (if_block1) if_block1.m(section, null);
      current = true;
      if (remount) run_all(dispose);
      dispose = [listen(section, "click", click_handler), listen(aside, "click", function () {
        if (is_function(
        /*closeModal*/
        ctx[0]))
          /*closeModal*/
          ctx[0].apply(this, arguments);
      })];
    },
    p: function p(new_ctx, _ref12) {
      var _ref13 = _slicedToArray(_ref12, 1),
          dirty = _ref13[0];

      ctx = new_ctx;

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        16) {
          default_slot.p(get_slot_context(default_slot_template, ctx,
          /*$$scope*/
          ctx[4], null), get_slot_changes(default_slot_template,
          /*$$scope*/
          ctx[4], dirty, null));
        }
      }

      if (
      /*$app*/
      ctx[3].displayBranding) {
        if (if_block0) {
          if_block0.p(ctx, dirty);

          if (dirty &
          /*$app*/
          8) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_1(ctx);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(section, t1);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, function () {
          if_block0 = null;
        });
        check_outros();
      }

      if (
      /*closeable*/
      ctx[1]) {
        if (if_block1) {
          if_block1.p(ctx, dirty);
        } else {
          if_block1 = create_if_block$1(ctx);
          if_block1.c();
          if_block1.m(section, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }

      if (dirty &
      /*$app*/
      8) {
        toggle_class(section, "bn-onboard-dark-mode",
        /*$app*/
        ctx[3].darkMode);
      }

      if (dirty &
      /*$app*/
      8) {
        toggle_class(section, "no-padding-branding",
        /*$app*/
        ctx[3].displayBranding);
      }
    },
    i: function i(local) {
      if (current) return;
      transition_in(default_slot, local);
      transition_in(if_block0);
      add_render_callback(function () {
        if (!aside_transition) aside_transition = create_bidirectional_transition(aside, fade, {}, true);
        aside_transition.run(1);
      });
      current = true;
    },
    o: function o(local) {
      transition_out(default_slot, local);
      transition_out(if_block0);
      if (!aside_transition) aside_transition = create_bidirectional_transition(aside, fade, {}, false);
      aside_transition.run(0);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(aside);
      if (default_slot) default_slot.d(detaching);
      if (if_block0) if_block0.d();
      if (if_block1) if_block1.d();
      if (detaching && aside_transition) aside_transition.end();
      run_all(dispose);
    }
  };
}

var click_handler = function click_handler(e) {
  return e.stopPropagation();
};

function instance$1($$self, $$props, $$invalidate) {
  var $app;
  component_subscribe($$self, app, function ($$value) {
    return $$invalidate(3, $app = $$value);
  });
  var closeModal = $$props.closeModal;
  var _$$props$closeable = $$props.closeable,
      closeable = _$$props$closeable === void 0 ? true : _$$props$closeable;
  var closeHovered;
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;

  var mouseenter_handler = function mouseenter_handler() {
    return $$invalidate(2, closeHovered = true);
  };

  var mouseleave_handler = function mouseleave_handler() {
    return $$invalidate(2, closeHovered = false);
  };

  $$self.$set = function ($$props) {
    if ("closeModal" in $$props) $$invalidate(0, closeModal = $$props.closeModal);
    if ("closeable" in $$props) $$invalidate(1, closeable = $$props.closeable);
    if ("$$scope" in $$props) $$invalidate(4, $$scope = $$props.$$scope);
  };

  return [closeModal, closeable, closeHovered, $app, $$scope, $$slots, mouseenter_handler, mouseleave_handler];
}

var Modal = /*#__PURE__*/function (_SvelteComponent2) {
  _inherits(Modal, _SvelteComponent2);

  var _super2 = _createSuper(Modal);

  function Modal(options) {
    var _this2;

    _classCallCheck(this, Modal);

    _this2 = _super2.call(this);
    if (!document.getElementById("svelte-1cccy0j-style")) add_css$1();
    init(_assertThisInitialized(_this2), options, instance$1, create_fragment$1, safe_not_equal, {
      closeModal: 0,
      closeable: 1
    });
    return _this2;
  }

  return Modal;
}(SvelteComponent);
/* src/components/ModalHeader.svelte generated by Svelte v3.22.2 */


function add_css$2() {
  var style = element("style");
  style.id = "svelte-8i8o6j-style";
  style.textContent = "header.svelte-8i8o6j{display:flex;align-items:center;font-size:inherit;font-family:inherit;margin-bottom:1em}div.svelte-8i8o6j{display:flex;justify-content:center;align-items:center;font-size:inherit;font-family:inherit;padding:0.6em;border-radius:30px;background:#eeeeee}h3.svelte-8i8o6j{font-weight:bold;font-size:1.33em;font-family:inherit;margin:0 0 0 0.5em}";
  append(document.head, style);
}

function create_fragment$2(ctx) {
  var header;
  var div;
  var t0;
  var h3;
  var t1;
  return {
    c: function c() {
      header = element("header");
      div = element("div");
      t0 = space();
      h3 = element("h3");
      t1 = text(
      /*heading*/
      ctx[0]);
      attr(div, "class", "bn-onboard-custom bn-onboard-modal-content-header-icon svelte-8i8o6j");
      toggle_class(div, "bn-onboard-dark-mode-background",
      /*$app*/
      ctx[2].darkMode);
      attr(h3, "class", "bn-onboard-custom bn-onboard-modal-content-header-heading svelte-8i8o6j");
      attr(header, "class", "bn-onboard-custom bn-onboard-modal-content-header svelte-8i8o6j");
    },
    m: function m(target, anchor) {
      insert(target, header, anchor);
      append(header, div);
      div.innerHTML =
      /*icon*/
      ctx[1];
      append(header, t0);
      append(header, h3);
      append(h3, t1);
    },
    p: function p(ctx, _ref14) {
      var _ref15 = _slicedToArray(_ref14, 1),
          dirty = _ref15[0];

      if (dirty &
      /*icon*/
      2) div.innerHTML =
      /*icon*/
      ctx[1];

      if (dirty &
      /*$app*/
      4) {
        toggle_class(div, "bn-onboard-dark-mode-background",
        /*$app*/
        ctx[2].darkMode);
      }

      if (dirty &
      /*heading*/
      1) set_data(t1,
      /*heading*/
      ctx[0]);
    },
    i: noop,
    o: noop,
    d: function d(detaching) {
      if (detaching) detach(header);
    }
  };
}

function instance$2($$self, $$props, $$invalidate) {
  var $app;
  component_subscribe($$self, app, function ($$value) {
    return $$invalidate(2, $app = $$value);
  });
  var heading = $$props.heading;
  var icon = $$props.icon;

  $$self.$set = function ($$props) {
    if ("heading" in $$props) $$invalidate(0, heading = $$props.heading);
    if ("icon" in $$props) $$invalidate(1, icon = $$props.icon);
  };

  return [heading, icon, $app];
}

var ModalHeader = /*#__PURE__*/function (_SvelteComponent3) {
  _inherits(ModalHeader, _SvelteComponent3);

  var _super3 = _createSuper(ModalHeader);

  function ModalHeader(options) {
    var _this3;

    _classCallCheck(this, ModalHeader);

    _this3 = _super3.call(this);
    if (!document.getElementById("svelte-8i8o6j-style")) add_css$2();
    init(_assertThisInitialized(_this3), options, instance$2, create_fragment$2, safe_not_equal, {
      heading: 0,
      icon: 1
    });
    return _this3;
  }

  return ModalHeader;
}(SvelteComponent);
/* src/elements/Button.svelte generated by Svelte v3.22.2 */


function add_css$3() {
  var style = element("style");
  style.id = "svelte-ru4xy6-style";
  style.textContent = "button.svelte-ru4xy6{background:inherit;font-size:0.889em;font-family:inherit;border:1px solid #4a90e2;border-radius:40px;padding:0.55em 1.4em;cursor:pointer;color:#4a90e2;font-family:inherit;transition:background 150ms ease-in-out;line-height:1.15}button.svelte-ru4xy6:focus{outline:none}button.svelte-ru4xy6:hover{background:#ecf3fc}";
  append(document.head, style);
}

function create_fragment$3(ctx) {
  var button;
  var current;
  var dispose;
  var default_slot_template =
  /*$$slots*/
  ctx[3]["default"];
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[2], null);
  return {
    c: function c() {
      button = element("button");
      if (default_slot) default_slot.c();
      attr(button, "class", "bn-onboard-custom bn-onboard-button svelte-ru4xy6");
      toggle_class(button, "bn-onboard-dark-mode-link",
      /*$app*/
      ctx[1].darkMode);
      toggle_class(button, "bn-onboard-dark-mode-background-hover",
      /*$app*/
      ctx[1].darkMode);
    },
    m: function m(target, anchor, remount) {
      insert(target, button, anchor);

      if (default_slot) {
        default_slot.m(button, null);
      }

      current = true;
      if (remount) dispose();
      dispose = listen(button, "click", function () {
        if (is_function(
        /*onclick*/
        ctx[0]))
          /*onclick*/
          ctx[0].apply(this, arguments);
      });
    },
    p: function p(new_ctx, _ref16) {
      var _ref17 = _slicedToArray(_ref16, 1),
          dirty = _ref17[0];

      ctx = new_ctx;

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        4) {
          default_slot.p(get_slot_context(default_slot_template, ctx,
          /*$$scope*/
          ctx[2], null), get_slot_changes(default_slot_template,
          /*$$scope*/
          ctx[2], dirty, null));
        }
      }

      if (dirty &
      /*$app*/
      2) {
        toggle_class(button, "bn-onboard-dark-mode-link",
        /*$app*/
        ctx[1].darkMode);
      }

      if (dirty &
      /*$app*/
      2) {
        toggle_class(button, "bn-onboard-dark-mode-background-hover",
        /*$app*/
        ctx[1].darkMode);
      }
    },
    i: function i(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(button);
      if (default_slot) default_slot.d(detaching);
      dispose();
    }
  };
}

function instance$3($$self, $$props, $$invalidate) {
  var $app;
  component_subscribe($$self, app, function ($$value) {
    return $$invalidate(1, $app = $$value);
  });
  var _$$props$onclick = $$props.onclick,
      onclick = _$$props$onclick === void 0 ? function () {} : _$$props$onclick;
  var _$$props$$$slots2 = $$props.$$slots,
      $$slots = _$$props$$$slots2 === void 0 ? {} : _$$props$$$slots2,
      $$scope = $$props.$$scope;

  $$self.$set = function ($$props) {
    if ("onclick" in $$props) $$invalidate(0, onclick = $$props.onclick);
    if ("$$scope" in $$props) $$invalidate(2, $$scope = $$props.$$scope);
  };

  return [onclick, $app, $$scope, $$slots];
}

var Button = /*#__PURE__*/function (_SvelteComponent4) {
  _inherits(Button, _SvelteComponent4);

  var _super4 = _createSuper(Button);

  function Button(options) {
    var _this4;

    _classCallCheck(this, Button);

    _this4 = _super4.call(this);
    if (!document.getElementById("svelte-ru4xy6-style")) add_css$3();
    init(_assertThisInitialized(_this4), options, instance$3, create_fragment$3, safe_not_equal, {
      onclick: 0
    });
    return _this4;
  }

  return Button;
}(SvelteComponent);
/* src/elements/Spinner.svelte generated by Svelte v3.22.2 */


function add_css$4() {
  var style = element("style");
  style.id = "svelte-16ghk2h-style";
  style.textContent = ".bn-onboard-loading-container.svelte-16ghk2h{display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:inherit;font-size:inherit;color:inherit}span.svelte-16ghk2h{font-family:inherit;font-size:0.889em;margin-top:1rem}.bn-onboard-loading{display:inline-block;position:relative;width:2em;height:2em}.bn-onboard-loading div{box-sizing:border-box;font-size:inherit;display:block;position:absolute;width:2em;height:2em;border:3px solid;border-radius:50%;animation:bn-onboard-loading 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;border-color:currentColor transparent transparent transparent}.bn-onboard-loading .bn-onboard-loading-first{animation-delay:-0.45s}.bn-onboard-loading .bn-onboard-loading-second{animation-delay:-0.3s}.bn-onboard-loading .bn-onboard-loading-third{animation-delay:-0.15s}@keyframes bn-onboard-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
  append(document.head, style);
} // (65:2) {#if description}


function create_if_block$2(ctx) {
  var span;
  var t;
  return {
    c: function c() {
      span = element("span");
      t = text(
      /*description*/
      ctx[0]);
      attr(span, "class", "svelte-16ghk2h");
    },
    m: function m(target, anchor) {
      insert(target, span, anchor);
      append(span, t);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*description*/
      1) set_data(t,
      /*description*/
      ctx[0]);
    },
    d: function d(detaching) {
      if (detaching) detach(span);
    }
  };
}

function create_fragment$4(ctx) {
  var div4;
  var div3;
  var t2;
  var if_block =
  /*description*/
  ctx[0] && create_if_block$2(ctx);
  return {
    c: function c() {
      div4 = element("div");
      div3 = element("div");
      div3.innerHTML = "<div class=\"bn-onboard-loading-first\"></div> \n    <div class=\"bn-onboard-loading-second\"></div> \n    <div class=\"bn-onboard-loading-third\"></div>";
      t2 = space();
      if (if_block) if_block.c();
      attr(div3, "class", "bn-onboard-custom bn-onboard-loading");
      attr(div4, "class", "bn-onboard-loading-container svelte-16ghk2h");
    },
    m: function m(target, anchor) {
      insert(target, div4, anchor);
      append(div4, div3);
      append(div4, t2);
      if (if_block) if_block.m(div4, null);
    },
    p: function p(ctx, _ref18) {
      var _ref19 = _slicedToArray(_ref18, 1),
          dirty = _ref19[0];

      if (
      /*description*/
      ctx[0]) {
        if (if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block = create_if_block$2(ctx);
          if_block.c();
          if_block.m(div4, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: noop,
    o: noop,
    d: function d(detaching) {
      if (detaching) detach(div4);
      if (if_block) if_block.d();
    }
  };
}

function instance$4($$self, $$props, $$invalidate) {
  var description = $$props.description;

  $$self.$set = function ($$props) {
    if ("description" in $$props) $$invalidate(0, description = $$props.description);
  };

  return [description];
}

var Spinner = /*#__PURE__*/function (_SvelteComponent5) {
  _inherits(Spinner, _SvelteComponent5);

  var _super5 = _createSuper(Spinner);

  function Spinner(options) {
    var _this5;

    _classCallCheck(this, Spinner);

    _this5 = _super5.call(this);
    if (!document.getElementById("svelte-16ghk2h-style")) add_css$4();
    init(_assertThisInitialized(_this5), options, instance$4, create_fragment$4, safe_not_equal, {
      description: 0
    });
    return _this5;
  }

  return Spinner;
}(SvelteComponent);
/* src/elements/IconButton.svelte generated by Svelte v3.22.2 */


function add_css$5() {
  var style = element("style");
  style.id = "svelte-1skxsnk-style";
  style.textContent = "button.svelte-1skxsnk{display:flex;align-items:center;border:none;margin:0.33em 0;background:inherit;font-size:inherit;width:18em;padding:0.625em 1.25em;transition:box-shadow 150ms ease-in-out, background 200ms ease-in-out;border-radius:40px;cursor:pointer;color:inherit;line-height:1.15;font-family:inherit}button.svelte-1skxsnk:hover{box-shadow:0 2px 10px 0 rgba(0, 0, 0, 0.1)}button.svelte-1skxsnk:focus{outline:none}div.svelte-1skxsnk{display:flex;justify-content:center;align-items:center;text-align:center;height:40px;width:40px;line-height:40px;font-family:inherit}img.svelte-1skxsnk{max-height:100%;max-width:100%;vertical-align:middle}span.svelte-1skxsnk{width:100%;display:flex;justify-content:space-between;align-items:center;font-size:inherit;margin-left:0.66em;font-weight:bold;text-align:left;font-family:inherit}i.svelte-1skxsnk{font-size:0.8rem;font-weight:lighter;color:inherit;text-decoration:underline}@media only screen and (max-width: 450px){button.svelte-1skxsnk{width:100%}}.bn-onboard-selected-wallet.svelte-1skxsnk{background:#c3c3c3}";
  append(document.head, style);
} // (96:4) {:else}


function create_else_block$1(ctx) {
  var img;
  var img_src_value;
  return {
    c: function c() {
      img = element("img");
      if (img.src !== (img_src_value =
      /*iconSrc*/
      ctx[0])) attr(img, "src", img_src_value);
      attr(img, "srcset",
      /*iconSrcSet*/
      ctx[1]);
      attr(img, "alt",
      /*text*/
      ctx[4]);
      attr(img, "class", "svelte-1skxsnk");
    },
    m: function m(target, anchor) {
      insert(target, img, anchor);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*iconSrc*/
      1 && img.src !== (img_src_value =
      /*iconSrc*/
      ctx[0])) {
        attr(img, "src", img_src_value);
      }

      if (dirty &
      /*iconSrcSet*/
      2) {
        attr(img, "srcset",
        /*iconSrcSet*/
        ctx[1]);
      }

      if (dirty &
      /*text*/
      16) {
        attr(img, "alt",
        /*text*/
        ctx[4]);
      }
    },
    i: noop,
    o: noop,
    d: function d(detaching) {
      if (detaching) detach(img);
    }
  };
} // (94:18) 


function create_if_block_2(ctx) {
  var html_tag;
  return {
    c: function c() {
      html_tag = new HtmlTag(
      /*svg*/
      ctx[2], null);
    },
    m: function m(target, anchor) {
      html_tag.m(target, anchor);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*svg*/
      4) html_tag.p(
      /*svg*/
      ctx[2]);
    },
    i: noop,
    o: noop,
    d: function d(detaching) {
      if (detaching) html_tag.d();
    }
  };
} // (92:4) {#if loadingWallet === text}


function create_if_block_1$1(ctx) {
  var current;
  var spinner = new Spinner({});
  return {
    c: function c() {
      create_component(spinner.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(spinner, target, anchor);
      current = true;
    },
    p: noop,
    i: function i(local) {
      if (current) return;
      transition_in(spinner.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(spinner.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(spinner, detaching);
    }
  };
} // (102:4) {#if currentlySelected}


function create_if_block$3(ctx) {
  var i;
  return {
    c: function c() {
      i = element("i");
      i.textContent = "selected";
      attr(i, "class", "svelte-1skxsnk");
    },
    m: function m(target, anchor) {
      insert(target, i, anchor);
    },
    d: function d(detaching) {
      if (detaching) detach(i);
    }
  };
}

function create_fragment$5(ctx) {
  var button;
  var div;
  var current_block_type_index;
  var if_block0;
  var t0;
  var span;
  var t1;
  var t2;
  var current;
  var dispose;
  var if_block_creators = [create_if_block_1$1, create_if_block_2, create_else_block$1];
  var if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*loadingWallet*/
    ctx[5] ===
    /*text*/
    ctx[4]) return 0;
    if (
    /*svg*/
    ctx[2]) return 1;
    return 2;
  }

  current_block_type_index = select_block_type(ctx);
  if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  var if_block1 =
  /*currentlySelected*/
  ctx[6] && create_if_block$3();
  return {
    c: function c() {
      button = element("button");
      div = element("div");
      if_block0.c();
      t0 = space();
      span = element("span");
      t1 = text(
      /*text*/
      ctx[4]);
      t2 = space();
      if (if_block1) if_block1.c();
      attr(div, "class", "svelte-1skxsnk");
      attr(span, "class", "svelte-1skxsnk");
      attr(button, "class", "bn-onboard-custom bn-onboard-icon-button svelte-1skxsnk");
      toggle_class(button, "bn-onboard-dark-mode-background-hover",
      /*$app*/
      ctx[7].darkMode);
      toggle_class(button, "bn-onboard-selected-wallet",
      /*currentlySelected*/
      ctx[6]);
    },
    m: function m(target, anchor, remount) {
      insert(target, button, anchor);
      append(button, div);
      if_blocks[current_block_type_index].m(div, null);
      append(button, t0);
      append(button, span);
      append(span, t1);
      append(span, t2);
      if (if_block1) if_block1.m(span, null);
      current = true;
      if (remount) dispose();
      dispose = listen(button, "click", function () {
        if (is_function(
        /*onclick*/
        ctx[3]))
          /*onclick*/
          ctx[3].apply(this, arguments);
      });
    },
    p: function p(new_ctx, _ref20) {
      var _ref21 = _slicedToArray(_ref20, 1),
          dirty = _ref21[0];

      ctx = new_ctx;
      var previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, function () {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block0 = if_blocks[current_block_type_index];

        if (!if_block0) {
          if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block0.c();
        }

        transition_in(if_block0, 1);
        if_block0.m(div, null);
      }

      if (!current || dirty &
      /*text*/
      16) set_data(t1,
      /*text*/
      ctx[4]);

      if (
      /*currentlySelected*/
      ctx[6]) {
        if (if_block1) ;else {
          if_block1 = create_if_block$3();
          if_block1.c();
          if_block1.m(span, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }

      if (dirty &
      /*$app*/
      128) {
        toggle_class(button, "bn-onboard-dark-mode-background-hover",
        /*$app*/
        ctx[7].darkMode);
      }

      if (dirty &
      /*currentlySelected*/
      64) {
        toggle_class(button, "bn-onboard-selected-wallet",
        /*currentlySelected*/
        ctx[6]);
      }
    },
    i: function i(local) {
      if (current) return;
      transition_in(if_block0);
      current = true;
    },
    o: function o(local) {
      transition_out(if_block0);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(button);
      if_blocks[current_block_type_index].d();
      if (if_block1) if_block1.d();
      dispose();
    }
  };
}

function instance$5($$self, $$props, $$invalidate) {
  var $app;
  component_subscribe($$self, app, function ($$value) {
    return $$invalidate(7, $app = $$value);
  });
  var iconSrc = $$props.iconSrc;
  var iconSrcSet = $$props.iconSrcSet;
  var svg = $$props.svg;
  var _$$props$onclick2 = $$props.onclick,
      onclick = _$$props$onclick2 === void 0 ? function () {} : _$$props$onclick2;
  var text = $$props.text;
  var loadingWallet = $$props.loadingWallet;
  var _$$props$currentlySel = $$props.currentlySelected,
      currentlySelected = _$$props$currentlySel === void 0 ? false : _$$props$currentlySel;

  $$self.$set = function ($$props) {
    if ("iconSrc" in $$props) $$invalidate(0, iconSrc = $$props.iconSrc);
    if ("iconSrcSet" in $$props) $$invalidate(1, iconSrcSet = $$props.iconSrcSet);
    if ("svg" in $$props) $$invalidate(2, svg = $$props.svg);
    if ("onclick" in $$props) $$invalidate(3, onclick = $$props.onclick);
    if ("text" in $$props) $$invalidate(4, text = $$props.text);
    if ("loadingWallet" in $$props) $$invalidate(5, loadingWallet = $$props.loadingWallet);
    if ("currentlySelected" in $$props) $$invalidate(6, currentlySelected = $$props.currentlySelected);
  };

  return [iconSrc, iconSrcSet, svg, onclick, text, loadingWallet, currentlySelected, $app];
}

var IconButton = /*#__PURE__*/function (_SvelteComponent6) {
  _inherits(IconButton, _SvelteComponent6);

  var _super6 = _createSuper(IconButton);

  function IconButton(options) {
    var _this6;

    _classCallCheck(this, IconButton);

    _this6 = _super6.call(this);
    if (!document.getElementById("svelte-1skxsnk-style")) add_css$5();
    init(_assertThisInitialized(_this6), options, instance$5, create_fragment$5, safe_not_equal, {
      iconSrc: 0,
      iconSrcSet: 1,
      svg: 2,
      onclick: 3,
      text: 4,
      loadingWallet: 5,
      currentlySelected: 6
    });
    return _this6;
  }

  return IconButton;
}(SvelteComponent);
/* src/components/Wallets.svelte generated by Svelte v3.22.2 */


function add_css$6() {
  var style = element("style");
  style.id = "svelte-q1527-style";
  style.textContent = "ul.svelte-q1527.svelte-q1527{display:flex;flex-flow:row wrap;align-items:center;list-style-type:none;margin:1.25em 0;padding:0;font-family:inherit;font-size:inherit;line-height:1.15;box-sizing:border-box}ul.svelte-q1527 li.svelte-q1527{padding:0 0.25em}div.svelte-q1527.svelte-q1527{width:100%;display:flex;font-size:inherit;font-family:inherit;justify-content:center;margin-top:1.25em}.svelte-q1527.svelte-q1527::-webkit-scrollbar{display:none}@media only screen and (max-width: 450px){ul.svelte-q1527 li.svelte-q1527{width:100%}ul.svelte-q1527.svelte-q1527{max-height:66vh;overflow-y:scroll}}";
  append(document.head, style);
}

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[9] = list[i];
  child_ctx[11] = i;
  return child_ctx;
}

function get_each_context_1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[9] = list[i];
  child_ctx[11] = i;
  return child_ctx;
} // (61:2) {#each modalData.primaryWallets as wallet, i (wallet.name)}


function create_each_block_1(key_1, ctx) {
  var li;
  var current;

  function func() {
    var _ctx;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return (
      /*func*/
      (_ctx = ctx)[7].apply(_ctx, [
      /*wallet*/
      ctx[9]].concat(args))
    );
  }

  var iconbutton = new IconButton({
    props: {
      onclick: func,
      iconSrc:
      /*wallet*/
      ctx[9].iconSrc,
      iconSrcSet:
      /*wallet*/
      ctx[9].iconSrcSet,
      svg:
      /*wallet*/
      ctx[9].svg,
      text:
      /*wallet*/
      ctx[9].name,
      currentlySelected:
      /*wallet*/
      ctx[9].name ===
      /*selectedWallet*/
      ctx[5].name,
      loadingWallet:
      /*loadingWallet*/
      ctx[2]
    }
  });
  return {
    key: key_1,
    first: null,
    c: function c() {
      li = element("li");
      create_component(iconbutton.$$.fragment);
      attr(li, "class", "svelte-q1527");
      this.first = li;
    },
    m: function m(target, anchor) {
      insert(target, li, anchor);
      mount_component(iconbutton, li, null);
      current = true;
    },
    p: function p(new_ctx, dirty) {
      ctx = new_ctx;
      var iconbutton_changes = {};
      if (dirty &
      /*handleWalletSelect, modalData*/
      3) iconbutton_changes.onclick = func;
      if (dirty &
      /*modalData*/
      1) iconbutton_changes.iconSrc =
      /*wallet*/
      ctx[9].iconSrc;
      if (dirty &
      /*modalData*/
      1) iconbutton_changes.iconSrcSet =
      /*wallet*/
      ctx[9].iconSrcSet;
      if (dirty &
      /*modalData*/
      1) iconbutton_changes.svg =
      /*wallet*/
      ctx[9].svg;
      if (dirty &
      /*modalData*/
      1) iconbutton_changes.text =
      /*wallet*/
      ctx[9].name;
      if (dirty &
      /*modalData, selectedWallet*/
      33) iconbutton_changes.currentlySelected =
      /*wallet*/
      ctx[9].name ===
      /*selectedWallet*/
      ctx[5].name;
      if (dirty &
      /*loadingWallet*/
      4) iconbutton_changes.loadingWallet =
      /*loadingWallet*/
      ctx[2];
      iconbutton.$set(iconbutton_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(iconbutton.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(iconbutton.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(li);
      destroy_component(iconbutton);
    }
  };
} // (74:2) {#if modalData.secondaryWallets && modalData.secondaryWallets.length && !showingAllWalletModules}


function create_if_block_1$2(ctx) {
  var div;
  var current;
  var button = new Button({
    props: {
      onclick:
      /*showAllWallets*/
      ctx[4],
      $$slots: {
        "default": [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  return {
    c: function c() {
      div = element("div");
      create_component(button.$$.fragment);
      attr(div, "class", "svelte-q1527");
    },
    m: function m(target, anchor) {
      insert(target, div, anchor);
      mount_component(button, div, null);
      current = true;
    },
    p: function p(ctx, dirty) {
      var button_changes = {};
      if (dirty &
      /*showAllWallets*/
      16) button_changes.onclick =
      /*showAllWallets*/
      ctx[4];

      if (dirty &
      /*$$scope*/
      8192) {
        button_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button.$set(button_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(div);
      destroy_component(button);
    }
  };
} // (76:6) <Button onclick={showAllWallets}>


function create_default_slot(ctx) {
  var t;
  return {
    c: function c() {
      t = text("Show More");
    },
    m: function m(target, anchor) {
      insert(target, t, anchor);
    },
    d: function d(detaching) {
      if (detaching) detach(t);
    }
  };
} // (80:2) {#if showingAllWalletModules}


function create_if_block$4(ctx) {
  var each_blocks = [];
  var each_1_lookup = new Map();
  var each_1_anchor;
  var current;
  var each_value =
  /*modalData*/
  ctx[0].secondaryWallets;

  var get_key = function get_key(ctx) {
    return (
      /*wallet*/
      ctx[9].name
    );
  };

  for (var i = 0; i < each_value.length; i += 1) {
    var child_ctx = get_each_context(ctx, each_value, i);
    var key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
  }

  return {
    c: function c() {
      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].c();
      }

      each_1_anchor = empty();
    },
    m: function m(target, anchor) {
      for (var _i4 = 0; _i4 < each_blocks.length; _i4 += 1) {
        each_blocks[_i4].m(target, anchor);
      }

      insert(target, each_1_anchor, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*handleWalletSelect, modalData, selectedWallet, loadingWallet*/
      39) {
        var _each_value =
        /*modalData*/
        ctx[0].secondaryWallets;
        group_outros();
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, _each_value, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block, each_1_anchor, get_each_context);
        check_outros();
      }
    },
    i: function i(local) {
      if (current) return;

      for (var _i5 = 0; _i5 < each_value.length; _i5 += 1) {
        transition_in(each_blocks[_i5]);
      }

      current = true;
    },
    o: function o(local) {
      for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
        transition_out(each_blocks[_i6]);
      }

      current = false;
    },
    d: function d(detaching) {
      for (var _i7 = 0; _i7 < each_blocks.length; _i7 += 1) {
        each_blocks[_i7].d(detaching);
      }

      if (detaching) detach(each_1_anchor);
    }
  };
} // (81:4) {#each modalData.secondaryWallets as wallet, i (wallet.name)}


function create_each_block(key_1, ctx) {
  var li;
  var t;
  var current;

  function func_1() {
    var _ctx2;

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return (
      /*func_1*/
      (_ctx2 = ctx)[8].apply(_ctx2, [
      /*wallet*/
      ctx[9]].concat(args))
    );
  }

  var iconbutton = new IconButton({
    props: {
      onclick: func_1,
      iconSrc:
      /*wallet*/
      ctx[9].iconSrc,
      iconSrcSet:
      /*wallet*/
      ctx[9].iconSrcSet,
      svg:
      /*wallet*/
      ctx[9].svg,
      text:
      /*wallet*/
      ctx[9].name,
      currentlySelected:
      /*wallet*/
      ctx[9].name ===
      /*selectedWallet*/
      ctx[5].name,
      loadingWallet:
      /*loadingWallet*/
      ctx[2]
    }
  });
  return {
    key: key_1,
    first: null,
    c: function c() {
      li = element("li");
      create_component(iconbutton.$$.fragment);
      t = space();
      attr(li, "class", "svelte-q1527");
      this.first = li;
    },
    m: function m(target, anchor) {
      insert(target, li, anchor);
      mount_component(iconbutton, li, null);
      append(li, t);
      current = true;
    },
    p: function p(new_ctx, dirty) {
      ctx = new_ctx;
      var iconbutton_changes = {};
      if (dirty &
      /*handleWalletSelect, modalData*/
      3) iconbutton_changes.onclick = func_1;
      if (dirty &
      /*modalData*/
      1) iconbutton_changes.iconSrc =
      /*wallet*/
      ctx[9].iconSrc;
      if (dirty &
      /*modalData*/
      1) iconbutton_changes.iconSrcSet =
      /*wallet*/
      ctx[9].iconSrcSet;
      if (dirty &
      /*modalData*/
      1) iconbutton_changes.svg =
      /*wallet*/
      ctx[9].svg;
      if (dirty &
      /*modalData*/
      1) iconbutton_changes.text =
      /*wallet*/
      ctx[9].name;
      if (dirty &
      /*modalData, selectedWallet*/
      33) iconbutton_changes.currentlySelected =
      /*wallet*/
      ctx[9].name ===
      /*selectedWallet*/
      ctx[5].name;
      if (dirty &
      /*loadingWallet*/
      4) iconbutton_changes.loadingWallet =
      /*loadingWallet*/
      ctx[2];
      iconbutton.$set(iconbutton_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(iconbutton.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(iconbutton.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(li);
      destroy_component(iconbutton);
    }
  };
}

function create_fragment$6(ctx) {
  var ul;
  var each_blocks = [];
  var each_1_lookup = new Map();
  var t0;
  var t1;
  var current;
  var each_value_1 =
  /*modalData*/
  ctx[0].primaryWallets;

  var get_key = function get_key(ctx) {
    return (
      /*wallet*/
      ctx[9].name
    );
  };

  for (var i = 0; i < each_value_1.length; i += 1) {
    var child_ctx = get_each_context_1(ctx, each_value_1, i);
    var key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block_1(key, child_ctx));
  }

  var if_block0 =
  /*modalData*/
  ctx[0].secondaryWallets &&
  /*modalData*/
  ctx[0].secondaryWallets.length && !
  /*showingAllWalletModules*/
  ctx[3] && create_if_block_1$2(ctx);
  var if_block1 =
  /*showingAllWalletModules*/
  ctx[3] && create_if_block$4(ctx);
  return {
    c: function c() {
      ul = element("ul");

      for (var _i8 = 0; _i8 < each_blocks.length; _i8 += 1) {
        each_blocks[_i8].c();
      }

      t0 = space();
      if (if_block0) if_block0.c();
      t1 = space();
      if (if_block1) if_block1.c();
      attr(ul, "class", "bn-onboard-custom bn-onboard-modal-select-wallets svelte-q1527");
    },
    m: function m(target, anchor) {
      insert(target, ul, anchor);

      for (var _i9 = 0; _i9 < each_blocks.length; _i9 += 1) {
        each_blocks[_i9].m(ul, null);
      }

      append(ul, t0);
      if (if_block0) if_block0.m(ul, null);
      append(ul, t1);
      if (if_block1) if_block1.m(ul, null);
      current = true;
    },
    p: function p(ctx, _ref22) {
      var _ref23 = _slicedToArray(_ref22, 1),
          dirty = _ref23[0];

      if (dirty &
      /*handleWalletSelect, modalData, selectedWallet, loadingWallet*/
      39) {
        var _each_value_ =
        /*modalData*/
        ctx[0].primaryWallets;
        group_outros();
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, _each_value_, each_1_lookup, ul, outro_and_destroy_block, create_each_block_1, t0, get_each_context_1);
        check_outros();
      }

      if (
      /*modalData*/
      ctx[0].secondaryWallets &&
      /*modalData*/
      ctx[0].secondaryWallets.length && !
      /*showingAllWalletModules*/
      ctx[3]) {
        if (if_block0) {
          if_block0.p(ctx, dirty);

          if (dirty &
          /*modalData, showingAllWalletModules*/
          9) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_1$2(ctx);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(ul, t1);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, function () {
          if_block0 = null;
        });
        check_outros();
      }

      if (
      /*showingAllWalletModules*/
      ctx[3]) {
        if (if_block1) {
          if_block1.p(ctx, dirty);

          if (dirty &
          /*showingAllWalletModules*/
          8) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block$4(ctx);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(ul, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, function () {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i: function i(local) {
      if (current) return;

      for (var _i10 = 0; _i10 < each_value_1.length; _i10 += 1) {
        transition_in(each_blocks[_i10]);
      }

      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o: function o(local) {
      for (var _i11 = 0; _i11 < each_blocks.length; _i11 += 1) {
        transition_out(each_blocks[_i11]);
      }

      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(ul);

      for (var _i12 = 0; _i12 < each_blocks.length; _i12 += 1) {
        each_blocks[_i12].d();
      }

      if (if_block0) if_block0.d();
      if (if_block1) if_block1.d();
    }
  };
}

function instance$6($$self, $$props, $$invalidate) {
  var modalData = $$props.modalData;
  var handleWalletSelect = $$props.handleWalletSelect;
  var loadingWallet = $$props.loadingWallet;
  var _$$props$showingAllWa = $$props.showingAllWalletModules,
      showingAllWalletModules = _$$props$showingAllWa === void 0 ? false : _$$props$showingAllWa;
  var showAllWallets = $$props.showAllWallets;
  var selectedWallet;
  var unsubscribe = wallet.subscribe(function (wallet) {
    return $$invalidate(5, selectedWallet = wallet);
  });
  onDestroy(function () {
    return unsubscribe();
  });

  var func = function func(wallet) {
    return handleWalletSelect(wallet);
  };

  var func_1 = function func_1(wallet) {
    return handleWalletSelect(wallet);
  };

  $$self.$set = function ($$props) {
    if ("modalData" in $$props) $$invalidate(0, modalData = $$props.modalData);
    if ("handleWalletSelect" in $$props) $$invalidate(1, handleWalletSelect = $$props.handleWalletSelect);
    if ("loadingWallet" in $$props) $$invalidate(2, loadingWallet = $$props.loadingWallet);
    if ("showingAllWalletModules" in $$props) $$invalidate(3, showingAllWalletModules = $$props.showingAllWalletModules);
    if ("showAllWallets" in $$props) $$invalidate(4, showAllWallets = $$props.showAllWallets);
  };

  return [modalData, handleWalletSelect, loadingWallet, showingAllWalletModules, showAllWallets, selectedWallet, unsubscribe, func, func_1];
}

var Wallets = /*#__PURE__*/function (_SvelteComponent7) {
  _inherits(Wallets, _SvelteComponent7);

  var _super7 = _createSuper(Wallets);

  function Wallets(options) {
    var _this7;

    _classCallCheck(this, Wallets);

    _this7 = _super7.call(this);
    if (!document.getElementById("svelte-q1527-style")) add_css$6();
    init(_assertThisInitialized(_this7), options, instance$6, create_fragment$6, safe_not_equal, {
      modalData: 0,
      handleWalletSelect: 1,
      loadingWallet: 2,
      showingAllWalletModules: 3,
      showAllWallets: 4
    });
    return _this7;
  }

  return Wallets;
}(SvelteComponent);
/* src/elements/IconDisplay.svelte generated by Svelte v3.22.2 */


function add_css$7() {
  var style = element("style");
  style.id = "svelte-18zts4b-style";
  style.textContent = "div.svelte-18zts4b{display:flex;align-items:center;border:none;margin:0;font-size:inherit;font-family:inherit;background:inherit;padding:0;width:18em;border-radius:40px;color:inherit}img.svelte-18zts4b{width:auto;height:3em}span.svelte-18zts4b{margin-left:0.66em;font-weight:bold;font-size:inherit;font-family:inherit;opacity:0.7;text-align:left}";
  append(document.head, style);
} // (41:2) {:else}


function create_else_block$2(ctx) {
  var img;
  var img_src_value;
  return {
    c: function c() {
      img = element("img");
      if (img.src !== (img_src_value =
      /*iconSrc*/
      ctx[0])) attr(img, "src", img_src_value);
      attr(img, "srcset",
      /*iconSrcSet*/
      ctx[1]);
      attr(img, "alt",
      /*text*/
      ctx[2]);
      attr(img, "class", "svelte-18zts4b");
    },
    m: function m(target, anchor) {
      insert(target, img, anchor);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*iconSrc*/
      1 && img.src !== (img_src_value =
      /*iconSrc*/
      ctx[0])) {
        attr(img, "src", img_src_value);
      }

      if (dirty &
      /*iconSrcSet*/
      2) {
        attr(img, "srcset",
        /*iconSrcSet*/
        ctx[1]);
      }

      if (dirty &
      /*text*/
      4) {
        attr(img, "alt",
        /*text*/
        ctx[2]);
      }
    },
    d: function d(detaching) {
      if (detaching) detach(img);
    }
  };
} // (39:2) {#if svg}


function create_if_block$5(ctx) {
  var html_tag;
  return {
    c: function c() {
      html_tag = new HtmlTag(
      /*svg*/
      ctx[3], null);
    },
    m: function m(target, anchor) {
      html_tag.m(target, anchor);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*svg*/
      8) html_tag.p(
      /*svg*/
      ctx[3]);
    },
    d: function d(detaching) {
      if (detaching) html_tag.d();
    }
  };
}

function create_fragment$7(ctx) {
  var div;
  var t0;
  var span;
  var t1;

  function select_block_type(ctx, dirty) {
    if (
    /*svg*/
    ctx[3]) return create_if_block$5;
    return create_else_block$2;
  }

  var current_block_type = select_block_type(ctx);
  var if_block = current_block_type(ctx);
  return {
    c: function c() {
      div = element("div");
      if_block.c();
      t0 = space();
      span = element("span");
      t1 = text(
      /*text*/
      ctx[2]);
      attr(span, "class", "svelte-18zts4b");
      attr(div, "class", "bn-onboard-custom bn-onboard-icon-display svelte-18zts4b");
    },
    m: function m(target, anchor) {
      insert(target, div, anchor);
      if_block.m(div, null);
      append(div, t0);
      append(div, span);
      append(span, t1);
    },
    p: function p(ctx, _ref24) {
      var _ref25 = _slicedToArray(_ref24, 1),
          dirty = _ref25[0];

      if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
        if_block.p(ctx, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx);

        if (if_block) {
          if_block.c();
          if_block.m(div, t0);
        }
      }

      if (dirty &
      /*text*/
      4) set_data(t1,
      /*text*/
      ctx[2]);
    },
    i: noop,
    o: noop,
    d: function d(detaching) {
      if (detaching) detach(div);
      if_block.d();
    }
  };
}

function instance$7($$self, $$props, $$invalidate) {
  var iconSrc = $$props.iconSrc;
  var iconSrcSet = $$props.iconSrcSet;
  var text = $$props.text;
  var svg = $$props.svg;

  $$self.$set = function ($$props) {
    if ("iconSrc" in $$props) $$invalidate(0, iconSrc = $$props.iconSrc);
    if ("iconSrcSet" in $$props) $$invalidate(1, iconSrcSet = $$props.iconSrcSet);
    if ("text" in $$props) $$invalidate(2, text = $$props.text);
    if ("svg" in $$props) $$invalidate(3, svg = $$props.svg);
  };

  return [iconSrc, iconSrcSet, text, svg];
}

var IconDisplay = /*#__PURE__*/function (_SvelteComponent8) {
  _inherits(IconDisplay, _SvelteComponent8);

  var _super8 = _createSuper(IconDisplay);

  function IconDisplay(options) {
    var _this8;

    _classCallCheck(this, IconDisplay);

    _this8 = _super8.call(this);
    if (!document.getElementById("svelte-18zts4b-style")) add_css$7();
    init(_assertThisInitialized(_this8), options, instance$7, create_fragment$7, safe_not_equal, {
      iconSrc: 0,
      iconSrcSet: 1,
      text: 2,
      svg: 3
    });
    return _this8;
  }

  return IconDisplay;
}(SvelteComponent);
/* src/components/SelectedWallet.svelte generated by Svelte v3.22.2 */


function add_css$8() {
  var style = element("style");
  style.id = "svelte-mi6ahc-style";
  style.textContent = "section.svelte-mi6ahc{color:inherit;font-size:inherit;font-family:inherit;display:block}footer.svelte-mi6ahc{display:flex;font-size:inherit;font-family:inherit;justify-content:space-between}";
  append(document.head, style);
} // (33:2) {#if installMessage}


function create_if_block$6(ctx) {
  var html_tag;
  return {
    c: function c() {
      html_tag = new HtmlTag(
      /*installMessage*/
      ctx[2], null);
    },
    m: function m(target, anchor) {
      html_tag.m(target, anchor);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*installMessage*/
      4) html_tag.p(
      /*installMessage*/
      ctx[2]);
    },
    d: function d(detaching) {
      if (detaching) html_tag.d();
    }
  };
} // (42:6) <Button>


function create_default_slot_1(ctx) {
  var t0;
  var t1_value =
  /*selectedWalletModule*/
  ctx[0].name + "";
  var t1;
  return {
    c: function c() {
      t0 = text("Install ");
      t1 = text(t1_value);
    },
    m: function m(target, anchor) {
      insert(target, t0, anchor);
      insert(target, t1, anchor);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*selectedWalletModule*/
      1 && t1_value !== (t1_value =
      /*selectedWalletModule*/
      ctx[0].name + "")) set_data(t1, t1_value);
    },
    d: function d(detaching) {
      if (detaching) detach(t0);
      if (detaching) detach(t1);
    }
  };
} // (44:4) <Button onclick={onBack}>


function create_default_slot$1(ctx) {
  var t;
  return {
    c: function c() {
      t = text("Back");
    },
    m: function m(target, anchor) {
      insert(target, t, anchor);
    },
    d: function d(detaching) {
      if (detaching) detach(t);
    }
  };
}

function create_fragment$8(ctx) {
  var section;
  var t0;
  var t1;
  var footer;
  var a;
  var a_href_value;
  var t2;
  var section_intro;
  var current;
  var icondisplay = new IconDisplay({
    props: {
      iconSrc:
      /*selectedWalletModule*/
      ctx[0].iconSrc,
      iconSrcSet:
      /*selectedWalletModule*/
      ctx[0].iconSrcSet,
      svg:
      /*selectedWalletModule*/
      ctx[0].svg,
      text:
      /*selectedWalletModule*/
      ctx[0].name
    }
  });
  var if_block =
  /*installMessage*/
  ctx[2] && create_if_block$6(ctx);
  var button0 = new Button({
    props: {
      $$slots: {
        "default": [create_default_slot_1]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  var button1 = new Button({
    props: {
      onclick:
      /*onBack*/
      ctx[1],
      $$slots: {
        "default": [create_default_slot$1]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  return {
    c: function c() {
      section = element("section");
      create_component(icondisplay.$$.fragment);
      t0 = space();
      if (if_block) if_block.c();
      t1 = space();
      footer = element("footer");
      a = element("a");
      create_component(button0.$$.fragment);
      t2 = space();
      create_component(button1.$$.fragment);
      attr(a, "href", a_href_value =
      /*selectedWalletModule*/
      ctx[0].link);
      attr(a, "rel", "noreferrer noopener");
      attr(a, "target", "_blank");
      attr(footer, "class", "bn-onboard-custom bn-onboard-modal-selected-wallet-footer svelte-mi6ahc");
      attr(section, "class", "bn-onboard-custom bn-onboard-modal-selected-wallet svelte-mi6ahc");
    },
    m: function m(target, anchor) {
      insert(target, section, anchor);
      mount_component(icondisplay, section, null);
      append(section, t0);
      if (if_block) if_block.m(section, null);
      append(section, t1);
      append(section, footer);
      append(footer, a);
      mount_component(button0, a, null);
      append(footer, t2);
      mount_component(button1, footer, null);
      current = true;
    },
    p: function p(ctx, _ref26) {
      var _ref27 = _slicedToArray(_ref26, 1),
          dirty = _ref27[0];

      var icondisplay_changes = {};
      if (dirty &
      /*selectedWalletModule*/
      1) icondisplay_changes.iconSrc =
      /*selectedWalletModule*/
      ctx[0].iconSrc;
      if (dirty &
      /*selectedWalletModule*/
      1) icondisplay_changes.iconSrcSet =
      /*selectedWalletModule*/
      ctx[0].iconSrcSet;
      if (dirty &
      /*selectedWalletModule*/
      1) icondisplay_changes.svg =
      /*selectedWalletModule*/
      ctx[0].svg;
      if (dirty &
      /*selectedWalletModule*/
      1) icondisplay_changes.text =
      /*selectedWalletModule*/
      ctx[0].name;
      icondisplay.$set(icondisplay_changes);

      if (
      /*installMessage*/
      ctx[2]) {
        if (if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block = create_if_block$6(ctx);
          if_block.c();
          if_block.m(section, t1);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }

      var button0_changes = {};

      if (dirty &
      /*$$scope, selectedWalletModule*/
      9) {
        button0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button0.$set(button0_changes);

      if (!current || dirty &
      /*selectedWalletModule*/
      1 && a_href_value !== (a_href_value =
      /*selectedWalletModule*/
      ctx[0].link)) {
        attr(a, "href", a_href_value);
      }

      var button1_changes = {};
      if (dirty &
      /*onBack*/
      2) button1_changes.onclick =
      /*onBack*/
      ctx[1];

      if (dirty &
      /*$$scope*/
      8) {
        button1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button1.$set(button1_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(icondisplay.$$.fragment, local);
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);

      if (!section_intro) {
        add_render_callback(function () {
          section_intro = create_in_transition(section, fade, {});
          section_intro.start();
        });
      }

      current = true;
    },
    o: function o(local) {
      transition_out(icondisplay.$$.fragment, local);
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(section);
      destroy_component(icondisplay);
      if (if_block) if_block.d();
      destroy_component(button0);
      destroy_component(button1);
    }
  };
}

function instance$8($$self, $$props, $$invalidate) {
  var selectedWalletModule = $$props.selectedWalletModule;
  var onBack = $$props.onBack;
  var installMessage = $$props.installMessage;

  $$self.$set = function ($$props) {
    if ("selectedWalletModule" in $$props) $$invalidate(0, selectedWalletModule = $$props.selectedWalletModule);
    if ("onBack" in $$props) $$invalidate(1, onBack = $$props.onBack);
    if ("installMessage" in $$props) $$invalidate(2, installMessage = $$props.installMessage);
  };

  return [selectedWalletModule, onBack, installMessage];
}

var SelectedWallet = /*#__PURE__*/function (_SvelteComponent9) {
  _inherits(SelectedWallet, _SvelteComponent9);

  var _super9 = _createSuper(SelectedWallet);

  function SelectedWallet(options) {
    var _this9;

    _classCallCheck(this, SelectedWallet);

    _this9 = _super9.call(this);
    if (!document.getElementById("svelte-mi6ahc-style")) add_css$8();
    init(_assertThisInitialized(_this9), options, instance$8, create_fragment$8, safe_not_equal, {
      selectedWalletModule: 0,
      onBack: 1,
      installMessage: 2
    });
    return _this9;
  }

  return SelectedWallet;
}(SvelteComponent);

var walletIcon = "\n<svg\nheight=\"18\"\nviewBox=\"0 0 19 18\"\nwidth=\"19\"\nxmlns=\"http://www.w3.org/2000/svg\">\n<g fill=\"currentColor\" fill-rule=\"evenodd\">\n\t<path\n\t\td=\"m15.7721618.00006623h-13.27469839c-.86762065\n\t\t0-1.48592681.3078086-1.89741046.76113193-.40615823.44745064-.60839063\n\t\t1.04661988-.59978974\n\t\t1.64464107.00029187.005124.00040335.01025653.00033423.01538822v3.66899811c.06682404-.11685776.14162507-.22938827.22533894-.33628895.36778845-.46959466.90812952-.82116145\n\t\t1.61866132-.95623339v-.59093422c0-.55214353.17649657-1.05790163.47278173-1.43388645.29630745-.37596275.72292065-.62513272\n\t\t1.19969088-.62513272h11.23546239c.4765474 0 .9032497.24850764\n\t\t1.199624.62424961.2963743.37574196.4728709.88161045.4728709\n\t\t1.43476956v.4652895c.5235626-.11047728.9266682-.35445897\n\t\t1.2246022-.6733727.4116397-.44060653.6210469-1.03392515.6210469-1.63015804s-.2094072-1.18955151-.6210469-1.63018011c-.4116396-.44060653-1.0238627-.73834765-1.877468-.73834765z\" />\n\t<path\n\t\td=\"m14.6096047 2.57151734h-11.21914267c-.32073002\n\t\t0-.6185428.16561433-.84722564.45769739s-.37782286.70763901-.37782286\n\t\t1.16808814v.53953924c.06265527-.0036172.12640078-.00570319.19125878-.00616921.00518482-.00032924.01037961-.00047727.01557482-.00044383h.01326084\n\t\t13.24215593c.0706652 0\n\t\t.1395281-.00228571.2069226-.00630235v-.52671262c0-.46164746-.1491623-.87711464-.3777561-1.16884264-.2286161-.29175019-.5263622-.45694289-.8473147-.45694289z\" />\n\t<path\n\t\td=\"m18.2706767\n\t\t3.92481203c-.0857195.13278047-.1837832.25906993-.2945478.376829-.495466.52680184-1.2439236.87400468-2.2045296.87400468h-13.26144765c-.93286471\n\t\t0-1.53628777.33766369-1.93268731.8403655s-.57746434\n\t\t1.18877443-.57746434\n\t\t1.87212785v.41252951c.13725808.14817467.29229732.20450824.50016754.23211693.21170276.02811305.46814809.01403459.74212947.02170977h5.25979191c.94146564\n\t\t0 1.67588548.36084271 2.15878435.90341155.48289887.54259078.7188669\n\t\t1.25649138.7188669 1.96738768s-.23596803 1.4247969-.7188669\n\t\t1.9673877c-.48289887.5425689-1.21731871.9033896-2.15878435.9033896h-5.25979191c-.25038458\n\t\t0-.55749953-.0171046-.84908381-.0866198-.13520812-.0322576-.27003744-.0756114-.3932132-.1380653v1.5302318c0\n\t\t1.3201295 1.09561358 2.3983815 2.43697706\n\t\t2.3983815h13.39672254c1.3413635 0 2.4369771-1.078252\n\t\t2.4369771-2.3983815z\" />\n\t<path\n\t\td=\"m0\n\t\t8.79699248c.14260628.06959022.29864665.11050376.44557501.1299645.2753208.03649163.54484912.01335327.79368049.02057717.002302.00003506.00460441.00003506.00690641\n\t\t0h5.25640383c.82827939 0 1.4220972.30156492\n\t\t1.8240727.75248941.40199777.45094634.60569239 1.06221954.60569239\n\t\t1.67601014 0 .6137467-.20369462 1.2250637-.60569239\n\t\t1.6759882-.4019755.4509463-.99579331.7524894-1.8240727.7524894h-5.25640383c-.22831264\n\t\t0-.50846792-.0188259-.74493458-.075238-.23646666-.0563245-.41416197-.1517676-.48734767-.2599728-.00440013-.0047203-.00900883-.0092487-.01387966-.0135722v-4.65860448zm6.42601595\n\t\t1.42288912c-.62979799 0-1.14873693.5024111-1.14873693 1.1218933 0\n\t\t.6211677.51893894 1.128745 1.14873693 1.128745.62984256 0\n\t\t1.14178597-.5082122 1.14178597-1.128745\n\t\t0-.6188692-.51194341-1.1218933-1.14178597-1.1218933z\" />\n</g>\n</svg>\n\t";
/* src/views/WalletSelect.svelte generated by Svelte v3.22.2 */

function add_css$9() {
  var style = element("style");
  style.id = "svelte-rj3fpa-style";
  style.textContent = "p.svelte-rj3fpa.svelte-rj3fpa{font-size:0.889em;margin:1.6em 0 0 0;font-family:inherit}div.svelte-rj3fpa.svelte-rj3fpa{display:flex;font-size:inherit;font-family:inherit;justify-content:space-between}div.svelte-rj3fpa span.svelte-rj3fpa{color:#4a90e2;font-size:inherit;font-family:inherit;margin-top:0.66em;cursor:pointer}";
  append(document.head, style);
} // (177:0) {#if modalData}


function create_if_block$7(ctx) {
  var current;
  var modal = new Modal({
    props: {
      closeModal:
      /*func_2*/
      ctx[24],
      $$slots: {
        "default": [create_default_slot$2]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  return {
    c: function c() {
      create_component(modal.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(modal, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var modal_changes = {};

      if (dirty &
      /*$$scope, modalData, showWalletDefinition, loadingWallet, showingAllWalletModules, selectedWalletModule, walletAlreadyInstalled, installMessage*/
      33554559) {
        modal_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      modal.$set(modal_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(modal.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(modal.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(modal, detaching);
    }
  };
} // (207:4) {:else}


function create_else_block$3(ctx) {
  var current;
  var selectedwallet = new SelectedWallet({
    props: {
      selectedWalletModule:
      /*selectedWalletModule*/
      ctx[4],
      onBack:
      /*func_1*/
      ctx[23],
      installMessage:
      /*installMessage*/
      ctx[3]
    }
  });
  return {
    c: function c() {
      create_component(selectedwallet.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(selectedwallet, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var selectedwallet_changes = {};
      if (dirty &
      /*selectedWalletModule*/
      16) selectedwallet_changes.selectedWalletModule =
      /*selectedWalletModule*/
      ctx[4];
      if (dirty &
      /*selectedWalletModule, walletAlreadyInstalled*/
      20) selectedwallet_changes.onBack =
      /*func_1*/
      ctx[23];
      if (dirty &
      /*installMessage*/
      8) selectedwallet_changes.installMessage =
      /*installMessage*/
      ctx[3];
      selectedwallet.$set(selectedwallet_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(selectedwallet.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(selectedwallet.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(selectedwallet, detaching);
    }
  };
} // (180:4) {#if !selectedWalletModule}


function create_if_block_1$3(ctx) {
  var _p;

  var raw_value =
  /*modalData*/
  ctx[0].description + "";
  var t0;
  var t1;
  var div;
  var span;
  var t3;
  var t4;
  var if_block1_anchor;
  var current;
  var dispose;
  var wallets_1 = new Wallets({
    props: {
      modalData:
      /*modalData*/
      ctx[0],
      handleWalletSelect:
      /*handleWalletSelect*/
      ctx[9],
      loadingWallet:
      /*loadingWallet*/
      ctx[5],
      showingAllWalletModules:
      /*showingAllWalletModules*/
      ctx[6],
      showAllWallets:
      /*showAllWallets*/
      ctx[8]
    }
  });
  var if_block0 =
  /*mobileDevice*/
  ctx[7] && create_if_block_3(ctx);
  var if_block1 =
  /*showWalletDefinition*/
  ctx[1] && create_if_block_2$1(ctx);
  return {
    c: function c() {
      _p = element("p");
      t0 = space();
      create_component(wallets_1.$$.fragment);
      t1 = space();
      div = element("div");
      span = element("span");
      span.textContent = "What is a wallet?";
      t3 = space();
      if (if_block0) if_block0.c();
      t4 = space();
      if (if_block1) if_block1.c();
      if_block1_anchor = empty();
      attr(_p, "class", "bn-onboard-custom bn-onboard-select-description svelte-rj3fpa");
      attr(span, "class", "bn-onboard-custom bn-onboard-select-wallet-info svelte-rj3fpa");
      attr(div, "class", "bn-onboard-custom bn-onboard-select-info-container svelte-rj3fpa");
    },
    m: function m(target, anchor, remount) {
      insert(target, _p, anchor);
      _p.innerHTML = raw_value;
      insert(target, t0, anchor);
      mount_component(wallets_1, target, anchor);
      insert(target, t1, anchor);
      insert(target, div, anchor);
      append(div, span);
      append(div, t3);
      if (if_block0) if_block0.m(div, null);
      insert(target, t4, anchor);
      if (if_block1) if_block1.m(target, anchor);
      insert(target, if_block1_anchor, anchor);
      current = true;
      if (remount) dispose();
      dispose = listen(span, "click",
      /*click_handler*/
      ctx[21]);
    },
    p: function p(ctx, dirty) {
      if ((!current || dirty &
      /*modalData*/
      1) && raw_value !== (raw_value =
      /*modalData*/
      ctx[0].description + "")) _p.innerHTML = raw_value;
      var wallets_1_changes = {};
      if (dirty &
      /*modalData*/
      1) wallets_1_changes.modalData =
      /*modalData*/
      ctx[0];
      if (dirty &
      /*loadingWallet*/
      32) wallets_1_changes.loadingWallet =
      /*loadingWallet*/
      ctx[5];
      if (dirty &
      /*showingAllWalletModules*/
      64) wallets_1_changes.showingAllWalletModules =
      /*showingAllWalletModules*/
      ctx[6];
      wallets_1.$set(wallets_1_changes);
      if (
      /*mobileDevice*/
      ctx[7]) if_block0.p(ctx, dirty);

      if (
      /*showWalletDefinition*/
      ctx[1]) {
        if (if_block1) {
          if_block1.p(ctx, dirty);

          if (dirty &
          /*showWalletDefinition*/
          2) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_2$1(ctx);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    i: function i(local) {
      if (current) return;
      transition_in(wallets_1.$$.fragment, local);
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o: function o(local) {
      transition_out(wallets_1.$$.fragment, local);
      transition_out(if_block0);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(_p);
      if (detaching) detach(t0);
      destroy_component(wallets_1, detaching);
      if (detaching) detach(t1);
      if (detaching) detach(div);
      if (if_block0) if_block0.d();
      if (detaching) detach(t4);
      if (if_block1) if_block1.d(detaching);
      if (detaching) detach(if_block1_anchor);
      dispose();
    }
  };
} // (196:8) {#if mobileDevice}


function create_if_block_3(ctx) {
  var current;
  var button = new Button({
    props: {
      onclick:
      /*func*/
      ctx[22],
      $$slots: {
        "default": [create_default_slot_1$1]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  return {
    c: function c() {
      create_component(button.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(button, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var button_changes = {};

      if (dirty &
      /*$$scope*/
      33554432) {
        button_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button.$set(button_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(button, detaching);
    }
  };
} // (197:10) <Button onclick={() => finish({ completed: false })}>


function create_default_slot_1$1(ctx) {
  var t;
  return {
    c: function c() {
      t = text("Dismiss");
    },
    m: function m(target, anchor) {
      insert(target, t, anchor);
    },
    d: function d(detaching) {
      if (detaching) detach(t);
    }
  };
} // (200:6) {#if showWalletDefinition}


function create_if_block_2$1(ctx) {
  var _p2;

  var raw_value =
  /*modalData*/
  ctx[0].explanation + "";
  var p_intro;
  return {
    c: function c() {
      _p2 = element("p");
      attr(_p2, "class", "bn-onboard-custom bn-onboard-select-wallet-definition svelte-rj3fpa");
    },
    m: function m(target, anchor) {
      insert(target, _p2, anchor);
      _p2.innerHTML = raw_value;
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*modalData*/
      1 && raw_value !== (raw_value =
      /*modalData*/
      ctx[0].explanation + "")) _p2.innerHTML = raw_value;
    },
    i: function i(local) {
      if (!p_intro) {
        add_render_callback(function () {
          p_intro = create_in_transition(_p2, fade, {});
          p_intro.start();
        });
      }
    },
    o: noop,
    d: function d(detaching) {
      if (detaching) detach(_p2);
    }
  };
} // (178:2) <Modal closeModal={() => finish({ completed: false })}>


function create_default_slot$2(ctx) {
  var t;
  var current_block_type_index;
  var if_block;
  var if_block_anchor;
  var current;
  var modalheader = new ModalHeader({
    props: {
      icon: walletIcon,
      heading:
      /*modalData*/
      ctx[0].heading
    }
  });
  var if_block_creators = [create_if_block_1$3, create_else_block$3];
  var if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (!
    /*selectedWalletModule*/
    ctx[4]) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c: function c() {
      create_component(modalheader.$$.fragment);
      t = space();
      if_block.c();
      if_block_anchor = empty();
    },
    m: function m(target, anchor) {
      mount_component(modalheader, target, anchor);
      insert(target, t, anchor);
      if_blocks[current_block_type_index].m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var modalheader_changes = {};
      if (dirty &
      /*modalData*/
      1) modalheader_changes.heading =
      /*modalData*/
      ctx[0].heading;
      modalheader.$set(modalheader_changes);
      var previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, function () {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        }

        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i: function i(local) {
      if (current) return;
      transition_in(modalheader.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o: function o(local) {
      transition_out(modalheader.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(modalheader, detaching);
      if (detaching) detach(t);
      if_blocks[current_block_type_index].d(detaching);
      if (detaching) detach(if_block_anchor);
    }
  };
}

function create_fragment$9(ctx) {
  var if_block_anchor;
  var current;
  var if_block =
  /*modalData*/
  ctx[0] && create_if_block$7(ctx);
  return {
    c: function c() {
      if (if_block) if_block.c();
      if_block_anchor = empty();
    },
    m: function m(target, anchor) {
      if (if_block) if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p: function p(ctx, _ref28) {
      var _ref29 = _slicedToArray(_ref28, 1),
          dirty = _ref29[0];

      if (
      /*modalData*/
      ctx[0]) {
        if (if_block) {
          if_block.p(ctx, dirty);

          if (dirty &
          /*modalData*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$7(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, function () {
          if_block = null;
        });
        check_outros();
      }
    },
    i: function i(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },
    o: function o(local) {
      transition_out(if_block);
      current = false;
    },
    d: function d(detaching) {
      if (if_block) if_block.d(detaching);
      if (detaching) detach(if_block_anchor);
    }
  };
}

function lockScroll() {
  window.scrollTo(0, 0);
}

function instance$9($$self, $$props, $$invalidate) {
  var _$$props$module = $$props.module,
      module = _$$props$module === void 0 ? {
    heading: "",
    description: "",
    wallets: []
  } : _$$props$module;
  var modalData;
  var showWalletDefinition;
  var walletAlreadyInstalled;
  var installMessage;
  var selectedWalletModule;

  var _get_store_value2 = get_store_value(app),
      mobileDevice = _get_store_value2.mobileDevice,
      os = _get_store_value2.os;

  var _module = module,
      heading = _module.heading,
      description = _module.description,
      explanation = _module.explanation,
      wallets = _module.wallets;
  var primaryWallets;
  var secondaryWallets;
  var loadingWallet = undefined;
  var showingAllWalletModules = false;

  var showAllWallets = function showAllWallets() {
    return $$invalidate(6, showingAllWalletModules = true);
  };

  var originalOverflowValue;
  onMount(function () {
    originalOverflowValue = window.document.body.style.overflow;
    window.document.body.style.overflow = "hidden";
    window.addEventListener("scroll", lockScroll);
  });
  onDestroy(function () {
    window.removeEventListener("scroll", lockScroll);
    window.document.body.style.overflow = originalOverflowValue;
  });
  renderWalletSelect();

  function renderWalletSelect() {
    return _renderWalletSelect.apply(this, arguments);
  }

  function _renderWalletSelect() {
    _renderWalletSelect = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var appState, deviceWallets, _module2;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              appState = get_store_value(app);
              _context3.next = 3;
              return wallets;

            case 3:
              wallets = _context3.sent;
              deviceWallets = wallets.filter(function (wallet) {
                return wallet[mobileDevice ? "mobile" : "desktop"];
              }).filter(function (wallet) {
                var _wallet$osExclusions = wallet.osExclusions,
                    osExclusions = _wallet$osExclusions === void 0 ? [] : _wallet$osExclusions;
                return !osExclusions.includes(os);
              });

              if (deviceWallets.find(function (wallet) {
                return wallet.preferred;
              })) {
                // if preferred wallets, then split in to preferred and not preferred
                primaryWallets = deviceWallets.filter(function (wallet) {
                  return wallet.preferred;
                });
                secondaryWallets = deviceWallets.filter(function (wallet) {
                  return !wallet.preferred;
                });
              } else {
                // otherwise make the first 4 wallets preferred
                primaryWallets = deviceWallets.slice(0, 4);
                secondaryWallets = deviceWallets.length > 4 ? deviceWallets.slice(4) : undefined;
              }

              if (!appState.autoSelectWallet) {
                _context3.next = 12;
                break;
              }

              _module2 = deviceWallets.find(function (m) {
                return m.name === appState.autoSelectWallet;
              });
              app.update(function (store) {
                return _objectSpread(_objectSpread({}, store), {}, {
                  autoSelectWallet: ""
                });
              });

              if (!_module2) {
                _context3.next = 12;
                break;
              }

              handleWalletSelect(_module2, true);
              return _context3.abrupt("return");

            case 12:
              $$invalidate(0, modalData = {
                heading: heading,
                description: description,
                explanation: explanation,
                primaryWallets: primaryWallets,
                secondaryWallets: secondaryWallets
              });
              app.update(function (store) {
                return _objectSpread(_objectSpread({}, store), {}, {
                  walletSelectDisplayedUI: true
                });
              });

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _renderWalletSelect.apply(this, arguments);
  }

  function handleWalletSelect(_x4, _x5) {
    return _handleWalletSelect.apply(this, arguments);
  }

  function _handleWalletSelect() {
    _handleWalletSelect = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(module, autoSelected) {
      var currentWalletInterface, _yield$module$wallet, provider, selectedWalletInterface, instance;

      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              currentWalletInterface = get_store_value(walletInterface);

              if (!(currentWalletInterface && currentWalletInterface.name === module.name)) {
                _context4.next = 4;
                break;
              }

              finish({
                completed: true
              });
              return _context4.abrupt("return");

            case 4:
              $$invalidate(5, loadingWallet = module.name);
              _context4.next = 7;
              return module.wallet({
                getProviderName: getProviderName,
                createLegacyProviderInterface: createLegacyProviderInterface,
                createModernProviderInterface: createModernProviderInterface,
                BigNumber: bignumber_js__WEBPACK_IMPORTED_MODULE_1___default.a,
                getNetwork: getNetwork,
                getAddress: getAddress,
                getBalance: getBalance,
                resetWalletState: resetWalletState,
                networkName: networkName
              });

            case 7:
              _yield$module$wallet = _context4.sent;
              provider = _yield$module$wallet.provider;
              selectedWalletInterface = _yield$module$wallet["interface"];
              instance = _yield$module$wallet.instance;
              $$invalidate(5, loadingWallet = undefined); // if no interface then the user does not have the wallet they selected installed or available

              if (selectedWalletInterface) {
                _context4.next = 18;
                break;
              }

              $$invalidate(4, selectedWalletModule = module);
              $$invalidate(2, walletAlreadyInstalled = provider && getProviderName(provider));
              $$invalidate(3, installMessage = module.installMessage && module.installMessage({
                currentWallet: walletAlreadyInstalled,
                selectedWallet: selectedWalletModule.name
              })); // if it was autoSelected then we need to add modalData to show the modal

              if (autoSelected) {
                $$invalidate(0, modalData = {
                  heading: heading,
                  description: description,
                  explanation: explanation,
                  primaryWallets: primaryWallets,
                  secondaryWallets: secondaryWallets
                });
                app.update(function (store) {
                  return _objectSpread(_objectSpread({}, store), {}, {
                    walletSelectDisplayedUI: true
                  });
                });
              }

              return _context4.abrupt("return");

            case 18:
              walletInterface.update(function (currentInterface) {
                if (currentInterface && currentInterface.disconnect) {
                  currentInterface.disconnect();
                }

                return selectedWalletInterface;
              });
              wallet.set({
                provider: provider,
                instance: instance,
                dashboard: selectedWalletInterface.dashboard,
                name: module.name,
                connect: selectedWalletInterface.connect,
                type: module.type
              });
              finish({
                completed: true
              });

            case 21:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _handleWalletSelect.apply(this, arguments);
  }

  function finish(options) {
    $$invalidate(0, modalData = null);
    app.update(function (store) {
      return _objectSpread(_objectSpread({}, store), {}, {
        walletSelectInProgress: false,
        walletSelectCompleted: options.completed
      });
    });
  }

  var click_handler = function click_handler() {
    return $$invalidate(1, showWalletDefinition = !showWalletDefinition);
  };

  var func = function func() {
    return finish({
      completed: false
    });
  };

  var func_1 = function func_1() {
    $$invalidate(4, selectedWalletModule = null);
    $$invalidate(2, walletAlreadyInstalled = null);
  };

  var func_2 = function func_2() {
    return finish({
      completed: false
    });
  };

  $$self.$set = function ($$props) {
    if ("module" in $$props) $$invalidate(11, module = $$props.module);
  };

  return [modalData, showWalletDefinition, walletAlreadyInstalled, installMessage, selectedWalletModule, loadingWallet, showingAllWalletModules, mobileDevice, showAllWallets, handleWalletSelect, finish, module, wallets, primaryWallets, secondaryWallets, originalOverflowValue, os, heading, description, explanation, renderWalletSelect, click_handler, func, func_1, func_2];
}

var WalletSelect = /*#__PURE__*/function (_SvelteComponent10) {
  _inherits(WalletSelect, _SvelteComponent10);

  var _super10 = _createSuper(WalletSelect);

  function WalletSelect(options) {
    var _this10;

    _classCallCheck(this, WalletSelect);

    _this10 = _super10.call(this);
    if (!document.getElementById("svelte-rj3fpa-style")) add_css$9();
    init(_assertThisInitialized(_this10), options, instance$9, create_fragment$9, safe_not_equal, {
      module: 11
    });
    return _this10;
  }

  return WalletSelect;
}(SvelteComponent);
/* src/views/WalletCheck.svelte generated by Svelte v3.22.2 */


function add_css$a() {
  var style = element("style");
  style.id = "svelte-1q3jfyy-style";
  style.textContent = "p.svelte-1q3jfyy{font-size:0.889em;font-family:inherit;margin:1em 0}span.svelte-1q3jfyy{color:#e2504a;font-size:0.889em;font-family:inherit;display:block;margin-bottom:0.75em;padding:0.5em;border:1px solid #e2504a;border-radius:5px}div.svelte-1q3jfyy{display:flex;justify-content:space-between}section.svelte-1q3jfyy{display:flex;justify-content:center;flex-direction:column;align-items:center;margin-bottom:1rem}";
  append(document.head, style);
} // (234:0) {#if loadingModal}


function create_if_block_6(ctx) {
  var current;
  var modal = new Modal({
    props: {
      closeable: false,
      $$slots: {
        "default": [create_default_slot_4]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  return {
    c: function c() {
      create_component(modal.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(modal, target, anchor);
      current = true;
    },
    i: function i(local) {
      if (current) return;
      transition_in(modal.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(modal.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(modal, detaching);
    }
  };
} // (235:2) <Modal closeable={false}>


function create_default_slot_4(ctx) {
  var current;
  var spinner = new Spinner({
    props: {
      description: "Checking wallet"
    }
  });
  return {
    c: function c() {
      create_component(spinner.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(spinner, target, anchor);
      current = true;
    },
    p: noop,
    i: function i(local) {
      if (current) return;
      transition_in(spinner.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(spinner.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(spinner, detaching);
    }
  };
} // (240:0) {#if activeModal}


function create_if_block$8(ctx) {
  var current;
  var modal = new Modal({
    props: {
      closeModal:
      /*func_1*/
      ctx[23],
      $$slots: {
        "default": [create_default_slot$3]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  return {
    c: function c() {
      create_component(modal.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(modal, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var modal_changes = {};

      if (dirty &
      /*$$scope, loading, errorMsg, activeModal, $app*/
      16777239) {
        modal_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      modal.$set(modal_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(modal.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(modal.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(modal, detaching);
    }
  };
} // (246:4) {#if errorMsg}


function create_if_block_5(ctx) {
  var span;
  var t;
  var span_intro;
  return {
    c: function c() {
      span = element("span");
      t = text(
      /*errorMsg*/
      ctx[1]);
      attr(span, "class", "bn-onboard-custom bn-onboard-prepare-error svelte-1q3jfyy");
      toggle_class(span, "bn-onboard-dark-mode-background",
      /*$app*/
      ctx[4].darkMode);
    },
    m: function m(target, anchor) {
      insert(target, span, anchor);
      append(span, t);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*errorMsg*/
      2) set_data(t,
      /*errorMsg*/
      ctx[1]);

      if (dirty &
      /*$app*/
      16) {
        toggle_class(span, "bn-onboard-dark-mode-background",
        /*$app*/
        ctx[4].darkMode);
      }
    },
    i: function i(local) {
      if (!span_intro) {
        add_render_callback(function () {
          span_intro = create_in_transition(span, fade, {});
          span_intro.start();
        });
      }
    },
    o: noop,
    d: function d(detaching) {
      if (detaching) detach(span);
    }
  };
} // (255:4) {#if activeModal.html}


function create_if_block_4(ctx) {
  var section;
  var raw_value =
  /*activeModal*/
  ctx[0].html + "";
  return {
    c: function c() {
      section = element("section");
      attr(section, "class", "svelte-1q3jfyy");
    },
    m: function m(target, anchor) {
      insert(target, section, anchor);
      section.innerHTML = raw_value;
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*activeModal*/
      1 && raw_value !== (raw_value =
      /*activeModal*/
      ctx[0].html + "")) section.innerHTML = raw_value;
    },
    d: function d(detaching) {
      if (detaching) detach(section);
    }
  };
} // (262:6) {#if activeModal.button}


function create_if_block_3$1(ctx) {
  var current;
  var button = new Button({
    props: {
      onclick:
      /*activeModal*/
      ctx[0].button.onclick,
      $$slots: {
        "default": [create_default_slot_3]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  return {
    c: function c() {
      create_component(button.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(button, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var button_changes = {};
      if (dirty &
      /*activeModal*/
      1) button_changes.onclick =
      /*activeModal*/
      ctx[0].button.onclick;

      if (dirty &
      /*$$scope, activeModal*/
      16777217) {
        button_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button.$set(button_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(button, detaching);
    }
  };
} // (263:8) <Button onclick={activeModal.button.onclick}>


function create_default_slot_3(ctx) {
  var t_value =
  /*activeModal*/
  ctx[0].button.text + "";
  var t;
  return {
    c: function c() {
      t = text(t_value);
    },
    m: function m(target, anchor) {
      insert(target, t, anchor);
    },
    p: function p(ctx, dirty) {
      if (dirty &
      /*activeModal*/
      1 && t_value !== (t_value =
      /*activeModal*/
      ctx[0].button.text + "")) set_data(t, t_value);
    },
    d: function d(detaching) {
      if (detaching) detach(t);
    }
  };
} // (269:6) {:else}


function create_else_block$4(ctx) {
  var div;
  return {
    c: function c() {
      div = element("div");
      attr(div, "class", "svelte-1q3jfyy");
    },
    m: function m(target, anchor) {
      insert(target, div, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function d(detaching) {
      if (detaching) detach(div);
    }
  };
} // (267:6) {#if errorMsg}


function create_if_block_2$2(ctx) {
  var current;
  var button = new Button({
    props: {
      onclick:
      /*doAction*/
      ctx[5],
      $$slots: {
        "default": [create_default_slot_2]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  return {
    c: function c() {
      create_component(button.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(button, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var button_changes = {};

      if (dirty &
      /*$$scope*/
      16777216) {
        button_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button.$set(button_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(button, detaching);
    }
  };
} // (268:8) <Button onclick={doAction}>


function create_default_slot_2(ctx) {
  var t;
  return {
    c: function c() {
      t = text("Try Again");
    },
    m: function m(target, anchor) {
      insert(target, t, anchor);
    },
    d: function d(detaching) {
      if (detaching) detach(t);
    }
  };
} // (272:6) {#if loading}


function create_if_block_1$4(ctx) {
  var current;
  var spinner = new Spinner({});
  return {
    c: function c() {
      create_component(spinner.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(spinner, target, anchor);
      current = true;
    },
    i: function i(local) {
      if (current) return;
      transition_in(spinner.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(spinner.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(spinner, detaching);
    }
  };
} // (275:6) <Button onclick={() => handleExit(false)}>


function create_default_slot_1$2(ctx) {
  var t;
  return {
    c: function c() {
      t = text("Dismiss");
    },
    m: function m(target, anchor) {
      insert(target, t, anchor);
    },
    d: function d(detaching) {
      if (detaching) detach(t);
    }
  };
} // (241:2) <Modal closeModal={() => handleExit()}>


function create_default_slot$3(ctx) {
  var t0;

  var _p3;

  var raw_value =
  /*activeModal*/
  ctx[0].description + "";
  var t1;
  var t2;
  var t3;
  var div;
  var t4;
  var current_block_type_index;
  var if_block3;
  var t5;
  var t6;
  var current;
  var modalheader = new ModalHeader({
    props: {
      icon:
      /*activeModal*/
      ctx[0].icon,
      heading:
      /*activeModal*/
      ctx[0].heading
    }
  });
  var if_block0 =
  /*errorMsg*/
  ctx[1] && create_if_block_5(ctx);
  var if_block1 =
  /*activeModal*/
  ctx[0].html && create_if_block_4(ctx);
  var if_block2 =
  /*activeModal*/
  ctx[0].button && create_if_block_3$1(ctx);
  var if_block_creators = [create_if_block_2$2, create_else_block$4];
  var if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*errorMsg*/
    ctx[1]) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(ctx);
  if_block3 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  var if_block4 =
  /*loading*/
  ctx[2] && create_if_block_1$4();
  var button = new Button({
    props: {
      onclick:
      /*func*/
      ctx[22],
      $$slots: {
        "default": [create_default_slot_1$2]
      },
      $$scope: {
        ctx: ctx
      }
    }
  });
  return {
    c: function c() {
      create_component(modalheader.$$.fragment);
      t0 = space();
      _p3 = element("p");
      t1 = space();
      if (if_block0) if_block0.c();
      t2 = space();
      if (if_block1) if_block1.c();
      t3 = space();
      div = element("div");
      if (if_block2) if_block2.c();
      t4 = space();
      if_block3.c();
      t5 = space();
      if (if_block4) if_block4.c();
      t6 = space();
      create_component(button.$$.fragment);
      attr(_p3, "class", "bn-onboard-custom bn-onboard-prepare-description svelte-1q3jfyy");
      attr(div, "class", "bn-onboard-custom bn-onboard-prepare-button-container svelte-1q3jfyy");
    },
    m: function m(target, anchor) {
      mount_component(modalheader, target, anchor);
      insert(target, t0, anchor);
      insert(target, _p3, anchor);
      _p3.innerHTML = raw_value;
      insert(target, t1, anchor);
      if (if_block0) if_block0.m(target, anchor);
      insert(target, t2, anchor);
      if (if_block1) if_block1.m(target, anchor);
      insert(target, t3, anchor);
      insert(target, div, anchor);
      if (if_block2) if_block2.m(div, null);
      append(div, t4);
      if_blocks[current_block_type_index].m(div, null);
      append(div, t5);
      if (if_block4) if_block4.m(div, null);
      append(div, t6);
      mount_component(button, div, null);
      current = true;
    },
    p: function p(ctx, dirty) {
      var modalheader_changes = {};
      if (dirty &
      /*activeModal*/
      1) modalheader_changes.icon =
      /*activeModal*/
      ctx[0].icon;
      if (dirty &
      /*activeModal*/
      1) modalheader_changes.heading =
      /*activeModal*/
      ctx[0].heading;
      modalheader.$set(modalheader_changes);
      if ((!current || dirty &
      /*activeModal*/
      1) && raw_value !== (raw_value =
      /*activeModal*/
      ctx[0].description + "")) _p3.innerHTML = raw_value;

      if (
      /*errorMsg*/
      ctx[1]) {
        if (if_block0) {
          if_block0.p(ctx, dirty);

          if (dirty &
          /*errorMsg*/
          2) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_5(ctx);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t2.parentNode, t2);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }

      if (
      /*activeModal*/
      ctx[0].html) {
        if (if_block1) {
          if_block1.p(ctx, dirty);
        } else {
          if_block1 = create_if_block_4(ctx);
          if_block1.c();
          if_block1.m(t3.parentNode, t3);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }

      if (
      /*activeModal*/
      ctx[0].button) {
        if (if_block2) {
          if_block2.p(ctx, dirty);

          if (dirty &
          /*activeModal*/
          1) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block_3$1(ctx);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(div, t4);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, function () {
          if_block2 = null;
        });
        check_outros();
      }

      var previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, function () {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block3 = if_blocks[current_block_type_index];

        if (!if_block3) {
          if_block3 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block3.c();
        }

        transition_in(if_block3, 1);
        if_block3.m(div, t5);
      }

      if (
      /*loading*/
      ctx[2]) {
        if (if_block4) {
          if (dirty &
          /*loading*/
          4) {
            transition_in(if_block4, 1);
          }
        } else {
          if_block4 = create_if_block_1$4();
          if_block4.c();
          transition_in(if_block4, 1);
          if_block4.m(div, t6);
        }
      } else if (if_block4) {
        group_outros();
        transition_out(if_block4, 1, 1, function () {
          if_block4 = null;
        });
        check_outros();
      }

      var button_changes = {};

      if (dirty &
      /*$$scope*/
      16777216) {
        button_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button.$set(button_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(modalheader.$$.fragment, local);
      transition_in(if_block0);
      transition_in(if_block2);
      transition_in(if_block3);
      transition_in(if_block4);
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(modalheader.$$.fragment, local);
      transition_out(if_block2);
      transition_out(if_block3);
      transition_out(if_block4);
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(modalheader, detaching);
      if (detaching) detach(t0);
      if (detaching) detach(_p3);
      if (detaching) detach(t1);
      if (if_block0) if_block0.d(detaching);
      if (detaching) detach(t2);
      if (if_block1) if_block1.d(detaching);
      if (detaching) detach(t3);
      if (detaching) detach(div);
      if (if_block2) if_block2.d();
      if_blocks[current_block_type_index].d();
      if (if_block4) if_block4.d();
      destroy_component(button);
    }
  };
}

function create_fragment$a(ctx) {
  var t;
  var if_block1_anchor;
  var current;
  var if_block0 =
  /*loadingModal*/
  ctx[3] && create_if_block_6(ctx);
  var if_block1 =
  /*activeModal*/
  ctx[0] && create_if_block$8(ctx);
  return {
    c: function c() {
      if (if_block0) if_block0.c();
      t = space();
      if (if_block1) if_block1.c();
      if_block1_anchor = empty();
    },
    m: function m(target, anchor) {
      if (if_block0) if_block0.m(target, anchor);
      insert(target, t, anchor);
      if (if_block1) if_block1.m(target, anchor);
      insert(target, if_block1_anchor, anchor);
      current = true;
    },
    p: function p(ctx, _ref30) {
      var _ref31 = _slicedToArray(_ref30, 1),
          dirty = _ref31[0];

      if (
      /*loadingModal*/
      ctx[3]) {
        if (if_block0) {
          if (dirty &
          /*loadingModal*/
          8) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_6(ctx);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t.parentNode, t);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, function () {
          if_block0 = null;
        });
        check_outros();
      }

      if (
      /*activeModal*/
      ctx[0]) {
        if (if_block1) {
          if_block1.p(ctx, dirty);

          if (dirty &
          /*activeModal*/
          1) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block$8(ctx);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, function () {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i: function i(local) {
      if (current) return;
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o: function o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d: function d(detaching) {
      if (if_block0) if_block0.d(detaching);
      if (detaching) detach(t);
      if (if_block1) if_block1.d(detaching);
      if (detaching) detach(if_block1_anchor);
    }
  };
}

function lockScroll$1() {
  window.scrollTo(0, 0);
}

function isCheckModal(val) {
  return val.heading !== undefined;
}

function instance$a($$self, $$props, $$invalidate) {
  var $app;
  component_subscribe($$self, app, function ($$value) {
    return $$invalidate(4, $app = $$value);
  });
  var walletSelect = $$props.walletSelect;
  var modules = $$props.modules;
  var blocknative = getBlocknative();
  var currentState;
  var activeModal = undefined;
  var currentModule = undefined;
  var errorMsg;
  var pollingInterval;
  var checkingModule = false;
  var actionResolved = undefined;
  var loading = false;
  var loadingModal = false;
  var unsubscribe = walletInterface.subscribe(function (currentInterface) {
    if (currentInterface === null) {
      handleExit();
      unsubscribe();
    }
  });
  var originalOverflowValue;
  var unsubscribeCurrentState = state.subscribe(function (store) {
    return currentState = store;
  });
  onMount(function () {
    originalOverflowValue = window.document.body.style.overflow;
    window.document.body.style.overflow = "hidden";
    window.addEventListener("scroll", lockScroll$1);
  });
  onDestroy(function () {
    unsubscribeCurrentState();
    window.removeEventListener("scroll", lockScroll$1);
    window.document.body.style.overflow = originalOverflowValue;
  });

  function renderModule() {
    return _renderModule.apply(this, arguments);
  }

  function _renderModule() {
    _renderModule = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
      var checkModules, currentWallet;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              $$invalidate(12, checkingModule = true);
              checkModules = modules || get_store_value(app).checkModules;

              if (!isPromise(checkModules)) {
                _context7.next = 8;
                break;
              }

              _context7.next = 5;
              return checkModules;

            case 5:
              checkModules = _context7.sent;
              checkModules.forEach(validateWalletCheckModule);
              app.update(function (store) {
                return _objectSpread(_objectSpread({}, store), {}, {
                  checkModules: checkModules
                });
              });

            case 8:
              currentWallet = get_store_value(wallet).name; // loop through and run each module to check if a modal needs to be shown

              runModules(checkModules).then(function (result) {
                // no result then user has passed all conditions
                if (!result.modal) {
                  blocknative && blocknative.event({
                    categoryCode: "onboard",
                    eventCode: "onboardingCompleted"
                  });
                  handleExit(true);
                  return;
                } // set that UI has been displayed, so that timeouts can be added for UI transitions


                app.update(function (store) {
                  return _objectSpread(_objectSpread({}, store), {}, {
                    walletCheckDisplayedUI: true
                  });
                });
                $$invalidate(0, activeModal = result.modal);
                currentModule = result.module; // log the event code for this module

                blocknative && blocknative.event({
                  eventCode: activeModal.eventCode,
                  categoryCode: "onboard"
                }); // run any actions that module require as part of this step

                if (activeModal.action) {
                  doAction();
                } // poll to automatically to check if condition has been met


                pollingInterval = setInterval( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                  var _result;

                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          if (!currentModule) {
                            _context6.next = 5;
                            break;
                          }

                          _context6.next = 3;
                          return invalidState(currentModule, get_store_value(state));

                        case 3:
                          _result = _context6.sent;

                          if (!_result && actionResolved !== false) {
                            resetState(); // delayed for animations

                            setTimeout(function () {
                              $$invalidate(12, checkingModule = false);
                            }, 250);
                          } else {
                            $$invalidate(0, activeModal = _result && _result.modal ? _result.modal : activeModal);
                          }

                        case 5:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                })), 100);
              });

            case 10:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));
    return _renderModule.apply(this, arguments);
  }

  function doAction() {
    actionResolved = false;
    $$invalidate(2, loading = true);
    activeModal && activeModal.action && activeModal.action().then(function () {
      actionResolved = true;
      $$invalidate(2, loading = false);
    })["catch"](function (err) {
      $$invalidate(1, errorMsg = err.message);
      $$invalidate(2, loading = false);
    });
  }

  function handleExit(completed) {
    resetState();
    app.update(function (store) {
      return _objectSpread(_objectSpread({}, store), {}, {
        walletCheckInProgress: false,
        walletCheckCompleted: completed ? completed : false,
        accountSelectInProgress: false
      });
    });
  }

  function resetState() {
    clearInterval(pollingInterval);
    $$invalidate(1, errorMsg = "");
    actionResolved = undefined;
    $$invalidate(0, activeModal = undefined);
    currentModule = undefined;
  }

  function runModules(modules) {
    return new Promise( /*#__PURE__*/function () {
      var _ref32 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(resolve) {
        var _iterator, _step, module, result;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _iterator = _createForOfIteratorHelper(modules);
                _context5.prev = 1;

                _iterator.s();

              case 3:
                if ((_step = _iterator.n()).done) {
                  _context5.next = 12;
                  break;
                }

                module = _step.value;
                _context5.next = 7;
                return invalidState(module, currentState);

              case 7:
                result = _context5.sent;

                if (!result) {
                  _context5.next = 10;
                  break;
                }

                return _context5.abrupt("return", resolve(result));

              case 10:
                _context5.next = 3;
                break;

              case 12:
                _context5.next = 17;
                break;

              case 14:
                _context5.prev = 14;
                _context5.t0 = _context5["catch"](1);

                _iterator.e(_context5.t0);

              case 17:
                _context5.prev = 17;

                _iterator.f();

                return _context5.finish(17);

              case 20:
                return _context5.abrupt("return", resolve({
                  modal: undefined,
                  module: undefined
                }));

              case 21:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[1, 14, 17, 20]]);
      }));

      return function (_x6) {
        return _ref32.apply(this, arguments);
      };
    }());
  }

  function invalidState(_x7, _x8) {
    return _invalidState.apply(this, arguments);
  }

  function _invalidState() {
    _invalidState = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(module, state) {
      var result, modal;
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              result = module(_objectSpread(_objectSpread({}, state), {}, {
                BigNumber: bignumber_js__WEBPACK_IMPORTED_MODULE_1___default.a,
                walletSelect: walletSelect,
                exit: handleExit,
                wallet: get_store_value(wallet),
                stateSyncStatus: stateSyncStatus,
                stateStore: {
                  address: address,
                  network: network,
                  balance: balance
                }
              }));

              if (!result) {
                _context8.next = 12;
                break;
              }

              if (!isCheckModal(result)) {
                _context8.next = 7;
                break;
              }

              validateModal(result);
              return _context8.abrupt("return", {
                module: module,
                modal: result
              });

            case 7:
              _context8.next = 9;
              return new Promise(function (resolve) {
                var completed = false;
                result.then(function (res) {
                  $$invalidate(3, loadingModal = false);
                  completed = true;
                  modal = res;
                  resolve();
                });
                setTimeout(function () {
                  if (!completed) {
                    $$invalidate(3, loadingModal = true);
                  }
                }, 650);
              });

            case 9:
              if (!modal) {
                _context8.next = 12;
                break;
              }

              validateModal(modal);
              return _context8.abrupt("return", {
                module: module,
                modal: modal
              });

            case 12:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));
    return _invalidState.apply(this, arguments);
  }

  var func = function func() {
    return handleExit(false);
  };

  var func_1 = function func_1() {
    return handleExit();
  };

  $$self.$set = function ($$props) {
    if ("walletSelect" in $$props) $$invalidate(7, walletSelect = $$props.walletSelect);
    if ("modules" in $$props) $$invalidate(8, modules = $$props.modules);
  };

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*activeModal, checkingModule*/
    4097) {
      // recheck modules if below conditions
      if (!activeModal && !checkingModule) {
        renderModule();
      }
    }
  };

  return [activeModal, errorMsg, loading, loadingModal, $app, doAction, handleExit, walletSelect, modules, currentState, currentModule, pollingInterval, checkingModule, actionResolved, originalOverflowValue, blocknative, unsubscribe, unsubscribeCurrentState, renderModule, resetState, runModules, invalidState, func, func_1];
}

var WalletCheck = /*#__PURE__*/function (_SvelteComponent11) {
  _inherits(WalletCheck, _SvelteComponent11);

  var _super11 = _createSuper(WalletCheck);

  function WalletCheck(options) {
    var _this11;

    _classCallCheck(this, WalletCheck);

    _this11 = _super11.call(this);
    if (!document.getElementById("svelte-1q3jfyy-style")) add_css$a();
    init(_assertThisInitialized(_this11), options, instance$a, create_fragment$a, safe_not_equal, {
      walletSelect: 7,
      modules: 8
    });
    return _this11;
  }

  return WalletCheck;
}(SvelteComponent);

var usbIcon = "\n\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\" width=\"18px\" height=\"18px\">\n\t<g>\n\t<g>\n\t<path fill=\"currentColor\" d=\"M314.468,157.197v103.942h31.553v2.312c0,9.888-4.815,19.205-12.881,24.924l-56.652,40.171V109.939h44.546L257.634,0\n\t\tl-66.527,109.939h45.404V358.25l-56.652-40.171c-8.066-5.719-12.881-15.037-12.881-24.924v-8.489\n\t\tc20.19-7.815,34.552-27.427,34.552-50.342c0-29.759-24.211-53.97-53.97-53.97c-29.76,0-53.97,24.211-53.97,53.97\n\t\tc0,22.482,13.821,41.789,33.41,49.891v8.94c0,22.824,11.116,44.333,29.735,57.536l66.895,47.434\n\t\tc4.255,3.016,7.593,7.04,9.809,11.615c-17.713,8.862-29.909,27.173-29.909,48.29c0,29.76,24.211,53.97,53.97,53.97\n\t\tc29.759,0,53.97-24.211,53.97-53.97c0-23.078-14.564-42.81-34.981-50.511v-14.174c0-9.888,4.815-19.205,12.881-24.924\n\t\tl66.895-47.434c18.619-13.202,29.735-34.711,29.735-57.536v-2.312h32.411V157.197H314.468z M147.56,248.316\n\t\tc-7.716,0-13.992-6.277-13.992-13.992c0-7.716,6.276-13.992,13.992-13.992c7.716,0,13.992,6.276,13.992,13.992\n\t\tC161.552,242.04,155.276,248.316,147.56,248.316z M257.499,472.022c-7.716,0-13.992-6.276-13.992-13.992\n\t\tc0-7.716,6.277-13.992,13.992-13.992c7.716,0,13.992,6.276,13.992,13.992C271.491,465.746,265.215,472.022,257.499,472.022z\n\t\tM378.432,221.161h-23.987v-23.987h23.987V221.161z\"/>\n\t</g>\n\t</g>\n\t<g>\n\t</g>\n\t<g>\n\t</g>\n\t<g>\n\t</g>\n\t<g>\n\t</g>\n\t<g>\n\t</g>\n\t<g>\n\t</g>\n\t<g>\n\t</g>\n\t<g>\n\t</g>\n\t<g>\n\t</g>\n\t<g>\n\t</g>\n\t<g>\n\t</g>\n\t<g>\n\t</g>\n\t<g>\n\t</g>\n\t<g>\n\t</g>\n\t<g>\n\t</g>\n\t</svg>\t  \n";
var networkIcon = "\n\t<svg height=\"18\" viewBox=\"0 0 18 18\" width=\"18\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t<path d=\"m13.375 28c-1.86075 0-3.375-1.51425-3.375-3.375s1.51425-3.375 3.375-3.375 3.375 1.51425 3.375 3.375-1.51425 3.375-3.375 3.375zm0-4.5c-.619875 0-1.125.504-1.125 1.125s.505125 1.125 1.125 1.125 1.125-.504 1.125-1.125-.505125-1.125-1.125-1.125zm0-6.75c-1.86075 0-3.375-1.51425-3.375-3.375s1.51425-3.375 3.375-3.375 3.375 1.51425 3.375 3.375-1.51425 3.375-3.375 3.375zm0-4.5c-.619875 0-1.125.505125-1.125 1.125s.505125 1.125 1.125 1.125 1.125-.505125 1.125-1.125-.505125-1.125-1.125-1.125zm11.25 4.5c-1.86075 0-3.375-1.51425-3.375-3.375s1.51425-3.375 3.375-3.375 3.375 1.51425 3.375 3.375-1.51425 3.375-3.375 3.375zm0-4.5c-.621 0-1.125.505125-1.125 1.125s.504 1.125 1.125 1.125 1.125-.505125 1.125-1.125-.504-1.125-1.125-1.125zm-11.25 10.117125h-.014625c-.615375-.007875-1.110375-.50175-1.110375-1.117125 0-1.35675.898875-3.375 3.375-3.375h6.75c.50625-.0135 1.125-.219375 1.125-1.125v-1.125c0-.621.502875-1.125 1.125-1.125s1.125.504 1.125 1.125v1.125c0 2.476125-2.01825 3.375-3.375 3.375h-6.75c-.905625 0-1.1115.61875-1.125 1.1385-.01575.610875-.51525 1.103625-1.125 1.103625zm0 1.132875c-.621 0-1.125-.502875-1.125-1.125v-6.75c0-.621.504-1.125 1.125-1.125s1.125.504 1.125 1.125v6.75c0 .622125-.504 1.125-1.125 1.125z\" fill=\"currentColor\" transform=\"translate(-10 -10)\"/>\n\t</svg>\n";
var connectIcon = "\n\t<svg height=\"14\" viewBox=\"0 0 18 14\" width=\"18\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t<g fill=\"currentColor\">\n\t\t\t<path d=\"m10.29375 4.05351563c0-.04921875 0-.09140625 0-.13007813 0-1.0546875 0-2.109375 0-3.1640625 0-.43945312.3480469-.76992188.7804688-.7453125.2003906.01054688.3585937.10546875.4992187.24609375.5800781.58359375 1.1566406 1.16367188 1.7367187 1.74023438 1.4695313 1.46953125 2.9390625 2.93906249 4.4050782 4.40859375.1335937.13359375.2425781.27421875.2707031.46757812.0351562.20742188-.0246094.421875-.1652344.58007813-.0246094.028125-.0492187.05273437-.0738281.08085937-2.0601563 2.06367188-4.1203125 4.1238281-6.1804688 6.1875-.2109375.2109375-.4570312.3023438-.7453125.2179688-.2707031-.0808594-.4464843-.2707032-.5132812-.5484375-.0140625-.0738282-.0175781-.1441407-.0140625-.2179688 0-1.0335937 0-2.0707031 0-3.1042969 0-.0386719 0-.08085935 0-.13359372h-5.06953125c-.49570313 0-.80507813-.309375-.80507813-.80859375 0-1.42382813 0-2.84414063 0-4.26796875 0-.49570313.30585938-.8015625.8015625-.8015625h4.93593748z\"/>\n\t\t\t<path d=\"m5.69882812 13.978125h-4.01132812c-.928125 0-1.6875-.8753906-1.6875-1.9511719v-10.06171872c0-1.07578125.75585938-1.95117188 1.6875-1.95117188h4.01132812c.34101563 0 .61523438.31992188.61523438.71015625 0 .39023438-.27421875.71015625-.61523438.71015625h-4.01132812c-.253125 0-.45703125.23554688-.45703125.52734375v10.06171875c0 .2917969.20390625.5273437.45703125.5273437h4.01132812c.34101563 0 .61523438.3199219.61523438.7101563s-.27773438.7171875-.61523438.7171875z\"/>\n\t\t</g>\n\t</svg>\n";
var balanceIcon = "\n\t<svg height=\"18\" viewBox=\"0 0 429 695\" width=\"18\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t<g fill=\"currentColor\" fill-rule=\"evenodd\">\n\t\t\t<path d=\"m0 394 213 126.228516 214-126.228516-214 301z\"/>\n\t\t\t<path d=\"m0 353.962264 213.5-353.962264 213.5 353.962264-213.5 126.037736z\"/>\n\t\t</g>\n\t</svg>\n";
var msgStyles = "\n  display: block;\n  font-size: 0.889em;\n  font-family: inherit;\n  color: inherit;\n  margin-top: 0.5rem;\n";

function accountSelect() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var heading = options.heading,
      description = options.description,
      icon = options.icon;
  var completed = false;
  var loadingAccounts = false;
  var accountsAndBalances = [];

  function checkModule(_x9) {
    return _checkModule.apply(this, arguments);
  }

  function _checkModule() {
    _checkModule = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(stateAndHelpers) {
      var wallet, BigNumber, provider, type, _accounts, deleteWindowProperties, loadMoreAccounts, _accountSelect;

      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              wallet = stateAndHelpers.wallet, BigNumber = stateAndHelpers.BigNumber;
              provider = wallet.provider, type = wallet.type;

              if (!(type === 'hardware' && !completed && !provider.isCustomPath())) {
                _context10.next = 18;
                break;
              }

              if (!(accountsAndBalances.length === 0)) {
                _context10.next = 12;
                break;
              }

              loadingAccounts = true;
              _context10.next = 7;
              return provider.enable();

            case 7:
              _accounts = _context10.sent;
              _context10.next = 10;
              return provider.getBalances(_accounts);

            case 10:
              accountsAndBalances = _context10.sent;
              loadingAccounts = false;

            case 12:
              deleteWindowProperties = function deleteWindowProperties() {
                delete window.accountSelect;
                delete window.loadMoreAccounts;
              };

              loadMoreAccounts = /*#__PURE__*/function () {
                var _ref34 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                  return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) {
                      switch (_context9.prev = _context9.next) {
                        case 0:
                          loadingAccounts = true;
                          _context9.next = 3;
                          return provider.getMoreAccounts();

                        case 3:
                          accountsAndBalances = _context9.sent;
                          loadingAccounts = false;

                        case 5:
                        case "end":
                          return _context9.stop();
                      }
                    }
                  }, _callee9);
                }));

                return function loadMoreAccounts() {
                  return _ref34.apply(this, arguments);
                };
              }();

              _accountSelect = function _accountSelect() {
                var accountIndex = document.getElementById('account-select').selectedIndex;
                provider.setPrimaryAccount(accountsAndBalances[accountIndex].address);
              };

              window.accountSelect = _accountSelect;
              window.loadMoreAccounts = loadMoreAccounts;
              return _context10.abrupt("return", {
                heading: heading || 'Select Account',
                description: description || "Please select which account you would like to use with this Dapp:",
                eventCode: 'accountSelect',
                html: loadingAccounts ? "<div class=\"bn-onboard-custom bn-onboard-loading\">\n              <div class=\"bn-onboard-loading-first\"></div>\n              <div class=\"bn-onboard-loading-second\"></div>\n              <div class=\"bn-onboard-loading-third\"></div>\n            </div>\n            <span style=\"".concat(msgStyles, "\">Loading More Accounts...</span>\n            ") : "\n          <div style=\"display: flex; align-items: center;\">\n            <select id=\"account-select\" onchange=\"window.accountSelect()\" style=\"padding: 0.5rem;\">\n              ".concat(accountsAndBalances.map(function (account) {
                  return "<option>".concat(account.address, " --- ").concat(account.balance != null ? new BigNumber(account.balance).div('1000000000000000000').toFixed(3) : '0', " ETH</option>");
                }), "\n            </select>\n            <button style=\"display: flex; align-items: center; text-align: center; height: 1.5rem; background: transparent; margin: 0 0.25rem; padding: 0 0.5rem; border-radius: 40px; cursor: pointer; color: inherit; border-color: inherit; border-width: 1px; border-style: solid;\" onclick=\"window.loadMoreAccounts()\">Load More</button>\n          </div>\n        "),
                button: {
                  onclick: function onclick() {
                    deleteWindowProperties();
                    completed = true;
                  },
                  text: 'Done'
                },
                icon: icon || usbIcon
              });

            case 18:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));
    return _checkModule.apply(this, arguments);
  }

  checkModule.reset = function () {
    completed = false;
    accountsAndBalances = [];
    loadingAccounts = false;
  };

  return checkModule;
}

var accounts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': accountSelect
});
var derivationPaths = {
  Ledger: [{
    path: "m/44'/60'/0'",
    label: 'Ethereum'
  }, {
    path: "m/44'/60'",
    label: 'Ethereum Ledger Live'
  }],
  Trezor: [{
    path: "m/44'/60'/0'/0",
    label: 'Ethereum'
  }]
};
var styles = "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n";
var baseStyles = "\n  background: inherit;\n  font-size: 0.889em;\n  font-family: inherit;\n  border-width: 1px;\n  border-style: solid;\n  border-color: inherit;\n  border-radius: 40px;\n  margin-top: 0.5rem;\n  padding: 0.55em 1.4em;\n  text-align: center;\n  color: inherit;\n  font-family: inherit;\n  transition: background 150ms ease-in-out;\n  line-height: 1.15;\n";
var buttonStyles = "\n  cursor: pointer;\n";
var selectedStyles = "\n  border: 1px solid #4a90e2;\n";
var errorStyles = "\n  border: 1px solid #e2504a;\n";
var msgStyles$1 = "\n  display: block;\n  font-size: 0.889em;\n  font-family: inherit;\n  color: inherit;\n  margin-top: 0.5rem;\n";
var errorMsgStyles = "\n  color: #e2504a;\n";

function derivationPath() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var heading = options.heading,
      description = options.description,
      icon = options.icon;
  var state = {
    completed: false,
    showCustomInput: false,
    dPath: '',
    loading: false,
    error: ''
  };

  var customInputHtmlString = function customInputHtmlString(error) {
    return "\n      <input \n        id=\"custom-derivation-input\" \n        style=\"".concat(baseStyles + selectedStyles + (error ? errorStyles : ''), "\" \n        type=\"text\" \n        value=\"").concat(state.dPath, "\"\n        placeholder=\"custom derivation path\" \n        onchange=\"window.handleCustomInput(this.value)\" />\n      ");
  };

  function derivationSelectHtmlString(walletName) {
    return "\n      <div id=\"derivation-select\" style=\"".concat(styles, "\">\n        ").concat(derivationPaths[walletName].map(function (derivation) {
      var path = derivation.path,
          label = derivation.label;
      return "\n              <button style=\"".concat(baseStyles + buttonStyles + (state.dPath === path && !state.showCustomInput ? selectedStyles : ''), "\" onclick=\"window.handleDerivationClick(this)\" data-path=\"").concat(path, "\">\n                ").concat(label, " - ").concat(path, "\n              </button>\n            ");
    }).join(' '), "\n        ").concat(state.showCustomInput ? customInputHtmlString(state.error) : "<button style=\"".concat(baseStyles + buttonStyles, "\" onclick=\"window.handleDerivationClick(this)\" data-path=\"custom\">Custom Path</button>"), "\n        ").concat(state.loading ? "<div class=\"bn-onboard-custom bn-onboard-loading\" style=\"margin-top: 1rem;\">\n                <div class=\"bn-onboard-loading-first\"></div>\n                <div class=\"bn-onboard-loading-second\"></div>\n                <div class=\"bn-onboard-loading-third\"></div>\n              </div>\n              <span style=\"".concat(msgStyles$1, "\">Loading Accounts...</span>\n              ") : state.error ? "<span style=\"".concat(msgStyles$1 + errorMsgStyles, "\">").concat(state.error, "</span>") : '', "\n      </div>\n    ");
  }

  function resetState() {
    state.completed = false;
    state.showCustomInput = false;
    state.dPath = '';
    state.loading = false;
    state.error = '';
  }

  function checkModule(stateAndHelpers) {
    var wallet = stateAndHelpers.wallet;

    if (wallet && wallet.type === 'hardware' && !state.completed) {
      var handleCustomInput = function handleCustomInput() {
        var input = document.getElementById('custom-derivation-input');
        state.dPath = input && input.value;
        state.error = '';
      };

      var handleDerivationClick = function handleDerivationClick(button) {
        var selectedPath = button.dataset.path;

        if (selectedPath === 'custom') {
          state.showCustomInput = true;
          setTimeout(function () {
            var input = document.getElementById('custom-derivation-input');
            input && input.focus();
          }, 100);
        } else {
          state.error = '';
          state.showCustomInput = false;
          state.dPath = selectedPath;
        }
      };

      var deleteWindowProperties = function deleteWindowProperties() {
        delete window.handleCustomInput;
        delete window.handleDerivationSelect;
      };

      window.handleCustomInput = handleCustomInput;
      window.handleDerivationClick = handleDerivationClick;
      return {
        heading: heading || 'Hardware Wallet Connect',
        description: description || "Make sure your ".concat(wallet.name, " is plugged in, ").concat(wallet.name === 'Ledger' ? 'and the Ethereum app is open, ' : '', "then select a derivation path to connect your accounts:"),
        eventCode: 'derivationPath',
        html: derivationSelectHtmlString(wallet.name),
        button: {
          text: 'Connect',
          onclick: function () {
            var _onclick = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var path, validPath;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      state.loading = true;
                      path = state.dPath || derivationPaths[wallet.name][0].path;
                      _context11.prev = 2;
                      _context11.next = 5;
                      return wallet.provider.setPath(path, state.showCustomInput);

                    case 5:
                      validPath = _context11.sent;

                      if (validPath) {
                        _context11.next = 10;
                        break;
                      }

                      state.error = "".concat(path, " is not a valid derivation path");
                      state.loading = false;
                      return _context11.abrupt("return");

                    case 10:
                      _context11.next = 17;
                      break;

                    case 12:
                      _context11.prev = 12;
                      _context11.t0 = _context11["catch"](2);
                      state.error = _context11.t0;
                      state.loading = false;
                      return _context11.abrupt("return");

                    case 17:
                      state.error = '';

                      if (wallet.connect) {
                        wallet.connect().then(function () {
                          deleteWindowProperties();
                          state.loading = false;
                          state.completed = true;
                        })["catch"](function (error) {
                          state.error = error.message;
                          state.loading = false;
                        });
                      }

                    case 19:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, null, [[2, 12]]);
            }));

            function onclick() {
              return _onclick.apply(this, arguments);
            }

            return onclick;
          }()
        },
        icon: icon || usbIcon
      };
    }
  }

  checkModule.reset = resetState;
  return checkModule;
}

var derivationPath$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': derivationPath
});
/* src/views/Onboard.svelte generated by Svelte v3.22.2 */

function add_css$b() {
  var style = element("style");
  style.id = "svelte-1pen0yy-style";
  style.textContent = ".bn-onboard-custom.bn-onboard-dark-mode{background:#283944;color:#ffffff}.bn-onboard-custom.bn-onboard-dark-mode-background-hover:hover, .bn-onboard-custom.bn-onboard-dark-mode-background{background:#0e212a}.bn-onboard-clickable{text-decoration:none}.bn-onboard-clickable:hover{cursor:pointer;text-decoration:underline}.bn-onboard-custom.bn-onboard-dark-mode-link{color:#91bced;border-color:#91bced}";
  append(document.head, style);
} // (36:0) {#if $app.walletSelectInProgress}


function create_if_block_2$3(ctx) {
  var current;
  var walletselect = new WalletSelect({
    props: {
      module:
      /*walletSelectModule*/
      ctx[0]
    }
  });
  return {
    c: function c() {
      create_component(walletselect.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(walletselect, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var walletselect_changes = {};
      if (dirty &
      /*walletSelectModule*/
      1) walletselect_changes.module =
      /*walletSelectModule*/
      ctx[0];
      walletselect.$set(walletselect_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(walletselect.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(walletselect.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(walletselect, detaching);
    }
  };
} // (40:0) {#if $app.walletCheckInProgress}


function create_if_block_1$5(ctx) {
  var current;
  var walletcheck = new WalletCheck({
    props: {
      walletSelect:
      /*walletSelect*/
      ctx[1]
    }
  });
  return {
    c: function c() {
      create_component(walletcheck.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(walletcheck, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var walletcheck_changes = {};
      if (dirty &
      /*walletSelect*/
      2) walletcheck_changes.walletSelect =
      /*walletSelect*/
      ctx[1];
      walletcheck.$set(walletcheck_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(walletcheck.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(walletcheck.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(walletcheck, detaching);
    }
  };
} // (44:0) {#if $app.accountSelectInProgress}


function create_if_block$9(ctx) {
  var current;
  var walletcheck = new WalletCheck({
    props: {
      modules: [derivationPath(), accountSelect()]
    }
  });
  return {
    c: function c() {
      create_component(walletcheck.$$.fragment);
    },
    m: function m(target, anchor) {
      mount_component(walletcheck, target, anchor);
      current = true;
    },
    p: noop,
    i: function i(local) {
      if (current) return;
      transition_in(walletcheck.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(walletcheck.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(walletcheck, detaching);
    }
  };
}

function create_fragment$b(ctx) {
  var t0;
  var t1;
  var if_block2_anchor;
  var current;
  var if_block0 =
  /*$app*/
  ctx[2].walletSelectInProgress && create_if_block_2$3(ctx);
  var if_block1 =
  /*$app*/
  ctx[2].walletCheckInProgress && create_if_block_1$5(ctx);
  var if_block2 =
  /*$app*/
  ctx[2].accountSelectInProgress && create_if_block$9();
  return {
    c: function c() {
      if (if_block0) if_block0.c();
      t0 = space();
      if (if_block1) if_block1.c();
      t1 = space();
      if (if_block2) if_block2.c();
      if_block2_anchor = empty();
    },
    m: function m(target, anchor) {
      if (if_block0) if_block0.m(target, anchor);
      insert(target, t0, anchor);
      if (if_block1) if_block1.m(target, anchor);
      insert(target, t1, anchor);
      if (if_block2) if_block2.m(target, anchor);
      insert(target, if_block2_anchor, anchor);
      current = true;
    },
    p: function p(ctx, _ref35) {
      var _ref36 = _slicedToArray(_ref35, 1),
          dirty = _ref36[0];

      if (
      /*$app*/
      ctx[2].walletSelectInProgress) {
        if (if_block0) {
          if_block0.p(ctx, dirty);

          if (dirty &
          /*$app*/
          4) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_2$3(ctx);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t0.parentNode, t0);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, function () {
          if_block0 = null;
        });
        check_outros();
      }

      if (
      /*$app*/
      ctx[2].walletCheckInProgress) {
        if (if_block1) {
          if_block1.p(ctx, dirty);

          if (dirty &
          /*$app*/
          4) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_1$5(ctx);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(t1.parentNode, t1);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, function () {
          if_block1 = null;
        });
        check_outros();
      }

      if (
      /*$app*/
      ctx[2].accountSelectInProgress) {
        if (if_block2) {
          if_block2.p(ctx, dirty);

          if (dirty &
          /*$app*/
          4) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block$9();
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, function () {
          if_block2 = null;
        });
        check_outros();
      }
    },
    i: function i(local) {
      if (current) return;
      transition_in(if_block0);
      transition_in(if_block1);
      transition_in(if_block2);
      current = true;
    },
    o: function o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      transition_out(if_block2);
      current = false;
    },
    d: function d(detaching) {
      if (if_block0) if_block0.d(detaching);
      if (detaching) detach(t0);
      if (if_block1) if_block1.d(detaching);
      if (detaching) detach(t1);
      if (if_block2) if_block2.d(detaching);
      if (detaching) detach(if_block2_anchor);
    }
  };
}

function instance$b($$self, $$props, $$invalidate) {
  var $app;
  component_subscribe($$self, app, function ($$value) {
    return $$invalidate(2, $app = $$value);
  });
  var walletSelectModule = $$props.walletSelectModule;
  var walletSelect = $$props.walletSelect;

  $$self.$set = function ($$props) {
    if ("walletSelectModule" in $$props) $$invalidate(0, walletSelectModule = $$props.walletSelectModule);
    if ("walletSelect" in $$props) $$invalidate(1, walletSelect = $$props.walletSelect);
  };

  return [walletSelectModule, walletSelect, $app];
}

var Onboard = /*#__PURE__*/function (_SvelteComponent12) {
  _inherits(Onboard, _SvelteComponent12);

  var _super12 = _createSuper(Onboard);

  function Onboard(options) {
    var _this12;

    _classCallCheck(this, Onboard);

    _this12 = _super12.call(this);
    if (!document.getElementById("svelte-1pen0yy-style")) add_css$b();
    init(_assertThisInitialized(_this12), options, instance$b, create_fragment$b, safe_not_equal, {
      walletSelectModule: 0,
      walletSelect: 1
    });
    return _this12;
  }

  return Onboard;
}(SvelteComponent);

var version = "1.8.0";
var defaultWalletNames = ['metamask', 'dapper', 'coinbase', 'trust', 'authereum', 'torus', 'opera', 'operaTouch', 'status', 'unilogin'];

function select(wallets, networkId) {
  if (wallets) {
    return Promise.all(wallets.map(function (wallet) {
      if (isWalletInit(wallet)) {
        var walletName = wallet.walletName,
            initParams = _objectWithoutProperties(wallet, ["walletName"]);

        var module = getModule(walletName);

        if (!module) {
          throw new Error("".concat(walletName, " is not a valid walletName."));
        }

        return module && module.then(function (m) {
          return m["default"](_objectSpread(_objectSpread({}, initParams), {}, {
            networkId: networkId
          }));
        });
      }

      return Promise.resolve(wallet);
    }));
  }

  return Promise.all(defaultWalletNames.map(function (walletName) {
    var module = getModule(walletName);

    if (module) {
      return module.then(function (m) {
        return m["default"]({
          networkId: networkId
        });
      });
    }
  }));
}

function getModule(name) {
  switch (name) {
    case 'metamask':
      return __webpack_require__.e(/*! import() */ 16).then(__webpack_require__.bind(null, /*! ./metamask-225bc8a1.js */ "./node_modules/bnc-onboard/dist/esm/metamask-225bc8a1.js"));

    case 'dapper':
      return __webpack_require__.e(/*! import() */ 14).then(__webpack_require__.bind(null, /*! ./dapper-9050b13a.js */ "./node_modules/bnc-onboard/dist/esm/dapper-9050b13a.js"));

    case 'portis':
      return __webpack_require__.e(/*! import() */ 30).then(__webpack_require__.bind(null, /*! ./portis-8f633677.js */ "./node_modules/bnc-onboard/dist/esm/portis-8f633677.js"));

    case 'fortmatic':
      return __webpack_require__.e(/*! import() */ 27).then(__webpack_require__.bind(null, /*! ./fortmatic-91b8612a.js */ "./node_modules/bnc-onboard/dist/esm/fortmatic-91b8612a.js"));

    case 'squarelink':
      return __webpack_require__.e(/*! import() */ 31).then(__webpack_require__.bind(null, /*! ./squarelink-2217b3a9.js */ "./node_modules/bnc-onboard/dist/esm/squarelink-2217b3a9.js"));

    case 'authereum':
      return __webpack_require__.e(/*! import() */ 24).then(__webpack_require__.bind(null, /*! ./authereum-c4b04f19.js */ "./node_modules/bnc-onboard/dist/esm/authereum-c4b04f19.js"));

    case 'trust':
      return __webpack_require__.e(/*! import() */ 20).then(__webpack_require__.bind(null, /*! ./trust-57d5c84b.js */ "./node_modules/bnc-onboard/dist/esm/trust-57d5c84b.js"));

    case 'coinbase':
      return __webpack_require__.e(/*! import() */ 13).then(__webpack_require__.bind(null, /*! ./coinbase-97b1ac47.js */ "./node_modules/bnc-onboard/dist/esm/coinbase-97b1ac47.js"));

    case 'walletConnect':
      return __webpack_require__.e(/*! import() */ 34).then(__webpack_require__.bind(null, /*! ./wallet-connect-67ddf6d7.js */ "./node_modules/bnc-onboard/dist/esm/wallet-connect-67ddf6d7.js"));

    case 'opera':
      return __webpack_require__.e(/*! import() */ 17).then(__webpack_require__.bind(null, /*! ./opera-e0292bed.js */ "./node_modules/bnc-onboard/dist/esm/opera-e0292bed.js"));

    case 'operaTouch':
      return __webpack_require__.e(/*! import() */ 18).then(__webpack_require__.bind(null, /*! ./opera-touch-68ab029b.js */ "./node_modules/bnc-onboard/dist/esm/opera-touch-68ab029b.js"));

    case 'torus':
      return __webpack_require__.e(/*! import() */ 32).then(__webpack_require__.bind(null, /*! ./torus-17977f74.js */ "./node_modules/bnc-onboard/dist/esm/torus-17977f74.js"));

    case 'status':
      return __webpack_require__.e(/*! import() */ 19).then(__webpack_require__.bind(null, /*! ./status-f09721f6.js */ "./node_modules/bnc-onboard/dist/esm/status-f09721f6.js"));

    case 'trezor':
      return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ./trezor-bbf4a423.js */ "./node_modules/bnc-onboard/dist/esm/trezor-bbf4a423.js"));

    case 'ledger':
      return __webpack_require__.e(/*! import() */ 28).then(__webpack_require__.bind(null, /*! ./ledger-f1f06d18.js */ "./node_modules/bnc-onboard/dist/esm/ledger-f1f06d18.js"));

    case 'imToken':
      return __webpack_require__.e(/*! import() */ 15).then(__webpack_require__.bind(null, /*! ./imtoken-84fe0dbe.js */ "./node_modules/bnc-onboard/dist/esm/imtoken-84fe0dbe.js"));

    case 'unilogin':
      return __webpack_require__.e(/*! import() */ 33).then(__webpack_require__.bind(null, /*! ./unilogin-fc5d8386.js */ "./node_modules/bnc-onboard/dist/esm/unilogin-fc5d8386.js"));

    default:
      return;
  }
}

var defaultChecks = ['connect', 'network'];

function check(_x10, _x11) {
  return _check.apply(this, arguments);
}

function _check() {
  _check = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(walletChecks, networkId) {
    var checks;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            if (!walletChecks) {
              _context12.next = 3;
              break;
            }

            checks = walletChecks.map(function (checkOrModule) {
              if (!isWalletCheckModule(checkOrModule)) {
                var checkName = checkOrModule.checkName,
                    otherParams = _objectWithoutProperties(checkOrModule, ["checkName"]);

                var module = getModule$1(checkName);
                return module && module.then(function (m) {
                  return m["default"](_objectSpread(_objectSpread({}, otherParams), {}, {
                    networkId: networkId
                  }));
                });
              }

              return Promise.resolve(checkOrModule);
            });
            return _context12.abrupt("return", Promise.all(checks));

          case 3:
            return _context12.abrupt("return", Promise.all(defaultChecks.map(function (checkName) {
              var module = getModule$1(checkName);
              return module && module.then(function (m) {
                return m["default"]({
                  networkId: networkId
                });
              });
            })));

          case 4:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));
  return _check.apply(this, arguments);
}

function getModule$1(name) {
  switch (name) {
    case 'connect':
      return __webpack_require__.e(/*! import() */ 26).then(__webpack_require__.bind(null, /*! ./connect-231f4387.js */ "./node_modules/bnc-onboard/dist/esm/connect-231f4387.js"));

    case 'network':
      return __webpack_require__.e(/*! import() */ 29).then(__webpack_require__.bind(null, /*! ./network-2587d464.js */ "./node_modules/bnc-onboard/dist/esm/network-2587d464.js"));

    case 'balance':
      return __webpack_require__.e(/*! import() */ 25).then(__webpack_require__.bind(null, /*! ./balance-834327cb.js */ "./node_modules/bnc-onboard/dist/esm/balance-834327cb.js"));

    case 'accounts':
      return Promise.resolve().then(function () {
        return accounts;
      });

    case 'derivationPath':
      return Promise.resolve().then(function () {
        return derivationPath$1;
      });

    default:
      throw new Error("invalid module name: ".concat(name));
  }
}

var defaultHeading = 'Select a Wallet';
var defaultDescription = 'Please select a wallet to connect to this dapp:';
var defaultWalletExplanation = "Wallets are used to send, receive, and store digital assets like Ether. Wallets come in many forms. They are either built into your browser, an extension added to your browser, a piece of hardware plugged into your computer or even an app on your phone. For more information about wallets, see <a style=\"color: #4a90e2; font-size: 0.889rem; font-family: inherit;\" class=\"bn-onboard-clickable\" href=\"https://docs.ethhub.io/using-ethereum/wallets/intro-to-ethereum-wallets/\" target=\"_blank\" rel=\"noopener noreferrer\">this explanation</a>.";

function initializeModules(networkId, walletSelect, walletCheck) {
  var wallets = select(walletSelect && walletSelect.wallets, networkId);
  return {
    walletSelect: {
      heading: walletSelect && walletSelect.heading || defaultHeading,
      description: walletSelect && walletSelect.description || defaultDescription,
      wallets: wallets,
      explanation: walletSelect && walletSelect.explanation || defaultWalletExplanation
    },
    walletCheck: check(walletCheck, networkId)
  };
}

var onboard;

function init$1(initialization) {
  if (onboard) {
    console.warn('onboard has already been initialized');
    onboard.$destroy();
  }

  validateInit(initialization);
  var subscriptions = initialization.subscriptions,
      dappId = initialization.dappId,
      networkId = initialization.networkId,
      darkMode = initialization.darkMode,
      apiUrl = initialization.apiUrl,
      hideBranding = initialization.hideBranding;

  var _getDeviceInfo = getDeviceInfo(),
      os = _getDeviceInfo.os,
      isMobile = _getDeviceInfo.isMobile;

  var initializedModules = initializeModules(networkId, initialization.walletSelect, initialization.walletCheck);
  var displayBranding;

  if (dappId) {
    if (hideBranding !== false) {
      displayBranding = false;
    } else {
      displayBranding = true;
    }
  } else {
    if (hideBranding !== true) {
      displayBranding = true;
    } else {
      displayBranding = false;
    }
  }

  app.update(function (store) {
    return _objectSpread(_objectSpread({}, store), {}, {
      dappId: dappId,
      networkId: networkId,
      version: version,
      mobileDevice: isMobile,
      os: os,
      darkMode: darkMode,
      displayBranding: displayBranding,
      checkModules: initializedModules.walletCheck
    });
  });
  initializeStores();

  if (dappId) {
    initializeBlocknative(dappId, networkId, apiUrl);
  }

  onboard = new Onboard({
    target: document.body,
    props: {
      walletSelectModule: initializedModules.walletSelect,
      walletSelect: walletSelect
    }
  }); // register subscriptions

  if (subscriptions) {
    if (subscriptions.address) {
      address.subscribe(function (address) {
        if (address !== null) {
          subscriptions.address && subscriptions.address(address);
        }
      });
    }

    if (subscriptions.network) {
      network.subscribe(function (networkId) {
        if (networkId !== null) {
          subscriptions.network && subscriptions.network(networkId);
        }
      });
    }

    if (subscriptions.balance) {
      balance.subscribe(function (balance) {
        if (balance !== null) {
          subscriptions.balance && subscriptions.balance(balance);
        }
      });
    }

    if (subscriptions.wallet) {
      wallet.subscribe(function (wallet) {
        wallet.provider !== null && subscriptions.wallet && subscriptions.wallet(wallet);
      });
    }
  }

  function walletSelect(autoSelectWallet) {
    return new Promise(function (resolve) {
      app.update(function (store) {
        return _objectSpread(_objectSpread({}, store), {}, {
          walletSelectInProgress: true,
          autoSelectWallet: typeof autoSelectWallet === 'string' && autoSelectWallet
        });
      });
      var appUnsubscribe = app.subscribe(function (store) {
        var walletSelectInProgress = store.walletSelectInProgress,
            walletSelectCompleted = store.walletSelectCompleted,
            walletSelectDisplayedUI = store.walletSelectDisplayedUI;

        if (walletSelectInProgress === false) {
          appUnsubscribe(); // timeout for UI transitions if it was displayed

          walletSelectDisplayedUI ? setTimeout(function () {
            resolve(walletSelectCompleted);
            app.update(function (store) {
              return _objectSpread(_objectSpread({}, store), {}, {
                displayedUI: false
              });
            });
          }, 500) : resolve(walletSelectCompleted);
        }
      });
    });
  }

  function walletCheck() {
    return new Promise(function (resolve) {
      if (!get_store_value(walletInterface)) {
        throw new Error('walletSelect must be called before walletCheck');
      }

      app.update(function (store) {
        return _objectSpread(_objectSpread({}, store), {}, {
          walletCheckInProgress: true
        });
      });
      var appUnsubscribe = app.subscribe(function (store) {
        var walletCheckInProgress = store.walletCheckInProgress,
            walletCheckCompleted = store.walletCheckCompleted,
            walletCheckDisplayedUI = store.walletCheckDisplayedUI;

        if (walletCheckInProgress === false) {
          appUnsubscribe();
          walletCheckDisplayedUI ? setTimeout(function () {
            resolve(walletCheckCompleted);
            app.update(function (store) {
              return _objectSpread(_objectSpread({}, store), {}, {
                displayedUI: false
              });
            });
          }, 500) : resolve(walletCheckCompleted);
        }
      });
    });
  }

  function walletReset() {
    resetWalletState();
  }

  function accountSelect() {
    return new Promise(function (resolve) {
      var _get_store_value3 = get_store_value(wallet),
          type = _get_store_value3.type;

      if (type !== 'hardware') {
        resolve(false);
      }

      app.update(function (store) {
        return _objectSpread(_objectSpread({}, store), {}, {
          accountSelectInProgress: true
        });
      });
      var appUnsubscribe = app.subscribe(function (store) {
        var accountSelectInProgress = store.accountSelectInProgress,
            walletSelectDisplayedUI = store.walletSelectDisplayedUI;

        if (accountSelectInProgress === false) {
          appUnsubscribe();
          walletSelectDisplayedUI ? setTimeout(function () {
            resolve(true);
            app.update(function (store) {
              return _objectSpread(_objectSpread({}, store), {}, {
                displayedUI: false
              });
            });
          }, 500) : resolve(true);
        }
      });
    });
  }

  function config(options) {
    validateConfig(options);
    app.update(function (store) {
      return _objectSpread(_objectSpread({}, store), options);
    });
  }

  function getState() {
    return get_store_value(state);
  }

  return {
    walletSelect: walletSelect,
    walletCheck: walletCheck,
    walletReset: walletReset,
    config: config,
    getState: getState,
    accountSelect: accountSelect
  };
}



/***/ }),

/***/ "./node_modules/bnc-onboard/dist/esm/onboard.js":
/*!******************************************************!*\
  !*** ./node_modules/bnc-onboard/dist/esm/onboard.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _onboard_9d401f90_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onboard-9d401f90.js */ "./node_modules/bnc-onboard/dist/esm/onboard-9d401f90.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _onboard_9d401f90_js__WEBPACK_IMPORTED_MODULE_1__["i"]; });

/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bnc_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bnc-sdk */ "./node_modules/bnc-sdk/dist/esm/index.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bowser */ "./node_modules/bowser/es5.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_4__);






/***/ }),

/***/ "./node_modules/bnc-sdk/dist/esm/index.js":
/*!************************************************!*\
  !*** ./node_modules/bnc-sdk/dist/esm/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sturdy_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sturdy-websocket */ "./node_modules/sturdy-websocket/dist/index.js");
/* harmony import */ var sturdy_websocket__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sturdy_websocket__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var crypto_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-es */ "./node_modules/crypto-es/lib/index.js");


const networks = {
  bitcoin: {
    '1': 'main',
    '2': 'testnet'
  },
  ethereum: {
    '1': 'main',
    '3': 'ropsten',
    '4': 'rinkeby',
    '5': 'goerli',
    '42': 'kovan'
  }
};

function createEmitter() {
  return {
    listeners: {},
    on: function (eventCode, listener) {
      // check if valid eventCode
      switch (eventCode) {
        case 'txSent':
        case 'txPool':
        case 'txConfirmed':
        case 'txSpeedUp':
        case 'txCancel':
        case 'txFailed':
        case 'all':
          break;

        default:
          throw new Error(`${eventCode} is not a valid event code, for a list of valid event codes see: https://github.com/blocknative/sdk`);
      } // check that listener is a function


      if (typeof listener !== 'function') {
        throw new Error('Listener must be a function');
      } // add listener for the eventCode


      this.listeners[eventCode] = listener;
    },
    emit: function (state) {
      if (this.listeners[state.eventCode]) {
        return this.listeners[state.eventCode](state);
      }

      if (this.listeners.all) {
        return this.listeners.all(state);
      }
    }
  };
}

function networkName(blockchain, id) {
  return networks[blockchain][id];
}

function serverEcho(eventCode) {
  switch (eventCode) {
    case 'txRequest':
    case 'nsfFail':
    case 'txRepeat':
    case 'txAwaitingApproval':
    case 'txConfirmReminder':
    case 'txSendFail':
    case 'txError':
    case 'txUnderPriced':
    case 'txSent':
      return true;

    default:
      return false;
  }
}

function last(arr) {
  return arr.reverse()[0];
} // isAddress and isTxid are not meant to perform real validation,
// just needs to work out if it is an address or a transaction id
// the server will do more thorough validation


function isAddress(blockchain, addressOrHash) {
  switch (blockchain) {
    case 'ethereum':
      return addressOrHash.length === 42;

    case 'bitcoin':
      return addressOrHash.length !== 64;

    default:
      return false;
  }
}

function isTxid(blockchain, addressOrHash) {
  switch (blockchain) {
    case 'ethereum':
      return addressOrHash.length === 66;

    case 'bitcoin':
      return addressOrHash.length === 64;

    default:
      return false;
  }
}

function transaction(hash, id) {
  if (this._destroyed) throw new Error('The WebSocket instance has been destroyed, re-initialize to continue making requests.'); // create startTime for transaction

  const startTime = Date.now(); // create emitter for transaction

  const emitter = createEmitter(); // create eventCode for transaction

  const eventCode = 'txSent'; // put in queue

  this._watchedTransactions.push({
    hash,
    emitter
  });

  const transaction = {
    [this._system === 'ethereum' ? 'hash' : 'txid']: hash,
    id: id || hash,
    startTime,
    status: 'sent'
  };
  const newState = { ...transaction,
    eventCode
  }; // logEvent to server

  this._sendMessage({
    eventCode,
    categoryCode: 'activeTransaction',
    transaction
  });

  const transactionObj = {
    details: transaction,
    emitter
  };

  function emitState() {
    const emitterResult = emitter.emit(newState);

    this._transactionHandlers.forEach(handler => handler({
      transaction: newState,
      emitterResult
    }));
  } // emit after delay to allow for listener to be registered


  setTimeout(emitState.bind(this), 5);
  return transactionObj;
}

function account(address) {
  if (this._destroyed) throw new Error('The WebSocket instance has been destroyed, re-initialize to continue making requests.'); // lowercase the address if Ethereum

  address = this._system === 'ethereum' ? address.toLowerCase() : address; // create emitter for transaction

  const emitter = createEmitter(); // create eventCode for transaction

  const eventCode = 'watch';

  const existingAddressWatcher = this._watchedAccounts.find(ac => ac.address === address);

  if (existingAddressWatcher) {
    // add to existing emitters array
    existingAddressWatcher.emitters.push(emitter);
  } else {
    // put in accounts queue
    this._watchedAccounts.push({
      address,
      emitters: [emitter]
    });
  } // logEvent to server


  this._sendMessage({
    eventCode,
    categoryCode: 'accountAddress',
    account: {
      address
    }
  });

  return {
    emitter,
    details: {
      address
    }
  };
}

function event(eventObj) {
  if (this._destroyed) throw new Error('The WebSocket instance has been destroyed, re-initialize to continue making requests.');

  this._sendMessage(eventObj);
}

function unsubscribe(addressOrHash) {
  if (this._destroyed) throw new Error('The WebSocket instance has been destroyed, re-initialize to continue making requests.');
  const address = isAddress(this._system, addressOrHash);
  const txid = isTxid(this._system, addressOrHash); // check if it is an address or a hash

  if (address) {
    const normalizedAddress = this._system === 'ethereum' ? addressOrHash.toLowerCase() : addressOrHash; // remove address from accounts

    this._watchedAccounts = this._watchedAccounts.filter(ac => ac.address !== normalizedAddress); // logEvent to server

    this._sendMessage({
      categoryCode: 'accountAddress',
      eventCode: 'unwatch',
      account: {
        address: normalizedAddress
      }
    });
  } else if (txid) {
    // remove transaction from transactions
    this._watchedTransactions = this._watchedTransactions.filter(tx => tx.hash !== addressOrHash); // logEvent to server

    this._sendMessage({
      categoryCode: 'activeTransaction',
      eventCode: 'unwatch',
      transaction: {
        [this._system === 'ethereum' ? 'hash' : 'txid']: addressOrHash,
        id: addressOrHash,
        status: 'unsubscribed'
      }
    });
  } else {
    throw new Error(`Error trying to unsubscribe ${addressOrHash}: not a valid address or transaction id/hash`);
  }
}

var version = "2.1.1";

async function sendMessage(msg) {
  if (!this._connected) {
    await waitForConnectionOpen.bind(this)();
  }

  this._socket.send(createEventLog.bind(this)(msg));
}

function waitForConnectionOpen() {
  return new Promise(resolve => {
    const interval = setInterval(() => {
      if (this._connected) {
        setTimeout(resolve, 100);
        clearInterval(interval);
      }
    });
  });
}

function handleMessage(msg) {
  const {
    status,
    reason,
    event,
    connectionId
  } = JSON.parse(msg.data);

  if (connectionId) {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(this._storageKey, connectionId);
    }

    this._connectionId = connectionId;
  } // handle any errors from the server


  if (status === 'error') {
    if (reason.includes('not a valid API key')) {
      if (this._onerror) {
        this._onerror({
          message: reason
        });

        return;
      } else {
        throw new Error(reason);
      }
    }

    if (reason.includes('network not supported')) {
      if (this._onerror) {
        this._onerror({
          message: reason
        });

        return;
      } else {
        throw new Error(reason);
      }
    }

    if (reason.includes('maximum allowed amount')) {
      if (this._onerror) {
        this._onerror({
          message: reason
        });

        return;
      } else {
        throw new Error(reason);
      }
    } // handle bitcoin txid error


    if (reason.includes('invalid txid')) {
      const reason = `${event.transaction.txid} is an invalid txid`;

      if (this._onerror) {
        this._onerror({
          message: reason,
          transaction: event.transaction.txid
        });

        return;
      } else {
        throw new Error(reason);
      }
    } // handle ethereum transaction hash error


    if (reason.includes('invalid hash')) {
      const reason = `${event.transaction.hash} is an invalid transaction hash`;

      if (this._onerror) {
        this._onerror({
          message: reason,
          transaction: event.transaction.hash
        });

        return;
      } else {
        throw new Error(reason);
      }
    } // handle general address error


    if (reason.includes('invalid address')) {
      const reason = `${event.account.address} is an invalid address`;

      if (this._onerror) {
        this._onerror({
          message: reason,
          account: event.account.address
        });

        return;
      } else {
        throw new Error(reason);
      }
    } // handle bitcoin specific address error


    if (reason.includes('not a valid Bitcoin')) {
      if (this._onerror) {
        this._onerror({
          message: reason,
          account: event.account.address
        });

        return;
      } else {
        throw new Error(reason);
      }
    } // handle ethereum specific address error


    if (reason.includes('not a valid Ethereum')) {
      if (this._onerror) {
        this._onerror({
          message: reason,
          account: event.account.address
        });

        return;
      } else {
        throw new Error(reason);
      }
    } // throw error that comes back from the server without formatting the message


    if (this._onerror) {
      this._onerror({
        message: reason
      });

      return;
    } else {
      throw new Error(reason);
    }
  }

  if (event && event.transaction) {
    const {
      transaction,
      eventCode,
      contractCall
    } = event; // flatten in to one object

    const newState = this._system === 'ethereum' ? { ...transaction,
      eventCode,
      contractCall
    } : { ...transaction,
      eventCode
    }; // ignore server echo and unsubscribe messages

    if (serverEcho(eventCode) || transaction.status === 'unsubscribed') {
      return;
    } // handle change of hash in speedup and cancel events


    if (eventCode === 'txSpeedUp' || eventCode === 'txCancel') {
      this._watchedTransactions = this._watchedTransactions.map(tx => {
        if (tx.hash === transaction.originalHash) {
          // reassign hash parameter in transaction queue to new hash or txid
          tx.hash = transaction.hash || transaction.txid;
        }

        return tx;
      });
    }

    const watchedAddress = transaction.watchedAddress && this._system === 'ethereum' ? transaction.watchedAddress.toLowerCase() : transaction.watchedAddress;

    if (watchedAddress) {
      const accountObj = this._watchedAccounts.find(ac => ac.address === watchedAddress);

      const emitterResult = accountObj ? last(accountObj.emitters.map(emitter => emitter.emit(newState))) : false;

      this._transactionHandlers.forEach(handler => handler({
        transaction: newState,
        emitterResult
      }));
    } else {
      const transactionObj = this._watchedTransactions.find(tx => tx.hash === transaction.hash || transaction.txid);

      const emitterResult = transactionObj && transactionObj.emitter.emit(newState);

      this._transactionHandlers.forEach(handler => handler({
        transaction: newState,
        emitterResult
      }));
    }
  }
}

function createEventLog(msg) {
  return JSON.stringify({
    timeStamp: new Date(),
    dappId: this._dappId,
    version,
    blockchain: {
      system: this._system,
      network: networkName(this._system, this._networkId)
    },
    ...msg
  });
}

function validateType(options) {
  const {
    name,
    value,
    type,
    optional,
    customValidation
  } = options;

  if (!optional && typeof value === 'undefined') {
    throw new Error(`"${name}" is required`);
  }

  if (typeof value !== 'undefined' && (type === 'array' ? Array.isArray(type) : typeof value !== type)) {
    throw new Error(`"${name}" must be of type: ${type}, received type: ${typeof value} from value: ${value}`);
  }

  if (typeof value !== 'undefined' && customValidation && !customValidation(value)) {
    throw new Error(`"${value}" is not a valid "${name}"`);
  }
}

function validateOptions(options) {
  validateType({
    name: 'sdk options',
    value: options,
    type: 'object'
  });
  const {
    dappId,
    system,
    name,
    networkId,
    transactionHandlers,
    apiUrl,
    ws,
    onopen,
    ondown,
    onreopen,
    onerror,
    onclose,
    ...otherParams
  } = options;
  invalidParams(otherParams, ['dappId', 'system', 'name', 'networkId', 'transactionHandlers', 'apiUrl', 'ws', 'onopen', 'ondown', 'onreopen', 'onerror', 'onclose'], 'Initialization Options');
  validateType({
    name: 'dappId',
    value: dappId,
    type: 'string'
  });
  validateType({
    name: 'system',
    value: system,
    type: 'string',
    optional: true,
    customValidation: validSystem
  });
  validateType({
    name: 'name',
    value: name,
    type: 'string',
    optional: true
  });
  validateType({
    name: 'networkId',
    value: networkId,
    type: 'number'
  });
  validateType({
    name: 'transactionHandler',
    value: transactionHandlers,
    type: 'array',
    optional: true
  });

  if (transactionHandlers) {
    transactionHandlers.forEach(handler => validateType({
      name: 'transactionHandler',
      value: handler,
      type: 'function'
    }));
  }

  validateType({
    name: 'apiUrl',
    value: apiUrl,
    type: 'string',
    optional: true
  });
  validateType({
    name: 'ws',
    value: ws,
    type: 'function',
    optional: true
  });
  validateType({
    name: 'onopen',
    value: onopen,
    type: 'function',
    optional: true
  });
  validateType({
    name: 'ondown',
    value: ondown,
    type: 'function',
    optional: true
  });
  validateType({
    name: 'onreopen',
    value: onreopen,
    type: 'function',
    optional: true
  });
  validateType({
    name: 'onerror',
    value: onerror,
    type: 'function',
    optional: true
  });
  validateType({
    name: 'onclose',
    value: onclose,
    type: 'function',
    optional: true
  });
}

function validSystem(system) {
  return !!networks[system];
}

function invalidParams(params, validParams, functionName) {
  const invalid = Object.keys(params);

  if (invalid.length > 0) {
    throw new Error(`${invalid[0]} is not a valid parameter for ${functionName}, must be one of the following valid parameters: ${validParams.join(', ')}`);
  }
}

const DEFAULT_NAME = 'unknown';
const DEFAULT_SYSTEM = 'ethereum';

class Blocknative {
  constructor(options) {
    validateOptions(options);
    const {
      dappId,
      system = DEFAULT_SYSTEM,
      name = DEFAULT_NAME,
      networkId,
      transactionHandlers = [],
      apiUrl,
      ws,
      onopen,
      ondown,
      onreopen,
      onerror,
      onclose
    } = options;
    const socket = new sturdy_websocket__WEBPACK_IMPORTED_MODULE_0___default.a(apiUrl || 'wss://api.blocknative.com/v0', ws ? {
      wsConstructor: ws
    } : {});
    socket.onopen = onOpen.bind(this, onopen);
    socket.ondown = onDown.bind(this, ondown);
    socket.onreopen = onReopen.bind(this, onreopen);
    socket.onmessage = handleMessage.bind(this);

    socket.onerror = error => onerror && onerror({
      message: 'There was a WebSocket error',
      error
    });

    socket.onclose = () => {
      this._pingTimeout && clearInterval(this._pingTimeout);
      onclose && onclose();
    };

    const storageKey = crypto_es__WEBPACK_IMPORTED_MODULE_1__["default"].SHA1(`${dappId} - ${name}`).toString();
    const storedConnectionId = typeof window !== 'undefined' && window.localStorage.getItem(storageKey);
    this._storageKey = storageKey;
    this._connectionId = storedConnectionId || undefined;
    this._dappId = dappId;
    this._system = system;
    this._networkId = networkId;
    this._transactionHandlers = transactionHandlers;
    this._socket = socket;
    this._connected = false;
    this._sendMessage = sendMessage.bind(this);
    this._watchedTransactions = [];
    this._watchedAccounts = [];
    this._pingTimeout = undefined;
    this._destroyed = false;
    this._onerror = onerror;

    if (this._socket.ws.on) {
      this._heartbeat = () => {
        this._pingTimeout && clearTimeout(this._pingTimeout);
        this._pingTimeout = setTimeout(() => {
          // terminate connection if we haven't heard the server ping after server timeout plus conservative latency delay
          // Sturdy Websocket will handle the new connection logic
          this._socket.ws.terminate();
        }, 30000 + 1000);
      };

      this._socket.ws.on('ping', () => {
        this._heartbeat && this._heartbeat();
      });
    } // public API


    this.transaction = transaction.bind(this);
    this.account = account.bind(this);
    this.event = event.bind(this);
    this.unsubscribe = unsubscribe.bind(this);

    this.destroy = () => {
      this._socket.close();

      this._destroyed = true; // call onclose manually here as SturdyWebSocket doesn't currently work as expected
      // https://github.com/dphilipson/sturdy-websocket/issues/5

      this._socket.onclose();
    };
  }

}

function onOpen(handler) {
  this._connected = true;

  this._sendMessage({
    categoryCode: 'initialize',
    eventCode: 'checkDappId',
    connectionId: this._connectionId
  });

  this._heartbeat && this._heartbeat();
  handler && handler();
}

function onDown(handler, closeEvent) {
  this._connected = false;

  if (handler) {
    handler(closeEvent);
  }

  this._pingTimeout && clearTimeout(this._pingTimeout);
}

function onReopen(handler) {
  this._connected = true;

  this._sendMessage({
    categoryCode: 'initialize',
    eventCode: 'checkDappId',
    connectionId: this._connectionId
  }); // re-register all accounts to be watched by server upon
  // re-connection as they don't get transferred over automatically
  // to the new connection like tx hashes do


  this._watchedAccounts.forEach(account => {
    this._sendMessage({
      eventCode: 'accountAddress',
      categoryCode: 'watch',
      account: {
        address: account.address
      }
    });
  });

  if (handler) {
    handler();
  }

  if (this._socket.ws.on) {
    // need to re-register ping event since new connection
    this._socket.ws.on('ping', () => {
      this._heartbeat && this._heartbeat();
    });

    this._heartbeat();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Blocknative);


/***/ }),

/***/ "./node_modules/bowser/es5.js":
/*!************************************!*\
  !*** ./node_modules/bowser/es5.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=90)}({17:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=r(18),i=function(){function e(){}return e.getFirstMatch=function(e,t){var r=t.match(e);return r&&r.length>0&&r[1]||""},e.getSecondMatch=function(e,t){var r=t.match(e);return r&&r.length>1&&r[2]||""},e.matchAndReturnConst=function(e,t,r){if(e.test(t))return r},e.getWindowsVersionName=function(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},e.getMacOSVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),10===t[0])switch(t[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}},e.getAndroidVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),!(1===t[0]&&t[1]<5))return 1===t[0]&&t[1]<6?"Cupcake":1===t[0]&&t[1]>=6?"Donut":2===t[0]&&t[1]<2?"Eclair":2===t[0]&&2===t[1]?"Froyo":2===t[0]&&t[1]>2?"Gingerbread":3===t[0]?"Honeycomb":4===t[0]&&t[1]<1?"Ice Cream Sandwich":4===t[0]&&t[1]<4?"Jelly Bean":4===t[0]&&t[1]>=4?"KitKat":5===t[0]?"Lollipop":6===t[0]?"Marshmallow":7===t[0]?"Nougat":8===t[0]?"Oreo":9===t[0]?"Pie":void 0},e.getVersionPrecision=function(e){return e.split(".").length},e.compareVersions=function(t,r,n){void 0===n&&(n=!1);var i=e.getVersionPrecision(t),s=e.getVersionPrecision(r),o=Math.max(i,s),a=0,u=e.map([t,r],(function(t){var r=o-e.getVersionPrecision(t),n=t+new Array(r+1).join(".0");return e.map(n.split("."),(function(e){return new Array(20-e.length).join("0")+e})).reverse()}));for(n&&(a=o-Math.min(i,s)),o-=1;o>=a;){if(u[0][o]>u[1][o])return 1;if(u[0][o]===u[1][o]){if(o===a)return 0;o-=1}else if(u[0][o]<u[1][o])return-1}},e.map=function(e,t){var r,n=[];if(Array.prototype.map)return Array.prototype.map.call(e,t);for(r=0;r<e.length;r+=1)n.push(t(e[r]));return n},e.find=function(e,t){var r,n;if(Array.prototype.find)return Array.prototype.find.call(e,t);for(r=0,n=e.length;r<n;r+=1){var i=e[r];if(t(i,r))return i}},e.assign=function(e){for(var t,r,n=e,i=arguments.length,s=new Array(i>1?i-1:0),o=1;o<i;o++)s[o-1]=arguments[o];if(Object.assign)return Object.assign.apply(Object,[e].concat(s));var a=function(){var e=s[t];"object"==typeof e&&null!==e&&Object.keys(e).forEach((function(t){n[t]=e[t]}))};for(t=0,r=s.length;t<r;t+=1)a();return e},e.getBrowserAlias=function(e){return n.BROWSER_ALIASES_MAP[e]},e.getBrowserTypeByAlias=function(e){return n.BROWSER_MAP[e]||""},e}();t.default=i,e.exports=t.default},18:function(e,t,r){"use strict";t.__esModule=!0,t.ENGINE_MAP=t.OS_MAP=t.PLATFORMS_MAP=t.BROWSER_MAP=t.BROWSER_ALIASES_MAP=void 0;t.BROWSER_ALIASES_MAP={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"};t.BROWSER_MAP={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"};t.PLATFORMS_MAP={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"};t.OS_MAP={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"};t.ENGINE_MAP={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"}},90:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(91))&&n.__esModule?n:{default:n},s=r(18);function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(){}var t,r,n;return e.getParser=function(e,t){if(void 0===t&&(t=!1),"string"!=typeof e)throw new Error("UserAgent should be a string");return new i.default(e,t)},e.parse=function(e){return new i.default(e).getResult()},t=e,n=[{key:"BROWSER_MAP",get:function(){return s.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return s.ENGINE_MAP}},{key:"OS_MAP",get:function(){return s.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return s.PLATFORMS_MAP}}],(r=null)&&o(t.prototype,r),n&&o(t,n),e}();t.default=a,e.exports=t.default},91:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=u(r(92)),i=u(r(93)),s=u(r(94)),o=u(r(95)),a=u(r(17));function u(e){return e&&e.__esModule?e:{default:e}}var d=function(){function e(e,t){if(void 0===t&&(t=!1),null==e||""===e)throw new Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},!0!==t&&this.parse()}var t=e.prototype;return t.getUA=function(){return this._ua},t.test=function(e){return e.test(this._ua)},t.parseBrowser=function(){var e=this;this.parsedResult.browser={};var t=a.default.find(n.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser},t.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},t.getBrowserName=function(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},t.getBrowserVersion=function(){return this.getBrowser().version},t.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},t.parseOS=function(){var e=this;this.parsedResult.os={};var t=a.default.find(i.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os},t.getOSName=function(e){var t=this.getOS().name;return e?String(t).toLowerCase()||"":t||""},t.getOSVersion=function(){return this.getOS().version},t.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},t.getPlatformType=function(e){void 0===e&&(e=!1);var t=this.getPlatform().type;return e?String(t).toLowerCase()||"":t||""},t.parsePlatform=function(){var e=this;this.parsedResult.platform={};var t=a.default.find(s.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform},t.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},t.getEngineName=function(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},t.parseEngine=function(){var e=this;this.parsedResult.engine={};var t=a.default.find(o.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine},t.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},t.getResult=function(){return a.default.assign({},this.parsedResult)},t.satisfies=function(e){var t=this,r={},n=0,i={},s=0;if(Object.keys(e).forEach((function(t){var o=e[t];"string"==typeof o?(i[t]=o,s+=1):"object"==typeof o&&(r[t]=o,n+=1)})),n>0){var o=Object.keys(r),u=a.default.find(o,(function(e){return t.isOS(e)}));if(u){var d=this.satisfies(r[u]);if(void 0!==d)return d}var c=a.default.find(o,(function(e){return t.isPlatform(e)}));if(c){var f=this.satisfies(r[c]);if(void 0!==f)return f}}if(s>0){var l=Object.keys(i),h=a.default.find(l,(function(e){return t.isBrowser(e,!0)}));if(void 0!==h)return this.compareVersion(i[h])}},t.isBrowser=function(e,t){void 0===t&&(t=!1);var r=this.getBrowserName().toLowerCase(),n=e.toLowerCase(),i=a.default.getBrowserTypeByAlias(n);return t&&i&&(n=i.toLowerCase()),n===r},t.compareVersion=function(e){var t=[0],r=e,n=!1,i=this.getBrowserVersion();if("string"==typeof i)return">"===e[0]||"<"===e[0]?(r=e.substr(1),"="===e[1]?(n=!0,r=e.substr(2)):t=[],">"===e[0]?t.push(1):t.push(-1)):"="===e[0]?r=e.substr(1):"~"===e[0]&&(n=!0,r=e.substr(1)),t.indexOf(a.default.compareVersions(i,r,n))>-1},t.isOS=function(e){return this.getOSName(!0)===String(e).toLowerCase()},t.isPlatform=function(e){return this.getPlatformType(!0)===String(e).toLowerCase()},t.isEngine=function(e){return this.getEngineName(!0)===String(e).toLowerCase()},t.is=function(e){return this.isBrowser(e)||this.isOS(e)||this.isPlatform(e)},t.some=function(e){var t=this;return void 0===e&&(e=[]),e.some((function(e){return t.is(e)}))},e}();t.default=d,e.exports=t.default},92:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n};var s=/version\/(\d+(\.?_?\d+)+)/i,o=[{test:[/googlebot/i],describe:function(e){var t={name:"Googlebot"},r=i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/opera/i],describe:function(e){var t={name:"Opera"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opr\/|opios/i],describe:function(e){var t={name:"Opera"},r=i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/SamsungBrowser/i],describe:function(e){var t={name:"Samsung Internet for Android"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Whale/i],describe:function(e){var t={name:"NAVER Whale Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MZBrowser/i],describe:function(e){var t={name:"MZ Browser"},r=i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/focus/i],describe:function(e){var t={name:"Focus"},r=i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/swing/i],describe:function(e){var t={name:"Swing"},r=i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/coast/i],describe:function(e){var t={name:"Opera Coast"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/yabrowser/i],describe:function(e){var t={name:"Yandex Browser"},r=i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/ucbrowser/i],describe:function(e){var t={name:"UC Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Maxthon|mxios/i],describe:function(e){var t={name:"Maxthon"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/epiphany/i],describe:function(e){var t={name:"Epiphany"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/puffin/i],describe:function(e){var t={name:"Puffin"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sleipnir/i],describe:function(e){var t={name:"Sleipnir"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/k-meleon/i],describe:function(e){var t={name:"K-Meleon"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/micromessenger/i],describe:function(e){var t={name:"WeChat"},r=i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/qqbrowser/i],describe:function(e){var t={name:/qqbrowserlite/i.test(e)?"QQ Browser Lite":"QQ Browser"},r=i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/msie|trident/i],describe:function(e){var t={name:"Internet Explorer"},r=i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/\sedg\//i],describe:function(e){var t={name:"Microsoft Edge"},r=i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/edg([ea]|ios)/i],describe:function(e){var t={name:"Microsoft Edge"},r=i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/vivaldi/i],describe:function(e){var t={name:"Vivaldi"},r=i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/seamonkey/i],describe:function(e){var t={name:"SeaMonkey"},r=i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sailfish/i],describe:function(e){var t={name:"Sailfish"},r=i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return r&&(t.version=r),t}},{test:[/silk/i],describe:function(e){var t={name:"Amazon Silk"},r=i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/phantom/i],describe:function(e){var t={name:"PhantomJS"},r=i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/slimerjs/i],describe:function(e){var t={name:"SlimerJS"},r=i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t={name:"BlackBerry"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t={name:"WebOS Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/bada/i],describe:function(e){var t={name:"Bada"},r=i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/tizen/i],describe:function(e){var t={name:"Tizen"},r=i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/qupzilla/i],describe:function(e){var t={name:"QupZilla"},r=i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/firefox|iceweasel|fxios/i],describe:function(e){var t={name:"Firefox"},r=i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/electron/i],describe:function(e){var t={name:"Electron"},r=i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/chromium/i],describe:function(e){var t={name:"Chromium"},r=i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/chrome|crios|crmo/i],describe:function(e){var t={name:"Chrome"},r=i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/GSA/i],describe:function(e){var t={name:"Google Search"},r=i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t={name:"Android Browser"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/playstation 4/i],describe:function(e){var t={name:"PlayStation 4"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/safari|applewebkit/i],describe:function(e){var t={name:"Safari"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/.*/i],describe:function(e){var t=-1!==e.search("\\(")?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:i.default.getFirstMatch(t,e),version:i.default.getSecondMatch(t,e)}}}];t.default=o,e.exports=t.default},93:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var o=[{test:[/Roku\/DVP/],describe:function(e){var t=i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,e);return{name:s.OS_MAP.Roku,version:t}}},{test:[/windows phone/i],describe:function(e){var t=i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.WindowsPhone,version:t}}},{test:[/windows /i],describe:function(e){var t=i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),r=i.default.getWindowsVersionName(t);return{name:s.OS_MAP.Windows,version:t,versionName:r}}},{test:[/Macintosh(.*?) FxiOS(.*?) Version\//],describe:function(e){var t=i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/,e);return{name:s.OS_MAP.iOS,version:t}}},{test:[/macintosh/i],describe:function(e){var t=i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,"."),r=i.default.getMacOSVersionName(t),n={name:s.OS_MAP.MacOS,version:t};return r&&(n.versionName=r),n}},{test:[/(ipod|iphone|ipad)/i],describe:function(e){var t=i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return{name:s.OS_MAP.iOS,version:t}}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t=i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,e),r=i.default.getAndroidVersionName(t),n={name:s.OS_MAP.Android,version:t};return r&&(n.versionName=r),n}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t=i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),r={name:s.OS_MAP.WebOS};return t&&t.length&&(r.version=t),r}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t=i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||i.default.getFirstMatch(/\bbb(\d+)/i,e);return{name:s.OS_MAP.BlackBerry,version:t}}},{test:[/bada/i],describe:function(e){var t=i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.Bada,version:t}}},{test:[/tizen/i],describe:function(e){var t=i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.Tizen,version:t}}},{test:[/linux/i],describe:function(){return{name:s.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:s.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(e){var t=i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.PlayStation4,version:t}}}];t.default=o,e.exports=t.default},94:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var o=[{test:[/googlebot/i],describe:function(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe:function(e){var t=i.default.getFirstMatch(/(can-l01)/i,e)&&"Nova",r={type:s.PLATFORMS_MAP.mobile,vendor:"Huawei"};return t&&(r.model=t),r}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?) Version\//],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:function(e){var t=e.test(/ipod|iphone/i),r=e.test(/like (ipod|iphone)/i);return t&&!r},describe:function(e){var t=i.default.getFirstMatch(/(ipod|iphone)/i,e);return{type:s.PLATFORMS_MAP.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"blackberry"===e.getBrowserName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(e){return"bada"===e.getBrowserName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"windows phone"===e.getBrowserName()},describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(e){var t=Number(String(e.getOSVersion()).split(".")[0]);return"android"===e.getOSName(!0)&&t>=3},describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:function(e){return"android"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"macos"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(e){return"windows"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop}}},{test:function(e){return"linux"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop}}},{test:function(e){return"playstation 4"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.tv}}},{test:function(e){return"roku"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.tv}}}];t.default=o,e.exports=t.default},95:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var o=[{test:function(e){return"microsoft edge"===e.getBrowserName(!0)},describe:function(e){if(/\sedg\//i.test(e))return{name:s.ENGINE_MAP.Blink};var t=i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,e);return{name:s.ENGINE_MAP.EdgeHTML,version:t}}},{test:[/trident/i],describe:function(e){var t={name:s.ENGINE_MAP.Trident},r=i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){return e.test(/presto/i)},describe:function(e){var t={name:s.ENGINE_MAP.Presto},r=i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=e.test(/gecko/i),r=e.test(/like gecko/i);return t&&!r},describe:function(e){var t={name:s.ENGINE_MAP.Gecko},r=i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:s.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(e){var t={name:s.ENGINE_MAP.WebKit},r=i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}}];t.default=o,e.exports=t.default}})}));

/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/crypto-es/lib/aes.js":
/*!*******************************************!*\
  !*** ./node_modules/crypto-es/lib/aes.js ***!
  \*******************************************/
/*! exports provided: AESAlgo, AES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AESAlgo", function() { return AESAlgo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AES", function() { return AES; });
/* harmony import */ var _cipher_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cipher-core.js */ "./node_modules/crypto-es/lib/cipher-core.js");


// Lookup tables
const _SBOX = [];
const INV_SBOX = [];
const _SUB_MIX_0 = [];
const _SUB_MIX_1 = [];
const _SUB_MIX_2 = [];
const _SUB_MIX_3 = [];
const INV_SUB_MIX_0 = [];
const INV_SUB_MIX_1 = [];
const INV_SUB_MIX_2 = [];
const INV_SUB_MIX_3 = [];

// Compute lookup tables

// Compute double table
const d = [];
for (let i = 0; i < 256; i += 1) {
  if (i < 128) {
    d[i] = i << 1;
  } else {
    d[i] = (i << 1) ^ 0x11b;
  }
}

// Walk GF(2^8)
let x = 0;
let xi = 0;
for (let i = 0; i < 256; i += 1) {
  // Compute sbox
  let sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
  sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
  _SBOX[x] = sx;
  INV_SBOX[sx] = x;

  // Compute multiplication
  const x2 = d[x];
  const x4 = d[x2];
  const x8 = d[x4];

  // Compute sub bytes, mix columns tables
  let t = (d[sx] * 0x101) ^ (sx * 0x1010100);
  _SUB_MIX_0[x] = (t << 24) | (t >>> 8);
  _SUB_MIX_1[x] = (t << 16) | (t >>> 16);
  _SUB_MIX_2[x] = (t << 8) | (t >>> 24);
  _SUB_MIX_3[x] = t;

  // Compute inv sub bytes, inv mix columns tables
  t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
  INV_SUB_MIX_0[sx] = (t << 24) | (t >>> 8);
  INV_SUB_MIX_1[sx] = (t << 16) | (t >>> 16);
  INV_SUB_MIX_2[sx] = (t << 8) | (t >>> 24);
  INV_SUB_MIX_3[sx] = t;

  // Compute next counter
  if (!x) {
    xi = 1;
    x = xi;
  } else {
    x = x2 ^ d[d[d[x8 ^ x2]]];
    xi ^= d[d[xi]];
  }
}

// Precomputed Rcon lookup
const RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];

/**
 * AES block cipher algorithm.
 */
class AESAlgo extends _cipher_core_js__WEBPACK_IMPORTED_MODULE_0__["BlockCipher"] {
  _doReset() {
    let t;

    // Skip reset of nRounds has been set before and key did not change
    if (this._nRounds && this._keyPriorReset === this._key) {
      return;
    }

    // Shortcuts
    this._keyPriorReset = this._key;
    const key = this._keyPriorReset;
    const keyWords = key.words;
    const keySize = key.sigBytes / 4;

    // Compute number of rounds
    this._nRounds = keySize + 6;
    const nRounds = this._nRounds;

    // Compute number of key schedule rows
    const ksRows = (nRounds + 1) * 4;

    // Compute key schedule
    this._keySchedule = [];
    const keySchedule = this._keySchedule;
    for (let ksRow = 0; ksRow < ksRows; ksRow += 1) {
      if (ksRow < keySize) {
        keySchedule[ksRow] = keyWords[ksRow];
      } else {
        t = keySchedule[ksRow - 1];

        if (!(ksRow % keySize)) {
          // Rot word
          t = (t << 8) | (t >>> 24);

          // Sub word
          t = (_SBOX[t >>> 24] << 24)
            | (_SBOX[(t >>> 16) & 0xff] << 16)
            | (_SBOX[(t >>> 8) & 0xff] << 8)
            | _SBOX[t & 0xff];

          // Mix Rcon
          t ^= RCON[(ksRow / keySize) | 0] << 24;
        } else if (keySize > 6 && ksRow % keySize === 4) {
          // Sub word
          t = (_SBOX[t >>> 24] << 24)
            | (_SBOX[(t >>> 16) & 0xff] << 16)
            | (_SBOX[(t >>> 8) & 0xff] << 8)
            | _SBOX[t & 0xff];
        }

        keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
      }
    }

    // Compute inv key schedule
    this._invKeySchedule = [];
    const invKeySchedule = this._invKeySchedule;
    for (let invKsRow = 0; invKsRow < ksRows; invKsRow += 1) {
      const ksRow = ksRows - invKsRow;

      if (invKsRow % 4) {
        t = keySchedule[ksRow];
      } else {
        t = keySchedule[ksRow - 4];
      }

      if (invKsRow < 4 || ksRow <= 4) {
        invKeySchedule[invKsRow] = t;
      } else {
        invKeySchedule[invKsRow] = INV_SUB_MIX_0[_SBOX[t >>> 24]]
          ^ INV_SUB_MIX_1[_SBOX[(t >>> 16) & 0xff]]
          ^ INV_SUB_MIX_2[_SBOX[(t >>> 8) & 0xff]]
          ^ INV_SUB_MIX_3[_SBOX[t & 0xff]];
      }
    }
  }

  encryptBlock(M, offset) {
    this._doCryptBlock(
      M, offset, this._keySchedule, _SUB_MIX_0, _SUB_MIX_1, _SUB_MIX_2, _SUB_MIX_3, _SBOX,
    );
  }

  decryptBlock(M, offset) {
    const _M = M;

    // Swap 2nd and 4th rows
    let t = _M[offset + 1];
    _M[offset + 1] = _M[offset + 3];
    _M[offset + 3] = t;

    this._doCryptBlock(
      _M,
      offset,
      this._invKeySchedule,
      INV_SUB_MIX_0,
      INV_SUB_MIX_1,
      INV_SUB_MIX_2,
      INV_SUB_MIX_3,
      INV_SBOX,
    );

    // Inv swap 2nd and 4th rows
    t = _M[offset + 1];
    _M[offset + 1] = _M[offset + 3];
    _M[offset + 3] = t;
  }

  _doCryptBlock(M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
    const _M = M;

    // Shortcut
    const nRounds = this._nRounds;

    // Get input, add round key
    let s0 = _M[offset] ^ keySchedule[0];
    let s1 = _M[offset + 1] ^ keySchedule[1];
    let s2 = _M[offset + 2] ^ keySchedule[2];
    let s3 = _M[offset + 3] ^ keySchedule[3];

    // Key schedule row counter
    let ksRow = 4;

    // Rounds
    for (let round = 1; round < nRounds; round += 1) {
      // Shift rows, sub bytes, mix columns, add round key
      const t0 = SUB_MIX_0[s0 >>> 24]
        ^ SUB_MIX_1[(s1 >>> 16) & 0xff]
        ^ SUB_MIX_2[(s2 >>> 8) & 0xff]
        ^ SUB_MIX_3[s3 & 0xff]
        ^ keySchedule[ksRow];
      ksRow += 1;
      const t1 = SUB_MIX_0[s1 >>> 24]
        ^ SUB_MIX_1[(s2 >>> 16) & 0xff]
        ^ SUB_MIX_2[(s3 >>> 8) & 0xff]
        ^ SUB_MIX_3[s0 & 0xff]
        ^ keySchedule[ksRow];
      ksRow += 1;
      const t2 = SUB_MIX_0[s2 >>> 24]
        ^ SUB_MIX_1[(s3 >>> 16) & 0xff]
        ^ SUB_MIX_2[(s0 >>> 8) & 0xff]
        ^ SUB_MIX_3[s1 & 0xff]
        ^ keySchedule[ksRow];
      ksRow += 1;
      const t3 = SUB_MIX_0[s3 >>> 24]
        ^ SUB_MIX_1[(s0 >>> 16) & 0xff]
        ^ SUB_MIX_2[(s1 >>> 8) & 0xff]
        ^ SUB_MIX_3[s2 & 0xff]
        ^ keySchedule[ksRow];
      ksRow += 1;

      // Update state
      s0 = t0;
      s1 = t1;
      s2 = t2;
      s3 = t3;
    }

    // Shift rows, sub bytes, add round key
    const t0 = (
      (SBOX[s0 >>> 24] << 24)
        | (SBOX[(s1 >>> 16) & 0xff] << 16)
        | (SBOX[(s2 >>> 8) & 0xff] << 8)
        | SBOX[s3 & 0xff]
    ) ^ keySchedule[ksRow];
    ksRow += 1;
    const t1 = (
      (SBOX[s1 >>> 24] << 24)
        | (SBOX[(s2 >>> 16) & 0xff] << 16)
        | (SBOX[(s3 >>> 8) & 0xff] << 8)
        | SBOX[s0 & 0xff]
    ) ^ keySchedule[ksRow];
    ksRow += 1;
    const t2 = (
      (SBOX[s2 >>> 24] << 24)
        | (SBOX[(s3 >>> 16) & 0xff] << 16)
        | (SBOX[(s0 >>> 8) & 0xff] << 8)
        | SBOX[s1 & 0xff]
    ) ^ keySchedule[ksRow];
    ksRow += 1;
    const t3 = (
      (SBOX[s3 >>> 24] << 24)
        | (SBOX[(s0 >>> 16) & 0xff] << 16) | (SBOX[(s1 >>> 8) & 0xff] << 8) | SBOX[s2 & 0xff]
    ) ^ keySchedule[ksRow];
    ksRow += 1;

    // Set output
    _M[offset] = t0;
    _M[offset + 1] = t1;
    _M[offset + 2] = t2;
    _M[offset + 3] = t3;
  }
}
AESAlgo.keySize = 256 / 32;

/**
 * Shortcut functions to the cipher's object interface.
 *
 * @example
 *
 *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
 *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
 */
const AES = _cipher_core_js__WEBPACK_IMPORTED_MODULE_0__["BlockCipher"]._createHelper(AESAlgo);


/***/ }),

/***/ "./node_modules/crypto-es/lib/cipher-core.js":
/*!***************************************************!*\
  !*** ./node_modules/crypto-es/lib/cipher-core.js ***!
  \***************************************************/
/*! exports provided: Cipher, StreamCipher, BlockCipherMode, CBC, Pkcs7, BlockCipher, CipherParams, OpenSSLFormatter, SerializableCipher, OpenSSLKdf, PasswordBasedCipher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cipher", function() { return Cipher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamCipher", function() { return StreamCipher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockCipherMode", function() { return BlockCipherMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CBC", function() { return CBC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pkcs7", function() { return Pkcs7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockCipher", function() { return BlockCipher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CipherParams", function() { return CipherParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenSSLFormatter", function() { return OpenSSLFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerializableCipher", function() { return SerializableCipher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenSSLKdf", function() { return OpenSSLKdf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordBasedCipher", function() { return PasswordBasedCipher; });
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./node_modules/crypto-es/lib/core.js");
/* harmony import */ var _enc_base64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enc-base64.js */ "./node_modules/crypto-es/lib/enc-base64.js");
/* harmony import */ var _evpkdf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./evpkdf.js */ "./node_modules/crypto-es/lib/evpkdf.js");
/* eslint-disable no-use-before-define */





/**
 * Abstract base cipher template.
 *
 * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
 * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
 * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
 * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
 */
class Cipher extends _core_js__WEBPACK_IMPORTED_MODULE_0__["BufferedBlockAlgorithm"] {
  /**
   * Initializes a newly created cipher.
   *
   * @param {number} xformMode Either the encryption or decryption transormation mode constant.
   * @param {WordArray} key The key.
   * @param {Object} cfg (Optional) The configuration options to use for this operation.
   *
   * @example
   *
   *     const cipher = CryptoJS.algo.AES.create(
   *       CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray }
   *     );
   */
  constructor(xformMode, key, cfg) {
    super();

    /**
     * Configuration options.
     *
     * @property {WordArray} iv The IV to use for this operation.
     */
    this.cfg = Object.assign(new _core_js__WEBPACK_IMPORTED_MODULE_0__["Base"](), cfg);

    // Store transform mode and key
    this._xformMode = xformMode;
    this._key = key;

    // Set initial values
    this.reset();
  }

  /**
   * Creates this cipher in encryption mode.
   *
   * @param {WordArray} key The key.
   * @param {Object} cfg (Optional) The configuration options to use for this operation.
   *
   * @return {Cipher} A cipher instance.
   *
   * @static
   *
   * @example
   *
   *     const cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
   */
  static createEncryptor(key, cfg) {
    return this.create(this._ENC_XFORM_MODE, key, cfg);
  }

  /**
   * Creates this cipher in decryption mode.
   *
   * @param {WordArray} key The key.
   * @param {Object} cfg (Optional) The configuration options to use for this operation.
   *
   * @return {Cipher} A cipher instance.
   *
   * @static
   *
   * @example
   *
   *     const cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
   */
  static createDecryptor(key, cfg) {
    return this.create(this._DEC_XFORM_MODE, key, cfg);
  }

  /**
   * Creates shortcut functions to a cipher's object interface.
   *
   * @param {Cipher} cipher The cipher to create a helper for.
   *
   * @return {Object} An object with encrypt and decrypt shortcut functions.
   *
   * @static
   *
   * @example
   *
   *     const AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
   */
  static _createHelper(SubCipher) {
    const selectCipherStrategy = (key) => {
      if (typeof key === 'string') {
        return PasswordBasedCipher;
      }
      return SerializableCipher;
    };

    return {
      encrypt(message, key, cfg) {
        return selectCipherStrategy(key).encrypt(SubCipher, message, key, cfg);
      },

      decrypt(ciphertext, key, cfg) {
        return selectCipherStrategy(key).decrypt(SubCipher, ciphertext, key, cfg);
      },
    };
  }

  /**
   * Resets this cipher to its initial state.
   *
   * @example
   *
   *     cipher.reset();
   */
  reset() {
    // Reset data buffer
    super.reset.call(this);

    // Perform concrete-cipher logic
    this._doReset();
  }

  /**
   * Adds data to be encrypted or decrypted.
   *
   * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
   *
   * @return {WordArray} The data after processing.
   *
   * @example
   *
   *     const encrypted = cipher.process('data');
   *     const encrypted = cipher.process(wordArray);
   */
  process(dataUpdate) {
    // Append
    this._append(dataUpdate);

    // Process available blocks
    return this._process();
  }

  /**
   * Finalizes the encryption or decryption process.
   * Note that the finalize operation is effectively a destructive, read-once operation.
   *
   * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
   *
   * @return {WordArray} The data after final processing.
   *
   * @example
   *
   *     const encrypted = cipher.finalize();
   *     const encrypted = cipher.finalize('data');
   *     const encrypted = cipher.finalize(wordArray);
   */
  finalize(dataUpdate) {
    // Final data update
    if (dataUpdate) {
      this._append(dataUpdate);
    }

    // Perform concrete-cipher logic
    const finalProcessedData = this._doFinalize();

    return finalProcessedData;
  }
}
Cipher._ENC_XFORM_MODE = 1;
Cipher._DEC_XFORM_MODE = 2;
Cipher.keySize = 128 / 32;
Cipher.ivSize = 128 / 32;

/**
 * Abstract base stream cipher template.
 *
 * @property {number} blockSize
 *
 *     The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
 */
class StreamCipher extends Cipher {
  constructor(...args) {
    super(...args);

    this.blockSize = 1;
  }

  _doFinalize() {
    // Process partial blocks
    const finalProcessedBlocks = this._process(!!'flush');

    return finalProcessedBlocks;
  }
}

/**
 * Abstract base block cipher mode template.
 */
class BlockCipherMode extends _core_js__WEBPACK_IMPORTED_MODULE_0__["Base"] {
  /**
   * Initializes a newly created mode.
   *
   * @param {Cipher} cipher A block cipher instance.
   * @param {Array} iv The IV words.
   *
   * @example
   *
   *     const mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
   */
  constructor(cipher, iv) {
    super();

    this._cipher = cipher;
    this._iv = iv;
  }

  /**
   * Creates this mode for encryption.
   *
   * @param {Cipher} cipher A block cipher instance.
   * @param {Array} iv The IV words.
   *
   * @static
   *
   * @example
   *
   *     const mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
   */
  static createEncryptor(cipher, iv) {
    return this.Encryptor.create(cipher, iv);
  }

  /**
   * Creates this mode for decryption.
   *
   * @param {Cipher} cipher A block cipher instance.
   * @param {Array} iv The IV words.
   *
   * @static
   *
   * @example
   *
   *     const mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
   */
  static createDecryptor(cipher, iv) {
    return this.Decryptor.create(cipher, iv);
  }
}

function xorBlock(words, offset, blockSize) {
  const _words = words;
  let block;

  // Shortcut
  const iv = this._iv;

  // Choose mixing block
  if (iv) {
    block = iv;

    // Remove IV for subsequent blocks
    this._iv = undefined;
  } else {
    block = this._prevBlock;
  }

  // XOR blocks
  for (let i = 0; i < blockSize; i += 1) {
    _words[offset + i] ^= block[i];
  }
}

/**
 * Cipher Block Chaining mode.
 */

/**
 * Abstract base CBC mode.
 */
class CBC extends BlockCipherMode {
}
/**
 * CBC encryptor.
 */
CBC.Encryptor = class extends CBC {
  /**
   * Processes the data block at offset.
   *
   * @param {Array} words The data words to operate on.
   * @param {number} offset The offset where the block starts.
   *
   * @example
   *
   *     mode.processBlock(data.words, offset);
   */
  processBlock(words, offset) {
    // Shortcuts
    const cipher = this._cipher;
    const { blockSize } = cipher;

    // XOR and encrypt
    xorBlock.call(this, words, offset, blockSize);
    cipher.encryptBlock(words, offset);

    // Remember this block to use with next block
    this._prevBlock = words.slice(offset, offset + blockSize);
  }
};
/**
 * CBC decryptor.
 */
CBC.Decryptor = class extends CBC {
  /**
   * Processes the data block at offset.
   *
   * @param {Array} words The data words to operate on.
   * @param {number} offset The offset where the block starts.
   *
   * @example
   *
   *     mode.processBlock(data.words, offset);
   */
  processBlock(words, offset) {
    // Shortcuts
    const cipher = this._cipher;
    const { blockSize } = cipher;

    // Remember this block to use with next block
    const thisBlock = words.slice(offset, offset + blockSize);

    // Decrypt and XOR
    cipher.decryptBlock(words, offset);
    xorBlock.call(this, words, offset, blockSize);

    // This block becomes the previous block
    this._prevBlock = thisBlock;
  }
};

/**
 * PKCS #5/7 padding strategy.
 */
const Pkcs7 = {
  /**
   * Pads data using the algorithm defined in PKCS #5/7.
   *
   * @param {WordArray} data The data to pad.
   * @param {number} blockSize The multiple that the data should be padded to.
   *
   * @static
   *
   * @example
   *
   *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
   */
  pad(data, blockSize) {
    // Shortcut
    const blockSizeBytes = blockSize * 4;

    // Count padding bytes
    const nPaddingBytes = blockSizeBytes - (data.sigBytes % blockSizeBytes);

    // Create padding word
    const paddingWord = (nPaddingBytes << 24)
      | (nPaddingBytes << 16)
      | (nPaddingBytes << 8)
      | nPaddingBytes;

    // Create padding
    const paddingWords = [];
    for (let i = 0; i < nPaddingBytes; i += 4) {
      paddingWords.push(paddingWord);
    }
    const padding = _core_js__WEBPACK_IMPORTED_MODULE_0__["WordArray"].create(paddingWords, nPaddingBytes);

    // Add padding
    data.concat(padding);
  },

  /**
   * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
   *
   * @param {WordArray} data The data to unpad.
   *
   * @static
   *
   * @example
   *
   *     CryptoJS.pad.Pkcs7.unpad(wordArray);
   */
  unpad(data) {
    const _data = data;

    // Get number of padding bytes from last byte
    const nPaddingBytes = _data.words[(_data.sigBytes - 1) >>> 2] & 0xff;

    // Remove padding
    _data.sigBytes -= nPaddingBytes;
  },
};

/**
 * Abstract base block cipher template.
 *
 * @property {number} blockSize
 *
 *    The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
 */
class BlockCipher extends Cipher {
  constructor(xformMode, key, cfg) {
    /**
     * Configuration options.
     *
     * @property {Mode} mode The block mode to use. Default: CBC
     * @property {Padding} padding The padding strategy to use. Default: Pkcs7
     */
    super(xformMode, key, Object.assign(
      {
        mode: CBC,
        padding: Pkcs7,
      },
      cfg,
    ));

    this.blockSize = 128 / 32;
  }

  reset() {
    let modeCreator;

    // Reset cipher
    super.reset.call(this);

    // Shortcuts
    const { cfg } = this;
    const { iv, mode } = cfg;

    // Reset block mode
    if (this._xformMode === this.constructor._ENC_XFORM_MODE) {
      modeCreator = mode.createEncryptor;
    } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
      modeCreator = mode.createDecryptor;
      // Keep at least one block in the buffer for unpadding
      this._minBufferSize = 1;
    }

    this._mode = modeCreator.call(mode, this, iv && iv.words);
    this._mode.__creator = modeCreator;
  }

  _doProcessBlock(words, offset) {
    this._mode.processBlock(words, offset);
  }

  _doFinalize() {
    let finalProcessedBlocks;

    // Shortcut
    const { padding } = this.cfg;

    // Finalize
    if (this._xformMode === this.constructor._ENC_XFORM_MODE) {
      // Pad data
      padding.pad(this._data, this.blockSize);

      // Process final blocks
      finalProcessedBlocks = this._process(!!'flush');
    } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
      // Process final blocks
      finalProcessedBlocks = this._process(!!'flush');

      // Unpad data
      padding.unpad(finalProcessedBlocks);
    }

    return finalProcessedBlocks;
  }
}

/**
 * A collection of cipher parameters.
 *
 * @property {WordArray} ciphertext The raw ciphertext.
 * @property {WordArray} key The key to this ciphertext.
 * @property {WordArray} iv The IV used in the ciphering operation.
 * @property {WordArray} salt The salt used with a key derivation function.
 * @property {Cipher} algorithm The cipher algorithm.
 * @property {Mode} mode The block mode used in the ciphering operation.
 * @property {Padding} padding The padding scheme used in the ciphering operation.
 * @property {number} blockSize The block size of the cipher.
 * @property {Format} formatter
 *    The default formatting strategy to convert this cipher params object to a string.
 */
class CipherParams extends _core_js__WEBPACK_IMPORTED_MODULE_0__["Base"] {
  /**
   * Initializes a newly created cipher params object.
   *
   * @param {Object} cipherParams An object with any of the possible cipher parameters.
   *
   * @example
   *
   *     var cipherParams = CryptoJS.lib.CipherParams.create({
   *         ciphertext: ciphertextWordArray,
   *         key: keyWordArray,
   *         iv: ivWordArray,
   *         salt: saltWordArray,
   *         algorithm: CryptoJS.algo.AES,
   *         mode: CryptoJS.mode.CBC,
   *         padding: CryptoJS.pad.PKCS7,
   *         blockSize: 4,
   *         formatter: CryptoJS.format.OpenSSL
   *     });
   */
  constructor(cipherParams) {
    super();

    this.mixIn(cipherParams);
  }

  /**
   * Converts this cipher params object to a string.
   *
   * @param {Format} formatter (Optional) The formatting strategy to use.
   *
   * @return {string} The stringified cipher params.
   *
   * @throws Error If neither the formatter nor the default formatter is set.
   *
   * @example
   *
   *     var string = cipherParams + '';
   *     var string = cipherParams.toString();
   *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
   */
  toString(formatter) {
    return (formatter || this.formatter).stringify(this);
  }
}

/**
 * OpenSSL formatting strategy.
 */
const OpenSSLFormatter = {
  /**
   * Converts a cipher params object to an OpenSSL-compatible string.
   *
   * @param {CipherParams} cipherParams The cipher params object.
   *
   * @return {string} The OpenSSL-compatible string.
   *
   * @static
   *
   * @example
   *
   *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
   */
  stringify(cipherParams) {
    let wordArray;

    // Shortcuts
    const { ciphertext, salt } = cipherParams;

    // Format
    if (salt) {
      wordArray = _core_js__WEBPACK_IMPORTED_MODULE_0__["WordArray"].create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
    } else {
      wordArray = ciphertext;
    }

    return wordArray.toString(_enc_base64_js__WEBPACK_IMPORTED_MODULE_1__["Base64"]);
  },

  /**
   * Converts an OpenSSL-compatible string to a cipher params object.
   *
   * @param {string} openSSLStr The OpenSSL-compatible string.
   *
   * @return {CipherParams} The cipher params object.
   *
   * @static
   *
   * @example
   *
   *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
   */
  parse(openSSLStr) {
    let salt;

    // Parse base64
    const ciphertext = _enc_base64_js__WEBPACK_IMPORTED_MODULE_1__["Base64"].parse(openSSLStr);

    // Shortcut
    const ciphertextWords = ciphertext.words;

    // Test for salt
    if (ciphertextWords[0] === 0x53616c74 && ciphertextWords[1] === 0x65645f5f) {
      // Extract salt
      salt = _core_js__WEBPACK_IMPORTED_MODULE_0__["WordArray"].create(ciphertextWords.slice(2, 4));

      // Remove salt from ciphertext
      ciphertextWords.splice(0, 4);
      ciphertext.sigBytes -= 16;
    }

    return CipherParams.create({ ciphertext, salt });
  },
};

/**
 * A cipher wrapper that returns ciphertext as a serializable cipher params object.
 */
class SerializableCipher extends _core_js__WEBPACK_IMPORTED_MODULE_0__["Base"] {
  /**
   * Encrypts a message.
   *
   * @param {Cipher} cipher The cipher algorithm to use.
   * @param {WordArray|string} message The message to encrypt.
   * @param {WordArray} key The key.
   * @param {Object} cfg (Optional) The configuration options to use for this operation.
   *
   * @return {CipherParams} A cipher params object.
   *
   * @static
   *
   * @example
   *
   *     var ciphertextParams = CryptoJS.lib.SerializableCipher
   *       .encrypt(CryptoJS.algo.AES, message, key);
   *     var ciphertextParams = CryptoJS.lib.SerializableCipher
   *       .encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
   *     var ciphertextParams = CryptoJS.lib.SerializableCipher
   *       .encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
   */
  static encrypt(cipher, message, key, cfg) {
    // Apply config defaults
    const _cfg = Object.assign(new _core_js__WEBPACK_IMPORTED_MODULE_0__["Base"](), this.cfg, cfg);

    // Encrypt
    const encryptor = cipher.createEncryptor(key, _cfg);
    const ciphertext = encryptor.finalize(message);

    // Shortcut
    const cipherCfg = encryptor.cfg;

    // Create and return serializable cipher params
    return CipherParams.create({
      ciphertext,
      key,
      iv: cipherCfg.iv,
      algorithm: cipher,
      mode: cipherCfg.mode,
      padding: cipherCfg.padding,
      blockSize: encryptor.blockSize,
      formatter: _cfg.format,
    });
  }

  /**
   * Decrypts serialized ciphertext.
   *
   * @param {Cipher} cipher The cipher algorithm to use.
   * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
   * @param {WordArray} key The key.
   * @param {Object} cfg (Optional) The configuration options to use for this operation.
   *
   * @return {WordArray} The plaintext.
   *
   * @static
   *
   * @example
   *
   *     var plaintext = CryptoJS.lib.SerializableCipher
   *       .decrypt(CryptoJS.algo.AES, formattedCiphertext, key,
   *         { iv: iv, format: CryptoJS.format.OpenSSL });
   *     var plaintext = CryptoJS.lib.SerializableCipher
   *       .decrypt(CryptoJS.algo.AES, ciphertextParams, key,
   *         { iv: iv, format: CryptoJS.format.OpenSSL });
   */
  static decrypt(cipher, ciphertext, key, cfg) {
    let _ciphertext = ciphertext;

    // Apply config defaults
    const _cfg = Object.assign(new _core_js__WEBPACK_IMPORTED_MODULE_0__["Base"](), this.cfg, cfg);

    // Convert string to CipherParams
    _ciphertext = this._parse(_ciphertext, _cfg.format);

    // Decrypt
    const plaintext = cipher.createDecryptor(key, _cfg).finalize(_ciphertext.ciphertext);

    return plaintext;
  }

  /**
   * Converts serialized ciphertext to CipherParams,
   * else assumed CipherParams already and returns ciphertext unchanged.
   *
   * @param {CipherParams|string} ciphertext The ciphertext.
   * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
   *
   * @return {CipherParams} The unserialized ciphertext.
   *
   * @static
   *
   * @example
   *
   *     var ciphertextParams = CryptoJS.lib.SerializableCipher
   *       ._parse(ciphertextStringOrParams, format);
   */
  static _parse(ciphertext, format) {
    if (typeof ciphertext === 'string') {
      return format.parse(ciphertext, this);
    }
    return ciphertext;
  }
}
/**
 * Configuration options.
 *
 * @property {Formatter} format
 *
 *    The formatting strategy to convert cipher param objects to and from a string.
 *    Default: OpenSSL
 */
SerializableCipher.cfg = Object.assign(
  new _core_js__WEBPACK_IMPORTED_MODULE_0__["Base"](),
  { format: OpenSSLFormatter },
);

/**
 * OpenSSL key derivation function.
 */
const OpenSSLKdf = {
  /**
   * Derives a key and IV from a password.
   *
   * @param {string} password The password to derive from.
   * @param {number} keySize The size in words of the key to generate.
   * @param {number} ivSize The size in words of the IV to generate.
   * @param {WordArray|string} salt
   *     (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
   *
   * @return {CipherParams} A cipher params object with the key, IV, and salt.
   *
   * @static
   *
   * @example
   *
   *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
   *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
   */
  execute(password, keySize, ivSize, salt) {
    let _salt = salt;

    // Generate random salt
    if (!_salt) {
      _salt = _core_js__WEBPACK_IMPORTED_MODULE_0__["WordArray"].random(64 / 8);
    }

    // Derive key and IV
    const key = _evpkdf_js__WEBPACK_IMPORTED_MODULE_2__["EvpKDFAlgo"].create({ keySize: keySize + ivSize }).compute(password, _salt);

    // Separate key and IV
    const iv = _core_js__WEBPACK_IMPORTED_MODULE_0__["WordArray"].create(key.words.slice(keySize), ivSize * 4);
    key.sigBytes = keySize * 4;

    // Return params
    return CipherParams.create({ key, iv, salt: _salt });
  },
};

/**
 * A serializable cipher wrapper that derives the key from a password,
 * and returns ciphertext as a serializable cipher params object.
 */
class PasswordBasedCipher extends SerializableCipher {
  /**
   * Encrypts a message using a password.
   *
   * @param {Cipher} cipher The cipher algorithm to use.
   * @param {WordArray|string} message The message to encrypt.
   * @param {string} password The password.
   * @param {Object} cfg (Optional) The configuration options to use for this operation.
   *
   * @return {CipherParams} A cipher params object.
   *
   * @static
   *
   * @example
   *
   *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher
   *       .encrypt(CryptoJS.algo.AES, message, 'password');
   *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher
   *       .encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
   */
  static encrypt(cipher, message, password, cfg) {
    // Apply config defaults
    const _cfg = Object.assign(new _core_js__WEBPACK_IMPORTED_MODULE_0__["Base"](), this.cfg, cfg);

    // Derive key and other params
    const derivedParams = _cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);

    // Add IV to config
    _cfg.iv = derivedParams.iv;

    // Encrypt
    const ciphertext = SerializableCipher.encrypt
      .call(this, cipher, message, derivedParams.key, _cfg);

    // Mix in derived params
    ciphertext.mixIn(derivedParams);

    return ciphertext;
  }

  /**
   * Decrypts serialized ciphertext using a password.
   *
   * @param {Cipher} cipher The cipher algorithm to use.
   * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
   * @param {string} password The password.
   * @param {Object} cfg (Optional) The configuration options to use for this operation.
   *
   * @return {WordArray} The plaintext.
   *
   * @static
   *
   * @example
   *
   *     var plaintext = CryptoJS.lib.PasswordBasedCipher
   *       .decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password',
   *         { format: CryptoJS.format.OpenSSL });
   *     var plaintext = CryptoJS.lib.PasswordBasedCipher
   *       .decrypt(CryptoJS.algo.AES, ciphertextParams, 'password',
   *         { format: CryptoJS.format.OpenSSL });
   */
  static decrypt(cipher, ciphertext, password, cfg) {
    let _ciphertext = ciphertext;

    // Apply config defaults
    const _cfg = Object.assign(new _core_js__WEBPACK_IMPORTED_MODULE_0__["Base"](), this.cfg, cfg);

    // Convert string to CipherParams
    _ciphertext = this._parse(_ciphertext, _cfg.format);

    // Derive key and other params
    const derivedParams = _cfg.kdf
      .execute(password, cipher.keySize, cipher.ivSize, _ciphertext.salt);

    // Add IV to config
    _cfg.iv = derivedParams.iv;

    // Decrypt
    const plaintext = SerializableCipher.decrypt
      .call(this, cipher, _ciphertext, derivedParams.key, _cfg);

    return plaintext;
  }
}
/**
 * Configuration options.
 *
 * @property {KDF} kdf
 *     The key derivation function to use to generate a key and IV from a password.
 *     Default: OpenSSL
 */
PasswordBasedCipher.cfg = Object.assign(SerializableCipher.cfg, { kdf: OpenSSLKdf });


/***/ }),

/***/ "./node_modules/crypto-es/lib/core.js":
/*!********************************************!*\
  !*** ./node_modules/crypto-es/lib/core.js ***!
  \********************************************/
/*! exports provided: Base, WordArray, Hex, Latin1, Utf8, BufferedBlockAlgorithm, Hasher, HMAC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base", function() { return Base; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordArray", function() { return WordArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hex", function() { return Hex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Latin1", function() { return Latin1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utf8", function() { return Utf8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferedBlockAlgorithm", function() { return BufferedBlockAlgorithm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hasher", function() { return Hasher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HMAC", function() { return HMAC; });
/* eslint-disable no-use-before-define */

/**
 * Base class for inheritance.
 */
class Base {
  /**
   * Extends this object and runs the init method.
   * Arguments to create() will be passed to init().
   *
   * @return {Object} The new object.
   *
   * @static
   *
   * @example
   *
   *     var instance = MyType.create();
   */
  static create(...args) {
    return new this(...args);
  }

  /**
   * Copies properties into this object.
   *
   * @param {Object} properties The properties to mix in.
   *
   * @example
   *
   *     MyType.mixIn({
   *         field: 'value'
   *     });
   */
  mixIn(properties) {
    return Object.assign(this, properties);
  }

  /**
   * Creates a copy of this object.
   *
   * @return {Object} The clone.
   *
   * @example
   *
   *     var clone = instance.clone();
   */
  clone() {
    const clone = new this.constructor();
    Object.assign(clone, this);
    return clone;
  }
}

/**
 * An array of 32-bit words.
 *
 * @property {Array} words The array of 32-bit words.
 * @property {number} sigBytes The number of significant bytes in this word array.
 */
class WordArray extends Base {
  /**
   * Initializes a newly created word array.
   *
   * @param {Array} words (Optional) An array of 32-bit words.
   * @param {number} sigBytes (Optional) The number of significant bytes in the words.
   *
   * @example
   *
   *     var wordArray = CryptoJS.lib.WordArray.create();
   *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
   *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
   */
  constructor(words = [], sigBytes = words.length * 4) {
    super();

    let typedArray = words;
    // Convert buffers to uint8
    if (typedArray instanceof ArrayBuffer) {
      typedArray = new Uint8Array(typedArray);
    }

    // Convert other array views to uint8
    if (
      typedArray instanceof Int8Array
      || typedArray instanceof Uint8ClampedArray
      || typedArray instanceof Int16Array
      || typedArray instanceof Uint16Array
      || typedArray instanceof Int32Array
      || typedArray instanceof Uint32Array
      || typedArray instanceof Float32Array
      || typedArray instanceof Float64Array
    ) {
      typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
    }

    // Handle Uint8Array
    if (typedArray instanceof Uint8Array) {
      // Shortcut
      const typedArrayByteLength = typedArray.byteLength;

      // Extract bytes
      const _words = [];
      for (let i = 0; i < typedArrayByteLength; i += 1) {
        _words[i >>> 2] |= typedArray[i] << (24 - (i % 4) * 8);
      }

      // Initialize this word array
      this.words = _words;
      this.sigBytes = typedArrayByteLength;
    } else {
      // Else call normal init
      this.words = words;
      this.sigBytes = sigBytes;
    }
  }

  /**
   * Creates a word array filled with random bytes.
   *
   * @param {number} nBytes The number of random bytes to generate.
   *
   * @return {WordArray} The random word array.
   *
   * @static
   *
   * @example
   *
   *     var wordArray = CryptoJS.lib.WordArray.random(16);
   */
  static random(nBytes) {
    const words = [];

    const r = (m_w) => {
      let _m_w = m_w;
      let _m_z = 0x3ade68b1;
      const mask = 0xffffffff;

      return () => {
        _m_z = (0x9069 * (_m_z & 0xFFFF) + (_m_z >> 0x10)) & mask;
        _m_w = (0x4650 * (_m_w & 0xFFFF) + (_m_w >> 0x10)) & mask;
        let result = ((_m_z << 0x10) + _m_w) & mask;
        result /= 0x100000000;
        result += 0.5;
        return result * (Math.random() > 0.5 ? 1 : -1);
      };
    };

    for (let i = 0, rcache; i < nBytes; i += 4) {
      const _r = r((rcache || Math.random()) * 0x100000000);

      rcache = _r() * 0x3ade67b7;
      words.push((_r() * 0x100000000) | 0);
    }

    return new WordArray(words, nBytes);
  }

  /**
   * Converts this word array to a string.
   *
   * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
   *
   * @return {string} The stringified word array.
   *
   * @example
   *
   *     var string = wordArray + '';
   *     var string = wordArray.toString();
   *     var string = wordArray.toString(CryptoJS.enc.Utf8);
   */
  toString(encoder = Hex) {
    return encoder.stringify(this);
  }

  /**
   * Concatenates a word array to this word array.
   *
   * @param {WordArray} wordArray The word array to append.
   *
   * @return {WordArray} This word array.
   *
   * @example
   *
   *     wordArray1.concat(wordArray2);
   */
  concat(wordArray) {
    // Shortcuts
    const thisWords = this.words;
    const thatWords = wordArray.words;
    const thisSigBytes = this.sigBytes;
    const thatSigBytes = wordArray.sigBytes;

    // Clamp excess bits
    this.clamp();

    // Concat
    if (thisSigBytes % 4) {
      // Copy one byte at a time
      for (let i = 0; i < thatSigBytes; i += 1) {
        const thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
        thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
      }
    } else {
      // Copy one word at a time
      for (let i = 0; i < thatSigBytes; i += 4) {
        thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
      }
    }
    this.sigBytes += thatSigBytes;

    // Chainable
    return this;
  }

  /**
   * Removes insignificant bits.
   *
   * @example
   *
   *     wordArray.clamp();
   */
  clamp() {
    // Shortcuts
    const { words, sigBytes } = this;

    // Clamp
    words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
    words.length = Math.ceil(sigBytes / 4);
  }

  /**
   * Creates a copy of this word array.
   *
   * @return {WordArray} The clone.
   *
   * @example
   *
   *     var clone = wordArray.clone();
   */
  clone() {
    const clone = super.clone.call(this);
    clone.words = this.words.slice(0);

    return clone;
  }
}

/**
 * Hex encoding strategy.
 */
const Hex = {
  /**
   * Converts a word array to a hex string.
   *
   * @param {WordArray} wordArray The word array.
   *
   * @return {string} The hex string.
   *
   * @static
   *
   * @example
   *
   *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
   */
  stringify(wordArray) {
    // Shortcuts
    const { words, sigBytes } = wordArray;

    // Convert
    const hexChars = [];
    for (let i = 0; i < sigBytes; i += 1) {
      const bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
      hexChars.push((bite >>> 4).toString(16));
      hexChars.push((bite & 0x0f).toString(16));
    }

    return hexChars.join('');
  },

  /**
   * Converts a hex string to a word array.
   *
   * @param {string} hexStr The hex string.
   *
   * @return {WordArray} The word array.
   *
   * @static
   *
   * @example
   *
   *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
   */
  parse(hexStr) {
    // Shortcut
    const hexStrLength = hexStr.length;

    // Convert
    const words = [];
    for (let i = 0; i < hexStrLength; i += 2) {
      words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
    }

    return new WordArray(words, hexStrLength / 2);
  },
};

/**
 * Latin1 encoding strategy.
 */
const Latin1 = {
  /**
   * Converts a word array to a Latin1 string.
   *
   * @param {WordArray} wordArray The word array.
   *
   * @return {string} The Latin1 string.
   *
   * @static
   *
   * @example
   *
   *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
   */
  stringify(wordArray) {
    // Shortcuts
    const { words, sigBytes } = wordArray;

    // Convert
    const latin1Chars = [];
    for (let i = 0; i < sigBytes; i += 1) {
      const bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
      latin1Chars.push(String.fromCharCode(bite));
    }

    return latin1Chars.join('');
  },

  /**
   * Converts a Latin1 string to a word array.
   *
   * @param {string} latin1Str The Latin1 string.
   *
   * @return {WordArray} The word array.
   *
   * @static
   *
   * @example
   *
   *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
   */
  parse(latin1Str) {
    // Shortcut
    const latin1StrLength = latin1Str.length;

    // Convert
    const words = [];
    for (let i = 0; i < latin1StrLength; i += 1) {
      words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
    }

    return new WordArray(words, latin1StrLength);
  },
};

/**
 * UTF-8 encoding strategy.
 */
const Utf8 = {
  /**
   * Converts a word array to a UTF-8 string.
   *
   * @param {WordArray} wordArray The word array.
   *
   * @return {string} The UTF-8 string.
   *
   * @static
   *
   * @example
   *
   *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
   */
  stringify(wordArray) {
    try {
      return decodeURIComponent(escape(Latin1.stringify(wordArray)));
    } catch (e) {
      throw new Error('Malformed UTF-8 data');
    }
  },

  /**
   * Converts a UTF-8 string to a word array.
   *
   * @param {string} utf8Str The UTF-8 string.
   *
   * @return {WordArray} The word array.
   *
   * @static
   *
   * @example
   *
   *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
   */
  parse(utf8Str) {
    return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
  },
};

/**
 * Abstract buffered block algorithm template.
 *
 * The property blockSize must be implemented in a concrete subtype.
 *
 * @property {number} _minBufferSize
 *
 *     The number of blocks that should be kept unprocessed in the buffer. Default: 0
 */
class BufferedBlockAlgorithm extends Base {
  constructor() {
    super();
    this._minBufferSize = 0;
  }

  /**
   * Resets this block algorithm's data buffer to its initial state.
   *
   * @example
   *
   *     bufferedBlockAlgorithm.reset();
   */
  reset() {
    // Initial values
    this._data = new WordArray();
    this._nDataBytes = 0;
  }

  /**
   * Adds new data to this block algorithm's buffer.
   *
   * @param {WordArray|string} data
   *
   *     The data to append. Strings are converted to a WordArray using UTF-8.
   *
   * @example
   *
   *     bufferedBlockAlgorithm._append('data');
   *     bufferedBlockAlgorithm._append(wordArray);
   */
  _append(data) {
    let m_data = data;

    // Convert string to WordArray, else assume WordArray already
    if (typeof m_data === 'string') {
      m_data = Utf8.parse(m_data);
    }

    // Append
    this._data.concat(m_data);
    this._nDataBytes += m_data.sigBytes;
  }

  /**
   * Processes available data blocks.
   *
   * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
   *
   * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
   *
   * @return {WordArray} The processed data.
   *
   * @example
   *
   *     var processedData = bufferedBlockAlgorithm._process();
   *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
   */
  _process(doFlush) {
    let processedWords;

    // Shortcuts
    const { _data: data, blockSize } = this;
    const dataWords = data.words;
    const dataSigBytes = data.sigBytes;
    const blockSizeBytes = blockSize * 4;

    // Count blocks ready
    let nBlocksReady = dataSigBytes / blockSizeBytes;
    if (doFlush) {
      // Round up to include partial blocks
      nBlocksReady = Math.ceil(nBlocksReady);
    } else {
      // Round down to include only full blocks,
      // less the number of blocks that must remain in the buffer
      nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
    }

    // Count words ready
    const nWordsReady = nBlocksReady * blockSize;

    // Count bytes ready
    const nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

    // Process blocks
    if (nWordsReady) {
      for (let offset = 0; offset < nWordsReady; offset += blockSize) {
        // Perform concrete-algorithm logic
        this._doProcessBlock(dataWords, offset);
      }

      // Remove processed words
      processedWords = dataWords.splice(0, nWordsReady);
      data.sigBytes -= nBytesReady;
    }

    // Return processed words
    return new WordArray(processedWords, nBytesReady);
  }

  /**
   * Creates a copy of this object.
   *
   * @return {Object} The clone.
   *
   * @example
   *
   *     var clone = bufferedBlockAlgorithm.clone();
   */
  clone() {
    const clone = super.clone.call(this);
    clone._data = this._data.clone();

    return clone;
  }
}

/**
 * Abstract hasher template.
 *
 * @property {number} blockSize
 *
 *     The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
 */
class Hasher extends BufferedBlockAlgorithm {
  constructor(cfg) {
    super();

    this.blockSize = 512 / 32;

    /**
     * Configuration options.
     */
    this.cfg = Object.assign(new Base(), cfg);

    // Set initial values
    this.reset();
  }

  /**
   * Creates a shortcut function to a hasher's object interface.
   *
   * @param {Hasher} SubHasher The hasher to create a helper for.
   *
   * @return {Function} The shortcut function.
   *
   * @static
   *
   * @example
   *
   *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
   */
  static _createHelper(SubHasher) {
    return (message, cfg) => new SubHasher(cfg).finalize(message);
  }

  /**
   * Creates a shortcut function to the HMAC's object interface.
   *
   * @param {Hasher} SubHasher The hasher to use in this HMAC helper.
   *
   * @return {Function} The shortcut function.
   *
   * @static
   *
   * @example
   *
   *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
   */
  static _createHmacHelper(SubHasher) {
    return (message, key) => new HMAC(SubHasher, key).finalize(message);
  }

  /**
   * Resets this hasher to its initial state.
   *
   * @example
   *
   *     hasher.reset();
   */
  reset() {
    // Reset data buffer
    super.reset.call(this);

    // Perform concrete-hasher logic
    this._doReset();
  }

  /**
   * Updates this hasher with a message.
   *
   * @param {WordArray|string} messageUpdate The message to append.
   *
   * @return {Hasher} This hasher.
   *
   * @example
   *
   *     hasher.update('message');
   *     hasher.update(wordArray);
   */
  update(messageUpdate) {
    // Append
    this._append(messageUpdate);

    // Update the hash
    this._process();

    // Chainable
    return this;
  }

  /**
   * Finalizes the hash computation.
   * Note that the finalize operation is effectively a destructive, read-once operation.
   *
   * @param {WordArray|string} messageUpdate (Optional) A final message update.
   *
   * @return {WordArray} The hash.
   *
   * @example
   *
   *     var hash = hasher.finalize();
   *     var hash = hasher.finalize('message');
   *     var hash = hasher.finalize(wordArray);
   */
  finalize(messageUpdate) {
    // Final message update
    if (messageUpdate) {
      this._append(messageUpdate);
    }

    // Perform concrete-hasher logic
    const hash = this._doFinalize();

    return hash;
  }
}

/**
 * HMAC algorithm.
 */
class HMAC extends Base {
  /**
   * Initializes a newly created HMAC.
   *
   * @param {Hasher} SubHasher The hash algorithm to use.
   * @param {WordArray|string} key The secret key.
   *
   * @example
   *
   *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
   */
  constructor(SubHasher, key) {
    super();

    const hasher = new SubHasher();
    this._hasher = hasher;

    // Convert string to WordArray, else assume WordArray already
    let _key = key;
    if (typeof _key === 'string') {
      _key = Utf8.parse(_key);
    }

    // Shortcuts
    const hasherBlockSize = hasher.blockSize;
    const hasherBlockSizeBytes = hasherBlockSize * 4;

    // Allow arbitrary length keys
    if (_key.sigBytes > hasherBlockSizeBytes) {
      _key = hasher.finalize(key);
    }

    // Clamp excess bits
    _key.clamp();

    // Clone key for inner and outer pads
    const oKey = _key.clone();
    this._oKey = oKey;
    const iKey = _key.clone();
    this._iKey = iKey;

    // Shortcuts
    const oKeyWords = oKey.words;
    const iKeyWords = iKey.words;

    // XOR keys with pad constants
    for (let i = 0; i < hasherBlockSize; i += 1) {
      oKeyWords[i] ^= 0x5c5c5c5c;
      iKeyWords[i] ^= 0x36363636;
    }
    oKey.sigBytes = hasherBlockSizeBytes;
    iKey.sigBytes = hasherBlockSizeBytes;

    // Set initial values
    this.reset();
  }

  /**
   * Resets this HMAC to its initial state.
   *
   * @example
   *
   *     hmacHasher.reset();
   */
  reset() {
    // Shortcut
    const hasher = this._hasher;

    // Reset
    hasher.reset();
    hasher.update(this._iKey);
  }

  /**
   * Updates this HMAC with a message.
   *
   * @param {WordArray|string} messageUpdate The message to append.
   *
   * @return {HMAC} This HMAC instance.
   *
   * @example
   *
   *     hmacHasher.update('message');
   *     hmacHasher.update(wordArray);
   */
  update(messageUpdate) {
    this._hasher.update(messageUpdate);

    // Chainable
    return this;
  }

  /**
   * Finalizes the HMAC computation.
   * Note that the finalize operation is effectively a destructive, read-once operation.
   *
   * @param {WordArray|string} messageUpdate (Optional) A final message update.
   *
   * @return {WordArray} The HMAC.
   *
   * @example
   *
   *     var hmac = hmacHasher.finalize();
   *     var hmac = hmacHasher.finalize('message');
   *     var hmac = hmacHasher.finalize(wordArray);
   */
  finalize(messageUpdate) {
    // Shortcut
    const hasher = this._hasher;

    // Compute HMAC
    const innerHash = hasher.finalize(messageUpdate);
    hasher.reset();
    const hmac = hasher.finalize(this._oKey.clone().concat(innerHash));

    return hmac;
  }
}


/***/ }),

/***/ "./node_modules/crypto-es/lib/enc-base64.js":
/*!**************************************************!*\
  !*** ./node_modules/crypto-es/lib/enc-base64.js ***!
  \**************************************************/
/*! exports provided: Base64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base64", function() { return Base64; });
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./node_modules/crypto-es/lib/core.js");


const parseLoop = (base64Str, base64StrLength, reverseMap) => {
  const words = [];
  let nBytes = 0;
  for (let i = 0; i < base64StrLength; i += 1) {
    if (i % 4) {
      const bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
      const bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
      const bitsCombined = bits1 | bits2;
      words[nBytes >>> 2] |= bitsCombined << (24 - (nBytes % 4) * 8);
      nBytes += 1;
    }
  }
  return _core_js__WEBPACK_IMPORTED_MODULE_0__["WordArray"].create(words, nBytes);
};

/**
 * Base64 encoding strategy.
 */
const Base64 = {
  /**
   * Converts a word array to a Base64 string.
   *
   * @param {WordArray} wordArray The word array.
   *
   * @return {string} The Base64 string.
   *
   * @static
   *
   * @example
   *
   *     const base64String = CryptoJS.enc.Base64.stringify(wordArray);
   */
  stringify(wordArray) {
    // Shortcuts
    const { words, sigBytes } = wordArray;
    const map = this._map;

    // Clamp excess bits
    wordArray.clamp();

    // Convert
    const base64Chars = [];
    for (let i = 0; i < sigBytes; i += 3) {
      const byte1 = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
      const byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
      const byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

      const triplet = (byte1 << 16) | (byte2 << 8) | byte3;

      for (let j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j += 1) {
        base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
      }
    }

    // Add padding
    const paddingChar = map.charAt(64);
    if (paddingChar) {
      while (base64Chars.length % 4) {
        base64Chars.push(paddingChar);
      }
    }

    return base64Chars.join('');
  },

  /**
   * Converts a Base64 string to a word array.
   *
   * @param {string} base64Str The Base64 string.
   *
   * @return {WordArray} The word array.
   *
   * @static
   *
   * @example
   *
   *     const wordArray = CryptoJS.enc.Base64.parse(base64String);
   */
  parse(base64Str) {
    // Shortcuts
    let base64StrLength = base64Str.length;
    const map = this._map;
    let reverseMap = this._reverseMap;

    if (!reverseMap) {
      this._reverseMap = [];
      reverseMap = this._reverseMap;
      for (let j = 0; j < map.length; j += 1) {
        reverseMap[map.charCodeAt(j)] = j;
      }
    }

    // Ignore padding
    const paddingChar = map.charAt(64);
    if (paddingChar) {
      const paddingIndex = base64Str.indexOf(paddingChar);
      if (paddingIndex !== -1) {
        base64StrLength = paddingIndex;
      }
    }

    // Convert
    return parseLoop(base64Str, base64StrLength, reverseMap);
  },

  _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
};


/***/ }),

/***/ "./node_modules/crypto-es/lib/enc-utf16.js":
/*!*************************************************!*\
  !*** ./node_modules/crypto-es/lib/enc-utf16.js ***!
  \*************************************************/
/*! exports provided: Utf16BE, Utf16, Utf16LE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utf16BE", function() { return Utf16BE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utf16", function() { return Utf16; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utf16LE", function() { return Utf16LE; });
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./node_modules/crypto-es/lib/core.js");


const swapEndian = word => ((word << 8) & 0xff00ff00) | ((word >>> 8) & 0x00ff00ff);

/**
 * UTF-16 BE encoding strategy.
 */
const Utf16BE = {
  /**
   * Converts a word array to a UTF-16 BE string.
   *
   * @param {WordArray} wordArray The word array.
   *
   * @return {string} The UTF-16 BE string.
   *
   * @static
   *
   * @example
   *
   *     const utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
   */
  stringify(wordArray) {
    // Shortcuts
    const { words, sigBytes } = wordArray;

    // Convert
    const utf16Chars = [];
    for (let i = 0; i < sigBytes; i += 2) {
      const codePoint = (words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff;
      utf16Chars.push(String.fromCharCode(codePoint));
    }

    return utf16Chars.join('');
  },

  /**
   * Converts a UTF-16 BE string to a word array.
   *
   * @param {string} utf16Str The UTF-16 BE string.
   *
   * @return {WordArray} The word array.
   *
   * @static
   *
   * @example
   *
   *     const wordArray = CryptoJS.enc.Utf16.parse(utf16String);
   */
  parse(utf16Str) {
    // Shortcut
    const utf16StrLength = utf16Str.length;

    // Convert
    const words = [];
    for (let i = 0; i < utf16StrLength; i += 1) {
      words[i >>> 1] |= utf16Str.charCodeAt(i) << (16 - (i % 2) * 16);
    }

    return _core_js__WEBPACK_IMPORTED_MODULE_0__["WordArray"].create(words, utf16StrLength * 2);
  },
};
const Utf16 = Utf16BE;

/**
 * UTF-16 LE encoding strategy.
 */
const Utf16LE = {
  /**
   * Converts a word array to a UTF-16 LE string.
   *
   * @param {WordArray} wordArray The word array.
   *
   * @return {string} The UTF-16 LE string.
   *
   * @static
   *
   * @example
   *
   *     const utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
   */
  stringify(wordArray) {
    // Shortcuts
    const { words, sigBytes } = wordArray;

    // Convert
    const utf16Chars = [];
    for (let i = 0; i < sigBytes; i += 2) {
      const codePoint = swapEndian((words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff);
      utf16Chars.push(String.fromCharCode(codePoint));
    }

    return utf16Chars.join('');
  },

  /**
   * Converts a UTF-16 LE string to a word array.
   *
   * @param {string} utf16Str The UTF-16 LE string.
   *
   * @return {WordArray} The word array.
   *
   * @static
   *
   * @example
   *
   *     const wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
   */
  parse(utf16Str) {
    // Shortcut
    const utf16StrLength = utf16Str.length;

    // Convert
    const words = [];
    for (let i = 0; i < utf16StrLength; i += 1) {
      words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << (16 - (i % 2) * 16));
    }

    return _core_js__WEBPACK_IMPORTED_MODULE_0__["WordArray"].create(words, utf16StrLength * 2);
  },
};


/***/ }),

/***/ "./node_modules/crypto-es/lib/evpkdf.js":
/*!**********************************************!*\
  !*** ./node_modules/crypto-es/lib/evpkdf.js ***!
  \**********************************************/
/*! exports provided: EvpKDFAlgo, EvpKDF */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvpKDFAlgo", function() { return EvpKDFAlgo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvpKDF", function() { return EvpKDF; });
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./node_modules/crypto-es/lib/core.js");
/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md5.js */ "./node_modules/crypto-es/lib/md5.js");



/**
 * This key derivation function is meant to conform with EVP_BytesToKey.
 * www.openssl.org/docs/crypto/EVP_BytesToKey.html
 */
class EvpKDFAlgo extends _core_js__WEBPACK_IMPORTED_MODULE_0__["Base"] {
  /**
   * Initializes a newly created key derivation function.
   *
   * @param {Object} cfg (Optional) The configuration options to use for the derivation.
   *
   * @example
   *
   *     const kdf = CryptoJS.algo.EvpKDF.create();
   *     const kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
   *     const kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
   */
  constructor(cfg) {
    super();

    /**
     * Configuration options.
     *
     * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
     * @property {Hasher} hasher The hash algorithm to use. Default: MD5
     * @property {number} iterations The number of iterations to perform. Default: 1
     */
    this.cfg = Object.assign(
      new _core_js__WEBPACK_IMPORTED_MODULE_0__["Base"](),
      {
        keySize: 128 / 32,
        hasher: _md5_js__WEBPACK_IMPORTED_MODULE_1__["MD5Algo"],
        iterations: 1,
      },
      cfg,
    );
  }

  /**
   * Derives a key from a password.
   *
   * @param {WordArray|string} password The password.
   * @param {WordArray|string} salt A salt.
   *
   * @return {WordArray} The derived key.
   *
   * @example
   *
   *     const key = kdf.compute(password, salt);
   */
  compute(password, salt) {
    let block;

    // Shortcut
    const { cfg } = this;

    // Init hasher
    const hasher = cfg.hasher.create();

    // Initial values
    const derivedKey = _core_js__WEBPACK_IMPORTED_MODULE_0__["WordArray"].create();

    // Shortcuts
    const derivedKeyWords = derivedKey.words;
    const { keySize, iterations } = cfg;

    // Generate key
    while (derivedKeyWords.length < keySize) {
      if (block) {
        hasher.update(block);
      }
      block = hasher.update(password).finalize(salt);
      hasher.reset();

      // Iterations
      for (let i = 1; i < iterations; i += 1) {
        block = hasher.finalize(block);
        hasher.reset();
      }

      derivedKey.concat(block);
    }
    derivedKey.sigBytes = keySize * 4;

    return derivedKey;
  }
}

/**
 * Derives a key from a password.
 *
 * @param {WordArray|string} password The password.
 * @param {WordArray|string} salt A salt.
 * @param {Object} cfg (Optional) The configuration options to use for this computation.
 *
 * @return {WordArray} The derived key.
 *
 * @static
 *
 * @example
 *
 *     var key = CryptoJS.EvpKDF(password, salt);
 *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
 *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
 */
const EvpKDF = (password, salt, cfg) => EvpKDFAlgo.create(cfg).compute(password, salt);


/***/ }),

/***/ "./node_modules/crypto-es/lib/format-hex.js":
/*!**************************************************!*\
  !*** ./node_modules/crypto-es/lib/format-hex.js ***!
  \**************************************************/
/*! exports provided: HexFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HexFormatter", function() { return HexFormatter; });
/* harmony import */ var _cipher_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cipher-core.js */ "./node_modules/crypto-es/lib/cipher-core.js");
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core.js */ "./node_modules/crypto-es/lib/core.js");



const HexFormatter = {
  /**
   * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
   *
   * @param {CipherParams} cipherParams The cipher params object.
   *
   * @return {string} The hexadecimally encoded string.
   *
   * @static
   *
   * @example
   *
   *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
   */
  stringify(cipherParams) {
    return cipherParams.ciphertext.toString(_core_js__WEBPACK_IMPORTED_MODULE_1__["Hex"]);
  },

  /**
   * Converts a hexadecimally encoded ciphertext string to a cipher params object.
   *
   * @param {string} input The hexadecimally encoded string.
   *
   * @return {CipherParams} The cipher params object.
   *
   * @static
   *
   * @example
   *
   *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
   */
  parse(input) {
    const ciphertext = _core_js__WEBPACK_IMPORTED_MODULE_1__["Hex"].parse(input);
    return _cipher_core_js__WEBPACK_IMPORTED_MODULE_0__["CipherParams"].create({ ciphertext });
  },
};


/***/ }),

/***/ "./node_modules/crypto-es/lib/hmac.js":
/*!********************************************!*\
  !*** ./node_modules/crypto-es/lib/hmac.js ***!
  \********************************************/
/*! exports provided: HMAC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./node_modules/crypto-es/lib/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HMAC", function() { return _core_js__WEBPACK_IMPORTED_MODULE_0__["HMAC"]; });




/***/ }),

/***/ "./node_modules/crypto-es/lib/index.js":
/*!*********************************************!*\
  !*** ./node_modules/crypto-es/lib/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./node_modules/crypto-es/lib/core.js");
/* harmony import */ var _x64_core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./x64-core.js */ "./node_modules/crypto-es/lib/x64-core.js");
/* harmony import */ var _cipher_core_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cipher-core.js */ "./node_modules/crypto-es/lib/cipher-core.js");
/* harmony import */ var _enc_utf16_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enc-utf16.js */ "./node_modules/crypto-es/lib/enc-utf16.js");
/* harmony import */ var _enc_base64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enc-base64.js */ "./node_modules/crypto-es/lib/enc-base64.js");
/* harmony import */ var _hmac_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hmac.js */ "./node_modules/crypto-es/lib/hmac.js");
/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./md5.js */ "./node_modules/crypto-es/lib/md5.js");
/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sha1.js */ "./node_modules/crypto-es/lib/sha1.js");
/* harmony import */ var _sha224_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sha224.js */ "./node_modules/crypto-es/lib/sha224.js");
/* harmony import */ var _sha256_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sha256.js */ "./node_modules/crypto-es/lib/sha256.js");
/* harmony import */ var _sha384_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sha384.js */ "./node_modules/crypto-es/lib/sha384.js");
/* harmony import */ var _sha512_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sha512.js */ "./node_modules/crypto-es/lib/sha512.js");
/* harmony import */ var _sha3_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sha3.js */ "./node_modules/crypto-es/lib/sha3.js");
/* harmony import */ var _ripemd160_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ripemd160.js */ "./node_modules/crypto-es/lib/ripemd160.js");
/* harmony import */ var _pbkdf2_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pbkdf2.js */ "./node_modules/crypto-es/lib/pbkdf2.js");
/* harmony import */ var _evpkdf_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./evpkdf.js */ "./node_modules/crypto-es/lib/evpkdf.js");
/* harmony import */ var _aes_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./aes.js */ "./node_modules/crypto-es/lib/aes.js");
/* harmony import */ var _tripledes_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tripledes.js */ "./node_modules/crypto-es/lib/tripledes.js");
/* harmony import */ var _rabbit_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./rabbit.js */ "./node_modules/crypto-es/lib/rabbit.js");
/* harmony import */ var _rabbit_legacy_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./rabbit-legacy.js */ "./node_modules/crypto-es/lib/rabbit-legacy.js");
/* harmony import */ var _rc4_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./rc4.js */ "./node_modules/crypto-es/lib/rc4.js");
/* harmony import */ var _mode_cfb_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mode-cfb.js */ "./node_modules/crypto-es/lib/mode-cfb.js");
/* harmony import */ var _mode_ctr_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mode-ctr.js */ "./node_modules/crypto-es/lib/mode-ctr.js");
/* harmony import */ var _mode_ctr_gladman_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./mode-ctr-gladman.js */ "./node_modules/crypto-es/lib/mode-ctr-gladman.js");
/* harmony import */ var _mode_ecb_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./mode-ecb.js */ "./node_modules/crypto-es/lib/mode-ecb.js");
/* harmony import */ var _mode_ofb_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./mode-ofb.js */ "./node_modules/crypto-es/lib/mode-ofb.js");
/* harmony import */ var _pad_ansix923_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pad-ansix923.js */ "./node_modules/crypto-es/lib/pad-ansix923.js");
/* harmony import */ var _pad_iso10126_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pad-iso10126.js */ "./node_modules/crypto-es/lib/pad-iso10126.js");
/* harmony import */ var _pad_iso97971_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pad-iso97971.js */ "./node_modules/crypto-es/lib/pad-iso97971.js");
/* harmony import */ var _pad_nopadding_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pad-nopadding.js */ "./node_modules/crypto-es/lib/pad-nopadding.js");
/* harmony import */ var _pad_zeropadding_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pad-zeropadding.js */ "./node_modules/crypto-es/lib/pad-zeropadding.js");
/* harmony import */ var _format_hex_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./format-hex.js */ "./node_modules/crypto-es/lib/format-hex.js");


































/* harmony default export */ __webpack_exports__["default"] = ({
  lib: {
    Base: _core_js__WEBPACK_IMPORTED_MODULE_0__["Base"],
    WordArray: _core_js__WEBPACK_IMPORTED_MODULE_0__["WordArray"],
    BufferedBlockAlgorithm: _core_js__WEBPACK_IMPORTED_MODULE_0__["BufferedBlockAlgorithm"],
    Hasher: _core_js__WEBPACK_IMPORTED_MODULE_0__["Hasher"],
    Cipher: _cipher_core_js__WEBPACK_IMPORTED_MODULE_2__["Cipher"],
    StreamCipher: _cipher_core_js__WEBPACK_IMPORTED_MODULE_2__["StreamCipher"],
    BlockCipherMode: _cipher_core_js__WEBPACK_IMPORTED_MODULE_2__["BlockCipherMode"],
    BlockCipher: _cipher_core_js__WEBPACK_IMPORTED_MODULE_2__["BlockCipher"],
    CipherParams: _cipher_core_js__WEBPACK_IMPORTED_MODULE_2__["CipherParams"],
    SerializableCipher: _cipher_core_js__WEBPACK_IMPORTED_MODULE_2__["SerializableCipher"],
    PasswordBasedCipher: _cipher_core_js__WEBPACK_IMPORTED_MODULE_2__["PasswordBasedCipher"],
  },

  x64: {
    Word: _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"],
    WordArray: _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64WordArray"],
  },

  enc: {
    Hex: _core_js__WEBPACK_IMPORTED_MODULE_0__["Hex"],
    Latin1: _core_js__WEBPACK_IMPORTED_MODULE_0__["Latin1"],
    Utf8: _core_js__WEBPACK_IMPORTED_MODULE_0__["Utf8"],
    Utf16: _enc_utf16_js__WEBPACK_IMPORTED_MODULE_3__["Utf16"],
    Utf16BE: _enc_utf16_js__WEBPACK_IMPORTED_MODULE_3__["Utf16BE"],
    Utf16LE: _enc_utf16_js__WEBPACK_IMPORTED_MODULE_3__["Utf16LE"],
    Base64: _enc_base64_js__WEBPACK_IMPORTED_MODULE_4__["Base64"],
  },

  algo: {
    HMAC: _hmac_js__WEBPACK_IMPORTED_MODULE_5__["HMAC"],
    MD5: _md5_js__WEBPACK_IMPORTED_MODULE_6__["MD5Algo"],
    SHA1: _sha1_js__WEBPACK_IMPORTED_MODULE_7__["SHA1Algo"],
    SHA224: _sha224_js__WEBPACK_IMPORTED_MODULE_8__["SHA224Algo"],
    SHA256: _sha256_js__WEBPACK_IMPORTED_MODULE_9__["SHA256Algo"],
    SHA384: _sha384_js__WEBPACK_IMPORTED_MODULE_10__["SHA384Algo"],
    SHA512: _sha512_js__WEBPACK_IMPORTED_MODULE_11__["SHA512Algo"],
    SHA3: _sha3_js__WEBPACK_IMPORTED_MODULE_12__["SHA3Algo"],
    RIPEMD160: _ripemd160_js__WEBPACK_IMPORTED_MODULE_13__["RIPEMD160Algo"],

    PBKDF2: _pbkdf2_js__WEBPACK_IMPORTED_MODULE_14__["PBKDF2Algo"],
    EvpKDF: _evpkdf_js__WEBPACK_IMPORTED_MODULE_15__["EvpKDFAlgo"],

    AES: _aes_js__WEBPACK_IMPORTED_MODULE_16__["AESAlgo"],
    DES: _tripledes_js__WEBPACK_IMPORTED_MODULE_17__["DESAlgo"],
    TripleDES: _tripledes_js__WEBPACK_IMPORTED_MODULE_17__["TripleDESAlgo"],
    Rabbit: _rabbit_js__WEBPACK_IMPORTED_MODULE_18__["RabbitAlgo"],
    RabbitLegacy: _rabbit_legacy_js__WEBPACK_IMPORTED_MODULE_19__["RabbitLegacyAlgo"],
    RC4: _rc4_js__WEBPACK_IMPORTED_MODULE_20__["RC4Algo"],
    RC4Drop: _rc4_js__WEBPACK_IMPORTED_MODULE_20__["RC4DropAlgo"],
  },

  mode: {
    CBC: _cipher_core_js__WEBPACK_IMPORTED_MODULE_2__["CBC"],
    CFB: _mode_cfb_js__WEBPACK_IMPORTED_MODULE_21__["CFB"],
    CTR: _mode_ctr_js__WEBPACK_IMPORTED_MODULE_22__["CTR"],
    CTRGladman: _mode_ctr_gladman_js__WEBPACK_IMPORTED_MODULE_23__["CTRGladman"],
    ECB: _mode_ecb_js__WEBPACK_IMPORTED_MODULE_24__["ECB"],
    OFB: _mode_ofb_js__WEBPACK_IMPORTED_MODULE_25__["OFB"],
  },

  pad: {
    Pkcs7: _cipher_core_js__WEBPACK_IMPORTED_MODULE_2__["Pkcs7"],
    AnsiX923: _pad_ansix923_js__WEBPACK_IMPORTED_MODULE_26__["AnsiX923"],
    Iso10126: _pad_iso10126_js__WEBPACK_IMPORTED_MODULE_27__["Iso10126"],
    Iso97971: _pad_iso97971_js__WEBPACK_IMPORTED_MODULE_28__["Iso97971"],
    NoPadding: _pad_nopadding_js__WEBPACK_IMPORTED_MODULE_29__["NoPadding"],
    ZeroPadding: _pad_zeropadding_js__WEBPACK_IMPORTED_MODULE_30__["ZeroPadding"],
  },

  format: {
    OpenSSL: _cipher_core_js__WEBPACK_IMPORTED_MODULE_2__["OpenSSLFormatter"],
    Hex: _format_hex_js__WEBPACK_IMPORTED_MODULE_31__["HexFormatter"],
  },

  kdf: {
    OpenSSL: _cipher_core_js__WEBPACK_IMPORTED_MODULE_2__["OpenSSLKdf"],
  },

  MD5: _md5_js__WEBPACK_IMPORTED_MODULE_6__["MD5"],
  HmacMD5: _md5_js__WEBPACK_IMPORTED_MODULE_6__["HmacMD5"],
  SHA1: _sha1_js__WEBPACK_IMPORTED_MODULE_7__["SHA1"],
  HmacSHA1: _sha1_js__WEBPACK_IMPORTED_MODULE_7__["HmacSHA1"],
  SHA224: _sha224_js__WEBPACK_IMPORTED_MODULE_8__["SHA224"],
  HmacSHA224: _sha224_js__WEBPACK_IMPORTED_MODULE_8__["HmacSHA224"],
  SHA256: _sha256_js__WEBPACK_IMPORTED_MODULE_9__["SHA256"],
  HmacSHA256: _sha256_js__WEBPACK_IMPORTED_MODULE_9__["HmacSHA256"],
  SHA384: _sha384_js__WEBPACK_IMPORTED_MODULE_10__["SHA384"],
  HmacSHA384: _sha384_js__WEBPACK_IMPORTED_MODULE_10__["HmacSHA384"],
  SHA512: _sha512_js__WEBPACK_IMPORTED_MODULE_11__["SHA512"],
  HmacSHA512: _sha512_js__WEBPACK_IMPORTED_MODULE_11__["HmacSHA512"],
  SHA3: _sha3_js__WEBPACK_IMPORTED_MODULE_12__["SHA3"],
  HmacSHA3: _sha3_js__WEBPACK_IMPORTED_MODULE_12__["HmacSHA3"],
  RIPEMD160: _ripemd160_js__WEBPACK_IMPORTED_MODULE_13__["RIPEMD160"],
  HmacRIPEMD160: _ripemd160_js__WEBPACK_IMPORTED_MODULE_13__["HmacRIPEMD160"],

  PBKDF2: _pbkdf2_js__WEBPACK_IMPORTED_MODULE_14__["PBKDF2"],
  EvpKDF: _evpkdf_js__WEBPACK_IMPORTED_MODULE_15__["EvpKDF"],

  AES: _aes_js__WEBPACK_IMPORTED_MODULE_16__["AES"],
  DES: _tripledes_js__WEBPACK_IMPORTED_MODULE_17__["DES"],
  TripleDES: _tripledes_js__WEBPACK_IMPORTED_MODULE_17__["TripleDES"],
  Rabbit: _rabbit_js__WEBPACK_IMPORTED_MODULE_18__["Rabbit"],
  RabbitLegacy: _rabbit_legacy_js__WEBPACK_IMPORTED_MODULE_19__["RabbitLegacy"],
  RC4: _rc4_js__WEBPACK_IMPORTED_MODULE_20__["RC4"],
  RC4Drop: _rc4_js__WEBPACK_IMPORTED_MODULE_20__["RC4Drop"],
});


/***/ }),

/***/ "./node_modules/crypto-es/lib/md5.js":
/*!*******************************************!*\
  !*** ./node_modules/crypto-es/lib/md5.js ***!
  \*******************************************/
/*! exports provided: MD5Algo, MD5, HmacMD5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MD5Algo", function() { return MD5Algo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MD5", function() { return MD5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HmacMD5", function() { return HmacMD5; });
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./node_modules/crypto-es/lib/core.js");


// Constants table
const T = [];

// Compute constants
for (let i = 0; i < 64; i += 1) {
  T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
}

const FF = (a, b, c, d, x, s, t) => {
  const n = a + ((b & c) | (~b & d)) + x + t;
  return ((n << s) | (n >>> (32 - s))) + b;
};

const GG = (a, b, c, d, x, s, t) => {
  const n = a + ((b & d) | (c & ~d)) + x + t;
  return ((n << s) | (n >>> (32 - s))) + b;
};

const HH = (a, b, c, d, x, s, t) => {
  const n = a + (b ^ c ^ d) + x + t;
  return ((n << s) | (n >>> (32 - s))) + b;
};

const II = (a, b, c, d, x, s, t) => {
  const n = a + (c ^ (b | ~d)) + x + t;
  return ((n << s) | (n >>> (32 - s))) + b;
};

/**
 * MD5 hash algorithm.
 */
class MD5Algo extends _core_js__WEBPACK_IMPORTED_MODULE_0__["Hasher"] {
  _doReset() {
    this._hash = new _core_js__WEBPACK_IMPORTED_MODULE_0__["WordArray"]([
      0x67452301,
      0xefcdab89,
      0x98badcfe,
      0x10325476,
    ]);
  }

  _doProcessBlock(M, offset) {
    const _M = M;

    // Swap endian
    for (let i = 0; i < 16; i += 1) {
      // Shortcuts
      const offset_i = offset + i;
      const M_offset_i = M[offset_i];

      _M[offset_i] = (
        (((M_offset_i << 8) | (M_offset_i >>> 24)) & 0x00ff00ff)
          | (((M_offset_i << 24) | (M_offset_i >>> 8)) & 0xff00ff00)
      );
    }

    // Shortcuts
    const H = this._hash.words;

    const M_offset_0 = _M[offset + 0];
    const M_offset_1 = _M[offset + 1];
    const M_offset_2 = _M[offset + 2];
    const M_offset_3 = _M[offset + 3];
    const M_offset_4 = _M[offset + 4];
    const M_offset_5 = _M[offset + 5];
    const M_offset_6 = _M[offset + 6];
    const M_offset_7 = _M[offset + 7];
    const M_offset_8 = _M[offset + 8];
    const M_offset_9 = _M[offset + 9];
    const M_offset_10 = _M[offset + 10];
    const M_offset_11 = _M[offset + 11];
    const M_offset_12 = _M[offset + 12];
    const M_offset_13 = _M[offset + 13];
    const M_offset_14 = _M[offset + 14];
    const M_offset_15 = _M[offset + 15];

    // Working varialbes
    let a = H[0];
    let b = H[1];
    let c = H[2];
    let d = H[3];

    // Computation
    a = FF(a, b, c, d, M_offset_0, 7, T[0]);
    d = FF(d, a, b, c, M_offset_1, 12, T[1]);
    c = FF(c, d, a, b, M_offset_2, 17, T[2]);
    b = FF(b, c, d, a, M_offset_3, 22, T[3]);
    a = FF(a, b, c, d, M_offset_4, 7, T[4]);
    d = FF(d, a, b, c, M_offset_5, 12, T[5]);
    c = FF(c, d, a, b, M_offset_6, 17, T[6]);
    b = FF(b, c, d, a, M_offset_7, 22, T[7]);
    a = FF(a, b, c, d, M_offset_8, 7, T[8]);
    d = FF(d, a, b, c, M_offset_9, 12, T[9]);
    c = FF(c, d, a, b, M_offset_10, 17, T[10]);
    b = FF(b, c, d, a, M_offset_11, 22, T[11]);
    a = FF(a, b, c, d, M_offset_12, 7, T[12]);
    d = FF(d, a, b, c, M_offset_13, 12, T[13]);
    c = FF(c, d, a, b, M_offset_14, 17, T[14]);
    b = FF(b, c, d, a, M_offset_15, 22, T[15]);

    a = GG(a, b, c, d, M_offset_1, 5, T[16]);
    d = GG(d, a, b, c, M_offset_6, 9, T[17]);
    c = GG(c, d, a, b, M_offset_11, 14, T[18]);
    b = GG(b, c, d, a, M_offset_0, 20, T[19]);
    a = GG(a, b, c, d, M_offset_5, 5, T[20]);
    d = GG(d, a, b, c, M_offset_10, 9, T[21]);
    c = GG(c, d, a, b, M_offset_15, 14, T[22]);
    b = GG(b, c, d, a, M_offset_4, 20, T[23]);
    a = GG(a, b, c, d, M_offset_9, 5, T[24]);
    d = GG(d, a, b, c, M_offset_14, 9, T[25]);
    c = GG(c, d, a, b, M_offset_3, 14, T[26]);
    b = GG(b, c, d, a, M_offset_8, 20, T[27]);
    a = GG(a, b, c, d, M_offset_13, 5, T[28]);
    d = GG(d, a, b, c, M_offset_2, 9, T[29]);
    c = GG(c, d, a, b, M_offset_7, 14, T[30]);
    b = GG(b, c, d, a, M_offset_12, 20, T[31]);

    a = HH(a, b, c, d, M_offset_5, 4, T[32]);
    d = HH(d, a, b, c, M_offset_8, 11, T[33]);
    c = HH(c, d, a, b, M_offset_11, 16, T[34]);
    b = HH(b, c, d, a, M_offset_14, 23, T[35]);
    a = HH(a, b, c, d, M_offset_1, 4, T[36]);
    d = HH(d, a, b, c, M_offset_4, 11, T[37]);
    c = HH(c, d, a, b, M_offset_7, 16, T[38]);
    b = HH(b, c, d, a, M_offset_10, 23, T[39]);
    a = HH(a, b, c, d, M_offset_13, 4, T[40]);
    d = HH(d, a, b, c, M_offset_0, 11, T[41]);
    c = HH(c, d, a, b, M_offset_3, 16, T[42]);
    b = HH(b, c, d, a, M_offset_6, 23, T[43]);
    a = HH(a, b, c, d, M_offset_9, 4, T[44]);
    d = HH(d, a, b, c, M_offset_12, 11, T[45]);
    c = HH(c, d, a, b, M_offset_15, 16, T[46]);
    b = HH(b, c, d, a, M_offset_2, 23, T[47]);

    a = II(a, b, c, d, M_offset_0, 6, T[48]);
    d = II(d, a, b, c, M_offset_7, 10, T[49]);
    c = II(c, d, a, b, M_offset_14, 15, T[50]);
    b = II(b, c, d, a, M_offset_5, 21, T[51]);
    a = II(a, b, c, d, M_offset_12, 6, T[52]);
    d = II(d, a, b, c, M_offset_3, 10, T[53]);
    c = II(c, d, a, b, M_offset_10, 15, T[54]);
    b = II(b, c, d, a, M_offset_1, 21, T[55]);
    a = II(a, b, c, d, M_offset_8, 6, T[56]);
    d = II(d, a, b, c, M_offset_15, 10, T[57]);
    c = II(c, d, a, b, M_offset_6, 15, T[58]);
    b = II(b, c, d, a, M_offset_13, 21, T[59]);
    a = II(a, b, c, d, M_offset_4, 6, T[60]);
    d = II(d, a, b, c, M_offset_11, 10, T[61]);
    c = II(c, d, a, b, M_offset_2, 15, T[62]);
    b = II(b, c, d, a, M_offset_9, 21, T[63]);

    // Intermediate hash value
    H[0] = (H[0] + a) | 0;
    H[1] = (H[1] + b) | 0;
    H[2] = (H[2] + c) | 0;
    H[3] = (H[3] + d) | 0;
  }
  /* eslint-ensable no-param-reassign */

  _doFinalize() {
    // Shortcuts
    const data = this._data;
    const dataWords = data.words;

    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = data.sigBytes * 8;

    // Add padding
    dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - (nBitsLeft % 32));

    const nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
    const nBitsTotalL = nBitsTotal;
    dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = (
      (((nBitsTotalH << 8) | (nBitsTotalH >>> 24)) & 0x00ff00ff)
        | (((nBitsTotalH << 24) | (nBitsTotalH >>> 8)) & 0xff00ff00)
    );
    dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
      (((nBitsTotalL << 8) | (nBitsTotalL >>> 24)) & 0x00ff00ff)
        | (((nBitsTotalL << 24) | (nBitsTotalL >>> 8)) & 0xff00ff00)
    );

    data.sigBytes = (dataWords.length + 1) * 4;

    // Hash final blocks
    this._process();

    // Shortcuts
    const hash = this._hash;
    const H = hash.words;

    // Swap endian
    for (let i = 0; i < 4; i += 1) {
      // Shortcut
      const H_i = H[i];

      H[i] = (((H_i << 8) | (H_i >>> 24)) & 0x00ff00ff)
        | (((H_i << 24) | (H_i >>> 8)) & 0xff00ff00);
    }

    // Return final computed hash
    return hash;
  }

  clone() {
    const clone = super.clone.call(this);
    clone._hash = this._hash.clone();

    return clone;
  }
}

/**
 * Shortcut function to the hasher's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 *
 * @return {WordArray} The hash.
 *
 * @static
 *
 * @example
 *
 *     var hash = CryptoJS.MD5('message');
 *     var hash = CryptoJS.MD5(wordArray);
 */
const MD5 = _core_js__WEBPACK_IMPORTED_MODULE_0__["Hasher"]._createHelper(MD5Algo);

/**
 * Shortcut function to the HMAC's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 * @param {WordArray|string} key The secret key.
 *
 * @return {WordArray} The HMAC.
 *
 * @static
 *
 * @example
 *
 *     var hmac = CryptoJS.HmacMD5(message, key);
 */
const HmacMD5 = _core_js__WEBPACK_IMPORTED_MODULE_0__["Hasher"]._createHmacHelper(MD5Algo);


/***/ }),

/***/ "./node_modules/crypto-es/lib/mode-cfb.js":
/*!************************************************!*\
  !*** ./node_modules/crypto-es/lib/mode-cfb.js ***!
  \************************************************/
/*! exports provided: CFB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CFB", function() { return CFB; });
/* harmony import */ var _cipher_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cipher-core.js */ "./node_modules/crypto-es/lib/cipher-core.js");


function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
  const _words = words;
  let keystream;

  // Shortcut
  const iv = this._iv;

  // Generate keystream
  if (iv) {
    keystream = iv.slice(0);

    // Remove IV for subsequent blocks
    this._iv = undefined;
  } else {
    keystream = this._prevBlock;
  }
  cipher.encryptBlock(keystream, 0);

  // Encrypt
  for (let i = 0; i < blockSize; i += 1) {
    _words[offset + i] ^= keystream[i];
  }
}

/**
 * Cipher Feedback block mode.
 */
class CFB extends _cipher_core_js__WEBPACK_IMPORTED_MODULE_0__["BlockCipherMode"] {
}
CFB.Encryptor = class extends CFB {
  processBlock(words, offset) {
    // Shortcuts
    const cipher = this._cipher;
    const { blockSize } = cipher;

    generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

    // Remember this block to use with next block
    this._prevBlock = words.slice(offset, offset + blockSize);
  }
};
CFB.Decryptor = class extends CFB {
  processBlock(words, offset) {
    // Shortcuts
    const cipher = this._cipher;
    const { blockSize } = cipher;

    // Remember this block to use with next block
    const thisBlock = words.slice(offset, offset + blockSize);

    generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

    // This block becomes the previous block
    this._prevBlock = thisBlock;
  }
};


/***/ }),

/***/ "./node_modules/crypto-es/lib/mode-ctr-gladman.js":
/*!********************************************************!*\
  !*** ./node_modules/crypto-es/lib/mode-ctr-gladman.js ***!
  \********************************************************/
/*! exports provided: CTRGladman */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CTRGladman", function() { return CTRGladman; });
/* harmony import */ var _cipher_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cipher-core.js */ "./node_modules/crypto-es/lib/cipher-core.js");


const incWord = (word) => {
  let _word = word;

  if (((word >> 24) & 0xff) === 0xff) { // overflow
    let b1 = (word >> 16) & 0xff;
    let b2 = (word >> 8) & 0xff;
    let b3 = word & 0xff;

    if (b1 === 0xff) { // overflow b1
      b1 = 0;
      if (b2 === 0xff) {
        b2 = 0;
        if (b3 === 0xff) {
          b3 = 0;
        } else {
          b3 += 1;
        }
      } else {
        b2 += 1;
      }
    } else {
      b1 += 1;
    }

    _word = 0;
    _word += (b1 << 16);
    _word += (b2 << 8);
    _word += b3;
  } else {
    _word += (0x01 << 24);
  }
  return _word;
};

const incCounter = (counter) => {
  const _counter = counter;
  _counter[0] = incWord(_counter[0]);

  if (_counter[0] === 0) {
    // encr_data in fileenc.c from  Dr Brian Gladman's counts only with DWORD j < 8
    _counter[1] = incWord(_counter[1]);
  }
  return _counter;
};

/** @preserve
 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
 * derived from CryptoJS.mode.CTR
 * Jan Hruby jhruby.web@gmail.com
 */
class CTRGladman extends _cipher_core_js__WEBPACK_IMPORTED_MODULE_0__["BlockCipherMode"] {
}
CTRGladman.Encryptor = class extends CTRGladman {
  processBlock(words, offset) {
    const _words = words;

    // Shortcuts
    const cipher = this._cipher;
    const { blockSize } = cipher;
    const iv = this._iv;
    let counter = this._counter;

    // Generate keystream
    if (iv) {
      this._counter = iv.slice(0);
      counter = this._counter;

      // Remove IV for subsequent blocks
      this._iv = undefined;
    }

    incCounter(counter);

    const keystream = counter.slice(0);
    cipher.encryptBlock(keystream, 0);

    // Encrypt
    for (let i = 0; i < blockSize; i += 1) {
      _words[offset + i] ^= keystream[i];
    }
  }
};
CTRGladman.Decryptor = CTRGladman.Encryptor;


/***/ }),

/***/ "./node_modules/crypto-es/lib/mode-ctr.js":
/*!************************************************!*\
  !*** ./node_modules/crypto-es/lib/mode-ctr.js ***!
  \************************************************/
/*! exports provided: CTR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CTR", function() { return CTR; });
/* harmony import */ var _cipher_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cipher-core.js */ "./node_modules/crypto-es/lib/cipher-core.js");
/**
 * Counter block mode.
 */


class CTR extends _cipher_core_js__WEBPACK_IMPORTED_MODULE_0__["BlockCipherMode"] {
}
CTR.Encryptor = class extends CTR {
  processBlock(words, offset) {
    const _words = words;

    // Shortcuts
    const cipher = this._cipher;
    const { blockSize } = cipher;
    const iv = this._iv;
    let counter = this._counter;

    // Generate keystream
    if (iv) {
      this._counter = iv.slice(0);
      counter = this._counter;

      // Remove IV for subsequent blocks
      this._iv = undefined;
    }
    const keystream = counter.slice(0);
    cipher.encryptBlock(keystream, 0);

    // Increment counter
    counter[blockSize - 1] = (counter[blockSize - 1] + 1) | 0;

    // Encrypt
    for (let i = 0; i < blockSize; i += 1) {
      _words[offset + i] ^= keystream[i];
    }
  }
};
CTR.Decryptor = CTR.Encryptor;


/***/ }),

/***/ "./node_modules/crypto-es/lib/mode-ecb.js":
/*!************************************************!*\
  !*** ./node_modules/crypto-es/lib/mode-ecb.js ***!
  \************************************************/
/*! exports provided: ECB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ECB", function() { return ECB; });
/* harmony import */ var _cipher_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cipher-core.js */ "./node_modules/crypto-es/lib/cipher-core.js");
/**
 * Electronic Codebook block mode.
 */


class ECB extends _cipher_core_js__WEBPACK_IMPORTED_MODULE_0__["BlockCipherMode"] {
}
ECB.Encryptor = class extends ECB {
  processBlock(words, offset) {
    this._cipher.encryptBlock(words, offset);
  }
};
ECB.Decryptor = class extends ECB {
  processBlock(words, offset) {
    this._cipher.decryptBlock(words, offset);
  }
};


/***/ }),

/***/ "./node_modules/crypto-es/lib/mode-ofb.js":
/*!************************************************!*\
  !*** ./node_modules/crypto-es/lib/mode-ofb.js ***!
  \************************************************/
/*! exports provided: OFB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OFB", function() { return OFB; });
/* harmony import */ var _cipher_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cipher-core.js */ "./node_modules/crypto-es/lib/cipher-core.js");
/**
 * Output Feedback block mode.
 */


class OFB extends _cipher_core_js__WEBPACK_IMPORTED_MODULE_0__["BlockCipherMode"] {
}
OFB.Encryptor = class extends OFB {
  processBlock(words, offset) {
    const _words = words;

    // Shortcuts
    const cipher = this._cipher;
    const { blockSize } = cipher;
    const iv = this._iv;
    let keystream = this._keystream;

    // Generate keystream
    if (iv) {
      this._keystream = iv.slice(0);
      keystream = this._keystream;

      // Remove IV for subsequent blocks
      this._iv = undefined;
    }
    cipher.encryptBlock(keystream, 0);

    // Encrypt
    for (let i = 0; i < blockSize; i += 1) {
      _words[offset + i] ^= keystream[i];
    }
  }
};
OFB.Decryptor = OFB.Encryptor;


/***/ }),

/***/ "./node_modules/crypto-es/lib/pad-ansix923.js":
/*!****************************************************!*\
  !*** ./node_modules/crypto-es/lib/pad-ansix923.js ***!
  \****************************************************/
/*! exports provided: AnsiX923 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnsiX923", function() { return AnsiX923; });
/**
 * ANSI X.923 padding strategy.
 */
const AnsiX923 = {
  pad(data, blockSize) {
    const _data = data;

    // Shortcuts
    const dataSigBytes = _data.sigBytes;
    const blockSizeBytes = blockSize * 4;

    // Count padding bytes
    const nPaddingBytes = blockSizeBytes - (dataSigBytes % blockSizeBytes);

    // Compute last byte position
    const lastBytePos = dataSigBytes + nPaddingBytes - 1;

    // Pad
    _data.clamp();
    _data.words[lastBytePos >>> 2] |= nPaddingBytes << (24 - (lastBytePos % 4) * 8);
    _data.sigBytes += nPaddingBytes;
  },

  unpad(data) {
    const _data = data;

    // Get number of padding bytes from last byte
    const nPaddingBytes = _data.words[(_data.sigBytes - 1) >>> 2] & 0xff;

    // Remove padding
    _data.sigBytes -= nPaddingBytes;
  },
};


/***/ }),

/***/ "./node_modules/crypto-es/lib/pad-iso10126.js":
/*!****************************************************!*\
  !*** ./node_modules/crypto-es/lib/pad-iso10126.js ***!
  \****************************************************/
/*! exports provided: Iso10126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Iso10126", function() { return Iso10126; });
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./node_modules/crypto-es/lib/core.js");


/**
 * ISO 10126 padding strategy.
 */
const Iso10126 = {
  pad(data, blockSize) {
    // Shortcut
    const blockSizeBytes = blockSize * 4;

    // Count padding bytes
    const nPaddingBytes = blockSizeBytes - (data.sigBytes % blockSizeBytes);

    // Pad
    data
      .concat(_core_js__WEBPACK_IMPORTED_MODULE_0__["WordArray"].random(nPaddingBytes - 1))
      .concat(_core_js__WEBPACK_IMPORTED_MODULE_0__["WordArray"].create([nPaddingBytes << 24], 1));
  },

  unpad(data) {
    const _data = data;
    // Get number of padding bytes from last byte
    const nPaddingBytes = _data.words[(_data.sigBytes - 1) >>> 2] & 0xff;

    // Remove padding
    _data.sigBytes -= nPaddingBytes;
  },
};


/***/ }),

/***/ "./node_modules/crypto-es/lib/pad-iso97971.js":
/*!****************************************************!*\
  !*** ./node_modules/crypto-es/lib/pad-iso97971.js ***!
  \****************************************************/
/*! exports provided: Iso97971 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Iso97971", function() { return Iso97971; });
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./node_modules/crypto-es/lib/core.js");
/* harmony import */ var _pad_zeropadding_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pad-zeropadding.js */ "./node_modules/crypto-es/lib/pad-zeropadding.js");



/**
 * ISO/IEC 9797-1 Padding Method 2.
 */
const Iso97971 = {
  pad(data, blockSize) {
    // Add 0x80 byte
    data.concat(_core_js__WEBPACK_IMPORTED_MODULE_0__["WordArray"].create([0x80000000], 1));

    // Zero pad the rest
    _pad_zeropadding_js__WEBPACK_IMPORTED_MODULE_1__["ZeroPadding"].pad(data, blockSize);
  },

  unpad(data) {
    const _data = data;

    // Remove zero padding
    _pad_zeropadding_js__WEBPACK_IMPORTED_MODULE_1__["ZeroPadding"].unpad(_data);

    // Remove one more byte -- the 0x80 byte
    _data.sigBytes -= 1;
  },
};


/***/ }),

/***/ "./node_modules/crypto-es/lib/pad-nopadding.js":
/*!*****************************************************!*\
  !*** ./node_modules/crypto-es/lib/pad-nopadding.js ***!
  \*****************************************************/
/*! exports provided: NoPadding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoPadding", function() { return NoPadding; });
/**
 * A noop padding strategy.
 */
const NoPadding = {
  pad() {
  },

  unpad() {
  },
};


/***/ }),

/***/ "./node_modules/crypto-es/lib/pad-zeropadding.js":
/*!*******************************************************!*\
  !*** ./node_modules/crypto-es/lib/pad-zeropadding.js ***!
  \*******************************************************/
/*! exports provided: ZeroPadding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZeroPadding", function() { return ZeroPadding; });
/**
 * Zero padding strategy.
 */
const ZeroPadding = {
  pad(data, blockSize) {
    const _data = data;

    // Shortcut
    const blockSizeBytes = blockSize * 4;

    // Pad
    _data.clamp();
    _data.sigBytes += blockSizeBytes - ((data.sigBytes % blockSizeBytes) || blockSizeBytes);
  },

  unpad(data) {
    const _data = data;

    // Shortcut
    const dataWords = _data.words;

    // Unpad
    for (let i = _data.sigBytes - 1; i >= 0; i -= 1) {
      if (((dataWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff)) {
        _data.sigBytes = i + 1;
        break;
      }
    }
  },
};


/***/ }),

/***/ "./node_modules/crypto-es/lib/pbkdf2.js":
/*!**********************************************!*\
  !*** ./node_modules/crypto-es/lib/pbkdf2.js ***!
  \**********************************************/
/*! exports provided: PBKDF2Algo, PBKDF2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PBKDF2Algo", function() { return PBKDF2Algo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PBKDF2", function() { return PBKDF2; });
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./node_modules/crypto-es/lib/core.js");
/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha1.js */ "./node_modules/crypto-es/lib/sha1.js");
/* harmony import */ var _hmac_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hmac.js */ "./node_modules/crypto-es/lib/hmac.js");




/**
 * Password-Based Key Derivation Function 2 algorithm.
 */
class PBKDF2Algo extends _core_js__WEBPACK_IMPORTED_MODULE_0__["Base"] {
  /**
   * Initializes a newly created key derivation function.
   *
   * @param {Object} cfg (Optional) The configuration options to use for the derivation.
   *
   * @example
   *
   *     const kdf = CryptoJS.algo.PBKDF2.create();
   *     const kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
   *     const kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
   */
  constructor(cfg) {
    super();

    /**
     * Configuration options.
     *
     * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
     * @property {Hasher} hasher The hasher to use. Default: SHA1
     * @property {number} iterations The number of iterations to perform. Default: 1
     */
    this.cfg = Object.assign(
      new _core_js__WEBPACK_IMPORTED_MODULE_0__["Base"](),
      {
        keySize: 128 / 32,
        hasher: _sha1_js__WEBPACK_IMPORTED_MODULE_1__["SHA1Algo"],
        iterations: 1,
      },
      cfg,
    );
  }

  /**
   * Computes the Password-Based Key Derivation Function 2.
   *
   * @param {WordArray|string} password The password.
   * @param {WordArray|string} salt A salt.
   *
   * @return {WordArray} The derived key.
   *
   * @example
   *
   *     const key = kdf.compute(password, salt);
   */
  compute(password, salt) {
    // Shortcut
    const { cfg } = this;

    // Init HMAC
    const hmac = _hmac_js__WEBPACK_IMPORTED_MODULE_2__["HMAC"].create(cfg.hasher, password);

    // Initial values
    const derivedKey = _core_js__WEBPACK_IMPORTED_MODULE_0__["WordArray"].create();
    const blockIndex = _core_js__WEBPACK_IMPORTED_MODULE_0__["WordArray"].create([0x00000001]);

    // Shortcuts
    const derivedKeyWords = derivedKey.words;
    const blockIndexWords = blockIndex.words;
    const { keySize, iterations } = cfg;

    // Generate key
    while (derivedKeyWords.length < keySize) {
      const block = hmac.update(salt).finalize(blockIndex);
      hmac.reset();

      // Shortcuts
      const blockWords = block.words;
      const blockWordsLength = blockWords.length;

      // Iterations
      let intermediate = block;
      for (let i = 1; i < iterations; i += 1) {
        intermediate = hmac.finalize(intermediate);
        hmac.reset();

        // Shortcut
        const intermediateWords = intermediate.words;

        // XOR intermediate with block
        for (let j = 0; j < blockWordsLength; j += 1) {
          blockWords[j] ^= intermediateWords[j];
        }
      }

      derivedKey.concat(block);
      blockIndexWords[0] += 1;
    }
    derivedKey.sigBytes = keySize * 4;

    return derivedKey;
  }
}

/**
 * Computes the Password-Based Key Derivation Function 2.
 *
 * @param {WordArray|string} password The password.
 * @param {WordArray|string} salt A salt.
 * @param {Object} cfg (Optional) The configuration options to use for this computation.
 *
 * @return {WordArray} The derived key.
 *
 * @static
 *
 * @example
 *
 *     var key = CryptoJS.PBKDF2(password, salt);
 *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });
 *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });
 */
const PBKDF2 = (password, salt, cfg) => PBKDF2Algo.create(cfg).compute(password, salt);


/***/ }),

/***/ "./node_modules/crypto-es/lib/rabbit-legacy.js":
/*!*****************************************************!*\
  !*** ./node_modules/crypto-es/lib/rabbit-legacy.js ***!
  \*****************************************************/
/*! exports provided: RabbitLegacyAlgo, RabbitLegacy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RabbitLegacyAlgo", function() { return RabbitLegacyAlgo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RabbitLegacy", function() { return RabbitLegacy; });
/* harmony import */ var _cipher_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cipher-core.js */ "./node_modules/crypto-es/lib/cipher-core.js");


// Reusable objects
const S = [];
const C_ = [];
const G = [];

function nextState() {
  // Shortcuts
  const X = this._X;
  const C = this._C;

  // Save old counter values
  for (let i = 0; i < 8; i += 1) {
    C_[i] = C[i];
  }

  // Calculate new counter values
  C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
  C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
  C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
  C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
  C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
  C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
  C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
  C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
  this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

  // Calculate the g-values
  for (let i = 0; i < 8; i += 1) {
    const gx = X[i] + C[i];

    // Construct high and low argument for squaring
    const ga = gx & 0xffff;
    const gb = gx >>> 16;

    // Calculate high and low result of squaring
    const gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
    const gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

    // High XOR low
    G[i] = gh ^ gl;
  }

  // Calculate new state values
  X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
  X[1] = (G[1] + ((G[0] << 8) | (G[0] >>> 24)) + G[7]) | 0;
  X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
  X[3] = (G[3] + ((G[2] << 8) | (G[2] >>> 24)) + G[1]) | 0;
  X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
  X[5] = (G[5] + ((G[4] << 8) | (G[4] >>> 24)) + G[3]) | 0;
  X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
  X[7] = (G[7] + ((G[6] << 8) | (G[6] >>> 24)) + G[5]) | 0;
}

/**
 * Rabbit stream cipher algorithm.
 *
 * This is a legacy version that neglected to convert the key to little-endian.
 * This error doesn't affect the cipher's security,
 * but it does affect its compatibility with other implementations.
 */
class RabbitLegacyAlgo extends _cipher_core_js__WEBPACK_IMPORTED_MODULE_0__["StreamCipher"] {
  constructor(...args) {
    super(...args);

    this.blockSize = 128 / 32;
    this.ivSize = 64 / 32;
  }

  _doReset() {
    // Shortcuts
    const K = this._key.words;
    const { iv } = this.cfg;

    // Generate initial state values
    this._X = [
      K[0], (K[3] << 16) | (K[2] >>> 16),
      K[1], (K[0] << 16) | (K[3] >>> 16),
      K[2], (K[1] << 16) | (K[0] >>> 16),
      K[3], (K[2] << 16) | (K[1] >>> 16),
    ];
    const X = this._X;

    // Generate initial counter values
    this._C = [
      (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
      (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
      (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
      (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff),
    ];
    const C = this._C;

    // Carry bit
    this._b = 0;

    // Iterate the system four times
    for (let i = 0; i < 4; i += 1) {
      nextState.call(this);
    }

    // Modify the counters
    for (let i = 0; i < 8; i += 1) {
      C[i] ^= X[(i + 4) & 7];
    }

    // IV setup
    if (iv) {
      // Shortcuts
      const IV = iv.words;
      const IV_0 = IV[0];
      const IV_1 = IV[1];

      // Generate four subvectors
      const i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff)
        | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
      const i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff)
        | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
      const i1 = (i0 >>> 16) | (i2 & 0xffff0000);
      const i3 = (i2 << 16) | (i0 & 0x0000ffff);

      // Modify counter values
      C[0] ^= i0;
      C[1] ^= i1;
      C[2] ^= i2;
      C[3] ^= i3;
      C[4] ^= i0;
      C[5] ^= i1;
      C[6] ^= i2;
      C[7] ^= i3;

      // Iterate the system four times
      for (let i = 0; i < 4; i += 1) {
        nextState.call(this);
      }
    }
  }

  _doProcessBlock(M, offset) {
    const _M = M;

    // Shortcut
    const X = this._X;

    // Iterate the system
    nextState.call(this);

    // Generate four keystream words
    S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
    S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
    S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
    S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

    for (let i = 0; i < 4; i += 1) {
      // Swap endian
      S[i] = (((S[i] << 8) | (S[i] >>> 24)) & 0x00ff00ff)
        | (((S[i] << 24) | (S[i] >>> 8)) & 0xff00ff00);

      // Encrypt
      _M[offset + i] ^= S[i];
    }
  }
}

/**
 * Shortcut functions to the cipher's object interface.
 *
 * @example
 *
 *     var ciphertext = CryptoJS.RabbitLegacy.encrypt(message, key, cfg);
 *     var plaintext  = CryptoJS.RabbitLegacy.decrypt(ciphertext, key, cfg);
 */
const RabbitLegacy = _cipher_core_js__WEBPACK_IMPORTED_MODULE_0__["StreamCipher"]._createHelper(RabbitLegacyAlgo);


/***/ }),

/***/ "./node_modules/crypto-es/lib/rabbit.js":
/*!**********************************************!*\
  !*** ./node_modules/crypto-es/lib/rabbit.js ***!
  \**********************************************/
/*! exports provided: RabbitAlgo, Rabbit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RabbitAlgo", function() { return RabbitAlgo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rabbit", function() { return Rabbit; });
/* harmony import */ var _cipher_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cipher-core.js */ "./node_modules/crypto-es/lib/cipher-core.js");


// Reusable objects
const S = [];
const C_ = [];
const G = [];

function nextState() {
  // Shortcuts
  const X = this._X;
  const C = this._C;

  // Save old counter values
  for (let i = 0; i < 8; i += 1) {
    C_[i] = C[i];
  }

  // Calculate new counter values
  C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
  C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
  C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
  C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
  C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
  C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
  C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
  C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
  this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

  // Calculate the g-values
  for (let i = 0; i < 8; i += 1) {
    const gx = X[i] + C[i];

    // Construct high and low argument for squaring
    const ga = gx & 0xffff;
    const gb = gx >>> 16;

    // Calculate high and low result of squaring
    const gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
    const gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

    // High XOR low
    G[i] = gh ^ gl;
  }

  // Calculate new state values
  X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
  X[1] = (G[1] + ((G[0] << 8) | (G[0] >>> 24)) + G[7]) | 0;
  X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
  X[3] = (G[3] + ((G[2] << 8) | (G[2] >>> 24)) + G[1]) | 0;
  X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
  X[5] = (G[5] + ((G[4] << 8) | (G[4] >>> 24)) + G[3]) | 0;
  X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
  X[7] = (G[7] + ((G[6] << 8) | (G[6] >>> 24)) + G[5]) | 0;
}

/**
 * Rabbit stream cipher algorithm
 */
class RabbitAlgo extends _cipher_core_js__WEBPACK_IMPORTED_MODULE_0__["StreamCipher"] {
  constructor(...args) {
    super(...args);

    this.blockSize = 128 / 32;
    this.ivSize = 64 / 32;
  }

  _doReset() {
    // Shortcuts
    const K = this._key.words;
    const { iv } = this.cfg;

    // Swap endian
    for (let i = 0; i < 4; i += 1) {
      K[i] = (((K[i] << 8) | (K[i] >>> 24)) & 0x00ff00ff)
        | (((K[i] << 24) | (K[i] >>> 8)) & 0xff00ff00);
    }

    // Generate initial state values
    this._X = [
      K[0], (K[3] << 16) | (K[2] >>> 16),
      K[1], (K[0] << 16) | (K[3] >>> 16),
      K[2], (K[1] << 16) | (K[0] >>> 16),
      K[3], (K[2] << 16) | (K[1] >>> 16),
    ];
    const X = this._X;

    // Generate initial counter values
    this._C = [
      (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
      (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
      (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
      (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff),
    ];
    const C = this._C;

    // Carry bit
    this._b = 0;

    // Iterate the system four times
    for (let i = 0; i < 4; i += 1) {
      nextState.call(this);
    }

    // Modify the counters
    for (let i = 0; i < 8; i += 1) {
      C[i] ^= X[(i + 4) & 7];
    }

    // IV setup
    if (iv) {
      // Shortcuts
      const IV = iv.words;
      const IV_0 = IV[0];
      const IV_1 = IV[1];

      // Generate four subvectors
      const i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff)
        | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
      const i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff)
        | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
      const i1 = (i0 >>> 16) | (i2 & 0xffff0000);
      const i3 = (i2 << 16) | (i0 & 0x0000ffff);

      // Modify counter values
      C[0] ^= i0;
      C[1] ^= i1;
      C[2] ^= i2;
      C[3] ^= i3;
      C[4] ^= i0;
      C[5] ^= i1;
      C[6] ^= i2;
      C[7] ^= i3;

      // Iterate the system four times
      for (let i = 0; i < 4; i += 1) {
        nextState.call(this);
      }
    }
  }

  _doProcessBlock(M, offset) {
    const _M = M;

    // Shortcut
    const X = this._X;

    // Iterate the system
    nextState.call(this);

    // Generate four keystream words
    S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
    S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
    S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
    S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

    for (let i = 0; i < 4; i += 1) {
      // Swap endian
      S[i] = (((S[i] << 8) | (S[i] >>> 24)) & 0x00ff00ff)
        | (((S[i] << 24) | (S[i] >>> 8)) & 0xff00ff00);

      // Encrypt
      _M[offset + i] ^= S[i];
    }
  }
}

/**
 * Shortcut functions to the cipher's object interface.
 *
 * @example
 *
 *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
 *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
 */
const Rabbit = _cipher_core_js__WEBPACK_IMPORTED_MODULE_0__["StreamCipher"]._createHelper(RabbitAlgo);


/***/ }),

/***/ "./node_modules/crypto-es/lib/rc4.js":
/*!*******************************************!*\
  !*** ./node_modules/crypto-es/lib/rc4.js ***!
  \*******************************************/
/*! exports provided: RC4Algo, RC4, RC4DropAlgo, RC4Drop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RC4Algo", function() { return RC4Algo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RC4", function() { return RC4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RC4DropAlgo", function() { return RC4DropAlgo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RC4Drop", function() { return RC4Drop; });
/* harmony import */ var _cipher_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cipher-core.js */ "./node_modules/crypto-es/lib/cipher-core.js");


function generateKeystreamWord() {
  // Shortcuts
  const S = this._S;
  let i = this._i;
  let j = this._j;

  // Generate keystream word
  let keystreamWord = 0;
  for (let n = 0; n < 4; n += 1) {
    i = (i + 1) % 256;
    j = (j + S[i]) % 256;

    // Swap
    const t = S[i];
    S[i] = S[j];
    S[j] = t;

    keystreamWord |= S[(S[i] + S[j]) % 256] << (24 - n * 8);
  }

  // Update counters
  this._i = i;
  this._j = j;

  return keystreamWord;
}

/**
 * RC4 stream cipher algorithm.
 */
class RC4Algo extends _cipher_core_js__WEBPACK_IMPORTED_MODULE_0__["StreamCipher"] {
  _doReset() {
    // Shortcuts
    const key = this._key;
    const keyWords = key.words;
    const keySigBytes = key.sigBytes;

    // Init sbox
    this._S = [];
    const S = this._S;
    for (let i = 0; i < 256; i += 1) {
      S[i] = i;
    }

    // Key setup
    for (let i = 0, j = 0; i < 256; i += 1) {
      const keyByteIndex = i % keySigBytes;
      const keyByte = (keyWords[keyByteIndex >>> 2] >>> (24 - (keyByteIndex % 4) * 8)) & 0xff;

      j = (j + S[i] + keyByte) % 256;

      // Swap
      const t = S[i];
      S[i] = S[j];
      S[j] = t;
    }

    // Counters
    this._j = 0;
    this._i = this._j;
  }

  _doProcessBlock(M, offset) {
    const _M = M;

    _M[offset] ^= generateKeystreamWord.call(this);
  }
}
RC4Algo.keySize = 256 / 32;
RC4Algo.ivSize = 0;

/**
 * Shortcut functions to the cipher's object interface.
 *
 * @example
 *
 *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
 *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
 */
const RC4 = _cipher_core_js__WEBPACK_IMPORTED_MODULE_0__["StreamCipher"]._createHelper(RC4Algo);

/**
 * Modified RC4 stream cipher algorithm.
 */
class RC4DropAlgo extends RC4Algo {
  constructor(...args) {
    super(...args);

    /**
     * Configuration options.
     *
     * @property {number} drop The number of keystream words to drop. Default 192
     */
    Object.assign(this.cfg, { drop: 192 });
  }

  _doReset() {
    super._doReset.call(this);

    // Drop
    for (let i = this.cfg.drop; i > 0; i -= 1) {
      generateKeystreamWord.call(this);
    }
  }
}

/**
 * Shortcut functions to the cipher's object interface.
 *
 * @example
 *
 *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
 *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
 */
const RC4Drop = _cipher_core_js__WEBPACK_IMPORTED_MODULE_0__["StreamCipher"]._createHelper(RC4DropAlgo);


/***/ }),

/***/ "./node_modules/crypto-es/lib/ripemd160.js":
/*!*************************************************!*\
  !*** ./node_modules/crypto-es/lib/ripemd160.js ***!
  \*************************************************/
/*! exports provided: RIPEMD160Algo, RIPEMD160, HmacRIPEMD160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RIPEMD160Algo", function() { return RIPEMD160Algo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RIPEMD160", function() { return RIPEMD160; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HmacRIPEMD160", function() { return HmacRIPEMD160; });
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./node_modules/crypto-es/lib/core.js");
/** @preserve
(c) 2012 by Cédric Mesnil. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted
provided that the following conditions are met:

    - Redistributions of source code must retain the above copyright notice, this list of
    conditions and the following disclaimer.
    - Redistributions in binary form must reproduce the above copyright notice, this list
    of conditions and the following disclaimer in the documentation and/or other materials
    provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY
WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/



// Constants table
const _zl = _core_js__WEBPACK_IMPORTED_MODULE_0__["WordArray"].create([
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
  3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12,
  1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2,
  4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);
const _zr = _core_js__WEBPACK_IMPORTED_MODULE_0__["WordArray"].create([
  5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12,
  6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2,
  15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13,
  8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14,
  12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);
const _sl = _core_js__WEBPACK_IMPORTED_MODULE_0__["WordArray"].create([
  11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8,
  7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12,
  11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5,
  11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12,
  9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);
const _sr = _core_js__WEBPACK_IMPORTED_MODULE_0__["WordArray"].create([
  8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6,
  9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11,
  9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5,
  15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8,
  8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);

const _hl = _core_js__WEBPACK_IMPORTED_MODULE_0__["WordArray"].create([0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E]);
const _hr = _core_js__WEBPACK_IMPORTED_MODULE_0__["WordArray"].create([0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000]);

const f1 = (x, y, z) => (x) ^ (y) ^ (z);

const f2 = (x, y, z) => ((x) & (y)) | ((~x) & (z));

const f3 = (x, y, z) => ((x) | (~(y))) ^ (z);

const f4 = (x, y, z) => ((x) & (z)) | ((y) & (~(z)));

const f5 = (x, y, z) => (x) ^ ((y) | (~(z)));

const rotl = (x, n) => (x << n) | (x >>> (32 - n));

/**
 * RIPEMD160 hash algorithm.
 */
class RIPEMD160Algo extends _core_js__WEBPACK_IMPORTED_MODULE_0__["Hasher"] {
  _doReset() {
    this._hash = _core_js__WEBPACK_IMPORTED_MODULE_0__["WordArray"].create([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]);
  }

  _doProcessBlock(M, offset) {
    const _M = M;

    // Swap endian
    for (let i = 0; i < 16; i += 1) {
      // Shortcuts
      const offset_i = offset + i;
      const M_offset_i = _M[offset_i];

      // Swap
      _M[offset_i] = (
        (((M_offset_i << 8) | (M_offset_i >>> 24)) & 0x00ff00ff)
          | (((M_offset_i << 24) | (M_offset_i >>> 8)) & 0xff00ff00)
      );
    }
    // Shortcut
    const H = this._hash.words;
    const hl = _hl.words;
    const hr = _hr.words;
    const zl = _zl.words;
    const zr = _zr.words;
    const sl = _sl.words;
    const sr = _sr.words;

    // Working variables
    let al = H[0];
    let bl = H[1];
    let cl = H[2];
    let dl = H[3];
    let el = H[4];
    let ar = H[0];
    let br = H[1];
    let cr = H[2];
    let dr = H[3];
    let er = H[4];

    // Computation
    let t;
    for (let i = 0; i < 80; i += 1) {
      t = (al + _M[offset + zl[i]]) | 0;
      if (i < 16) {
        t += f1(bl, cl, dl) + hl[0];
      } else if (i < 32) {
        t += f2(bl, cl, dl) + hl[1];
      } else if (i < 48) {
        t += f3(bl, cl, dl) + hl[2];
      } else if (i < 64) {
        t += f4(bl, cl, dl) + hl[3];
      } else { // if (i<80) {
        t += f5(bl, cl, dl) + hl[4];
      }
      t |= 0;
      t = rotl(t, sl[i]);
      t = (t + el) | 0;
      al = el;
      el = dl;
      dl = rotl(cl, 10);
      cl = bl;
      bl = t;

      t = (ar + _M[offset + zr[i]]) | 0;
      if (i < 16) {
        t += f5(br, cr, dr) + hr[0];
      } else if (i < 32) {
        t += f4(br, cr, dr) + hr[1];
      } else if (i < 48) {
        t += f3(br, cr, dr) + hr[2];
      } else if (i < 64) {
        t += f2(br, cr, dr) + hr[3];
      } else { // if (i<80) {
        t += f1(br, cr, dr) + hr[4];
      }
      t |= 0;
      t = rotl(t, sr[i]);
      t = (t + er) | 0;
      ar = er;
      er = dr;
      dr = rotl(cr, 10);
      cr = br;
      br = t;
    }
    // Intermediate hash value
    t = (H[1] + cl + dr) | 0;
    H[1] = (H[2] + dl + er) | 0;
    H[2] = (H[3] + el + ar) | 0;
    H[3] = (H[4] + al + br) | 0;
    H[4] = (H[0] + bl + cr) | 0;
    H[0] = t;
  }

  _doFinalize() {
    // Shortcuts
    const data = this._data;
    const dataWords = data.words;

    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = data.sigBytes * 8;

    // Add padding
    dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - (nBitsLeft % 32));
    dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
      (((nBitsTotal << 8) | (nBitsTotal >>> 24)) & 0x00ff00ff)
        | (((nBitsTotal << 24) | (nBitsTotal >>> 8)) & 0xff00ff00)
    );
    data.sigBytes = (dataWords.length + 1) * 4;

    // Hash final blocks
    this._process();

    // Shortcuts
    const hash = this._hash;
    const H = hash.words;

    // Swap endian
    for (let i = 0; i < 5; i += 1) {
      // Shortcut
      const H_i = H[i];

      // Swap
      H[i] = (((H_i << 8) | (H_i >>> 24)) & 0x00ff00ff)
        | (((H_i << 24) | (H_i >>> 8)) & 0xff00ff00);
    }

    // Return final computed hash
    return hash;
  }

  clone() {
    const clone = super.clone.call(this);
    clone._hash = this._hash.clone();

    return clone;
  }
}

/**
 * Shortcut function to the hasher's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 *
 * @return {WordArray} The hash.
 *
 * @static
 *
 * @example
 *
 *     var hash = CryptoJS.RIPEMD160('message');
 *     var hash = CryptoJS.RIPEMD160(wordArray);
 */
const RIPEMD160 = _core_js__WEBPACK_IMPORTED_MODULE_0__["Hasher"]._createHelper(RIPEMD160Algo);

/**
 * Shortcut function to the HMAC's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 * @param {WordArray|string} key The secret key.
 *
 * @return {WordArray} The HMAC.
 *
 * @static
 *
 * @example
 *
 *     var hmac = CryptoJS.HmacRIPEMD160(message, key);
 */
const HmacRIPEMD160 = _core_js__WEBPACK_IMPORTED_MODULE_0__["Hasher"]._createHmacHelper(RIPEMD160Algo);


/***/ }),

/***/ "./node_modules/crypto-es/lib/sha1.js":
/*!********************************************!*\
  !*** ./node_modules/crypto-es/lib/sha1.js ***!
  \********************************************/
/*! exports provided: SHA1Algo, SHA1, HmacSHA1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHA1Algo", function() { return SHA1Algo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHA1", function() { return SHA1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HmacSHA1", function() { return HmacSHA1; });
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./node_modules/crypto-es/lib/core.js");


// Reusable object
const W = [];

/**
 * SHA-1 hash algorithm.
 */
class SHA1Algo extends _core_js__WEBPACK_IMPORTED_MODULE_0__["Hasher"] {
  _doReset() {
    this._hash = new _core_js__WEBPACK_IMPORTED_MODULE_0__["WordArray"]([
      0x67452301,
      0xefcdab89,
      0x98badcfe,
      0x10325476,
      0xc3d2e1f0,
    ]);
  }

  _doProcessBlock(M, offset) {
    // Shortcut
    const H = this._hash.words;

    // Working variables
    let a = H[0];
    let b = H[1];
    let c = H[2];
    let d = H[3];
    let e = H[4];

    // Computation
    for (let i = 0; i < 80; i += 1) {
      if (i < 16) {
        W[i] = M[offset + i] | 0;
      } else {
        const n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
        W[i] = (n << 1) | (n >>> 31);
      }

      let t = ((a << 5) | (a >>> 27)) + e + W[i];
      if (i < 20) {
        t += ((b & c) | (~b & d)) + 0x5a827999;
      } else if (i < 40) {
        t += (b ^ c ^ d) + 0x6ed9eba1;
      } else if (i < 60) {
        t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;
      } else /* if (i < 80) */ {
        t += (b ^ c ^ d) - 0x359d3e2a;
      }

      e = d;
      d = c;
      c = (b << 30) | (b >>> 2);
      b = a;
      a = t;
    }

    // Intermediate hash value
    H[0] = (H[0] + a) | 0;
    H[1] = (H[1] + b) | 0;
    H[2] = (H[2] + c) | 0;
    H[3] = (H[3] + d) | 0;
    H[4] = (H[4] + e) | 0;
  }

  _doFinalize() {
    // Shortcuts
    const data = this._data;
    const dataWords = data.words;

    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = data.sigBytes * 8;

    // Add padding
    dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - (nBitsLeft % 32));
    dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
    dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
    data.sigBytes = dataWords.length * 4;

    // Hash final blocks
    this._process();

    // Return final computed hash
    return this._hash;
  }

  clone() {
    const clone = super.clone.call(this);
    clone._hash = this._hash.clone();

    return clone;
  }
}

/**
 * Shortcut function to the hasher's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 *
 * @return {WordArray} The hash.
 *
 * @static
 *
 * @example
 *
 *     var hash = CryptoJS.SHA1('message');
 *     var hash = CryptoJS.SHA1(wordArray);
 */
const SHA1 = _core_js__WEBPACK_IMPORTED_MODULE_0__["Hasher"]._createHelper(SHA1Algo);

/**
 * Shortcut function to the HMAC's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 * @param {WordArray|string} key The secret key.
 *
 * @return {WordArray} The HMAC.
 *
 * @static
 *
 * @example
 *
 *     var hmac = CryptoJS.HmacSHA1(message, key);
 */
const HmacSHA1 = _core_js__WEBPACK_IMPORTED_MODULE_0__["Hasher"]._createHmacHelper(SHA1Algo);


/***/ }),

/***/ "./node_modules/crypto-es/lib/sha224.js":
/*!**********************************************!*\
  !*** ./node_modules/crypto-es/lib/sha224.js ***!
  \**********************************************/
/*! exports provided: SHA224Algo, SHA224, HmacSHA224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHA224Algo", function() { return SHA224Algo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHA224", function() { return SHA224; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HmacSHA224", function() { return HmacSHA224; });
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./node_modules/crypto-es/lib/core.js");
/* harmony import */ var _sha256_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha256.js */ "./node_modules/crypto-es/lib/sha256.js");



/**
 * SHA-224 hash algorithm.
 */
class SHA224Algo extends _sha256_js__WEBPACK_IMPORTED_MODULE_1__["SHA256Algo"] {
  _doReset() {
    this._hash = new _core_js__WEBPACK_IMPORTED_MODULE_0__["WordArray"]([
      0xc1059ed8,
      0x367cd507,
      0x3070dd17,
      0xf70e5939,
      0xffc00b31,
      0x68581511,
      0x64f98fa7,
      0xbefa4fa4,
    ]);
  }

  _doFinalize() {
    const hash = super._doFinalize.call(this);

    hash.sigBytes -= 4;

    return hash;
  }
}

/**
 * Shortcut function to the hasher's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 *
 * @return {WordArray} The hash.
 *
 * @static
 *
 * @example
 *
 *     var hash = CryptoJS.SHA224('message');
 *     var hash = CryptoJS.SHA224(wordArray);
 */
const SHA224 = _sha256_js__WEBPACK_IMPORTED_MODULE_1__["SHA256Algo"]._createHelper(SHA224Algo);

/**
 * Shortcut function to the HMAC's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 * @param {WordArray|string} key The secret key.
 *
 * @return {WordArray} The HMAC.
 *
 * @static
 *
 * @example
 *
 *     var hmac = CryptoJS.HmacSHA224(message, key);
 */
const HmacSHA224 = _sha256_js__WEBPACK_IMPORTED_MODULE_1__["SHA256Algo"]._createHmacHelper(SHA224Algo);


/***/ }),

/***/ "./node_modules/crypto-es/lib/sha256.js":
/*!**********************************************!*\
  !*** ./node_modules/crypto-es/lib/sha256.js ***!
  \**********************************************/
/*! exports provided: SHA256Algo, SHA256, HmacSHA256 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHA256Algo", function() { return SHA256Algo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHA256", function() { return SHA256; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HmacSHA256", function() { return HmacSHA256; });
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./node_modules/crypto-es/lib/core.js");


// Initialization and round constants tables
const H = [];
const K = [];

// Compute constants
const isPrime = (n) => {
  const sqrtN = Math.sqrt(n);
  for (let factor = 2; factor <= sqrtN; factor += 1) {
    if (!(n % factor)) {
      return false;
    }
  }

  return true;
};

const getFractionalBits = n => ((n - (n | 0)) * 0x100000000) | 0;

let n = 2;
let nPrime = 0;
while (nPrime < 64) {
  if (isPrime(n)) {
    if (nPrime < 8) {
      H[nPrime] = getFractionalBits(n ** (1 / 2));
    }
    K[nPrime] = getFractionalBits(n ** (1 / 3));

    nPrime += 1;
  }

  n += 1;
}

// Reusable object
const W = [];

/**
 * SHA-256 hash algorithm.
 */
class SHA256Algo extends _core_js__WEBPACK_IMPORTED_MODULE_0__["Hasher"] {
  _doReset() {
    this._hash = new _core_js__WEBPACK_IMPORTED_MODULE_0__["WordArray"](H.slice(0));
  }

  _doProcessBlock(M, offset) {
    // Shortcut
    const _H = this._hash.words;

    // Working variables
    let a = _H[0];
    let b = _H[1];
    let c = _H[2];
    let d = _H[3];
    let e = _H[4];
    let f = _H[5];
    let g = _H[6];
    let h = _H[7];

    // Computation
    for (let i = 0; i < 64; i += 1) {
      if (i < 16) {
        W[i] = M[offset + i] | 0;
      } else {
        const gamma0x = W[i - 15];
        const gamma0 = ((gamma0x << 25) | (gamma0x >>> 7))
          ^ ((gamma0x << 14) | (gamma0x >>> 18))
          ^ (gamma0x >>> 3);

        const gamma1x = W[i - 2];
        const gamma1 = ((gamma1x << 15) | (gamma1x >>> 17))
          ^ ((gamma1x << 13) | (gamma1x >>> 19))
          ^ (gamma1x >>> 10);

        W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
      }

      const ch = (e & f) ^ (~e & g);
      const maj = (a & b) ^ (a & c) ^ (b & c);

      const sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
      const sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7) | (e >>> 25));

      const t1 = h + sigma1 + ch + K[i] + W[i];
      const t2 = sigma0 + maj;

      h = g;
      g = f;
      f = e;
      e = (d + t1) | 0;
      d = c;
      c = b;
      b = a;
      a = (t1 + t2) | 0;
    }

    // Intermediate hash value
    _H[0] = (_H[0] + a) | 0;
    _H[1] = (_H[1] + b) | 0;
    _H[2] = (_H[2] + c) | 0;
    _H[3] = (_H[3] + d) | 0;
    _H[4] = (_H[4] + e) | 0;
    _H[5] = (_H[5] + f) | 0;
    _H[6] = (_H[6] + g) | 0;
    _H[7] = (_H[7] + h) | 0;
  }

  _doFinalize() {
    // Shortcuts
    const data = this._data;
    const dataWords = data.words;

    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = data.sigBytes * 8;

    // Add padding
    dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - (nBitsLeft % 32));
    dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
    dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
    data.sigBytes = dataWords.length * 4;

    // Hash final blocks
    this._process();

    // Return final computed hash
    return this._hash;
  }

  clone() {
    const clone = super.clone.call(this);
    clone._hash = this._hash.clone();

    return clone;
  }
}

/**
 * Shortcut function to the hasher's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 *
 * @return {WordArray} The hash.
 *
 * @static
 *
 * @example
 *
 *     var hash = CryptoJS.SHA256('message');
 *     var hash = CryptoJS.SHA256(wordArray);
 */
const SHA256 = _core_js__WEBPACK_IMPORTED_MODULE_0__["Hasher"]._createHelper(SHA256Algo);

/**
 * Shortcut function to the HMAC's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 * @param {WordArray|string} key The secret key.
 *
 * @return {WordArray} The HMAC.
 *
 * @static
 *
 * @example
 *
 *     var hmac = CryptoJS.HmacSHA256(message, key);
 */
const HmacSHA256 = _core_js__WEBPACK_IMPORTED_MODULE_0__["Hasher"]._createHmacHelper(SHA256Algo);


/***/ }),

/***/ "./node_modules/crypto-es/lib/sha3.js":
/*!********************************************!*\
  !*** ./node_modules/crypto-es/lib/sha3.js ***!
  \********************************************/
/*! exports provided: SHA3Algo, SHA3, HmacSHA3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHA3Algo", function() { return SHA3Algo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHA3", function() { return SHA3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HmacSHA3", function() { return HmacSHA3; });
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./node_modules/crypto-es/lib/core.js");
/* harmony import */ var _x64_core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./x64-core.js */ "./node_modules/crypto-es/lib/x64-core.js");



// Constants tables
const RHO_OFFSETS = [];
const PI_INDEXES = [];
const ROUND_CONSTANTS = [];

// Compute Constants
// Compute rho offset constants
let _x = 1;
let _y = 0;
for (let t = 0; t < 24; t += 1) {
  RHO_OFFSETS[_x + 5 * _y] = ((t + 1) * (t + 2) / 2) % 64;

  const newX = _y % 5;
  const newY = (2 * _x + 3 * _y) % 5;
  _x = newX;
  _y = newY;
}

// Compute pi index constants
for (let x = 0; x < 5; x += 1) {
  for (let y = 0; y < 5; y += 1) {
    PI_INDEXES[x + 5 * y] = y + ((2 * x + 3 * y) % 5) * 5;
  }
}

// Compute round constants
let LFSR = 0x01;
for (let i = 0; i < 24; i += 1) {
  let roundConstantMsw = 0;
  let roundConstantLsw = 0;

  for (let j = 0; j < 7; j += 1) {
    if (LFSR & 0x01) {
      const bitPosition = (1 << j) - 1;
      if (bitPosition < 32) {
        roundConstantLsw ^= 1 << bitPosition;
      } else /* if (bitPosition >= 32) */ {
        roundConstantMsw ^= 1 << (bitPosition - 32);
      }
    }

    // Compute next LFSR
    if (LFSR & 0x80) {
      // Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1
      LFSR = (LFSR << 1) ^ 0x71;
    } else {
      LFSR <<= 1;
    }
  }

  ROUND_CONSTANTS[i] = _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"].create(roundConstantMsw, roundConstantLsw);
}

// Reusable objects for temporary values
const T = [];
for (let i = 0; i < 25; i += 1) {
  T[i] = _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"].create();
}

/**
 * SHA-3 hash algorithm.
 */
class SHA3Algo extends _core_js__WEBPACK_IMPORTED_MODULE_0__["Hasher"] {
  constructor(cfg) {
    /**
     * Configuration options.
     *
     * @property {number} outputLength
     *   The desired number of bits in the output hash.
     *   Only values permitted are: 224, 256, 384, 512.
     *   Default: 512
     */
    super(Object.assign(
      { outputLength: 512 },
      cfg,
    ));
  }

  _doReset() {
    this._state = [];
    const state = this._state;
    for (let i = 0; i < 25; i += 1) {
      state[i] = new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"]();
    }

    this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
  }

  _doProcessBlock(M, offset) {
    // Shortcuts
    const state = this._state;
    const nBlockSizeLanes = this.blockSize / 2;

    // Absorb
    for (let i = 0; i < nBlockSizeLanes; i += 1) {
      // Shortcuts
      let M2i = M[offset + 2 * i];
      let M2i1 = M[offset + 2 * i + 1];

      // Swap endian
      M2i = (((M2i << 8) | (M2i >>> 24)) & 0x00ff00ff)
        | (((M2i << 24) | (M2i >>> 8)) & 0xff00ff00);
      M2i1 = (((M2i1 << 8) | (M2i1 >>> 24)) & 0x00ff00ff)
        | (((M2i1 << 24) | (M2i1 >>> 8)) & 0xff00ff00);

      // Absorb message into state
      const lane = state[i];
      lane.high ^= M2i1;
      lane.low ^= M2i;
    }

    // Rounds
    for (let round = 0; round < 24; round += 1) {
      // Theta
      for (let x = 0; x < 5; x += 1) {
        // Mix column lanes
        let tMsw = 0;
        let tLsw = 0;
        for (let y = 0; y < 5; y += 1) {
          const lane = state[x + 5 * y];
          tMsw ^= lane.high;
          tLsw ^= lane.low;
        }

        // Temporary values
        const Tx = T[x];
        Tx.high = tMsw;
        Tx.low = tLsw;
      }
      for (let x = 0; x < 5; x += 1) {
        // Shortcuts
        const Tx4 = T[(x + 4) % 5];
        const Tx1 = T[(x + 1) % 5];
        const Tx1Msw = Tx1.high;
        const Tx1Lsw = Tx1.low;

        // Mix surrounding columns
        const tMsw = Tx4.high ^ ((Tx1Msw << 1) | (Tx1Lsw >>> 31));
        const tLsw = Tx4.low ^ ((Tx1Lsw << 1) | (Tx1Msw >>> 31));
        for (let y = 0; y < 5; y += 1) {
          const lane = state[x + 5 * y];
          lane.high ^= tMsw;
          lane.low ^= tLsw;
        }
      }

      // Rho Pi
      for (let laneIndex = 1; laneIndex < 25; laneIndex += 1) {
        let tMsw;
        let tLsw;

        // Shortcuts
        const lane = state[laneIndex];
        const laneMsw = lane.high;
        const laneLsw = lane.low;
        const rhoOffset = RHO_OFFSETS[laneIndex];

        // Rotate lanes
        if (rhoOffset < 32) {
          tMsw = (laneMsw << rhoOffset) | (laneLsw >>> (32 - rhoOffset));
          tLsw = (laneLsw << rhoOffset) | (laneMsw >>> (32 - rhoOffset));
        } else /* if (rhoOffset >= 32) */ {
          tMsw = (laneLsw << (rhoOffset - 32)) | (laneMsw >>> (64 - rhoOffset));
          tLsw = (laneMsw << (rhoOffset - 32)) | (laneLsw >>> (64 - rhoOffset));
        }

        // Transpose lanes
        const TPiLane = T[PI_INDEXES[laneIndex]];
        TPiLane.high = tMsw;
        TPiLane.low = tLsw;
      }

      // Rho pi at x = y = 0
      const T0 = T[0];
      const state0 = state[0];
      T0.high = state0.high;
      T0.low = state0.low;

      // Chi
      for (let x = 0; x < 5; x += 1) {
        for (let y = 0; y < 5; y += 1) {
          // Shortcuts
          const laneIndex = x + 5 * y;
          const lane = state[laneIndex];
          const TLane = T[laneIndex];
          const Tx1Lane = T[((x + 1) % 5) + 5 * y];
          const Tx2Lane = T[((x + 2) % 5) + 5 * y];

          // Mix rows
          lane.high = TLane.high ^ (~Tx1Lane.high & Tx2Lane.high);
          lane.low = TLane.low ^ (~Tx1Lane.low & Tx2Lane.low);
        }
      }

      // Iota
      const lane = state[0];
      const roundConstant = ROUND_CONSTANTS[round];
      lane.high ^= roundConstant.high;
      lane.low ^= roundConstant.low;
    }
  }

  _doFinalize() {
    // Shortcuts
    const data = this._data;
    const dataWords = data.words;
    const nBitsLeft = data.sigBytes * 8;
    const blockSizeBits = this.blockSize * 32;

    // Add padding
    dataWords[nBitsLeft >>> 5] |= 0x1 << (24 - (nBitsLeft % 32));
    dataWords[((Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits) >>> 5) - 1] |= 0x80;
    data.sigBytes = dataWords.length * 4;

    // Hash final blocks
    this._process();

    // Shortcuts
    const state = this._state;
    const outputLengthBytes = this.cfg.outputLength / 8;
    const outputLengthLanes = outputLengthBytes / 8;

    // Squeeze
    const hashWords = [];
    for (let i = 0; i < outputLengthLanes; i += 1) {
      // Shortcuts
      const lane = state[i];
      let laneMsw = lane.high;
      let laneLsw = lane.low;

      // Swap endian
      laneMsw = (((laneMsw << 8) | (laneMsw >>> 24)) & 0x00ff00ff)
        | (((laneMsw << 24) | (laneMsw >>> 8)) & 0xff00ff00);
      laneLsw = (((laneLsw << 8) | (laneLsw >>> 24)) & 0x00ff00ff)
        | (((laneLsw << 24) | (laneLsw >>> 8)) & 0xff00ff00);

      // Squeeze state to retrieve hash
      hashWords.push(laneLsw);
      hashWords.push(laneMsw);
    }

    // Return final computed hash
    return new _core_js__WEBPACK_IMPORTED_MODULE_0__["WordArray"](hashWords, outputLengthBytes);
  }

  clone() {
    const clone = super.clone.call(this);

    clone._state = this._state.slice(0);
    const state = clone._state;
    for (let i = 0; i < 25; i += 1) {
      state[i] = state[i].clone();
    }

    return clone;
  }
}

/**
 * Shortcut function to the hasher's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 *
 * @return {WordArray} The hash.
 *
 * @static
 *
 * @example
 *
 *     var hash = CryptoJS.SHA3('message');
 *     var hash = CryptoJS.SHA3(wordArray);
 */
const SHA3 = _core_js__WEBPACK_IMPORTED_MODULE_0__["Hasher"]._createHelper(SHA3Algo);

/**
 * Shortcut function to the HMAC's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 * @param {WordArray|string} key The secret key.
 *
 * @return {WordArray} The HMAC.
 *
 * @static
 *
 * @example
 *
 *     var hmac = CryptoJS.HmacSHA3(message, key);
 */
const HmacSHA3 = _core_js__WEBPACK_IMPORTED_MODULE_0__["Hasher"]._createHmacHelper(SHA3Algo);


/***/ }),

/***/ "./node_modules/crypto-es/lib/sha384.js":
/*!**********************************************!*\
  !*** ./node_modules/crypto-es/lib/sha384.js ***!
  \**********************************************/
/*! exports provided: SHA384Algo, SHA384, HmacSHA384 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHA384Algo", function() { return SHA384Algo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHA384", function() { return SHA384; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HmacSHA384", function() { return HmacSHA384; });
/* harmony import */ var _x64_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./x64-core.js */ "./node_modules/crypto-es/lib/x64-core.js");
/* harmony import */ var _sha512_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha512.js */ "./node_modules/crypto-es/lib/sha512.js");



/**
 * SHA-384 hash algorithm.
 */
class SHA384Algo extends _sha512_js__WEBPACK_IMPORTED_MODULE_1__["SHA512Algo"] {
  _doReset() {
    this._hash = new _x64_core_js__WEBPACK_IMPORTED_MODULE_0__["X64WordArray"]([
      new _x64_core_js__WEBPACK_IMPORTED_MODULE_0__["X64Word"](0xcbbb9d5d, 0xc1059ed8),
      new _x64_core_js__WEBPACK_IMPORTED_MODULE_0__["X64Word"](0x629a292a, 0x367cd507),
      new _x64_core_js__WEBPACK_IMPORTED_MODULE_0__["X64Word"](0x9159015a, 0x3070dd17),
      new _x64_core_js__WEBPACK_IMPORTED_MODULE_0__["X64Word"](0x152fecd8, 0xf70e5939),
      new _x64_core_js__WEBPACK_IMPORTED_MODULE_0__["X64Word"](0x67332667, 0xffc00b31),
      new _x64_core_js__WEBPACK_IMPORTED_MODULE_0__["X64Word"](0x8eb44a87, 0x68581511),
      new _x64_core_js__WEBPACK_IMPORTED_MODULE_0__["X64Word"](0xdb0c2e0d, 0x64f98fa7),
      new _x64_core_js__WEBPACK_IMPORTED_MODULE_0__["X64Word"](0x47b5481d, 0xbefa4fa4),
    ]);
  }

  _doFinalize() {
    const hash = super._doFinalize.call(this);

    hash.sigBytes -= 16;

    return hash;
  }
}

/**
 * Shortcut function to the hasher's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 *
 * @return {WordArray} The hash.
 *
 * @static
 *
 * @example
 *
 *     var hash = CryptoJS.SHA384('message');
 *     var hash = CryptoJS.SHA384(wordArray);
 */
const SHA384 = _sha512_js__WEBPACK_IMPORTED_MODULE_1__["SHA512Algo"]._createHelper(SHA384Algo);

/**
 * Shortcut function to the HMAC's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 * @param {WordArray|string} key The secret key.
 *
 * @return {WordArray} The HMAC.
 *
 * @static
 *
 * @example
 *
 *     var hmac = CryptoJS.HmacSHA384(message, key);
 */
const HmacSHA384 = _sha512_js__WEBPACK_IMPORTED_MODULE_1__["SHA512Algo"]._createHmacHelper(SHA384Algo);


/***/ }),

/***/ "./node_modules/crypto-es/lib/sha512.js":
/*!**********************************************!*\
  !*** ./node_modules/crypto-es/lib/sha512.js ***!
  \**********************************************/
/*! exports provided: SHA512Algo, SHA512, HmacSHA512 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHA512Algo", function() { return SHA512Algo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHA512", function() { return SHA512; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HmacSHA512", function() { return HmacSHA512; });
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./node_modules/crypto-es/lib/core.js");
/* harmony import */ var _x64_core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./x64-core.js */ "./node_modules/crypto-es/lib/x64-core.js");



// Constants
const K = [
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x428a2f98, 0xd728ae22),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x71374491, 0x23ef65cd),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0xb5c0fbcf, 0xec4d3b2f),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0xe9b5dba5, 0x8189dbbc),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x3956c25b, 0xf348b538),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x59f111f1, 0xb605d019),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x923f82a4, 0xaf194f9b),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0xab1c5ed5, 0xda6d8118),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0xd807aa98, 0xa3030242),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x12835b01, 0x45706fbe),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x243185be, 0x4ee4b28c),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x550c7dc3, 0xd5ffb4e2),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x72be5d74, 0xf27b896f),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x80deb1fe, 0x3b1696b1),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x9bdc06a7, 0x25c71235),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0xc19bf174, 0xcf692694),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0xe49b69c1, 0x9ef14ad2),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0xefbe4786, 0x384f25e3),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x0fc19dc6, 0x8b8cd5b5),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x240ca1cc, 0x77ac9c65),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x2de92c6f, 0x592b0275),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x4a7484aa, 0x6ea6e483),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x5cb0a9dc, 0xbd41fbd4),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x76f988da, 0x831153b5),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x983e5152, 0xee66dfab),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0xa831c66d, 0x2db43210),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0xb00327c8, 0x98fb213f),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0xbf597fc7, 0xbeef0ee4),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0xc6e00bf3, 0x3da88fc2),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0xd5a79147, 0x930aa725),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x06ca6351, 0xe003826f),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x14292967, 0x0a0e6e70),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x27b70a85, 0x46d22ffc),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x2e1b2138, 0x5c26c926),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x4d2c6dfc, 0x5ac42aed),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x53380d13, 0x9d95b3df),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x650a7354, 0x8baf63de),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x766a0abb, 0x3c77b2a8),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x81c2c92e, 0x47edaee6),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x92722c85, 0x1482353b),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0xa2bfe8a1, 0x4cf10364),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0xa81a664b, 0xbc423001),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0xc24b8b70, 0xd0f89791),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0xc76c51a3, 0x0654be30),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0xd192e819, 0xd6ef5218),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0xd6990624, 0x5565a910),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0xf40e3585, 0x5771202a),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x106aa070, 0x32bbd1b8),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x19a4c116, 0xb8d2d0c8),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x1e376c08, 0x5141ab53),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x2748774c, 0xdf8eeb99),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x34b0bcb5, 0xe19b48a8),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x391c0cb3, 0xc5c95a63),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x4ed8aa4a, 0xe3418acb),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x5b9cca4f, 0x7763e373),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x682e6ff3, 0xd6b2b8a3),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x748f82ee, 0x5defb2fc),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x78a5636f, 0x43172f60),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x84c87814, 0xa1f0ab72),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x8cc70208, 0x1a6439ec),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x90befffa, 0x23631e28),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0xa4506ceb, 0xde82bde9),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0xbef9a3f7, 0xb2c67915),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0xc67178f2, 0xe372532b),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0xca273ece, 0xea26619c),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0xd186b8c7, 0x21c0c207),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0xeada7dd6, 0xcde0eb1e),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0xf57d4f7f, 0xee6ed178),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x06f067aa, 0x72176fba),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x0a637dc5, 0xa2c898a6),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x113f9804, 0xbef90dae),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x1b710b35, 0x131c471b),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x28db77f5, 0x23047d84),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x32caab7b, 0x40c72493),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x3c9ebe0a, 0x15c9bebc),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x431d67c4, 0x9c100d4c),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x4cc5d4be, 0xcb3e42b6),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x597f299c, 0xfc657e2a),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x5fcb6fab, 0x3ad6faec),
  new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x6c44198c, 0x4a475817),
];

// Reusable objects
const W = [];
for (let i = 0; i < 80; i += 1) {
  W[i] = new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"]();
}

/**
 * SHA-512 hash algorithm.
 */
class SHA512Algo extends _core_js__WEBPACK_IMPORTED_MODULE_0__["Hasher"] {
  constructor() {
    super();

    this.blockSize = 1024 / 32;
  }

  _doReset() {
    this._hash = new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64WordArray"]([
      new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x6a09e667, 0xf3bcc908),
      new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0xbb67ae85, 0x84caa73b),
      new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x3c6ef372, 0xfe94f82b),
      new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0xa54ff53a, 0x5f1d36f1),
      new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x510e527f, 0xade682d1),
      new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x9b05688c, 0x2b3e6c1f),
      new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x1f83d9ab, 0xfb41bd6b),
      new _x64_core_js__WEBPACK_IMPORTED_MODULE_1__["X64Word"](0x5be0cd19, 0x137e2179),
    ]);
  }

  _doProcessBlock(M, offset) {
    // Shortcuts
    const H = this._hash.words;

    const H0 = H[0];
    const H1 = H[1];
    const H2 = H[2];
    const H3 = H[3];
    const H4 = H[4];
    const H5 = H[5];
    const H6 = H[6];
    const H7 = H[7];

    const H0h = H0.high;
    let H0l = H0.low;
    const H1h = H1.high;
    let H1l = H1.low;
    const H2h = H2.high;
    let H2l = H2.low;
    const H3h = H3.high;
    let H3l = H3.low;
    const H4h = H4.high;
    let H4l = H4.low;
    const H5h = H5.high;
    let H5l = H5.low;
    const H6h = H6.high;
    let H6l = H6.low;
    const H7h = H7.high;
    let H7l = H7.low;

    // Working variables
    let ah = H0h;
    let al = H0l;
    let bh = H1h;
    let bl = H1l;
    let ch = H2h;
    let cl = H2l;
    let dh = H3h;
    let dl = H3l;
    let eh = H4h;
    let el = H4l;
    let fh = H5h;
    let fl = H5l;
    let gh = H6h;
    let gl = H6l;
    let hh = H7h;
    let hl = H7l;

    // Rounds
    for (let i = 0; i < 80; i += 1) {
      let Wil;
      let Wih;

      // Shortcut
      const Wi = W[i];

      // Extend message
      if (i < 16) {
        Wi.high = M[offset + i * 2] | 0;
        Wih = Wi.high;
        Wi.low = M[offset + i * 2 + 1] | 0;
        Wil = Wi.low;
      } else {
        // Gamma0
        const gamma0x = W[i - 15];
        const gamma0xh = gamma0x.high;
        const gamma0xl = gamma0x.low;
        const gamma0h = ((gamma0xh >>> 1) | (gamma0xl << 31))
          ^ ((gamma0xh >>> 8) | (gamma0xl << 24))
          ^ (gamma0xh >>> 7);
        const gamma0l = ((gamma0xl >>> 1) | (gamma0xh << 31))
          ^ ((gamma0xl >>> 8) | (gamma0xh << 24))
          ^ ((gamma0xl >>> 7) | (gamma0xh << 25));

        // Gamma1
        const gamma1x = W[i - 2];
        const gamma1xh = gamma1x.high;
        const gamma1xl = gamma1x.low;
        const gamma1h = ((gamma1xh >>> 19) | (gamma1xl << 13))
          ^ ((gamma1xh << 3) | (gamma1xl >>> 29))
          ^ (gamma1xh >>> 6);
        const gamma1l = ((gamma1xl >>> 19) | (gamma1xh << 13))
          ^ ((gamma1xl << 3) | (gamma1xh >>> 29))
          ^ ((gamma1xl >>> 6) | (gamma1xh << 26));

        // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
        const Wi7 = W[i - 7];
        const Wi7h = Wi7.high;
        const Wi7l = Wi7.low;

        const Wi16 = W[i - 16];
        const Wi16h = Wi16.high;
        const Wi16l = Wi16.low;

        Wil = gamma0l + Wi7l;
        Wih = gamma0h + Wi7h + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0);
        Wil += gamma1l;
        Wih = Wih + gamma1h + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0);
        Wil += Wi16l;
        Wih = Wih + Wi16h + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0);

        Wi.high = Wih;
        Wi.low = Wil;
      }

      const chh = (eh & fh) ^ (~eh & gh);
      const chl = (el & fl) ^ (~el & gl);
      const majh = (ah & bh) ^ (ah & ch) ^ (bh & ch);
      const majl = (al & bl) ^ (al & cl) ^ (bl & cl);

      const sigma0h = ((ah >>> 28) | (al << 4))
        ^ ((ah << 30) | (al >>> 2))
        ^ ((ah << 25) | (al >>> 7));
      const sigma0l = ((al >>> 28) | (ah << 4))
        ^ ((al << 30) | (ah >>> 2))
        ^ ((al << 25) | (ah >>> 7));
      const sigma1h = ((eh >>> 14) | (el << 18))
        ^ ((eh >>> 18) | (el << 14))
        ^ ((eh << 23) | (el >>> 9));
      const sigma1l = ((el >>> 14) | (eh << 18))
        ^ ((el >>> 18) | (eh << 14))
        ^ ((el << 23) | (eh >>> 9));

      // t1 = h + sigma1 + ch + K[i] + W[i]
      const Ki = K[i];
      const Kih = Ki.high;
      const Kil = Ki.low;

      let t1l = hl + sigma1l;
      let t1h = hh + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0);
      t1l += chl;
      t1h = t1h + chh + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0);
      t1l += Kil;
      t1h = t1h + Kih + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0);
      t1l += Wil;
      t1h = t1h + Wih + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0);

      // t2 = sigma0 + maj
      const t2l = sigma0l + majl;
      const t2h = sigma0h + majh + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0);

      // Update working variables
      hh = gh;
      hl = gl;
      gh = fh;
      gl = fl;
      fh = eh;
      fl = el;
      el = (dl + t1l) | 0;
      eh = (dh + t1h + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0;
      dh = ch;
      dl = cl;
      ch = bh;
      cl = bl;
      bh = ah;
      bl = al;
      al = (t1l + t2l) | 0;
      ah = (t1h + t2h + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0;
    }

    // Intermediate hash value
    H0.low = (H0l + al);
    H0l = H0.low;
    H0.high = (H0h + ah + ((H0l >>> 0) < (al >>> 0) ? 1 : 0));
    H1.low = (H1l + bl);
    H1l = H1.low;
    H1.high = (H1h + bh + ((H1l >>> 0) < (bl >>> 0) ? 1 : 0));
    H2.low = (H2l + cl);
    H2l = H2.low;
    H2.high = (H2h + ch + ((H2l >>> 0) < (cl >>> 0) ? 1 : 0));
    H3.low = (H3l + dl);
    H3l = H3.low;
    H3.high = (H3h + dh + ((H3l >>> 0) < (dl >>> 0) ? 1 : 0));
    H4.low = (H4l + el);
    H4l = H4.low;
    H4.high = (H4h + eh + ((H4l >>> 0) < (el >>> 0) ? 1 : 0));
    H5.low = (H5l + fl);
    H5l = H5.low;
    H5.high = (H5h + fh + ((H5l >>> 0) < (fl >>> 0) ? 1 : 0));
    H6.low = (H6l + gl);
    H6l = H6.low;
    H6.high = (H6h + gh + ((H6l >>> 0) < (gl >>> 0) ? 1 : 0));
    H7.low = (H7l + hl);
    H7l = H7.low;
    H7.high = (H7h + hh + ((H7l >>> 0) < (hl >>> 0) ? 1 : 0));
  }

  _doFinalize() {
    // Shortcuts
    const data = this._data;
    const dataWords = data.words;

    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = data.sigBytes * 8;

    // Add padding
    dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - (nBitsLeft % 32));
    dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);
    dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 31] = nBitsTotal;
    data.sigBytes = dataWords.length * 4;

    // Hash final blocks
    this._process();

    // Convert hash to 32-bit word array before returning
    const hash = this._hash.toX32();

    // Return final computed hash
    return hash;
  }

  clone() {
    const clone = super.clone.call(this);
    clone._hash = this._hash.clone();

    return clone;
  }
}

/**
 * Shortcut function to the hasher's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 *
 * @return {WordArray} The hash.
 *
 * @static
 *
 * @example
 *
 *     var hash = CryptoJS.SHA512('message');
 *     var hash = CryptoJS.SHA512(wordArray);
 */
const SHA512 = _core_js__WEBPACK_IMPORTED_MODULE_0__["Hasher"]._createHelper(SHA512Algo);

/**
 * Shortcut function to the HMAC's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 * @param {WordArray|string} key The secret key.
 *
 * @return {WordArray} The HMAC.
 *
 * @static
 *
 * @example
 *
 *     var hmac = CryptoJS.HmacSHA512(message, key);
 */
const HmacSHA512 = _core_js__WEBPACK_IMPORTED_MODULE_0__["Hasher"]._createHmacHelper(SHA512Algo);


/***/ }),

/***/ "./node_modules/crypto-es/lib/tripledes.js":
/*!*************************************************!*\
  !*** ./node_modules/crypto-es/lib/tripledes.js ***!
  \*************************************************/
/*! exports provided: DESAlgo, DES, TripleDESAlgo, TripleDES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESAlgo", function() { return DESAlgo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DES", function() { return DES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripleDESAlgo", function() { return TripleDESAlgo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripleDES", function() { return TripleDES; });
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./node_modules/crypto-es/lib/core.js");
/* harmony import */ var _cipher_core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cipher-core.js */ "./node_modules/crypto-es/lib/cipher-core.js");



// Permuted Choice 1 constants
const PC1 = [
  57, 49, 41, 33, 25, 17, 9, 1,
  58, 50, 42, 34, 26, 18, 10, 2,
  59, 51, 43, 35, 27, 19, 11, 3,
  60, 52, 44, 36, 63, 55, 47, 39,
  31, 23, 15, 7, 62, 54, 46, 38,
  30, 22, 14, 6, 61, 53, 45, 37,
  29, 21, 13, 5, 28, 20, 12, 4,
];

// Permuted Choice 2 constants
const PC2 = [
  14, 17, 11, 24, 1, 5,
  3, 28, 15, 6, 21, 10,
  23, 19, 12, 4, 26, 8,
  16, 7, 27, 20, 13, 2,
  41, 52, 31, 37, 47, 55,
  30, 40, 51, 45, 33, 48,
  44, 49, 39, 56, 34, 53,
  46, 42, 50, 36, 29, 32,
];

// Cumulative bit shift constants
const BIT_SHIFTS = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];

// SBOXes and round permutation constants
const SBOX_P = [
  {
    0x0: 0x808200,
    0x10000000: 0x8000,
    0x20000000: 0x808002,
    0x30000000: 0x2,
    0x40000000: 0x200,
    0x50000000: 0x808202,
    0x60000000: 0x800202,
    0x70000000: 0x800000,
    0x80000000: 0x202,
    0x90000000: 0x800200,
    0xa0000000: 0x8200,
    0xb0000000: 0x808000,
    0xc0000000: 0x8002,
    0xd0000000: 0x800002,
    0xe0000000: 0x0,
    0xf0000000: 0x8202,
    0x8000000: 0x0,
    0x18000000: 0x808202,
    0x28000000: 0x8202,
    0x38000000: 0x8000,
    0x48000000: 0x808200,
    0x58000000: 0x200,
    0x68000000: 0x808002,
    0x78000000: 0x2,
    0x88000000: 0x800200,
    0x98000000: 0x8200,
    0xa8000000: 0x808000,
    0xb8000000: 0x800202,
    0xc8000000: 0x800002,
    0xd8000000: 0x8002,
    0xe8000000: 0x202,
    0xf8000000: 0x800000,
    0x1: 0x8000,
    0x10000001: 0x2,
    0x20000001: 0x808200,
    0x30000001: 0x800000,
    0x40000001: 0x808002,
    0x50000001: 0x8200,
    0x60000001: 0x200,
    0x70000001: 0x800202,
    0x80000001: 0x808202,
    0x90000001: 0x808000,
    0xa0000001: 0x800002,
    0xb0000001: 0x8202,
    0xc0000001: 0x202,
    0xd0000001: 0x800200,
    0xe0000001: 0x8002,
    0xf0000001: 0x0,
    0x8000001: 0x808202,
    0x18000001: 0x808000,
    0x28000001: 0x800000,
    0x38000001: 0x200,
    0x48000001: 0x8000,
    0x58000001: 0x800002,
    0x68000001: 0x2,
    0x78000001: 0x8202,
    0x88000001: 0x8002,
    0x98000001: 0x800202,
    0xa8000001: 0x202,
    0xb8000001: 0x808200,
    0xc8000001: 0x800200,
    0xd8000001: 0x0,
    0xe8000001: 0x8200,
    0xf8000001: 0x808002,
  },
  {
    0x0: 0x40084010,
    0x1000000: 0x4000,
    0x2000000: 0x80000,
    0x3000000: 0x40080010,
    0x4000000: 0x40000010,
    0x5000000: 0x40084000,
    0x6000000: 0x40004000,
    0x7000000: 0x10,
    0x8000000: 0x84000,
    0x9000000: 0x40004010,
    0xa000000: 0x40000000,
    0xb000000: 0x84010,
    0xc000000: 0x80010,
    0xd000000: 0x0,
    0xe000000: 0x4010,
    0xf000000: 0x40080000,
    0x800000: 0x40004000,
    0x1800000: 0x84010,
    0x2800000: 0x10,
    0x3800000: 0x40004010,
    0x4800000: 0x40084010,
    0x5800000: 0x40000000,
    0x6800000: 0x80000,
    0x7800000: 0x40080010,
    0x8800000: 0x80010,
    0x9800000: 0x0,
    0xa800000: 0x4000,
    0xb800000: 0x40080000,
    0xc800000: 0x40000010,
    0xd800000: 0x84000,
    0xe800000: 0x40084000,
    0xf800000: 0x4010,
    0x10000000: 0x0,
    0x11000000: 0x40080010,
    0x12000000: 0x40004010,
    0x13000000: 0x40084000,
    0x14000000: 0x40080000,
    0x15000000: 0x10,
    0x16000000: 0x84010,
    0x17000000: 0x4000,
    0x18000000: 0x4010,
    0x19000000: 0x80000,
    0x1a000000: 0x80010,
    0x1b000000: 0x40000010,
    0x1c000000: 0x84000,
    0x1d000000: 0x40004000,
    0x1e000000: 0x40000000,
    0x1f000000: 0x40084010,
    0x10800000: 0x84010,
    0x11800000: 0x80000,
    0x12800000: 0x40080000,
    0x13800000: 0x4000,
    0x14800000: 0x40004000,
    0x15800000: 0x40084010,
    0x16800000: 0x10,
    0x17800000: 0x40000000,
    0x18800000: 0x40084000,
    0x19800000: 0x40000010,
    0x1a800000: 0x40004010,
    0x1b800000: 0x80010,
    0x1c800000: 0x0,
    0x1d800000: 0x4010,
    0x1e800000: 0x40080010,
    0x1f800000: 0x84000,
  },
  {
    0x0: 0x104,
    0x100000: 0x0,
    0x200000: 0x4000100,
    0x300000: 0x10104,
    0x400000: 0x10004,
    0x500000: 0x4000004,
    0x600000: 0x4010104,
    0x700000: 0x4010000,
    0x800000: 0x4000000,
    0x900000: 0x4010100,
    0xa00000: 0x10100,
    0xb00000: 0x4010004,
    0xc00000: 0x4000104,
    0xd00000: 0x10000,
    0xe00000: 0x4,
    0xf00000: 0x100,
    0x80000: 0x4010100,
    0x180000: 0x4010004,
    0x280000: 0x0,
    0x380000: 0x4000100,
    0x480000: 0x4000004,
    0x580000: 0x10000,
    0x680000: 0x10004,
    0x780000: 0x104,
    0x880000: 0x4,
    0x980000: 0x100,
    0xa80000: 0x4010000,
    0xb80000: 0x10104,
    0xc80000: 0x10100,
    0xd80000: 0x4000104,
    0xe80000: 0x4010104,
    0xf80000: 0x4000000,
    0x1000000: 0x4010100,
    0x1100000: 0x10004,
    0x1200000: 0x10000,
    0x1300000: 0x4000100,
    0x1400000: 0x100,
    0x1500000: 0x4010104,
    0x1600000: 0x4000004,
    0x1700000: 0x0,
    0x1800000: 0x4000104,
    0x1900000: 0x4000000,
    0x1a00000: 0x4,
    0x1b00000: 0x10100,
    0x1c00000: 0x4010000,
    0x1d00000: 0x104,
    0x1e00000: 0x10104,
    0x1f00000: 0x4010004,
    0x1080000: 0x4000000,
    0x1180000: 0x104,
    0x1280000: 0x4010100,
    0x1380000: 0x0,
    0x1480000: 0x10004,
    0x1580000: 0x4000100,
    0x1680000: 0x100,
    0x1780000: 0x4010004,
    0x1880000: 0x10000,
    0x1980000: 0x4010104,
    0x1a80000: 0x10104,
    0x1b80000: 0x4000004,
    0x1c80000: 0x4000104,
    0x1d80000: 0x4010000,
    0x1e80000: 0x4,
    0x1f80000: 0x10100,
  },
  {
    0x0: 0x80401000,
    0x10000: 0x80001040,
    0x20000: 0x401040,
    0x30000: 0x80400000,
    0x40000: 0x0,
    0x50000: 0x401000,
    0x60000: 0x80000040,
    0x70000: 0x400040,
    0x80000: 0x80000000,
    0x90000: 0x400000,
    0xa0000: 0x40,
    0xb0000: 0x80001000,
    0xc0000: 0x80400040,
    0xd0000: 0x1040,
    0xe0000: 0x1000,
    0xf0000: 0x80401040,
    0x8000: 0x80001040,
    0x18000: 0x40,
    0x28000: 0x80400040,
    0x38000: 0x80001000,
    0x48000: 0x401000,
    0x58000: 0x80401040,
    0x68000: 0x0,
    0x78000: 0x80400000,
    0x88000: 0x1000,
    0x98000: 0x80401000,
    0xa8000: 0x400000,
    0xb8000: 0x1040,
    0xc8000: 0x80000000,
    0xd8000: 0x400040,
    0xe8000: 0x401040,
    0xf8000: 0x80000040,
    0x100000: 0x400040,
    0x110000: 0x401000,
    0x120000: 0x80000040,
    0x130000: 0x0,
    0x140000: 0x1040,
    0x150000: 0x80400040,
    0x160000: 0x80401000,
    0x170000: 0x80001040,
    0x180000: 0x80401040,
    0x190000: 0x80000000,
    0x1a0000: 0x80400000,
    0x1b0000: 0x401040,
    0x1c0000: 0x80001000,
    0x1d0000: 0x400000,
    0x1e0000: 0x40,
    0x1f0000: 0x1000,
    0x108000: 0x80400000,
    0x118000: 0x80401040,
    0x128000: 0x0,
    0x138000: 0x401000,
    0x148000: 0x400040,
    0x158000: 0x80000000,
    0x168000: 0x80001040,
    0x178000: 0x40,
    0x188000: 0x80000040,
    0x198000: 0x1000,
    0x1a8000: 0x80001000,
    0x1b8000: 0x80400040,
    0x1c8000: 0x1040,
    0x1d8000: 0x80401000,
    0x1e8000: 0x400000,
    0x1f8000: 0x401040,
  },
  {
    0x0: 0x80,
    0x1000: 0x1040000,
    0x2000: 0x40000,
    0x3000: 0x20000000,
    0x4000: 0x20040080,
    0x5000: 0x1000080,
    0x6000: 0x21000080,
    0x7000: 0x40080,
    0x8000: 0x1000000,
    0x9000: 0x20040000,
    0xa000: 0x20000080,
    0xb000: 0x21040080,
    0xc000: 0x21040000,
    0xd000: 0x0,
    0xe000: 0x1040080,
    0xf000: 0x21000000,
    0x800: 0x1040080,
    0x1800: 0x21000080,
    0x2800: 0x80,
    0x3800: 0x1040000,
    0x4800: 0x40000,
    0x5800: 0x20040080,
    0x6800: 0x21040000,
    0x7800: 0x20000000,
    0x8800: 0x20040000,
    0x9800: 0x0,
    0xa800: 0x21040080,
    0xb800: 0x1000080,
    0xc800: 0x20000080,
    0xd800: 0x21000000,
    0xe800: 0x1000000,
    0xf800: 0x40080,
    0x10000: 0x40000,
    0x11000: 0x80,
    0x12000: 0x20000000,
    0x13000: 0x21000080,
    0x14000: 0x1000080,
    0x15000: 0x21040000,
    0x16000: 0x20040080,
    0x17000: 0x1000000,
    0x18000: 0x21040080,
    0x19000: 0x21000000,
    0x1a000: 0x1040000,
    0x1b000: 0x20040000,
    0x1c000: 0x40080,
    0x1d000: 0x20000080,
    0x1e000: 0x0,
    0x1f000: 0x1040080,
    0x10800: 0x21000080,
    0x11800: 0x1000000,
    0x12800: 0x1040000,
    0x13800: 0x20040080,
    0x14800: 0x20000000,
    0x15800: 0x1040080,
    0x16800: 0x80,
    0x17800: 0x21040000,
    0x18800: 0x40080,
    0x19800: 0x21040080,
    0x1a800: 0x0,
    0x1b800: 0x21000000,
    0x1c800: 0x1000080,
    0x1d800: 0x40000,
    0x1e800: 0x20040000,
    0x1f800: 0x20000080,
  },
  {
    0x0: 0x10000008,
    0x100: 0x2000,
    0x200: 0x10200000,
    0x300: 0x10202008,
    0x400: 0x10002000,
    0x500: 0x200000,
    0x600: 0x200008,
    0x700: 0x10000000,
    0x800: 0x0,
    0x900: 0x10002008,
    0xa00: 0x202000,
    0xb00: 0x8,
    0xc00: 0x10200008,
    0xd00: 0x202008,
    0xe00: 0x2008,
    0xf00: 0x10202000,
    0x80: 0x10200000,
    0x180: 0x10202008,
    0x280: 0x8,
    0x380: 0x200000,
    0x480: 0x202008,
    0x580: 0x10000008,
    0x680: 0x10002000,
    0x780: 0x2008,
    0x880: 0x200008,
    0x980: 0x2000,
    0xa80: 0x10002008,
    0xb80: 0x10200008,
    0xc80: 0x0,
    0xd80: 0x10202000,
    0xe80: 0x202000,
    0xf80: 0x10000000,
    0x1000: 0x10002000,
    0x1100: 0x10200008,
    0x1200: 0x10202008,
    0x1300: 0x2008,
    0x1400: 0x200000,
    0x1500: 0x10000000,
    0x1600: 0x10000008,
    0x1700: 0x202000,
    0x1800: 0x202008,
    0x1900: 0x0,
    0x1a00: 0x8,
    0x1b00: 0x10200000,
    0x1c00: 0x2000,
    0x1d00: 0x10002008,
    0x1e00: 0x10202000,
    0x1f00: 0x200008,
    0x1080: 0x8,
    0x1180: 0x202000,
    0x1280: 0x200000,
    0x1380: 0x10000008,
    0x1480: 0x10002000,
    0x1580: 0x2008,
    0x1680: 0x10202008,
    0x1780: 0x10200000,
    0x1880: 0x10202000,
    0x1980: 0x10200008,
    0x1a80: 0x2000,
    0x1b80: 0x202008,
    0x1c80: 0x200008,
    0x1d80: 0x0,
    0x1e80: 0x10000000,
    0x1f80: 0x10002008,
  },
  {
    0x0: 0x100000,
    0x10: 0x2000401,
    0x20: 0x400,
    0x30: 0x100401,
    0x40: 0x2100401,
    0x50: 0x0,
    0x60: 0x1,
    0x70: 0x2100001,
    0x80: 0x2000400,
    0x90: 0x100001,
    0xa0: 0x2000001,
    0xb0: 0x2100400,
    0xc0: 0x2100000,
    0xd0: 0x401,
    0xe0: 0x100400,
    0xf0: 0x2000000,
    0x8: 0x2100001,
    0x18: 0x0,
    0x28: 0x2000401,
    0x38: 0x2100400,
    0x48: 0x100000,
    0x58: 0x2000001,
    0x68: 0x2000000,
    0x78: 0x401,
    0x88: 0x100401,
    0x98: 0x2000400,
    0xa8: 0x2100000,
    0xb8: 0x100001,
    0xc8: 0x400,
    0xd8: 0x2100401,
    0xe8: 0x1,
    0xf8: 0x100400,
    0x100: 0x2000000,
    0x110: 0x100000,
    0x120: 0x2000401,
    0x130: 0x2100001,
    0x140: 0x100001,
    0x150: 0x2000400,
    0x160: 0x2100400,
    0x170: 0x100401,
    0x180: 0x401,
    0x190: 0x2100401,
    0x1a0: 0x100400,
    0x1b0: 0x1,
    0x1c0: 0x0,
    0x1d0: 0x2100000,
    0x1e0: 0x2000001,
    0x1f0: 0x400,
    0x108: 0x100400,
    0x118: 0x2000401,
    0x128: 0x2100001,
    0x138: 0x1,
    0x148: 0x2000000,
    0x158: 0x100000,
    0x168: 0x401,
    0x178: 0x2100400,
    0x188: 0x2000001,
    0x198: 0x2100000,
    0x1a8: 0x0,
    0x1b8: 0x2100401,
    0x1c8: 0x100401,
    0x1d8: 0x400,
    0x1e8: 0x2000400,
    0x1f8: 0x100001,
  },
  {
    0x0: 0x8000820,
    0x1: 0x20000,
    0x2: 0x8000000,
    0x3: 0x20,
    0x4: 0x20020,
    0x5: 0x8020820,
    0x6: 0x8020800,
    0x7: 0x800,
    0x8: 0x8020000,
    0x9: 0x8000800,
    0xa: 0x20800,
    0xb: 0x8020020,
    0xc: 0x820,
    0xd: 0x0,
    0xe: 0x8000020,
    0xf: 0x20820,
    0x80000000: 0x800,
    0x80000001: 0x8020820,
    0x80000002: 0x8000820,
    0x80000003: 0x8000000,
    0x80000004: 0x8020000,
    0x80000005: 0x20800,
    0x80000006: 0x20820,
    0x80000007: 0x20,
    0x80000008: 0x8000020,
    0x80000009: 0x820,
    0x8000000a: 0x20020,
    0x8000000b: 0x8020800,
    0x8000000c: 0x0,
    0x8000000d: 0x8020020,
    0x8000000e: 0x8000800,
    0x8000000f: 0x20000,
    0x10: 0x20820,
    0x11: 0x8020800,
    0x12: 0x20,
    0x13: 0x800,
    0x14: 0x8000800,
    0x15: 0x8000020,
    0x16: 0x8020020,
    0x17: 0x20000,
    0x18: 0x0,
    0x19: 0x20020,
    0x1a: 0x8020000,
    0x1b: 0x8000820,
    0x1c: 0x8020820,
    0x1d: 0x20800,
    0x1e: 0x820,
    0x1f: 0x8000000,
    0x80000010: 0x20000,
    0x80000011: 0x800,
    0x80000012: 0x8020020,
    0x80000013: 0x20820,
    0x80000014: 0x20,
    0x80000015: 0x8020000,
    0x80000016: 0x8000000,
    0x80000017: 0x8000820,
    0x80000018: 0x8020820,
    0x80000019: 0x8000020,
    0x8000001a: 0x8000800,
    0x8000001b: 0x0,
    0x8000001c: 0x20800,
    0x8000001d: 0x820,
    0x8000001e: 0x20020,
    0x8000001f: 0x8020800,
  },
];

// Masks that select the SBOX input
const SBOX_MASK = [
  0xf8000001, 0x1f800000, 0x01f80000, 0x001f8000,
  0x0001f800, 0x00001f80, 0x000001f8, 0x8000001f,
];

// Swap bits across the left and right words
function exchangeLR(offset, mask) {
  const t = ((this._lBlock >>> offset) ^ this._rBlock) & mask;
  this._rBlock ^= t;
  this._lBlock ^= t << offset;
}

function exchangeRL(offset, mask) {
  const t = ((this._rBlock >>> offset) ^ this._lBlock) & mask;
  this._lBlock ^= t;
  this._rBlock ^= t << offset;
}

/**
 * DES block cipher algorithm.
 */
class DESAlgo extends _cipher_core_js__WEBPACK_IMPORTED_MODULE_1__["BlockCipher"] {
  _doReset() {
    // Shortcuts
    const key = this._key;
    const keyWords = key.words;

    // Select 56 bits according to PC1
    const keyBits = [];
    for (let i = 0; i < 56; i += 1) {
      const keyBitPos = PC1[i] - 1;
      keyBits[i] = (keyWords[keyBitPos >>> 5] >>> (31 - (keyBitPos % 32))) & 1;
    }

    // Assemble 16 subkeys
    this._subKeys = [];
    const subKeys = this._subKeys;
    for (let nSubKey = 0; nSubKey < 16; nSubKey += 1) {
      // Create subkey
      subKeys[nSubKey] = [];
      const subKey = subKeys[nSubKey];

      // Shortcut
      const bitShift = BIT_SHIFTS[nSubKey];

      // Select 48 bits according to PC2
      for (let i = 0; i < 24; i += 1) {
        // Select from the left 28 key bits
        subKey[(i / 6) | 0] |= keyBits[((PC2[i] - 1) + bitShift) % 28] << (31 - (i % 6));

        // Select from the right 28 key bits
        subKey[4 + ((i / 6) | 0)]
          |= keyBits[28 + (((PC2[i + 24] - 1) + bitShift) % 28)]
          << (31 - (i % 6));
      }

      // Since each subkey is applied to an expanded 32-bit input,
      // the subkey can be broken into 8 values scaled to 32-bits,
      // which allows the key to be used without expansion
      subKey[0] = (subKey[0] << 1) | (subKey[0] >>> 31);
      for (let i = 1; i < 7; i += 1) {
        subKey[i] >>>= ((i - 1) * 4 + 3);
      }
      subKey[7] = (subKey[7] << 5) | (subKey[7] >>> 27);
    }

    // Compute inverse subkeys
    this._invSubKeys = [];
    const invSubKeys = this._invSubKeys;
    for (let i = 0; i < 16; i += 1) {
      invSubKeys[i] = subKeys[15 - i];
    }
  }

  encryptBlock(M, offset) {
    this._doCryptBlock(M, offset, this._subKeys);
  }

  decryptBlock(M, offset) {
    this._doCryptBlock(M, offset, this._invSubKeys);
  }

  _doCryptBlock(M, offset, subKeys) {
    const _M = M;

    // Get input
    this._lBlock = M[offset];
    this._rBlock = M[offset + 1];

    // Initial permutation
    exchangeLR.call(this, 4, 0x0f0f0f0f);
    exchangeLR.call(this, 16, 0x0000ffff);
    exchangeRL.call(this, 2, 0x33333333);
    exchangeRL.call(this, 8, 0x00ff00ff);
    exchangeLR.call(this, 1, 0x55555555);

    // Rounds
    for (let round = 0; round < 16; round += 1) {
      // Shortcuts
      const subKey = subKeys[round];
      const lBlock = this._lBlock;
      const rBlock = this._rBlock;

      // Feistel function
      let f = 0;
      for (let i = 0; i < 8; i += 1) {
        f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
      }
      this._lBlock = rBlock;
      this._rBlock = lBlock ^ f;
    }

    // Undo swap from last round
    const t = this._lBlock;
    this._lBlock = this._rBlock;
    this._rBlock = t;

    // Final permutation
    exchangeLR.call(this, 1, 0x55555555);
    exchangeRL.call(this, 8, 0x00ff00ff);
    exchangeRL.call(this, 2, 0x33333333);
    exchangeLR.call(this, 16, 0x0000ffff);
    exchangeLR.call(this, 4, 0x0f0f0f0f);

    // Set output
    _M[offset] = this._lBlock;
    _M[offset + 1] = this._rBlock;
  }
}
DESAlgo.keySize = 64 / 32;
DESAlgo.ivSize = 64 / 32;
DESAlgo.blockSize = 64 / 32;

/**
 * Shortcut functions to the cipher's object interface.
 *
 * @example
 *
 *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);
 *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);
 */
const DES = _cipher_core_js__WEBPACK_IMPORTED_MODULE_1__["BlockCipher"]._createHelper(DESAlgo);

/**
 * Triple-DES block cipher algorithm.
 */
class TripleDESAlgo extends _cipher_core_js__WEBPACK_IMPORTED_MODULE_1__["BlockCipher"] {
  _doReset() {
    // Shortcuts
    const key = this._key;
    const keyWords = key.words;
    // Make sure the key length is valid (64, 128 or >= 192 bit)
    if (keyWords.length !== 2 && keyWords.length !== 4 && keyWords.length < 6) {
      throw new Error('Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.');
    }

    // Extend the key according to the keying options defined in 3DES standard
    const key1 = keyWords.slice(0, 2);
    const key2 = keyWords.length < 4 ? keyWords.slice(0, 2) : keyWords.slice(2, 4);
    const key3 = keyWords.length < 6 ? keyWords.slice(0, 2) : keyWords.slice(4, 6);

    // Create DES instances
    this._des1 = DESAlgo.createEncryptor(_core_js__WEBPACK_IMPORTED_MODULE_0__["WordArray"].create(key1));
    this._des2 = DESAlgo.createEncryptor(_core_js__WEBPACK_IMPORTED_MODULE_0__["WordArray"].create(key2));
    this._des3 = DESAlgo.createEncryptor(_core_js__WEBPACK_IMPORTED_MODULE_0__["WordArray"].create(key3));
  }

  encryptBlock(M, offset) {
    this._des1.encryptBlock(M, offset);
    this._des2.decryptBlock(M, offset);
    this._des3.encryptBlock(M, offset);
  }

  decryptBlock(M, offset) {
    this._des3.decryptBlock(M, offset);
    this._des2.encryptBlock(M, offset);
    this._des1.decryptBlock(M, offset);
  }
}
TripleDESAlgo.keySize = 192 / 32;
TripleDESAlgo.ivSize = 64 / 32;
TripleDESAlgo.blockSize = 64 / 32;

/**
 * Shortcut functions to the cipher's object interface.
 *
 * @example
 *
 *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);
 *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);
 */
const TripleDES = _cipher_core_js__WEBPACK_IMPORTED_MODULE_1__["BlockCipher"]._createHelper(TripleDESAlgo);


/***/ }),

/***/ "./node_modules/crypto-es/lib/x64-core.js":
/*!************************************************!*\
  !*** ./node_modules/crypto-es/lib/x64-core.js ***!
  \************************************************/
/*! exports provided: X64Word, X64WordArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X64Word", function() { return X64Word; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X64WordArray", function() { return X64WordArray; });
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./node_modules/crypto-es/lib/core.js");


const X32WordArray = _core_js__WEBPACK_IMPORTED_MODULE_0__["WordArray"];

/**
 * A 64-bit word.
 */
class X64Word extends _core_js__WEBPACK_IMPORTED_MODULE_0__["Base"] {
  /**
   * Initializes a newly created 64-bit word.
   *
   * @param {number} high The high 32 bits.
   * @param {number} low The low 32 bits.
   *
   * @example
   *
   *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
   */
  constructor(high, low) {
    super();

    this.high = high;
    this.low = low;
  }
}

/**
 * An array of 64-bit words.
 *
 * @property {Array} words The array of CryptoJS.x64.Word objects.
 * @property {number} sigBytes The number of significant bytes in this word array.
 */
class X64WordArray extends _core_js__WEBPACK_IMPORTED_MODULE_0__["Base"] {
  /**
   * Initializes a newly created word array.
   *
   * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
   * @param {number} sigBytes (Optional) The number of significant bytes in the words.
   *
   * @example
   *
   *     var wordArray = CryptoJS.x64.WordArray.create();
   *
   *     var wordArray = CryptoJS.x64.WordArray.create([
   *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
   *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
   *     ]);
   *
   *     var wordArray = CryptoJS.x64.WordArray.create([
   *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
   *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
   *     ], 10);
   */
  constructor(words = [], sigBytes = words.length * 8) {
    super();

    this.words = words;
    this.sigBytes = sigBytes;
  }

  /**
   * Converts this 64-bit word array to a 32-bit word array.
   *
   * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
   *
   * @example
   *
   *     var x32WordArray = x64WordArray.toX32();
   */
  toX32() {
    // Shortcuts
    const x64Words = this.words;
    const x64WordsLength = x64Words.length;

    // Convert
    const x32Words = [];
    for (let i = 0; i < x64WordsLength; i += 1) {
      const x64Word = x64Words[i];
      x32Words.push(x64Word.high);
      x32Words.push(x64Word.low);
    }

    return X32WordArray.create(x32Words, this.sigBytes);
  }

  /**
   * Creates a copy of this word array.
   *
   * @return {X64WordArray} The clone.
   *
   * @example
   *
   *     var clone = x64WordArray.clone();
   */
  clone() {
    const clone = super.clone.call(this);

    // Clone "words" array
    clone.words = this.words.slice(0);
    const { words } = clone;

    // Clone each X64Word object
    const wordsLength = words.length;
    for (let i = 0; i < wordsLength; i += 1) {
      words[i] = words[i].clone();
    }

    return clone;
  }
}


/***/ }),

/***/ "./node_modules/dom-serializer/foreignNames.json":
/*!*******************************************************!*\
  !*** ./node_modules/dom-serializer/foreignNames.json ***!
  \*******************************************************/
/*! exports provided: elementNames, attributeNames, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"elementNames\":{\"altglyph\":\"altGlyph\",\"altglyphdef\":\"altGlyphDef\",\"altglyphitem\":\"altGlyphItem\",\"animatecolor\":\"animateColor\",\"animatemotion\":\"animateMotion\",\"animatetransform\":\"animateTransform\",\"clippath\":\"clipPath\",\"feblend\":\"feBlend\",\"fecolormatrix\":\"feColorMatrix\",\"fecomponenttransfer\":\"feComponentTransfer\",\"fecomposite\":\"feComposite\",\"feconvolvematrix\":\"feConvolveMatrix\",\"fediffuselighting\":\"feDiffuseLighting\",\"fedisplacementmap\":\"feDisplacementMap\",\"fedistantlight\":\"feDistantLight\",\"fedropshadow\":\"feDropShadow\",\"feflood\":\"feFlood\",\"fefunca\":\"feFuncA\",\"fefuncb\":\"feFuncB\",\"fefuncg\":\"feFuncG\",\"fefuncr\":\"feFuncR\",\"fegaussianblur\":\"feGaussianBlur\",\"feimage\":\"feImage\",\"femerge\":\"feMerge\",\"femergenode\":\"feMergeNode\",\"femorphology\":\"feMorphology\",\"feoffset\":\"feOffset\",\"fepointlight\":\"fePointLight\",\"fespecularlighting\":\"feSpecularLighting\",\"fespotlight\":\"feSpotLight\",\"fetile\":\"feTile\",\"feturbulence\":\"feTurbulence\",\"foreignobject\":\"foreignObject\",\"glyphref\":\"glyphRef\",\"lineargradient\":\"linearGradient\",\"radialgradient\":\"radialGradient\",\"textpath\":\"textPath\"},\"attributeNames\":{\"definitionurl\":\"definitionURL\",\"attributename\":\"attributeName\",\"attributetype\":\"attributeType\",\"basefrequency\":\"baseFrequency\",\"baseprofile\":\"baseProfile\",\"calcmode\":\"calcMode\",\"clippathunits\":\"clipPathUnits\",\"diffuseconstant\":\"diffuseConstant\",\"edgemode\":\"edgeMode\",\"filterunits\":\"filterUnits\",\"glyphref\":\"glyphRef\",\"gradienttransform\":\"gradientTransform\",\"gradientunits\":\"gradientUnits\",\"kernelmatrix\":\"kernelMatrix\",\"kernelunitlength\":\"kernelUnitLength\",\"keypoints\":\"keyPoints\",\"keysplines\":\"keySplines\",\"keytimes\":\"keyTimes\",\"lengthadjust\":\"lengthAdjust\",\"limitingconeangle\":\"limitingConeAngle\",\"markerheight\":\"markerHeight\",\"markerunits\":\"markerUnits\",\"markerwidth\":\"markerWidth\",\"maskcontentunits\":\"maskContentUnits\",\"maskunits\":\"maskUnits\",\"numoctaves\":\"numOctaves\",\"pathlength\":\"pathLength\",\"patterncontentunits\":\"patternContentUnits\",\"patterntransform\":\"patternTransform\",\"patternunits\":\"patternUnits\",\"pointsatx\":\"pointsAtX\",\"pointsaty\":\"pointsAtY\",\"pointsatz\":\"pointsAtZ\",\"preservealpha\":\"preserveAlpha\",\"preserveaspectratio\":\"preserveAspectRatio\",\"primitiveunits\":\"primitiveUnits\",\"refx\":\"refX\",\"refy\":\"refY\",\"repeatcount\":\"repeatCount\",\"repeatdur\":\"repeatDur\",\"requiredextensions\":\"requiredExtensions\",\"requiredfeatures\":\"requiredFeatures\",\"specularconstant\":\"specularConstant\",\"specularexponent\":\"specularExponent\",\"spreadmethod\":\"spreadMethod\",\"startoffset\":\"startOffset\",\"stddeviation\":\"stdDeviation\",\"stitchtiles\":\"stitchTiles\",\"surfacescale\":\"surfaceScale\",\"systemlanguage\":\"systemLanguage\",\"tablevalues\":\"tableValues\",\"targetx\":\"targetX\",\"targety\":\"targetY\",\"textlength\":\"textLength\",\"viewbox\":\"viewBox\",\"viewtarget\":\"viewTarget\",\"xchannelselector\":\"xChannelSelector\",\"ychannelselector\":\"yChannelSelector\",\"zoomandpan\":\"zoomAndPan\"}}");

/***/ }),

/***/ "./node_modules/dom-serializer/index.js":
/*!**********************************************!*\
  !*** ./node_modules/dom-serializer/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
  Module dependencies
*/
var ElementType = __webpack_require__(/*! domelementtype */ "./node_modules/domelementtype/lib/index.js");
var entities = __webpack_require__(/*! entities */ "./node_modules/entities/lib/index.js");

/* mixed-case SVG and MathML tags & attributes
   recognized by the HTML parser, see
   https://html.spec.whatwg.org/multipage/parsing.html#parsing-main-inforeign
*/
var foreignNames = __webpack_require__(/*! ./foreignNames.json */ "./node_modules/dom-serializer/foreignNames.json");
foreignNames.elementNames.__proto__ = null; /* use as a simple dictionary */
foreignNames.attributeNames.__proto__ = null;

var unencodedElements = {
  __proto__: null,
  style: true,
  script: true,
  xmp: true,
  iframe: true,
  noembed: true,
  noframes: true,
  plaintext: true,
  noscript: true
};

/*
  Format attributes
*/
function formatAttrs(attributes, opts) {
  if (!attributes) return;

  var output = '';
  var value;

  // Loop through the attributes
  for (var key in attributes) {
    value = attributes[key];
    if (output) {
      output += ' ';
    }

    if (opts.xmlMode === 'foreign') {
      /* fix up mixed-case attribute names */
      key = foreignNames.attributeNames[key] || key;
    }
    output += key;
    if ((value !== null && value !== '') || opts.xmlMode) {
      output +=
        '="' +
        (opts.decodeEntities
          ? entities.encodeXML(value)
          : value.replace(/\"/g, '&quot;')) +
        '"';
    }
  }

  return output;
}

/*
  Self-enclosing tags (stolen from node-htmlparser)
*/
var singleTag = {
  __proto__: null,
  area: true,
  base: true,
  basefont: true,
  br: true,
  col: true,
  command: true,
  embed: true,
  frame: true,
  hr: true,
  img: true,
  input: true,
  isindex: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true
};

var render = (module.exports = function(dom, opts) {
  if (!Array.isArray(dom) && !dom.cheerio) dom = [dom];
  opts = opts || {};

  var output = '';

  for (var i = 0; i < dom.length; i++) {
    var elem = dom[i];

    if (elem.type === 'root') output += render(elem.children, opts);
    else if (ElementType.isTag(elem)) output += renderTag(elem, opts);
    else if (elem.type === ElementType.Directive)
      output += renderDirective(elem);
    else if (elem.type === ElementType.Comment) output += renderComment(elem);
    else if (elem.type === ElementType.CDATA) output += renderCdata(elem);
    else output += renderText(elem, opts);
  }

  return output;
});

var foreignModeIntegrationPoints = [
  'mi',
  'mo',
  'mn',
  'ms',
  'mtext',
  'annotation-xml',
  'foreignObject',
  'desc',
  'title'
];

function renderTag(elem, opts) {
  // Handle SVG / MathML in HTML
  if (opts.xmlMode === 'foreign') {
    /* fix up mixed-case element names */
    elem.name = foreignNames.elementNames[elem.name] || elem.name;
    /* exit foreign mode at integration points */
    if (
      elem.parent &&
      foreignModeIntegrationPoints.indexOf(elem.parent.name) >= 0
    )
      opts = Object.assign({}, opts, { xmlMode: false });
  }
  if (!opts.xmlMode && ['svg', 'math'].indexOf(elem.name) >= 0) {
    opts = Object.assign({}, opts, { xmlMode: 'foreign' });
  }

  var tag = '<' + elem.name;
  var attribs = formatAttrs(elem.attribs, opts);

  if (attribs) {
    tag += ' ' + attribs;
  }

  if (opts.xmlMode && (!elem.children || elem.children.length === 0)) {
    tag += '/>';
  } else {
    tag += '>';
    if (elem.children) {
      tag += render(elem.children, opts);
    }

    if (!singleTag[elem.name] || opts.xmlMode) {
      tag += '</' + elem.name + '>';
    }
  }

  return tag;
}

function renderDirective(elem) {
  return '<' + elem.data + '>';
}

function renderText(elem, opts) {
  var data = elem.data || '';

  // if entities weren't decoded, no need to encode them back
  if (
    opts.decodeEntities &&
    !(elem.parent && elem.parent.name in unencodedElements)
  ) {
    data = entities.encodeXML(data);
  }

  return data;
}

function renderCdata(elem) {
  return '<![CDATA[' + elem.children[0].data + ']]>';
}

function renderComment(elem) {
  return '<!--' + elem.data + '-->';
}


/***/ }),

/***/ "./node_modules/domelementtype/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/domelementtype/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tests whether an element is a tag or not.
 *
 * @param elem Element to test
 */
function isTag(elem) {
    return (elem.type === "tag" /* Tag */ ||
        elem.type === "script" /* Script */ ||
        elem.type === "style" /* Style */);
}
exports.isTag = isTag;
// Exports for backwards compatibility
exports.Text = "text" /* Text */; //Text
exports.Directive = "directive" /* Directive */; //<? ... ?>
exports.Comment = "comment" /* Comment */; //<!-- ... -->
exports.Script = "script" /* Script */; //<script> tags
exports.Style = "style" /* Style */; //<style> tags
exports.Tag = "tag" /* Tag */; //Any tag
exports.CDATA = "cdata" /* CDATA */; //<![CDATA[ ... ]]>
exports.Doctype = "doctype" /* Doctype */;


/***/ }),

/***/ "./node_modules/domutils/index.js":
/*!****************************************!*\
  !*** ./node_modules/domutils/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DomUtils = module.exports;

[
	__webpack_require__(/*! ./lib/stringify */ "./node_modules/domutils/lib/stringify.js"),
	__webpack_require__(/*! ./lib/traversal */ "./node_modules/domutils/lib/traversal.js"),
	__webpack_require__(/*! ./lib/manipulation */ "./node_modules/domutils/lib/manipulation.js"),
	__webpack_require__(/*! ./lib/querying */ "./node_modules/domutils/lib/querying.js"),
	__webpack_require__(/*! ./lib/legacy */ "./node_modules/domutils/lib/legacy.js"),
	__webpack_require__(/*! ./lib/helpers */ "./node_modules/domutils/lib/helpers.js")
].forEach(function(ext){
	Object.keys(ext).forEach(function(key){
		DomUtils[key] = ext[key].bind(DomUtils);
	});
});


/***/ }),

/***/ "./node_modules/domutils/lib/helpers.js":
/*!**********************************************!*\
  !*** ./node_modules/domutils/lib/helpers.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removeSubsets
// Given an array of nodes, remove any member that is contained by another.
exports.removeSubsets = function(nodes) {
	var idx = nodes.length, node, ancestor, replace;

	// Check if each node (or one of its ancestors) is already contained in the
	// array.
	while (--idx > -1) {
		node = ancestor = nodes[idx];

		// Temporarily remove the node under consideration
		nodes[idx] = null;
		replace = true;

		while (ancestor) {
			if (nodes.indexOf(ancestor) > -1) {
				replace = false;
				nodes.splice(idx, 1);
				break;
			}
			ancestor = ancestor.parent;
		}

		// If the node has been found to be unique, re-insert it.
		if (replace) {
			nodes[idx] = node;
		}
	}

	return nodes;
};

// Source: http://dom.spec.whatwg.org/#dom-node-comparedocumentposition
var POSITION = {
	DISCONNECTED: 1,
	PRECEDING: 2,
	FOLLOWING: 4,
	CONTAINS: 8,
	CONTAINED_BY: 16
};

// Compare the position of one node against another node in any other document.
// The return value is a bitmask with the following values:
//
// document order:
// > There is an ordering, document order, defined on all the nodes in the
// > document corresponding to the order in which the first character of the
// > XML representation of each node occurs in the XML representation of the
// > document after expansion of general entities. Thus, the document element
// > node will be the first node. Element nodes occur before their children.
// > Thus, document order orders element nodes in order of the occurrence of
// > their start-tag in the XML (after expansion of entities). The attribute
// > nodes of an element occur after the element and before its children. The
// > relative order of attribute nodes is implementation-dependent./
// Source:
// http://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-document-order
//
// @argument {Node} nodaA The first node to use in the comparison
// @argument {Node} nodeB The second node to use in the comparison
//
// @return {Number} A bitmask describing the input nodes' relative position.
//         See http://dom.spec.whatwg.org/#dom-node-comparedocumentposition for
//         a description of these values.
var comparePos = exports.compareDocumentPosition = function(nodeA, nodeB) {
	var aParents = [];
	var bParents = [];
	var current, sharedParent, siblings, aSibling, bSibling, idx;

	if (nodeA === nodeB) {
		return 0;
	}

	current = nodeA;
	while (current) {
		aParents.unshift(current);
		current = current.parent;
	}
	current = nodeB;
	while (current) {
		bParents.unshift(current);
		current = current.parent;
	}

	idx = 0;
	while (aParents[idx] === bParents[idx]) {
		idx++;
	}

	if (idx === 0) {
		return POSITION.DISCONNECTED;
	}

	sharedParent = aParents[idx - 1];
	siblings = sharedParent.children;
	aSibling = aParents[idx];
	bSibling = bParents[idx];

	if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
		if (sharedParent === nodeB) {
			return POSITION.FOLLOWING | POSITION.CONTAINED_BY;
		}
		return POSITION.FOLLOWING;
	} else {
		if (sharedParent === nodeA) {
			return POSITION.PRECEDING | POSITION.CONTAINS;
		}
		return POSITION.PRECEDING;
	}
};

// Sort an array of nodes based on their relative position in the document and
// remove any duplicate nodes. If the array contains nodes that do not belong
// to the same document, sort order is unspecified.
//
// @argument {Array} nodes Array of DOM nodes
//
// @returns {Array} collection of unique nodes, sorted in document order
exports.uniqueSort = function(nodes) {
	var idx = nodes.length, node, position;

	nodes = nodes.slice();

	while (--idx > -1) {
		node = nodes[idx];
		position = nodes.indexOf(node);
		if (position > -1 && position < idx) {
			nodes.splice(idx, 1);
		}
	}
	nodes.sort(function(a, b) {
		var relative = comparePos(a, b);
		if (relative & POSITION.PRECEDING) {
			return -1;
		} else if (relative & POSITION.FOLLOWING) {
			return 1;
		}
		return 0;
	});

	return nodes;
};


/***/ }),

/***/ "./node_modules/domutils/lib/legacy.js":
/*!*********************************************!*\
  !*** ./node_modules/domutils/lib/legacy.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ElementType = __webpack_require__(/*! domelementtype */ "./node_modules/domutils/node_modules/domelementtype/index.js");
var isTag = exports.isTag = ElementType.isTag;

exports.testElement = function(options, element){
	for(var key in options){
		if(!options.hasOwnProperty(key));
		else if(key === "tag_name"){
			if(!isTag(element) || !options.tag_name(element.name)){
				return false;
			}
		} else if(key === "tag_type"){
			if(!options.tag_type(element.type)) return false;
		} else if(key === "tag_contains"){
			if(isTag(element) || !options.tag_contains(element.data)){
				return false;
			}
		} else if(!element.attribs || !options[key](element.attribs[key])){
			return false;
		}
	}
	return true;
};

var Checks = {
	tag_name: function(name){
		if(typeof name === "function"){
			return function(elem){ return isTag(elem) && name(elem.name); };
		} else if(name === "*"){
			return isTag;
		} else {
			return function(elem){ return isTag(elem) && elem.name === name; };
		}
	},
	tag_type: function(type){
		if(typeof type === "function"){
			return function(elem){ return type(elem.type); };
		} else {
			return function(elem){ return elem.type === type; };
		}
	},
	tag_contains: function(data){
		if(typeof data === "function"){
			return function(elem){ return !isTag(elem) && data(elem.data); };
		} else {
			return function(elem){ return !isTag(elem) && elem.data === data; };
		}
	}
};

function getAttribCheck(attrib, value){
	if(typeof value === "function"){
		return function(elem){ return elem.attribs && value(elem.attribs[attrib]); };
	} else {
		return function(elem){ return elem.attribs && elem.attribs[attrib] === value; };
	}
}

function combineFuncs(a, b){
	return function(elem){
		return a(elem) || b(elem);
	};
}

exports.getElements = function(options, element, recurse, limit){
	var funcs = Object.keys(options).map(function(key){
		var value = options[key];
		return key in Checks ? Checks[key](value) : getAttribCheck(key, value);
	});

	return funcs.length === 0 ? [] : this.filter(
		funcs.reduce(combineFuncs),
		element, recurse, limit
	);
};

exports.getElementById = function(id, element, recurse){
	if(!Array.isArray(element)) element = [element];
	return this.findOne(getAttribCheck("id", id), element, recurse !== false);
};

exports.getElementsByTagName = function(name, element, recurse, limit){
	return this.filter(Checks.tag_name(name), element, recurse, limit);
};

exports.getElementsByTagType = function(type, element, recurse, limit){
	return this.filter(Checks.tag_type(type), element, recurse, limit);
};


/***/ }),

/***/ "./node_modules/domutils/lib/manipulation.js":
/*!***************************************************!*\
  !*** ./node_modules/domutils/lib/manipulation.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.removeElement = function(elem){
	if(elem.prev) elem.prev.next = elem.next;
	if(elem.next) elem.next.prev = elem.prev;

	if(elem.parent){
		var childs = elem.parent.children;
		childs.splice(childs.lastIndexOf(elem), 1);
	}
};

exports.replaceElement = function(elem, replacement){
	var prev = replacement.prev = elem.prev;
	if(prev){
		prev.next = replacement;
	}

	var next = replacement.next = elem.next;
	if(next){
		next.prev = replacement;
	}

	var parent = replacement.parent = elem.parent;
	if(parent){
		var childs = parent.children;
		childs[childs.lastIndexOf(elem)] = replacement;
	}
};

exports.appendChild = function(elem, child){
	child.parent = elem;

	if(elem.children.push(child) !== 1){
		var sibling = elem.children[elem.children.length - 2];
		sibling.next = child;
		child.prev = sibling;
		child.next = null;
	}
};

exports.append = function(elem, next){
	var parent = elem.parent,
		currNext = elem.next;

	next.next = currNext;
	next.prev = elem;
	elem.next = next;
	next.parent = parent;

	if(currNext){
		currNext.prev = next;
		if(parent){
			var childs = parent.children;
			childs.splice(childs.lastIndexOf(currNext), 0, next);
		}
	} else if(parent){
		parent.children.push(next);
	}
};

exports.prepend = function(elem, prev){
	var parent = elem.parent;
	if(parent){
		var childs = parent.children;
		childs.splice(childs.lastIndexOf(elem), 0, prev);
	}

	if(elem.prev){
		elem.prev.next = prev;
	}
	
	prev.parent = parent;
	prev.prev = elem.prev;
	prev.next = elem;
	elem.prev = prev;
};




/***/ }),

/***/ "./node_modules/domutils/lib/querying.js":
/*!***********************************************!*\
  !*** ./node_modules/domutils/lib/querying.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isTag = __webpack_require__(/*! domelementtype */ "./node_modules/domutils/node_modules/domelementtype/index.js").isTag;

module.exports = {
	filter: filter,
	find: find,
	findOneChild: findOneChild,
	findOne: findOne,
	existsOne: existsOne,
	findAll: findAll
};

function filter(test, element, recurse, limit){
	if(!Array.isArray(element)) element = [element];

	if(typeof limit !== "number" || !isFinite(limit)){
		limit = Infinity;
	}
	return find(test, element, recurse !== false, limit);
}

function find(test, elems, recurse, limit){
	var result = [], childs;

	for(var i = 0, j = elems.length; i < j; i++){
		if(test(elems[i])){
			result.push(elems[i]);
			if(--limit <= 0) break;
		}

		childs = elems[i].children;
		if(recurse && childs && childs.length > 0){
			childs = find(test, childs, recurse, limit);
			result = result.concat(childs);
			limit -= childs.length;
			if(limit <= 0) break;
		}
	}

	return result;
}

function findOneChild(test, elems){
	for(var i = 0, l = elems.length; i < l; i++){
		if(test(elems[i])) return elems[i];
	}

	return null;
}

function findOne(test, elems){
	var elem = null;

	for(var i = 0, l = elems.length; i < l && !elem; i++){
		if(!isTag(elems[i])){
			continue;
		} else if(test(elems[i])){
			elem = elems[i];
		} else if(elems[i].children.length > 0){
			elem = findOne(test, elems[i].children);
		}
	}

	return elem;
}

function existsOne(test, elems){
	for(var i = 0, l = elems.length; i < l; i++){
		if(
			isTag(elems[i]) && (
				test(elems[i]) || (
					elems[i].children.length > 0 &&
					existsOne(test, elems[i].children)
				)
			)
		){
			return true;
		}
	}

	return false;
}

function findAll(test, rootElems){
	var result = [];
	var stack = rootElems.slice();
	while(stack.length){
		var elem = stack.shift();
		if(!isTag(elem)) continue;
		if (elem.children && elem.children.length > 0) {
			stack.unshift.apply(stack, elem.children);
		}
		if(test(elem)) result.push(elem);
	}
	return result;
}


/***/ }),

/***/ "./node_modules/domutils/lib/stringify.js":
/*!************************************************!*\
  !*** ./node_modules/domutils/lib/stringify.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ElementType = __webpack_require__(/*! domelementtype */ "./node_modules/domutils/node_modules/domelementtype/index.js"),
    getOuterHTML = __webpack_require__(/*! dom-serializer */ "./node_modules/dom-serializer/index.js"),
    isTag = ElementType.isTag;

module.exports = {
	getInnerHTML: getInnerHTML,
	getOuterHTML: getOuterHTML,
	getText: getText
};

function getInnerHTML(elem, opts){
	return elem.children ? elem.children.map(function(elem){
		return getOuterHTML(elem, opts);
	}).join("") : "";
}

function getText(elem){
	if(Array.isArray(elem)) return elem.map(getText).join("");
	if(isTag(elem)) return elem.name === "br" ? "\n" : getText(elem.children);
	if(elem.type === ElementType.CDATA) return getText(elem.children);
	if(elem.type === ElementType.Text) return elem.data;
	return "";
}


/***/ }),

/***/ "./node_modules/domutils/lib/traversal.js":
/*!************************************************!*\
  !*** ./node_modules/domutils/lib/traversal.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var getChildren = exports.getChildren = function(elem){
	return elem.children;
};

var getParent = exports.getParent = function(elem){
	return elem.parent;
};

exports.getSiblings = function(elem){
	var parent = getParent(elem);
	return parent ? getChildren(parent) : [elem];
};

exports.getAttributeValue = function(elem, name){
	return elem.attribs && elem.attribs[name];
};

exports.hasAttrib = function(elem, name){
	return !!elem.attribs && hasOwnProperty.call(elem.attribs, name);
};

exports.getName = function(elem){
	return elem.name;
};


/***/ }),

/***/ "./node_modules/domutils/node_modules/domelementtype/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/domutils/node_modules/domelementtype/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//Types of elements found in the DOM
module.exports = {
	Text: "text", //Text
	Directive: "directive", //<? ... ?>
	Comment: "comment", //<!-- ... -->
	Script: "script", //<script> tags
	Style: "style", //<style> tags
	Tag: "tag", //Any tag
	CDATA: "cdata", //<![CDATA[ ... ]]>
	Doctype: "doctype",

	isTag: function(elem){
		return elem.type === "tag" || elem.type === "script" || elem.type === "style";
	}
};


/***/ }),

/***/ "./node_modules/entities/lib/decode.js":
/*!*********************************************!*\
  !*** ./node_modules/entities/lib/decode.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var entities_json_1 = __importDefault(__webpack_require__(/*! ./maps/entities.json */ "./node_modules/entities/lib/maps/entities.json"));
var legacy_json_1 = __importDefault(__webpack_require__(/*! ./maps/legacy.json */ "./node_modules/entities/lib/maps/legacy.json"));
var xml_json_1 = __importDefault(__webpack_require__(/*! ./maps/xml.json */ "./node_modules/entities/lib/maps/xml.json"));
var decode_codepoint_1 = __importDefault(__webpack_require__(/*! ./decode_codepoint */ "./node_modules/entities/lib/decode_codepoint.js"));
exports.decodeXML = getStrictDecoder(xml_json_1.default);
exports.decodeHTMLStrict = getStrictDecoder(entities_json_1.default);
function getStrictDecoder(map) {
    var keys = Object.keys(map).join("|");
    var replace = getReplacer(map);
    keys += "|#[xX][\\da-fA-F]+|#\\d+";
    var re = new RegExp("&(?:" + keys + ");", "g");
    return function (str) { return String(str).replace(re, replace); };
}
var sorter = function (a, b) { return (a < b ? 1 : -1); };
exports.decodeHTML = (function () {
    var legacy = Object.keys(legacy_json_1.default).sort(sorter);
    var keys = Object.keys(entities_json_1.default).sort(sorter);
    for (var i = 0, j = 0; i < keys.length; i++) {
        if (legacy[j] === keys[i]) {
            keys[i] += ";?";
            j++;
        }
        else {
            keys[i] += ";";
        }
    }
    var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
    var replace = getReplacer(entities_json_1.default);
    function replacer(str) {
        if (str.substr(-1) !== ";")
            str += ";";
        return replace(str);
    }
    //TODO consider creating a merged map
    return function (str) { return String(str).replace(re, replacer); };
})();
function getReplacer(map) {
    return function replace(str) {
        if (str.charAt(1) === "#") {
            var secondChar = str.charAt(2);
            if (secondChar === "X" || secondChar === "x") {
                return decode_codepoint_1.default(parseInt(str.substr(3), 16));
            }
            return decode_codepoint_1.default(parseInt(str.substr(2), 10));
        }
        return map[str.slice(1, -1)];
    };
}


/***/ }),

/***/ "./node_modules/entities/lib/decode_codepoint.js":
/*!*******************************************************!*\
  !*** ./node_modules/entities/lib/decode_codepoint.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var decode_json_1 = __importDefault(__webpack_require__(/*! ./maps/decode.json */ "./node_modules/entities/lib/maps/decode.json"));
// modified version of https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
function decodeCodePoint(codePoint) {
    if ((codePoint >= 0xd800 && codePoint <= 0xdfff) || codePoint > 0x10ffff) {
        return "\uFFFD";
    }
    if (codePoint in decode_json_1.default) {
        codePoint = decode_json_1.default[codePoint];
    }
    var output = "";
    if (codePoint > 0xffff) {
        codePoint -= 0x10000;
        output += String.fromCharCode(((codePoint >>> 10) & 0x3ff) | 0xd800);
        codePoint = 0xdc00 | (codePoint & 0x3ff);
    }
    output += String.fromCharCode(codePoint);
    return output;
}
exports.default = decodeCodePoint;


/***/ }),

/***/ "./node_modules/entities/lib/encode.js":
/*!*********************************************!*\
  !*** ./node_modules/entities/lib/encode.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var xml_json_1 = __importDefault(__webpack_require__(/*! ./maps/xml.json */ "./node_modules/entities/lib/maps/xml.json"));
var inverseXML = getInverseObj(xml_json_1.default);
var xmlReplacer = getInverseReplacer(inverseXML);
exports.encodeXML = getInverse(inverseXML, xmlReplacer);
var entities_json_1 = __importDefault(__webpack_require__(/*! ./maps/entities.json */ "./node_modules/entities/lib/maps/entities.json"));
var inverseHTML = getInverseObj(entities_json_1.default);
var htmlReplacer = getInverseReplacer(inverseHTML);
exports.encodeHTML = getInverse(inverseHTML, htmlReplacer);
function getInverseObj(obj) {
    return Object.keys(obj)
        .sort()
        .reduce(function (inverse, name) {
        inverse[obj[name]] = "&" + name + ";";
        return inverse;
    }, {});
}
function getInverseReplacer(inverse) {
    var single = [];
    var multiple = [];
    for (var _i = 0, _a = Object.keys(inverse); _i < _a.length; _i++) {
        var k = _a[_i];
        if (k.length === 1) {
            // Add value to single array
            single.push("\\" + k);
        }
        else {
            // Add value to multiple array
            multiple.push(k);
        }
    }
    // Add ranges to single characters.
    single.sort();
    for (var start = 0; start < single.length - 1; start++) {
        // Find the end of a run of characters
        var end = start;
        while (end < single.length - 1 &&
            single[end].charCodeAt(1) + 1 === single[end + 1].charCodeAt(1)) {
            end += 1;
        }
        var count = 1 + end - start;
        // We want to replace at least three characters
        if (count < 3)
            continue;
        single.splice(start, count, single[start] + "-" + single[end]);
    }
    multiple.unshift("[" + single.join("") + "]");
    return new RegExp(multiple.join("|"), "g");
}
var reNonASCII = /[^\0-\x7F]/gu;
function singleCharReplacer(c) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return "&#x" + c.codePointAt(0).toString(16).toUpperCase() + ";";
}
function getInverse(inverse, re) {
    return function (data) {
        return data
            .replace(re, function (name) { return inverse[name]; })
            .replace(reNonASCII, singleCharReplacer);
    };
}
var reXmlChars = getInverseReplacer(inverseXML);
function escape(data) {
    return data
        .replace(reXmlChars, singleCharReplacer)
        .replace(reNonASCII, singleCharReplacer);
}
exports.escape = escape;


/***/ }),

/***/ "./node_modules/entities/lib/index.js":
/*!********************************************!*\
  !*** ./node_modules/entities/lib/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var decode_1 = __webpack_require__(/*! ./decode */ "./node_modules/entities/lib/decode.js");
var encode_1 = __webpack_require__(/*! ./encode */ "./node_modules/entities/lib/encode.js");
/**
 * Decodes a string with entities.
 *
 * @param data String to decode.
 * @param level Optional level to decode at. 0 = XML, 1 = HTML. Default is 0.
 */
function decode(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTML)(data);
}
exports.decode = decode;
/**
 * Decodes a string with entities. Does not allow missing trailing semicolons for entities.
 *
 * @param data String to decode.
 * @param level Optional level to decode at. 0 = XML, 1 = HTML. Default is 0.
 */
function decodeStrict(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTMLStrict)(data);
}
exports.decodeStrict = decodeStrict;
/**
 * Encodes a string with entities.
 *
 * @param data String to encode.
 * @param level Optional level to encode at. 0 = XML, 1 = HTML. Default is 0.
 */
function encode(data, level) {
    return (!level || level <= 0 ? encode_1.encodeXML : encode_1.encodeHTML)(data);
}
exports.encode = encode;
var encode_2 = __webpack_require__(/*! ./encode */ "./node_modules/entities/lib/encode.js");
exports.encodeXML = encode_2.encodeXML;
exports.encodeHTML = encode_2.encodeHTML;
exports.escape = encode_2.escape;
// Legacy aliases
exports.encodeHTML4 = encode_2.encodeHTML;
exports.encodeHTML5 = encode_2.encodeHTML;
var decode_2 = __webpack_require__(/*! ./decode */ "./node_modules/entities/lib/decode.js");
exports.decodeXML = decode_2.decodeXML;
exports.decodeHTML = decode_2.decodeHTML;
exports.decodeHTMLStrict = decode_2.decodeHTMLStrict;
// Legacy aliases
exports.decodeHTML4 = decode_2.decodeHTML;
exports.decodeHTML5 = decode_2.decodeHTML;
exports.decodeHTML4Strict = decode_2.decodeHTMLStrict;
exports.decodeHTML5Strict = decode_2.decodeHTMLStrict;
exports.decodeXMLStrict = decode_2.decodeXML;


/***/ }),

/***/ "./node_modules/entities/lib/maps/decode.json":
/*!****************************************************!*\
  !*** ./node_modules/entities/lib/maps/decode.json ***!
  \****************************************************/
/*! exports provided: 0, 128, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 142, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 158, 159, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"0\":65533,\"128\":8364,\"130\":8218,\"131\":402,\"132\":8222,\"133\":8230,\"134\":8224,\"135\":8225,\"136\":710,\"137\":8240,\"138\":352,\"139\":8249,\"140\":338,\"142\":381,\"145\":8216,\"146\":8217,\"147\":8220,\"148\":8221,\"149\":8226,\"150\":8211,\"151\":8212,\"152\":732,\"153\":8482,\"154\":353,\"155\":8250,\"156\":339,\"158\":382,\"159\":376}");

/***/ }),

/***/ "./node_modules/entities/lib/maps/entities.json":
/*!******************************************************!*\
  !*** ./node_modules/entities/lib/maps/entities.json ***!
  \******************************************************/
/*! exports provided: Aacute, aacute, Abreve, abreve, ac, acd, acE, Acirc, acirc, acute, Acy, acy, AElig, aelig, af, Afr, afr, Agrave, agrave, alefsym, aleph, Alpha, alpha, Amacr, amacr, amalg, amp, AMP, andand, And, and, andd, andslope, andv, ang, ange, angle, angmsdaa, angmsdab, angmsdac, angmsdad, angmsdae, angmsdaf, angmsdag, angmsdah, angmsd, angrt, angrtvb, angrtvbd, angsph, angst, angzarr, Aogon, aogon, Aopf, aopf, apacir, ap, apE, ape, apid, apos, ApplyFunction, approx, approxeq, Aring, aring, Ascr, ascr, Assign, ast, asymp, asympeq, Atilde, atilde, Auml, auml, awconint, awint, backcong, backepsilon, backprime, backsim, backsimeq, Backslash, Barv, barvee, barwed, Barwed, barwedge, bbrk, bbrktbrk, bcong, Bcy, bcy, bdquo, becaus, because, Because, bemptyv, bepsi, bernou, Bernoullis, Beta, beta, beth, between, Bfr, bfr, bigcap, bigcirc, bigcup, bigodot, bigoplus, bigotimes, bigsqcup, bigstar, bigtriangledown, bigtriangleup, biguplus, bigvee, bigwedge, bkarow, blacklozenge, blacksquare, blacktriangle, blacktriangledown, blacktriangleleft, blacktriangleright, blank, blk12, blk14, blk34, block, bne, bnequiv, bNot, bnot, Bopf, bopf, bot, bottom, bowtie, boxbox, boxdl, boxdL, boxDl, boxDL, boxdr, boxdR, boxDr, boxDR, boxh, boxH, boxhd, boxHd, boxhD, boxHD, boxhu, boxHu, boxhU, boxHU, boxminus, boxplus, boxtimes, boxul, boxuL, boxUl, boxUL, boxur, boxuR, boxUr, boxUR, boxv, boxV, boxvh, boxvH, boxVh, boxVH, boxvl, boxvL, boxVl, boxVL, boxvr, boxvR, boxVr, boxVR, bprime, breve, Breve, brvbar, bscr, Bscr, bsemi, bsim, bsime, bsolb, bsol, bsolhsub, bull, bullet, bump, bumpE, bumpe, Bumpeq, bumpeq, Cacute, cacute, capand, capbrcup, capcap, cap, Cap, capcup, capdot, CapitalDifferentialD, caps, caret, caron, Cayleys, ccaps, Ccaron, ccaron, Ccedil, ccedil, Ccirc, ccirc, Cconint, ccups, ccupssm, Cdot, cdot, cedil, Cedilla, cemptyv, cent, centerdot, CenterDot, cfr, Cfr, CHcy, chcy, check, checkmark, Chi, chi, circ, circeq, circlearrowleft, circlearrowright, circledast, circledcirc, circleddash, CircleDot, circledR, circledS, CircleMinus, CirclePlus, CircleTimes, cir, cirE, cire, cirfnint, cirmid, cirscir, ClockwiseContourIntegral, CloseCurlyDoubleQuote, CloseCurlyQuote, clubs, clubsuit, colon, Colon, Colone, colone, coloneq, comma, commat, comp, compfn, complement, complexes, cong, congdot, Congruent, conint, Conint, ContourIntegral, copf, Copf, coprod, Coproduct, copy, COPY, copysr, CounterClockwiseContourIntegral, crarr, cross, Cross, Cscr, cscr, csub, csube, csup, csupe, ctdot, cudarrl, cudarrr, cuepr, cuesc, cularr, cularrp, cupbrcap, cupcap, CupCap, cup, Cup, cupcup, cupdot, cupor, cups, curarr, curarrm, curlyeqprec, curlyeqsucc, curlyvee, curlywedge, curren, curvearrowleft, curvearrowright, cuvee, cuwed, cwconint, cwint, cylcty, dagger, Dagger, daleth, darr, Darr, dArr, dash, Dashv, dashv, dbkarow, dblac, Dcaron, dcaron, Dcy, dcy, ddagger, ddarr, DD, dd, DDotrahd, ddotseq, deg, Del, Delta, delta, demptyv, dfisht, Dfr, dfr, dHar, dharl, dharr, DiacriticalAcute, DiacriticalDot, DiacriticalDoubleAcute, DiacriticalGrave, DiacriticalTilde, diam, diamond, Diamond, diamondsuit, diams, die, DifferentialD, digamma, disin, div, divide, divideontimes, divonx, DJcy, djcy, dlcorn, dlcrop, dollar, Dopf, dopf, Dot, dot, DotDot, doteq, doteqdot, DotEqual, dotminus, dotplus, dotsquare, doublebarwedge, DoubleContourIntegral, DoubleDot, DoubleDownArrow, DoubleLeftArrow, DoubleLeftRightArrow, DoubleLeftTee, DoubleLongLeftArrow, DoubleLongLeftRightArrow, DoubleLongRightArrow, DoubleRightArrow, DoubleRightTee, DoubleUpArrow, DoubleUpDownArrow, DoubleVerticalBar, DownArrowBar, downarrow, DownArrow, Downarrow, DownArrowUpArrow, DownBreve, downdownarrows, downharpoonleft, downharpoonright, DownLeftRightVector, DownLeftTeeVector, DownLeftVectorBar, DownLeftVector, DownRightTeeVector, DownRightVectorBar, DownRightVector, DownTeeArrow, DownTee, drbkarow, drcorn, drcrop, Dscr, dscr, DScy, dscy, dsol, Dstrok, dstrok, dtdot, dtri, dtrif, duarr, duhar, dwangle, DZcy, dzcy, dzigrarr, Eacute, eacute, easter, Ecaron, ecaron, Ecirc, ecirc, ecir, ecolon, Ecy, ecy, eDDot, Edot, edot, eDot, ee, efDot, Efr, efr, eg, Egrave, egrave, egs, egsdot, el, Element, elinters, ell, els, elsdot, Emacr, emacr, empty, emptyset, EmptySmallSquare, emptyv, EmptyVerySmallSquare, emsp13, emsp14, emsp, ENG, eng, ensp, Eogon, eogon, Eopf, eopf, epar, eparsl, eplus, epsi, Epsilon, epsilon, epsiv, eqcirc, eqcolon, eqsim, eqslantgtr, eqslantless, Equal, equals, EqualTilde, equest, Equilibrium, equiv, equivDD, eqvparsl, erarr, erDot, escr, Escr, esdot, Esim, esim, Eta, eta, ETH, eth, Euml, euml, euro, excl, exist, Exists, expectation, exponentiale, ExponentialE, fallingdotseq, Fcy, fcy, female, ffilig, fflig, ffllig, Ffr, ffr, filig, FilledSmallSquare, FilledVerySmallSquare, fjlig, flat, fllig, fltns, fnof, Fopf, fopf, forall, ForAll, fork, forkv, Fouriertrf, fpartint, frac12, frac13, frac14, frac15, frac16, frac18, frac23, frac25, frac34, frac35, frac38, frac45, frac56, frac58, frac78, frasl, frown, fscr, Fscr, gacute, Gamma, gamma, Gammad, gammad, gap, Gbreve, gbreve, Gcedil, Gcirc, gcirc, Gcy, gcy, Gdot, gdot, ge, gE, gEl, gel, geq, geqq, geqslant, gescc, ges, gesdot, gesdoto, gesdotol, gesl, gesles, Gfr, gfr, gg, Gg, ggg, gimel, GJcy, gjcy, gla, gl, glE, glj, gnap, gnapprox, gne, gnE, gneq, gneqq, gnsim, Gopf, gopf, grave, GreaterEqual, GreaterEqualLess, GreaterFullEqual, GreaterGreater, GreaterLess, GreaterSlantEqual, GreaterTilde, Gscr, gscr, gsim, gsime, gsiml, gtcc, gtcir, gt, GT, Gt, gtdot, gtlPar, gtquest, gtrapprox, gtrarr, gtrdot, gtreqless, gtreqqless, gtrless, gtrsim, gvertneqq, gvnE, Hacek, hairsp, half, hamilt, HARDcy, hardcy, harrcir, harr, hArr, harrw, Hat, hbar, Hcirc, hcirc, hearts, heartsuit, hellip, hercon, hfr, Hfr, HilbertSpace, hksearow, hkswarow, hoarr, homtht, hookleftarrow, hookrightarrow, hopf, Hopf, horbar, HorizontalLine, hscr, Hscr, hslash, Hstrok, hstrok, HumpDownHump, HumpEqual, hybull, hyphen, Iacute, iacute, ic, Icirc, icirc, Icy, icy, Idot, IEcy, iecy, iexcl, iff, ifr, Ifr, Igrave, igrave, ii, iiiint, iiint, iinfin, iiota, IJlig, ijlig, Imacr, imacr, image, ImaginaryI, imagline, imagpart, imath, Im, imof, imped, Implies, incare, in, infin, infintie, inodot, intcal, int, Int, integers, Integral, intercal, Intersection, intlarhk, intprod, InvisibleComma, InvisibleTimes, IOcy, iocy, Iogon, iogon, Iopf, iopf, Iota, iota, iprod, iquest, iscr, Iscr, isin, isindot, isinE, isins, isinsv, isinv, it, Itilde, itilde, Iukcy, iukcy, Iuml, iuml, Jcirc, jcirc, Jcy, jcy, Jfr, jfr, jmath, Jopf, jopf, Jscr, jscr, Jsercy, jsercy, Jukcy, jukcy, Kappa, kappa, kappav, Kcedil, kcedil, Kcy, kcy, Kfr, kfr, kgreen, KHcy, khcy, KJcy, kjcy, Kopf, kopf, Kscr, kscr, lAarr, Lacute, lacute, laemptyv, lagran, Lambda, lambda, lang, Lang, langd, langle, lap, Laplacetrf, laquo, larrb, larrbfs, larr, Larr, lArr, larrfs, larrhk, larrlp, larrpl, larrsim, larrtl, latail, lAtail, lat, late, lates, lbarr, lBarr, lbbrk, lbrace, lbrack, lbrke, lbrksld, lbrkslu, Lcaron, lcaron, Lcedil, lcedil, lceil, lcub, Lcy, lcy, ldca, ldquo, ldquor, ldrdhar, ldrushar, ldsh, le, lE, LeftAngleBracket, LeftArrowBar, leftarrow, LeftArrow, Leftarrow, LeftArrowRightArrow, leftarrowtail, LeftCeiling, LeftDoubleBracket, LeftDownTeeVector, LeftDownVectorBar, LeftDownVector, LeftFloor, leftharpoondown, leftharpoonup, leftleftarrows, leftrightarrow, LeftRightArrow, Leftrightarrow, leftrightarrows, leftrightharpoons, leftrightsquigarrow, LeftRightVector, LeftTeeArrow, LeftTee, LeftTeeVector, leftthreetimes, LeftTriangleBar, LeftTriangle, LeftTriangleEqual, LeftUpDownVector, LeftUpTeeVector, LeftUpVectorBar, LeftUpVector, LeftVectorBar, LeftVector, lEg, leg, leq, leqq, leqslant, lescc, les, lesdot, lesdoto, lesdotor, lesg, lesges, lessapprox, lessdot, lesseqgtr, lesseqqgtr, LessEqualGreater, LessFullEqual, LessGreater, lessgtr, LessLess, lesssim, LessSlantEqual, LessTilde, lfisht, lfloor, Lfr, lfr, lg, lgE, lHar, lhard, lharu, lharul, lhblk, LJcy, ljcy, llarr, ll, Ll, llcorner, Lleftarrow, llhard, lltri, Lmidot, lmidot, lmoustache, lmoust, lnap, lnapprox, lne, lnE, lneq, lneqq, lnsim, loang, loarr, lobrk, longleftarrow, LongLeftArrow, Longleftarrow, longleftrightarrow, LongLeftRightArrow, Longleftrightarrow, longmapsto, longrightarrow, LongRightArrow, Longrightarrow, looparrowleft, looparrowright, lopar, Lopf, lopf, loplus, lotimes, lowast, lowbar, LowerLeftArrow, LowerRightArrow, loz, lozenge, lozf, lpar, lparlt, lrarr, lrcorner, lrhar, lrhard, lrm, lrtri, lsaquo, lscr, Lscr, lsh, Lsh, lsim, lsime, lsimg, lsqb, lsquo, lsquor, Lstrok, lstrok, ltcc, ltcir, lt, LT, Lt, ltdot, lthree, ltimes, ltlarr, ltquest, ltri, ltrie, ltrif, ltrPar, lurdshar, luruhar, lvertneqq, lvnE, macr, male, malt, maltese, Map, map, mapsto, mapstodown, mapstoleft, mapstoup, marker, mcomma, Mcy, mcy, mdash, mDDot, measuredangle, MediumSpace, Mellintrf, Mfr, mfr, mho, micro, midast, midcir, mid, middot, minusb, minus, minusd, minusdu, MinusPlus, mlcp, mldr, mnplus, models, Mopf, mopf, mp, mscr, Mscr, mstpos, Mu, mu, multimap, mumap, nabla, Nacute, nacute, nang, nap, napE, napid, napos, napprox, natural, naturals, natur, nbsp, nbump, nbumpe, ncap, Ncaron, ncaron, Ncedil, ncedil, ncong, ncongdot, ncup, Ncy, ncy, ndash, nearhk, nearr, neArr, nearrow, ne, nedot, NegativeMediumSpace, NegativeThickSpace, NegativeThinSpace, NegativeVeryThinSpace, nequiv, nesear, nesim, NestedGreaterGreater, NestedLessLess, NewLine, nexist, nexists, Nfr, nfr, ngE, nge, ngeq, ngeqq, ngeqslant, nges, nGg, ngsim, nGt, ngt, ngtr, nGtv, nharr, nhArr, nhpar, ni, nis, nisd, niv, NJcy, njcy, nlarr, nlArr, nldr, nlE, nle, nleftarrow, nLeftarrow, nleftrightarrow, nLeftrightarrow, nleq, nleqq, nleqslant, nles, nless, nLl, nlsim, nLt, nlt, nltri, nltrie, nLtv, nmid, NoBreak, NonBreakingSpace, nopf, Nopf, Not, not, NotCongruent, NotCupCap, NotDoubleVerticalBar, NotElement, NotEqual, NotEqualTilde, NotExists, NotGreater, NotGreaterEqual, NotGreaterFullEqual, NotGreaterGreater, NotGreaterLess, NotGreaterSlantEqual, NotGreaterTilde, NotHumpDownHump, NotHumpEqual, notin, notindot, notinE, notinva, notinvb, notinvc, NotLeftTriangleBar, NotLeftTriangle, NotLeftTriangleEqual, NotLess, NotLessEqual, NotLessGreater, NotLessLess, NotLessSlantEqual, NotLessTilde, NotNestedGreaterGreater, NotNestedLessLess, notni, notniva, notnivb, notnivc, NotPrecedes, NotPrecedesEqual, NotPrecedesSlantEqual, NotReverseElement, NotRightTriangleBar, NotRightTriangle, NotRightTriangleEqual, NotSquareSubset, NotSquareSubsetEqual, NotSquareSuperset, NotSquareSupersetEqual, NotSubset, NotSubsetEqual, NotSucceeds, NotSucceedsEqual, NotSucceedsSlantEqual, NotSucceedsTilde, NotSuperset, NotSupersetEqual, NotTilde, NotTildeEqual, NotTildeFullEqual, NotTildeTilde, NotVerticalBar, nparallel, npar, nparsl, npart, npolint, npr, nprcue, nprec, npreceq, npre, nrarrc, nrarr, nrArr, nrarrw, nrightarrow, nRightarrow, nrtri, nrtrie, nsc, nsccue, nsce, Nscr, nscr, nshortmid, nshortparallel, nsim, nsime, nsimeq, nsmid, nspar, nsqsube, nsqsupe, nsub, nsubE, nsube, nsubset, nsubseteq, nsubseteqq, nsucc, nsucceq, nsup, nsupE, nsupe, nsupset, nsupseteq, nsupseteqq, ntgl, Ntilde, ntilde, ntlg, ntriangleleft, ntrianglelefteq, ntriangleright, ntrianglerighteq, Nu, nu, num, numero, numsp, nvap, nvdash, nvDash, nVdash, nVDash, nvge, nvgt, nvHarr, nvinfin, nvlArr, nvle, nvlt, nvltrie, nvrArr, nvrtrie, nvsim, nwarhk, nwarr, nwArr, nwarrow, nwnear, Oacute, oacute, oast, Ocirc, ocirc, ocir, Ocy, ocy, odash, Odblac, odblac, odiv, odot, odsold, OElig, oelig, ofcir, Ofr, ofr, ogon, Ograve, ograve, ogt, ohbar, ohm, oint, olarr, olcir, olcross, oline, olt, Omacr, omacr, Omega, omega, Omicron, omicron, omid, ominus, Oopf, oopf, opar, OpenCurlyDoubleQuote, OpenCurlyQuote, operp, oplus, orarr, Or, or, ord, order, orderof, ordf, ordm, origof, oror, orslope, orv, oS, Oscr, oscr, Oslash, oslash, osol, Otilde, otilde, otimesas, Otimes, otimes, Ouml, ouml, ovbar, OverBar, OverBrace, OverBracket, OverParenthesis, para, parallel, par, parsim, parsl, part, PartialD, Pcy, pcy, percnt, period, permil, perp, pertenk, Pfr, pfr, Phi, phi, phiv, phmmat, phone, Pi, pi, pitchfork, piv, planck, planckh, plankv, plusacir, plusb, pluscir, plus, plusdo, plusdu, pluse, PlusMinus, plusmn, plussim, plustwo, pm, Poincareplane, pointint, popf, Popf, pound, prap, Pr, pr, prcue, precapprox, prec, preccurlyeq, Precedes, PrecedesEqual, PrecedesSlantEqual, PrecedesTilde, preceq, precnapprox, precneqq, precnsim, pre, prE, precsim, prime, Prime, primes, prnap, prnE, prnsim, prod, Product, profalar, profline, profsurf, prop, Proportional, Proportion, propto, prsim, prurel, Pscr, pscr, Psi, psi, puncsp, Qfr, qfr, qint, qopf, Qopf, qprime, Qscr, qscr, quaternions, quatint, quest, questeq, quot, QUOT, rAarr, race, Racute, racute, radic, raemptyv, rang, Rang, rangd, range, rangle, raquo, rarrap, rarrb, rarrbfs, rarrc, rarr, Rarr, rArr, rarrfs, rarrhk, rarrlp, rarrpl, rarrsim, Rarrtl, rarrtl, rarrw, ratail, rAtail, ratio, rationals, rbarr, rBarr, RBarr, rbbrk, rbrace, rbrack, rbrke, rbrksld, rbrkslu, Rcaron, rcaron, Rcedil, rcedil, rceil, rcub, Rcy, rcy, rdca, rdldhar, rdquo, rdquor, rdsh, real, realine, realpart, reals, Re, rect, reg, REG, ReverseElement, ReverseEquilibrium, ReverseUpEquilibrium, rfisht, rfloor, rfr, Rfr, rHar, rhard, rharu, rharul, Rho, rho, rhov, RightAngleBracket, RightArrowBar, rightarrow, RightArrow, Rightarrow, RightArrowLeftArrow, rightarrowtail, RightCeiling, RightDoubleBracket, RightDownTeeVector, RightDownVectorBar, RightDownVector, RightFloor, rightharpoondown, rightharpoonup, rightleftarrows, rightleftharpoons, rightrightarrows, rightsquigarrow, RightTeeArrow, RightTee, RightTeeVector, rightthreetimes, RightTriangleBar, RightTriangle, RightTriangleEqual, RightUpDownVector, RightUpTeeVector, RightUpVectorBar, RightUpVector, RightVectorBar, RightVector, ring, risingdotseq, rlarr, rlhar, rlm, rmoustache, rmoust, rnmid, roang, roarr, robrk, ropar, ropf, Ropf, roplus, rotimes, RoundImplies, rpar, rpargt, rppolint, rrarr, Rrightarrow, rsaquo, rscr, Rscr, rsh, Rsh, rsqb, rsquo, rsquor, rthree, rtimes, rtri, rtrie, rtrif, rtriltri, RuleDelayed, ruluhar, rx, Sacute, sacute, sbquo, scap, Scaron, scaron, Sc, sc, sccue, sce, scE, Scedil, scedil, Scirc, scirc, scnap, scnE, scnsim, scpolint, scsim, Scy, scy, sdotb, sdot, sdote, searhk, searr, seArr, searrow, sect, semi, seswar, setminus, setmn, sext, Sfr, sfr, sfrown, sharp, SHCHcy, shchcy, SHcy, shcy, ShortDownArrow, ShortLeftArrow, shortmid, shortparallel, ShortRightArrow, ShortUpArrow, shy, Sigma, sigma, sigmaf, sigmav, sim, simdot, sime, simeq, simg, simgE, siml, simlE, simne, simplus, simrarr, slarr, SmallCircle, smallsetminus, smashp, smeparsl, smid, smile, smt, smte, smtes, SOFTcy, softcy, solbar, solb, sol, Sopf, sopf, spades, spadesuit, spar, sqcap, sqcaps, sqcup, sqcups, Sqrt, sqsub, sqsube, sqsubset, sqsubseteq, sqsup, sqsupe, sqsupset, sqsupseteq, square, Square, SquareIntersection, SquareSubset, SquareSubsetEqual, SquareSuperset, SquareSupersetEqual, SquareUnion, squarf, squ, squf, srarr, Sscr, sscr, ssetmn, ssmile, sstarf, Star, star, starf, straightepsilon, straightphi, strns, sub, Sub, subdot, subE, sube, subedot, submult, subnE, subne, subplus, subrarr, subset, Subset, subseteq, subseteqq, SubsetEqual, subsetneq, subsetneqq, subsim, subsub, subsup, succapprox, succ, succcurlyeq, Succeeds, SucceedsEqual, SucceedsSlantEqual, SucceedsTilde, succeq, succnapprox, succneqq, succnsim, succsim, SuchThat, sum, Sum, sung, sup1, sup2, sup3, sup, Sup, supdot, supdsub, supE, supe, supedot, Superset, SupersetEqual, suphsol, suphsub, suplarr, supmult, supnE, supne, supplus, supset, Supset, supseteq, supseteqq, supsetneq, supsetneqq, supsim, supsub, supsup, swarhk, swarr, swArr, swarrow, swnwar, szlig, Tab, target, Tau, tau, tbrk, Tcaron, tcaron, Tcedil, tcedil, Tcy, tcy, tdot, telrec, Tfr, tfr, there4, therefore, Therefore, Theta, theta, thetasym, thetav, thickapprox, thicksim, ThickSpace, ThinSpace, thinsp, thkap, thksim, THORN, thorn, tilde, Tilde, TildeEqual, TildeFullEqual, TildeTilde, timesbar, timesb, times, timesd, tint, toea, topbot, topcir, top, Topf, topf, topfork, tosa, tprime, trade, TRADE, triangle, triangledown, triangleleft, trianglelefteq, triangleq, triangleright, trianglerighteq, tridot, trie, triminus, TripleDot, triplus, trisb, tritime, trpezium, Tscr, tscr, TScy, tscy, TSHcy, tshcy, Tstrok, tstrok, twixt, twoheadleftarrow, twoheadrightarrow, Uacute, uacute, uarr, Uarr, uArr, Uarrocir, Ubrcy, ubrcy, Ubreve, ubreve, Ucirc, ucirc, Ucy, ucy, udarr, Udblac, udblac, udhar, ufisht, Ufr, ufr, Ugrave, ugrave, uHar, uharl, uharr, uhblk, ulcorn, ulcorner, ulcrop, ultri, Umacr, umacr, uml, UnderBar, UnderBrace, UnderBracket, UnderParenthesis, Union, UnionPlus, Uogon, uogon, Uopf, uopf, UpArrowBar, uparrow, UpArrow, Uparrow, UpArrowDownArrow, updownarrow, UpDownArrow, Updownarrow, UpEquilibrium, upharpoonleft, upharpoonright, uplus, UpperLeftArrow, UpperRightArrow, upsi, Upsi, upsih, Upsilon, upsilon, UpTeeArrow, UpTee, upuparrows, urcorn, urcorner, urcrop, Uring, uring, urtri, Uscr, uscr, utdot, Utilde, utilde, utri, utrif, uuarr, Uuml, uuml, uwangle, vangrt, varepsilon, varkappa, varnothing, varphi, varpi, varpropto, varr, vArr, varrho, varsigma, varsubsetneq, varsubsetneqq, varsupsetneq, varsupsetneqq, vartheta, vartriangleleft, vartriangleright, vBar, Vbar, vBarv, Vcy, vcy, vdash, vDash, Vdash, VDash, Vdashl, veebar, vee, Vee, veeeq, vellip, verbar, Verbar, vert, Vert, VerticalBar, VerticalLine, VerticalSeparator, VerticalTilde, VeryThinSpace, Vfr, vfr, vltri, vnsub, vnsup, Vopf, vopf, vprop, vrtri, Vscr, vscr, vsubnE, vsubne, vsupnE, vsupne, Vvdash, vzigzag, Wcirc, wcirc, wedbar, wedge, Wedge, wedgeq, weierp, Wfr, wfr, Wopf, wopf, wp, wr, wreath, Wscr, wscr, xcap, xcirc, xcup, xdtri, Xfr, xfr, xharr, xhArr, Xi, xi, xlarr, xlArr, xmap, xnis, xodot, Xopf, xopf, xoplus, xotime, xrarr, xrArr, Xscr, xscr, xsqcup, xuplus, xutri, xvee, xwedge, Yacute, yacute, YAcy, yacy, Ycirc, ycirc, Ycy, ycy, yen, Yfr, yfr, YIcy, yicy, Yopf, yopf, Yscr, yscr, YUcy, yucy, yuml, Yuml, Zacute, zacute, Zcaron, zcaron, Zcy, zcy, Zdot, zdot, zeetrf, ZeroWidthSpace, Zeta, zeta, zfr, Zfr, ZHcy, zhcy, zigrarr, zopf, Zopf, Zscr, zscr, zwj, zwnj, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Aacute\":\"Á\",\"aacute\":\"á\",\"Abreve\":\"Ă\",\"abreve\":\"ă\",\"ac\":\"∾\",\"acd\":\"∿\",\"acE\":\"∾̳\",\"Acirc\":\"Â\",\"acirc\":\"â\",\"acute\":\"´\",\"Acy\":\"А\",\"acy\":\"а\",\"AElig\":\"Æ\",\"aelig\":\"æ\",\"af\":\"⁡\",\"Afr\":\"𝔄\",\"afr\":\"𝔞\",\"Agrave\":\"À\",\"agrave\":\"à\",\"alefsym\":\"ℵ\",\"aleph\":\"ℵ\",\"Alpha\":\"Α\",\"alpha\":\"α\",\"Amacr\":\"Ā\",\"amacr\":\"ā\",\"amalg\":\"⨿\",\"amp\":\"&\",\"AMP\":\"&\",\"andand\":\"⩕\",\"And\":\"⩓\",\"and\":\"∧\",\"andd\":\"⩜\",\"andslope\":\"⩘\",\"andv\":\"⩚\",\"ang\":\"∠\",\"ange\":\"⦤\",\"angle\":\"∠\",\"angmsdaa\":\"⦨\",\"angmsdab\":\"⦩\",\"angmsdac\":\"⦪\",\"angmsdad\":\"⦫\",\"angmsdae\":\"⦬\",\"angmsdaf\":\"⦭\",\"angmsdag\":\"⦮\",\"angmsdah\":\"⦯\",\"angmsd\":\"∡\",\"angrt\":\"∟\",\"angrtvb\":\"⊾\",\"angrtvbd\":\"⦝\",\"angsph\":\"∢\",\"angst\":\"Å\",\"angzarr\":\"⍼\",\"Aogon\":\"Ą\",\"aogon\":\"ą\",\"Aopf\":\"𝔸\",\"aopf\":\"𝕒\",\"apacir\":\"⩯\",\"ap\":\"≈\",\"apE\":\"⩰\",\"ape\":\"≊\",\"apid\":\"≋\",\"apos\":\"'\",\"ApplyFunction\":\"⁡\",\"approx\":\"≈\",\"approxeq\":\"≊\",\"Aring\":\"Å\",\"aring\":\"å\",\"Ascr\":\"𝒜\",\"ascr\":\"𝒶\",\"Assign\":\"≔\",\"ast\":\"*\",\"asymp\":\"≈\",\"asympeq\":\"≍\",\"Atilde\":\"Ã\",\"atilde\":\"ã\",\"Auml\":\"Ä\",\"auml\":\"ä\",\"awconint\":\"∳\",\"awint\":\"⨑\",\"backcong\":\"≌\",\"backepsilon\":\"϶\",\"backprime\":\"‵\",\"backsim\":\"∽\",\"backsimeq\":\"⋍\",\"Backslash\":\"∖\",\"Barv\":\"⫧\",\"barvee\":\"⊽\",\"barwed\":\"⌅\",\"Barwed\":\"⌆\",\"barwedge\":\"⌅\",\"bbrk\":\"⎵\",\"bbrktbrk\":\"⎶\",\"bcong\":\"≌\",\"Bcy\":\"Б\",\"bcy\":\"б\",\"bdquo\":\"„\",\"becaus\":\"∵\",\"because\":\"∵\",\"Because\":\"∵\",\"bemptyv\":\"⦰\",\"bepsi\":\"϶\",\"bernou\":\"ℬ\",\"Bernoullis\":\"ℬ\",\"Beta\":\"Β\",\"beta\":\"β\",\"beth\":\"ℶ\",\"between\":\"≬\",\"Bfr\":\"𝔅\",\"bfr\":\"𝔟\",\"bigcap\":\"⋂\",\"bigcirc\":\"◯\",\"bigcup\":\"⋃\",\"bigodot\":\"⨀\",\"bigoplus\":\"⨁\",\"bigotimes\":\"⨂\",\"bigsqcup\":\"⨆\",\"bigstar\":\"★\",\"bigtriangledown\":\"▽\",\"bigtriangleup\":\"△\",\"biguplus\":\"⨄\",\"bigvee\":\"⋁\",\"bigwedge\":\"⋀\",\"bkarow\":\"⤍\",\"blacklozenge\":\"⧫\",\"blacksquare\":\"▪\",\"blacktriangle\":\"▴\",\"blacktriangledown\":\"▾\",\"blacktriangleleft\":\"◂\",\"blacktriangleright\":\"▸\",\"blank\":\"␣\",\"blk12\":\"▒\",\"blk14\":\"░\",\"blk34\":\"▓\",\"block\":\"█\",\"bne\":\"=⃥\",\"bnequiv\":\"≡⃥\",\"bNot\":\"⫭\",\"bnot\":\"⌐\",\"Bopf\":\"𝔹\",\"bopf\":\"𝕓\",\"bot\":\"⊥\",\"bottom\":\"⊥\",\"bowtie\":\"⋈\",\"boxbox\":\"⧉\",\"boxdl\":\"┐\",\"boxdL\":\"╕\",\"boxDl\":\"╖\",\"boxDL\":\"╗\",\"boxdr\":\"┌\",\"boxdR\":\"╒\",\"boxDr\":\"╓\",\"boxDR\":\"╔\",\"boxh\":\"─\",\"boxH\":\"═\",\"boxhd\":\"┬\",\"boxHd\":\"╤\",\"boxhD\":\"╥\",\"boxHD\":\"╦\",\"boxhu\":\"┴\",\"boxHu\":\"╧\",\"boxhU\":\"╨\",\"boxHU\":\"╩\",\"boxminus\":\"⊟\",\"boxplus\":\"⊞\",\"boxtimes\":\"⊠\",\"boxul\":\"┘\",\"boxuL\":\"╛\",\"boxUl\":\"╜\",\"boxUL\":\"╝\",\"boxur\":\"└\",\"boxuR\":\"╘\",\"boxUr\":\"╙\",\"boxUR\":\"╚\",\"boxv\":\"│\",\"boxV\":\"║\",\"boxvh\":\"┼\",\"boxvH\":\"╪\",\"boxVh\":\"╫\",\"boxVH\":\"╬\",\"boxvl\":\"┤\",\"boxvL\":\"╡\",\"boxVl\":\"╢\",\"boxVL\":\"╣\",\"boxvr\":\"├\",\"boxvR\":\"╞\",\"boxVr\":\"╟\",\"boxVR\":\"╠\",\"bprime\":\"‵\",\"breve\":\"˘\",\"Breve\":\"˘\",\"brvbar\":\"¦\",\"bscr\":\"𝒷\",\"Bscr\":\"ℬ\",\"bsemi\":\"⁏\",\"bsim\":\"∽\",\"bsime\":\"⋍\",\"bsolb\":\"⧅\",\"bsol\":\"\\\\\",\"bsolhsub\":\"⟈\",\"bull\":\"•\",\"bullet\":\"•\",\"bump\":\"≎\",\"bumpE\":\"⪮\",\"bumpe\":\"≏\",\"Bumpeq\":\"≎\",\"bumpeq\":\"≏\",\"Cacute\":\"Ć\",\"cacute\":\"ć\",\"capand\":\"⩄\",\"capbrcup\":\"⩉\",\"capcap\":\"⩋\",\"cap\":\"∩\",\"Cap\":\"⋒\",\"capcup\":\"⩇\",\"capdot\":\"⩀\",\"CapitalDifferentialD\":\"ⅅ\",\"caps\":\"∩︀\",\"caret\":\"⁁\",\"caron\":\"ˇ\",\"Cayleys\":\"ℭ\",\"ccaps\":\"⩍\",\"Ccaron\":\"Č\",\"ccaron\":\"č\",\"Ccedil\":\"Ç\",\"ccedil\":\"ç\",\"Ccirc\":\"Ĉ\",\"ccirc\":\"ĉ\",\"Cconint\":\"∰\",\"ccups\":\"⩌\",\"ccupssm\":\"⩐\",\"Cdot\":\"Ċ\",\"cdot\":\"ċ\",\"cedil\":\"¸\",\"Cedilla\":\"¸\",\"cemptyv\":\"⦲\",\"cent\":\"¢\",\"centerdot\":\"·\",\"CenterDot\":\"·\",\"cfr\":\"𝔠\",\"Cfr\":\"ℭ\",\"CHcy\":\"Ч\",\"chcy\":\"ч\",\"check\":\"✓\",\"checkmark\":\"✓\",\"Chi\":\"Χ\",\"chi\":\"χ\",\"circ\":\"ˆ\",\"circeq\":\"≗\",\"circlearrowleft\":\"↺\",\"circlearrowright\":\"↻\",\"circledast\":\"⊛\",\"circledcirc\":\"⊚\",\"circleddash\":\"⊝\",\"CircleDot\":\"⊙\",\"circledR\":\"®\",\"circledS\":\"Ⓢ\",\"CircleMinus\":\"⊖\",\"CirclePlus\":\"⊕\",\"CircleTimes\":\"⊗\",\"cir\":\"○\",\"cirE\":\"⧃\",\"cire\":\"≗\",\"cirfnint\":\"⨐\",\"cirmid\":\"⫯\",\"cirscir\":\"⧂\",\"ClockwiseContourIntegral\":\"∲\",\"CloseCurlyDoubleQuote\":\"”\",\"CloseCurlyQuote\":\"’\",\"clubs\":\"♣\",\"clubsuit\":\"♣\",\"colon\":\":\",\"Colon\":\"∷\",\"Colone\":\"⩴\",\"colone\":\"≔\",\"coloneq\":\"≔\",\"comma\":\",\",\"commat\":\"@\",\"comp\":\"∁\",\"compfn\":\"∘\",\"complement\":\"∁\",\"complexes\":\"ℂ\",\"cong\":\"≅\",\"congdot\":\"⩭\",\"Congruent\":\"≡\",\"conint\":\"∮\",\"Conint\":\"∯\",\"ContourIntegral\":\"∮\",\"copf\":\"𝕔\",\"Copf\":\"ℂ\",\"coprod\":\"∐\",\"Coproduct\":\"∐\",\"copy\":\"©\",\"COPY\":\"©\",\"copysr\":\"℗\",\"CounterClockwiseContourIntegral\":\"∳\",\"crarr\":\"↵\",\"cross\":\"✗\",\"Cross\":\"⨯\",\"Cscr\":\"𝒞\",\"cscr\":\"𝒸\",\"csub\":\"⫏\",\"csube\":\"⫑\",\"csup\":\"⫐\",\"csupe\":\"⫒\",\"ctdot\":\"⋯\",\"cudarrl\":\"⤸\",\"cudarrr\":\"⤵\",\"cuepr\":\"⋞\",\"cuesc\":\"⋟\",\"cularr\":\"↶\",\"cularrp\":\"⤽\",\"cupbrcap\":\"⩈\",\"cupcap\":\"⩆\",\"CupCap\":\"≍\",\"cup\":\"∪\",\"Cup\":\"⋓\",\"cupcup\":\"⩊\",\"cupdot\":\"⊍\",\"cupor\":\"⩅\",\"cups\":\"∪︀\",\"curarr\":\"↷\",\"curarrm\":\"⤼\",\"curlyeqprec\":\"⋞\",\"curlyeqsucc\":\"⋟\",\"curlyvee\":\"⋎\",\"curlywedge\":\"⋏\",\"curren\":\"¤\",\"curvearrowleft\":\"↶\",\"curvearrowright\":\"↷\",\"cuvee\":\"⋎\",\"cuwed\":\"⋏\",\"cwconint\":\"∲\",\"cwint\":\"∱\",\"cylcty\":\"⌭\",\"dagger\":\"†\",\"Dagger\":\"‡\",\"daleth\":\"ℸ\",\"darr\":\"↓\",\"Darr\":\"↡\",\"dArr\":\"⇓\",\"dash\":\"‐\",\"Dashv\":\"⫤\",\"dashv\":\"⊣\",\"dbkarow\":\"⤏\",\"dblac\":\"˝\",\"Dcaron\":\"Ď\",\"dcaron\":\"ď\",\"Dcy\":\"Д\",\"dcy\":\"д\",\"ddagger\":\"‡\",\"ddarr\":\"⇊\",\"DD\":\"ⅅ\",\"dd\":\"ⅆ\",\"DDotrahd\":\"⤑\",\"ddotseq\":\"⩷\",\"deg\":\"°\",\"Del\":\"∇\",\"Delta\":\"Δ\",\"delta\":\"δ\",\"demptyv\":\"⦱\",\"dfisht\":\"⥿\",\"Dfr\":\"𝔇\",\"dfr\":\"𝔡\",\"dHar\":\"⥥\",\"dharl\":\"⇃\",\"dharr\":\"⇂\",\"DiacriticalAcute\":\"´\",\"DiacriticalDot\":\"˙\",\"DiacriticalDoubleAcute\":\"˝\",\"DiacriticalGrave\":\"`\",\"DiacriticalTilde\":\"˜\",\"diam\":\"⋄\",\"diamond\":\"⋄\",\"Diamond\":\"⋄\",\"diamondsuit\":\"♦\",\"diams\":\"♦\",\"die\":\"¨\",\"DifferentialD\":\"ⅆ\",\"digamma\":\"ϝ\",\"disin\":\"⋲\",\"div\":\"÷\",\"divide\":\"÷\",\"divideontimes\":\"⋇\",\"divonx\":\"⋇\",\"DJcy\":\"Ђ\",\"djcy\":\"ђ\",\"dlcorn\":\"⌞\",\"dlcrop\":\"⌍\",\"dollar\":\"$\",\"Dopf\":\"𝔻\",\"dopf\":\"𝕕\",\"Dot\":\"¨\",\"dot\":\"˙\",\"DotDot\":\"⃜\",\"doteq\":\"≐\",\"doteqdot\":\"≑\",\"DotEqual\":\"≐\",\"dotminus\":\"∸\",\"dotplus\":\"∔\",\"dotsquare\":\"⊡\",\"doublebarwedge\":\"⌆\",\"DoubleContourIntegral\":\"∯\",\"DoubleDot\":\"¨\",\"DoubleDownArrow\":\"⇓\",\"DoubleLeftArrow\":\"⇐\",\"DoubleLeftRightArrow\":\"⇔\",\"DoubleLeftTee\":\"⫤\",\"DoubleLongLeftArrow\":\"⟸\",\"DoubleLongLeftRightArrow\":\"⟺\",\"DoubleLongRightArrow\":\"⟹\",\"DoubleRightArrow\":\"⇒\",\"DoubleRightTee\":\"⊨\",\"DoubleUpArrow\":\"⇑\",\"DoubleUpDownArrow\":\"⇕\",\"DoubleVerticalBar\":\"∥\",\"DownArrowBar\":\"⤓\",\"downarrow\":\"↓\",\"DownArrow\":\"↓\",\"Downarrow\":\"⇓\",\"DownArrowUpArrow\":\"⇵\",\"DownBreve\":\"̑\",\"downdownarrows\":\"⇊\",\"downharpoonleft\":\"⇃\",\"downharpoonright\":\"⇂\",\"DownLeftRightVector\":\"⥐\",\"DownLeftTeeVector\":\"⥞\",\"DownLeftVectorBar\":\"⥖\",\"DownLeftVector\":\"↽\",\"DownRightTeeVector\":\"⥟\",\"DownRightVectorBar\":\"⥗\",\"DownRightVector\":\"⇁\",\"DownTeeArrow\":\"↧\",\"DownTee\":\"⊤\",\"drbkarow\":\"⤐\",\"drcorn\":\"⌟\",\"drcrop\":\"⌌\",\"Dscr\":\"𝒟\",\"dscr\":\"𝒹\",\"DScy\":\"Ѕ\",\"dscy\":\"ѕ\",\"dsol\":\"⧶\",\"Dstrok\":\"Đ\",\"dstrok\":\"đ\",\"dtdot\":\"⋱\",\"dtri\":\"▿\",\"dtrif\":\"▾\",\"duarr\":\"⇵\",\"duhar\":\"⥯\",\"dwangle\":\"⦦\",\"DZcy\":\"Џ\",\"dzcy\":\"џ\",\"dzigrarr\":\"⟿\",\"Eacute\":\"É\",\"eacute\":\"é\",\"easter\":\"⩮\",\"Ecaron\":\"Ě\",\"ecaron\":\"ě\",\"Ecirc\":\"Ê\",\"ecirc\":\"ê\",\"ecir\":\"≖\",\"ecolon\":\"≕\",\"Ecy\":\"Э\",\"ecy\":\"э\",\"eDDot\":\"⩷\",\"Edot\":\"Ė\",\"edot\":\"ė\",\"eDot\":\"≑\",\"ee\":\"ⅇ\",\"efDot\":\"≒\",\"Efr\":\"𝔈\",\"efr\":\"𝔢\",\"eg\":\"⪚\",\"Egrave\":\"È\",\"egrave\":\"è\",\"egs\":\"⪖\",\"egsdot\":\"⪘\",\"el\":\"⪙\",\"Element\":\"∈\",\"elinters\":\"⏧\",\"ell\":\"ℓ\",\"els\":\"⪕\",\"elsdot\":\"⪗\",\"Emacr\":\"Ē\",\"emacr\":\"ē\",\"empty\":\"∅\",\"emptyset\":\"∅\",\"EmptySmallSquare\":\"◻\",\"emptyv\":\"∅\",\"EmptyVerySmallSquare\":\"▫\",\"emsp13\":\" \",\"emsp14\":\" \",\"emsp\":\" \",\"ENG\":\"Ŋ\",\"eng\":\"ŋ\",\"ensp\":\" \",\"Eogon\":\"Ę\",\"eogon\":\"ę\",\"Eopf\":\"𝔼\",\"eopf\":\"𝕖\",\"epar\":\"⋕\",\"eparsl\":\"⧣\",\"eplus\":\"⩱\",\"epsi\":\"ε\",\"Epsilon\":\"Ε\",\"epsilon\":\"ε\",\"epsiv\":\"ϵ\",\"eqcirc\":\"≖\",\"eqcolon\":\"≕\",\"eqsim\":\"≂\",\"eqslantgtr\":\"⪖\",\"eqslantless\":\"⪕\",\"Equal\":\"⩵\",\"equals\":\"=\",\"EqualTilde\":\"≂\",\"equest\":\"≟\",\"Equilibrium\":\"⇌\",\"equiv\":\"≡\",\"equivDD\":\"⩸\",\"eqvparsl\":\"⧥\",\"erarr\":\"⥱\",\"erDot\":\"≓\",\"escr\":\"ℯ\",\"Escr\":\"ℰ\",\"esdot\":\"≐\",\"Esim\":\"⩳\",\"esim\":\"≂\",\"Eta\":\"Η\",\"eta\":\"η\",\"ETH\":\"Ð\",\"eth\":\"ð\",\"Euml\":\"Ë\",\"euml\":\"ë\",\"euro\":\"€\",\"excl\":\"!\",\"exist\":\"∃\",\"Exists\":\"∃\",\"expectation\":\"ℰ\",\"exponentiale\":\"ⅇ\",\"ExponentialE\":\"ⅇ\",\"fallingdotseq\":\"≒\",\"Fcy\":\"Ф\",\"fcy\":\"ф\",\"female\":\"♀\",\"ffilig\":\"ﬃ\",\"fflig\":\"ﬀ\",\"ffllig\":\"ﬄ\",\"Ffr\":\"𝔉\",\"ffr\":\"𝔣\",\"filig\":\"ﬁ\",\"FilledSmallSquare\":\"◼\",\"FilledVerySmallSquare\":\"▪\",\"fjlig\":\"fj\",\"flat\":\"♭\",\"fllig\":\"ﬂ\",\"fltns\":\"▱\",\"fnof\":\"ƒ\",\"Fopf\":\"𝔽\",\"fopf\":\"𝕗\",\"forall\":\"∀\",\"ForAll\":\"∀\",\"fork\":\"⋔\",\"forkv\":\"⫙\",\"Fouriertrf\":\"ℱ\",\"fpartint\":\"⨍\",\"frac12\":\"½\",\"frac13\":\"⅓\",\"frac14\":\"¼\",\"frac15\":\"⅕\",\"frac16\":\"⅙\",\"frac18\":\"⅛\",\"frac23\":\"⅔\",\"frac25\":\"⅖\",\"frac34\":\"¾\",\"frac35\":\"⅗\",\"frac38\":\"⅜\",\"frac45\":\"⅘\",\"frac56\":\"⅚\",\"frac58\":\"⅝\",\"frac78\":\"⅞\",\"frasl\":\"⁄\",\"frown\":\"⌢\",\"fscr\":\"𝒻\",\"Fscr\":\"ℱ\",\"gacute\":\"ǵ\",\"Gamma\":\"Γ\",\"gamma\":\"γ\",\"Gammad\":\"Ϝ\",\"gammad\":\"ϝ\",\"gap\":\"⪆\",\"Gbreve\":\"Ğ\",\"gbreve\":\"ğ\",\"Gcedil\":\"Ģ\",\"Gcirc\":\"Ĝ\",\"gcirc\":\"ĝ\",\"Gcy\":\"Г\",\"gcy\":\"г\",\"Gdot\":\"Ġ\",\"gdot\":\"ġ\",\"ge\":\"≥\",\"gE\":\"≧\",\"gEl\":\"⪌\",\"gel\":\"⋛\",\"geq\":\"≥\",\"geqq\":\"≧\",\"geqslant\":\"⩾\",\"gescc\":\"⪩\",\"ges\":\"⩾\",\"gesdot\":\"⪀\",\"gesdoto\":\"⪂\",\"gesdotol\":\"⪄\",\"gesl\":\"⋛︀\",\"gesles\":\"⪔\",\"Gfr\":\"𝔊\",\"gfr\":\"𝔤\",\"gg\":\"≫\",\"Gg\":\"⋙\",\"ggg\":\"⋙\",\"gimel\":\"ℷ\",\"GJcy\":\"Ѓ\",\"gjcy\":\"ѓ\",\"gla\":\"⪥\",\"gl\":\"≷\",\"glE\":\"⪒\",\"glj\":\"⪤\",\"gnap\":\"⪊\",\"gnapprox\":\"⪊\",\"gne\":\"⪈\",\"gnE\":\"≩\",\"gneq\":\"⪈\",\"gneqq\":\"≩\",\"gnsim\":\"⋧\",\"Gopf\":\"𝔾\",\"gopf\":\"𝕘\",\"grave\":\"`\",\"GreaterEqual\":\"≥\",\"GreaterEqualLess\":\"⋛\",\"GreaterFullEqual\":\"≧\",\"GreaterGreater\":\"⪢\",\"GreaterLess\":\"≷\",\"GreaterSlantEqual\":\"⩾\",\"GreaterTilde\":\"≳\",\"Gscr\":\"𝒢\",\"gscr\":\"ℊ\",\"gsim\":\"≳\",\"gsime\":\"⪎\",\"gsiml\":\"⪐\",\"gtcc\":\"⪧\",\"gtcir\":\"⩺\",\"gt\":\">\",\"GT\":\">\",\"Gt\":\"≫\",\"gtdot\":\"⋗\",\"gtlPar\":\"⦕\",\"gtquest\":\"⩼\",\"gtrapprox\":\"⪆\",\"gtrarr\":\"⥸\",\"gtrdot\":\"⋗\",\"gtreqless\":\"⋛\",\"gtreqqless\":\"⪌\",\"gtrless\":\"≷\",\"gtrsim\":\"≳\",\"gvertneqq\":\"≩︀\",\"gvnE\":\"≩︀\",\"Hacek\":\"ˇ\",\"hairsp\":\" \",\"half\":\"½\",\"hamilt\":\"ℋ\",\"HARDcy\":\"Ъ\",\"hardcy\":\"ъ\",\"harrcir\":\"⥈\",\"harr\":\"↔\",\"hArr\":\"⇔\",\"harrw\":\"↭\",\"Hat\":\"^\",\"hbar\":\"ℏ\",\"Hcirc\":\"Ĥ\",\"hcirc\":\"ĥ\",\"hearts\":\"♥\",\"heartsuit\":\"♥\",\"hellip\":\"…\",\"hercon\":\"⊹\",\"hfr\":\"𝔥\",\"Hfr\":\"ℌ\",\"HilbertSpace\":\"ℋ\",\"hksearow\":\"⤥\",\"hkswarow\":\"⤦\",\"hoarr\":\"⇿\",\"homtht\":\"∻\",\"hookleftarrow\":\"↩\",\"hookrightarrow\":\"↪\",\"hopf\":\"𝕙\",\"Hopf\":\"ℍ\",\"horbar\":\"―\",\"HorizontalLine\":\"─\",\"hscr\":\"𝒽\",\"Hscr\":\"ℋ\",\"hslash\":\"ℏ\",\"Hstrok\":\"Ħ\",\"hstrok\":\"ħ\",\"HumpDownHump\":\"≎\",\"HumpEqual\":\"≏\",\"hybull\":\"⁃\",\"hyphen\":\"‐\",\"Iacute\":\"Í\",\"iacute\":\"í\",\"ic\":\"⁣\",\"Icirc\":\"Î\",\"icirc\":\"î\",\"Icy\":\"И\",\"icy\":\"и\",\"Idot\":\"İ\",\"IEcy\":\"Е\",\"iecy\":\"е\",\"iexcl\":\"¡\",\"iff\":\"⇔\",\"ifr\":\"𝔦\",\"Ifr\":\"ℑ\",\"Igrave\":\"Ì\",\"igrave\":\"ì\",\"ii\":\"ⅈ\",\"iiiint\":\"⨌\",\"iiint\":\"∭\",\"iinfin\":\"⧜\",\"iiota\":\"℩\",\"IJlig\":\"Ĳ\",\"ijlig\":\"ĳ\",\"Imacr\":\"Ī\",\"imacr\":\"ī\",\"image\":\"ℑ\",\"ImaginaryI\":\"ⅈ\",\"imagline\":\"ℐ\",\"imagpart\":\"ℑ\",\"imath\":\"ı\",\"Im\":\"ℑ\",\"imof\":\"⊷\",\"imped\":\"Ƶ\",\"Implies\":\"⇒\",\"incare\":\"℅\",\"in\":\"∈\",\"infin\":\"∞\",\"infintie\":\"⧝\",\"inodot\":\"ı\",\"intcal\":\"⊺\",\"int\":\"∫\",\"Int\":\"∬\",\"integers\":\"ℤ\",\"Integral\":\"∫\",\"intercal\":\"⊺\",\"Intersection\":\"⋂\",\"intlarhk\":\"⨗\",\"intprod\":\"⨼\",\"InvisibleComma\":\"⁣\",\"InvisibleTimes\":\"⁢\",\"IOcy\":\"Ё\",\"iocy\":\"ё\",\"Iogon\":\"Į\",\"iogon\":\"į\",\"Iopf\":\"𝕀\",\"iopf\":\"𝕚\",\"Iota\":\"Ι\",\"iota\":\"ι\",\"iprod\":\"⨼\",\"iquest\":\"¿\",\"iscr\":\"𝒾\",\"Iscr\":\"ℐ\",\"isin\":\"∈\",\"isindot\":\"⋵\",\"isinE\":\"⋹\",\"isins\":\"⋴\",\"isinsv\":\"⋳\",\"isinv\":\"∈\",\"it\":\"⁢\",\"Itilde\":\"Ĩ\",\"itilde\":\"ĩ\",\"Iukcy\":\"І\",\"iukcy\":\"і\",\"Iuml\":\"Ï\",\"iuml\":\"ï\",\"Jcirc\":\"Ĵ\",\"jcirc\":\"ĵ\",\"Jcy\":\"Й\",\"jcy\":\"й\",\"Jfr\":\"𝔍\",\"jfr\":\"𝔧\",\"jmath\":\"ȷ\",\"Jopf\":\"𝕁\",\"jopf\":\"𝕛\",\"Jscr\":\"𝒥\",\"jscr\":\"𝒿\",\"Jsercy\":\"Ј\",\"jsercy\":\"ј\",\"Jukcy\":\"Є\",\"jukcy\":\"є\",\"Kappa\":\"Κ\",\"kappa\":\"κ\",\"kappav\":\"ϰ\",\"Kcedil\":\"Ķ\",\"kcedil\":\"ķ\",\"Kcy\":\"К\",\"kcy\":\"к\",\"Kfr\":\"𝔎\",\"kfr\":\"𝔨\",\"kgreen\":\"ĸ\",\"KHcy\":\"Х\",\"khcy\":\"х\",\"KJcy\":\"Ќ\",\"kjcy\":\"ќ\",\"Kopf\":\"𝕂\",\"kopf\":\"𝕜\",\"Kscr\":\"𝒦\",\"kscr\":\"𝓀\",\"lAarr\":\"⇚\",\"Lacute\":\"Ĺ\",\"lacute\":\"ĺ\",\"laemptyv\":\"⦴\",\"lagran\":\"ℒ\",\"Lambda\":\"Λ\",\"lambda\":\"λ\",\"lang\":\"⟨\",\"Lang\":\"⟪\",\"langd\":\"⦑\",\"langle\":\"⟨\",\"lap\":\"⪅\",\"Laplacetrf\":\"ℒ\",\"laquo\":\"«\",\"larrb\":\"⇤\",\"larrbfs\":\"⤟\",\"larr\":\"←\",\"Larr\":\"↞\",\"lArr\":\"⇐\",\"larrfs\":\"⤝\",\"larrhk\":\"↩\",\"larrlp\":\"↫\",\"larrpl\":\"⤹\",\"larrsim\":\"⥳\",\"larrtl\":\"↢\",\"latail\":\"⤙\",\"lAtail\":\"⤛\",\"lat\":\"⪫\",\"late\":\"⪭\",\"lates\":\"⪭︀\",\"lbarr\":\"⤌\",\"lBarr\":\"⤎\",\"lbbrk\":\"❲\",\"lbrace\":\"{\",\"lbrack\":\"[\",\"lbrke\":\"⦋\",\"lbrksld\":\"⦏\",\"lbrkslu\":\"⦍\",\"Lcaron\":\"Ľ\",\"lcaron\":\"ľ\",\"Lcedil\":\"Ļ\",\"lcedil\":\"ļ\",\"lceil\":\"⌈\",\"lcub\":\"{\",\"Lcy\":\"Л\",\"lcy\":\"л\",\"ldca\":\"⤶\",\"ldquo\":\"“\",\"ldquor\":\"„\",\"ldrdhar\":\"⥧\",\"ldrushar\":\"⥋\",\"ldsh\":\"↲\",\"le\":\"≤\",\"lE\":\"≦\",\"LeftAngleBracket\":\"⟨\",\"LeftArrowBar\":\"⇤\",\"leftarrow\":\"←\",\"LeftArrow\":\"←\",\"Leftarrow\":\"⇐\",\"LeftArrowRightArrow\":\"⇆\",\"leftarrowtail\":\"↢\",\"LeftCeiling\":\"⌈\",\"LeftDoubleBracket\":\"⟦\",\"LeftDownTeeVector\":\"⥡\",\"LeftDownVectorBar\":\"⥙\",\"LeftDownVector\":\"⇃\",\"LeftFloor\":\"⌊\",\"leftharpoondown\":\"↽\",\"leftharpoonup\":\"↼\",\"leftleftarrows\":\"⇇\",\"leftrightarrow\":\"↔\",\"LeftRightArrow\":\"↔\",\"Leftrightarrow\":\"⇔\",\"leftrightarrows\":\"⇆\",\"leftrightharpoons\":\"⇋\",\"leftrightsquigarrow\":\"↭\",\"LeftRightVector\":\"⥎\",\"LeftTeeArrow\":\"↤\",\"LeftTee\":\"⊣\",\"LeftTeeVector\":\"⥚\",\"leftthreetimes\":\"⋋\",\"LeftTriangleBar\":\"⧏\",\"LeftTriangle\":\"⊲\",\"LeftTriangleEqual\":\"⊴\",\"LeftUpDownVector\":\"⥑\",\"LeftUpTeeVector\":\"⥠\",\"LeftUpVectorBar\":\"⥘\",\"LeftUpVector\":\"↿\",\"LeftVectorBar\":\"⥒\",\"LeftVector\":\"↼\",\"lEg\":\"⪋\",\"leg\":\"⋚\",\"leq\":\"≤\",\"leqq\":\"≦\",\"leqslant\":\"⩽\",\"lescc\":\"⪨\",\"les\":\"⩽\",\"lesdot\":\"⩿\",\"lesdoto\":\"⪁\",\"lesdotor\":\"⪃\",\"lesg\":\"⋚︀\",\"lesges\":\"⪓\",\"lessapprox\":\"⪅\",\"lessdot\":\"⋖\",\"lesseqgtr\":\"⋚\",\"lesseqqgtr\":\"⪋\",\"LessEqualGreater\":\"⋚\",\"LessFullEqual\":\"≦\",\"LessGreater\":\"≶\",\"lessgtr\":\"≶\",\"LessLess\":\"⪡\",\"lesssim\":\"≲\",\"LessSlantEqual\":\"⩽\",\"LessTilde\":\"≲\",\"lfisht\":\"⥼\",\"lfloor\":\"⌊\",\"Lfr\":\"𝔏\",\"lfr\":\"𝔩\",\"lg\":\"≶\",\"lgE\":\"⪑\",\"lHar\":\"⥢\",\"lhard\":\"↽\",\"lharu\":\"↼\",\"lharul\":\"⥪\",\"lhblk\":\"▄\",\"LJcy\":\"Љ\",\"ljcy\":\"љ\",\"llarr\":\"⇇\",\"ll\":\"≪\",\"Ll\":\"⋘\",\"llcorner\":\"⌞\",\"Lleftarrow\":\"⇚\",\"llhard\":\"⥫\",\"lltri\":\"◺\",\"Lmidot\":\"Ŀ\",\"lmidot\":\"ŀ\",\"lmoustache\":\"⎰\",\"lmoust\":\"⎰\",\"lnap\":\"⪉\",\"lnapprox\":\"⪉\",\"lne\":\"⪇\",\"lnE\":\"≨\",\"lneq\":\"⪇\",\"lneqq\":\"≨\",\"lnsim\":\"⋦\",\"loang\":\"⟬\",\"loarr\":\"⇽\",\"lobrk\":\"⟦\",\"longleftarrow\":\"⟵\",\"LongLeftArrow\":\"⟵\",\"Longleftarrow\":\"⟸\",\"longleftrightarrow\":\"⟷\",\"LongLeftRightArrow\":\"⟷\",\"Longleftrightarrow\":\"⟺\",\"longmapsto\":\"⟼\",\"longrightarrow\":\"⟶\",\"LongRightArrow\":\"⟶\",\"Longrightarrow\":\"⟹\",\"looparrowleft\":\"↫\",\"looparrowright\":\"↬\",\"lopar\":\"⦅\",\"Lopf\":\"𝕃\",\"lopf\":\"𝕝\",\"loplus\":\"⨭\",\"lotimes\":\"⨴\",\"lowast\":\"∗\",\"lowbar\":\"_\",\"LowerLeftArrow\":\"↙\",\"LowerRightArrow\":\"↘\",\"loz\":\"◊\",\"lozenge\":\"◊\",\"lozf\":\"⧫\",\"lpar\":\"(\",\"lparlt\":\"⦓\",\"lrarr\":\"⇆\",\"lrcorner\":\"⌟\",\"lrhar\":\"⇋\",\"lrhard\":\"⥭\",\"lrm\":\"‎\",\"lrtri\":\"⊿\",\"lsaquo\":\"‹\",\"lscr\":\"𝓁\",\"Lscr\":\"ℒ\",\"lsh\":\"↰\",\"Lsh\":\"↰\",\"lsim\":\"≲\",\"lsime\":\"⪍\",\"lsimg\":\"⪏\",\"lsqb\":\"[\",\"lsquo\":\"‘\",\"lsquor\":\"‚\",\"Lstrok\":\"Ł\",\"lstrok\":\"ł\",\"ltcc\":\"⪦\",\"ltcir\":\"⩹\",\"lt\":\"<\",\"LT\":\"<\",\"Lt\":\"≪\",\"ltdot\":\"⋖\",\"lthree\":\"⋋\",\"ltimes\":\"⋉\",\"ltlarr\":\"⥶\",\"ltquest\":\"⩻\",\"ltri\":\"◃\",\"ltrie\":\"⊴\",\"ltrif\":\"◂\",\"ltrPar\":\"⦖\",\"lurdshar\":\"⥊\",\"luruhar\":\"⥦\",\"lvertneqq\":\"≨︀\",\"lvnE\":\"≨︀\",\"macr\":\"¯\",\"male\":\"♂\",\"malt\":\"✠\",\"maltese\":\"✠\",\"Map\":\"⤅\",\"map\":\"↦\",\"mapsto\":\"↦\",\"mapstodown\":\"↧\",\"mapstoleft\":\"↤\",\"mapstoup\":\"↥\",\"marker\":\"▮\",\"mcomma\":\"⨩\",\"Mcy\":\"М\",\"mcy\":\"м\",\"mdash\":\"—\",\"mDDot\":\"∺\",\"measuredangle\":\"∡\",\"MediumSpace\":\" \",\"Mellintrf\":\"ℳ\",\"Mfr\":\"𝔐\",\"mfr\":\"𝔪\",\"mho\":\"℧\",\"micro\":\"µ\",\"midast\":\"*\",\"midcir\":\"⫰\",\"mid\":\"∣\",\"middot\":\"·\",\"minusb\":\"⊟\",\"minus\":\"−\",\"minusd\":\"∸\",\"minusdu\":\"⨪\",\"MinusPlus\":\"∓\",\"mlcp\":\"⫛\",\"mldr\":\"…\",\"mnplus\":\"∓\",\"models\":\"⊧\",\"Mopf\":\"𝕄\",\"mopf\":\"𝕞\",\"mp\":\"∓\",\"mscr\":\"𝓂\",\"Mscr\":\"ℳ\",\"mstpos\":\"∾\",\"Mu\":\"Μ\",\"mu\":\"μ\",\"multimap\":\"⊸\",\"mumap\":\"⊸\",\"nabla\":\"∇\",\"Nacute\":\"Ń\",\"nacute\":\"ń\",\"nang\":\"∠⃒\",\"nap\":\"≉\",\"napE\":\"⩰̸\",\"napid\":\"≋̸\",\"napos\":\"ŉ\",\"napprox\":\"≉\",\"natural\":\"♮\",\"naturals\":\"ℕ\",\"natur\":\"♮\",\"nbsp\":\" \",\"nbump\":\"≎̸\",\"nbumpe\":\"≏̸\",\"ncap\":\"⩃\",\"Ncaron\":\"Ň\",\"ncaron\":\"ň\",\"Ncedil\":\"Ņ\",\"ncedil\":\"ņ\",\"ncong\":\"≇\",\"ncongdot\":\"⩭̸\",\"ncup\":\"⩂\",\"Ncy\":\"Н\",\"ncy\":\"н\",\"ndash\":\"–\",\"nearhk\":\"⤤\",\"nearr\":\"↗\",\"neArr\":\"⇗\",\"nearrow\":\"↗\",\"ne\":\"≠\",\"nedot\":\"≐̸\",\"NegativeMediumSpace\":\"​\",\"NegativeThickSpace\":\"​\",\"NegativeThinSpace\":\"​\",\"NegativeVeryThinSpace\":\"​\",\"nequiv\":\"≢\",\"nesear\":\"⤨\",\"nesim\":\"≂̸\",\"NestedGreaterGreater\":\"≫\",\"NestedLessLess\":\"≪\",\"NewLine\":\"\\n\",\"nexist\":\"∄\",\"nexists\":\"∄\",\"Nfr\":\"𝔑\",\"nfr\":\"𝔫\",\"ngE\":\"≧̸\",\"nge\":\"≱\",\"ngeq\":\"≱\",\"ngeqq\":\"≧̸\",\"ngeqslant\":\"⩾̸\",\"nges\":\"⩾̸\",\"nGg\":\"⋙̸\",\"ngsim\":\"≵\",\"nGt\":\"≫⃒\",\"ngt\":\"≯\",\"ngtr\":\"≯\",\"nGtv\":\"≫̸\",\"nharr\":\"↮\",\"nhArr\":\"⇎\",\"nhpar\":\"⫲\",\"ni\":\"∋\",\"nis\":\"⋼\",\"nisd\":\"⋺\",\"niv\":\"∋\",\"NJcy\":\"Њ\",\"njcy\":\"њ\",\"nlarr\":\"↚\",\"nlArr\":\"⇍\",\"nldr\":\"‥\",\"nlE\":\"≦̸\",\"nle\":\"≰\",\"nleftarrow\":\"↚\",\"nLeftarrow\":\"⇍\",\"nleftrightarrow\":\"↮\",\"nLeftrightarrow\":\"⇎\",\"nleq\":\"≰\",\"nleqq\":\"≦̸\",\"nleqslant\":\"⩽̸\",\"nles\":\"⩽̸\",\"nless\":\"≮\",\"nLl\":\"⋘̸\",\"nlsim\":\"≴\",\"nLt\":\"≪⃒\",\"nlt\":\"≮\",\"nltri\":\"⋪\",\"nltrie\":\"⋬\",\"nLtv\":\"≪̸\",\"nmid\":\"∤\",\"NoBreak\":\"⁠\",\"NonBreakingSpace\":\" \",\"nopf\":\"𝕟\",\"Nopf\":\"ℕ\",\"Not\":\"⫬\",\"not\":\"¬\",\"NotCongruent\":\"≢\",\"NotCupCap\":\"≭\",\"NotDoubleVerticalBar\":\"∦\",\"NotElement\":\"∉\",\"NotEqual\":\"≠\",\"NotEqualTilde\":\"≂̸\",\"NotExists\":\"∄\",\"NotGreater\":\"≯\",\"NotGreaterEqual\":\"≱\",\"NotGreaterFullEqual\":\"≧̸\",\"NotGreaterGreater\":\"≫̸\",\"NotGreaterLess\":\"≹\",\"NotGreaterSlantEqual\":\"⩾̸\",\"NotGreaterTilde\":\"≵\",\"NotHumpDownHump\":\"≎̸\",\"NotHumpEqual\":\"≏̸\",\"notin\":\"∉\",\"notindot\":\"⋵̸\",\"notinE\":\"⋹̸\",\"notinva\":\"∉\",\"notinvb\":\"⋷\",\"notinvc\":\"⋶\",\"NotLeftTriangleBar\":\"⧏̸\",\"NotLeftTriangle\":\"⋪\",\"NotLeftTriangleEqual\":\"⋬\",\"NotLess\":\"≮\",\"NotLessEqual\":\"≰\",\"NotLessGreater\":\"≸\",\"NotLessLess\":\"≪̸\",\"NotLessSlantEqual\":\"⩽̸\",\"NotLessTilde\":\"≴\",\"NotNestedGreaterGreater\":\"⪢̸\",\"NotNestedLessLess\":\"⪡̸\",\"notni\":\"∌\",\"notniva\":\"∌\",\"notnivb\":\"⋾\",\"notnivc\":\"⋽\",\"NotPrecedes\":\"⊀\",\"NotPrecedesEqual\":\"⪯̸\",\"NotPrecedesSlantEqual\":\"⋠\",\"NotReverseElement\":\"∌\",\"NotRightTriangleBar\":\"⧐̸\",\"NotRightTriangle\":\"⋫\",\"NotRightTriangleEqual\":\"⋭\",\"NotSquareSubset\":\"⊏̸\",\"NotSquareSubsetEqual\":\"⋢\",\"NotSquareSuperset\":\"⊐̸\",\"NotSquareSupersetEqual\":\"⋣\",\"NotSubset\":\"⊂⃒\",\"NotSubsetEqual\":\"⊈\",\"NotSucceeds\":\"⊁\",\"NotSucceedsEqual\":\"⪰̸\",\"NotSucceedsSlantEqual\":\"⋡\",\"NotSucceedsTilde\":\"≿̸\",\"NotSuperset\":\"⊃⃒\",\"NotSupersetEqual\":\"⊉\",\"NotTilde\":\"≁\",\"NotTildeEqual\":\"≄\",\"NotTildeFullEqual\":\"≇\",\"NotTildeTilde\":\"≉\",\"NotVerticalBar\":\"∤\",\"nparallel\":\"∦\",\"npar\":\"∦\",\"nparsl\":\"⫽⃥\",\"npart\":\"∂̸\",\"npolint\":\"⨔\",\"npr\":\"⊀\",\"nprcue\":\"⋠\",\"nprec\":\"⊀\",\"npreceq\":\"⪯̸\",\"npre\":\"⪯̸\",\"nrarrc\":\"⤳̸\",\"nrarr\":\"↛\",\"nrArr\":\"⇏\",\"nrarrw\":\"↝̸\",\"nrightarrow\":\"↛\",\"nRightarrow\":\"⇏\",\"nrtri\":\"⋫\",\"nrtrie\":\"⋭\",\"nsc\":\"⊁\",\"nsccue\":\"⋡\",\"nsce\":\"⪰̸\",\"Nscr\":\"𝒩\",\"nscr\":\"𝓃\",\"nshortmid\":\"∤\",\"nshortparallel\":\"∦\",\"nsim\":\"≁\",\"nsime\":\"≄\",\"nsimeq\":\"≄\",\"nsmid\":\"∤\",\"nspar\":\"∦\",\"nsqsube\":\"⋢\",\"nsqsupe\":\"⋣\",\"nsub\":\"⊄\",\"nsubE\":\"⫅̸\",\"nsube\":\"⊈\",\"nsubset\":\"⊂⃒\",\"nsubseteq\":\"⊈\",\"nsubseteqq\":\"⫅̸\",\"nsucc\":\"⊁\",\"nsucceq\":\"⪰̸\",\"nsup\":\"⊅\",\"nsupE\":\"⫆̸\",\"nsupe\":\"⊉\",\"nsupset\":\"⊃⃒\",\"nsupseteq\":\"⊉\",\"nsupseteqq\":\"⫆̸\",\"ntgl\":\"≹\",\"Ntilde\":\"Ñ\",\"ntilde\":\"ñ\",\"ntlg\":\"≸\",\"ntriangleleft\":\"⋪\",\"ntrianglelefteq\":\"⋬\",\"ntriangleright\":\"⋫\",\"ntrianglerighteq\":\"⋭\",\"Nu\":\"Ν\",\"nu\":\"ν\",\"num\":\"#\",\"numero\":\"№\",\"numsp\":\" \",\"nvap\":\"≍⃒\",\"nvdash\":\"⊬\",\"nvDash\":\"⊭\",\"nVdash\":\"⊮\",\"nVDash\":\"⊯\",\"nvge\":\"≥⃒\",\"nvgt\":\">⃒\",\"nvHarr\":\"⤄\",\"nvinfin\":\"⧞\",\"nvlArr\":\"⤂\",\"nvle\":\"≤⃒\",\"nvlt\":\"<⃒\",\"nvltrie\":\"⊴⃒\",\"nvrArr\":\"⤃\",\"nvrtrie\":\"⊵⃒\",\"nvsim\":\"∼⃒\",\"nwarhk\":\"⤣\",\"nwarr\":\"↖\",\"nwArr\":\"⇖\",\"nwarrow\":\"↖\",\"nwnear\":\"⤧\",\"Oacute\":\"Ó\",\"oacute\":\"ó\",\"oast\":\"⊛\",\"Ocirc\":\"Ô\",\"ocirc\":\"ô\",\"ocir\":\"⊚\",\"Ocy\":\"О\",\"ocy\":\"о\",\"odash\":\"⊝\",\"Odblac\":\"Ő\",\"odblac\":\"ő\",\"odiv\":\"⨸\",\"odot\":\"⊙\",\"odsold\":\"⦼\",\"OElig\":\"Œ\",\"oelig\":\"œ\",\"ofcir\":\"⦿\",\"Ofr\":\"𝔒\",\"ofr\":\"𝔬\",\"ogon\":\"˛\",\"Ograve\":\"Ò\",\"ograve\":\"ò\",\"ogt\":\"⧁\",\"ohbar\":\"⦵\",\"ohm\":\"Ω\",\"oint\":\"∮\",\"olarr\":\"↺\",\"olcir\":\"⦾\",\"olcross\":\"⦻\",\"oline\":\"‾\",\"olt\":\"⧀\",\"Omacr\":\"Ō\",\"omacr\":\"ō\",\"Omega\":\"Ω\",\"omega\":\"ω\",\"Omicron\":\"Ο\",\"omicron\":\"ο\",\"omid\":\"⦶\",\"ominus\":\"⊖\",\"Oopf\":\"𝕆\",\"oopf\":\"𝕠\",\"opar\":\"⦷\",\"OpenCurlyDoubleQuote\":\"“\",\"OpenCurlyQuote\":\"‘\",\"operp\":\"⦹\",\"oplus\":\"⊕\",\"orarr\":\"↻\",\"Or\":\"⩔\",\"or\":\"∨\",\"ord\":\"⩝\",\"order\":\"ℴ\",\"orderof\":\"ℴ\",\"ordf\":\"ª\",\"ordm\":\"º\",\"origof\":\"⊶\",\"oror\":\"⩖\",\"orslope\":\"⩗\",\"orv\":\"⩛\",\"oS\":\"Ⓢ\",\"Oscr\":\"𝒪\",\"oscr\":\"ℴ\",\"Oslash\":\"Ø\",\"oslash\":\"ø\",\"osol\":\"⊘\",\"Otilde\":\"Õ\",\"otilde\":\"õ\",\"otimesas\":\"⨶\",\"Otimes\":\"⨷\",\"otimes\":\"⊗\",\"Ouml\":\"Ö\",\"ouml\":\"ö\",\"ovbar\":\"⌽\",\"OverBar\":\"‾\",\"OverBrace\":\"⏞\",\"OverBracket\":\"⎴\",\"OverParenthesis\":\"⏜\",\"para\":\"¶\",\"parallel\":\"∥\",\"par\":\"∥\",\"parsim\":\"⫳\",\"parsl\":\"⫽\",\"part\":\"∂\",\"PartialD\":\"∂\",\"Pcy\":\"П\",\"pcy\":\"п\",\"percnt\":\"%\",\"period\":\".\",\"permil\":\"‰\",\"perp\":\"⊥\",\"pertenk\":\"‱\",\"Pfr\":\"𝔓\",\"pfr\":\"𝔭\",\"Phi\":\"Φ\",\"phi\":\"φ\",\"phiv\":\"ϕ\",\"phmmat\":\"ℳ\",\"phone\":\"☎\",\"Pi\":\"Π\",\"pi\":\"π\",\"pitchfork\":\"⋔\",\"piv\":\"ϖ\",\"planck\":\"ℏ\",\"planckh\":\"ℎ\",\"plankv\":\"ℏ\",\"plusacir\":\"⨣\",\"plusb\":\"⊞\",\"pluscir\":\"⨢\",\"plus\":\"+\",\"plusdo\":\"∔\",\"plusdu\":\"⨥\",\"pluse\":\"⩲\",\"PlusMinus\":\"±\",\"plusmn\":\"±\",\"plussim\":\"⨦\",\"plustwo\":\"⨧\",\"pm\":\"±\",\"Poincareplane\":\"ℌ\",\"pointint\":\"⨕\",\"popf\":\"𝕡\",\"Popf\":\"ℙ\",\"pound\":\"£\",\"prap\":\"⪷\",\"Pr\":\"⪻\",\"pr\":\"≺\",\"prcue\":\"≼\",\"precapprox\":\"⪷\",\"prec\":\"≺\",\"preccurlyeq\":\"≼\",\"Precedes\":\"≺\",\"PrecedesEqual\":\"⪯\",\"PrecedesSlantEqual\":\"≼\",\"PrecedesTilde\":\"≾\",\"preceq\":\"⪯\",\"precnapprox\":\"⪹\",\"precneqq\":\"⪵\",\"precnsim\":\"⋨\",\"pre\":\"⪯\",\"prE\":\"⪳\",\"precsim\":\"≾\",\"prime\":\"′\",\"Prime\":\"″\",\"primes\":\"ℙ\",\"prnap\":\"⪹\",\"prnE\":\"⪵\",\"prnsim\":\"⋨\",\"prod\":\"∏\",\"Product\":\"∏\",\"profalar\":\"⌮\",\"profline\":\"⌒\",\"profsurf\":\"⌓\",\"prop\":\"∝\",\"Proportional\":\"∝\",\"Proportion\":\"∷\",\"propto\":\"∝\",\"prsim\":\"≾\",\"prurel\":\"⊰\",\"Pscr\":\"𝒫\",\"pscr\":\"𝓅\",\"Psi\":\"Ψ\",\"psi\":\"ψ\",\"puncsp\":\" \",\"Qfr\":\"𝔔\",\"qfr\":\"𝔮\",\"qint\":\"⨌\",\"qopf\":\"𝕢\",\"Qopf\":\"ℚ\",\"qprime\":\"⁗\",\"Qscr\":\"𝒬\",\"qscr\":\"𝓆\",\"quaternions\":\"ℍ\",\"quatint\":\"⨖\",\"quest\":\"?\",\"questeq\":\"≟\",\"quot\":\"\\\"\",\"QUOT\":\"\\\"\",\"rAarr\":\"⇛\",\"race\":\"∽̱\",\"Racute\":\"Ŕ\",\"racute\":\"ŕ\",\"radic\":\"√\",\"raemptyv\":\"⦳\",\"rang\":\"⟩\",\"Rang\":\"⟫\",\"rangd\":\"⦒\",\"range\":\"⦥\",\"rangle\":\"⟩\",\"raquo\":\"»\",\"rarrap\":\"⥵\",\"rarrb\":\"⇥\",\"rarrbfs\":\"⤠\",\"rarrc\":\"⤳\",\"rarr\":\"→\",\"Rarr\":\"↠\",\"rArr\":\"⇒\",\"rarrfs\":\"⤞\",\"rarrhk\":\"↪\",\"rarrlp\":\"↬\",\"rarrpl\":\"⥅\",\"rarrsim\":\"⥴\",\"Rarrtl\":\"⤖\",\"rarrtl\":\"↣\",\"rarrw\":\"↝\",\"ratail\":\"⤚\",\"rAtail\":\"⤜\",\"ratio\":\"∶\",\"rationals\":\"ℚ\",\"rbarr\":\"⤍\",\"rBarr\":\"⤏\",\"RBarr\":\"⤐\",\"rbbrk\":\"❳\",\"rbrace\":\"}\",\"rbrack\":\"]\",\"rbrke\":\"⦌\",\"rbrksld\":\"⦎\",\"rbrkslu\":\"⦐\",\"Rcaron\":\"Ř\",\"rcaron\":\"ř\",\"Rcedil\":\"Ŗ\",\"rcedil\":\"ŗ\",\"rceil\":\"⌉\",\"rcub\":\"}\",\"Rcy\":\"Р\",\"rcy\":\"р\",\"rdca\":\"⤷\",\"rdldhar\":\"⥩\",\"rdquo\":\"”\",\"rdquor\":\"”\",\"rdsh\":\"↳\",\"real\":\"ℜ\",\"realine\":\"ℛ\",\"realpart\":\"ℜ\",\"reals\":\"ℝ\",\"Re\":\"ℜ\",\"rect\":\"▭\",\"reg\":\"®\",\"REG\":\"®\",\"ReverseElement\":\"∋\",\"ReverseEquilibrium\":\"⇋\",\"ReverseUpEquilibrium\":\"⥯\",\"rfisht\":\"⥽\",\"rfloor\":\"⌋\",\"rfr\":\"𝔯\",\"Rfr\":\"ℜ\",\"rHar\":\"⥤\",\"rhard\":\"⇁\",\"rharu\":\"⇀\",\"rharul\":\"⥬\",\"Rho\":\"Ρ\",\"rho\":\"ρ\",\"rhov\":\"ϱ\",\"RightAngleBracket\":\"⟩\",\"RightArrowBar\":\"⇥\",\"rightarrow\":\"→\",\"RightArrow\":\"→\",\"Rightarrow\":\"⇒\",\"RightArrowLeftArrow\":\"⇄\",\"rightarrowtail\":\"↣\",\"RightCeiling\":\"⌉\",\"RightDoubleBracket\":\"⟧\",\"RightDownTeeVector\":\"⥝\",\"RightDownVectorBar\":\"⥕\",\"RightDownVector\":\"⇂\",\"RightFloor\":\"⌋\",\"rightharpoondown\":\"⇁\",\"rightharpoonup\":\"⇀\",\"rightleftarrows\":\"⇄\",\"rightleftharpoons\":\"⇌\",\"rightrightarrows\":\"⇉\",\"rightsquigarrow\":\"↝\",\"RightTeeArrow\":\"↦\",\"RightTee\":\"⊢\",\"RightTeeVector\":\"⥛\",\"rightthreetimes\":\"⋌\",\"RightTriangleBar\":\"⧐\",\"RightTriangle\":\"⊳\",\"RightTriangleEqual\":\"⊵\",\"RightUpDownVector\":\"⥏\",\"RightUpTeeVector\":\"⥜\",\"RightUpVectorBar\":\"⥔\",\"RightUpVector\":\"↾\",\"RightVectorBar\":\"⥓\",\"RightVector\":\"⇀\",\"ring\":\"˚\",\"risingdotseq\":\"≓\",\"rlarr\":\"⇄\",\"rlhar\":\"⇌\",\"rlm\":\"‏\",\"rmoustache\":\"⎱\",\"rmoust\":\"⎱\",\"rnmid\":\"⫮\",\"roang\":\"⟭\",\"roarr\":\"⇾\",\"robrk\":\"⟧\",\"ropar\":\"⦆\",\"ropf\":\"𝕣\",\"Ropf\":\"ℝ\",\"roplus\":\"⨮\",\"rotimes\":\"⨵\",\"RoundImplies\":\"⥰\",\"rpar\":\")\",\"rpargt\":\"⦔\",\"rppolint\":\"⨒\",\"rrarr\":\"⇉\",\"Rrightarrow\":\"⇛\",\"rsaquo\":\"›\",\"rscr\":\"𝓇\",\"Rscr\":\"ℛ\",\"rsh\":\"↱\",\"Rsh\":\"↱\",\"rsqb\":\"]\",\"rsquo\":\"’\",\"rsquor\":\"’\",\"rthree\":\"⋌\",\"rtimes\":\"⋊\",\"rtri\":\"▹\",\"rtrie\":\"⊵\",\"rtrif\":\"▸\",\"rtriltri\":\"⧎\",\"RuleDelayed\":\"⧴\",\"ruluhar\":\"⥨\",\"rx\":\"℞\",\"Sacute\":\"Ś\",\"sacute\":\"ś\",\"sbquo\":\"‚\",\"scap\":\"⪸\",\"Scaron\":\"Š\",\"scaron\":\"š\",\"Sc\":\"⪼\",\"sc\":\"≻\",\"sccue\":\"≽\",\"sce\":\"⪰\",\"scE\":\"⪴\",\"Scedil\":\"Ş\",\"scedil\":\"ş\",\"Scirc\":\"Ŝ\",\"scirc\":\"ŝ\",\"scnap\":\"⪺\",\"scnE\":\"⪶\",\"scnsim\":\"⋩\",\"scpolint\":\"⨓\",\"scsim\":\"≿\",\"Scy\":\"С\",\"scy\":\"с\",\"sdotb\":\"⊡\",\"sdot\":\"⋅\",\"sdote\":\"⩦\",\"searhk\":\"⤥\",\"searr\":\"↘\",\"seArr\":\"⇘\",\"searrow\":\"↘\",\"sect\":\"§\",\"semi\":\";\",\"seswar\":\"⤩\",\"setminus\":\"∖\",\"setmn\":\"∖\",\"sext\":\"✶\",\"Sfr\":\"𝔖\",\"sfr\":\"𝔰\",\"sfrown\":\"⌢\",\"sharp\":\"♯\",\"SHCHcy\":\"Щ\",\"shchcy\":\"щ\",\"SHcy\":\"Ш\",\"shcy\":\"ш\",\"ShortDownArrow\":\"↓\",\"ShortLeftArrow\":\"←\",\"shortmid\":\"∣\",\"shortparallel\":\"∥\",\"ShortRightArrow\":\"→\",\"ShortUpArrow\":\"↑\",\"shy\":\"­\",\"Sigma\":\"Σ\",\"sigma\":\"σ\",\"sigmaf\":\"ς\",\"sigmav\":\"ς\",\"sim\":\"∼\",\"simdot\":\"⩪\",\"sime\":\"≃\",\"simeq\":\"≃\",\"simg\":\"⪞\",\"simgE\":\"⪠\",\"siml\":\"⪝\",\"simlE\":\"⪟\",\"simne\":\"≆\",\"simplus\":\"⨤\",\"simrarr\":\"⥲\",\"slarr\":\"←\",\"SmallCircle\":\"∘\",\"smallsetminus\":\"∖\",\"smashp\":\"⨳\",\"smeparsl\":\"⧤\",\"smid\":\"∣\",\"smile\":\"⌣\",\"smt\":\"⪪\",\"smte\":\"⪬\",\"smtes\":\"⪬︀\",\"SOFTcy\":\"Ь\",\"softcy\":\"ь\",\"solbar\":\"⌿\",\"solb\":\"⧄\",\"sol\":\"/\",\"Sopf\":\"𝕊\",\"sopf\":\"𝕤\",\"spades\":\"♠\",\"spadesuit\":\"♠\",\"spar\":\"∥\",\"sqcap\":\"⊓\",\"sqcaps\":\"⊓︀\",\"sqcup\":\"⊔\",\"sqcups\":\"⊔︀\",\"Sqrt\":\"√\",\"sqsub\":\"⊏\",\"sqsube\":\"⊑\",\"sqsubset\":\"⊏\",\"sqsubseteq\":\"⊑\",\"sqsup\":\"⊐\",\"sqsupe\":\"⊒\",\"sqsupset\":\"⊐\",\"sqsupseteq\":\"⊒\",\"square\":\"□\",\"Square\":\"□\",\"SquareIntersection\":\"⊓\",\"SquareSubset\":\"⊏\",\"SquareSubsetEqual\":\"⊑\",\"SquareSuperset\":\"⊐\",\"SquareSupersetEqual\":\"⊒\",\"SquareUnion\":\"⊔\",\"squarf\":\"▪\",\"squ\":\"□\",\"squf\":\"▪\",\"srarr\":\"→\",\"Sscr\":\"𝒮\",\"sscr\":\"𝓈\",\"ssetmn\":\"∖\",\"ssmile\":\"⌣\",\"sstarf\":\"⋆\",\"Star\":\"⋆\",\"star\":\"☆\",\"starf\":\"★\",\"straightepsilon\":\"ϵ\",\"straightphi\":\"ϕ\",\"strns\":\"¯\",\"sub\":\"⊂\",\"Sub\":\"⋐\",\"subdot\":\"⪽\",\"subE\":\"⫅\",\"sube\":\"⊆\",\"subedot\":\"⫃\",\"submult\":\"⫁\",\"subnE\":\"⫋\",\"subne\":\"⊊\",\"subplus\":\"⪿\",\"subrarr\":\"⥹\",\"subset\":\"⊂\",\"Subset\":\"⋐\",\"subseteq\":\"⊆\",\"subseteqq\":\"⫅\",\"SubsetEqual\":\"⊆\",\"subsetneq\":\"⊊\",\"subsetneqq\":\"⫋\",\"subsim\":\"⫇\",\"subsub\":\"⫕\",\"subsup\":\"⫓\",\"succapprox\":\"⪸\",\"succ\":\"≻\",\"succcurlyeq\":\"≽\",\"Succeeds\":\"≻\",\"SucceedsEqual\":\"⪰\",\"SucceedsSlantEqual\":\"≽\",\"SucceedsTilde\":\"≿\",\"succeq\":\"⪰\",\"succnapprox\":\"⪺\",\"succneqq\":\"⪶\",\"succnsim\":\"⋩\",\"succsim\":\"≿\",\"SuchThat\":\"∋\",\"sum\":\"∑\",\"Sum\":\"∑\",\"sung\":\"♪\",\"sup1\":\"¹\",\"sup2\":\"²\",\"sup3\":\"³\",\"sup\":\"⊃\",\"Sup\":\"⋑\",\"supdot\":\"⪾\",\"supdsub\":\"⫘\",\"supE\":\"⫆\",\"supe\":\"⊇\",\"supedot\":\"⫄\",\"Superset\":\"⊃\",\"SupersetEqual\":\"⊇\",\"suphsol\":\"⟉\",\"suphsub\":\"⫗\",\"suplarr\":\"⥻\",\"supmult\":\"⫂\",\"supnE\":\"⫌\",\"supne\":\"⊋\",\"supplus\":\"⫀\",\"supset\":\"⊃\",\"Supset\":\"⋑\",\"supseteq\":\"⊇\",\"supseteqq\":\"⫆\",\"supsetneq\":\"⊋\",\"supsetneqq\":\"⫌\",\"supsim\":\"⫈\",\"supsub\":\"⫔\",\"supsup\":\"⫖\",\"swarhk\":\"⤦\",\"swarr\":\"↙\",\"swArr\":\"⇙\",\"swarrow\":\"↙\",\"swnwar\":\"⤪\",\"szlig\":\"ß\",\"Tab\":\"\\t\",\"target\":\"⌖\",\"Tau\":\"Τ\",\"tau\":\"τ\",\"tbrk\":\"⎴\",\"Tcaron\":\"Ť\",\"tcaron\":\"ť\",\"Tcedil\":\"Ţ\",\"tcedil\":\"ţ\",\"Tcy\":\"Т\",\"tcy\":\"т\",\"tdot\":\"⃛\",\"telrec\":\"⌕\",\"Tfr\":\"𝔗\",\"tfr\":\"𝔱\",\"there4\":\"∴\",\"therefore\":\"∴\",\"Therefore\":\"∴\",\"Theta\":\"Θ\",\"theta\":\"θ\",\"thetasym\":\"ϑ\",\"thetav\":\"ϑ\",\"thickapprox\":\"≈\",\"thicksim\":\"∼\",\"ThickSpace\":\"  \",\"ThinSpace\":\" \",\"thinsp\":\" \",\"thkap\":\"≈\",\"thksim\":\"∼\",\"THORN\":\"Þ\",\"thorn\":\"þ\",\"tilde\":\"˜\",\"Tilde\":\"∼\",\"TildeEqual\":\"≃\",\"TildeFullEqual\":\"≅\",\"TildeTilde\":\"≈\",\"timesbar\":\"⨱\",\"timesb\":\"⊠\",\"times\":\"×\",\"timesd\":\"⨰\",\"tint\":\"∭\",\"toea\":\"⤨\",\"topbot\":\"⌶\",\"topcir\":\"⫱\",\"top\":\"⊤\",\"Topf\":\"𝕋\",\"topf\":\"𝕥\",\"topfork\":\"⫚\",\"tosa\":\"⤩\",\"tprime\":\"‴\",\"trade\":\"™\",\"TRADE\":\"™\",\"triangle\":\"▵\",\"triangledown\":\"▿\",\"triangleleft\":\"◃\",\"trianglelefteq\":\"⊴\",\"triangleq\":\"≜\",\"triangleright\":\"▹\",\"trianglerighteq\":\"⊵\",\"tridot\":\"◬\",\"trie\":\"≜\",\"triminus\":\"⨺\",\"TripleDot\":\"⃛\",\"triplus\":\"⨹\",\"trisb\":\"⧍\",\"tritime\":\"⨻\",\"trpezium\":\"⏢\",\"Tscr\":\"𝒯\",\"tscr\":\"𝓉\",\"TScy\":\"Ц\",\"tscy\":\"ц\",\"TSHcy\":\"Ћ\",\"tshcy\":\"ћ\",\"Tstrok\":\"Ŧ\",\"tstrok\":\"ŧ\",\"twixt\":\"≬\",\"twoheadleftarrow\":\"↞\",\"twoheadrightarrow\":\"↠\",\"Uacute\":\"Ú\",\"uacute\":\"ú\",\"uarr\":\"↑\",\"Uarr\":\"↟\",\"uArr\":\"⇑\",\"Uarrocir\":\"⥉\",\"Ubrcy\":\"Ў\",\"ubrcy\":\"ў\",\"Ubreve\":\"Ŭ\",\"ubreve\":\"ŭ\",\"Ucirc\":\"Û\",\"ucirc\":\"û\",\"Ucy\":\"У\",\"ucy\":\"у\",\"udarr\":\"⇅\",\"Udblac\":\"Ű\",\"udblac\":\"ű\",\"udhar\":\"⥮\",\"ufisht\":\"⥾\",\"Ufr\":\"𝔘\",\"ufr\":\"𝔲\",\"Ugrave\":\"Ù\",\"ugrave\":\"ù\",\"uHar\":\"⥣\",\"uharl\":\"↿\",\"uharr\":\"↾\",\"uhblk\":\"▀\",\"ulcorn\":\"⌜\",\"ulcorner\":\"⌜\",\"ulcrop\":\"⌏\",\"ultri\":\"◸\",\"Umacr\":\"Ū\",\"umacr\":\"ū\",\"uml\":\"¨\",\"UnderBar\":\"_\",\"UnderBrace\":\"⏟\",\"UnderBracket\":\"⎵\",\"UnderParenthesis\":\"⏝\",\"Union\":\"⋃\",\"UnionPlus\":\"⊎\",\"Uogon\":\"Ų\",\"uogon\":\"ų\",\"Uopf\":\"𝕌\",\"uopf\":\"𝕦\",\"UpArrowBar\":\"⤒\",\"uparrow\":\"↑\",\"UpArrow\":\"↑\",\"Uparrow\":\"⇑\",\"UpArrowDownArrow\":\"⇅\",\"updownarrow\":\"↕\",\"UpDownArrow\":\"↕\",\"Updownarrow\":\"⇕\",\"UpEquilibrium\":\"⥮\",\"upharpoonleft\":\"↿\",\"upharpoonright\":\"↾\",\"uplus\":\"⊎\",\"UpperLeftArrow\":\"↖\",\"UpperRightArrow\":\"↗\",\"upsi\":\"υ\",\"Upsi\":\"ϒ\",\"upsih\":\"ϒ\",\"Upsilon\":\"Υ\",\"upsilon\":\"υ\",\"UpTeeArrow\":\"↥\",\"UpTee\":\"⊥\",\"upuparrows\":\"⇈\",\"urcorn\":\"⌝\",\"urcorner\":\"⌝\",\"urcrop\":\"⌎\",\"Uring\":\"Ů\",\"uring\":\"ů\",\"urtri\":\"◹\",\"Uscr\":\"𝒰\",\"uscr\":\"𝓊\",\"utdot\":\"⋰\",\"Utilde\":\"Ũ\",\"utilde\":\"ũ\",\"utri\":\"▵\",\"utrif\":\"▴\",\"uuarr\":\"⇈\",\"Uuml\":\"Ü\",\"uuml\":\"ü\",\"uwangle\":\"⦧\",\"vangrt\":\"⦜\",\"varepsilon\":\"ϵ\",\"varkappa\":\"ϰ\",\"varnothing\":\"∅\",\"varphi\":\"ϕ\",\"varpi\":\"ϖ\",\"varpropto\":\"∝\",\"varr\":\"↕\",\"vArr\":\"⇕\",\"varrho\":\"ϱ\",\"varsigma\":\"ς\",\"varsubsetneq\":\"⊊︀\",\"varsubsetneqq\":\"⫋︀\",\"varsupsetneq\":\"⊋︀\",\"varsupsetneqq\":\"⫌︀\",\"vartheta\":\"ϑ\",\"vartriangleleft\":\"⊲\",\"vartriangleright\":\"⊳\",\"vBar\":\"⫨\",\"Vbar\":\"⫫\",\"vBarv\":\"⫩\",\"Vcy\":\"В\",\"vcy\":\"в\",\"vdash\":\"⊢\",\"vDash\":\"⊨\",\"Vdash\":\"⊩\",\"VDash\":\"⊫\",\"Vdashl\":\"⫦\",\"veebar\":\"⊻\",\"vee\":\"∨\",\"Vee\":\"⋁\",\"veeeq\":\"≚\",\"vellip\":\"⋮\",\"verbar\":\"|\",\"Verbar\":\"‖\",\"vert\":\"|\",\"Vert\":\"‖\",\"VerticalBar\":\"∣\",\"VerticalLine\":\"|\",\"VerticalSeparator\":\"❘\",\"VerticalTilde\":\"≀\",\"VeryThinSpace\":\" \",\"Vfr\":\"𝔙\",\"vfr\":\"𝔳\",\"vltri\":\"⊲\",\"vnsub\":\"⊂⃒\",\"vnsup\":\"⊃⃒\",\"Vopf\":\"𝕍\",\"vopf\":\"𝕧\",\"vprop\":\"∝\",\"vrtri\":\"⊳\",\"Vscr\":\"𝒱\",\"vscr\":\"𝓋\",\"vsubnE\":\"⫋︀\",\"vsubne\":\"⊊︀\",\"vsupnE\":\"⫌︀\",\"vsupne\":\"⊋︀\",\"Vvdash\":\"⊪\",\"vzigzag\":\"⦚\",\"Wcirc\":\"Ŵ\",\"wcirc\":\"ŵ\",\"wedbar\":\"⩟\",\"wedge\":\"∧\",\"Wedge\":\"⋀\",\"wedgeq\":\"≙\",\"weierp\":\"℘\",\"Wfr\":\"𝔚\",\"wfr\":\"𝔴\",\"Wopf\":\"𝕎\",\"wopf\":\"𝕨\",\"wp\":\"℘\",\"wr\":\"≀\",\"wreath\":\"≀\",\"Wscr\":\"𝒲\",\"wscr\":\"𝓌\",\"xcap\":\"⋂\",\"xcirc\":\"◯\",\"xcup\":\"⋃\",\"xdtri\":\"▽\",\"Xfr\":\"𝔛\",\"xfr\":\"𝔵\",\"xharr\":\"⟷\",\"xhArr\":\"⟺\",\"Xi\":\"Ξ\",\"xi\":\"ξ\",\"xlarr\":\"⟵\",\"xlArr\":\"⟸\",\"xmap\":\"⟼\",\"xnis\":\"⋻\",\"xodot\":\"⨀\",\"Xopf\":\"𝕏\",\"xopf\":\"𝕩\",\"xoplus\":\"⨁\",\"xotime\":\"⨂\",\"xrarr\":\"⟶\",\"xrArr\":\"⟹\",\"Xscr\":\"𝒳\",\"xscr\":\"𝓍\",\"xsqcup\":\"⨆\",\"xuplus\":\"⨄\",\"xutri\":\"△\",\"xvee\":\"⋁\",\"xwedge\":\"⋀\",\"Yacute\":\"Ý\",\"yacute\":\"ý\",\"YAcy\":\"Я\",\"yacy\":\"я\",\"Ycirc\":\"Ŷ\",\"ycirc\":\"ŷ\",\"Ycy\":\"Ы\",\"ycy\":\"ы\",\"yen\":\"¥\",\"Yfr\":\"𝔜\",\"yfr\":\"𝔶\",\"YIcy\":\"Ї\",\"yicy\":\"ї\",\"Yopf\":\"𝕐\",\"yopf\":\"𝕪\",\"Yscr\":\"𝒴\",\"yscr\":\"𝓎\",\"YUcy\":\"Ю\",\"yucy\":\"ю\",\"yuml\":\"ÿ\",\"Yuml\":\"Ÿ\",\"Zacute\":\"Ź\",\"zacute\":\"ź\",\"Zcaron\":\"Ž\",\"zcaron\":\"ž\",\"Zcy\":\"З\",\"zcy\":\"з\",\"Zdot\":\"Ż\",\"zdot\":\"ż\",\"zeetrf\":\"ℨ\",\"ZeroWidthSpace\":\"​\",\"Zeta\":\"Ζ\",\"zeta\":\"ζ\",\"zfr\":\"𝔷\",\"Zfr\":\"ℨ\",\"ZHcy\":\"Ж\",\"zhcy\":\"ж\",\"zigrarr\":\"⇝\",\"zopf\":\"𝕫\",\"Zopf\":\"ℤ\",\"Zscr\":\"𝒵\",\"zscr\":\"𝓏\",\"zwj\":\"‍\",\"zwnj\":\"‌\"}");

/***/ }),

/***/ "./node_modules/entities/lib/maps/legacy.json":
/*!****************************************************!*\
  !*** ./node_modules/entities/lib/maps/legacy.json ***!
  \****************************************************/
/*! exports provided: Aacute, aacute, Acirc, acirc, acute, AElig, aelig, Agrave, agrave, amp, AMP, Aring, aring, Atilde, atilde, Auml, auml, brvbar, Ccedil, ccedil, cedil, cent, copy, COPY, curren, deg, divide, Eacute, eacute, Ecirc, ecirc, Egrave, egrave, ETH, eth, Euml, euml, frac12, frac14, frac34, gt, GT, Iacute, iacute, Icirc, icirc, iexcl, Igrave, igrave, iquest, Iuml, iuml, laquo, lt, LT, macr, micro, middot, nbsp, not, Ntilde, ntilde, Oacute, oacute, Ocirc, ocirc, Ograve, ograve, ordf, ordm, Oslash, oslash, Otilde, otilde, Ouml, ouml, para, plusmn, pound, quot, QUOT, raquo, reg, REG, sect, shy, sup1, sup2, sup3, szlig, THORN, thorn, times, Uacute, uacute, Ucirc, ucirc, Ugrave, ugrave, uml, Uuml, uuml, Yacute, yacute, yen, yuml, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Aacute\":\"Á\",\"aacute\":\"á\",\"Acirc\":\"Â\",\"acirc\":\"â\",\"acute\":\"´\",\"AElig\":\"Æ\",\"aelig\":\"æ\",\"Agrave\":\"À\",\"agrave\":\"à\",\"amp\":\"&\",\"AMP\":\"&\",\"Aring\":\"Å\",\"aring\":\"å\",\"Atilde\":\"Ã\",\"atilde\":\"ã\",\"Auml\":\"Ä\",\"auml\":\"ä\",\"brvbar\":\"¦\",\"Ccedil\":\"Ç\",\"ccedil\":\"ç\",\"cedil\":\"¸\",\"cent\":\"¢\",\"copy\":\"©\",\"COPY\":\"©\",\"curren\":\"¤\",\"deg\":\"°\",\"divide\":\"÷\",\"Eacute\":\"É\",\"eacute\":\"é\",\"Ecirc\":\"Ê\",\"ecirc\":\"ê\",\"Egrave\":\"È\",\"egrave\":\"è\",\"ETH\":\"Ð\",\"eth\":\"ð\",\"Euml\":\"Ë\",\"euml\":\"ë\",\"frac12\":\"½\",\"frac14\":\"¼\",\"frac34\":\"¾\",\"gt\":\">\",\"GT\":\">\",\"Iacute\":\"Í\",\"iacute\":\"í\",\"Icirc\":\"Î\",\"icirc\":\"î\",\"iexcl\":\"¡\",\"Igrave\":\"Ì\",\"igrave\":\"ì\",\"iquest\":\"¿\",\"Iuml\":\"Ï\",\"iuml\":\"ï\",\"laquo\":\"«\",\"lt\":\"<\",\"LT\":\"<\",\"macr\":\"¯\",\"micro\":\"µ\",\"middot\":\"·\",\"nbsp\":\" \",\"not\":\"¬\",\"Ntilde\":\"Ñ\",\"ntilde\":\"ñ\",\"Oacute\":\"Ó\",\"oacute\":\"ó\",\"Ocirc\":\"Ô\",\"ocirc\":\"ô\",\"Ograve\":\"Ò\",\"ograve\":\"ò\",\"ordf\":\"ª\",\"ordm\":\"º\",\"Oslash\":\"Ø\",\"oslash\":\"ø\",\"Otilde\":\"Õ\",\"otilde\":\"õ\",\"Ouml\":\"Ö\",\"ouml\":\"ö\",\"para\":\"¶\",\"plusmn\":\"±\",\"pound\":\"£\",\"quot\":\"\\\"\",\"QUOT\":\"\\\"\",\"raquo\":\"»\",\"reg\":\"®\",\"REG\":\"®\",\"sect\":\"§\",\"shy\":\"­\",\"sup1\":\"¹\",\"sup2\":\"²\",\"sup3\":\"³\",\"szlig\":\"ß\",\"THORN\":\"Þ\",\"thorn\":\"þ\",\"times\":\"×\",\"Uacute\":\"Ú\",\"uacute\":\"ú\",\"Ucirc\":\"Û\",\"ucirc\":\"û\",\"Ugrave\":\"Ù\",\"ugrave\":\"ù\",\"uml\":\"¨\",\"Uuml\":\"Ü\",\"uuml\":\"ü\",\"Yacute\":\"Ý\",\"yacute\":\"ý\",\"yen\":\"¥\",\"yuml\":\"ÿ\"}");

/***/ }),

/***/ "./node_modules/entities/lib/maps/xml.json":
/*!*************************************************!*\
  !*** ./node_modules/entities/lib/maps/xml.json ***!
  \*************************************************/
/*! exports provided: amp, apos, gt, lt, quot, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"amp\":\"&\",\"apos\":\"'\",\"gt\":\">\",\"lt\":\"<\",\"quot\":\"\\\"\"}");

/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),

/***/ "./node_modules/htmlparser2/lib/CollectingHandler.js":
/*!***********************************************************!*\
  !*** ./node_modules/htmlparser2/lib/CollectingHandler.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = CollectingHandler;

function CollectingHandler(cbs) {
    this._cbs = cbs || {};
    this.events = [];
}

var EVENTS = __webpack_require__(/*! ./ */ "./node_modules/htmlparser2/lib/index.js").EVENTS;
Object.keys(EVENTS).forEach(function(name) {
    if (EVENTS[name] === 0) {
        name = "on" + name;
        CollectingHandler.prototype[name] = function() {
            this.events.push([name]);
            if (this._cbs[name]) this._cbs[name]();
        };
    } else if (EVENTS[name] === 1) {
        name = "on" + name;
        CollectingHandler.prototype[name] = function(a) {
            this.events.push([name, a]);
            if (this._cbs[name]) this._cbs[name](a);
        };
    } else if (EVENTS[name] === 2) {
        name = "on" + name;
        CollectingHandler.prototype[name] = function(a, b) {
            this.events.push([name, a, b]);
            if (this._cbs[name]) this._cbs[name](a, b);
        };
    } else {
        throw Error("wrong number of arguments");
    }
});

CollectingHandler.prototype.onreset = function() {
    this.events = [];
    if (this._cbs.onreset) this._cbs.onreset();
};

CollectingHandler.prototype.restart = function() {
    if (this._cbs.onreset) this._cbs.onreset();

    for (var i = 0, len = this.events.length; i < len; i++) {
        if (this._cbs[this.events[i][0]]) {
            var num = this.events[i].length;

            if (num === 1) {
                this._cbs[this.events[i][0]]();
            } else if (num === 2) {
                this._cbs[this.events[i][0]](this.events[i][1]);
            } else {
                this._cbs[this.events[i][0]](
                    this.events[i][1],
                    this.events[i][2]
                );
            }
        }
    }
};


/***/ }),

/***/ "./node_modules/htmlparser2/lib/FeedHandler.js":
/*!*****************************************************!*\
  !*** ./node_modules/htmlparser2/lib/FeedHandler.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DomHandler = __webpack_require__(/*! domhandler */ "./node_modules/htmlparser2/node_modules/domhandler/index.js");
var DomUtils = __webpack_require__(/*! domutils */ "./node_modules/domutils/index.js");

//TODO: make this a streamable handler
function FeedHandler(callback, options) {
    this.init(callback, options);
}

__webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js")(FeedHandler, DomHandler);

FeedHandler.prototype.init = DomHandler;

function getElements(what, where) {
    return DomUtils.getElementsByTagName(what, where, true);
}
function getOneElement(what, where) {
    return DomUtils.getElementsByTagName(what, where, true, 1)[0];
}
function fetch(what, where, recurse) {
    return DomUtils.getText(
        DomUtils.getElementsByTagName(what, where, recurse, 1)
    ).trim();
}

function addConditionally(obj, prop, what, where, recurse) {
    var tmp = fetch(what, where, recurse);
    if (tmp) obj[prop] = tmp;
}

var isValidFeed = function(value) {
    return value === "rss" || value === "feed" || value === "rdf:RDF";
};

FeedHandler.prototype.onend = function() {
    var feed = {},
        feedRoot = getOneElement(isValidFeed, this.dom),
        tmp,
        childs;

    if (feedRoot) {
        if (feedRoot.name === "feed") {
            childs = feedRoot.children;

            feed.type = "atom";
            addConditionally(feed, "id", "id", childs);
            addConditionally(feed, "title", "title", childs);
            if (
                (tmp = getOneElement("link", childs)) &&
                (tmp = tmp.attribs) &&
                (tmp = tmp.href)
            )
                feed.link = tmp;
            addConditionally(feed, "description", "subtitle", childs);
            if ((tmp = fetch("updated", childs))) feed.updated = new Date(tmp);
            addConditionally(feed, "author", "email", childs, true);

            feed.items = getElements("entry", childs).map(function(item) {
                var entry = {},
                    tmp;

                item = item.children;

                addConditionally(entry, "id", "id", item);
                addConditionally(entry, "title", "title", item);
                if (
                    (tmp = getOneElement("link", item)) &&
                    (tmp = tmp.attribs) &&
                    (tmp = tmp.href)
                )
                    entry.link = tmp;
                if ((tmp = fetch("summary", item) || fetch("content", item)))
                    entry.description = tmp;
                if ((tmp = fetch("updated", item)))
                    entry.pubDate = new Date(tmp);
                return entry;
            });
        } else {
            childs = getOneElement("channel", feedRoot.children).children;

            feed.type = feedRoot.name.substr(0, 3);
            feed.id = "";
            addConditionally(feed, "title", "title", childs);
            addConditionally(feed, "link", "link", childs);
            addConditionally(feed, "description", "description", childs);
            if ((tmp = fetch("lastBuildDate", childs)))
                feed.updated = new Date(tmp);
            addConditionally(feed, "author", "managingEditor", childs, true);

            feed.items = getElements("item", feedRoot.children).map(function(
                item
            ) {
                var entry = {},
                    tmp;

                item = item.children;

                addConditionally(entry, "id", "guid", item);
                addConditionally(entry, "title", "title", item);
                addConditionally(entry, "link", "link", item);
                addConditionally(entry, "description", "description", item);
                if ((tmp = fetch("pubDate", item)))
                    entry.pubDate = new Date(tmp);
                return entry;
            });
        }
    }
    this.dom = feed;
    DomHandler.prototype._handleCallback.call(
        this,
        feedRoot ? null : Error("couldn't find root of feed")
    );
};

module.exports = FeedHandler;


/***/ }),

/***/ "./node_modules/htmlparser2/lib/Parser.js":
/*!************************************************!*\
  !*** ./node_modules/htmlparser2/lib/Parser.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Tokenizer = __webpack_require__(/*! ./Tokenizer.js */ "./node_modules/htmlparser2/lib/Tokenizer.js");

/*
	Options:

	xmlMode: Disables the special behavior for script/style tags (false by default)
	lowerCaseAttributeNames: call .toLowerCase for each attribute name (true if xmlMode is `false`)
	lowerCaseTags: call .toLowerCase for each tag name (true if xmlMode is `false`)
*/

/*
	Callbacks:

	oncdataend,
	oncdatastart,
	onclosetag,
	oncomment,
	oncommentend,
	onerror,
	onopentag,
	onprocessinginstruction,
	onreset,
	ontext
*/

var formTags = {
    input: true,
    option: true,
    optgroup: true,
    select: true,
    button: true,
    datalist: true,
    textarea: true
};

var openImpliesClose = {
    tr: { tr: true, th: true, td: true },
    th: { th: true },
    td: { thead: true, th: true, td: true },
    body: { head: true, link: true, script: true },
    li: { li: true },
    p: { p: true },
    h1: { p: true },
    h2: { p: true },
    h3: { p: true },
    h4: { p: true },
    h5: { p: true },
    h6: { p: true },
    select: formTags,
    input: formTags,
    output: formTags,
    button: formTags,
    datalist: formTags,
    textarea: formTags,
    option: { option: true },
    optgroup: { optgroup: true }
};

var voidElements = {
    __proto__: null,
    area: true,
    base: true,
    basefont: true,
    br: true,
    col: true,
    command: true,
    embed: true,
    frame: true,
    hr: true,
    img: true,
    input: true,
    isindex: true,
    keygen: true,
    link: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true
};

var foreignContextElements = {
    __proto__: null,
    math: true,
    svg: true
};
var htmlIntegrationElements = {
    __proto__: null,
    mi: true,
    mo: true,
    mn: true,
    ms: true,
    mtext: true,
    "annotation-xml": true,
    foreignObject: true,
    desc: true,
    title: true
};

var re_nameEnd = /\s|\//;

function Parser(cbs, options) {
    this._options = options || {};
    this._cbs = cbs || {};

    this._tagname = "";
    this._attribname = "";
    this._attribvalue = "";
    this._attribs = null;
    this._stack = [];
    this._foreignContext = [];

    this.startIndex = 0;
    this.endIndex = null;

    this._lowerCaseTagNames =
        "lowerCaseTags" in this._options
            ? !!this._options.lowerCaseTags
            : !this._options.xmlMode;
    this._lowerCaseAttributeNames =
        "lowerCaseAttributeNames" in this._options
            ? !!this._options.lowerCaseAttributeNames
            : !this._options.xmlMode;

    if (this._options.Tokenizer) {
        Tokenizer = this._options.Tokenizer;
    }
    this._tokenizer = new Tokenizer(this._options, this);

    if (this._cbs.onparserinit) this._cbs.onparserinit(this);
}

__webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js")(Parser, __webpack_require__(/*! events */ "./node_modules/events/events.js").EventEmitter);

Parser.prototype._updatePosition = function(initialOffset) {
    if (this.endIndex === null) {
        if (this._tokenizer._sectionStart <= initialOffset) {
            this.startIndex = 0;
        } else {
            this.startIndex = this._tokenizer._sectionStart - initialOffset;
        }
    } else this.startIndex = this.endIndex + 1;
    this.endIndex = this._tokenizer.getAbsoluteIndex();
};

//Tokenizer event handlers
Parser.prototype.ontext = function(data) {
    this._updatePosition(1);
    this.endIndex--;

    if (this._cbs.ontext) this._cbs.ontext(data);
};

Parser.prototype.onopentagname = function(name) {
    if (this._lowerCaseTagNames) {
        name = name.toLowerCase();
    }

    this._tagname = name;

    if (!this._options.xmlMode && name in openImpliesClose) {
        for (
            var el;
            (el = this._stack[this._stack.length - 1]) in
            openImpliesClose[name];
            this.onclosetag(el)
        );
    }

    if (this._options.xmlMode || !(name in voidElements)) {
        this._stack.push(name);
        if (name in foreignContextElements) this._foreignContext.push(true);
        else if (name in htmlIntegrationElements)
            this._foreignContext.push(false);
    }

    if (this._cbs.onopentagname) this._cbs.onopentagname(name);
    if (this._cbs.onopentag) this._attribs = {};
};

Parser.prototype.onopentagend = function() {
    this._updatePosition(1);

    if (this._attribs) {
        if (this._cbs.onopentag)
            this._cbs.onopentag(this._tagname, this._attribs);
        this._attribs = null;
    }

    if (
        !this._options.xmlMode &&
        this._cbs.onclosetag &&
        this._tagname in voidElements
    ) {
        this._cbs.onclosetag(this._tagname);
    }

    this._tagname = "";
};

Parser.prototype.onclosetag = function(name) {
    this._updatePosition(1);

    if (this._lowerCaseTagNames) {
        name = name.toLowerCase();
    }
    
    if (name in foreignContextElements || name in htmlIntegrationElements) {
        this._foreignContext.pop();
    }

    if (
        this._stack.length &&
        (!(name in voidElements) || this._options.xmlMode)
    ) {
        var pos = this._stack.lastIndexOf(name);
        if (pos !== -1) {
            if (this._cbs.onclosetag) {
                pos = this._stack.length - pos;
                while (pos--) this._cbs.onclosetag(this._stack.pop());
            } else this._stack.length = pos;
        } else if (name === "p" && !this._options.xmlMode) {
            this.onopentagname(name);
            this._closeCurrentTag();
        }
    } else if (!this._options.xmlMode && (name === "br" || name === "p")) {
        this.onopentagname(name);
        this._closeCurrentTag();
    }
};

Parser.prototype.onselfclosingtag = function() {
    if (
        this._options.xmlMode ||
        this._options.recognizeSelfClosing ||
        this._foreignContext[this._foreignContext.length - 1]
    ) {
        this._closeCurrentTag();
    } else {
        this.onopentagend();
    }
};

Parser.prototype._closeCurrentTag = function() {
    var name = this._tagname;

    this.onopentagend();

    //self-closing tags will be on the top of the stack
    //(cheaper check than in onclosetag)
    if (this._stack[this._stack.length - 1] === name) {
        if (this._cbs.onclosetag) {
            this._cbs.onclosetag(name);
        }
        this._stack.pop();
        
    }
};

Parser.prototype.onattribname = function(name) {
    if (this._lowerCaseAttributeNames) {
        name = name.toLowerCase();
    }
    this._attribname = name;
};

Parser.prototype.onattribdata = function(value) {
    this._attribvalue += value;
};

Parser.prototype.onattribend = function() {
    if (this._cbs.onattribute)
        this._cbs.onattribute(this._attribname, this._attribvalue);
    if (
        this._attribs &&
        !Object.prototype.hasOwnProperty.call(this._attribs, this._attribname)
    ) {
        this._attribs[this._attribname] = this._attribvalue;
    }
    this._attribname = "";
    this._attribvalue = "";
};

Parser.prototype._getInstructionName = function(value) {
    var idx = value.search(re_nameEnd),
        name = idx < 0 ? value : value.substr(0, idx);

    if (this._lowerCaseTagNames) {
        name = name.toLowerCase();
    }

    return name;
};

Parser.prototype.ondeclaration = function(value) {
    if (this._cbs.onprocessinginstruction) {
        var name = this._getInstructionName(value);
        this._cbs.onprocessinginstruction("!" + name, "!" + value);
    }
};

Parser.prototype.onprocessinginstruction = function(value) {
    if (this._cbs.onprocessinginstruction) {
        var name = this._getInstructionName(value);
        this._cbs.onprocessinginstruction("?" + name, "?" + value);
    }
};

Parser.prototype.oncomment = function(value) {
    this._updatePosition(4);

    if (this._cbs.oncomment) this._cbs.oncomment(value);
    if (this._cbs.oncommentend) this._cbs.oncommentend();
};

Parser.prototype.oncdata = function(value) {
    this._updatePosition(1);

    if (this._options.xmlMode || this._options.recognizeCDATA) {
        if (this._cbs.oncdatastart) this._cbs.oncdatastart();
        if (this._cbs.ontext) this._cbs.ontext(value);
        if (this._cbs.oncdataend) this._cbs.oncdataend();
    } else {
        this.oncomment("[CDATA[" + value + "]]");
    }
};

Parser.prototype.onerror = function(err) {
    if (this._cbs.onerror) this._cbs.onerror(err);
};

Parser.prototype.onend = function() {
    if (this._cbs.onclosetag) {
        for (
            var i = this._stack.length;
            i > 0;
            this._cbs.onclosetag(this._stack[--i])
        );
    }
    if (this._cbs.onend) this._cbs.onend();
};

//Resets the parser to a blank state, ready to parse a new HTML document
Parser.prototype.reset = function() {
    if (this._cbs.onreset) this._cbs.onreset();
    this._tokenizer.reset();

    this._tagname = "";
    this._attribname = "";
    this._attribs = null;
    this._stack = [];

    if (this._cbs.onparserinit) this._cbs.onparserinit(this);
};

//Parses a complete HTML document and pushes it to the handler
Parser.prototype.parseComplete = function(data) {
    this.reset();
    this.end(data);
};

Parser.prototype.write = function(chunk) {
    this._tokenizer.write(chunk);
};

Parser.prototype.end = function(chunk) {
    this._tokenizer.end(chunk);
};

Parser.prototype.pause = function() {
    this._tokenizer.pause();
};

Parser.prototype.resume = function() {
    this._tokenizer.resume();
};

//alias for backwards compat
Parser.prototype.parseChunk = Parser.prototype.write;
Parser.prototype.done = Parser.prototype.end;

module.exports = Parser;


/***/ }),

/***/ "./node_modules/htmlparser2/lib/ProxyHandler.js":
/*!******************************************************!*\
  !*** ./node_modules/htmlparser2/lib/ProxyHandler.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = ProxyHandler;

function ProxyHandler(cbs) {
    this._cbs = cbs || {};
}

var EVENTS = __webpack_require__(/*! ./ */ "./node_modules/htmlparser2/lib/index.js").EVENTS;
Object.keys(EVENTS).forEach(function(name) {
    if (EVENTS[name] === 0) {
        name = "on" + name;
        ProxyHandler.prototype[name] = function() {
            if (this._cbs[name]) this._cbs[name]();
        };
    } else if (EVENTS[name] === 1) {
        name = "on" + name;
        ProxyHandler.prototype[name] = function(a) {
            if (this._cbs[name]) this._cbs[name](a);
        };
    } else if (EVENTS[name] === 2) {
        name = "on" + name;
        ProxyHandler.prototype[name] = function(a, b) {
            if (this._cbs[name]) this._cbs[name](a, b);
        };
    } else {
        throw Error("wrong number of arguments");
    }
});


/***/ }),

/***/ "./node_modules/htmlparser2/lib/Stream.js":
/*!************************************************!*\
  !*** ./node_modules/htmlparser2/lib/Stream.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = Stream;

var Parser = __webpack_require__(/*! ./WritableStream.js */ "./node_modules/htmlparser2/lib/WritableStream.js");

function Stream(options) {
    Parser.call(this, new Cbs(this), options);
}

__webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js")(Stream, Parser);

Stream.prototype.readable = true;

function Cbs(scope) {
    this.scope = scope;
}

var EVENTS = __webpack_require__(/*! ../ */ "./node_modules/htmlparser2/lib/index.js").EVENTS;

Object.keys(EVENTS).forEach(function(name) {
    if (EVENTS[name] === 0) {
        Cbs.prototype["on" + name] = function() {
            this.scope.emit(name);
        };
    } else if (EVENTS[name] === 1) {
        Cbs.prototype["on" + name] = function(a) {
            this.scope.emit(name, a);
        };
    } else if (EVENTS[name] === 2) {
        Cbs.prototype["on" + name] = function(a, b) {
            this.scope.emit(name, a, b);
        };
    } else {
        throw Error("wrong number of arguments!");
    }
});


/***/ }),

/***/ "./node_modules/htmlparser2/lib/Tokenizer.js":
/*!***************************************************!*\
  !*** ./node_modules/htmlparser2/lib/Tokenizer.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = Tokenizer;

var decodeCodePoint = __webpack_require__(/*! entities/lib/decode_codepoint.js */ "./node_modules/htmlparser2/node_modules/entities/lib/decode_codepoint.js");
var entityMap = __webpack_require__(/*! entities/maps/entities.json */ "./node_modules/htmlparser2/node_modules/entities/maps/entities.json");
var legacyMap = __webpack_require__(/*! entities/maps/legacy.json */ "./node_modules/htmlparser2/node_modules/entities/maps/legacy.json");
var xmlMap = __webpack_require__(/*! entities/maps/xml.json */ "./node_modules/htmlparser2/node_modules/entities/maps/xml.json");

var i = 0;

var TEXT = i++;
var BEFORE_TAG_NAME = i++; //after <
var IN_TAG_NAME = i++;
var IN_SELF_CLOSING_TAG = i++;
var BEFORE_CLOSING_TAG_NAME = i++;
var IN_CLOSING_TAG_NAME = i++;
var AFTER_CLOSING_TAG_NAME = i++;

//attributes
var BEFORE_ATTRIBUTE_NAME = i++;
var IN_ATTRIBUTE_NAME = i++;
var AFTER_ATTRIBUTE_NAME = i++;
var BEFORE_ATTRIBUTE_VALUE = i++;
var IN_ATTRIBUTE_VALUE_DQ = i++; // "
var IN_ATTRIBUTE_VALUE_SQ = i++; // '
var IN_ATTRIBUTE_VALUE_NQ = i++;

//declarations
var BEFORE_DECLARATION = i++; // !
var IN_DECLARATION = i++;

//processing instructions
var IN_PROCESSING_INSTRUCTION = i++; // ?

//comments
var BEFORE_COMMENT = i++;
var IN_COMMENT = i++;
var AFTER_COMMENT_1 = i++;
var AFTER_COMMENT_2 = i++;

//cdata
var BEFORE_CDATA_1 = i++; // [
var BEFORE_CDATA_2 = i++; // C
var BEFORE_CDATA_3 = i++; // D
var BEFORE_CDATA_4 = i++; // A
var BEFORE_CDATA_5 = i++; // T
var BEFORE_CDATA_6 = i++; // A
var IN_CDATA = i++; // [
var AFTER_CDATA_1 = i++; // ]
var AFTER_CDATA_2 = i++; // ]

//special tags
var BEFORE_SPECIAL = i++; //S
var BEFORE_SPECIAL_END = i++; //S

var BEFORE_SCRIPT_1 = i++; //C
var BEFORE_SCRIPT_2 = i++; //R
var BEFORE_SCRIPT_3 = i++; //I
var BEFORE_SCRIPT_4 = i++; //P
var BEFORE_SCRIPT_5 = i++; //T
var AFTER_SCRIPT_1 = i++; //C
var AFTER_SCRIPT_2 = i++; //R
var AFTER_SCRIPT_3 = i++; //I
var AFTER_SCRIPT_4 = i++; //P
var AFTER_SCRIPT_5 = i++; //T

var BEFORE_STYLE_1 = i++; //T
var BEFORE_STYLE_2 = i++; //Y
var BEFORE_STYLE_3 = i++; //L
var BEFORE_STYLE_4 = i++; //E
var AFTER_STYLE_1 = i++; //T
var AFTER_STYLE_2 = i++; //Y
var AFTER_STYLE_3 = i++; //L
var AFTER_STYLE_4 = i++; //E

var BEFORE_ENTITY = i++; //&
var BEFORE_NUMERIC_ENTITY = i++; //#
var IN_NAMED_ENTITY = i++;
var IN_NUMERIC_ENTITY = i++;
var IN_HEX_ENTITY = i++; //X

var j = 0;

var SPECIAL_NONE = j++;
var SPECIAL_SCRIPT = j++;
var SPECIAL_STYLE = j++;

function whitespace(c) {
    return c === " " || c === "\n" || c === "\t" || c === "\f" || c === "\r";
}

function ifElseState(upper, SUCCESS, FAILURE) {
    var lower = upper.toLowerCase();

    if (upper === lower) {
        return function(c) {
            if (c === lower) {
                this._state = SUCCESS;
            } else {
                this._state = FAILURE;
                this._index--;
            }
        };
    } else {
        return function(c) {
            if (c === lower || c === upper) {
                this._state = SUCCESS;
            } else {
                this._state = FAILURE;
                this._index--;
            }
        };
    }
}

function consumeSpecialNameChar(upper, NEXT_STATE) {
    var lower = upper.toLowerCase();

    return function(c) {
        if (c === lower || c === upper) {
            this._state = NEXT_STATE;
        } else {
            this._state = IN_TAG_NAME;
            this._index--; //consume the token again
        }
    };
}

function Tokenizer(options, cbs) {
    this._state = TEXT;
    this._buffer = "";
    this._sectionStart = 0;
    this._index = 0;
    this._bufferOffset = 0; //chars removed from _buffer
    this._baseState = TEXT;
    this._special = SPECIAL_NONE;
    this._cbs = cbs;
    this._running = true;
    this._ended = false;
    this._xmlMode = !!(options && options.xmlMode);
    this._decodeEntities = !!(options && options.decodeEntities);
}

Tokenizer.prototype._stateText = function(c) {
    if (c === "<") {
        if (this._index > this._sectionStart) {
            this._cbs.ontext(this._getSection());
        }
        this._state = BEFORE_TAG_NAME;
        this._sectionStart = this._index;
    } else if (
        this._decodeEntities &&
        this._special === SPECIAL_NONE &&
        c === "&"
    ) {
        if (this._index > this._sectionStart) {
            this._cbs.ontext(this._getSection());
        }
        this._baseState = TEXT;
        this._state = BEFORE_ENTITY;
        this._sectionStart = this._index;
    }
};

Tokenizer.prototype._stateBeforeTagName = function(c) {
    if (c === "/") {
        this._state = BEFORE_CLOSING_TAG_NAME;
    } else if (c === "<") {
        this._cbs.ontext(this._getSection());
        this._sectionStart = this._index;
    } else if (c === ">" || this._special !== SPECIAL_NONE || whitespace(c)) {
        this._state = TEXT;
    } else if (c === "!") {
        this._state = BEFORE_DECLARATION;
        this._sectionStart = this._index + 1;
    } else if (c === "?") {
        this._state = IN_PROCESSING_INSTRUCTION;
        this._sectionStart = this._index + 1;
    } else {
        this._state =
            !this._xmlMode && (c === "s" || c === "S")
                ? BEFORE_SPECIAL
                : IN_TAG_NAME;
        this._sectionStart = this._index;
    }
};

Tokenizer.prototype._stateInTagName = function(c) {
    if (c === "/" || c === ">" || whitespace(c)) {
        this._emitToken("onopentagname");
        this._state = BEFORE_ATTRIBUTE_NAME;
        this._index--;
    }
};

Tokenizer.prototype._stateBeforeCloseingTagName = function(c) {
    if (whitespace(c));
    else if (c === ">") {
        this._state = TEXT;
    } else if (this._special !== SPECIAL_NONE) {
        if (c === "s" || c === "S") {
            this._state = BEFORE_SPECIAL_END;
        } else {
            this._state = TEXT;
            this._index--;
        }
    } else {
        this._state = IN_CLOSING_TAG_NAME;
        this._sectionStart = this._index;
    }
};

Tokenizer.prototype._stateInCloseingTagName = function(c) {
    if (c === ">" || whitespace(c)) {
        this._emitToken("onclosetag");
        this._state = AFTER_CLOSING_TAG_NAME;
        this._index--;
    }
};

Tokenizer.prototype._stateAfterCloseingTagName = function(c) {
    //skip everything until ">"
    if (c === ">") {
        this._state = TEXT;
        this._sectionStart = this._index + 1;
    }
};

Tokenizer.prototype._stateBeforeAttributeName = function(c) {
    if (c === ">") {
        this._cbs.onopentagend();
        this._state = TEXT;
        this._sectionStart = this._index + 1;
    } else if (c === "/") {
        this._state = IN_SELF_CLOSING_TAG;
    } else if (!whitespace(c)) {
        this._state = IN_ATTRIBUTE_NAME;
        this._sectionStart = this._index;
    }
};

Tokenizer.prototype._stateInSelfClosingTag = function(c) {
    if (c === ">") {
        this._cbs.onselfclosingtag();
        this._state = TEXT;
        this._sectionStart = this._index + 1;
    } else if (!whitespace(c)) {
        this._state = BEFORE_ATTRIBUTE_NAME;
        this._index--;
    }
};

Tokenizer.prototype._stateInAttributeName = function(c) {
    if (c === "=" || c === "/" || c === ">" || whitespace(c)) {
        this._cbs.onattribname(this._getSection());
        this._sectionStart = -1;
        this._state = AFTER_ATTRIBUTE_NAME;
        this._index--;
    }
};

Tokenizer.prototype._stateAfterAttributeName = function(c) {
    if (c === "=") {
        this._state = BEFORE_ATTRIBUTE_VALUE;
    } else if (c === "/" || c === ">") {
        this._cbs.onattribend();
        this._state = BEFORE_ATTRIBUTE_NAME;
        this._index--;
    } else if (!whitespace(c)) {
        this._cbs.onattribend();
        this._state = IN_ATTRIBUTE_NAME;
        this._sectionStart = this._index;
    }
};

Tokenizer.prototype._stateBeforeAttributeValue = function(c) {
    if (c === '"') {
        this._state = IN_ATTRIBUTE_VALUE_DQ;
        this._sectionStart = this._index + 1;
    } else if (c === "'") {
        this._state = IN_ATTRIBUTE_VALUE_SQ;
        this._sectionStart = this._index + 1;
    } else if (!whitespace(c)) {
        this._state = IN_ATTRIBUTE_VALUE_NQ;
        this._sectionStart = this._index;
        this._index--; //reconsume token
    }
};

Tokenizer.prototype._stateInAttributeValueDoubleQuotes = function(c) {
    if (c === '"') {
        this._emitToken("onattribdata");
        this._cbs.onattribend();
        this._state = BEFORE_ATTRIBUTE_NAME;
    } else if (this._decodeEntities && c === "&") {
        this._emitToken("onattribdata");
        this._baseState = this._state;
        this._state = BEFORE_ENTITY;
        this._sectionStart = this._index;
    }
};

Tokenizer.prototype._stateInAttributeValueSingleQuotes = function(c) {
    if (c === "'") {
        this._emitToken("onattribdata");
        this._cbs.onattribend();
        this._state = BEFORE_ATTRIBUTE_NAME;
    } else if (this._decodeEntities && c === "&") {
        this._emitToken("onattribdata");
        this._baseState = this._state;
        this._state = BEFORE_ENTITY;
        this._sectionStart = this._index;
    }
};

Tokenizer.prototype._stateInAttributeValueNoQuotes = function(c) {
    if (whitespace(c) || c === ">") {
        this._emitToken("onattribdata");
        this._cbs.onattribend();
        this._state = BEFORE_ATTRIBUTE_NAME;
        this._index--;
    } else if (this._decodeEntities && c === "&") {
        this._emitToken("onattribdata");
        this._baseState = this._state;
        this._state = BEFORE_ENTITY;
        this._sectionStart = this._index;
    }
};

Tokenizer.prototype._stateBeforeDeclaration = function(c) {
    this._state =
        c === "["
            ? BEFORE_CDATA_1
            : c === "-"
                ? BEFORE_COMMENT
                : IN_DECLARATION;
};

Tokenizer.prototype._stateInDeclaration = function(c) {
    if (c === ">") {
        this._cbs.ondeclaration(this._getSection());
        this._state = TEXT;
        this._sectionStart = this._index + 1;
    }
};

Tokenizer.prototype._stateInProcessingInstruction = function(c) {
    if (c === ">") {
        this._cbs.onprocessinginstruction(this._getSection());
        this._state = TEXT;
        this._sectionStart = this._index + 1;
    }
};

Tokenizer.prototype._stateBeforeComment = function(c) {
    if (c === "-") {
        this._state = IN_COMMENT;
        this._sectionStart = this._index + 1;
    } else {
        this._state = IN_DECLARATION;
    }
};

Tokenizer.prototype._stateInComment = function(c) {
    if (c === "-") this._state = AFTER_COMMENT_1;
};

Tokenizer.prototype._stateAfterComment1 = function(c) {
    if (c === "-") {
        this._state = AFTER_COMMENT_2;
    } else {
        this._state = IN_COMMENT;
    }
};

Tokenizer.prototype._stateAfterComment2 = function(c) {
    if (c === ">") {
        //remove 2 trailing chars
        this._cbs.oncomment(
            this._buffer.substring(this._sectionStart, this._index - 2)
        );
        this._state = TEXT;
        this._sectionStart = this._index + 1;
    } else if (c !== "-") {
        this._state = IN_COMMENT;
    }
    // else: stay in AFTER_COMMENT_2 (`--->`)
};

Tokenizer.prototype._stateBeforeCdata1 = ifElseState(
    "C",
    BEFORE_CDATA_2,
    IN_DECLARATION
);
Tokenizer.prototype._stateBeforeCdata2 = ifElseState(
    "D",
    BEFORE_CDATA_3,
    IN_DECLARATION
);
Tokenizer.prototype._stateBeforeCdata3 = ifElseState(
    "A",
    BEFORE_CDATA_4,
    IN_DECLARATION
);
Tokenizer.prototype._stateBeforeCdata4 = ifElseState(
    "T",
    BEFORE_CDATA_5,
    IN_DECLARATION
);
Tokenizer.prototype._stateBeforeCdata5 = ifElseState(
    "A",
    BEFORE_CDATA_6,
    IN_DECLARATION
);

Tokenizer.prototype._stateBeforeCdata6 = function(c) {
    if (c === "[") {
        this._state = IN_CDATA;
        this._sectionStart = this._index + 1;
    } else {
        this._state = IN_DECLARATION;
        this._index--;
    }
};

Tokenizer.prototype._stateInCdata = function(c) {
    if (c === "]") this._state = AFTER_CDATA_1;
};

Tokenizer.prototype._stateAfterCdata1 = function(c) {
    if (c === "]") this._state = AFTER_CDATA_2;
    else this._state = IN_CDATA;
};

Tokenizer.prototype._stateAfterCdata2 = function(c) {
    if (c === ">") {
        //remove 2 trailing chars
        this._cbs.oncdata(
            this._buffer.substring(this._sectionStart, this._index - 2)
        );
        this._state = TEXT;
        this._sectionStart = this._index + 1;
    } else if (c !== "]") {
        this._state = IN_CDATA;
    }
    //else: stay in AFTER_CDATA_2 (`]]]>`)
};

Tokenizer.prototype._stateBeforeSpecial = function(c) {
    if (c === "c" || c === "C") {
        this._state = BEFORE_SCRIPT_1;
    } else if (c === "t" || c === "T") {
        this._state = BEFORE_STYLE_1;
    } else {
        this._state = IN_TAG_NAME;
        this._index--; //consume the token again
    }
};

Tokenizer.prototype._stateBeforeSpecialEnd = function(c) {
    if (this._special === SPECIAL_SCRIPT && (c === "c" || c === "C")) {
        this._state = AFTER_SCRIPT_1;
    } else if (this._special === SPECIAL_STYLE && (c === "t" || c === "T")) {
        this._state = AFTER_STYLE_1;
    } else this._state = TEXT;
};

Tokenizer.prototype._stateBeforeScript1 = consumeSpecialNameChar(
    "R",
    BEFORE_SCRIPT_2
);
Tokenizer.prototype._stateBeforeScript2 = consumeSpecialNameChar(
    "I",
    BEFORE_SCRIPT_3
);
Tokenizer.prototype._stateBeforeScript3 = consumeSpecialNameChar(
    "P",
    BEFORE_SCRIPT_4
);
Tokenizer.prototype._stateBeforeScript4 = consumeSpecialNameChar(
    "T",
    BEFORE_SCRIPT_5
);

Tokenizer.prototype._stateBeforeScript5 = function(c) {
    if (c === "/" || c === ">" || whitespace(c)) {
        this._special = SPECIAL_SCRIPT;
    }
    this._state = IN_TAG_NAME;
    this._index--; //consume the token again
};

Tokenizer.prototype._stateAfterScript1 = ifElseState("R", AFTER_SCRIPT_2, TEXT);
Tokenizer.prototype._stateAfterScript2 = ifElseState("I", AFTER_SCRIPT_3, TEXT);
Tokenizer.prototype._stateAfterScript3 = ifElseState("P", AFTER_SCRIPT_4, TEXT);
Tokenizer.prototype._stateAfterScript4 = ifElseState("T", AFTER_SCRIPT_5, TEXT);

Tokenizer.prototype._stateAfterScript5 = function(c) {
    if (c === ">" || whitespace(c)) {
        this._special = SPECIAL_NONE;
        this._state = IN_CLOSING_TAG_NAME;
        this._sectionStart = this._index - 6;
        this._index--; //reconsume the token
    } else this._state = TEXT;
};

Tokenizer.prototype._stateBeforeStyle1 = consumeSpecialNameChar(
    "Y",
    BEFORE_STYLE_2
);
Tokenizer.prototype._stateBeforeStyle2 = consumeSpecialNameChar(
    "L",
    BEFORE_STYLE_3
);
Tokenizer.prototype._stateBeforeStyle3 = consumeSpecialNameChar(
    "E",
    BEFORE_STYLE_4
);

Tokenizer.prototype._stateBeforeStyle4 = function(c) {
    if (c === "/" || c === ">" || whitespace(c)) {
        this._special = SPECIAL_STYLE;
    }
    this._state = IN_TAG_NAME;
    this._index--; //consume the token again
};

Tokenizer.prototype._stateAfterStyle1 = ifElseState("Y", AFTER_STYLE_2, TEXT);
Tokenizer.prototype._stateAfterStyle2 = ifElseState("L", AFTER_STYLE_3, TEXT);
Tokenizer.prototype._stateAfterStyle3 = ifElseState("E", AFTER_STYLE_4, TEXT);

Tokenizer.prototype._stateAfterStyle4 = function(c) {
    if (c === ">" || whitespace(c)) {
        this._special = SPECIAL_NONE;
        this._state = IN_CLOSING_TAG_NAME;
        this._sectionStart = this._index - 5;
        this._index--; //reconsume the token
    } else this._state = TEXT;
};

Tokenizer.prototype._stateBeforeEntity = ifElseState(
    "#",
    BEFORE_NUMERIC_ENTITY,
    IN_NAMED_ENTITY
);
Tokenizer.prototype._stateBeforeNumericEntity = ifElseState(
    "X",
    IN_HEX_ENTITY,
    IN_NUMERIC_ENTITY
);

//for entities terminated with a semicolon
Tokenizer.prototype._parseNamedEntityStrict = function() {
    //offset = 1
    if (this._sectionStart + 1 < this._index) {
        var entity = this._buffer.substring(
                this._sectionStart + 1,
                this._index
            ),
            map = this._xmlMode ? xmlMap : entityMap;

        if (map.hasOwnProperty(entity)) {
            this._emitPartial(map[entity]);
            this._sectionStart = this._index + 1;
        }
    }
};

//parses legacy entities (without trailing semicolon)
Tokenizer.prototype._parseLegacyEntity = function() {
    var start = this._sectionStart + 1,
        limit = this._index - start;

    if (limit > 6) limit = 6; //the max length of legacy entities is 6

    while (limit >= 2) {
        //the min length of legacy entities is 2
        var entity = this._buffer.substr(start, limit);

        if (legacyMap.hasOwnProperty(entity)) {
            this._emitPartial(legacyMap[entity]);
            this._sectionStart += limit + 1;
            return;
        } else {
            limit--;
        }
    }
};

Tokenizer.prototype._stateInNamedEntity = function(c) {
    if (c === ";") {
        this._parseNamedEntityStrict();
        if (this._sectionStart + 1 < this._index && !this._xmlMode) {
            this._parseLegacyEntity();
        }
        this._state = this._baseState;
    } else if (
        (c < "a" || c > "z") &&
        (c < "A" || c > "Z") &&
        (c < "0" || c > "9")
    ) {
        if (this._xmlMode);
        else if (this._sectionStart + 1 === this._index);
        else if (this._baseState !== TEXT) {
            if (c !== "=") {
                this._parseNamedEntityStrict();
            }
        } else {
            this._parseLegacyEntity();
        }

        this._state = this._baseState;
        this._index--;
    }
};

Tokenizer.prototype._decodeNumericEntity = function(offset, base) {
    var sectionStart = this._sectionStart + offset;

    if (sectionStart !== this._index) {
        //parse entity
        var entity = this._buffer.substring(sectionStart, this._index);
        var parsed = parseInt(entity, base);

        this._emitPartial(decodeCodePoint(parsed));
        this._sectionStart = this._index;
    } else {
        this._sectionStart--;
    }

    this._state = this._baseState;
};

Tokenizer.prototype._stateInNumericEntity = function(c) {
    if (c === ";") {
        this._decodeNumericEntity(2, 10);
        this._sectionStart++;
    } else if (c < "0" || c > "9") {
        if (!this._xmlMode) {
            this._decodeNumericEntity(2, 10);
        } else {
            this._state = this._baseState;
        }
        this._index--;
    }
};

Tokenizer.prototype._stateInHexEntity = function(c) {
    if (c === ";") {
        this._decodeNumericEntity(3, 16);
        this._sectionStart++;
    } else if (
        (c < "a" || c > "f") &&
        (c < "A" || c > "F") &&
        (c < "0" || c > "9")
    ) {
        if (!this._xmlMode) {
            this._decodeNumericEntity(3, 16);
        } else {
            this._state = this._baseState;
        }
        this._index--;
    }
};

Tokenizer.prototype._cleanup = function() {
    if (this._sectionStart < 0) {
        this._buffer = "";
        this._bufferOffset += this._index;
        this._index = 0;
    } else if (this._running) {
        if (this._state === TEXT) {
            if (this._sectionStart !== this._index) {
                this._cbs.ontext(this._buffer.substr(this._sectionStart));
            }
            this._buffer = "";
            this._bufferOffset += this._index;
            this._index = 0;
        } else if (this._sectionStart === this._index) {
            //the section just started
            this._buffer = "";
            this._bufferOffset += this._index;
            this._index = 0;
        } else {
            //remove everything unnecessary
            this._buffer = this._buffer.substr(this._sectionStart);
            this._index -= this._sectionStart;
            this._bufferOffset += this._sectionStart;
        }

        this._sectionStart = 0;
    }
};

//TODO make events conditional
Tokenizer.prototype.write = function(chunk) {
    if (this._ended) this._cbs.onerror(Error(".write() after done!"));

    this._buffer += chunk;
    this._parse();
};

Tokenizer.prototype._parse = function() {
    while (this._index < this._buffer.length && this._running) {
        var c = this._buffer.charAt(this._index);
        if (this._state === TEXT) {
            this._stateText(c);
        } else if (this._state === BEFORE_TAG_NAME) {
            this._stateBeforeTagName(c);
        } else if (this._state === IN_TAG_NAME) {
            this._stateInTagName(c);
        } else if (this._state === BEFORE_CLOSING_TAG_NAME) {
            this._stateBeforeCloseingTagName(c);
        } else if (this._state === IN_CLOSING_TAG_NAME) {
            this._stateInCloseingTagName(c);
        } else if (this._state === AFTER_CLOSING_TAG_NAME) {
            this._stateAfterCloseingTagName(c);
        } else if (this._state === IN_SELF_CLOSING_TAG) {
            this._stateInSelfClosingTag(c);
        } else if (this._state === BEFORE_ATTRIBUTE_NAME) {

        /*
		*	attributes
		*/
            this._stateBeforeAttributeName(c);
        } else if (this._state === IN_ATTRIBUTE_NAME) {
            this._stateInAttributeName(c);
        } else if (this._state === AFTER_ATTRIBUTE_NAME) {
            this._stateAfterAttributeName(c);
        } else if (this._state === BEFORE_ATTRIBUTE_VALUE) {
            this._stateBeforeAttributeValue(c);
        } else if (this._state === IN_ATTRIBUTE_VALUE_DQ) {
            this._stateInAttributeValueDoubleQuotes(c);
        } else if (this._state === IN_ATTRIBUTE_VALUE_SQ) {
            this._stateInAttributeValueSingleQuotes(c);
        } else if (this._state === IN_ATTRIBUTE_VALUE_NQ) {
            this._stateInAttributeValueNoQuotes(c);
        } else if (this._state === BEFORE_DECLARATION) {

        /*
		*	declarations
		*/
            this._stateBeforeDeclaration(c);
        } else if (this._state === IN_DECLARATION) {
            this._stateInDeclaration(c);
        } else if (this._state === IN_PROCESSING_INSTRUCTION) {

        /*
		*	processing instructions
		*/
            this._stateInProcessingInstruction(c);
        } else if (this._state === BEFORE_COMMENT) {

        /*
		*	comments
		*/
            this._stateBeforeComment(c);
        } else if (this._state === IN_COMMENT) {
            this._stateInComment(c);
        } else if (this._state === AFTER_COMMENT_1) {
            this._stateAfterComment1(c);
        } else if (this._state === AFTER_COMMENT_2) {
            this._stateAfterComment2(c);
        } else if (this._state === BEFORE_CDATA_1) {

        /*
		*	cdata
		*/
            this._stateBeforeCdata1(c);
        } else if (this._state === BEFORE_CDATA_2) {
            this._stateBeforeCdata2(c);
        } else if (this._state === BEFORE_CDATA_3) {
            this._stateBeforeCdata3(c);
        } else if (this._state === BEFORE_CDATA_4) {
            this._stateBeforeCdata4(c);
        } else if (this._state === BEFORE_CDATA_5) {
            this._stateBeforeCdata5(c);
        } else if (this._state === BEFORE_CDATA_6) {
            this._stateBeforeCdata6(c);
        } else if (this._state === IN_CDATA) {
            this._stateInCdata(c);
        } else if (this._state === AFTER_CDATA_1) {
            this._stateAfterCdata1(c);
        } else if (this._state === AFTER_CDATA_2) {
            this._stateAfterCdata2(c);
        } else if (this._state === BEFORE_SPECIAL) {

        /*
		* special tags
		*/
            this._stateBeforeSpecial(c);
        } else if (this._state === BEFORE_SPECIAL_END) {
            this._stateBeforeSpecialEnd(c);
        } else if (this._state === BEFORE_SCRIPT_1) {

        /*
		* script
		*/
            this._stateBeforeScript1(c);
        } else if (this._state === BEFORE_SCRIPT_2) {
            this._stateBeforeScript2(c);
        } else if (this._state === BEFORE_SCRIPT_3) {
            this._stateBeforeScript3(c);
        } else if (this._state === BEFORE_SCRIPT_4) {
            this._stateBeforeScript4(c);
        } else if (this._state === BEFORE_SCRIPT_5) {
            this._stateBeforeScript5(c);
        } else if (this._state === AFTER_SCRIPT_1) {
            this._stateAfterScript1(c);
        } else if (this._state === AFTER_SCRIPT_2) {
            this._stateAfterScript2(c);
        } else if (this._state === AFTER_SCRIPT_3) {
            this._stateAfterScript3(c);
        } else if (this._state === AFTER_SCRIPT_4) {
            this._stateAfterScript4(c);
        } else if (this._state === AFTER_SCRIPT_5) {
            this._stateAfterScript5(c);
        } else if (this._state === BEFORE_STYLE_1) {

        /*
		* style
		*/
            this._stateBeforeStyle1(c);
        } else if (this._state === BEFORE_STYLE_2) {
            this._stateBeforeStyle2(c);
        } else if (this._state === BEFORE_STYLE_3) {
            this._stateBeforeStyle3(c);
        } else if (this._state === BEFORE_STYLE_4) {
            this._stateBeforeStyle4(c);
        } else if (this._state === AFTER_STYLE_1) {
            this._stateAfterStyle1(c);
        } else if (this._state === AFTER_STYLE_2) {
            this._stateAfterStyle2(c);
        } else if (this._state === AFTER_STYLE_3) {
            this._stateAfterStyle3(c);
        } else if (this._state === AFTER_STYLE_4) {
            this._stateAfterStyle4(c);
        } else if (this._state === BEFORE_ENTITY) {

        /*
		* entities
		*/
            this._stateBeforeEntity(c);
        } else if (this._state === BEFORE_NUMERIC_ENTITY) {
            this._stateBeforeNumericEntity(c);
        } else if (this._state === IN_NAMED_ENTITY) {
            this._stateInNamedEntity(c);
        } else if (this._state === IN_NUMERIC_ENTITY) {
            this._stateInNumericEntity(c);
        } else if (this._state === IN_HEX_ENTITY) {
            this._stateInHexEntity(c);
        } else {
            this._cbs.onerror(Error("unknown _state"), this._state);
        }

        this._index++;
    }

    this._cleanup();
};

Tokenizer.prototype.pause = function() {
    this._running = false;
};
Tokenizer.prototype.resume = function() {
    this._running = true;

    if (this._index < this._buffer.length) {
        this._parse();
    }
    if (this._ended) {
        this._finish();
    }
};

Tokenizer.prototype.end = function(chunk) {
    if (this._ended) this._cbs.onerror(Error(".end() after done!"));
    if (chunk) this.write(chunk);

    this._ended = true;

    if (this._running) this._finish();
};

Tokenizer.prototype._finish = function() {
    //if there is remaining data, emit it in a reasonable way
    if (this._sectionStart < this._index) {
        this._handleTrailingData();
    }

    this._cbs.onend();
};

Tokenizer.prototype._handleTrailingData = function() {
    var data = this._buffer.substr(this._sectionStart);

    if (
        this._state === IN_CDATA ||
        this._state === AFTER_CDATA_1 ||
        this._state === AFTER_CDATA_2
    ) {
        this._cbs.oncdata(data);
    } else if (
        this._state === IN_COMMENT ||
        this._state === AFTER_COMMENT_1 ||
        this._state === AFTER_COMMENT_2
    ) {
        this._cbs.oncomment(data);
    } else if (this._state === IN_NAMED_ENTITY && !this._xmlMode) {
        this._parseLegacyEntity();
        if (this._sectionStart < this._index) {
            this._state = this._baseState;
            this._handleTrailingData();
        }
    } else if (this._state === IN_NUMERIC_ENTITY && !this._xmlMode) {
        this._decodeNumericEntity(2, 10);
        if (this._sectionStart < this._index) {
            this._state = this._baseState;
            this._handleTrailingData();
        }
    } else if (this._state === IN_HEX_ENTITY && !this._xmlMode) {
        this._decodeNumericEntity(3, 16);
        if (this._sectionStart < this._index) {
            this._state = this._baseState;
            this._handleTrailingData();
        }
    } else if (
        this._state !== IN_TAG_NAME &&
        this._state !== BEFORE_ATTRIBUTE_NAME &&
        this._state !== BEFORE_ATTRIBUTE_VALUE &&
        this._state !== AFTER_ATTRIBUTE_NAME &&
        this._state !== IN_ATTRIBUTE_NAME &&
        this._state !== IN_ATTRIBUTE_VALUE_SQ &&
        this._state !== IN_ATTRIBUTE_VALUE_DQ &&
        this._state !== IN_ATTRIBUTE_VALUE_NQ &&
        this._state !== IN_CLOSING_TAG_NAME
    ) {
        this._cbs.ontext(data);
    }
    //else, ignore remaining data
    //TODO add a way to remove current tag
};

Tokenizer.prototype.reset = function() {
    Tokenizer.call(
        this,
        { xmlMode: this._xmlMode, decodeEntities: this._decodeEntities },
        this._cbs
    );
};

Tokenizer.prototype.getAbsoluteIndex = function() {
    return this._bufferOffset + this._index;
};

Tokenizer.prototype._getSection = function() {
    return this._buffer.substring(this._sectionStart, this._index);
};

Tokenizer.prototype._emitToken = function(name) {
    this._cbs[name](this._getSection());
    this._sectionStart = -1;
};

Tokenizer.prototype._emitPartial = function(value) {
    if (this._baseState !== TEXT) {
        this._cbs.onattribdata(value); //TODO implement the new event
    } else {
        this._cbs.ontext(value);
    }
};


/***/ }),

/***/ "./node_modules/htmlparser2/lib/WritableStream.js":
/*!********************************************************!*\
  !*** ./node_modules/htmlparser2/lib/WritableStream.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = Stream;

var Parser = __webpack_require__(/*! ./Parser.js */ "./node_modules/htmlparser2/lib/Parser.js");
var WritableStream = __webpack_require__(/*! readable-stream */ 2).Writable;
var StringDecoder = __webpack_require__(/*! string_decoder */ "./node_modules/node-libs-browser/node_modules/string_decoder/lib/string_decoder.js").StringDecoder;
var Buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js").Buffer;

function Stream(cbs, options) {
    var parser = (this._parser = new Parser(cbs, options));
    var decoder = (this._decoder = new StringDecoder());

    WritableStream.call(this, { decodeStrings: false });

    this.once("finish", function() {
        parser.end(decoder.end());
    });
}

__webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js")(Stream, WritableStream);

Stream.prototype._write = function(chunk, encoding, cb) {
    if (chunk instanceof Buffer) chunk = this._decoder.write(chunk);
    this._parser.write(chunk);
    cb();
};


/***/ }),

/***/ "./node_modules/htmlparser2/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/htmlparser2/lib/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Parser = __webpack_require__(/*! ./Parser.js */ "./node_modules/htmlparser2/lib/Parser.js");
var DomHandler = __webpack_require__(/*! domhandler */ "./node_modules/htmlparser2/node_modules/domhandler/index.js");

function defineProp(name, value) {
    delete module.exports[name];
    module.exports[name] = value;
    return value;
}

module.exports = {
    Parser: Parser,
    Tokenizer: __webpack_require__(/*! ./Tokenizer.js */ "./node_modules/htmlparser2/lib/Tokenizer.js"),
    ElementType: __webpack_require__(/*! domelementtype */ "./node_modules/htmlparser2/node_modules/domelementtype/index.js"),
    DomHandler: DomHandler,
    get FeedHandler() {
        return defineProp("FeedHandler", __webpack_require__(/*! ./FeedHandler.js */ "./node_modules/htmlparser2/lib/FeedHandler.js"));
    },
    get Stream() {
        return defineProp("Stream", __webpack_require__(/*! ./Stream.js */ "./node_modules/htmlparser2/lib/Stream.js"));
    },
    get WritableStream() {
        return defineProp("WritableStream", __webpack_require__(/*! ./WritableStream.js */ "./node_modules/htmlparser2/lib/WritableStream.js"));
    },
    get ProxyHandler() {
        return defineProp("ProxyHandler", __webpack_require__(/*! ./ProxyHandler.js */ "./node_modules/htmlparser2/lib/ProxyHandler.js"));
    },
    get DomUtils() {
        return defineProp("DomUtils", __webpack_require__(/*! domutils */ "./node_modules/domutils/index.js"));
    },
    get CollectingHandler() {
        return defineProp(
            "CollectingHandler",
            __webpack_require__(/*! ./CollectingHandler.js */ "./node_modules/htmlparser2/lib/CollectingHandler.js")
        );
    },
    // For legacy support
    DefaultHandler: DomHandler,
    get RssHandler() {
        return defineProp("RssHandler", this.FeedHandler);
    },
    //helper methods
    parseDOM: function(data, options) {
        var handler = new DomHandler(options);
        new Parser(handler, options).end(data);
        return handler.dom;
    },
    parseFeed: function(feed, options) {
        var handler = new module.exports.FeedHandler(options);
        new Parser(handler, options).end(feed);
        return handler.dom;
    },
    createDomStream: function(cb, options, elementCb) {
        var handler = new DomHandler(cb, options, elementCb);
        return new Parser(handler, options);
    },
    // List of all events that the parser emits
    EVENTS: {
        /* Format: eventname: number of arguments */
        attribute: 2,
        cdatastart: 0,
        cdataend: 0,
        text: 1,
        processinginstruction: 2,
        comment: 1,
        commentend: 0,
        closetag: 1,
        opentag: 2,
        opentagname: 1,
        error: 1,
        end: 0
    }
};


/***/ }),

/***/ "./node_modules/htmlparser2/node_modules/domelementtype/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/htmlparser2/node_modules/domelementtype/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//Types of elements found in the DOM
module.exports = {
	Text: "text", //Text
	Directive: "directive", //<? ... ?>
	Comment: "comment", //<!-- ... -->
	Script: "script", //<script> tags
	Style: "style", //<style> tags
	Tag: "tag", //Any tag
	CDATA: "cdata", //<![CDATA[ ... ]]>
	Doctype: "doctype",

	isTag: function(elem){
		return elem.type === "tag" || elem.type === "script" || elem.type === "style";
	}
};


/***/ }),

/***/ "./node_modules/htmlparser2/node_modules/domhandler/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/htmlparser2/node_modules/domhandler/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ElementType = __webpack_require__(/*! domelementtype */ "./node_modules/htmlparser2/node_modules/domelementtype/index.js");

var re_whitespace = /\s+/g;
var NodePrototype = __webpack_require__(/*! ./lib/node */ "./node_modules/htmlparser2/node_modules/domhandler/lib/node.js");
var ElementPrototype = __webpack_require__(/*! ./lib/element */ "./node_modules/htmlparser2/node_modules/domhandler/lib/element.js");

function DomHandler(callback, options, elementCB){
	if(typeof callback === "object"){
		elementCB = options;
		options = callback;
		callback = null;
	} else if(typeof options === "function"){
		elementCB = options;
		options = defaultOpts;
	}
	this._callback = callback;
	this._options = options || defaultOpts;
	this._elementCB = elementCB;
	this.dom = [];
	this._done = false;
	this._tagStack = [];
	this._parser = this._parser || null;
}

//default options
var defaultOpts = {
	normalizeWhitespace: false, //Replace all whitespace with single spaces
	withStartIndices: false, //Add startIndex properties to nodes
	withEndIndices: false, //Add endIndex properties to nodes
};

DomHandler.prototype.onparserinit = function(parser){
	this._parser = parser;
};

//Resets the handler back to starting state
DomHandler.prototype.onreset = function(){
	DomHandler.call(this, this._callback, this._options, this._elementCB);
};

//Signals the handler that parsing is done
DomHandler.prototype.onend = function(){
	if(this._done) return;
	this._done = true;
	this._parser = null;
	this._handleCallback(null);
};

DomHandler.prototype._handleCallback =
DomHandler.prototype.onerror = function(error){
	if(typeof this._callback === "function"){
		this._callback(error, this.dom);
	} else {
		if(error) throw error;
	}
};

DomHandler.prototype.onclosetag = function(){
	//if(this._tagStack.pop().name !== name) this._handleCallback(Error("Tagname didn't match!"));
	
	var elem = this._tagStack.pop();

	if(this._options.withEndIndices && elem){
		elem.endIndex = this._parser.endIndex;
	}

	if(this._elementCB) this._elementCB(elem);
};

DomHandler.prototype._createDomElement = function(properties){
	if (!this._options.withDomLvl1) return properties;

	var element;
	if (properties.type === "tag") {
		element = Object.create(ElementPrototype);
	} else {
		element = Object.create(NodePrototype);
	}

	for (var key in properties) {
		if (properties.hasOwnProperty(key)) {
			element[key] = properties[key];
		}
	}

	return element;
};

DomHandler.prototype._addDomElement = function(element){
	var parent = this._tagStack[this._tagStack.length - 1];
	var siblings = parent ? parent.children : this.dom;
	var previousSibling = siblings[siblings.length - 1];

	element.next = null;

	if(this._options.withStartIndices){
		element.startIndex = this._parser.startIndex;
	}
	if(this._options.withEndIndices){
		element.endIndex = this._parser.endIndex;
	}

	if(previousSibling){
		element.prev = previousSibling;
		previousSibling.next = element;
	} else {
		element.prev = null;
	}

	siblings.push(element);
	element.parent = parent || null;
};

DomHandler.prototype.onopentag = function(name, attribs){
	var properties = {
		type: name === "script" ? ElementType.Script : name === "style" ? ElementType.Style : ElementType.Tag,
		name: name,
		attribs: attribs,
		children: []
	};

	var element = this._createDomElement(properties);

	this._addDomElement(element);

	this._tagStack.push(element);
};

DomHandler.prototype.ontext = function(data){
	//the ignoreWhitespace is officially dropped, but for now,
	//it's an alias for normalizeWhitespace
	var normalize = this._options.normalizeWhitespace || this._options.ignoreWhitespace;

	var lastTag;

	if(!this._tagStack.length && this.dom.length && (lastTag = this.dom[this.dom.length-1]).type === ElementType.Text){
		if(normalize){
			lastTag.data = (lastTag.data + data).replace(re_whitespace, " ");
		} else {
			lastTag.data += data;
		}
	} else {
		if(
			this._tagStack.length &&
			(lastTag = this._tagStack[this._tagStack.length - 1]) &&
			(lastTag = lastTag.children[lastTag.children.length - 1]) &&
			lastTag.type === ElementType.Text
		){
			if(normalize){
				lastTag.data = (lastTag.data + data).replace(re_whitespace, " ");
			} else {
				lastTag.data += data;
			}
		} else {
			if(normalize){
				data = data.replace(re_whitespace, " ");
			}

			var element = this._createDomElement({
				data: data,
				type: ElementType.Text
			});

			this._addDomElement(element);
		}
	}
};

DomHandler.prototype.oncomment = function(data){
	var lastTag = this._tagStack[this._tagStack.length - 1];

	if(lastTag && lastTag.type === ElementType.Comment){
		lastTag.data += data;
		return;
	}

	var properties = {
		data: data,
		type: ElementType.Comment
	};

	var element = this._createDomElement(properties);

	this._addDomElement(element);
	this._tagStack.push(element);
};

DomHandler.prototype.oncdatastart = function(){
	var properties = {
		children: [{
			data: "",
			type: ElementType.Text
		}],
		type: ElementType.CDATA
	};

	var element = this._createDomElement(properties);

	this._addDomElement(element);
	this._tagStack.push(element);
};

DomHandler.prototype.oncommentend = DomHandler.prototype.oncdataend = function(){
	this._tagStack.pop();
};

DomHandler.prototype.onprocessinginstruction = function(name, data){
	var element = this._createDomElement({
		name: name,
		data: data,
		type: ElementType.Directive
	});

	this._addDomElement(element);
};

module.exports = DomHandler;


/***/ }),

/***/ "./node_modules/htmlparser2/node_modules/domhandler/lib/element.js":
/*!*************************************************************************!*\
  !*** ./node_modules/htmlparser2/node_modules/domhandler/lib/element.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// DOM-Level-1-compliant structure
var NodePrototype = __webpack_require__(/*! ./node */ "./node_modules/htmlparser2/node_modules/domhandler/lib/node.js");
var ElementPrototype = module.exports = Object.create(NodePrototype);

var domLvl1 = {
	tagName: "name"
};

Object.keys(domLvl1).forEach(function(key) {
	var shorthand = domLvl1[key];
	Object.defineProperty(ElementPrototype, key, {
		get: function() {
			return this[shorthand] || null;
		},
		set: function(val) {
			this[shorthand] = val;
			return val;
		}
	});
});


/***/ }),

/***/ "./node_modules/htmlparser2/node_modules/domhandler/lib/node.js":
/*!**********************************************************************!*\
  !*** ./node_modules/htmlparser2/node_modules/domhandler/lib/node.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// This object will be used as the prototype for Nodes when creating a
// DOM-Level-1-compliant structure.
var NodePrototype = module.exports = {
	get firstChild() {
		var children = this.children;
		return children && children[0] || null;
	},
	get lastChild() {
		var children = this.children;
		return children && children[children.length - 1] || null;
	},
	get nodeType() {
		return nodeTypes[this.type] || nodeTypes.element;
	}
};

var domLvl1 = {
	tagName: "name",
	childNodes: "children",
	parentNode: "parent",
	previousSibling: "prev",
	nextSibling: "next",
	nodeValue: "data"
};

var nodeTypes = {
	element: 1,
	text: 3,
	cdata: 4,
	comment: 8
};

Object.keys(domLvl1).forEach(function(key) {
	var shorthand = domLvl1[key];
	Object.defineProperty(NodePrototype, key, {
		get: function() {
			return this[shorthand] || null;
		},
		set: function(val) {
			this[shorthand] = val;
			return val;
		}
	});
});


/***/ }),

/***/ "./node_modules/htmlparser2/node_modules/entities/lib/decode_codepoint.js":
/*!********************************************************************************!*\
  !*** ./node_modules/htmlparser2/node_modules/entities/lib/decode_codepoint.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var decodeMap = __webpack_require__(/*! ../maps/decode.json */ "./node_modules/htmlparser2/node_modules/entities/maps/decode.json");

module.exports = decodeCodePoint;

// modified version of https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
function decodeCodePoint(codePoint) {
    if ((codePoint >= 0xd800 && codePoint <= 0xdfff) || codePoint > 0x10ffff) {
        return "\uFFFD";
    }

    if (codePoint in decodeMap) {
        codePoint = decodeMap[codePoint];
    }

    var output = "";

    if (codePoint > 0xffff) {
        codePoint -= 0x10000;
        output += String.fromCharCode(((codePoint >>> 10) & 0x3ff) | 0xd800);
        codePoint = 0xdc00 | (codePoint & 0x3ff);
    }

    output += String.fromCharCode(codePoint);
    return output;
}


/***/ }),

/***/ "./node_modules/htmlparser2/node_modules/entities/maps/decode.json":
/*!*************************************************************************!*\
  !*** ./node_modules/htmlparser2/node_modules/entities/maps/decode.json ***!
  \*************************************************************************/
/*! exports provided: 0, 128, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 142, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 158, 159, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"0\":65533,\"128\":8364,\"130\":8218,\"131\":402,\"132\":8222,\"133\":8230,\"134\":8224,\"135\":8225,\"136\":710,\"137\":8240,\"138\":352,\"139\":8249,\"140\":338,\"142\":381,\"145\":8216,\"146\":8217,\"147\":8220,\"148\":8221,\"149\":8226,\"150\":8211,\"151\":8212,\"152\":732,\"153\":8482,\"154\":353,\"155\":8250,\"156\":339,\"158\":382,\"159\":376}");

/***/ }),

/***/ "./node_modules/htmlparser2/node_modules/entities/maps/entities.json":
/*!***************************************************************************!*\
  !*** ./node_modules/htmlparser2/node_modules/entities/maps/entities.json ***!
  \***************************************************************************/
/*! exports provided: Aacute, aacute, Abreve, abreve, ac, acd, acE, Acirc, acirc, acute, Acy, acy, AElig, aelig, af, Afr, afr, Agrave, agrave, alefsym, aleph, Alpha, alpha, Amacr, amacr, amalg, amp, AMP, andand, And, and, andd, andslope, andv, ang, ange, angle, angmsdaa, angmsdab, angmsdac, angmsdad, angmsdae, angmsdaf, angmsdag, angmsdah, angmsd, angrt, angrtvb, angrtvbd, angsph, angst, angzarr, Aogon, aogon, Aopf, aopf, apacir, ap, apE, ape, apid, apos, ApplyFunction, approx, approxeq, Aring, aring, Ascr, ascr, Assign, ast, asymp, asympeq, Atilde, atilde, Auml, auml, awconint, awint, backcong, backepsilon, backprime, backsim, backsimeq, Backslash, Barv, barvee, barwed, Barwed, barwedge, bbrk, bbrktbrk, bcong, Bcy, bcy, bdquo, becaus, because, Because, bemptyv, bepsi, bernou, Bernoullis, Beta, beta, beth, between, Bfr, bfr, bigcap, bigcirc, bigcup, bigodot, bigoplus, bigotimes, bigsqcup, bigstar, bigtriangledown, bigtriangleup, biguplus, bigvee, bigwedge, bkarow, blacklozenge, blacksquare, blacktriangle, blacktriangledown, blacktriangleleft, blacktriangleright, blank, blk12, blk14, blk34, block, bne, bnequiv, bNot, bnot, Bopf, bopf, bot, bottom, bowtie, boxbox, boxdl, boxdL, boxDl, boxDL, boxdr, boxdR, boxDr, boxDR, boxh, boxH, boxhd, boxHd, boxhD, boxHD, boxhu, boxHu, boxhU, boxHU, boxminus, boxplus, boxtimes, boxul, boxuL, boxUl, boxUL, boxur, boxuR, boxUr, boxUR, boxv, boxV, boxvh, boxvH, boxVh, boxVH, boxvl, boxvL, boxVl, boxVL, boxvr, boxvR, boxVr, boxVR, bprime, breve, Breve, brvbar, bscr, Bscr, bsemi, bsim, bsime, bsolb, bsol, bsolhsub, bull, bullet, bump, bumpE, bumpe, Bumpeq, bumpeq, Cacute, cacute, capand, capbrcup, capcap, cap, Cap, capcup, capdot, CapitalDifferentialD, caps, caret, caron, Cayleys, ccaps, Ccaron, ccaron, Ccedil, ccedil, Ccirc, ccirc, Cconint, ccups, ccupssm, Cdot, cdot, cedil, Cedilla, cemptyv, cent, centerdot, CenterDot, cfr, Cfr, CHcy, chcy, check, checkmark, Chi, chi, circ, circeq, circlearrowleft, circlearrowright, circledast, circledcirc, circleddash, CircleDot, circledR, circledS, CircleMinus, CirclePlus, CircleTimes, cir, cirE, cire, cirfnint, cirmid, cirscir, ClockwiseContourIntegral, CloseCurlyDoubleQuote, CloseCurlyQuote, clubs, clubsuit, colon, Colon, Colone, colone, coloneq, comma, commat, comp, compfn, complement, complexes, cong, congdot, Congruent, conint, Conint, ContourIntegral, copf, Copf, coprod, Coproduct, copy, COPY, copysr, CounterClockwiseContourIntegral, crarr, cross, Cross, Cscr, cscr, csub, csube, csup, csupe, ctdot, cudarrl, cudarrr, cuepr, cuesc, cularr, cularrp, cupbrcap, cupcap, CupCap, cup, Cup, cupcup, cupdot, cupor, cups, curarr, curarrm, curlyeqprec, curlyeqsucc, curlyvee, curlywedge, curren, curvearrowleft, curvearrowright, cuvee, cuwed, cwconint, cwint, cylcty, dagger, Dagger, daleth, darr, Darr, dArr, dash, Dashv, dashv, dbkarow, dblac, Dcaron, dcaron, Dcy, dcy, ddagger, ddarr, DD, dd, DDotrahd, ddotseq, deg, Del, Delta, delta, demptyv, dfisht, Dfr, dfr, dHar, dharl, dharr, DiacriticalAcute, DiacriticalDot, DiacriticalDoubleAcute, DiacriticalGrave, DiacriticalTilde, diam, diamond, Diamond, diamondsuit, diams, die, DifferentialD, digamma, disin, div, divide, divideontimes, divonx, DJcy, djcy, dlcorn, dlcrop, dollar, Dopf, dopf, Dot, dot, DotDot, doteq, doteqdot, DotEqual, dotminus, dotplus, dotsquare, doublebarwedge, DoubleContourIntegral, DoubleDot, DoubleDownArrow, DoubleLeftArrow, DoubleLeftRightArrow, DoubleLeftTee, DoubleLongLeftArrow, DoubleLongLeftRightArrow, DoubleLongRightArrow, DoubleRightArrow, DoubleRightTee, DoubleUpArrow, DoubleUpDownArrow, DoubleVerticalBar, DownArrowBar, downarrow, DownArrow, Downarrow, DownArrowUpArrow, DownBreve, downdownarrows, downharpoonleft, downharpoonright, DownLeftRightVector, DownLeftTeeVector, DownLeftVectorBar, DownLeftVector, DownRightTeeVector, DownRightVectorBar, DownRightVector, DownTeeArrow, DownTee, drbkarow, drcorn, drcrop, Dscr, dscr, DScy, dscy, dsol, Dstrok, dstrok, dtdot, dtri, dtrif, duarr, duhar, dwangle, DZcy, dzcy, dzigrarr, Eacute, eacute, easter, Ecaron, ecaron, Ecirc, ecirc, ecir, ecolon, Ecy, ecy, eDDot, Edot, edot, eDot, ee, efDot, Efr, efr, eg, Egrave, egrave, egs, egsdot, el, Element, elinters, ell, els, elsdot, Emacr, emacr, empty, emptyset, EmptySmallSquare, emptyv, EmptyVerySmallSquare, emsp13, emsp14, emsp, ENG, eng, ensp, Eogon, eogon, Eopf, eopf, epar, eparsl, eplus, epsi, Epsilon, epsilon, epsiv, eqcirc, eqcolon, eqsim, eqslantgtr, eqslantless, Equal, equals, EqualTilde, equest, Equilibrium, equiv, equivDD, eqvparsl, erarr, erDot, escr, Escr, esdot, Esim, esim, Eta, eta, ETH, eth, Euml, euml, euro, excl, exist, Exists, expectation, exponentiale, ExponentialE, fallingdotseq, Fcy, fcy, female, ffilig, fflig, ffllig, Ffr, ffr, filig, FilledSmallSquare, FilledVerySmallSquare, fjlig, flat, fllig, fltns, fnof, Fopf, fopf, forall, ForAll, fork, forkv, Fouriertrf, fpartint, frac12, frac13, frac14, frac15, frac16, frac18, frac23, frac25, frac34, frac35, frac38, frac45, frac56, frac58, frac78, frasl, frown, fscr, Fscr, gacute, Gamma, gamma, Gammad, gammad, gap, Gbreve, gbreve, Gcedil, Gcirc, gcirc, Gcy, gcy, Gdot, gdot, ge, gE, gEl, gel, geq, geqq, geqslant, gescc, ges, gesdot, gesdoto, gesdotol, gesl, gesles, Gfr, gfr, gg, Gg, ggg, gimel, GJcy, gjcy, gla, gl, glE, glj, gnap, gnapprox, gne, gnE, gneq, gneqq, gnsim, Gopf, gopf, grave, GreaterEqual, GreaterEqualLess, GreaterFullEqual, GreaterGreater, GreaterLess, GreaterSlantEqual, GreaterTilde, Gscr, gscr, gsim, gsime, gsiml, gtcc, gtcir, gt, GT, Gt, gtdot, gtlPar, gtquest, gtrapprox, gtrarr, gtrdot, gtreqless, gtreqqless, gtrless, gtrsim, gvertneqq, gvnE, Hacek, hairsp, half, hamilt, HARDcy, hardcy, harrcir, harr, hArr, harrw, Hat, hbar, Hcirc, hcirc, hearts, heartsuit, hellip, hercon, hfr, Hfr, HilbertSpace, hksearow, hkswarow, hoarr, homtht, hookleftarrow, hookrightarrow, hopf, Hopf, horbar, HorizontalLine, hscr, Hscr, hslash, Hstrok, hstrok, HumpDownHump, HumpEqual, hybull, hyphen, Iacute, iacute, ic, Icirc, icirc, Icy, icy, Idot, IEcy, iecy, iexcl, iff, ifr, Ifr, Igrave, igrave, ii, iiiint, iiint, iinfin, iiota, IJlig, ijlig, Imacr, imacr, image, ImaginaryI, imagline, imagpart, imath, Im, imof, imped, Implies, incare, in, infin, infintie, inodot, intcal, int, Int, integers, Integral, intercal, Intersection, intlarhk, intprod, InvisibleComma, InvisibleTimes, IOcy, iocy, Iogon, iogon, Iopf, iopf, Iota, iota, iprod, iquest, iscr, Iscr, isin, isindot, isinE, isins, isinsv, isinv, it, Itilde, itilde, Iukcy, iukcy, Iuml, iuml, Jcirc, jcirc, Jcy, jcy, Jfr, jfr, jmath, Jopf, jopf, Jscr, jscr, Jsercy, jsercy, Jukcy, jukcy, Kappa, kappa, kappav, Kcedil, kcedil, Kcy, kcy, Kfr, kfr, kgreen, KHcy, khcy, KJcy, kjcy, Kopf, kopf, Kscr, kscr, lAarr, Lacute, lacute, laemptyv, lagran, Lambda, lambda, lang, Lang, langd, langle, lap, Laplacetrf, laquo, larrb, larrbfs, larr, Larr, lArr, larrfs, larrhk, larrlp, larrpl, larrsim, larrtl, latail, lAtail, lat, late, lates, lbarr, lBarr, lbbrk, lbrace, lbrack, lbrke, lbrksld, lbrkslu, Lcaron, lcaron, Lcedil, lcedil, lceil, lcub, Lcy, lcy, ldca, ldquo, ldquor, ldrdhar, ldrushar, ldsh, le, lE, LeftAngleBracket, LeftArrowBar, leftarrow, LeftArrow, Leftarrow, LeftArrowRightArrow, leftarrowtail, LeftCeiling, LeftDoubleBracket, LeftDownTeeVector, LeftDownVectorBar, LeftDownVector, LeftFloor, leftharpoondown, leftharpoonup, leftleftarrows, leftrightarrow, LeftRightArrow, Leftrightarrow, leftrightarrows, leftrightharpoons, leftrightsquigarrow, LeftRightVector, LeftTeeArrow, LeftTee, LeftTeeVector, leftthreetimes, LeftTriangleBar, LeftTriangle, LeftTriangleEqual, LeftUpDownVector, LeftUpTeeVector, LeftUpVectorBar, LeftUpVector, LeftVectorBar, LeftVector, lEg, leg, leq, leqq, leqslant, lescc, les, lesdot, lesdoto, lesdotor, lesg, lesges, lessapprox, lessdot, lesseqgtr, lesseqqgtr, LessEqualGreater, LessFullEqual, LessGreater, lessgtr, LessLess, lesssim, LessSlantEqual, LessTilde, lfisht, lfloor, Lfr, lfr, lg, lgE, lHar, lhard, lharu, lharul, lhblk, LJcy, ljcy, llarr, ll, Ll, llcorner, Lleftarrow, llhard, lltri, Lmidot, lmidot, lmoustache, lmoust, lnap, lnapprox, lne, lnE, lneq, lneqq, lnsim, loang, loarr, lobrk, longleftarrow, LongLeftArrow, Longleftarrow, longleftrightarrow, LongLeftRightArrow, Longleftrightarrow, longmapsto, longrightarrow, LongRightArrow, Longrightarrow, looparrowleft, looparrowright, lopar, Lopf, lopf, loplus, lotimes, lowast, lowbar, LowerLeftArrow, LowerRightArrow, loz, lozenge, lozf, lpar, lparlt, lrarr, lrcorner, lrhar, lrhard, lrm, lrtri, lsaquo, lscr, Lscr, lsh, Lsh, lsim, lsime, lsimg, lsqb, lsquo, lsquor, Lstrok, lstrok, ltcc, ltcir, lt, LT, Lt, ltdot, lthree, ltimes, ltlarr, ltquest, ltri, ltrie, ltrif, ltrPar, lurdshar, luruhar, lvertneqq, lvnE, macr, male, malt, maltese, Map, map, mapsto, mapstodown, mapstoleft, mapstoup, marker, mcomma, Mcy, mcy, mdash, mDDot, measuredangle, MediumSpace, Mellintrf, Mfr, mfr, mho, micro, midast, midcir, mid, middot, minusb, minus, minusd, minusdu, MinusPlus, mlcp, mldr, mnplus, models, Mopf, mopf, mp, mscr, Mscr, mstpos, Mu, mu, multimap, mumap, nabla, Nacute, nacute, nang, nap, napE, napid, napos, napprox, natural, naturals, natur, nbsp, nbump, nbumpe, ncap, Ncaron, ncaron, Ncedil, ncedil, ncong, ncongdot, ncup, Ncy, ncy, ndash, nearhk, nearr, neArr, nearrow, ne, nedot, NegativeMediumSpace, NegativeThickSpace, NegativeThinSpace, NegativeVeryThinSpace, nequiv, nesear, nesim, NestedGreaterGreater, NestedLessLess, NewLine, nexist, nexists, Nfr, nfr, ngE, nge, ngeq, ngeqq, ngeqslant, nges, nGg, ngsim, nGt, ngt, ngtr, nGtv, nharr, nhArr, nhpar, ni, nis, nisd, niv, NJcy, njcy, nlarr, nlArr, nldr, nlE, nle, nleftarrow, nLeftarrow, nleftrightarrow, nLeftrightarrow, nleq, nleqq, nleqslant, nles, nless, nLl, nlsim, nLt, nlt, nltri, nltrie, nLtv, nmid, NoBreak, NonBreakingSpace, nopf, Nopf, Not, not, NotCongruent, NotCupCap, NotDoubleVerticalBar, NotElement, NotEqual, NotEqualTilde, NotExists, NotGreater, NotGreaterEqual, NotGreaterFullEqual, NotGreaterGreater, NotGreaterLess, NotGreaterSlantEqual, NotGreaterTilde, NotHumpDownHump, NotHumpEqual, notin, notindot, notinE, notinva, notinvb, notinvc, NotLeftTriangleBar, NotLeftTriangle, NotLeftTriangleEqual, NotLess, NotLessEqual, NotLessGreater, NotLessLess, NotLessSlantEqual, NotLessTilde, NotNestedGreaterGreater, NotNestedLessLess, notni, notniva, notnivb, notnivc, NotPrecedes, NotPrecedesEqual, NotPrecedesSlantEqual, NotReverseElement, NotRightTriangleBar, NotRightTriangle, NotRightTriangleEqual, NotSquareSubset, NotSquareSubsetEqual, NotSquareSuperset, NotSquareSupersetEqual, NotSubset, NotSubsetEqual, NotSucceeds, NotSucceedsEqual, NotSucceedsSlantEqual, NotSucceedsTilde, NotSuperset, NotSupersetEqual, NotTilde, NotTildeEqual, NotTildeFullEqual, NotTildeTilde, NotVerticalBar, nparallel, npar, nparsl, npart, npolint, npr, nprcue, nprec, npreceq, npre, nrarrc, nrarr, nrArr, nrarrw, nrightarrow, nRightarrow, nrtri, nrtrie, nsc, nsccue, nsce, Nscr, nscr, nshortmid, nshortparallel, nsim, nsime, nsimeq, nsmid, nspar, nsqsube, nsqsupe, nsub, nsubE, nsube, nsubset, nsubseteq, nsubseteqq, nsucc, nsucceq, nsup, nsupE, nsupe, nsupset, nsupseteq, nsupseteqq, ntgl, Ntilde, ntilde, ntlg, ntriangleleft, ntrianglelefteq, ntriangleright, ntrianglerighteq, Nu, nu, num, numero, numsp, nvap, nvdash, nvDash, nVdash, nVDash, nvge, nvgt, nvHarr, nvinfin, nvlArr, nvle, nvlt, nvltrie, nvrArr, nvrtrie, nvsim, nwarhk, nwarr, nwArr, nwarrow, nwnear, Oacute, oacute, oast, Ocirc, ocirc, ocir, Ocy, ocy, odash, Odblac, odblac, odiv, odot, odsold, OElig, oelig, ofcir, Ofr, ofr, ogon, Ograve, ograve, ogt, ohbar, ohm, oint, olarr, olcir, olcross, oline, olt, Omacr, omacr, Omega, omega, Omicron, omicron, omid, ominus, Oopf, oopf, opar, OpenCurlyDoubleQuote, OpenCurlyQuote, operp, oplus, orarr, Or, or, ord, order, orderof, ordf, ordm, origof, oror, orslope, orv, oS, Oscr, oscr, Oslash, oslash, osol, Otilde, otilde, otimesas, Otimes, otimes, Ouml, ouml, ovbar, OverBar, OverBrace, OverBracket, OverParenthesis, para, parallel, par, parsim, parsl, part, PartialD, Pcy, pcy, percnt, period, permil, perp, pertenk, Pfr, pfr, Phi, phi, phiv, phmmat, phone, Pi, pi, pitchfork, piv, planck, planckh, plankv, plusacir, plusb, pluscir, plus, plusdo, plusdu, pluse, PlusMinus, plusmn, plussim, plustwo, pm, Poincareplane, pointint, popf, Popf, pound, prap, Pr, pr, prcue, precapprox, prec, preccurlyeq, Precedes, PrecedesEqual, PrecedesSlantEqual, PrecedesTilde, preceq, precnapprox, precneqq, precnsim, pre, prE, precsim, prime, Prime, primes, prnap, prnE, prnsim, prod, Product, profalar, profline, profsurf, prop, Proportional, Proportion, propto, prsim, prurel, Pscr, pscr, Psi, psi, puncsp, Qfr, qfr, qint, qopf, Qopf, qprime, Qscr, qscr, quaternions, quatint, quest, questeq, quot, QUOT, rAarr, race, Racute, racute, radic, raemptyv, rang, Rang, rangd, range, rangle, raquo, rarrap, rarrb, rarrbfs, rarrc, rarr, Rarr, rArr, rarrfs, rarrhk, rarrlp, rarrpl, rarrsim, Rarrtl, rarrtl, rarrw, ratail, rAtail, ratio, rationals, rbarr, rBarr, RBarr, rbbrk, rbrace, rbrack, rbrke, rbrksld, rbrkslu, Rcaron, rcaron, Rcedil, rcedil, rceil, rcub, Rcy, rcy, rdca, rdldhar, rdquo, rdquor, rdsh, real, realine, realpart, reals, Re, rect, reg, REG, ReverseElement, ReverseEquilibrium, ReverseUpEquilibrium, rfisht, rfloor, rfr, Rfr, rHar, rhard, rharu, rharul, Rho, rho, rhov, RightAngleBracket, RightArrowBar, rightarrow, RightArrow, Rightarrow, RightArrowLeftArrow, rightarrowtail, RightCeiling, RightDoubleBracket, RightDownTeeVector, RightDownVectorBar, RightDownVector, RightFloor, rightharpoondown, rightharpoonup, rightleftarrows, rightleftharpoons, rightrightarrows, rightsquigarrow, RightTeeArrow, RightTee, RightTeeVector, rightthreetimes, RightTriangleBar, RightTriangle, RightTriangleEqual, RightUpDownVector, RightUpTeeVector, RightUpVectorBar, RightUpVector, RightVectorBar, RightVector, ring, risingdotseq, rlarr, rlhar, rlm, rmoustache, rmoust, rnmid, roang, roarr, robrk, ropar, ropf, Ropf, roplus, rotimes, RoundImplies, rpar, rpargt, rppolint, rrarr, Rrightarrow, rsaquo, rscr, Rscr, rsh, Rsh, rsqb, rsquo, rsquor, rthree, rtimes, rtri, rtrie, rtrif, rtriltri, RuleDelayed, ruluhar, rx, Sacute, sacute, sbquo, scap, Scaron, scaron, Sc, sc, sccue, sce, scE, Scedil, scedil, Scirc, scirc, scnap, scnE, scnsim, scpolint, scsim, Scy, scy, sdotb, sdot, sdote, searhk, searr, seArr, searrow, sect, semi, seswar, setminus, setmn, sext, Sfr, sfr, sfrown, sharp, SHCHcy, shchcy, SHcy, shcy, ShortDownArrow, ShortLeftArrow, shortmid, shortparallel, ShortRightArrow, ShortUpArrow, shy, Sigma, sigma, sigmaf, sigmav, sim, simdot, sime, simeq, simg, simgE, siml, simlE, simne, simplus, simrarr, slarr, SmallCircle, smallsetminus, smashp, smeparsl, smid, smile, smt, smte, smtes, SOFTcy, softcy, solbar, solb, sol, Sopf, sopf, spades, spadesuit, spar, sqcap, sqcaps, sqcup, sqcups, Sqrt, sqsub, sqsube, sqsubset, sqsubseteq, sqsup, sqsupe, sqsupset, sqsupseteq, square, Square, SquareIntersection, SquareSubset, SquareSubsetEqual, SquareSuperset, SquareSupersetEqual, SquareUnion, squarf, squ, squf, srarr, Sscr, sscr, ssetmn, ssmile, sstarf, Star, star, starf, straightepsilon, straightphi, strns, sub, Sub, subdot, subE, sube, subedot, submult, subnE, subne, subplus, subrarr, subset, Subset, subseteq, subseteqq, SubsetEqual, subsetneq, subsetneqq, subsim, subsub, subsup, succapprox, succ, succcurlyeq, Succeeds, SucceedsEqual, SucceedsSlantEqual, SucceedsTilde, succeq, succnapprox, succneqq, succnsim, succsim, SuchThat, sum, Sum, sung, sup1, sup2, sup3, sup, Sup, supdot, supdsub, supE, supe, supedot, Superset, SupersetEqual, suphsol, suphsub, suplarr, supmult, supnE, supne, supplus, supset, Supset, supseteq, supseteqq, supsetneq, supsetneqq, supsim, supsub, supsup, swarhk, swarr, swArr, swarrow, swnwar, szlig, Tab, target, Tau, tau, tbrk, Tcaron, tcaron, Tcedil, tcedil, Tcy, tcy, tdot, telrec, Tfr, tfr, there4, therefore, Therefore, Theta, theta, thetasym, thetav, thickapprox, thicksim, ThickSpace, ThinSpace, thinsp, thkap, thksim, THORN, thorn, tilde, Tilde, TildeEqual, TildeFullEqual, TildeTilde, timesbar, timesb, times, timesd, tint, toea, topbot, topcir, top, Topf, topf, topfork, tosa, tprime, trade, TRADE, triangle, triangledown, triangleleft, trianglelefteq, triangleq, triangleright, trianglerighteq, tridot, trie, triminus, TripleDot, triplus, trisb, tritime, trpezium, Tscr, tscr, TScy, tscy, TSHcy, tshcy, Tstrok, tstrok, twixt, twoheadleftarrow, twoheadrightarrow, Uacute, uacute, uarr, Uarr, uArr, Uarrocir, Ubrcy, ubrcy, Ubreve, ubreve, Ucirc, ucirc, Ucy, ucy, udarr, Udblac, udblac, udhar, ufisht, Ufr, ufr, Ugrave, ugrave, uHar, uharl, uharr, uhblk, ulcorn, ulcorner, ulcrop, ultri, Umacr, umacr, uml, UnderBar, UnderBrace, UnderBracket, UnderParenthesis, Union, UnionPlus, Uogon, uogon, Uopf, uopf, UpArrowBar, uparrow, UpArrow, Uparrow, UpArrowDownArrow, updownarrow, UpDownArrow, Updownarrow, UpEquilibrium, upharpoonleft, upharpoonright, uplus, UpperLeftArrow, UpperRightArrow, upsi, Upsi, upsih, Upsilon, upsilon, UpTeeArrow, UpTee, upuparrows, urcorn, urcorner, urcrop, Uring, uring, urtri, Uscr, uscr, utdot, Utilde, utilde, utri, utrif, uuarr, Uuml, uuml, uwangle, vangrt, varepsilon, varkappa, varnothing, varphi, varpi, varpropto, varr, vArr, varrho, varsigma, varsubsetneq, varsubsetneqq, varsupsetneq, varsupsetneqq, vartheta, vartriangleleft, vartriangleright, vBar, Vbar, vBarv, Vcy, vcy, vdash, vDash, Vdash, VDash, Vdashl, veebar, vee, Vee, veeeq, vellip, verbar, Verbar, vert, Vert, VerticalBar, VerticalLine, VerticalSeparator, VerticalTilde, VeryThinSpace, Vfr, vfr, vltri, vnsub, vnsup, Vopf, vopf, vprop, vrtri, Vscr, vscr, vsubnE, vsubne, vsupnE, vsupne, Vvdash, vzigzag, Wcirc, wcirc, wedbar, wedge, Wedge, wedgeq, weierp, Wfr, wfr, Wopf, wopf, wp, wr, wreath, Wscr, wscr, xcap, xcirc, xcup, xdtri, Xfr, xfr, xharr, xhArr, Xi, xi, xlarr, xlArr, xmap, xnis, xodot, Xopf, xopf, xoplus, xotime, xrarr, xrArr, Xscr, xscr, xsqcup, xuplus, xutri, xvee, xwedge, Yacute, yacute, YAcy, yacy, Ycirc, ycirc, Ycy, ycy, yen, Yfr, yfr, YIcy, yicy, Yopf, yopf, Yscr, yscr, YUcy, yucy, yuml, Yuml, Zacute, zacute, Zcaron, zcaron, Zcy, zcy, Zdot, zdot, zeetrf, ZeroWidthSpace, Zeta, zeta, zfr, Zfr, ZHcy, zhcy, zigrarr, zopf, Zopf, Zscr, zscr, zwj, zwnj, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Aacute\":\"Á\",\"aacute\":\"á\",\"Abreve\":\"Ă\",\"abreve\":\"ă\",\"ac\":\"∾\",\"acd\":\"∿\",\"acE\":\"∾̳\",\"Acirc\":\"Â\",\"acirc\":\"â\",\"acute\":\"´\",\"Acy\":\"А\",\"acy\":\"а\",\"AElig\":\"Æ\",\"aelig\":\"æ\",\"af\":\"⁡\",\"Afr\":\"𝔄\",\"afr\":\"𝔞\",\"Agrave\":\"À\",\"agrave\":\"à\",\"alefsym\":\"ℵ\",\"aleph\":\"ℵ\",\"Alpha\":\"Α\",\"alpha\":\"α\",\"Amacr\":\"Ā\",\"amacr\":\"ā\",\"amalg\":\"⨿\",\"amp\":\"&\",\"AMP\":\"&\",\"andand\":\"⩕\",\"And\":\"⩓\",\"and\":\"∧\",\"andd\":\"⩜\",\"andslope\":\"⩘\",\"andv\":\"⩚\",\"ang\":\"∠\",\"ange\":\"⦤\",\"angle\":\"∠\",\"angmsdaa\":\"⦨\",\"angmsdab\":\"⦩\",\"angmsdac\":\"⦪\",\"angmsdad\":\"⦫\",\"angmsdae\":\"⦬\",\"angmsdaf\":\"⦭\",\"angmsdag\":\"⦮\",\"angmsdah\":\"⦯\",\"angmsd\":\"∡\",\"angrt\":\"∟\",\"angrtvb\":\"⊾\",\"angrtvbd\":\"⦝\",\"angsph\":\"∢\",\"angst\":\"Å\",\"angzarr\":\"⍼\",\"Aogon\":\"Ą\",\"aogon\":\"ą\",\"Aopf\":\"𝔸\",\"aopf\":\"𝕒\",\"apacir\":\"⩯\",\"ap\":\"≈\",\"apE\":\"⩰\",\"ape\":\"≊\",\"apid\":\"≋\",\"apos\":\"'\",\"ApplyFunction\":\"⁡\",\"approx\":\"≈\",\"approxeq\":\"≊\",\"Aring\":\"Å\",\"aring\":\"å\",\"Ascr\":\"𝒜\",\"ascr\":\"𝒶\",\"Assign\":\"≔\",\"ast\":\"*\",\"asymp\":\"≈\",\"asympeq\":\"≍\",\"Atilde\":\"Ã\",\"atilde\":\"ã\",\"Auml\":\"Ä\",\"auml\":\"ä\",\"awconint\":\"∳\",\"awint\":\"⨑\",\"backcong\":\"≌\",\"backepsilon\":\"϶\",\"backprime\":\"‵\",\"backsim\":\"∽\",\"backsimeq\":\"⋍\",\"Backslash\":\"∖\",\"Barv\":\"⫧\",\"barvee\":\"⊽\",\"barwed\":\"⌅\",\"Barwed\":\"⌆\",\"barwedge\":\"⌅\",\"bbrk\":\"⎵\",\"bbrktbrk\":\"⎶\",\"bcong\":\"≌\",\"Bcy\":\"Б\",\"bcy\":\"б\",\"bdquo\":\"„\",\"becaus\":\"∵\",\"because\":\"∵\",\"Because\":\"∵\",\"bemptyv\":\"⦰\",\"bepsi\":\"϶\",\"bernou\":\"ℬ\",\"Bernoullis\":\"ℬ\",\"Beta\":\"Β\",\"beta\":\"β\",\"beth\":\"ℶ\",\"between\":\"≬\",\"Bfr\":\"𝔅\",\"bfr\":\"𝔟\",\"bigcap\":\"⋂\",\"bigcirc\":\"◯\",\"bigcup\":\"⋃\",\"bigodot\":\"⨀\",\"bigoplus\":\"⨁\",\"bigotimes\":\"⨂\",\"bigsqcup\":\"⨆\",\"bigstar\":\"★\",\"bigtriangledown\":\"▽\",\"bigtriangleup\":\"△\",\"biguplus\":\"⨄\",\"bigvee\":\"⋁\",\"bigwedge\":\"⋀\",\"bkarow\":\"⤍\",\"blacklozenge\":\"⧫\",\"blacksquare\":\"▪\",\"blacktriangle\":\"▴\",\"blacktriangledown\":\"▾\",\"blacktriangleleft\":\"◂\",\"blacktriangleright\":\"▸\",\"blank\":\"␣\",\"blk12\":\"▒\",\"blk14\":\"░\",\"blk34\":\"▓\",\"block\":\"█\",\"bne\":\"=⃥\",\"bnequiv\":\"≡⃥\",\"bNot\":\"⫭\",\"bnot\":\"⌐\",\"Bopf\":\"𝔹\",\"bopf\":\"𝕓\",\"bot\":\"⊥\",\"bottom\":\"⊥\",\"bowtie\":\"⋈\",\"boxbox\":\"⧉\",\"boxdl\":\"┐\",\"boxdL\":\"╕\",\"boxDl\":\"╖\",\"boxDL\":\"╗\",\"boxdr\":\"┌\",\"boxdR\":\"╒\",\"boxDr\":\"╓\",\"boxDR\":\"╔\",\"boxh\":\"─\",\"boxH\":\"═\",\"boxhd\":\"┬\",\"boxHd\":\"╤\",\"boxhD\":\"╥\",\"boxHD\":\"╦\",\"boxhu\":\"┴\",\"boxHu\":\"╧\",\"boxhU\":\"╨\",\"boxHU\":\"╩\",\"boxminus\":\"⊟\",\"boxplus\":\"⊞\",\"boxtimes\":\"⊠\",\"boxul\":\"┘\",\"boxuL\":\"╛\",\"boxUl\":\"╜\",\"boxUL\":\"╝\",\"boxur\":\"└\",\"boxuR\":\"╘\",\"boxUr\":\"╙\",\"boxUR\":\"╚\",\"boxv\":\"│\",\"boxV\":\"║\",\"boxvh\":\"┼\",\"boxvH\":\"╪\",\"boxVh\":\"╫\",\"boxVH\":\"╬\",\"boxvl\":\"┤\",\"boxvL\":\"╡\",\"boxVl\":\"╢\",\"boxVL\":\"╣\",\"boxvr\":\"├\",\"boxvR\":\"╞\",\"boxVr\":\"╟\",\"boxVR\":\"╠\",\"bprime\":\"‵\",\"breve\":\"˘\",\"Breve\":\"˘\",\"brvbar\":\"¦\",\"bscr\":\"𝒷\",\"Bscr\":\"ℬ\",\"bsemi\":\"⁏\",\"bsim\":\"∽\",\"bsime\":\"⋍\",\"bsolb\":\"⧅\",\"bsol\":\"\\\\\",\"bsolhsub\":\"⟈\",\"bull\":\"•\",\"bullet\":\"•\",\"bump\":\"≎\",\"bumpE\":\"⪮\",\"bumpe\":\"≏\",\"Bumpeq\":\"≎\",\"bumpeq\":\"≏\",\"Cacute\":\"Ć\",\"cacute\":\"ć\",\"capand\":\"⩄\",\"capbrcup\":\"⩉\",\"capcap\":\"⩋\",\"cap\":\"∩\",\"Cap\":\"⋒\",\"capcup\":\"⩇\",\"capdot\":\"⩀\",\"CapitalDifferentialD\":\"ⅅ\",\"caps\":\"∩︀\",\"caret\":\"⁁\",\"caron\":\"ˇ\",\"Cayleys\":\"ℭ\",\"ccaps\":\"⩍\",\"Ccaron\":\"Č\",\"ccaron\":\"č\",\"Ccedil\":\"Ç\",\"ccedil\":\"ç\",\"Ccirc\":\"Ĉ\",\"ccirc\":\"ĉ\",\"Cconint\":\"∰\",\"ccups\":\"⩌\",\"ccupssm\":\"⩐\",\"Cdot\":\"Ċ\",\"cdot\":\"ċ\",\"cedil\":\"¸\",\"Cedilla\":\"¸\",\"cemptyv\":\"⦲\",\"cent\":\"¢\",\"centerdot\":\"·\",\"CenterDot\":\"·\",\"cfr\":\"𝔠\",\"Cfr\":\"ℭ\",\"CHcy\":\"Ч\",\"chcy\":\"ч\",\"check\":\"✓\",\"checkmark\":\"✓\",\"Chi\":\"Χ\",\"chi\":\"χ\",\"circ\":\"ˆ\",\"circeq\":\"≗\",\"circlearrowleft\":\"↺\",\"circlearrowright\":\"↻\",\"circledast\":\"⊛\",\"circledcirc\":\"⊚\",\"circleddash\":\"⊝\",\"CircleDot\":\"⊙\",\"circledR\":\"®\",\"circledS\":\"Ⓢ\",\"CircleMinus\":\"⊖\",\"CirclePlus\":\"⊕\",\"CircleTimes\":\"⊗\",\"cir\":\"○\",\"cirE\":\"⧃\",\"cire\":\"≗\",\"cirfnint\":\"⨐\",\"cirmid\":\"⫯\",\"cirscir\":\"⧂\",\"ClockwiseContourIntegral\":\"∲\",\"CloseCurlyDoubleQuote\":\"”\",\"CloseCurlyQuote\":\"’\",\"clubs\":\"♣\",\"clubsuit\":\"♣\",\"colon\":\":\",\"Colon\":\"∷\",\"Colone\":\"⩴\",\"colone\":\"≔\",\"coloneq\":\"≔\",\"comma\":\",\",\"commat\":\"@\",\"comp\":\"∁\",\"compfn\":\"∘\",\"complement\":\"∁\",\"complexes\":\"ℂ\",\"cong\":\"≅\",\"congdot\":\"⩭\",\"Congruent\":\"≡\",\"conint\":\"∮\",\"Conint\":\"∯\",\"ContourIntegral\":\"∮\",\"copf\":\"𝕔\",\"Copf\":\"ℂ\",\"coprod\":\"∐\",\"Coproduct\":\"∐\",\"copy\":\"©\",\"COPY\":\"©\",\"copysr\":\"℗\",\"CounterClockwiseContourIntegral\":\"∳\",\"crarr\":\"↵\",\"cross\":\"✗\",\"Cross\":\"⨯\",\"Cscr\":\"𝒞\",\"cscr\":\"𝒸\",\"csub\":\"⫏\",\"csube\":\"⫑\",\"csup\":\"⫐\",\"csupe\":\"⫒\",\"ctdot\":\"⋯\",\"cudarrl\":\"⤸\",\"cudarrr\":\"⤵\",\"cuepr\":\"⋞\",\"cuesc\":\"⋟\",\"cularr\":\"↶\",\"cularrp\":\"⤽\",\"cupbrcap\":\"⩈\",\"cupcap\":\"⩆\",\"CupCap\":\"≍\",\"cup\":\"∪\",\"Cup\":\"⋓\",\"cupcup\":\"⩊\",\"cupdot\":\"⊍\",\"cupor\":\"⩅\",\"cups\":\"∪︀\",\"curarr\":\"↷\",\"curarrm\":\"⤼\",\"curlyeqprec\":\"⋞\",\"curlyeqsucc\":\"⋟\",\"curlyvee\":\"⋎\",\"curlywedge\":\"⋏\",\"curren\":\"¤\",\"curvearrowleft\":\"↶\",\"curvearrowright\":\"↷\",\"cuvee\":\"⋎\",\"cuwed\":\"⋏\",\"cwconint\":\"∲\",\"cwint\":\"∱\",\"cylcty\":\"⌭\",\"dagger\":\"†\",\"Dagger\":\"‡\",\"daleth\":\"ℸ\",\"darr\":\"↓\",\"Darr\":\"↡\",\"dArr\":\"⇓\",\"dash\":\"‐\",\"Dashv\":\"⫤\",\"dashv\":\"⊣\",\"dbkarow\":\"⤏\",\"dblac\":\"˝\",\"Dcaron\":\"Ď\",\"dcaron\":\"ď\",\"Dcy\":\"Д\",\"dcy\":\"д\",\"ddagger\":\"‡\",\"ddarr\":\"⇊\",\"DD\":\"ⅅ\",\"dd\":\"ⅆ\",\"DDotrahd\":\"⤑\",\"ddotseq\":\"⩷\",\"deg\":\"°\",\"Del\":\"∇\",\"Delta\":\"Δ\",\"delta\":\"δ\",\"demptyv\":\"⦱\",\"dfisht\":\"⥿\",\"Dfr\":\"𝔇\",\"dfr\":\"𝔡\",\"dHar\":\"⥥\",\"dharl\":\"⇃\",\"dharr\":\"⇂\",\"DiacriticalAcute\":\"´\",\"DiacriticalDot\":\"˙\",\"DiacriticalDoubleAcute\":\"˝\",\"DiacriticalGrave\":\"`\",\"DiacriticalTilde\":\"˜\",\"diam\":\"⋄\",\"diamond\":\"⋄\",\"Diamond\":\"⋄\",\"diamondsuit\":\"♦\",\"diams\":\"♦\",\"die\":\"¨\",\"DifferentialD\":\"ⅆ\",\"digamma\":\"ϝ\",\"disin\":\"⋲\",\"div\":\"÷\",\"divide\":\"÷\",\"divideontimes\":\"⋇\",\"divonx\":\"⋇\",\"DJcy\":\"Ђ\",\"djcy\":\"ђ\",\"dlcorn\":\"⌞\",\"dlcrop\":\"⌍\",\"dollar\":\"$\",\"Dopf\":\"𝔻\",\"dopf\":\"𝕕\",\"Dot\":\"¨\",\"dot\":\"˙\",\"DotDot\":\"⃜\",\"doteq\":\"≐\",\"doteqdot\":\"≑\",\"DotEqual\":\"≐\",\"dotminus\":\"∸\",\"dotplus\":\"∔\",\"dotsquare\":\"⊡\",\"doublebarwedge\":\"⌆\",\"DoubleContourIntegral\":\"∯\",\"DoubleDot\":\"¨\",\"DoubleDownArrow\":\"⇓\",\"DoubleLeftArrow\":\"⇐\",\"DoubleLeftRightArrow\":\"⇔\",\"DoubleLeftTee\":\"⫤\",\"DoubleLongLeftArrow\":\"⟸\",\"DoubleLongLeftRightArrow\":\"⟺\",\"DoubleLongRightArrow\":\"⟹\",\"DoubleRightArrow\":\"⇒\",\"DoubleRightTee\":\"⊨\",\"DoubleUpArrow\":\"⇑\",\"DoubleUpDownArrow\":\"⇕\",\"DoubleVerticalBar\":\"∥\",\"DownArrowBar\":\"⤓\",\"downarrow\":\"↓\",\"DownArrow\":\"↓\",\"Downarrow\":\"⇓\",\"DownArrowUpArrow\":\"⇵\",\"DownBreve\":\"̑\",\"downdownarrows\":\"⇊\",\"downharpoonleft\":\"⇃\",\"downharpoonright\":\"⇂\",\"DownLeftRightVector\":\"⥐\",\"DownLeftTeeVector\":\"⥞\",\"DownLeftVectorBar\":\"⥖\",\"DownLeftVector\":\"↽\",\"DownRightTeeVector\":\"⥟\",\"DownRightVectorBar\":\"⥗\",\"DownRightVector\":\"⇁\",\"DownTeeArrow\":\"↧\",\"DownTee\":\"⊤\",\"drbkarow\":\"⤐\",\"drcorn\":\"⌟\",\"drcrop\":\"⌌\",\"Dscr\":\"𝒟\",\"dscr\":\"𝒹\",\"DScy\":\"Ѕ\",\"dscy\":\"ѕ\",\"dsol\":\"⧶\",\"Dstrok\":\"Đ\",\"dstrok\":\"đ\",\"dtdot\":\"⋱\",\"dtri\":\"▿\",\"dtrif\":\"▾\",\"duarr\":\"⇵\",\"duhar\":\"⥯\",\"dwangle\":\"⦦\",\"DZcy\":\"Џ\",\"dzcy\":\"џ\",\"dzigrarr\":\"⟿\",\"Eacute\":\"É\",\"eacute\":\"é\",\"easter\":\"⩮\",\"Ecaron\":\"Ě\",\"ecaron\":\"ě\",\"Ecirc\":\"Ê\",\"ecirc\":\"ê\",\"ecir\":\"≖\",\"ecolon\":\"≕\",\"Ecy\":\"Э\",\"ecy\":\"э\",\"eDDot\":\"⩷\",\"Edot\":\"Ė\",\"edot\":\"ė\",\"eDot\":\"≑\",\"ee\":\"ⅇ\",\"efDot\":\"≒\",\"Efr\":\"𝔈\",\"efr\":\"𝔢\",\"eg\":\"⪚\",\"Egrave\":\"È\",\"egrave\":\"è\",\"egs\":\"⪖\",\"egsdot\":\"⪘\",\"el\":\"⪙\",\"Element\":\"∈\",\"elinters\":\"⏧\",\"ell\":\"ℓ\",\"els\":\"⪕\",\"elsdot\":\"⪗\",\"Emacr\":\"Ē\",\"emacr\":\"ē\",\"empty\":\"∅\",\"emptyset\":\"∅\",\"EmptySmallSquare\":\"◻\",\"emptyv\":\"∅\",\"EmptyVerySmallSquare\":\"▫\",\"emsp13\":\" \",\"emsp14\":\" \",\"emsp\":\" \",\"ENG\":\"Ŋ\",\"eng\":\"ŋ\",\"ensp\":\" \",\"Eogon\":\"Ę\",\"eogon\":\"ę\",\"Eopf\":\"𝔼\",\"eopf\":\"𝕖\",\"epar\":\"⋕\",\"eparsl\":\"⧣\",\"eplus\":\"⩱\",\"epsi\":\"ε\",\"Epsilon\":\"Ε\",\"epsilon\":\"ε\",\"epsiv\":\"ϵ\",\"eqcirc\":\"≖\",\"eqcolon\":\"≕\",\"eqsim\":\"≂\",\"eqslantgtr\":\"⪖\",\"eqslantless\":\"⪕\",\"Equal\":\"⩵\",\"equals\":\"=\",\"EqualTilde\":\"≂\",\"equest\":\"≟\",\"Equilibrium\":\"⇌\",\"equiv\":\"≡\",\"equivDD\":\"⩸\",\"eqvparsl\":\"⧥\",\"erarr\":\"⥱\",\"erDot\":\"≓\",\"escr\":\"ℯ\",\"Escr\":\"ℰ\",\"esdot\":\"≐\",\"Esim\":\"⩳\",\"esim\":\"≂\",\"Eta\":\"Η\",\"eta\":\"η\",\"ETH\":\"Ð\",\"eth\":\"ð\",\"Euml\":\"Ë\",\"euml\":\"ë\",\"euro\":\"€\",\"excl\":\"!\",\"exist\":\"∃\",\"Exists\":\"∃\",\"expectation\":\"ℰ\",\"exponentiale\":\"ⅇ\",\"ExponentialE\":\"ⅇ\",\"fallingdotseq\":\"≒\",\"Fcy\":\"Ф\",\"fcy\":\"ф\",\"female\":\"♀\",\"ffilig\":\"ﬃ\",\"fflig\":\"ﬀ\",\"ffllig\":\"ﬄ\",\"Ffr\":\"𝔉\",\"ffr\":\"𝔣\",\"filig\":\"ﬁ\",\"FilledSmallSquare\":\"◼\",\"FilledVerySmallSquare\":\"▪\",\"fjlig\":\"fj\",\"flat\":\"♭\",\"fllig\":\"ﬂ\",\"fltns\":\"▱\",\"fnof\":\"ƒ\",\"Fopf\":\"𝔽\",\"fopf\":\"𝕗\",\"forall\":\"∀\",\"ForAll\":\"∀\",\"fork\":\"⋔\",\"forkv\":\"⫙\",\"Fouriertrf\":\"ℱ\",\"fpartint\":\"⨍\",\"frac12\":\"½\",\"frac13\":\"⅓\",\"frac14\":\"¼\",\"frac15\":\"⅕\",\"frac16\":\"⅙\",\"frac18\":\"⅛\",\"frac23\":\"⅔\",\"frac25\":\"⅖\",\"frac34\":\"¾\",\"frac35\":\"⅗\",\"frac38\":\"⅜\",\"frac45\":\"⅘\",\"frac56\":\"⅚\",\"frac58\":\"⅝\",\"frac78\":\"⅞\",\"frasl\":\"⁄\",\"frown\":\"⌢\",\"fscr\":\"𝒻\",\"Fscr\":\"ℱ\",\"gacute\":\"ǵ\",\"Gamma\":\"Γ\",\"gamma\":\"γ\",\"Gammad\":\"Ϝ\",\"gammad\":\"ϝ\",\"gap\":\"⪆\",\"Gbreve\":\"Ğ\",\"gbreve\":\"ğ\",\"Gcedil\":\"Ģ\",\"Gcirc\":\"Ĝ\",\"gcirc\":\"ĝ\",\"Gcy\":\"Г\",\"gcy\":\"г\",\"Gdot\":\"Ġ\",\"gdot\":\"ġ\",\"ge\":\"≥\",\"gE\":\"≧\",\"gEl\":\"⪌\",\"gel\":\"⋛\",\"geq\":\"≥\",\"geqq\":\"≧\",\"geqslant\":\"⩾\",\"gescc\":\"⪩\",\"ges\":\"⩾\",\"gesdot\":\"⪀\",\"gesdoto\":\"⪂\",\"gesdotol\":\"⪄\",\"gesl\":\"⋛︀\",\"gesles\":\"⪔\",\"Gfr\":\"𝔊\",\"gfr\":\"𝔤\",\"gg\":\"≫\",\"Gg\":\"⋙\",\"ggg\":\"⋙\",\"gimel\":\"ℷ\",\"GJcy\":\"Ѓ\",\"gjcy\":\"ѓ\",\"gla\":\"⪥\",\"gl\":\"≷\",\"glE\":\"⪒\",\"glj\":\"⪤\",\"gnap\":\"⪊\",\"gnapprox\":\"⪊\",\"gne\":\"⪈\",\"gnE\":\"≩\",\"gneq\":\"⪈\",\"gneqq\":\"≩\",\"gnsim\":\"⋧\",\"Gopf\":\"𝔾\",\"gopf\":\"𝕘\",\"grave\":\"`\",\"GreaterEqual\":\"≥\",\"GreaterEqualLess\":\"⋛\",\"GreaterFullEqual\":\"≧\",\"GreaterGreater\":\"⪢\",\"GreaterLess\":\"≷\",\"GreaterSlantEqual\":\"⩾\",\"GreaterTilde\":\"≳\",\"Gscr\":\"𝒢\",\"gscr\":\"ℊ\",\"gsim\":\"≳\",\"gsime\":\"⪎\",\"gsiml\":\"⪐\",\"gtcc\":\"⪧\",\"gtcir\":\"⩺\",\"gt\":\">\",\"GT\":\">\",\"Gt\":\"≫\",\"gtdot\":\"⋗\",\"gtlPar\":\"⦕\",\"gtquest\":\"⩼\",\"gtrapprox\":\"⪆\",\"gtrarr\":\"⥸\",\"gtrdot\":\"⋗\",\"gtreqless\":\"⋛\",\"gtreqqless\":\"⪌\",\"gtrless\":\"≷\",\"gtrsim\":\"≳\",\"gvertneqq\":\"≩︀\",\"gvnE\":\"≩︀\",\"Hacek\":\"ˇ\",\"hairsp\":\" \",\"half\":\"½\",\"hamilt\":\"ℋ\",\"HARDcy\":\"Ъ\",\"hardcy\":\"ъ\",\"harrcir\":\"⥈\",\"harr\":\"↔\",\"hArr\":\"⇔\",\"harrw\":\"↭\",\"Hat\":\"^\",\"hbar\":\"ℏ\",\"Hcirc\":\"Ĥ\",\"hcirc\":\"ĥ\",\"hearts\":\"♥\",\"heartsuit\":\"♥\",\"hellip\":\"…\",\"hercon\":\"⊹\",\"hfr\":\"𝔥\",\"Hfr\":\"ℌ\",\"HilbertSpace\":\"ℋ\",\"hksearow\":\"⤥\",\"hkswarow\":\"⤦\",\"hoarr\":\"⇿\",\"homtht\":\"∻\",\"hookleftarrow\":\"↩\",\"hookrightarrow\":\"↪\",\"hopf\":\"𝕙\",\"Hopf\":\"ℍ\",\"horbar\":\"―\",\"HorizontalLine\":\"─\",\"hscr\":\"𝒽\",\"Hscr\":\"ℋ\",\"hslash\":\"ℏ\",\"Hstrok\":\"Ħ\",\"hstrok\":\"ħ\",\"HumpDownHump\":\"≎\",\"HumpEqual\":\"≏\",\"hybull\":\"⁃\",\"hyphen\":\"‐\",\"Iacute\":\"Í\",\"iacute\":\"í\",\"ic\":\"⁣\",\"Icirc\":\"Î\",\"icirc\":\"î\",\"Icy\":\"И\",\"icy\":\"и\",\"Idot\":\"İ\",\"IEcy\":\"Е\",\"iecy\":\"е\",\"iexcl\":\"¡\",\"iff\":\"⇔\",\"ifr\":\"𝔦\",\"Ifr\":\"ℑ\",\"Igrave\":\"Ì\",\"igrave\":\"ì\",\"ii\":\"ⅈ\",\"iiiint\":\"⨌\",\"iiint\":\"∭\",\"iinfin\":\"⧜\",\"iiota\":\"℩\",\"IJlig\":\"Ĳ\",\"ijlig\":\"ĳ\",\"Imacr\":\"Ī\",\"imacr\":\"ī\",\"image\":\"ℑ\",\"ImaginaryI\":\"ⅈ\",\"imagline\":\"ℐ\",\"imagpart\":\"ℑ\",\"imath\":\"ı\",\"Im\":\"ℑ\",\"imof\":\"⊷\",\"imped\":\"Ƶ\",\"Implies\":\"⇒\",\"incare\":\"℅\",\"in\":\"∈\",\"infin\":\"∞\",\"infintie\":\"⧝\",\"inodot\":\"ı\",\"intcal\":\"⊺\",\"int\":\"∫\",\"Int\":\"∬\",\"integers\":\"ℤ\",\"Integral\":\"∫\",\"intercal\":\"⊺\",\"Intersection\":\"⋂\",\"intlarhk\":\"⨗\",\"intprod\":\"⨼\",\"InvisibleComma\":\"⁣\",\"InvisibleTimes\":\"⁢\",\"IOcy\":\"Ё\",\"iocy\":\"ё\",\"Iogon\":\"Į\",\"iogon\":\"į\",\"Iopf\":\"𝕀\",\"iopf\":\"𝕚\",\"Iota\":\"Ι\",\"iota\":\"ι\",\"iprod\":\"⨼\",\"iquest\":\"¿\",\"iscr\":\"𝒾\",\"Iscr\":\"ℐ\",\"isin\":\"∈\",\"isindot\":\"⋵\",\"isinE\":\"⋹\",\"isins\":\"⋴\",\"isinsv\":\"⋳\",\"isinv\":\"∈\",\"it\":\"⁢\",\"Itilde\":\"Ĩ\",\"itilde\":\"ĩ\",\"Iukcy\":\"І\",\"iukcy\":\"і\",\"Iuml\":\"Ï\",\"iuml\":\"ï\",\"Jcirc\":\"Ĵ\",\"jcirc\":\"ĵ\",\"Jcy\":\"Й\",\"jcy\":\"й\",\"Jfr\":\"𝔍\",\"jfr\":\"𝔧\",\"jmath\":\"ȷ\",\"Jopf\":\"𝕁\",\"jopf\":\"𝕛\",\"Jscr\":\"𝒥\",\"jscr\":\"𝒿\",\"Jsercy\":\"Ј\",\"jsercy\":\"ј\",\"Jukcy\":\"Є\",\"jukcy\":\"є\",\"Kappa\":\"Κ\",\"kappa\":\"κ\",\"kappav\":\"ϰ\",\"Kcedil\":\"Ķ\",\"kcedil\":\"ķ\",\"Kcy\":\"К\",\"kcy\":\"к\",\"Kfr\":\"𝔎\",\"kfr\":\"𝔨\",\"kgreen\":\"ĸ\",\"KHcy\":\"Х\",\"khcy\":\"х\",\"KJcy\":\"Ќ\",\"kjcy\":\"ќ\",\"Kopf\":\"𝕂\",\"kopf\":\"𝕜\",\"Kscr\":\"𝒦\",\"kscr\":\"𝓀\",\"lAarr\":\"⇚\",\"Lacute\":\"Ĺ\",\"lacute\":\"ĺ\",\"laemptyv\":\"⦴\",\"lagran\":\"ℒ\",\"Lambda\":\"Λ\",\"lambda\":\"λ\",\"lang\":\"⟨\",\"Lang\":\"⟪\",\"langd\":\"⦑\",\"langle\":\"⟨\",\"lap\":\"⪅\",\"Laplacetrf\":\"ℒ\",\"laquo\":\"«\",\"larrb\":\"⇤\",\"larrbfs\":\"⤟\",\"larr\":\"←\",\"Larr\":\"↞\",\"lArr\":\"⇐\",\"larrfs\":\"⤝\",\"larrhk\":\"↩\",\"larrlp\":\"↫\",\"larrpl\":\"⤹\",\"larrsim\":\"⥳\",\"larrtl\":\"↢\",\"latail\":\"⤙\",\"lAtail\":\"⤛\",\"lat\":\"⪫\",\"late\":\"⪭\",\"lates\":\"⪭︀\",\"lbarr\":\"⤌\",\"lBarr\":\"⤎\",\"lbbrk\":\"❲\",\"lbrace\":\"{\",\"lbrack\":\"[\",\"lbrke\":\"⦋\",\"lbrksld\":\"⦏\",\"lbrkslu\":\"⦍\",\"Lcaron\":\"Ľ\",\"lcaron\":\"ľ\",\"Lcedil\":\"Ļ\",\"lcedil\":\"ļ\",\"lceil\":\"⌈\",\"lcub\":\"{\",\"Lcy\":\"Л\",\"lcy\":\"л\",\"ldca\":\"⤶\",\"ldquo\":\"“\",\"ldquor\":\"„\",\"ldrdhar\":\"⥧\",\"ldrushar\":\"⥋\",\"ldsh\":\"↲\",\"le\":\"≤\",\"lE\":\"≦\",\"LeftAngleBracket\":\"⟨\",\"LeftArrowBar\":\"⇤\",\"leftarrow\":\"←\",\"LeftArrow\":\"←\",\"Leftarrow\":\"⇐\",\"LeftArrowRightArrow\":\"⇆\",\"leftarrowtail\":\"↢\",\"LeftCeiling\":\"⌈\",\"LeftDoubleBracket\":\"⟦\",\"LeftDownTeeVector\":\"⥡\",\"LeftDownVectorBar\":\"⥙\",\"LeftDownVector\":\"⇃\",\"LeftFloor\":\"⌊\",\"leftharpoondown\":\"↽\",\"leftharpoonup\":\"↼\",\"leftleftarrows\":\"⇇\",\"leftrightarrow\":\"↔\",\"LeftRightArrow\":\"↔\",\"Leftrightarrow\":\"⇔\",\"leftrightarrows\":\"⇆\",\"leftrightharpoons\":\"⇋\",\"leftrightsquigarrow\":\"↭\",\"LeftRightVector\":\"⥎\",\"LeftTeeArrow\":\"↤\",\"LeftTee\":\"⊣\",\"LeftTeeVector\":\"⥚\",\"leftthreetimes\":\"⋋\",\"LeftTriangleBar\":\"⧏\",\"LeftTriangle\":\"⊲\",\"LeftTriangleEqual\":\"⊴\",\"LeftUpDownVector\":\"⥑\",\"LeftUpTeeVector\":\"⥠\",\"LeftUpVectorBar\":\"⥘\",\"LeftUpVector\":\"↿\",\"LeftVectorBar\":\"⥒\",\"LeftVector\":\"↼\",\"lEg\":\"⪋\",\"leg\":\"⋚\",\"leq\":\"≤\",\"leqq\":\"≦\",\"leqslant\":\"⩽\",\"lescc\":\"⪨\",\"les\":\"⩽\",\"lesdot\":\"⩿\",\"lesdoto\":\"⪁\",\"lesdotor\":\"⪃\",\"lesg\":\"⋚︀\",\"lesges\":\"⪓\",\"lessapprox\":\"⪅\",\"lessdot\":\"⋖\",\"lesseqgtr\":\"⋚\",\"lesseqqgtr\":\"⪋\",\"LessEqualGreater\":\"⋚\",\"LessFullEqual\":\"≦\",\"LessGreater\":\"≶\",\"lessgtr\":\"≶\",\"LessLess\":\"⪡\",\"lesssim\":\"≲\",\"LessSlantEqual\":\"⩽\",\"LessTilde\":\"≲\",\"lfisht\":\"⥼\",\"lfloor\":\"⌊\",\"Lfr\":\"𝔏\",\"lfr\":\"𝔩\",\"lg\":\"≶\",\"lgE\":\"⪑\",\"lHar\":\"⥢\",\"lhard\":\"↽\",\"lharu\":\"↼\",\"lharul\":\"⥪\",\"lhblk\":\"▄\",\"LJcy\":\"Љ\",\"ljcy\":\"љ\",\"llarr\":\"⇇\",\"ll\":\"≪\",\"Ll\":\"⋘\",\"llcorner\":\"⌞\",\"Lleftarrow\":\"⇚\",\"llhard\":\"⥫\",\"lltri\":\"◺\",\"Lmidot\":\"Ŀ\",\"lmidot\":\"ŀ\",\"lmoustache\":\"⎰\",\"lmoust\":\"⎰\",\"lnap\":\"⪉\",\"lnapprox\":\"⪉\",\"lne\":\"⪇\",\"lnE\":\"≨\",\"lneq\":\"⪇\",\"lneqq\":\"≨\",\"lnsim\":\"⋦\",\"loang\":\"⟬\",\"loarr\":\"⇽\",\"lobrk\":\"⟦\",\"longleftarrow\":\"⟵\",\"LongLeftArrow\":\"⟵\",\"Longleftarrow\":\"⟸\",\"longleftrightarrow\":\"⟷\",\"LongLeftRightArrow\":\"⟷\",\"Longleftrightarrow\":\"⟺\",\"longmapsto\":\"⟼\",\"longrightarrow\":\"⟶\",\"LongRightArrow\":\"⟶\",\"Longrightarrow\":\"⟹\",\"looparrowleft\":\"↫\",\"looparrowright\":\"↬\",\"lopar\":\"⦅\",\"Lopf\":\"𝕃\",\"lopf\":\"𝕝\",\"loplus\":\"⨭\",\"lotimes\":\"⨴\",\"lowast\":\"∗\",\"lowbar\":\"_\",\"LowerLeftArrow\":\"↙\",\"LowerRightArrow\":\"↘\",\"loz\":\"◊\",\"lozenge\":\"◊\",\"lozf\":\"⧫\",\"lpar\":\"(\",\"lparlt\":\"⦓\",\"lrarr\":\"⇆\",\"lrcorner\":\"⌟\",\"lrhar\":\"⇋\",\"lrhard\":\"⥭\",\"lrm\":\"‎\",\"lrtri\":\"⊿\",\"lsaquo\":\"‹\",\"lscr\":\"𝓁\",\"Lscr\":\"ℒ\",\"lsh\":\"↰\",\"Lsh\":\"↰\",\"lsim\":\"≲\",\"lsime\":\"⪍\",\"lsimg\":\"⪏\",\"lsqb\":\"[\",\"lsquo\":\"‘\",\"lsquor\":\"‚\",\"Lstrok\":\"Ł\",\"lstrok\":\"ł\",\"ltcc\":\"⪦\",\"ltcir\":\"⩹\",\"lt\":\"<\",\"LT\":\"<\",\"Lt\":\"≪\",\"ltdot\":\"⋖\",\"lthree\":\"⋋\",\"ltimes\":\"⋉\",\"ltlarr\":\"⥶\",\"ltquest\":\"⩻\",\"ltri\":\"◃\",\"ltrie\":\"⊴\",\"ltrif\":\"◂\",\"ltrPar\":\"⦖\",\"lurdshar\":\"⥊\",\"luruhar\":\"⥦\",\"lvertneqq\":\"≨︀\",\"lvnE\":\"≨︀\",\"macr\":\"¯\",\"male\":\"♂\",\"malt\":\"✠\",\"maltese\":\"✠\",\"Map\":\"⤅\",\"map\":\"↦\",\"mapsto\":\"↦\",\"mapstodown\":\"↧\",\"mapstoleft\":\"↤\",\"mapstoup\":\"↥\",\"marker\":\"▮\",\"mcomma\":\"⨩\",\"Mcy\":\"М\",\"mcy\":\"м\",\"mdash\":\"—\",\"mDDot\":\"∺\",\"measuredangle\":\"∡\",\"MediumSpace\":\" \",\"Mellintrf\":\"ℳ\",\"Mfr\":\"𝔐\",\"mfr\":\"𝔪\",\"mho\":\"℧\",\"micro\":\"µ\",\"midast\":\"*\",\"midcir\":\"⫰\",\"mid\":\"∣\",\"middot\":\"·\",\"minusb\":\"⊟\",\"minus\":\"−\",\"minusd\":\"∸\",\"minusdu\":\"⨪\",\"MinusPlus\":\"∓\",\"mlcp\":\"⫛\",\"mldr\":\"…\",\"mnplus\":\"∓\",\"models\":\"⊧\",\"Mopf\":\"𝕄\",\"mopf\":\"𝕞\",\"mp\":\"∓\",\"mscr\":\"𝓂\",\"Mscr\":\"ℳ\",\"mstpos\":\"∾\",\"Mu\":\"Μ\",\"mu\":\"μ\",\"multimap\":\"⊸\",\"mumap\":\"⊸\",\"nabla\":\"∇\",\"Nacute\":\"Ń\",\"nacute\":\"ń\",\"nang\":\"∠⃒\",\"nap\":\"≉\",\"napE\":\"⩰̸\",\"napid\":\"≋̸\",\"napos\":\"ŉ\",\"napprox\":\"≉\",\"natural\":\"♮\",\"naturals\":\"ℕ\",\"natur\":\"♮\",\"nbsp\":\" \",\"nbump\":\"≎̸\",\"nbumpe\":\"≏̸\",\"ncap\":\"⩃\",\"Ncaron\":\"Ň\",\"ncaron\":\"ň\",\"Ncedil\":\"Ņ\",\"ncedil\":\"ņ\",\"ncong\":\"≇\",\"ncongdot\":\"⩭̸\",\"ncup\":\"⩂\",\"Ncy\":\"Н\",\"ncy\":\"н\",\"ndash\":\"–\",\"nearhk\":\"⤤\",\"nearr\":\"↗\",\"neArr\":\"⇗\",\"nearrow\":\"↗\",\"ne\":\"≠\",\"nedot\":\"≐̸\",\"NegativeMediumSpace\":\"​\",\"NegativeThickSpace\":\"​\",\"NegativeThinSpace\":\"​\",\"NegativeVeryThinSpace\":\"​\",\"nequiv\":\"≢\",\"nesear\":\"⤨\",\"nesim\":\"≂̸\",\"NestedGreaterGreater\":\"≫\",\"NestedLessLess\":\"≪\",\"NewLine\":\"\\n\",\"nexist\":\"∄\",\"nexists\":\"∄\",\"Nfr\":\"𝔑\",\"nfr\":\"𝔫\",\"ngE\":\"≧̸\",\"nge\":\"≱\",\"ngeq\":\"≱\",\"ngeqq\":\"≧̸\",\"ngeqslant\":\"⩾̸\",\"nges\":\"⩾̸\",\"nGg\":\"⋙̸\",\"ngsim\":\"≵\",\"nGt\":\"≫⃒\",\"ngt\":\"≯\",\"ngtr\":\"≯\",\"nGtv\":\"≫̸\",\"nharr\":\"↮\",\"nhArr\":\"⇎\",\"nhpar\":\"⫲\",\"ni\":\"∋\",\"nis\":\"⋼\",\"nisd\":\"⋺\",\"niv\":\"∋\",\"NJcy\":\"Њ\",\"njcy\":\"њ\",\"nlarr\":\"↚\",\"nlArr\":\"⇍\",\"nldr\":\"‥\",\"nlE\":\"≦̸\",\"nle\":\"≰\",\"nleftarrow\":\"↚\",\"nLeftarrow\":\"⇍\",\"nleftrightarrow\":\"↮\",\"nLeftrightarrow\":\"⇎\",\"nleq\":\"≰\",\"nleqq\":\"≦̸\",\"nleqslant\":\"⩽̸\",\"nles\":\"⩽̸\",\"nless\":\"≮\",\"nLl\":\"⋘̸\",\"nlsim\":\"≴\",\"nLt\":\"≪⃒\",\"nlt\":\"≮\",\"nltri\":\"⋪\",\"nltrie\":\"⋬\",\"nLtv\":\"≪̸\",\"nmid\":\"∤\",\"NoBreak\":\"⁠\",\"NonBreakingSpace\":\" \",\"nopf\":\"𝕟\",\"Nopf\":\"ℕ\",\"Not\":\"⫬\",\"not\":\"¬\",\"NotCongruent\":\"≢\",\"NotCupCap\":\"≭\",\"NotDoubleVerticalBar\":\"∦\",\"NotElement\":\"∉\",\"NotEqual\":\"≠\",\"NotEqualTilde\":\"≂̸\",\"NotExists\":\"∄\",\"NotGreater\":\"≯\",\"NotGreaterEqual\":\"≱\",\"NotGreaterFullEqual\":\"≧̸\",\"NotGreaterGreater\":\"≫̸\",\"NotGreaterLess\":\"≹\",\"NotGreaterSlantEqual\":\"⩾̸\",\"NotGreaterTilde\":\"≵\",\"NotHumpDownHump\":\"≎̸\",\"NotHumpEqual\":\"≏̸\",\"notin\":\"∉\",\"notindot\":\"⋵̸\",\"notinE\":\"⋹̸\",\"notinva\":\"∉\",\"notinvb\":\"⋷\",\"notinvc\":\"⋶\",\"NotLeftTriangleBar\":\"⧏̸\",\"NotLeftTriangle\":\"⋪\",\"NotLeftTriangleEqual\":\"⋬\",\"NotLess\":\"≮\",\"NotLessEqual\":\"≰\",\"NotLessGreater\":\"≸\",\"NotLessLess\":\"≪̸\",\"NotLessSlantEqual\":\"⩽̸\",\"NotLessTilde\":\"≴\",\"NotNestedGreaterGreater\":\"⪢̸\",\"NotNestedLessLess\":\"⪡̸\",\"notni\":\"∌\",\"notniva\":\"∌\",\"notnivb\":\"⋾\",\"notnivc\":\"⋽\",\"NotPrecedes\":\"⊀\",\"NotPrecedesEqual\":\"⪯̸\",\"NotPrecedesSlantEqual\":\"⋠\",\"NotReverseElement\":\"∌\",\"NotRightTriangleBar\":\"⧐̸\",\"NotRightTriangle\":\"⋫\",\"NotRightTriangleEqual\":\"⋭\",\"NotSquareSubset\":\"⊏̸\",\"NotSquareSubsetEqual\":\"⋢\",\"NotSquareSuperset\":\"⊐̸\",\"NotSquareSupersetEqual\":\"⋣\",\"NotSubset\":\"⊂⃒\",\"NotSubsetEqual\":\"⊈\",\"NotSucceeds\":\"⊁\",\"NotSucceedsEqual\":\"⪰̸\",\"NotSucceedsSlantEqual\":\"⋡\",\"NotSucceedsTilde\":\"≿̸\",\"NotSuperset\":\"⊃⃒\",\"NotSupersetEqual\":\"⊉\",\"NotTilde\":\"≁\",\"NotTildeEqual\":\"≄\",\"NotTildeFullEqual\":\"≇\",\"NotTildeTilde\":\"≉\",\"NotVerticalBar\":\"∤\",\"nparallel\":\"∦\",\"npar\":\"∦\",\"nparsl\":\"⫽⃥\",\"npart\":\"∂̸\",\"npolint\":\"⨔\",\"npr\":\"⊀\",\"nprcue\":\"⋠\",\"nprec\":\"⊀\",\"npreceq\":\"⪯̸\",\"npre\":\"⪯̸\",\"nrarrc\":\"⤳̸\",\"nrarr\":\"↛\",\"nrArr\":\"⇏\",\"nrarrw\":\"↝̸\",\"nrightarrow\":\"↛\",\"nRightarrow\":\"⇏\",\"nrtri\":\"⋫\",\"nrtrie\":\"⋭\",\"nsc\":\"⊁\",\"nsccue\":\"⋡\",\"nsce\":\"⪰̸\",\"Nscr\":\"𝒩\",\"nscr\":\"𝓃\",\"nshortmid\":\"∤\",\"nshortparallel\":\"∦\",\"nsim\":\"≁\",\"nsime\":\"≄\",\"nsimeq\":\"≄\",\"nsmid\":\"∤\",\"nspar\":\"∦\",\"nsqsube\":\"⋢\",\"nsqsupe\":\"⋣\",\"nsub\":\"⊄\",\"nsubE\":\"⫅̸\",\"nsube\":\"⊈\",\"nsubset\":\"⊂⃒\",\"nsubseteq\":\"⊈\",\"nsubseteqq\":\"⫅̸\",\"nsucc\":\"⊁\",\"nsucceq\":\"⪰̸\",\"nsup\":\"⊅\",\"nsupE\":\"⫆̸\",\"nsupe\":\"⊉\",\"nsupset\":\"⊃⃒\",\"nsupseteq\":\"⊉\",\"nsupseteqq\":\"⫆̸\",\"ntgl\":\"≹\",\"Ntilde\":\"Ñ\",\"ntilde\":\"ñ\",\"ntlg\":\"≸\",\"ntriangleleft\":\"⋪\",\"ntrianglelefteq\":\"⋬\",\"ntriangleright\":\"⋫\",\"ntrianglerighteq\":\"⋭\",\"Nu\":\"Ν\",\"nu\":\"ν\",\"num\":\"#\",\"numero\":\"№\",\"numsp\":\" \",\"nvap\":\"≍⃒\",\"nvdash\":\"⊬\",\"nvDash\":\"⊭\",\"nVdash\":\"⊮\",\"nVDash\":\"⊯\",\"nvge\":\"≥⃒\",\"nvgt\":\">⃒\",\"nvHarr\":\"⤄\",\"nvinfin\":\"⧞\",\"nvlArr\":\"⤂\",\"nvle\":\"≤⃒\",\"nvlt\":\"<⃒\",\"nvltrie\":\"⊴⃒\",\"nvrArr\":\"⤃\",\"nvrtrie\":\"⊵⃒\",\"nvsim\":\"∼⃒\",\"nwarhk\":\"⤣\",\"nwarr\":\"↖\",\"nwArr\":\"⇖\",\"nwarrow\":\"↖\",\"nwnear\":\"⤧\",\"Oacute\":\"Ó\",\"oacute\":\"ó\",\"oast\":\"⊛\",\"Ocirc\":\"Ô\",\"ocirc\":\"ô\",\"ocir\":\"⊚\",\"Ocy\":\"О\",\"ocy\":\"о\",\"odash\":\"⊝\",\"Odblac\":\"Ő\",\"odblac\":\"ő\",\"odiv\":\"⨸\",\"odot\":\"⊙\",\"odsold\":\"⦼\",\"OElig\":\"Œ\",\"oelig\":\"œ\",\"ofcir\":\"⦿\",\"Ofr\":\"𝔒\",\"ofr\":\"𝔬\",\"ogon\":\"˛\",\"Ograve\":\"Ò\",\"ograve\":\"ò\",\"ogt\":\"⧁\",\"ohbar\":\"⦵\",\"ohm\":\"Ω\",\"oint\":\"∮\",\"olarr\":\"↺\",\"olcir\":\"⦾\",\"olcross\":\"⦻\",\"oline\":\"‾\",\"olt\":\"⧀\",\"Omacr\":\"Ō\",\"omacr\":\"ō\",\"Omega\":\"Ω\",\"omega\":\"ω\",\"Omicron\":\"Ο\",\"omicron\":\"ο\",\"omid\":\"⦶\",\"ominus\":\"⊖\",\"Oopf\":\"𝕆\",\"oopf\":\"𝕠\",\"opar\":\"⦷\",\"OpenCurlyDoubleQuote\":\"“\",\"OpenCurlyQuote\":\"‘\",\"operp\":\"⦹\",\"oplus\":\"⊕\",\"orarr\":\"↻\",\"Or\":\"⩔\",\"or\":\"∨\",\"ord\":\"⩝\",\"order\":\"ℴ\",\"orderof\":\"ℴ\",\"ordf\":\"ª\",\"ordm\":\"º\",\"origof\":\"⊶\",\"oror\":\"⩖\",\"orslope\":\"⩗\",\"orv\":\"⩛\",\"oS\":\"Ⓢ\",\"Oscr\":\"𝒪\",\"oscr\":\"ℴ\",\"Oslash\":\"Ø\",\"oslash\":\"ø\",\"osol\":\"⊘\",\"Otilde\":\"Õ\",\"otilde\":\"õ\",\"otimesas\":\"⨶\",\"Otimes\":\"⨷\",\"otimes\":\"⊗\",\"Ouml\":\"Ö\",\"ouml\":\"ö\",\"ovbar\":\"⌽\",\"OverBar\":\"‾\",\"OverBrace\":\"⏞\",\"OverBracket\":\"⎴\",\"OverParenthesis\":\"⏜\",\"para\":\"¶\",\"parallel\":\"∥\",\"par\":\"∥\",\"parsim\":\"⫳\",\"parsl\":\"⫽\",\"part\":\"∂\",\"PartialD\":\"∂\",\"Pcy\":\"П\",\"pcy\":\"п\",\"percnt\":\"%\",\"period\":\".\",\"permil\":\"‰\",\"perp\":\"⊥\",\"pertenk\":\"‱\",\"Pfr\":\"𝔓\",\"pfr\":\"𝔭\",\"Phi\":\"Φ\",\"phi\":\"φ\",\"phiv\":\"ϕ\",\"phmmat\":\"ℳ\",\"phone\":\"☎\",\"Pi\":\"Π\",\"pi\":\"π\",\"pitchfork\":\"⋔\",\"piv\":\"ϖ\",\"planck\":\"ℏ\",\"planckh\":\"ℎ\",\"plankv\":\"ℏ\",\"plusacir\":\"⨣\",\"plusb\":\"⊞\",\"pluscir\":\"⨢\",\"plus\":\"+\",\"plusdo\":\"∔\",\"plusdu\":\"⨥\",\"pluse\":\"⩲\",\"PlusMinus\":\"±\",\"plusmn\":\"±\",\"plussim\":\"⨦\",\"plustwo\":\"⨧\",\"pm\":\"±\",\"Poincareplane\":\"ℌ\",\"pointint\":\"⨕\",\"popf\":\"𝕡\",\"Popf\":\"ℙ\",\"pound\":\"£\",\"prap\":\"⪷\",\"Pr\":\"⪻\",\"pr\":\"≺\",\"prcue\":\"≼\",\"precapprox\":\"⪷\",\"prec\":\"≺\",\"preccurlyeq\":\"≼\",\"Precedes\":\"≺\",\"PrecedesEqual\":\"⪯\",\"PrecedesSlantEqual\":\"≼\",\"PrecedesTilde\":\"≾\",\"preceq\":\"⪯\",\"precnapprox\":\"⪹\",\"precneqq\":\"⪵\",\"precnsim\":\"⋨\",\"pre\":\"⪯\",\"prE\":\"⪳\",\"precsim\":\"≾\",\"prime\":\"′\",\"Prime\":\"″\",\"primes\":\"ℙ\",\"prnap\":\"⪹\",\"prnE\":\"⪵\",\"prnsim\":\"⋨\",\"prod\":\"∏\",\"Product\":\"∏\",\"profalar\":\"⌮\",\"profline\":\"⌒\",\"profsurf\":\"⌓\",\"prop\":\"∝\",\"Proportional\":\"∝\",\"Proportion\":\"∷\",\"propto\":\"∝\",\"prsim\":\"≾\",\"prurel\":\"⊰\",\"Pscr\":\"𝒫\",\"pscr\":\"𝓅\",\"Psi\":\"Ψ\",\"psi\":\"ψ\",\"puncsp\":\" \",\"Qfr\":\"𝔔\",\"qfr\":\"𝔮\",\"qint\":\"⨌\",\"qopf\":\"𝕢\",\"Qopf\":\"ℚ\",\"qprime\":\"⁗\",\"Qscr\":\"𝒬\",\"qscr\":\"𝓆\",\"quaternions\":\"ℍ\",\"quatint\":\"⨖\",\"quest\":\"?\",\"questeq\":\"≟\",\"quot\":\"\\\"\",\"QUOT\":\"\\\"\",\"rAarr\":\"⇛\",\"race\":\"∽̱\",\"Racute\":\"Ŕ\",\"racute\":\"ŕ\",\"radic\":\"√\",\"raemptyv\":\"⦳\",\"rang\":\"⟩\",\"Rang\":\"⟫\",\"rangd\":\"⦒\",\"range\":\"⦥\",\"rangle\":\"⟩\",\"raquo\":\"»\",\"rarrap\":\"⥵\",\"rarrb\":\"⇥\",\"rarrbfs\":\"⤠\",\"rarrc\":\"⤳\",\"rarr\":\"→\",\"Rarr\":\"↠\",\"rArr\":\"⇒\",\"rarrfs\":\"⤞\",\"rarrhk\":\"↪\",\"rarrlp\":\"↬\",\"rarrpl\":\"⥅\",\"rarrsim\":\"⥴\",\"Rarrtl\":\"⤖\",\"rarrtl\":\"↣\",\"rarrw\":\"↝\",\"ratail\":\"⤚\",\"rAtail\":\"⤜\",\"ratio\":\"∶\",\"rationals\":\"ℚ\",\"rbarr\":\"⤍\",\"rBarr\":\"⤏\",\"RBarr\":\"⤐\",\"rbbrk\":\"❳\",\"rbrace\":\"}\",\"rbrack\":\"]\",\"rbrke\":\"⦌\",\"rbrksld\":\"⦎\",\"rbrkslu\":\"⦐\",\"Rcaron\":\"Ř\",\"rcaron\":\"ř\",\"Rcedil\":\"Ŗ\",\"rcedil\":\"ŗ\",\"rceil\":\"⌉\",\"rcub\":\"}\",\"Rcy\":\"Р\",\"rcy\":\"р\",\"rdca\":\"⤷\",\"rdldhar\":\"⥩\",\"rdquo\":\"”\",\"rdquor\":\"”\",\"rdsh\":\"↳\",\"real\":\"ℜ\",\"realine\":\"ℛ\",\"realpart\":\"ℜ\",\"reals\":\"ℝ\",\"Re\":\"ℜ\",\"rect\":\"▭\",\"reg\":\"®\",\"REG\":\"®\",\"ReverseElement\":\"∋\",\"ReverseEquilibrium\":\"⇋\",\"ReverseUpEquilibrium\":\"⥯\",\"rfisht\":\"⥽\",\"rfloor\":\"⌋\",\"rfr\":\"𝔯\",\"Rfr\":\"ℜ\",\"rHar\":\"⥤\",\"rhard\":\"⇁\",\"rharu\":\"⇀\",\"rharul\":\"⥬\",\"Rho\":\"Ρ\",\"rho\":\"ρ\",\"rhov\":\"ϱ\",\"RightAngleBracket\":\"⟩\",\"RightArrowBar\":\"⇥\",\"rightarrow\":\"→\",\"RightArrow\":\"→\",\"Rightarrow\":\"⇒\",\"RightArrowLeftArrow\":\"⇄\",\"rightarrowtail\":\"↣\",\"RightCeiling\":\"⌉\",\"RightDoubleBracket\":\"⟧\",\"RightDownTeeVector\":\"⥝\",\"RightDownVectorBar\":\"⥕\",\"RightDownVector\":\"⇂\",\"RightFloor\":\"⌋\",\"rightharpoondown\":\"⇁\",\"rightharpoonup\":\"⇀\",\"rightleftarrows\":\"⇄\",\"rightleftharpoons\":\"⇌\",\"rightrightarrows\":\"⇉\",\"rightsquigarrow\":\"↝\",\"RightTeeArrow\":\"↦\",\"RightTee\":\"⊢\",\"RightTeeVector\":\"⥛\",\"rightthreetimes\":\"⋌\",\"RightTriangleBar\":\"⧐\",\"RightTriangle\":\"⊳\",\"RightTriangleEqual\":\"⊵\",\"RightUpDownVector\":\"⥏\",\"RightUpTeeVector\":\"⥜\",\"RightUpVectorBar\":\"⥔\",\"RightUpVector\":\"↾\",\"RightVectorBar\":\"⥓\",\"RightVector\":\"⇀\",\"ring\":\"˚\",\"risingdotseq\":\"≓\",\"rlarr\":\"⇄\",\"rlhar\":\"⇌\",\"rlm\":\"‏\",\"rmoustache\":\"⎱\",\"rmoust\":\"⎱\",\"rnmid\":\"⫮\",\"roang\":\"⟭\",\"roarr\":\"⇾\",\"robrk\":\"⟧\",\"ropar\":\"⦆\",\"ropf\":\"𝕣\",\"Ropf\":\"ℝ\",\"roplus\":\"⨮\",\"rotimes\":\"⨵\",\"RoundImplies\":\"⥰\",\"rpar\":\")\",\"rpargt\":\"⦔\",\"rppolint\":\"⨒\",\"rrarr\":\"⇉\",\"Rrightarrow\":\"⇛\",\"rsaquo\":\"›\",\"rscr\":\"𝓇\",\"Rscr\":\"ℛ\",\"rsh\":\"↱\",\"Rsh\":\"↱\",\"rsqb\":\"]\",\"rsquo\":\"’\",\"rsquor\":\"’\",\"rthree\":\"⋌\",\"rtimes\":\"⋊\",\"rtri\":\"▹\",\"rtrie\":\"⊵\",\"rtrif\":\"▸\",\"rtriltri\":\"⧎\",\"RuleDelayed\":\"⧴\",\"ruluhar\":\"⥨\",\"rx\":\"℞\",\"Sacute\":\"Ś\",\"sacute\":\"ś\",\"sbquo\":\"‚\",\"scap\":\"⪸\",\"Scaron\":\"Š\",\"scaron\":\"š\",\"Sc\":\"⪼\",\"sc\":\"≻\",\"sccue\":\"≽\",\"sce\":\"⪰\",\"scE\":\"⪴\",\"Scedil\":\"Ş\",\"scedil\":\"ş\",\"Scirc\":\"Ŝ\",\"scirc\":\"ŝ\",\"scnap\":\"⪺\",\"scnE\":\"⪶\",\"scnsim\":\"⋩\",\"scpolint\":\"⨓\",\"scsim\":\"≿\",\"Scy\":\"С\",\"scy\":\"с\",\"sdotb\":\"⊡\",\"sdot\":\"⋅\",\"sdote\":\"⩦\",\"searhk\":\"⤥\",\"searr\":\"↘\",\"seArr\":\"⇘\",\"searrow\":\"↘\",\"sect\":\"§\",\"semi\":\";\",\"seswar\":\"⤩\",\"setminus\":\"∖\",\"setmn\":\"∖\",\"sext\":\"✶\",\"Sfr\":\"𝔖\",\"sfr\":\"𝔰\",\"sfrown\":\"⌢\",\"sharp\":\"♯\",\"SHCHcy\":\"Щ\",\"shchcy\":\"щ\",\"SHcy\":\"Ш\",\"shcy\":\"ш\",\"ShortDownArrow\":\"↓\",\"ShortLeftArrow\":\"←\",\"shortmid\":\"∣\",\"shortparallel\":\"∥\",\"ShortRightArrow\":\"→\",\"ShortUpArrow\":\"↑\",\"shy\":\"­\",\"Sigma\":\"Σ\",\"sigma\":\"σ\",\"sigmaf\":\"ς\",\"sigmav\":\"ς\",\"sim\":\"∼\",\"simdot\":\"⩪\",\"sime\":\"≃\",\"simeq\":\"≃\",\"simg\":\"⪞\",\"simgE\":\"⪠\",\"siml\":\"⪝\",\"simlE\":\"⪟\",\"simne\":\"≆\",\"simplus\":\"⨤\",\"simrarr\":\"⥲\",\"slarr\":\"←\",\"SmallCircle\":\"∘\",\"smallsetminus\":\"∖\",\"smashp\":\"⨳\",\"smeparsl\":\"⧤\",\"smid\":\"∣\",\"smile\":\"⌣\",\"smt\":\"⪪\",\"smte\":\"⪬\",\"smtes\":\"⪬︀\",\"SOFTcy\":\"Ь\",\"softcy\":\"ь\",\"solbar\":\"⌿\",\"solb\":\"⧄\",\"sol\":\"/\",\"Sopf\":\"𝕊\",\"sopf\":\"𝕤\",\"spades\":\"♠\",\"spadesuit\":\"♠\",\"spar\":\"∥\",\"sqcap\":\"⊓\",\"sqcaps\":\"⊓︀\",\"sqcup\":\"⊔\",\"sqcups\":\"⊔︀\",\"Sqrt\":\"√\",\"sqsub\":\"⊏\",\"sqsube\":\"⊑\",\"sqsubset\":\"⊏\",\"sqsubseteq\":\"⊑\",\"sqsup\":\"⊐\",\"sqsupe\":\"⊒\",\"sqsupset\":\"⊐\",\"sqsupseteq\":\"⊒\",\"square\":\"□\",\"Square\":\"□\",\"SquareIntersection\":\"⊓\",\"SquareSubset\":\"⊏\",\"SquareSubsetEqual\":\"⊑\",\"SquareSuperset\":\"⊐\",\"SquareSupersetEqual\":\"⊒\",\"SquareUnion\":\"⊔\",\"squarf\":\"▪\",\"squ\":\"□\",\"squf\":\"▪\",\"srarr\":\"→\",\"Sscr\":\"𝒮\",\"sscr\":\"𝓈\",\"ssetmn\":\"∖\",\"ssmile\":\"⌣\",\"sstarf\":\"⋆\",\"Star\":\"⋆\",\"star\":\"☆\",\"starf\":\"★\",\"straightepsilon\":\"ϵ\",\"straightphi\":\"ϕ\",\"strns\":\"¯\",\"sub\":\"⊂\",\"Sub\":\"⋐\",\"subdot\":\"⪽\",\"subE\":\"⫅\",\"sube\":\"⊆\",\"subedot\":\"⫃\",\"submult\":\"⫁\",\"subnE\":\"⫋\",\"subne\":\"⊊\",\"subplus\":\"⪿\",\"subrarr\":\"⥹\",\"subset\":\"⊂\",\"Subset\":\"⋐\",\"subseteq\":\"⊆\",\"subseteqq\":\"⫅\",\"SubsetEqual\":\"⊆\",\"subsetneq\":\"⊊\",\"subsetneqq\":\"⫋\",\"subsim\":\"⫇\",\"subsub\":\"⫕\",\"subsup\":\"⫓\",\"succapprox\":\"⪸\",\"succ\":\"≻\",\"succcurlyeq\":\"≽\",\"Succeeds\":\"≻\",\"SucceedsEqual\":\"⪰\",\"SucceedsSlantEqual\":\"≽\",\"SucceedsTilde\":\"≿\",\"succeq\":\"⪰\",\"succnapprox\":\"⪺\",\"succneqq\":\"⪶\",\"succnsim\":\"⋩\",\"succsim\":\"≿\",\"SuchThat\":\"∋\",\"sum\":\"∑\",\"Sum\":\"∑\",\"sung\":\"♪\",\"sup1\":\"¹\",\"sup2\":\"²\",\"sup3\":\"³\",\"sup\":\"⊃\",\"Sup\":\"⋑\",\"supdot\":\"⪾\",\"supdsub\":\"⫘\",\"supE\":\"⫆\",\"supe\":\"⊇\",\"supedot\":\"⫄\",\"Superset\":\"⊃\",\"SupersetEqual\":\"⊇\",\"suphsol\":\"⟉\",\"suphsub\":\"⫗\",\"suplarr\":\"⥻\",\"supmult\":\"⫂\",\"supnE\":\"⫌\",\"supne\":\"⊋\",\"supplus\":\"⫀\",\"supset\":\"⊃\",\"Supset\":\"⋑\",\"supseteq\":\"⊇\",\"supseteqq\":\"⫆\",\"supsetneq\":\"⊋\",\"supsetneqq\":\"⫌\",\"supsim\":\"⫈\",\"supsub\":\"⫔\",\"supsup\":\"⫖\",\"swarhk\":\"⤦\",\"swarr\":\"↙\",\"swArr\":\"⇙\",\"swarrow\":\"↙\",\"swnwar\":\"⤪\",\"szlig\":\"ß\",\"Tab\":\"\\t\",\"target\":\"⌖\",\"Tau\":\"Τ\",\"tau\":\"τ\",\"tbrk\":\"⎴\",\"Tcaron\":\"Ť\",\"tcaron\":\"ť\",\"Tcedil\":\"Ţ\",\"tcedil\":\"ţ\",\"Tcy\":\"Т\",\"tcy\":\"т\",\"tdot\":\"⃛\",\"telrec\":\"⌕\",\"Tfr\":\"𝔗\",\"tfr\":\"𝔱\",\"there4\":\"∴\",\"therefore\":\"∴\",\"Therefore\":\"∴\",\"Theta\":\"Θ\",\"theta\":\"θ\",\"thetasym\":\"ϑ\",\"thetav\":\"ϑ\",\"thickapprox\":\"≈\",\"thicksim\":\"∼\",\"ThickSpace\":\"  \",\"ThinSpace\":\" \",\"thinsp\":\" \",\"thkap\":\"≈\",\"thksim\":\"∼\",\"THORN\":\"Þ\",\"thorn\":\"þ\",\"tilde\":\"˜\",\"Tilde\":\"∼\",\"TildeEqual\":\"≃\",\"TildeFullEqual\":\"≅\",\"TildeTilde\":\"≈\",\"timesbar\":\"⨱\",\"timesb\":\"⊠\",\"times\":\"×\",\"timesd\":\"⨰\",\"tint\":\"∭\",\"toea\":\"⤨\",\"topbot\":\"⌶\",\"topcir\":\"⫱\",\"top\":\"⊤\",\"Topf\":\"𝕋\",\"topf\":\"𝕥\",\"topfork\":\"⫚\",\"tosa\":\"⤩\",\"tprime\":\"‴\",\"trade\":\"™\",\"TRADE\":\"™\",\"triangle\":\"▵\",\"triangledown\":\"▿\",\"triangleleft\":\"◃\",\"trianglelefteq\":\"⊴\",\"triangleq\":\"≜\",\"triangleright\":\"▹\",\"trianglerighteq\":\"⊵\",\"tridot\":\"◬\",\"trie\":\"≜\",\"triminus\":\"⨺\",\"TripleDot\":\"⃛\",\"triplus\":\"⨹\",\"trisb\":\"⧍\",\"tritime\":\"⨻\",\"trpezium\":\"⏢\",\"Tscr\":\"𝒯\",\"tscr\":\"𝓉\",\"TScy\":\"Ц\",\"tscy\":\"ц\",\"TSHcy\":\"Ћ\",\"tshcy\":\"ћ\",\"Tstrok\":\"Ŧ\",\"tstrok\":\"ŧ\",\"twixt\":\"≬\",\"twoheadleftarrow\":\"↞\",\"twoheadrightarrow\":\"↠\",\"Uacute\":\"Ú\",\"uacute\":\"ú\",\"uarr\":\"↑\",\"Uarr\":\"↟\",\"uArr\":\"⇑\",\"Uarrocir\":\"⥉\",\"Ubrcy\":\"Ў\",\"ubrcy\":\"ў\",\"Ubreve\":\"Ŭ\",\"ubreve\":\"ŭ\",\"Ucirc\":\"Û\",\"ucirc\":\"û\",\"Ucy\":\"У\",\"ucy\":\"у\",\"udarr\":\"⇅\",\"Udblac\":\"Ű\",\"udblac\":\"ű\",\"udhar\":\"⥮\",\"ufisht\":\"⥾\",\"Ufr\":\"𝔘\",\"ufr\":\"𝔲\",\"Ugrave\":\"Ù\",\"ugrave\":\"ù\",\"uHar\":\"⥣\",\"uharl\":\"↿\",\"uharr\":\"↾\",\"uhblk\":\"▀\",\"ulcorn\":\"⌜\",\"ulcorner\":\"⌜\",\"ulcrop\":\"⌏\",\"ultri\":\"◸\",\"Umacr\":\"Ū\",\"umacr\":\"ū\",\"uml\":\"¨\",\"UnderBar\":\"_\",\"UnderBrace\":\"⏟\",\"UnderBracket\":\"⎵\",\"UnderParenthesis\":\"⏝\",\"Union\":\"⋃\",\"UnionPlus\":\"⊎\",\"Uogon\":\"Ų\",\"uogon\":\"ų\",\"Uopf\":\"𝕌\",\"uopf\":\"𝕦\",\"UpArrowBar\":\"⤒\",\"uparrow\":\"↑\",\"UpArrow\":\"↑\",\"Uparrow\":\"⇑\",\"UpArrowDownArrow\":\"⇅\",\"updownarrow\":\"↕\",\"UpDownArrow\":\"↕\",\"Updownarrow\":\"⇕\",\"UpEquilibrium\":\"⥮\",\"upharpoonleft\":\"↿\",\"upharpoonright\":\"↾\",\"uplus\":\"⊎\",\"UpperLeftArrow\":\"↖\",\"UpperRightArrow\":\"↗\",\"upsi\":\"υ\",\"Upsi\":\"ϒ\",\"upsih\":\"ϒ\",\"Upsilon\":\"Υ\",\"upsilon\":\"υ\",\"UpTeeArrow\":\"↥\",\"UpTee\":\"⊥\",\"upuparrows\":\"⇈\",\"urcorn\":\"⌝\",\"urcorner\":\"⌝\",\"urcrop\":\"⌎\",\"Uring\":\"Ů\",\"uring\":\"ů\",\"urtri\":\"◹\",\"Uscr\":\"𝒰\",\"uscr\":\"𝓊\",\"utdot\":\"⋰\",\"Utilde\":\"Ũ\",\"utilde\":\"ũ\",\"utri\":\"▵\",\"utrif\":\"▴\",\"uuarr\":\"⇈\",\"Uuml\":\"Ü\",\"uuml\":\"ü\",\"uwangle\":\"⦧\",\"vangrt\":\"⦜\",\"varepsilon\":\"ϵ\",\"varkappa\":\"ϰ\",\"varnothing\":\"∅\",\"varphi\":\"ϕ\",\"varpi\":\"ϖ\",\"varpropto\":\"∝\",\"varr\":\"↕\",\"vArr\":\"⇕\",\"varrho\":\"ϱ\",\"varsigma\":\"ς\",\"varsubsetneq\":\"⊊︀\",\"varsubsetneqq\":\"⫋︀\",\"varsupsetneq\":\"⊋︀\",\"varsupsetneqq\":\"⫌︀\",\"vartheta\":\"ϑ\",\"vartriangleleft\":\"⊲\",\"vartriangleright\":\"⊳\",\"vBar\":\"⫨\",\"Vbar\":\"⫫\",\"vBarv\":\"⫩\",\"Vcy\":\"В\",\"vcy\":\"в\",\"vdash\":\"⊢\",\"vDash\":\"⊨\",\"Vdash\":\"⊩\",\"VDash\":\"⊫\",\"Vdashl\":\"⫦\",\"veebar\":\"⊻\",\"vee\":\"∨\",\"Vee\":\"⋁\",\"veeeq\":\"≚\",\"vellip\":\"⋮\",\"verbar\":\"|\",\"Verbar\":\"‖\",\"vert\":\"|\",\"Vert\":\"‖\",\"VerticalBar\":\"∣\",\"VerticalLine\":\"|\",\"VerticalSeparator\":\"❘\",\"VerticalTilde\":\"≀\",\"VeryThinSpace\":\" \",\"Vfr\":\"𝔙\",\"vfr\":\"𝔳\",\"vltri\":\"⊲\",\"vnsub\":\"⊂⃒\",\"vnsup\":\"⊃⃒\",\"Vopf\":\"𝕍\",\"vopf\":\"𝕧\",\"vprop\":\"∝\",\"vrtri\":\"⊳\",\"Vscr\":\"𝒱\",\"vscr\":\"𝓋\",\"vsubnE\":\"⫋︀\",\"vsubne\":\"⊊︀\",\"vsupnE\":\"⫌︀\",\"vsupne\":\"⊋︀\",\"Vvdash\":\"⊪\",\"vzigzag\":\"⦚\",\"Wcirc\":\"Ŵ\",\"wcirc\":\"ŵ\",\"wedbar\":\"⩟\",\"wedge\":\"∧\",\"Wedge\":\"⋀\",\"wedgeq\":\"≙\",\"weierp\":\"℘\",\"Wfr\":\"𝔚\",\"wfr\":\"𝔴\",\"Wopf\":\"𝕎\",\"wopf\":\"𝕨\",\"wp\":\"℘\",\"wr\":\"≀\",\"wreath\":\"≀\",\"Wscr\":\"𝒲\",\"wscr\":\"𝓌\",\"xcap\":\"⋂\",\"xcirc\":\"◯\",\"xcup\":\"⋃\",\"xdtri\":\"▽\",\"Xfr\":\"𝔛\",\"xfr\":\"𝔵\",\"xharr\":\"⟷\",\"xhArr\":\"⟺\",\"Xi\":\"Ξ\",\"xi\":\"ξ\",\"xlarr\":\"⟵\",\"xlArr\":\"⟸\",\"xmap\":\"⟼\",\"xnis\":\"⋻\",\"xodot\":\"⨀\",\"Xopf\":\"𝕏\",\"xopf\":\"𝕩\",\"xoplus\":\"⨁\",\"xotime\":\"⨂\",\"xrarr\":\"⟶\",\"xrArr\":\"⟹\",\"Xscr\":\"𝒳\",\"xscr\":\"𝓍\",\"xsqcup\":\"⨆\",\"xuplus\":\"⨄\",\"xutri\":\"△\",\"xvee\":\"⋁\",\"xwedge\":\"⋀\",\"Yacute\":\"Ý\",\"yacute\":\"ý\",\"YAcy\":\"Я\",\"yacy\":\"я\",\"Ycirc\":\"Ŷ\",\"ycirc\":\"ŷ\",\"Ycy\":\"Ы\",\"ycy\":\"ы\",\"yen\":\"¥\",\"Yfr\":\"𝔜\",\"yfr\":\"𝔶\",\"YIcy\":\"Ї\",\"yicy\":\"ї\",\"Yopf\":\"𝕐\",\"yopf\":\"𝕪\",\"Yscr\":\"𝒴\",\"yscr\":\"𝓎\",\"YUcy\":\"Ю\",\"yucy\":\"ю\",\"yuml\":\"ÿ\",\"Yuml\":\"Ÿ\",\"Zacute\":\"Ź\",\"zacute\":\"ź\",\"Zcaron\":\"Ž\",\"zcaron\":\"ž\",\"Zcy\":\"З\",\"zcy\":\"з\",\"Zdot\":\"Ż\",\"zdot\":\"ż\",\"zeetrf\":\"ℨ\",\"ZeroWidthSpace\":\"​\",\"Zeta\":\"Ζ\",\"zeta\":\"ζ\",\"zfr\":\"𝔷\",\"Zfr\":\"ℨ\",\"ZHcy\":\"Ж\",\"zhcy\":\"ж\",\"zigrarr\":\"⇝\",\"zopf\":\"𝕫\",\"Zopf\":\"ℤ\",\"Zscr\":\"𝒵\",\"zscr\":\"𝓏\",\"zwj\":\"‍\",\"zwnj\":\"‌\"}");

/***/ }),

/***/ "./node_modules/htmlparser2/node_modules/entities/maps/legacy.json":
/*!*************************************************************************!*\
  !*** ./node_modules/htmlparser2/node_modules/entities/maps/legacy.json ***!
  \*************************************************************************/
/*! exports provided: Aacute, aacute, Acirc, acirc, acute, AElig, aelig, Agrave, agrave, amp, AMP, Aring, aring, Atilde, atilde, Auml, auml, brvbar, Ccedil, ccedil, cedil, cent, copy, COPY, curren, deg, divide, Eacute, eacute, Ecirc, ecirc, Egrave, egrave, ETH, eth, Euml, euml, frac12, frac14, frac34, gt, GT, Iacute, iacute, Icirc, icirc, iexcl, Igrave, igrave, iquest, Iuml, iuml, laquo, lt, LT, macr, micro, middot, nbsp, not, Ntilde, ntilde, Oacute, oacute, Ocirc, ocirc, Ograve, ograve, ordf, ordm, Oslash, oslash, Otilde, otilde, Ouml, ouml, para, plusmn, pound, quot, QUOT, raquo, reg, REG, sect, shy, sup1, sup2, sup3, szlig, THORN, thorn, times, Uacute, uacute, Ucirc, ucirc, Ugrave, ugrave, uml, Uuml, uuml, Yacute, yacute, yen, yuml, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Aacute\":\"Á\",\"aacute\":\"á\",\"Acirc\":\"Â\",\"acirc\":\"â\",\"acute\":\"´\",\"AElig\":\"Æ\",\"aelig\":\"æ\",\"Agrave\":\"À\",\"agrave\":\"à\",\"amp\":\"&\",\"AMP\":\"&\",\"Aring\":\"Å\",\"aring\":\"å\",\"Atilde\":\"Ã\",\"atilde\":\"ã\",\"Auml\":\"Ä\",\"auml\":\"ä\",\"brvbar\":\"¦\",\"Ccedil\":\"Ç\",\"ccedil\":\"ç\",\"cedil\":\"¸\",\"cent\":\"¢\",\"copy\":\"©\",\"COPY\":\"©\",\"curren\":\"¤\",\"deg\":\"°\",\"divide\":\"÷\",\"Eacute\":\"É\",\"eacute\":\"é\",\"Ecirc\":\"Ê\",\"ecirc\":\"ê\",\"Egrave\":\"È\",\"egrave\":\"è\",\"ETH\":\"Ð\",\"eth\":\"ð\",\"Euml\":\"Ë\",\"euml\":\"ë\",\"frac12\":\"½\",\"frac14\":\"¼\",\"frac34\":\"¾\",\"gt\":\">\",\"GT\":\">\",\"Iacute\":\"Í\",\"iacute\":\"í\",\"Icirc\":\"Î\",\"icirc\":\"î\",\"iexcl\":\"¡\",\"Igrave\":\"Ì\",\"igrave\":\"ì\",\"iquest\":\"¿\",\"Iuml\":\"Ï\",\"iuml\":\"ï\",\"laquo\":\"«\",\"lt\":\"<\",\"LT\":\"<\",\"macr\":\"¯\",\"micro\":\"µ\",\"middot\":\"·\",\"nbsp\":\" \",\"not\":\"¬\",\"Ntilde\":\"Ñ\",\"ntilde\":\"ñ\",\"Oacute\":\"Ó\",\"oacute\":\"ó\",\"Ocirc\":\"Ô\",\"ocirc\":\"ô\",\"Ograve\":\"Ò\",\"ograve\":\"ò\",\"ordf\":\"ª\",\"ordm\":\"º\",\"Oslash\":\"Ø\",\"oslash\":\"ø\",\"Otilde\":\"Õ\",\"otilde\":\"õ\",\"Ouml\":\"Ö\",\"ouml\":\"ö\",\"para\":\"¶\",\"plusmn\":\"±\",\"pound\":\"£\",\"quot\":\"\\\"\",\"QUOT\":\"\\\"\",\"raquo\":\"»\",\"reg\":\"®\",\"REG\":\"®\",\"sect\":\"§\",\"shy\":\"­\",\"sup1\":\"¹\",\"sup2\":\"²\",\"sup3\":\"³\",\"szlig\":\"ß\",\"THORN\":\"Þ\",\"thorn\":\"þ\",\"times\":\"×\",\"Uacute\":\"Ú\",\"uacute\":\"ú\",\"Ucirc\":\"Û\",\"ucirc\":\"û\",\"Ugrave\":\"Ù\",\"ugrave\":\"ù\",\"uml\":\"¨\",\"Uuml\":\"Ü\",\"uuml\":\"ü\",\"Yacute\":\"Ý\",\"yacute\":\"ý\",\"yen\":\"¥\",\"yuml\":\"ÿ\"}");

/***/ }),

/***/ "./node_modules/htmlparser2/node_modules/entities/maps/xml.json":
/*!**********************************************************************!*\
  !*** ./node_modules/htmlparser2/node_modules/entities/maps/xml.json ***!
  \**********************************************************************/
/*! exports provided: amp, apos, gt, lt, quot, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"amp\":\"&\",\"apos\":\"'\",\"gt\":\">\",\"lt\":\"<\",\"quot\":\"\\\"\"}");

/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/inherits/inherits_browser.js":
/*!***************************************************!*\
  !*** ./node_modules/inherits/inherits_browser.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/lodash.defaults/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.defaults/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Used by `_.defaults` to customize its `_.assignIn` use.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to assign.
 * @param {Object} object The parent object of `objValue`.
 * @returns {*} Returns the value to assign.
 */
function assignInDefaults(objValue, srcValue, key, object) {
  if (objValue === undefined ||
      (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
    return srcValue;
  }
  return objValue;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * This method is like `_.assignIn` except that it accepts `customizer`
 * which is invoked to produce the assigned values. If `customizer` returns
 * `undefined`, assignment is handled by the method instead. The `customizer`
 * is invoked with five arguments: (objValue, srcValue, key, object, source).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extendWith
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @see _.assignWith
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   return _.isUndefined(objValue) ? srcValue : objValue;
 * }
 *
 * var defaults = _.partialRight(_.assignInWith, customizer);
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
  copyObject(source, keysIn(source), object, customizer);
});

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function(args) {
  args.push(undefined, assignInDefaults);
  return apply(assignInWith, undefined, args);
});

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = defaults;


/***/ }),

/***/ "./node_modules/node-libs-browser/node_modules/string_decoder/lib/string_decoder.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/node-libs-browser/node_modules/string_decoder/lib/string_decoder.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



/*<replacement>*/

var Buffer = __webpack_require__(/*! safe-buffer */ "./node_modules/safe-buffer/index.js").Buffer;
/*</replacement>*/

var isEncoding = Buffer.isEncoding || function (encoding) {
  encoding = '' + encoding;
  switch (encoding && encoding.toLowerCase()) {
    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
      return true;
    default:
      return false;
  }
};

function _normalizeEncoding(enc) {
  if (!enc) return 'utf8';
  var retried;
  while (true) {
    switch (enc) {
      case 'utf8':
      case 'utf-8':
        return 'utf8';
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 'utf16le';
      case 'latin1':
      case 'binary':
        return 'latin1';
      case 'base64':
      case 'ascii':
      case 'hex':
        return enc;
      default:
        if (retried) return; // undefined
        enc = ('' + enc).toLowerCase();
        retried = true;
    }
  }
};

// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
  var nenc = _normalizeEncoding(enc);
  if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
  return nenc || enc;
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.StringDecoder = StringDecoder;
function StringDecoder(encoding) {
  this.encoding = normalizeEncoding(encoding);
  var nb;
  switch (this.encoding) {
    case 'utf16le':
      this.text = utf16Text;
      this.end = utf16End;
      nb = 4;
      break;
    case 'utf8':
      this.fillLast = utf8FillLast;
      nb = 4;
      break;
    case 'base64':
      this.text = base64Text;
      this.end = base64End;
      nb = 3;
      break;
    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = Buffer.allocUnsafe(nb);
}

StringDecoder.prototype.write = function (buf) {
  if (buf.length === 0) return '';
  var r;
  var i;
  if (this.lastNeed) {
    r = this.fillLast(buf);
    if (r === undefined) return '';
    i = this.lastNeed;
    this.lastNeed = 0;
  } else {
    i = 0;
  }
  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
  return r || '';
};

StringDecoder.prototype.end = utf8End;

// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;

// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function (buf) {
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
  this.lastNeed -= buf.length;
};

// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
  return byte >> 6 === 0x02 ? -1 : -2;
}

// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
  var j = buf.length - 1;
  if (j < i) return 0;
  var nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 1;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 2;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) {
      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
    }
    return nb;
  }
  return 0;
}

// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
  if ((buf[0] & 0xC0) !== 0x80) {
    self.lastNeed = 0;
    return '\ufffd';
  }
  if (self.lastNeed > 1 && buf.length > 1) {
    if ((buf[1] & 0xC0) !== 0x80) {
      self.lastNeed = 1;
      return '\ufffd';
    }
    if (self.lastNeed > 2 && buf.length > 2) {
      if ((buf[2] & 0xC0) !== 0x80) {
        self.lastNeed = 2;
        return '\ufffd';
      }
    }
  }
}

// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
  var p = this.lastTotal - this.lastNeed;
  var r = utf8CheckExtraBytes(this, buf, p);
  if (r !== undefined) return r;
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, p, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, p, 0, buf.length);
  this.lastNeed -= buf.length;
}

// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
  var total = utf8CheckIncomplete(this, buf, i);
  if (!this.lastNeed) return buf.toString('utf8', i);
  this.lastTotal = total;
  var end = buf.length - (total - this.lastNeed);
  buf.copy(this.lastChar, 0, end);
  return buf.toString('utf8', i, end);
}

// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + '\ufffd';
  return r;
}

// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
  if ((buf.length - i) % 2 === 0) {
    var r = buf.toString('utf16le', i);
    if (r) {
      var c = r.charCodeAt(r.length - 1);
      if (c >= 0xD800 && c <= 0xDBFF) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        return r.slice(0, -1);
      }
    }
    return r;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = buf[buf.length - 1];
  return buf.toString('utf16le', i, buf.length - 1);
}

// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) {
    var end = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString('utf16le', 0, end);
  }
  return r;
}

function base64Text(buf, i) {
  var n = (buf.length - i) % 3;
  if (n === 0) return buf.toString('base64', i);
  this.lastNeed = 3 - n;
  this.lastTotal = 3;
  if (n === 1) {
    this.lastChar[0] = buf[buf.length - 1];
  } else {
    this.lastChar[0] = buf[buf.length - 2];
    this.lastChar[1] = buf[buf.length - 1];
  }
  return buf.toString('base64', i, buf.length - n);
}

function base64End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
  return r;
}

// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
  return buf.toString(this.encoding);
}

function simpleEnd(buf) {
  return buf && buf.length ? this.write(buf) : '';
}

/***/ }),

/***/ "./node_modules/react-html-parser/lib/HtmlParser.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-html-parser/lib/HtmlParser.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HtmlParser;

var _htmlparser = __webpack_require__(/*! htmlparser2 */ "./node_modules/htmlparser2/lib/index.js");

var _htmlparser2 = _interopRequireDefault(_htmlparser);

var _processNodes = __webpack_require__(/*! ./processNodes */ "./node_modules/react-html-parser/lib/processNodes.js");

var _processNodes2 = _interopRequireDefault(_processNodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Parses a HTML string and returns a list of React components generated from it
 *
 * @param {String} html The HTML to convert into React component
 * @param {Object} options Options to pass
 * @returns {Array} List of top level React elements
 */
function HtmlParser(html) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$decodeEntities = _ref.decodeEntities,
      decodeEntities = _ref$decodeEntities === undefined ? true : _ref$decodeEntities,
      transform = _ref.transform,
      _ref$preprocessNodes = _ref.preprocessNodes,
      preprocessNodes = _ref$preprocessNodes === undefined ? function (nodes) {
    return nodes;
  } : _ref$preprocessNodes;

  var nodes = preprocessNodes(_htmlparser2.default.parseDOM(html, { decodeEntities: decodeEntities }));
  return (0, _processNodes2.default)(nodes, transform);
}

/***/ }),

/***/ "./node_modules/react-html-parser/lib/convertNodeToElement.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-html-parser/lib/convertNodeToElement.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = convertNodeToElement;

var _elementTypes = __webpack_require__(/*! ./elementTypes */ "./node_modules/react-html-parser/lib/elementTypes/index.js");

var _elementTypes2 = _interopRequireDefault(_elementTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts a htmlparser2 node to a React element
 *
 * @param {Object} node The htmlparser2 node to convert
 * @param {Number} index The index of the current node
 * @param {Function} transform Transform function to apply to children of the node
 * @returns {React.Element}
 */
function convertNodeToElement(node, index, transform) {
  return _elementTypes2.default[node.type](node, index, transform);
}

/***/ }),

/***/ "./node_modules/react-html-parser/lib/dom/attributes/BooleanAttributes.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-html-parser/lib/dom/attributes/BooleanAttributes.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * List of boolean attributes
 * These attributes should have their React attribute value set to be the same as their name
 * E.g. <input disabled> = <input disabled>
 *      <input disabled=""> = <input disabled>
 *      <input disabled="disabled"> = <input disabled>
 * @type {Array}
 */
exports.default = ['allowfullScreen', 'async', 'autoplay', 'capture', 'checked', 'controls', 'default', 'defer', 'disabled', 'formnovalidate', 'hidden', 'loop', 'multiple', 'muted', 'novalidate', 'open', 'playsinline', 'readonly', 'required', 'reversed', 'scoped', 'seamless', 'selected', 'itemscope'];

/***/ }),

/***/ "./node_modules/react-html-parser/lib/dom/attributes/ReactAttributes.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-html-parser/lib/dom/attributes/ReactAttributes.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Mapping of standard HTML attributes to their React counterparts
 * List taken and reversed from react/src/renderers/dom/shared/HTMLDOMPropertyConfig.js
 * https://github.com/facebook/react/blob/c9c3c339b757682f1154f1c915eb55e6a8766933/src/renderers/dom/shared/HTMLDOMPropertyConfig.js
 * @type {Object}
 */
exports.default = {
  /**
   * Standard Properties
   */
  accept: 'accept',
  'accept-charset': 'acceptCharset',
  accesskey: 'accessKey',
  action: 'action',
  allowfullscreen: 'allowFullScreen',
  allowtransparency: 'allowTransparency',
  alt: 'alt',
  as: 'as',
  async: 'async',
  autocomplete: 'autoComplete',
  autoplay: 'autoPlay',
  capture: 'capture',
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  charset: 'charSet',
  challenge: 'challenge',
  checked: 'checked',
  cite: 'cite',
  classid: 'classID',
  class: 'className',
  cols: 'cols',
  colspan: 'colSpan',
  content: 'content',
  contenteditable: 'contentEditable',
  contextmenu: 'contextMenu',
  controls: 'controls',
  controlsList: 'controlsList',
  coords: 'coords',
  crossorigin: 'crossOrigin',
  data: 'data',
  datetime: 'dateTime',
  default: 'default',
  defer: 'defer',
  dir: 'dir',
  disabled: 'disabled',
  download: 'download',
  draggable: 'draggable',
  enctype: 'encType',
  form: 'form',
  formaction: 'formAction',
  formenctype: 'formEncType',
  formmethod: 'formMethod',
  formnovalidate: 'formNoValidate',
  formtarget: 'formTarget',
  frameborder: 'frameBorder',
  headers: 'headers',
  height: 'height',
  hidden: 'hidden',
  high: 'high',
  href: 'href',
  hreflang: 'hrefLang',
  for: 'htmlFor',
  'http-equiv': 'httpEquiv',
  icon: 'icon',
  id: 'id',
  inputmode: 'inputMode',
  integrity: 'integrity',
  is: 'is',
  keyparams: 'keyParams',
  keytype: 'keyType',
  kind: 'kind',
  label: 'label',
  lang: 'lang',
  list: 'list',
  loop: 'loop',
  low: 'low',
  manifest: 'manifest',
  marginheight: 'marginHeight',
  marginwidth: 'marginWidth',
  max: 'max',
  maxlength: 'maxLength',
  media: 'media',
  mediagroup: 'mediaGroup',
  method: 'method',
  min: 'min',
  minlength: 'minLength',
  multiple: 'multiple',
  muted: 'muted',
  name: 'name',
  nonce: 'nonce',
  novalidate: 'noValidate',
  open: 'open',
  optimum: 'optimum',
  pattern: 'pattern',
  placeholder: 'placeholder',
  playsinline: 'playsInline',
  poster: 'poster',
  preload: 'preload',
  profile: 'profile',
  radiogroup: 'radioGroup',
  readonly: 'readOnly',
  referrerpolicy: 'referrerPolicy',
  rel: 'rel',
  required: 'required',
  reversed: 'reversed',
  role: 'role',
  rows: 'rows',
  rowspan: 'rowSpan',
  sandbox: 'sandbox',
  scope: 'scope',
  scoped: 'scoped',
  scrolling: 'scrolling',
  seamless: 'seamless',
  selected: 'selected',
  shape: 'shape',
  size: 'size',
  sizes: 'sizes',
  slot: 'slot',
  span: 'span',
  spellcheck: 'spellCheck',
  src: 'src',
  srcdoc: 'srcDoc',
  srclang: 'srcLang',
  srcset: 'srcSet',
  start: 'start',
  step: 'step',
  style: 'style',
  summary: 'summary',
  tabindex: 'tabIndex',
  target: 'target',
  title: 'title',
  type: 'type',
  usemap: 'useMap',
  value: 'value',
  width: 'width',
  wmode: 'wmode',
  wrap: 'wrap',
  /**
   * RDFa Properties
   */
  about: 'about',
  datatype: 'datatype',
  inlist: 'inlist',
  prefix: 'prefix',
  property: 'property',
  resource: 'resource',
  typeof: 'typeof',
  vocab: 'vocab',
  /**
   * Non-standard Properties
   */
  autocapitalize: 'autoCapitalize',
  autocorrect: 'autoCorrect',
  autosave: 'autoSave',
  color: 'color',
  itemprop: 'itemProp',
  itemscope: 'itemScope',
  itemtype: 'itemType',
  itemid: 'itemID',
  itemref: 'itemRef',
  results: 'results',
  security: 'security',
  unselectable: 'unselectable'
};

/***/ }),

/***/ "./node_modules/react-html-parser/lib/dom/elements/VoidElements.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-html-parser/lib/dom/elements/VoidElements.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * List of void elements
 * These elements are not allowed to have children
 * @type {Array}
 */
exports.default = ['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr'];

/***/ }),

/***/ "./node_modules/react-html-parser/lib/elementTypes/StyleElementType.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-html-parser/lib/elementTypes/StyleElementType.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = StyleElementType;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _generatePropsFromAttributes = __webpack_require__(/*! ../utils/generatePropsFromAttributes */ "./node_modules/react-html-parser/lib/utils/generatePropsFromAttributes.js");

var _generatePropsFromAttributes2 = _interopRequireDefault(_generatePropsFromAttributes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts a <style> element to a React element
 *
 * @param {Object} node The style node
 * @param {String} index The index of the React element relative to it's parent
 * @returns {React.Element} The React style element
 */
function StyleElementType(node, index) {

  // The style element only ever has a single child which is the styles so try and find this to add as
  // a child to the style element that will be created
  var styles = void 0;
  if (node.children.length > 0) {
    styles = node.children[0].data;
  }

  // generate props
  var props = (0, _generatePropsFromAttributes2.default)(node.attribs, index);

  // create and return the element
  return _react2.default.createElement('style', props, styles);
}

/***/ }),

/***/ "./node_modules/react-html-parser/lib/elementTypes/TagElementType.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-html-parser/lib/elementTypes/TagElementType.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TagElementType;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _processNodes = __webpack_require__(/*! ../processNodes */ "./node_modules/react-html-parser/lib/processNodes.js");

var _processNodes2 = _interopRequireDefault(_processNodes);

var _generatePropsFromAttributes = __webpack_require__(/*! ../utils/generatePropsFromAttributes */ "./node_modules/react-html-parser/lib/utils/generatePropsFromAttributes.js");

var _generatePropsFromAttributes2 = _interopRequireDefault(_generatePropsFromAttributes);

var _VoidElements = __webpack_require__(/*! ../dom/elements/VoidElements */ "./node_modules/react-html-parser/lib/dom/elements/VoidElements.js");

var _VoidElements2 = _interopRequireDefault(_VoidElements);

var _isValidTagOrAttributeName = __webpack_require__(/*! ../utils/isValidTagOrAttributeName */ "./node_modules/react-html-parser/lib/utils/isValidTagOrAttributeName.js");

var _isValidTagOrAttributeName2 = _interopRequireDefault(_isValidTagOrAttributeName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts any element (excluding style - see StyleElementType - and script) to a react element.
 *
 * @param {Object} node The tag node
 * @param {String} index The index of the React element relative to it's parent
 * @param {Function} transform The transform function to apply to all children
 * @returns {React.Element} The React tag element
 */
function TagElementType(node, index, transform) {

  var tagName = node.name;

  // validate tag name
  if (!(0, _isValidTagOrAttributeName2.default)(tagName)) {
    return null;
  }

  // generate props
  var props = (0, _generatePropsFromAttributes2.default)(node.attribs, index);

  // If the node is not a void element and has children then process them
  var children = null;
  if (_VoidElements2.default.indexOf(tagName) === -1) {
    children = (0, _processNodes2.default)(node.children, transform);
  }

  // create and return the element
  return _react2.default.createElement(tagName, props, children);
}

/***/ }),

/***/ "./node_modules/react-html-parser/lib/elementTypes/TextElementType.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-html-parser/lib/elementTypes/TextElementType.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TextElementType;
/**
 * Converts a text node to a React text element
 *
 * @param {Object} node The text node
 * @returns {String} The text
 */
function TextElementType(node) {

  // React will accept plain text for rendering so just return the node data
  return node.data;
}

/***/ }),

/***/ "./node_modules/react-html-parser/lib/elementTypes/UnsupportedElementType.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/react-html-parser/lib/elementTypes/UnsupportedElementType.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UnsupportedElementType;
/**
 * Handles an unsupported element type by returning null so nothing is rendered
 * @returns {null}
 */
function UnsupportedElementType() {

  // do nothing because the element type is unsupported
  // comment, directive, script, cdata, doctype are all currently unsupported
  return null;
}

/***/ }),

/***/ "./node_modules/react-html-parser/lib/elementTypes/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-html-parser/lib/elementTypes/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ElementType$Text$Ele;

var _htmlparser = __webpack_require__(/*! htmlparser2 */ "./node_modules/htmlparser2/lib/index.js");

var _TextElementType = __webpack_require__(/*! ./TextElementType */ "./node_modules/react-html-parser/lib/elementTypes/TextElementType.js");

var _TextElementType2 = _interopRequireDefault(_TextElementType);

var _TagElementType = __webpack_require__(/*! ./TagElementType */ "./node_modules/react-html-parser/lib/elementTypes/TagElementType.js");

var _TagElementType2 = _interopRequireDefault(_TagElementType);

var _StyleElementType = __webpack_require__(/*! ./StyleElementType */ "./node_modules/react-html-parser/lib/elementTypes/StyleElementType.js");

var _StyleElementType2 = _interopRequireDefault(_StyleElementType);

var _UnsupportedElementType = __webpack_require__(/*! ./UnsupportedElementType */ "./node_modules/react-html-parser/lib/elementTypes/UnsupportedElementType.js");

var _UnsupportedElementType2 = _interopRequireDefault(_UnsupportedElementType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /*
                                                                                                                                                                                                                   * Map each htmlparser2 element type to a function which will convert that element type to a React element
                                                                                                                                                                                                                   * Not all of the element types are supported so the UnsupportedElementType is used for them which will not return any
                                                                                                                                                                                                                   * value
                                                                                                                                                                                                                   */

exports.default = (_ElementType$Text$Ele = {}, _defineProperty(_ElementType$Text$Ele, _htmlparser.ElementType.Text, _TextElementType2.default), _defineProperty(_ElementType$Text$Ele, _htmlparser.ElementType.Tag, _TagElementType2.default), _defineProperty(_ElementType$Text$Ele, _htmlparser.ElementType.Style, _StyleElementType2.default), _defineProperty(_ElementType$Text$Ele, _htmlparser.ElementType.Directive, _UnsupportedElementType2.default), _defineProperty(_ElementType$Text$Ele, _htmlparser.ElementType.Comment, _UnsupportedElementType2.default), _defineProperty(_ElementType$Text$Ele, _htmlparser.ElementType.Script, _UnsupportedElementType2.default), _defineProperty(_ElementType$Text$Ele, _htmlparser.ElementType.CDATA, _UnsupportedElementType2.default), _defineProperty(_ElementType$Text$Ele, _htmlparser.ElementType.Doctype, _UnsupportedElementType2.default), _ElementType$Text$Ele);

/***/ }),

/***/ "./node_modules/react-html-parser/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-html-parser/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.htmlparser2 = exports.convertNodeToElement = exports.processNodes = undefined;

var _processNodes = __webpack_require__(/*! ./processNodes */ "./node_modules/react-html-parser/lib/processNodes.js");

Object.defineProperty(exports, 'processNodes', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_processNodes).default;
  }
});

var _convertNodeToElement = __webpack_require__(/*! ./convertNodeToElement */ "./node_modules/react-html-parser/lib/convertNodeToElement.js");

Object.defineProperty(exports, 'convertNodeToElement', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_convertNodeToElement).default;
  }
});

var _htmlparser = __webpack_require__(/*! htmlparser2 */ "./node_modules/htmlparser2/lib/index.js");

Object.defineProperty(exports, 'htmlparser2', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_htmlparser).default;
  }
});

var _HtmlParser = __webpack_require__(/*! ./HtmlParser */ "./node_modules/react-html-parser/lib/HtmlParser.js");

var _HtmlParser2 = _interopRequireDefault(_HtmlParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _HtmlParser2.default;

/***/ }),

/***/ "./node_modules/react-html-parser/lib/processNodes.js":
/*!************************************************************!*\
  !*** ./node_modules/react-html-parser/lib/processNodes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = processNodes;

var _isEmptyTextNode = __webpack_require__(/*! ./utils/isEmptyTextNode */ "./node_modules/react-html-parser/lib/utils/isEmptyTextNode.js");

var _isEmptyTextNode2 = _interopRequireDefault(_isEmptyTextNode);

var _convertNodeToElement = __webpack_require__(/*! ./convertNodeToElement */ "./node_modules/react-html-parser/lib/convertNodeToElement.js");

var _convertNodeToElement2 = _interopRequireDefault(_convertNodeToElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Processes the nodes generated by htmlparser2 and convert them all into React elements
 *
 * @param {Object[]} nodes List of nodes to process
 * @param {Function} transform Transform function to optionally apply to nodes
 * @returns {React.Element[]} The list of processed React elements
 */
function processNodes(nodes, transform) {

  return nodes.filter(function (node) {
    return !(0, _isEmptyTextNode2.default)(node);
  }).map(function (node, index) {

    // return the result of the transform function if applicable
    var transformed = void 0;
    if (typeof transform === 'function') {
      transformed = transform(node, index);
      if (transformed === null || !!transformed) {
        return transformed;
      }
    }

    // otherwise convert the node as standard
    return (0, _convertNodeToElement2.default)(node, index, transform);
  });
}

/***/ }),

/***/ "./node_modules/react-html-parser/lib/utils/generatePropsFromAttributes.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-html-parser/lib/utils/generatePropsFromAttributes.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = generatePropsFromAttributes;

var _htmlAttributesToReact = __webpack_require__(/*! ./htmlAttributesToReact */ "./node_modules/react-html-parser/lib/utils/htmlAttributesToReact.js");

var _htmlAttributesToReact2 = _interopRequireDefault(_htmlAttributesToReact);

var _inlineStyleToObject = __webpack_require__(/*! ./inlineStyleToObject */ "./node_modules/react-html-parser/lib/utils/inlineStyleToObject.js");

var _inlineStyleToObject2 = _interopRequireDefault(_inlineStyleToObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Generates props for a React element from an object of HTML attributes
 *
 * @param {Object} attributes The HTML attributes
 * @param {String} key The key to give the react element
 */
function generatePropsFromAttributes(attributes, key) {

  // generate props
  var props = _extends({}, (0, _htmlAttributesToReact2.default)(attributes), { key: key });

  // if there is an inline/string style prop then convert it to a React style object
  // otherwise, it is invalid and omitted
  if (typeof props.style === 'string' || props.style instanceof String) {
    props.style = (0, _inlineStyleToObject2.default)(props.style);
  } else {
    delete props.style;
  }

  return props;
}

/***/ }),

/***/ "./node_modules/react-html-parser/lib/utils/htmlAttributesToReact.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-html-parser/lib/utils/htmlAttributesToReact.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = htmlAttributesToReact;

var _BooleanAttributes = __webpack_require__(/*! ../dom/attributes/BooleanAttributes */ "./node_modules/react-html-parser/lib/dom/attributes/BooleanAttributes.js");

var _BooleanAttributes2 = _interopRequireDefault(_BooleanAttributes);

var _ReactAttributes = __webpack_require__(/*! ../dom/attributes/ReactAttributes */ "./node_modules/react-html-parser/lib/dom/attributes/ReactAttributes.js");

var _ReactAttributes2 = _interopRequireDefault(_ReactAttributes);

var _isValidTagOrAttributeName = __webpack_require__(/*! ./isValidTagOrAttributeName */ "./node_modules/react-html-parser/lib/utils/isValidTagOrAttributeName.js");

var _isValidTagOrAttributeName2 = _interopRequireDefault(_isValidTagOrAttributeName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns the parsed attribute value taking into account things like boolean attributes
 *
 * @param {String} attribute The name of the attribute
 * @param {*} value The value of the attribute from the HTML
 * @returns {*} The parsed attribute value
 */
var getParsedAttributeValue = function getParsedAttributeValue(attribute, value) {

  // if the attribute if a boolean then it's value should be the same as it's name
  // e.g. disabled="disabled"
  var lowerBooleanAttributes = _BooleanAttributes2.default.map(function (attr) {
    return attr.toLowerCase();
  });
  if (lowerBooleanAttributes.indexOf(attribute.toLowerCase()) >= 0) {
    value = attribute;
  }

  return value;
};

/**
 * Takes an object of standard HTML property names and converts them to their React counterpart. If the react
 * version does not exist for an attribute then just use it as it is
 *
 * @param {Object} attributes The HTML attributes to convert
 * @returns {Object} The React attributes
 */
function htmlAttributesToReact(attributes) {

  return Object.keys(attributes).filter(function (attr) {
    return (0, _isValidTagOrAttributeName2.default)(attr);
  }).reduce(function (mappedAttributes, attribute) {

    // lowercase the attribute name and find it in the react attribute map
    var lowerCaseAttribute = attribute.toLowerCase();

    // format the attribute name
    var name = _ReactAttributes2.default[lowerCaseAttribute] || lowerCaseAttribute;

    // add the parsed attribute value to the mapped attributes
    mappedAttributes[name] = getParsedAttributeValue(name, attributes[attribute]);

    return mappedAttributes;
  }, {});
}

/***/ }),

/***/ "./node_modules/react-html-parser/lib/utils/inlineStyleToObject.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-html-parser/lib/utils/inlineStyleToObject.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = InlineStyleToObject;
/**
 * Converts an inline style string into an object of React style properties
 *
 * @param {String} inlineStyle='' The inline style to convert
 * @returns {Object} The converted style
 */
function InlineStyleToObject() {
  var inlineStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';


  // just return empty object if the inlineStyle is empty
  if (inlineStyle === '') {
    return {};
  }

  return inlineStyle.split(';').reduce(function (styleObject, stylePropertyValue) {

    // extract the style property name and value
    var _stylePropertyValue$s = stylePropertyValue.split(/^([^:]+):/).filter(function (val, i) {
      return i > 0;
    }).map(function (item) {
      return item.trim().toLowerCase();
    }),
        _stylePropertyValue$s2 = _slicedToArray(_stylePropertyValue$s, 2),
        property = _stylePropertyValue$s2[0],
        value = _stylePropertyValue$s2[1];

    // if there is no value (i.e. no : in the style) then ignore it


    if (value === undefined) {
      return styleObject;
    }

    // convert the property name into the correct React format
    // remove all hyphens and convert the letter immediately after each hyphen to upper case
    // additionally don't uppercase any -ms- prefix
    // e.g. -ms-style-property = msStyleProperty
    //      -webkit-style-property = WebkitStyleProperty
    property = property.replace(/^-ms-/, 'ms-').replace(/-(.)/g, function (_, character) {
      return character.toUpperCase();
    });

    // add the new style property and value to the style object
    styleObject[property] = value;

    return styleObject;
  }, {});
}

/***/ }),

/***/ "./node_modules/react-html-parser/lib/utils/isEmptyTextNode.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-html-parser/lib/utils/isEmptyTextNode.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmptyTextNode;
/**
 * Tests a htmlparser2 node and returns whether is it a text node at the start and end of the line containing only
 * white space. This allows these node types to be excluded from the rendering because they are unnecessary.
 *
 * @param {Object} node The element object as created by htmlparser2
 * @returns {boolean} Whether the node is an empty text node
 */
function isEmptyTextNode(node) {
  return node.type === 'text' && /\r?\n/.test(node.data) && node.data.trim() === '';
}

/***/ }),

/***/ "./node_modules/react-html-parser/lib/utils/isValidTagOrAttributeName.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-html-parser/lib/utils/isValidTagOrAttributeName.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isValidTagOrAttributeName;
var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;

var nameCache = {};

function isValidTagOrAttributeName(tagName) {
  if (!nameCache.hasOwnProperty(tagName)) {
    nameCache[tagName] = VALID_TAG_REGEX.test(tagName);
  }
  return nameCache[tagName];
}

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/safe-buffer/index.js":
/*!*******************************************!*\
  !*** ./node_modules/safe-buffer/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable node/no-deprecated-api */
var buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js")
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.prototype = Object.create(Buffer.prototype)

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}


/***/ }),

/***/ "./node_modules/sturdy-websocket/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/sturdy-websocket/dist/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var defaults = __webpack_require__(/*! lodash.defaults */ "./node_modules/lodash.defaults/index.js");
var SHOULD_RECONNECT_FALSE_MESSAGE = "Provided shouldReconnect() returned false. Closing permanently.";
var SHOULD_RECONNECT_PROMISE_FALSE_MESSAGE = "Provided shouldReconnect() resolved to false. Closing permanently.";
var SturdyWebSocket = /** @class */ (function () {
    function SturdyWebSocket(url, protocolsOrOptions, options) {
        this.url = url;
        this.onclose = null;
        this.onerror = null;
        this.onmessage = null;
        this.onopen = null;
        this.ondown = null;
        this.onreopen = null;
        this.CONNECTING = SturdyWebSocket.CONNECTING;
        this.OPEN = SturdyWebSocket.OPEN;
        this.CLOSING = SturdyWebSocket.CLOSING;
        this.CLOSED = SturdyWebSocket.CLOSED;
        this.hasBeenOpened = false;
        this.isClosed = false;
        this.messageBuffer = [];
        this.nextRetryTime = 0;
        this.reconnectCount = 0;
        this.lastKnownExtensions = "";
        this.lastKnownProtocol = "";
        this.listeners = {};
        if (protocolsOrOptions == null ||
            typeof protocolsOrOptions === "string" ||
            Array.isArray(protocolsOrOptions)) {
            this.protocols = protocolsOrOptions;
        }
        else {
            options = protocolsOrOptions;
        }
        this.options = defaults({}, options, SturdyWebSocket.DEFAULT_OPTIONS);
        if (!this.options.wsConstructor) {
            if (typeof WebSocket !== "undefined") {
                this.options.wsConstructor = WebSocket;
            }
            else {
                throw new Error("WebSocket not present in global scope and no " +
                    "wsConstructor option was provided.");
            }
        }
        this.openNewWebSocket();
    }
    Object.defineProperty(SturdyWebSocket.prototype, "binaryType", {
        get: function () {
            return this.binaryTypeInternal || "blob";
        },
        set: function (binaryType) {
            this.binaryTypeInternal = binaryType;
            if (this.ws) {
                this.ws.binaryType = binaryType;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SturdyWebSocket.prototype, "bufferedAmount", {
        get: function () {
            var sum = this.ws ? this.ws.bufferedAmount : 0;
            var hasUnknownAmount = false;
            this.messageBuffer.forEach(function (data) {
                var byteLength = getDataByteLength(data);
                if (byteLength != null) {
                    sum += byteLength;
                }
                else {
                    hasUnknownAmount = true;
                }
            });
            if (hasUnknownAmount) {
                this.debugLog("Some buffered data had unknown length. bufferedAmount()" +
                    " return value may be below the correct amount.");
            }
            return sum;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SturdyWebSocket.prototype, "extensions", {
        get: function () {
            return this.ws ? this.ws.extensions : this.lastKnownExtensions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SturdyWebSocket.prototype, "protocol", {
        get: function () {
            return this.ws ? this.ws.protocol : this.lastKnownProtocol;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SturdyWebSocket.prototype, "readyState", {
        get: function () {
            return this.isClosed ? SturdyWebSocket.CLOSED : SturdyWebSocket.OPEN;
        },
        enumerable: true,
        configurable: true
    });
    SturdyWebSocket.prototype.close = function (code, reason) {
        if (this.ws) {
            this.ws.close(code, reason);
        }
        this.shutdown();
        this.debugLog("WebSocket permanently closed by client.");
    };
    SturdyWebSocket.prototype.send = function (data) {
        if (this.ws && this.ws.readyState === this.OPEN) {
            this.ws.send(data);
        }
        else {
            this.messageBuffer.push(data);
        }
    };
    SturdyWebSocket.prototype.addEventListener = function (type, listener) {
        if (!this.listeners[type]) {
            this.listeners[type] = [];
        }
        this.listeners[type].push(listener);
    };
    SturdyWebSocket.prototype.dispatchEvent = function (event) {
        return this.dispatchEventOfType(event.type, event);
    };
    SturdyWebSocket.prototype.removeEventListener = function (type, listener) {
        if (this.listeners[type]) {
            this.listeners[type] = this.listeners[type].filter(function (l) { return l !== listener; });
        }
    };
    SturdyWebSocket.prototype.openNewWebSocket = function () {
        var _this = this;
        if (this.isClosed) {
            return;
        }
        var _a = this.options, connectTimeout = _a.connectTimeout, wsConstructor = _a.wsConstructor;
        this.debugLog("Opening new WebSocket to " + this.url + ".");
        var ws = new wsConstructor(this.url, this.protocols);
        ws.onclose = function (event) { return _this.handleClose(event); };
        ws.onerror = function (event) { return _this.handleError(event); };
        ws.onmessage = function (event) { return _this.handleMessage(event); };
        ws.onopen = function (event) { return _this.handleOpen(event); };
        this.connectTimeoutId = setTimeout(function () {
            // If this is running, we still haven't opened the websocket.
            // Kill it so we can try again.
            _this.clearConnectTimeout();
            ws.close();
        }, connectTimeout);
        this.ws = ws;
    };
    SturdyWebSocket.prototype.handleOpen = function (event) {
        var _this = this;
        if (!this.ws || this.isClosed) {
            return;
        }
        var allClearResetTime = this.options.allClearResetTime;
        this.debugLog("WebSocket opened.");
        if (this.binaryTypeInternal != null) {
            this.ws.binaryType = this.binaryTypeInternal;
        }
        else {
            this.binaryTypeInternal = this.ws.binaryType;
        }
        this.clearConnectTimeout();
        if (this.hasBeenOpened) {
            this.dispatchEventOfType("reopen", event);
        }
        else {
            this.dispatchEventOfType("open", event);
            this.hasBeenOpened = true;
        }
        this.messageBuffer.forEach(function (message) { return _this.send(message); });
        this.messageBuffer = [];
        this.allClearTimeoutId = setTimeout(function () {
            _this.clearAllClearTimeout();
            _this.nextRetryTime = 0;
            _this.reconnectCount = 0;
            var openTime = (allClearResetTime / 1000) | 0;
            _this.debugLog("WebSocket remained open for " + openTime + " seconds. Resetting" +
                " retry time and count.");
        }, allClearResetTime);
    };
    SturdyWebSocket.prototype.handleMessage = function (event) {
        if (this.isClosed) {
            return;
        }
        this.dispatchEventOfType("message", event);
    };
    SturdyWebSocket.prototype.handleClose = function (event) {
        var _this = this;
        if (this.isClosed) {
            return;
        }
        var _a = this.options, maxReconnectAttempts = _a.maxReconnectAttempts, shouldReconnect = _a.shouldReconnect;
        this.clearConnectTimeout();
        this.clearAllClearTimeout();
        if (this.ws) {
            this.lastKnownExtensions = this.ws.extensions;
            this.lastKnownProtocol = this.ws.protocol;
            this.ws = undefined;
        }
        this.dispatchEventOfType("down", event);
        if (this.reconnectCount >= maxReconnectAttempts) {
            this.stopReconnecting(event, this.getTooManyFailedReconnectsMessage());
            return;
        }
        var willReconnect = shouldReconnect(event);
        if (typeof willReconnect === "boolean") {
            this.handleWillReconnect(willReconnect, event, SHOULD_RECONNECT_FALSE_MESSAGE);
        }
        else {
            willReconnect.then(function (willReconnectResolved) {
                if (_this.isClosed) {
                    return;
                }
                _this.handleWillReconnect(willReconnectResolved, event, SHOULD_RECONNECT_PROMISE_FALSE_MESSAGE);
            });
        }
    };
    SturdyWebSocket.prototype.handleError = function (event) {
        this.dispatchEventOfType("error", event);
        this.debugLog("WebSocket encountered an error.");
    };
    SturdyWebSocket.prototype.handleWillReconnect = function (willReconnect, event, denialReason) {
        if (willReconnect) {
            this.reconnect();
        }
        else {
            this.stopReconnecting(event, denialReason);
        }
    };
    SturdyWebSocket.prototype.reconnect = function () {
        var _this = this;
        var _a = this.options, minReconnectDelay = _a.minReconnectDelay, maxReconnectDelay = _a.maxReconnectDelay, reconnectBackoffFactor = _a.reconnectBackoffFactor;
        this.reconnectCount++;
        var retryTime = this.nextRetryTime;
        this.nextRetryTime = Math.max(minReconnectDelay, Math.min(this.nextRetryTime * reconnectBackoffFactor, maxReconnectDelay));
        setTimeout(function () { return _this.openNewWebSocket(); }, retryTime);
        var retryTimeSeconds = (retryTime / 1000) | 0;
        this.debugLog("WebSocket was closed. Re-opening in " + retryTimeSeconds + " seconds.");
    };
    SturdyWebSocket.prototype.stopReconnecting = function (event, debugReason) {
        this.debugLog(debugReason);
        this.shutdown();
        this.dispatchEventOfType("close", event);
    };
    SturdyWebSocket.prototype.shutdown = function () {
        this.isClosed = true;
        this.clearAllTimeouts();
        this.messageBuffer = [];
    };
    SturdyWebSocket.prototype.clearAllTimeouts = function () {
        this.clearConnectTimeout();
        this.clearAllClearTimeout();
    };
    SturdyWebSocket.prototype.clearConnectTimeout = function () {
        if (this.connectTimeoutId != null) {
            clearTimeout(this.connectTimeoutId);
            this.connectTimeoutId = undefined;
        }
    };
    SturdyWebSocket.prototype.clearAllClearTimeout = function () {
        if (this.allClearTimeoutId != null) {
            clearTimeout(this.allClearTimeoutId);
            this.allClearTimeoutId = undefined;
        }
    };
    SturdyWebSocket.prototype.dispatchEventOfType = function (type, event) {
        var _this = this;
        switch (type) {
            case "close":
                if (this.onclose) {
                    this.onclose(event);
                }
                break;
            case "error":
                if (this.onerror) {
                    this.onerror(event);
                }
                break;
            case "message":
                if (this.onmessage) {
                    this.onmessage(event);
                }
                break;
            case "open":
                if (this.onopen) {
                    this.onopen(event);
                }
                break;
            case "down":
                if (this.ondown) {
                    this.ondown(event);
                }
                break;
            case "reopen":
                if (this.onreopen) {
                    this.onreopen(event);
                }
                break;
        }
        if (type in this.listeners) {
            this.listeners[type]
                .slice()
                .forEach(function (listener) { return _this.callListener(listener, event); });
        }
        return !event || !event.defaultPrevented;
    };
    SturdyWebSocket.prototype.callListener = function (listener, event) {
        if (typeof listener === "function") {
            listener.call(this, event);
        }
        else {
            listener.handleEvent.call(this, event);
        }
    };
    SturdyWebSocket.prototype.debugLog = function (message) {
        if (this.options.debug) {
            // tslint:disable-next-line:no-console
            console.log(message);
        }
    };
    SturdyWebSocket.prototype.getTooManyFailedReconnectsMessage = function () {
        var maxReconnectAttempts = this.options.maxReconnectAttempts;
        return "Failed to reconnect after " + maxReconnectAttempts + " " + pluralize("attempt", maxReconnectAttempts) + ". Closing permanently.";
    };
    SturdyWebSocket.DEFAULT_OPTIONS = {
        allClearResetTime: 5000,
        connectTimeout: 5000,
        debug: false,
        minReconnectDelay: 1000,
        maxReconnectDelay: 30000,
        maxReconnectAttempts: Number.POSITIVE_INFINITY,
        reconnectBackoffFactor: 1.5,
        shouldReconnect: function () { return true; },
        wsConstructor: undefined,
    };
    SturdyWebSocket.CONNECTING = 0;
    SturdyWebSocket.OPEN = 1;
    SturdyWebSocket.CLOSING = 2;
    SturdyWebSocket.CLOSED = 3;
    return SturdyWebSocket;
}());
exports.default = SturdyWebSocket;
function getDataByteLength(data) {
    if (typeof data === "string") {
        // UTF-16 strings use two bytes per character.
        return 2 * data.length;
    }
    else if (data instanceof ArrayBuffer) {
        return data.byteLength;
    }
    else if (data instanceof Blob) {
        return data.size;
    }
    else {
        return undefined;
    }
}
function pluralize(s, n) {
    return n === 1 ? s : s + "s";
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./utils/Onboarding.js":
/*!*****************************!*\
  !*** ./utils/Onboarding.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bnc_onboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bnc-onboard */ "./node_modules/bnc-onboard/dist/esm/onboard.js");

var onboard = undefined;

var getOnboard = function getOnboard(subscriptions) {
  if (!onboard) {
    onboard = Object(bnc_onboard__WEBPACK_IMPORTED_MODULE_0__["default"])({
      dappId: '482ea5f0-5482-4017-8f49-3e122720d788',
      subscriptions: subscriptions,
      networkId: 3,
      walletSelect: {
        wallets: [{
          walletName: 'metamask',
          preferred: true
        }]
      }
    });
  }

  return onboard;
};

/* harmony default export */ __webpack_exports__["default"] = (getOnboard);

/***/ }),

/***/ "./utils/addrShortener.js":
/*!********************************!*\
  !*** ./utils/addrShortener.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (addr) {
  return react_html_parser__WEBPACK_IMPORTED_MODULE_0___default()(addr.substring(0, 6) + '&bull;&bull;&bull;' + addr.substring(addr.length - 7, addr.length - 1));
});

/***/ }),

/***/ 2:
/*!*********************************!*\
  !*** readable-stream (ignored) ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=2.js.map