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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BoardCommentsUI; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _BoardComments_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoardComments.style */ \"./src/components/units/board/comments/BoardComments.style.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/sk/Documents/github/codecamp/codecamp__freeboard/src/components/units/board/comments/BoardComments.presenter.tsx\";\n// import { IBoardWriterProps } from \"./BoardComments.types\";\n\nfunction BoardCommentsUI(_ref) {\n  var _this = this;\n\n  var handleInputChange = _ref.handleInputChange,\n      data = _ref.data,\n      rating = _ref.rating,\n      onMouseEnter = _ref.onMouseEnter,\n      onMouseLeave = _ref.onMouseLeave,\n      onSaveRating = _ref.onSaveRating,\n      handleClickCreateComment = _ref.handleClickCreateComment;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.Body, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsInputWrapper, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsImgAndTitle, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsImg, {\n            src: \"/commentsImg.png\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommetnsTitle, {\n            children: \"\\uB313\\uAE00\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.WriterStarWrapper, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.WriterWrapper, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.WriterInput, {\n              placeholder: \"\\uC791\\uC131\\uC790\",\n              name: \"writer\",\n              onChange: handleInputChange\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 8\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.PasswordInput, {\n              onChange: handleInputChange,\n              placeholder: \"\\uBE44\\uBC00\\uBC88\\uD638\",\n              type: \"password\",\n              name: \"password\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 8\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.StarWrapper, {\n            children: ['1', '2', '3', '4', '5'].map(function (idx) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.StarImg, {\n                onMouseEnter: onMouseEnter,\n                onMouseLeave: onMouseLeave,\n                onClick: onSaveRating,\n                id: idx,\n                src: \"/star.png\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 70,\n                columnNumber: 9\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommmentsBoxWrapper, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsInput, {\n            name: \"contents\",\n            onChange: handleInputChange,\n            placeholder: \"\\uAC1C\\uC778\\uC815\\uBCF4\\uB97C \\uACF5\\uC720 \\uBC0F \\uC694\\uCCAD\\uD558\\uAC70\\uB098, \\uBA85\\uC608 \\uD6FC\\uC190, \\uBB34\\uB2E8 \\uAD11\\uACE0, \\uBD88\\uBC95 \\uC815\\uBCF4 \\uC720\\uD3EC\\uC2DC \\uBAA8\\uB2C8\\uD130\\uB9C1 \\uD6C4 \\uC0AD\\uC81C\\uB420 \\uC218 \\uC788\\uC73C\\uBA70, \\uC774\\uC5D0 \\uB300\\uD55C \\uBBFC\\uD615\\uC0AC\\uC0C1 \\uCC45\\uC784\\uC740 \\uAC8C\\uC2DC\\uC790\\uC5D0\\uAC8C \\uC788\\uC2B5\\uB2C8\\uB2E4.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 81,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsBoxBottom, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsCount, {\n              children: \"0/100\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 87,\n              columnNumber: 8\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsBtn, {\n              onClick: handleClickCreateComment,\n              children: \"\\uB4F1\\uB85D\\uD558\\uAE30\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 88,\n              columnNumber: 8\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 5\n      }, this), data === null || data === void 0 ? void 0 : data.fetchBoardComments.map(function (data) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsWrapper, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsProfileImg, {\n            src: \"/profileImg.png\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 8\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsCenterWrapper, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsTopWrapper, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsWriterAndStar, {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsWriter, {\n                  children: data.writer\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 101,\n                  columnNumber: 11\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.StarWrapper, {\n                  children: ['1', '2', '3', '4', '5'].map(function (idx) {\n                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.StarImg, {\n                      onMouseEnter: onMouseEnter,\n                      onMouseLeave: onMouseLeave,\n                      onClick: onSaveRating,\n                      id: idx,\n                      src: rating\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 104,\n                      columnNumber: 13\n                    }, _this);\n                  })\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 102,\n                  columnNumber: 11\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 100,\n                columnNumber: 10\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsTopRightWrapper, {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsUpdateImg, {\n                  src: \"/pencil.png\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 115,\n                  columnNumber: 11\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsDeleteImg, {\n                  src: \"/X.png\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 116,\n                  columnNumber: 11\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 114,\n                columnNumber: 10\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 99,\n              columnNumber: 9\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsText, {\n              children: data.contents\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 119,\n              columnNumber: 9\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsDate, {\n              children: data.createdAt.slice(0, 10)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 120,\n              columnNumber: 9\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 8\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 7\n        }, _this);\n      }).reverse()]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 4\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 3\n  }, this);\n}\n_c = BoardCommentsUI;\n\nvar _c;\n\n$RefreshReg$(_c, \"BoardCommentsUI\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdW5pdHMvYm9hcmQvY29tbWVudHMvQm9hcmRDb21tZW50cy5wcmVzZW50ZXIudHN4Pzc2OWYiXSwibmFtZXMiOlsiQm9hcmRDb21tZW50c1VJIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJkYXRhIiwicmF0aW5nIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwib25TYXZlUmF0aW5nIiwiaGFuZGxlQ2xpY2tDcmVhdGVDb21tZW50IiwibWFwIiwiaWR4IiwiZmV0Y2hCb2FyZENvbW1lbnRzIiwid3JpdGVyIiwiY29udGVudHMiLCJjcmVhdGVkQXQiLCJzbGljZSIsInJldmVyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBaUNlLFNBQVNBLGVBQVQsT0FRUDtBQUFBOztBQUFBLE1BUFBDLGlCQU9PLFFBUFBBLGlCQU9PO0FBQUEsTUFOUEMsSUFNTyxRQU5QQSxJQU1PO0FBQUEsTUFMUEMsTUFLTyxRQUxQQSxNQUtPO0FBQUEsTUFKUEMsWUFJTyxRQUpQQSxZQUlPO0FBQUEsTUFIUEMsWUFHTyxRQUhQQSxZQUdPO0FBQUEsTUFGUEMsWUFFTyxRQUZQQSxZQUVPO0FBQUEsTUFEUEMsd0JBQ08sUUFEUEEsd0JBQ087QUFDUCxzQkFDQyw4REFBQyx5REFBRDtBQUFBLDJCQUVDLDhEQUFDLHNEQUFEO0FBQUEsOEJBQ0MsOERBQUMsc0VBQUQ7QUFBQSxnQ0FDQyw4REFBQyxxRUFBRDtBQUFBLGtDQUNDLDhEQUFDLDZEQUFEO0FBQWEsZUFBRyxFQUFDO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFFQyw4REFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUFLQyw4REFBQyxtRUFBRDtBQUFBLGtDQUNDLDhEQUFDLCtEQUFEO0FBQUEsb0NBQ0MsOERBQUMsNkRBQUQ7QUFDQyx5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QUFBQTtBQUFBLHVCQWZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQXFCQyw4REFBQyw4REFBRDtBQUFBLHdCQUFlRCxJQUFJLENBQUNVO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBckJELGVBc0JDLDhEQUFDLDhEQUFEO0FBQUEsd0JBQWVWLElBQUksQ0FBQ1csU0FBTCxDQUFlQyxLQUFmLENBQXFCLENBQXJCLEVBQXdCLEVBQXhCO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF0QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESTtBQUFBLE9BREwsRUE4QkNDLE9BOUJELEVBOUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQW1GQTtLQTVGdUJmLGUiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91bml0cy9ib2FyZC9jb21tZW50cy9Cb2FyZENvbW1lbnRzLnByZXNlbnRlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBJQm9hcmRXcml0ZXJQcm9wcyB9IGZyb20gXCIuL0JvYXJkQ29tbWVudHMudHlwZXNcIjtcblxuaW1wb3J0IHtcblx0V3JhcHBlcixcblx0RGl2aWRlTGluZSxcblx0Qm9keSxcblx0Q29tbWVudHNJbnB1dFdyYXBwZXIsXG5cdENvbW1lbnRzSW1nQW5kVGl0bGUsXG5cdENvbW1lbnRzSW1nLFxuXHRDb21tZXRuc1RpdGxlLFxuXHRTdGFyV3JhcHBlcixcblx0U3RhckltZyxcblx0Q29tbW1lbnRzQm94V3JhcHBlcixcblx0Q29tbWVudHNJbnB1dCxcblx0Q29tbWVudHNCb3hCb3R0b20sXG5cdENvbW1lbnRzQ291bnQsXG5cdENvbW1lbnRzQnRuLFxuXHRDb21tZW50c1dyYXBwZXIsXG5cdENvbW1lbnRzUHJvZmlsZUltZyxcblx0Q29tbWVudHNDZW50ZXJXcmFwcGVyLFxuXHRDb21tZW50c1RvcFdyYXBwZXIsXG5cdENvbW1lbnRzV3JpdGVyQW5kU3Rhcixcblx0Q29tbWVudHNXcml0ZXIsXG5cdENvbW1lbnRzU3Rhcixcblx0Q29tbWVudHNUb3BSaWdodFdyYXBwZXIsXG5cdENvbW1lbnRzVXBkYXRlSW1nLFxuXHRDb21tZW50c0RlbGV0ZUltZyxcblx0Q29tbWVudHNUZXh0LFxuXHRDb21tZW50c0RhdGUsXG5cdFdyaXRlcldyYXBwZXIsXG5cdFdyaXRlclN0YXJXcmFwcGVyLFxuXHRXcml0ZXJJbnB1dCxcblx0UGFzc3dvcmRJbnB1dCxcbn0gZnJvbSAnLi9Cb2FyZENvbW1lbnRzLnN0eWxlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9hcmRDb21tZW50c1VJKHtcblx0aGFuZGxlSW5wdXRDaGFuZ2UsXG5cdGRhdGEsXG5cdHJhdGluZyxcblx0b25Nb3VzZUVudGVyLFxuXHRvbk1vdXNlTGVhdmUsXG5cdG9uU2F2ZVJhdGluZyxcblx0aGFuZGxlQ2xpY2tDcmVhdGVDb21tZW50LFxufTogYW55KSB7XG5cdHJldHVybiAoXG5cdFx0PFdyYXBwZXI+XG5cdFx0XHR7LyogPERpdmlkZUxpbmU+PC9EaXZpZGVMaW5lPiAqL31cblx0XHRcdDxCb2R5PlxuXHRcdFx0XHQ8Q29tbWVudHNJbnB1dFdyYXBwZXI+XG5cdFx0XHRcdFx0PENvbW1lbnRzSW1nQW5kVGl0bGU+XG5cdFx0XHRcdFx0XHQ8Q29tbWVudHNJbWcgc3JjPVwiL2NvbW1lbnRzSW1nLnBuZ1wiPjwvQ29tbWVudHNJbWc+XG5cdFx0XHRcdFx0XHQ8Q29tbWV0bnNUaXRsZT7rjJPquIA8L0NvbW1ldG5zVGl0bGU+XG5cdFx0XHRcdFx0PC9Db21tZW50c0ltZ0FuZFRpdGxlPlxuXHRcdFx0XHRcdDxXcml0ZXJTdGFyV3JhcHBlcj5cblx0XHRcdFx0XHRcdDxXcml0ZXJXcmFwcGVyPlxuXHRcdFx0XHRcdFx0XHQ8V3JpdGVySW5wdXRcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIuyekeyEseyekFwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cIndyaXRlclwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuXHRcdFx0XHRcdFx0XHQ+PC9Xcml0ZXJJbnB1dD5cblx0XHRcdFx0XHRcdFx0PFBhc3N3b3JkSW5wdXRcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLruYTrsIDrsojtmLhcIlxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0PjwvUGFzc3dvcmRJbnB1dD5cblx0XHRcdFx0XHRcdDwvV3JpdGVyV3JhcHBlcj5cblx0XHRcdFx0XHRcdDxTdGFyV3JhcHBlcj5cblx0XHRcdFx0XHRcdFx0e1snMScsICcyJywgJzMnLCAnNCcsICc1J10ubWFwKChpZHgpID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8U3RhckltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0b25Nb3VzZUVudGVyPXtvbk1vdXNlRW50ZXJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e29uU2F2ZVJhdGluZ31cblx0XHRcdFx0XHRcdFx0XHRcdGlkPXtpZHh9XG5cdFx0XHRcdFx0XHRcdFx0XHRzcmM9XCIvc3Rhci5wbmdcIlxuXHRcdFx0XHRcdFx0XHRcdD48L1N0YXJJbWc+XG5cdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0PC9TdGFyV3JhcHBlcj5cblx0XHRcdFx0XHQ8L1dyaXRlclN0YXJXcmFwcGVyPlxuXHRcdFx0XHRcdDxDb21tbWVudHNCb3hXcmFwcGVyPlxuXHRcdFx0XHRcdFx0PENvbW1lbnRzSW5wdXRcblx0XHRcdFx0XHRcdFx0bmFtZT1cImNvbnRlbnRzXCJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIuqwnOyduOygleuztOulvCDqs7XsnKAg67CPIOyalOyyre2VmOqxsOuCmCwg66qF7JiIIO2bvOyGkCwg66y064uoIOq0keqzoCwg67aI67KVIOygleuztCDsnKDtj6zsi5wg66qo64uI7YSw66eBIO2bhCDsgq3soJzrkKAg7IiYIOyeiOycvOupsCwg7J207JeQIOuMgO2VnCDrr7ztmJXsgqzsg4Eg7LGF7J6E7J2AIOqyjOyLnOyekOyXkOqyjCDsnojsirXri4jri6QuXCJcblx0XHRcdFx0XHRcdD48L0NvbW1lbnRzSW5wdXQ+XG5cdFx0XHRcdFx0XHQ8Q29tbWVudHNCb3hCb3R0b20+XG5cdFx0XHRcdFx0XHRcdDxDb21tZW50c0NvdW50PjAvMTAwPC9Db21tZW50c0NvdW50PlxuXHRcdFx0XHRcdFx0XHQ8Q29tbWVudHNCdG4gb25DbGljaz17aGFuZGxlQ2xpY2tDcmVhdGVDb21tZW50fT5cblx0XHRcdFx0XHRcdFx0XHTrk7HroZ3tlZjquLBcblx0XHRcdFx0XHRcdFx0PC9Db21tZW50c0J0bj5cblx0XHRcdFx0XHRcdDwvQ29tbWVudHNCb3hCb3R0b20+XG5cdFx0XHRcdFx0PC9Db21tbWVudHNCb3hXcmFwcGVyPlxuXHRcdFx0XHQ8L0NvbW1lbnRzSW5wdXRXcmFwcGVyPlxuXHRcdFx0XHR7ZGF0YT8uZmV0Y2hCb2FyZENvbW1lbnRzXG5cdFx0XHRcdFx0Lm1hcCgoZGF0YSkgPT4gKFxuXHRcdFx0XHRcdFx0PENvbW1lbnRzV3JhcHBlcj5cblx0XHRcdFx0XHRcdFx0PENvbW1lbnRzUHJvZmlsZUltZyBzcmM9XCIvcHJvZmlsZUltZy5wbmdcIj48L0NvbW1lbnRzUHJvZmlsZUltZz5cblx0XHRcdFx0XHRcdFx0PENvbW1lbnRzQ2VudGVyV3JhcHBlcj5cblx0XHRcdFx0XHRcdFx0XHQ8Q29tbWVudHNUb3BXcmFwcGVyPlxuXHRcdFx0XHRcdFx0XHRcdFx0PENvbW1lbnRzV3JpdGVyQW5kU3Rhcj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PENvbW1lbnRzV3JpdGVyPntkYXRhLndyaXRlcn08L0NvbW1lbnRzV3JpdGVyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8U3RhcldyYXBwZXI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1snMScsICcyJywgJzMnLCAnNCcsICc1J10ubWFwKChpZHgpID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxTdGFySW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uTW91c2VFbnRlcj17b25Nb3VzZUVudGVyfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17b25TYXZlUmF0aW5nfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZD17aWR4fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e3JhdGluZ31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD48L1N0YXJJbWc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvU3RhcldyYXBwZXI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0NvbW1lbnRzV3JpdGVyQW5kU3Rhcj5cblx0XHRcdFx0XHRcdFx0XHRcdDxDb21tZW50c1RvcFJpZ2h0V3JhcHBlcj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PENvbW1lbnRzVXBkYXRlSW1nIHNyYz1cIi9wZW5jaWwucG5nXCI+PC9Db21tZW50c1VwZGF0ZUltZz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PENvbW1lbnRzRGVsZXRlSW1nIHNyYz1cIi9YLnBuZ1wiPjwvQ29tbWVudHNEZWxldGVJbWc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0NvbW1lbnRzVG9wUmlnaHRXcmFwcGVyPlxuXHRcdFx0XHRcdFx0XHRcdDwvQ29tbWVudHNUb3BXcmFwcGVyPlxuXHRcdFx0XHRcdFx0XHRcdDxDb21tZW50c1RleHQ+e2RhdGEuY29udGVudHN9PC9Db21tZW50c1RleHQ+XG5cdFx0XHRcdFx0XHRcdFx0PENvbW1lbnRzRGF0ZT57ZGF0YS5jcmVhdGVkQXQuc2xpY2UoMCwgMTApfTwvQ29tbWVudHNEYXRlPlxuXHRcdFx0XHRcdFx0XHQ8L0NvbW1lbnRzQ2VudGVyV3JhcHBlcj5cblx0XHRcdFx0XHRcdDwvQ29tbWVudHNXcmFwcGVyPlxuXHRcdFx0XHRcdCkpXG5cdFx0XHRcdFx0LnJldmVyc2UoKX1cblx0XHRcdDwvQm9keT5cblx0XHQ8L1dyYXBwZXI+XG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/units/board/comments/BoardComments.presenter.tsx\n");

/***/ })

});