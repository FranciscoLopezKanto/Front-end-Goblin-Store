"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login/index.tsx":
/*!*******************************!*\
  !*** ./pages/login/index.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"C:\\\\Users\\\\Francisco\\\\Downloads\\\\Next-client-ecommerce-main\\\\pages\\\\login\\\\index.tsx\";\n\n\n\n\nconst LoginPage = () => {\n  const {\n    0: email,\n    1: setEmail\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n  const {\n    0: password,\n    1: setPassword\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n  const {\n    0: isRegistering,\n    1: setIsRegistering\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n\n  const handleLogin = () => {\n    // Aquí puedes agregar la lógica de inicio de sesión, por ejemplo, una llamada a una API.\n    console.log('Iniciando sesión con email:', email, 'y contraseña:', password);\n  };\n\n  const handleRegister = () => {\n    // Aquí puedes agregar la lógica de registro, por ejemplo, una llamada a una API.\n    console.log('Registrando nuevo usuario con email:', email, 'y contraseña:', password);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Container, {\n    maxWidth: \"xs\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Paper, {\n      elevation: 3,\n      style: {\n        padding: '16px',\n        marginTop: '60px',\n        height: '400px',\n        //backgroundImage: 'url(https://i.postimg.cc/nj8Dh0dK/Duende.gif)', \n        backgroundSize: 'cover'\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {\n        variant: \"h5\",\n        children: isRegistering ? 'Registro' : 'Inicio de Sesión'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"form\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n          fullWidth: true,\n          label: \"Email\",\n          variant: \"outlined\",\n          value: email,\n          onChange: e => setEmail(e.target.value),\n          style: {\n            margin: '10px 0'\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n          fullWidth: true,\n          label: \"Contrase\\xF1a\",\n          variant: \"outlined\",\n          type: \"password\",\n          value: password,\n          onChange: e => setPassword(e.target.value),\n          style: {\n            margin: '10px 0'\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {\n          fullWidth: true,\n          variant: \"contained\",\n          color: \"primary\",\n          onClick: isRegistering ? handleRegister : handleLogin,\n          style: {\n            margin: '10px 0'\n          },\n          children: isRegistering ? 'Registrarse' : 'Iniciar Sesión'\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {\n          variant: \"body2\",\n          style: {\n            margin: '10px 0',\n            cursor: 'pointer',\n            textDecoration: 'underline'\n          },\n          onClick: () => setIsRegistering(!isRegistering),\n          children: isRegistering ? '¿Ya tienes una cuenta? Iniciar Sesión' : '¿No tienes una cuenta? Registrarse'\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1FBQUEsYUEzQkY7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLGFBYkY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBREY7SUFBQTtJQUFBO0lBQUE7RUFBQSxhQURGO0FBcURELENBcEVEOztBQXNFQSxpRUFBZUwsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2xvZ2luL2luZGV4LnRzeD9jMDE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQge1xyXG4gIENvbnRhaW5lcixcclxuICBQYXBlcixcclxuICBUZXh0RmllbGQsXHJcbiAgQnV0dG9uLFxyXG4gIFR5cG9ncmFwaHksXHJcbn0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcblxyXG5jb25zdCBMb2dpblBhZ2U6IEZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtpc1JlZ2lzdGVyaW5nLCBzZXRJc1JlZ2lzdGVyaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9naW4gPSAoKSA9PiB7XHJcbiAgICAvLyBBcXXDrSBwdWVkZXMgYWdyZWdhciBsYSBsw7NnaWNhIGRlIGluaWNpbyBkZSBzZXNpw7NuLCBwb3IgZWplbXBsbywgdW5hIGxsYW1hZGEgYSB1bmEgQVBJLlxyXG4gICAgY29uc29sZS5sb2coJ0luaWNpYW5kbyBzZXNpw7NuIGNvbiBlbWFpbDonLCBlbWFpbCwgJ3kgY29udHJhc2XDsWE6JywgcGFzc3dvcmQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlZ2lzdGVyID0gKCkgPT4ge1xyXG4gICAgLy8gQXF1w60gcHVlZGVzIGFncmVnYXIgbGEgbMOzZ2ljYSBkZSByZWdpc3RybywgcG9yIGVqZW1wbG8sIHVuYSBsbGFtYWRhIGEgdW5hIEFQSS5cclxuICAgIGNvbnNvbGUubG9nKCdSZWdpc3RyYW5kbyBudWV2byB1c3VhcmlvIGNvbiBlbWFpbDonLCBlbWFpbCwgJ3kgY29udHJhc2XDsWE6JywgcGFzc3dvcmQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwieHNcIj5cclxuICAgICAgPFBhcGVyXHJcbiAgICAgICAgZWxldmF0aW9uPXszfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBwYWRkaW5nOiAnMTZweCcsXHJcbiAgICAgICAgICBtYXJnaW5Ub3A6ICc2MHB4JyxcclxuICAgICAgICAgIGhlaWdodDogJzQwMHB4JyxcclxuICAgICAgICAgIC8vYmFja2dyb3VuZEltYWdlOiAndXJsKGh0dHBzOi8vaS5wb3N0aW1nLmNjL25qOERoMGRLL0R1ZW5kZS5naWYpJywgXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+XHJcbiAgICAgICAgICB7aXNSZWdpc3RlcmluZyA/ICdSZWdpc3RybycgOiAnSW5pY2lvIGRlIFNlc2nDs24nfVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxyXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46ICcxMHB4IDAnIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgbGFiZWw9XCJDb250cmFzZcOxYVwiXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogJzEwcHggMCcgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgb25DbGljaz17aXNSZWdpc3RlcmluZyA/IGhhbmRsZVJlZ2lzdGVyIDogaGFuZGxlTG9naW59XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogJzEwcHggMCcgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2lzUmVnaXN0ZXJpbmcgPyAnUmVnaXN0cmFyc2UnIDogJ0luaWNpYXIgU2VzacOzbid9XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogJzEwcHggMCcsIGN1cnNvcjogJ3BvaW50ZXInLCB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNSZWdpc3RlcmluZyghaXNSZWdpc3RlcmluZyl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpc1JlZ2lzdGVyaW5nID8gJ8K/WWEgdGllbmVzIHVuYSBjdWVudGE/IEluaWNpYXIgU2VzacOzbicgOiAnwr9ObyB0aWVuZXMgdW5hIGN1ZW50YT8gUmVnaXN0cmFyc2UnfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9QYXBlcj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpblBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ29udGFpbmVyIiwiUGFwZXIiLCJUZXh0RmllbGQiLCJCdXR0b24iLCJUeXBvZ3JhcGh5IiwiTG9naW5QYWdlIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJpc1JlZ2lzdGVyaW5nIiwic2V0SXNSZWdpc3RlcmluZyIsImhhbmRsZUxvZ2luIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVJlZ2lzdGVyIiwicGFkZGluZyIsIm1hcmdpblRvcCIsImhlaWdodCIsImJhY2tncm91bmRTaXplIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFyZ2luIiwiY3Vyc29yIiwidGV4dERlY29yYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login/index.tsx\n");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login/index.tsx"));
module.exports = __webpack_exports__;

})();