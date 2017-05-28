import React from "react";
import {compose, graphql} from "react-apollo";
import gql from "graphql-tag";

import addFormState from "../addFormState";
import AddCardFormTemplate from "./AddCardFormTemplate";

const Form = addFormState(AddCardFormTemplate);

const addCardMutation = gql`
mutation addCard (
    $record: CardInput!
) {
    addCard (
        record: $record
    ) {
        id
        title
        questionText
        answerText
    }
}
`;

export default graphql(addCardMutation)(Form);
