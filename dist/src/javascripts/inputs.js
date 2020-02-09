var keyCodes = {
    "38": "UP",
    "40": "DOWN",
    "37": "LEFT",
    "39": "RIGHT",
    "81": "Q",
    "69": "E",
    "87": "W",
    "83": "S",
    "65": "A",
    "68": "D"
};
var Inputs = /** @class */ (function () {
    function Inputs() {
        this.UP = false;
        this.DOWN = false;
        this.LEFT = false;
        this.RIGHT = false;
        this.Q = false;
        this.E = false;
        this.W = false;
        this.A = false;
        this.S = false;
        this.D = false;
    }
    return Inputs;
}());
function assignInputHandlers(canvas) {
    var inputs = new Inputs();
    function keyEvent(event, result) {
        var key = event.keyCode || event.which;
        var keyName = keyCodes[key];
        inputs[keyName] = result;
    }
    window.onkeyup = function (e) {
        keyEvent(e, false);
    };
    window.onkeydown = function (e) {
        keyEvent(e, true);
    };
    window.ontouchstart = function (e) {
        canvas.requestFullscreen();
        var x = e.touches[0].clientX;
        var y = e.touches[0].clientY;
        if (x > window.innerWidth / 2 + window.innerWidth / 10)
            inputs.RIGHT = true;
        else if (x <= window.innerWidth / 2 - window.innerWidth / 10)
            inputs.LEFT = true;
        if (y > window.innerHeight / 2 + window.innerWidth / 10)
            inputs.DOWN = true;
        else if (y <= window.innerHeight / 2 - window.innerWidth / 10)
            inputs.RIGHT = true;
    };
    window.ontouchend = function (e) {
        inputs = new Inputs();
    };
    return inputs;
}
export { assignInputHandlers, Inputs };
//# sourceMappingURL=inputs.js.map