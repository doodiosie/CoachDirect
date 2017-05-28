"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactRouterDom = require("react-router-dom");

var _MainTemplate = require("./templates/MainTemplate");

var _MainTemplate2 = _interopRequireDefault(_MainTemplate);

var _CardsTable = require("./admin/cards/CardsTable");

var _CardsTable2 = _interopRequireDefault(_CardsTable);

var _routes = require("./routes");

var _routes2 = _interopRequireDefault(_routes);

var _Provider = require("./components/Provider");

var _Provider2 = _interopRequireDefault(_Provider);

require("./css/react-datepicker.min.css");

require("./css/index.sass");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(_routes2.default, null)
), document.getElementById("react-target"));