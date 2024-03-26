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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ migrations)\n/* harmony export */ });\n/* harmony import */ var node_pg_migrate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-pg-migrate */ \"node-pg-migrate\");\n/* harmony import */ var node_pg_migrate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_pg_migrate__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node:path */ \"node:path\");\n/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function migrations(request, response) {\n    const defaultMigrationsOptions = {\n        databaseUrl: process.env.DATABASE_URL,\n        dryRun: true,\n        dir: (0,node_path__WEBPACK_IMPORTED_MODULE_1__.join)(\"infra\", \"migrations\"),\n        direction: \"up\",\n        verbose: true,\n        migrationsTable: \"pgmigrations\"\n    };\n    if (request.method === \"GET\") {\n        const pendingMigrations = await node_pg_migrate__WEBPACK_IMPORTED_MODULE_0___default()(defaultMigrationsOptions);\n        return response.status(200).json(pendingMigrations);\n    }\n    if (request.method === \"POST\") {\n        const migratedMigrations = await node_pg_migrate__WEBPACK_IMPORTED_MODULE_0___default()({\n            ...defaultMigrationsOptions,\n            dryRun: false\n        });\n        if (migratedMigrations.length > 0) {\n            return response.status(201).json(migratedMigrations);\n        }\n        return response.status(200).json(migratedMigrations);\n    }\n    return response.status(405).end(s);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdjEvbWlncmF0aW9ucy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE4QztBQUNiO0FBRWxCLGVBQWVFLFdBQVdDLE9BQU8sRUFBRUMsUUFBUSxFQUFFO0lBQzFELE1BQU1DLDJCQUEyQjtRQUMvQkMsYUFBYUMsUUFBUUMsR0FBRyxDQUFDQyxZQUFZO1FBQ3JDQyxRQUFRLElBQUk7UUFDWkMsS0FBS1YsK0NBQUlBLENBQUMsU0FBUztRQUNuQlcsV0FBVztRQUNYQyxTQUFTLElBQUk7UUFDYkMsaUJBQWlCO0lBQ25CO0lBRUEsSUFBSVgsUUFBUVksTUFBTSxLQUFLLE9BQU87UUFDNUIsTUFBTUMsb0JBQW9CLE1BQU1oQixzREFBZUEsQ0FBQ0s7UUFDaEQsT0FBT0QsU0FBU2EsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0Y7SUFDbkMsQ0FBQztJQUVELElBQUliLFFBQVFZLE1BQU0sS0FBSyxRQUFRO1FBQzdCLE1BQU1JLHFCQUFxQixNQUFNbkIsc0RBQWVBLENBQUM7WUFDL0MsR0FBR0ssd0JBQXdCO1lBQzNCSyxRQUFRLEtBQUs7UUFDZjtRQUVBLElBQUlTLG1CQUFtQkMsTUFBTSxHQUFHLEdBQUc7WUFDakMsT0FBT2hCLFNBQVNhLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNDO1FBQ25DLENBQUM7UUFFRCxPQUFPZixTQUFTYSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDQztJQUNuQyxDQUFDO0lBRUQsT0FBT2YsU0FBU2EsTUFBTSxDQUFDLEtBQUtJLEdBQUcsQ0FBQ0M7QUFDbEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Nsb25lLXRhYm5ld3MvLi9wYWdlcy9hcGkvdjEvbWlncmF0aW9ucy9pbmRleC5qcz9jMDlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtaWdyYXRpb25SdW5uZXIgZnJvbSBcIm5vZGUtcGctbWlncmF0ZVwiO1xuaW1wb3J0IHsgam9pbiB9IGZyb20gXCJub2RlOnBhdGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gbWlncmF0aW9ucyhyZXF1ZXN0LCByZXNwb25zZSkge1xuICBjb25zdCBkZWZhdWx0TWlncmF0aW9uc09wdGlvbnMgPSB7XG4gICAgZGF0YWJhc2VVcmw6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCxcbiAgICBkcnlSdW46IHRydWUsXG4gICAgZGlyOiBqb2luKFwiaW5mcmFcIiwgXCJtaWdyYXRpb25zXCIpLFxuICAgIGRpcmVjdGlvbjogXCJ1cFwiLFxuICAgIHZlcmJvc2U6IHRydWUsXG4gICAgbWlncmF0aW9uc1RhYmxlOiBcInBnbWlncmF0aW9uc1wiLFxuICB9O1xuXG4gIGlmIChyZXF1ZXN0Lm1ldGhvZCA9PT0gXCJHRVRcIikge1xuICAgIGNvbnN0IHBlbmRpbmdNaWdyYXRpb25zID0gYXdhaXQgbWlncmF0aW9uUnVubmVyKGRlZmF1bHRNaWdyYXRpb25zT3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cygyMDApLmpzb24ocGVuZGluZ01pZ3JhdGlvbnMpO1xuICB9XG5cbiAgaWYgKHJlcXVlc3QubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIGNvbnN0IG1pZ3JhdGVkTWlncmF0aW9ucyA9IGF3YWl0IG1pZ3JhdGlvblJ1bm5lcih7XG4gICAgICAuLi5kZWZhdWx0TWlncmF0aW9uc09wdGlvbnMsXG4gICAgICBkcnlSdW46IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgaWYgKG1pZ3JhdGVkTWlncmF0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKDIwMSkuanNvbihtaWdyYXRlZE1pZ3JhdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiByZXNwb25zZS5zdGF0dXMoMjAwKS5qc29uKG1pZ3JhdGVkTWlncmF0aW9ucyk7XG4gIH1cblxuICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKDQwNSkuZW5kKHMpO1xufVxuIl0sIm5hbWVzIjpbIm1pZ3JhdGlvblJ1bm5lciIsImpvaW4iLCJtaWdyYXRpb25zIiwicmVxdWVzdCIsInJlc3BvbnNlIiwiZGVmYXVsdE1pZ3JhdGlvbnNPcHRpb25zIiwiZGF0YWJhc2VVcmwiLCJwcm9jZXNzIiwiZW52IiwiREFUQUJBU0VfVVJMIiwiZHJ5UnVuIiwiZGlyIiwiZGlyZWN0aW9uIiwidmVyYm9zZSIsIm1pZ3JhdGlvbnNUYWJsZSIsIm1ldGhvZCIsInBlbmRpbmdNaWdyYXRpb25zIiwic3RhdHVzIiwianNvbiIsIm1pZ3JhdGVkTWlncmF0aW9ucyIsImxlbmd0aCIsImVuZCIsInMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/v1/migrations/index.js\n");

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