import { Entity } from "../entity";
import { ObjectData } from "../resources";
import { EntityManager } from "../entityManager";

class Box extends Entity {

    constructor(x,y,z) {
        super(x,y,z,EntityManager.getModel("Box"))
    }
}

export { Box }