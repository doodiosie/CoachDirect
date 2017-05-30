"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require("react-apollo");

var _recompose = require("recompose");

var _tableState = require("../tableState");

var _tableState2 = _interopRequireDefault(_tableState);

var _graphqlHelpers = require("../graphqlHelpers");

var _BookingsTableTemplate = require("./BookingsTableTemplate");

var _BookingsTableTemplate2 = _interopRequireDefault(_BookingsTableTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var getBookingsQuery = (0, _graphqlHelpers.allQuery)({
    name: "bookings",
    fields: ["id", "firstName", "lastName", "pickupDate", "pickupAddress", "destinationAddress", "price"],
    orderType: "[BookingOrder]",
    filterType: "[BookingFilter]"
});

var deleteBookingMutation = (0, _graphqlHelpers.deleteMutation)({
    name: "deleteBooking",
    fields: ["id"]
});

exports.default = (0, _reactApollo.compose)((0, _reactApollo.graphql)(deleteBookingMutation, {
    options: {
        refetchQueries: ["bookings"]
    }
}), _tableState2.default, (0, _recompose.withState)("page", "setPage", 0), (0, _reactApollo.graphql)(getBookingsQuery, {
    options: function options(_ref) {
        var order = _ref.order,
            filter = _ref.filter,
            page = _ref.page;
        return {
            variables: {
                order: order,
                filter: filter,
                skip: page * 10,
                first: 10
            }
        };
    },
    props: function props(_ref2) {
        var _ref2$data = _ref2.data,
            _ref2$data$bookings = _ref2$data.bookings,
            bookings = _ref2$data$bookings === undefined ? [] : _ref2$data$bookings,
            fetchMore = _ref2$data.fetchMore;
        return {
            data: bookings,
            loadMore: function loadMore() {
                return fetchMore({
                    variables: {
                        skip: bookings.length,
                        first: 10
                    },
                    updateQuery: function updateQuery(previousResult, _ref3) {
                        var fetchMoreResult = _ref3.fetchMoreResult;
                        return Object.assign({}, previousResult, {
                            bookings: [].concat(_toConsumableArray(previousResult.bookings), _toConsumableArray(fetchMoreResult.bookings))
                        });
                    }
                });
            }
        };
    }
}))(_BookingsTableTemplate2.default);