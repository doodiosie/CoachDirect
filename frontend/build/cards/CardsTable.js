"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var data = _ref.data;
    return _react2.default.createElement(
        "table",
        null,
        _react2.default.createElement("thead", null),
        _react2.default.createElement(
            "tbody",
            null,
            data.map(function (card) {
                return _react2.default.createElement(
                    "tr",
                    { key: card.get("id") },
                    _react2.default.createElement(
                        "td",
                        null,
                        card.get("id")
                    ),
                    _react2.default.createElement(
                        "td",
                        null,
                        card.get("title")
                    ),
                    _react2.default.createElement(
                        "td",
                        null,
                        card.get("questionText")
                    ),
                    _react2.default.createElement(
                        "td",
                        null,
                        card.get("answerText")
                    )
                );
            })
        )
    );
};