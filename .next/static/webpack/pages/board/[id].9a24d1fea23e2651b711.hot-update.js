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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BoardCommentsUI; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _BoardComments_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoardComments.style */ \"./src/components/units/board/comments/BoardComments.style.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/sk/Documents/github/codecamp/codecamp__freeboard/src/components/units/board/comments/BoardComments.presenter.tsx\";\n// import { IBoardWriterProps } from \"./BoardComments.types\";\n\nfunction BoardCommentsUI(_ref) {\n  var _this = this;\n\n  var handleInputChange = _ref.handleInputChange,\n      data = _ref.data,\n      rating = _ref.rating,\n      onMouseEnter = _ref.onMouseEnter,\n      onMouseLeave = _ref.onMouseLeave,\n      onSaveRating = _ref.onSaveRating,\n      handleClickCreateComment = _ref.handleClickCreateComment;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.Body, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsInputWrapper, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsImgAndTitle, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsImg, {\n            src: \"/commentsImg.png\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommetnsTitle, {\n            children: \"\\uB313\\uAE00\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.WriterStarWrapper, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.WriterWrapper, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.WriterInput, {\n              placeholder: \"\\uC791\\uC131\\uC790\",\n              name: \"writer\",\n              onChange: handleInputChange\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 8\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.PasswordInput, {\n              onChange: handleInputChange,\n              placeholder: \"\\uBE44\\uBC00\\uBC88\\uD638\",\n              type: \"password\",\n              name: \"password\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 8\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.StarWrapper, {\n            children: ['1', '2', '3', '4', '5'].map(function (idx) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.StarImg, {\n                onMouseEnter: onMouseEnter,\n                onMouseLeave: onMouseLeave,\n                onClick: onSaveRating,\n                id: idx,\n                src: rating >= idx ? '/StarColor.png' : '/star.png'\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 70,\n                columnNumber: 9\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommmentsBoxWrapper, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsInput, {\n            name: \"contents\",\n            onChange: handleInputChange,\n            placeholder: \"\\uAC1C\\uC778\\uC815\\uBCF4\\uB97C \\uACF5\\uC720 \\uBC0F \\uC694\\uCCAD\\uD558\\uAC70\\uB098, \\uBA85\\uC608 \\uD6FC\\uC190, \\uBB34\\uB2E8 \\uAD11\\uACE0, \\uBD88\\uBC95 \\uC815\\uBCF4 \\uC720\\uD3EC\\uC2DC \\uBAA8\\uB2C8\\uD130\\uB9C1 \\uD6C4 \\uC0AD\\uC81C\\uB420 \\uC218 \\uC788\\uC73C\\uBA70, \\uC774\\uC5D0 \\uB300\\uD55C \\uBBFC\\uD615\\uC0AC\\uC0C1 \\uCC45\\uC784\\uC740 \\uAC8C\\uC2DC\\uC790\\uC5D0\\uAC8C \\uC788\\uC2B5\\uB2C8\\uB2E4.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 81,\n            columnNumber: 7\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsBoxBottom, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsCount, {\n              children: \"0/100\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 87,\n              columnNumber: 8\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsBtn, {\n              onClick: handleClickCreateComment,\n              children: \"\\uB4F1\\uB85D\\uD558\\uAE30\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 88,\n              columnNumber: 8\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 5\n      }, this), data === null || data === void 0 ? void 0 : data.fetchBoardComments.map(function (data) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsWrapper, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsProfileImg, {\n            src: \"/profileImg.png\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 8\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsCenterWrapper, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsTopWrapper, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsWriterAndStar, {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsWriter, {\n                  children: data.writer\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 101,\n                  columnNumber: 11\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.StarWrapper, {\n                  children: ['1', '2', '3', '4', '5'].map(function (idx) {\n                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.StarImg, {\n                      onMouseEnter: onMouseEnter,\n                      onMouseLeave: onMouseLeave,\n                      onClick: onSaveRating,\n                      id: idx,\n                      src: rating >= idx ? '/StarColor.png' : '/star.png'\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 104,\n                      columnNumber: 13\n                    }, _this);\n                  })\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 102,\n                  columnNumber: 11\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 100,\n                columnNumber: 10\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsTopRightWrapper, {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsUpdateImg, {\n                  src: \"/pencil.png\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 115,\n                  columnNumber: 11\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsDeleteImg, {\n                  src: \"/X.png\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 116,\n                  columnNumber: 11\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 114,\n                columnNumber: 10\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 99,\n              columnNumber: 9\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsText, {\n              children: data.contents\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 119,\n              columnNumber: 9\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoardComments_style__WEBPACK_IMPORTED_MODULE_1__.CommentsDate, {\n              children: data.createdAt.slice(0, 10)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 120,\n              columnNumber: 9\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 8\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 7\n        }, _this);\n      }).reverse()]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 4\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 3\n  }, this);\n}\n_c = BoardCommentsUI;\n\nvar _c;\n\n$RefreshReg$(_c, \"BoardCommentsUI\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdW5pdHMvYm9hcmQvY29tbWVudHMvQm9hcmRDb21tZW50cy5wcmVzZW50ZXIudHN4Pzc2OWYiXSwibmFtZXMiOlsiQm9hcmRDb21tZW50c1VJIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJkYXRhIiwicmF0aW5nIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwib25TYXZlUmF0aW5nIiwiaGFuZGxlQ2xpY2tDcmVhdGVDb21tZW50IiwibWFwIiwiaWR4IiwiZmV0Y2hCb2FyZENvbW1lbnRzIiwid3JpdGVyIiwiY29udGVudHMiLCJjcmVhdGVkQXQiLCJzbGljZSIsInJldmVyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBaUNlLFNBQVNBLGVBQVQsT0FRUDtBQUFBOztBQUFBLE1BUFBDLGlCQU9PLFFBUFBBLGlCQU9PO0FBQUEsTUFOUEMsSUFNTyxRQU5QQSxJQU1PO0FBQUEsTUFMUEMsTUFLTyxRQUxQQSxNQUtPO0FBQUEsTUFKUEMsWUFJTyxRQUpQQSxZQUlPO0FBQUEsTUFIUEMsWUFHTyxRQUhQQSxZQUdPO0FBQUEsTUFGUEMsWUFFTyxRQUZQQSxZQUVPO0FBQUEsTUFEUEMsd0JBQ08sUUFEUEEsd0JBQ087QUFDUCxzQkFDQyw4REFBQyx5REFBRDtBQUFBLDJCQUVDLDhEQUFDLHNEQUFEO0FBQUEsOEJBQ0MsOERBQUMsc0VBQUQ7QUFBQSxnQ0FDQyw4REFBQyxxRUFBRDtBQUFBLGtDQUNDLDhEQUFDLDZEQUFEO0FBQWEsZUFBRyxFQUFDO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFFQyw4REFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUFLQyw4REFBQyxtRUFBRDtBQUFBLGtDQUNDLDhEQUFDLCtEQUFEO0FBQUEsb0NBQ0MsOERBQUMsNkRBQUQ7QUFDQyx5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QUMsbUVBQUQ7QUFBbUIscUJBQUcsRUFBQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFmRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFxQkMsOERBQUMsOERBQUQ7QUFBQSx3QkFBZVAsSUFBSSxDQUFDVTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXJCRCxlQXNCQyw4REFBQyw4REFBRDtBQUFBLHdCQUFlVixJQUFJLENBQUNXLFNBQUwsQ0FBZUMsS0FBZixDQUFxQixDQUFyQixFQUF3QixFQUF4QjtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBdEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREk7QUFBQSxPQURMLEVBOEJDQyxPQTlCRCxFQTlDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFtRkE7S0E1RnVCZixlIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvdW5pdHMvYm9hcmQvY29tbWVudHMvQm9hcmRDb21tZW50cy5wcmVzZW50ZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgSUJvYXJkV3JpdGVyUHJvcHMgfSBmcm9tIFwiLi9Cb2FyZENvbW1lbnRzLnR5cGVzXCI7XG5cbmltcG9ydCB7XG5cdFdyYXBwZXIsXG5cdERpdmlkZUxpbmUsXG5cdEJvZHksXG5cdENvbW1lbnRzSW5wdXRXcmFwcGVyLFxuXHRDb21tZW50c0ltZ0FuZFRpdGxlLFxuXHRDb21tZW50c0ltZyxcblx0Q29tbWV0bnNUaXRsZSxcblx0U3RhcldyYXBwZXIsXG5cdFN0YXJJbWcsXG5cdENvbW1tZW50c0JveFdyYXBwZXIsXG5cdENvbW1lbnRzSW5wdXQsXG5cdENvbW1lbnRzQm94Qm90dG9tLFxuXHRDb21tZW50c0NvdW50LFxuXHRDb21tZW50c0J0bixcblx0Q29tbWVudHNXcmFwcGVyLFxuXHRDb21tZW50c1Byb2ZpbGVJbWcsXG5cdENvbW1lbnRzQ2VudGVyV3JhcHBlcixcblx0Q29tbWVudHNUb3BXcmFwcGVyLFxuXHRDb21tZW50c1dyaXRlckFuZFN0YXIsXG5cdENvbW1lbnRzV3JpdGVyLFxuXHRDb21tZW50c1N0YXIsXG5cdENvbW1lbnRzVG9wUmlnaHRXcmFwcGVyLFxuXHRDb21tZW50c1VwZGF0ZUltZyxcblx0Q29tbWVudHNEZWxldGVJbWcsXG5cdENvbW1lbnRzVGV4dCxcblx0Q29tbWVudHNEYXRlLFxuXHRXcml0ZXJXcmFwcGVyLFxuXHRXcml0ZXJTdGFyV3JhcHBlcixcblx0V3JpdGVySW5wdXQsXG5cdFBhc3N3b3JkSW5wdXQsXG59IGZyb20gJy4vQm9hcmRDb21tZW50cy5zdHlsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvYXJkQ29tbWVudHNVSSh7XG5cdGhhbmRsZUlucHV0Q2hhbmdlLFxuXHRkYXRhLFxuXHRyYXRpbmcsXG5cdG9uTW91c2VFbnRlcixcblx0b25Nb3VzZUxlYXZlLFxuXHRvblNhdmVSYXRpbmcsXG5cdGhhbmRsZUNsaWNrQ3JlYXRlQ29tbWVudCxcbn06IGFueSkge1xuXHRyZXR1cm4gKFxuXHRcdDxXcmFwcGVyPlxuXHRcdFx0ey8qIDxEaXZpZGVMaW5lPjwvRGl2aWRlTGluZT4gKi99XG5cdFx0XHQ8Qm9keT5cblx0XHRcdFx0PENvbW1lbnRzSW5wdXRXcmFwcGVyPlxuXHRcdFx0XHRcdDxDb21tZW50c0ltZ0FuZFRpdGxlPlxuXHRcdFx0XHRcdFx0PENvbW1lbnRzSW1nIHNyYz1cIi9jb21tZW50c0ltZy5wbmdcIj48L0NvbW1lbnRzSW1nPlxuXHRcdFx0XHRcdFx0PENvbW1ldG5zVGl0bGU+64yT6riAPC9Db21tZXRuc1RpdGxlPlxuXHRcdFx0XHRcdDwvQ29tbWVudHNJbWdBbmRUaXRsZT5cblx0XHRcdFx0XHQ8V3JpdGVyU3RhcldyYXBwZXI+XG5cdFx0XHRcdFx0XHQ8V3JpdGVyV3JhcHBlcj5cblx0XHRcdFx0XHRcdFx0PFdyaXRlcklucHV0XG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLsnpHshLHsnpBcIlxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJ3cml0ZXJcIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cblx0XHRcdFx0XHRcdFx0PjwvV3JpdGVySW5wdXQ+XG5cdFx0XHRcdFx0XHRcdDxQYXNzd29yZElucHV0XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi4XCJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRcdD48L1Bhc3N3b3JkSW5wdXQ+XG5cdFx0XHRcdFx0XHQ8L1dyaXRlcldyYXBwZXI+XG5cdFx0XHRcdFx0XHQ8U3RhcldyYXBwZXI+XG5cdFx0XHRcdFx0XHRcdHtbJzEnLCAnMicsICczJywgJzQnLCAnNSddLm1hcCgoaWR4KSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0PFN0YXJJbWdcblx0XHRcdFx0XHRcdFx0XHRcdG9uTW91c2VFbnRlcj17b25Nb3VzZUVudGVyfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25Nb3VzZUxlYXZlPXtvbk1vdXNlTGVhdmV9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtvblNhdmVSYXRpbmd9XG5cdFx0XHRcdFx0XHRcdFx0XHRpZD17aWR4fVxuXHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtyYXRpbmcgPj0gaWR4ID8gJy9TdGFyQ29sb3IucG5nJyA6ICcvc3Rhci5wbmcnfVxuXHRcdFx0XHRcdFx0XHRcdD48L1N0YXJJbWc+XG5cdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0PC9TdGFyV3JhcHBlcj5cblx0XHRcdFx0XHQ8L1dyaXRlclN0YXJXcmFwcGVyPlxuXHRcdFx0XHRcdDxDb21tbWVudHNCb3hXcmFwcGVyPlxuXHRcdFx0XHRcdFx0PENvbW1lbnRzSW5wdXRcblx0XHRcdFx0XHRcdFx0bmFtZT1cImNvbnRlbnRzXCJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIuqwnOyduOygleuztOulvCDqs7XsnKAg67CPIOyalOyyre2VmOqxsOuCmCwg66qF7JiIIO2bvOyGkCwg66y064uoIOq0keqzoCwg67aI67KVIOygleuztCDsnKDtj6zsi5wg66qo64uI7YSw66eBIO2bhCDsgq3soJzrkKAg7IiYIOyeiOycvOupsCwg7J207JeQIOuMgO2VnCDrr7ztmJXsgqzsg4Eg7LGF7J6E7J2AIOqyjOyLnOyekOyXkOqyjCDsnojsirXri4jri6QuXCJcblx0XHRcdFx0XHRcdD48L0NvbW1lbnRzSW5wdXQ+XG5cdFx0XHRcdFx0XHQ8Q29tbWVudHNCb3hCb3R0b20+XG5cdFx0XHRcdFx0XHRcdDxDb21tZW50c0NvdW50PjAvMTAwPC9Db21tZW50c0NvdW50PlxuXHRcdFx0XHRcdFx0XHQ8Q29tbWVudHNCdG4gb25DbGljaz17aGFuZGxlQ2xpY2tDcmVhdGVDb21tZW50fT5cblx0XHRcdFx0XHRcdFx0XHTrk7HroZ3tlZjquLBcblx0XHRcdFx0XHRcdFx0PC9Db21tZW50c0J0bj5cblx0XHRcdFx0XHRcdDwvQ29tbWVudHNCb3hCb3R0b20+XG5cdFx0XHRcdFx0PC9Db21tbWVudHNCb3hXcmFwcGVyPlxuXHRcdFx0XHQ8L0NvbW1lbnRzSW5wdXRXcmFwcGVyPlxuXHRcdFx0XHR7ZGF0YT8uZmV0Y2hCb2FyZENvbW1lbnRzXG5cdFx0XHRcdFx0Lm1hcCgoZGF0YSkgPT4gKFxuXHRcdFx0XHRcdFx0PENvbW1lbnRzV3JhcHBlcj5cblx0XHRcdFx0XHRcdFx0PENvbW1lbnRzUHJvZmlsZUltZyBzcmM9XCIvcHJvZmlsZUltZy5wbmdcIj48L0NvbW1lbnRzUHJvZmlsZUltZz5cblx0XHRcdFx0XHRcdFx0PENvbW1lbnRzQ2VudGVyV3JhcHBlcj5cblx0XHRcdFx0XHRcdFx0XHQ8Q29tbWVudHNUb3BXcmFwcGVyPlxuXHRcdFx0XHRcdFx0XHRcdFx0PENvbW1lbnRzV3JpdGVyQW5kU3Rhcj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PENvbW1lbnRzV3JpdGVyPntkYXRhLndyaXRlcn08L0NvbW1lbnRzV3JpdGVyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8U3RhcldyYXBwZXI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1snMScsICcyJywgJzMnLCAnNCcsICc1J10ubWFwKChpZHgpID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxTdGFySW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uTW91c2VFbnRlcj17b25Nb3VzZUVudGVyfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17b25TYXZlUmF0aW5nfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZD17aWR4fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e3JhdGluZyA+PSBpZHggPyAnL1N0YXJDb2xvci5wbmcnIDogJy9zdGFyLnBuZyd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+PC9TdGFySW1nPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1N0YXJXcmFwcGVyPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Db21tZW50c1dyaXRlckFuZFN0YXI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q29tbWVudHNUb3BSaWdodFdyYXBwZXI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxDb21tZW50c1VwZGF0ZUltZyBzcmM9XCIvcGVuY2lsLnBuZ1wiPjwvQ29tbWVudHNVcGRhdGVJbWc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxDb21tZW50c0RlbGV0ZUltZyBzcmM9XCIvWC5wbmdcIj48L0NvbW1lbnRzRGVsZXRlSW1nPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Db21tZW50c1RvcFJpZ2h0V3JhcHBlcj5cblx0XHRcdFx0XHRcdFx0XHQ8L0NvbW1lbnRzVG9wV3JhcHBlcj5cblx0XHRcdFx0XHRcdFx0XHQ8Q29tbWVudHNUZXh0PntkYXRhLmNvbnRlbnRzfTwvQ29tbWVudHNUZXh0PlxuXHRcdFx0XHRcdFx0XHRcdDxDb21tZW50c0RhdGU+e2RhdGEuY3JlYXRlZEF0LnNsaWNlKDAsIDEwKX08L0NvbW1lbnRzRGF0ZT5cblx0XHRcdFx0XHRcdFx0PC9Db21tZW50c0NlbnRlcldyYXBwZXI+XG5cdFx0XHRcdFx0XHQ8L0NvbW1lbnRzV3JhcHBlcj5cblx0XHRcdFx0XHQpKVxuXHRcdFx0XHRcdC5yZXZlcnNlKCl9XG5cdFx0XHQ8L0JvZHk+XG5cdFx0PC9XcmFwcGVyPlxuXHQpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/units/board/comments/BoardComments.presenter.tsx\n");

/***/ })

});