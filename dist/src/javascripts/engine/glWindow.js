import { loadResourcesPromise } from "./resources";
import { glApp } from "../glApplication";
import { assignInputHandlers } from "../inputs";
function glWindow(canvas) {
    var resourcesPromise = loadResourcesPromise();
    function getGL() {
        var gl = canvas.getContext("webgl");
        if (!gl) {
            gl = canvas.getContext("experimental-webgl");
        }
        return gl;
    }
    var gl = getGL();
    var inputs = assignInputHandlers(canvas);
    resourcesPromise.then(function (resources) {
        glApp(gl, canvas, inputs, resources);
    });
}
export { glWindow };
//# sourceMappingURL=glWindow.js.map