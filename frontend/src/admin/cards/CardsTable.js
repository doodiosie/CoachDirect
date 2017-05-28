import React from "react";
import {graphql, compose} from "react-apollo";
import gql from "graphql-tag";

import tableState from "../tableState";
import CardsTableTemplate from "./CardsTableTemplate";
import {allQuery} from "../graphqlHelpers";

const getCardsQuery = allQuery({
    name: "cards",
    fields: ["id", "title", "questionText", "answerText"],
    orderType: "[CardOrder]",
    filterType: "[CardFilter]",
});

export default tableState(
    graphql(getCardsQuery, {
        options: ({order, filter}) => ({
            variables: {
                order,
                filter,
                first: 10,
                skip: 0,
            },
        }),
        props: ({data: {cards=[], fetchMore}}) => ({
            data: cards,
            loadMore: () => fetchMore({
                variables: {
                    skip: cards.length
                },
                updateQuery: (previousResult, {fetchMoreResult}) => (
                    Object.assign({}, previousResult, {
                        cards: [
                            ...previousResult.cards,
                            ...fetchMoreResult.cards,
                        ],
                    })
                ),
            }),
        }),
    })(CardsTableTemplate),
);
