"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function (Table) {
    return function (_Component) {
        _inherits(TableState, _Component);

        function TableState(props) {
            _classCallCheck(this, TableState);

            var _this = _possibleConstructorReturn(this, (TableState.__proto__ || Object.getPrototypeOf(TableState)).call(this, props));

            _this.state = {
                order: (0, _immutable.Map)({
                    id: "ASC"
                }),
                filter: (0, _immutable.Map)({})
            };

            _this.handleOrder = _this.handleOrder.bind(_this);
            _this.handleFilter = _this.handleFilter.bind(_this);
            _this.handleDelete = _this.handleDelete.bind(_this);
            return _this;
        }

        _createClass(TableState, [{
            key: "handleOrder",
            value: function handleOrder(orderField) {
                this.setState({
                    order: this.state.order.update(orderField, function (direction) {
                        return direction === "ASC" ? "DESC" : "ASC";
                    }).filter(function (value, key) {
                        return key === orderField;
                    })
                });
            }
        }, {
            key: "handleFilter",
            value: function handleFilter(_ref) {
                var field = _ref.field,
                    filter = _ref.filter;

                this.setState({
                    filter: filter ? this.state.filter.set(field, filter) : this.state.filter.remove(field)
                });
            }
        }, {
            key: "handleDelete",
            value: function handleDelete(id) {
                return this.props.mutate({
                    variables: { id: id }
                });
            }
        }, {
            key: "render",
            value: function render() {
                return _react2.default.createElement(Table, {
                    onDelete: this.handleDelete,
                    onOrder: this.handleOrder,
                    onFilter: this.handleFilter,
                    order: this.serializeOrder(this.state.order),
                    filter: this.serializeFilter(this.state.filter)
                });
            }
        }, {
            key: "serializeOrder",
            value: function serializeOrder(order) {
                return order.entrySeq().map(function (_ref2) {
                    var _ref3 = _slicedToArray(_ref2, 2),
                        key = _ref3[0],
                        value = _ref3[1];

                    return {
                        field: key,
                        direction: value
                    };
                });
            }
        }, {
            key: "serializeFilter",
            value: function serializeFilter(filter) {
                return filter.entrySeq().map(function (_ref4) {
                    var _ref5 = _slicedToArray(_ref4, 2),
                        key = _ref5[0],
                        value = _ref5[1];

                    return {
                        field: key,
                        filter: value
                    };
                });
            }
        }]);

        return TableState;
    }(_react.Component);
};

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _immutable = require("immutable");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }