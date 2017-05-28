import React, {Component} from "react";
import {Map, List} from "immutable";

export default function (Form, defaults) {
    return class AddFormState extends Component {
        constructor(props) {
            super(props);
            
            this.state = {
                value: defaults || Map(),
            };
            
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleChange(value) {
            this.setState({
                value: this.state.value.merge(value),
            });
        }
        handleSubmit(data) {
            return this.props.mutate({
                variables: {
                    record: data.toJS()
                },
            });
        }
        render() {
            return (
                <Form
                    data={this.state.value}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    />
            )
        }
    }
}
