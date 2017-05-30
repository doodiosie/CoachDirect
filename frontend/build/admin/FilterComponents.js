"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ToggleDateFilter = exports.ToggleCurFilter = exports.ToggleTextFilter = exports.TextFilter = exports.DateFilter = exports.CurFilter = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _immutable = require("immutable");

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _reactFontawesome = require("react-fontawesome");

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _recompose = require("recompose");

var _FormComponents = require("./FormComponents");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var filterWrapper = function filterWrapper(Input, def) {
    return (0, _recompose.compose)((0, _recompose.withState)("value", "updateValue", (0, _immutable.Map)({
        filter: def
    })), (0, _recompose.withHandlers)({
        onChange: function onChange(_ref) {
            var updateValue = _ref.updateValue,
                onFilter = _ref.onFilter,
                field = _ref.field;
            return function (data) {
                updateValue(function (value) {
                    return data;
                });
                onFilter({
                    field: field,
                    filter: data.get("filter")
                });
            };
        }
    }))(function (_ref2) {
        var onChange = _ref2.onChange,
            value = _ref2.value,
            props = _objectWithoutProperties(_ref2, ["onChange", "value"]);

        return _react2.default.createElement(Input, _extends({
            name: "filter",
            onChange: onChange,
            data: value
        }, props));
    });
};

var CurFilter = exports.CurFilter = filterWrapper(_FormComponents.CurInput, 0);

var DateFilter = exports.DateFilter = filterWrapper(_FormComponents.DateInput, (0, _moment2.default)());

var TextFilter = exports.TextFilter = function TextFilter(_ref3) {
    var onFilter = _ref3.onFilter,
        field = _ref3.field;
    return _react2.default.createElement("input", {
        type: "text",
        className: "form-control",
        onChange: function onChange(_ref4) {
            var value = _ref4.target.value;
            return onFilter({
                field: field,
                filter: "%" + value + "%"
            });
        }
    });
};

var ToggleButton = function ToggleButton(_ref5) {
    var onClick = _ref5.onClick;
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