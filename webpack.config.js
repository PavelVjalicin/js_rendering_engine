const path = require("path")

module.exports = {
    watch: true,
    mode: "development",
    entry: "./src/javascripts/index.ts",
    devtool:"inline-source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: [path.resolve(__dirname,"node_modules"),path.resolve(__dirname,"target")]
            }
        ]
    },
    resolve: {
        extensions:[".tsx",".ts",".js"]
    },
    output: {
        path: path.resolve(__dirname,"target"),
        filename:"bundle.js"
    }
}