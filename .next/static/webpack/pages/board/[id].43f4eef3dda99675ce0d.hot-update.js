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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BoardCommentsUI; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _BoardCommentsItems_presenter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoardCommentsItems.presenter */ \"./src/components/units/board/comments/BoardCommentsItems.presenter.tsx\");\n/* harmony import */ var _BoardComments_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoardComments.style */ \"./src/components/units/board/comments/BoardComments.style.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/sk/Documents/github/codecamp/codecamp__freeboard/src/components/units/board/comments/BoardComments.presenter.tsx\";\n// import { IBoardWriterProps } from \"./BoardComments.types\";\n\n\nfunction BoardCommentsUI(_ref) {\n  var _this = this;\n\n  var input = _ref.input,\n      handleInputChange = _ref.handleInputChange,\n      data = _ref.data,\n      rating = _ref.rating,\n      onSaveRating = _ref.onSaveRating,\n      handleClickCreateComment = _ref.handleClickCreateComment,\n      handleDeleteComment = _ref.handleDeleteComment,\n      handleUpdateInputChange = _ref.handleUpdateInputChange,\n      updataInput = _ref.updataInput;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_2__.Wrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_2__.DivideLine, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_2__.Body, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_2__.CommentsInputWrapper, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_2__.CommentsImgAndTitle, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_2__.CommentsImg, {\n            src: \"/commentsImg.png\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_2__.CommetnsTitle, {\n            children: \"\\uB313\\uAE00\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_2__.WriterStarWrapper, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_2__.WriterWrapper, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_2__.WriterInput, {\n              value: input.writer,\n              placeholder: \"\\uC791\\uC131\\uC790\",\n              name: \"writer\",\n              onChange: handleInputChange\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 70,\n              columnNumber: 8\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_2__.PasswordInput, {\n              value: input.password,\n              onChange: handleInputChange,\n              placeholder: \"\\uBE44\\uBC00\\uBC88\\uD638\",\n              type: \"password\",\n              name: \"password\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 76,\n              columnNumber: 8\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_2__.StarWrapper, {\n            children: ['1', '2', '3', '4', '5'].map(function (idx) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_2__.StarImg, {\n                onClick: onSaveRating,\n                id: idx,\n                src: rating >= idx ? '/StarColor.png' : '/star.png'\n              }, idx, false, {\n                fileName: _jsxFileName,\n                lineNumber: 86,\n                columnNumber: 9\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_2__.CommmentsBoxWrapper, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_2__.CommentsInput, {\n            value: input.contents,\n            name: \"contents\",\n            onChange: handleInputChange,\n            placeholder: \"\\uAC1C\\uC778\\uC815\\uBCF4\\uB97C \\uACF5\\uC720 \\uBC0F \\uC694\\uCCAD\\uD558\\uAC70\\uB098, \\uBA85\\uC608 \\uD6FC\\uC190, \\uBB34\\uB2E8 \\uAD11\\uACE0, \\uBD88\\uBC95 \\uC815\\uBCF4 \\uC720\\uD3EC\\uC2DC \\uBAA8\\uB2C8\\uD130\\uB9C1 \\uD6C4 \\uC0AD\\uC81C\\uB420 \\uC218 \\uC788\\uC73C\\uBA70, \\uC774\\uC5D0 \\uB300\\uD55C \\uBBFC\\uD615\\uC0AC\\uC0C1 \\uCC45\\uC784\\uC740 \\uAC8C\\uC2DC\\uC790\\uC5D0\\uAC8C \\uC788\\uC2B5\\uB2C8\\uB2E4.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_2__.CommentsBoxBottom, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_2__.CommentsCount, {\n              children: \"0/100\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 103,\n              columnNumber: 8\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_2__.CommentsBtn, {\n              onClick: handleClickCreateComment,\n              children: \"\\uB4F1\\uB85D\\uD558\\uAE30\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 104,\n              columnNumber: 8\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 5\n      }, this), data === null || data === void 0 ? void 0 : data.fetchBoardComments.map(function (data) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardCommentsItems_presenter__WEBPACK_IMPORTED_MODULE_1__.default, {\n          handleUpdateInputChange: handleUpdateInputChange,\n          data: data,\n          onSaveRating: onSaveRating,\n          handleDeleteComment: handleDeleteComment\n        }, data._id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 6\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 3\n  }, this);\n}\n_c = BoardCommentsUI;\n\nvar _c;\n\n$RefreshReg$(_c, \"BoardCommentsUI\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdW5pdHMvYm9hcmQvY29tbWVudHMvQm9hcmRDb21tZW50cy5wcmVzZW50ZXIudHN4Pzc2OWYiXSwibmFtZXMiOlsiQm9hcmRDb21tZW50c1VJIiwiaW5wdXQiLCJoYW5kbGVJbnB1dENoYW5nZSIsImRhdGEiLCJyYXRpbmciLCJvblNhdmVSYXRpbmciLCJoYW5kbGVDbGlja0NyZWF0ZUNvbW1lbnQiLCJoYW5kbGVEZWxldGVDb21tZW50IiwiaGFuZGxlVXBkYXRlSW5wdXRDaGFuZ2UiLCJ1cGRhdGFJbnB1dCIsIndyaXRlciIsInBhc3N3b3JkIiwibWFwIiwiaWR4IiwiY29udGVudHMiLCJmZXRjaEJvYXJkQ29tbWVudHMiLCJfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBMkNlLFNBQVNBLGVBQVQsT0FVUztBQUFBOztBQUFBLE1BVHZCQyxLQVN1QixRQVR2QkEsS0FTdUI7QUFBQSxNQVJ2QkMsaUJBUXVCLFFBUnZCQSxpQkFRdUI7QUFBQSxNQVB2QkMsSUFPdUIsUUFQdkJBLElBT3VCO0FBQUEsTUFOdkJDLE1BTXVCLFFBTnZCQSxNQU11QjtBQUFBLE1BTHZCQyxZQUt1QixRQUx2QkEsWUFLdUI7QUFBQSxNQUp2QkMsd0JBSXVCLFFBSnZCQSx3QkFJdUI7QUFBQSxNQUh2QkMsbUJBR3VCLFFBSHZCQSxtQkFHdUI7QUFBQSxNQUZ2QkMsdUJBRXVCLFFBRnZCQSx1QkFFdUI7QUFBQSxNQUR2QkMsV0FDdUIsUUFEdkJBLFdBQ3VCO0FBQ3ZCLHNCQUNDLDhEQUFDLHlEQUFEO0FBQUEsNEJBQ0MsOERBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBRUMsOERBQUMsc0RBQUQ7QUFBQSw4QkFDQyw4REFBQyxzRUFBRDtBQUFBLGdDQUNDLDhEQUFDLHFFQUFEO0FBQUEsa0NBQ0MsOERBQUMsNkRBQUQ7QUFBYSxlQUFHLEVBQUM7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxlQUVDLDhEQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxlQUtDLDhEQUFDLG1FQUFEO0FBQUEsa0NBQ0MsOERBQUMsK0RBQUQ7QUFBQSxvQ0FDQyw4REFBQyw2REFBRDtBQUNDLG1CQUFLLEVBQUVSLEtBQUssQ0FBQ1MsTUFEZDtBQUVDLHlCQUFXLEVBQUMsb0JBRmI7QUFHQyxrQkFBSSxFQUFDLFFBSE47QUFJQyxzQkFBUSxFQUFFUjtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREQsZUFPQyw4REFBQywrREFBRDtBQUNDLG1CQUFLLEVBQUVELEtBQUssQ0FBQ1UsUUFEZDtBQUVDLHNCQUFRLEVBQUVULGlCQUZYO0FBR0MseUJBQVcsRUFBQywwQkFIYjtBQUlDLGtCQUFJLEVBQUMsVUFKTjtBQUtDLGtCQUFJLEVBQUM7QUFMTjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxlQWdCQyw4REFBQyw2REFBRDtBQUFBLHNCQUNFLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLEVBQTBCVSxHQUExQixDQUE4QixVQUFDQyxHQUFEO0FBQUEsa0NBQzlCLDhEQUFDLHlEQUFEO0FBRUMsdUJBQU8sRUFBRVIsWUFGVjtBQUdDLGtCQUFFLEVBQUVRLEdBSEw7QUFJQyxtQkFBRyxFQUFFVCxNQUFNLElBQUlTLEdBQVYsR0FBZ0IsZ0JBQWhCLEdBQW1DO0FBSnpDLGlCQUNNQSxHQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRDhCO0FBQUEsYUFBOUI7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWhCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEQsZUFnQ0MsOERBQUMscUVBQUQ7QUFBQSxrQ0FDQyw4REFBQywrREFBRDtBQUNDLGlCQUFLLEVBQUVaLEtBQUssQ0FBQ2EsUUFEZDtBQUVDLGdCQUFJLEVBQUMsVUFGTjtBQUdDLG9CQUFRLEVBQUVaLGlCQUhYO0FBSUMsdUJBQVcsRUFBQztBQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFPQyw4REFBQyxtRUFBRDtBQUFBLG9DQUNDLDhEQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURELGVBRUMsOERBQUMsNkRBQUQ7QUFBYSxxQkFBTyxFQUFFSSx3QkFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsRUFnREVILElBaERGLGFBZ0RFQSxJQWhERix1QkFnREVBLElBQUksQ0FBRVksa0JBQU4sQ0FBeUJILEdBQXpCLENBQTZCLFVBQUNULElBQUQ7QUFBQSw0QkFDN0IsOERBQUMsa0VBQUQ7QUFFQyxpQ0FBdUIsRUFBRUssdUJBRjFCO0FBR0MsY0FBSSxFQUFFTCxJQUhQO0FBSUMsc0JBQVksRUFBRUUsWUFKZjtBQUtDLDZCQUFtQixFQUFFRTtBQUx0QixXQUNNSixJQUFJLENBQUNhLEdBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFENkI7QUFBQSxPQUE3QixDQWhERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQStEQTtLQTFFdUJoQixlIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvdW5pdHMvYm9hcmQvY29tbWVudHMvQm9hcmRDb21tZW50cy5wcmVzZW50ZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgSUJvYXJkV3JpdGVyUHJvcHMgfSBmcm9tIFwiLi9Cb2FyZENvbW1lbnRzLnR5cGVzXCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9ucy90eXBlcy9nZW5lcmF0ZWQvdHlwZXMnO1xuaW1wb3J0IEJvYXJkQ29tbWVudEl0ZW0gZnJvbSAnLi9Cb2FyZENvbW1lbnRzSXRlbXMucHJlc2VudGVyJztcbmltcG9ydCB7XG5cdFdyYXBwZXIsXG5cdERpdmlkZUxpbmUsXG5cdEJvZHksXG5cdENvbW1lbnRzSW5wdXRXcmFwcGVyLFxuXHRDb21tZW50c0ltZ0FuZFRpdGxlLFxuXHRDb21tZW50c0ltZyxcblx0Q29tbWV0bnNUaXRsZSxcblx0U3RhcldyYXBwZXIsXG5cdFN0YXJJbWcsXG5cdENvbW1tZW50c0JveFdyYXBwZXIsXG5cdENvbW1lbnRzSW5wdXQsXG5cdENvbW1lbnRzQm94Qm90dG9tLFxuXHRDb21tZW50c0NvdW50LFxuXHRDb21tZW50c0J0bixcblx0V3JpdGVyV3JhcHBlcixcblx0V3JpdGVyU3RhcldyYXBwZXIsXG5cdFdyaXRlcklucHV0LFxuXHRQYXNzd29yZElucHV0LFxufSBmcm9tICcuL0JvYXJkQ29tbWVudHMuc3R5bGUnO1xuXG5pbnRlcmZhY2UgSUJvYXJkQ29tbWVudHNQcm9wcyB7XG5cdGlucHV0OiB7XG5cdFx0d3JpdGVyOiBzdHJpbmc7XG5cdFx0cGFzc3dvcmQ6IHN0cmluZztcblx0XHRjb250ZW50czogc3RyaW5nO1xuXHRcdHJhdGluZzogc3RyaW5nO1xuXHR9O1xuXHRoYW5kbGVJbnB1dENoYW5nZTogKGU6IGFueSkgPT4gdm9pZDtcblx0ZGF0YT86IGFueTtcblx0cmF0aW5nOiBhbnk7XG5cdG9uU2F2ZVJhdGluZzogKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB2b2lkO1xuXHRoYW5kbGVDbGlja0NyZWF0ZUNvbW1lbnQ6IChlOiBhbnkpID0+IHZvaWQ7XG5cdGhhbmRsZURlbGV0ZUNvbW1lbnQ6IChlOiBhbnkpID0+IHZvaWQ7XG5cdGhhbmRsZVVwZGF0ZUlucHV0Q2hhbmdlOiAoZTogYW55KSA9PiB2b2lkO1xuXHR1cGRhdGFJbnB1dDoge1xuXHRcdHdyaXRlcjogc3RyaW5nO1xuXHRcdHBhc3N3b3JkOiBzdHJpbmc7XG5cdFx0Y29udGVudHM6IHN0cmluZztcblx0XHRyYXRpbmc6IHN0cmluZztcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9hcmRDb21tZW50c1VJKHtcblx0aW5wdXQsXG5cdGhhbmRsZUlucHV0Q2hhbmdlLFxuXHRkYXRhLFxuXHRyYXRpbmcsXG5cdG9uU2F2ZVJhdGluZyxcblx0aGFuZGxlQ2xpY2tDcmVhdGVDb21tZW50LFxuXHRoYW5kbGVEZWxldGVDb21tZW50LFxuXHRoYW5kbGVVcGRhdGVJbnB1dENoYW5nZSxcblx0dXBkYXRhSW5wdXQsXG59OiBJQm9hcmRDb21tZW50c1Byb3BzKSB7XG5cdHJldHVybiAoXG5cdFx0PFdyYXBwZXI+XG5cdFx0XHQ8RGl2aWRlTGluZT48L0RpdmlkZUxpbmU+XG5cdFx0XHQ8Qm9keT5cblx0XHRcdFx0PENvbW1lbnRzSW5wdXRXcmFwcGVyPlxuXHRcdFx0XHRcdDxDb21tZW50c0ltZ0FuZFRpdGxlPlxuXHRcdFx0XHRcdFx0PENvbW1lbnRzSW1nIHNyYz1cIi9jb21tZW50c0ltZy5wbmdcIj48L0NvbW1lbnRzSW1nPlxuXHRcdFx0XHRcdFx0PENvbW1ldG5zVGl0bGU+64yT6riAPC9Db21tZXRuc1RpdGxlPlxuXHRcdFx0XHRcdDwvQ29tbWVudHNJbWdBbmRUaXRsZT5cblx0XHRcdFx0XHQ8V3JpdGVyU3RhcldyYXBwZXI+XG5cdFx0XHRcdFx0XHQ8V3JpdGVyV3JhcHBlcj5cblx0XHRcdFx0XHRcdFx0PFdyaXRlcklucHV0XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2lucHV0LndyaXRlcn1cblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIuyekeyEseyekFwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cIndyaXRlclwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuXHRcdFx0XHRcdFx0XHQ+PC9Xcml0ZXJJbnB1dD5cblx0XHRcdFx0XHRcdFx0PFBhc3N3b3JkSW5wdXRcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17aW5wdXQucGFzc3dvcmR9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi4XCJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRcdD48L1Bhc3N3b3JkSW5wdXQ+XG5cdFx0XHRcdFx0XHQ8L1dyaXRlcldyYXBwZXI+XG5cdFx0XHRcdFx0XHQ8U3RhcldyYXBwZXI+XG5cdFx0XHRcdFx0XHRcdHtbJzEnLCAnMicsICczJywgJzQnLCAnNSddLm1hcCgoaWR4KSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0PFN0YXJJbWdcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17aWR4fVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17b25TYXZlUmF0aW5nfVxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9e2lkeH1cblx0XHRcdFx0XHRcdFx0XHRcdHNyYz17cmF0aW5nID49IGlkeCA/ICcvU3RhckNvbG9yLnBuZycgOiAnL3N0YXIucG5nJ31cblx0XHRcdFx0XHRcdFx0XHQ+PC9TdGFySW1nPlxuXHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHRcdDwvU3RhcldyYXBwZXI+XG5cdFx0XHRcdFx0PC9Xcml0ZXJTdGFyV3JhcHBlcj5cblx0XHRcdFx0XHQ8Q29tbW1lbnRzQm94V3JhcHBlcj5cblx0XHRcdFx0XHRcdDxDb21tZW50c0lucHV0XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtpbnB1dC5jb250ZW50c31cblx0XHRcdFx0XHRcdFx0bmFtZT1cImNvbnRlbnRzXCJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIuqwnOyduOygleuztOulvCDqs7XsnKAg67CPIOyalOyyre2VmOqxsOuCmCwg66qF7JiIIO2bvOyGkCwg66y064uoIOq0keqzoCwg67aI67KVIOygleuztCDsnKDtj6zsi5wg66qo64uI7YSw66eBIO2bhCDsgq3soJzrkKAg7IiYIOyeiOycvOupsCwg7J207JeQIOuMgO2VnCDrr7ztmJXsgqzsg4Eg7LGF7J6E7J2AIOqyjOyLnOyekOyXkOqyjCDsnojsirXri4jri6QuXCJcblx0XHRcdFx0XHRcdD48L0NvbW1lbnRzSW5wdXQ+XG5cdFx0XHRcdFx0XHQ8Q29tbWVudHNCb3hCb3R0b20+XG5cdFx0XHRcdFx0XHRcdDxDb21tZW50c0NvdW50PjAvMTAwPC9Db21tZW50c0NvdW50PlxuXHRcdFx0XHRcdFx0XHQ8Q29tbWVudHNCdG4gb25DbGljaz17aGFuZGxlQ2xpY2tDcmVhdGVDb21tZW50fT5cblx0XHRcdFx0XHRcdFx0XHTrk7HroZ3tlZjquLBcblx0XHRcdFx0XHRcdFx0PC9Db21tZW50c0J0bj5cblx0XHRcdFx0XHRcdDwvQ29tbWVudHNCb3hCb3R0b20+XG5cdFx0XHRcdFx0PC9Db21tbWVudHNCb3hXcmFwcGVyPlxuXHRcdFx0XHQ8L0NvbW1lbnRzSW5wdXRXcmFwcGVyPlxuXHRcdFx0XHR7ZGF0YT8uZmV0Y2hCb2FyZENvbW1lbnRzLm1hcCgoZGF0YSkgPT4gKFxuXHRcdFx0XHRcdDxCb2FyZENvbW1lbnRJdGVtXG5cdFx0XHRcdFx0XHRrZXk9e2RhdGEuX2lkfVxuXHRcdFx0XHRcdFx0aGFuZGxlVXBkYXRlSW5wdXRDaGFuZ2U9e2hhbmRsZVVwZGF0ZUlucHV0Q2hhbmdlfVxuXHRcdFx0XHRcdFx0ZGF0YT17ZGF0YX1cblx0XHRcdFx0XHRcdG9uU2F2ZVJhdGluZz17b25TYXZlUmF0aW5nfVxuXHRcdFx0XHRcdFx0aGFuZGxlRGVsZXRlQ29tbWVudD17aGFuZGxlRGVsZXRlQ29tbWVudH1cblx0XHRcdFx0XHQ+PC9Cb2FyZENvbW1lbnRJdGVtPlxuXHRcdFx0XHQpKX1cblx0XHRcdDwvQm9keT5cblx0XHQ8L1dyYXBwZXI+XG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/units/board/comments/BoardComments.presenter.tsx\n");

/***/ })

});