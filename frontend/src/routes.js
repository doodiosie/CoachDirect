import React from "react";
import {Route} from "react-router-dom";

import AdminTemplate from "./templates/AdminTemplate";
import Provider from "./components/Provider";

import BookingsTable from "./admin/bookings/BookingsTable";
import CardsTable from "./admin/cards/CardsTable";

export default props => (
    <Provider>
        <Route path="/admin" component={AdminTemplate}/>
    </Provider>
);
