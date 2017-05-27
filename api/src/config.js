export const DATABASE_DATA = process.env.NODE_ENV === "production" ? {
    port: 3306,
    database: "coachDirect",
    username: "root",
    password: "root",
    host: "localhost"
} : {
    port: 8889,
    database: "coachDirect",
    username: "root",
    password: "root",
    host: "localhost"
};
