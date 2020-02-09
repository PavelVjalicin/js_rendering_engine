import { VertexBuffer, IndexBuffer } from "./buffers";
var EntityManager = /** @class */ (function () {
    function EntityManager() {
    }
    EntityManager.getModel = function (name) {
        return this.resources.objects[name];
    };
    EntityManager.addEntity = function (e) {
        this.entities.push(e);
    };
    EntityManager.entityBuffers = function (gl) {
        var _this = this;
        var vert = [];
        var int = [];
        this.entities.forEach(function (e, i) {
            var vertices = _this.multVerts(e.resource.vertices, e.x, e.y, e.z);
            var indices = e.resource.indices.map(function (n) { return n + (24 * i); });
            vert.push.apply(vert, vertices);
            int.push.apply(int, indices);
        });
        return [new VertexBuffer(gl, vert), new IndexBuffer(gl, int)];
    };
    EntityManager.multVerts = function (verticesRef, x, y, z) {
        var vertices = verticesRef.slice();
        var size = 6;
        var rows = 24;
        for (var r = 0; r < rows; r++) {
            for (var xyz = 0; xyz < 3; xyz++) {
                var value = void 0;
                if (xyz == 0)
                    value = x;
                else if (xyz == 1)
                    value = y;
                else if (xyz == 2)
                    value = z;
                vertices[r * size + xyz] += value;
            }
        }
        return vertices;
    };
    EntityManager.entities = [];
    return EntityManager;
}());
export { EntityManager };
//# sourceMappingURL=entityManager.js.map