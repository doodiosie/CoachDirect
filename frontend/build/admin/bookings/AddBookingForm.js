"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(["\nmutation addBooking (\n    $record: BookingInput!\n) {\n    addBooking (\n        record: $record\n    ) {\n        id\n        firstName\n        lastName\n        pickupDate\n        pickupAddress\n        destinationAddress\n        price\n    }\n}\n"], ["\nmutation addBooking (\n    $record: BookingInput!\n) {\n    addBooking (\n        record: $record\n    ) {\n        id\n        firstName\n        lastName\n        pickupDate\n        pickupAddress\n        destinationAddress\n        price\n    }\n}\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require("react-apollo");

var _graphqlTag = require("graphql-tag");

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _immutable = require("immutable");

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _addFormState = require("../addFormState");

var _addFormState2 = _interopRequireDefault(_addFormState);

var _AddBookingFormTemplate = require("./AddBookingFormTemplate");

var _AddBookingFormTemplate2 = _interopRequireDefault(_AddBookingFormTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Form = (0, _addFormState2.default)(_AddBookingFormTemplate2.default, (0, _immutable.Map)({
    pickupDate: (0, _moment2.default)().format("x")
}));

var addBookingMutation = (0, _graphqlTag2.default)(_templateObject);

exports.default = (0, _reactApollo.graphql)(addBookingMutation, {
    options: {
        refetchQueries: ["bookings"]
    }
})(Form);