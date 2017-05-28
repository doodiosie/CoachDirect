"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

var _AdminTemplate = require("./templates/AdminTemplate");

var _AdminTemplate2 = _interopRequireDefault(_AdminTemplate);

var _Provider = require("./components/Provider");

var _Provider2 = _interopRequireDefault(_Provider);

var _BookingsTable = require("./admin/bookings/BookingsTable");

var _BookingsTable2 = _interopRequireDefault(_BookingsTable);

var _CardsTable = require("./admin/cards/CardsTable");

var _CardsTable2 = _interopRequireDefault(_CardsTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
    return _react2.default.createElement(
        _Provider2.default,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { path: "/admin", component: _AdminTemplate2.default })
    );
};