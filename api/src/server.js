import express from "express";
import {graphqlExpress, graphiqlExpress} from "graphql-server-express";
import bodyParser from "body-parser";
import {makeExecutableSchema} from "graphql-tools";
import cors from "cors";

import typeDefs from "./schema";
import resolvers from "./resolvers";

const app = express();

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

app.use("*/graphql", cors(), bodyParser.json(), graphqlExpress((req) => {
    return {
        schema: schema
    };
}));
app.use("*/graphiql", graphiqlExpress({
    endpointURL: "graphql"
}));

app.listen(3001, () => {
    console.log(`Listening in ${process.env.NODE_ENV} mode`);
});
