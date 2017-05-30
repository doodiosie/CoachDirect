import React from "react";
import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";

import MainTemplate from "./templates/MainTemplate";

import Routes from "./routes";
import Provider from "./components/Provider";

import "./css/react-datepicker.min.css";
import "./css/index.sass";

render(
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>
, document.getElementById("react-target"));
