"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

var _reactBootstrap = require("react-bootstrap");

var _validate = require("./validate");

var _validate2 = _interopRequireDefault(_validate);

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
                (0, _validate2.default)(data) ? _onSubmit(data).then(function () {
                    alert("Successfully Added Booking");
                }) : alert("Please fill out all fields correctly");
            } },
        _react2.default.createElement(
            _FormComponents.FormGroup,
            null,
            _react2.default.createElement(
                "label",
                null,
                "First Name"
            ),
            _react2.default.createElement(_FormComponents.TextInput, { name: "firstName", data: data, onChange: onChange })
        ),
        _react2.default.createElement(
            _FormComponents.FormGroup,
            null,
            _react2.default.createElement(
                "label",
                null,
                "Last Name"
            ),
            _react2.default.createElement(_FormComponents.TextInput, { name: "lastName", data: data, onChange: onChange })
        ),
        _react2.default.createElement(
            _FormComponents.FormGroup,
            null,
            _react2.default.createElement(
                "label",
                null,
                "Pickup Date"
            ),
            _react2.default.createElement(_FormComponents.DateInput, { name: "pickupDate", data: data, onChange: onChange, format: "x" })
        ),
        _react2.default.createElement(
            _FormComponents.FormGroup,
            null,
            _react2.default.createElement(
                "label",
                null,
                "Pickup Address"
            ),
            _react2.default.createElement(_FormComponents.TextInput, { name: "pickupAddress", data: data, onChange: onChange })
        ),
        _react2.default.createElement(
            _FormComponents.FormGroup,
            null,
            _react2.default.createElement(
                "label",
                null,
                "Destination Address"
            ),
            _react2.default.createElement(_FormComponents.TextInput, { name: "destinationAddress", data: data, onChange: onChange })
        ),
        _react2.default.createElement(
            _FormComponents.FormGroup,
            null,
            _react2.default.createElement(
                "label",
                null,
                "Price"
            ),
            _react2.default.createElement(_FormComponents.CurInput, { name: "price", data: data, onChange: onChange })
        ),
        _react2.default.createElement(
            _FormComponents.FormGroup,
            null,
            _react2.default.createElement(
                _FormComponents.SubmitButton,
                null,
                "Add Booking"
            ),
            _react2.default.createElement(
                _reactRouterDom.Link,
                { to: "/admin/bookings" },
                _react2.default.createElement(
                    _reactBootstrap.Button,
                    { bsStyle: "primary" },
                    "Return to Bookings"
                )
            )
        )
    );
};