import React, {Component} from "react";
import {List, Map, fromJS} from "immutable";
import {withState, withHandlers, withProps, compose} from "recompose";

export const orderState = compose(
    withState(
        "order",
        "setOrder",
        Map({
            id: "ASC",
        }),
    ),
    withHandlers({
        onOrder: ({setOrder}) => orderField => setOrder(
            order => (
                order.update(orderField, direction => (
                    direction==="ASC" ? "DESC" : "ASC"
                )).filter((value, key) => key===orderField)
            )
        ),
    }),
    withProps(
        ({order}) => ({
            order: order.entrySeq().map(([key, value]) => ({
                field: key,
                direction: value,
            }))
        })
    ),
);

export const filterState = compose(
    withState(
        "filter",
        "setFilter",
        Map({}),
    ),
    withHandlers({
        onFilter: ({setFilter}) => ({filter, field}) => setFilter(
            filterOld => (
                filter ? filterOld.set(field, filter) : filterOld.remove(field)
            )
        ),
    }),
    withProps(
        ({filter}) => ({
            filter: filter.entrySeq().map(([key, value]) => ({
                field: key,
                filter: value,
            }))
        })
    ),
);

export const deleteState = compose(
    withHandlers({
        onDelete: ({mutate}) => id => mutate({variables: {id}}),
    }),
);

export const pageState = compose(
    withState(
        "page",
        "setPage",
        0
    ),
);
