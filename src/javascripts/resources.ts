interface ObjectData {
    vertices:Array<number>
    indices:Array<number>
}

interface ObjectMetaData {
    [key: string]:ObjectData
}

class Resources {
    shaders:Shaders;
    objects:ObjectMetaData;
    constructor(shaders:Shaders,objects:ObjectMetaData) {
        this.shaders = shaders
        this.objects = objects
    }
}

class Shaders {
    vertexShader:string;
    fragmentShader:string;
    constructor(vertexShader,fragmentShader) {
        this.vertexShader = vertexShader
        this.fragmentShader = fragmentShader
    }
}

function loadResourcesPromise():Promise<Resources> {

    async function xhr(url):Promise<string> {
        const xhr = new XMLHttpRequest();
    
        let promise:Promise<string> = new Promise( (resolve,reject) =>{
            xhr.onreadystatechange = () => {
                if(xhr.readyState == 4) {
                    if(xhr.status == 200) resolve(xhr.responseText)
                    else reject(xhr)
                }
            }
        
            xhr.open("GET",url)
        
            xhr.send()
        });
    
        return await promise
    }
    
    const shaders:Promise<Shaders> = xhr("shaders").then(shaders => {
        let shaderArray = shaders.split("#shader")
        shaderArray.splice(0,1);
        return new Shaders(shaderArray[0],shaderArray[1])
    })

    const objects:Promise<ObjectMetaData> = xhr("objects").then(str => JSON.parse(str))

     let resources = Promise.all([shaders,objects]).then(results => {
        return new Resources(
            results[0],
            results[1]
        )
    })

    return resources
    
}

export {
    loadResourcesPromise,
    Resources,
    Shaders,
    ObjectMetaData,
    ObjectData
} 