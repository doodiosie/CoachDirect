"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require("react-apollo");

var _graphqlTag = require("graphql-tag");

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _tableState = require("../tableState");

var _tableState2 = _interopRequireDefault(_tableState);

var _CardsTableTemplate = require("./CardsTableTemplate");

var _CardsTableTemplate2 = _interopRequireDefault(_CardsTableTemplate);

var _graphqlHelpers = require("../graphqlHelpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var getCardsQuery = (0, _graphqlHelpers.allQuery)({
    name: "cards",
    fields: ["id", "title", "questionText", "answerText"],
    orderType: "[CardOrder]",
    filterType: "[CardFilter]"
});

exports.default = (0, _tableState2.default)((0, _reactApollo.graphql)(getCardsQuery, {
    options: function options(_ref) {
        var order = _ref.order,
            filter = _ref.filter;
        return {
            variables: {
                order: order,
                filter: filter,
                first: 10,
                skip: 0
            }
        };
    },
    props: function props(_ref2) {
        var _ref2$data = _ref2.data,
            _ref2$data$cards = _ref2$data.cards,
            cards = _ref2$data$cards === undefined ? [] : _ref2$data$cards,
            fetchMore = _ref2$data.fetchMore;
        return {
            data: cards,
            loadMore: function loadMore() {
                return fetchMore({
                    variables: {
                        skip: cards.length
                    },
                    updateQuery: function updateQuery(previousResult, _ref3) {
                        var fetchMoreResult = _ref3.fetchMoreResult;
                        return Object.assign({}, previousResult, {
                            cards: [].concat(_toConsumableArray(previousResult.cards), _toConsumableArray(fetchMoreResult.cards))
                        });
                    }
                });
            }
        };
    }
})(_CardsTableTemplate2.default));