import React from "react";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import validate from "./validate";

import {FormGroup, TextInput, CurInput, DateInput, SubmitButton} from "../FormComponents";

export default ({data, onChange, onSubmit}) => (
    <form onSubmit={event => {
            event.preventDefault();
            validate(data) ? onSubmit(data).then(() => {
                alert("Successfully Added Booking");
            }) : alert("Please fill out all fields correctly");
        }}>
        <FormGroup>
            <label>First Name</label>
            <TextInput name="firstName" data={data} onChange={onChange}/>
        </FormGroup>
        <FormGroup>
            <label>Last Name</label>
            <TextInput name="lastName" data={data} onChange={onChange}/>
        </FormGroup>
        <FormGroup>
            <label>Pickup Date</label>
            <DateInput name="pickupDate" data={data} onChange={onChange} format="x"/>
        </FormGroup>
        <FormGroup>
            <label>Pickup Address</label>
            <TextInput name="pickupAddress" data={data} onChange={onChange}/>
        </FormGroup>
        <FormGroup>
            <label>Destination Address</label>
            <TextInput name="destinationAddress" data={data} onChange={onChange}/>
        </FormGroup>
        <FormGroup>
            <label>Price</label>
            <CurInput name="price" data={data} onChange={onChange}/>
        </FormGroup>
        <FormGroup>
            <SubmitButton>
                Add Booking
            </SubmitButton>
            <Link to="/admin/bookings">
                <Button bsStyle="primary">
                    Return to Bookings
                </Button>
            </Link>
        </FormGroup>
    </form>
)
