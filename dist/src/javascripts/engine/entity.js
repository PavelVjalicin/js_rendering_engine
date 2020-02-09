import { EntityManager } from "./entityManager";
var Entity = /** @class */ (function () {
    function Entity(x, y, z, scaleX, scaleY, scaleZ, resource) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.scaleX = scaleX;
        this.scaleY = scaleY;
        this.scaleZ = scaleZ;
        this.resource = resource;
        EntityManager.addEntity(this);
    }
    return Entity;
}());
export { Entity };
//# sourceMappingURL=entity.js.map