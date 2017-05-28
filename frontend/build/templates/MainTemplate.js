"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactTapEventPlugin = require("react-tap-event-plugin");

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _MuiThemeProvider = require("material-ui/styles/MuiThemeProvider");

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _MainHead = require("../components/MainHead");

var _MainHead2 = _interopRequireDefault(_MainHead);

var _Provider = require("../components/Provider");

var _Provider2 = _interopRequireDefault(_Provider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainTemplate = function (_Component) {
    _inherits(MainTemplate, _Component);

    function MainTemplate() {
        _classCallCheck(this, MainTemplate);

        return _possibleConstructorReturn(this, (MainTemplate.__proto__ || Object.getPrototypeOf(MainTemplate)).apply(this, arguments));
    }

    _createClass(MainTemplate, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            try {
                (0, _reactTapEventPlugin2.default)();
            } catch (e) {}
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(_MainHead2.default, null),
                _react2.default.createElement(
                    _Provider2.default,
                    null,
                    _react2.default.createElement(
                        _MuiThemeProvider2.default,
                        null,
                        this.props.children
                    )
                )
            );
        }
    }]);

    return MainTemplate;
}(_react.Component);

exports.default = MainTemplate;