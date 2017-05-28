"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _head = require("next/head");

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement(
        _head2.default,
        null,
        _react2.default.createElement(
            "title",
            null,
            "Revision"
        ),
        _react2.default.createElement("link", { rel: "stylesheet", href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" }),
        _react2.default.createElement("link", { rel: "stylesheet", href: "/static/react-datepicker.min.css" }),
        _react2.default.createElement("link", { rel: "stylesheet", href: "/static/index.min.css" })
    );
};