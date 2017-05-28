import React from "react";
import {graphql, compose} from "react-apollo";

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
    graphql(getBookingsQuery, {
        options: ({order, filter}) => ({
            variables: {
                order,
                filter,
                skip: 0,
                first: 40,
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
