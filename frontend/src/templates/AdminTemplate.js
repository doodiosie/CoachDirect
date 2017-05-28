import React from "react";
import {Route} from "react-router-dom";

import Bookings from "../admin/bookings/Bookings";

export default ({match: {url}}) => (
    <div className="container">
        <Route path={`${url}/bookings`} component={Bookings}/>
    </div>
)
