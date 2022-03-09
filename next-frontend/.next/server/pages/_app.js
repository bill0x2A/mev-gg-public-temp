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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/connectors/injected */ \"wagmi/connectors/injected\");\n/* harmony import */ var wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/connectors/walletConnect */ \"wagmi/connectors/walletConnect\");\n/* harmony import */ var wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var wagmi_connectors_walletLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi/connectors/walletLink */ \"wagmi/connectors/walletLink\");\n/* harmony import */ var wagmi_connectors_walletLink__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(wagmi_connectors_walletLink__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n// Imports\n\n\n\n\n// Get environment variables\nconst alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID;\nconst etherscanApiKey = process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY;\nconst infuraId = process.env.NEXT_PUBLIC_INFURA_ID;\n// Pick chains\nconst chains = wagmi__WEBPACK_IMPORTED_MODULE_4__.defaultChains;\nconst defaultChain = wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.mainnet;\nconst connectors = ({ chainId  })=>{\n    var ref, ref1;\n    const rpcUrl = ((ref = chains.find((x)=>x.id === chainId\n    )) === null || ref === void 0 ? void 0 : (ref1 = ref.rpcUrls) === null || ref1 === void 0 ? void 0 : ref1[0]) ?? defaultChain.rpcUrls[0];\n    return [\n        new wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_5__.InjectedConnector({\n            chains,\n            options: {\n                shimDisconnect: true\n            }\n        }),\n        new wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_6__.WalletConnectConnector({\n            chains,\n            options: {\n                infuraId,\n                qrcode: true\n            }\n        }),\n        new wagmi_connectors_walletLink__WEBPACK_IMPORTED_MODULE_7__.WalletLinkConnector({\n            chains,\n            options: {\n                appName: 'wagmi',\n                jsonRpcUrl: `${rpcUrl}/${infuraId}`\n            }\n        }), \n    ];\n};\nconst isChainSupported = (chainId)=>chains.some((x)=>x.id === chainId\n    )\n;\nconst provider = ({ chainId  })=>ethers__WEBPACK_IMPORTED_MODULE_2__.providers.getDefaultProvider(isChainSupported(chainId) ? chainId : defaultChain.id, {\n        alchemy: alchemyId,\n        etherscan: etherscanApiKey,\n        infura: infuraId\n    })\n;\nconst webSocketProvider = ({ chainId  })=>isChainSupported(chainId) ? new ethers__WEBPACK_IMPORTED_MODULE_2__.providers.InfuraWebSocketProvider(chainId, infuraId) : undefined\n;\nconst App = ({ Component , pageProps  })=>{\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(wagmi__WEBPACK_IMPORTED_MODULE_4__.Provider, {\n        autoConnect: true,\n        connectors: connectors,\n        provider: provider,\n        webSocketProvider: webSocketProvider,\n        __source: {\n            fileName: \"/Users/mason/personal/mevgg-test/next-frontend/src/pages/_app.tsx\",\n            lineNumber: 67,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                __source: {\n                    fileName: \"/Users/mason/personal/mevgg-test/next-frontend/src/pages/_app.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 7\n                },\n                __self: undefined,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                    __source: {\n                        fileName: \"/Users/mason/personal/mevgg-test/next-frontend/src/pages/_app.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    },\n                    __self: undefined,\n                    children: \"wagmi\"\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                ...pageProps,\n                __source: {\n                    fileName: \"/Users/mason/personal/mevgg-test/next-frontend/src/pages/_app.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 7\n                },\n                __self: undefined\n            })\n        ]\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1FBQ2xCSyxpQkFBaUIsRUFBRUEsaUJBQWlCOzs7Ozs7OztpRkFFbkNyQyxrREFBUTs7Ozs7OzsrRkFDTjRDLENBQUs7Ozs7Ozs7OEJBQUMsQ0FBSzs7O2lGQUdiSCxTQUFTO21CQUFLQyxTQUFTOzs7Ozs7Ozs7O0FBRzlCLENBQUM7QUFFRCxpRUFBZUYsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1wbGUtbmV4dC8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHsgcHJvdmlkZXJzIH0gZnJvbSAnZXRoZXJzJ1xuaW1wb3J0IE5leHRIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuLy8gSW1wb3J0c1xuaW1wb3J0IHsgQ29ubmVjdG9yLCBQcm92aWRlciwgY2hhaW4sIGRlZmF1bHRDaGFpbnMgfSBmcm9tICd3YWdtaSdcbmltcG9ydCB7IEluamVjdGVkQ29ubmVjdG9yIH0gZnJvbSAnd2FnbWkvY29ubmVjdG9ycy9pbmplY3RlZCdcbmltcG9ydCB7IFdhbGxldENvbm5lY3RDb25uZWN0b3IgfSBmcm9tICd3YWdtaS9jb25uZWN0b3JzL3dhbGxldENvbm5lY3QnXG5pbXBvcnQgeyBXYWxsZXRMaW5rQ29ubmVjdG9yIH0gZnJvbSAnd2FnbWkvY29ubmVjdG9ycy93YWxsZXRMaW5rJ1xuXG4vLyBHZXQgZW52aXJvbm1lbnQgdmFyaWFibGVzXG5jb25zdCBhbGNoZW15SWQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BTENIRU1ZX0lEIGFzIHN0cmluZ1xuY29uc3QgZXRoZXJzY2FuQXBpS2V5ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRVRIRVJTQ0FOX0FQSV9LRVkgYXMgc3RyaW5nXG5jb25zdCBpbmZ1cmFJZCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0lORlVSQV9JRCBhcyBzdHJpbmdcblxuLy8gUGljayBjaGFpbnNcbmNvbnN0IGNoYWlucyA9IGRlZmF1bHRDaGFpbnNcbmNvbnN0IGRlZmF1bHRDaGFpbiA9IGNoYWluLm1haW5uZXRcblxuLy8gU2V0IHVwIGNvbm5lY3RvcnNcbnR5cGUgQ29ubmVjdG9yc0NvbmZpZyA9IHsgY2hhaW5JZD86IG51bWJlciB9XG5jb25zdCBjb25uZWN0b3JzID0gKHsgY2hhaW5JZCB9OiBDb25uZWN0b3JzQ29uZmlnKSA9PiB7XG4gIGNvbnN0IHJwY1VybCA9XG4gICAgY2hhaW5zLmZpbmQoKHgpID0+IHguaWQgPT09IGNoYWluSWQpPy5ycGNVcmxzPy5bMF0gPz9cbiAgICBkZWZhdWx0Q2hhaW4ucnBjVXJsc1swXVxuICByZXR1cm4gW1xuICAgIG5ldyBJbmplY3RlZENvbm5lY3Rvcih7IGNoYWlucywgb3B0aW9uczogeyBzaGltRGlzY29ubmVjdDogdHJ1ZSB9IH0pLFxuICAgIG5ldyBXYWxsZXRDb25uZWN0Q29ubmVjdG9yKHtcbiAgICAgIGNoYWlucyxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgaW5mdXJhSWQsXG4gICAgICAgIHFyY29kZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgbmV3IFdhbGxldExpbmtDb25uZWN0b3Ioe1xuICAgICAgY2hhaW5zLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBhcHBOYW1lOiAnd2FnbWknLFxuICAgICAgICBqc29uUnBjVXJsOiBgJHtycGNVcmx9LyR7aW5mdXJhSWR9YCxcbiAgICAgIH0sXG4gICAgfSksXG4gIF1cbn1cblxuLy8gU2V0IHVwIHByb3ZpZGVyc1xudHlwZSBQcm92aWRlckNvbmZpZyA9IHsgY2hhaW5JZD86IG51bWJlcjsgY29ubmVjdG9yPzogQ29ubmVjdG9yIH1cbmNvbnN0IGlzQ2hhaW5TdXBwb3J0ZWQgPSAoY2hhaW5JZD86IG51bWJlcikgPT5cbiAgY2hhaW5zLnNvbWUoKHgpID0+IHguaWQgPT09IGNoYWluSWQpXG5cbmNvbnN0IHByb3ZpZGVyID0gKHsgY2hhaW5JZCB9OiBQcm92aWRlckNvbmZpZykgPT5cbiAgcHJvdmlkZXJzLmdldERlZmF1bHRQcm92aWRlcihcbiAgICBpc0NoYWluU3VwcG9ydGVkKGNoYWluSWQpID8gY2hhaW5JZCA6IGRlZmF1bHRDaGFpbi5pZCxcbiAgICB7XG4gICAgICBhbGNoZW15OiBhbGNoZW15SWQsXG4gICAgICBldGhlcnNjYW46IGV0aGVyc2NhbkFwaUtleSxcbiAgICAgIGluZnVyYTogaW5mdXJhSWQsXG4gICAgfSxcbiAgKVxuY29uc3Qgd2ViU29ja2V0UHJvdmlkZXIgPSAoeyBjaGFpbklkIH06IFByb3ZpZGVyQ29uZmlnKSA9PlxuICBpc0NoYWluU3VwcG9ydGVkKGNoYWluSWQpXG4gICAgPyBuZXcgcHJvdmlkZXJzLkluZnVyYVdlYlNvY2tldFByb3ZpZGVyKGNoYWluSWQsIGluZnVyYUlkKVxuICAgIDogdW5kZWZpbmVkXG5cbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyXG4gICAgICBhdXRvQ29ubmVjdFxuICAgICAgY29ubmVjdG9ycz17Y29ubmVjdG9yc31cbiAgICAgIHByb3ZpZGVyPXtwcm92aWRlcn1cbiAgICAgIHdlYlNvY2tldFByb3ZpZGVyPXt3ZWJTb2NrZXRQcm92aWRlcn1cbiAgICA+XG4gICAgICA8TmV4dEhlYWQ+XG4gICAgICAgIDx0aXRsZT53YWdtaTwvdGl0bGU+XG4gICAgICA8L05leHRIZWFkPlxuXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInByb3ZpZGVycyIsIk5leHRIZWFkIiwiUHJvdmlkZXIiLCJjaGFpbiIsImRlZmF1bHRDaGFpbnMiLCJJbmplY3RlZENvbm5lY3RvciIsIldhbGxldENvbm5lY3RDb25uZWN0b3IiLCJXYWxsZXRMaW5rQ29ubmVjdG9yIiwiYWxjaGVteUlkIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FMQ0hFTVlfSUQiLCJldGhlcnNjYW5BcGlLZXkiLCJORVhUX1BVQkxJQ19FVEhFUlNDQU5fQVBJX0tFWSIsImluZnVyYUlkIiwiTkVYVF9QVUJMSUNfSU5GVVJBX0lEIiwiY2hhaW5zIiwiZGVmYXVsdENoYWluIiwibWFpbm5ldCIsImNvbm5lY3RvcnMiLCJjaGFpbklkIiwicnBjVXJsIiwiZmluZCIsIngiLCJpZCIsInJwY1VybHMiLCJvcHRpb25zIiwic2hpbURpc2Nvbm5lY3QiLCJxcmNvZGUiLCJhcHBOYW1lIiwianNvblJwY1VybCIsImlzQ2hhaW5TdXBwb3J0ZWQiLCJzb21lIiwicHJvdmlkZXIiLCJnZXREZWZhdWx0UHJvdmlkZXIiLCJhbGNoZW15IiwiZXRoZXJzY2FuIiwiaW5mdXJhIiwid2ViU29ja2V0UHJvdmlkZXIiLCJJbmZ1cmFXZWJTb2NrZXRQcm92aWRlciIsInVuZGVmaW5lZCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImF1dG9Db25uZWN0IiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("ethers");

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

/***/ }),

/***/ "wagmi/connectors/walletConnect":
/*!*************************************************!*\
  !*** external "wagmi/connectors/walletConnect" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("wagmi/connectors/walletConnect");

/***/ }),

/***/ "wagmi/connectors/walletLink":
/*!**********************************************!*\
  !*** external "wagmi/connectors/walletLink" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("wagmi/connectors/walletLink");

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