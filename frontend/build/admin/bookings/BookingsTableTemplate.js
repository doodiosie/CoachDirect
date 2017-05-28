"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _reactBootstrap = require("react-bootstrap");

var _FilterComponents = require("../FilterComponents");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var data = _ref.data,
        onOrder = _ref.onOrder,
        onFilter = _ref.onFilter,
        loadMore = _ref.loadMore,
        onDelete = _ref.onDelete;
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/admin/bookings/add" },
            "Add a Booking"
        ),
        _react2.default.createElement(
            _reactBootstrap.Grid,
            null,
            _react2.default.createElement(
                _reactBootstrap.Row,
                null,
                _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 2 },
                    _react2.default.createElement(
                        "strong",
                        null,
                        _react2.default.createElement(
                            "span",
                            { onClick: function onClick() {
                                    return onOrder("id");
                                } },
                            "Id"
                        )
                    ),
                    _react2.default.createElement(_FilterComponents.ToggleTextFilter, { onFilter: onFilter, field: "id" })
                ),
                _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 1 },
                    _react2.default.createElement(
                        "strong",
                        null,
                        _react2.default.createElement(
                            "span",
                            { onClick: function onClick() {
                                    return onOrder("firstName");
                                } },
                            "First Name"
                        )
                    ),
                    _react2.default.createElement(_FilterComponents.ToggleTextFilter, { onFilter: onFilter, field: "firstName" })
                ),
                _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 1 },
                    _react2.default.createElement(
                        "strong",
                        null,
                        _react2.default.createElement(
                            "span",
                            { onClick: function onClick() {
                                    return onOrder("lastName");
                                } },
                            "Last Name"
                        )
                    ),
                    _react2.default.createElement(_FilterComponents.ToggleTextFilter, { onFilter: onFilter, field: "lastName" })
                ),
                _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 1 },
                    _react2.default.createElement(
                        "strong",
                        null,
                        _react2.default.createElement(
                            "span",
                            { onClick: function onClick() {
                                    return onOrder("pickupDate");
                                } },
                            "Pickup Date"
                        )
                    ),
                    _react2.default.createElement(_FilterComponents.ToggleTextFilter, { onFilter: onFilter, field: "pickupDate" })
                ),
                _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 2 },
                    _react2.default.createElement(
                        "strong",
                        null,
                        _react2.default.createElement(
                            "span",
                            { onClick: function onClick() {
                                    return onOrder("pickupAddress");
                                } },
                            "Pickup Address"
                        )
                    ),
                    _react2.default.createElement(_FilterComponents.ToggleTextFilter, { onFilter: onFilter, field: "pickupAddress" })
                ),
                _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 2 },
                    _react2.default.createElement(
                        "strong",
                        null,
                        _react2.default.createElement(
                            "span",
                            { onClick: function onClick() {
                                    return onOrder("destinationAddress");
                                } },
                            "Destination Address"
                        )
                    ),
                    _react2.default.createElement(_FilterComponents.ToggleTextFilter, { onFilter: onFilter, field: "destinationAddress" })
                ),
                _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 1 },
                    _react2.default.createElement(
                        "strong",
                        null,
                        _react2.default.createElement(
                            "span",
                            { onClick: function onClick() {
                                    return onOrder("price");
                                } },
                            "Price"
                        )
                    ),
                    _react2.default.createElement(_FilterComponents.ToggleCurFilter, { onFilter: onFilter, field: "price" })
                )
            ),
            _react2.default.createElement(
                _reactBootstrap.Row,
                { style: {
                        height: "70vh",
                        overflowY: "scroll"
                    },
                    onScroll: function onScroll(_ref2) {
                        var target = _ref2.target;

                        target.childNodes[0].offsetHeight - target.scrollTop === target.clientHeight ? loadMore() : "";
                    } },
                _react2.default.createElement(
                    _reactBootstrap.ListGroup,
                    { style: {
                            paddingTop: 10,
                            margin: 0
                        } },
                    data.map(function (booking) {
                        return _react2.default.createElement(
                            _reactBootstrap.ListGroupItem,
                            { key: booking.id, style: {
                                    height: 40
                                } },
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { xs: 2 },
                                booking.id
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { xs: 1 },
                                booking.firstName
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { xs: 1 },
                                booking.lastName
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { xs: 1 },
                                (0, _moment2.default)(booking.pickupDate, "x").format("DD/MM/YY")
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { xs: 2 },
                                booking.pickupAddress
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { xs: 2 },
                                booking.destinationAddress
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { xs: 1 },
                                "\xA3",
                                booking.price / 100
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { xs: 1 },
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    { to: "/admin/bookings/edit/" + booking.id },
                                    "Edit"
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { xs: 1 },
                                _react2.default.createElement(
                                    "a",
                                    { onClick: function onClick() {
                                            return onDelete(booking.id);
                                        } },
                                    "Delete"
                                )
                            )
                        );
                    })
                )
            )
        )
    );
};