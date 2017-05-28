"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ToggleDateFilter = exports.ToggleCurFilter = exports.ToggleTextFilter = exports.TextFilter = exports.DateFilter = exports.CurFilter = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _immutable = require("immutable");

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _reactFontawesome = require("react-fontawesome");

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _FormComponents = require("./FormComponents");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function filterWrapper(Input, def) {
    return function (_Component) {
        _inherits(FilterWrapper, _Component);

        function FilterWrapper(props) {
            _classCallCheck(this, FilterWrapper);

            var _this = _possibleConstructorReturn(this, (FilterWrapper.__proto__ || Object.getPrototypeOf(FilterWrapper)).call(this, props));

            _this.state = {
                value: (0, _immutable.Map)({
                    filter: def
                })
            };

            _this.handleChange = _this.handleChange.bind(_this);
            return _this;
        }

        _createClass(FilterWrapper, [{
            key: "handleChange",
            value: function handleChange(data) {
                var _this2 = this;

                this.setState(function (state) {
                    var newState = Object.assign({}, state, {
                        value: data
                    });
                    _this2.props.onFilter({
                        field: _this2.props.field,
                        filter: newState.value.get("filter")
                    });
                    return newState;
                });
            }
        }, {
            key: "render",
            value: function render() {
                var _props = this.props,
                    field = _props.field,
                    onFilter = _props.onFilter,
                    props = _objectWithoutProperties(_props, ["field", "onFilter"]);

                return _react2.default.createElement(Input, _extends({
                    name: "filter",
                    onChange: this.handleChange,
                    data: this.state.value
                }, props));
            }
        }]);

        return FilterWrapper;
    }(_react.Component);
}

var CurFilter = exports.CurFilter = filterWrapper(_FormComponents.CurInput, 0);

var DateFilter = exports.DateFilter = filterWrapper(_FormComponents.DateInput, (0, _moment2.default)());

var TextFilter = exports.TextFilter = function TextFilter(_ref) {
    var onFilter = _ref.onFilter,
        field = _ref.field;
    return _react2.default.createElement("input", {
        type: "text",
        className: "form-control",
        onChange: function onChange(_ref2) {
            var value = _ref2.target.value;
            return onFilter({
                field: field,
                filter: "%" + value + "%"
            });
        }
    });
};

var ToggleButton = function ToggleButton(_ref3) {
    var onClick = _ref3.onClick;
    return _react2.default.createElement(_reactFontawesome2.default, {
        name: "search",
        onClick: onClick,
        style: {
            marginLeft: 2,
            cursor: "pointer",
            color: "grey"
        }
    });
};

var ToggleTextFilter = exports.ToggleTextFilter = (0, _FormComponents.toggleWrapper)(TextFilter, ToggleButton);
var ToggleCurFilter = exports.ToggleCurFilter = (0, _FormComponents.toggleWrapper)(CurFilter, ToggleButton);
var ToggleDateFilter = exports.ToggleDateFilter = (0, _FormComponents.toggleWrapper)(DateFilter, ToggleButton);