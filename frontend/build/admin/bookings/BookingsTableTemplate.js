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

var _recompose = require("recompose");

var _FilterComponents = require("../FilterComponents");

var _TableComponents = require("../TableComponents");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Template = function Template(_ref) {
    var data = _ref.data,
        onOrder = _ref.onOrder,
        onFilter = _ref.onFilter,
        loadMore = _ref.loadMore,
        onDelete = _ref.onDelete,
        setPage = _ref.setPage,
        page = _ref.page;
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            _reactBootstrap.Table,
            null,
            _react2.default.createElement(
                "thead",
                null,
                _react2.default.createElement(
                    "tr",
                    null,
                    _react2.default.createElement(
                        "th",
                        null,
                        _react2.default.createElement(
                            "span",
                            { onClick: function onClick() {
                                    return onOrder("id");
                                } },
                            "Id"
                        ),
                        _react2.default.createElement(_FilterComponents.ToggleTextFilter, { onFilter: onFilter, field: "id" })
                    ),
                    _react2.default.createElement(
                        "th",
                        null,
                        _react2.default.createElement(
                            "span",
                            { onClick: function onClick() {
                                    return onOrder("firstName");
                                } },
                            "First Name"
                        ),
                        _react2.default.createElement(_FilterComponents.ToggleTextFilter, { onFilter: onFilter, field: "firstName" })
                    ),
                    _react2.default.createElement(
                        "th",
                        null,
                        _react2.default.createElement(
                            "span",
                            { onClick: function onClick() {
                                    return onOrder("lastName");
                                } },
                            "Last Name"
                        ),
                        _react2.default.createElement(_FilterComponents.ToggleTextFilter, { onFilter: onFilter, field: "lastName" })
                    ),
                    _react2.default.createElement(
                        "th",
                        null,
                        _react2.default.createElement(
                            "span",
                            { onClick: function onClick() {
                                    return onOrder("pickupDate");
                                } },
                            "Pickup Date"
                        ),
                        _react2.default.createElement(_FilterComponents.ToggleTextFilter, { onFilter: onFilter, field: "pickupDate" })
                    ),
                    _react2.default.createElement(
                        "th",
                        null,
                        _react2.default.createElement(
                            "span",
                            { onClick: function onClick() {
                                    return onOrder("pickupAddress");
                                } },
                            "Pickup Address"
                        ),
                        _react2.default.createElement(_FilterComponents.ToggleTextFilter, { onFilter: onFilter, field: "pickupAddress" })
                    ),
                    _react2.default.createElement(
                        "th",
                        null,
                        _react2.default.createElement(
                            "span",
                            { onClick: function onClick() {
                                    return onOrder("destinationAddress");
                                } },
                            "Destination Address"
                        ),
                        _react2.default.createElement(_FilterComponents.ToggleTextFilter, { onFilter: onFilter, field: "destinationAddress" })
                    ),
                    _react2.default.createElement(
                        "th",
                        null,
                        _react2.default.createElement(
                            "span",
                            { onClick: function onClick() {
                                    return onOrder("price");
                                } },
                            "Price"
                        ),
                        _react2.default.createElement(_FilterComponents.ToggleTextFilter, { onFilter: onFilter, field: "price" })
                    )
                )
            ),
            _react2.default.createElement(
                "tbody",
                null,
                data.map(function (booking) {
                    return _react2.default.createElement(
                        "tr",
                        { key: booking.id, style: {
                                height: 40
                            } },
                        _react2.default.createElement(
                            "td",
                            null,
                            booking.id
                        ),
                        _react2.default.createElement(
                            "td",
                            null,
                            booking.firstName
                        ),
                        _react2.default.createElement(
                            "td",
                            null,
                            booking.lastName
                        ),
                        _react2.default.createElement(
                            "td",
                            null,
                            (0, _moment2.default)(booking.pickupDate, "x").format("DD/MM/YY")
                        ),
                        _react2.default.createElement(
                            "td",
                            null,
                            booking.pickupAddress
                        ),
                        _react2.default.createElement(
                            "td",
                            null,
                            booking.destinationAddress
                        ),
                        _react2.default.createElement(
                            "td",
                            null,
                            "\xA3",
                            booking.price / 100
                        ),
                        _react2.default.createElement(
                            "td",
                            null,
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: "/admin/bookings/edit/" + booking.id },
                                "Edit"
                            )
                        ),
                        _react2.default.createElement(
                            "td",
                            null,
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
        ),
        _react2.default.createElement(_TableComponents.Pages, { setPage: setPage, page: page })
    );
};

// export default compose(
//     withState(
//         "page",
//         "setPage",
//         0,
//     ),
// )(Template);

exports.default = Template;