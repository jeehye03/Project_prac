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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_ji_hyekim_Desktop_test_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"../../node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jotai */ \"../../node_modules/jotai/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/ji-hyekim/Desktop/test/packages/next2/pages/poke.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar poke = fetch(\"https://pokeapi.co/api/v2/pokemon?limit=153&offset=0\").then(function (res) {\n  return res.json();\n}).then(function (data) {\n  return console.log(data.results);\n});\nvar baseAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.atom)(\"\");\n\nvar Poke = function Poke() {\n  _s();\n\n  var _useAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom)(baseAtom),\n      _useAtom2 = (0,_Users_ji_hyekim_Desktop_test_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useAtom, 2),\n      value = _useAtom2[0],\n      setValue = _useAtom2[1];\n\n  var handleClick = function handleClick() {\n    setValue(poke);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n    onClick: handleclick,\n    children: \"poke\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Poke, \"B1LopsB7izW++uUVnm3iB7gH4XQ=\", false, function () {\n  return [jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom];\n});\n\n_c = Poke;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Poke);\n\nvar _c;\n\n$RefreshReg$(_c, \"Poke\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb2tlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1JLElBQUksR0FBSUMsS0FBSyxDQUFDLHNEQUFELENBQUwsQ0FBOERDLElBQTlELENBQW1FLFVBQUNDLEdBQUQ7RUFBQSxPQUFPQSxHQUFHLENBQUNDLElBQUosRUFBUDtBQUFBLENBQW5FLEVBQXNGRixJQUF0RixDQUEyRixVQUFDRyxJQUFEO0VBQUEsT0FBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQUksQ0FBQ0csT0FBakIsQ0FBVDtBQUFBLENBQTNGLENBQWQ7QUFDQSxJQUFNQyxRQUFRLEdBQUdiLDJDQUFJLENBQUMsRUFBRCxDQUFyQjs7QUFFQSxJQUFNYyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0VBQUE7O0VBRW5CLGVBQXlCYiw4Q0FBTyxDQUFDWSxRQUFELENBQWhDO0VBQUE7RUFBQSxJQUFPRSxLQUFQO0VBQUEsSUFBYUMsUUFBYjs7RUFDQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0lBQ3RCRCxRQUFRLENBQUNaLElBQUQsQ0FBUjtFQUNILENBRkQ7O0VBSUksb0JBQ0k7SUFBUSxPQUFPLEVBQUVjLFdBQWpCO0lBQUE7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREo7QUFHSCxDQVZEOztHQUFNSjtVQUVtQmI7OztLQUZuQmE7QUFZTiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb2tlLmpzeD9iNWRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF0b20sIHVzZUF0b20gfSBmcm9tIFwiam90YWlcIlxuaW1wb3J0IHsgYXRvbXNXaXRoUXVlcnkgfSBmcm9tIFwiam90YWktdGFuc3RhY2stcXVlcnlcIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5cbmNvbnN0IHBva2UgPSAgZmV0Y2goXCJodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24/bGltaXQ9MTUzJm9mZnNldD0wXCIpLnRoZW4oKHJlcyk9PnJlcy5qc29uKCkpLnRoZW4oKGRhdGEpPT4gY29uc29sZS5sb2coZGF0YS5yZXN1bHRzKSlcbmNvbnN0IGJhc2VBdG9tID0gYXRvbShcIlwiKTtcblxuY29uc3QgUG9rZSA9ICgpID0+IHtcblxuY29uc3QgW3ZhbHVlLHNldFZhbHVlXSA9IHVzZUF0b20oYmFzZUF0b20pXG5jb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBzZXRWYWx1ZShwb2tlKVxufVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVjbGlja30+cG9rZTwvYnV0dG9uPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9rZTsiXSwibmFtZXMiOlsiYXRvbSIsInVzZUF0b20iLCJhdG9tc1dpdGhRdWVyeSIsInVzZVN0YXRlIiwicG9rZSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJlc3VsdHMiLCJiYXNlQXRvbSIsIlBva2UiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVjbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/poke.jsx\n"));

/***/ })

});