"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _apolloClient = require("apollo-client");

var _apolloClient2 = _interopRequireDefault(_apolloClient);

var _reactApollo = require("react-apollo");

var _config = require("../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var client = new _apolloClient2.default({
    networkInterface: (0, _apolloClient.createNetworkInterface)({
        uri: _config.GRAPHQL_API
    })
});

exports.default = function (props) {
    return _react2.default.createElement(
        _reactApollo.ApolloProvider,
        { client: client },
        props.children
    );
};