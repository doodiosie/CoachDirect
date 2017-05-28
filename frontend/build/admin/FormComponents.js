"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TextInput = exports.SubmitButton = exports.ReadOnly = exports.NumInput = exports.FormGroup = exports.DateInput = exports.CurInput = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.toggleWrapper = toggleWrapper;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _immutable = require("immutable");

var _reactDatepicker = require("react-datepicker");

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CurInput = exports.CurInput = function CurInput(_ref) {
    var name = _ref.name,
        data = _ref.data,
        _onChange = _ref.onChange;
    return _react2.default.createElement("input", {
        name: name,
        type: "number",
        className: "form-control",
        value: data.get(name) / 100 || 0,
        onChange: function onChange(event) {
            return _onChange((0, _immutable.Map)(_defineProperty({}, name, event.target.value < 0 ? 0 : event.target.value * 100)));
        },
        step: 0.01
    });
};

var DateInput = exports.DateInput = function DateInput(_ref2) {
    var name = _ref2.name,
        data = _ref2.data,
        _onChange2 = _ref2.onChange,
        format = _ref2.format;
    return _react2.default.createElement(
        FormGroup,
        null,
        _react2.default.createElement(_reactDatepicker2.default, {
            name: name,
            onChange: function onChange(event) {
                return _onChange2((0, _immutable.Map)(_defineProperty({}, name, event.format(format))));
            },
            className: "form-control",
            selected: data.get(name) ? (0, _moment2.default)(data.get(name), format) : (0, _moment2.default)()
        })
    );
};

var FormGroup = function FormGroup(_ref3) {
    var children = _ref3.children,
        props = _objectWithoutProperties(_ref3, ["children"]);

    return _react2.default.createElement(
        "div",
        _extends({}, props, { className: "form-group" }),
        children
    );
};

exports.FormGroup = FormGroup;
var NumInput = exports.NumInput = function NumInput(_ref4) {
    var name = _ref4.name,
        data = _ref4.data,
        _onChange3 = _ref4.onChange,
        step = _ref4.step;
    return _react2.default.createElement("input", {
        name: name,
        type: "number",
        className: "form-control",
        value: data.get(name) || 0,
        onChange: function onChange(event) {
            return _onChange3((0, _immutable.Map)(_defineProperty({}, name, event.target.value)));
        },
        step: step
    });
};

var ReadOnly = exports.ReadOnly = function ReadOnly(_ref5) {
    var name = _ref5.name,
        data = _ref5.data;
    return _react2.default.createElement("input", {
        name: name,
        type: "text",
        className: "form-control",
        value: data.get(name) || "",
        readOnly: true
    });
};

var SubmitButton = function SubmitButton(_ref6) {
    var children = _ref6.children,
        props = _objectWithoutProperties(_ref6, ["children"]);

    return _react2.default.createElement(
        "button",
        _extends({ className: "btn btn-primary" }, props),
        children
    );
};

exports.SubmitButton = SubmitButton;
var TextInput = exports.TextInput = function TextInput(_ref7) {
    var name = _ref7.name,
        data = _ref7.data,
        _onChange4 = _ref7.onChange;
    return _react2.default.createElement("input", {
        name: name,
        type: "text",
        className: "form-control",
        value: data.get(name) || "",
        onChange: function onChange(event) {
            return _onChange4((0, _immutable.Map)(_defineProperty({}, name, event.target.value)));
        }
    });
};

function toggleWrapper(ToToggle, ToggleIcon) {
    return function (_Component) {
        _inherits(Toggle, _Component);

        function Toggle(props) {
            _classCallCheck(this, Toggle);

            var _this = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this, props));

            _this.state = {
                enabled: false
            };

            _this.toggle = _this.toggle.bind(_this);
            return _this;
        }

        _createClass(Toggle, [{
            key: "toggle",
            value: function toggle() {
                this.setState({
                    enabled: !this.state.enabled
                });
            }
        }, {
            key: "render",
            value: function render() {
                return _react2.default.createElement(
                    "span",
                    null,
                    _react2.default.createElement(ToggleIcon, { onClick: this.toggle }),
                    this.state.enabled ? _react2.default.createElement(ToToggle, this.props) : ""
                );
            }
        }]);

        return Toggle;
    }(_react.Component);
}