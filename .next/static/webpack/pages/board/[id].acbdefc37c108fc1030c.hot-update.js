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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _BoardComments_presenter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BoardComments.presenter */ \"./src/components/units/board/comments/BoardComments.presenter.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _BoardComments_queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BoardComments.queries */ \"./src/components/units/board/comments/BoardComments.queries.ts\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/sk/Documents/github/codecamp/codecamp__freeboard/src/components/units/board/comments/BoardComments.container.tsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nfunction BoardCommentsPage() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),\n      rating = _useState[0],\n      setRating = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),\n      hoverRating = _useState2[0],\n      setHoverRating = _useState2[1];\n\n  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation)(_BoardComments_queries__WEBPACK_IMPORTED_MODULE_7__.CREATE_BOARD_COMMENT),\n      _useMutation2 = (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.default)(_useMutation, 1),\n      createBoardComment = _useMutation2[0];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({\n    writer: '',\n    password: '',\n    contents: '',\n    rating: ''\n  }),\n      input = _useState3[0],\n      setInput = _useState3[1];\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useQuery)(_BoardComments_queries__WEBPACK_IMPORTED_MODULE_7__.FETCH_BOARD_COMMENTS, {\n    variables: {\n      boardId: String(router.query.id)\n    }\n  }),\n      data = _useQuery.data,\n      refetch = _useQuery.refetch;\n\n  var handleInputChange = function handleInputChange(e) {\n    var newInput = _objectSpread(_objectSpread({}, input), {}, (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)({}, e.target.name, e.target.value));\n\n    setInput(newInput);\n    console.log(newInput);\n  };\n\n  var handleClickCreateComment = /*#__PURE__*/function () {\n    var _ref = (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var result;\n      return _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return createBoardComment({\n                variables: {\n                  createBoardCommentInput: {\n                    writer: input.writer,\n                    password: input.password,\n                    rating: Number(input.rating),\n                    contents: input.contents\n                  },\n                  boardId: String(router.query.id)\n                }\n              });\n\n            case 3:\n              result = _context.sent;\n              console.log('성공');\n              refetch();\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](0);\n              alert(_context.t0);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 8]]);\n    }));\n\n    return function handleClickCreateComment() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var onMouseEnter = function onMouseEnter(e) {\n    setHoverRating(e.target.id);\n    console.log(hoverRating);\n  };\n\n  var onMouseLeave = function onMouseLeave() {\n    setHoverRating(0);\n    console.log(hoverRating);\n  };\n\n  var onSaveRating = function onSaveRating(e) {\n    setRating(e.target.id);\n    console.log(rating);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_presenter__WEBPACK_IMPORTED_MODULE_5__.default, {\n    handleInputChange: handleInputChange,\n    data: data,\n    rating: rating,\n    onMouseEnter: onMouseEnter,\n    onMouseLeave: onMouseLeave,\n    onSaveRating: onSaveRating,\n    handleClickCreateComment: handleClickCreateComment\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 83,\n    columnNumber: 3\n  }, this);\n}\n\n_s(BoardCommentsPage, \"k+MJ/a5NQAJ3DyAKf7Kp+1xbTDw=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter, _apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation, _apollo_client__WEBPACK_IMPORTED_MODULE_9__.useQuery];\n});\n\n_c = BoardCommentsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoardCommentsPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"BoardCommentsPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdW5pdHMvYm9hcmQvY29tbWVudHMvQm9hcmRDb21tZW50cy5jb250YWluZXIudHN4PzU1YjAiXSwibmFtZXMiOlsiQm9hcmRDb21tZW50c1BhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInJhdGluZyIsInNldFJhdGluZyIsImhvdmVyUmF0aW5nIiwic2V0SG92ZXJSYXRpbmciLCJ1c2VNdXRhdGlvbiIsIkNSRUFURV9CT0FSRF9DT01NRU5UIiwiY3JlYXRlQm9hcmRDb21tZW50Iiwid3JpdGVyIiwicGFzc3dvcmQiLCJjb250ZW50cyIsImlucHV0Iiwic2V0SW5wdXQiLCJ1c2VRdWVyeSIsIkZFVENIX0JPQVJEX0NPTU1FTlRTIiwidmFyaWFibGVzIiwiYm9hcmRJZCIsIlN0cmluZyIsInF1ZXJ5IiwiaWQiLCJkYXRhIiwicmVmZXRjaCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsIm5ld0lucHV0IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNsaWNrQ3JlYXRlQ29tbWVudCIsImNyZWF0ZUJvYXJkQ29tbWVudElucHV0IiwiTnVtYmVyIiwicmVzdWx0IiwiYWxlcnQiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJvblNhdmVSYXRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFPQTs7QUFDQSxTQUFTQSxpQkFBVCxHQUE2QjtBQUFBOztBQUM1QixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQUQ0QixrQkFFQUMsK0NBQVEsQ0FBQyxDQUFELENBRlI7QUFBQSxNQUVyQkMsTUFGcUI7QUFBQSxNQUViQyxTQUZhOztBQUFBLG1CQUdVRiwrQ0FBUSxDQUFDLENBQUQsQ0FIbEI7QUFBQSxNQUdyQkcsV0FIcUI7QUFBQSxNQUdSQyxjQUhROztB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RVA7QUFQM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBV0E7O0dBOUVRakMsaUI7VUFDT0Usa0QsRUFHY00sdUQsRUFZSFEsb0Q7OztLQWhCbEJoQixpQjtBQWdGVCwrREFBZUEsaUJBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91bml0cy9ib2FyZC9jb21tZW50cy9Cb2FyZENvbW1lbnRzLmNvbnRhaW5lci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm9hcmRDb21tZW50c1VJIGZyb20gJy4vQm9hcmRDb21tZW50cy5wcmVzZW50ZXInO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG5cdEZFVENIX0JPQVJEX0NPTU1FTlRTLFxuXHRDUkVBVEVfQk9BUkRfQ09NTUVOVCxcbn0gZnJvbSAnLi9Cb2FyZENvbW1lbnRzLnF1ZXJpZXMnO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHtcblx0TXV0YXRpb24sXG5cdE11dGF0aW9uQ3JlYXRlQm9hcmRDb21tZW50QXJncyxcblx0UXVlcnksXG5cdFF1ZXJ5RmV0Y2hCb2FyZENvbW1lbnRzQXJncyxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9ucy90eXBlcy9nZW5lcmF0ZWQvdHlwZXMnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuZnVuY3Rpb24gQm9hcmRDb21tZW50c1BhZ2UoKSB7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXHRjb25zdCBbcmF0aW5nLCBzZXRSYXRpbmddID0gdXNlU3RhdGUoMCk7XG5cdGNvbnN0IFtob3ZlclJhdGluZywgc2V0SG92ZXJSYXRpbmddID0gdXNlU3RhdGUoMCk7XG5cdGNvbnN0IFtjcmVhdGVCb2FyZENvbW1lbnRdID0gdXNlTXV0YXRpb248XG5cdFx0TXV0YXRpb24sXG5cdFx0TXV0YXRpb25DcmVhdGVCb2FyZENvbW1lbnRBcmdzXG5cdD4oQ1JFQVRFX0JPQVJEX0NPTU1FTlQpO1xuXG5cdGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoe1xuXHRcdHdyaXRlcjogJycsXG5cdFx0cGFzc3dvcmQ6ICcnLFxuXHRcdGNvbnRlbnRzOiAnJyxcblx0XHRyYXRpbmc6ICcnLFxuXHR9KTtcblxuXHRjb25zdCB7IGRhdGEsIHJlZmV0Y2ggfSA9IHVzZVF1ZXJ5PFF1ZXJ5LCBRdWVyeUZldGNoQm9hcmRDb21tZW50c0FyZ3M+KFxuXHRcdEZFVENIX0JPQVJEX0NPTU1FTlRTLFxuXHRcdHtcblx0XHRcdHZhcmlhYmxlczogeyBib2FyZElkOiBTdHJpbmcocm91dGVyLnF1ZXJ5LmlkKSB9LFxuXHRcdH0sXG5cdCk7XG5cblx0Y29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcblx0XHRjb25zdCBuZXdJbnB1dCA9IHtcblx0XHRcdC4uLmlucHV0LFxuXHRcdFx0W2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSxcblx0XHR9O1xuXHRcdHNldElucHV0KG5ld0lucHV0KTtcblx0XHRjb25zb2xlLmxvZyhuZXdJbnB1dCk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlQ2xpY2tDcmVhdGVDb21tZW50ID0gYXN5bmMgKCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBjcmVhdGVCb2FyZENvbW1lbnQoe1xuXHRcdFx0XHR2YXJpYWJsZXM6IHtcblx0XHRcdFx0XHRjcmVhdGVCb2FyZENvbW1lbnRJbnB1dDoge1xuXHRcdFx0XHRcdFx0d3JpdGVyOiBpbnB1dC53cml0ZXIsXG5cdFx0XHRcdFx0XHRwYXNzd29yZDogaW5wdXQucGFzc3dvcmQsXG5cdFx0XHRcdFx0XHRyYXRpbmc6IE51bWJlcihpbnB1dC5yYXRpbmcpLFxuXHRcdFx0XHRcdFx0Y29udGVudHM6IGlucHV0LmNvbnRlbnRzLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Ym9hcmRJZDogU3RyaW5nKHJvdXRlci5xdWVyeS5pZCksXG5cdFx0XHRcdH0sXG5cdFx0XHR9KTtcblx0XHRcdGNvbnNvbGUubG9nKCfshLHqs7UnKTtcblx0XHRcdHJlZmV0Y2goKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0YWxlcnQoZXJyb3IpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBvbk1vdXNlRW50ZXIgPSAoZSkgPT4ge1xuXHRcdHNldEhvdmVyUmF0aW5nKGUudGFyZ2V0LmlkKTtcblx0XHRjb25zb2xlLmxvZyhob3ZlclJhdGluZyk7XG5cdH07XG5cblx0Y29uc3Qgb25Nb3VzZUxlYXZlID0gKCkgPT4ge1xuXHRcdHNldEhvdmVyUmF0aW5nKDApO1xuXHRcdGNvbnNvbGUubG9nKGhvdmVyUmF0aW5nKTtcblx0fTtcblxuXHRjb25zdCBvblNhdmVSYXRpbmcgPSAoZSkgPT4ge1xuXHRcdHNldFJhdGluZyhlLnRhcmdldC5pZCk7XG5cdFx0Y29uc29sZS5sb2cocmF0aW5nKTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxCb2FyZENvbW1lbnRzVUlcblx0XHRcdGhhbmRsZUlucHV0Q2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cblx0XHRcdGRhdGE9e2RhdGF9XG5cdFx0XHRyYXRpbmc9e3JhdGluZ31cblx0XHRcdG9uTW91c2VFbnRlcj17b25Nb3VzZUVudGVyfVxuXHRcdFx0b25Nb3VzZUxlYXZlPXtvbk1vdXNlTGVhdmV9XG5cdFx0XHRvblNhdmVSYXRpbmc9e29uU2F2ZVJhdGluZ31cblx0XHRcdGhhbmRsZUNsaWNrQ3JlYXRlQ29tbWVudD17aGFuZGxlQ2xpY2tDcmVhdGVDb21tZW50fVxuXHRcdD48L0JvYXJkQ29tbWVudHNVST5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9hcmRDb21tZW50c1BhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/units/board/comments/BoardComments.container.tsx\n");

/***/ })

});