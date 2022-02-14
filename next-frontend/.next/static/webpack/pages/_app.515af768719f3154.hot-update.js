"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi/connectors/injected */ \"./node_modules/wagmi/connectors/injected/dist/wagmi-connectors-injected.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/process/browser.js\");\n\n\n\n\n// Imports\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n// Get environment variables\nvar alchemy = process.env.NEXT_PUBLIC_ALCHEMY_ID;\nvar etherscan = process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY;\nvar infuraId = process.env.NEXT_PUBLIC_INFURA_ID;\n// Pick chains\nvar chains = wagmi__WEBPACK_IMPORTED_MODULE_4__.developmentChains;\nvar defaultChain = wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.hardhat;\nconsole.log(chains);\nvar connectors = function(param) {\n    var chainId = param.chainId;\n    var ref, ref1;\n    var ref2;\n    var rpcUrl = (ref2 = (ref = chains.find(function(x) {\n        return x.id === chainId;\n    })) === null || ref === void 0 ? void 0 : (ref1 = ref.rpcUrls) === null || ref1 === void 0 ? void 0 : ref1[0]) !== null && ref2 !== void 0 ? ref2 : defaultChain.rpcUrls[0];\n    return [\n        new wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_3__.InjectedConnector({\n            chains: chains,\n            options: {\n                shimDisconnect: true\n            }\n        }), \n    ];\n};\nvar isChainSupported = function(chainId) {\n    console.log(chains.some(function(x) {\n        return x.id === chainId;\n    }));\n    return chains.some(function(x) {\n        return x.id === chainId;\n    });\n};\nvar provider = function(param) {\n    var chainId = param.chainId;\n    return ethers__WEBPACK_IMPORTED_MODULE_5__.providers.getNetwork(chainId ? chainId : wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.hardhat.id);\n};\nvar webSocketProvider = function(param) {\n    var chainId = param.chainId;\n    return isChainSupported(chainId) ? new ethers__WEBPACK_IMPORTED_MODULE_5__.providers.InfuraWebSocketProvider(chainId, infuraId) : undefined;\n};\nvar App = function(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(wagmi__WEBPACK_IMPORTED_MODULE_4__.Provider, {\n        autoConnect: true,\n        connectors: connectors,\n        provider: provider,\n        webSocketProvider: webSocketProvider,\n        __source: {\n            fileName: \"/Users/mhall/personal/mevgg-test/next-frontend/src/pages/_app.tsx\",\n            lineNumber: 64,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                __source: {\n                    fileName: \"/Users/mhall/personal/mevgg-test/next-frontend/src/pages/_app.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                    __source: {\n                        fileName: \"/Users/mhall/personal/mevgg-test/next-frontend/src/pages/_app.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"wagmi\"\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, _objectSpread({\n            }, pageProps, {\n                __source: {\n                    fileName: \"/Users/mhall/personal/mevgg-test/next-frontend/src/pages/_app.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 7\n                },\n                __self: _this\n            }))\n        ]\n    }));\n};\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OytGQUNOc0MsQ0FBSzs7Ozs7Ozs4QkFBQyxDQUFLOzs7aUZBR2JILFNBQVM7ZUFBS0MsU0FBUzs7Ozs7Ozs7OztBQUc5QixDQUFDO0tBZktGLEdBQUc7QUFpQlQsK0RBQWVBLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBwcm92aWRlcnMgfSBmcm9tICdldGhlcnMnXG5pbXBvcnQgTmV4dEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG4vLyBJbXBvcnRzXG5pbXBvcnQgeyBDb25uZWN0b3IsIFByb3ZpZGVyLCBjaGFpbiwgZGVmYXVsdENoYWlucywgZGV2ZWxvcG1lbnRDaGFpbnMgfSBmcm9tICd3YWdtaSdcbmltcG9ydCB7IEluamVjdGVkQ29ubmVjdG9yIH0gZnJvbSAnd2FnbWkvY29ubmVjdG9ycy9pbmplY3RlZCdcbmltcG9ydCB7IFdhbGxldENvbm5lY3RDb25uZWN0b3IgfSBmcm9tICd3YWdtaS9jb25uZWN0b3JzL3dhbGxldENvbm5lY3QnXG5pbXBvcnQgeyBXYWxsZXRMaW5rQ29ubmVjdG9yIH0gZnJvbSAnd2FnbWkvY29ubmVjdG9ycy93YWxsZXRMaW5rJ1xuXG4vLyBHZXQgZW52aXJvbm1lbnQgdmFyaWFibGVzXG5jb25zdCBhbGNoZW15ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQUxDSEVNWV9JRCBhcyBzdHJpbmdcbmNvbnN0IGV0aGVyc2NhbiA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0VUSEVSU0NBTl9BUElfS0VZIGFzIHN0cmluZ1xuY29uc3QgaW5mdXJhSWQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19JTkZVUkFfSUQgYXMgc3RyaW5nXG5cbi8vIFBpY2sgY2hhaW5zXG5jb25zdCBjaGFpbnMgPSBkZXZlbG9wbWVudENoYWluc1xuY29uc3QgZGVmYXVsdENoYWluID0gY2hhaW4uaGFyZGhhdFxuXG4vLyBTZXQgdXAgY29ubmVjdG9yc1xudHlwZSBDb25uZWN0b3JzQ29uZmlnID0geyBjaGFpbklkPzogbnVtYmVyIH1cbmNvbnNvbGUubG9nKGNoYWlucyk7XG5jb25zdCBjb25uZWN0b3JzID0gKHsgY2hhaW5JZCB9OiBDb25uZWN0b3JzQ29uZmlnKSA9PiB7XG4gIGNvbnN0IHJwY1VybCA9XG4gICAgY2hhaW5zLmZpbmQoKHgpID0+IHguaWQgPT09IGNoYWluSWQpPy5ycGNVcmxzPy5bMF0gPz9cbiAgICBkZWZhdWx0Q2hhaW4ucnBjVXJsc1swXVxuICByZXR1cm4gW1xuICAgIG5ldyBJbmplY3RlZENvbm5lY3Rvcih7IGNoYWlucywgb3B0aW9uczogeyBzaGltRGlzY29ubmVjdDogdHJ1ZSB9IH0pLFxuICAgIC8vIG5ldyBXYWxsZXRDb25uZWN0Q29ubmVjdG9yKHtcbiAgICAvLyAgIGNoYWluczogW2NoYWluLmhhcmRoYXRdLFxuICAgIC8vICAgb3B0aW9uczoge1xuICAgIC8vICAgICBpbmZ1cmFJZCxcbiAgICAvLyAgICAgcXJjb2RlOiB0cnVlLFxuICAgIC8vICAgfSxcbiAgICAvLyB9KSxcbiAgICAvLyBuZXcgV2FsbGV0TGlua0Nvbm5lY3Rvcih7XG4gICAgLy8gICBjaGFpbnM6IFtjaGFpbi5oYXJkaGF0XSxcbiAgICAvLyAgIG9wdGlvbnM6IHtcbiAgICAvLyAgICAgYXBwTmFtZTogJ3dhZ21pJyxcbiAgICAvLyAgICAganNvblJwY1VybDogYCR7cnBjVXJsfS8ke2luZnVyYUlkfWAsXG4gICAgLy8gICB9LFxuICAgIC8vIH0pLFxuICBdXG59XG5cbi8vIFNldCB1cCBwcm92aWRlcnNcbnR5cGUgUHJvdmlkZXJDb25maWcgPSB7IGNoYWluSWQ/OiBudW1iZXI7IGNvbm5lY3Rvcj86IENvbm5lY3RvciB9XG5jb25zdCBpc0NoYWluU3VwcG9ydGVkID0gKGNoYWluSWQ/OiBudW1iZXIpID0+IHtcbiAgY29uc29sZS5sb2coY2hhaW5zLnNvbWUoKHgpID0+IHguaWQgPT09IGNoYWluSWQpKTtcbiAgcmV0dXJuIGNoYWlucy5zb21lKCh4KSA9PiB4LmlkID09PSBjaGFpbklkKVxufVxuICBcbmNvbnN0IHByb3ZpZGVyID0gKHsgY2hhaW5JZCB9OiBQcm92aWRlckNvbmZpZykgPT5cbiAgcHJvdmlkZXJzLmdldE5ldHdvcmsoY2hhaW5JZCA/IGNoYWluSWQgOiBjaGFpbi5oYXJkaGF0LmlkKVxuXG5jb25zdCB3ZWJTb2NrZXRQcm92aWRlciA9ICh7IGNoYWluSWQgfTogUHJvdmlkZXJDb25maWcpID0+XG4gIGlzQ2hhaW5TdXBwb3J0ZWQoY2hhaW5JZClcbiAgICA/IG5ldyBwcm92aWRlcnMuSW5mdXJhV2ViU29ja2V0UHJvdmlkZXIoY2hhaW5JZCwgaW5mdXJhSWQpXG4gICAgOiB1bmRlZmluZWRcblxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXJcbiAgICAgIGF1dG9Db25uZWN0XG4gICAgICBjb25uZWN0b3JzPXtjb25uZWN0b3JzfVxuICAgICAgcHJvdmlkZXI9e3Byb3ZpZGVyfVxuICAgICAgd2ViU29ja2V0UHJvdmlkZXI9e3dlYlNvY2tldFByb3ZpZGVyfVxuICAgID5cbiAgICAgIDxOZXh0SGVhZD5cbiAgICAgICAgPHRpdGxlPndhZ21pPC90aXRsZT5cbiAgICAgIDwvTmV4dEhlYWQ+XG5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1Byb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuIl0sIm5hbWVzIjpbIlJlYWN0IiwicHJvdmlkZXJzIiwiTmV4dEhlYWQiLCJQcm92aWRlciIsImNoYWluIiwiZGV2ZWxvcG1lbnRDaGFpbnMiLCJJbmplY3RlZENvbm5lY3RvciIsImFsY2hlbXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQUxDSEVNWV9JRCIsImV0aGVyc2NhbiIsIk5FWFRfUFVCTElDX0VUSEVSU0NBTl9BUElfS0VZIiwiaW5mdXJhSWQiLCJORVhUX1BVQkxJQ19JTkZVUkFfSUQiLCJjaGFpbnMiLCJkZWZhdWx0Q2hhaW4iLCJoYXJkaGF0IiwiY29uc29sZSIsImxvZyIsImNvbm5lY3RvcnMiLCJjaGFpbklkIiwicnBjVXJsIiwiZmluZCIsIngiLCJpZCIsInJwY1VybHMiLCJvcHRpb25zIiwic2hpbURpc2Nvbm5lY3QiLCJpc0NoYWluU3VwcG9ydGVkIiwic29tZSIsInByb3ZpZGVyIiwiZ2V0TmV0d29yayIsIndlYlNvY2tldFByb3ZpZGVyIiwiSW5mdXJhV2ViU29ja2V0UHJvdmlkZXIiLCJ1bmRlZmluZWQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJhdXRvQ29ubmVjdCIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ })

});