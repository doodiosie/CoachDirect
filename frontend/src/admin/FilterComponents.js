import React, {Component} from "react";
import {Map} from "immutable";
import moment from "moment";
import FontAwesome from "react-fontawesome";

import {toggleWrapper, CurInput, DateInput} from "./FormComponents";

function filterWrapper (Input, def) {
    return class FilterWrapper extends Component {
        constructor(props) {
            super(props);
            
            this.state = {
                value: Map({
                    filter: def,
                }),
            };
            
            this.handleChange = this.handleChange.bind(this);
        }
        handleChange(data) {
            this.setState(state => {
                const newState = Object.assign({}, state, {
                    value: data,
                });
                this.props.onFilter({
                    field: this.props.field,
                    filter: newState.value.get("filter"),
                });
                return newState;
            });
        }
        render() {
            const {
                field,
                onFilter,
                ...props
            } = this.props;
            return (
                <Input
                    name="filter"
                    onChange={this.handleChange}
                    data={this.state.value}
                    {...props}
                    />
            );
        }
    }
}

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
