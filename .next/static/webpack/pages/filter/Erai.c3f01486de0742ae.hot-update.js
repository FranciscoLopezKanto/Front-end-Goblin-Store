"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/filter/Erai",{

/***/ "./pages/filter/Erai/index.tsx":
/*!*************************************!*\
  !*** ./pages/filter/Erai/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Filtro_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/Filtro.module.css */ \"./styles/Filtro.module.css\");\n/* harmony import */ var _styles_Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Filtro_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"C:\\\\Users\\\\Francisco\\\\Downloads\\\\Next-client-ecommerce-main\\\\pages\\\\filter\\\\Erai\\\\index.tsx\";\n\n\n\n\n\n\nfunction Erai(_ref) {\n  var _this = this;\n\n  var data = _ref.data;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: (_styles_Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default().containerProducts),\n    children: data.map(function (product) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/productos/\".concat(product.id),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: (_styles_Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default().product),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: product.image,\n            height: 300,\n            width: 300,\n            style: {\n              borderRadius: \"10px\"\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: (_styles_Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default().wrapperInfosTeam),\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h2\", {\n              className: (_styles_Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default().TeamName),\n              children: product.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: (_styles_Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default().wrapperPrice),\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n              className: (_styles_Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default().discountPrice),\n              children: \"R$350,00\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n              className: (_styles_Filtro_module_css__WEBPACK_IMPORTED_MODULE_4___default().rightPrice),\n              children: [\"R$\", product.price - 1, \",99\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, _this)\n      }, product.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, this);\n}\n\n_c = Erai;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Erai);\n\nvar _c;\n\n$RefreshReg$(_c, \"Erai\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9maWx0ZXIvRXJhaS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7OztBQW1CQSxTQUFTSSxJQUFULE9BQTJCO0VBQUE7O0VBQUEsSUFBWkMsSUFBWSxRQUFaQSxJQUFZO0VBQ3pCLG9CQUNFO0lBQUssU0FBUyxFQUFFRixvRkFBaEI7SUFBQSxVQUNHRSxJQUFJLENBQUNFLEdBQUwsQ0FBUyxVQUFDQyxPQUFEO01BQUEsb0JBQ1IsOERBQUMsa0RBQUQ7UUFBTSxJQUFJLHVCQUFnQkEsT0FBTyxDQUFDQyxFQUF4QixDQUFWO1FBQUEsdUJBQ0U7VUFBSyxTQUFTLEVBQUVOLDBFQUFoQjtVQUFBLHdCQUNFLDhEQUFDLG1EQUFEO1lBQ0UsR0FBRyxFQUFFSyxPQUFPLENBQUNFLEtBRGY7WUFFRSxNQUFNLEVBQUUsR0FGVjtZQUdFLEtBQUssRUFBRSxHQUhUO1lBSUUsS0FBSyxFQUFFO2NBQUVDLFlBQVksRUFBRTtZQUFoQjtVQUpUO1lBQUE7WUFBQTtZQUFBO1VBQUEsU0FERixlQU9FO1lBQUssU0FBUyxFQUFFUixtRkFBaEI7WUFBQSx1QkFDRTtjQUFJLFNBQVMsRUFBRUEsMkVBQWY7Y0FBQSxVQUNHSyxPQUFPLENBQUNNO1lBRFg7Y0FBQTtjQUFBO2NBQUE7WUFBQTtVQURGO1lBQUE7WUFBQTtZQUFBO1VBQUEsU0FQRixlQVlFO1lBQUssU0FBUyxFQUFFWCwrRUFBaEI7WUFBQSx3QkFDRTtjQUFLLFNBQVMsRUFBRUEsZ0ZBQWhCO2NBQUE7WUFBQTtjQUFBO2NBQUE7Y0FBQTtZQUFBLFNBREYsZUFFRTtjQUFLLFNBQVMsRUFBRUEsNkVBQWhCO2NBQUEsaUJBQXNDSyxPQUFPLENBQUNVLEtBQVIsR0FBZ0IsQ0FBdEQ7WUFBQTtjQUFBO2NBQUE7Y0FBQTtZQUFBLFNBRkY7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBWkY7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BREYsR0FBNkNWLE9BQU8sQ0FBQ0MsRUFBckQ7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQURRO0lBQUEsQ0FBVDtFQURIO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFERjtBQTBCRDs7S0EzQlFMOztBQTZCVCwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9maWx0ZXIvRXJhaS9pbmRleC50c3g/M2ZhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvRmlsdHJvLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBkYXRhYmFzZSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9kYXRhYmFzZVwiO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgLy8gRmlsdHJhciBsb3MgcHJvZHVjdG9zIHF1ZSBjb250aWVuZW4gXCJlcmFpXCIgZW4gZWwgbm9tYnJlXG4gIGNvbnN0IGZpbHRlcmVkRGF0YSA9IGRhdGFiYXNlLmZpbHRlcigocHJvZHVjdCkgPT4gcHJvZHVjdC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJlcmFpXCIpKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBkYXRhOiBmaWx0ZXJlZERhdGEsXG4gICAgfVxuICB9O1xufTtcbmludGVyZmFjZSBQcm9kdWN0IHtcbiAgaWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBcbn1cblxuZnVuY3Rpb24gRXJhaSh7ZGF0YX06IGFueSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyUHJvZHVjdHN9PlxuICAgICAge2RhdGEubWFwKChwcm9kdWN0OiBQcm9kdWN0KSA9PiAoXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdG9zLyR7cHJvZHVjdC5pZH1gfSBrZXk9e3Byb2R1Y3QuaWR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdH0+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0LmltYWdlfVxuICAgICAgICAgICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgICAgICAgICAgd2lkdGg9ezMwMH1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIiB9fVxuICAgICAgICAgICAgPjwvSW1hZ2U+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJJbmZvc1RlYW19PlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuVGVhbU5hbWV9PlxuICAgICAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9XG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlclByaWNlfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaXNjb3VudFByaWNlfT5SJDM1MCwwMDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0UHJpY2V9PlIke3Byb2R1Y3QucHJpY2UgLSAxfSw5OTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICkpfVxuICAgICAgey8qIFJlc3RvIGRlbCBjw7NkaWdvICovfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFcmFpO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJMaW5rIiwic3R5bGVzIiwiRXJhaSIsImRhdGEiLCJjb250YWluZXJQcm9kdWN0cyIsIm1hcCIsInByb2R1Y3QiLCJpZCIsImltYWdlIiwiYm9yZGVyUmFkaXVzIiwid3JhcHBlckluZm9zVGVhbSIsIlRlYW1OYW1lIiwibmFtZSIsIndyYXBwZXJQcmljZSIsImRpc2NvdW50UHJpY2UiLCJyaWdodFByaWNlIiwicHJpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/filter/Erai/index.tsx\n"));

/***/ })

});