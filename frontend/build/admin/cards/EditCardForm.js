"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require("react-apollo");

var _graphqlTag = require("graphql-tag");

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _EditCardFormTemplate = require("./EditCardFormTemplate");

var _EditCardFormTemplate2 = _interopRequireDefault(_EditCardFormTemplate);

var _editFormState = require("../editFormState");

var _editFormState2 = _interopRequireDefault(_editFormState);

var _graphqlHelpers = require("../graphqlHelpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StateForm = (0, _editFormState2.default)(_EditCardFormTemplate2.default);

var Form = function Form(_ref) {
    var id = _ref.id,
        data = _ref.data,
        mutate = _ref.mutate;
    return data.loading ? _react2.default.createElement(
        "div",
        null,
        "Loading"
    ) : _react2.default.createElement(StateForm, { id: id, data: data.card, mutate: mutate });
};

var editCardMutation = (0, _graphqlHelpers.editMutation)({
    name: "editCard",
    type: "CardInput!",
    fields: ["id", "title", "questionText", "answerText"]
});

var getCardQuery = (0, _graphqlHelpers.singleQuery)({
    name: "card",
    fields: ["id", "title", "questionText", "answerText"]
});

exports.default = (0, _reactApollo.compose)((0, _reactApollo.graphql)(editCardMutation), (0, _reactApollo.graphql)(getCardQuery))(Form);