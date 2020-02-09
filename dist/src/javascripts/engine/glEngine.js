import { glMatrix, mat4 } from "gl-matrix";
import { Shader } from "./shader";
import { VertexBufferElement, VertexBufferLayout } from "./buffers";
import { Renderer } from "./renderer";
import { EntityManager } from "./entityManager";
var GlEngine = /** @class */ (function () {
    function GlEngine(gl, canvas, resources, inputs) {
        this.gl = gl;
        this.canvas = canvas;
        this.shader = new Shader(gl, resources.shaders);
        this.projMatrix = mat4.create();
        this.addOnResize();
        this.enableFrontFaceRendering(gl);
        EntityManager.resources = resources;
        EntityManager.inputs = inputs;
        var buffers = EntityManager.entityBuffers(gl);
        this.vb = buffers[0];
        this.ib = buffers[1];
        var vbElems = [
            new VertexBufferElement(3, "vertPosition"),
            new VertexBufferElement(3, "vertColor")
        ];
        this.vbl = new VertexBufferLayout(vbElems, gl);
        this.vbl.bind(this.shader);
        this.modelMatrix = mat4.create();
        this.viewMatrix = mat4.create();
        this.projMatrix = mat4.create();
        mat4.identity(this.modelMatrix);
        mat4.lookAt(this.viewMatrix, [0, 0, 40], [0, 0, 0], [0, 1, 0]);
        mat4.perspective(this.projMatrix, glMatrix.toRadian(45), canvas.width / canvas.height, 0.1, 1000);
        this.shader.bind();
        this.shader.setUniformMat4fv("mModel", this.modelMatrix);
        this.shader.setUniformMat4fv("mView", this.viewMatrix);
        this.shader.setUniformMat4fv("mProj", this.projMatrix);
        this.renderer = new Renderer(gl);
        this.shader.unBind();
    }
    GlEngine.prototype.addOnResize = function () {
        var _this = this;
        window.onresize = function (e) {
            _this.changeCanvasSize(_this.gl, _this.canvas, window.innerWidth, window.innerHeight);
        };
        this.changeCanvasSize(this.gl, this.canvas, window.innerWidth, window.innerHeight);
    };
    GlEngine.prototype.changeCanvasSize = function (gl, canvas, width, height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
        this.projMatrix = mat4.create();
        mat4.perspective(this.projMatrix, glMatrix.toRadian(45), width / height, 0.1, 1000);
        this.shader.bind();
        this.shader.setUniformMat4fv("mProj", this.projMatrix);
    };
    GlEngine.prototype.onFrame = function (f) {
        var t = this;
        var loop = function () {
            f(t.modelMatrix);
            t.shader.bind();
            t.shader.setUniformMat4fv("mModel", t.modelMatrix);
            t.renderer.clear();
            var buffers = EntityManager.entityBuffers(t.gl);
            t.renderer.draw(buffers[0], buffers[1], t.vbl, t.shader);
            requestAnimationFrame(loop);
        };
        requestAnimationFrame(loop);
    };
    GlEngine.prototype.enableFrontFaceRendering = function (gl) {
        gl.enable(gl.DEPTH_TEST);
        gl.enable(gl.CULL_FACE);
        gl.frontFace(gl.CCW);
        gl.cullFace(gl.BACK);
    };
    return GlEngine;
}());
export { GlEngine };
//# sourceMappingURL=glEngine.js.map