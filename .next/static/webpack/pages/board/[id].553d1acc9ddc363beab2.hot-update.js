/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/board/[id]",{

/***/ "./src/components/units/board/comments/BoardComments.queries.ts":
/*!**********************************************************************!*\
  !*** ./src/components/units/board/comments/BoardComments.queries.ts ***!
  \**********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FETCH_BOARD_COMMENTS\": function() { return /* binding */ FETCH_BOARD_COMMENTS; },\n/* harmony export */   \"CREATE_BOARD_COMMENT\": function() { return /* binding */ CREATE_BOARD_COMMENT; }\n/* harmony export */ });\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction _templateObject2() {\n  var data = (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n\\tmutation createBoard\\n\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n\\tquery fetchBoardComments($boardId: ID!) {\\n\\t\\tfetchBoardComments(boardId:  $boardId){\\n\\t\\t\\twriter\\n      contents\\n      _id\\n      rating\\n\\t\\t\\tcreatedAt\\n\\t\\t\\tupdatedAt\\n\\t\\t}\\n\\t}\\n  \\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar FETCH_BOARD_COMMENTS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject());\nvar CREATE_BOARD_COMMENT = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject2());\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdW5pdHMvYm9hcmQvY29tbWVudHMvQm9hcmRDb21tZW50cy5xdWVyaWVzLnRzPzY5YzkiXSwibmFtZXMiOlsiRkVUQ0hfQk9BUkRfQ09NTUVOVFMiLCJncWwiLCJDUkVBVEVfQk9BUkRfQ09NTUVOVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxvQkFBb0IsR0FBR0MsbURBQUgsbUJBQTFCO0FBZUEsSUFBTUMsb0JBQW9CLEdBQUdELG1EQUFILG9CQUExQiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL3VuaXRzL2JvYXJkL2NvbW1lbnRzL0JvYXJkQ29tbWVudHMucXVlcmllcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuXG5leHBvcnQgY29uc3QgRkVUQ0hfQk9BUkRfQ09NTUVOVFMgPSBncWxgXG5cdHF1ZXJ5IGZldGNoQm9hcmRDb21tZW50cygkYm9hcmRJZDogSUQhKSB7XG5cdFx0ZmV0Y2hCb2FyZENvbW1lbnRzKGJvYXJkSWQ6ICAkYm9hcmRJZCl7XG5cdFx0XHR3cml0ZXJcbiAgICAgIGNvbnRlbnRzXG4gICAgICBfaWRcbiAgICAgIHJhdGluZ1xuXHRcdFx0Y3JlYXRlZEF0XG5cdFx0XHR1cGRhdGVkQXRcblx0XHR9XG5cdH1cbiAgXG5gO1xuXG5cbmV4cG9ydCBjb25zdCBDUkVBVEVfQk9BUkRfQ09NTUVOVCA9IGdxbGBcblx0bXV0YXRpb24gY3JlYXRlQm9hcmRcblxuYCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/units/board/comments/BoardComments.queries.ts\n");

/***/ })

});