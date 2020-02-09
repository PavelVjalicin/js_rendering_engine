import { ObjectData } from "./resources";
import { EntityManager } from "./entityManager";
class Entity {
    x: number
    y: number
    z: number
    resource:ObjectData

    constructor(x:number,y:number,z:number,resource:ObjectData) {
        this.x = x
        this.y = y
        this.z = z
        this.resource = resource
        
        EntityManager.addEntity(this)
    }
}

export {Entity}