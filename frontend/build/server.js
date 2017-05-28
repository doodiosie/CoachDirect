"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _iso = require("./iso");

var _serveStatic = require("serve-static");

var _serveStatic2 = _interopRequireDefault(_serveStatic);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.set("view engine", "ejs");
app.set("views", _path2.default.join(__dirname, "views"));

app.use("/build", (0, _serveStatic2.default)(_path2.default.join(__dirname, "bundle")));

app.use(_iso.isoMiddleware);

app.listen(3000, function () {
    console.log("Listening");
});