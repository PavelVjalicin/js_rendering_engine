import { ObjectData } from "./resources";
import { EntityManager } from "./entityManager";
class Entity {
    x: number
    y: number
    z: number
    scaleX: number
    scaleY: number
    scaleZ: number
    resource:ObjectData

    constructor(x:number,
        y:number,
        z:number,
        scaleX:number,
        scaleY:number,
        scaleZ:number,
        resource:ObjectData) {
        this.x = x
        this.y = y
        this.z = z
        this.scaleX = scaleX
        this.scaleY = scaleY
        this.scaleZ = scaleZ
        this.resource = resource
        
        EntityManager.addEntity(this)
    }
}

export {Entity}