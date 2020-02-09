import {Shader} from "./shader"

class VertexBufferElement {
    name:string
    count:number
    constructor(count:number,name:string) {
        this.name = name
        this.count = count
    }
}

class VertexBufferLayout {
    private totalCount:number;
    private elems:Array<VertexBufferElement>
    private gl:WebGLRenderingContext
    constructor(elems:Array<VertexBufferElement>,gl:WebGLRenderingContext) {
        this.gl = gl
        this.elems = elems
        let totalCount = 0;
        elems.forEach( elem => {
            totalCount += elem.count
        })

        this.totalCount = totalCount
    }

    bind(shader:Shader) {
        const gl = this.gl
        let currentOffset = 0
        this.elems.forEach((elem) => {
            const location = gl.getAttribLocation(shader.program,elem.name)
            gl.vertexAttribPointer(
                location,
                elem.count,
                gl.FLOAT,
                true,
                this.totalCount * Float32Array.BYTES_PER_ELEMENT,
                currentOffset * Float32Array.BYTES_PER_ELEMENT
            )
            currentOffset += elem.count

            gl.enableVertexAttribArray(location);
        })
        
    }
}

class VertexBuffer {
    gl:WebGLRenderingContext;
    bufferID:WebGLBuffer
    constructor(gl:WebGLRenderingContext,data) {
        this.bufferID = gl.createBuffer()
        this.gl = gl;
        gl.bindBuffer(gl.ARRAY_BUFFER,this.bufferID)
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.DYNAMIC_DRAW)
    }

    destroy() {
        this.gl.deleteBuffer(this.bufferID)
    }

    bind() {
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.bufferID)
    }

    unBind() {
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER,null)
    }
}

class IndexBuffer {
    bufferID:WebGLBuffer;
    size:number;
    private gl:WebGLRenderingContext;
    constructor(gl:WebGLRenderingContext,data) {
        this.bufferID = gl.createBuffer()
        this.gl = gl
        this.size = data.length;
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.bufferID)
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(data),gl.DYNAMIC_DRAW)
    }

    destroy() {
        this.gl.deleteBuffer(this.bufferID)
    }

    bind() {
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.bufferID)
    }

    unBind() {
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,null)
    }
}

export {VertexBuffer,IndexBuffer,VertexBufferLayout,VertexBufferElement}