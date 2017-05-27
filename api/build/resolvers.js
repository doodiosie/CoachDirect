"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _db = require("./db");

var _graphql = require("graphql");

var _language = require("graphql/language");

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // import Sequelize from "sequelize";


exports.default = {
    Query: {
        hello: function hello() {
            return "Hello World";
        },
        bookings: function bookings(root, _ref) {
            var orderArg = _ref.order,
                filter = _ref.filter,
                limit = _ref.first,
                offset = _ref.skip;

            var where = filter.reduce(function (acc, _ref2) {
                var field = _ref2.field,
                    $like = _ref2.filter;
                return Object.assign({}, acc, _defineProperty({}, field, {
                    $like: $like
                }));
            }, {});
            var order = orderArg.map(function (_ref3) {
                var field = _ref3.field,
                    direction = _ref3.direction;
                return [field, direction];
            });
            return _db.Booking.findAll({
                where: where,
                order: order,
                limit: limit,
                offset: offset
            }).then(function (bookings) {
                return bookings.map(function (booking) {
                    return booking.dataValues;
                });
            });
        },
        booking: function booking(root, _ref4) {
            var id = _ref4.id;

            var booking = _db.Booking.findOne({
                where: {
                    id: id
                }
            }).then(function (data) {
                return data.dataValues;
            });
            return booking;
        }
    },
    Mutation: {
        addBooking: function addBooking(root, _ref5) {
            var record = _ref5.record;

            return _db.Booking.create(record).then(function (data) {
                return data.dataValues;
            });
        },
        editBooking: function editBooking(root, _ref6) {
            var id = _ref6.id,
                record = _ref6.record;

            return _db.Booking.findOne({
                where: {
                    id: id
                }
            }).then(function (card) {
                return card.update(record);
            });
        },
        deleteBooking: function deleteBooking(root, _ref7) {
            var id = _ref7.id;

            return _db.Booking.findOne({
                where: { id: id }
            }).then(function (booking) {
                return booking.destroy();
            });
        }
    },
    Date: new _graphql.GraphQLScalarType({
        name: "Date",
        description: "Dates sent as integers",
        serialize: function serialize(value) {
            return (0, _moment2.default)(value, "DD/MM/YYYY").format("x");
        },
        parseValue: function parseValue(value) {
            return (0, _moment2.default)(value, "x").format("DD/MM/YYYY");
        },
        parseLiteral: function parseLiteral(ast) {
            return ast.kind === _language.Kind.INT ? parseInt(ast.value) : null;
        }
    })
};