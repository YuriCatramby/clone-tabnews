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
exports.id = "pages/api/v1/status";
exports.ids = ["pages/api/v1/status"];
exports.modules = {

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ "(api)/./infra/database.js":
/*!***************************!*\
  !*** ./infra/database.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function query(queryObject) {\n    const client = new pg__WEBPACK_IMPORTED_MODULE_0__.Client({\n        host: process.env.POSTGRES_HOST,\n        port: process.env.POSTGRES_PORT,\n        user: process.env.POSTGRES_USER,\n        database: process.env.POSTGRES_DB,\n        password: process.env.POSTGRES_PASSWORD\n    });\n    await client.connect();\n    const result = await client.query(queryObject);\n    await client.end();\n    return result;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    query: query\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9pbmZyYS9kYXRhYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEI7QUFFNUIsZUFBZUMsTUFBTUMsV0FBVyxFQUFFO0lBQ2hDLE1BQU1DLFNBQVMsSUFBSUgsc0NBQU1BLENBQUM7UUFDeEJJLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsYUFBYTtRQUMvQkMsTUFBTUgsUUFBUUMsR0FBRyxDQUFDRyxhQUFhO1FBQy9CQyxNQUFNTCxRQUFRQyxHQUFHLENBQUNLLGFBQWE7UUFDL0JDLFVBQVVQLFFBQVFDLEdBQUcsQ0FBQ08sV0FBVztRQUNqQ0MsVUFBVVQsUUFBUUMsR0FBRyxDQUFDUyxpQkFBaUI7SUFDekM7SUFDQSxNQUFNWixPQUFPYSxPQUFPO0lBQ3BCLE1BQU1DLFNBQVMsTUFBTWQsT0FBT0YsS0FBSyxDQUFDQztJQUNsQyxNQUFNQyxPQUFPZSxHQUFHO0lBQ2hCLE9BQU9EO0FBQ1Q7QUFDQSxpRUFBZTtJQUNiaEIsT0FBT0E7QUFDVCxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbG9uZS10YWJuZXdzLy4vaW5mcmEvZGF0YWJhc2UuanM/ZTM5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQgfSBmcm9tIFwicGdcIjtcblxuYXN5bmMgZnVuY3Rpb24gcXVlcnkocXVlcnlPYmplY3QpIHtcbiAgY29uc3QgY2xpZW50ID0gbmV3IENsaWVudCh7XG4gICAgaG9zdDogcHJvY2Vzcy5lbnYuUE9TVEdSRVNfSE9TVCxcbiAgICBwb3J0OiBwcm9jZXNzLmVudi5QT1NUR1JFU19QT1JULFxuICAgIHVzZXI6IHByb2Nlc3MuZW52LlBPU1RHUkVTX1VTRVIsXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LlBPU1RHUkVTX0RCLFxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5QT1NUR1JFU19QQVNTV09SRCxcbiAgfSk7XG4gIGF3YWl0IGNsaWVudC5jb25uZWN0KCk7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudC5xdWVyeShxdWVyeU9iamVjdCk7XG4gIGF3YWl0IGNsaWVudC5lbmQoKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcXVlcnk6IHF1ZXJ5LFxufTtcbiJdLCJuYW1lcyI6WyJDbGllbnQiLCJxdWVyeSIsInF1ZXJ5T2JqZWN0IiwiY2xpZW50IiwiaG9zdCIsInByb2Nlc3MiLCJlbnYiLCJQT1NUR1JFU19IT1NUIiwicG9ydCIsIlBPU1RHUkVTX1BPUlQiLCJ1c2VyIiwiUE9TVEdSRVNfVVNFUiIsImRhdGFiYXNlIiwiUE9TVEdSRVNfREIiLCJwYXNzd29yZCIsIlBPU1RHUkVTX1BBU1NXT1JEIiwiY29ubmVjdCIsInJlc3VsdCIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./infra/database.js\n");

/***/ }),

/***/ "(api)/./pages/api/v1/status/index.js":
/*!**************************************!*\
  !*** ./pages/api/v1/status/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var infra_database_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! infra/database.js */ \"(api)/./infra/database.js\");\n\nasync function status(request, response) {\n    const updatedAt = new Date().toISOString();\n    const databaseVersionResult = await infra_database_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(\"SHOW server_version;\");\n    const databaseVersionValue = databaseVersionResult.rows[0].server_version;\n    const databaseMaxConnectionsResult = await infra_database_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(\"SHOW max_connections;\");\n    const databaseMaxConnectionsValue = databaseMaxConnectionsResult.rows[0].max_connections;\n    const databaseOpenedConnectionsResult = await infra_database_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(\"SELECT count(*)::int FROM pg_stat_activity WHERE datname = 'local_db';\");\n    const databaseOpenedConnectionsValue = databaseOpenedConnectionsResult.rows[0].count;\n    response.status(200).json({\n        updated_at: updatedAt,\n        dependencies: {\n            database: {\n                version: databaseVersionValue,\n                max_connections: databaseMaxConnectionsValue,\n                opened_connections: databaseOpenedConnectionsValue\n            }\n        }\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (status);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdjEvc3RhdHVzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlDO0FBRXpDLGVBQWVDLE9BQU9DLE9BQU8sRUFBRUMsUUFBUSxFQUFFO0lBQ3ZDLE1BQU1DLFlBQVksSUFBSUMsT0FBT0MsV0FBVztJQUV4QyxNQUFNQyx3QkFBd0IsTUFBTVAsK0RBQWMsQ0FBQztJQUNuRCxNQUFNUyx1QkFBdUJGLHNCQUFzQkcsSUFBSSxDQUFDLEVBQUUsQ0FBQ0MsY0FBYztJQUV6RSxNQUFNQywrQkFBK0IsTUFBTVosK0RBQWMsQ0FDdkQ7SUFFRixNQUFNYSw4QkFDSkQsNkJBQTZCRixJQUFJLENBQUMsRUFBRSxDQUFDSSxlQUFlO0lBRXRELE1BQU1DLGtDQUFrQyxNQUFNZiwrREFBYyxDQUMxRDtJQUdGLE1BQU1nQixpQ0FDSkQsZ0NBQWdDTCxJQUFJLENBQUMsRUFBRSxDQUFDTyxLQUFLO0lBRS9DZCxTQUFTRixNQUFNLENBQUMsS0FBS2lCLElBQUksQ0FBQztRQUN4QkMsWUFBWWY7UUFDWmdCLGNBQWM7WUFDWnBCLFVBQVU7Z0JBQ1JxQixTQUFTWjtnQkFDVEssaUJBQWlCRDtnQkFDakJTLG9CQUFvQk47WUFDdEI7UUFDRjtJQUNGO0FBQ0Y7QUFFQSxpRUFBZWYsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Nsb25lLXRhYm5ld3MvLi9wYWdlcy9hcGkvdjEvc3RhdHVzL2luZGV4LmpzPzg0ZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRhdGFiYXNlIGZyb20gXCJpbmZyYS9kYXRhYmFzZS5qc1wiO1xuXG5hc3luYyBmdW5jdGlvbiBzdGF0dXMocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgY29uc3QgdXBkYXRlZEF0ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuXG4gIGNvbnN0IGRhdGFiYXNlVmVyc2lvblJlc3VsdCA9IGF3YWl0IGRhdGFiYXNlLnF1ZXJ5KFwiU0hPVyBzZXJ2ZXJfdmVyc2lvbjtcIik7XG4gIGNvbnN0IGRhdGFiYXNlVmVyc2lvblZhbHVlID0gZGF0YWJhc2VWZXJzaW9uUmVzdWx0LnJvd3NbMF0uc2VydmVyX3ZlcnNpb247XG5cbiAgY29uc3QgZGF0YWJhc2VNYXhDb25uZWN0aW9uc1Jlc3VsdCA9IGF3YWl0IGRhdGFiYXNlLnF1ZXJ5KFxuICAgIFwiU0hPVyBtYXhfY29ubmVjdGlvbnM7XCJcbiAgKTtcbiAgY29uc3QgZGF0YWJhc2VNYXhDb25uZWN0aW9uc1ZhbHVlID1cbiAgICBkYXRhYmFzZU1heENvbm5lY3Rpb25zUmVzdWx0LnJvd3NbMF0ubWF4X2Nvbm5lY3Rpb25zO1xuXG4gIGNvbnN0IGRhdGFiYXNlT3BlbmVkQ29ubmVjdGlvbnNSZXN1bHQgPSBhd2FpdCBkYXRhYmFzZS5xdWVyeShcbiAgICBcIlNFTEVDVCBjb3VudCgqKTo6aW50IEZST00gcGdfc3RhdF9hY3Rpdml0eSBXSEVSRSBkYXRuYW1lID0gJ2xvY2FsX2RiJztcIlxuICApO1xuXG4gIGNvbnN0IGRhdGFiYXNlT3BlbmVkQ29ubmVjdGlvbnNWYWx1ZSA9XG4gICAgZGF0YWJhc2VPcGVuZWRDb25uZWN0aW9uc1Jlc3VsdC5yb3dzWzBdLmNvdW50O1xuXG4gIHJlc3BvbnNlLnN0YXR1cygyMDApLmpzb24oe1xuICAgIHVwZGF0ZWRfYXQ6IHVwZGF0ZWRBdCxcbiAgICBkZXBlbmRlbmNpZXM6IHtcbiAgICAgIGRhdGFiYXNlOiB7XG4gICAgICAgIHZlcnNpb246IGRhdGFiYXNlVmVyc2lvblZhbHVlLFxuICAgICAgICBtYXhfY29ubmVjdGlvbnM6IGRhdGFiYXNlTWF4Q29ubmVjdGlvbnNWYWx1ZSxcbiAgICAgICAgb3BlbmVkX2Nvbm5lY3Rpb25zOiBkYXRhYmFzZU9wZW5lZENvbm5lY3Rpb25zVmFsdWUsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdGF0dXM7XG4iXSwibmFtZXMiOlsiZGF0YWJhc2UiLCJzdGF0dXMiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJ1cGRhdGVkQXQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJkYXRhYmFzZVZlcnNpb25SZXN1bHQiLCJxdWVyeSIsImRhdGFiYXNlVmVyc2lvblZhbHVlIiwicm93cyIsInNlcnZlcl92ZXJzaW9uIiwiZGF0YWJhc2VNYXhDb25uZWN0aW9uc1Jlc3VsdCIsImRhdGFiYXNlTWF4Q29ubmVjdGlvbnNWYWx1ZSIsIm1heF9jb25uZWN0aW9ucyIsImRhdGFiYXNlT3BlbmVkQ29ubmVjdGlvbnNSZXN1bHQiLCJkYXRhYmFzZU9wZW5lZENvbm5lY3Rpb25zVmFsdWUiLCJjb3VudCIsImpzb24iLCJ1cGRhdGVkX2F0IiwiZGVwZW5kZW5jaWVzIiwidmVyc2lvbiIsIm9wZW5lZF9jb25uZWN0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/v1/status/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/v1/status/index.js"));
module.exports = __webpack_exports__;

})();