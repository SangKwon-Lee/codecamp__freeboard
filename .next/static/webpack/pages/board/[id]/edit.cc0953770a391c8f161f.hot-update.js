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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _BoardWrite_presenter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BoardWrite.presenter */ \"./src/components/units/board/write/BoardWrite.presenter.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _BoardWrite_queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BoardWrite.queries */ \"./src/components/units/board/write/BoardWrite.queries.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/sk/Documents/github/codecamp/codecamp__freeboard/src/components/units/board/write/BoardWrite.container.tsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nfunction BoardWritePage() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n\n  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation)(_BoardWrite_queries__WEBPACK_IMPORTED_MODULE_7__.CREATE_BOARD),\n      _useMutation2 = (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.default)(_useMutation, 1),\n      createBoard = _useMutation2[0];\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true),\n      isTrue = _useState[0],\n      setIsTrue = _useState[1];\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useQuery)(_BoardWrite_queries__WEBPACK_IMPORTED_MODULE_7__.FETCH_BOARD, {\n    variables: {\n      boardId: String(router.query.id)\n    }\n  }),\n      data = _useQuery.data;\n\n  var _useMutation3 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation)(_BoardWrite_queries__WEBPACK_IMPORTED_MODULE_7__.UPDATE_BOARD),\n      _useMutation4 = (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.default)(_useMutation3, 1),\n      updateBoard = _useMutation4[0];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({\n    writer: '',\n    password: '',\n    title: '',\n    contents: ''\n  }),\n      input = _useState2[0],\n      setInput = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {\n    setInput({\n      writer: (data === null || data === void 0 ? void 0 : data.fetchBoard.writer) || '',\n      password: '',\n      title: data !== null && data !== void 0 && data.fetchBoard.title ? data.fetchBoard.title : '',\n      contents: data !== null && data !== void 0 && data.fetchBoard.contents ? data.fetchBoard.contents : ''\n    });\n  }, [data]);\n\n  var handleChangeInput = function handleChangeInput(event) {\n    var newInput = _objectSpread(_objectSpread({}, input), {}, (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)({}, event.target.name, event.target.value));\n\n    setInput(newInput);\n\n    if (newInput.writer && newInput.password && newInput.title && newInput.contents) {\n      setIsTrue(false);\n    } else {\n      setIsTrue(true);\n    }\n  };\n\n  var handleClickCreateBoard = /*#__PURE__*/function () {\n    var _ref = (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var _result$data, result;\n\n      return _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return createBoard({\n                variables: {\n                  createBoardInput: {\n                    writer: input.writer,\n                    password: input.password,\n                    title: input.title,\n                    contents: input.contents\n                  }\n                }\n              });\n\n            case 3:\n              result = _context.sent;\n              alert('게시글 등록 성공');\n              router.push(\"/board/\".concat((_result$data = result.data) === null || _result$data === void 0 ? void 0 : _result$data.createBoard._id));\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](0);\n              alert(_context.t0);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 8]]);\n    }));\n\n    return function handleClickCreateBoard() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var handleClickUpdateBoard = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n      var _result$data2, result;\n\n      return _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n              _context2.next = 3;\n              return updateBoard({\n                variables: {\n                  updateBoardInput: {\n                    title: input.title,\n                    contents: input.contents,\n                    youtubeURl: ''\n                  },\n                  passwro: passwro\n                }\n              });\n\n            case 3:\n              result = _context2.sent;\n              alert('게시글 수정 성공');\n              router.push(\"/board/\".concat((_result$data2 = result.data) === null || _result$data2 === void 0 ? void 0 : _result$data2.createBoard._id));\n              _context2.next = 11;\n              break;\n\n            case 8:\n              _context2.prev = 8;\n              _context2.t0 = _context2[\"catch\"](0);\n              alert(_context2.t0);\n\n            case 11:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[0, 8]]);\n    }));\n\n    return function handleClickUpdateBoard() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardWrite_presenter__WEBPACK_IMPORTED_MODULE_5__.default, {\n    data: data,\n    handleChangeInput: handleChangeInput,\n    handleClickCreateBoard: handleClickCreateBoard,\n    isTrue: isTrue,\n    handleClickUpdateBoard: handleClickUpdateBoard\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 102,\n    columnNumber: 3\n  }, this);\n}\n\n_s(BoardWritePage, \"w5sCDwhBFVxWa4HvY1IMHfNi9rE=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter, _apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation, _apollo_client__WEBPACK_IMPORTED_MODULE_9__.useQuery, _apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation];\n});\n\n_c = BoardWritePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoardWritePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"BoardWritePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdW5pdHMvYm9hcmQvd3JpdGUvQm9hcmRXcml0ZS5jb250YWluZXIudHN4P2FjZmMiXSwibmFtZXMiOlsiQm9hcmRXcml0ZVBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VNdXRhdGlvbiIsIkNSRUFURV9CT0FSRCIsImNyZWF0ZUJvYXJkIiwidXNlU3RhdGUiLCJpc1RydWUiLCJzZXRJc1RydWUiLCJ1c2VRdWVyeSIsIkZFVENIX0JPQVJEIiwidmFyaWFibGVzIiwiYm9hcmRJZCIsIlN0cmluZyIsInF1ZXJ5IiwiaWQiLCJkYXRhIiwiVVBEQVRFX0JPQVJEIiwidXBkYXRlQm9hcmQiLCJ3cml0ZXIiLCJwYXNzd29yZCIsInRpdGxlIiwiY29udGVudHMiLCJpbnB1dCIsInNldElucHV0IiwidXNlRWZmZWN0IiwiZmV0Y2hCb2FyZCIsImhhbmRsZUNoYW5nZUlucHV0IiwiZXZlbnQiLCJuZXdJbnB1dCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZUNsaWNrQ3JlYXRlQm9hcmQiLCJjcmVhdGVCb2FyZElucHV0IiwicmVzdWx0IiwiYWxlcnQiLCJwdXNoIiwiX2lkIiwiaGFuZGxlQ2xpY2tVcGRhdGVCb2FyZCIsInVwZGF0ZUJvYXJkSW5wdXQiLCJ5b3V0dWJlVVJsIiwicGFzc3dybyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVFBLFNBQVNBLGNBQVQsR0FBMEI7QUFBQTs7QUFDekIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFEeUIscUJBR0hDLDJEQUFXLENBQ2hDQyw2REFEZ0MsQ0FIUjtBQUFBO0FBQUEsTUFHbEJDLFdBSGtCOztBQUFBLGtCQU1HQywrQ0FBUSxDQUFDLElBQUQsQ0FOWDtBQUFBLE1BTWxCQyxNQU5rQjtBQUFBLE1BTVZDLFNBTlU7O0FBQUEsa0JBUVJDLHdEQUFR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QUFBO0FBQUEscUJBRVJyQixXQUFXLENBQUM7QUFDaENQLHlCQUFTLEVBQUU7QUFDVjZCLGtDQUFnQixFQUFFO0FBQ2pCbkIseUJBQUssRUFBRUUsS0FBSyxDQUFDRixLQURJO0FBRWpCQyw0QkFBUSxFQUFFQyxLQUFLLENBQUNELFFBRkM7QUFHakJtQiw4QkFBVSxFQUFFO0FBSEssbUJBRFI7QUFNVkMseUJBQU8sRUFBUEE7QUFOVTtBQURxQixlQUFELENBRkg7O0FBQUE7QUFFdkJQLG9CQUZ1QjtBQWE3QkMsbUJBQUssQ0FBQyxXQUFELENBQUw7QUFDQW5DLG9CQUFNLENBQUNvQyxJQUFQLG1DQUFzQkYsTUFBTSxDQUFDbkIsSUFBN0Isa0RBQXNCLGNBQWFYLFdBQWIsQ0FBeUJpQyxHQUEvQztBQWQ2QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWdCN0JGLG1CQUFLLGNBQUw7O0FBaEI2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUF0Qkcsc0JBQXNCO0FBQUE7QUFBQTtBQUFBLEtBQTVCOztBQW9CQSxzQkFDQyw4REFBQywwREFBRDtBQUNDLFFBQUksRUFBRXZCLElBRFA7QUFFQyxxQkFBaUIsRUFBRVcsaUJBRnBCO0FBR0MsMEJBQXNCLEVBQUVNLHNCQUh6QjtBQUlDLFVBQU0sRUFBRTFCLE1BSlQ7QUFLQywwQkFBc0IsRUFBRWdDO0FBTHpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQVNBOztHQWpHUXZDLGM7VUFDT0Usa0QsRUFFT0MsdUQsRUFLTE0sb0QsRUFJS04sdUQ7OztLQVpkSCxjO0FBbUdULCtEQUFlQSxjQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvdW5pdHMvYm9hcmQvd3JpdGUvQm9hcmRXcml0ZS5jb250YWluZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJvYXJkVUkgZnJvbSAnLi9Cb2FyZFdyaXRlLnByZXNlbnRlcic7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ1JFQVRFX0JPQVJELCBGRVRDSF9CT0FSRCwgVVBEQVRFX0JPQVJEIH0gZnJvbSAnLi9Cb2FyZFdyaXRlLnF1ZXJpZXMnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHtcblx0TXV0YXRpb24sXG5cdE11dGF0aW9uQ3JlYXRlQm9hcmRBcmdzLFxuXHRRdWVyeSxcblx0UXVlcnlGZXRjaEJvYXJkQXJncyxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9ucy90eXBlcy9nZW5lcmF0ZWQvdHlwZXMnO1xuXG5mdW5jdGlvbiBCb2FyZFdyaXRlUGFnZSgpIHtcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cblx0Y29uc3QgW2NyZWF0ZUJvYXJkXSA9IHVzZU11dGF0aW9uPE11dGF0aW9uLCBNdXRhdGlvbkNyZWF0ZUJvYXJkQXJncz4oXG5cdFx0Q1JFQVRFX0JPQVJELFxuXHQpO1xuXHRjb25zdCBbaXNUcnVlLCBzZXRJc1RydWVdID0gdXNlU3RhdGUodHJ1ZSk7XG5cblx0Y29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeTxRdWVyeSwgUXVlcnlGZXRjaEJvYXJkQXJncz4oRkVUQ0hfQk9BUkQsIHtcblx0XHR2YXJpYWJsZXM6IHsgYm9hcmRJZDogU3RyaW5nKHJvdXRlci5xdWVyeS5pZCkgfSxcblx0fSk7XG5cblx0Y29uc3QgW3VwZGF0ZUJvYXJkXSA9IHVzZU11dGF0aW9uKFVQREFURV9CT0FSRCk7XG5cblx0Y29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSh7XG5cdFx0d3JpdGVyOiAnJyxcblx0XHRwYXNzd29yZDogJycsXG5cdFx0dGl0bGU6ICcnLFxuXHRcdGNvbnRlbnRzOiAnJyxcblx0fSk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZXRJbnB1dCh7XG5cdFx0XHR3cml0ZXI6IGRhdGE/LmZldGNoQm9hcmQud3JpdGVyIHx8ICcnLFxuXHRcdFx0cGFzc3dvcmQ6ICcnLFxuXHRcdFx0dGl0bGU6IGRhdGE/LmZldGNoQm9hcmQudGl0bGUgPyBkYXRhLmZldGNoQm9hcmQudGl0bGUgOiAnJyxcblx0XHRcdGNvbnRlbnRzOiBkYXRhPy5mZXRjaEJvYXJkLmNvbnRlbnRzID8gZGF0YS5mZXRjaEJvYXJkLmNvbnRlbnRzIDogJycsXG5cdFx0fSk7XG5cdH0sIFtkYXRhXSk7XG5cblx0Y29uc3QgaGFuZGxlQ2hhbmdlSW5wdXQgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG5cdFx0Y29uc3QgbmV3SW5wdXQgPSB7XG5cdFx0XHQuLi5pbnB1dCxcblx0XHRcdFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSxcblx0XHR9O1xuXG5cdFx0c2V0SW5wdXQobmV3SW5wdXQpO1xuXHRcdGlmIChcblx0XHRcdG5ld0lucHV0LndyaXRlciAmJlxuXHRcdFx0bmV3SW5wdXQucGFzc3dvcmQgJiZcblx0XHRcdG5ld0lucHV0LnRpdGxlICYmXG5cdFx0XHRuZXdJbnB1dC5jb250ZW50c1xuXHRcdCkge1xuXHRcdFx0c2V0SXNUcnVlKGZhbHNlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2V0SXNUcnVlKHRydWUpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBoYW5kbGVDbGlja0NyZWF0ZUJvYXJkID0gYXN5bmMgKCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBjcmVhdGVCb2FyZCh7XG5cdFx0XHRcdHZhcmlhYmxlczoge1xuXHRcdFx0XHRcdGNyZWF0ZUJvYXJkSW5wdXQ6IHtcblx0XHRcdFx0XHRcdHdyaXRlcjogaW5wdXQud3JpdGVyLFxuXHRcdFx0XHRcdFx0cGFzc3dvcmQ6IGlucHV0LnBhc3N3b3JkLFxuXHRcdFx0XHRcdFx0dGl0bGU6IGlucHV0LnRpdGxlLFxuXHRcdFx0XHRcdFx0Y29udGVudHM6IGlucHV0LmNvbnRlbnRzLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9KTtcblx0XHRcdGFsZXJ0KCfqsozsi5zquIAg65Ox66GdIOyEseqztScpO1xuXHRcdFx0cm91dGVyLnB1c2goYC9ib2FyZC8ke3Jlc3VsdC5kYXRhPy5jcmVhdGVCb2FyZC5faWR9YCk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGFsZXJ0KGVycm9yKTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlQ2xpY2tVcGRhdGVCb2FyZCA9IGFzeW5jICgpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgdXBkYXRlQm9hcmQoe1xuXHRcdFx0XHR2YXJpYWJsZXM6IHtcblx0XHRcdFx0XHR1cGRhdGVCb2FyZElucHV0OiB7XG5cdFx0XHRcdFx0XHR0aXRsZTogaW5wdXQudGl0bGUsXG5cdFx0XHRcdFx0XHRjb250ZW50czogaW5wdXQuY29udGVudHMsXG5cdFx0XHRcdFx0XHR5b3V0dWJlVVJsOiAnJyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHBhc3N3cm9cblx0XHRcdFx0fSxcblx0XHRcdH0pO1xuXG5cdFx0XHRhbGVydCgn6rKM7Iuc6riAIOyImOyglSDshLHqs7UnKTtcblx0XHRcdHJvdXRlci5wdXNoKGAvYm9hcmQvJHtyZXN1bHQuZGF0YT8uY3JlYXRlQm9hcmQuX2lkfWApO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRhbGVydChlcnJvcik7XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PEJvYXJkVUlcblx0XHRcdGRhdGE9e2RhdGF9XG5cdFx0XHRoYW5kbGVDaGFuZ2VJbnB1dD17aGFuZGxlQ2hhbmdlSW5wdXR9XG5cdFx0XHRoYW5kbGVDbGlja0NyZWF0ZUJvYXJkPXtoYW5kbGVDbGlja0NyZWF0ZUJvYXJkfVxuXHRcdFx0aXNUcnVlPXtpc1RydWV9XG5cdFx0XHRoYW5kbGVDbGlja1VwZGF0ZUJvYXJkPXtoYW5kbGVDbGlja1VwZGF0ZUJvYXJkfVxuXHRcdD48L0JvYXJkVUk+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkV3JpdGVQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/units/board/write/BoardWrite.container.tsx\n");

/***/ })

});