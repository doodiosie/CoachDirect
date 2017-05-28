import React from "react";
import {Route} from "react-router-dom";

import BookingsTable from "./BookingsTable";
import AddBookingForm from "./AddBookingForm";
import EditBookingForm from "./EditBookingForm";

export default ({match: {url}}) => (
    <div>
        <Route exact path={`${url}/`} component={BookingsTable}/>
        <Route path={`${url}/add`} component={AddBookingForm}/>
        <Route path={`${url}/edit/:id`} component={EditBookingForm}/>
    </div>
);
