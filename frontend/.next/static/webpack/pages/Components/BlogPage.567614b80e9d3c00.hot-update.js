"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Components/BlogPage",{

/***/ "./pages/Components/BlogPage.jsx":
/*!***************************************!*\
  !*** ./pages/Components/BlogPage.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Post */ \"./pages/Components/Post.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction BlogPage() {\n    _s();\n    const [blogPosts, setBlogPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/getBlogPosts\").then((res)=>{\n            setBlogPosts(res.data);\n            console.log(res.data);\n        }).catch((error)=>{\n            console.error(\"Error fetching blog posts:\", error);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/Components/Submit\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: \"Submit blogs\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Aaradhya Korde\\\\Desktop\\\\BlogGram\\\\BlogGram\\\\frontend\\\\pages\\\\Components\\\\BlogPage.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 41\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Aaradhya Korde\\\\Desktop\\\\BlogGram\\\\BlogGram\\\\frontend\\\\pages\\\\Components\\\\BlogPage.jsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this),\n            blogPosts.map((blogPost)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: blogPost.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Aaradhya Korde\\\\Desktop\\\\BlogGram\\\\BlogGram\\\\frontend\\\\pages\\\\Components\\\\BlogPage.jsx\",\n                            lineNumber: 28,\n                            columnNumber: 3\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: blogPost.content\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Aaradhya Korde\\\\Desktop\\\\BlogGram\\\\BlogGram\\\\frontend\\\\pages\\\\Components\\\\BlogPage.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 3\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Aaradhya Korde\\\\Desktop\\\\BlogGram\\\\BlogGram\\\\frontend\\\\pages\\\\Components\\\\BlogPage.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 3\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Aaradhya Korde\\\\Desktop\\\\BlogGram\\\\BlogGram\\\\frontend\\\\pages\\\\Components\\\\BlogPage.jsx\",\n        lineNumber: 23,\n        columnNumber: 12\n    }, this);\n}\n_s(BlogPage, \"XPnXzGHc6ei3+85WAloLzHNf/BE=\");\n_c = BlogPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogPage);\nvar _c;\n$RefreshReg$(_c, \"BlogPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnRzL0Jsb2dQYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFrRDtBQUNyQjtBQUNIO0FBQ0E7QUFFMUIsU0FBU007O0lBRUwsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFFL0NDLGdEQUFTQSxDQUFDO1FBQ1JFLGlEQUFTLENBQUMscUJBQ1BNLElBQUksQ0FBQyxDQUFDQztZQUNMSCxhQUFhRyxJQUFJQyxJQUFJO1lBQ3JCQyxRQUFRQyxHQUFHLENBQUNILElBQUlDLElBQUk7UUFDdEIsR0FDQ0csS0FBSyxDQUFDLENBQUNDO1lBQ05ILFFBQVFHLEtBQUssQ0FBQyw4QkFBOEJBO1FBQzlDO0lBQ0osR0FBRyxFQUFFO0lBSUgscUJBQU8sOERBQUNDOzswQkFFSiw4REFBQ2Qsa0RBQUlBO2dCQUFDZSxNQUFLOzBCQUFxQiw0RUFBQ0M7OEJBQU87Ozs7Ozs7Ozs7O1lBQ3ZDWixVQUFVYSxHQUFHLENBQUMsQ0FBQ0MseUJBQ3RCLDhEQUFDSjs7c0NBQ0QsOERBQUNLO3NDQUFJRCxTQUFTRSxLQUFLOzs7Ozs7c0NBQ25CLDhEQUFDQztzQ0FBR0gsU0FBU0ksT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3RCO0dBNUJTbkI7S0FBQUE7QUE4QlQsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29tcG9uZW50cy9CbG9nUGFnZS5qc3g/NDAxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFBvc3QgZnJvbSBcIi4vUG9zdFwiO1xyXG5cclxuZnVuY3Rpb24gQmxvZ1BhZ2UoKXtcclxuXHJcbiAgICBjb25zdCBbYmxvZ1Bvc3RzLCBzZXRCbG9nUG9zdHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KFwiL2FwaS9nZXRCbG9nUG9zdHNcIilcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHNldEJsb2dQb3N0cyhyZXMuZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGJsb2cgcG9zdHM6XCIsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG4gIFxyXG5cclxuXHJcbiAgICByZXR1cm4oPGRpdj5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9Db21wb25lbnRzL1N1Ym1pdFwiPjxidXR0b24+U3VibWl0IGJsb2dzPC9idXR0b24+PC9MaW5rPlxyXG4gICAgICAgIHtibG9nUG9zdHMubWFwKChibG9nUG9zdCkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgPGgyPntibG9nUG9zdC50aXRsZX08L2gyPlxyXG4gIDxwPntibG9nUG9zdC5jb250ZW50fTwvcD5cclxuPC9kaXY+XHJcbikpfVxyXG5cclxuICAgIDwvZGl2Pik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2dQYWdlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsImF4aW9zIiwiUG9zdCIsIkJsb2dQYWdlIiwiYmxvZ1Bvc3RzIiwic2V0QmxvZ1Bvc3RzIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsImRpdiIsImhyZWYiLCJidXR0b24iLCJtYXAiLCJibG9nUG9zdCIsImgyIiwidGl0bGUiLCJwIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Components/BlogPage.jsx\n"));

/***/ })

});