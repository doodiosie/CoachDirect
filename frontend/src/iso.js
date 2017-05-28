import React from "react";
import {renderToString} from "react-dom/server";
import {StaticRouter} from "react-router";
import Routes from "./routes";

function handleRouter(req, res) {
    const html = renderToString(<StaticRouter
        location={req.url}
        context={{}}
        >
        <Routes/>
    </StaticRouter>);
    
    res.status(200);
    res.render("index", {
        html
    });
    res.end();
}

export function isoMiddleware(req, res) {
    handleRouter(req, res);
}
