/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/board/[id]",{

/***/ "./src/components/units/board/page/BoardPage.queries.ts":
/*!**************************************************************!*\
  !*** ./src/components/units/board/page/BoardPage.queries.ts ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FETCH_BOARD\": function() { return /* binding */ FETCH_BOARD; },\n/* harmony export */   \"FETCH_BOARDS\": function() { return /* binding */ FETCH_BOARDS; },\n/* harmony export */   \"DELETE_BOARD\": function() { return /* binding */ DELETE_BOARD; }\n/* harmony export */ });\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction _templateObject3() {\n  var data = (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n\\n\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n\\tquery fetchBoards {\\n\\t\\tfetchBoards {\\n\\t\\t\\twriter\\n\\t\\t}\\n\\t}\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n\\tquery fetchBoard($boardId: ID!) {\\n\\t\\tfetchBoard(boardId: $boardId) {\\n\\t\\t\\twriter\\n\\t\\t\\ttitle\\n\\t\\t\\tcontents\\n\\t\\t\\tcreatedAt\\n\\t\\t}\\n\\t}\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar FETCH_BOARD = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject()); //* 모든 게시글 가져오기\n\nvar FETCH_BOARDS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject2());\nvar DELETE_BOARD = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject3());\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdW5pdHMvYm9hcmQvcGFnZS9Cb2FyZFBhZ2UucXVlcmllcy50cz9jZWVjIl0sIm5hbWVzIjpbIkZFVENIX0JPQVJEIiwiZ3FsIiwiRkVUQ0hfQk9BUkRTIiwiREVMRVRFX0JPQVJEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsV0FBVyxHQUFHQyxtREFBSCxtQkFBakIsQyxDQVdQOztBQUNPLElBQU1DLFlBQVksR0FBR0QsbURBQUgsb0JBQWxCO0FBU0EsSUFBTUUsWUFBWSxHQUFHRixtREFBSCxvQkFBbEIiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91bml0cy9ib2FyZC9wYWdlL0JvYXJkUGFnZS5xdWVyaWVzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5cbmV4cG9ydCBjb25zdCBGRVRDSF9CT0FSRCA9IGdxbGBcblx0cXVlcnkgZmV0Y2hCb2FyZCgkYm9hcmRJZDogSUQhKSB7XG5cdFx0ZmV0Y2hCb2FyZChib2FyZElkOiAkYm9hcmRJZCkge1xuXHRcdFx0d3JpdGVyXG5cdFx0XHR0aXRsZVxuXHRcdFx0Y29udGVudHNcblx0XHRcdGNyZWF0ZWRBdFxuXHRcdH1cblx0fVxuYDtcblxuLy8qIOuqqOuToCDqsozsi5zquIAg6rCA7KC47Jik6riwXG5leHBvcnQgY29uc3QgRkVUQ0hfQk9BUkRTID0gZ3FsYFxuXHRxdWVyeSBmZXRjaEJvYXJkcyB7XG5cdFx0ZmV0Y2hCb2FyZHMge1xuXHRcdFx0d3JpdGVyXG5cdFx0fVxuXHR9XG5gO1xuXG5cbmV4cG9ydCBjb25zdCBERUxFVEVfQk9BUkQgPSBncWxgXG5cblxuYCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/units/board/page/BoardPage.queries.ts\n");

/***/ })

});