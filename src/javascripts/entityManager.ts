import {Entity} from "./entity"
import { Resources } from "./resources";
import { VertexBuffer, IndexBuffer } from "./buffers";
class EntityManager {
    private static entities:Array<Entity> = [];
    static resources:Resources

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
            let vertices = this.multVerts(e.resource.vertices,e.x,e.y,e.z)

            let indices = e.resource.indices.map(n => n+(24*i))

            vert.push(...vertices)
            
            int.push(...indices)
        })
        

        return [new VertexBuffer(gl,vert),new IndexBuffer(gl,int)]
    }

    private static multVerts(verticesRef,x,y,z):Array<number> {
        const vertices = [...verticesRef]
        const size = 6
        const rows = 24

        for(var r =0;r<rows;r ++) {
            for(var xyz=0;xyz<3;xyz++){
                let value
                if(xyz == 0) value = x
                else if(xyz == 1) value = y
                else if(xyz == 2) value = z
                vertices[r*size+xyz] += value
            }
        }
        return vertices
    }
}

export {EntityManager}