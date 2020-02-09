import {mat4} from "gl-matrix"
import {Shaders} from "./resources"

class Shader {

    private uniformLocations = {}
    private gl:WebGLRenderingContext
    program:WebGLProgram;

    constructor(gl:WebGLRenderingContext,shadersResource:Shaders) {
        this.gl = gl;
        this.createShader(shadersResource)
    }

    bind() {
        this.gl.useProgram(this.program)
    }

    unBind() {
        this.gl.useProgram(null)
    }

    destroy() {
        this.gl.deleteProgram(this.program)
    }

    private getUniformLocation(name:string) {
        if(this.uniformLocations[name] != undefined) {
            return this.uniformLocations[name]
        } else {
            let location = this.gl.getUniformLocation(this.program,name)
            this.uniformLocations[name] = location
            return location
        }
    }

    setUniformMat4fv(name:string,matrix:mat4) {
        this.gl.uniformMatrix4fv(this.getUniformLocation(name),false,matrix)
    }

    private createShader(shadersResource:Shaders) {
        const gl = this.gl
        this.program = gl.createProgram();

        var vertexShader = gl.createShader(gl.VERTEX_SHADER)
        var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)

        gl.shaderSource(vertexShader, shadersResource.vertexShader)
        gl.shaderSource(fragmentShader, shadersResource.fragmentShader)

        gl.compileShader(vertexShader)
        gl.compileShader(fragmentShader)

        gl.attachShader(this.program, vertexShader)
        gl.attachShader(this.program, fragmentShader)

        gl.linkProgram(this.program)

        gl.validateProgram(this.program);

        gl.deleteShader(vertexShader)
        gl.deleteShader(fragmentShader)
    }
}

export {Shader}