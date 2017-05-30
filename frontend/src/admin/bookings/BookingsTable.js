import React from "react";
import {graphql, compose} from "react-apollo";

import {filterState, orderState, deleteState, pageState} from "../tableState";
import {allQuery, deleteMutation, pagesGraphql} from "../graphqlHelpers";

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
    filterState,
    orderState,
    deleteState,
    pageState,
    pagesGraphql({
        query: getBookingsQuery,
        dataName: "bookings",
    }),
)(BookingsTableTemplate);
