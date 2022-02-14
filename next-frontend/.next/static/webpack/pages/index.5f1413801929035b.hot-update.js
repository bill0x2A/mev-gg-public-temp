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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Account\": function() { return /* reexport safe */ _Account__WEBPACK_IMPORTED_MODULE_0__.Account; },\n/* harmony export */   \"Connect\": function() { return /* reexport safe */ _Connect__WEBPACK_IMPORTED_MODULE_1__.Connect; },\n/* harmony export */   \"NetworkSwitcher\": function() { return /* reexport safe */ _NetworkSwitcher__WEBPACK_IMPORTED_MODULE_2__.NetworkSwitcher; },\n/* harmony export */   \"TokenBalance\": function() { return /* reexport safe */ _TokenBalance__WEBPACK_IMPORTED_MODULE_3__.TokenBalance; },\n/* harmony export */   \"Fomo\": function() { return /* reexport safe */ _Fomo__WEBPACK_IMPORTED_MODULE_4__.Fomo; }\n/* harmony export */ });\n/* harmony import */ var _Account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Account */ \"./src/components/Account.tsx\");\n/* harmony import */ var _Connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Connect */ \"./src/components/Connect.tsx\");\n/* harmony import */ var _NetworkSwitcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NetworkSwitcher */ \"./src/components/NetworkSwitcher.tsx\");\n/* harmony import */ var _TokenBalance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TokenBalance */ \"./src/components/TokenBalance.tsx\");\n/* harmony import */ var _Fomo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Fomo */ \"./src/components/Fomo.tsx\");\n/* harmony import */ var _Fomo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Fomo__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBbUM7QUFDQTtBQUNnQjtBQUNOO0FBQ2hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2luZGV4LnRzPzBmMzgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgQWNjb3VudCB9IGZyb20gJy4vQWNjb3VudCdcbmV4cG9ydCB7IENvbm5lY3QgfSBmcm9tICcuL0Nvbm5lY3QnXG5leHBvcnQgeyBOZXR3b3JrU3dpdGNoZXIgfSBmcm9tICcuL05ldHdvcmtTd2l0Y2hlcidcbmV4cG9ydCB7IFRva2VuQmFsYW5jZSB9IGZyb20gJy4vVG9rZW5CYWxhbmNlJ1xuZXhwb3J0IHsgRm9tbyB9IGZyb20gJy4vRm9tbydcbiJdLCJuYW1lcyI6WyJBY2NvdW50IiwiQ29ubmVjdCIsIk5ldHdvcmtTd2l0Y2hlciIsIlRva2VuQmFsYW5jZSIsIkZvbW8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/index.ts\n");

/***/ })

});