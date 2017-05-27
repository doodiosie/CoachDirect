import Sequelize from "sequelize";
import {DATABASE_DATA} from "./config";

const db = new Sequelize(DATABASE_DATA.database, DATABASE_DATA.username, DATABASE_DATA.password, {
    host: DATABASE_DATA.host,
    dialect: "mysql",
    port: DATABASE_DATA.port
});

const Card = db.define("card", {
    title: {
        type: Sequelize.STRING
    },
    questionText: {
        type: Sequelize.STRING
    },
    answerText: {
        type: Sequelize.STRING
    }
});

const Booking = db.define("booking", {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    pickupDate: {
        type: Sequelize.STRING
    },
    pickupAddress: {
        type: Sequelize.STRING
    },
    destinationAddress: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.INTEGER
    },
})

db.sync();

export {Card, Booking};
