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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function query(queryObject) {\n    const client = new pg__WEBPACK_IMPORTED_MODULE_0__.Client({\n        host: process.env.POSTGRES_HOST,\n        port: process.env.POSTGRES_PORT,\n        user: process.env.POSTGRES_USER,\n        database: process.env.POSTGRES_DB,\n        password: process.env.POSTGRES_PASSWORD\n    });\n    console.log(\"Credenciais do postgres:\", {\n        host: process.env.POSTGRES_HOST,\n        port: process.env.POSTGRES_PORT,\n        user: process.env.POSTGRES_USER,\n        database: process.env.POSTGRES_DB,\n        password: process.env.POSTGRES_PASSWORD\n    });\n    // test\n    try {\n        await client.connect();\n        const result = await client.query(queryObject);\n        return result;\n    } catch (error) {\n        console.error(error);\n        throw error;\n    } finally{\n        await client.end();\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    query: query\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9pbmZyYS9kYXRhYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEI7QUFFNUIsZUFBZUMsTUFBTUMsV0FBVyxFQUFFO0lBQ2hDLE1BQU1DLFNBQVMsSUFBSUgsc0NBQU1BLENBQUM7UUFDeEJJLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsYUFBYTtRQUMvQkMsTUFBTUgsUUFBUUMsR0FBRyxDQUFDRyxhQUFhO1FBQy9CQyxNQUFNTCxRQUFRQyxHQUFHLENBQUNLLGFBQWE7UUFDL0JDLFVBQVVQLFFBQVFDLEdBQUcsQ0FBQ08sV0FBVztRQUNqQ0MsVUFBVVQsUUFBUUMsR0FBRyxDQUFDUyxpQkFBaUI7SUFDekM7SUFDQUMsUUFBUUMsR0FBRyxDQUFDLDRCQUE0QjtRQUN0Q2IsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxhQUFhO1FBQy9CQyxNQUFNSCxRQUFRQyxHQUFHLENBQUNHLGFBQWE7UUFDL0JDLE1BQU1MLFFBQVFDLEdBQUcsQ0FBQ0ssYUFBYTtRQUMvQkMsVUFBVVAsUUFBUUMsR0FBRyxDQUFDTyxXQUFXO1FBQ2pDQyxVQUFVVCxRQUFRQyxHQUFHLENBQUNTLGlCQUFpQjtJQUN6QztJQUNBLE9BQU87SUFDUCxJQUFJO1FBQ0YsTUFBTVosT0FBT2UsT0FBTztRQUNwQixNQUFNQyxTQUFTLE1BQU1oQixPQUFPRixLQUFLLENBQUNDO1FBQ2xDLE9BQU9pQjtJQUNULEVBQUUsT0FBT0MsT0FBTztRQUNkSixRQUFRSSxLQUFLLENBQUNBO1FBQ2QsTUFBTUEsTUFBTTtJQUNkLFNBQVU7UUFDUixNQUFNakIsT0FBT2tCLEdBQUc7SUFDbEI7QUFDRjtBQUNBLGlFQUFlO0lBQ2JwQixPQUFPQTtBQUNULENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Nsb25lLXRhYm5ld3MvLi9pbmZyYS9kYXRhYmFzZS5qcz9lMzliIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudCB9IGZyb20gXCJwZ1wiO1xuXG5hc3luYyBmdW5jdGlvbiBxdWVyeShxdWVyeU9iamVjdCkge1xuICBjb25zdCBjbGllbnQgPSBuZXcgQ2xpZW50KHtcbiAgICBob3N0OiBwcm9jZXNzLmVudi5QT1NUR1JFU19IT1NULFxuICAgIHBvcnQ6IHByb2Nlc3MuZW52LlBPU1RHUkVTX1BPUlQsXG4gICAgdXNlcjogcHJvY2Vzcy5lbnYuUE9TVEdSRVNfVVNFUixcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuUE9TVEdSRVNfREIsXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LlBPU1RHUkVTX1BBU1NXT1JELFxuICB9KTtcbiAgY29uc29sZS5sb2coXCJDcmVkZW5jaWFpcyBkbyBwb3N0Z3JlczpcIiwge1xuICAgIGhvc3Q6IHByb2Nlc3MuZW52LlBPU1RHUkVTX0hPU1QsXG4gICAgcG9ydDogcHJvY2Vzcy5lbnYuUE9TVEdSRVNfUE9SVCxcbiAgICB1c2VyOiBwcm9jZXNzLmVudi5QT1NUR1JFU19VU0VSLFxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5QT1NUR1JFU19EQixcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuUE9TVEdSRVNfUEFTU1dPUkQsXG4gIH0pO1xuICAvLyB0ZXN0XG4gIHRyeSB7XG4gICAgYXdhaXQgY2xpZW50LmNvbm5lY3QoKTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbGllbnQucXVlcnkocXVlcnlPYmplY3QpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH0gZmluYWxseSB7XG4gICAgYXdhaXQgY2xpZW50LmVuZCgpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCB7XG4gIHF1ZXJ5OiBxdWVyeSxcbn07XG4iXSwibmFtZXMiOlsiQ2xpZW50IiwicXVlcnkiLCJxdWVyeU9iamVjdCIsImNsaWVudCIsImhvc3QiLCJwcm9jZXNzIiwiZW52IiwiUE9TVEdSRVNfSE9TVCIsInBvcnQiLCJQT1NUR1JFU19QT1JUIiwidXNlciIsIlBPU1RHUkVTX1VTRVIiLCJkYXRhYmFzZSIsIlBPU1RHUkVTX0RCIiwicGFzc3dvcmQiLCJQT1NUR1JFU19QQVNTV09SRCIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0IiwicmVzdWx0IiwiZXJyb3IiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./infra/database.js\n");

/***/ }),

/***/ "(api)/./pages/api/v1/status/index.js":
/*!**************************************!*\
  !*** ./pages/api/v1/status/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var infra_database_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! infra/database.js */ \"(api)/./infra/database.js\");\n\nasync function status(request, response) {\n    const updatedAt = new Date().toISOString();\n    const databaseVersionResult = await infra_database_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(\"SHOW server_version;\");\n    const databaseVersionValue = databaseVersionResult.rows[0].server_version;\n    const databaseMaxConnectionsResult = await infra_database_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(\"SHOW max_connections;\");\n    const databaseMaxConnectionsValue = databaseMaxConnectionsResult.rows[0].max_connections;\n    const databaseName = process.env.POSTGRES_DB;\n    const databaseOpenedConnectionsResult = await infra_database_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query({\n        text: \"SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;\",\n        values: [\n            databaseName\n        ]\n    });\n    const databaseOpenedConnectionsValue = databaseOpenedConnectionsResult.rows[0].count;\n    response.status(200).json({\n        updated_at: updatedAt,\n        dependencies: {\n            database: {\n                version: databaseVersionValue,\n                max_connections: databaseMaxConnectionsValue,\n                opened_connections: databaseOpenedConnectionsValue\n            }\n        }\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (status);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdjEvc3RhdHVzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlDO0FBRXpDLGVBQWVDLE9BQU9DLE9BQU8sRUFBRUMsUUFBUSxFQUFFO0lBQ3ZDLE1BQU1DLFlBQVksSUFBSUMsT0FBT0MsV0FBVztJQUV4QyxNQUFNQyx3QkFBd0IsTUFBTVAsK0RBQWMsQ0FBQztJQUNuRCxNQUFNUyx1QkFBdUJGLHNCQUFzQkcsSUFBSSxDQUFDLEVBQUUsQ0FBQ0MsY0FBYztJQUV6RSxNQUFNQywrQkFBK0IsTUFBTVosK0RBQWMsQ0FDdkQ7SUFFRixNQUFNYSw4QkFDSkQsNkJBQTZCRixJQUFJLENBQUMsRUFBRSxDQUFDSSxlQUFlO0lBRXRELE1BQU1DLGVBQWVDLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztJQUM1QyxNQUFNQyxrQ0FBa0MsTUFBTW5CLCtEQUFjLENBQUM7UUFDM0RvQixNQUFNO1FBQ05DLFFBQVE7WUFBQ047U0FBYTtJQUN4QjtJQUVBLE1BQU1PLGlDQUNKSCxnQ0FBZ0NULElBQUksQ0FBQyxFQUFFLENBQUNhLEtBQUs7SUFFL0NwQixTQUFTRixNQUFNLENBQUMsS0FBS3VCLElBQUksQ0FBQztRQUN4QkMsWUFBWXJCO1FBQ1pzQixjQUFjO1lBQ1oxQixVQUFVO2dCQUNSMkIsU0FBU2xCO2dCQUNUSyxpQkFBaUJEO2dCQUNqQmUsb0JBQW9CTjtZQUN0QjtRQUNGO0lBQ0Y7QUFDRjtBQUVBLGlFQUFlckIsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Nsb25lLXRhYm5ld3MvLi9wYWdlcy9hcGkvdjEvc3RhdHVzL2luZGV4LmpzPzg0ZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRhdGFiYXNlIGZyb20gXCJpbmZyYS9kYXRhYmFzZS5qc1wiO1xuXG5hc3luYyBmdW5jdGlvbiBzdGF0dXMocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgY29uc3QgdXBkYXRlZEF0ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuXG4gIGNvbnN0IGRhdGFiYXNlVmVyc2lvblJlc3VsdCA9IGF3YWl0IGRhdGFiYXNlLnF1ZXJ5KFwiU0hPVyBzZXJ2ZXJfdmVyc2lvbjtcIik7XG4gIGNvbnN0IGRhdGFiYXNlVmVyc2lvblZhbHVlID0gZGF0YWJhc2VWZXJzaW9uUmVzdWx0LnJvd3NbMF0uc2VydmVyX3ZlcnNpb247XG5cbiAgY29uc3QgZGF0YWJhc2VNYXhDb25uZWN0aW9uc1Jlc3VsdCA9IGF3YWl0IGRhdGFiYXNlLnF1ZXJ5KFxuICAgIFwiU0hPVyBtYXhfY29ubmVjdGlvbnM7XCJcbiAgKTtcbiAgY29uc3QgZGF0YWJhc2VNYXhDb25uZWN0aW9uc1ZhbHVlID1cbiAgICBkYXRhYmFzZU1heENvbm5lY3Rpb25zUmVzdWx0LnJvd3NbMF0ubWF4X2Nvbm5lY3Rpb25zO1xuXG4gIGNvbnN0IGRhdGFiYXNlTmFtZSA9IHByb2Nlc3MuZW52LlBPU1RHUkVTX0RCO1xuICBjb25zdCBkYXRhYmFzZU9wZW5lZENvbm5lY3Rpb25zUmVzdWx0ID0gYXdhaXQgZGF0YWJhc2UucXVlcnkoe1xuICAgIHRleHQ6IFwiU0VMRUNUIGNvdW50KCopOjppbnQgRlJPTSBwZ19zdGF0X2FjdGl2aXR5IFdIRVJFIGRhdG5hbWUgPSAkMTtcIixcbiAgICB2YWx1ZXM6IFtkYXRhYmFzZU5hbWVdLFxuICB9KTtcblxuICBjb25zdCBkYXRhYmFzZU9wZW5lZENvbm5lY3Rpb25zVmFsdWUgPVxuICAgIGRhdGFiYXNlT3BlbmVkQ29ubmVjdGlvbnNSZXN1bHQucm93c1swXS5jb3VudDtcblxuICByZXNwb25zZS5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICB1cGRhdGVkX2F0OiB1cGRhdGVkQXQsXG4gICAgZGVwZW5kZW5jaWVzOiB7XG4gICAgICBkYXRhYmFzZToge1xuICAgICAgICB2ZXJzaW9uOiBkYXRhYmFzZVZlcnNpb25WYWx1ZSxcbiAgICAgICAgbWF4X2Nvbm5lY3Rpb25zOiBkYXRhYmFzZU1heENvbm5lY3Rpb25zVmFsdWUsXG4gICAgICAgIG9wZW5lZF9jb25uZWN0aW9uczogZGF0YWJhc2VPcGVuZWRDb25uZWN0aW9uc1ZhbHVlLFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RhdHVzO1xuIl0sIm5hbWVzIjpbImRhdGFiYXNlIiwic3RhdHVzIiwicmVxdWVzdCIsInJlc3BvbnNlIiwidXBkYXRlZEF0IiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiZGF0YWJhc2VWZXJzaW9uUmVzdWx0IiwicXVlcnkiLCJkYXRhYmFzZVZlcnNpb25WYWx1ZSIsInJvd3MiLCJzZXJ2ZXJfdmVyc2lvbiIsImRhdGFiYXNlTWF4Q29ubmVjdGlvbnNSZXN1bHQiLCJkYXRhYmFzZU1heENvbm5lY3Rpb25zVmFsdWUiLCJtYXhfY29ubmVjdGlvbnMiLCJkYXRhYmFzZU5hbWUiLCJwcm9jZXNzIiwiZW52IiwiUE9TVEdSRVNfREIiLCJkYXRhYmFzZU9wZW5lZENvbm5lY3Rpb25zUmVzdWx0IiwidGV4dCIsInZhbHVlcyIsImRhdGFiYXNlT3BlbmVkQ29ubmVjdGlvbnNWYWx1ZSIsImNvdW50IiwianNvbiIsInVwZGF0ZWRfYXQiLCJkZXBlbmRlbmNpZXMiLCJ2ZXJzaW9uIiwib3BlbmVkX2Nvbm5lY3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/v1/status/index.js\n");

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