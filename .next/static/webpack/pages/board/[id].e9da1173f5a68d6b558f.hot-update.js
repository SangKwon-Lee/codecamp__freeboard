/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/board/[id]",{

/***/ "./src/components/units/board/comments/BoardComments.presenter.tsx":
/*!*************************************************************************!*\
  !*** ./src/components/units/board/comments/BoardComments.presenter.tsx ***!
  \*************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BoardCommentsUI; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _BoardCommentsItems_presenter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoardCommentsItems.presenter */ \"./src/components/units/board/comments/BoardCommentsItems.presenter.tsx\");\n/* harmony import */ var _BoardComments_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoardComments.style */ \"./src/components/units/board/comments/BoardComments.style.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/sk/Documents/github/codecamp/codecamp__freeboard/src/components/units/board/comments/BoardComments.presenter.tsx\";\n// import { IBoardWriterProps } from \"./BoardComments.types\";\n\n\nfunction BoardCommentsUI(_ref) {\n  var _this = this;\n\n  var input = _ref.input,\n      handleInputChange = _ref.handleInputChange,\n      data = _ref.data,\n      rating = _ref.rating,\n      onSaveRating = _ref.onSaveRating,\n      handleClickCreateComment = _ref.handleClickCreateComment,\n      handleDeleteComment = _ref.handleDeleteComment,\n      handleUpdateOpen = _ref.handleUpdateOpen,\n      commentUpdate = _ref.commentUpdate;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_2__.Wrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_2__.DivideLine, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_2__.Body, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_2__.CommentsInputWrapper, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_2__.CommentsImgAndTitle, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_2__.CommentsImg, {\n            src: \"/commentsImg.png\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_2__.CommetnsTitle, {\n            children: \"\\uB313\\uAE00\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_2__.WriterStarWrapper, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_2__.WriterWrapper, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_2__.WriterInput, {\n              value: input.writer,\n              placeholder: \"\\uC791\\uC131\\uC790\",\n              name: \"writer\",\n              onChange: handleInputChange\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 65,\n              columnNumber: 8\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_2__.PasswordInput, {\n              value: input.password,\n              onChange: handleInputChange,\n              placeholder: \"\\uBE44\\uBC00\\uBC88\\uD638\",\n              type: \"password\",\n              name: \"password\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 71,\n              columnNumber: 8\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_2__.StarWrapper, {\n            children: ['1', '2', '3', '4', '5'].map(function (idx) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_2__.StarImg, {\n                onClick: onSaveRating,\n                id: idx,\n                src: rating >= idx ? '/StarColor.png' : '/star.png'\n              }, idx, false, {\n                fileName: _jsxFileName,\n                lineNumber: 81,\n                columnNumber: 9\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_2__.CommmentsBoxWrapper, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_2__.CommentsInput, {\n            value: input.contents,\n            name: \"contents\",\n            onChange: handleInputChange,\n            placeholder: \"\\uAC1C\\uC778\\uC815\\uBCF4\\uB97C \\uACF5\\uC720 \\uBC0F \\uC694\\uCCAD\\uD558\\uAC70\\uB098, \\uBA85\\uC608 \\uD6FC\\uC190, \\uBB34\\uB2E8 \\uAD11\\uACE0, \\uBD88\\uBC95 \\uC815\\uBCF4 \\uC720\\uD3EC\\uC2DC \\uBAA8\\uB2C8\\uD130\\uB9C1 \\uD6C4 \\uC0AD\\uC81C\\uB420 \\uC218 \\uC788\\uC73C\\uBA70, \\uC774\\uC5D0 \\uB300\\uD55C \\uBBFC\\uD615\\uC0AC\\uC0C1 \\uCC45\\uC784\\uC740 \\uAC8C\\uC2DC\\uC790\\uC5D0\\uAC8C \\uC788\\uC2B5\\uB2C8\\uB2E4.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_2__.CommentsBoxBottom, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_2__.CommentsCount, {\n              children: \"0/100\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 98,\n              columnNumber: 8\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_2__.CommentsBtn, {\n              onClick: handleClickCreateComment,\n              children: \"\\uB4F1\\uB85D\\uD558\\uAE30\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 99,\n              columnNumber: 8\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 5\n      }, this), data === null || data === void 0 ? void 0 : data.fetchBoardComments.map(function (data) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardCommentsItems_presenter__WEBPACK_IMPORTED_MODULE_1__.default, {\n          data: data,\n          onSaveRating: onSaveRating,\n          handleUpdateOpen: handleUpdateOpen,\n          handleDeleteComment: handleDeleteComment,\n          commentUpdate: commentUpdate\n        }, data._id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 6\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 55,\n    columnNumber: 3\n  }, this);\n}\n_c = BoardCommentsUI;\n\nvar _c;\n\n$RefreshReg$(_c, \"BoardCommentsUI\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdW5pdHMvYm9hcmQvY29tbWVudHMvQm9hcmRDb21tZW50cy5wcmVzZW50ZXIudHN4Pzc2OWYiXSwibmFtZXMiOlsiQm9hcmRDb21tZW50c1VJIiwiaW5wdXQiLCJoYW5kbGVJbnB1dENoYW5nZSIsImRhdGEiLCJyYXRpbmciLCJvblNhdmVSYXRpbmciLCJoYW5kbGVDbGlja0NyZWF0ZUNvbW1lbnQiLCJoYW5kbGVEZWxldGVDb21tZW50IiwiaGFuZGxlVXBkYXRlT3BlbiIsImNvbW1lbnRVcGRhdGUiLCJ3cml0ZXIiLCJwYXNzd29yZCIsIm1hcCIsImlkeCIsImNvbnRlbnRzIiwiZmV0Y2hCb2FyZENvbW1lbnRzIiwiX2lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQXNDZSxTQUFTQSxlQUFULE9BVVM7QUFBQTs7QUFBQSxNQVR2QkMsS0FTdUIsUUFUdkJBLEtBU3VCO0FBQUEsTUFSdkJDLGlCQVF1QixRQVJ2QkEsaUJBUXVCO0FBQUEsTUFQdkJDLElBT3VCLFFBUHZCQSxJQU91QjtBQUFBLE1BTnZCQyxNQU11QixRQU52QkEsTUFNdUI7QUFBQSxNQUx2QkMsWUFLdUIsUUFMdkJBLFlBS3VCO0FBQUEsTUFKdkJDLHdCQUl1QixRQUp2QkEsd0JBSXVCO0FBQUEsTUFIdkJDLG1CQUd1QixRQUh2QkEsbUJBR3VCO0FBQUEsTUFGdkJDLGdCQUV1QixRQUZ2QkEsZ0JBRXVCO0FBQUEsTUFEdkJDLGFBQ3VCLFFBRHZCQSxhQUN1QjtBQUN2QixzQkFDQyw4REFBQyx5REFBRDtBQUFBLDRCQUNDLDhEQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUVDLDhEQUFDLHNEQUFEO0FBQUEsOEJBQ0MsOERBQUMsc0VBQUQ7QUFBQSxnQ0FDQyw4REFBQyxxRUFBRDtBQUFBLGtDQUNDLDhEQUFDLDZEQUFEO0FBQWEsZUFBRyxFQUFDO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFFQyw4REFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUFLQyw4REFBQyxtRUFBRDtBQUFBLGtDQUNDLDhEQUFDLCtEQUFEO0FBQUEsb0NBQ0MsOERBQUMsNkRBQUQ7QUFDQyxtQkFBSyxFQUFFUixLQUFLLENBQUNTLE1BRGQ7QUFFQyx5QkFBVyxFQUFDLG9CQUZiO0FBR0Msa0JBQUksRUFBQyxRQUhOO0FBSUMsc0JBQVEsRUFBRVI7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURELGVBT0MsOERBQUMsK0RBQUQ7QUFDQyxtQkFBSyxFQUFFRCxLQUFLLENBQUNVLFFBRGQ7QUFFQyxzQkFBUSxFQUFFVCxpQkFGWDtBQUdDLHlCQUFXLEVBQUMsMEJBSGI7QUFJQyxrQkFBSSxFQUFDLFVBSk47QUFLQyxrQkFBSSxFQUFDO0FBTE47QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFQRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFnQkMsOERBQUMsNkRBQUQ7QUFBQSxzQkFDRSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixHQUFyQixFQUEwQlUsR0FBMUIsQ0FBOEIsVUFBQ0MsR0FBRDtBQUFBLGtDQUM5Qiw4REFBQyx5REFBRDtBQUVDLHVCQUFPLEVBQUVSLFlBRlY7QUFHQyxrQkFBRSxFQUFFUSxHQUhMO0FBSUMsbUJBQUcsRUFBRVQsTUFBTSxJQUFJUyxHQUFWLEdBQWdCLGdCQUFoQixHQUFtQztBQUp6QyxpQkFDTUEsR0FETjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUQ4QjtBQUFBLGFBQTlCO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFoQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxELGVBZ0NDLDhEQUFDLHFFQUFEO0FBQUEsa0NBQ0MsOERBQUMsK0RBQUQ7QUFDQyxpQkFBSyxFQUFFWixLQUFLLENBQUNhLFFBRGQ7QUFFQyxnQkFBSSxFQUFDLFVBRk47QUFHQyxvQkFBUSxFQUFFWixpQkFIWDtBQUlDLHVCQUFXLEVBQUM7QUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELGVBT0MsOERBQUMsbUVBQUQ7QUFBQSxvQ0FDQyw4REFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERCxlQUVDLDhEQUFDLDZEQUFEO0FBQWEscUJBQU8sRUFBRUksd0JBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaENEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELEVBZ0RFSCxJQWhERixhQWdERUEsSUFoREYsdUJBZ0RFQSxJQUFJLENBQUVZLGtCQUFOLENBQXlCSCxHQUF6QixDQUE2QixVQUFDVCxJQUFEO0FBQUEsNEJBQzdCLDhEQUFDLGtFQUFEO0FBRUMsY0FBSSxFQUFFQSxJQUZQO0FBR0Msc0JBQVksRUFBRUUsWUFIZjtBQUlDLDBCQUFnQixFQUFFRyxnQkFKbkI7QUFLQyw2QkFBbUIsRUFBRUQsbUJBTHRCO0FBTUMsdUJBQWEsRUFBRUU7QUFOaEIsV0FDTU4sSUFBSSxDQUFDYSxHQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRDZCO0FBQUEsT0FBN0IsQ0FoREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFnRUE7S0EzRXVCaEIsZSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL3VuaXRzL2JvYXJkL2NvbW1lbnRzL0JvYXJkQ29tbWVudHMucHJlc2VudGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IElCb2FyZFdyaXRlclByb3BzIH0gZnJvbSBcIi4vQm9hcmRDb21tZW50cy50eXBlc1wiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbnMvdHlwZXMvZ2VuZXJhdGVkL3R5cGVzJztcbmltcG9ydCBCb2FyZENvbW1lbnRJdGVtIGZyb20gJy4vQm9hcmRDb21tZW50c0l0ZW1zLnByZXNlbnRlcic7XG5pbXBvcnQge1xuXHRXcmFwcGVyLFxuXHREaXZpZGVMaW5lLFxuXHRCb2R5LFxuXHRDb21tZW50c0lucHV0V3JhcHBlcixcblx0Q29tbWVudHNJbWdBbmRUaXRsZSxcblx0Q29tbWVudHNJbWcsXG5cdENvbW1ldG5zVGl0bGUsXG5cdFN0YXJXcmFwcGVyLFxuXHRTdGFySW1nLFxuXHRDb21tbWVudHNCb3hXcmFwcGVyLFxuXHRDb21tZW50c0lucHV0LFxuXHRDb21tZW50c0JveEJvdHRvbSxcblx0Q29tbWVudHNDb3VudCxcblx0Q29tbWVudHNCdG4sXG5cdFdyaXRlcldyYXBwZXIsXG5cdFdyaXRlclN0YXJXcmFwcGVyLFxuXHRXcml0ZXJJbnB1dCxcblx0UGFzc3dvcmRJbnB1dCxcbn0gZnJvbSAnLi9Cb2FyZENvbW1lbnRzLnN0eWxlJztcblxuaW50ZXJmYWNlIElCb2FyZENvbW1lbnRzUHJvcHMge1xuXHRpbnB1dDoge1xuXHRcdHdyaXRlcjogc3RyaW5nO1xuXHRcdHBhc3N3b3JkOiBzdHJpbmc7XG5cdFx0Y29udGVudHM6IHN0cmluZztcblx0XHRyYXRpbmc6IHN0cmluZztcblx0fTtcblx0aGFuZGxlSW5wdXRDaGFuZ2U6IChlOiBhbnkpID0+IHZvaWQ7XG5cdGRhdGE/OiBhbnk7XG5cdHJhdGluZzogYW55O1xuXHRvblNhdmVSYXRpbmc6IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50LCBNb3VzZUV2ZW50PikgPT4gdm9pZDtcblx0aGFuZGxlQ2xpY2tDcmVhdGVDb21tZW50OiAoZTogYW55KSA9PiB2b2lkO1xuXHRoYW5kbGVEZWxldGVDb21tZW50OiAoZTogYW55KSA9PiB2b2lkO1xuXHRoYW5kbGVVcGRhdGVPcGVuOiAoZTogYW55KSA9PiB2b2lkO1xuXHRjb21tZW50VXBkYXRlOiBib29sZWFuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb2FyZENvbW1lbnRzVUkoe1xuXHRpbnB1dCxcblx0aGFuZGxlSW5wdXRDaGFuZ2UsXG5cdGRhdGEsXG5cdHJhdGluZyxcblx0b25TYXZlUmF0aW5nLFxuXHRoYW5kbGVDbGlja0NyZWF0ZUNvbW1lbnQsXG5cdGhhbmRsZURlbGV0ZUNvbW1lbnQsXG5cdGhhbmRsZVVwZGF0ZU9wZW4sXG5cdGNvbW1lbnRVcGRhdGUsXG59OiBJQm9hcmRDb21tZW50c1Byb3BzKSB7XG5cdHJldHVybiAoXG5cdFx0PFdyYXBwZXI+XG5cdFx0XHQ8RGl2aWRlTGluZT48L0RpdmlkZUxpbmU+XG5cdFx0XHQ8Qm9keT5cblx0XHRcdFx0PENvbW1lbnRzSW5wdXRXcmFwcGVyPlxuXHRcdFx0XHRcdDxDb21tZW50c0ltZ0FuZFRpdGxlPlxuXHRcdFx0XHRcdFx0PENvbW1lbnRzSW1nIHNyYz1cIi9jb21tZW50c0ltZy5wbmdcIj48L0NvbW1lbnRzSW1nPlxuXHRcdFx0XHRcdFx0PENvbW1ldG5zVGl0bGU+64yT6riAPC9Db21tZXRuc1RpdGxlPlxuXHRcdFx0XHRcdDwvQ29tbWVudHNJbWdBbmRUaXRsZT5cblx0XHRcdFx0XHQ8V3JpdGVyU3RhcldyYXBwZXI+XG5cdFx0XHRcdFx0XHQ8V3JpdGVyV3JhcHBlcj5cblx0XHRcdFx0XHRcdFx0PFdyaXRlcklucHV0XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2lucHV0LndyaXRlcn1cblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIuyekeyEseyekFwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cIndyaXRlclwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuXHRcdFx0XHRcdFx0XHQ+PC9Xcml0ZXJJbnB1dD5cblx0XHRcdFx0XHRcdFx0PFBhc3N3b3JkSW5wdXRcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17aW5wdXQucGFzc3dvcmR9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi4XCJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRcdD48L1Bhc3N3b3JkSW5wdXQ+XG5cdFx0XHRcdFx0XHQ8L1dyaXRlcldyYXBwZXI+XG5cdFx0XHRcdFx0XHQ8U3RhcldyYXBwZXI+XG5cdFx0XHRcdFx0XHRcdHtbJzEnLCAnMicsICczJywgJzQnLCAnNSddLm1hcCgoaWR4KSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0PFN0YXJJbWdcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17aWR4fVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17b25TYXZlUmF0aW5nfVxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9e2lkeH1cblx0XHRcdFx0XHRcdFx0XHRcdHNyYz17cmF0aW5nID49IGlkeCA/ICcvU3RhckNvbG9yLnBuZycgOiAnL3N0YXIucG5nJ31cblx0XHRcdFx0XHRcdFx0XHQ+PC9TdGFySW1nPlxuXHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHRcdDwvU3RhcldyYXBwZXI+XG5cdFx0XHRcdFx0PC9Xcml0ZXJTdGFyV3JhcHBlcj5cblx0XHRcdFx0XHQ8Q29tbW1lbnRzQm94V3JhcHBlcj5cblx0XHRcdFx0XHRcdDxDb21tZW50c0lucHV0XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtpbnB1dC5jb250ZW50c31cblx0XHRcdFx0XHRcdFx0bmFtZT1cImNvbnRlbnRzXCJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIuqwnOyduOygleuztOulvCDqs7XsnKAg67CPIOyalOyyre2VmOqxsOuCmCwg66qF7JiIIO2bvOyGkCwg66y064uoIOq0keqzoCwg67aI67KVIOygleuztCDsnKDtj6zsi5wg66qo64uI7YSw66eBIO2bhCDsgq3soJzrkKAg7IiYIOyeiOycvOupsCwg7J207JeQIOuMgO2VnCDrr7ztmJXsgqzsg4Eg7LGF7J6E7J2AIOqyjOyLnOyekOyXkOqyjCDsnojsirXri4jri6QuXCJcblx0XHRcdFx0XHRcdD48L0NvbW1lbnRzSW5wdXQ+XG5cdFx0XHRcdFx0XHQ8Q29tbWVudHNCb3hCb3R0b20+XG5cdFx0XHRcdFx0XHRcdDxDb21tZW50c0NvdW50PjAvMTAwPC9Db21tZW50c0NvdW50PlxuXHRcdFx0XHRcdFx0XHQ8Q29tbWVudHNCdG4gb25DbGljaz17aGFuZGxlQ2xpY2tDcmVhdGVDb21tZW50fT5cblx0XHRcdFx0XHRcdFx0XHTrk7HroZ3tlZjquLBcblx0XHRcdFx0XHRcdFx0PC9Db21tZW50c0J0bj5cblx0XHRcdFx0XHRcdDwvQ29tbWVudHNCb3hCb3R0b20+XG5cdFx0XHRcdFx0PC9Db21tbWVudHNCb3hXcmFwcGVyPlxuXHRcdFx0XHQ8L0NvbW1lbnRzSW5wdXRXcmFwcGVyPlxuXHRcdFx0XHR7ZGF0YT8uZmV0Y2hCb2FyZENvbW1lbnRzLm1hcCgoZGF0YSkgPT4gKFxuXHRcdFx0XHRcdDxCb2FyZENvbW1lbnRJdGVtXG5cdFx0XHRcdFx0XHRrZXk9e2RhdGEuX2lkfVxuXHRcdFx0XHRcdFx0ZGF0YT17ZGF0YX1cblx0XHRcdFx0XHRcdG9uU2F2ZVJhdGluZz17b25TYXZlUmF0aW5nfVxuXHRcdFx0XHRcdFx0aGFuZGxlVXBkYXRlT3Blbj17aGFuZGxlVXBkYXRlT3Blbn1cblx0XHRcdFx0XHRcdGhhbmRsZURlbGV0ZUNvbW1lbnQ9e2hhbmRsZURlbGV0ZUNvbW1lbnR9XG5cdFx0XHRcdFx0XHRjb21tZW50VXBkYXRlPXtjb21tZW50VXBkYXRlfVxuXHRcdFx0XHRcdD48L0JvYXJkQ29tbWVudEl0ZW0+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC9Cb2R5PlxuXHRcdDwvV3JhcHBlcj5cblx0KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/units/board/comments/BoardComments.presenter.tsx\n");

/***/ })

});