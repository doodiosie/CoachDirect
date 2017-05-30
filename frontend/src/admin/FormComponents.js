import React from "react";
import {Map} from "immutable";
import DatePicker from "react-datepicker";
import moment from "moment";
import {withState, compose, withHandlers} from "recompose";
import CurrencyInput from "react-currency-input";

export const CurInputOld = ({name, data, onChange, value}) => (
    <input
        name={name}
        type="number"
        className="form-control"
        value={(data.get(name)/100 || 0).toFixed(2)}
        onChange={event => onChange(Map({
            [name]: event.target.value<0
                ? 0
                : event.target.value*100
        }))}
        step={0.01}
        />
);

export const CurInput = ({name, data, onChange, value}) => (
    <CurrencyInput
        name={name}
        value={data.get(name)/100 || 0}
        onChange={value => onChange(Map({
            [name]: value*100
        }))}
        className="form-control"
        />
);

export const DateInput = ({name, data, onChange, format}) => (
    <FormGroup>
        <DatePicker
            name={name}
            onChange={event => onChange(Map({
                [name]: event.format(format),
            }))}
            className="form-control"
            selected={data.get(name) ? moment(data.get(name), format) : moment()}
            />
    </FormGroup>
);

export const FormGroup = ({children, ...props}) => (
    <div {...props} className="form-group">
        {children}
    </div>
);

export const NumInput = ({name, data, onChange, step}) => (
    <input
        name={name}
        type="number"
        className="form-control"
        value={data.get(name) || 0}
        onChange={event => onChange(Map({[name]: event.target.value}))}
        step={step}
        />
);

export const ReadOnly = ({name, data}) => (
    <input
        name={name}
        type="text"
        className="form-control"
        value={data.get(name) || ""}
        readOnly
        />
);

export const SubmitButton = ({children, ...props}) => (
    <button className="btn btn-primary" {...props}>
        {children}
    </button>
);

export const TextInput = ({name, data, onChange}) => (
    <input
        name={name}
        type="text"
        className="form-control"
        value={data.get(name) || ""}
        onChange={event => onChange(Map({[name]: event.target.value}))}
        />
);

export const toggleWrapper = (ToToggle, ToggleIcon) => (
    compose(
        withState(
            "enabled",
            "setToggle",
            false,
        ),
        withHandlers({
            toggle: ({setToggle}) => (
                () => setToggle(enabled => !enabled)
            ),
        }),
    )(
        ({toggle, enabled, ...props}) => (
            <span>
                <ToggleIcon onClick={toggle}/>
                {enabled ? (
                    <ToToggle {...props}/>
                ) : ""}
            </span>
        )
    )
);
