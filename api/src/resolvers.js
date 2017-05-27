// import Sequelize from "sequelize";
import {Card, Booking} from "./db";
import {GraphQLScalarType} from "graphql";
import {Kind} from "graphql/language";
import moment from "moment";

export default {
    Query: {
        hello() {
            return "Hello World";
        },
        bookings(root, {order: orderArg, filter, first: limit, skip: offset}) {
            const where = filter.reduce((acc, {field, filter: $like}) => Object.assign({}, acc, {
                [field]: {
                    $like
                }
            }), {});
            const order = orderArg.map(({field, direction}) => ([field, direction]));
            return Booking.findAll({
                where,
                order,
                limit,
                offset
            }).then(bookings => bookings.map(booking => booking.dataValues));
        },
        booking(root, {id}) {
            const booking = Booking.findOne({
                where: {
                    id
                }
            }).then(data => {
                return data.dataValues
            });
            return booking;
        },
    },
    Mutation: {
        addBooking(root, {record}) {
            return Booking.create(record).then(data => data.dataValues);
        },
        editBooking(root, {id, record}) {
            return Booking.findOne({
                where: {
                    id
                }
            }).then(card => {
                return card.update(record);
            });
        },
        deleteBooking(root, {id}) {
            return Booking.findOne({
                where: {id}
            }).then(booking => {
                return booking.destroy();
            });
        },
    },
    Date: new GraphQLScalarType({
        name: "Date",
        description: "Dates sent as integers",
        serialize: value => moment(value, "DD/MM/YYYY").format("x"),
        parseValue: value => moment(value, "x").format("DD/MM/YYYY"),
        parseLiteral: ast => ast.kind===Kind.INT ? parseInt(ast.value) : null,
    }),
};
