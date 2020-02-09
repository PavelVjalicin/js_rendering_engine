var Shader = /** @class */ (function () {
    function Shader(gl, shadersResource) {
        this.uniformLocations = {};
        this.gl = gl;
        this.createShader(shadersResource);
    }
    Shader.prototype.bind = function () {
        this.gl.useProgram(this.program);
    };
    Shader.prototype.unBind = function () {
        this.gl.useProgram(null);
    };
    Shader.prototype.destroy = function () {
        this.gl.deleteProgram(this.program);
    };
    Shader.prototype.getUniformLocation = function (name) {
        if (this.uniformLocations[name] != undefined) {
            return this.uniformLocations[name];
        }
        else {
            var location_1 = this.gl.getUniformLocation(this.program, name);
            this.uniformLocations[name] = location_1;
            return location_1;
        }
    };
    Shader.prototype.setUniformMat4fv = function (name, matrix) {
        this.gl.uniformMatrix4fv(this.getUniformLocation(name), false, matrix);
    };
    Shader.prototype.createShader = function (shadersResource) {
        var gl = this.gl;
        this.program = gl.createProgram();
        var vertexShader = gl.createShader(gl.VERTEX_SHADER);
        var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(vertexShader, shadersResource.vertexShader);
        gl.shaderSource(fragmentShader, shadersResource.fragmentShader);
        gl.compileShader(vertexShader);
        gl.compileShader(fragmentShader);
        gl.attachShader(this.program, vertexShader);
        gl.attachShader(this.program, fragmentShader);
        gl.linkProgram(this.program);
        gl.validateProgram(this.program);
        gl.deleteShader(vertexShader);
        gl.deleteShader(fragmentShader);
    };
    return Shader;
}());
export { Shader };
//# sourceMappingURL=shader.js.map