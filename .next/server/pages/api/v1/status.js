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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function query(queryObject) {\n    const client = new pg__WEBPACK_IMPORTED_MODULE_0__.Client({\n        host: process.env.POSTGRES_HOST,\n        port: process.env.POSTGRES_PORT,\n        user: process.env.POSTGRES_USER,\n        database: process.env.POSTGRES_DB,\n        password: process.env.POSTGRES_PASSWORD,\n        ssl: getSSLValues()\n    });\n    try {\n        await client.connect();\n        const result = await client.query(queryObject);\n        return result;\n    } catch (error) {\n        console.error(error);\n        throw error;\n    } finally{\n        await client.end();\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    query: query\n});\nfunction getSSLValues() {\n    if (process.env.POSTGRES_CA) {\n        return {\n            ca: process.env.POSTGRES_CA\n        };\n    }\n    return  false ? 0 : false;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9pbmZyYS9kYXRhYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEI7QUFFNUIsZUFBZUMsTUFBTUMsV0FBVyxFQUFFO0lBQ2hDLE1BQU1DLFNBQVMsSUFBSUgsc0NBQU1BLENBQUM7UUFDeEJJLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsYUFBYTtRQUMvQkMsTUFBTUgsUUFBUUMsR0FBRyxDQUFDRyxhQUFhO1FBQy9CQyxNQUFNTCxRQUFRQyxHQUFHLENBQUNLLGFBQWE7UUFDL0JDLFVBQVVQLFFBQVFDLEdBQUcsQ0FBQ08sV0FBVztRQUNqQ0MsVUFBVVQsUUFBUUMsR0FBRyxDQUFDUyxpQkFBaUI7UUFDdkNDLEtBQUtDO0lBQ1A7SUFFQSxJQUFJO1FBQ0YsTUFBTWQsT0FBT2UsT0FBTztRQUNwQixNQUFNQyxTQUFTLE1BQU1oQixPQUFPRixLQUFLLENBQUNDO1FBQ2xDLE9BQU9pQjtJQUNULEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUNBO1FBQ2QsTUFBTUEsTUFBTTtJQUNkLFNBQVU7UUFDUixNQUFNakIsT0FBT21CLEdBQUc7SUFDbEI7QUFDRjtBQUVBLGlFQUFlO0lBQ2JyQixPQUFPQTtBQUNULENBQUMsRUFBQztBQUVGLFNBQVNnQixlQUFlO0lBQ3RCLElBQUlaLFFBQVFDLEdBQUcsQ0FBQ2lCLFdBQVcsRUFBRTtRQUMzQixPQUFPO1lBQ0xDLElBQUluQixRQUFRQyxHQUFHLENBQUNpQixXQUFXO1FBQzdCO0lBQ0YsQ0FBQztJQUVELE9BQU9sQixNQUFxQyxHQUFHLENBQUksR0FBRyxLQUFLO0FBQzdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xvbmUtdGFibmV3cy8uL2luZnJhL2RhdGFiYXNlLmpzP2UzOWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSBcInBnXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIHF1ZXJ5KHF1ZXJ5T2JqZWN0KSB7XG4gIGNvbnN0IGNsaWVudCA9IG5ldyBDbGllbnQoe1xuICAgIGhvc3Q6IHByb2Nlc3MuZW52LlBPU1RHUkVTX0hPU1QsXG4gICAgcG9ydDogcHJvY2Vzcy5lbnYuUE9TVEdSRVNfUE9SVCxcbiAgICB1c2VyOiBwcm9jZXNzLmVudi5QT1NUR1JFU19VU0VSLFxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5QT1NUR1JFU19EQixcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuUE9TVEdSRVNfUEFTU1dPUkQsXG4gICAgc3NsOiBnZXRTU0xWYWx1ZXMoKSxcbiAgfSk7XG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBjbGllbnQuY29ubmVjdCgpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudC5xdWVyeShxdWVyeU9iamVjdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfSBmaW5hbGx5IHtcbiAgICBhd2FpdCBjbGllbnQuZW5kKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBxdWVyeTogcXVlcnksXG59O1xuXG5mdW5jdGlvbiBnZXRTU0xWYWx1ZXMoKSB7XG4gIGlmIChwcm9jZXNzLmVudi5QT1NUR1JFU19DQSkge1xuICAgIHJldHVybiB7XG4gICAgICBjYTogcHJvY2Vzcy5lbnYuUE9TVEdSRVNfQ0EsXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyB0cnVlIDogZmFsc2U7XG59XG4iXSwibmFtZXMiOlsiQ2xpZW50IiwicXVlcnkiLCJxdWVyeU9iamVjdCIsImNsaWVudCIsImhvc3QiLCJwcm9jZXNzIiwiZW52IiwiUE9TVEdSRVNfSE9TVCIsInBvcnQiLCJQT1NUR1JFU19QT1JUIiwidXNlciIsIlBPU1RHUkVTX1VTRVIiLCJkYXRhYmFzZSIsIlBPU1RHUkVTX0RCIiwicGFzc3dvcmQiLCJQT1NUR1JFU19QQVNTV09SRCIsInNzbCIsImdldFNTTFZhbHVlcyIsImNvbm5lY3QiLCJyZXN1bHQiLCJlcnJvciIsImNvbnNvbGUiLCJlbmQiLCJQT1NUR1JFU19DQSIsImNhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./infra/database.js\n");

/***/ }),

/***/ "(api)/./pages/api/v1/status/index.js":
/*!**************************************!*\
  !*** ./pages/api/v1/status/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var infra_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! infra/database */ \"(api)/./infra/database.js\");\n\nasync function status(request, response) {\n    const updatedAt = new Date().toISOString();\n    const databaseVersionResult = await infra_database__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(\"SHOW server_version;\");\n    const databaseVersionValue = databaseVersionResult.rows[0].server_version;\n    const databaseMaxConnectionsResult = await infra_database__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(\"SHOW max_connections;\");\n    const databaseMaxConnectionsValue = databaseMaxConnectionsResult.rows[0].max_connections;\n    const databaseName = process.env.POSTGRES_DB;\n    const databaseOpenedConnectionsResult = await infra_database__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query({\n        text: \"SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;\",\n        values: [\n            databaseName\n        ]\n    });\n    const databaseOpenedConnectionsValue = databaseOpenedConnectionsResult.rows[0].count;\n    response.status(200).json({\n        updated_at: updatedAt,\n        dependencies: {\n            database: {\n                version: databaseVersionValue,\n                max_connections: parseInt(databaseMaxConnectionsValue),\n                opened_connections: databaseOpenedConnectionsValue\n            }\n        }\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (status);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdjEvc3RhdHVzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXNDO0FBRXRDLGVBQWVDLE9BQU9DLE9BQU8sRUFBRUMsUUFBUSxFQUFFO0lBQ3ZDLE1BQU1DLFlBQVksSUFBSUMsT0FBT0MsV0FBVztJQUV4QyxNQUFNQyx3QkFBd0IsTUFBTVAsNERBQWMsQ0FBQztJQUNuRCxNQUFNUyx1QkFBdUJGLHNCQUFzQkcsSUFBSSxDQUFDLEVBQUUsQ0FBQ0MsY0FBYztJQUV6RSxNQUFNQywrQkFBK0IsTUFBTVosNERBQWMsQ0FDdkQ7SUFFRixNQUFNYSw4QkFDSkQsNkJBQTZCRixJQUFJLENBQUMsRUFBRSxDQUFDSSxlQUFlO0lBRXRELE1BQU1DLGVBQWVDLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztJQUM1QyxNQUFNQyxrQ0FBa0MsTUFBTW5CLDREQUFjLENBQUM7UUFDM0RvQixNQUFNO1FBQ05DLFFBQVE7WUFBQ047U0FBYTtJQUN4QjtJQUNBLE1BQU1PLGlDQUNKSCxnQ0FBZ0NULElBQUksQ0FBQyxFQUFFLENBQUNhLEtBQUs7SUFFL0NwQixTQUFTRixNQUFNLENBQUMsS0FBS3VCLElBQUksQ0FBQztRQUN4QkMsWUFBWXJCO1FBQ1pzQixjQUFjO1lBQ1oxQixVQUFVO2dCQUNSMkIsU0FBU2xCO2dCQUNUSyxpQkFBaUJjLFNBQVNmO2dCQUMxQmdCLG9CQUFvQlA7WUFDdEI7UUFDRjtJQUNGO0FBQ0Y7QUFFQSxpRUFBZXJCLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbG9uZS10YWJuZXdzLy4vcGFnZXMvYXBpL3YxL3N0YXR1cy9pbmRleC5qcz84NGRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYXRhYmFzZSBmcm9tIFwiaW5mcmEvZGF0YWJhc2VcIjtcblxuYXN5bmMgZnVuY3Rpb24gc3RhdHVzKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGNvbnN0IHVwZGF0ZWRBdCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcblxuICBjb25zdCBkYXRhYmFzZVZlcnNpb25SZXN1bHQgPSBhd2FpdCBkYXRhYmFzZS5xdWVyeShcIlNIT1cgc2VydmVyX3ZlcnNpb247XCIpO1xuICBjb25zdCBkYXRhYmFzZVZlcnNpb25WYWx1ZSA9IGRhdGFiYXNlVmVyc2lvblJlc3VsdC5yb3dzWzBdLnNlcnZlcl92ZXJzaW9uO1xuXG4gIGNvbnN0IGRhdGFiYXNlTWF4Q29ubmVjdGlvbnNSZXN1bHQgPSBhd2FpdCBkYXRhYmFzZS5xdWVyeShcbiAgICBcIlNIT1cgbWF4X2Nvbm5lY3Rpb25zO1wiXG4gICk7XG4gIGNvbnN0IGRhdGFiYXNlTWF4Q29ubmVjdGlvbnNWYWx1ZSA9XG4gICAgZGF0YWJhc2VNYXhDb25uZWN0aW9uc1Jlc3VsdC5yb3dzWzBdLm1heF9jb25uZWN0aW9ucztcblxuICBjb25zdCBkYXRhYmFzZU5hbWUgPSBwcm9jZXNzLmVudi5QT1NUR1JFU19EQjtcbiAgY29uc3QgZGF0YWJhc2VPcGVuZWRDb25uZWN0aW9uc1Jlc3VsdCA9IGF3YWl0IGRhdGFiYXNlLnF1ZXJ5KHtcbiAgICB0ZXh0OiBcIlNFTEVDVCBjb3VudCgqKTo6aW50IEZST00gcGdfc3RhdF9hY3Rpdml0eSBXSEVSRSBkYXRuYW1lID0gJDE7XCIsXG4gICAgdmFsdWVzOiBbZGF0YWJhc2VOYW1lXSxcbiAgfSk7XG4gIGNvbnN0IGRhdGFiYXNlT3BlbmVkQ29ubmVjdGlvbnNWYWx1ZSA9XG4gICAgZGF0YWJhc2VPcGVuZWRDb25uZWN0aW9uc1Jlc3VsdC5yb3dzWzBdLmNvdW50O1xuXG4gIHJlc3BvbnNlLnN0YXR1cygyMDApLmpzb24oe1xuICAgIHVwZGF0ZWRfYXQ6IHVwZGF0ZWRBdCxcbiAgICBkZXBlbmRlbmNpZXM6IHtcbiAgICAgIGRhdGFiYXNlOiB7XG4gICAgICAgIHZlcnNpb246IGRhdGFiYXNlVmVyc2lvblZhbHVlLFxuICAgICAgICBtYXhfY29ubmVjdGlvbnM6IHBhcnNlSW50KGRhdGFiYXNlTWF4Q29ubmVjdGlvbnNWYWx1ZSksXG4gICAgICAgIG9wZW5lZF9jb25uZWN0aW9uczogZGF0YWJhc2VPcGVuZWRDb25uZWN0aW9uc1ZhbHVlLFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RhdHVzO1xuIl0sIm5hbWVzIjpbImRhdGFiYXNlIiwic3RhdHVzIiwicmVxdWVzdCIsInJlc3BvbnNlIiwidXBkYXRlZEF0IiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiZGF0YWJhc2VWZXJzaW9uUmVzdWx0IiwicXVlcnkiLCJkYXRhYmFzZVZlcnNpb25WYWx1ZSIsInJvd3MiLCJzZXJ2ZXJfdmVyc2lvbiIsImRhdGFiYXNlTWF4Q29ubmVjdGlvbnNSZXN1bHQiLCJkYXRhYmFzZU1heENvbm5lY3Rpb25zVmFsdWUiLCJtYXhfY29ubmVjdGlvbnMiLCJkYXRhYmFzZU5hbWUiLCJwcm9jZXNzIiwiZW52IiwiUE9TVEdSRVNfREIiLCJkYXRhYmFzZU9wZW5lZENvbm5lY3Rpb25zUmVzdWx0IiwidGV4dCIsInZhbHVlcyIsImRhdGFiYXNlT3BlbmVkQ29ubmVjdGlvbnNWYWx1ZSIsImNvdW50IiwianNvbiIsInVwZGF0ZWRfYXQiLCJkZXBlbmRlbmNpZXMiLCJ2ZXJzaW9uIiwicGFyc2VJbnQiLCJvcGVuZWRfY29ubmVjdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/v1/status/index.js\n");

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