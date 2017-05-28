"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isoMiddleware = isoMiddleware;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _server = require("react-dom/server");

var _reactRouter = require("react-router");

var _routes = require("./routes");

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleRouter(req, res) {
    var html = (0, _server.renderToString)(_react2.default.createElement(
        _reactRouter.StaticRouter,
        {
            location: req.url,
            context: {}
        },
        _react2.default.createElement(_routes2.default, null)
    ));

    res.status(200);
    res.render("index", {
        html: html
    });
    res.end();
}

function isoMiddleware(req, res) {
    handleRouter(req, res);
}