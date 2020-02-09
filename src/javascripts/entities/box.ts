import { Entity } from "../engine/entity";
import { ObjectData } from "../engine/resources";
import { EntityManager } from "../engine/entityManager";

class Box extends Entity {

    constructor(x,y,z) {
        super(x,y,z,EntityManager.getModel("Box"))
    }
}

export { Box }