import React, {Component} from "react";
import {Map} from "immutable";
import moment from "moment";
import FontAwesome from "react-fontawesome";
import {compose, withState, withHandlers} from "recompose";

import {toggleWrapper, CurInput, DateInput} from "./FormComponents";

const filterWrapper = (Input, def) => (
    compose(
        withState(
            "value",
            "updateValue",
            Map({
                filter: def,
            }),
        ),
        withHandlers({
            onChange: ({updateValue, onFilter, field}) => data => {
                updateValue(
                    value => data
                );
                onFilter({
                    field,
                    filter: data.get("filter"),
                });
            },
        }),
    )(
        ({onChange, value, ...props}) => (
            <Input
                name="filter"
                onChange={onChange}
                data={value}
                {...props}
                />
        )
    )
);

export const CurFilter = filterWrapper(CurInput, 0);

export const DateFilter = filterWrapper(DateInput, moment());

export const TextFilter = ({onFilter, field}) => (
    <input
        type="text"
        className="form-control"
        onChange={({target: {value}}) => onFilter({
            field,
            filter: `%${value}%`,
        })}
        />
);

const ToggleButton = ({onClick}) => (
    <FontAwesome
        name="search"
        onClick={onClick}
        style={{
            marginLeft: 2,
            cursor: "pointer",
            color: "grey"
        }}
        />
);

export const ToggleTextFilter = toggleWrapper(TextFilter, ToggleButton);
export const ToggleCurFilter = toggleWrapper(CurFilter, ToggleButton);
export const ToggleDateFilter = toggleWrapper(DateFilter, ToggleButton);
