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

/***/ "./src/components/Home.jsx":
/*!*********************************!*\
  !*** ./src/components/Home.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_ji_hyekim_Desktop_test_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"../../node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_ji_hyekim_Desktop_test_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"../../node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_ji_hyekim_Desktop_test_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"../../node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_ji_hyekim_Desktop_test_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_ji_hyekim_Desktop_test_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jotai */ \"../../node_modules/jotai/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./atoms */ \"./src/components/atoms.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var URL = \"https://jsonplaceholder.typicode.com/users\";\n\n  var _useAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_6__.useAtom)(_atoms__WEBPACK_IMPORTED_MODULE_4__.dataAtom),\n      _useAtom2 = (0,_Users_ji_hyekim_Desktop_test_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useAtom, 2),\n      data = _useAtom2[0],\n      setData = _useAtom2[1];\n\n  var fetchData = /*#__PURE__*/function () {\n    var _ref = (0,_Users_ji_hyekim_Desktop_test_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_ji_hyekim_Desktop_test_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n      var res, resJson;\n      return _Users_ji_hyekim_Desktop_test_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch(URL);\n\n            case 2:\n              res = _context.sent;\n              _context.next = 5;\n              return res.json();\n\n            case 5:\n              resJson = _context.sent;\n              setData(resJson);\n\n            case 7:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchData() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    fetchData();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {}, void 0, false);\n};\n\n_s(Home, \"H5KUJEXpFlxgdA2+oz63QEq45FI=\", false, function () {\n  return [jotai__WEBPACK_IMPORTED_MODULE_6__.useAtom];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ib21lLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7OztBQUVBLElBQU1HLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07RUFBQTs7RUFFZixJQUFNQyxHQUFHLEdBQUcsNENBQVo7O0VBRUEsZUFBdUJKLDhDQUFPLENBQUNFLDRDQUFELENBQTlCO0VBQUE7RUFBQSxJQUFPRyxJQUFQO0VBQUEsSUFBWUMsT0FBWjs7RUFFQSxJQUFNQyxTQUFTO0lBQUEsOFRBQUc7TUFBQTtNQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Y0FBQSxPQUNJQyxLQUFLLENBQUNKLEdBQUQsQ0FEVDs7WUFBQTtjQUNSSyxHQURRO2NBQUE7Y0FBQSxPQUVRQSxHQUFHLENBQUNDLElBQUosRUFGUjs7WUFBQTtjQUVSQyxPQUZRO2NBR2RMLE9BQU8sQ0FBQ0ssT0FBRCxDQUFQOztZQUhjO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUFBLENBQUg7O0lBQUEsZ0JBQVRKLFNBQVM7TUFBQTtJQUFBO0VBQUEsR0FBZjs7RUFPQU4sZ0RBQVMsQ0FBQyxZQUFJO0lBQ1ZNLFNBQVM7RUFDWixDQUZRLEVBRVAsRUFGTyxDQUFUO0VBR0Esb0JBQ0ksNklBREo7QUFNSCxDQXRCRDs7R0FBTUo7VUFJcUJIOzs7S0FKckJHO0FBd0JOLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hvbWUuanN4P2Q5MTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQXRvbSB9IGZyb20gXCJqb3RhaVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2RhdGFBdG9tfSBmcm9tIFwiLi9hdG9tc1wiXG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBVUkwgPSBcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vyc1wiO1xuXG4gICAgY29uc3QgW2RhdGEsc2V0RGF0YV0gPSB1c2VBdG9tKGRhdGFBdG9tKTtcblxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goVVJMKTtcbiAgICAgICAgY29uc3QgcmVzSnNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgIHNldERhdGEocmVzSnNvbik7XG4gICAgICAgIFxuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgZmV0Y2hEYXRhKClcbiAgICB9LFtdKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG5cbiAgICAgICAgPC8+XG5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sIm5hbWVzIjpbInVzZUF0b20iLCJ1c2VFZmZlY3QiLCJkYXRhQXRvbSIsIkhvbWUiLCJVUkwiLCJkYXRhIiwic2V0RGF0YSIsImZldGNoRGF0YSIsImZldGNoIiwicmVzIiwianNvbiIsInJlc0pzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Home.jsx\n"));

/***/ })

});