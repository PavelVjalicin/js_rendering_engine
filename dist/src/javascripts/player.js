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
import { Box } from "./entities/box";
import { EntityManager } from "./engine/entityManager";
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(x, y, z, map) {
        var _this = _super.call(this, x, y, z) || this;
        _this.inputs = EntityManager.inputs;
        _this.ySpeed = 0;
        _this.gravity = 0.05;
        _this.grounded = true;
        _this.speed = 0.25;
        _this.sizeX = 1;
        _this.sizeY = 1;
        _this.map = map;
        return _this;
    }
    Player.prototype.handleMovement = function () {
        var moveX = 0;
        var moveY = 0;
        if (this.inputs.LEFT) {
            moveX -= this.speed;
        }
        if (this.inputs.RIGHT) {
            moveX += this.speed;
        }
        if (!this.grounded) {
            moveY += this.ySpeed;
            this.ySpeed -= this.gravity;
        }
        else {
            this.ySpeed = 0;
        }
        if (this.grounded && this.inputs.UP) {
            this.ySpeed = 1;
            this.grounded = false;
        }
        this.move(moveX, moveY);
    };
    Player.prototype.move = function (moveX, moveY) {
        var location = this.getTileLocation();
        var xTile = location[0];
        var yTile = location[1];
        var downTileOccupied = this.getMapTile(xTile, yTile + 1) != 0;
        console.log(downTileOccupied);
        if (downTileOccupied) {
            var tileOccupation = (this.sizeY / 2);
            if (tileOccupation + moveY + (this.y % 1) > 0.5) {
                this.grounded = true;
                moveY = 0;
                this.y = yTile + 0.5;
            }
        }
        else {
            this.grounded = false;
        }
        this.x += moveX;
        this.y += moveY;
    };
    Player.prototype.getMapTile = function (x, y) {
        var tile = 0;
        if (this.map[-y] != undefined && this.map[-y + 2][x] != undefined) {
            tile = this.map[-y + 2][x];
        }
        return tile;
    };
    Player.prototype.getTileLocation = function () {
        return [Math.round(this.x) + 4, Math.round(this.y - 1)];
    };
    return Player;
}(Box));
export { Player };
//# sourceMappingURL=player.js.map