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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function query(queryObject) {\n    const client = new pg__WEBPACK_IMPORTED_MODULE_0__.Client({\n        host: \"localhost\",\n        port: 5432,\n        user: \"postgres\",\n        databae: \"postgres\",\n        password: \"local_password\"\n    });\n    await client.connect();\n    const result = await client.query(queryObject);\n    await client.end();\n    return result;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    query: query\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9pbmZyYS9kYXRhYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEI7QUFFNUIsZUFBZUMsTUFBTUMsV0FBVyxFQUFFO0lBQ2hDLE1BQU1DLFNBQVMsSUFBSUgsc0NBQU1BLENBQUM7UUFDeEJJLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLFNBQVM7UUFDVEMsVUFBVTtJQUNaO0lBQ0EsTUFBTUwsT0FBT00sT0FBTztJQUNwQixNQUFNQyxTQUFTLE1BQU1QLE9BQU9GLEtBQUssQ0FBQ0M7SUFDbEMsTUFBTUMsT0FBT1EsR0FBRztJQUNoQixPQUFPRDtBQUNUO0FBQ0EsaUVBQWU7SUFDYlQsT0FBT0E7QUFDVCxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbG9uZS10YWJuZXdzLy4vaW5mcmEvZGF0YWJhc2UuanM/ZTM5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQgfSBmcm9tIFwicGdcIjtcblxuYXN5bmMgZnVuY3Rpb24gcXVlcnkocXVlcnlPYmplY3QpIHtcbiAgY29uc3QgY2xpZW50ID0gbmV3IENsaWVudCh7XG4gICAgaG9zdDogXCJsb2NhbGhvc3RcIixcbiAgICBwb3J0OiA1NDMyLFxuICAgIHVzZXI6IFwicG9zdGdyZXNcIixcbiAgICBkYXRhYmFlOiBcInBvc3RncmVzXCIsXG4gICAgcGFzc3dvcmQ6IFwibG9jYWxfcGFzc3dvcmRcIixcbiAgfSk7XG4gIGF3YWl0IGNsaWVudC5jb25uZWN0KCk7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudC5xdWVyeShxdWVyeU9iamVjdCk7XG4gIGF3YWl0IGNsaWVudC5lbmQoKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcXVlcnk6IHF1ZXJ5LFxufTtcbiJdLCJuYW1lcyI6WyJDbGllbnQiLCJxdWVyeSIsInF1ZXJ5T2JqZWN0IiwiY2xpZW50IiwiaG9zdCIsInBvcnQiLCJ1c2VyIiwiZGF0YWJhZSIsInBhc3N3b3JkIiwiY29ubmVjdCIsInJlc3VsdCIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./infra/database.js\n");

/***/ }),

/***/ "(api)/./pages/api/v1/status/index.js":
/*!**************************************!*\
  !*** ./pages/api/v1/status/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _infra_database_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../infra/database.js */ \"(api)/./infra/database.js\");\n\nasync function status(request, response) {\n    const result = await _infra_database_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(\"SELECT 1 + 1 AS sum;\");\n    console.log(result.rows);\n    response.status(200).json({\n        key: \"value\"\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (status);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdjEvc3RhdHVzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXFEO0FBRXJELGVBQWVDLE9BQU9DLE9BQU8sRUFBRUMsUUFBUSxFQUFFO0lBQ3ZDLE1BQU1DLFNBQVMsTUFBTUosZ0VBQWMsQ0FBQztJQUNwQ00sUUFBUUMsR0FBRyxDQUFDSCxPQUFPSSxJQUFJO0lBQ3ZCTCxTQUFTRixNQUFNLENBQUMsS0FBS1EsSUFBSSxDQUFDO1FBQUVDLEtBQUs7SUFBUTtBQUMzQztBQUVBLGlFQUFlVCxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xvbmUtdGFibmV3cy8uL3BhZ2VzL2FwaS92MS9zdGF0dXMvaW5kZXguanM/ODRkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGF0YWJhc2UgZnJvbSBcIi4uLy4uLy4uLy4uL2luZnJhL2RhdGFiYXNlLmpzXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIHN0YXR1cyhyZXF1ZXN0LCByZXNwb25zZSkge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYXRhYmFzZS5xdWVyeShcIlNFTEVDVCAxICsgMSBBUyBzdW07XCIpO1xuICBjb25zb2xlLmxvZyhyZXN1bHQucm93cyk7XG4gIHJlc3BvbnNlLnN0YXR1cygyMDApLmpzb24oeyBrZXk6IFwidmFsdWVcIiB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RhdHVzO1xuIl0sIm5hbWVzIjpbImRhdGFiYXNlIiwic3RhdHVzIiwicmVxdWVzdCIsInJlc3BvbnNlIiwicmVzdWx0IiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwicm93cyIsImpzb24iLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/v1/status/index.js\n");

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