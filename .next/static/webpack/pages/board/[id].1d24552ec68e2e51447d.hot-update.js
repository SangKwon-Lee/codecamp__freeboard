/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/board/[id]",{

/***/ "./src/components/units/board/comments/BoardComments.container.tsx":
/*!*************************************************************************!*\
  !*** ./src/components/units/board/comments/BoardComments.container.tsx ***!
  \*************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _BoardComments_presenter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BoardComments.presenter */ \"./src/components/units/board/comments/BoardComments.presenter.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _BoardComments_queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BoardComments.queries */ \"./src/components/units/board/comments/BoardComments.queries.ts\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/sk/Documents/github/codecamp/codecamp__freeboard/src/components/units/board/comments/BoardComments.container.tsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nfunction BoardCommentsPage() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n\n  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation)(_BoardComments_queries__WEBPACK_IMPORTED_MODULE_7__.CREATE_BOARD_COMMENT),\n      _useMutation2 = (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.default)(_useMutation, 1),\n      createBoardComment = _useMutation2[0];\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({\n    writer: '',\n    password: '',\n    contents: '',\n    rating: ''\n  }),\n      input = _useState[0],\n      setInput = _useState[1];\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useQuery)(_BoardComments_queries__WEBPACK_IMPORTED_MODULE_7__.FETCH_BOARD_COMMENTS, {\n    variables: {\n      boardId: String(router.query.id)\n    }\n  }),\n      data = _useQuery.data,\n      refetch = _useQuery.refetch;\n\n  var handleInputChange = function handleInputChange(e) {\n    var newInput = _objectSpread(_objectSpread({}, input), {}, (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)({}, e.target.name, e.target.value));\n\n    setInput(newInput);\n    console.log(newInput);\n  };\n\n  var handleClickCreateComment = /*#__PURE__*/function () {\n    var _ref = (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var result;\n      return _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return createBoardComment({\n                variables: {\n                  createBoardCommentInput: {\n                    writer: input.writer,\n                    password: input.password,\n                    rating: Number(input.rating),\n                    contents: input.contents\n                  },\n                  boardId: String(router.query.id)\n                }\n              });\n\n            case 3:\n              result = _context.sent;\n              console.log('성공');\n              refetch();\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](0);\n              alert(_context.t0);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 8]]);\n    }));\n\n    return function handleClickCreateComment() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),\n      rating = _useState2[0],\n      setRating = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),\n      hoverRating = _useState3[0],\n      setHoverRating = _useState3[1];\n\n  var onMouseEnter = function onMouseEnter(e) {\n    setHoverRating(e.target.id);\n    console.log(hoverRating);\n  };\n\n  var onMouseLeave = function onMouseLeave() {\n    setHoverRating(0);\n    console.log(hoverRating);\n  };\n\n  var onSaveRating = function onSaveRating(e) {\n    setInput(e.target.id);\n    console.log(rating);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_presenter__WEBPACK_IMPORTED_MODULE_5__.default, {\n    handleInputChange: handleInputChange,\n    data: data,\n    rating: rating,\n    onMouseEnter: onMouseEnter,\n    onMouseLeave: onMouseLeave,\n    onSaveRating: onSaveRating,\n    handleClickCreateComment: handleClickCreateComment\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 85,\n    columnNumber: 3\n  }, this);\n}\n\n_s(BoardCommentsPage, \"5wWOCO+fc3WtLPPqTzV3oKdn9oQ=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter, _apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation, _apollo_client__WEBPACK_IMPORTED_MODULE_9__.useQuery];\n});\n\n_c = BoardCommentsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoardCommentsPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"BoardCommentsPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdW5pdHMvYm9hcmQvY29tbWVudHMvQm9hcmRDb21tZW50cy5jb250YWluZXIudHN4PzU1YjAiXSwibmFtZXMiOlsiQm9hcmRDb21tZW50c1BhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VNdXRhdGlvbiIsIkNSRUFURV9CT0FSRF9DT01NRU5UIiwiY3JlYXRlQm9hcmRDb21tZW50IiwidXNlU3RhdGUiLCJ3cml0ZXIiLCJwYXNzd29yZCIsImNvbnRlbnRzIiwicmF0aW5nIiwiaW5wdXQiLCJzZXRJbnB1dCIsInVzZVF1ZXJ5IiwiRkVUQ0hfQk9BUkRfQ09NTUVOVFMiLCJ2YXJpYWJsZXMiLCJib2FyZElkIiwiU3RyaW5nIiwicXVlcnkiLCJpZCIsImRhdGEiLCJyZWZldGNoIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwibmV3SW5wdXQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2xpY2tDcmVhdGVDb21tZW50IiwiY3JlYXRlQm9hcmRDb21tZW50SW5wdXQiLCJOdW1iZXIiLCJyZXN1bHQiLCJhbGVydCIsInNldFJhdGluZyIsImhvdmVyUmF0aW5nIiwic2V0SG92ZXJSYXRpbmciLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJvblNhdmVSYXRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFPQTs7QUFDQSxTQUFTQSxpQkFBVCxHQUE2QjtBQUFBOztBQUM1QixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQUQ0QixxQkFHQ0MsMkRBQVcsQ0FHdENDLHdFQUhzQyxDQUhaO0FBQUE7QUFBQSxNQUdyQkMsa0JBSHFCOztBQUFBLGtCQVFGQywrQ0FBUSxDQUFDO0FBQ2xDQyxVQUFNLEVBQUUsRUFEMEI7QUFFbENDLFlBQVEsRUFBRSxFQUZ3QjtBQUdsQ0Ms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O0FBUDNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQVdBOztHQWhGUTlCLGlCO1VBQ09FLGtELEVBRWNDLHVELEVBWUhVLG9EOzs7S0FmbEJiLGlCO0FBa0ZULCtEQUFlQSxpQkFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL3VuaXRzL2JvYXJkL2NvbW1lbnRzL0JvYXJkQ29tbWVudHMuY29udGFpbmVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCb2FyZENvbW1lbnRzVUkgZnJvbSAnLi9Cb2FyZENvbW1lbnRzLnByZXNlbnRlcic7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcblx0RkVUQ0hfQk9BUkRfQ09NTUVOVFMsXG5cdENSRUFURV9CT0FSRF9DT01NRU5ULFxufSBmcm9tICcuL0JvYXJkQ29tbWVudHMucXVlcmllcyc7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQge1xuXHRNdXRhdGlvbixcblx0TXV0YXRpb25DcmVhdGVCb2FyZENvbW1lbnRBcmdzLFxuXHRRdWVyeSxcblx0UXVlcnlGZXRjaEJvYXJkQ29tbWVudHNBcmdzLFxufSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb25zL3R5cGVzL2dlbmVyYXRlZC90eXBlcyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5mdW5jdGlvbiBCb2FyZENvbW1lbnRzUGFnZSgpIHtcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cblx0Y29uc3QgW2NyZWF0ZUJvYXJkQ29tbWVudF0gPSB1c2VNdXRhdGlvbjxcblx0XHRNdXRhdGlvbixcblx0XHRNdXRhdGlvbkNyZWF0ZUJvYXJkQ29tbWVudEFyZ3Ncblx0PihDUkVBVEVfQk9BUkRfQ09NTUVOVCk7XG5cblx0Y29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSh7XG5cdFx0d3JpdGVyOiAnJyxcblx0XHRwYXNzd29yZDogJycsXG5cdFx0Y29udGVudHM6ICcnLFxuXHRcdHJhdGluZzogJycsXG5cdH0pO1xuXG5cdGNvbnN0IHsgZGF0YSwgcmVmZXRjaCB9ID0gdXNlUXVlcnk8UXVlcnksIFF1ZXJ5RmV0Y2hCb2FyZENvbW1lbnRzQXJncz4oXG5cdFx0RkVUQ0hfQk9BUkRfQ09NTUVOVFMsXG5cdFx0e1xuXHRcdFx0dmFyaWFibGVzOiB7IGJvYXJkSWQ6IFN0cmluZyhyb3V0ZXIucXVlcnkuaWQpIH0sXG5cdFx0fSxcblx0KTtcblxuXHRjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuXHRcdGNvbnN0IG5ld0lucHV0ID0ge1xuXHRcdFx0Li4uaW5wdXQsXG5cdFx0XHRbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlLFxuXHRcdH07XG5cdFx0c2V0SW5wdXQobmV3SW5wdXQpO1xuXHRcdGNvbnNvbGUubG9nKG5ld0lucHV0KTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVDbGlja0NyZWF0ZUNvbW1lbnQgPSBhc3luYyAoKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNyZWF0ZUJvYXJkQ29tbWVudCh7XG5cdFx0XHRcdHZhcmlhYmxlczoge1xuXHRcdFx0XHRcdGNyZWF0ZUJvYXJkQ29tbWVudElucHV0OiB7XG5cdFx0XHRcdFx0XHR3cml0ZXI6IGlucHV0LndyaXRlcixcblx0XHRcdFx0XHRcdHBhc3N3b3JkOiBpbnB1dC5wYXNzd29yZCxcblx0XHRcdFx0XHRcdHJhdGluZzogTnVtYmVyKGlucHV0LnJhdGluZyksXG5cdFx0XHRcdFx0XHRjb250ZW50czogaW5wdXQuY29udGVudHMsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRib2FyZElkOiBTdHJpbmcocm91dGVyLnF1ZXJ5LmlkKSxcblx0XHRcdFx0fSxcblx0XHRcdH0pO1xuXHRcdFx0Y29uc29sZS5sb2coJ+yEseqztScpO1xuXHRcdFx0cmVmZXRjaCgpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRhbGVydChlcnJvcik7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IFtyYXRpbmcsIHNldFJhdGluZ10gPSB1c2VTdGF0ZSgwKTtcblx0Y29uc3QgW2hvdmVyUmF0aW5nLCBzZXRIb3ZlclJhdGluZ10gPSB1c2VTdGF0ZSgwKTtcblxuXHRjb25zdCBvbk1vdXNlRW50ZXIgPSAoZSkgPT4ge1xuXHRcdHNldEhvdmVyUmF0aW5nKGUudGFyZ2V0LmlkKTtcblx0XHRjb25zb2xlLmxvZyhob3ZlclJhdGluZyk7XG5cdH07XG5cblx0Y29uc3Qgb25Nb3VzZUxlYXZlID0gKCkgPT4ge1xuXHRcdHNldEhvdmVyUmF0aW5nKDApO1xuXHRcdGNvbnNvbGUubG9nKGhvdmVyUmF0aW5nKTtcblx0fTtcblxuXHRjb25zdCBvblNhdmVSYXRpbmcgPSAoZSkgPT4ge1xuXHRcdHNldElucHV0KGUudGFyZ2V0LmlkKTtcblx0XHRjb25zb2xlLmxvZyhyYXRpbmcpO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PEJvYXJkQ29tbWVudHNVSVxuXHRcdFx0aGFuZGxlSW5wdXRDaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuXHRcdFx0ZGF0YT17ZGF0YX1cblx0XHRcdHJhdGluZz17cmF0aW5nfVxuXHRcdFx0b25Nb3VzZUVudGVyPXtvbk1vdXNlRW50ZXJ9XG5cdFx0XHRvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX1cblx0XHRcdG9uU2F2ZVJhdGluZz17b25TYXZlUmF0aW5nfVxuXHRcdFx0aGFuZGxlQ2xpY2tDcmVhdGVDb21tZW50PXtoYW5kbGVDbGlja0NyZWF0ZUNvbW1lbnR9XG5cdFx0PjwvQm9hcmRDb21tZW50c1VJPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCb2FyZENvbW1lbnRzUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/units/board/comments/BoardComments.container.tsx\n");

/***/ })

});