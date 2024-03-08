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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ migrations)\n/* harmony export */ });\n/* harmony import */ var node_pg_migrate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-pg-migrate */ \"node-pg-migrate\");\n/* harmony import */ var node_pg_migrate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_pg_migrate__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node:path */ \"node:path\");\n/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function migrations(request, response) {\n    const migrations = await node_pg_migrate__WEBPACK_IMPORTED_MODULE_0___default()({\n        databaseUrl: process.env.DATABASE_URL,\n        dryRun: true,\n        dir: (0,node_path__WEBPACK_IMPORTED_MODULE_1__.join)(\"infra\", \"migrations\"),\n        direction: \"up\",\n        verbose: true,\n        migrationsTable: \"pgmigrations\"\n    });\n    response.status(200).json(migrations);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdjEvbWlncmF0aW9ucy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE4QztBQUNiO0FBRWxCLGVBQWVFLFdBQVdDLE9BQU8sRUFBRUMsUUFBUSxFQUFFO0lBQzFELE1BQU1GLGFBQWEsTUFBTUYsc0RBQWVBLENBQUM7UUFDdkNLLGFBQWFDLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWTtRQUNyQ0MsUUFBUSxJQUFJO1FBQ1pDLEtBQUtULCtDQUFJQSxDQUFDLFNBQVM7UUFDbkJVLFdBQVc7UUFDWEMsU0FBUyxJQUFJO1FBQ2JDLGlCQUFpQjtJQUNuQjtJQUNBVCxTQUFTVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDYjtBQUM1QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xvbmUtdGFibmV3cy8uL3BhZ2VzL2FwaS92MS9taWdyYXRpb25zL2luZGV4LmpzP2MwOWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1pZ3JhdGlvblJ1bm5lciBmcm9tIFwibm9kZS1wZy1taWdyYXRlXCI7XG5pbXBvcnQgeyBqb2luIH0gZnJvbSBcIm5vZGU6cGF0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBtaWdyYXRpb25zKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGNvbnN0IG1pZ3JhdGlvbnMgPSBhd2FpdCBtaWdyYXRpb25SdW5uZXIoe1xuICAgIGRhdGFiYXNlVXJsOiBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwsXG4gICAgZHJ5UnVuOiB0cnVlLFxuICAgIGRpcjogam9pbihcImluZnJhXCIsIFwibWlncmF0aW9uc1wiKSxcbiAgICBkaXJlY3Rpb246IFwidXBcIixcbiAgICB2ZXJib3NlOiB0cnVlLFxuICAgIG1pZ3JhdGlvbnNUYWJsZTogXCJwZ21pZ3JhdGlvbnNcIixcbiAgfSk7XG4gIHJlc3BvbnNlLnN0YXR1cygyMDApLmpzb24obWlncmF0aW9ucyk7XG59XG4iXSwibmFtZXMiOlsibWlncmF0aW9uUnVubmVyIiwiam9pbiIsIm1pZ3JhdGlvbnMiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJkYXRhYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJEQVRBQkFTRV9VUkwiLCJkcnlSdW4iLCJkaXIiLCJkaXJlY3Rpb24iLCJ2ZXJib3NlIiwibWlncmF0aW9uc1RhYmxlIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/v1/migrations/index.js\n");

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