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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Index = ({ posts  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"This is the index\"\n            }, void 0, false, {\n                fileName: \"/home/david/code/DavidML89/React-Udemy/28-next-intro/first-next/pages/index.js\",\n                lineNumber: 5,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: post.title\n                    }, post.id, false, {\n                        fileName: \"/home/david/code/DavidML89/React-Udemy/28-next-intro/first-next/pages/index.js\",\n                        lineNumber: 8,\n                        columnNumber: 9\n                    }, undefined)\n                )\n            }, void 0, false, {\n                fileName: \"/home/david/code/DavidML89/React-Udemy/28-next-intro/first-next/pages/index.js\",\n                lineNumber: 6,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/david/code/DavidML89/React-Udemy/28-next-intro/first-next/pages/index.js\",\n        lineNumber: 4,\n        columnNumber: 3\n    }, undefined)\n;\nIndex.getInitialProps = async ()=>{\n    const resp = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"http://jsonplaceholder.typicode.com/posts\");\n    const { data  } = resp;\n    return {\n        posts: data\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTBCO0FBRTFCLE1BQU1DLEtBQUssR0FBRyxDQUFDLEVBQUVDLEtBQUssR0FBRSxpQkFDdEIsOERBQUNDLEtBQUc7OzBCQUNGLDhEQUFDQyxJQUFFOzBCQUFDLG1CQUFpQjs7Ozs7eUJBQUs7MEJBQzFCLDhEQUFDQyxJQUFFOzBCQUNBSCxLQUFLLENBQUNJLEdBQUcsQ0FBQ0MsQ0FBQUEsSUFBSSxpQkFDYiw4REFBQ0MsSUFBRTtrQ0FDQUQsSUFBSSxDQUFDRSxLQUFLO3VCQURKRixJQUFJLENBQUNHLEVBQUU7Ozs7aUNBRVg7Z0JBQ04sQ0FBQzs7Ozs7eUJBQ0M7Ozs7OztpQkFDRDtBQUNOO0FBRUZULEtBQUssQ0FBQ1UsZUFBZSxHQUFHLFVBQVk7SUFDbEMsTUFBTUMsSUFBSSxHQUFHLE1BQU1aLGdEQUFTLENBQUMsMkNBQTJDLENBQUM7SUFDekUsTUFBTSxFQUFFYyxJQUFJLEdBQUUsR0FBR0YsSUFBSTtJQUNyQixPQUFPO1FBQUVWLEtBQUssRUFBRVksSUFBSTtLQUFFO0NBQ3ZCO0FBRUQsaUVBQWViLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpcnN0LW5leHQvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgSW5kZXggPSAoeyBwb3N0cyB9KSA9PiAoXG4gIDxkaXY+XG4gICAgPGgxPlRoaXMgaXMgdGhlIGluZGV4PC9oMT5cbiAgICA8dWw+XG4gICAgICB7cG9zdHMubWFwKHBvc3QgPT4gKFxuICAgICAgICA8bGkga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICB7cG9zdC50aXRsZX1cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gIDwvZGl2PlxuKTtcblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNcIilcbiAgY29uc3QgeyBkYXRhIH0gPSByZXNwO1xuICByZXR1cm4geyBwb3N0czogZGF0YSB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sIm5hbWVzIjpbImF4aW9zIiwiSW5kZXgiLCJwb3N0cyIsImRpdiIsImgxIiwidWwiLCJtYXAiLCJwb3N0IiwibGkiLCJ0aXRsZSIsImlkIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzcCIsImdldCIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();