import {Entity} from "./entity"
import { Resources } from "./resources";
import { VertexBuffer, IndexBuffer } from "./buffers";
import { Inputs } from "../inputs";
import { scale } from "gl-matrix/src/gl-matrix/vec4";
class EntityManager {
    private static entities:Array<Entity> = [];
    static resources:Resources
    static inputs:Inputs

    static getModel(name:string) {
        return this.resources.objects[name];
    }

    static addEntity(e:Entity) {
        this.entities.push(e)
    }

    static entityBuffers(gl:WebGLRenderingContext) {
        let vert:Array<number> = []

        let int:Array<number> = []

        this.entities.forEach( (e,i) => {
            let vertices = this.multVerts(e.resource.vertices,e)
            
            let indices = e.resource.indices.map(n => n+(24*i))

            vert.push(...vertices)
            
            int.push(...indices)
        })
        

        return [new VertexBuffer(gl,vert),new IndexBuffer(gl,int)]
    }

    private static multVerts(verticesRef,e:Entity):Array<number> {
        const vertices = [...verticesRef]
        const size = 6
        const rows = 24

        for(var r =0;r<rows;r ++) {
            for(var xyz=0;xyz<3;xyz++){
                
                let vert = vertices[r*size+xyz]
                let value
                if(xyz == 0) {
                    vert *= e.scaleX
                    value = e.x
                }
                else if(xyz == 1) {
                    vert *= e.scaleY 
                    value = e.y 
                }
                else if(xyz == 2) {
                    vert *= e.scaleZ
                    value = e.z
                }
                vert += value
                vertices[r*size+xyz] = vert
            }
        }
        return vertices
    }
}

export {EntityManager}