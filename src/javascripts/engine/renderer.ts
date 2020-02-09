import {VertexBuffer,IndexBuffer, VertexBufferLayout} from "./buffers"
import {Shader} from "./shader"
class Renderer {
    private gl:WebGLRenderingContext
    constructor(gl:WebGLRenderingContext) {
        this.gl = gl
    }

    draw(vb:VertexBuffer,ib:IndexBuffer,vbl:VertexBufferLayout,shader:Shader) {
        shader.bind()
        vb.bind()
        ib.bind()
        vbl.bind(shader)

        this.gl.drawElements(this.gl.TRIANGLES,ib.size,this.gl.UNSIGNED_SHORT,0);
    }

    clear() {
        const gl = this.gl
        this.gl.clearColor(0.75, 0.85, 0.8, 1.0)
        this.gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT)
    }
}

export {Renderer}