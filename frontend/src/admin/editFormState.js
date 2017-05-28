import React, {Component} from "react";
import {Map, List} from "immutable";

export default function (Form) {
    return class FormState extends Component {
        constructor(props) {
            super(props);
            
            this.state = {
                value: this.getValue(props),
            };
            
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
        componentWillReceiveProps(props) {
            this.setState({
                value: this.getValue(props),
            });
        }
        getValue(props) {
            return Map(
                props.data,
            );
        }
        handleChange(value) {
            this.setState({
                value: this.state.value.merge(value),
            });
        }
        handleSubmit(value) {
            return this.props.mutate({
                variables: {
                    id: this.state.value.get("id"),
                    record: value.toJS(),
                },
            });
        }
        render() {
            return (
                <Form data={this.state.value} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
            );
        }
    }
}
