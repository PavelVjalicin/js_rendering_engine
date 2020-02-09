import { Box } from "./entities/box";
import { EntityManager } from "./engine/entityManager";

class Player extends Box {
    private inputs = EntityManager.inputs
    private ySpeed = 0;
    private gravity = 0.05;
    private grounded = true;
    private speed = 0.1;
    private sizeX;
    private sizeY;
    private tileSizeX = 1;
    private tileSizeY = 1;
    private map;
    constructor(x,y,z,sizeX,sizeY,sizeZ,map) {
        super(x,y,z,sizeX,sizeY,sizeZ)
        this.sizeX = sizeX
        this.sizeY = sizeY
        this.map = map
    }

    handleMovement() {
        let moveX = 0
        let moveY = 0

        if (this.inputs.LEFT) {
            moveX -= this.speed
        }

        if(this.inputs.RIGHT) {
            moveX += this.speed
        }
        
        if(!this.grounded) {
            moveY += this.ySpeed;
            this.ySpeed -= this.gravity
        } else {
            this.ySpeed = 0
        }

        if(this.grounded && this.inputs.UP) {
            this.ySpeed = 1;
            this.grounded = false;
        }

        this.move(moveX,moveY)
    }

    move(moveX,moveY) {

        let location = this.getTileLocation()
        let xTile = location[0]
        let yTile = location[1]
        
        let downTileOccupied =  this.isDownTileOccupied()

        if(downTileOccupied) {
            if(this.ySpeed<0) {
                let tileOccupation = (this.sizeY * 0.5)
                if(tileOccupation + moveY + (this.y % 1) < 0.5) {
                    this.grounded = true
                    moveY = 0
                    this.y = (yTile*2) - 1 + this.sizeY
                } 
            }
            
        } else {
            this.grounded = false
        }

        this.x += moveX;
        this.y += moveY
    }

    isDownTileOccupied() {
        let location = this.getTileLocation()
        let xTile = location[0]
        let yTile = location[1]
        
        let downTile = this.getMapTile(xTile,yTile+1) != 0  
        let relativePosition = ((this.x*0.5+3)-xTile) - 1
        let downLeftTile = relativePosition < -this.sizeX && this.getMapTile(xTile-1,yTile+1) != 0  
        let downRightTile = relativePosition > this.sizeX && this.getMapTile(xTile+1,yTile+1) != 0  
        console.log(relativePosition)
        return downLeftTile || downTile  || downRightTile  
    }

    getMapTile(x,y) {
        let tile = 0;
        if(this.map[-y+2] != undefined && this.map[-y+2][x] != undefined) {
            tile = this.map[-y+2][x] 
        }
        return tile
    }

    getTileLocation() {
        return [Math.round(this.x*0.5)+2,Math.round(this.y*0.5)]
    }
}

export {Player}