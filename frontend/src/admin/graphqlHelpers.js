import gql from "graphql-tag";
import {graphql} from "react-apollo";

export const editMutation = ({
    name,
    type,
    fields,
}) => gql`
mutation ${name} (
    $id: Int!,
    $record: ${type}
) {
    ${name} (
        id: $id,
        record: $record
    ) {
        ${fields.join("\n")}
    }
}
`;

export const singleQuery = ({
    name,
    fields,
}) => gql`
query ${name} (
    $id: Int!
) {
    ${name} (
        id: $id
    ) {
        ${fields.join("\n")}
    }
}
`;

export const allQuery = ({
    name,
    orderType,
    filterType,
    fields,
}) => gql`
query ${name} (
    $order: ${orderType},
    $filter: ${filterType},
    $first: Int!,
    $skip: Int!
) {
    ${name} (
        order: $order,
        filter: $filter,
        first: $first,
        skip: $skip
    ) {
        ${fields.join("\n")}
    }
}
`;

export const pagesGraphql = ({
    query,
    dataName
}) => (
    graphql(query, {
        options: ({order, filter, page}) => ({
            variables: {
                order,
                filter,
                skip: page*10,
                first: 10,
            }
        }),
        props: ({data}) => ({
            data: data[dataName] || [],
        }),
    })
)

export const deleteMutation = ({
    name,
    fields,
}) => gql`
mutation ${name} (
    $id: Int!
) {
    ${name} (
        id: $id
    ) {
        ${fields.join("\n")}
    }
}
`;
