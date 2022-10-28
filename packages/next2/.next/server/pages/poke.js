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
exports.id = "pages/poke";
exports.ids = ["pages/poke"];
exports.modules = {

/***/ "./pages/poke.jsx":
/*!************************!*\
  !*** ./pages/poke.jsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jotai */ \"jotai\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__]);\njotai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nvar _jsxFileName = \"/Users/ji-hyekim/Desktop/test/packages/next2/pages/poke.jsx\";\n\n\nconst namePoke = fetch(\"https://pokeapi.co/api/v2/pokemon?limit=153&offset=0\").then(res => res.json()).then(data => console.log(data));\nconst baseAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)();\n\nconst Poke = () => {\n  const [value, setValue] = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.useAtom)(baseAtom);\n\n  const handleClick = () => {\n    setValue(namePoke);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n    onClick: handleClick,\n    children: \"poke\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Poke);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb2tlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUlBLE1BQU1FLFFBQVEsR0FBSUMsS0FBSyxDQUFDLHNEQUFELENBQUwsQ0FBOERDLElBQTlELENBQW9FQyxHQUFELElBQU9BLEdBQUcsQ0FBQ0MsSUFBSixFQUExRSxFQUFzRkYsSUFBdEYsQ0FBNEZHLElBQUQsSUFBUUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVosQ0FBbkcsQ0FBbEI7QUFDQSxNQUFNRyxRQUFRLEdBQUdWLDJDQUFJLEVBQXJCOztBQUVBLE1BQU1XLElBQUksR0FBRyxNQUFNO0VBRW5CLE1BQU0sQ0FBQ0MsS0FBRCxFQUFPQyxRQUFQLElBQW1CWiw4Q0FBTyxDQUFDUyxRQUFELENBQWhDOztFQUVBLE1BQU1JLFdBQVcsR0FBRyxNQUFNO0lBQ3RCRCxRQUFRLENBQUNYLFFBQUQsQ0FBUjtFQUNILENBRkQ7O0VBR0ksb0JBQ0k7SUFBUSxPQUFPLEVBQUVZLFdBQWpCO0lBQUE7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLGFBREo7QUFJSCxDQVhEOztBQWFBLGlFQUFlSCxJQUFmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0Mi8uL3BhZ2VzL3Bva2UuanN4P2I1ZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXRvbSwgdXNlQXRvbSB9IGZyb20gXCJqb3RhaVwiXG5cblxuXG5jb25zdCBuYW1lUG9rZSA9ICBmZXRjaChcImh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbj9saW1pdD0xNTMmb2Zmc2V0PTBcIikudGhlbigocmVzKT0+cmVzLmpzb24oKSkudGhlbigoZGF0YSk9PmNvbnNvbGUubG9nKGRhdGEpKVxuY29uc3QgYmFzZUF0b20gPSBhdG9tKCk7XG5cbmNvbnN0IFBva2UgPSAoKSA9PiB7XG5cbmNvbnN0IFt2YWx1ZSxzZXRWYWx1ZV0gPSB1c2VBdG9tKGJhc2VBdG9tKVxuXG5jb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBzZXRWYWx1ZShuYW1lUG9rZSlcbn1cbiAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5wb2tlPC9idXR0b24+XG4gICAgICAgIFxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9rZTsiXSwibmFtZXMiOlsiYXRvbSIsInVzZUF0b20iLCJuYW1lUG9rZSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImJhc2VBdG9tIiwiUG9rZSIsInZhbHVlIiwic2V0VmFsdWUiLCJoYW5kbGVDbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/poke.jsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "jotai":
/*!************************!*\
  !*** external "jotai" ***!
  \************************/
/***/ ((module) => {

module.exports = import("jotai");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/poke.jsx"));
module.exports = __webpack_exports__;

})();