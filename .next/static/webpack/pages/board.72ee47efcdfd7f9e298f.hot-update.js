/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/board",{

/***/ "./src/components/units/board/write/BoardWrite.queries.ts":
/*!****************************************************************!*\
  !*** ./src/components/units/board/write/BoardWrite.queries.ts ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CREATE_BOARD\": function() { return /* binding */ CREATE_BOARD; },\n/* harmony export */   \"FETCH_BOARD\": function() { return /* binding */ FETCH_BOARD; },\n/* harmony export */   \"UPDATE_BOARD\": function() { return /* binding */ UPDATE_BOARD; }\n/* harmony export */ });\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction _templateObject3() {\n  var data = (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n\\tmutation updateBoard($updateBoardInput: UpdateBoardInput!, $password:String ,$boardId: ID!){\\n  \\tupdateBoard(updateBoardInput:$updateBoardInput\\n    password:String,\\n    boardId:$boardId){\\n    _id\\n    writer\\n    title\\n    contents\\n  }\\n}\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n\\tquery fetchBoard($boardId: ID!) {\\n\\t\\tfetchBoard(boardId: $boardId) {\\n\\t\\t\\twriter\\n\\t\\t\\ttitle\\n\\t\\t\\tcontents\\n\\t\\t\\tcreatedAt\\n\\t\\t}\\n\\t}\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n\\tmutation createBoard($createBoardInput: CreateBoardInput!) {\\n\\t\\tcreateBoard(createBoardInput: $createBoardInput) {\\n\\t\\t\\ttitle\\n\\t\\t\\twriter\\n\\t\\t\\t_id\\n\\t\\t}\\n\\t}\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar CREATE_BOARD = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject());\nvar FETCH_BOARD = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject2());\nvar UPDATE_BOARD = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject3());\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdW5pdHMvYm9hcmQvd3JpdGUvQm9hcmRXcml0ZS5xdWVyaWVzLnRzPzcwMmYiXSwibmFtZXMiOlsiQ1JFQVRFX0JPQVJEIiwiZ3FsIiwiRkVUQ0hfQk9BUkQiLCJVUERBVEVfQk9BUkQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxZQUFZLEdBQUdDLG1EQUFILG1CQUFsQjtBQVlBLElBQU1DLFdBQVcsR0FBR0QsbURBQUgsb0JBQWpCO0FBV0EsSUFBTUUsWUFBWSxHQUFHRixtREFBSCxvQkFBbEIiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91bml0cy9ib2FyZC93cml0ZS9Cb2FyZFdyaXRlLnF1ZXJpZXMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcblxuZXhwb3J0IGNvbnN0IENSRUFURV9CT0FSRCA9IGdxbGBcblx0bXV0YXRpb24gY3JlYXRlQm9hcmQoJGNyZWF0ZUJvYXJkSW5wdXQ6IENyZWF0ZUJvYXJkSW5wdXQhKSB7XG5cdFx0Y3JlYXRlQm9hcmQoY3JlYXRlQm9hcmRJbnB1dDogJGNyZWF0ZUJvYXJkSW5wdXQpIHtcblx0XHRcdHRpdGxlXG5cdFx0XHR3cml0ZXJcblx0XHRcdF9pZFxuXHRcdH1cblx0fVxuYDtcblxuXG5cbmV4cG9ydCBjb25zdCBGRVRDSF9CT0FSRCA9IGdxbGBcblx0cXVlcnkgZmV0Y2hCb2FyZCgkYm9hcmRJZDogSUQhKSB7XG5cdFx0ZmV0Y2hCb2FyZChib2FyZElkOiAkYm9hcmRJZCkge1xuXHRcdFx0d3JpdGVyXG5cdFx0XHR0aXRsZVxuXHRcdFx0Y29udGVudHNcblx0XHRcdGNyZWF0ZWRBdFxuXHRcdH1cblx0fVxuYDtcblxuZXhwb3J0IGNvbnN0IFVQREFURV9CT0FSRCA9IGdxbGBcblx0bXV0YXRpb24gdXBkYXRlQm9hcmQoJHVwZGF0ZUJvYXJkSW5wdXQ6IFVwZGF0ZUJvYXJkSW5wdXQhLCAkcGFzc3dvcmQ6U3RyaW5nICwkYm9hcmRJZDogSUQhKXtcbiAgXHR1cGRhdGVCb2FyZCh1cGRhdGVCb2FyZElucHV0OiR1cGRhdGVCb2FyZElucHV0XG4gICAgcGFzc3dvcmQ6U3RyaW5nLFxuICAgIGJvYXJkSWQ6JGJvYXJkSWQpe1xuICAgIF9pZFxuICAgIHdyaXRlclxuICAgIHRpdGxlXG4gICAgY29udGVudHNcbiAgfVxufVxuYFxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/units/board/write/BoardWrite.queries.ts\n");

/***/ })

});