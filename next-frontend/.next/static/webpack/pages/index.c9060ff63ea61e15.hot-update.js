"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Fomo.tsx":
/*!*********************************!*\
  !*** ./src/components/Fomo.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Fomo\": function() { return /* binding */ Fomo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var _contracts_fomo_contract_address_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contracts/fomo-contract-address.json */ \"./src/contracts/fomo-contract-address.json\");\n/* harmony import */ var _contracts_fomoOE_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contracts/fomoOE.json */ \"./src/contracts/fomoOE.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nvar Fomo = function() {\n    _s1();\n    var ref = _slicedToArray((0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useContractRead)({\n        addressOrName: _contracts_fomo_contract_address_json__WEBPACK_IMPORTED_MODULE_1__.FomoOE,\n        contractInterface: _contracts_fomoOE_json__WEBPACK_IMPORTED_MODULE_2__.abi\n    }, \"getTimeLeft\"), 2), ref1 = ref[0], data = ref1.data, error = ref1.error, loading = ref1.loading, read = ref[1];\n    if (loading) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/mhall/personal/mevgg-test/next-frontend/src/components/Fomo.tsx\",\n            lineNumber: 13,\n            columnNumber: 25\n        },\n        __self: _this,\n        children: \"Fetching time left...\"\n    }));\n    if (error) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/mhall/personal/mevgg-test/next-frontend/src/components/Fomo.tsx\",\n            lineNumber: 14,\n            columnNumber: 23\n        },\n        __self: _this,\n        children: \"Error fetching time left\"\n    }));\n    console.log(data);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/mhall/personal/mevgg-test/next-frontend/src/components/Fomo.tsx\",\n            lineNumber: 17,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            __source: {\n                fileName: \"/Users/mhall/personal/mevgg-test/next-frontend/src/components/Fomo.tsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: [\n                \"Time left: \",\n                data === null || data === void 0 ? void 0 : data.toString\n            ]\n        })\n    }));\n};\n_s1(Fomo, \"cfBDIwTuuYvkMAEquYavTzHzrVg=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useContractRead\n    ];\n});\n_c = Fomo;\nvar _c;\n$RefreshReg$(_c, \"Fomo\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb21vLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFvRDtBQUVpQjtBQUNoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QyxHQUFLLENBQUNHLElBQUksR0FBRyxRQUNwQixHQUQwQixDQUFDOztJQUN2QixHQUFLLENBQW9DSCxHQUl2QixrQkFKdUJBLHNEQUFlLENBQUMsQ0FBQztRQUN0REksYUFBYSxFQUFFSCx5RUFBc0I7UUFDckNLLGlCQUFpQixFQUFFSix1REFBa0I7SUFDekMsQ0FBQyxFQUNHLENBQWEsMEJBSndCRixHQUl2QixLQUpUUSxJQUFJLFFBQUpBLElBQUksRUFBRUMsS0FBSyxRQUFMQSxLQUFLLEVBQUVDLE9BQU8sUUFBUEEsT0FBTyxFQUFJQyxJQUFJLEdBQUlYLEdBSXZCO0lBRWxCLEVBQUUsRUFBRVUsT0FBTyxFQUFFLE1BQU0sc0VBQUVFLENBQUc7Ozs7Ozs7a0JBQUMsQ0FBcUI7O0lBQzlDLEVBQUUsRUFBRUgsS0FBSyxFQUFFLE1BQU0sc0VBQUVHLENBQUc7Ozs7Ozs7a0JBQUMsQ0FBd0I7O0lBQy9DQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sSUFBSTtJQUNoQixNQUFNLHNFQUNESSxDQUFHOzs7Ozs7O3dGQUNDQSxDQUFHOzs7Ozs7OztnQkFBQyxDQUFXO2dCQUFDSixJQUFJLGFBQUpBLElBQUksS0FBSkEsSUFBSSxDQUFKQSxDQUFjLEdBQWRBLElBQUksQ0FBSkEsQ0FBYyxHQUFkQSxJQUFJLENBQUVPLFFBQVE7Ozs7QUFHM0MsQ0FBQztJQWZZWixJQUFJOztRQUM0Qkgsa0RBQWU7OztLQUQvQ0csSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb21vLnRzeD85MzYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRyYWN0LCB1c2VDb250cmFjdFJlYWQgfSBmcm9tICd3YWdtaSdcbmltcG9ydCB7IEJpZ051bWJlciB9IGZyb20gJ0BldGhlcnNwcm9qZWN0L2JpZ251bWJlcic7XG5pbXBvcnQgY29udHJhY3RBZGRyZXNzIGZyb20gXCIuLi9jb250cmFjdHMvZm9tby1jb250cmFjdC1hZGRyZXNzLmpzb25cIjtcbmltcG9ydCBGb21vT0VBcnRpZmFjdCBmcm9tIFwiLi4vY29udHJhY3RzL2ZvbW9PRS5qc29uXCI7XG5cbmV4cG9ydCBjb25zdCBGb21vID0gKCkgPT4ge1xuICAgIGNvbnN0IFt7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0sIHJlYWRdID0gdXNlQ29udHJhY3RSZWFkKHtcbiAgICAgICAgYWRkcmVzc09yTmFtZTogY29udHJhY3RBZGRyZXNzLkZvbW9PRSxcbiAgICAgICAgY29udHJhY3RJbnRlcmZhY2U6IEZvbW9PRUFydGlmYWN0LmFiaSxcbiAgICB9LFxuICAgICAgICBcImdldFRpbWVMZWZ0XCIpXG5cbiAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+RmV0Y2hpbmcgdGltZSBsZWZ0Li4uPC9kaXY+XG4gICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5FcnJvciBmZXRjaGluZyB0aW1lIGxlZnQ8L2Rpdj5cbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PlRpbWUgbGVmdDoge2RhdGE/LnRvU3RyaW5nfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZUNvbnRyYWN0UmVhZCIsImNvbnRyYWN0QWRkcmVzcyIsIkZvbW9PRUFydGlmYWN0IiwiRm9tbyIsImFkZHJlc3NPck5hbWUiLCJGb21vT0UiLCJjb250cmFjdEludGVyZmFjZSIsImFiaSIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJyZWFkIiwiZGl2IiwiY29uc29sZSIsImxvZyIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Fomo.tsx\n");

/***/ })

});