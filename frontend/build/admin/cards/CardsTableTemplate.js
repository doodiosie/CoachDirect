"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _RaisedButton = require("material-ui/RaisedButton");

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _link = require("next/link");

var _link2 = _interopRequireDefault(_link);

var _Table = require("material-ui/Table");

var _Table2 = _interopRequireDefault(_Table);

var _FilterComponents = require("../FilterComponents");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var data = _ref.data,
        onOrder = _ref.onOrder,
        onFilter = _ref.onFilter,
        loadMore = _ref.loadMore;
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            _Table2.default,
            {
                height: "70vh",
                fixedHeader: true },
            _react2.default.createElement(
                _Table.TableHeader,
                null,
                _react2.default.createElement(
                    _Table.TableRow,
                    null,
                    _react2.default.createElement(
                        _Table.TableHeaderColumn,
                        null,
                        _react2.default.createElement(
                            "span",
                            { onClick: function onClick() {
                                    return onOrder("id");
                                } },
                            "Id"
                        ),
                        _react2.default.createElement(_FilterComponents.TextFilter, { onFilter: onFilter, field: "id" })
                    ),
                    _react2.default.createElement(
                        _Table.TableHeaderColumn,
                        null,
                        _react2.default.createElement(
                            "span",
                            { onClick: function onClick() {
                                    return onOrder("title");
                                } },
                            "Title"
                        )
                    ),
                    _react2.default.createElement(
                        _Table.TableHeaderColumn,
                        null,
                        "Question"
                    ),
                    _react2.default.createElement(
                        _Table.TableHeaderColumn,
                        { onClick: function onClick() {
                                return onOrder("answerText");
                            } },
                        "Answer"
                    ),
                    _react2.default.createElement(_Table.TableHeaderColumn, null)
                )
            ),
            _react2.default.createElement(
                _Table.TableBody,
                null,
                data.map(function (card) {
                    return _react2.default.createElement(
                        _Table.TableRow,
                        { key: card.id },
                        _react2.default.createElement(
                            _Table.TableRowColumn,
                            null,
                            card.id
                        ),
                        _react2.default.createElement(
                            _Table.TableRowColumn,
                            null,
                            card.title
                        ),
                        _react2.default.createElement(
                            _Table.TableRowColumn,
                            null,
                            card.questionText
                        ),
                        _react2.default.createElement(
                            _Table.TableRowColumn,
                            null,
                            card.answerText
                        ),
                        _react2.default.createElement(
                            _Table.TableRowColumn,
                            null,
                            _react2.default.createElement(
                                _link2.default,
                                { href: "/admin/cards/edit?id=" + card.id },
                                _react2.default.createElement(
                                    "a",
                                    null,
                                    _react2.default.createElement(
                                        _RaisedButton2.default,
                                        null,
                                        "Edit"
                                    )
                                )
                            )
                        )
                    );
                })
            )
        ),
        _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
                "button",
                { onClick: function onClick() {
                        return loadMore();
                    }, className: "btn btn-primary" },
                "Load More"
            )
        )
    );
};