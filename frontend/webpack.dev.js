var path = require("path");
var rules = require("./webpack.rules.js");

module.exports = [
    {
        entry: path.join(__dirname, "src/index.js"),
        output: {
            path: path.join(__dirname, "src/bundle"),
            filename: "bundle.js",
        },
        module: {
            rules: rules
        },
    },
];
