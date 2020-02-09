import { Box } from "./entities/box";
import { EntityManager } from "./engine/entityManager";

class Player extends Box {
    private inputs = EntityManager.inputs
    private ySpeed = 0;
    private gravity = 0.01;
    private grounded = true;
    private speed = 0.10;
    private sizeX;
    private sizeY;
    private jumpForce = 0.3
    private tileSizeX = 2;
    private tileSizeY = 2;
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
            this.ySpeed = this.jumpForce;
            this.grounded = false;
        }

        this.move(moveX,moveY)
    }

    move(moveX,moveY) {

        let location = this.getTileLocation()
        let xTile = location[0]
        let yTile = location[1]
        
        let floatLoc = this.getTileLocationFloat()
        let x =  floatLoc[0]
        let y =  floatLoc[1]
        
        let downTileOccupied =  this.isDirectionOccupied(4)

        if(downTileOccupied) {
            if(moveY<0) {
                let bottomLocation = 2*yTile - (this.tileSizeY - (this.sizeY*2))/2
                if(this.y + moveY < bottomLocation) {
                    this.grounded = true
                    moveY = 0
                    this.y = bottomLocation
                } 
            }
            
        } else {
            this.grounded = false
        }

        let rightIsOccupied = this.isDirectionOccupied(3)

        if(rightIsOccupied) {
            if(moveX>0) {
                let rightLocation = 2*xTile -4 + (this.tileSizeX - (this.sizeX*2))/2 ;
                
                if(this.x + moveX > rightLocation) {
                    moveX = 0
                    this.x = rightLocation
                }
            }
        }

        let leftIsOccupied = this.isDirectionOccupied(1)

        if(leftIsOccupied) {
            if(moveX<0) {
                let leftLocation = 2*xTile -4 - (this.tileSizeX - (this.sizeX*2))/2 ;
                
                if(this.x + moveX < leftLocation) {
                    moveX = 0
                    this.x = leftLocation
                }
            }
        }

        this.x += moveX;
        this.y += moveY
    }
    //1 = LEFT, 2 = UP, 3 = RIGHT, 4 = DOWN
    isDirectionOccupied(direction) {
        let location = this.getTileLocation()
        let xTile = location[0]
        let yTile = location[1]
        
        let floatLoc = this.getTileLocationFloat()
        let x =  floatLoc[0]
        let y =  floatLoc[1]

        if(direction == 1) {
            xTile -= 1
        } else if(direction == 2){
            yTile += 1
        } else if(direction == 3) {
            xTile += 1
        } else if(direction == 4) {
            yTile -= 1
        }
        
        
        let directionTile = this.getMapTile(xTile,yTile) != 0  
    

        let relativePosition;
        let adjecentIndexes;
        let size;
        if(direction == 2 || direction ==  4) {
            
            size = (1-this.sizeX)/2
            relativePosition = (-x+xTile )
            adjecentIndexes = [[1,-1],[0,0]]
        } else if(direction == 1 || direction ==  3) {
            size = (1-this.sizeY)/2
            relativePosition = (-y+yTile )
            adjecentIndexes = [[0,0],[-1,1]]
        }
        
        

        let downLeftTile = this.getMapTile(xTile+adjecentIndexes[0][1],yTile+adjecentIndexes[1][1]) != 0 && (relativePosition - size) > 0
        let downRightTile = this.getMapTile(xTile+adjecentIndexes[0][0],yTile+adjecentIndexes[1][0]) != 0 && (relativePosition + size) < 0
        if(direction == 3) {
            
            console.log(this.map)
            console.log(adjecentIndexes)
            console.log( this.getMapTile(xTile+adjecentIndexes[0][1],yTile+adjecentIndexes[1][1]))
            console.log( this.getMapTile(xTile+adjecentIndexes[0][0],yTile+adjecentIndexes[1][0]))
            console.log(xTile,yTile)
            console.log(downLeftTile, directionTile  , downRightTile)
            
        }
        

        return downLeftTile || directionTile  || downRightTile  
    }

    getMapTile(x,y) {
        let tile = 0;
        let yy = -y
        if(this.map[yy] != undefined && this.map[yy][x] != undefined) {
            tile = this.map[yy][x] 
        }
        return tile
    }
    getTileLocationFloat() {
        return [(this.x*0.5)+2,(this.y*0.5)]
    }
    getTileLocation() {
        let loc = this.getTileLocationFloat()
        return [Math.round(loc[0]),Math.round(loc[1])]
    }
}

export {Player}