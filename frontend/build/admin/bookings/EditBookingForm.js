"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require("react-apollo");

var _graphqlTag = require("graphql-tag");

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _graphqlHelpers = require("../graphqlHelpers");

var _editFormState = require("../editFormState");

var _editFormState2 = _interopRequireDefault(_editFormState);

var _EditBookingFormTemplate = require("./EditBookingFormTemplate");

var _EditBookingFormTemplate2 = _interopRequireDefault(_EditBookingFormTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = (0, _editFormState2.default)(_EditBookingFormTemplate2.default);

var editBookingMutation = (0, _graphqlHelpers.editMutation)({
    name: "editBooking",
    type: "BookingInput",
    fields: ["id", "firstName", "lastName", "pickupDate", "pickupAddress", "destinationAddress", "price"]
});

var editBookingQuery = (0, _graphqlHelpers.singleQuery)({
    name: "booking",
    fields: ["id", "firstName", "lastName", "pickupDate", "pickupAddress", "destinationAddress", "price"]
});

exports.default = (0, _reactApollo.compose)((0, _reactApollo.graphql)(editBookingMutation, {
    options: {
        refetchQueries: ["bookings"]
    }
}), (0, _reactApollo.graphql)(editBookingQuery, {
    options: function options(_ref) {
        var id = _ref.match.params.id;
        return {
            variables: { id: id }
        };
    },
    props: function props(_ref2) {
        var booking = _ref2.data.booking;
        return {
            data: booking
        };
    }
}))(Form);