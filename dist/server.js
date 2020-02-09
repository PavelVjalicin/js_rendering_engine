var Express = require("express");
var path = require("path");
var Server = /** @class */ (function () {
    function Server(_port) {
        this.port = _port;
        this.app = new Express();
        this.sockets = [];
        this.expressWS = require("express-ws")(this.app);
        var appOptions = {
            root: path.join(__dirname)
        };
        this.app.get("/", function (req, res) {
            res.sendFile("src/index.html", appOptions);
        });
        this.app.get("/bundle", function (req, res) {
            res.sendFile("./target/bundle.js", appOptions);
        });
        this.app.get("/shaders", function (req, res) {
            res.sendFile("./src/shaders.shader", appOptions);
        });
        this.app.get("/objects", function (req, res) {
            res.sendFile("./src/objects.json", appOptions);
        });
        this.app.ws("/", function (ws, req) {
        });
    }
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("Listening at port " + _this.port);
        });
        this;
    };
    Server.prototype.sendMessageToWS = function (msg) {
        this.expressWS.getWss().clients.forEach(function (socket) {
            socket.send("refresh");
        });
    };
    return Server;
}());
exports.default = function (port) { return new Server(port); };
//# sourceMappingURL=server.js.map