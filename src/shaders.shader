#shader
precision mediump float;

attribute vec3 vertPosition;
attribute vec3 vertColor;

varying vec3 fragColor;
varying float positionZ;

uniform mat4 mModel;
uniform mat4 mView;
uniform mat4 mProj;

void main() {
    fragColor = vertColor;
    gl_Position = mProj * mView * mModel * vec4(vertPosition,1.0);
    positionZ = (gl_Position.z*0.3-2.2)*-1.0;
}

#shader
precision mediump float;

varying vec3 fragColor;
varying float positionZ;

void main() {
   gl_FragColor = vec4(fragColor*positionZ, 1.0);
}