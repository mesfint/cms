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

/***/ "./components/ToggleTheme.js":
/*!***********************************!*\
  !*** ./components/ToggleTheme.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/theme */ \"./context/theme.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\n//Accessing Global State\nvar ToggleTheme = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_theme__WEBPACK_IMPORTED_MODULE_2__.ThemeContext), theme = ref[0], setTheme = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: theme === \"light\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            onClick: function() {\n                return setTheme(\"dark\");\n            },\n            style: {\n                fontSize: \"24px\"\n            },\n            children: \"\\uD83C\\uDF13\"\n        }, void 0, false, {\n            fileName: \"/home/mesfin/Documents/fullstack-apps/cms/client/components/ToggleTheme.js\",\n            lineNumber: 13,\n            columnNumber: 9\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            onClick: function() {\n                return setTheme(\"light\");\n            },\n            style: {\n                fontSize: \"24px\"\n            },\n            children: \"\\uD83C\\uDF1E\"\n        }, void 0, false, {\n            fileName: \"/home/mesfin/Documents/fullstack-apps/cms/client/components/ToggleTheme.js\",\n            lineNumber: 17,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false);\n};\n_s(ToggleTheme, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n_c = ToggleTheme;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToggleTheme);\nvar _c;\n$RefreshReg$(_c, \"ToggleTheme\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvZ2dsZVRoZW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUEwQjtBQUVTO0FBQ2E7O0FBRWhELHdCQUF3QjtBQUN4QixJQUFNRyxXQUFXLEdBQUcsV0FBTTs7SUFDeEIsSUFBMEJGLEdBQXdCLEdBQXhCQSxpREFBVSxDQUFDQyx3REFBWSxDQUFDLEVBUHBELEtBT2MsR0FBY0QsR0FBd0IsR0FBdEMsRUFQZCxRQU93QixHQUFJQSxHQUF3QixHQUE1QjtJQUV0QixxQkFDRTtrQkFDR0csS0FBSyxLQUFLLE9BQU8saUJBQ2hCLDhEQUFDRSxNQUFJO1lBQUNDLE9BQU8sRUFBRTt1QkFBTUYsUUFBUSxDQUFDLE1BQU0sQ0FBQzthQUFBO1lBQUVHLEtBQUssRUFBRTtnQkFBRUMsUUFBUSxFQUFFLE1BQU07YUFBRTtzQkFBRSxjQUVwRTs7Ozs7aUJBQU8saUJBRVAsOERBQUNILE1BQUk7WUFBQ0MsT0FBTyxFQUFFO3VCQUFNRixRQUFRLENBQUMsT0FBTyxDQUFDO2FBQUE7WUFBRUcsS0FBSyxFQUFFO2dCQUFFQyxRQUFRLEVBQUUsTUFBTTthQUFFO3NCQUFFLGNBRXJFOzs7OztpQkFBTztxQkFFUixDQUNIO0NBQ0g7R0FoQktOLFdBQVc7QUFBWEEsS0FBQUEsV0FBVztBQWtCakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RvZ2dsZVRoZW1lLmpzPzM0NTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUaGVtZUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC90aGVtZVwiO1xuXG4vL0FjY2Vzc2luZyBHbG9iYWwgU3RhdGVcbmNvbnN0IFRvZ2dsZVRoZW1lID0gKCkgPT4ge1xuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7dGhlbWUgPT09IFwibGlnaHRcIiA/IChcbiAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gc2V0VGhlbWUoXCJkYXJrXCIpfSBzdHlsZT17eyBmb250U2l6ZTogXCIyNHB4XCIgfX0+XG4gICAgICAgICAg8J+Mk1xuICAgICAgICA8L3NwYW4+XG4gICAgICApIDogKFxuICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBzZXRUaGVtZShcImxpZ2h0XCIpfSBzdHlsZT17eyBmb250U2l6ZTogXCIyNHB4XCIgfX0+XG4gICAgICAgICAg8J+MnlxuICAgICAgICA8L3NwYW4+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9nZ2xlVGhlbWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwiVGhlbWVDb250ZXh0IiwiVG9nZ2xlVGhlbWUiLCJ0aGVtZSIsInNldFRoZW1lIiwic3BhbiIsIm9uQ2xpY2siLCJzdHlsZSIsImZvbnRTaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ToggleTheme.js\n");

/***/ })

});