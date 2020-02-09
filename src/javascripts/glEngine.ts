import { Resources } from "./resources";
import { glMatrix, mat4 } from "gl-matrix";
import { Shader } from "./shader";
import { IndexBuffer, VertexBuffer, VertexBufferElement, VertexBufferLayout } from "./buffers";
import { Renderer } from "./renderer";
import { EntityManager } from "./entityManager";
import { Box } from "./entities/box";

class GlEngine {

    private gl:WebGLRenderingContext
    private canvas:HTMLCanvasElement
    private projMatrix:mat4
    private shader:Shader
    private renderer:Renderer
    private modelMatrix:mat4
    private ib:IndexBuffer
    private vb:VertexBuffer
    private vbl:VertexBufferLayout
    private viewMatrix:mat4;

    constructor(gl:WebGLRenderingContext, 
        canvas:HTMLCanvasElement, 
        resources:Resources) {
            this.gl = gl
            this.canvas = canvas
            this.shader = new Shader(gl,resources.shaders)
            this.projMatrix = mat4.create()
            this.addOnResize()
            this.enableFrontFaceRendering(gl)
            
            EntityManager.resources = resources
            
            var buffers = EntityManager.entityBuffers(gl)

            this.vb = buffers[0] as VertexBuffer

            this.ib = buffers[1] as IndexBuffer

            const vbElems = [
                new VertexBufferElement(3,"vertPosition"),
                new VertexBufferElement(3,"vertColor")
            ]

            this.vbl = new VertexBufferLayout(vbElems,gl)

            this.vbl.bind(this.shader)

            this.modelMatrix = mat4.create()
            this.viewMatrix = mat4.create()
            this.projMatrix = mat4.create()

            mat4.identity(this.modelMatrix)
            mat4.lookAt(this.viewMatrix, [0, 0, 15], [0, 0, 0], [0, 1, 0])
            mat4.perspective(
                this.projMatrix,
                glMatrix.toRadian(45),
                canvas.width / canvas.height,
                0.1,
                1000)

            this.shader.bind()
            this.shader.setUniformMat4fv("mModel",this.modelMatrix)
            this.shader.setUniformMat4fv("mView",this.viewMatrix)
            this.shader.setUniformMat4fv("mProj",this.projMatrix)

            this.renderer =  new Renderer(gl)
            this.shader.unBind()
    }

    private addOnResize() {
        window.onresize = (e) => {
            this.changeCanvasSize(this.gl,this.canvas,window.innerWidth,window.innerHeight)
        }
        this.changeCanvasSize(this.gl, this.canvas, window.innerWidth, window.innerHeight)
    }


    private changeCanvasSize(gl, canvas, width, height) {
        canvas.width = width
        canvas.height = height
    
        gl.viewport(0, 0, width, height)
    
        this.projMatrix = mat4.create()
    
        mat4.perspective(
            this.projMatrix,
            glMatrix.toRadian(45),
            width / height,
            0.1,
            1000)
            
        this.shader.bind()
        this.shader.setUniformMat4fv("mProj",this.projMatrix)
    }

    onFrame(f:(modelMatrix)=>void) {

        let t = this

        let loop = function() {
            f(t.modelMatrix)
            t.shader.bind()
            t.shader.setUniformMat4fv("mModel",t.modelMatrix)

            t.renderer.clear()        
            var buffers = EntityManager.entityBuffers(t.gl)
            t.renderer.draw(buffers[0] as VertexBuffer,buffers[1] as IndexBuffer,t.vbl,t.shader)

            requestAnimationFrame(loop);
        }
        requestAnimationFrame(loop)
    }

    private enableFrontFaceRendering(gl:WebGLRenderingContext) {
        gl.enable(gl.DEPTH_TEST);
        gl.enable(gl.CULL_FACE);
        gl.frontFace(gl.CCW);
        gl.cullFace(gl.BACK);
    }
}

export {GlEngine}