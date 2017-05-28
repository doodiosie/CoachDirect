"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deleteMutation = exports.allQuery = exports.singleQuery = exports.editMutation = undefined;

var _templateObject = _taggedTemplateLiteral(["\nmutation ", " (\n    $id: Int!,\n    $record: ", "\n) {\n    ", " (\n        id: $id,\n        record: $record\n    ) {\n        ", "\n    }\n}\n"], ["\nmutation ", " (\n    $id: Int!,\n    $record: ", "\n) {\n    ", " (\n        id: $id,\n        record: $record\n    ) {\n        ", "\n    }\n}\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\nquery ", " (\n    $id: Int!\n) {\n    ", " (\n        id: $id\n    ) {\n        ", "\n    }\n}\n"], ["\nquery ", " (\n    $id: Int!\n) {\n    ", " (\n        id: $id\n    ) {\n        ", "\n    }\n}\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\nquery ", " (\n    $order: ", ",\n    $filter: ", ",\n    $first: Int!,\n    $skip: Int!\n) {\n    ", " (\n        order: $order,\n        filter: $filter,\n        first: $first,\n        skip: $skip\n    ) {\n        ", "\n    }\n}\n"], ["\nquery ", " (\n    $order: ", ",\n    $filter: ", ",\n    $first: Int!,\n    $skip: Int!\n) {\n    ", " (\n        order: $order,\n        filter: $filter,\n        first: $first,\n        skip: $skip\n    ) {\n        ", "\n    }\n}\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\nmutation ", " (\n    $id: Int!\n) {\n    ", " (\n        id: $id\n    ) {\n        ", "\n    }\n}\n"], ["\nmutation ", " (\n    $id: Int!\n) {\n    ", " (\n        id: $id\n    ) {\n        ", "\n    }\n}\n"]);

var _graphqlTag = require("graphql-tag");

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var editMutation = exports.editMutation = function editMutation(_ref) {
    var name = _ref.name,
        type = _ref.type,
        fields = _ref.fields;
    return (0, _graphqlTag2.default)(_templateObject, name, type, name, fields.join("\n"));
};

var singleQuery = exports.singleQuery = function singleQuery(_ref2) {
    var name = _ref2.name,
        fields = _ref2.fields;
    return (0, _graphqlTag2.default)(_templateObject2, name, name, fields.join("\n"));
};

var allQuery = exports.allQuery = function allQuery(_ref3) {
    var name = _ref3.name,
        orderType = _ref3.orderType,
        filterType = _ref3.filterType,
        fields = _ref3.fields;
    return (0, _graphqlTag2.default)(_templateObject3, name, orderType, filterType, name, fields.join("\n"));
};

var deleteMutation = exports.deleteMutation = function deleteMutation(_ref4) {
    var name = _ref4.name,
        fields = _ref4.fields;
    return (0, _graphqlTag2.default)(_templateObject4, name, name, fields.join("\n"));
};