var VertexBufferElement = /** @class */ (function () {
    function VertexBufferElement(count, name) {
        this.name = name;
        this.count = count;
    }
    return VertexBufferElement;
}());
var VertexBufferLayout = /** @class */ (function () {
    function VertexBufferLayout(elems, gl) {
        this.gl = gl;
        this.elems = elems;
        var totalCount = 0;
        elems.forEach(function (elem) {
            totalCount += elem.count;
        });
        this.totalCount = totalCount;
    }
    VertexBufferLayout.prototype.bind = function (shader) {
        var _this = this;
        var gl = this.gl;
        var currentOffset = 0;
        this.elems.forEach(function (elem) {
            var location = gl.getAttribLocation(shader.program, elem.name);
            gl.vertexAttribPointer(location, elem.count, gl.FLOAT, true, _this.totalCount * Float32Array.BYTES_PER_ELEMENT, currentOffset * Float32Array.BYTES_PER_ELEMENT);
            currentOffset += elem.count;
            gl.enableVertexAttribArray(location);
        });
    };
    return VertexBufferLayout;
}());
var VertexBuffer = /** @class */ (function () {
    function VertexBuffer(gl, data) {
        this.bufferID = gl.createBuffer();
        this.gl = gl;
        gl.bindBuffer(gl.ARRAY_BUFFER, this.bufferID);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.DYNAMIC_DRAW);
    }
    VertexBuffer.prototype.destroy = function () {
        this.gl.deleteBuffer(this.bufferID);
    };
    VertexBuffer.prototype.bind = function () {
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.bufferID);
    };
    VertexBuffer.prototype.unBind = function () {
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
    };
    return VertexBuffer;
}());
var IndexBuffer = /** @class */ (function () {
    function IndexBuffer(gl, data) {
        this.bufferID = gl.createBuffer();
        this.gl = gl;
        this.size = data.length;
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.bufferID);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(data), gl.DYNAMIC_DRAW);
    }
    IndexBuffer.prototype.destroy = function () {
        this.gl.deleteBuffer(this.bufferID);
    };
    IndexBuffer.prototype.bind = function () {
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.bufferID);
    };
    IndexBuffer.prototype.unBind = function () {
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null);
    };
    return IndexBuffer;
}());
export { VertexBuffer, IndexBuffer, VertexBufferLayout, VertexBufferElement };
//# sourceMappingURL=buffers.js.map