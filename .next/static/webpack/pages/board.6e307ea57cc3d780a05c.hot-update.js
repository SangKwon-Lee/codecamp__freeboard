/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/board",{

/***/ "./src/components/units/board/write/BoardWrite.container.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/units/board/write/BoardWrite.container.tsx ***!
  \*******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _BoardWrite_presenter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BoardWrite.presenter */ \"./src/components/units/board/write/BoardWrite.presenter.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _BoardWrite_queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BoardWrite.queries */ \"./src/components/units/board/write/BoardWrite.queries.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/sk/Documents/github/codecamp/codecamp__freeboard/src/components/units/board/write/BoardWrite.container.tsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nfunction BoardWritePage() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n\n  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation)(_BoardWrite_queries__WEBPACK_IMPORTED_MODULE_7__.CREATE_BOARD),\n      _useMutation2 = (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.default)(_useMutation, 1),\n      createBoard = _useMutation2[0];\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true),\n      isTrue = _useState[0],\n      setIsTrue = _useState[1];\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useQuery)(_BoardWrite_queries__WEBPACK_IMPORTED_MODULE_7__.FETCH_BOARD, {\n    variables: {\n      boardId: String(router.query.id)\n    }\n  }),\n      data = _useQuery.data;\n\n  var _useMutation3 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation)(_BoardWrite_queries__WEBPACK_IMPORTED_MODULE_7__.UPDATE_BOARD),\n      _useMutation4 = (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.default)(_useMutation3, 1),\n      updateBoard = _useMutation4[0];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({\n    writer: '',\n    password: '',\n    title: '',\n    contents: ''\n  }),\n      input = _useState2[0],\n      setInput = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {\n    setInput({\n      writer: (data === null || data === void 0 ? void 0 : data.fetchBoard.writer) || '',\n      password: '',\n      title: data !== null && data !== void 0 && data.fetchBoard.title ? data.fetchBoard.title : '',\n      contents: data !== null && data !== void 0 && data.fetchBoard.contents ? data.fetchBoard.contents : ''\n    });\n  }, [data]);\n\n  var handleChangeInput = function handleChangeInput(event) {\n    var newInput = _objectSpread(_objectSpread({}, input), {}, (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)({}, event.target.name, event.target.value));\n\n    setInput(newInput);\n\n    if (newInput.writer && newInput.password && newInput.title && newInput.contents) {\n      setIsTrue(false);\n    } else {\n      setIsTrue(true);\n    }\n  };\n\n  var handleClickCreateBoard = /*#__PURE__*/function () {\n    var _ref = (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var _result$data, result;\n\n      return _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return createBoard({\n                variables: {\n                  createBoardInput: {\n                    writer: input.writer,\n                    password: input.password,\n                    title: input.title,\n                    contents: input.contents\n                  }\n                }\n              });\n\n            case 3:\n              result = _context.sent;\n              alert('게시글 등록 성공');\n              router.push(\"/board/\".concat((_result$data = result.data) === null || _result$data === void 0 ? void 0 : _result$data.createBoard._id));\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](0);\n              alert(_context.t0);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 8]]);\n    }));\n\n    return function handleClickCreateBoard() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var handleClickUpdateBoard = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n      var _result$data2, result;\n\n      return _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n              _context2.next = 3;\n              return updateBoard({\n                variables: {\n                  updateBoardInput: {\n                    title: input.title,\n                    youtubeURl: \"\"\n                  }\n                }\n              });\n\n            case 3:\n              result = _context2.sent;\n              alert('게시글 수정 성공');\n              router.push(\"/board/\".concat((_result$data2 = result.data) === null || _result$data2 === void 0 ? void 0 : _result$data2.createBoard._id));\n              _context2.next = 11;\n              break;\n\n            case 8:\n              _context2.prev = 8;\n              _context2.t0 = _context2[\"catch\"](0);\n              alert(_context2.t0);\n\n            case 11:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[0, 8]]);\n    }));\n\n    return function handleClickUpdateBoard() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardWrite_presenter__WEBPACK_IMPORTED_MODULE_5__.default, {\n    data: data,\n    handleChangeInput: handleChangeInput,\n    handleClickCreateBoard: handleClickCreateBoard,\n    isTrue: isTrue,\n    handleClickUpdateBoard: handleClickUpdateBoard\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 100,\n    columnNumber: 3\n  }, this);\n}\n\n_s(BoardWritePage, \"w5sCDwhBFVxWa4HvY1IMHfNi9rE=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter, _apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation, _apollo_client__WEBPACK_IMPORTED_MODULE_9__.useQuery, _apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation];\n});\n\n_c = BoardWritePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoardWritePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"BoardWritePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdW5pdHMvYm9hcmQvd3JpdGUvQm9hcmRXcml0ZS5jb250YWluZXIudHN4P2FjZmMiXSwibmFtZXMiOlsiQm9hcmRXcml0ZVBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VNdXRhdGlvbiIsIkNSRUFURV9CT0FSRCIsImNyZWF0ZUJvYXJkIiwidXNlU3RhdGUiLCJpc1RydWUiLCJzZXRJc1RydWUiLCJ1c2VRdWVyeSIsIkZFVENIX0JPQVJEIiwidmFyaWFibGVzIiwiYm9hcmRJZCIsIlN0cmluZyIsInF1ZXJ5IiwiaWQiLCJkYXRhIiwiVVBEQVRFX0JPQVJEIiwidXBkYXRlQm9hcmQiLCJ3cml0ZXIiLCJwYXNzd29yZCIsInRpdGxlIiwiY29udGVudHMiLCJpbnB1dCIsInNldElucHV0IiwidXNlRWZmZWN0IiwiZmV0Y2hCb2FyZCIsImhhbmRsZUNoYW5nZUlucHV0IiwiZXZlbnQiLCJuZXdJbnB1dCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZUNsaWNrQ3JlYXRlQm9hcmQiLCJjcmVhdGVCb2FyZElucHV0IiwicmVzdWx0IiwiYWxlcnQiLCJwdXNoIiwiX2lkIiwiaGFuZGxlQ2xpY2tVcGRhdGVCb2FyZCIsInVwZGF0ZUJvYXJkSW5wdXQiLCJ5b3V0dWJlVVJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUUEsU0FBU0EsY0FBVCxHQUEwQjtBQUFBOztBQUN6QixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQUR5QixxQkFHSEMsMkRBQVcsQ0FDaENDLDZEQURnQyxDQUhSO0FBQUE7QUFBQSxNQUdsQkMsV0FIa0I7O0FBQUEsa0JBTUdDLCtDQUFRLENBQUMsSUFBRCxDQU5YO0FBQUEsTUFNbEJDLE1BTmtCO0FBQUEsTUFNVkMsU0FOVTs7QUFBQSxrQkFRUkMsd0RBQVEsQ0FBNkJDLDRE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QkFFUnJCLFdBQVcsQ0FBQztBQUNoQ1AseUJBQVMsRUFBRTtBQUNWNkIsa0NBQWdCLEVBQUU7QUFDakJuQix5QkFBSyxFQUFFRSxLQUFLLENBQUNGLEtBREk7QUFFakJvQiw4QkFBVSxFQUFFO0FBRks7QUFEUjtBQURxQixlQUFELENBRkg7O0FBQUE7QUFFdkJOLG9CQUZ1QjtBQVc3QkMsbUJBQUssQ0FBQyxXQUFELENBQUw7QUFDQW5DLG9CQUFNLENBQUNvQyxJQUFQLG1DQUFzQkYsTUFBTSxDQUFDbkIsSUFBN0Isa0RBQXNCLGNBQWFYLFdBQWIsQ0FBeUJpQyxHQUEvQztBQVo2QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWM3QkYsbUJBQUssY0FBTDs7QUFkNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBdEJHLHNCQUFzQjtBQUFBO0FBQUE7QUFBQSxLQUE1Qjs7QUFrQkEsc0JBQ0MsOERBQUMsMERBQUQ7QUFDQyxRQUFJLEVBQUV2QixJQURQO0FBRUMscUJBQWlCLEVBQUVXLGlCQUZwQjtBQUdDLDBCQUFzQixFQUFFTSxzQkFIekI7QUFJQyxVQUFNLEVBQUUxQixNQUpUO0FBS0MsMEJBQXNCLEVBQUVnQztBQUx6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFTQTs7R0EvRlF2QyxjO1VBQ09FLGtELEVBRU9DLHVELEVBS0xNLG9ELEVBSUtOLHVEOzs7S0FaZEgsYztBQWlHVCwrREFBZUEsY0FBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL3VuaXRzL2JvYXJkL3dyaXRlL0JvYXJkV3JpdGUuY29udGFpbmVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCb2FyZFVJIGZyb20gJy4vQm9hcmRXcml0ZS5wcmVzZW50ZXInO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENSRUFURV9CT0FSRCwgRkVUQ0hfQk9BUkQsIFVQREFURV9CT0FSRCB9IGZyb20gJy4vQm9hcmRXcml0ZS5xdWVyaWVzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7XG5cdE11dGF0aW9uLFxuXHRNdXRhdGlvbkNyZWF0ZUJvYXJkQXJncyxcblx0UXVlcnksXG5cdFF1ZXJ5RmV0Y2hCb2FyZEFyZ3MsXG59IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbnMvdHlwZXMvZ2VuZXJhdGVkL3R5cGVzJztcblxuZnVuY3Rpb24gQm9hcmRXcml0ZVBhZ2UoKSB7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5cdGNvbnN0IFtjcmVhdGVCb2FyZF0gPSB1c2VNdXRhdGlvbjxNdXRhdGlvbiwgTXV0YXRpb25DcmVhdGVCb2FyZEFyZ3M+KFxuXHRcdENSRUFURV9CT0FSRCxcblx0KTtcblx0Y29uc3QgW2lzVHJ1ZSwgc2V0SXNUcnVlXSA9IHVzZVN0YXRlKHRydWUpO1xuXG5cdGNvbnN0IHsgZGF0YSB9ID0gdXNlUXVlcnk8UXVlcnksIFF1ZXJ5RmV0Y2hCb2FyZEFyZ3M+KEZFVENIX0JPQVJELCB7XG5cdFx0dmFyaWFibGVzOiB7IGJvYXJkSWQ6IFN0cmluZyhyb3V0ZXIucXVlcnkuaWQpIH0sXG5cdH0pO1xuXG5cdGNvbnN0IFt1cGRhdGVCb2FyZF0gPSB1c2VNdXRhdGlvbihVUERBVEVfQk9BUkQpO1xuXG5cdGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoe1xuXHRcdHdyaXRlcjogJycsXG5cdFx0cGFzc3dvcmQ6ICcnLFxuXHRcdHRpdGxlOiAnJyxcblx0XHRjb250ZW50czogJycsXG5cdH0pO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0c2V0SW5wdXQoe1xuXHRcdFx0d3JpdGVyOiBkYXRhPy5mZXRjaEJvYXJkLndyaXRlciB8fCAnJyxcblx0XHRcdHBhc3N3b3JkOiAnJyxcblx0XHRcdHRpdGxlOiBkYXRhPy5mZXRjaEJvYXJkLnRpdGxlID8gZGF0YS5mZXRjaEJvYXJkLnRpdGxlIDogJycsXG5cdFx0XHRjb250ZW50czogZGF0YT8uZmV0Y2hCb2FyZC5jb250ZW50cyA/IGRhdGEuZmV0Y2hCb2FyZC5jb250ZW50cyA6ICcnLFxuXHRcdH0pO1xuXHR9LCBbZGF0YV0pO1xuXG5cdGNvbnN0IGhhbmRsZUNoYW5nZUlucHV0ID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuXHRcdGNvbnN0IG5ld0lucHV0ID0ge1xuXHRcdFx0Li4uaW5wdXQsXG5cdFx0XHRbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUsXG5cdFx0fTtcblxuXHRcdHNldElucHV0KG5ld0lucHV0KTtcblx0XHRpZiAoXG5cdFx0XHRuZXdJbnB1dC53cml0ZXIgJiZcblx0XHRcdG5ld0lucHV0LnBhc3N3b3JkICYmXG5cdFx0XHRuZXdJbnB1dC50aXRsZSAmJlxuXHRcdFx0bmV3SW5wdXQuY29udGVudHNcblx0XHQpIHtcblx0XHRcdHNldElzVHJ1ZShmYWxzZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNldElzVHJ1ZSh0cnVlKTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlQ2xpY2tDcmVhdGVCb2FyZCA9IGFzeW5jICgpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgY3JlYXRlQm9hcmQoe1xuXHRcdFx0XHR2YXJpYWJsZXM6IHtcblx0XHRcdFx0XHRjcmVhdGVCb2FyZElucHV0OiB7XG5cdFx0XHRcdFx0XHR3cml0ZXI6IGlucHV0LndyaXRlcixcblx0XHRcdFx0XHRcdHBhc3N3b3JkOiBpbnB1dC5wYXNzd29yZCxcblx0XHRcdFx0XHRcdHRpdGxlOiBpbnB1dC50aXRsZSxcblx0XHRcdFx0XHRcdGNvbnRlbnRzOiBpbnB1dC5jb250ZW50cyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cdFx0XHRhbGVydCgn6rKM7Iuc6riAIOuTseuhnSDshLHqs7UnKTtcblx0XHRcdHJvdXRlci5wdXNoKGAvYm9hcmQvJHtyZXN1bHQuZGF0YT8uY3JlYXRlQm9hcmQuX2lkfWApO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRhbGVydChlcnJvcik7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZUNsaWNrVXBkYXRlQm9hcmQgPSBhc3luYyAoKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHVwZGF0ZUJvYXJkKHtcblx0XHRcdFx0dmFyaWFibGVzOiB7XG5cdFx0XHRcdFx0dXBkYXRlQm9hcmRJbnB1dDoge1xuXHRcdFx0XHRcdFx0dGl0bGU6IGlucHV0LnRpdGxlLFxuXHRcdFx0XHRcdFx0eW91dHViZVVSbDogXCJcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cblx0XHRcdGFsZXJ0KCfqsozsi5zquIAg7IiY7KCVIOyEseqztScpO1xuXHRcdFx0cm91dGVyLnB1c2goYC9ib2FyZC8ke3Jlc3VsdC5kYXRhPy5jcmVhdGVCb2FyZC5faWR9YCk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGFsZXJ0KGVycm9yKTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8Qm9hcmRVSVxuXHRcdFx0ZGF0YT17ZGF0YX1cblx0XHRcdGhhbmRsZUNoYW5nZUlucHV0PXtoYW5kbGVDaGFuZ2VJbnB1dH1cblx0XHRcdGhhbmRsZUNsaWNrQ3JlYXRlQm9hcmQ9e2hhbmRsZUNsaWNrQ3JlYXRlQm9hcmR9XG5cdFx0XHRpc1RydWU9e2lzVHJ1ZX1cblx0XHRcdGhhbmRsZUNsaWNrVXBkYXRlQm9hcmQ9e2hhbmRsZUNsaWNrVXBkYXRlQm9hcmR9XG5cdFx0PjwvQm9hcmRVST5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9hcmRXcml0ZVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/units/board/write/BoardWrite.container.tsx\n");

/***/ })

});