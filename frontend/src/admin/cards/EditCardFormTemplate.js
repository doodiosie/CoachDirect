import React from "react";
import {Map, List} from "immutable";
import Router from "next/router";

import {FormGroup, TextInput, SubmitButton} from "../FormComponents";

export default ({data, onChange, onSubmit}) => (
    <form onSubmit={event => {
            event.preventDefault();
            const filtered = data.filter((value, key) => (List.of("title", "questionText", "answerText").includes(key)));
            onSubmit(filtered).then(() => {
                Router.push("/admin/cards");
            });
        }}>
        <FormGroup>
            <label>ID</label>
            <TextInput name="id" data={data} onChange={onChange}/>
        </FormGroup>
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
);
