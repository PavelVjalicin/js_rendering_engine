import {  mat4, quat } from "gl-matrix";
import { Resources } from "./engine/resources";
import {Inputs} from "./inputs"
import { GlEngine } from "./engine/glEngine";
import { Box } from "./entities/box";
import { Player } from "./player";

function glApp( gl:WebGLRenderingContext, 
                canvas:HTMLCanvasElement, 
                inputs:Inputs, 
                resources:Resources) {

    let engine = new GlEngine(gl,canvas,resources,inputs)

    var zangle = 0
    var yangle = 0
    var xangle = 0

    var identityMatrix = new Float32Array(16);
    mat4.identity(identityMatrix as mat4);

    var orientation = quat.create()

    var quatAngles = quat.create()
    quat.fromEuler(quatAngles, xangle, yangle, zangle)

    

    var map = [
        [0,1,0,0,0,0,0,0,0,1],
        [1,1,0,0,0,1,0,0,0,1],
        [0,1,1,1,1,1,0,0,1,1],
        [0,1,1,1,1,1,0,0,1,1],
        [0,1,1,1,1,1,1,0,1,1],
    ]

    var player = new Player(2,0,0,0.3,0.3,0.3,map)

    map.forEach((row,rowNum) => {
        row.forEach( (tile,tileNum) => {
            if(tile == 1) {
                new Box(tileNum*2-4,-rowNum*2,0)
            } else if(tile == 0) {

            }
        })
    })

    engine.onFrame(function (modelMatrix) {
       
        player.handleMovement()
        let acc = 0.1
        let friction = 0.95
        if (!(inputs.W || inputs.S || inputs.A || inputs.D || inputs.Q || inputs.E)) {
            xangle *= friction
            yangle *= friction
            zangle *= friction
        }

        if (inputs.W) {
            xangle += acc

        } else if (inputs.S) {
            xangle += -acc
        }


        if (inputs.A) {
            
            yangle += -acc

        } else if (inputs.D) {
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
