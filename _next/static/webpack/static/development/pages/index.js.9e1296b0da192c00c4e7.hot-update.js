webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Eventos.js":
/*!*******************************!*\
  !*** ./components/Eventos.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MasterPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MasterPage */ "./components/MasterPage.js");
/* harmony import */ var _components_Precio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Precio */ "./components/Precio.js");
/* harmony import */ var _components_Noticias__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Noticias */ "./components/Noticias.js");
/* harmony import */ var _components_Eventos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Eventos */ "./components/Eventos.js");
/* harmony import */ var _components_Eventos__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_Eventos__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\Israel\\Documents\\Studio\\React\\React+Hooks+Redux\\portalbitcoin\\pages\\index.js";







var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MasterPage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Precio del Bitcoin"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Precio__WEBPACK_IMPORTED_MODULE_4__["default"], {
    precio: props.precioBitcoin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-md-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Noticias sobre Bitcoin"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Noticias__WEBPACK_IMPORTED_MODULE_5__["default"], {
    noticias: props.noticias,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Proximos Eventos del Bitcoin"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Eventos__WEBPACK_IMPORTED_MODULE_6___default.a, {
    eventos: props.eventos,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }))));
};

Index.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var precio, noticias, eventos, resPrecio, resNoticias, resEventos;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default()('https://api.coinmarketcap.com/v2/ticker/1/');

        case 2:
          precio = _context.sent;
          _context.next = 5;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default()("https://newsapi.org/v2/everything?q=bitcoin&from=2019-07-19&sortBy=publishedAt&apiKey=3a1bd87351294b80b45d83f555496077&language=es");

        case 5:
          noticias = _context.sent;
          _context.next = 8;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default()('https://www.eventbriteapi.com/v3/events/search/?q=bitcoin&sort_by=date&location.address=cuba&token=PCNIXAIQJXN5TZSKCG4A');

        case 8:
          eventos = _context.sent;
          _context.next = 11;
          return precio.json();

        case 11:
          resPrecio = _context.sent;
          _context.next = 14;
          return noticias.json();

        case 14:
          resNoticias = _context.sent;
          _context.next = 17;
          return eventos.json();

        case 17:
          resEventos = _context.sent;
          return _context.abrupt("return", {
            precioBitcoin: resPrecio.data.quotes.USD,
            noticias: resNoticias.articles,
            eventos: resEventos.events
          });

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.9e1296b0da192c00c4e7.hot-update.js.map