import express from "express";
import {isoMiddleware} from "./iso";
import serveStatic from "serve-static";
import path from "path";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/build", serveStatic(path.join(__dirname, "bundle")));

app.use(isoMiddleware);

app.listen(3000, () => {
    console.log("Listening");
});
