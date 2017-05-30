import React from "react";
import {Route} from "react-router-dom";

import AdminTemplate from "./templates/AdminTemplate";
import Provider from "./components/Provider";

export default props => (
    <Provider>
        <Route path="/admin" component={AdminTemplate}/>
    </Provider>
);
