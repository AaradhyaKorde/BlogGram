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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Post */ \"./pages/Components/Post.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction BlogPage(props) {\n    _s();\n    const [blogPosts, setBlogPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    function addBlogPost(newBlogPost) {\n        setBlogPosts((prevBlogPosts)=>[\n                ...prevBlogPosts,\n                newBlogPost\n            ]);\n    }\n    // useEffect(() => {\n    axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/getBlogPosts\").then((res)=>{\n        setBlogPosts(res.data);\n        console.log(res.data); // Add this line to debug\n    }).catch((error)=>{\n        console.error(\"Error fetching blog posts:\", error);\n    });\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/Components/Submit\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: \"Submit blogs\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Aaradhya Korde\\\\Desktop\\\\BlogGram\\\\BlogGram\\\\frontend\\\\pages\\\\Components\\\\BlogPage.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 41\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Aaradhya Korde\\\\Desktop\\\\BlogGram\\\\BlogGram\\\\frontend\\\\pages\\\\Components\\\\BlogPage.jsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this),\n            blogPosts.map((blogPost)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Post__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    title: blogPost.title,\n                    content: blogPost.content\n                }, blogPost._id, false, {\n                    fileName: \"C:\\\\Users\\\\Aaradhya Korde\\\\Desktop\\\\BlogGram\\\\BlogGram\\\\frontend\\\\pages\\\\Components\\\\BlogPage.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 3\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Aaradhya Korde\\\\Desktop\\\\BlogGram\\\\BlogGram\\\\frontend\\\\pages\\\\Components\\\\BlogPage.jsx\",\n        lineNumber: 31,\n        columnNumber: 12\n    }, this);\n}\n_s(BlogPage, \"z7ToCres21ltw49IudEY/MDWIVo=\");\n_c = BlogPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogPage);\nvar _c;\n$RefreshReg$(_c, \"BlogPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnRzL0Jsb2dQYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFrRDtBQUNyQjtBQUNIO0FBQ0E7QUFFMUIsU0FBU00sU0FBU0MsS0FBSzs7SUFFbkIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFFL0MsU0FBU1MsWUFBWUMsV0FBVztRQUM5QkYsYUFBYSxDQUFDRyxnQkFBa0I7bUJBQzNCQTtnQkFDSEQ7YUFDRDtJQUNIO0lBRUEsb0JBQW9CO0lBQ2xCUCxpREFDTSxDQUFDLHFCQUNKVSxJQUFJLENBQUMsQ0FBQ0M7UUFDTE4sYUFBYU0sSUFBSUMsSUFBSTtRQUNyQkMsUUFBUUMsR0FBRyxDQUFDSCxJQUFJQyxJQUFJLEdBQUcseUJBQXlCO0lBQ2xELEdBQ0NHLEtBQUssQ0FBQyxDQUFDQztRQUNOSCxRQUFRRyxLQUFLLENBQUMsOEJBQThCQTtJQUM5QztJQUNKLFVBQVU7SUFJUixxQkFBTyw4REFBQ0M7OzBCQUVKLDhEQUFDbEIsa0RBQUlBO2dCQUFDbUIsTUFBSzswQkFBcUIsNEVBQUNDOzhCQUFPOzs7Ozs7Ozs7OztZQUN2Q2YsVUFBVWdCLEdBQUcsQ0FBQyxDQUFDQyx5QkFDdEIsOERBQUNwQiw2Q0FBSUE7b0JBRUhxQixPQUFPRCxTQUFTQyxLQUFLO29CQUNyQkMsU0FBU0YsU0FBU0UsT0FBTzttQkFGcEJGLFNBQVNHLEdBQUc7Ozs7Ozs7Ozs7O0FBT3JCO0dBckNTdEI7S0FBQUE7QUF1Q1QsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29tcG9uZW50cy9CbG9nUGFnZS5qc3g/NDAxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFBvc3QgZnJvbSBcIi4vUG9zdFwiO1xyXG5cclxuZnVuY3Rpb24gQmxvZ1BhZ2UocHJvcHMpe1xyXG5cclxuICAgIGNvbnN0IFtibG9nUG9zdHMsIHNldEJsb2dQb3N0c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGFkZEJsb2dQb3N0KG5ld0Jsb2dQb3N0KSB7XHJcbiAgICBzZXRCbG9nUG9zdHMoKHByZXZCbG9nUG9zdHMpID0+IFtcclxuICAgICAgLi4ucHJldkJsb2dQb3N0cyxcclxuICAgICAgbmV3QmxvZ1Bvc3QsXHJcbiAgICBdKTtcclxuICB9XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KFwiL2FwaS9nZXRCbG9nUG9zdHNcIilcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHNldEJsb2dQb3N0cyhyZXMuZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpOyAvLyBBZGQgdGhpcyBsaW5lIHRvIGRlYnVnXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgYmxvZyBwb3N0czpcIiwgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICAvLyB9LCBbXSk7XHJcbiAgXHJcblxyXG5cclxuICAgIHJldHVybig8ZGl2PlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICA8TGluayBocmVmPVwiL0NvbXBvbmVudHMvU3VibWl0XCI+PGJ1dHRvbj5TdWJtaXQgYmxvZ3M8L2J1dHRvbj48L0xpbms+XHJcbiAgICAgICAge2Jsb2dQb3N0cy5tYXAoKGJsb2dQb3N0KSA9PiAoXHJcbiAgPFBvc3RcclxuICAgIGtleT17YmxvZ1Bvc3QuX2lkfVxyXG4gICAgdGl0bGU9e2Jsb2dQb3N0LnRpdGxlfVxyXG4gICAgY29udGVudD17YmxvZ1Bvc3QuY29udGVudH1cclxuICAvPlxyXG4pKX1cclxuXHJcbiAgICA8L2Rpdj4pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nUGFnZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJheGlvcyIsIlBvc3QiLCJCbG9nUGFnZSIsInByb3BzIiwiYmxvZ1Bvc3RzIiwic2V0QmxvZ1Bvc3RzIiwiYWRkQmxvZ1Bvc3QiLCJuZXdCbG9nUG9zdCIsInByZXZCbG9nUG9zdHMiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwiZGl2IiwiaHJlZiIsImJ1dHRvbiIsIm1hcCIsImJsb2dQb3N0IiwidGl0bGUiLCJjb250ZW50IiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Components/BlogPage.jsx\n"));

/***/ })

});