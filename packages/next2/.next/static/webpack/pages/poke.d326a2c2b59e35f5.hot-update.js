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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_ji_hyekim_Desktop_test_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"../../node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_ji_hyekim_Desktop_test_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"../../node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_ji_hyekim_Desktop_test_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_ji_hyekim_Desktop_test_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jotai */ \"../../node_modules/jotai/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/ji-hyekim/Desktop/test/packages/next2/pages/poke.jsx\",\n    _this = undefined;\n\n\n\n\n\n\n\nvar Poke = function Poke() {\n  var pokeAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_4__.atom)( /*#__PURE__*/function () {\n    var _ref = (0,_Users_ji_hyekim_Desktop_test_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_ji_hyekim_Desktop_test_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(get) {\n      var res;\n      return _Users_ji_hyekim_Desktop_test_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch(\"https://pokeapi.co/api/v2/pokemon?limit=153&offset=0\").then(function (res) {\n                return res.json();\n              }).then(function (data) {\n                return console.log(data);\n              });\n\n            case 2:\n              res = _context.sent;\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }());\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n    children: \"poke\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = Poke;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Poke);\n\nvar _c;\n\n$RefreshReg$(_c, \"Poke\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb2tlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUlBLElBQU1JLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07RUFHZixJQUFNQyxRQUFRLEdBQUdMLDJDQUFJO0lBQUEsOFRBQUMsaUJBQU9NLEdBQVA7TUFBQTtNQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Y0FBQSxPQUNBQyxLQUFLLENBQUMsc0RBQUQsQ0FBTCxDQUE4REMsSUFBOUQsQ0FBbUUsVUFBQ0MsR0FBRDtnQkFBQSxPQUFPQSxHQUFHLENBQUNDLElBQUosRUFBUDtjQUFBLENBQW5FLEVBQXNGRixJQUF0RixDQUEyRixVQUFDRyxJQUFEO2dCQUFBLE9BQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaLENBQVQ7Y0FBQSxDQUEzRixDQURBOztZQUFBO2NBQ1pGLEdBRFk7O1lBQUE7WUFBQTtjQUFBO1VBQUE7UUFBQTtNQUFBO0lBQUEsQ0FBRDs7SUFBQTtNQUFBO0lBQUE7RUFBQSxJQUFyQjtFQUtBLG9CQUNJO0lBQUE7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREo7QUFHSCxDQVhEOztLQUFNTDtBQWFOLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bva2UuanN4P2I1ZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXRvbSwgdXNlQXRvbSB9IGZyb20gXCJqb3RhaVwiXG5pbXBvcnQgeyBhdG9tc1dpdGhRdWVyeSB9IGZyb20gXCJqb3RhaS10YW5zdGFjay1xdWVyeVwiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cblxuXG5jb25zdCBQb2tlID0gKCkgPT4ge1xuXG5cbiAgICBjb25zdCBwb2tlQXRvbSA9IGF0b20oYXN5bmMgKGdldCkgPT4ge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbj9saW1pdD0xNTMmb2Zmc2V0PTBcIikudGhlbigocmVzKT0+cmVzLmpzb24oKSkudGhlbigoZGF0YSk9PiBjb25zb2xlLmxvZyhkYXRhKSlcbiAgICB9KVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uPnBva2U8L2J1dHRvbj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBva2U7Il0sIm5hbWVzIjpbImF0b20iLCJ1c2VBdG9tIiwiYXRvbXNXaXRoUXVlcnkiLCJ1c2VTdGF0ZSIsIlBva2UiLCJwb2tlQXRvbSIsImdldCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/poke.jsx\n"));

/***/ })

});