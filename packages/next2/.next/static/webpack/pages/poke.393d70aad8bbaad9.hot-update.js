"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/poke",{

/***/ "./pages/poke.jsx":
/*!************************!*\
  !*** ./pages/poke.jsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_ji_hyekim_Desktop_test_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"../../node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jotai */ \"../../node_modules/jotai/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/ji-hyekim/Desktop/test/packages/next2/pages/poke.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar poke = fetch(\"https://pokeapi.co/api/v2/pokemon?limit=153&offset=0\").then(function (res) {\n  return res.json();\n}).then(function (data) {\n  return console.log(data.results);\n});\nvar baseAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.atom)(\"\");\n\nvar Poke = function Poke() {\n  _s();\n\n  var _useAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom)(baseAtom),\n      _useAtom2 = (0,_Users_ji_hyekim_Desktop_test_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useAtom, 2),\n      value = _useAtom2[0],\n      setValue = _useAtom2[1];\n\n  var handleClick = function handleClick() {\n    console.log(setValue(poke));\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n    onClick: handleClick,\n    children: \"poke\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Poke, \"B1LopsB7izW++uUVnm3iB7gH4XQ=\", false, function () {\n  return [jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom];\n});\n\n_c = Poke;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Poke);\n\nvar _c;\n\n$RefreshReg$(_c, \"Poke\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb2tlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1JLElBQUksR0FBSUMsS0FBSyxDQUFDLHNEQUFELENBQUwsQ0FBOERDLElBQTlELENBQW1FLFVBQUNDLEdBQUQ7RUFBQSxPQUFPQSxHQUFHLENBQUNDLElBQUosRUFBUDtBQUFBLENBQW5FLEVBQXNGRixJQUF0RixDQUEyRixVQUFDRyxJQUFEO0VBQUEsT0FBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQUksQ0FBQ0csT0FBakIsQ0FBVDtBQUFBLENBQTNGLENBQWQ7QUFDQSxJQUFNQyxRQUFRLEdBQUdiLDJDQUFJLENBQUMsRUFBRCxDQUFyQjs7QUFFQSxJQUFNYyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0VBQUE7O0VBRW5CLGVBQXlCYiw4Q0FBTyxDQUFDWSxRQUFELENBQWhDO0VBQUE7RUFBQSxJQUFPRSxLQUFQO0VBQUEsSUFBYUMsUUFBYjs7RUFDQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0lBQ3ZCUCxPQUFPLENBQUNDLEdBQVIsQ0FBYUssUUFBUSxDQUFDWixJQUFELENBQXJCO0VBQ0YsQ0FGRDs7RUFHSSxvQkFDSTtJQUFRLE9BQU8sRUFBRWEsV0FBakI7SUFBQTtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FESjtBQUdILENBVEQ7O0dBQU1IO1VBRW1CYjs7O0tBRm5CYTtBQVdOLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bva2UuanN4P2I1ZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXRvbSwgdXNlQXRvbSB9IGZyb20gXCJqb3RhaVwiXG5pbXBvcnQgeyBhdG9tc1dpdGhRdWVyeSB9IGZyb20gXCJqb3RhaS10YW5zdGFjay1xdWVyeVwiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cblxuY29uc3QgcG9rZSA9ICBmZXRjaChcImh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbj9saW1pdD0xNTMmb2Zmc2V0PTBcIikudGhlbigocmVzKT0+cmVzLmpzb24oKSkudGhlbigoZGF0YSk9PiBjb25zb2xlLmxvZyhkYXRhLnJlc3VsdHMpKVxuY29uc3QgYmFzZUF0b20gPSBhdG9tKFwiXCIpO1xuXG5jb25zdCBQb2tlID0gKCkgPT4ge1xuXG5jb25zdCBbdmFsdWUsc2V0VmFsdWVdID0gdXNlQXRvbShiYXNlQXRvbSlcbmNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgY29uc29sZS5sb2coIHNldFZhbHVlKHBva2UpKVxufVxuICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PnBva2U8L2J1dHRvbj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBva2U7Il0sIm5hbWVzIjpbImF0b20iLCJ1c2VBdG9tIiwiYXRvbXNXaXRoUXVlcnkiLCJ1c2VTdGF0ZSIsInBva2UiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHRzIiwiYmFzZUF0b20iLCJQb2tlIiwidmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZUNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/poke.jsx\n"));

/***/ })

});