/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Components/Submit",{

/***/ "./pages/Components/Submit.jsx":
/*!*************************************!*\
  !*** ./pages/Components/Submit.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Submit(props) {\n    _s();\n    const [blogPost, setBlogPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: \"\",\n        content: \"\"\n    });\n    function handleBlogChange(event) {\n        const { name, value } = event.target;\n        setBlogPost((prevBlogPost)=>{\n            return {\n                ...prevBlogPost,\n                [name]: value\n            };\n        });\n    }\n    function submitBlogPost(event) {\n        event.preventDefault();\n        // props.addBlogPost(blogPost);\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:3001/api/saveBlogPost\", blogPost).then((res)=>{\n            console.log(\"Data saved successfully:\", res.data);\n            setBlogPost({\n                title: \"\",\n                content: \"\"\n            });\n        }).catch((error)=>{\n            console.error(\"Error saving data:\", error);\n        });\n        ;\n    }\n    ;\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            action: \"\",\n            onSubmit: submitBlogPost,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    name: \"title\",\n                    onChange: handleBlogChange,\n                    value: blogPost.institute,\n                    placeholder: \"Title\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Aaradhya Korde\\\\Desktop\\\\BlogGram\\\\BlogGram\\\\frontend\\\\pages\\\\Components\\\\Submit.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    name: \"content\",\n                    onChange: handleBlogChange,\n                    value: blogPost.university,\n                    placeholder: \"Content\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Aaradhya Korde\\\\Desktop\\\\BlogGram\\\\BlogGram\\\\frontend\\\\pages\\\\Components\\\\Submit.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    onClick: ()=>router.push(\"/about\"),\n                    children: \"Add\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Aaradhya Korde\\\\Desktop\\\\BlogGram\\\\BlogGram\\\\frontend\\\\pages\\\\Components\\\\Submit.jsx\",\n                    lineNumber: 51,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Aaradhya Korde\\\\Desktop\\\\BlogGram\\\\BlogGram\\\\frontend\\\\pages\\\\Components\\\\Submit.jsx\",\n            lineNumber: 48,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Aaradhya Korde\\\\Desktop\\\\BlogGram\\\\BlogGram\\\\frontend\\\\pages\\\\Components\\\\Submit.jsx\",\n        lineNumber: 47,\n        columnNumber: 12\n    }, this);\n}\n_s(Submit, \"5C88EsbhDkZgRmnWPRL77bQWGS8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Submit;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Submit);\nvar _c;\n$RefreshReg$(_c, \"Submit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnRzL1N1Ym1pdC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0Q7QUFDVjtBQUNIO0FBRTFCLFNBQVNLLE9BQU9DLEtBQUs7O0lBR2pCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQztRQUNyQ1EsT0FBTztRQUNQQyxTQUFTO0lBQ2I7SUFFQSxTQUFTQyxpQkFBaUJDLEtBQUs7UUFDM0IsTUFBTSxFQUFDQyxJQUFJLEVBQUVDLEtBQUssRUFBQyxHQUFHRixNQUFNRyxNQUFNO1FBRWxDUCxZQUFZUSxDQUFBQTtZQUNSLE9BQU87Z0JBQ0gsR0FBR0EsWUFBWTtnQkFDZixDQUFDSCxLQUFLLEVBQUVDO1lBQ1o7UUFDSjtJQUNKO0lBR0EsU0FBU0csZUFBZUwsS0FBSztRQUV6QkEsTUFBTU0sY0FBYztRQUVwQiwrQkFBK0I7UUFFL0JkLGtEQUFVLENBQUMsMENBQXlDRyxVQUMvQ2EsSUFBSSxDQUFDLENBQUNDO1lBQ0hDLFFBQVFDLEdBQUcsQ0FBQyw0QkFBNEJGLElBQUlHLElBQUk7WUFDaERoQixZQUFZO2dCQUNaQyxPQUFPO2dCQUNQQyxTQUFTO1lBQ2I7UUFDSixHQUNDZSxLQUFLLENBQUMsQ0FBQ0M7WUFDSkosUUFBUUksS0FBSyxDQUFDLHNCQUFzQkE7UUFDdEM7O0lBQ047O0lBRUEsTUFBTUMsU0FBU3pCLHNEQUFTQTtJQUV4QixxQkFBTyw4REFBQzBCO2tCQUNKLDRFQUFDQztZQUFLQyxRQUFPO1lBQUdDLFVBQVVkOzs4QkFDdEIsOERBQUNlO29CQUFNbkIsTUFBSztvQkFBUW9CLFVBQVV0QjtvQkFBa0JHLE9BQU9QLFNBQVMyQixTQUFTO29CQUFFQyxhQUFZOzs7Ozs7OEJBQ3ZGLDhEQUFDSDtvQkFBTW5CLE1BQUs7b0JBQVVvQixVQUFVdEI7b0JBQWtCRyxPQUFPUCxTQUFTNkIsVUFBVTtvQkFBRUQsYUFBWTs7Ozs7OzhCQUMxRiw4REFBQ0U7b0JBQU9DLE1BQUs7b0JBQVNDLFNBQVMsSUFBTVosT0FBT2EsSUFBSSxDQUFDOzhCQUFXOzs7Ozs7Ozs7Ozs7Ozs7OztBQU14RTtHQW5EU25DOztRQXVDVUgsa0RBQVNBOzs7S0F2Q25CRztBQXFEVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Db21wb25lbnRzL1N1Ym1pdC5qc3g/NzQxZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmZ1bmN0aW9uIFN1Ym1pdChwcm9wcyl7XHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBbYmxvZ1Bvc3QsIHNldEJsb2dQb3N0XSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB0aXRsZTogXCJcIixcclxuICAgICAgICBjb250ZW50OiBcIlwiXHJcbiAgICB9KVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUJsb2dDaGFuZ2UoZXZlbnQpe1xyXG4gICAgICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgIHNldEJsb2dQb3N0KHByZXZCbG9nUG9zdCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5wcmV2QmxvZ1Bvc3QsXHJcbiAgICAgICAgICAgICAgICBbbmFtZV06IHZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgZnVuY3Rpb24gc3VibWl0QmxvZ1Bvc3QoZXZlbnQpe1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAvLyBwcm9wcy5hZGRCbG9nUG9zdChibG9nUG9zdCk7XHJcblxyXG4gICAgICAgIGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3NhdmVCbG9nUG9zdFwiLGJsb2dQb3N0KVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGF0YSBzYXZlZCBzdWNjZXNzZnVsbHk6JywgcmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgc2V0QmxvZ1Bvc3Qoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzYXZpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgICB9KTs7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgcmV0dXJuKDxkaXY+XHJcbiAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgb25TdWJtaXQ9e3N1Ym1pdEJsb2dQb3N0fT5cclxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJ0aXRsZVwiIG9uQ2hhbmdlPXtoYW5kbGVCbG9nQ2hhbmdlfSB2YWx1ZT17YmxvZ1Bvc3QuaW5zdGl0dXRlfSBwbGFjZWhvbGRlcj1cIlRpdGxlXCIgLz5cclxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJjb250ZW50XCIgb25DaGFuZ2U9e2hhbmRsZUJsb2dDaGFuZ2V9IHZhbHVlPXtibG9nUG9zdC51bml2ZXJzaXR5fSBwbGFjZWhvbGRlcj1cIkNvbnRlbnRcIiAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL2Fib3V0Jyl9PkFkZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7LyogPExpbmsgaHJlZj1cIi9Db21wb25lbnRzL0Jsb2dQYWdlXCI+PGJ1dHRvbiAgdHlwZT1cInN1Ym1pdFwiID5BZGQ8L2J1dHRvbj48L0xpbms+ICovfVxyXG4gICAgICAgICAgICB7LyogPGJ1dHRvbiAgdHlwZT1cInN1Ym1pdFwiID5BZGQ8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj4pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdWJtaXQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwiYXhpb3MiLCJTdWJtaXQiLCJwcm9wcyIsImJsb2dQb3N0Iiwic2V0QmxvZ1Bvc3QiLCJ0aXRsZSIsImNvbnRlbnQiLCJoYW5kbGVCbG9nQ2hhbmdlIiwiZXZlbnQiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2QmxvZ1Bvc3QiLCJzdWJtaXRCbG9nUG9zdCIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJyb3V0ZXIiLCJkaXYiLCJmb3JtIiwiYWN0aW9uIiwib25TdWJtaXQiLCJpbnB1dCIsIm9uQ2hhbmdlIiwiaW5zdGl0dXRlIiwicGxhY2Vob2xkZXIiLCJ1bml2ZXJzaXR5IiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Components/Submit.jsx\n"));

/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/client/router */ \"./node_modules/next/dist/client/router.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9yb3V0ZXIuanMiLCJtYXBwaW5ncyI6IkFBQUEsNkdBQWdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L3JvdXRlci5qcz8xYmI2Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9yb3V0ZXInKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/router.js\n"));

/***/ })

});