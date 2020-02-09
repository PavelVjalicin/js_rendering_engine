var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Entity } from "../engine/entity";
import { EntityManager } from "../engine/entityManager";
var Box = /** @class */ (function (_super) {
    __extends(Box, _super);
    function Box(x, y, z, scaleX, scaleY, scaleZ) {
        if (scaleX === void 0) { scaleX = 1; }
        if (scaleY === void 0) { scaleY = 1; }
        if (scaleZ === void 0) { scaleZ = 1; }
        return _super.call(this, x, y, z, scaleX, scaleY, scaleZ, EntityManager.getModel("Box")) || this;
    }
    return Box;
}(Entity));
export { Box };
//# sourceMappingURL=box.js.map