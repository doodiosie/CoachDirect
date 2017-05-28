import React from "react";
import {compose, graphql} from "react-apollo";
import gql from "graphql-tag";

import {editMutation, singleQuery} from "../graphqlHelpers";
import editFormState from "../editFormState";
import EditBookingFormTemplate from "./EditBookingFormTemplate";

const Form = editFormState(EditBookingFormTemplate);

const editBookingMutation = editMutation({
    name: "editBooking",
    type: "BookingInput",
    fields: ["id", "firstName", "lastName", "pickupDate", "pickupAddress", "destinationAddress", "price"],
});

const editBookingQuery = singleQuery({
    name: "booking",
    fields: ["id", "firstName", "lastName", "pickupDate", "pickupAddress", "destinationAddress", "price"],
});

export default compose(
    graphql(editBookingMutation, {
        options: {
            refetchQueries: ["bookings"],
        },
    }),
    graphql(editBookingQuery, {
        options: ({match: {params: {id}}}) => ({
            variables: {id}
        }),
        props: ({data: {booking}}) => ({
            data: booking,
        }),
    }),
)(Form);
