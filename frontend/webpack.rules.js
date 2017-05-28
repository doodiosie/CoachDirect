module.exports = [
    {
        test: /\.js$/,
        exclude: [
            /node_modules/,
            /dist/,
        ],
        loader: "babel-loader",
        options: {
            presets: ["es2015", "react"],
            sourceMaps: true
        },
    },
    {
        test: /\.css$/,
        exclude: [
            /node_modules/,
            /dist/,
        ],
        loader: ["style-loader", "css-loader"],
    },
    {
        test: /\.sass$/,
        exclude: [
            /node_modules/,
            /dist/,
        ],
        loader: ["style-loader", "css-loader", "sass-loader"],
    },
];
