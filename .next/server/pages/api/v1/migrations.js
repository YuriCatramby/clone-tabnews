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

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ "node:path":
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:path");

/***/ }),

/***/ "(api)/./infra/database.js":
/*!***************************!*\
  !*** ./infra/database.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function query(queryObject) {\n    let client;\n    try {\n        client = await getNewClient();\n        const result = await client.query(queryObject);\n        return result;\n    } catch (error) {\n        console.error(error);\n        throw error;\n    } finally{\n        await client.end();\n    }\n}\nasync function getNewClient() {\n    const client = new pg__WEBPACK_IMPORTED_MODULE_0__.Client({\n        host: process.env.POSTGRES_HOST,\n        port: process.env.POSTGRES_PORT,\n        user: process.env.POSTGRES_USER,\n        database: process.env.POSTGRES_DB,\n        password: process.env.POSTGRES_PASSWORD,\n        ssl: getSSLValues()\n    });\n    await client.connect();\n    return client;\n}\nconst database = {\n    query,\n    getNewClient\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (database);\nfunction getSSLValues() {\n    if (process.env.POSTGRES_CA) {\n        return {\n            ca: process.env.POSTGRES_CA\n        };\n    }\n    return  false ? 0 : false;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9pbmZyYS9kYXRhYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEI7QUFFNUIsZUFBZUMsTUFBTUMsV0FBVyxFQUFFO0lBQ2hDLElBQUlDO0lBRUosSUFBSTtRQUNGQSxTQUFTLE1BQU1DO1FBQ2YsTUFBTUMsU0FBUyxNQUFNRixPQUFPRixLQUFLLENBQUNDO1FBQ2xDLE9BQU9HO0lBQ1QsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQ0E7UUFDZCxNQUFNQSxNQUFNO0lBQ2QsU0FBVTtRQUNSLE1BQU1ILE9BQU9LLEdBQUc7SUFDbEI7QUFDRjtBQUVBLGVBQWVKLGVBQWU7SUFDNUIsTUFBTUQsU0FBUyxJQUFJSCxzQ0FBTUEsQ0FBQztRQUN4QlMsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxhQUFhO1FBQy9CQyxNQUFNSCxRQUFRQyxHQUFHLENBQUNHLGFBQWE7UUFDL0JDLE1BQU1MLFFBQVFDLEdBQUcsQ0FBQ0ssYUFBYTtRQUMvQkMsVUFBVVAsUUFBUUMsR0FBRyxDQUFDTyxXQUFXO1FBQ2pDQyxVQUFVVCxRQUFRQyxHQUFHLENBQUNTLGlCQUFpQjtRQUN2Q0MsS0FBS0M7SUFDUDtJQUVBLE1BQU1uQixPQUFPb0IsT0FBTztJQUNwQixPQUFPcEI7QUFDVDtBQUVBLE1BQU1jLFdBQVc7SUFDZmhCO0lBQ0FHO0FBQ0Y7QUFFQSxpRUFBZWEsUUFBUUEsRUFBQztBQUV4QixTQUFTSyxlQUFlO0lBQ3RCLElBQUlaLFFBQVFDLEdBQUcsQ0FBQ2EsV0FBVyxFQUFFO1FBQzNCLE9BQU87WUFDTEMsSUFBSWYsUUFBUUMsR0FBRyxDQUFDYSxXQUFXO1FBQzdCO0lBQ0YsQ0FBQztJQUVELE9BQU9kLE1BQXFDLEdBQUcsQ0FBSSxHQUFHLEtBQUs7QUFDN0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbG9uZS10YWJuZXdzLy4vaW5mcmEvZGF0YWJhc2UuanM/ZTM5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQgfSBmcm9tIFwicGdcIjtcblxuYXN5bmMgZnVuY3Rpb24gcXVlcnkocXVlcnlPYmplY3QpIHtcbiAgbGV0IGNsaWVudDtcblxuICB0cnkge1xuICAgIGNsaWVudCA9IGF3YWl0IGdldE5ld0NsaWVudCgpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudC5xdWVyeShxdWVyeU9iamVjdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfSBmaW5hbGx5IHtcbiAgICBhd2FpdCBjbGllbnQuZW5kKCk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0TmV3Q2xpZW50KCkge1xuICBjb25zdCBjbGllbnQgPSBuZXcgQ2xpZW50KHtcbiAgICBob3N0OiBwcm9jZXNzLmVudi5QT1NUR1JFU19IT1NULFxuICAgIHBvcnQ6IHByb2Nlc3MuZW52LlBPU1RHUkVTX1BPUlQsXG4gICAgdXNlcjogcHJvY2Vzcy5lbnYuUE9TVEdSRVNfVVNFUixcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuUE9TVEdSRVNfREIsXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LlBPU1RHUkVTX1BBU1NXT1JELFxuICAgIHNzbDogZ2V0U1NMVmFsdWVzKCksXG4gIH0pO1xuXG4gIGF3YWl0IGNsaWVudC5jb25uZWN0KCk7XG4gIHJldHVybiBjbGllbnQ7XG59XG5cbmNvbnN0IGRhdGFiYXNlID0ge1xuICBxdWVyeSxcbiAgZ2V0TmV3Q2xpZW50LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGF0YWJhc2U7XG5cbmZ1bmN0aW9uIGdldFNTTFZhbHVlcygpIHtcbiAgaWYgKHByb2Nlc3MuZW52LlBPU1RHUkVTX0NBKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNhOiBwcm9jZXNzLmVudi5QT1NUR1JFU19DQSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IHRydWUgOiBmYWxzZTtcbn1cbiJdLCJuYW1lcyI6WyJDbGllbnQiLCJxdWVyeSIsInF1ZXJ5T2JqZWN0IiwiY2xpZW50IiwiZ2V0TmV3Q2xpZW50IiwicmVzdWx0IiwiZXJyb3IiLCJjb25zb2xlIiwiZW5kIiwiaG9zdCIsInByb2Nlc3MiLCJlbnYiLCJQT1NUR1JFU19IT1NUIiwicG9ydCIsIlBPU1RHUkVTX1BPUlQiLCJ1c2VyIiwiUE9TVEdSRVNfVVNFUiIsImRhdGFiYXNlIiwiUE9TVEdSRVNfREIiLCJwYXNzd29yZCIsIlBPU1RHUkVTX1BBU1NXT1JEIiwic3NsIiwiZ2V0U1NMVmFsdWVzIiwiY29ubmVjdCIsIlBPU1RHUkVTX0NBIiwiY2EiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./infra/database.js\n");

/***/ }),

/***/ "(api)/./pages/api/v1/migrations/index.js":
/*!******************************************!*\
  !*** ./pages/api/v1/migrations/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ migrations)\n/* harmony export */ });\n/* harmony import */ var node_pg_migrate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-pg-migrate */ \"node-pg-migrate\");\n/* harmony import */ var node_pg_migrate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_pg_migrate__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node:path */ \"node:path\");\n/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var infra_database_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! infra/database.js */ \"(api)/./infra/database.js\");\n\n\n\nasync function migrations(request, response) {\n    const allowedMethods = [\n        \"GET\",\n        \"POST\"\n    ];\n    if (!allowedMethods.includes(request.method)) {\n        return response.status(405).json({\n            error: `Method \"${request.method}\" not allowed`\n        });\n    }\n    let dbClient;\n    try {\n        dbClient = await infra_database_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getNewClient();\n        const defaultMigrationsOptions = {\n            dbClient: dbClient,\n            dryRun: true,\n            dir: (0,node_path__WEBPACK_IMPORTED_MODULE_1__.join)(\"infra\", \"migrations\"),\n            direction: \"up\",\n            verbose: true,\n            migrationsTable: \"pgmigrations\"\n        };\n        if (request.method === \"GET\") {\n            const pendingMigrations = await node_pg_migrate__WEBPACK_IMPORTED_MODULE_0___default()(defaultMigrationsOptions);\n            return response.status(200).json(pendingMigrations);\n        }\n        if (request.method === \"POST\") {\n            const migratedMigrations = await node_pg_migrate__WEBPACK_IMPORTED_MODULE_0___default()({\n                ...defaultMigrationsOptions,\n                dryRun: false\n            });\n            if (migratedMigrations.length > 0) {\n                return response.status(201).json(migratedMigrations);\n            }\n            return response.status(200).json(migratedMigrations);\n        }\n    } catch (error) {\n        console.error(error);\n        throw error;\n    } finally{\n        await dbClient.end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdjEvbWlncmF0aW9ucy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBOEM7QUFDYjtBQUNRO0FBRTFCLGVBQWVHLFdBQVdDLE9BQU8sRUFBRUMsUUFBUSxFQUFFO0lBQzFELE1BQU1DLGlCQUFpQjtRQUFDO1FBQU87S0FBTztJQUN0QyxJQUFJLENBQUNBLGVBQWVDLFFBQVEsQ0FBQ0gsUUFBUUksTUFBTSxHQUFHO1FBQzVDLE9BQU9ILFNBQVNJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFDL0JDLE9BQU8sQ0FBQyxRQUFRLEVBQUVQLFFBQVFJLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDakQ7SUFDRixDQUFDO0lBRUQsSUFBSUk7SUFFSixJQUFJO1FBQ0ZBLFdBQVcsTUFBTVYsc0VBQXFCO1FBRXRDLE1BQU1ZLDJCQUEyQjtZQUMvQkYsVUFBVUE7WUFDVkcsUUFBUSxJQUFJO1lBQ1pDLEtBQUtmLCtDQUFJQSxDQUFDLFNBQVM7WUFDbkJnQixXQUFXO1lBQ1hDLFNBQVMsSUFBSTtZQUNiQyxpQkFBaUI7UUFDbkI7UUFFQSxJQUFJZixRQUFRSSxNQUFNLEtBQUssT0FBTztZQUM1QixNQUFNWSxvQkFBb0IsTUFBTXBCLHNEQUFlQSxDQUFDYztZQUNoRCxPQUFPVCxTQUFTSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDVTtRQUNuQyxDQUFDO1FBRUQsSUFBSWhCLFFBQVFJLE1BQU0sS0FBSyxRQUFRO1lBQzdCLE1BQU1hLHFCQUFxQixNQUFNckIsc0RBQWVBLENBQUM7Z0JBQy9DLEdBQUdjLHdCQUF3QjtnQkFDM0JDLFFBQVEsS0FBSztZQUNmO1lBRUEsSUFBSU0sbUJBQW1CQyxNQUFNLEdBQUcsR0FBRztnQkFDakMsT0FBT2pCLFNBQVNJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNXO1lBQ25DLENBQUM7WUFFRCxPQUFPaEIsU0FBU0ksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ1c7UUFDbkMsQ0FBQztJQUNILEVBQUUsT0FBT1YsT0FBTztRQUNkWSxRQUFRWixLQUFLLENBQUNBO1FBQ2QsTUFBTUEsTUFBTTtJQUNkLFNBQVU7UUFDUixNQUFNQyxTQUFTWSxHQUFHO0lBQ3BCO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Nsb25lLXRhYm5ld3MvLi9wYWdlcy9hcGkvdjEvbWlncmF0aW9ucy9pbmRleC5qcz9jMDlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtaWdyYXRpb25SdW5uZXIgZnJvbSBcIm5vZGUtcGctbWlncmF0ZVwiO1xuaW1wb3J0IHsgam9pbiB9IGZyb20gXCJub2RlOnBhdGhcIjtcbmltcG9ydCBkYXRhYmFzZSBmcm9tIFwiaW5mcmEvZGF0YWJhc2UuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gbWlncmF0aW9ucyhyZXF1ZXN0LCByZXNwb25zZSkge1xuICBjb25zdCBhbGxvd2VkTWV0aG9kcyA9IFtcIkdFVFwiLCBcIlBPU1RcIl07XG4gIGlmICghYWxsb3dlZE1ldGhvZHMuaW5jbHVkZXMocmVxdWVzdC5tZXRob2QpKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cyg0MDUpLmpzb24oe1xuICAgICAgZXJyb3I6IGBNZXRob2QgXCIke3JlcXVlc3QubWV0aG9kfVwiIG5vdCBhbGxvd2VkYCxcbiAgICB9KTtcbiAgfVxuXG4gIGxldCBkYkNsaWVudDtcblxuICB0cnkge1xuICAgIGRiQ2xpZW50ID0gYXdhaXQgZGF0YWJhc2UuZ2V0TmV3Q2xpZW50KCk7XG5cbiAgICBjb25zdCBkZWZhdWx0TWlncmF0aW9uc09wdGlvbnMgPSB7XG4gICAgICBkYkNsaWVudDogZGJDbGllbnQsXG4gICAgICBkcnlSdW46IHRydWUsXG4gICAgICBkaXI6IGpvaW4oXCJpbmZyYVwiLCBcIm1pZ3JhdGlvbnNcIiksXG4gICAgICBkaXJlY3Rpb246IFwidXBcIixcbiAgICAgIHZlcmJvc2U6IHRydWUsXG4gICAgICBtaWdyYXRpb25zVGFibGU6IFwicGdtaWdyYXRpb25zXCIsXG4gICAgfTtcblxuICAgIGlmIChyZXF1ZXN0Lm1ldGhvZCA9PT0gXCJHRVRcIikge1xuICAgICAgY29uc3QgcGVuZGluZ01pZ3JhdGlvbnMgPSBhd2FpdCBtaWdyYXRpb25SdW5uZXIoZGVmYXVsdE1pZ3JhdGlvbnNPcHRpb25zKTtcbiAgICAgIHJldHVybiByZXNwb25zZS5zdGF0dXMoMjAwKS5qc29uKHBlbmRpbmdNaWdyYXRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAocmVxdWVzdC5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgICBjb25zdCBtaWdyYXRlZE1pZ3JhdGlvbnMgPSBhd2FpdCBtaWdyYXRpb25SdW5uZXIoe1xuICAgICAgICAuLi5kZWZhdWx0TWlncmF0aW9uc09wdGlvbnMsXG4gICAgICAgIGRyeVJ1bjogZmFsc2UsXG4gICAgICB9KTtcblxuICAgICAgaWYgKG1pZ3JhdGVkTWlncmF0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5zdGF0dXMoMjAxKS5qc29uKG1pZ3JhdGVkTWlncmF0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXNwb25zZS5zdGF0dXMoMjAwKS5qc29uKG1pZ3JhdGVkTWlncmF0aW9ucyk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9IGZpbmFsbHkge1xuICAgIGF3YWl0IGRiQ2xpZW50LmVuZCgpO1xuICB9XG59XG4iXSwibmFtZXMiOlsibWlncmF0aW9uUnVubmVyIiwiam9pbiIsImRhdGFiYXNlIiwibWlncmF0aW9ucyIsInJlcXVlc3QiLCJyZXNwb25zZSIsImFsbG93ZWRNZXRob2RzIiwiaW5jbHVkZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJkYkNsaWVudCIsImdldE5ld0NsaWVudCIsImRlZmF1bHRNaWdyYXRpb25zT3B0aW9ucyIsImRyeVJ1biIsImRpciIsImRpcmVjdGlvbiIsInZlcmJvc2UiLCJtaWdyYXRpb25zVGFibGUiLCJwZW5kaW5nTWlncmF0aW9ucyIsIm1pZ3JhdGVkTWlncmF0aW9ucyIsImxlbmd0aCIsImNvbnNvbGUiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/v1/migrations/index.js\n");

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