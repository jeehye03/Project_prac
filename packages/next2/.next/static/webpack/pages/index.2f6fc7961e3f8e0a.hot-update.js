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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_ji_hyekim_Desktop_test_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"../../node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_ji_hyekim_Desktop_test_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"../../node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_ji_hyekim_Desktop_test_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"../../node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_ji_hyekim_Desktop_test_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_ji_hyekim_Desktop_test_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jotai */ \"../../node_modules/jotai/esm/index.js\");\n/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./atoms */ \"./src/components/atoms.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var URL = \"https://jsonplaceholder.typicode.com/users\";\n\n  var _useAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_5__.useAtom)(_atoms__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n      _useAtom2 = (0,_Users_ji_hyekim_Desktop_test_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useAtom, 2),\n      data = _useAtom2[0],\n      setData = _useAtom2[1];\n\n  var fetchData = /*#__PURE__*/function () {\n    var _ref = (0,_Users_ji_hyekim_Desktop_test_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_ji_hyekim_Desktop_test_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n      var res, resJson;\n      return _Users_ji_hyekim_Desktop_test_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch(URL);\n\n            case 2:\n              res = _context.sent;\n              _context.next = 5;\n              return res.json();\n\n            case 5:\n              resJson = _context.sent;\n              setData(resJson);\n              console.log(resJson);\n\n            case 8:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchData() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {}, void 0, false);\n};\n\n_s(Home, \"u3jNEnM40jjH41EUoqsxcVR4eWw=\", false, function () {\n  return [jotai__WEBPACK_IMPORTED_MODULE_5__.useAtom];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ib21lLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7O0FBRUEsSUFBTUUsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtFQUFBOztFQUVmLElBQU1DLEdBQUcsR0FBRyw0Q0FBWjs7RUFFQSxlQUF1QkgsOENBQU8sQ0FBQ0MsOENBQUQsQ0FBOUI7RUFBQTtFQUFBLElBQU9HLElBQVA7RUFBQSxJQUFZQyxPQUFaOztFQUVBLElBQU1DLFNBQVM7SUFBQSw4VEFBRztNQUFBO01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtjQUFBLE9BQ0lDLEtBQUssQ0FBQ0osR0FBRCxDQURUOztZQUFBO2NBQ1JLLEdBRFE7Y0FBQTtjQUFBLE9BRVFBLEdBQUcsQ0FBQ0MsSUFBSixFQUZSOztZQUFBO2NBRVJDLE9BRlE7Y0FHZEwsT0FBTyxDQUFDSyxPQUFELENBQVA7Y0FDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLE9BQVo7O1lBSmM7WUFBQTtjQUFBO1VBQUE7UUFBQTtNQUFBO0lBQUEsQ0FBSDs7SUFBQSxnQkFBVEosU0FBUztNQUFBO0lBQUE7RUFBQSxHQUFmOztFQU1BLG9CQUNJLDZJQURKO0FBTUgsQ0FsQkQ7O0dBQU1KO1VBSXFCRjs7O0tBSnJCRTtBQW9CTiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ib21lLmpzeD9kOTEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUF0b20gfSBmcm9tIFwiam90YWlcIjtcbmltcG9ydCBkYXRhQXRvbSBmcm9tIFwiLi9hdG9tc1wiXG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBVUkwgPSBcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vyc1wiO1xuXG4gICAgY29uc3QgW2RhdGEsc2V0RGF0YV0gPSB1c2VBdG9tKGRhdGFBdG9tKTtcblxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goVVJMKTtcbiAgICAgICAgY29uc3QgcmVzSnNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgIHNldERhdGEocmVzSnNvbik7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc0pzb24pXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG5cbiAgICAgICAgPC8+XG5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sIm5hbWVzIjpbInVzZUF0b20iLCJkYXRhQXRvbSIsIkhvbWUiLCJVUkwiLCJkYXRhIiwic2V0RGF0YSIsImZldGNoRGF0YSIsImZldGNoIiwicmVzIiwianNvbiIsInJlc0pzb24iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Home.jsx\n"));

/***/ })

});