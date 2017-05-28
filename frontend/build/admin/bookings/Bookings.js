"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

var _BookingsTable = require("./BookingsTable");

var _BookingsTable2 = _interopRequireDefault(_BookingsTable);

var _AddBookingForm = require("./AddBookingForm");

var _AddBookingForm2 = _interopRequireDefault(_AddBookingForm);

var _EditBookingForm = require("./EditBookingForm");

var _EditBookingForm2 = _interopRequireDefault(_EditBookingForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var url = _ref.match.url;
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: url + "/", component: _BookingsTable2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: url + "/add", component: _AddBookingForm2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: url + "/edit/:id", component: _EditBookingForm2.default })
    );
};