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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _BoardWrite_presenter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BoardWrite.presenter */ \"./src/components/units/board/write/BoardWrite.presenter.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _BoardWrite_queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BoardWrite.queries */ \"./src/components/units/board/write/BoardWrite.queries.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/sk/Documents/github/codecamp/codecamp__freeboard/src/components/units/board/write/BoardWrite.container.tsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nfunction BoardWritePage() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n\n  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation)(_BoardWrite_queries__WEBPACK_IMPORTED_MODULE_7__.CREATE_BOARD),\n      _useMutation2 = (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.default)(_useMutation, 1),\n      createBoard = _useMutation2[0];\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true),\n      isTrue = _useState[0],\n      setIsTrue = _useState[1];\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useQuery)(_BoardWrite_queries__WEBPACK_IMPORTED_MODULE_7__.FETCH_BOARD, {\n    variables: {\n      boardId: String(router.query.id)\n    }\n  }),\n      data = _useQuery.data;\n\n  console.log(router.query.id);\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({\n    writer: '',\n    password: '',\n    title: '',\n    contents: ''\n  }),\n      input = _useState2[0],\n      setInput = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {\n    setInput({\n      writer: (data === null || data === void 0 ? void 0 : data.fetchBoard.writer) || '',\n      password: '',\n      title: data !== null && data !== void 0 && data.fetchBoard.title ? data.fetchBoard.title : '',\n      contents: data !== null && data !== void 0 && data.fetchBoard.contents ? data.fetchBoard.contents : ''\n    });\n  }, [data]);\n\n  var handleChangeInput = function handleChangeInput(event) {\n    var newInput = _objectSpread(_objectSpread({}, input), {}, (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)({}, event.target.name, event.target.value));\n\n    setInput(newInput);\n\n    if (newInput.writer && newInput.password && newInput.title && newInput.contents) {\n      setIsTrue(false);\n    } else {\n      setIsTrue(true);\n    }\n  };\n\n  var handleClickCreateBoard = /*#__PURE__*/function () {\n    var _ref = (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var _result$data, result;\n\n      return _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return createBoard({\n                variables: {\n                  createBoardInput: {\n                    writer: input.writer,\n                    password: input.password,\n                    title: input.title,\n                    contents: input.contents\n                  }\n                }\n              });\n\n            case 3:\n              result = _context.sent;\n              alert('게시글 등록 성공');\n              router.push(\"/board/\".concat((_result$data = result.data) === null || _result$data === void 0 ? void 0 : _result$data.createBoard._id));\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](0);\n              alert(_context.t0);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 8]]);\n    }));\n\n    return function handleClickCreateBoard() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardWrite_presenter__WEBPACK_IMPORTED_MODULE_5__.default, {\n    data: data,\n    handleChangeInput: handleChangeInput,\n    handleClickCreateBoard: handleClickCreateBoard,\n    isTrue: isTrue\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 81,\n    columnNumber: 3\n  }, this);\n}\n\n_s(BoardWritePage, \"STllUObK8+mS42Lc8tazIB6K5AQ=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter, _apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation, _apollo_client__WEBPACK_IMPORTED_MODULE_9__.useQuery];\n});\n\n_c = BoardWritePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoardWritePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"BoardWritePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdW5pdHMvYm9hcmQvd3JpdGUvQm9hcmRXcml0ZS5jb250YWluZXIudHN4P2FjZmMiXSwibmFtZXMiOlsiQm9hcmRXcml0ZVBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VNdXRhdGlvbiIsIkNSRUFURV9CT0FSRCIsImNyZWF0ZUJvYXJkIiwidXNlU3RhdGUiLCJpc1RydWUiLCJzZXRJc1RydWUiLCJ1c2VRdWVyeSIsIkZFVENIX0JPQVJEIiwidmFyaWFibGVzIiwiYm9hcmRJZCIsIlN0cmluZyIsInF1ZXJ5IiwiaWQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIndyaXRlciIsInBhc3N3b3JkIiwidGl0bGUiLCJjb250ZW50cyIsImlucHV0Iiwic2V0SW5wdXQiLCJ1c2VFZmZlY3QiLCJmZXRjaEJvYXJkIiwiaGFuZGxlQ2hhbmdlSW5wdXQiLCJldmVudCIsIm5ld0lucHV0IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlQ2xpY2tDcmVhdGVCb2FyZCIsImNyZWF0ZUJvYXJkSW5wdXQiLCJyZXN1bHQiLCJhbGVydCIsInB1c2giLCJfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFRQSxTQUFTQSxjQUFULEdBQTBCO0FBQUE7O0FBQ3pCLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBRHlCLHFCQUdIQywyREFBVyxDQUNoQ0MsNkRBRGdDLENBSFI7QUFBQTtBQUFBLE1BR2xCQyxXQUhrQjs7QUFBQSxrQkFNR0MsK0NBQVEsQ0FBQyxJQUFELENBTlg7QUFBQSxNQU1sQkMsTUFOa0I7QUFBQSxNQU1WQyxTQU5VOztBQUFBLGtCQVFSQyx3REFBUSxDQUE2QkMsNERBQTdCLEVBQTBDO0FBQ2xFQyxhQUFTLEVBQUU7QUFBRUMsYUFBTyxFQUFFQyxNQUFNLENBQUNaLE1BQU0sQ0FBQ2EsS0FB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RDtBQVFBOztHQTNFUVAsYztVQUNPRSxrRCxFQUVPQyx1RCxFQUtMTSxvRDs7O0tBUlRULGM7QUE2RVQsK0RBQWVBLGNBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91bml0cy9ib2FyZC93cml0ZS9Cb2FyZFdyaXRlLmNvbnRhaW5lci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm9hcmRVSSBmcm9tICcuL0JvYXJkV3JpdGUucHJlc2VudGVyJztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDUkVBVEVfQk9BUkQsIEZFVENIX0JPQVJEIH0gZnJvbSAnLi9Cb2FyZFdyaXRlLnF1ZXJpZXMnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHtcblx0TXV0YXRpb24sXG5cdE11dGF0aW9uQ3JlYXRlQm9hcmRBcmdzLFxuXHRRdWVyeSxcblx0UXVlcnlGZXRjaEJvYXJkQXJncyxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9ucy90eXBlcy9nZW5lcmF0ZWQvdHlwZXMnO1xuXG5mdW5jdGlvbiBCb2FyZFdyaXRlUGFnZSgpIHtcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cblx0Y29uc3QgW2NyZWF0ZUJvYXJkXSA9IHVzZU11dGF0aW9uPE11dGF0aW9uLCBNdXRhdGlvbkNyZWF0ZUJvYXJkQXJncz4oXG5cdFx0Q1JFQVRFX0JPQVJELFxuXHQpO1xuXHRjb25zdCBbaXNUcnVlLCBzZXRJc1RydWVdID0gdXNlU3RhdGUodHJ1ZSk7XG5cblx0Y29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeTxRdWVyeSwgUXVlcnlGZXRjaEJvYXJkQXJncz4oRkVUQ0hfQk9BUkQsIHtcblx0XHR2YXJpYWJsZXM6IHsgYm9hcmRJZDogU3RyaW5nKHJvdXRlci5xdWVyeS5pZCkgfSxcblx0fSk7XG5cblx0Y29uc29sZS5sb2cocm91dGVyLnF1ZXJ5LmlkKTtcblx0Y29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSh7XG5cdFx0d3JpdGVyOiAnJyxcblx0XHRwYXNzd29yZDogJycsXG5cdFx0dGl0bGU6ICcnLFxuXHRcdGNvbnRlbnRzOiAnJyxcblx0fSk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZXRJbnB1dCh7XG5cdFx0XHR3cml0ZXI6IGRhdGE/LmZldGNoQm9hcmQud3JpdGVyIHx8ICcnLFxuXHRcdFx0cGFzc3dvcmQ6ICcnLFxuXHRcdFx0dGl0bGU6IGRhdGE/LmZldGNoQm9hcmQudGl0bGUgPyBkYXRhLmZldGNoQm9hcmQudGl0bGUgOiAnJyxcblx0XHRcdGNvbnRlbnRzOiBkYXRhPy5mZXRjaEJvYXJkLmNvbnRlbnRzID8gZGF0YS5mZXRjaEJvYXJkLmNvbnRlbnRzIDogJycsXG5cdFx0fSk7XG5cdH0sIFtkYXRhXSk7XG5cblx0Y29uc3QgaGFuZGxlQ2hhbmdlSW5wdXQgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG5cdFx0Y29uc3QgbmV3SW5wdXQgPSB7XG5cdFx0XHQuLi5pbnB1dCxcblx0XHRcdFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSxcblx0XHR9O1xuXG5cdFx0c2V0SW5wdXQobmV3SW5wdXQpO1xuXHRcdGlmIChcblx0XHRcdG5ld0lucHV0LndyaXRlciAmJlxuXHRcdFx0bmV3SW5wdXQucGFzc3dvcmQgJiZcblx0XHRcdG5ld0lucHV0LnRpdGxlICYmXG5cdFx0XHRuZXdJbnB1dC5jb250ZW50c1xuXHRcdCkge1xuXHRcdFx0c2V0SXNUcnVlKGZhbHNlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2V0SXNUcnVlKHRydWUpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBoYW5kbGVDbGlja0NyZWF0ZUJvYXJkID0gYXN5bmMgKCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBjcmVhdGVCb2FyZCh7XG5cdFx0XHRcdHZhcmlhYmxlczoge1xuXHRcdFx0XHRcdGNyZWF0ZUJvYXJkSW5wdXQ6IHtcblx0XHRcdFx0XHRcdHdyaXRlcjogaW5wdXQud3JpdGVyLFxuXHRcdFx0XHRcdFx0cGFzc3dvcmQ6IGlucHV0LnBhc3N3b3JkLFxuXHRcdFx0XHRcdFx0dGl0bGU6IGlucHV0LnRpdGxlLFxuXHRcdFx0XHRcdFx0Y29udGVudHM6IGlucHV0LmNvbnRlbnRzLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9KTtcblx0XHRcdGFsZXJ0KCfqsozsi5zquIAg65Ox66GdIOyEseqztScpO1xuXHRcdFx0cm91dGVyLnB1c2goYC9ib2FyZC8ke3Jlc3VsdC5kYXRhPy5jcmVhdGVCb2FyZC5faWR9YCk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGFsZXJ0KGVycm9yKTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8Qm9hcmRVSVxuXHRcdFx0ZGF0YT17ZGF0YX1cblx0XHRcdGhhbmRsZUNoYW5nZUlucHV0PXtoYW5kbGVDaGFuZ2VJbnB1dH1cblx0XHRcdGhhbmRsZUNsaWNrQ3JlYXRlQm9hcmQ9e2hhbmRsZUNsaWNrQ3JlYXRlQm9hcmR9XG5cdFx0XHRpc1RydWU9e2lzVHJ1ZX1cblx0XHQ+PC9Cb2FyZFVJPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCb2FyZFdyaXRlUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/units/board/write/BoardWrite.container.tsx\n");

/***/ })

});