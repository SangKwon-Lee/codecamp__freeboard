/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/board/[id]",{

/***/ "./src/components/units/board/page/BoardPage.container.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/units/board/page/BoardPage.container.tsx ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BoardPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _BoardPage_queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoardPage.queries */ \"./src/components/units/board/page/BoardPage.queries.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction BoardPage() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  console.log(router.query.id);\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(_BoardPage_queries__WEBPACK_IMPORTED_MODULE_1__.FETCH_BOARD, {\n    variables: {\n      boardId: String(router.query.id)\n    }\n  }),\n      data = _useQuery.data;\n\n  var handleUpdate = function handleUpdate() {\n    router.push(\"/board/\".concat(router.query.id, \"/edit\"));\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n}\n\n_s(BoardPage, \"DEGZfJqR9KLjK2ajZLUqNSLjEP8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter, _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery];\n});\n\n_c = BoardPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"BoardPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdW5pdHMvYm9hcmQvcGFnZS9Cb2FyZFBhZ2UuY29udGFpbmVyLnRzeD81Mjg0Il0sIm5hbWVzIjpbIkJvYXJkUGFnZSIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsImlkIiwidXNlUXVlcnkiLCJGRVRDSF9CT0FSRCIsInZhcmlhYmxlcyIsImJvYXJkSWQiLCJTdHJpbmciLCJkYXRhIiwiaGFuZGxlVXBkYXRlIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQU9lLFNBQVNBLFNBQVQsR0FBcUI7QUFBQTs7QUFDbkMsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsTUFBTSxDQUFDSSxLQUFQLENBQWFDLEVBQXpCOztBQUZtQyxrQkFJbEJDLHdEQUFRLENBQTZCQywyREFBN0IsRUFBMEM7QUFDbEVDLGFBQVMsRUFBRTtBQUFFQyxhQUFPLEVBQUVDLE1BQU0sQ0FBQ1YsTUFBTSxDQUFDSSxLQUFQLENBQWFDLEVBQWQ7QUFBakI7QUFEdUQsR0FBMUMsQ0FKVTtBQUFBLE1BSTNCTSxJQUoyQixhQUkzQkEsSUFKMkI7O0FBUW5DLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDMUJaLFVBQU0sQ0FBQ2EsSUFBUCxrQkFBc0JiLE1BQU0sQ0FBQ0ksS0FBUCxDQUFhQyxFQUFuQztBQUNBLEdBRkQ7O0FBSUEsc0JBQU8sNklBQVA7QUFDQTs7R0FidUJOLFM7VUFDUkUsa0QsRUFHRUssb0Q7OztLQUpNUCxTIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvdW5pdHMvYm9hcmQvcGFnZS9Cb2FyZFBhZ2UuY29udGFpbmVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCb2FyZFBhZ2VVSSBmcm9tIFwiLi9Cb2FyZFBhZ2UucHJlc2VudGVyXCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgRkVUQ0hfQk9BUkQgfSBmcm9tIFwiLi9Cb2FyZFBhZ2UucXVlcmllc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQge1xuXHRRdWVyeSxcblx0UXVlcnlGZXRjaEJvYXJkQXJncyxcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbnMvdHlwZXMvZ2VuZXJhdGVkL3R5cGVzXCI7XG5pbXBvcnQgQm9hcmRDb21tZW50cyBmcm9tIFwiLi4vY29tbWVudHMvQm9hcmRDb21tZW50cy5jb250YWluZXJcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb2FyZFBhZ2UoKSB7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXHRjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkuaWQpO1xuXG5cdGNvbnN0IHsgZGF0YSB9ID0gdXNlUXVlcnk8UXVlcnksIFF1ZXJ5RmV0Y2hCb2FyZEFyZ3M+KEZFVENIX0JPQVJELCB7XG5cdFx0dmFyaWFibGVzOiB7IGJvYXJkSWQ6IFN0cmluZyhyb3V0ZXIucXVlcnkuaWQpIH0sXG5cdH0pO1xuXG5cdGNvbnN0IGhhbmRsZVVwZGF0ZSA9ICgpID0+IHtcblx0XHRyb3V0ZXIucHVzaChgL2JvYXJkLyR7cm91dGVyLnF1ZXJ5LmlkfS9lZGl0YCk7XG5cdH07XG5cblx0cmV0dXJuIDw+PC8+O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/units/board/page/BoardPage.container.tsx\n");

/***/ })

});