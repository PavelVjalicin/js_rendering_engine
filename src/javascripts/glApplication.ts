import {  mat4, quat } from "gl-matrix";
import { Resources } from "./resources";
import {Inputs} from "./inputs"
import { GlEngine } from "./glEngine";

function glApp( gl:WebGLRenderingContext, 
                canvas:HTMLCanvasElement, 
                inputs:Inputs, 
                resources:Resources) {

    let engine = new GlEngine(gl,canvas,resources)

    var zangle = 0
    var yangle = 0
    var xangle = 0

    var identityMatrix = new Float32Array(16);
    mat4.identity(identityMatrix as mat4);

    var orientation = quat.create()

    var quatAngles = quat.create()
    quat.fromEuler(quatAngles, xangle, yangle, zangle)

    engine.onFrame(function (modelMatrix) {

        let acc = 0.1
        let friction = 0.95
        if (!(inputs.UP || inputs.DOWN || inputs.LEFT || inputs.RIGHT || inputs.Q || inputs.E)) {
            xangle *= friction
            yangle *= friction
            zangle *= friction
        }

        if (inputs.UP) {
            xangle += acc

        } else if (inputs.DOWN) {
            xangle += -acc
        }


        if (inputs.LEFT) {

            yangle += -acc

        } else if (inputs.RIGHT) {
            yangle += acc

        }
        if (inputs.Q) {
            zangle += acc
        } else if (inputs.E) {
            zangle += -acc
        }

        quat.fromEuler(orientation, xangle, yangle, zangle)

        quat.mul(quatAngles, orientation, quatAngles)

        mat4.fromQuat(modelMatrix, quatAngles)
    })

}

export { glApp };
