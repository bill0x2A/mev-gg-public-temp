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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ \"./src/components/index.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nvar Page = function() {\n    _s1();\n    var ref = _slicedToArray((0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount)(), 1), ref1 = ref[0], accountData = ref1.data;\n    if (accountData === null || accountData === void 0 ? void 0 : accountData.address) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.Account, {\n                __source: {\n                    fileName: \"/Users/mhall/personal/mevgg-test/next-frontend/src/pages/index.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.NetworkSwitcher, {\n                __source: {\n                    fileName: \"/Users/mhall/personal/mevgg-test/next-frontend/src/pages/index.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.Fomo, {\n                __source: {\n                    fileName: \"/Users/mhall/personal/mevgg-test/next-frontend/src/pages/index.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.TokenBalance, {\n                __source: {\n                    fileName: \"/Users/mhall/personal/mevgg-test/next-frontend/src/pages/index.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                },\n                __self: _this\n            })\n        ]\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.Connect, {\n        __source: {\n            fileName: \"/Users/mhall/personal/mevgg-test/next-frontend/src/pages/index.tsx\",\n            lineNumber: 20,\n            columnNumber: 10\n        },\n        __self: _this\n    }));\n};\n_s1(Page, \"IIyDX94e/UwJJ/QAG7Iqdt6rJ6U=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount\n    ];\n});\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE4QjtBQUNJO0FBRW1EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJGLEdBQUssQ0FBQ08sSUFBSSxHQUFHLFFBQ2IsR0FEbUIsQ0FBQzs7SUFDbEIsR0FBSyxDQUEyQk4sR0FBWSxrQkFBWkEsaURBQVUsZUFBVkEsR0FBWSxLQUE3Qk8sV0FBVyxRQUFqQkMsSUFBSTtJQUViLEVBQUUsRUFBRUQsV0FBVyxhQUFYQSxXQUFXLEtBQVhBLElBQUksQ0FBSkEsQ0FBb0IsR0FBcEJBLElBQUksQ0FBSkEsQ0FBb0IsR0FBcEJBLFdBQVcsQ0FBRUUsT0FBTyxFQUN0QixNQUFNOztpRkFFRFIsZ0RBQU87Ozs7Ozs7O2lGQUNQRSx3REFBZTs7Ozs7Ozs7aUZBQ2ZFLDZDQUFJOzs7Ozs7OztpRkFDSkQscURBQVk7Ozs7Ozs7Ozs7SUFLbkIsTUFBTSxzRUFBRUYsZ0RBQU87Ozs7Ozs7O0FBQ2pCLENBQUM7SUFmS0ksSUFBSTs7UUFDd0JOLDZDQUFVOzs7S0FEdENNLElBQUk7QUFpQlYsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlQWNjb3VudCB9IGZyb20gJ3dhZ21pJ1xuXG5pbXBvcnQgeyBBY2NvdW50LCBDb25uZWN0LCBOZXR3b3JrU3dpdGNoZXIsIFRva2VuQmFsYW5jZSwgRm9tbyB9IGZyb20gJy4uL2NvbXBvbmVudHMnXG5cbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFt7IGRhdGE6IGFjY291bnREYXRhIH1dID0gdXNlQWNjb3VudCgpXG5cbiAgaWYgKGFjY291bnREYXRhPy5hZGRyZXNzKVxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8QWNjb3VudCAvPlxuICAgICAgICA8TmV0d29ya1N3aXRjaGVyIC8+XG4gICAgICAgIDxGb21vIC8+XG4gICAgICAgIDxUb2tlbkJhbGFuY2UgLz5cblxuICAgICAgPC8+XG4gICAgKVxuXG4gIHJldHVybiA8Q29ubmVjdCAvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VBY2NvdW50IiwiQWNjb3VudCIsIkNvbm5lY3QiLCJOZXR3b3JrU3dpdGNoZXIiLCJUb2tlbkJhbGFuY2UiLCJGb21vIiwiUGFnZSIsImFjY291bnREYXRhIiwiZGF0YSIsImFkZHJlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});