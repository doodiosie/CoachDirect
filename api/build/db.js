"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Booking = exports.Card = undefined;

var _sequelize = require("sequelize");

var _sequelize2 = _interopRequireDefault(_sequelize);

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = new _sequelize2.default(_config.DATABASE_DATA.database, _config.DATABASE_DATA.username, _config.DATABASE_DATA.password, {
    host: _config.DATABASE_DATA.host,
    dialect: "mysql",
    port: _config.DATABASE_DATA.port
});

var Card = db.define("card", {
    title: {
        type: _sequelize2.default.STRING
    },
    questionText: {
        type: _sequelize2.default.STRING
    },
    answerText: {
        type: _sequelize2.default.STRING
    }
});

var Booking = db.define("booking", {
    firstName: {
        type: _sequelize2.default.STRING
    },
    lastName: {
        type: _sequelize2.default.STRING
    },
    pickupDate: {
        type: _sequelize2.default.STRING
    },
    pickupAddress: {
        type: _sequelize2.default.STRING
    },
    destinationAddress: {
        type: _sequelize2.default.STRING
    },
    price: {
        type: _sequelize2.default.INTEGER
    }
});

db.sync();

exports.Card = Card;
exports.Booking = Booking;