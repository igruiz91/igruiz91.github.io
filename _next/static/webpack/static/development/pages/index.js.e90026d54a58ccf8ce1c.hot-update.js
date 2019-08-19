webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Noticia.js":
/*!*******************************!*\
  !*** ./components/Noticia.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Israel\\Documents\\Studio\\React\\React+Hooks+Redux\\portalbitcoin\\components\\Noticia.js";


var Noticia = function Noticia(_ref) {
  var noticia = _ref.noticia;
  var url = noticia.url,
      urlToImage = noticia.urlToImage,
      title = noticia.title,
      description = noticia.description,
      source = noticia.source,
      author = noticia.author,
      publishedAt = noticia.publishedAt;
  var imagen = '';

  if (urlToImage !== '') {
    imagen = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: urlToImage,
      alt: title,
      className: "card-img-top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    });
  } else {
    imagen = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "text-center my-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "Imagen no encontrada");
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6 col-12 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, imagen)));
};

/* harmony default export */ __webpack_exports__["default"] = (Noticia);

/***/ })

})
//# sourceMappingURL=index.js.e90026d54a58ccf8ce1c.hot-update.js.map