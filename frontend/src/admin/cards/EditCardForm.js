import React from "react";
import {compose, graphql} from "react-apollo";
import gql from "graphql-tag";

import EditCardForm from "./EditCardFormTemplate";
import editFormState from "../editFormState";
import {editMutation, singleQuery} from "../graphqlHelpers";

const StateForm = editFormState(EditCardForm);

const Form = ({id, data, mutate}) => (
    data.loading ? (
        <div>Loading</div>
    ) : (
        <StateForm id={id} data={data.card} mutate={mutate}/>
    )
);

const editCardMutation = editMutation({
    name: "editCard",
    type: "CardInput!",
    fields: ["id", "title", "questionText", "answerText"],
});

const getCardQuery = singleQuery({
    name: "card",
    fields: ["id", "title", "questionText", "answerText"],
});

export default compose(
    graphql(editCardMutation),
    graphql(getCardQuery)
)(Form);
