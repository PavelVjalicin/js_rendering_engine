import { loadResourcesPromise } from "./resources"
import {glApp} from "../glApplication"
import {assignInputHandlers} from "../inputs"

function glWindow(canvas:HTMLCanvasElement) {

    const resourcesPromise = loadResourcesPromise()

    function getGL() {
        let gl = canvas.getContext("webgl")
        if (!gl) {
            gl = canvas.getContext("experimental-webgl")
        }

        return gl;
    }

    const gl = getGL()

    let inputs = assignInputHandlers(canvas)

    resourcesPromise.then(resources => {
        glApp(gl,canvas,inputs,resources)
    })

}

export { glWindow }