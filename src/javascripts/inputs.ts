const keyCodes = {
    "38":"UP",
    "40":"DOWN",
    "37":"LEFT",
    "39":"RIGHT",
    "81":"Q",
    "69":"E"
}

class Inputs {
    UP = false
    DOWN = false
    LEFT = false
    RIGHT = false
    Q = false
    E = false
}

function assignInputHandlers(canvas:HTMLCanvasElement):Inputs {

    var inputs:Inputs = new Inputs()

    function keyEvent(event:KeyboardEvent,result:Boolean) {
        const key = event.keyCode || event.which;
        const keyName = keyCodes[key]
        inputs[keyName] = result
    }

    window.onkeyup = function (e) {
        keyEvent(e,false)
    }

    window.onkeydown = function (e) {
        keyEvent(e,true)
    }

    window.ontouchstart = (e) => {
        canvas.requestFullscreen();
        let x = e.touches[0].clientX
        let y = e.touches[0].clientY
        if(x > window.innerWidth/2+window.innerWidth/10 ) inputs.RIGHT = true
        else if(x <= window.innerWidth/2-window.innerWidth/10 ) inputs.LEFT = true
        if(y > window.innerHeight/2+window.innerWidth/10  ) inputs.DOWN = true
        else if(y <= window.innerHeight/2-window.innerWidth/10 ) inputs.RIGHT = true
    }

    window.ontouchend = (e) => {
        inputs = new Inputs()
    }

    return inputs;
}

export { assignInputHandlers , Inputs }