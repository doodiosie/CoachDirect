"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _immutable = require("immutable");

var _router = require("next/router");

var _router2 = _interopRequireDefault(_router);

var _FormComponents = require("../FormComponents");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var data = _ref.data,
        onChange = _ref.onChange,
        _onSubmit = _ref.onSubmit;
    return _react2.default.createElement(
        "form",
        { onSubmit: function onSubmit(event) {
                event.preventDefault();
                var filtered = data.filter(function (value, key) {
                    return _immutable.List.of("title", "questionText", "answerText").includes(key);
                });
                _onSubmit(filtered).then(function () {
                    _router2.default.push("/admin/cards");
                });
            } },
        _react2.default.createElement(
            _FormComponents.FormGroup,
            null,
            _react2.default.createElement(
                "label",
                null,
                "ID"
            ),
            _react2.default.createElement(_FormComponents.TextInput, { name: "id", data: data, onChange: onChange })
        ),
        _react2.default.createElement(
            _FormComponents.FormGroup,
            null,
            _react2.default.createElement(
                "label",
                null,
                "Title"
            ),
            _react2.default.createElement(_FormComponents.TextInput, { name: "title", data: data, onChange: onChange })
        ),
        _react2.default.createElement(
            _FormComponents.FormGroup,
            null,
            _react2.default.createElement(
                "label",
                null,
                "Question Text"
            ),
            _react2.default.createElement(_FormComponents.TextInput, { name: "questionText", data: data, onChange: onChange })
        ),
        _react2.default.createElement(
            _FormComponents.FormGroup,
            null,
            _react2.default.createElement(
                "label",
                null,
                "Answer Text"
            ),
            _react2.default.createElement(_FormComponents.TextInput, { name: "answerText", data: data, onChange: onChange })
        ),
        _react2.default.createElement(
            _FormComponents.FormGroup,
            null,
            _react2.default.createElement(
                _FormComponents.SubmitButton,
                null,
                "Save Changes"
            )
        )
    );
};