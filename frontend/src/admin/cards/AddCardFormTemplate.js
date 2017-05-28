import React from "react";
import Router from "next/router";

import {FormGroup, TextInput, SubmitButton} from "../FormComponents";

export default ({data, onChange, onSubmit}) => (
    <form onSubmit={event => {
            event.preventDefault();
            onSubmit(data).then(data => {
                Router.push("/admin/cards");
            });
        }}>
        <FormGroup>
            <label>Title</label>
            <TextInput name="title" data={data} onChange={onChange}/>
        </FormGroup>
        <FormGroup>
            <label>Question Text</label>
            <TextInput name="questionText" data={data} onChange={onChange}/>
        </FormGroup>
        <FormGroup>
            <label>Answer Text</label>
            <TextInput name="answerText" data={data} onChange={onChange}/>
        </FormGroup>
        <FormGroup>
            <SubmitButton>
                Save Changes
            </SubmitButton>
        </FormGroup>
    </form>
)
