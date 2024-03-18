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
exports.id = "pages/api/v1/migrations";
exports.ids = ["pages/api/v1/migrations"];
exports.modules = {

/***/ "node-pg-migrate":
/*!**********************************!*\
  !*** external "node-pg-migrate" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("node-pg-migrate");

/***/ }),

/***/ "node:path":
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:path");

/***/ }),

/***/ "(api)/./pages/api/v1/migrations/index.js":
/*!******************************************!*\
  !*** ./pages/api/v1/migrations/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ migrations)\n/* harmony export */ });\n/* harmony import */ var node_pg_migrate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-pg-migrate */ \"node-pg-migrate\");\n/* harmony import */ var node_pg_migrate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_pg_migrate__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node:path */ \"node:path\");\n/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function migrations(request, response) {\n    if (request.method === \"GET\") {\n        const migrations = await node_pg_migrate__WEBPACK_IMPORTED_MODULE_0___default()({\n            databaseUrl: process.env.DATABASE_URL,\n            dryRun: true,\n            dir: (0,node_path__WEBPACK_IMPORTED_MODULE_1__.join)(\"infra\", \"migrations\"),\n            direction: \"up\",\n            verbose: true,\n            migrationsTable: \"pgmigrations\"\n        });\n        response.status(200).json(migrations);\n    }\n    if (request.method === \"POST\") {\n        const migrations = await node_pg_migrate__WEBPACK_IMPORTED_MODULE_0___default()({\n            databaseUrl: process.env.DATABASE_URL,\n            dryRun: false,\n            dir: (0,node_path__WEBPACK_IMPORTED_MODULE_1__.join)(\"infra\", \"migrations\"),\n            direction: \"up\",\n            verbose: true,\n            migrationsTable: \"pgmigrations\"\n        });\n        response.status(200).json(migrations);\n    }\n    return response.status(405).end();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdjEvbWlncmF0aW9ucy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE4QztBQUNiO0FBRWxCLGVBQWVFLFdBQVdDLE9BQU8sRUFBRUMsUUFBUSxFQUFFO0lBQzFELElBQUlELFFBQVFFLE1BQU0sS0FBSyxPQUFPO1FBQzVCLE1BQU1ILGFBQWEsTUFBTUYsc0RBQWVBLENBQUM7WUFDdkNNLGFBQWFDLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWTtZQUNyQ0MsUUFBUSxJQUFJO1lBQ1pDLEtBQUtWLCtDQUFJQSxDQUFDLFNBQVM7WUFDbkJXLFdBQVc7WUFDWEMsU0FBUyxJQUFJO1lBQ2JDLGlCQUFpQjtRQUNuQjtRQUNBVixTQUFTVyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDZDtJQUM1QixDQUFDO0lBRUQsSUFBSUMsUUFBUUUsTUFBTSxLQUFLLFFBQVE7UUFDN0IsTUFBTUgsYUFBYSxNQUFNRixzREFBZUEsQ0FBQztZQUN2Q00sYUFBYUMsUUFBUUMsR0FBRyxDQUFDQyxZQUFZO1lBQ3JDQyxRQUFRLEtBQUs7WUFDYkMsS0FBS1YsK0NBQUlBLENBQUMsU0FBUztZQUNuQlcsV0FBVztZQUNYQyxTQUFTLElBQUk7WUFDYkMsaUJBQWlCO1FBQ25CO1FBQ0FWLFNBQVNXLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNkO0lBQzVCLENBQUM7SUFFRCxPQUFPRSxTQUFTVyxNQUFNLENBQUMsS0FBS0UsR0FBRztBQUNqQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xvbmUtdGFibmV3cy8uL3BhZ2VzL2FwaS92MS9taWdyYXRpb25zL2luZGV4LmpzP2MwOWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1pZ3JhdGlvblJ1bm5lciBmcm9tIFwibm9kZS1wZy1taWdyYXRlXCI7XG5pbXBvcnQgeyBqb2luIH0gZnJvbSBcIm5vZGU6cGF0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBtaWdyYXRpb25zKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGlmIChyZXF1ZXN0Lm1ldGhvZCA9PT0gXCJHRVRcIikge1xuICAgIGNvbnN0IG1pZ3JhdGlvbnMgPSBhd2FpdCBtaWdyYXRpb25SdW5uZXIoe1xuICAgICAgZGF0YWJhc2VVcmw6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCxcbiAgICAgIGRyeVJ1bjogdHJ1ZSxcbiAgICAgIGRpcjogam9pbihcImluZnJhXCIsIFwibWlncmF0aW9uc1wiKSxcbiAgICAgIGRpcmVjdGlvbjogXCJ1cFwiLFxuICAgICAgdmVyYm9zZTogdHJ1ZSxcbiAgICAgIG1pZ3JhdGlvbnNUYWJsZTogXCJwZ21pZ3JhdGlvbnNcIixcbiAgICB9KTtcbiAgICByZXNwb25zZS5zdGF0dXMoMjAwKS5qc29uKG1pZ3JhdGlvbnMpO1xuICB9XG5cbiAgaWYgKHJlcXVlc3QubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIGNvbnN0IG1pZ3JhdGlvbnMgPSBhd2FpdCBtaWdyYXRpb25SdW5uZXIoe1xuICAgICAgZGF0YWJhc2VVcmw6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCxcbiAgICAgIGRyeVJ1bjogZmFsc2UsXG4gICAgICBkaXI6IGpvaW4oXCJpbmZyYVwiLCBcIm1pZ3JhdGlvbnNcIiksXG4gICAgICBkaXJlY3Rpb246IFwidXBcIixcbiAgICAgIHZlcmJvc2U6IHRydWUsXG4gICAgICBtaWdyYXRpb25zVGFibGU6IFwicGdtaWdyYXRpb25zXCIsXG4gICAgfSk7XG4gICAgcmVzcG9uc2Uuc3RhdHVzKDIwMCkuanNvbihtaWdyYXRpb25zKTtcbiAgfVxuXG4gIHJldHVybiByZXNwb25zZS5zdGF0dXMoNDA1KS5lbmQoKTtcbn1cbiJdLCJuYW1lcyI6WyJtaWdyYXRpb25SdW5uZXIiLCJqb2luIiwibWlncmF0aW9ucyIsInJlcXVlc3QiLCJyZXNwb25zZSIsIm1ldGhvZCIsImRhdGFiYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIkRBVEFCQVNFX1VSTCIsImRyeVJ1biIsImRpciIsImRpcmVjdGlvbiIsInZlcmJvc2UiLCJtaWdyYXRpb25zVGFibGUiLCJzdGF0dXMiLCJqc29uIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/v1/migrations/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/v1/migrations/index.js"));
module.exports = __webpack_exports__;

})();