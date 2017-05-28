import React from "react";
import ApolloClient, {createNetworkInterface} from "apollo-client";
import {ApolloProvider} from "react-apollo";
import {GRAPHQL_API} from "../config";

const client = new ApolloClient({
    networkInterface: createNetworkInterface({
        uri: GRAPHQL_API
    })
});

export default (props) => (
    <ApolloProvider client={client}>
        {props.children}
    </ApolloProvider>
);
