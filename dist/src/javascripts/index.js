import { glWindow } from "./engine/glWindow";
var socket = new WebSocket("ws://localhost:3000");
socket.addEventListener("open", function (e) {
    socket.send("Here I am");
});
socket.addEventListener("message", function (e) {
    if (e.data === "refresh") {
        window.location.reload();
    }
});
var canvas = document.createElement("canvas");
document.getElementsByTagName("body")[0].appendChild(canvas);
glWindow(canvas);
//# sourceMappingURL=index.js.map