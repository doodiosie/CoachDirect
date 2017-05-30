"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Pages = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _recompose = require("recompose");

var _reactBootstrap = require("react-bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pages = exports.Pages = (0, _recompose.compose)((0, _recompose.withHandlers)({
    nextPage: function nextPage(_ref) {
        var page = _ref.page,
            setPage = _ref.setPage;
        return function () {
            return setPage(page + 1);
        };
    },
    prevPage: function prevPage(_ref2) {
        var page = _ref2.page,
            setPage = _ref2.setPage;
        return function () {
            return setPage(page - 1);
        };
    }
}))(function (_ref3) {
    var prevPage = _ref3.prevPage,
        nextPage = _ref3.nextPage,
        page = _ref3.page;
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            _reactBootstrap.Button,
            { onClick: prevPage },
            "Prev"
        ),
        _react2.default.createElement(
            _reactBootstrap.Button,
            { onClick: nextPage },
            "Next"
        )
    );
});