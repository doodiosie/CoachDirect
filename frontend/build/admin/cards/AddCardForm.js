"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(["\nmutation addCard (\n    $record: CardInput!\n) {\n    addCard (\n        record: $record\n    ) {\n        id\n        title\n        questionText\n        answerText\n    }\n}\n"], ["\nmutation addCard (\n    $record: CardInput!\n) {\n    addCard (\n        record: $record\n    ) {\n        id\n        title\n        questionText\n        answerText\n    }\n}\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require("react-apollo");

var _graphqlTag = require("graphql-tag");

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _addFormState = require("../addFormState");

var _addFormState2 = _interopRequireDefault(_addFormState);

var _AddCardFormTemplate = require("./AddCardFormTemplate");

var _AddCardFormTemplate2 = _interopRequireDefault(_AddCardFormTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Form = (0, _addFormState2.default)(_AddCardFormTemplate2.default);

var addCardMutation = (0, _graphqlTag2.default)(_templateObject);

exports.default = (0, _reactApollo.graphql)(addCardMutation)(Form);