"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/connectors/injected */ \"wagmi/connectors/injected\");\n/* harmony import */ var wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n// Imports\n\n\n// Get environment variables\nconst alchemy = process.env.NEXT_PUBLIC_ALCHEMY_ID;\nconst etherscan = process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY;\nconst infuraId = process.env.NEXT_PUBLIC_INFURA_ID;\nconst connectors = ({ chainId  })=>{\n    return [\n        new wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_4__.InjectedConnector({\n            chains: [\n                wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.hardhat\n            ]\n        }), \n    ];\n};\nconst connector = new wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_4__.InjectedConnector({\n    chains: [\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.hardhat\n    ]\n});\n// // Set up providers\n// type ProviderConfig = { chainId?: number; connector?: Connector }\n// // const isChainSupported = (chainId?: number) => {\n// //   console.log(chains.some((x) => x.id === chainId));\n// //   return chains.some((x) => x.id === chainId)\n// // }\n// const provider = ({ chainId }: ProviderConfig) =>\n//   new providers.JsonRpcProvider()\n// const webSocketProvider = ({ chainId }: ProviderConfig) =>\n//   isChainSupported(chainId)\n//     ? new providers.InfuraWebSocketProvider(chainId, infuraId)\n//     : undefined\nconst App = ({ Component , pageProps  })=>{\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(wagmi__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n        connectors: [\n            connector\n        ],\n        __source: {\n            fileName: \"/Users/mhall/personal/mevgg-test/next-frontend/src/pages/_app.tsx\",\n            lineNumber: 78,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                __source: {\n                    fileName: \"/Users/mhall/personal/mevgg-test/next-frontend/src/pages/_app.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 7\n                },\n                __self: undefined,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                    __source: {\n                        fileName: \"/Users/mhall/personal/mevgg-test/next-frontend/src/pages/_app.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    },\n                    __self: undefined,\n                    children: \"wagmi\"\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                ...pageProps,\n                __source: {\n                    fileName: \"/Users/mhall/personal/mevgg-test/next-frontend/src/pages/_app.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 7\n                },\n                __self: undefined\n            })\n        ]\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBR0U7QUFFaEMsRUFBVTtBQUMwRTtBQUN2QjtBQUk3RCxFQUE0QjtBQUM1QixLQUFLLENBQUNLLE9BQU8sR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLHNCQUFzQjtBQUNsRCxLQUFLLENBQUNDLFNBQVMsR0FBR0gsT0FBTyxDQUFDQyxHQUFHLENBQUNHLDZCQUE2QjtBQUMzRCxLQUFLLENBQUNDLFFBQVEsR0FBR0wsT0FBTyxDQUFDQyxHQUFHLENBQUNLLHFCQUFxQjtBQWtDbEQsS0FBSyxDQUFDQyxVQUFVLElBQUksQ0FBQyxDQUFDQyxPQUFPLEVBQW1CLENBQUMsR0FBSyxDQUFDO0lBQ3JELE1BQU0sQ0FBQyxDQUFDO1FBQ04sR0FBRyxDQUFDVix3RUFBaUIsQ0FBQyxDQUFDO1lBQ3JCVyxNQUFNLEVBQUUsQ0FBQ1o7Z0JBQUFBLGdEQUFhO1lBQUEsQ0FBQztRQUN6QixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCxLQUFLLENBQUNjLFNBQVMsR0FBRyxHQUFHLENBQUNiLHdFQUFpQixDQUFDLENBQUM7SUFDdkNXLE1BQU0sRUFBRSxDQUFDWjtRQUFBQSxnREFBYTtJQUFBLENBQUM7QUFDekIsQ0FBQztBQUVELEVBQXNCO0FBQ3RCLEVBQW9FO0FBQ3BFLEVBQXNEO0FBQ3RELEVBQTBEO0FBQzFELEVBQW1EO0FBQ25ELEVBQU87QUFFUCxFQUFvRDtBQUNwRCxFQUFvQztBQUVwQyxFQUE2RDtBQUM3RCxFQUE4QjtBQUM5QixFQUFpRTtBQUNqRSxFQUFrQjtBQUVsQixLQUFLLENBQUNlLEdBQUcsSUFBSSxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFXLENBQUMsR0FBSyxDQUFDO0lBQ25ELE1BQU0sdUVBQ0hsQiwyQ0FBUTtRQUNQVyxVQUFVLEVBQUUsQ0FBQ0k7WUFBQUEsU0FBUztRQUFBLENBQUM7Ozs7Ozs7O2lGQUl0QmhCLGtEQUFROzs7Ozs7OytGQUNOb0IsQ0FBSzs7Ozs7Ozs4QkFBQyxDQUFLOzs7aUZBR2JGLFNBQVM7bUJBQUtDLFNBQVM7Ozs7Ozs7Ozs7QUFHOUIsQ0FBQztBQUVELGlFQUFlRixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhhbXBsZS1uZXh0Ly4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBwcm92aWRlcnMgfSBmcm9tICdldGhlcnMnXG5pbXBvcnQgTmV4dEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG4vLyBJbXBvcnRzXG5pbXBvcnQgeyBDb25uZWN0b3IsIFByb3ZpZGVyLCBjaGFpbiwgZGVmYXVsdENoYWlucywgZGV2ZWxvcG1lbnRDaGFpbnMgfSBmcm9tICd3YWdtaSdcbmltcG9ydCB7IEluamVjdGVkQ29ubmVjdG9yIH0gZnJvbSAnd2FnbWkvY29ubmVjdG9ycy9pbmplY3RlZCdcbmltcG9ydCB7IFdhbGxldENvbm5lY3RDb25uZWN0b3IgfSBmcm9tICd3YWdtaS9jb25uZWN0b3JzL3dhbGxldENvbm5lY3QnXG5pbXBvcnQgeyBXYWxsZXRMaW5rQ29ubmVjdG9yIH0gZnJvbSAnd2FnbWkvY29ubmVjdG9ycy93YWxsZXRMaW5rJ1xuXG4vLyBHZXQgZW52aXJvbm1lbnQgdmFyaWFibGVzXG5jb25zdCBhbGNoZW15ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQUxDSEVNWV9JRCBhcyBzdHJpbmdcbmNvbnN0IGV0aGVyc2NhbiA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0VUSEVSU0NBTl9BUElfS0VZIGFzIHN0cmluZ1xuY29uc3QgaW5mdXJhSWQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19JTkZVUkFfSUQgYXMgc3RyaW5nXG5cbi8vIFBpY2sgY2hhaW5zXG4vLyBjb25zdCBjaGFpbnMgPSBkZXZlbG9wbWVudENoYWluc1xuLy8gY29uc3QgZGVmYXVsdENoYWluID0gY2hhaW4uaGFyZGhhdFxuXG4vLyBTZXQgdXAgY29ubmVjdG9yc1xuLy8gdHlwZSBDb25uZWN0b3JzQ29uZmlnID0geyBjaGFpbklkPzogbnVtYmVyIH1cbi8vIGNvbnNvbGUubG9nKGNoYWlucyk7XG4vLyBjb25zdCBjb25uZWN0b3JzID0gKHsgY2hhaW5JZCB9OiBDb25uZWN0b3JzQ29uZmlnKSA9PiB7XG4vLyAgIC8vIGNvbnN0IHJwY1VybCA9XG4vLyAgIC8vICAgY2hhaW5zLmZpbmQoKHgpID0+IHguaWQgPT09IGNoYWluSWQpPy5ycGNVcmxzPy5bMF0gPz9cbi8vICAgLy8gICBkZWZhdWx0Q2hhaW4ucnBjVXJsc1swXVxuLy8gICByZXR1cm4gW1xuLy8gICAgIG5ldyBJbmplY3RlZENvbm5lY3Rvcih7IGNoYWluczogW2NoYWluLmhhcmRoYXRdfSksXG4vLyAgICAgLy8gbmV3IFdhbGxldENvbm5lY3RDb25uZWN0b3Ioe1xuLy8gICAgIC8vICAgY2hhaW5zOiBbY2hhaW4uaGFyZGhhdF0sXG4vLyAgICAgLy8gICBvcHRpb25zOiB7XG4vLyAgICAgLy8gICAgIGluZnVyYUlkLFxuLy8gICAgIC8vICAgICBxcmNvZGU6IHRydWUsXG4vLyAgICAgLy8gICB9LFxuLy8gICAgIC8vIH0pLFxuLy8gICAgIC8vIG5ldyBXYWxsZXRMaW5rQ29ubmVjdG9yKHtcbi8vICAgICAvLyAgIGNoYWluczogW2NoYWluLmhhcmRoYXRdLFxuLy8gICAgIC8vICAgb3B0aW9uczoge1xuLy8gICAgIC8vICAgICBhcHBOYW1lOiAnd2FnbWknLFxuLy8gICAgIC8vICAgICBqc29uUnBjVXJsOiBgJHtycGNVcmx9LyR7aW5mdXJhSWR9YCxcbi8vICAgICAvLyAgIH0sXG4vLyAgICAgLy8gfSksXG4vLyAgIF1cbi8vIH1cblxuLy8gU2V0IHVwIGNvbm5lY3RvcnNcbnR5cGUgQ29ubmVjdG9yc0NvbmZpZyA9IHsgY2hhaW5JZD86IG51bWJlciB9XG5jb25zdCBjb25uZWN0b3JzID0gKHsgY2hhaW5JZCB9OiBDb25uZWN0b3JzQ29uZmlnKSA9PiB7XG4gIHJldHVybiBbXG4gICAgbmV3IEluamVjdGVkQ29ubmVjdG9yKHtcbiAgICAgIGNoYWluczogW2NoYWluLmhhcmRoYXRdLFxuICAgIH0pLFxuICBdXG59XG5cbmNvbnN0IGNvbm5lY3RvciA9IG5ldyBJbmplY3RlZENvbm5lY3Rvcih7XG4gIGNoYWluczogW2NoYWluLmhhcmRoYXRdLFxufSlcblxuLy8gLy8gU2V0IHVwIHByb3ZpZGVyc1xuLy8gdHlwZSBQcm92aWRlckNvbmZpZyA9IHsgY2hhaW5JZD86IG51bWJlcjsgY29ubmVjdG9yPzogQ29ubmVjdG9yIH1cbi8vIC8vIGNvbnN0IGlzQ2hhaW5TdXBwb3J0ZWQgPSAoY2hhaW5JZD86IG51bWJlcikgPT4ge1xuLy8gLy8gICBjb25zb2xlLmxvZyhjaGFpbnMuc29tZSgoeCkgPT4geC5pZCA9PT0gY2hhaW5JZCkpO1xuLy8gLy8gICByZXR1cm4gY2hhaW5zLnNvbWUoKHgpID0+IHguaWQgPT09IGNoYWluSWQpXG4vLyAvLyB9XG4gIFxuLy8gY29uc3QgcHJvdmlkZXIgPSAoeyBjaGFpbklkIH06IFByb3ZpZGVyQ29uZmlnKSA9PlxuLy8gICBuZXcgcHJvdmlkZXJzLkpzb25ScGNQcm92aWRlcigpXG5cbi8vIGNvbnN0IHdlYlNvY2tldFByb3ZpZGVyID0gKHsgY2hhaW5JZCB9OiBQcm92aWRlckNvbmZpZykgPT5cbi8vICAgaXNDaGFpblN1cHBvcnRlZChjaGFpbklkKVxuLy8gICAgID8gbmV3IHByb3ZpZGVycy5JbmZ1cmFXZWJTb2NrZXRQcm92aWRlcihjaGFpbklkLCBpbmZ1cmFJZClcbi8vICAgICA6IHVuZGVmaW5lZFxuXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlclxuICAgICAgY29ubmVjdG9ycz17W2Nvbm5lY3Rvcl19XG4gICAgICAvLyBwcm92aWRlcj17cHJvdmlkZXJ9XG4gICAgICAvLyB3ZWJTb2NrZXRQcm92aWRlcj17d2ViU29ja2V0UHJvdmlkZXJ9XG4gICAgPlxuICAgICAgPE5leHRIZWFkPlxuICAgICAgICA8dGl0bGU+d2FnbWk8L3RpdGxlPlxuICAgICAgPC9OZXh0SGVhZD5cblxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJOZXh0SGVhZCIsIlByb3ZpZGVyIiwiY2hhaW4iLCJJbmplY3RlZENvbm5lY3RvciIsImFsY2hlbXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQUxDSEVNWV9JRCIsImV0aGVyc2NhbiIsIk5FWFRfUFVCTElDX0VUSEVSU0NBTl9BUElfS0VZIiwiaW5mdXJhSWQiLCJORVhUX1BVQkxJQ19JTkZVUkFfSUQiLCJjb25uZWN0b3JzIiwiY2hhaW5JZCIsImNoYWlucyIsImhhcmRoYXQiLCJjb25uZWN0b3IiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/connectors/injected":
/*!********************************************!*\
  !*** external "wagmi/connectors/injected" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("wagmi/connectors/injected");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();