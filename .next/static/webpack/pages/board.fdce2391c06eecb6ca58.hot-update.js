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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _BoardWrite_presenter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BoardWrite.presenter */ \"./src/components/units/board/write/BoardWrite.presenter.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _BoardWrite_queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BoardWrite.queries */ \"./src/components/units/board/write/BoardWrite.queries.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/sk/Documents/github/codecamp/codecamp__freeboard/src/components/units/board/write/BoardWrite.container.tsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nfunction BoardWritePage() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n\n  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation)(_BoardWrite_queries__WEBPACK_IMPORTED_MODULE_7__.CREATE_BOARD),\n      _useMutation2 = (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.default)(_useMutation, 1),\n      createBoard = _useMutation2[0];\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true),\n      isTrue = _useState[0],\n      setIsTrue = _useState[1];\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useQuery)(_BoardWrite_queries__WEBPACK_IMPORTED_MODULE_7__.FETCH_BOARD, {\n    variables: {\n      boardId: String(router.query.id)\n    }\n  }),\n      data = _useQuery.data;\n\n  var _useMutation3 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation)(_BoardWrite_queries__WEBPACK_IMPORTED_MODULE_7__.UPDATE_BOARD),\n      _useMutation4 = (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.default)(_useMutation3, 1),\n      updateBoard = _useMutation4[0];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({\n    writer: '',\n    password: '',\n    title: '',\n    contents: ''\n  }),\n      input = _useState2[0],\n      setInput = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {\n    setInput({\n      writer: (data === null || data === void 0 ? void 0 : data.fetchBoard.writer) || '',\n      password: '',\n      title: data !== null && data !== void 0 && data.fetchBoard.title ? data.fetchBoard.title : '',\n      contents: data !== null && data !== void 0 && data.fetchBoard.contents ? data.fetchBoard.contents : ''\n    });\n  }, [data]);\n\n  var handleChangeInput = function handleChangeInput(event) {\n    var newInput = _objectSpread(_objectSpread({}, input), {}, (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)({}, event.target.name, event.target.value));\n\n    setInput(newInput);\n\n    if (newInput.writer && newInput.password && newInput.title && newInput.contents) {\n      setIsTrue(false);\n    } else {\n      setIsTrue(true);\n    }\n  };\n\n  var handleClickCreateBoard = /*#__PURE__*/function () {\n    var _ref = (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var _result$data, result;\n\n      return _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return createBoard({\n                variables: {\n                  createBoardInput: {\n                    writer: input.writer,\n                    password: input.password,\n                    title: input.title,\n                    contents: input.contents\n                  }\n                }\n              });\n\n            case 3:\n              result = _context.sent;\n              alert('게시글 등록 성공');\n              router.push(\"/board/\".concat((_result$data = result.data) === null || _result$data === void 0 ? void 0 : _result$data.createBoard._id));\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](0);\n              alert(_context.t0);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 8]]);\n    }));\n\n    return function handleClickCreateBoard() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var handleClickUpdateBoard = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n      var _result$data2, result;\n\n      return _Users_sk_Documents_github_codecamp_codecamp_freeboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n              _context2.next = 3;\n              return updateBoard({\n                variables: {\n                  updateBoardInput: {\n                    writer: input.writer,\n                    password: input.password,\n                    title: input.title,\n                    contents: input.contents\n                  }\n                }\n              });\n\n            case 3:\n              result = _context2.sent;\n              alert('게시글 수정 성공');\n              router.push(\"/board/\".concat((_result$data2 = result.data) === null || _result$data2 === void 0 ? void 0 : _result$data2.createBoard._id));\n              _context2.next = 11;\n              break;\n\n            case 8:\n              _context2.prev = 8;\n              _context2.t0 = _context2[\"catch\"](0);\n              alert(_context2.t0);\n\n            case 11:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[0, 8]]);\n    }));\n\n    return function handleClickUpdateBoard() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardWrite_presenter__WEBPACK_IMPORTED_MODULE_5__.default, {\n    data: data,\n    handleChangeInput: handleChangeInput,\n    handleClickCreateBoard: handleClickCreateBoard,\n    isTrue: isTrue,\n    handleClickUpdateBoard: handleClickUpdateBoard\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 102,\n    columnNumber: 3\n  }, this);\n}\n\n_s(BoardWritePage, \"w5sCDwhBFVxWa4HvY1IMHfNi9rE=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter, _apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation, _apollo_client__WEBPACK_IMPORTED_MODULE_9__.useQuery, _apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation];\n});\n\n_c = BoardWritePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoardWritePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"BoardWritePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdW5pdHMvYm9hcmQvd3JpdGUvQm9hcmRXcml0ZS5jb250YWluZXIudHN4P2FjZmMiXSwibmFtZXMiOlsiQm9hcmRXcml0ZVBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VNdXRhdGlvbiIsIkNSRUFURV9CT0FSRCIsImNyZWF0ZUJvYXJkIiwidXNlU3RhdGUiLCJpc1RydWUiLCJzZXRJc1RydWUiLCJ1c2VRdWVyeSIsIkZFVENIX0JPQVJEIiwidmFyaWFibGVzIiwiYm9hcmRJZCIsIlN0cmluZyIsInF1ZXJ5IiwiaWQiLCJkYXRhIiwiVVBEQVRFX0JPQVJEIiwidXBkYXRlQm9hcmQiLCJ3cml0ZXIiLCJwYXNzd29yZCIsInRpdGxlIiwiY29udGVudHMiLCJpbnB1dCIsInNldElucHV0IiwidXNlRWZmZWN0IiwiZmV0Y2hCb2FyZCIsImhhbmRsZUNoYW5nZUlucHV0IiwiZXZlbnQiLCJuZXdJbnB1dCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZUNsaWNrQ3JlYXRlQm9hcmQiLCJjcmVhdGVCb2FyZElucHV0IiwicmVzdWx0IiwiYWxlcnQiLCJwdXNoIiwiX2lkIiwiaGFuZGxlQ2xpY2tVcGRhdGVCb2FyZCIsInVwZGF0ZUJvYXJkSW5wdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFRQSxTQUFTQSxjQUFULEdBQTBCO0FBQUE7O0FBQ3pCLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBRHlCLHFCQUdIQywyREFBVyxDQUNoQ0MsNkRBRGdDLENBSFI7QUFBQTtBQUFBLE1BR2xCQyxXQUhrQjs7QUFBQSxrQkFNR0MsK0NBQVEsQ0FBQyxJQUFELENBTlg7QUFBQSxNQU1sQkMsTUFOa0I7QUFBQSxNQU1WQyxTQU5VOztBQUFBLGtCQVFSQyx3REFBUSxDQUE2QkMsNERBQTdCLEVBQTBDO0FB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QUFDO0FBQ2hDUCx5QkFBUyxFQUFFO0FBQ1Y2QixrQ0FBZ0IsRUFBRTtBQUNqQnJCLDBCQUFNLEVBQUVJLEtBQUssQ0FBQ0osTUFERztBQUVqQkMsNEJBQVEsRUFBRUcsS0FBSyxDQUFDSCxRQUZDO0FBR2pCQyx5QkFBSyxFQUFFRSxLQUFLLENBQUNGLEtBSEk7QUFJakJDLDRCQUFRLEVBQUVDLEtBQUssQ0FBQ0Q7QUFKQztBQURSO0FBRHFCLGVBQUQsQ0FGSDs7QUFBQTtBQUV2QmEsb0JBRnVCO0FBYTdCQyxtQkFBSyxDQUFDLFdBQUQsQ0FBTDtBQUNBbkMsb0JBQU0sQ0FBQ29DLElBQVAsbUNBQXNCRixNQUFNLENBQUNuQixJQUE3QixrREFBc0IsY0FBYVgsV0FBYixDQUF5QmlDLEdBQS9DO0FBZDZCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBZ0I3QkYsbUJBQUssY0FBTDs7QUFoQjZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQXRCRyxzQkFBc0I7QUFBQTtBQUFBO0FBQUEsS0FBNUI7O0FBb0JBLHNCQUNDLDhEQUFDLDBEQUFEO0FBQ0MsUUFBSSxFQUFFdkIsSUFEUDtBQUVDLHFCQUFpQixFQUFFVyxpQkFGcEI7QUFHQywwQkFBc0IsRUFBRU0sc0JBSHpCO0FBSUMsVUFBTSxFQUFFMUIsTUFKVDtBQUtDLDBCQUFzQixFQUFFZ0M7QUFMekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBU0E7O0dBakdRdkMsYztVQUNPRSxrRCxFQUVPQyx1RCxFQUtMTSxvRCxFQUlLTix1RDs7O0tBWmRILGM7QUFtR1QsK0RBQWVBLGNBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91bml0cy9ib2FyZC93cml0ZS9Cb2FyZFdyaXRlLmNvbnRhaW5lci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm9hcmRVSSBmcm9tICcuL0JvYXJkV3JpdGUucHJlc2VudGVyJztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDUkVBVEVfQk9BUkQsIEZFVENIX0JPQVJELCBVUERBVEVfQk9BUkQgfSBmcm9tICcuL0JvYXJkV3JpdGUucXVlcmllcyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQge1xuXHRNdXRhdGlvbixcblx0TXV0YXRpb25DcmVhdGVCb2FyZEFyZ3MsXG5cdFF1ZXJ5LFxuXHRRdWVyeUZldGNoQm9hcmRBcmdzLFxufSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb25zL3R5cGVzL2dlbmVyYXRlZC90eXBlcyc7XG5cbmZ1bmN0aW9uIEJvYXJkV3JpdGVQYWdlKCkge1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuXHRjb25zdCBbY3JlYXRlQm9hcmRdID0gdXNlTXV0YXRpb248TXV0YXRpb24sIE11dGF0aW9uQ3JlYXRlQm9hcmRBcmdzPihcblx0XHRDUkVBVEVfQk9BUkQsXG5cdCk7XG5cdGNvbnN0IFtpc1RydWUsIHNldElzVHJ1ZV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuXHRjb25zdCB7IGRhdGEgfSA9IHVzZVF1ZXJ5PFF1ZXJ5LCBRdWVyeUZldGNoQm9hcmRBcmdzPihGRVRDSF9CT0FSRCwge1xuXHRcdHZhcmlhYmxlczogeyBib2FyZElkOiBTdHJpbmcocm91dGVyLnF1ZXJ5LmlkKSB9LFxuXHR9KTtcblxuXHRjb25zdCBbdXBkYXRlQm9hcmRdID0gdXNlTXV0YXRpb24oVVBEQVRFX0JPQVJEKTtcblxuXHRjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKHtcblx0XHR3cml0ZXI6ICcnLFxuXHRcdHBhc3N3b3JkOiAnJyxcblx0XHR0aXRsZTogJycsXG5cdFx0Y29udGVudHM6ICcnLFxuXHR9KTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNldElucHV0KHtcblx0XHRcdHdyaXRlcjogZGF0YT8uZmV0Y2hCb2FyZC53cml0ZXIgfHwgJycsXG5cdFx0XHRwYXNzd29yZDogJycsXG5cdFx0XHR0aXRsZTogZGF0YT8uZmV0Y2hCb2FyZC50aXRsZSA/IGRhdGEuZmV0Y2hCb2FyZC50aXRsZSA6ICcnLFxuXHRcdFx0Y29udGVudHM6IGRhdGE/LmZldGNoQm9hcmQuY29udGVudHMgPyBkYXRhLmZldGNoQm9hcmQuY29udGVudHMgOiAnJyxcblx0XHR9KTtcblx0fSwgW2RhdGFdKTtcblxuXHRjb25zdCBoYW5kbGVDaGFuZ2VJbnB1dCA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcblx0XHRjb25zdCBuZXdJbnB1dCA9IHtcblx0XHRcdC4uLmlucHV0LFxuXHRcdFx0W2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuXHRcdH07XG5cblx0XHRzZXRJbnB1dChuZXdJbnB1dCk7XG5cdFx0aWYgKFxuXHRcdFx0bmV3SW5wdXQud3JpdGVyICYmXG5cdFx0XHRuZXdJbnB1dC5wYXNzd29yZCAmJlxuXHRcdFx0bmV3SW5wdXQudGl0bGUgJiZcblx0XHRcdG5ld0lucHV0LmNvbnRlbnRzXG5cdFx0KSB7XG5cdFx0XHRzZXRJc1RydWUoZmFsc2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzZXRJc1RydWUodHJ1ZSk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZUNsaWNrQ3JlYXRlQm9hcmQgPSBhc3luYyAoKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNyZWF0ZUJvYXJkKHtcblx0XHRcdFx0dmFyaWFibGVzOiB7XG5cdFx0XHRcdFx0Y3JlYXRlQm9hcmRJbnB1dDoge1xuXHRcdFx0XHRcdFx0d3JpdGVyOiBpbnB1dC53cml0ZXIsXG5cdFx0XHRcdFx0XHRwYXNzd29yZDogaW5wdXQucGFzc3dvcmQsXG5cdFx0XHRcdFx0XHR0aXRsZTogaW5wdXQudGl0bGUsXG5cdFx0XHRcdFx0XHRjb250ZW50czogaW5wdXQuY29udGVudHMsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0pO1xuXHRcdFx0YWxlcnQoJ+qyjOyLnOq4gCDrk7HroZ0g7ISx6rO1Jyk7XG5cdFx0XHRyb3V0ZXIucHVzaChgL2JvYXJkLyR7cmVzdWx0LmRhdGE/LmNyZWF0ZUJvYXJkLl9pZH1gKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0YWxlcnQoZXJyb3IpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBoYW5kbGVDbGlja1VwZGF0ZUJvYXJkID0gYXN5bmMgKCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCB1cGRhdGVCb2FyZCh7XG5cdFx0XHRcdHZhcmlhYmxlczoge1xuXHRcdFx0XHRcdHVwZGF0ZUJvYXJkSW5wdXQ6IHtcblx0XHRcdFx0XHRcdHdyaXRlcjogaW5wdXQud3JpdGVyLFxuXHRcdFx0XHRcdFx0cGFzc3dvcmQ6IGlucHV0LnBhc3N3b3JkLFxuXHRcdFx0XHRcdFx0dGl0bGU6IGlucHV0LnRpdGxlLFxuXHRcdFx0XHRcdFx0Y29udGVudHM6IGlucHV0LmNvbnRlbnRzLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9KTtcblxuXHRcdFx0YWxlcnQoJ+qyjOyLnOq4gCDsiJjsoJUg7ISx6rO1Jyk7XG5cdFx0XHRyb3V0ZXIucHVzaChgL2JvYXJkLyR7cmVzdWx0LmRhdGE/LmNyZWF0ZUJvYXJkLl9pZH1gKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0YWxlcnQoZXJyb3IpO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxCb2FyZFVJXG5cdFx0XHRkYXRhPXtkYXRhfVxuXHRcdFx0aGFuZGxlQ2hhbmdlSW5wdXQ9e2hhbmRsZUNoYW5nZUlucHV0fVxuXHRcdFx0aGFuZGxlQ2xpY2tDcmVhdGVCb2FyZD17aGFuZGxlQ2xpY2tDcmVhdGVCb2FyZH1cblx0XHRcdGlzVHJ1ZT17aXNUcnVlfVxuXHRcdFx0aGFuZGxlQ2xpY2tVcGRhdGVCb2FyZD17aGFuZGxlQ2xpY2tVcGRhdGVCb2FyZH1cblx0XHQ+PC9Cb2FyZFVJPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCb2FyZFdyaXRlUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/units/board/write/BoardWrite.container.tsx\n");

/***/ })

});