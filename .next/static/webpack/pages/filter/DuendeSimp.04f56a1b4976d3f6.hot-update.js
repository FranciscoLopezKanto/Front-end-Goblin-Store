"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/filter/DuendeSimp",{

/***/ "./pages/filter/DuendeSimp/index.tsx":
/*!*******************************************!*\
  !*** ./pages/filter/DuendeSimp/index.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Filtro_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/Filtro.module.css */ \"./styles/Filtro.module.css\");\n/* harmony import */ var _styles_Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Filtro_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"C:\\\\Users\\\\Francisco\\\\Downloads\\\\Next-client-ecommerce-main\\\\pages\\\\filter\\\\DuendeSimp\\\\index.tsx\";\n\n\n\n\n\n\nfunction Erai(_ref) {\n  var _this = this;\n\n  var data = _ref.data;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: (_styles_Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default().containerProducts),\n    children: [data.map(function (product) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/Productos/\".concat(product.id),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: (_styles_Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default().product),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: product.image,\n            height: 400,\n            width: 300,\n            style: {\n              borderRadius: \"10px\"\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: (_styles_Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default().wrapperInfosTeam),\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h2\", {\n              className: (_styles_Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default().TeamName),\n              children: product.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 40,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: (_styles_Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default().wrapperPrice),\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n              className: (_styles_Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default().discountPrice),\n              children: \"CLP$12.990\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n              className: (_styles_Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default().rightPrice),\n              children: [\"CLP$\", parseFloat(product.price).toLocaleString(\"es-CL\", {\n                minimumFractionDigits: 0,\n                // Mínimo de dígitos en la parte decimal\n                maximumFractionDigits: 0 // Máximo de dígitos en la parte decimal\n\n              })]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, _this)\n      }, product.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, _this);\n    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: (_styles_Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default().dontFind),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h2\", {\n        children: \"No encontraste lo que necesitabas?\\uD83D\\uDE22\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n        children: [\"Mandanos un DM al Instagram, \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n          href: \"https://www.instagram.com/llanura_de.kanto\",\n          rel: \"next\",\n          target: \"_blank\",\n          children: \"clicando aqu\\xED\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 41\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, this);\n}\n\n_c = Erai;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Erai);\n\nvar _c;\n\n$RefreshReg$(_c, \"Erai\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9maWx0ZXIvRHVlbmRlU2ltcC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7OztBQXNCQSxTQUFTSSxJQUFULE9BQTZDO0VBQUE7O0VBQUEsSUFBN0JDLElBQTZCLFFBQTdCQSxJQUE2QjtFQUMzQyxvQkFDRTtJQUFLLFNBQVMsRUFBRUYsb0ZBQWhCO0lBQUEsV0FDR0UsSUFBSSxDQUFDRSxHQUFMLENBQVMsVUFBQ0MsT0FBRDtNQUFBLG9CQUNSLDhEQUFDLGtEQUFEO1FBQU0sSUFBSSx1QkFBZ0JBLE9BQU8sQ0FBQ0MsRUFBeEIsQ0FBVjtRQUFBLHVCQUNFO1VBQUssU0FBUyxFQUFFTiwwRUFBaEI7VUFBQSx3QkFDRSw4REFBQyxtREFBRDtZQUNFLEdBQUcsRUFBRUssT0FBTyxDQUFDRSxLQURmO1lBRUUsTUFBTSxFQUFFLEdBRlY7WUFHRSxLQUFLLEVBQUUsR0FIVDtZQUlFLEtBQUssRUFBRTtjQUFFQyxZQUFZLEVBQUU7WUFBaEI7VUFKVDtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBREYsZUFPRTtZQUFLLFNBQVMsRUFBRVIsbUZBQWhCO1lBQUEsdUJBQ0U7Y0FBSSxTQUFTLEVBQUVBLDJFQUFmO2NBQUEsVUFDR0ssT0FBTyxDQUFDTTtZQURYO2NBQUE7Y0FBQTtjQUFBO1lBQUE7VUFERjtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBUEYsZUFZRTtZQUFLLFNBQVMsRUFBRVgsK0VBQWhCO1lBQUEsd0JBQ0U7Y0FBSyxTQUFTLEVBQUVBLGdGQUFoQjtjQUFBO1lBQUE7Y0FBQTtjQUFBO2NBQUE7WUFBQSxTQURGLGVBRUU7Y0FBSyxTQUFTLEVBQUVBLDZFQUFoQjtjQUFBLG1CQUF3Q2UsVUFBVSxDQUFDVixPQUFPLENBQUNXLEtBQVQsQ0FBVixDQUEwQkMsY0FBMUIsQ0FBeUMsT0FBekMsRUFBa0Q7Z0JBQ3RGQyxxQkFBcUIsRUFBRSxDQUQrRDtnQkFDNUQ7Z0JBQzFCQyxxQkFBcUIsRUFBRSxDQUYrRCxDQUU1RDs7Y0FGNEQsQ0FBbEQsQ0FBeEM7WUFBQTtjQUFBO2NBQUE7Y0FBQTtZQUFBLFNBRkY7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBWkY7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BREYsR0FBNkNkLE9BQU8sQ0FBQ0MsRUFBckQ7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQURRO0lBQUEsQ0FBVCxDQURILGVBNkJFO01BQUssU0FBUyxFQUFFTiwyRUFBaEI7TUFBQSx3QkFDRTtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQURGLGVBRUU7UUFBQSx5REFBZ0MsOERBQUMsa0RBQUQ7VUFBTSxJQUFJLEVBQUMsNENBQVg7VUFBd0QsR0FBRyxFQUFDLE1BQTVEO1VBQW1FLE1BQU0sRUFBQyxRQUExRTtVQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQSxRQUFoQztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFGRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUE3QkY7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREY7QUFvQ0Q7O0tBckNRQzs7QUF1Q1QsK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmlsdGVyL0R1ZW5kZVNpbXAvaW5kZXgudHN4P2NjOWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IEltYWdlLCB7IFN0YXRpY0ltYWdlRGF0YSB9IGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL0ZpbHRyby5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgZGF0YWJhc2UgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZGF0YWJhc2VcIjtcblxuaW50ZXJmYWNlIFByb2R1Y3Qge1xuICBpZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIGltYWdlOiBTdGF0aWNJbWFnZURhdGE7XG4gIHByaWNlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uX2xhcmdlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICBjb25zdCBmaWx0ZXJlZERhdGEgPSBkYXRhYmFzZS5maWx0ZXIoKHByb2R1Y3Q6IFByb2R1Y3QpID0+IHByb2R1Y3QubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwiZXJhaVwiKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZGF0YTogZmlsdGVyZWREYXRhLFxuICAgIH1cbiAgfTtcbn07XG5cbmZ1bmN0aW9uIEVyYWkoeyBkYXRhIH06IHsgZGF0YTogUHJvZHVjdFtdIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lclByb2R1Y3RzfT5cbiAgICAgIHtkYXRhLm1hcCgocHJvZHVjdDogUHJvZHVjdCkgPT4gKFxuICAgICAgICA8TGluayBocmVmPXtgL1Byb2R1Y3Rvcy8ke3Byb2R1Y3QuaWR9YH0ga2V5PXtwcm9kdWN0LmlkfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3R9PlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz17cHJvZHVjdC5pbWFnZX1cbiAgICAgICAgICAgICAgaGVpZ2h0PXs0MDB9XG4gICAgICAgICAgICAgIHdpZHRoPXszMDB9XG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCIxMHB4XCIgfX1cbiAgICAgICAgICAgID48L0ltYWdlPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVySW5mb3NUZWFtfT5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLlRlYW1OYW1lfT5cbiAgICAgICAgICAgICAgICB7cHJvZHVjdC5uYW1lfVxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJQcmljZX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGlzY291bnRQcmljZX0+Q0xQJDEyLjk5MDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0UHJpY2V9PkNMUCR7cGFyc2VGbG9hdChwcm9kdWN0LnByaWNlKS50b0xvY2FsZVN0cmluZyhcImVzLUNMXCIsIHtcbiAgICAgICAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMCwgLy8gTcOtbmltbyBkZSBkw61naXRvcyBlbiBsYSBwYXJ0ZSBkZWNpbWFsXG4gICAgICAgICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDAsIC8vIE3DoXhpbW8gZGUgZMOtZ2l0b3MgZW4gbGEgcGFydGUgZGVjaW1hbFxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICkpfVxuICAgICAgXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZG9udEZpbmR9PlxuICAgICAgICA8aDI+Tm8gZW5jb250cmFzdGUgbG8gcXVlIG5lY2VzaXRhYmFzP/CfmKI8L2gyPlxuICAgICAgICA8cD5NYW5kYW5vcyB1biBETSBhbCBJbnN0YWdyYW0sIDxMaW5rIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2xsYW51cmFfZGUua2FudG9cIiByZWw9J25leHQnIHRhcmdldD1cIl9ibGFua1wiPmNsaWNhbmRvIGFxdcOtPC9MaW5rPjwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFcmFpO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJMaW5rIiwic3R5bGVzIiwiRXJhaSIsImRhdGEiLCJjb250YWluZXJQcm9kdWN0cyIsIm1hcCIsInByb2R1Y3QiLCJpZCIsImltYWdlIiwiYm9yZGVyUmFkaXVzIiwid3JhcHBlckluZm9zVGVhbSIsIlRlYW1OYW1lIiwibmFtZSIsIndyYXBwZXJQcmljZSIsImRpc2NvdW50UHJpY2UiLCJyaWdodFByaWNlIiwicGFyc2VGbG9hdCIsInByaWNlIiwidG9Mb2NhbGVTdHJpbmciLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJkb250RmluZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/filter/DuendeSimp/index.tsx\n"));

/***/ })

});