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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BoardCommentsUI; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _BoardComments_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoardComments.style */ \"./src/components/units/board/comments/BoardComments.style.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/sk/Documents/github/codecamp/codecamp__freeboard/src/components/units/board/comments/BoardComments.presenter.tsx\";\n// import { IBoardWriterProps } from \"./BoardComments.types\";\n\nfunction BoardCommentsUI(_ref) {\n  var _this = this;\n\n  var handleInputChange = _ref.handleInputChange,\n      data = _ref.data,\n      rating = _ref.rating,\n      onMouseEnter = _ref.onMouseEnter,\n      onMouseLeave = _ref.onMouseLeave,\n      onSaveRating = _ref.onSaveRating,\n      handleClickCreateComment = _ref.handleClickCreateComment;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.Body, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsInputWrapper, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsImgAndTitle, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsImg, {\n            src: \"/commentsImg.png\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommetnsTitle, {\n            children: \"\\uB313\\uAE00\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.WriterStarWrapper, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.WriterWrapper, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.WriterInput, {\n              placeholder: \"\\uC791\\uC131\\uC790\",\n              name: \"writer\",\n              onChange: handleInputChange\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 8\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.PasswordInput, {\n              onChange: handleInputChange,\n              placeholder: \"\\uBE44\\uBC00\\uBC88\\uD638\",\n              type: \"password\",\n              name: \"password\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 8\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.StarWrapper, {\n            children: ['1', '2', '3', '4', '5'].map(function (idx) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.StarImg, {\n                onMouseEnter: onMouseEnter,\n                onMouseLeave: onMouseLeave,\n                onClick: onSaveRating,\n                id: idx,\n                src: \"/star.png\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 70,\n                columnNumber: 9\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommmentsBoxWrapper, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsInput, {\n            name: \"contents\",\n            onChange: handleInputChange,\n            placeholder: \"\\uAC1C\\uC778\\uC815\\uBCF4\\uB97C \\uACF5\\uC720 \\uBC0F \\uC694\\uCCAD\\uD558\\uAC70\\uB098, \\uBA85\\uC608 \\uD6FC\\uC190, \\uBB34\\uB2E8 \\uAD11\\uACE0, \\uBD88\\uBC95 \\uC815\\uBCF4 \\uC720\\uD3EC\\uC2DC \\uBAA8\\uB2C8\\uD130\\uB9C1 \\uD6C4 \\uC0AD\\uC81C\\uB420 \\uC218 \\uC788\\uC73C\\uBA70, \\uC774\\uC5D0 \\uB300\\uD55C \\uBBFC\\uD615\\uC0AC\\uC0C1 \\uCC45\\uC784\\uC740 \\uAC8C\\uC2DC\\uC790\\uC5D0\\uAC8C \\uC788\\uC2B5\\uB2C8\\uB2E4.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 81,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsBoxBottom, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsCount, {\n              children: \"0/100\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 87,\n              columnNumber: 8\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsBtn, {\n              onClick: handleClickCreateComment,\n              children: \"\\uB4F1\\uB85D\\uD558\\uAE30\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 88,\n              columnNumber: 8\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 5\n      }, this), data === null || data === void 0 ? void 0 : data.fetchBoardComments.map(function (data) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsWrapper, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsProfileImg, {\n            src: \"/profileImg.png\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 8\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsCenterWrapper, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsTopWrapper, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsWriterAndStar, {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsWriter, {\n                  children: data.writer\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 101,\n                  columnNumber: 11\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.StarWrapper, {\n                  children: ['1', '2', '3', '4', '5'].map(function (idx) {\n                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.StarImg, {\n                      onMouseEnter: onMouseEnter,\n                      onMouseLeave: onMouseLeave,\n                      onClick: onSaveRating,\n                      id: idx,\n                      src: './star.png'\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 104,\n                      columnNumber: 13\n                    }, _this);\n                  })\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 102,\n                  columnNumber: 11\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 100,\n                columnNumber: 10\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsTopRightWrapper, {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsUpdateImg, {\n                  src: \"/pencil.png\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 115,\n                  columnNumber: 11\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsDeleteImg, {\n                  src: \"/X.png\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 116,\n                  columnNumber: 11\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 114,\n                columnNumber: 10\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 99,\n              columnNumber: 9\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsText, {\n              children: data.contents\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 119,\n              columnNumber: 9\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsDate, {\n              children: data.createdAt.slice(0, 10)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 120,\n              columnNumber: 9\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 8\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 7\n        }, _this);\n      }).reverse()]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 4\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 3\n  }, this);\n}\n_c = BoardCommentsUI;\n\nvar _c;\n\n$RefreshReg$(_c, \"BoardCommentsUI\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdW5pdHMvYm9hcmQvY29tbWVudHMvQm9hcmRDb21tZW50cy5wcmVzZW50ZXIudHN4Pzc2OWYiXSwibmFtZXMiOlsiQm9hcmRDb21tZW50c1VJIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJkYXRhIiwicmF0aW5nIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwib25TYXZlUmF0aW5nIiwiaGFuZGxlQ2xpY2tDcmVhdGVDb21tZW50IiwibWFwIiwiaWR4IiwiZmV0Y2hCb2FyZENvbW1lbnRzIiwid3JpdGVyIiwiY29udGVudHMiLCJjcmVhdGVkQXQiLCJzbGljZSIsInJldmVyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBaUNlLFNBQVNBLGVBQVQsT0FRUDtBQUFBOztBQUFBLE1BUFBDLGlCQU9PLFFBUFBBLGlCQU9PO0FBQUEsTUFOUEMsSUFNTyxRQU5QQSxJQU1PO0FBQUEsTUFMUEMsTUFLTyxRQUxQQSxNQUtPO0FBQUEsTUFKUEMsWUFJTyxRQUpQQSxZQUlPO0FBQUEsTUFIUEMsWUFHTyxRQUhQQSxZQUdPO0FBQUEsTUFGUEMsWUFFTyxRQUZQQSxZQUVPO0FBQUEsTUFEUEMsd0JBQ08sUUFEUEEsd0JBQ087QUFDUCxzQkFDQyw4REFBQyx5REFBRDtBQUFBLDJCQUVDLDhEQUFDLHNEQUFEO0FBQUEsOEJBQ0MsOERBQUMsc0VBQUQ7QUFBQSxnQ0FDQyw4REFBQyxxRUFBRDtBQUFBLGtDQUNDLDhEQUFDLDZEQUFEO0FBQWEsZUFBRyxFQUFDO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFFQyw4REFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUFLQyw4REFBQyxtRUFBRDtBQUFBLGtDQUNDLDhEQUFDLCtEQUFEO0FBQUEsb0NBQ0MsOERBQUMsNkRBQUQ7QUFDQyx5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QUFBO0FBQUEsdUJBZkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELGVBcUJDLDhEQUFDLDhEQUFEO0FBQUEsd0JBQWVQLElBQUksQ0FBQ1U7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFyQkQsZUFzQkMsOERBQUMsOERBQUQ7QUFBQSx3QkFBZVYsSUFBSSxDQUFDVyxTQUFMLENBQWVDLEtBQWYsQ0FBcUIsQ0FBckIsRUFBd0IsRUFBeEI7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXRCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURJO0FBQUEsT0FETCxFQThCQ0MsT0E5QkQsRUE5Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBbUZBO0tBNUZ1QmYsZSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL3VuaXRzL2JvYXJkL2NvbW1lbnRzL0JvYXJkQ29tbWVudHMucHJlc2VudGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IElCb2FyZFdyaXRlclByb3BzIH0gZnJvbSBcIi4vQm9hcmRDb21tZW50cy50eXBlc1wiO1xuXG5pbXBvcnQge1xuXHRXcmFwcGVyLFxuXHREaXZpZGVMaW5lLFxuXHRCb2R5LFxuXHRDb21tZW50c0lucHV0V3JhcHBlcixcblx0Q29tbWVudHNJbWdBbmRUaXRsZSxcblx0Q29tbWVudHNJbWcsXG5cdENvbW1ldG5zVGl0bGUsXG5cdFN0YXJXcmFwcGVyLFxuXHRTdGFySW1nLFxuXHRDb21tbWVudHNCb3hXcmFwcGVyLFxuXHRDb21tZW50c0lucHV0LFxuXHRDb21tZW50c0JveEJvdHRvbSxcblx0Q29tbWVudHNDb3VudCxcblx0Q29tbWVudHNCdG4sXG5cdENvbW1lbnRzV3JhcHBlcixcblx0Q29tbWVudHNQcm9maWxlSW1nLFxuXHRDb21tZW50c0NlbnRlcldyYXBwZXIsXG5cdENvbW1lbnRzVG9wV3JhcHBlcixcblx0Q29tbWVudHNXcml0ZXJBbmRTdGFyLFxuXHRDb21tZW50c1dyaXRlcixcblx0Q29tbWVudHNTdGFyLFxuXHRDb21tZW50c1RvcFJpZ2h0V3JhcHBlcixcblx0Q29tbWVudHNVcGRhdGVJbWcsXG5cdENvbW1lbnRzRGVsZXRlSW1nLFxuXHRDb21tZW50c1RleHQsXG5cdENvbW1lbnRzRGF0ZSxcblx0V3JpdGVyV3JhcHBlcixcblx0V3JpdGVyU3RhcldyYXBwZXIsXG5cdFdyaXRlcklucHV0LFxuXHRQYXNzd29yZElucHV0LFxufSBmcm9tICcuL0JvYXJkQ29tbWVudHMuc3R5bGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb2FyZENvbW1lbnRzVUkoe1xuXHRoYW5kbGVJbnB1dENoYW5nZSxcblx0ZGF0YSxcblx0cmF0aW5nLFxuXHRvbk1vdXNlRW50ZXIsXG5cdG9uTW91c2VMZWF2ZSxcblx0b25TYXZlUmF0aW5nLFxuXHRoYW5kbGVDbGlja0NyZWF0ZUNvbW1lbnQsXG59OiBhbnkpIHtcblx0cmV0dXJuIChcblx0XHQ8V3JhcHBlcj5cblx0XHRcdHsvKiA8RGl2aWRlTGluZT48L0RpdmlkZUxpbmU+ICovfVxuXHRcdFx0PEJvZHk+XG5cdFx0XHRcdDxDb21tZW50c0lucHV0V3JhcHBlcj5cblx0XHRcdFx0XHQ8Q29tbWVudHNJbWdBbmRUaXRsZT5cblx0XHRcdFx0XHRcdDxDb21tZW50c0ltZyBzcmM9XCIvY29tbWVudHNJbWcucG5nXCI+PC9Db21tZW50c0ltZz5cblx0XHRcdFx0XHRcdDxDb21tZXRuc1RpdGxlPuuMk+q4gDwvQ29tbWV0bnNUaXRsZT5cblx0XHRcdFx0XHQ8L0NvbW1lbnRzSW1nQW5kVGl0bGU+XG5cdFx0XHRcdFx0PFdyaXRlclN0YXJXcmFwcGVyPlxuXHRcdFx0XHRcdFx0PFdyaXRlcldyYXBwZXI+XG5cdFx0XHRcdFx0XHRcdDxXcml0ZXJJbnB1dFxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi7J6R7ISx7J6QXCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwid3JpdGVyXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG5cdFx0XHRcdFx0XHRcdD48L1dyaXRlcklucHV0PlxuXHRcdFx0XHRcdFx0XHQ8UGFzc3dvcmRJbnB1dFxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuFwiXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0XHQ+PC9QYXNzd29yZElucHV0PlxuXHRcdFx0XHRcdFx0PC9Xcml0ZXJXcmFwcGVyPlxuXHRcdFx0XHRcdFx0PFN0YXJXcmFwcGVyPlxuXHRcdFx0XHRcdFx0XHR7WycxJywgJzInLCAnMycsICc0JywgJzUnXS5tYXAoKGlkeCkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdDxTdGFySW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRvbk1vdXNlRW50ZXI9e29uTW91c2VFbnRlcn1cblx0XHRcdFx0XHRcdFx0XHRcdG9uTW91c2VMZWF2ZT17b25Nb3VzZUxlYXZlfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17b25TYXZlUmF0aW5nfVxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9e2lkeH1cblx0XHRcdFx0XHRcdFx0XHRcdHNyYz1cIi9zdGFyLnBuZ1wiXG5cdFx0XHRcdFx0XHRcdFx0PjwvU3RhckltZz5cblx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHQ8L1N0YXJXcmFwcGVyPlxuXHRcdFx0XHRcdDwvV3JpdGVyU3RhcldyYXBwZXI+XG5cdFx0XHRcdFx0PENvbW1tZW50c0JveFdyYXBwZXI+XG5cdFx0XHRcdFx0XHQ8Q29tbWVudHNJbnB1dFxuXHRcdFx0XHRcdFx0XHRuYW1lPVwiY29udGVudHNcIlxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi6rCc7J247KCV67O066W8IOqzteycoCDrsI8g7JqU7LKt7ZWY6rGw64KYLCDrqoXsmIgg7Zu87IaQLCDrrLTri6gg6rSR6rOgLCDrtojrspUg7KCV67O0IOycoO2PrOyLnCDrqqjri4jthLDrp4Eg7ZuEIOyCreygnOuQoCDsiJgg7J6I7Jy866mwLCDsnbTsl5Ag64yA7ZWcIOuvvO2YleyCrOyDgSDssYXsnoTsnYAg6rKM7Iuc7J6Q7JeQ6rKMIOyeiOyKteuLiOuLpC5cIlxuXHRcdFx0XHRcdFx0PjwvQ29tbWVudHNJbnB1dD5cblx0XHRcdFx0XHRcdDxDb21tZW50c0JveEJvdHRvbT5cblx0XHRcdFx0XHRcdFx0PENvbW1lbnRzQ291bnQ+MC8xMDA8L0NvbW1lbnRzQ291bnQ+XG5cdFx0XHRcdFx0XHRcdDxDb21tZW50c0J0biBvbkNsaWNrPXtoYW5kbGVDbGlja0NyZWF0ZUNvbW1lbnR9PlxuXHRcdFx0XHRcdFx0XHRcdOuTseuhne2VmOq4sFxuXHRcdFx0XHRcdFx0XHQ8L0NvbW1lbnRzQnRuPlxuXHRcdFx0XHRcdFx0PC9Db21tZW50c0JveEJvdHRvbT5cblx0XHRcdFx0XHQ8L0NvbW1tZW50c0JveFdyYXBwZXI+XG5cdFx0XHRcdDwvQ29tbWVudHNJbnB1dFdyYXBwZXI+XG5cdFx0XHRcdHtkYXRhPy5mZXRjaEJvYXJkQ29tbWVudHNcblx0XHRcdFx0XHQubWFwKChkYXRhKSA9PiAoXG5cdFx0XHRcdFx0XHQ8Q29tbWVudHNXcmFwcGVyPlxuXHRcdFx0XHRcdFx0XHQ8Q29tbWVudHNQcm9maWxlSW1nIHNyYz1cIi9wcm9maWxlSW1nLnBuZ1wiPjwvQ29tbWVudHNQcm9maWxlSW1nPlxuXHRcdFx0XHRcdFx0XHQ8Q29tbWVudHNDZW50ZXJXcmFwcGVyPlxuXHRcdFx0XHRcdFx0XHRcdDxDb21tZW50c1RvcFdyYXBwZXI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q29tbWVudHNXcml0ZXJBbmRTdGFyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Q29tbWVudHNXcml0ZXI+e2RhdGEud3JpdGVyfTwvQ29tbWVudHNXcml0ZXI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxTdGFyV3JhcHBlcj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7WycxJywgJzInLCAnMycsICc0JywgJzUnXS5tYXAoKGlkeCkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFN0YXJJbWdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25Nb3VzZUVudGVyPXtvbk1vdXNlRW50ZXJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uTW91c2VMZWF2ZT17b25Nb3VzZUxlYXZlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtvblNhdmVSYXRpbmd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkPXtpZHh9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17Jy4vc3Rhci5wbmcnfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PjwvU3RhckltZz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9TdGFyV3JhcHBlcj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvQ29tbWVudHNXcml0ZXJBbmRTdGFyPlxuXHRcdFx0XHRcdFx0XHRcdFx0PENvbW1lbnRzVG9wUmlnaHRXcmFwcGVyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Q29tbWVudHNVcGRhdGVJbWcgc3JjPVwiL3BlbmNpbC5wbmdcIj48L0NvbW1lbnRzVXBkYXRlSW1nPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Q29tbWVudHNEZWxldGVJbWcgc3JjPVwiL1gucG5nXCI+PC9Db21tZW50c0RlbGV0ZUltZz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvQ29tbWVudHNUb3BSaWdodFdyYXBwZXI+XG5cdFx0XHRcdFx0XHRcdFx0PC9Db21tZW50c1RvcFdyYXBwZXI+XG5cdFx0XHRcdFx0XHRcdFx0PENvbW1lbnRzVGV4dD57ZGF0YS5jb250ZW50c308L0NvbW1lbnRzVGV4dD5cblx0XHRcdFx0XHRcdFx0XHQ8Q29tbWVudHNEYXRlPntkYXRhLmNyZWF0ZWRBdC5zbGljZSgwLCAxMCl9PC9Db21tZW50c0RhdGU+XG5cdFx0XHRcdFx0XHRcdDwvQ29tbWVudHNDZW50ZXJXcmFwcGVyPlxuXHRcdFx0XHRcdFx0PC9Db21tZW50c1dyYXBwZXI+XG5cdFx0XHRcdFx0KSlcblx0XHRcdFx0XHQucmV2ZXJzZSgpfVxuXHRcdFx0PC9Cb2R5PlxuXHRcdDwvV3JhcHBlcj5cblx0KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/units/board/comments/BoardComments.presenter.tsx\n");

/***/ })

});