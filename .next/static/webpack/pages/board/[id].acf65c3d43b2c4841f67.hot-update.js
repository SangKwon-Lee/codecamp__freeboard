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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _BoardComments_presenter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BoardComments.presenter */ \"./src/components/units/board/comments/BoardComments.presenter.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _BoardComments_queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BoardComments.queries */ \"./src/components/units/board/comments/BoardComments.queries.ts\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/sk/Documents/github/codecamp/codecamp__freeboard/src/components/units/board/comments/BoardComments.container.tsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nfunction BoardCommentsPage() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n\n  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation)(_BoardComments_queries__WEBPACK_IMPORTED_MODULE_7__.CREATE_BOARD_COMMENT),\n      _useMutation2 = (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.default)(_useMutation, 1),\n      createBoardComment = _useMutation2[0];\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({\n    writer: '',\n    password: '',\n    contents: '',\n    rating: ''\n  }),\n      input = _useState[0],\n      setInput = _useState[1];\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useQuery)(_BoardComments_queries__WEBPACK_IMPORTED_MODULE_7__.FETCH_BOARD_COMMENTS, {\n    variables: {\n      boardId: String(router.query.id)\n    }\n  }),\n      data = _useQuery.data;\n\n  console.log(data);\n\n  var handleInputChange = function handleInputChange(e) {\n    var newInput = _objectSpread(_objectSpread({}, input), {}, (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)({}, e.target.name, e.target.value));\n\n    setInput(newInput);\n    console.log(newInput);\n  };\n\n  var handleClickCreateComment = /*#__PURE__*/function () {\n    var _ref = (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var _result$data, result;\n\n      return _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return createBoardComment({\n                variables: {\n                  createBoardCommentInput: {\n                    writer: input.writer,\n                    password: input.password,\n                    rating: 5,\n                    contents: input.contents\n                  },\n                  boardId: String(router.query.id)\n                }\n              });\n\n            case 3:\n              result = _context.sent;\n              alert('게시글 등록 성공');\n              router.push(\"/board/\".concat((_result$data = result.data) === null || _result$data === void 0 ? void 0 : _result$data.createBoard._id));\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](0);\n              alert(_context.t0);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 8]]);\n    }));\n\n    return function handleClickCreateComment() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),\n      rating = _useState2[0],\n      setRating = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),\n      hoverRating = _useState3[0],\n      setHoverRating = _useState3[1];\n\n  var onMouseEnter = function onMouseEnter(e) {\n    setHoverRating(e.target.id);\n    console.log(hoverRating);\n  }; // 마우스가 별 위에 올라가면 스테이트를 변경.\n\n\n  var onMouseLeave = function onMouseLeave() {\n    setHoverRating(0);\n    console.log(hoverRating);\n  }; // 마우스가 별 밖으로 나가면 스테이트를 0으로 변경.\n\n\n  var onSaveRating = function onSaveRating(e) {\n    setRating(e.target.id);\n    console.log(rating);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_presenter__WEBPACK_IMPORTED_MODULE_5__.default, {\n    handleInputChange: handleInputChange,\n    data: data,\n    rating: rating,\n    onMouseEnter: onMouseEnter,\n    onMouseLeave: onMouseLeave,\n    onSaveRating: onSaveRating\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 86,\n    columnNumber: 3\n  }, this);\n}\n\n_s(BoardCommentsPage, \"mA1bCoNUOQwLf1JKgrXexfIcP4k=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter, _apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation, _apollo_client__WEBPACK_IMPORTED_MODULE_9__.useQuery];\n});\n\n_c = BoardCommentsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoardCommentsPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"BoardCommentsPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdW5pdHMvYm9hcmQvY29tbWVudHMvQm9hcmRDb21tZW50cy5jb250YWluZXIudHN4PzU1YjAiXSwibmFtZXMiOlsiQm9hcmRDb21tZW50c1BhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VNdXRhdGlvbiIsIkNSRUFURV9CT0FSRF9DT01NRU5UIiwiY3JlYXRlQm9hcmRDb21tZW50IiwidXNlU3RhdGUiLCJ3cml0ZXIiLCJwYXNzd29yZCIsImNvbnRlbnRzIiwicmF0aW5nIiwiaW5wdXQiLCJzZXRJbnB1dCIsInVzZVF1ZXJ5IiwiRkVUQ0hfQk9BUkRfQ09NTUVOVFMiLCJ2YXJpYWJsZXMiLCJib2FyZElkIiwiU3RyaW5nIiwicXVlcnkiLCJpZCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwibmV3SW5wdXQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVDbGlja0NyZWF0ZUNvbW1lbnQiLCJjcmVhdGVCb2FyZENvbW1lbnRJbnB1dCIsInJlc3VsdCIsImFsZXJ0IiwicHVzaCIsImNyZWF0ZUJvYXJkIiwiX2lkIiwic2V0UmF0aW5nIiwiaG92ZXJSYXRpbmciLCJzZXRIb3ZlclJhdGluZyIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsIm9uU2F2ZVJhdGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQU9BOztBQUNBLFNBQVNBLGlCQUFULEdBQTZCO0FBQUE7O0FBQzVCLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBRDRCLHFCQUdDQywyREFBVyxDQUd0Q0Msd0VBSHNDLENBSFo7QUFBQTtBQUFBLE1BR3JCQyxrQkFIcUI7O0FBQUEsa0JBUUZDLCtDQUFRLENBQUM7QUFDbENDLFVBQU0sRUFBRSxFQUQwQjtBQUVsQ0MsWUFBUSxFQUFFLEVBRndC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LGdCQUFZLEVBQUU2QixZQUpmO0FBS0MsZ0JBQVksRUFBRUMsWUFMZjtBQU1DLGdCQUFZLEVBQUVDO0FBTmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBVUE7O0dBaEZRekMsaUI7VUFDT0Usa0QsRUFFY0MsdUQsRUFZWlUsb0Q7OztLQWZUYixpQjtBQWtGVCwrREFBZUEsaUJBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91bml0cy9ib2FyZC9jb21tZW50cy9Cb2FyZENvbW1lbnRzLmNvbnRhaW5lci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm9hcmRDb21tZW50c1VJIGZyb20gJy4vQm9hcmRDb21tZW50cy5wcmVzZW50ZXInO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuXHRGRVRDSF9CT0FSRF9DT01NRU5UUyxcblx0Q1JFQVRFX0JPQVJEX0NPTU1FTlQsXG59IGZyb20gJy4vQm9hcmRDb21tZW50cy5xdWVyaWVzJztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCB7XG5cdE11dGF0aW9uLFxuXHRNdXRhdGlvbkNyZWF0ZUJvYXJkQ29tbWVudEFyZ3MsXG5cdFF1ZXJ5LFxuXHRRdWVyeUZldGNoQm9hcmRDb21tZW50c0FyZ3MsXG59IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbnMvdHlwZXMvZ2VuZXJhdGVkL3R5cGVzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmZ1bmN0aW9uIEJvYXJkQ29tbWVudHNQYWdlKCkge1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuXHRjb25zdCBbY3JlYXRlQm9hcmRDb21tZW50XSA9IHVzZU11dGF0aW9uPFxuXHRcdE11dGF0aW9uLFxuXHRcdE11dGF0aW9uQ3JlYXRlQm9hcmRDb21tZW50QXJnc1xuXHQ+KENSRUFURV9CT0FSRF9DT01NRU5UKTtcblxuXHRjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKHtcblx0XHR3cml0ZXI6ICcnLFxuXHRcdHBhc3N3b3JkOiAnJyxcblx0XHRjb250ZW50czogJycsXG5cdFx0cmF0aW5nOiAnJyxcblx0fSk7XG5cblx0Y29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeTxRdWVyeSwgUXVlcnlGZXRjaEJvYXJkQ29tbWVudHNBcmdzPihcblx0XHRGRVRDSF9CT0FSRF9DT01NRU5UUyxcblx0XHR7XG5cdFx0XHR2YXJpYWJsZXM6IHsgYm9hcmRJZDogU3RyaW5nKHJvdXRlci5xdWVyeS5pZCkgfSxcblx0XHR9LFxuXHQpO1xuXHRjb25zb2xlLmxvZyhkYXRhKTtcblxuXHRjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuXHRcdGNvbnN0IG5ld0lucHV0ID0ge1xuXHRcdFx0Li4uaW5wdXQsXG5cdFx0XHRbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlLFxuXHRcdH07XG5cdFx0c2V0SW5wdXQobmV3SW5wdXQpO1xuXHRcdGNvbnNvbGUubG9nKG5ld0lucHV0KTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVDbGlja0NyZWF0ZUNvbW1lbnQgPSBhc3luYyAoKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNyZWF0ZUJvYXJkQ29tbWVudCh7XG5cdFx0XHRcdHZhcmlhYmxlczoge1xuXHRcdFx0XHRcdGNyZWF0ZUJvYXJkQ29tbWVudElucHV0OiB7XG5cdFx0XHRcdFx0XHR3cml0ZXI6IGlucHV0LndyaXRlcixcblx0XHRcdFx0XHRcdHBhc3N3b3JkOiBpbnB1dC5wYXNzd29yZCxcblx0XHRcdFx0XHRcdHJhdGluZzogNSxcblx0XHRcdFx0XHRcdGNvbnRlbnRzOiBpbnB1dC5jb250ZW50cyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGJvYXJkSWQ6IFN0cmluZyhyb3V0ZXIucXVlcnkuaWQpLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cdFx0XHRhbGVydCgn6rKM7Iuc6riAIOuTseuhnSDshLHqs7UnKTtcblx0XHRcdHJvdXRlci5wdXNoKGAvYm9hcmQvJHtyZXN1bHQuZGF0YT8uY3JlYXRlQm9hcmQuX2lkfWApO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRhbGVydChlcnJvcik7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IFtyYXRpbmcsIHNldFJhdGluZ10gPSB1c2VTdGF0ZSgwKTtcblx0Y29uc3QgW2hvdmVyUmF0aW5nLCBzZXRIb3ZlclJhdGluZ10gPSB1c2VTdGF0ZSgwKTtcblxuXHRjb25zdCBvbk1vdXNlRW50ZXIgPSAoZSkgPT4ge1xuXHRcdHNldEhvdmVyUmF0aW5nKGUudGFyZ2V0LmlkKTtcblx0XHRjb25zb2xlLmxvZyhob3ZlclJhdGluZyk7XG5cdH07XG5cdC8vIOuniOyasOyKpOqwgCDrs4Qg7JyE7JeQIOyYrOudvOqwgOuptCDsiqTthYzsnbTtirjrpbwg67OA6rK9LlxuXHRjb25zdCBvbk1vdXNlTGVhdmUgPSAoKSA9PiB7XG5cdFx0c2V0SG92ZXJSYXRpbmcoMCk7XG5cdFx0Y29uc29sZS5sb2coaG92ZXJSYXRpbmcpO1xuXHR9O1xuXHQvLyDrp4jsmrDsiqTqsIAg67OEIOuwluycvOuhnCDrgpjqsIDrqbQg7Iqk7YWM7J207Yq466W8IDDsnLzroZwg67OA6rK9LlxuXHRjb25zdCBvblNhdmVSYXRpbmcgPSAoZSkgPT4ge1xuXHRcdHNldFJhdGluZyhlLnRhcmdldC5pZCk7XG5cdFx0Y29uc29sZS5sb2cocmF0aW5nKTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxCb2FyZENvbW1lbnRzVUlcblx0XHRcdGhhbmRsZUlucHV0Q2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cblx0XHRcdGRhdGE9e2RhdGF9XG5cdFx0XHRyYXRpbmc9e3JhdGluZ31cblx0XHRcdG9uTW91c2VFbnRlcj17b25Nb3VzZUVudGVyfVxuXHRcdFx0b25Nb3VzZUxlYXZlPXtvbk1vdXNlTGVhdmV9XG5cdFx0XHRvblNhdmVSYXRpbmc9e29uU2F2ZVJhdGluZ31cblx0XHQ+PC9Cb2FyZENvbW1lbnRzVUk+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkQ29tbWVudHNQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/units/board/comments/BoardComments.container.tsx\n");

/***/ })

});