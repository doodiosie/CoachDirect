import React from "react";
import {graphql, compose} from "react-apollo";
import {withState} from "recompose";

import tableState from "../tableState";
import {allQuery, deleteMutation} from "../graphqlHelpers";

import BookingsTableTemplate from "./BookingsTableTemplate";

const getBookingsQuery = allQuery({
    name: "bookings",
    fields: [
        "id",
        "firstName",
        "lastName",
        "pickupDate",
        "pickupAddress",
        "destinationAddress",
        "price",
    ],
    orderType: "[BookingOrder]",
    filterType: "[BookingFilter]",
});

const deleteBookingMutation = deleteMutation({
    name: "deleteBooking",
    fields: ["id"],
});

export default compose(
    graphql(deleteBookingMutation, {
        options: {
            refetchQueries: ["bookings"],
        },
    }),
    tableState,
    withState(
        "page",
        "setPage",
        0,
    ),
    graphql(getBookingsQuery, {
        options: ({order, filter, page}) => ({
            variables: {
                order,
                filter,
                skip: page*10,
                first: 10,
            }
        }),
        props: ({data: {bookings=[], fetchMore}}) => ({
            data: bookings,
            loadMore: () => fetchMore({
                variables: {
                    skip: bookings.length,
                    first: 10,
                },
                updateQuery: (previousResult, {fetchMoreResult}) => (
                    Object.assign({}, previousResult, {
                        bookings: [
                            ...previousResult.bookings,
                            ...fetchMoreResult.bookings,
                        ],
                    })
                ),
            }),
        })
    }),
)(BookingsTableTemplate);
