import { Entity } from "../engine/entity";
import { ObjectData } from "../engine/resources";
import { EntityManager } from "../engine/entityManager";

class Box extends Entity {

    constructor(x,y,z,scaleX=1,scaleY=1,scaleZ=1) {
        super(x,y,z,scaleX,scaleY,scaleZ,EntityManager.getModel("Box"))
    }
}

export { Box }