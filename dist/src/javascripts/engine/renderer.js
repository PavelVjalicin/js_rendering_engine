var Renderer = /** @class */ (function () {
    function Renderer(gl) {
        this.gl = gl;
    }
    Renderer.prototype.draw = function (vb, ib, vbl, shader) {
        shader.bind();
        vb.bind();
        ib.bind();
        vbl.bind(shader);
        this.gl.drawElements(this.gl.TRIANGLES, ib.size, this.gl.UNSIGNED_SHORT, 0);
    };
    Renderer.prototype.clear = function () {
        var gl = this.gl;
        this.gl.clearColor(0.75, 0.85, 0.8, 1.0);
        this.gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT);
    };
    return Renderer;
}());
export { Renderer };
//# sourceMappingURL=renderer.js.map