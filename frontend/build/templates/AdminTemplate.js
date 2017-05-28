"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

var _Bookings = require("../admin/bookings/Bookings");

var _Bookings2 = _interopRequireDefault(_Bookings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var url = _ref.match.url;
    return _react2.default.createElement(
        "div",
        { className: "container" },
        _react2.default.createElement(_reactRouterDom.Route, { path: url + "/bookings", component: _Bookings2.default })
    );
};