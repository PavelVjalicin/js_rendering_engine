var Server = require("./server.js").default;
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
webpack(webpackConfig, function (err, stats) {
    server.sendMessageToWS("refresh");
});
var server = Server(3000);
server.start();
//# sourceMappingURL=dev-build.js.map