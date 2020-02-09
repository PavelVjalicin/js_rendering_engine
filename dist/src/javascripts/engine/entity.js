import { EntityManager } from "./entityManager";
var Entity = /** @class */ (function () {
    function Entity(x, y, z, resource) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.resource = resource;
        EntityManager.addEntity(this);
    }
    return Entity;
}());
export { Entity };
//# sourceMappingURL=entity.js.map