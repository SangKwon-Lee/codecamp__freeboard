/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/board/[id]/edit",{

/***/ "./src/components/units/board/write/BoardWrite.container.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/units/board/write/BoardWrite.container.tsx ***!
  \*******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _BoardWrite_presenter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BoardWrite.presenter */ \"./src/components/units/board/write/BoardWrite.presenter.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _BoardWrite_queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BoardWrite.queries */ \"./src/components/units/board/write/BoardWrite.queries.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/sk/Documents/github/codecamp/codecamp__freeboard/src/components/units/board/write/BoardWrite.container.tsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nfunction BoardWritePage() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n\n  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation)(_BoardWrite_queries__WEBPACK_IMPORTED_MODULE_7__.CREATE_BOARD),\n      _useMutation2 = (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.default)(_useMutation, 1),\n      createBoard = _useMutation2[0];\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true),\n      isTrue = _useState[0],\n      setIsTrue = _useState[1];\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useQuery)(_BoardWrite_queries__WEBPACK_IMPORTED_MODULE_7__.FETCH_BOARD, {\n    variables: {\n      boardId: String(router.query.id)\n    }\n  }),\n      data = _useQuery.data;\n\n  var _useMution = useMution,\n      _useMution2 = (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.default)(_useMution, 1),\n      updateBoard = _useMution2[0];\n\n  console.log(router.query.id);\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({\n    writer: '',\n    password: '',\n    title: '',\n    contents: ''\n  }),\n      input = _useState2[0],\n      setInput = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {\n    setInput({\n      writer: (data === null || data === void 0 ? void 0 : data.fetchBoard.writer) || '',\n      password: '',\n      title: data !== null && data !== void 0 && data.fetchBoard.title ? data.fetchBoard.title : '',\n      contents: data !== null && data !== void 0 && data.fetchBoard.contents ? data.fetchBoard.contents : ''\n    });\n  }, [data]);\n\n  var handleChangeInput = function handleChangeInput(event) {\n    var newInput = _objectSpread(_objectSpread({}, input), {}, (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)({}, event.target.name, event.target.value));\n\n    setInput(newInput);\n\n    if (newInput.writer && newInput.password && newInput.title && newInput.contents) {\n      setIsTrue(false);\n    } else {\n      setIsTrue(true);\n    }\n  };\n\n  var handleClickCreateBoard = /*#__PURE__*/function () {\n    var _ref = (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var _result$data, result;\n\n      return _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return createBoard({\n                variables: {\n                  createBoardInput: {\n                    writer: input.writer,\n                    password: input.password,\n                    title: input.title,\n                    contents: input.contents\n                  }\n                }\n              });\n\n            case 3:\n              result = _context.sent;\n              alert('게시글 등록 성공');\n              router.push(\"/board/\".concat((_result$data = result.data) === null || _result$data === void 0 ? void 0 : _result$data.createBoard._id));\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](0);\n              alert(_context.t0);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 8]]);\n    }));\n\n    return function handleClickCreateBoard() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardWrite_presenter__WEBPACK_IMPORTED_MODULE_5__.default, {\n    data: data,\n    handleChangeInput: handleChangeInput,\n    handleClickCreateBoard: handleClickCreateBoard,\n    isTrue: isTrue\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 82,\n    columnNumber: 3\n  }, this);\n}\n\n_s(BoardWritePage, \"STllUObK8+mS42Lc8tazIB6K5AQ=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter, _apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation, _apollo_client__WEBPACK_IMPORTED_MODULE_9__.useQuery];\n});\n\n_c = BoardWritePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoardWritePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"BoardWritePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdW5pdHMvYm9hcmQvd3JpdGUvQm9hcmRXcml0ZS5jb250YWluZXIudHN4P2FjZmMiXSwibmFtZXMiOlsiQm9hcmRXcml0ZVBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VNdXRhdGlvbiIsIkNSRUFURV9CT0FSRCIsImNyZWF0ZUJvYXJkIiwidXNlU3RhdGUiLCJpc1RydWUiLCJzZXRJc1RydWUiLCJ1c2VRdWVyeSIsIkZFVENIX0JPQVJEIiwidmFyaWFibGVzIiwiYm9hcmRJZCIsIlN0cmluZyIsInF1ZXJ5IiwiaWQiLCJkYXRhIiwidXNlTXV0aW9uIiwidXBkYXRlQm9hcmQiLCJjb25zb2xlIiwibG9nIiwid3JpdGVyIiwicGFzc3dvcmQiLCJ0aXRsZSIsImNvbnRlbnRzIiwiaW5wdXQiLCJzZXRJbnB1dCIsInVzZUVmZmVjdCIsImZldGNoQm9hcmQiLCJoYW5kbGVDaGFuZ2VJbnB1dCIsImV2ZW50IiwibmV3SW5wdXQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVDbGlja0NyZWF0ZUJvYXJkIiwiY3JlYXRlQm9hcmRJbnB1dCIsInJlc3VsdCIsImFsZXJ0IiwicHVzaCIsIl9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVFBLFNBQVNBLGNBQVQsR0FBMEI7QUFBQTs7QUFDekIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFEeUIscUJBR0hDLDJEQUFXLENBQ2hDQyw2REFEZ0MsQ0FIUjtBQUFBO0FBQUEsTUFHbEJDLFdBSGtCOztBQUFBLGtCQU1HQywrQ0FBUSxDQUFDLElBQUQsQ0FOWDtBQUFBLE1BTWxCQyxNQU5rQjtBQUFBLE1BTVZDLFNBTlU7O0FBQUEsa0JBUVJDLHdEQUFRLENBQTZCQyw0REFBN0IsRUFBMEM7QUFDbEVDLGFBQVMsRUFBRTtBQUFFQyxhQUFPLEVBQUVD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R0MsMEJBQXNCLEVBQUVNLHNCQUh6QjtBQUlDLFVBQU0sRUFBRTVCO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBUUE7O0dBNUVRUCxjO1VBQ09FLGtELEVBRU9DLHVELEVBS0xNLG9EOzs7S0FSVFQsYztBQThFVCwrREFBZUEsY0FBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL3VuaXRzL2JvYXJkL3dyaXRlL0JvYXJkV3JpdGUuY29udGFpbmVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCb2FyZFVJIGZyb20gJy4vQm9hcmRXcml0ZS5wcmVzZW50ZXInO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENSRUFURV9CT0FSRCwgRkVUQ0hfQk9BUkQgfSBmcm9tICcuL0JvYXJkV3JpdGUucXVlcmllcyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQge1xuXHRNdXRhdGlvbixcblx0TXV0YXRpb25DcmVhdGVCb2FyZEFyZ3MsXG5cdFF1ZXJ5LFxuXHRRdWVyeUZldGNoQm9hcmRBcmdzLFxufSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb25zL3R5cGVzL2dlbmVyYXRlZC90eXBlcyc7XG5cbmZ1bmN0aW9uIEJvYXJkV3JpdGVQYWdlKCkge1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuXHRjb25zdCBbY3JlYXRlQm9hcmRdID0gdXNlTXV0YXRpb248TXV0YXRpb24sIE11dGF0aW9uQ3JlYXRlQm9hcmRBcmdzPihcblx0XHRDUkVBVEVfQk9BUkQsXG5cdCk7XG5cdGNvbnN0IFtpc1RydWUsIHNldElzVHJ1ZV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuXHRjb25zdCB7IGRhdGEgfSA9IHVzZVF1ZXJ5PFF1ZXJ5LCBRdWVyeUZldGNoQm9hcmRBcmdzPihGRVRDSF9CT0FSRCwge1xuXHRcdHZhcmlhYmxlczogeyBib2FyZElkOiBTdHJpbmcocm91dGVyLnF1ZXJ5LmlkKSB9LFxuXHR9KTtcblxuXHRjb25zdCBbdXBkYXRlQm9hcmRdID0gdXNlTXV0aW9uXG5cdGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeS5pZCk7XG5cdGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoe1xuXHRcdHdyaXRlcjogJycsXG5cdFx0cGFzc3dvcmQ6ICcnLFxuXHRcdHRpdGxlOiAnJyxcblx0XHRjb250ZW50czogJycsXG5cdH0pO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0c2V0SW5wdXQoe1xuXHRcdFx0d3JpdGVyOiBkYXRhPy5mZXRjaEJvYXJkLndyaXRlciB8fCAnJyxcblx0XHRcdHBhc3N3b3JkOiAnJyxcblx0XHRcdHRpdGxlOiBkYXRhPy5mZXRjaEJvYXJkLnRpdGxlID8gZGF0YS5mZXRjaEJvYXJkLnRpdGxlIDogJycsXG5cdFx0XHRjb250ZW50czogZGF0YT8uZmV0Y2hCb2FyZC5jb250ZW50cyA/IGRhdGEuZmV0Y2hCb2FyZC5jb250ZW50cyA6ICcnLFxuXHRcdH0pO1xuXHR9LCBbZGF0YV0pO1xuXG5cdGNvbnN0IGhhbmRsZUNoYW5nZUlucHV0ID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuXHRcdGNvbnN0IG5ld0lucHV0ID0ge1xuXHRcdFx0Li4uaW5wdXQsXG5cdFx0XHRbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUsXG5cdFx0fTtcblxuXHRcdHNldElucHV0KG5ld0lucHV0KTtcblx0XHRpZiAoXG5cdFx0XHRuZXdJbnB1dC53cml0ZXIgJiZcblx0XHRcdG5ld0lucHV0LnBhc3N3b3JkICYmXG5cdFx0XHRuZXdJbnB1dC50aXRsZSAmJlxuXHRcdFx0bmV3SW5wdXQuY29udGVudHNcblx0XHQpIHtcblx0XHRcdHNldElzVHJ1ZShmYWxzZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNldElzVHJ1ZSh0cnVlKTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlQ2xpY2tDcmVhdGVCb2FyZCA9IGFzeW5jICgpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgY3JlYXRlQm9hcmQoe1xuXHRcdFx0XHR2YXJpYWJsZXM6IHtcblx0XHRcdFx0XHRjcmVhdGVCb2FyZElucHV0OiB7XG5cdFx0XHRcdFx0XHR3cml0ZXI6IGlucHV0LndyaXRlcixcblx0XHRcdFx0XHRcdHBhc3N3b3JkOiBpbnB1dC5wYXNzd29yZCxcblx0XHRcdFx0XHRcdHRpdGxlOiBpbnB1dC50aXRsZSxcblx0XHRcdFx0XHRcdGNvbnRlbnRzOiBpbnB1dC5jb250ZW50cyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cdFx0XHRhbGVydCgn6rKM7Iuc6riAIOuTseuhnSDshLHqs7UnKTtcblx0XHRcdHJvdXRlci5wdXNoKGAvYm9hcmQvJHtyZXN1bHQuZGF0YT8uY3JlYXRlQm9hcmQuX2lkfWApO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRhbGVydChlcnJvcik7XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PEJvYXJkVUlcblx0XHRcdGRhdGE9e2RhdGF9XG5cdFx0XHRoYW5kbGVDaGFuZ2VJbnB1dD17aGFuZGxlQ2hhbmdlSW5wdXR9XG5cdFx0XHRoYW5kbGVDbGlja0NyZWF0ZUJvYXJkPXtoYW5kbGVDbGlja0NyZWF0ZUJvYXJkfVxuXHRcdFx0aXNUcnVlPXtpc1RydWV9XG5cdFx0PjwvQm9hcmRVST5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9hcmRXcml0ZVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/units/board/write/BoardWrite.container.tsx\n");

/***/ })

});