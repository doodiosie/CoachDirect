import React from "react";
import {compose, graphql} from "react-apollo";
import gql from "graphql-tag";
import {Map} from "immutable";
import moment from "moment";

import addFormState from "../addFormState";
import AddBookingFormTemplate from "./AddBookingFormTemplate";

const Form = addFormState(AddBookingFormTemplate, Map({
    pickupDate: moment().format("x"),
}));

const addBookingMutation = gql`
mutation addBooking (
    $record: BookingInput!
) {
    addBooking (
        record: $record
    ) {
        id
        firstName
        lastName
        pickupDate
        pickupAddress
        destinationAddress
        price
    }
}
`;

export default graphql(addBookingMutation, {
    options: {
        refetchQueries: ["bookings"],
    },
})(Form);
