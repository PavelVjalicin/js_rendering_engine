/******/ (function (modules) {
    /******/ // The module cache
    /******/ var installedModules = {};
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/ if (installedModules[moduleId]) {
            /******/ return installedModules[moduleId].exports;
            /******/ }
        /******/ // Create a new module (and put it into the cache)
        /******/ var module = installedModules[moduleId] = {
            /******/ i: moduleId,
            /******/ l: false,
            /******/ exports: {}
            /******/ 
        };
        /******/
        /******/ // Execute the module function
        /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/ module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/ return module.exports;
        /******/ 
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/ __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/ __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/ __webpack_require__.d = function (exports, name, getter) {
        /******/ if (!__webpack_require__.o(exports, name)) {
            /******/ Object.defineProperty(exports, name, { enumerable: true, get: getter });
            /******/ }
        /******/ 
    };
    /******/
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = function (exports) {
        /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            /******/ }
        /******/ Object.defineProperty(exports, '__esModule', { value: true });
        /******/ 
    };
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/ __webpack_require__.t = function (value, mode) {
        /******/ if (mode & 1)
            value = __webpack_require__(value);
        /******/ if (mode & 8)
            return value;
        /******/ if ((mode & 4) && typeof value === 'object' && value && value.__esModule)
            return value;
        /******/ var ns = Object.create(null);
        /******/ __webpack_require__.r(ns);
        /******/ Object.defineProperty(ns, 'default', { enumerable: true, value: value });
        /******/ if (mode & 2 && typeof value != 'string')
            for (var key in value)
                __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
        /******/ return ns;
        /******/ 
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = function (module) {
        /******/ var getter = module && module.__esModule ?
            /******/ function getDefault() { return module['default']; } :
            /******/ function getModuleExports() { return module; };
        /******/ __webpack_require__.d(getter, 'a', getter);
        /******/ return getter;
        /******/ 
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/ __webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /******/
    /******/ // __webpack_public_path__
    /******/ __webpack_require__.p = "";
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/ return __webpack_require__(__webpack_require__.s = "./src/javascripts/index.ts");
    /******/ 
})({
    /***/ "./node_modules/gl-matrix/esm/common.js": 
    /*!**********************************************!*\
      !*** ./node_modules/gl-matrix/esm/common.js ***!
      \**********************************************/
    /*! exports provided: EPSILON, ARRAY_TYPE, RANDOM, setMatrixArrayType, toRadian, equals */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPSILON", function () { return EPSILON; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARRAY_TYPE", function () { return ARRAY_TYPE; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RANDOM", function () { return RANDOM; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMatrixArrayType", function () { return setMatrixArrayType; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRadian", function () { return toRadian; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function () { return equals; });
        /**
         * Common utilities
         * @module glMatrix
         */
        // Configuration Constants
        var EPSILON = 0.000001;
        var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
        var RANDOM = Math.random;
        /**
         * Sets the type of array used when creating new vectors and matrices
         *
         * @param {Type} type Array type, such as Float32Array or Array
         */
        function setMatrixArrayType(type) {
            ARRAY_TYPE = type;
        }
        var degree = Math.PI / 180;
        /**
         * Convert Degree To Radian
         *
         * @param {Number} a Angle in Degrees
         */
        function toRadian(a) {
            return a * degree;
        }
        /**
         * Tests whether or not the arguments have approximately the same value, within an absolute
         * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
         * than or equal to 1.0, and a relative tolerance is used for larger values)
         *
         * @param {Number} a The first number to test.
         * @param {Number} b The second number to test.
         * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
         */
        function equals(a, b) {
            return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
        }
        /***/ 
    }),
    /***/ "./node_modules/gl-matrix/esm/index.js": 
    /*!*********************************************!*\
      !*** ./node_modules/gl-matrix/esm/index.js ***!
      \*********************************************/
    /*! exports provided: glMatrix, mat2, mat2d, mat3, mat4, quat, quat2, vec2, vec3, vec4 */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");
        /* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "glMatrix", function () { return _common_js__WEBPACK_IMPORTED_MODULE_0__; });
        /* harmony import */ var _mat2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mat2.js */ "./node_modules/gl-matrix/esm/mat2.js");
        /* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat2", function () { return _mat2_js__WEBPACK_IMPORTED_MODULE_1__; });
        /* harmony import */ var _mat2d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mat2d.js */ "./node_modules/gl-matrix/esm/mat2d.js");
        /* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat2d", function () { return _mat2d_js__WEBPACK_IMPORTED_MODULE_2__; });
        /* harmony import */ var _mat3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mat3.js */ "./node_modules/gl-matrix/esm/mat3.js");
        /* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat3", function () { return _mat3_js__WEBPACK_IMPORTED_MODULE_3__; });
        /* harmony import */ var _mat4_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mat4.js */ "./node_modules/gl-matrix/esm/mat4.js");
        /* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat4", function () { return _mat4_js__WEBPACK_IMPORTED_MODULE_4__; });
        /* harmony import */ var _quat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quat.js */ "./node_modules/gl-matrix/esm/quat.js");
        /* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "quat", function () { return _quat_js__WEBPACK_IMPORTED_MODULE_5__; });
        /* harmony import */ var _quat2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quat2.js */ "./node_modules/gl-matrix/esm/quat2.js");
        /* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "quat2", function () { return _quat2_js__WEBPACK_IMPORTED_MODULE_6__; });
        /* harmony import */ var _vec2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vec2.js */ "./node_modules/gl-matrix/esm/vec2.js");
        /* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vec2", function () { return _vec2_js__WEBPACK_IMPORTED_MODULE_7__; });
        /* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vec3.js */ "./node_modules/gl-matrix/esm/vec3.js");
        /* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vec3", function () { return _vec3_js__WEBPACK_IMPORTED_MODULE_8__; });
        /* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vec4.js */ "./node_modules/gl-matrix/esm/vec4.js");
        /* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vec4", function () { return _vec4_js__WEBPACK_IMPORTED_MODULE_9__; });
        /***/ 
    }),
    /***/ "./node_modules/gl-matrix/esm/mat2.js": 
    /*!********************************************!*\
      !*** ./node_modules/gl-matrix/esm/mat2.js ***!
      \********************************************/
    /*! exports provided: create, clone, copy, identity, fromValues, set, transpose, invert, adjoint, determinant, multiply, rotate, scale, fromRotation, fromScaling, str, frob, LDU, add, subtract, exactEquals, equals, multiplyScalar, multiplyScalarAndAdd, mul, sub */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function () { return create; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function () { return clone; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function () { return copy; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function () { return identity; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function () { return fromValues; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function () { return set; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function () { return transpose; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function () { return invert; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjoint", function () { return adjoint; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function () { return determinant; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function () { return multiply; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function () { return rotate; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function () { return scale; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function () { return fromRotation; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromScaling", function () { return fromScaling; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function () { return str; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frob", function () { return frob; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LDU", function () { return LDU; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function () { return add; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function () { return subtract; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function () { return exactEquals; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function () { return equals; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function () { return multiplyScalar; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalarAndAdd", function () { return multiplyScalarAndAdd; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function () { return mul; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function () { return sub; });
        /* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");
        /**
         * 2x2 Matrix
         * @module mat2
         */
        /**
         * Creates a new identity mat2
         *
         * @returns {mat2} a new 2x2 matrix
         */
        function create() {
            var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
            if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
                out[1] = 0;
                out[2] = 0;
            }
            out[0] = 1;
            out[3] = 1;
            return out;
        }
        /**
         * Creates a new mat2 initialized with values from an existing matrix
         *
         * @param {mat2} a matrix to clone
         * @returns {mat2} a new 2x2 matrix
         */
        function clone(a) {
            var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
            out[0] = a[0];
            out[1] = a[1];
            out[2] = a[2];
            out[3] = a[3];
            return out;
        }
        /**
         * Copy the values from one mat2 to another
         *
         * @param {mat2} out the receiving matrix
         * @param {mat2} a the source matrix
         * @returns {mat2} out
         */
        function copy(out, a) {
            out[0] = a[0];
            out[1] = a[1];
            out[2] = a[2];
            out[3] = a[3];
            return out;
        }
        /**
         * Set a mat2 to the identity matrix
         *
         * @param {mat2} out the receiving matrix
         * @returns {mat2} out
         */
        function identity(out) {
            out[0] = 1;
            out[1] = 0;
            out[2] = 0;
            out[3] = 1;
            return out;
        }
        /**
         * Create a new mat2 with the given values
         *
         * @param {Number} m00 Component in column 0, row 0 position (index 0)
         * @param {Number} m01 Component in column 0, row 1 position (index 1)
         * @param {Number} m10 Component in column 1, row 0 position (index 2)
         * @param {Number} m11 Component in column 1, row 1 position (index 3)
         * @returns {mat2} out A new 2x2 matrix
         */
        function fromValues(m00, m01, m10, m11) {
            var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
            out[0] = m00;
            out[1] = m01;
            out[2] = m10;
            out[3] = m11;
            return out;
        }
        /**
         * Set the components of a mat2 to the given values
         *
         * @param {mat2} out the receiving matrix
         * @param {Number} m00 Component in column 0, row 0 position (index 0)
         * @param {Number} m01 Component in column 0, row 1 position (index 1)
         * @param {Number} m10 Component in column 1, row 0 position (index 2)
         * @param {Number} m11 Component in column 1, row 1 position (index 3)
         * @returns {mat2} out
         */
        function set(out, m00, m01, m10, m11) {
            out[0] = m00;
            out[1] = m01;
            out[2] = m10;
            out[3] = m11;
            return out;
        }
        /**
         * Transpose the values of a mat2
         *
         * @param {mat2} out the receiving matrix
         * @param {mat2} a the source matrix
         * @returns {mat2} out
         */
        function transpose(out, a) {
            // If we are transposing ourselves we can skip a few steps but have to cache
            // some values
            if (out === a) {
                var a1 = a[1];
                out[1] = a[2];
                out[2] = a1;
            }
            else {
                out[0] = a[0];
                out[1] = a[2];
                out[2] = a[1];
                out[3] = a[3];
            }
            return out;
        }
        /**
         * Inverts a mat2
         *
         * @param {mat2} out the receiving matrix
         * @param {mat2} a the source matrix
         * @returns {mat2} out
         */
        function invert(out, a) {
            var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3]; // Calculate the determinant
            var det = a0 * a3 - a2 * a1;
            if (!det) {
                return null;
            }
            det = 1.0 / det;
            out[0] = a3 * det;
            out[1] = -a1 * det;
            out[2] = -a2 * det;
            out[3] = a0 * det;
            return out;
        }
        /**
         * Calculates the adjugate of a mat2
         *
         * @param {mat2} out the receiving matrix
         * @param {mat2} a the source matrix
         * @returns {mat2} out
         */
        function adjoint(out, a) {
            // Caching this value is nessecary if out == a
            var a0 = a[0];
            out[0] = a[3];
            out[1] = -a[1];
            out[2] = -a[2];
            out[3] = a0;
            return out;
        }
        /**
         * Calculates the determinant of a mat2
         *
         * @param {mat2} a the source matrix
         * @returns {Number} determinant of a
         */
        function determinant(a) {
            return a[0] * a[3] - a[2] * a[1];
        }
        /**
         * Multiplies two mat2's
         *
         * @param {mat2} out the receiving matrix
         * @param {mat2} a the first operand
         * @param {mat2} b the second operand
         * @returns {mat2} out
         */
        function multiply(out, a, b) {
            var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
            var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
            out[0] = a0 * b0 + a2 * b1;
            out[1] = a1 * b0 + a3 * b1;
            out[2] = a0 * b2 + a2 * b3;
            out[3] = a1 * b2 + a3 * b3;
            return out;
        }
        /**
         * Rotates a mat2 by the given angle
         *
         * @param {mat2} out the receiving matrix
         * @param {mat2} a the matrix to rotate
         * @param {Number} rad the angle to rotate the matrix by
         * @returns {mat2} out
         */
        function rotate(out, a, rad) {
            var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
            var s = Math.sin(rad);
            var c = Math.cos(rad);
            out[0] = a0 * c + a2 * s;
            out[1] = a1 * c + a3 * s;
            out[2] = a0 * -s + a2 * c;
            out[3] = a1 * -s + a3 * c;
            return out;
        }
        /**
         * Scales the mat2 by the dimensions in the given vec2
         *
         * @param {mat2} out the receiving matrix
         * @param {mat2} a the matrix to rotate
         * @param {vec2} v the vec2 to scale the matrix by
         * @returns {mat2} out
         **/
        function scale(out, a, v) {
            var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
            var v0 = v[0], v1 = v[1];
            out[0] = a0 * v0;
            out[1] = a1 * v0;
            out[2] = a2 * v1;
            out[3] = a3 * v1;
            return out;
        }
        /**
         * Creates a matrix from a given angle
         * This is equivalent to (but much faster than):
         *
         *     mat2.identity(dest);
         *     mat2.rotate(dest, dest, rad);
         *
         * @param {mat2} out mat2 receiving operation result
         * @param {Number} rad the angle to rotate the matrix by
         * @returns {mat2} out
         */
        function fromRotation(out, rad) {
            var s = Math.sin(rad);
            var c = Math.cos(rad);
            out[0] = c;
            out[1] = s;
            out[2] = -s;
            out[3] = c;
            return out;
        }
        /**
         * Creates a matrix from a vector scaling
         * This is equivalent to (but much faster than):
         *
         *     mat2.identity(dest);
         *     mat2.scale(dest, dest, vec);
         *
         * @param {mat2} out mat2 receiving operation result
         * @param {vec2} v Scaling vector
         * @returns {mat2} out
         */
        function fromScaling(out, v) {
            out[0] = v[0];
            out[1] = 0;
            out[2] = 0;
            out[3] = v[1];
            return out;
        }
        /**
         * Returns a string representation of a mat2
         *
         * @param {mat2} a matrix to represent as a string
         * @returns {String} string representation of the matrix
         */
        function str(a) {
            return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
        }
        /**
         * Returns Frobenius norm of a mat2
         *
         * @param {mat2} a the matrix to calculate Frobenius norm of
         * @returns {Number} Frobenius norm
         */
        function frob(a) {
            return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2));
        }
        /**
         * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
         * @param {mat2} L the lower triangular matrix
         * @param {mat2} D the diagonal matrix
         * @param {mat2} U the upper triangular matrix
         * @param {mat2} a the input matrix to factorize
         */
        function LDU(L, D, U, a) {
            L[2] = a[2] / a[0];
            U[0] = a[0];
            U[1] = a[1];
            U[3] = a[3] - L[2] * U[1];
            return [L, D, U];
        }
        /**
         * Adds two mat2's
         *
         * @param {mat2} out the receiving matrix
         * @param {mat2} a the first operand
         * @param {mat2} b the second operand
         * @returns {mat2} out
         */
        function add(out, a, b) {
            out[0] = a[0] + b[0];
            out[1] = a[1] + b[1];
            out[2] = a[2] + b[2];
            out[3] = a[3] + b[3];
            return out;
        }
        /**
         * Subtracts matrix b from matrix a
         *
         * @param {mat2} out the receiving matrix
         * @param {mat2} a the first operand
         * @param {mat2} b the second operand
         * @returns {mat2} out
         */
        function subtract(out, a, b) {
            out[0] = a[0] - b[0];
            out[1] = a[1] - b[1];
            out[2] = a[2] - b[2];
            out[3] = a[3] - b[3];
            return out;
        }
        /**
         * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
         *
         * @param {mat2} a The first matrix.
         * @param {mat2} b The second matrix.
         * @returns {Boolean} True if the matrices are equal, false otherwise.
         */
        function exactEquals(a, b) {
            return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
        }
        /**
         * Returns whether or not the matrices have approximately the same elements in the same position.
         *
         * @param {mat2} a The first matrix.
         * @param {mat2} b The second matrix.
         * @returns {Boolean} True if the matrices are equal, false otherwise.
         */
        function equals(a, b) {
            var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
            var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
            return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3));
        }
        /**
         * Multiply each element of the matrix by a scalar.
         *
         * @param {mat2} out the receiving matrix
         * @param {mat2} a the matrix to scale
         * @param {Number} b amount to scale the matrix's elements by
         * @returns {mat2} out
         */
        function multiplyScalar(out, a, b) {
            out[0] = a[0] * b;
            out[1] = a[1] * b;
            out[2] = a[2] * b;
            out[3] = a[3] * b;
            return out;
        }
        /**
         * Adds two mat2's after multiplying each element of the second operand by a scalar value.
         *
         * @param {mat2} out the receiving vector
         * @param {mat2} a the first operand
         * @param {mat2} b the second operand
         * @param {Number} scale the amount to scale b's elements by before adding
         * @returns {mat2} out
         */
        function multiplyScalarAndAdd(out, a, b, scale) {
            out[0] = a[0] + b[0] * scale;
            out[1] = a[1] + b[1] * scale;
            out[2] = a[2] + b[2] * scale;
            out[3] = a[3] + b[3] * scale;
            return out;
        }
        /**
         * Alias for {@link mat2.multiply}
         * @function
         */
        var mul = multiply;
        /**
         * Alias for {@link mat2.subtract}
         * @function
         */
        var sub = subtract;
        /***/ 
    }),
    /***/ "./node_modules/gl-matrix/esm/mat2d.js": 
    /*!*********************************************!*\
      !*** ./node_modules/gl-matrix/esm/mat2d.js ***!
      \*********************************************/
    /*! exports provided: create, clone, copy, identity, fromValues, set, invert, determinant, multiply, rotate, scale, translate, fromRotation, fromScaling, fromTranslation, str, frob, add, subtract, multiplyScalar, multiplyScalarAndAdd, exactEquals, equals, mul, sub */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function () { return create; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function () { return clone; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function () { return copy; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function () { return identity; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function () { return fromValues; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function () { return set; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function () { return invert; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function () { return determinant; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function () { return multiply; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function () { return rotate; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function () { return scale; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function () { return translate; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function () { return fromRotation; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromScaling", function () { return fromScaling; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTranslation", function () { return fromTranslation; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function () { return str; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frob", function () { return frob; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function () { return add; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function () { return subtract; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function () { return multiplyScalar; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalarAndAdd", function () { return multiplyScalarAndAdd; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function () { return exactEquals; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function () { return equals; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function () { return mul; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function () { return sub; });
        /* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");
        /**
         * 2x3 Matrix
         * @module mat2d
         *
         * @description
         * A mat2d contains six elements defined as:
         * <pre>
         * [a, c, tx,
         *  b, d, ty]
         * </pre>
         * This is a short form for the 3x3 matrix:
         * <pre>
         * [a, c, tx,
         *  b, d, ty,
         *  0, 0, 1]
         * </pre>
         * The last row is ignored so the array is shorter and operations are faster.
         */
        /**
         * Creates a new identity mat2d
         *
         * @returns {mat2d} a new 2x3 matrix
         */
        function create() {
            var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](6);
            if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
                out[1] = 0;
                out[2] = 0;
                out[4] = 0;
                out[5] = 0;
            }
            out[0] = 1;
            out[3] = 1;
            return out;
        }
        /**
         * Creates a new mat2d initialized with values from an existing matrix
         *
         * @param {mat2d} a matrix to clone
         * @returns {mat2d} a new 2x3 matrix
         */
        function clone(a) {
            var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](6);
            out[0] = a[0];
            out[1] = a[1];
            out[2] = a[2];
            out[3] = a[3];
            out[4] = a[4];
            out[5] = a[5];
            return out;
        }
        /**
         * Copy the values from one mat2d to another
         *
         * @param {mat2d} out the receiving matrix
         * @param {mat2d} a the source matrix
         * @returns {mat2d} out
         */
        function copy(out, a) {
            out[0] = a[0];
            out[1] = a[1];
            out[2] = a[2];
            out[3] = a[3];
            out[4] = a[4];
            out[5] = a[5];
            return out;
        }
        /**
         * Set a mat2d to the identity matrix
         *
         * @param {mat2d} out the receiving matrix
         * @returns {mat2d} out
         */
        function identity(out) {
            out[0] = 1;
            out[1] = 0;
            out[2] = 0;
            out[3] = 1;
            out[4] = 0;
            out[5] = 0;
            return out;
        }
        /**
         * Create a new mat2d with the given values
         *
         * @param {Number} a Component A (index 0)
         * @param {Number} b Component B (index 1)
         * @param {Number} c Component C (index 2)
         * @param {Number} d Component D (index 3)
         * @param {Number} tx Component TX (index 4)
         * @param {Number} ty Component TY (index 5)
         * @returns {mat2d} A new mat2d
         */
        function fromValues(a, b, c, d, tx, ty) {
            var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](6);
            out[0] = a;
            out[1] = b;
            out[2] = c;
            out[3] = d;
            out[4] = tx;
            out[5] = ty;
            return out;
        }
        /**
         * Set the components of a mat2d to the given values
         *
         * @param {mat2d} out the receiving matrix
         * @param {Number} a Component A (index 0)
         * @param {Number} b Component B (index 1)
         * @param {Number} c Component C (index 2)
         * @param {Number} d Component D (index 3)
         * @param {Number} tx Component TX (index 4)
         * @param {Number} ty Component TY (index 5)
         * @returns {mat2d} out
         */
        function set(out, a, b, c, d, tx, ty) {
            out[0] = a;
            out[1] = b;
            out[2] = c;
            out[3] = d;
            out[4] = tx;
            out[5] = ty;
            return out;
        }
        /**
         * Inverts a mat2d
         *
         * @param {mat2d} out the receiving matrix
         * @param {mat2d} a the source matrix
         * @returns {mat2d} out
         */
        function invert(out, a) {
            var aa = a[0], ab = a[1], ac = a[2], ad = a[3];
            var atx = a[4], aty = a[5];
            var det = aa * ad - ab * ac;
            if (!det) {
                return null;
            }
            det = 1.0 / det;
            out[0] = ad * det;
            out[1] = -ab * det;
            out[2] = -ac * det;
            out[3] = aa * det;
            out[4] = (ac * aty - ad * atx) * det;
            out[5] = (ab * atx - aa * aty) * det;
            return out;
        }
        /**
         * Calculates the determinant of a mat2d
         *
         * @param {mat2d} a the source matrix
         * @returns {Number} determinant of a
         */
        function determinant(a) {
            return a[0] * a[3] - a[1] * a[2];
        }
        /**
         * Multiplies two mat2d's
         *
         * @param {mat2d} out the receiving matrix
         * @param {mat2d} a the first operand
         * @param {mat2d} b the second operand
         * @returns {mat2d} out
         */
        function multiply(out, a, b) {
            var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
            var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
            out[0] = a0 * b0 + a2 * b1;
            out[1] = a1 * b0 + a3 * b1;
            out[2] = a0 * b2 + a2 * b3;
            out[3] = a1 * b2 + a3 * b3;
            out[4] = a0 * b4 + a2 * b5 + a4;
            out[5] = a1 * b4 + a3 * b5 + a5;
            return out;
        }
        /**
         * Rotates a mat2d by the given angle
         *
         * @param {mat2d} out the receiving matrix
         * @param {mat2d} a the matrix to rotate
         * @param {Number} rad the angle to rotate the matrix by
         * @returns {mat2d} out
         */
        function rotate(out, a, rad) {
            var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
            var s = Math.sin(rad);
            var c = Math.cos(rad);
            out[0] = a0 * c + a2 * s;
            out[1] = a1 * c + a3 * s;
            out[2] = a0 * -s + a2 * c;
            out[3] = a1 * -s + a3 * c;
            out[4] = a4;
            out[5] = a5;
            return out;
        }
        /**
         * Scales the mat2d by the dimensions in the given vec2
         *
         * @param {mat2d} out the receiving matrix
         * @param {mat2d} a the matrix to translate
         * @param {vec2} v the vec2 to scale the matrix by
         * @returns {mat2d} out
         **/
        function scale(out, a, v) {
            var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
            var v0 = v[0], v1 = v[1];
            out[0] = a0 * v0;
            out[1] = a1 * v0;
            out[2] = a2 * v1;
            out[3] = a3 * v1;
            out[4] = a4;
            out[5] = a5;
            return out;
        }
        /**
         * Translates the mat2d by the dimensions in the given vec2
         *
         * @param {mat2d} out the receiving matrix
         * @param {mat2d} a the matrix to translate
         * @param {vec2} v the vec2 to translate the matrix by
         * @returns {mat2d} out
         **/
        function translate(out, a, v) {
            var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
            var v0 = v[0], v1 = v[1];
            out[0] = a0;
            out[1] = a1;
            out[2] = a2;
            out[3] = a3;
            out[4] = a0 * v0 + a2 * v1 + a4;
            out[5] = a1 * v0 + a3 * v1 + a5;
            return out;
        }
        /**
         * Creates a matrix from a given angle
         * This is equivalent to (but much faster than):
         *
         *     mat2d.identity(dest);
         *     mat2d.rotate(dest, dest, rad);
         *
         * @param {mat2d} out mat2d receiving operation result
         * @param {Number} rad the angle to rotate the matrix by
         * @returns {mat2d} out
         */
        function fromRotation(out, rad) {
            var s = Math.sin(rad), c = Math.cos(rad);
            out[0] = c;
            out[1] = s;
            out[2] = -s;
            out[3] = c;
            out[4] = 0;
            out[5] = 0;
            return out;
        }
        /**
         * Creates a matrix from a vector scaling
         * This is equivalent to (but much faster than):
         *
         *     mat2d.identity(dest);
         *     mat2d.scale(dest, dest, vec);
         *
         * @param {mat2d} out mat2d receiving operation result
         * @param {vec2} v Scaling vector
         * @returns {mat2d} out
         */
        function fromScaling(out, v) {
            out[0] = v[0];
            out[1] = 0;
            out[2] = 0;
            out[3] = v[1];
            out[4] = 0;
            out[5] = 0;
            return out;
        }
        /**
         * Creates a matrix from a vector translation
         * This is equivalent to (but much faster than):
         *
         *     mat2d.identity(dest);
         *     mat2d.translate(dest, dest, vec);
         *
         * @param {mat2d} out mat2d receiving operation result
         * @param {vec2} v Translation vector
         * @returns {mat2d} out
         */
        function fromTranslation(out, v) {
            out[0] = 1;
            out[1] = 0;
            out[2] = 0;
            out[3] = 1;
            out[4] = v[0];
            out[5] = v[1];
            return out;
        }
        /**
         * Returns a string representation of a mat2d
         *
         * @param {mat2d} a matrix to represent as a string
         * @returns {String} string representation of the matrix
         */
        function str(a) {
            return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ')';
        }
        /**
         * Returns Frobenius norm of a mat2d
         *
         * @param {mat2d} a the matrix to calculate Frobenius norm of
         * @returns {Number} Frobenius norm
         */
        function frob(a) {
            return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + 1);
        }
        /**
         * Adds two mat2d's
         *
         * @param {mat2d} out the receiving matrix
         * @param {mat2d} a the first operand
         * @param {mat2d} b the second operand
         * @returns {mat2d} out
         */
        function add(out, a, b) {
            out[0] = a[0] + b[0];
            out[1] = a[1] + b[1];
            out[2] = a[2] + b[2];
            out[3] = a[3] + b[3];
            out[4] = a[4] + b[4];
            out[5] = a[5] + b[5];
            return out;
        }
        /**
         * Subtracts matrix b from matrix a
         *
         * @param {mat2d} out the receiving matrix
         * @param {mat2d} a the first operand
         * @param {mat2d} b the second operand
         * @returns {mat2d} out
         */
        function subtract(out, a, b) {
            out[0] = a[0] - b[0];
            out[1] = a[1] - b[1];
            out[2] = a[2] - b[2];
            out[3] = a[3] - b[3];
            out[4] = a[4] - b[4];
            out[5] = a[5] - b[5];
            return out;
        }
        /**
         * Multiply each element of the matrix by a scalar.
         *
         * @param {mat2d} out the receiving matrix
         * @param {mat2d} a the matrix to scale
         * @param {Number} b amount to scale the matrix's elements by
         * @returns {mat2d} out
         */
        function multiplyScalar(out, a, b) {
            out[0] = a[0] * b;
            out[1] = a[1] * b;
            out[2] = a[2] * b;
            out[3] = a[3] * b;
            out[4] = a[4] * b;
            out[5] = a[5] * b;
            return out;
        }
        /**
         * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
         *
         * @param {mat2d} out the receiving vector
         * @param {mat2d} a the first operand
         * @param {mat2d} b the second operand
         * @param {Number} scale the amount to scale b's elements by before adding
         * @returns {mat2d} out
         */
        function multiplyScalarAndAdd(out, a, b, scale) {
            out[0] = a[0] + b[0] * scale;
            out[1] = a[1] + b[1] * scale;
            out[2] = a[2] + b[2] * scale;
            out[3] = a[3] + b[3] * scale;
            out[4] = a[4] + b[4] * scale;
            out[5] = a[5] + b[5] * scale;
            return out;
        }
        /**
         * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
         *
         * @param {mat2d} a The first matrix.
         * @param {mat2d} b The second matrix.
         * @returns {Boolean} True if the matrices are equal, false otherwise.
         */
        function exactEquals(a, b) {
            return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
        }
        /**
         * Returns whether or not the matrices have approximately the same elements in the same position.
         *
         * @param {mat2d} a The first matrix.
         * @param {mat2d} b The second matrix.
         * @returns {Boolean} True if the matrices are equal, false otherwise.
         */
        function equals(a, b) {
            var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
            var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
            return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a5), Math.abs(b5));
        }
        /**
         * Alias for {@link mat2d.multiply}
         * @function
         */
        var mul = multiply;
        /**
         * Alias for {@link mat2d.subtract}
         * @function
         */
        var sub = subtract;
        /***/ 
    }),
    /***/ "./node_modules/gl-matrix/esm/mat3.js": 
    /*!********************************************!*\
      !*** ./node_modules/gl-matrix/esm/mat3.js ***!
      \********************************************/
    /*! exports provided: create, fromMat4, clone, copy, fromValues, set, identity, transpose, invert, adjoint, determinant, multiply, translate, rotate, scale, fromTranslation, fromRotation, fromScaling, fromMat2d, fromQuat, normalFromMat4, projection, str, frob, add, subtract, multiplyScalar, multiplyScalarAndAdd, exactEquals, equals, mul, sub */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function () { return create; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat4", function () { return fromMat4; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function () { return clone; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function () { return copy; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function () { return fromValues; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function () { return set; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function () { return identity; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function () { return transpose; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function () { return invert; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjoint", function () { return adjoint; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function () { return determinant; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function () { return multiply; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function () { return translate; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function () { return rotate; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function () { return scale; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTranslation", function () { return fromTranslation; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function () { return fromRotation; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromScaling", function () { return fromScaling; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat2d", function () { return fromMat2d; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromQuat", function () { return fromQuat; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalFromMat4", function () { return normalFromMat4; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projection", function () { return projection; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function () { return str; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frob", function () { return frob; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function () { return add; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function () { return subtract; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function () { return multiplyScalar; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalarAndAdd", function () { return multiplyScalarAndAdd; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function () { return exactEquals; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function () { return equals; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function () { return mul; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function () { return sub; });
        /* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");
        /**
         * 3x3 Matrix
         * @module mat3
         */
        /**
         * Creates a new identity mat3
         *
         * @returns {mat3} a new 3x3 matrix
         */
        function create() {
            var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](9);
            if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
                out[1] = 0;
                out[2] = 0;
                out[3] = 0;
                out[5] = 0;
                out[6] = 0;
                out[7] = 0;
            }
            out[0] = 1;
            out[4] = 1;
            out[8] = 1;
            return out;
        }
        /**
         * Copies the upper-left 3x3 values into the given mat3.
         *
         * @param {mat3} out the receiving 3x3 matrix
         * @param {mat4} a   the source 4x4 matrix
         * @returns {mat3} out
         */
        function fromMat4(out, a) {
            out[0] = a[0];
            out[1] = a[1];
            out[2] = a[2];
            out[3] = a[4];
            out[4] = a[5];
            out[5] = a[6];
            out[6] = a[8];
            out[7] = a[9];
            out[8] = a[10];
            return out;
        }
        /**
         * Creates a new mat3 initialized with values from an existing matrix
         *
         * @param {mat3} a matrix to clone
         * @returns {mat3} a new 3x3 matrix
         */
        function clone(a) {
            var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](9);
            out[0] = a[0];
            out[1] = a[1];
            out[2] = a[2];
            out[3] = a[3];
            out[4] = a[4];
            out[5] = a[5];
            out[6] = a[6];
            out[7] = a[7];
            out[8] = a[8];
            return out;
        }
        /**
         * Copy the values from one mat3 to another
         *
         * @param {mat3} out the receiving matrix
         * @param {mat3} a the source matrix
         * @returns {mat3} out
         */
        function copy(out, a) {
            out[0] = a[0];
            out[1] = a[1];
            out[2] = a[2];
            out[3] = a[3];
            out[4] = a[4];
            out[5] = a[5];
            out[6] = a[6];
            out[7] = a[7];
            out[8] = a[8];
            return out;
        }
        /**
         * Create a new mat3 with the given values
         *
         * @param {Number} m00 Component in column 0, row 0 position (index 0)
         * @param {Number} m01 Component in column 0, row 1 position (index 1)
         * @param {Number} m02 Component in column 0, row 2 position (index 2)
         * @param {Number} m10 Component in column 1, row 0 position (index 3)
         * @param {Number} m11 Component in column 1, row 1 position (index 4)
         * @param {Number} m12 Component in column 1, row 2 position (index 5)
         * @param {Number} m20 Component in column 2, row 0 position (index 6)
         * @param {Number} m21 Component in column 2, row 1 position (index 7)
         * @param {Number} m22 Component in column 2, row 2 position (index 8)
         * @returns {mat3} A new mat3
         */
        function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
            var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](9);
            out[0] = m00;
            out[1] = m01;
            out[2] = m02;
            out[3] = m10;
            out[4] = m11;
            out[5] = m12;
            out[6] = m20;
            out[7] = m21;
            out[8] = m22;
            return out;
        }
        /**
         * Set the components of a mat3 to the given values
         *
         * @param {mat3} out the receiving matrix
         * @param {Number} m00 Component in column 0, row 0 position (index 0)
         * @param {Number} m01 Component in column 0, row 1 position (index 1)
         * @param {Number} m02 Component in column 0, row 2 position (index 2)
         * @param {Number} m10 Component in column 1, row 0 position (index 3)
         * @param {Number} m11 Component in column 1, row 1 position (index 4)
         * @param {Number} m12 Component in column 1, row 2 position (index 5)
         * @param {Number} m20 Component in column 2, row 0 position (index 6)
         * @param {Number} m21 Component in column 2, row 1 position (index 7)
         * @param {Number} m22 Component in column 2, row 2 position (index 8)
         * @returns {mat3} out
         */
        function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
            out[0] = m00;
            out[1] = m01;
            out[2] = m02;
            out[3] = m10;
            out[4] = m11;
            out[5] = m12;
            out[6] = m20;
            out[7] = m21;
            out[8] = m22;
            return out;
        }
        /**
         * Set a mat3 to the identity matrix
         *
         * @param {mat3} out the receiving matrix
         * @returns {mat3} out
         */
        function identity(out) {
            out[0] = 1;
            out[1] = 0;
            out[2] = 0;
            out[3] = 0;
            out[4] = 1;
            out[5] = 0;
            out[6] = 0;
            out[7] = 0;
            out[8] = 1;
            return out;
        }
        /**
         * Transpose the values of a mat3
         *
         * @param {mat3} out the receiving matrix
         * @param {mat3} a the source matrix
         * @returns {mat3} out
         */
        function transpose(out, a) {
            // If we are transposing ourselves we can skip a few steps but have to cache some values
            if (out === a) {
                var a01 = a[1], a02 = a[2], a12 = a[5];
                out[1] = a[3];
                out[2] = a[6];
                out[3] = a01;
                out[5] = a[7];
                out[6] = a02;
                out[7] = a12;
            }
            else {
                out[0] = a[0];
                out[1] = a[3];
                out[2] = a[6];
                out[3] = a[1];
                out[4] = a[4];
                out[5] = a[7];
                out[6] = a[2];
                out[7] = a[5];
                out[8] = a[8];
            }
            return out;
        }
        /**
         * Inverts a mat3
         *
         * @param {mat3} out the receiving matrix
         * @param {mat3} a the source matrix
         * @returns {mat3} out
         */
        function invert(out, a) {
            var a00 = a[0], a01 = a[1], a02 = a[2];
            var a10 = a[3], a11 = a[4], a12 = a[5];
            var a20 = a[6], a21 = a[7], a22 = a[8];
            var b01 = a22 * a11 - a12 * a21;
            var b11 = -a22 * a10 + a12 * a20;
            var b21 = a21 * a10 - a11 * a20; // Calculate the determinant
            var det = a00 * b01 + a01 * b11 + a02 * b21;
            if (!det) {
                return null;
            }
            det = 1.0 / det;
            out[0] = b01 * det;
            out[1] = (-a22 * a01 + a02 * a21) * det;
            out[2] = (a12 * a01 - a02 * a11) * det;
            out[3] = b11 * det;
            out[4] = (a22 * a00 - a02 * a20) * det;
            out[5] = (-a12 * a00 + a02 * a10) * det;
            out[6] = b21 * det;
            out[7] = (-a21 * a00 + a01 * a20) * det;
            out[8] = (a11 * a00 - a01 * a10) * det;
            return out;
        }
        /**
         * Calculates the adjugate of a mat3
         *
         * @param {mat3} out the receiving matrix
         * @param {mat3} a the source matrix
         * @returns {mat3} out
         */
        function adjoint(out, a) {
            var a00 = a[0], a01 = a[1], a02 = a[2];
            var a10 = a[3], a11 = a[4], a12 = a[5];
            var a20 = a[6], a21 = a[7], a22 = a[8];
            out[0] = a11 * a22 - a12 * a21;
            out[1] = a02 * a21 - a01 * a22;
            out[2] = a01 * a12 - a02 * a11;
            out[3] = a12 * a20 - a10 * a22;
            out[4] = a00 * a22 - a02 * a20;
            out[5] = a02 * a10 - a00 * a12;
            out[6] = a10 * a21 - a11 * a20;
            out[7] = a01 * a20 - a00 * a21;
            out[8] = a00 * a11 - a01 * a10;
            return out;
        }
        /**
         * Calculates the determinant of a mat3
         *
         * @param {mat3} a the source matrix
         * @returns {Number} determinant of a
         */
        function determinant(a) {
            var a00 = a[0], a01 = a[1], a02 = a[2];
            var a10 = a[3], a11 = a[4], a12 = a[5];
            var a20 = a[6], a21 = a[7], a22 = a[8];
            return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
        }
        /**
         * Multiplies two mat3's
         *
         * @param {mat3} out the receiving matrix
         * @param {mat3} a the first operand
         * @param {mat3} b the second operand
         * @returns {mat3} out
         */
        function multiply(out, a, b) {
            var a00 = a[0], a01 = a[1], a02 = a[2];
            var a10 = a[3], a11 = a[4], a12 = a[5];
            var a20 = a[6], a21 = a[7], a22 = a[8];
            var b00 = b[0], b01 = b[1], b02 = b[2];
            var b10 = b[3], b11 = b[4], b12 = b[5];
            var b20 = b[6], b21 = b[7], b22 = b[8];
            out[0] = b00 * a00 + b01 * a10 + b02 * a20;
            out[1] = b00 * a01 + b01 * a11 + b02 * a21;
            out[2] = b00 * a02 + b01 * a12 + b02 * a22;
            out[3] = b10 * a00 + b11 * a10 + b12 * a20;
            out[4] = b10 * a01 + b11 * a11 + b12 * a21;
            out[5] = b10 * a02 + b11 * a12 + b12 * a22;
            out[6] = b20 * a00 + b21 * a10 + b22 * a20;
            out[7] = b20 * a01 + b21 * a11 + b22 * a21;
            out[8] = b20 * a02 + b21 * a12 + b22 * a22;
            return out;
        }
        /**
         * Translate a mat3 by the given vector
         *
         * @param {mat3} out the receiving matrix
         * @param {mat3} a the matrix to translate
         * @param {vec2} v vector to translate by
         * @returns {mat3} out
         */
        function translate(out, a, v) {
            var a00 = a[0], a01 = a[1], a02 = a[2], a10 = a[3], a11 = a[4], a12 = a[5], a20 = a[6], a21 = a[7], a22 = a[8], x = v[0], y = v[1];
            out[0] = a00;
            out[1] = a01;
            out[2] = a02;
            out[3] = a10;
            out[4] = a11;
            out[5] = a12;
            out[6] = x * a00 + y * a10 + a20;
            out[7] = x * a01 + y * a11 + a21;
            out[8] = x * a02 + y * a12 + a22;
            return out;
        }
        /**
         * Rotates a mat3 by the given angle
         *
         * @param {mat3} out the receiving matrix
         * @param {mat3} a the matrix to rotate
         * @param {Number} rad the angle to rotate the matrix by
         * @returns {mat3} out
         */
        function rotate(out, a, rad) {
            var a00 = a[0], a01 = a[1], a02 = a[2], a10 = a[3], a11 = a[4], a12 = a[5], a20 = a[6], a21 = a[7], a22 = a[8], s = Math.sin(rad), c = Math.cos(rad);
            out[0] = c * a00 + s * a10;
            out[1] = c * a01 + s * a11;
            out[2] = c * a02 + s * a12;
            out[3] = c * a10 - s * a00;
            out[4] = c * a11 - s * a01;
            out[5] = c * a12 - s * a02;
            out[6] = a20;
            out[7] = a21;
            out[8] = a22;
            return out;
        }
        ;
        /**
         * Scales the mat3 by the dimensions in the given vec2
         *
         * @param {mat3} out the receiving matrix
         * @param {mat3} a the matrix to rotate
         * @param {vec2} v the vec2 to scale the matrix by
         * @returns {mat3} out
         **/
        function scale(out, a, v) {
            var x = v[0], y = v[1];
            out[0] = x * a[0];
            out[1] = x * a[1];
            out[2] = x * a[2];
            out[3] = y * a[3];
            out[4] = y * a[4];
            out[5] = y * a[5];
            out[6] = a[6];
            out[7] = a[7];
            out[8] = a[8];
            return out;
        }
        /**
         * Creates a matrix from a vector translation
         * This is equivalent to (but much faster than):
         *
         *     mat3.identity(dest);
         *     mat3.translate(dest, dest, vec);
         *
         * @param {mat3} out mat3 receiving operation result
         * @param {vec2} v Translation vector
         * @returns {mat3} out
         */
        function fromTranslation(out, v) {
            out[0] = 1;
            out[1] = 0;
            out[2] = 0;
            out[3] = 0;
            out[4] = 1;
            out[5] = 0;
            out[6] = v[0];
            out[7] = v[1];
            out[8] = 1;
            return out;
        }
        /**
         * Creates a matrix from a given angle
         * This is equivalent to (but much faster than):
         *
         *     mat3.identity(dest);
         *     mat3.rotate(dest, dest, rad);
         *
         * @param {mat3} out mat3 receiving operation result
         * @param {Number} rad the angle to rotate the matrix by
         * @returns {mat3} out
         */
        function fromRotation(out, rad) {
            var s = Math.sin(rad), c = Math.cos(rad);
            out[0] = c;
            out[1] = s;
            out[2] = 0;
            out[3] = -s;
            out[4] = c;
            out[5] = 0;
            out[6] = 0;
            out[7] = 0;
            out[8] = 1;
            return out;
        }
        /**
         * Creates a matrix from a vector scaling
         * This is equivalent to (but much faster than):
         *
         *     mat3.identity(dest);
         *     mat3.scale(dest, dest, vec);
         *
         * @param {mat3} out mat3 receiving operation result
         * @param {vec2} v Scaling vector
         * @returns {mat3} out
         */
        function fromScaling(out, v) {
            out[0] = v[0];
            out[1] = 0;
            out[2] = 0;
            out[3] = 0;
            out[4] = v[1];
            out[5] = 0;
            out[6] = 0;
            out[7] = 0;
            out[8] = 1;
            return out;
        }
        /**
         * Copies the values from a mat2d into a mat3
         *
         * @param {mat3} out the receiving matrix
         * @param {mat2d} a the matrix to copy
         * @returns {mat3} out
         **/
        function fromMat2d(out, a) {
            out[0] = a[0];
            out[1] = a[1];
            out[2] = 0;
            out[3] = a[2];
            out[4] = a[3];
            out[5] = 0;
            out[6] = a[4];
            out[7] = a[5];
            out[8] = 1;
            return out;
        }
        /**
        * Calculates a 3x3 matrix from the given quaternion
        *
        * @param {mat3} out mat3 receiving operation result
        * @param {quat} q Quaternion to create matrix from
        *
        * @returns {mat3} out
        */
        function fromQuat(out, q) {
            var x = q[0], y = q[1], z = q[2], w = q[3];
            var x2 = x + x;
            var y2 = y + y;
            var z2 = z + z;
            var xx = x * x2;
            var yx = y * x2;
            var yy = y * y2;
            var zx = z * x2;
            var zy = z * y2;
            var zz = z * z2;
            var wx = w * x2;
            var wy = w * y2;
            var wz = w * z2;
            out[0] = 1 - yy - zz;
            out[3] = yx - wz;
            out[6] = zx + wy;
            out[1] = yx + wz;
            out[4] = 1 - xx - zz;
            out[7] = zy - wx;
            out[2] = zx - wy;
            out[5] = zy + wx;
            out[8] = 1 - xx - yy;
            return out;
        }
        /**
        * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
        *
        * @param {mat3} out mat3 receiving operation result
        * @param {mat4} a Mat4 to derive the normal matrix from
        *
        * @returns {mat3} out
        */
        function normalFromMat4(out, a) {
            var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
            var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
            var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
            var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
            var b00 = a00 * a11 - a01 * a10;
            var b01 = a00 * a12 - a02 * a10;
            var b02 = a00 * a13 - a03 * a10;
            var b03 = a01 * a12 - a02 * a11;
            var b04 = a01 * a13 - a03 * a11;
            var b05 = a02 * a13 - a03 * a12;
            var b06 = a20 * a31 - a21 * a30;
            var b07 = a20 * a32 - a22 * a30;
            var b08 = a20 * a33 - a23 * a30;
            var b09 = a21 * a32 - a22 * a31;
            var b10 = a21 * a33 - a23 * a31;
            var b11 = a22 * a33 - a23 * a32; // Calculate the determinant
            var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
            if (!det) {
                return null;
            }
            det = 1.0 / det;
            out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
            out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
            out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
            out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
            out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
            out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
            out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
            out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
            out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
            return out;
        }
        /**
         * Generates a 2D projection matrix with the given bounds
         *
         * @param {mat3} out mat3 frustum matrix will be written into
         * @param {number} width Width of your gl context
         * @param {number} height Height of gl context
         * @returns {mat3} out
         */
        function projection(out, width, height) {
            out[0] = 2 / width;
            out[1] = 0;
            out[2] = 0;
            out[3] = 0;
            out[4] = -2 / height;
            out[5] = 0;
            out[6] = -1;
            out[7] = 1;
            out[8] = 1;
            return out;
        }
        /**
         * Returns a string representation of a mat3
         *
         * @param {mat3} a matrix to represent as a string
         * @returns {String} string representation of the matrix
         */
        function str(a) {
            return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ')';
        }
        /**
         * Returns Frobenius norm of a mat3
         *
         * @param {mat3} a the matrix to calculate Frobenius norm of
         * @returns {Number} Frobenius norm
         */
        function frob(a) {
            return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2));
        }
        /**
         * Adds two mat3's
         *
         * @param {mat3} out the receiving matrix
         * @param {mat3} a the first operand
         * @param {mat3} b the second operand
         * @returns {mat3} out
         */
        function add(out, a, b) {
            out[0] = a[0] + b[0];
            out[1] = a[1] + b[1];
            out[2] = a[2] + b[2];
            out[3] = a[3] + b[3];
            out[4] = a[4] + b[4];
            out[5] = a[5] + b[5];
            out[6] = a[6] + b[6];
            out[7] = a[7] + b[7];
            out[8] = a[8] + b[8];
            return out;
        }
        /**
         * Subtracts matrix b from matrix a
         *
         * @param {mat3} out the receiving matrix
         * @param {mat3} a the first operand
         * @param {mat3} b the second operand
         * @returns {mat3} out
         */
        function subtract(out, a, b) {
            out[0] = a[0] - b[0];
            out[1] = a[1] - b[1];
            out[2] = a[2] - b[2];
            out[3] = a[3] - b[3];
            out[4] = a[4] - b[4];
            out[5] = a[5] - b[5];
            out[6] = a[6] - b[6];
            out[7] = a[7] - b[7];
            out[8] = a[8] - b[8];
            return out;
        }
        /**
         * Multiply each element of the matrix by a scalar.
         *
         * @param {mat3} out the receiving matrix
         * @param {mat3} a the matrix to scale
         * @param {Number} b amount to scale the matrix's elements by
         * @returns {mat3} out
         */
        function multiplyScalar(out, a, b) {
            out[0] = a[0] * b;
            out[1] = a[1] * b;
            out[2] = a[2] * b;
            out[3] = a[3] * b;
            out[4] = a[4] * b;
            out[5] = a[5] * b;
            out[6] = a[6] * b;
            out[7] = a[7] * b;
            out[8] = a[8] * b;
            return out;
        }
        /**
         * Adds two mat3's after multiplying each element of the second operand by a scalar value.
         *
         * @param {mat3} out the receiving vector
         * @param {mat3} a the first operand
         * @param {mat3} b the second operand
         * @param {Number} scale the amount to scale b's elements by before adding
         * @returns {mat3} out
         */
        function multiplyScalarAndAdd(out, a, b, scale) {
            out[0] = a[0] + b[0] * scale;
            out[1] = a[1] + b[1] * scale;
            out[2] = a[2] + b[2] * scale;
            out[3] = a[3] + b[3] * scale;
            out[4] = a[4] + b[4] * scale;
            out[5] = a[5] + b[5] * scale;
            out[6] = a[6] + b[6] * scale;
            out[7] = a[7] + b[7] * scale;
            out[8] = a[8] + b[8] * scale;
            return out;
        }
        /**
         * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
         *
         * @param {mat3} a The first matrix.
         * @param {mat3} b The second matrix.
         * @returns {Boolean} True if the matrices are equal, false otherwise.
         */
        function exactEquals(a, b) {
            return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
        }
        /**
         * Returns whether or not the matrices have approximately the same elements in the same position.
         *
         * @param {mat3} a The first matrix.
         * @param {mat3} b The second matrix.
         * @returns {Boolean} True if the matrices are equal, false otherwise.
         */
        function equals(a, b) {
            var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7], a8 = a[8];
            var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8];
            return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a8), Math.abs(b8));
        }
        /**
         * Alias for {@link mat3.multiply}
         * @function
         */
        var mul = multiply;
        /**
         * Alias for {@link mat3.subtract}
         * @function
         */
        var sub = subtract;
        /***/ 
    }),
    /***/ "./node_modules/gl-matrix/esm/mat4.js": 
    /*!********************************************!*\
      !*** ./node_modules/gl-matrix/esm/mat4.js ***!
      \********************************************/
    /*! exports provided: create, clone, copy, fromValues, set, identity, transpose, invert, adjoint, determinant, multiply, translate, scale, rotate, rotateX, rotateY, rotateZ, fromTranslation, fromScaling, fromRotation, fromXRotation, fromYRotation, fromZRotation, fromRotationTranslation, fromQuat2, getTranslation, getScaling, getRotation, fromRotationTranslationScale, fromRotationTranslationScaleOrigin, fromQuat, frustum, perspective, perspectiveFromFieldOfView, ortho, lookAt, targetTo, str, frob, add, subtract, multiplyScalar, multiplyScalarAndAdd, exactEquals, equals, mul, sub */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function () { return create; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function () { return clone; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function () { return copy; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function () { return fromValues; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function () { return set; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function () { return identity; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function () { return transpose; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function () { return invert; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjoint", function () { return adjoint; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function () { return determinant; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function () { return multiply; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function () { return translate; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function () { return scale; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function () { return rotate; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function () { return rotateX; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function () { return rotateY; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function () { return rotateZ; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTranslation", function () { return fromTranslation; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromScaling", function () { return fromScaling; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function () { return fromRotation; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromXRotation", function () { return fromXRotation; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromYRotation", function () { return fromYRotation; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromZRotation", function () { return fromZRotation; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslation", function () { return fromRotationTranslation; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromQuat2", function () { return fromQuat2; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTranslation", function () { return getTranslation; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScaling", function () { return getScaling; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRotation", function () { return getRotation; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslationScale", function () { return fromRotationTranslationScale; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslationScaleOrigin", function () { return fromRotationTranslationScaleOrigin; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromQuat", function () { return fromQuat; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frustum", function () { return frustum; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perspective", function () { return perspective; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perspectiveFromFieldOfView", function () { return perspectiveFromFieldOfView; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ortho", function () { return ortho; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lookAt", function () { return lookAt; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "targetTo", function () { return targetTo; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function () { return str; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frob", function () { return frob; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function () { return add; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function () { return subtract; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function () { return multiplyScalar; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalarAndAdd", function () { return multiplyScalarAndAdd; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function () { return exactEquals; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function () { return equals; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function () { return mul; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function () { return sub; });
        /* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");
        /**
         * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
         * @module mat4
         */
        /**
         * Creates a new identity mat4
         *
         * @returns {mat4} a new 4x4 matrix
         */
        function create() {
            var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](16);
            if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
                out[1] = 0;
                out[2] = 0;
                out[3] = 0;
                out[4] = 0;
                out[6] = 0;
                out[7] = 0;
                out[8] = 0;
                out[9] = 0;
                out[11] = 0;
                out[12] = 0;
                out[13] = 0;
                out[14] = 0;
            }
            out[0] = 1;
            out[5] = 1;
            out[10] = 1;
            out[15] = 1;
            return out;
        }
        /**
         * Creates a new mat4 initialized with values from an existing matrix
         *
         * @param {mat4} a matrix to clone
         * @returns {mat4} a new 4x4 matrix
         */
        function clone(a) {
            var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](16);
            out[0] = a[0];
            out[1] = a[1];
            out[2] = a[2];
            out[3] = a[3];
            out[4] = a[4];
            out[5] = a[5];
            out[6] = a[6];
            out[7] = a[7];
            out[8] = a[8];
            out[9] = a[9];
            out[10] = a[10];
            out[11] = a[11];
            out[12] = a[12];
            out[13] = a[13];
            out[14] = a[14];
            out[15] = a[15];
            return out;
        }
        /**
         * Copy the values from one mat4 to another
         *
         * @param {mat4} out the receiving matrix
         * @param {mat4} a the source matrix
         * @returns {mat4} out
         */
        function copy(out, a) {
            out[0] = a[0];
            out[1] = a[1];
            out[2] = a[2];
            out[3] = a[3];
            out[4] = a[4];
            out[5] = a[5];
            out[6] = a[6];
            out[7] = a[7];
            out[8] = a[8];
            out[9] = a[9];
            out[10] = a[10];
            out[11] = a[11];
            out[12] = a[12];
            out[13] = a[13];
            out[14] = a[14];
            out[15] = a[15];
            return out;
        }
        /**
         * Create a new mat4 with the given values
         *
         * @param {Number} m00 Component in column 0, row 0 position (index 0)
         * @param {Number} m01 Component in column 0, row 1 position (index 1)
         * @param {Number} m02 Component in column 0, row 2 position (index 2)
         * @param {Number} m03 Component in column 0, row 3 position (index 3)
         * @param {Number} m10 Component in column 1, row 0 position (index 4)
         * @param {Number} m11 Component in column 1, row 1 position (index 5)
         * @param {Number} m12 Component in column 1, row 2 position (index 6)
         * @param {Number} m13 Component in column 1, row 3 position (index 7)
         * @param {Number} m20 Component in column 2, row 0 position (index 8)
         * @param {Number} m21 Component in column 2, row 1 position (index 9)
         * @param {Number} m22 Component in column 2, row 2 position (index 10)
         * @param {Number} m23 Component in column 2, row 3 position (index 11)
         * @param {Number} m30 Component in column 3, row 0 position (index 12)
         * @param {Number} m31 Component in column 3, row 1 position (index 13)
         * @param {Number} m32 Component in column 3, row 2 position (index 14)
         * @param {Number} m33 Component in column 3, row 3 position (index 15)
         * @returns {mat4} A new mat4
         */
        function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
            var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](16);
            out[0] = m00;
            out[1] = m01;
            out[2] = m02;
            out[3] = m03;
            out[4] = m10;
            out[5] = m11;
            out[6] = m12;
            out[7] = m13;
            out[8] = m20;
            out[9] = m21;
            out[10] = m22;
            out[11] = m23;
            out[12] = m30;
            out[13] = m31;
            out[14] = m32;
            out[15] = m33;
            return out;
        }
        /**
         * Set the components of a mat4 to the given values
         *
         * @param {mat4} out the receiving matrix
         * @param {Number} m00 Component in column 0, row 0 position (index 0)
         * @param {Number} m01 Component in column 0, row 1 position (index 1)
         * @param {Number} m02 Component in column 0, row 2 position (index 2)
         * @param {Number} m03 Component in column 0, row 3 position (index 3)
         * @param {Number} m10 Component in column 1, row 0 position (index 4)
         * @param {Number} m11 Component in column 1, row 1 position (index 5)
         * @param {Number} m12 Component in column 1, row 2 position (index 6)
         * @param {Number} m13 Component in column 1, row 3 position (index 7)
         * @param {Number} m20 Component in column 2, row 0 position (index 8)
         * @param {Number} m21 Component in column 2, row 1 position (index 9)
         * @param {Number} m22 Component in column 2, row 2 position (index 10)
         * @param {Number} m23 Component in column 2, row 3 position (index 11)
         * @param {Number} m30 Component in column 3, row 0 position (index 12)
         * @param {Number} m31 Component in column 3, row 1 position (index 13)
         * @param {Number} m32 Component in column 3, row 2 position (index 14)
         * @param {Number} m33 Component in column 3, row 3 position (index 15)
         * @returns {mat4} out
         */
        function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
            out[0] = m00;
            out[1] = m01;
            out[2] = m02;
            out[3] = m03;
            out[4] = m10;
            out[5] = m11;
            out[6] = m12;
            out[7] = m13;
            out[8] = m20;
            out[9] = m21;
            out[10] = m22;
            out[11] = m23;
            out[12] = m30;
            out[13] = m31;
            out[14] = m32;
            out[15] = m33;
            return out;
        }
        /**
         * Set a mat4 to the identity matrix
         *
         * @param {mat4} out the receiving matrix
         * @returns {mat4} out
         */
        function identity(out) {
            out[0] = 1;
            out[1] = 0;
            out[2] = 0;
            out[3] = 0;
            out[4] = 0;
            out[5] = 1;
            out[6] = 0;
            out[7] = 0;
            out[8] = 0;
            out[9] = 0;
            out[10] = 1;
            out[11] = 0;
            out[12] = 0;
            out[13] = 0;
            out[14] = 0;
            out[15] = 1;
            return out;
        }
        /**
         * Transpose the values of a mat4
         *
         * @param {mat4} out the receiving matrix
         * @param {mat4} a the source matrix
         * @returns {mat4} out
         */
        function transpose(out, a) {
            // If we are transposing ourselves we can skip a few steps but have to cache some values
            if (out === a) {
                var a01 = a[1], a02 = a[2], a03 = a[3];
                var a12 = a[6], a13 = a[7];
                var a23 = a[11];
                out[1] = a[4];
                out[2] = a[8];
                out[3] = a[12];
                out[4] = a01;
                out[6] = a[9];
                out[7] = a[13];
                out[8] = a02;
                out[9] = a12;
                out[11] = a[14];
                out[12] = a03;
                out[13] = a13;
                out[14] = a23;
            }
            else {
                out[0] = a[0];
                out[1] = a[4];
                out[2] = a[8];
                out[3] = a[12];
                out[4] = a[1];
                out[5] = a[5];
                out[6] = a[9];
                out[7] = a[13];
                out[8] = a[2];
                out[9] = a[6];
                out[10] = a[10];
                out[11] = a[14];
                out[12] = a[3];
                out[13] = a[7];
                out[14] = a[11];
                out[15] = a[15];
            }
            return out;
        }
        /**
         * Inverts a mat4
         *
         * @param {mat4} out the receiving matrix
         * @param {mat4} a the source matrix
         * @returns {mat4} out
         */
        function invert(out, a) {
            var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
            var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
            var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
            var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
            var b00 = a00 * a11 - a01 * a10;
            var b01 = a00 * a12 - a02 * a10;
            var b02 = a00 * a13 - a03 * a10;
            var b03 = a01 * a12 - a02 * a11;
            var b04 = a01 * a13 - a03 * a11;
            var b05 = a02 * a13 - a03 * a12;
            var b06 = a20 * a31 - a21 * a30;
            var b07 = a20 * a32 - a22 * a30;
            var b08 = a20 * a33 - a23 * a30;
            var b09 = a21 * a32 - a22 * a31;
            var b10 = a21 * a33 - a23 * a31;
            var b11 = a22 * a33 - a23 * a32; // Calculate the determinant
            var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
            if (!det) {
                return null;
            }
            det = 1.0 / det;
            out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
            out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
            out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
            out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
            out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
            out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
            out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
            out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
            out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
            out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
            out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
            out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
            out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
            out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
            out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
            out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
            return out;
        }
        /**
         * Calculates the adjugate of a mat4
         *
         * @param {mat4} out the receiving matrix
         * @param {mat4} a the source matrix
         * @returns {mat4} out
         */
        function adjoint(out, a) {
            var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
            var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
            var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
            var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
            out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
            out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
            out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
            out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
            out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
            out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
            out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
            out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
            out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
            out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
            out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
            out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
            out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
            out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
            out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
            out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
            return out;
        }
        /**
         * Calculates the determinant of a mat4
         *
         * @param {mat4} a the source matrix
         * @returns {Number} determinant of a
         */
        function determinant(a) {
            var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
            var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
            var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
            var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
            var b00 = a00 * a11 - a01 * a10;
            var b01 = a00 * a12 - a02 * a10;
            var b02 = a00 * a13 - a03 * a10;
            var b03 = a01 * a12 - a02 * a11;
            var b04 = a01 * a13 - a03 * a11;
            var b05 = a02 * a13 - a03 * a12;
            var b06 = a20 * a31 - a21 * a30;
            var b07 = a20 * a32 - a22 * a30;
            var b08 = a20 * a33 - a23 * a30;
            var b09 = a21 * a32 - a22 * a31;
            var b10 = a21 * a33 - a23 * a31;
            var b11 = a22 * a33 - a23 * a32; // Calculate the determinant
            return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
        }
        /**
         * Multiplies two mat4s
         *
         * @param {mat4} out the receiving matrix
         * @param {mat4} a the first operand
         * @param {mat4} b the second operand
         * @returns {mat4} out
         */
        function multiply(out, a, b) {
            var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
            var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
            var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
            var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15]; // Cache only the current line of the second matrix
            var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
            out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
            b0 = b[4];
            b1 = b[5];
            b2 = b[6];
            b3 = b[7];
            out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
            b0 = b[8];
            b1 = b[9];
            b2 = b[10];
            b3 = b[11];
            out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
            b0 = b[12];
            b1 = b[13];
            b2 = b[14];
            b3 = b[15];
            out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
            return out;
        }
        /**
         * Translate a mat4 by the given vector
         *
         * @param {mat4} out the receiving matrix
         * @param {mat4} a the matrix to translate
         * @param {vec3} v vector to translate by
         * @returns {mat4} out
         */
        function translate(out, a, v) {
            var x = v[0], y = v[1], z = v[2];
            var a00, a01, a02, a03;
            var a10, a11, a12, a13;
            var a20, a21, a22, a23;
            if (a === out) {
                out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
                out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
                out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
                out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
            }
            else {
                a00 = a[0];
                a01 = a[1];
                a02 = a[2];
                a03 = a[3];
                a10 = a[4];
                a11 = a[5];
                a12 = a[6];
                a13 = a[7];
                a20 = a[8];
                a21 = a[9];
                a22 = a[10];
                a23 = a[11];
                out[0] = a00;
                out[1] = a01;
                out[2] = a02;
                out[3] = a03;
                out[4] = a10;
                out[5] = a11;
                out[6] = a12;
                out[7] = a13;
                out[8] = a20;
                out[9] = a21;
                out[10] = a22;
                out[11] = a23;
                out[12] = a00 * x + a10 * y + a20 * z + a[12];
                out[13] = a01 * x + a11 * y + a21 * z + a[13];
                out[14] = a02 * x + a12 * y + a22 * z + a[14];
                out[15] = a03 * x + a13 * y + a23 * z + a[15];
            }
            return out;
        }
        /**
         * Scales the mat4 by the dimensions in the given vec3 not using vectorization
         *
         * @param {mat4} out the receiving matrix
         * @param {mat4} a the matrix to scale
         * @param {vec3} v the vec3 to scale the matrix by
         * @returns {mat4} out
         **/
        function scale(out, a, v) {
            var x = v[0], y = v[1], z = v[2];
            out[0] = a[0] * x;
            out[1] = a[1] * x;
            out[2] = a[2] * x;
            out[3] = a[3] * x;
            out[4] = a[4] * y;
            out[5] = a[5] * y;
            out[6] = a[6] * y;
            out[7] = a[7] * y;
            out[8] = a[8] * z;
            out[9] = a[9] * z;
            out[10] = a[10] * z;
            out[11] = a[11] * z;
            out[12] = a[12];
            out[13] = a[13];
            out[14] = a[14];
            out[15] = a[15];
            return out;
        }
        /**
         * Rotates a mat4 by the given angle around the given axis
         *
         * @param {mat4} out the receiving matrix
         * @param {mat4} a the matrix to rotate
         * @param {Number} rad the angle to rotate the matrix by
         * @param {vec3} axis the axis to rotate around
         * @returns {mat4} out
         */
        function rotate(out, a, rad, axis) {
            var x = axis[0], y = axis[1], z = axis[2];
            var len = Math.sqrt(x * x + y * y + z * z);
            var s, c, t;
            var a00, a01, a02, a03;
            var a10, a11, a12, a13;
            var a20, a21, a22, a23;
            var b00, b01, b02;
            var b10, b11, b12;
            var b20, b21, b22;
            if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
                return null;
            }
            len = 1 / len;
            x *= len;
            y *= len;
            z *= len;
            s = Math.sin(rad);
            c = Math.cos(rad);
            t = 1 - c;
            a00 = a[0];
            a01 = a[1];
            a02 = a[2];
            a03 = a[3];
            a10 = a[4];
            a11 = a[5];
            a12 = a[6];
            a13 = a[7];
            a20 = a[8];
            a21 = a[9];
            a22 = a[10];
            a23 = a[11]; // Construct the elements of the rotation matrix
            b00 = x * x * t + c;
            b01 = y * x * t + z * s;
            b02 = z * x * t - y * s;
            b10 = x * y * t - z * s;
            b11 = y * y * t + c;
            b12 = z * y * t + x * s;
            b20 = x * z * t + y * s;
            b21 = y * z * t - x * s;
            b22 = z * z * t + c; // Perform rotation-specific matrix multiplication
            out[0] = a00 * b00 + a10 * b01 + a20 * b02;
            out[1] = a01 * b00 + a11 * b01 + a21 * b02;
            out[2] = a02 * b00 + a12 * b01 + a22 * b02;
            out[3] = a03 * b00 + a13 * b01 + a23 * b02;
            out[4] = a00 * b10 + a10 * b11 + a20 * b12;
            out[5] = a01 * b10 + a11 * b11 + a21 * b12;
            out[6] = a02 * b10 + a12 * b11 + a22 * b12;
            out[7] = a03 * b10 + a13 * b11 + a23 * b12;
            out[8] = a00 * b20 + a10 * b21 + a20 * b22;
            out[9] = a01 * b20 + a11 * b21 + a21 * b22;
            out[10] = a02 * b20 + a12 * b21 + a22 * b22;
            out[11] = a03 * b20 + a13 * b21 + a23 * b22;
            if (a !== out) {
                // If the source and destination differ, copy the unchanged last row
                out[12] = a[12];
                out[13] = a[13];
                out[14] = a[14];
                out[15] = a[15];
            }
            return out;
        }
        /**
         * Rotates a matrix by the given angle around the X axis
         *
         * @param {mat4} out the receiving matrix
         * @param {mat4} a the matrix to rotate
         * @param {Number} rad the angle to rotate the matrix by
         * @returns {mat4} out
         */
        function rotateX(out, a, rad) {
            var s = Math.sin(rad);
            var c = Math.cos(rad);
            var a10 = a[4];
            var a11 = a[5];
            var a12 = a[6];
            var a13 = a[7];
            var a20 = a[8];
            var a21 = a[9];
            var a22 = a[10];
            var a23 = a[11];
            if (a !== out) {
                // If the source and destination differ, copy the unchanged rows
                out[0] = a[0];
                out[1] = a[1];
                out[2] = a[2];
                out[3] = a[3];
                out[12] = a[12];
                out[13] = a[13];
                out[14] = a[14];
                out[15] = a[15];
            } // Perform axis-specific matrix multiplication
            out[4] = a10 * c + a20 * s;
            out[5] = a11 * c + a21 * s;
            out[6] = a12 * c + a22 * s;
            out[7] = a13 * c + a23 * s;
            out[8] = a20 * c - a10 * s;
            out[9] = a21 * c - a11 * s;
            out[10] = a22 * c - a12 * s;
            out[11] = a23 * c - a13 * s;
            return out;
        }
        /**
         * Rotates a matrix by the given angle around the Y axis
         *
         * @param {mat4} out the receiving matrix
         * @param {mat4} a the matrix to rotate
         * @param {Number} rad the angle to rotate the matrix by
         * @returns {mat4} out
         */
        function rotateY(out, a, rad) {
            var s = Math.sin(rad);
            var c = Math.cos(rad);
            var a00 = a[0];
            var a01 = a[1];
            var a02 = a[2];
            var a03 = a[3];
            var a20 = a[8];
            var a21 = a[9];
            var a22 = a[10];
            var a23 = a[11];
            if (a !== out) {
                // If the source and destination differ, copy the unchanged rows
                out[4] = a[4];
                out[5] = a[5];
                out[6] = a[6];
                out[7] = a[7];
                out[12] = a[12];
                out[13] = a[13];
                out[14] = a[14];
                out[15] = a[15];
            } // Perform axis-specific matrix multiplication
            out[0] = a00 * c - a20 * s;
            out[1] = a01 * c - a21 * s;
            out[2] = a02 * c - a22 * s;
            out[3] = a03 * c - a23 * s;
            out[8] = a00 * s + a20 * c;
            out[9] = a01 * s + a21 * c;
            out[10] = a02 * s + a22 * c;
            out[11] = a03 * s + a23 * c;
            return out;
        }
        /**
         * Rotates a matrix by the given angle around the Z axis
         *
         * @param {mat4} out the receiving matrix
         * @param {mat4} a the matrix to rotate
         * @param {Number} rad the angle to rotate the matrix by
         * @returns {mat4} out
         */
        function rotateZ(out, a, rad) {
            var s = Math.sin(rad);
            var c = Math.cos(rad);
            var a00 = a[0];
            var a01 = a[1];
            var a02 = a[2];
            var a03 = a[3];
            var a10 = a[4];
            var a11 = a[5];
            var a12 = a[6];
            var a13 = a[7];
            if (a !== out) {
                // If the source and destination differ, copy the unchanged last row
                out[8] = a[8];
                out[9] = a[9];
                out[10] = a[10];
                out[11] = a[11];
                out[12] = a[12];
                out[13] = a[13];
                out[14] = a[14];
                out[15] = a[15];
            } // Perform axis-specific matrix multiplication
            out[0] = a00 * c + a10 * s;
            out[1] = a01 * c + a11 * s;
            out[2] = a02 * c + a12 * s;
            out[3] = a03 * c + a13 * s;
            out[4] = a10 * c - a00 * s;
            out[5] = a11 * c - a01 * s;
            out[6] = a12 * c - a02 * s;
            out[7] = a13 * c - a03 * s;
            return out;
        }
        /**
         * Creates a matrix from a vector translation
         * This is equivalent to (but much faster than):
         *
         *     mat4.identity(dest);
         *     mat4.translate(dest, dest, vec);
         *
         * @param {mat4} out mat4 receiving operation result
         * @param {vec3} v Translation vector
         * @returns {mat4} out
         */
        function fromTranslation(out, v) {
            out[0] = 1;
            out[1] = 0;
            out[2] = 0;
            out[3] = 0;
            out[4] = 0;
            out[5] = 1;
            out[6] = 0;
            out[7] = 0;
            out[8] = 0;
            out[9] = 0;
            out[10] = 1;
            out[11] = 0;
            out[12] = v[0];
            out[13] = v[1];
            out[14] = v[2];
            out[15] = 1;
            return out;
        }
        /**
         * Creates a matrix from a vector scaling
         * This is equivalent to (but much faster than):
         *
         *     mat4.identity(dest);
         *     mat4.scale(dest, dest, vec);
         *
         * @param {mat4} out mat4 receiving operation result
         * @param {vec3} v Scaling vector
         * @returns {mat4} out
         */
        function fromScaling(out, v) {
            out[0] = v[0];
            out[1] = 0;
            out[2] = 0;
            out[3] = 0;
            out[4] = 0;
            out[5] = v[1];
            out[6] = 0;
            out[7] = 0;
            out[8] = 0;
            out[9] = 0;
            out[10] = v[2];
            out[11] = 0;
            out[12] = 0;
            out[13] = 0;
            out[14] = 0;
            out[15] = 1;
            return out;
        }
        /**
         * Creates a matrix from a given angle around a given axis
         * This is equivalent to (but much faster than):
         *
         *     mat4.identity(dest);
         *     mat4.rotate(dest, dest, rad, axis);
         *
         * @param {mat4} out mat4 receiving operation result
         * @param {Number} rad the angle to rotate the matrix by
         * @param {vec3} axis the axis to rotate around
         * @returns {mat4} out
         */
        function fromRotation(out, rad, axis) {
            var x = axis[0], y = axis[1], z = axis[2];
            var len = Math.sqrt(x * x + y * y + z * z);
            var s, c, t;
            if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
                return null;
            }
            len = 1 / len;
            x *= len;
            y *= len;
            z *= len;
            s = Math.sin(rad);
            c = Math.cos(rad);
            t = 1 - c; // Perform rotation-specific matrix multiplication
            out[0] = x * x * t + c;
            out[1] = y * x * t + z * s;
            out[2] = z * x * t - y * s;
            out[3] = 0;
            out[4] = x * y * t - z * s;
            out[5] = y * y * t + c;
            out[6] = z * y * t + x * s;
            out[7] = 0;
            out[8] = x * z * t + y * s;
            out[9] = y * z * t - x * s;
            out[10] = z * z * t + c;
            out[11] = 0;
            out[12] = 0;
            out[13] = 0;
            out[14] = 0;
            out[15] = 1;
            return out;
        }
        /**
         * Creates a matrix from the given angle around the X axis
         * This is equivalent to (but much faster than):
         *
         *     mat4.identity(dest);
         *     mat4.rotateX(dest, dest, rad);
         *
         * @param {mat4} out mat4 receiving operation result
         * @param {Number} rad the angle to rotate the matrix by
         * @returns {mat4} out
         */
        function fromXRotation(out, rad) {
            var s = Math.sin(rad);
            var c = Math.cos(rad); // Perform axis-specific matrix multiplication
            out[0] = 1;
            out[1] = 0;
            out[2] = 0;
            out[3] = 0;
            out[4] = 0;
            out[5] = c;
            out[6] = s;
            out[7] = 0;
            out[8] = 0;
            out[9] = -s;
            out[10] = c;
            out[11] = 0;
            out[12] = 0;
            out[13] = 0;
            out[14] = 0;
            out[15] = 1;
            return out;
        }
        /**
         * Creates a matrix from the given angle around the Y axis
         * This is equivalent to (but much faster than):
         *
         *     mat4.identity(dest);
         *     mat4.rotateY(dest, dest, rad);
         *
         * @param {mat4} out mat4 receiving operation result
         * @param {Number} rad the angle to rotate the matrix by
         * @returns {mat4} out
         */
        function fromYRotation(out, rad) {
            var s = Math.sin(rad);
            var c = Math.cos(rad); // Perform axis-specific matrix multiplication
            out[0] = c;
            out[1] = 0;
            out[2] = -s;
            out[3] = 0;
            out[4] = 0;
            out[5] = 1;
            out[6] = 0;
            out[7] = 0;
            out[8] = s;
            out[9] = 0;
            out[10] = c;
            out[11] = 0;
            out[12] = 0;
            out[13] = 0;
            out[14] = 0;
            out[15] = 1;
            return out;
        }
        /**
         * Creates a matrix from the given angle around the Z axis
         * This is equivalent to (but much faster than):
         *
         *     mat4.identity(dest);
         *     mat4.rotateZ(dest, dest, rad);
         *
         * @param {mat4} out mat4 receiving operation result
         * @param {Number} rad the angle to rotate the matrix by
         * @returns {mat4} out
         */
        function fromZRotation(out, rad) {
            var s = Math.sin(rad);
            var c = Math.cos(rad); // Perform axis-specific matrix multiplication
            out[0] = c;
            out[1] = s;
            out[2] = 0;
            out[3] = 0;
            out[4] = -s;
            out[5] = c;
            out[6] = 0;
            out[7] = 0;
            out[8] = 0;
            out[9] = 0;
            out[10] = 1;
            out[11] = 0;
            out[12] = 0;
            out[13] = 0;
            out[14] = 0;
            out[15] = 1;
            return out;
        }
        /**
         * Creates a matrix from a quaternion rotation and vector translation
         * This is equivalent to (but much faster than):
         *
         *     mat4.identity(dest);
         *     mat4.translate(dest, vec);
         *     let quatMat = mat4.create();
         *     quat4.toMat4(quat, quatMat);
         *     mat4.multiply(dest, quatMat);
         *
         * @param {mat4} out mat4 receiving operation result
         * @param {quat4} q Rotation quaternion
         * @param {vec3} v Translation vector
         * @returns {mat4} out
         */
        function fromRotationTranslation(out, q, v) {
            // Quaternion math
            var x = q[0], y = q[1], z = q[2], w = q[3];
            var x2 = x + x;
            var y2 = y + y;
            var z2 = z + z;
            var xx = x * x2;
            var xy = x * y2;
            var xz = x * z2;
            var yy = y * y2;
            var yz = y * z2;
            var zz = z * z2;
            var wx = w * x2;
            var wy = w * y2;
            var wz = w * z2;
            out[0] = 1 - (yy + zz);
            out[1] = xy + wz;
            out[2] = xz - wy;
            out[3] = 0;
            out[4] = xy - wz;
            out[5] = 1 - (xx + zz);
            out[6] = yz + wx;
            out[7] = 0;
            out[8] = xz + wy;
            out[9] = yz - wx;
            out[10] = 1 - (xx + yy);
            out[11] = 0;
            out[12] = v[0];
            out[13] = v[1];
            out[14] = v[2];
            out[15] = 1;
            return out;
        }
        /**
         * Creates a new mat4 from a dual quat.
         *
         * @param {mat4} out Matrix
         * @param {quat2} a Dual Quaternion
         * @returns {mat4} mat4 receiving operation result
         */
        function fromQuat2(out, a) {
            var translation = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
            var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7];
            var magnitude = bx * bx + by * by + bz * bz + bw * bw; //Only scale if it makes sense
            if (magnitude > 0) {
                translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
                translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
                translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
            }
            else {
                translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
                translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
                translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
            }
            fromRotationTranslation(out, a, translation);
            return out;
        }
        /**
         * Returns the translation vector component of a transformation
         *  matrix. If a matrix is built with fromRotationTranslation,
         *  the returned vector will be the same as the translation vector
         *  originally supplied.
         * @param  {vec3} out Vector to receive translation component
         * @param  {mat4} mat Matrix to be decomposed (input)
         * @return {vec3} out
         */
        function getTranslation(out, mat) {
            out[0] = mat[12];
            out[1] = mat[13];
            out[2] = mat[14];
            return out;
        }
        /**
         * Returns the scaling factor component of a transformation
         *  matrix. If a matrix is built with fromRotationTranslationScale
         *  with a normalized Quaternion paramter, the returned vector will be
         *  the same as the scaling vector
         *  originally supplied.
         * @param  {vec3} out Vector to receive scaling factor component
         * @param  {mat4} mat Matrix to be decomposed (input)
         * @return {vec3} out
         */
        function getScaling(out, mat) {
            var m11 = mat[0];
            var m12 = mat[1];
            var m13 = mat[2];
            var m21 = mat[4];
            var m22 = mat[5];
            var m23 = mat[6];
            var m31 = mat[8];
            var m32 = mat[9];
            var m33 = mat[10];
            out[0] = Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
            out[1] = Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
            out[2] = Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);
            return out;
        }
        /**
         * Returns a quaternion representing the rotational component
         *  of a transformation matrix. If a matrix is built with
         *  fromRotationTranslation, the returned quaternion will be the
         *  same as the quaternion originally supplied.
         * @param {quat} out Quaternion to receive the rotation component
         * @param {mat4} mat Matrix to be decomposed (input)
         * @return {quat} out
         */
        function getRotation(out, mat) {
            // Algorithm taken from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
            var trace = mat[0] + mat[5] + mat[10];
            var S = 0;
            if (trace > 0) {
                S = Math.sqrt(trace + 1.0) * 2;
                out[3] = 0.25 * S;
                out[0] = (mat[6] - mat[9]) / S;
                out[1] = (mat[8] - mat[2]) / S;
                out[2] = (mat[1] - mat[4]) / S;
            }
            else if (mat[0] > mat[5] && mat[0] > mat[10]) {
                S = Math.sqrt(1.0 + mat[0] - mat[5] - mat[10]) * 2;
                out[3] = (mat[6] - mat[9]) / S;
                out[0] = 0.25 * S;
                out[1] = (mat[1] + mat[4]) / S;
                out[2] = (mat[8] + mat[2]) / S;
            }
            else if (mat[5] > mat[10]) {
                S = Math.sqrt(1.0 + mat[5] - mat[0] - mat[10]) * 2;
                out[3] = (mat[8] - mat[2]) / S;
                out[0] = (mat[1] + mat[4]) / S;
                out[1] = 0.25 * S;
                out[2] = (mat[6] + mat[9]) / S;
            }
            else {
                S = Math.sqrt(1.0 + mat[10] - mat[0] - mat[5]) * 2;
                out[3] = (mat[1] - mat[4]) / S;
                out[0] = (mat[8] + mat[2]) / S;
                out[1] = (mat[6] + mat[9]) / S;
                out[2] = 0.25 * S;
            }
            return out;
        }
        /**
         * Creates a matrix from a quaternion rotation, vector translation and vector scale
         * This is equivalent to (but much faster than):
         *
         *     mat4.identity(dest);
         *     mat4.translate(dest, vec);
         *     let quatMat = mat4.create();
         *     quat4.toMat4(quat, quatMat);
         *     mat4.multiply(dest, quatMat);
         *     mat4.scale(dest, scale)
         *
         * @param {mat4} out mat4 receiving operation result
         * @param {quat4} q Rotation quaternion
         * @param {vec3} v Translation vector
         * @param {vec3} s Scaling vector
         * @returns {mat4} out
         */
        function fromRotationTranslationScale(out, q, v, s) {
            // Quaternion math
            var x = q[0], y = q[1], z = q[2], w = q[3];
            var x2 = x + x;
            var y2 = y + y;
            var z2 = z + z;
            var xx = x * x2;
            var xy = x * y2;
            var xz = x * z2;
            var yy = y * y2;
            var yz = y * z2;
            var zz = z * z2;
            var wx = w * x2;
            var wy = w * y2;
            var wz = w * z2;
            var sx = s[0];
            var sy = s[1];
            var sz = s[2];
            out[0] = (1 - (yy + zz)) * sx;
            out[1] = (xy + wz) * sx;
            out[2] = (xz - wy) * sx;
            out[3] = 0;
            out[4] = (xy - wz) * sy;
            out[5] = (1 - (xx + zz)) * sy;
            out[6] = (yz + wx) * sy;
            out[7] = 0;
            out[8] = (xz + wy) * sz;
            out[9] = (yz - wx) * sz;
            out[10] = (1 - (xx + yy)) * sz;
            out[11] = 0;
            out[12] = v[0];
            out[13] = v[1];
            out[14] = v[2];
            out[15] = 1;
            return out;
        }
        /**
         * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
         * This is equivalent to (but much faster than):
         *
         *     mat4.identity(dest);
         *     mat4.translate(dest, vec);
         *     mat4.translate(dest, origin);
         *     let quatMat = mat4.create();
         *     quat4.toMat4(quat, quatMat);
         *     mat4.multiply(dest, quatMat);
         *     mat4.scale(dest, scale)
         *     mat4.translate(dest, negativeOrigin);
         *
         * @param {mat4} out mat4 receiving operation result
         * @param {quat4} q Rotation quaternion
         * @param {vec3} v Translation vector
         * @param {vec3} s Scaling vector
         * @param {vec3} o The origin vector around which to scale and rotate
         * @returns {mat4} out
         */
        function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
            // Quaternion math
            var x = q[0], y = q[1], z = q[2], w = q[3];
            var x2 = x + x;
            var y2 = y + y;
            var z2 = z + z;
            var xx = x * x2;
            var xy = x * y2;
            var xz = x * z2;
            var yy = y * y2;
            var yz = y * z2;
            var zz = z * z2;
            var wx = w * x2;
            var wy = w * y2;
            var wz = w * z2;
            var sx = s[0];
            var sy = s[1];
            var sz = s[2];
            var ox = o[0];
            var oy = o[1];
            var oz = o[2];
            var out0 = (1 - (yy + zz)) * sx;
            var out1 = (xy + wz) * sx;
            var out2 = (xz - wy) * sx;
            var out4 = (xy - wz) * sy;
            var out5 = (1 - (xx + zz)) * sy;
            var out6 = (yz + wx) * sy;
            var out8 = (xz + wy) * sz;
            var out9 = (yz - wx) * sz;
            var out10 = (1 - (xx + yy)) * sz;
            out[0] = out0;
            out[1] = out1;
            out[2] = out2;
            out[3] = 0;
            out[4] = out4;
            out[5] = out5;
            out[6] = out6;
            out[7] = 0;
            out[8] = out8;
            out[9] = out9;
            out[10] = out10;
            out[11] = 0;
            out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
            out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
            out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
            out[15] = 1;
            return out;
        }
        /**
         * Calculates a 4x4 matrix from the given quaternion
         *
         * @param {mat4} out mat4 receiving operation result
         * @param {quat} q Quaternion to create matrix from
         *
         * @returns {mat4} out
         */
        function fromQuat(out, q) {
            var x = q[0], y = q[1], z = q[2], w = q[3];
            var x2 = x + x;
            var y2 = y + y;
            var z2 = z + z;
            var xx = x * x2;
            var yx = y * x2;
            var yy = y * y2;
            var zx = z * x2;
            var zy = z * y2;
            var zz = z * z2;
            var wx = w * x2;
            var wy = w * y2;
            var wz = w * z2;
            out[0] = 1 - yy - zz;
            out[1] = yx + wz;
            out[2] = zx - wy;
            out[3] = 0;
            out[4] = yx - wz;
            out[5] = 1 - xx - zz;
            out[6] = zy + wx;
            out[7] = 0;
            out[8] = zx + wy;
            out[9] = zy - wx;
            out[10] = 1 - xx - yy;
            out[11] = 0;
            out[12] = 0;
            out[13] = 0;
            out[14] = 0;
            out[15] = 1;
            return out;
        }
        /**
         * Generates a frustum matrix with the given bounds
         *
         * @param {mat4} out mat4 frustum matrix will be written into
         * @param {Number} left Left bound of the frustum
         * @param {Number} right Right bound of the frustum
         * @param {Number} bottom Bottom bound of the frustum
         * @param {Number} top Top bound of the frustum
         * @param {Number} near Near bound of the frustum
         * @param {Number} far Far bound of the frustum
         * @returns {mat4} out
         */
        function frustum(out, left, right, bottom, top, near, far) {
            var rl = 1 / (right - left);
            var tb = 1 / (top - bottom);
            var nf = 1 / (near - far);
            out[0] = near * 2 * rl;
            out[1] = 0;
            out[2] = 0;
            out[3] = 0;
            out[4] = 0;
            out[5] = near * 2 * tb;
            out[6] = 0;
            out[7] = 0;
            out[8] = (right + left) * rl;
            out[9] = (top + bottom) * tb;
            out[10] = (far + near) * nf;
            out[11] = -1;
            out[12] = 0;
            out[13] = 0;
            out[14] = far * near * 2 * nf;
            out[15] = 0;
            return out;
        }
        /**
         * Generates a perspective projection matrix with the given bounds.
         * Passing null/undefined/no value for far will generate infinite projection matrix.
         *
         * @param {mat4} out mat4 frustum matrix will be written into
         * @param {number} fovy Vertical field of view in radians
         * @param {number} aspect Aspect ratio. typically viewport width/height
         * @param {number} near Near bound of the frustum
         * @param {number} far Far bound of the frustum, can be null or Infinity
         * @returns {mat4} out
         */
        function perspective(out, fovy, aspect, near, far) {
            var f = 1.0 / Math.tan(fovy / 2), nf;
            out[0] = f / aspect;
            out[1] = 0;
            out[2] = 0;
            out[3] = 0;
            out[4] = 0;
            out[5] = f;
            out[6] = 0;
            out[7] = 0;
            out[8] = 0;
            out[9] = 0;
            out[11] = -1;
            out[12] = 0;
            out[13] = 0;
            out[15] = 0;
            if (far != null && far !== Infinity) {
                nf = 1 / (near - far);
                out[10] = (far + near) * nf;
                out[14] = 2 * far * near * nf;
            }
            else {
                out[10] = -1;
                out[14] = -2 * near;
            }
            return out;
        }
        /**
         * Generates a perspective projection matrix with the given field of view.
         * This is primarily useful for generating projection matrices to be used
         * with the still experiemental WebVR API.
         *
         * @param {mat4} out mat4 frustum matrix will be written into
         * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
         * @param {number} near Near bound of the frustum
         * @param {number} far Far bound of the frustum
         * @returns {mat4} out
         */
        function perspectiveFromFieldOfView(out, fov, near, far) {
            var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
            var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
            var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
            var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
            var xScale = 2.0 / (leftTan + rightTan);
            var yScale = 2.0 / (upTan + downTan);
            out[0] = xScale;
            out[1] = 0.0;
            out[2] = 0.0;
            out[3] = 0.0;
            out[4] = 0.0;
            out[5] = yScale;
            out[6] = 0.0;
            out[7] = 0.0;
            out[8] = -((leftTan - rightTan) * xScale * 0.5);
            out[9] = (upTan - downTan) * yScale * 0.5;
            out[10] = far / (near - far);
            out[11] = -1.0;
            out[12] = 0.0;
            out[13] = 0.0;
            out[14] = far * near / (near - far);
            out[15] = 0.0;
            return out;
        }
        /**
         * Generates a orthogonal projection matrix with the given bounds
         *
         * @param {mat4} out mat4 frustum matrix will be written into
         * @param {number} left Left bound of the frustum
         * @param {number} right Right bound of the frustum
         * @param {number} bottom Bottom bound of the frustum
         * @param {number} top Top bound of the frustum
         * @param {number} near Near bound of the frustum
         * @param {number} far Far bound of the frustum
         * @returns {mat4} out
         */
        function ortho(out, left, right, bottom, top, near, far) {
            var lr = 1 / (left - right);
            var bt = 1 / (bottom - top);
            var nf = 1 / (near - far);
            out[0] = -2 * lr;
            out[1] = 0;
            out[2] = 0;
            out[3] = 0;
            out[4] = 0;
            out[5] = -2 * bt;
            out[6] = 0;
            out[7] = 0;
            out[8] = 0;
            out[9] = 0;
            out[10] = 2 * nf;
            out[11] = 0;
            out[12] = (left + right) * lr;
            out[13] = (top + bottom) * bt;
            out[14] = (far + near) * nf;
            out[15] = 1;
            return out;
        }
        /**
         * Generates a look-at matrix with the given eye position, focal point, and up axis.
         * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
         *
         * @param {mat4} out mat4 frustum matrix will be written into
         * @param {vec3} eye Position of the viewer
         * @param {vec3} center Point the viewer is looking at
         * @param {vec3} up vec3 pointing up
         * @returns {mat4} out
         */
        function lookAt(out, eye, center, up) {
            var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
            var eyex = eye[0];
            var eyey = eye[1];
            var eyez = eye[2];
            var upx = up[0];
            var upy = up[1];
            var upz = up[2];
            var centerx = center[0];
            var centery = center[1];
            var centerz = center[2];
            if (Math.abs(eyex - centerx) < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] && Math.abs(eyey - centery) < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] && Math.abs(eyez - centerz) < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
                return identity(out);
            }
            z0 = eyex - centerx;
            z1 = eyey - centery;
            z2 = eyez - centerz;
            len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
            z0 *= len;
            z1 *= len;
            z2 *= len;
            x0 = upy * z2 - upz * z1;
            x1 = upz * z0 - upx * z2;
            x2 = upx * z1 - upy * z0;
            len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
            if (!len) {
                x0 = 0;
                x1 = 0;
                x2 = 0;
            }
            else {
                len = 1 / len;
                x0 *= len;
                x1 *= len;
                x2 *= len;
            }
            y0 = z1 * x2 - z2 * x1;
            y1 = z2 * x0 - z0 * x2;
            y2 = z0 * x1 - z1 * x0;
            len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
            if (!len) {
                y0 = 0;
                y1 = 0;
                y2 = 0;
            }
            else {
                len = 1 / len;
                y0 *= len;
                y1 *= len;
                y2 *= len;
            }
            out[0] = x0;
            out[1] = y0;
            out[2] = z0;
            out[3] = 0;
            out[4] = x1;
            out[5] = y1;
            out[6] = z1;
            out[7] = 0;
            out[8] = x2;
            out[9] = y2;
            out[10] = z2;
            out[11] = 0;
            out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
            out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
            out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
            out[15] = 1;
            return out;
        }
        /**
         * Generates a matrix that makes something look at something else.
         *
         * @param {mat4} out mat4 frustum matrix will be written into
         * @param {vec3} eye Position of the viewer
         * @param {vec3} center Point the viewer is looking at
         * @param {vec3} up vec3 pointing up
         * @returns {mat4} out
         */
        function targetTo(out, eye, target, up) {
            var eyex = eye[0], eyey = eye[1], eyez = eye[2], upx = up[0], upy = up[1], upz = up[2];
            var z0 = eyex - target[0], z1 = eyey - target[1], z2 = eyez - target[2];
            var len = z0 * z0 + z1 * z1 + z2 * z2;
            if (len > 0) {
                len = 1 / Math.sqrt(len);
                z0 *= len;
                z1 *= len;
                z2 *= len;
            }
            var x0 = upy * z2 - upz * z1, x1 = upz * z0 - upx * z2, x2 = upx * z1 - upy * z0;
            len = x0 * x0 + x1 * x1 + x2 * x2;
            if (len > 0) {
                len = 1 / Math.sqrt(len);
                x0 *= len;
                x1 *= len;
                x2 *= len;
            }
            out[0] = x0;
            out[1] = x1;
            out[2] = x2;
            out[3] = 0;
            out[4] = z1 * x2 - z2 * x1;
            out[5] = z2 * x0 - z0 * x2;
            out[6] = z0 * x1 - z1 * x0;
            out[7] = 0;
            out[8] = z0;
            out[9] = z1;
            out[10] = z2;
            out[11] = 0;
            out[12] = eyex;
            out[13] = eyey;
            out[14] = eyez;
            out[15] = 1;
            return out;
        }
        ;
        /**
         * Returns a string representation of a mat4
         *
         * @param {mat4} a matrix to represent as a string
         * @returns {String} string representation of the matrix
         */
        function str(a) {
            return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
        }
        /**
         * Returns Frobenius norm of a mat4
         *
         * @param {mat4} a the matrix to calculate Frobenius norm of
         * @returns {Number} Frobenius norm
         */
        function frob(a) {
            return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2));
        }
        /**
         * Adds two mat4's
         *
         * @param {mat4} out the receiving matrix
         * @param {mat4} a the first operand
         * @param {mat4} b the second operand
         * @returns {mat4} out
         */
        function add(out, a, b) {
            out[0] = a[0] + b[0];
            out[1] = a[1] + b[1];
            out[2] = a[2] + b[2];
            out[3] = a[3] + b[3];
            out[4] = a[4] + b[4];
            out[5] = a[5] + b[5];
            out[6] = a[6] + b[6];
            out[7] = a[7] + b[7];
            out[8] = a[8] + b[8];
            out[9] = a[9] + b[9];
            out[10] = a[10] + b[10];
            out[11] = a[11] + b[11];
            out[12] = a[12] + b[12];
            out[13] = a[13] + b[13];
            out[14] = a[14] + b[14];
            out[15] = a[15] + b[15];
            return out;
        }
        /**
         * Subtracts matrix b from matrix a
         *
         * @param {mat4} out the receiving matrix
         * @param {mat4} a the first operand
         * @param {mat4} b the second operand
         * @returns {mat4} out
         */
        function subtract(out, a, b) {
            out[0] = a[0] - b[0];
            out[1] = a[1] - b[1];
            out[2] = a[2] - b[2];
            out[3] = a[3] - b[3];
            out[4] = a[4] - b[4];
            out[5] = a[5] - b[5];
            out[6] = a[6] - b[6];
            out[7] = a[7] - b[7];
            out[8] = a[8] - b[8];
            out[9] = a[9] - b[9];
            out[10] = a[10] - b[10];
            out[11] = a[11] - b[11];
            out[12] = a[12] - b[12];
            out[13] = a[13] - b[13];
            out[14] = a[14] - b[14];
            out[15] = a[15] - b[15];
            return out;
        }
        /**
         * Multiply each element of the matrix by a scalar.
         *
         * @param {mat4} out the receiving matrix
         * @param {mat4} a the matrix to scale
         * @param {Number} b amount to scale the matrix's elements by
         * @returns {mat4} out
         */
        function multiplyScalar(out, a, b) {
            out[0] = a[0] * b;
            out[1] = a[1] * b;
            out[2] = a[2] * b;
            out[3] = a[3] * b;
            out[4] = a[4] * b;
            out[5] = a[5] * b;
            out[6] = a[6] * b;
            out[7] = a[7] * b;
            out[8] = a[8] * b;
            out[9] = a[9] * b;
            out[10] = a[10] * b;
            out[11] = a[11] * b;
            out[12] = a[12] * b;
            out[13] = a[13] * b;
            out[14] = a[14] * b;
            out[15] = a[15] * b;
            return out;
        }
        /**
         * Adds two mat4's after multiplying each element of the second operand by a scalar value.
         *
         * @param {mat4} out the receiving vector
         * @param {mat4} a the first operand
         * @param {mat4} b the second operand
         * @param {Number} scale the amount to scale b's elements by before adding
         * @returns {mat4} out
         */
        function multiplyScalarAndAdd(out, a, b, scale) {
            out[0] = a[0] + b[0] * scale;
            out[1] = a[1] + b[1] * scale;
            out[2] = a[2] + b[2] * scale;
            out[3] = a[3] + b[3] * scale;
            out[4] = a[4] + b[4] * scale;
            out[5] = a[5] + b[5] * scale;
            out[6] = a[6] + b[6] * scale;
            out[7] = a[7] + b[7] * scale;
            out[8] = a[8] + b[8] * scale;
            out[9] = a[9] + b[9] * scale;
            out[10] = a[10] + b[10] * scale;
            out[11] = a[11] + b[11] * scale;
            out[12] = a[12] + b[12] * scale;
            out[13] = a[13] + b[13] * scale;
            out[14] = a[14] + b[14] * scale;
            out[15] = a[15] + b[15] * scale;
            return out;
        }
        /**
         * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
         *
         * @param {mat4} a The first matrix.
         * @param {mat4} b The second matrix.
         * @returns {Boolean} True if the matrices are equal, false otherwise.
         */
        function exactEquals(a, b) {
            return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
        }
        /**
         * Returns whether or not the matrices have approximately the same elements in the same position.
         *
         * @param {mat4} a The first matrix.
         * @param {mat4} b The second matrix.
         * @returns {Boolean} True if the matrices are equal, false otherwise.
         */
        function equals(a, b) {
            var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
            var a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7];
            var a8 = a[8], a9 = a[9], a10 = a[10], a11 = a[11];
            var a12 = a[12], a13 = a[13], a14 = a[14], a15 = a[15];
            var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
            var b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7];
            var b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11];
            var b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
            return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a15), Math.abs(b15));
        }
        /**
         * Alias for {@link mat4.multiply}
         * @function
         */
        var mul = multiply;
        /**
         * Alias for {@link mat4.subtract}
         * @function
         */
        var sub = subtract;
        /***/ 
    }),
    /***/ "./node_modules/gl-matrix/esm/quat.js": 
    /*!********************************************!*\
      !*** ./node_modules/gl-matrix/esm/quat.js ***!
      \********************************************/
    /*! exports provided: create, identity, setAxisAngle, getAxisAngle, multiply, rotateX, rotateY, rotateZ, calculateW, slerp, random, invert, conjugate, fromMat3, fromEuler, str, clone, fromValues, copy, set, add, mul, scale, dot, lerp, length, len, squaredLength, sqrLen, normalize, exactEquals, equals, rotationTo, sqlerp, setAxes */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function () { return create; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function () { return identity; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAxisAngle", function () { return setAxisAngle; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAxisAngle", function () { return getAxisAngle; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function () { return multiply; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function () { return rotateX; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function () { return rotateY; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function () { return rotateZ; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateW", function () { return calculateW; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slerp", function () { return slerp; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function () { return random; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function () { return invert; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conjugate", function () { return conjugate; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat3", function () { return fromMat3; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromEuler", function () { return fromEuler; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function () { return str; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function () { return clone; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function () { return fromValues; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function () { return copy; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function () { return set; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function () { return add; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function () { return mul; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function () { return scale; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function () { return dot; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function () { return lerp; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function () { return length; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function () { return len; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function () { return squaredLength; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function () { return sqrLen; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function () { return normalize; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function () { return exactEquals; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function () { return equals; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotationTo", function () { return rotationTo; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqlerp", function () { return sqlerp; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAxes", function () { return setAxes; });
        /* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");
        /* harmony import */ var _mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mat3.js */ "./node_modules/gl-matrix/esm/mat3.js");
        /* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vec3.js */ "./node_modules/gl-matrix/esm/vec3.js");
        /* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vec4.js */ "./node_modules/gl-matrix/esm/vec4.js");
        /**
         * Quaternion
         * @module quat
         */
        /**
         * Creates a new identity quat
         *
         * @returns {quat} a new quaternion
         */
        function create() {
            var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
            if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
                out[0] = 0;
                out[1] = 0;
                out[2] = 0;
            }
            out[3] = 1;
            return out;
        }
        /**
         * Set a quat to the identity quaternion
         *
         * @param {quat} out the receiving quaternion
         * @returns {quat} out
         */
        function identity(out) {
            out[0] = 0;
            out[1] = 0;
            out[2] = 0;
            out[3] = 1;
            return out;
        }
        /**
         * Sets a quat from the given angle and rotation axis,
         * then returns it.
         *
         * @param {quat} out the receiving quaternion
         * @param {vec3} axis the axis around which to rotate
         * @param {Number} rad the angle in radians
         * @returns {quat} out
         **/
        function setAxisAngle(out, axis, rad) {
            rad = rad * 0.5;
            var s = Math.sin(rad);
            out[0] = s * axis[0];
            out[1] = s * axis[1];
            out[2] = s * axis[2];
            out[3] = Math.cos(rad);
            return out;
        }
        /**
         * Gets the rotation axis and angle for a given
         *  quaternion. If a quaternion is created with
         *  setAxisAngle, this method will return the same
         *  values as providied in the original parameter list
         *  OR functionally equivalent values.
         * Example: The quaternion formed by axis [0, 0, 1] and
         *  angle -90 is the same as the quaternion formed by
         *  [0, 0, 1] and 270. This method favors the latter.
         * @param  {vec3} out_axis  Vector receiving the axis of rotation
         * @param  {quat} q     Quaternion to be decomposed
         * @return {Number}     Angle, in radians, of the rotation
         */
        function getAxisAngle(out_axis, q) {
            var rad = Math.acos(q[3]) * 2.0;
            var s = Math.sin(rad / 2.0);
            if (s > _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
                out_axis[0] = q[0] / s;
                out_axis[1] = q[1] / s;
                out_axis[2] = q[2] / s;
            }
            else {
                // If s is zero, return any axis (no rotation - axis does not matter)
                out_axis[0] = 1;
                out_axis[1] = 0;
                out_axis[2] = 0;
            }
            return rad;
        }
        /**
         * Multiplies two quat's
         *
         * @param {quat} out the receiving quaternion
         * @param {quat} a the first operand
         * @param {quat} b the second operand
         * @returns {quat} out
         */
        function multiply(out, a, b) {
            var ax = a[0], ay = a[1], az = a[2], aw = a[3];
            var bx = b[0], by = b[1], bz = b[2], bw = b[3];
            out[0] = ax * bw + aw * bx + ay * bz - az * by;
            out[1] = ay * bw + aw * by + az * bx - ax * bz;
            out[2] = az * bw + aw * bz + ax * by - ay * bx;
            out[3] = aw * bw - ax * bx - ay * by - az * bz;
            return out;
        }
        /**
         * Rotates a quaternion by the given angle about the X axis
         *
         * @param {quat} out quat receiving operation result
         * @param {quat} a quat to rotate
         * @param {number} rad angle (in radians) to rotate
         * @returns {quat} out
         */
        function rotateX(out, a, rad) {
            rad *= 0.5;
            var ax = a[0], ay = a[1], az = a[2], aw = a[3];
            var bx = Math.sin(rad), bw = Math.cos(rad);
            out[0] = ax * bw + aw * bx;
            out[1] = ay * bw + az * bx;
            out[2] = az * bw - ay * bx;
            out[3] = aw * bw - ax * bx;
            return out;
        }
        /**
         * Rotates a quaternion by the given angle about the Y axis
         *
         * @param {quat} out quat receiving operation result
         * @param {quat} a quat to rotate
         * @param {number} rad angle (in radians) to rotate
         * @returns {quat} out
         */
        function rotateY(out, a, rad) {
            rad *= 0.5;
            var ax = a[0], ay = a[1], az = a[2], aw = a[3];
            var by = Math.sin(rad), bw = Math.cos(rad);
            out[0] = ax * bw - az * by;
            out[1] = ay * bw + aw * by;
            out[2] = az * bw + ax * by;
            out[3] = aw * bw - ay * by;
            return out;
        }
        /**
         * Rotates a quaternion by the given angle about the Z axis
         *
         * @param {quat} out quat receiving operation result
         * @param {quat} a quat to rotate
         * @param {number} rad angle (in radians) to rotate
         * @returns {quat} out
         */
        function rotateZ(out, a, rad) {
            rad *= 0.5;
            var ax = a[0], ay = a[1], az = a[2], aw = a[3];
            var bz = Math.sin(rad), bw = Math.cos(rad);
            out[0] = ax * bw + ay * bz;
            out[1] = ay * bw - ax * bz;
            out[2] = az * bw + aw * bz;
            out[3] = aw * bw - az * bz;
            return out;
        }
        /**
         * Calculates the W component of a quat from the X, Y, and Z components.
         * Assumes that quaternion is 1 unit in length.
         * Any existing W component will be ignored.
         *
         * @param {quat} out the receiving quaternion
         * @param {quat} a quat to calculate W component of
         * @returns {quat} out
         */
        function calculateW(out, a) {
            var x = a[0], y = a[1], z = a[2];
            out[0] = x;
            out[1] = y;
            out[2] = z;
            out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
            return out;
        }
        /**
         * Performs a spherical linear interpolation between two quat
         *
         * @param {quat} out the receiving quaternion
         * @param {quat} a the first operand
         * @param {quat} b the second operand
         * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
         * @returns {quat} out
         */
        function slerp(out, a, b, t) {
            // benchmarks:
            //    http://jsperf.com/quaternion-slerp-implementations
            var ax = a[0], ay = a[1], az = a[2], aw = a[3];
            var bx = b[0], by = b[1], bz = b[2], bw = b[3];
            var omega, cosom, sinom, scale0, scale1; // calc cosine
            cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)
            if (cosom < 0.0) {
                cosom = -cosom;
                bx = -bx;
                by = -by;
                bz = -bz;
                bw = -bw;
            } // calculate coefficients
            if (1.0 - cosom > _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
                // standard case (slerp)
                omega = Math.acos(cosom);
                sinom = Math.sin(omega);
                scale0 = Math.sin((1.0 - t) * omega) / sinom;
                scale1 = Math.sin(t * omega) / sinom;
            }
            else {
                // "from" and "to" quaternions are very close
                //  ... so we can do a linear interpolation
                scale0 = 1.0 - t;
                scale1 = t;
            } // calculate final values
            out[0] = scale0 * ax + scale1 * bx;
            out[1] = scale0 * ay + scale1 * by;
            out[2] = scale0 * az + scale1 * bz;
            out[3] = scale0 * aw + scale1 * bw;
            return out;
        }
        /**
         * Generates a random quaternion
         *
         * @param {quat} out the receiving quaternion
         * @returns {quat} out
         */
        function random(out) {
            // Implementation of http://planning.cs.uiuc.edu/node198.html
            // TODO: Calling random 3 times is probably not the fastest solution
            var u1 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]();
            var u2 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]();
            var u3 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]();
            var sqrt1MinusU1 = Math.sqrt(1 - u1);
            var sqrtU1 = Math.sqrt(u1);
            out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
            out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
            out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
            out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
            return out;
        }
        /**
         * Calculates the inverse of a quat
         *
         * @param {quat} out the receiving quaternion
         * @param {quat} a quat to calculate inverse of
         * @returns {quat} out
         */
        function invert(out, a) {
            var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
            var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
            var invDot = dot ? 1.0 / dot : 0; // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0
            out[0] = -a0 * invDot;
            out[1] = -a1 * invDot;
            out[2] = -a2 * invDot;
            out[3] = a3 * invDot;
            return out;
        }
        /**
         * Calculates the conjugate of a quat
         * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
         *
         * @param {quat} out the receiving quaternion
         * @param {quat} a quat to calculate conjugate of
         * @returns {quat} out
         */
        function conjugate(out, a) {
            out[0] = -a[0];
            out[1] = -a[1];
            out[2] = -a[2];
            out[3] = a[3];
            return out;
        }
        /**
         * Creates a quaternion from the given 3x3 rotation matrix.
         *
         * NOTE: The resultant quaternion is not normalized, so you should be sure
         * to renormalize the quaternion yourself where necessary.
         *
         * @param {quat} out the receiving quaternion
         * @param {mat3} m rotation matrix
         * @returns {quat} out
         * @function
         */
        function fromMat3(out, m) {
            // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
            // article "Quaternion Calculus and Fast Animation".
            var fTrace = m[0] + m[4] + m[8];
            var fRoot;
            if (fTrace > 0.0) {
                // |w| > 1/2, may as well choose w > 1/2
                fRoot = Math.sqrt(fTrace + 1.0); // 2w
                out[3] = 0.5 * fRoot;
                fRoot = 0.5 / fRoot; // 1/(4w)
                out[0] = (m[5] - m[7]) * fRoot;
                out[1] = (m[6] - m[2]) * fRoot;
                out[2] = (m[1] - m[3]) * fRoot;
            }
            else {
                // |w| <= 1/2
                var i = 0;
                if (m[4] > m[0])
                    i = 1;
                if (m[8] > m[i * 3 + i])
                    i = 2;
                var j = (i + 1) % 3;
                var k = (i + 2) % 3;
                fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
                out[i] = 0.5 * fRoot;
                fRoot = 0.5 / fRoot;
                out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
                out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
                out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
            }
            return out;
        }
        /**
         * Creates a quaternion from the given euler angle x, y, z.
         *
         * @param {quat} out the receiving quaternion
         * @param {x} Angle to rotate around X axis in degrees.
         * @param {y} Angle to rotate around Y axis in degrees.
         * @param {z} Angle to rotate around Z axis in degrees.
         * @returns {quat} out
         * @function
         */
        function fromEuler(out, x, y, z) {
            var halfToRad = 0.5 * Math.PI / 180.0;
            x *= halfToRad;
            y *= halfToRad;
            z *= halfToRad;
            var sx = Math.sin(x);
            var cx = Math.cos(x);
            var sy = Math.sin(y);
            var cy = Math.cos(y);
            var sz = Math.sin(z);
            var cz = Math.cos(z);
            out[0] = sx * cy * cz - cx * sy * sz;
            out[1] = cx * sy * cz + sx * cy * sz;
            out[2] = cx * cy * sz - sx * sy * cz;
            out[3] = cx * cy * cz + sx * sy * sz;
            return out;
        }
        /**
         * Returns a string representation of a quatenion
         *
         * @param {quat} a vector to represent as a string
         * @returns {String} string representation of the vector
         */
        function str(a) {
            return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
        }
        /**
         * Creates a new quat initialized with values from an existing quaternion
         *
         * @param {quat} a quaternion to clone
         * @returns {quat} a new quaternion
         * @function
         */
        var clone = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["clone"];
        /**
         * Creates a new quat initialized with the given values
         *
         * @param {Number} x X component
         * @param {Number} y Y component
         * @param {Number} z Z component
         * @param {Number} w W component
         * @returns {quat} a new quaternion
         * @function
         */
        var fromValues = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["fromValues"];
        /**
         * Copy the values from one quat to another
         *
         * @param {quat} out the receiving quaternion
         * @param {quat} a the source quaternion
         * @returns {quat} out
         * @function
         */
        var copy = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["copy"];
        /**
         * Set the components of a quat to the given values
         *
         * @param {quat} out the receiving quaternion
         * @param {Number} x X component
         * @param {Number} y Y component
         * @param {Number} z Z component
         * @param {Number} w W component
         * @returns {quat} out
         * @function
         */
        var set = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["set"];
        /**
         * Adds two quat's
         *
         * @param {quat} out the receiving quaternion
         * @param {quat} a the first operand
         * @param {quat} b the second operand
         * @returns {quat} out
         * @function
         */
        var add = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["add"];
        /**
         * Alias for {@link quat.multiply}
         * @function
         */
        var mul = multiply;
        /**
         * Scales a quat by a scalar number
         *
         * @param {quat} out the receiving vector
         * @param {quat} a the vector to scale
         * @param {Number} b amount to scale the vector by
         * @returns {quat} out
         * @function
         */
        var scale = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["scale"];
        /**
         * Calculates the dot product of two quat's
         *
         * @param {quat} a the first operand
         * @param {quat} b the second operand
         * @returns {Number} dot product of a and b
         * @function
         */
        var dot = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["dot"];
        /**
         * Performs a linear interpolation between two quat's
         *
         * @param {quat} out the receiving quaternion
         * @param {quat} a the first operand
         * @param {quat} b the second operand
         * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
         * @returns {quat} out
         * @function
         */
        var lerp = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["lerp"];
        /**
         * Calculates the length of a quat
         *
         * @param {quat} a vector to calculate length of
         * @returns {Number} length of a
         */
        var length = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["length"];
        /**
         * Alias for {@link quat.length}
         * @function
         */
        var len = length;
        /**
         * Calculates the squared length of a quat
         *
         * @param {quat} a vector to calculate squared length of
         * @returns {Number} squared length of a
         * @function
         */
        var squaredLength = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["squaredLength"];
        /**
         * Alias for {@link quat.squaredLength}
         * @function
         */
        var sqrLen = squaredLength;
        /**
         * Normalize a quat
         *
         * @param {quat} out the receiving quaternion
         * @param {quat} a quaternion to normalize
         * @returns {quat} out
         * @function
         */
        var normalize = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["normalize"];
        /**
         * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
         *
         * @param {quat} a The first quaternion.
         * @param {quat} b The second quaternion.
         * @returns {Boolean} True if the vectors are equal, false otherwise.
         */
        var exactEquals = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["exactEquals"];
        /**
         * Returns whether or not the quaternions have approximately the same elements in the same position.
         *
         * @param {quat} a The first vector.
         * @param {quat} b The second vector.
         * @returns {Boolean} True if the vectors are equal, false otherwise.
         */
        var equals = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["equals"];
        /**
         * Sets a quaternion to represent the shortest rotation from one
         * vector to another.
         *
         * Both vectors are assumed to be unit length.
         *
         * @param {quat} out the receiving quaternion.
         * @param {vec3} a the initial vector
         * @param {vec3} b the destination vector
         * @returns {quat} out
         */
        var rotationTo = function () {
            var tmpvec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["create"]();
            var xUnitVec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["fromValues"](1, 0, 0);
            var yUnitVec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["fromValues"](0, 1, 0);
            return function (out, a, b) {
                var dot = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["dot"](a, b);
                if (dot < -0.999999) {
                    _vec3_js__WEBPACK_IMPORTED_MODULE_2__["cross"](tmpvec3, xUnitVec3, a);
                    if (_vec3_js__WEBPACK_IMPORTED_MODULE_2__["len"](tmpvec3) < 0.000001)
                        _vec3_js__WEBPACK_IMPORTED_MODULE_2__["cross"](tmpvec3, yUnitVec3, a);
                    _vec3_js__WEBPACK_IMPORTED_MODULE_2__["normalize"](tmpvec3, tmpvec3);
                    setAxisAngle(out, tmpvec3, Math.PI);
                    return out;
                }
                else if (dot > 0.999999) {
                    out[0] = 0;
                    out[1] = 0;
                    out[2] = 0;
                    out[3] = 1;
                    return out;
                }
                else {
                    _vec3_js__WEBPACK_IMPORTED_MODULE_2__["cross"](tmpvec3, a, b);
                    out[0] = tmpvec3[0];
                    out[1] = tmpvec3[1];
                    out[2] = tmpvec3[2];
                    out[3] = 1 + dot;
                    return normalize(out, out);
                }
            };
        }();
        /**
         * Performs a spherical linear interpolation with two control points
         *
         * @param {quat} out the receiving quaternion
         * @param {quat} a the first operand
         * @param {quat} b the second operand
         * @param {quat} c the third operand
         * @param {quat} d the fourth operand
         * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
         * @returns {quat} out
         */
        var sqlerp = function () {
            var temp1 = create();
            var temp2 = create();
            return function (out, a, b, c, d, t) {
                slerp(temp1, a, d, t);
                slerp(temp2, b, c, t);
                slerp(out, temp1, temp2, 2 * t * (1 - t));
                return out;
            };
        }();
        /**
         * Sets the specified quaternion with values corresponding to the given
         * axes. Each axis is a vec3 and is expected to be unit length and
         * perpendicular to all other specified axes.
         *
         * @param {vec3} view  the vector representing the viewing direction
         * @param {vec3} right the vector representing the local "right" direction
         * @param {vec3} up    the vector representing the local "up" direction
         * @returns {quat} out
         */
        var setAxes = function () {
            var matr = _mat3_js__WEBPACK_IMPORTED_MODULE_1__["create"]();
            return function (out, view, right, up) {
                matr[0] = right[0];
                matr[3] = right[1];
                matr[6] = right[2];
                matr[1] = up[0];
                matr[4] = up[1];
                matr[7] = up[2];
                matr[2] = -view[0];
                matr[5] = -view[1];
                matr[8] = -view[2];
                return normalize(out, fromMat3(out, matr));
            };
        }();
        /***/ 
    }),
    /***/ "./node_modules/gl-matrix/esm/quat2.js": 
    /*!*********************************************!*\
      !*** ./node_modules/gl-matrix/esm/quat2.js ***!
      \*********************************************/
    /*! exports provided: create, clone, fromValues, fromRotationTranslationValues, fromRotationTranslation, fromTranslation, fromRotation, fromMat4, copy, identity, set, getReal, getDual, setReal, setDual, getTranslation, translate, rotateX, rotateY, rotateZ, rotateByQuatAppend, rotateByQuatPrepend, rotateAroundAxis, add, multiply, mul, scale, dot, lerp, invert, conjugate, length, len, squaredLength, sqrLen, normalize, str, exactEquals, equals */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function () { return create; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function () { return clone; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function () { return fromValues; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslationValues", function () { return fromRotationTranslationValues; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslation", function () { return fromRotationTranslation; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTranslation", function () { return fromTranslation; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function () { return fromRotation; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat4", function () { return fromMat4; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function () { return copy; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function () { return identity; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function () { return set; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReal", function () { return getReal; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDual", function () { return getDual; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setReal", function () { return setReal; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDual", function () { return setDual; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTranslation", function () { return getTranslation; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function () { return translate; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function () { return rotateX; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function () { return rotateY; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function () { return rotateZ; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateByQuatAppend", function () { return rotateByQuatAppend; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateByQuatPrepend", function () { return rotateByQuatPrepend; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateAroundAxis", function () { return rotateAroundAxis; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function () { return add; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function () { return multiply; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function () { return mul; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function () { return scale; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function () { return dot; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function () { return lerp; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function () { return invert; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conjugate", function () { return conjugate; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function () { return length; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function () { return len; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function () { return squaredLength; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function () { return sqrLen; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function () { return normalize; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function () { return str; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function () { return exactEquals; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function () { return equals; });
        /* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");
        /* harmony import */ var _quat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quat.js */ "./node_modules/gl-matrix/esm/quat.js");
        /* harmony import */ var _mat4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mat4.js */ "./node_modules/gl-matrix/esm/mat4.js");
        /**
         * Dual Quaternion<br>
         * Format: [real, dual]<br>
         * Quaternion format: XYZW<br>
         * Make sure to have normalized dual quaternions, otherwise the functions may not work as intended.<br>
         * @module quat2
         */
        /**
         * Creates a new identity dual quat
         *
         * @returns {quat2} a new dual quaternion [real -> rotation, dual -> translation]
         */
        function create() {
            var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](8);
            if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
                dq[0] = 0;
                dq[1] = 0;
                dq[2] = 0;
                dq[4] = 0;
                dq[5] = 0;
                dq[6] = 0;
                dq[7] = 0;
            }
            dq[3] = 1;
            return dq;
        }
        /**
         * Creates a new quat initialized with values from an existing quaternion
         *
         * @param {quat2} a dual quaternion to clone
         * @returns {quat2} new dual quaternion
         * @function
         */
        function clone(a) {
            var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](8);
            dq[0] = a[0];
            dq[1] = a[1];
            dq[2] = a[2];
            dq[3] = a[3];
            dq[4] = a[4];
            dq[5] = a[5];
            dq[6] = a[6];
            dq[7] = a[7];
            return dq;
        }
        /**
         * Creates a new dual quat initialized with the given values
         *
         * @param {Number} x1 X component
         * @param {Number} y1 Y component
         * @param {Number} z1 Z component
         * @param {Number} w1 W component
         * @param {Number} x2 X component
         * @param {Number} y2 Y component
         * @param {Number} z2 Z component
         * @param {Number} w2 W component
         * @returns {quat2} new dual quaternion
         * @function
         */
        function fromValues(x1, y1, z1, w1, x2, y2, z2, w2) {
            var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](8);
            dq[0] = x1;
            dq[1] = y1;
            dq[2] = z1;
            dq[3] = w1;
            dq[4] = x2;
            dq[5] = y2;
            dq[6] = z2;
            dq[7] = w2;
            return dq;
        }
        /**
         * Creates a new dual quat from the given values (quat and translation)
         *
         * @param {Number} x1 X component
         * @param {Number} y1 Y component
         * @param {Number} z1 Z component
         * @param {Number} w1 W component
         * @param {Number} x2 X component (translation)
         * @param {Number} y2 Y component (translation)
         * @param {Number} z2 Z component (translation)
         * @returns {quat2} new dual quaternion
         * @function
         */
        function fromRotationTranslationValues(x1, y1, z1, w1, x2, y2, z2) {
            var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](8);
            dq[0] = x1;
            dq[1] = y1;
            dq[2] = z1;
            dq[3] = w1;
            var ax = x2 * 0.5, ay = y2 * 0.5, az = z2 * 0.5;
            dq[4] = ax * w1 + ay * z1 - az * y1;
            dq[5] = ay * w1 + az * x1 - ax * z1;
            dq[6] = az * w1 + ax * y1 - ay * x1;
            dq[7] = -ax * x1 - ay * y1 - az * z1;
            return dq;
        }
        /**
         * Creates a dual quat from a quaternion and a translation
         *
         * @param {quat2} dual quaternion receiving operation result
         * @param {quat} q quaternion
         * @param {vec3} t tranlation vector
         * @returns {quat2} dual quaternion receiving operation result
         * @function
         */
        function fromRotationTranslation(out, q, t) {
            var ax = t[0] * 0.5, ay = t[1] * 0.5, az = t[2] * 0.5, bx = q[0], by = q[1], bz = q[2], bw = q[3];
            out[0] = bx;
            out[1] = by;
            out[2] = bz;
            out[3] = bw;
            out[4] = ax * bw + ay * bz - az * by;
            out[5] = ay * bw + az * bx - ax * bz;
            out[6] = az * bw + ax * by - ay * bx;
            out[7] = -ax * bx - ay * by - az * bz;
            return out;
        }
        /**
         * Creates a dual quat from a translation
         *
         * @param {quat2} dual quaternion receiving operation result
         * @param {vec3} t translation vector
         * @returns {quat2} dual quaternion receiving operation result
         * @function
         */
        function fromTranslation(out, t) {
            out[0] = 0;
            out[1] = 0;
            out[2] = 0;
            out[3] = 1;
            out[4] = t[0] * 0.5;
            out[5] = t[1] * 0.5;
            out[6] = t[2] * 0.5;
            out[7] = 0;
            return out;
        }
        /**
         * Creates a dual quat from a quaternion
         *
         * @param {quat2} dual quaternion receiving operation result
         * @param {quat} q the quaternion
         * @returns {quat2} dual quaternion receiving operation result
         * @function
         */
        function fromRotation(out, q) {
            out[0] = q[0];
            out[1] = q[1];
            out[2] = q[2];
            out[3] = q[3];
            out[4] = 0;
            out[5] = 0;
            out[6] = 0;
            out[7] = 0;
            return out;
        }
        /**
         * Creates a new dual quat from a matrix (4x4)
         *
         * @param {quat2} out the dual quaternion
         * @param {mat4} a the matrix
         * @returns {quat2} dual quat receiving operation result
         * @function
         */
        function fromMat4(out, a) {
            //TODO Optimize this
            var outer = _quat_js__WEBPACK_IMPORTED_MODULE_1__["create"]();
            _mat4_js__WEBPACK_IMPORTED_MODULE_2__["getRotation"](outer, a);
            var t = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
            _mat4_js__WEBPACK_IMPORTED_MODULE_2__["getTranslation"](t, a);
            fromRotationTranslation(out, outer, t);
            return out;
        }
        /**
         * Copy the values from one dual quat to another
         *
         * @param {quat2} out the receiving dual quaternion
         * @param {quat2} a the source dual quaternion
         * @returns {quat2} out
         * @function
         */
        function copy(out, a) {
            out[0] = a[0];
            out[1] = a[1];
            out[2] = a[2];
            out[3] = a[3];
            out[4] = a[4];
            out[5] = a[5];
            out[6] = a[6];
            out[7] = a[7];
            return out;
        }
        /**
         * Set a dual quat to the identity dual quaternion
         *
         * @param {quat2} out the receiving quaternion
         * @returns {quat2} out
         */
        function identity(out) {
            out[0] = 0;
            out[1] = 0;
            out[2] = 0;
            out[3] = 1;
            out[4] = 0;
            out[5] = 0;
            out[6] = 0;
            out[7] = 0;
            return out;
        }
        /**
         * Set the components of a dual quat to the given values
         *
         * @param {quat2} out the receiving quaternion
         * @param {Number} x1 X component
         * @param {Number} y1 Y component
         * @param {Number} z1 Z component
         * @param {Number} w1 W component
         * @param {Number} x2 X component
         * @param {Number} y2 Y component
         * @param {Number} z2 Z component
         * @param {Number} w2 W component
         * @returns {quat2} out
         * @function
         */
        function set(out, x1, y1, z1, w1, x2, y2, z2, w2) {
            out[0] = x1;
            out[1] = y1;
            out[2] = z1;
            out[3] = w1;
            out[4] = x2;
            out[5] = y2;
            out[6] = z2;
            out[7] = w2;
            return out;
        }
        /**
         * Gets the real part of a dual quat
         * @param  {quat} out real part
         * @param  {quat2} a Dual Quaternion
         * @return {quat} real part
         */
        var getReal = _quat_js__WEBPACK_IMPORTED_MODULE_1__["copy"];
        /**
         * Gets the dual part of a dual quat
         * @param  {quat} out dual part
         * @param  {quat2} a Dual Quaternion
         * @return {quat} dual part
         */
        function getDual(out, a) {
            out[0] = a[4];
            out[1] = a[5];
            out[2] = a[6];
            out[3] = a[7];
            return out;
        }
        /**
         * Set the real component of a dual quat to the given quaternion
         *
         * @param {quat2} out the receiving quaternion
         * @param {quat} q a quaternion representing the real part
         * @returns {quat2} out
         * @function
         */
        var setReal = _quat_js__WEBPACK_IMPORTED_MODULE_1__["copy"];
        /**
         * Set the dual component of a dual quat to the given quaternion
         *
         * @param {quat2} out the receiving quaternion
         * @param {quat} q a quaternion representing the dual part
         * @returns {quat2} out
         * @function
         */
        function setDual(out, q) {
            out[4] = q[0];
            out[5] = q[1];
            out[6] = q[2];
            out[7] = q[3];
            return out;
        }
        /**
         * Gets the translation of a normalized dual quat
         * @param  {vec3} out translation
         * @param  {quat2} a Dual Quaternion to be decomposed
         * @return {vec3} translation
         */
        function getTranslation(out, a) {
            var ax = a[4], ay = a[5], az = a[6], aw = a[7], bx = -a[0], by = -a[1], bz = -a[2], bw = a[3];
            out[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
            out[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
            out[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
            return out;
        }
        /**
         * Translates a dual quat by the given vector
         *
         * @param {quat2} out the receiving dual quaternion
         * @param {quat2} a the dual quaternion to translate
         * @param {vec3} v vector to translate by
         * @returns {quat2} out
         */
        function translate(out, a, v) {
            var ax1 = a[0], ay1 = a[1], az1 = a[2], aw1 = a[3], bx1 = v[0] * 0.5, by1 = v[1] * 0.5, bz1 = v[2] * 0.5, ax2 = a[4], ay2 = a[5], az2 = a[6], aw2 = a[7];
            out[0] = ax1;
            out[1] = ay1;
            out[2] = az1;
            out[3] = aw1;
            out[4] = aw1 * bx1 + ay1 * bz1 - az1 * by1 + ax2;
            out[5] = aw1 * by1 + az1 * bx1 - ax1 * bz1 + ay2;
            out[6] = aw1 * bz1 + ax1 * by1 - ay1 * bx1 + az2;
            out[7] = -ax1 * bx1 - ay1 * by1 - az1 * bz1 + aw2;
            return out;
        }
        /**
         * Rotates a dual quat around the X axis
         *
         * @param {quat2} out the receiving dual quaternion
         * @param {quat2} a the dual quaternion to rotate
         * @param {number} rad how far should the rotation be
         * @returns {quat2} out
         */
        function rotateX(out, a, rad) {
            var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7], ax1 = ax * bw + aw * bx + ay * bz - az * by, ay1 = ay * bw + aw * by + az * bx - ax * bz, az1 = az * bw + aw * bz + ax * by - ay * bx, aw1 = aw * bw - ax * bx - ay * by - az * bz;
            _quat_js__WEBPACK_IMPORTED_MODULE_1__["rotateX"](out, a, rad);
            bx = out[0];
            by = out[1];
            bz = out[2];
            bw = out[3];
            out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
            out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
            out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
            out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
            return out;
        }
        /**
         * Rotates a dual quat around the Y axis
         *
         * @param {quat2} out the receiving dual quaternion
         * @param {quat2} a the dual quaternion to rotate
         * @param {number} rad how far should the rotation be
         * @returns {quat2} out
         */
        function rotateY(out, a, rad) {
            var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7], ax1 = ax * bw + aw * bx + ay * bz - az * by, ay1 = ay * bw + aw * by + az * bx - ax * bz, az1 = az * bw + aw * bz + ax * by - ay * bx, aw1 = aw * bw - ax * bx - ay * by - az * bz;
            _quat_js__WEBPACK_IMPORTED_MODULE_1__["rotateY"](out, a, rad);
            bx = out[0];
            by = out[1];
            bz = out[2];
            bw = out[3];
            out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
            out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
            out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
            out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
            return out;
        }
        /**
         * Rotates a dual quat around the Z axis
         *
         * @param {quat2} out the receiving dual quaternion
         * @param {quat2} a the dual quaternion to rotate
         * @param {number} rad how far should the rotation be
         * @returns {quat2} out
         */
        function rotateZ(out, a, rad) {
            var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7], ax1 = ax * bw + aw * bx + ay * bz - az * by, ay1 = ay * bw + aw * by + az * bx - ax * bz, az1 = az * bw + aw * bz + ax * by - ay * bx, aw1 = aw * bw - ax * bx - ay * by - az * bz;
            _quat_js__WEBPACK_IMPORTED_MODULE_1__["rotateZ"](out, a, rad);
            bx = out[0];
            by = out[1];
            bz = out[2];
            bw = out[3];
            out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
            out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
            out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
            out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
            return out;
        }
        /**
         * Rotates a dual quat by a given quaternion (a * q)
         *
         * @param {quat2} out the receiving dual quaternion
         * @param {quat2} a the dual quaternion to rotate
         * @param {quat} q quaternion to rotate by
         * @returns {quat2} out
         */
        function rotateByQuatAppend(out, a, q) {
            var qx = q[0], qy = q[1], qz = q[2], qw = q[3], ax = a[0], ay = a[1], az = a[2], aw = a[3];
            out[0] = ax * qw + aw * qx + ay * qz - az * qy;
            out[1] = ay * qw + aw * qy + az * qx - ax * qz;
            out[2] = az * qw + aw * qz + ax * qy - ay * qx;
            out[3] = aw * qw - ax * qx - ay * qy - az * qz;
            ax = a[4];
            ay = a[5];
            az = a[6];
            aw = a[7];
            out[4] = ax * qw + aw * qx + ay * qz - az * qy;
            out[5] = ay * qw + aw * qy + az * qx - ax * qz;
            out[6] = az * qw + aw * qz + ax * qy - ay * qx;
            out[7] = aw * qw - ax * qx - ay * qy - az * qz;
            return out;
        }
        /**
         * Rotates a dual quat by a given quaternion (q * a)
         *
         * @param {quat2} out the receiving dual quaternion
         * @param {quat} q quaternion to rotate by
         * @param {quat2} a the dual quaternion to rotate
         * @returns {quat2} out
         */
        function rotateByQuatPrepend(out, q, a) {
            var qx = q[0], qy = q[1], qz = q[2], qw = q[3], bx = a[0], by = a[1], bz = a[2], bw = a[3];
            out[0] = qx * bw + qw * bx + qy * bz - qz * by;
            out[1] = qy * bw + qw * by + qz * bx - qx * bz;
            out[2] = qz * bw + qw * bz + qx * by - qy * bx;
            out[3] = qw * bw - qx * bx - qy * by - qz * bz;
            bx = a[4];
            by = a[5];
            bz = a[6];
            bw = a[7];
            out[4] = qx * bw + qw * bx + qy * bz - qz * by;
            out[5] = qy * bw + qw * by + qz * bx - qx * bz;
            out[6] = qz * bw + qw * bz + qx * by - qy * bx;
            out[7] = qw * bw - qx * bx - qy * by - qz * bz;
            return out;
        }
        /**
         * Rotates a dual quat around a given axis. Does the normalisation automatically
         *
         * @param {quat2} out the receiving dual quaternion
         * @param {quat2} a the dual quaternion to rotate
         * @param {vec3} axis the axis to rotate around
         * @param {Number} rad how far the rotation should be
         * @returns {quat2} out
         */
        function rotateAroundAxis(out, a, axis, rad) {
            //Special case for rad = 0
            if (Math.abs(rad) < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
                return copy(out, a);
            }
            var axisLength = Math.sqrt(axis[0] * axis[0] + axis[1] * axis[1] + axis[2] * axis[2]);
            rad = rad * 0.5;
            var s = Math.sin(rad);
            var bx = s * axis[0] / axisLength;
            var by = s * axis[1] / axisLength;
            var bz = s * axis[2] / axisLength;
            var bw = Math.cos(rad);
            var ax1 = a[0], ay1 = a[1], az1 = a[2], aw1 = a[3];
            out[0] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
            out[1] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
            out[2] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
            out[3] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
            var ax = a[4], ay = a[5], az = a[6], aw = a[7];
            out[4] = ax * bw + aw * bx + ay * bz - az * by;
            out[5] = ay * bw + aw * by + az * bx - ax * bz;
            out[6] = az * bw + aw * bz + ax * by - ay * bx;
            out[7] = aw * bw - ax * bx - ay * by - az * bz;
            return out;
        }
        /**
         * Adds two dual quat's
         *
         * @param {quat2} out the receiving dual quaternion
         * @param {quat2} a the first operand
         * @param {quat2} b the second operand
         * @returns {quat2} out
         * @function
         */
        function add(out, a, b) {
            out[0] = a[0] + b[0];
            out[1] = a[1] + b[1];
            out[2] = a[2] + b[2];
            out[3] = a[3] + b[3];
            out[4] = a[4] + b[4];
            out[5] = a[5] + b[5];
            out[6] = a[6] + b[6];
            out[7] = a[7] + b[7];
            return out;
        }
        /**
         * Multiplies two dual quat's
         *
         * @param {quat2} out the receiving dual quaternion
         * @param {quat2} a the first operand
         * @param {quat2} b the second operand
         * @returns {quat2} out
         */
        function multiply(out, a, b) {
            var ax0 = a[0], ay0 = a[1], az0 = a[2], aw0 = a[3], bx1 = b[4], by1 = b[5], bz1 = b[6], bw1 = b[7], ax1 = a[4], ay1 = a[5], az1 = a[6], aw1 = a[7], bx0 = b[0], by0 = b[1], bz0 = b[2], bw0 = b[3];
            out[0] = ax0 * bw0 + aw0 * bx0 + ay0 * bz0 - az0 * by0;
            out[1] = ay0 * bw0 + aw0 * by0 + az0 * bx0 - ax0 * bz0;
            out[2] = az0 * bw0 + aw0 * bz0 + ax0 * by0 - ay0 * bx0;
            out[3] = aw0 * bw0 - ax0 * bx0 - ay0 * by0 - az0 * bz0;
            out[4] = ax0 * bw1 + aw0 * bx1 + ay0 * bz1 - az0 * by1 + ax1 * bw0 + aw1 * bx0 + ay1 * bz0 - az1 * by0;
            out[5] = ay0 * bw1 + aw0 * by1 + az0 * bx1 - ax0 * bz1 + ay1 * bw0 + aw1 * by0 + az1 * bx0 - ax1 * bz0;
            out[6] = az0 * bw1 + aw0 * bz1 + ax0 * by1 - ay0 * bx1 + az1 * bw0 + aw1 * bz0 + ax1 * by0 - ay1 * bx0;
            out[7] = aw0 * bw1 - ax0 * bx1 - ay0 * by1 - az0 * bz1 + aw1 * bw0 - ax1 * bx0 - ay1 * by0 - az1 * bz0;
            return out;
        }
        /**
         * Alias for {@link quat2.multiply}
         * @function
         */
        var mul = multiply;
        /**
         * Scales a dual quat by a scalar number
         *
         * @param {quat2} out the receiving dual quat
         * @param {quat2} a the dual quat to scale
         * @param {Number} b amount to scale the dual quat by
         * @returns {quat2} out
         * @function
         */
        function scale(out, a, b) {
            out[0] = a[0] * b;
            out[1] = a[1] * b;
            out[2] = a[2] * b;
            out[3] = a[3] * b;
            out[4] = a[4] * b;
            out[5] = a[5] * b;
            out[6] = a[6] * b;
            out[7] = a[7] * b;
            return out;
        }
        /**
         * Calculates the dot product of two dual quat's (The dot product of the real parts)
         *
         * @param {quat2} a the first operand
         * @param {quat2} b the second operand
         * @returns {Number} dot product of a and b
         * @function
         */
        var dot = _quat_js__WEBPACK_IMPORTED_MODULE_1__["dot"];
        /**
         * Performs a linear interpolation between two dual quats's
         * NOTE: The resulting dual quaternions won't always be normalized (The error is most noticeable when t = 0.5)
         *
         * @param {quat2} out the receiving dual quat
         * @param {quat2} a the first operand
         * @param {quat2} b the second operand
         * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
         * @returns {quat2} out
         */
        function lerp(out, a, b, t) {
            var mt = 1 - t;
            if (dot(a, b) < 0)
                t = -t;
            out[0] = a[0] * mt + b[0] * t;
            out[1] = a[1] * mt + b[1] * t;
            out[2] = a[2] * mt + b[2] * t;
            out[3] = a[3] * mt + b[3] * t;
            out[4] = a[4] * mt + b[4] * t;
            out[5] = a[5] * mt + b[5] * t;
            out[6] = a[6] * mt + b[6] * t;
            out[7] = a[7] * mt + b[7] * t;
            return out;
        }
        /**
         * Calculates the inverse of a dual quat. If they are normalized, conjugate is cheaper
         *
         * @param {quat2} out the receiving dual quaternion
         * @param {quat2} a dual quat to calculate inverse of
         * @returns {quat2} out
         */
        function invert(out, a) {
            var sqlen = squaredLength(a);
            out[0] = -a[0] / sqlen;
            out[1] = -a[1] / sqlen;
            out[2] = -a[2] / sqlen;
            out[3] = a[3] / sqlen;
            out[4] = -a[4] / sqlen;
            out[5] = -a[5] / sqlen;
            out[6] = -a[6] / sqlen;
            out[7] = a[7] / sqlen;
            return out;
        }
        /**
         * Calculates the conjugate of a dual quat
         * If the dual quaternion is normalized, this function is faster than quat2.inverse and produces the same result.
         *
         * @param {quat2} out the receiving quaternion
         * @param {quat2} a quat to calculate conjugate of
         * @returns {quat2} out
         */
        function conjugate(out, a) {
            out[0] = -a[0];
            out[1] = -a[1];
            out[2] = -a[2];
            out[3] = a[3];
            out[4] = -a[4];
            out[5] = -a[5];
            out[6] = -a[6];
            out[7] = a[7];
            return out;
        }
        /**
         * Calculates the length of a dual quat
         *
         * @param {quat2} a dual quat to calculate length of
         * @returns {Number} length of a
         * @function
         */
        var length = _quat_js__WEBPACK_IMPORTED_MODULE_1__["length"];
        /**
         * Alias for {@link quat2.length}
         * @function
         */
        var len = length;
        /**
         * Calculates the squared length of a dual quat
         *
         * @param {quat2} a dual quat to calculate squared length of
         * @returns {Number} squared length of a
         * @function
         */
        var squaredLength = _quat_js__WEBPACK_IMPORTED_MODULE_1__["squaredLength"];
        /**
         * Alias for {@link quat2.squaredLength}
         * @function
         */
        var sqrLen = squaredLength;
        /**
         * Normalize a dual quat
         *
         * @param {quat2} out the receiving dual quaternion
         * @param {quat2} a dual quaternion to normalize
         * @returns {quat2} out
         * @function
         */
        function normalize(out, a) {
            var magnitude = squaredLength(a);
            if (magnitude > 0) {
                magnitude = Math.sqrt(magnitude);
                var a0 = a[0] / magnitude;
                var a1 = a[1] / magnitude;
                var a2 = a[2] / magnitude;
                var a3 = a[3] / magnitude;
                var b0 = a[4];
                var b1 = a[5];
                var b2 = a[6];
                var b3 = a[7];
                var a_dot_b = a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3;
                out[0] = a0;
                out[1] = a1;
                out[2] = a2;
                out[3] = a3;
                out[4] = (b0 - a0 * a_dot_b) / magnitude;
                out[5] = (b1 - a1 * a_dot_b) / magnitude;
                out[6] = (b2 - a2 * a_dot_b) / magnitude;
                out[7] = (b3 - a3 * a_dot_b) / magnitude;
            }
            return out;
        }
        /**
         * Returns a string representation of a dual quatenion
         *
         * @param {quat2} a dual quaternion to represent as a string
         * @returns {String} string representation of the dual quat
         */
        function str(a) {
            return 'quat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ')';
        }
        /**
         * Returns whether or not the dual quaternions have exactly the same elements in the same position (when compared with ===)
         *
         * @param {quat2} a the first dual quaternion.
         * @param {quat2} b the second dual quaternion.
         * @returns {Boolean} true if the dual quaternions are equal, false otherwise.
         */
        function exactEquals(a, b) {
            return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7];
        }
        /**
         * Returns whether or not the dual quaternions have approximately the same elements in the same position.
         *
         * @param {quat2} a the first dual quat.
         * @param {quat2} b the second dual quat.
         * @returns {Boolean} true if the dual quats are equal, false otherwise.
         */
        function equals(a, b) {
            var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7];
            var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7];
            return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a7), Math.abs(b7));
        }
        /***/ 
    }),
    /***/ "./node_modules/gl-matrix/esm/vec2.js": 
    /*!********************************************!*\
      !*** ./node_modules/gl-matrix/esm/vec2.js ***!
      \********************************************/
    /*! exports provided: create, clone, fromValues, copy, set, add, subtract, multiply, divide, ceil, floor, min, max, round, scale, scaleAndAdd, distance, squaredDistance, length, squaredLength, negate, inverse, normalize, dot, cross, lerp, random, transformMat2, transformMat2d, transformMat3, transformMat4, rotate, angle, zero, str, exactEquals, equals, len, sub, mul, div, dist, sqrDist, sqrLen, forEach */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function () { return create; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function () { return clone; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function () { return fromValues; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function () { return copy; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function () { return set; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function () { return add; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function () { return subtract; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function () { return multiply; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function () { return divide; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function () { return ceil; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function () { return floor; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function () { return min; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function () { return max; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function () { return round; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function () { return scale; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAndAdd", function () { return scaleAndAdd; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function () { return distance; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDistance", function () { return squaredDistance; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function () { return length; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function () { return squaredLength; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function () { return negate; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function () { return inverse; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function () { return normalize; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function () { return dot; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cross", function () { return cross; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function () { return lerp; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function () { return random; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat2", function () { return transformMat2; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat2d", function () { return transformMat2d; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat3", function () { return transformMat3; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat4", function () { return transformMat4; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function () { return rotate; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angle", function () { return angle; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zero", function () { return zero; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function () { return str; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function () { return exactEquals; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function () { return equals; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function () { return len; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function () { return sub; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function () { return mul; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function () { return div; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function () { return dist; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function () { return sqrDist; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function () { return sqrLen; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function () { return forEach; });
        /* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");
        /**
         * 2 Dimensional Vector
         * @module vec2
         */
        /**
         * Creates a new, empty vec2
         *
         * @returns {vec2} a new 2D vector
         */
        function create() {
            var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](2);
            if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
                out[0] = 0;
                out[1] = 0;
            }
            return out;
        }
        /**
         * Creates a new vec2 initialized with values from an existing vector
         *
         * @param {vec2} a vector to clone
         * @returns {vec2} a new 2D vector
         */
        function clone(a) {
            var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](2);
            out[0] = a[0];
            out[1] = a[1];
            return out;
        }
        /**
         * Creates a new vec2 initialized with the given values
         *
         * @param {Number} x X component
         * @param {Number} y Y component
         * @returns {vec2} a new 2D vector
         */
        function fromValues(x, y) {
            var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](2);
            out[0] = x;
            out[1] = y;
            return out;
        }
        /**
         * Copy the values from one vec2 to another
         *
         * @param {vec2} out the receiving vector
         * @param {vec2} a the source vector
         * @returns {vec2} out
         */
        function copy(out, a) {
            out[0] = a[0];
            out[1] = a[1];
            return out;
        }
        /**
         * Set the components of a vec2 to the given values
         *
         * @param {vec2} out the receiving vector
         * @param {Number} x X component
         * @param {Number} y Y component
         * @returns {vec2} out
         */
        function set(out, x, y) {
            out[0] = x;
            out[1] = y;
            return out;
        }
        /**
         * Adds two vec2's
         *
         * @param {vec2} out the receiving vector
         * @param {vec2} a the first operand
         * @param {vec2} b the second operand
         * @returns {vec2} out
         */
        function add(out, a, b) {
            out[0] = a[0] + b[0];
            out[1] = a[1] + b[1];
            return out;
        }
        /**
         * Subtracts vector b from vector a
         *
         * @param {vec2} out the receiving vector
         * @param {vec2} a the first operand
         * @param {vec2} b the second operand
         * @returns {vec2} out
         */
        function subtract(out, a, b) {
            out[0] = a[0] - b[0];
            out[1] = a[1] - b[1];
            return out;
        }
        /**
         * Multiplies two vec2's
         *
         * @param {vec2} out the receiving vector
         * @param {vec2} a the first operand
         * @param {vec2} b the second operand
         * @returns {vec2} out
         */
        function multiply(out, a, b) {
            out[0] = a[0] * b[0];
            out[1] = a[1] * b[1];
            return out;
        }
        /**
         * Divides two vec2's
         *
         * @param {vec2} out the receiving vector
         * @param {vec2} a the first operand
         * @param {vec2} b the second operand
         * @returns {vec2} out
         */
        function divide(out, a, b) {
            out[0] = a[0] / b[0];
            out[1] = a[1] / b[1];
            return out;
        }
        /**
         * Math.ceil the components of a vec2
         *
         * @param {vec2} out the receiving vector
         * @param {vec2} a vector to ceil
         * @returns {vec2} out
         */
        function ceil(out, a) {
            out[0] = Math.ceil(a[0]);
            out[1] = Math.ceil(a[1]);
            return out;
        }
        /**
         * Math.floor the components of a vec2
         *
         * @param {vec2} out the receiving vector
         * @param {vec2} a vector to floor
         * @returns {vec2} out
         */
        function floor(out, a) {
            out[0] = Math.floor(a[0]);
            out[1] = Math.floor(a[1]);
            return out;
        }
        /**
         * Returns the minimum of two vec2's
         *
         * @param {vec2} out the receiving vector
         * @param {vec2} a the first operand
         * @param {vec2} b the second operand
         * @returns {vec2} out
         */
        function min(out, a, b) {
            out[0] = Math.min(a[0], b[0]);
            out[1] = Math.min(a[1], b[1]);
            return out;
        }
        /**
         * Returns the maximum of two vec2's
         *
         * @param {vec2} out the receiving vector
         * @param {vec2} a the first operand
         * @param {vec2} b the second operand
         * @returns {vec2} out
         */
        function max(out, a, b) {
            out[0] = Math.max(a[0], b[0]);
            out[1] = Math.max(a[1], b[1]);
            return out;
        }
        /**
         * Math.round the components of a vec2
         *
         * @param {vec2} out the receiving vector
         * @param {vec2} a vector to round
         * @returns {vec2} out
         */
        function round(out, a) {
            out[0] = Math.round(a[0]);
            out[1] = Math.round(a[1]);
            return out;
        }
        /**
         * Scales a vec2 by a scalar number
         *
         * @param {vec2} out the receiving vector
         * @param {vec2} a the vector to scale
         * @param {Number} b amount to scale the vector by
         * @returns {vec2} out
         */
        function scale(out, a, b) {
            out[0] = a[0] * b;
            out[1] = a[1] * b;
            return out;
        }
        /**
         * Adds two vec2's after scaling the second operand by a scalar value
         *
         * @param {vec2} out the receiving vector
         * @param {vec2} a the first operand
         * @param {vec2} b the second operand
         * @param {Number} scale the amount to scale b by before adding
         * @returns {vec2} out
         */
        function scaleAndAdd(out, a, b, scale) {
            out[0] = a[0] + b[0] * scale;
            out[1] = a[1] + b[1] * scale;
            return out;
        }
        /**
         * Calculates the euclidian distance between two vec2's
         *
         * @param {vec2} a the first operand
         * @param {vec2} b the second operand
         * @returns {Number} distance between a and b
         */
        function distance(a, b) {
            var x = b[0] - a[0], y = b[1] - a[1];
            return Math.sqrt(x * x + y * y);
        }
        /**
         * Calculates the squared euclidian distance between two vec2's
         *
         * @param {vec2} a the first operand
         * @param {vec2} b the second operand
         * @returns {Number} squared distance between a and b
         */
        function squaredDistance(a, b) {
            var x = b[0] - a[0], y = b[1] - a[1];
            return x * x + y * y;
        }
        /**
         * Calculates the length of a vec2
         *
         * @param {vec2} a vector to calculate length of
         * @returns {Number} length of a
         */
        function length(a) {
            var x = a[0], y = a[1];
            return Math.sqrt(x * x + y * y);
        }
        /**
         * Calculates the squared length of a vec2
         *
         * @param {vec2} a vector to calculate squared length of
         * @returns {Number} squared length of a
         */
        function squaredLength(a) {
            var x = a[0], y = a[1];
            return x * x + y * y;
        }
        /**
         * Negates the components of a vec2
         *
         * @param {vec2} out the receiving vector
         * @param {vec2} a vector to negate
         * @returns {vec2} out
         */
        function negate(out, a) {
            out[0] = -a[0];
            out[1] = -a[1];
            return out;
        }
        /**
         * Returns the inverse of the components of a vec2
         *
         * @param {vec2} out the receiving vector
         * @param {vec2} a vector to invert
         * @returns {vec2} out
         */
        function inverse(out, a) {
            out[0] = 1.0 / a[0];
            out[1] = 1.0 / a[1];
            return out;
        }
        /**
         * Normalize a vec2
         *
         * @param {vec2} out the receiving vector
         * @param {vec2} a vector to normalize
         * @returns {vec2} out
         */
        function normalize(out, a) {
            var x = a[0], y = a[1];
            var len = x * x + y * y;
            if (len > 0) {
                //TODO: evaluate use of glm_invsqrt here?
                len = 1 / Math.sqrt(len);
            }
            out[0] = a[0] * len;
            out[1] = a[1] * len;
            return out;
        }
        /**
         * Calculates the dot product of two vec2's
         *
         * @param {vec2} a the first operand
         * @param {vec2} b the second operand
         * @returns {Number} dot product of a and b
         */
        function dot(a, b) {
            return a[0] * b[0] + a[1] * b[1];
        }
        /**
         * Computes the cross product of two vec2's
         * Note that the cross product must by definition produce a 3D vector
         *
         * @param {vec3} out the receiving vector
         * @param {vec2} a the first operand
         * @param {vec2} b the second operand
         * @returns {vec3} out
         */
        function cross(out, a, b) {
            var z = a[0] * b[1] - a[1] * b[0];
            out[0] = out[1] = 0;
            out[2] = z;
            return out;
        }
        /**
         * Performs a linear interpolation between two vec2's
         *
         * @param {vec2} out the receiving vector
         * @param {vec2} a the first operand
         * @param {vec2} b the second operand
         * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
         * @returns {vec2} out
         */
        function lerp(out, a, b, t) {
            var ax = a[0], ay = a[1];
            out[0] = ax + t * (b[0] - ax);
            out[1] = ay + t * (b[1] - ay);
            return out;
        }
        /**
         * Generates a random vector with the given scale
         *
         * @param {vec2} out the receiving vector
         * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
         * @returns {vec2} out
         */
        function random(out, scale) {
            scale = scale || 1.0;
            var r = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2.0 * Math.PI;
            out[0] = Math.cos(r) * scale;
            out[1] = Math.sin(r) * scale;
            return out;
        }
        /**
         * Transforms the vec2 with a mat2
         *
         * @param {vec2} out the receiving vector
         * @param {vec2} a the vector to transform
         * @param {mat2} m matrix to transform with
         * @returns {vec2} out
         */
        function transformMat2(out, a, m) {
            var x = a[0], y = a[1];
            out[0] = m[0] * x + m[2] * y;
            out[1] = m[1] * x + m[3] * y;
            return out;
        }
        /**
         * Transforms the vec2 with a mat2d
         *
         * @param {vec2} out the receiving vector
         * @param {vec2} a the vector to transform
         * @param {mat2d} m matrix to transform with
         * @returns {vec2} out
         */
        function transformMat2d(out, a, m) {
            var x = a[0], y = a[1];
            out[0] = m[0] * x + m[2] * y + m[4];
            out[1] = m[1] * x + m[3] * y + m[5];
            return out;
        }
        /**
         * Transforms the vec2 with a mat3
         * 3rd vector component is implicitly '1'
         *
         * @param {vec2} out the receiving vector
         * @param {vec2} a the vector to transform
         * @param {mat3} m matrix to transform with
         * @returns {vec2} out
         */
        function transformMat3(out, a, m) {
            var x = a[0], y = a[1];
            out[0] = m[0] * x + m[3] * y + m[6];
            out[1] = m[1] * x + m[4] * y + m[7];
            return out;
        }
        /**
         * Transforms the vec2 with a mat4
         * 3rd vector component is implicitly '0'
         * 4th vector component is implicitly '1'
         *
         * @param {vec2} out the receiving vector
         * @param {vec2} a the vector to transform
         * @param {mat4} m matrix to transform with
         * @returns {vec2} out
         */
        function transformMat4(out, a, m) {
            var x = a[0];
            var y = a[1];
            out[0] = m[0] * x + m[4] * y + m[12];
            out[1] = m[1] * x + m[5] * y + m[13];
            return out;
        }
        /**
         * Rotate a 2D vector
         * @param {vec2} out The receiving vec2
         * @param {vec2} a The vec2 point to rotate
         * @param {vec2} b The origin of the rotation
         * @param {Number} c The angle of rotation
         * @returns {vec2} out
         */
        function rotate(out, a, b, c) {
            //Translate point to the origin
            var p0 = a[0] - b[0], p1 = a[1] - b[1], sinC = Math.sin(c), cosC = Math.cos(c); //perform rotation and translate to correct position
            out[0] = p0 * cosC - p1 * sinC + b[0];
            out[1] = p0 * sinC + p1 * cosC + b[1];
            return out;
        }
        /**
         * Get the angle between two 2D vectors
         * @param {vec2} a The first operand
         * @param {vec2} b The second operand
         * @returns {Number} The angle in radians
         */
        function angle(a, b) {
            var x1 = a[0], y1 = a[1], x2 = b[0], y2 = b[1];
            var len1 = x1 * x1 + y1 * y1;
            if (len1 > 0) {
                //TODO: evaluate use of glm_invsqrt here?
                len1 = 1 / Math.sqrt(len1);
            }
            var len2 = x2 * x2 + y2 * y2;
            if (len2 > 0) {
                //TODO: evaluate use of glm_invsqrt here?
                len2 = 1 / Math.sqrt(len2);
            }
            var cosine = (x1 * x2 + y1 * y2) * len1 * len2;
            if (cosine > 1.0) {
                return 0;
            }
            else if (cosine < -1.0) {
                return Math.PI;
            }
            else {
                return Math.acos(cosine);
            }
        }
        /**
         * Set the components of a vec2 to zero
         *
         * @param {vec2} out the receiving vector
         * @returns {vec2} out
         */
        function zero(out) {
            out[0] = 0.0;
            out[1] = 0.0;
            return out;
        }
        /**
         * Returns a string representation of a vector
         *
         * @param {vec2} a vector to represent as a string
         * @returns {String} string representation of the vector
         */
        function str(a) {
            return 'vec2(' + a[0] + ', ' + a[1] + ')';
        }
        /**
         * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
         *
         * @param {vec2} a The first vector.
         * @param {vec2} b The second vector.
         * @returns {Boolean} True if the vectors are equal, false otherwise.
         */
        function exactEquals(a, b) {
            return a[0] === b[0] && a[1] === b[1];
        }
        /**
         * Returns whether or not the vectors have approximately the same elements in the same position.
         *
         * @param {vec2} a The first vector.
         * @param {vec2} b The second vector.
         * @returns {Boolean} True if the vectors are equal, false otherwise.
         */
        function equals(a, b) {
            var a0 = a[0], a1 = a[1];
            var b0 = b[0], b1 = b[1];
            return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1));
        }
        /**
         * Alias for {@link vec2.length}
         * @function
         */
        var len = length;
        /**
         * Alias for {@link vec2.subtract}
         * @function
         */
        var sub = subtract;
        /**
         * Alias for {@link vec2.multiply}
         * @function
         */
        var mul = multiply;
        /**
         * Alias for {@link vec2.divide}
         * @function
         */
        var div = divide;
        /**
         * Alias for {@link vec2.distance}
         * @function
         */
        var dist = distance;
        /**
         * Alias for {@link vec2.squaredDistance}
         * @function
         */
        var sqrDist = squaredDistance;
        /**
         * Alias for {@link vec2.squaredLength}
         * @function
         */
        var sqrLen = squaredLength;
        /**
         * Perform some operation over an array of vec2s.
         *
         * @param {Array} a the array of vectors to iterate over
         * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
         * @param {Number} offset Number of elements to skip at the beginning of the array
         * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
         * @param {Function} fn Function to call for each vector in the array
         * @param {Object} [arg] additional argument to pass to fn
         * @returns {Array} a
         * @function
         */
        var forEach = function () {
            var vec = create();
            return function (a, stride, offset, count, fn, arg) {
                var i, l;
                if (!stride) {
                    stride = 2;
                }
                if (!offset) {
                    offset = 0;
                }
                if (count) {
                    l = Math.min(count * stride + offset, a.length);
                }
                else {
                    l = a.length;
                }
                for (i = offset; i < l; i += stride) {
                    vec[0] = a[i];
                    vec[1] = a[i + 1];
                    fn(vec, vec, arg);
                    a[i] = vec[0];
                    a[i + 1] = vec[1];
                }
                return a;
            };
        }();
        /***/ 
    }),
    /***/ "./node_modules/gl-matrix/esm/vec3.js": 
    /*!********************************************!*\
      !*** ./node_modules/gl-matrix/esm/vec3.js ***!
      \********************************************/
    /*! exports provided: create, clone, length, fromValues, copy, set, add, subtract, multiply, divide, ceil, floor, min, max, round, scale, scaleAndAdd, distance, squaredDistance, squaredLength, negate, inverse, normalize, dot, cross, lerp, hermite, bezier, random, transformMat4, transformMat3, transformQuat, rotateX, rotateY, rotateZ, angle, zero, str, exactEquals, equals, sub, mul, div, dist, sqrDist, len, sqrLen, forEach */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function () { return create; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function () { return clone; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function () { return length; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function () { return fromValues; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function () { return copy; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function () { return set; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function () { return add; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function () { return subtract; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function () { return multiply; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function () { return divide; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function () { return ceil; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function () { return floor; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function () { return min; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function () { return max; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function () { return round; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function () { return scale; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAndAdd", function () { return scaleAndAdd; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function () { return distance; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDistance", function () { return squaredDistance; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function () { return squaredLength; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function () { return negate; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function () { return inverse; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function () { return normalize; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function () { return dot; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cross", function () { return cross; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function () { return lerp; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hermite", function () { return hermite; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bezier", function () { return bezier; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function () { return random; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat4", function () { return transformMat4; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat3", function () { return transformMat3; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformQuat", function () { return transformQuat; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function () { return rotateX; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function () { return rotateY; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function () { return rotateZ; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angle", function () { return angle; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zero", function () { return zero; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function () { return str; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function () { return exactEquals; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function () { return equals; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function () { return sub; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function () { return mul; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function () { return div; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function () { return dist; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function () { return sqrDist; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function () { return len; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function () { return sqrLen; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function () { return forEach; });
        /* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");
        /**
         * 3 Dimensional Vector
         * @module vec3
         */
        /**
         * Creates a new, empty vec3
         *
         * @returns {vec3} a new 3D vector
         */
        function create() {
            var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
            if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
                out[0] = 0;
                out[1] = 0;
                out[2] = 0;
            }
            return out;
        }
        /**
         * Creates a new vec3 initialized with values from an existing vector
         *
         * @param {vec3} a vector to clone
         * @returns {vec3} a new 3D vector
         */
        function clone(a) {
            var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
            out[0] = a[0];
            out[1] = a[1];
            out[2] = a[2];
            return out;
        }
        /**
         * Calculates the length of a vec3
         *
         * @param {vec3} a vector to calculate length of
         * @returns {Number} length of a
         */
        function length(a) {
            var x = a[0];
            var y = a[1];
            var z = a[2];
            return Math.sqrt(x * x + y * y + z * z);
        }
        /**
         * Creates a new vec3 initialized with the given values
         *
         * @param {Number} x X component
         * @param {Number} y Y component
         * @param {Number} z Z component
         * @returns {vec3} a new 3D vector
         */
        function fromValues(x, y, z) {
            var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
            out[0] = x;
            out[1] = y;
            out[2] = z;
            return out;
        }
        /**
         * Copy the values from one vec3 to another
         *
         * @param {vec3} out the receiving vector
         * @param {vec3} a the source vector
         * @returns {vec3} out
         */
        function copy(out, a) {
            out[0] = a[0];
            out[1] = a[1];
            out[2] = a[2];
            return out;
        }
        /**
         * Set the components of a vec3 to the given values
         *
         * @param {vec3} out the receiving vector
         * @param {Number} x X component
         * @param {Number} y Y component
         * @param {Number} z Z component
         * @returns {vec3} out
         */
        function set(out, x, y, z) {
            out[0] = x;
            out[1] = y;
            out[2] = z;
            return out;
        }
        /**
         * Adds two vec3's
         *
         * @param {vec3} out the receiving vector
         * @param {vec3} a the first operand
         * @param {vec3} b the second operand
         * @returns {vec3} out
         */
        function add(out, a, b) {
            out[0] = a[0] + b[0];
            out[1] = a[1] + b[1];
            out[2] = a[2] + b[2];
            return out;
        }
        /**
         * Subtracts vector b from vector a
         *
         * @param {vec3} out the receiving vector
         * @param {vec3} a the first operand
         * @param {vec3} b the second operand
         * @returns {vec3} out
         */
        function subtract(out, a, b) {
            out[0] = a[0] - b[0];
            out[1] = a[1] - b[1];
            out[2] = a[2] - b[2];
            return out;
        }
        /**
         * Multiplies two vec3's
         *
         * @param {vec3} out the receiving vector
         * @param {vec3} a the first operand
         * @param {vec3} b the second operand
         * @returns {vec3} out
         */
        function multiply(out, a, b) {
            out[0] = a[0] * b[0];
            out[1] = a[1] * b[1];
            out[2] = a[2] * b[2];
            return out;
        }
        /**
         * Divides two vec3's
         *
         * @param {vec3} out the receiving vector
         * @param {vec3} a the first operand
         * @param {vec3} b the second operand
         * @returns {vec3} out
         */
        function divide(out, a, b) {
            out[0] = a[0] / b[0];
            out[1] = a[1] / b[1];
            out[2] = a[2] / b[2];
            return out;
        }
        /**
         * Math.ceil the components of a vec3
         *
         * @param {vec3} out the receiving vector
         * @param {vec3} a vector to ceil
         * @returns {vec3} out
         */
        function ceil(out, a) {
            out[0] = Math.ceil(a[0]);
            out[1] = Math.ceil(a[1]);
            out[2] = Math.ceil(a[2]);
            return out;
        }
        /**
         * Math.floor the components of a vec3
         *
         * @param {vec3} out the receiving vector
         * @param {vec3} a vector to floor
         * @returns {vec3} out
         */
        function floor(out, a) {
            out[0] = Math.floor(a[0]);
            out[1] = Math.floor(a[1]);
            out[2] = Math.floor(a[2]);
            return out;
        }
        /**
         * Returns the minimum of two vec3's
         *
         * @param {vec3} out the receiving vector
         * @param {vec3} a the first operand
         * @param {vec3} b the second operand
         * @returns {vec3} out
         */
        function min(out, a, b) {
            out[0] = Math.min(a[0], b[0]);
            out[1] = Math.min(a[1], b[1]);
            out[2] = Math.min(a[2], b[2]);
            return out;
        }
        /**
         * Returns the maximum of two vec3's
         *
         * @param {vec3} out the receiving vector
         * @param {vec3} a the first operand
         * @param {vec3} b the second operand
         * @returns {vec3} out
         */
        function max(out, a, b) {
            out[0] = Math.max(a[0], b[0]);
            out[1] = Math.max(a[1], b[1]);
            out[2] = Math.max(a[2], b[2]);
            return out;
        }
        /**
         * Math.round the components of a vec3
         *
         * @param {vec3} out the receiving vector
         * @param {vec3} a vector to round
         * @returns {vec3} out
         */
        function round(out, a) {
            out[0] = Math.round(a[0]);
            out[1] = Math.round(a[1]);
            out[2] = Math.round(a[2]);
            return out;
        }
        /**
         * Scales a vec3 by a scalar number
         *
         * @param {vec3} out the receiving vector
         * @param {vec3} a the vector to scale
         * @param {Number} b amount to scale the vector by
         * @returns {vec3} out
         */
        function scale(out, a, b) {
            out[0] = a[0] * b;
            out[1] = a[1] * b;
            out[2] = a[2] * b;
            return out;
        }
        /**
         * Adds two vec3's after scaling the second operand by a scalar value
         *
         * @param {vec3} out the receiving vector
         * @param {vec3} a the first operand
         * @param {vec3} b the second operand
         * @param {Number} scale the amount to scale b by before adding
         * @returns {vec3} out
         */
        function scaleAndAdd(out, a, b, scale) {
            out[0] = a[0] + b[0] * scale;
            out[1] = a[1] + b[1] * scale;
            out[2] = a[2] + b[2] * scale;
            return out;
        }
        /**
         * Calculates the euclidian distance between two vec3's
         *
         * @param {vec3} a the first operand
         * @param {vec3} b the second operand
         * @returns {Number} distance between a and b
         */
        function distance(a, b) {
            var x = b[0] - a[0];
            var y = b[1] - a[1];
            var z = b[2] - a[2];
            return Math.sqrt(x * x + y * y + z * z);
        }
        /**
         * Calculates the squared euclidian distance between two vec3's
         *
         * @param {vec3} a the first operand
         * @param {vec3} b the second operand
         * @returns {Number} squared distance between a and b
         */
        function squaredDistance(a, b) {
            var x = b[0] - a[0];
            var y = b[1] - a[1];
            var z = b[2] - a[2];
            return x * x + y * y + z * z;
        }
        /**
         * Calculates the squared length of a vec3
         *
         * @param {vec3} a vector to calculate squared length of
         * @returns {Number} squared length of a
         */
        function squaredLength(a) {
            var x = a[0];
            var y = a[1];
            var z = a[2];
            return x * x + y * y + z * z;
        }
        /**
         * Negates the components of a vec3
         *
         * @param {vec3} out the receiving vector
         * @param {vec3} a vector to negate
         * @returns {vec3} out
         */
        function negate(out, a) {
            out[0] = -a[0];
            out[1] = -a[1];
            out[2] = -a[2];
            return out;
        }
        /**
         * Returns the inverse of the components of a vec3
         *
         * @param {vec3} out the receiving vector
         * @param {vec3} a vector to invert
         * @returns {vec3} out
         */
        function inverse(out, a) {
            out[0] = 1.0 / a[0];
            out[1] = 1.0 / a[1];
            out[2] = 1.0 / a[2];
            return out;
        }
        /**
         * Normalize a vec3
         *
         * @param {vec3} out the receiving vector
         * @param {vec3} a vector to normalize
         * @returns {vec3} out
         */
        function normalize(out, a) {
            var x = a[0];
            var y = a[1];
            var z = a[2];
            var len = x * x + y * y + z * z;
            if (len > 0) {
                //TODO: evaluate use of glm_invsqrt here?
                len = 1 / Math.sqrt(len);
            }
            out[0] = a[0] * len;
            out[1] = a[1] * len;
            out[2] = a[2] * len;
            return out;
        }
        /**
         * Calculates the dot product of two vec3's
         *
         * @param {vec3} a the first operand
         * @param {vec3} b the second operand
         * @returns {Number} dot product of a and b
         */
        function dot(a, b) {
            return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
        }
        /**
         * Computes the cross product of two vec3's
         *
         * @param {vec3} out the receiving vector
         * @param {vec3} a the first operand
         * @param {vec3} b the second operand
         * @returns {vec3} out
         */
        function cross(out, a, b) {
            var ax = a[0], ay = a[1], az = a[2];
            var bx = b[0], by = b[1], bz = b[2];
            out[0] = ay * bz - az * by;
            out[1] = az * bx - ax * bz;
            out[2] = ax * by - ay * bx;
            return out;
        }
        /**
         * Performs a linear interpolation between two vec3's
         *
         * @param {vec3} out the receiving vector
         * @param {vec3} a the first operand
         * @param {vec3} b the second operand
         * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
         * @returns {vec3} out
         */
        function lerp(out, a, b, t) {
            var ax = a[0];
            var ay = a[1];
            var az = a[2];
            out[0] = ax + t * (b[0] - ax);
            out[1] = ay + t * (b[1] - ay);
            out[2] = az + t * (b[2] - az);
            return out;
        }
        /**
         * Performs a hermite interpolation with two control points
         *
         * @param {vec3} out the receiving vector
         * @param {vec3} a the first operand
         * @param {vec3} b the second operand
         * @param {vec3} c the third operand
         * @param {vec3} d the fourth operand
         * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
         * @returns {vec3} out
         */
        function hermite(out, a, b, c, d, t) {
            var factorTimes2 = t * t;
            var factor1 = factorTimes2 * (2 * t - 3) + 1;
            var factor2 = factorTimes2 * (t - 2) + t;
            var factor3 = factorTimes2 * (t - 1);
            var factor4 = factorTimes2 * (3 - 2 * t);
            out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
            out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
            out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
            return out;
        }
        /**
         * Performs a bezier interpolation with two control points
         *
         * @param {vec3} out the receiving vector
         * @param {vec3} a the first operand
         * @param {vec3} b the second operand
         * @param {vec3} c the third operand
         * @param {vec3} d the fourth operand
         * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
         * @returns {vec3} out
         */
        function bezier(out, a, b, c, d, t) {
            var inverseFactor = 1 - t;
            var inverseFactorTimesTwo = inverseFactor * inverseFactor;
            var factorTimes2 = t * t;
            var factor1 = inverseFactorTimesTwo * inverseFactor;
            var factor2 = 3 * t * inverseFactorTimesTwo;
            var factor3 = 3 * factorTimes2 * inverseFactor;
            var factor4 = factorTimes2 * t;
            out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
            out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
            out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
            return out;
        }
        /**
         * Generates a random vector with the given scale
         *
         * @param {vec3} out the receiving vector
         * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
         * @returns {vec3} out
         */
        function random(out, scale) {
            scale = scale || 1.0;
            var r = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2.0 * Math.PI;
            var z = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2.0 - 1.0;
            var zScale = Math.sqrt(1.0 - z * z) * scale;
            out[0] = Math.cos(r) * zScale;
            out[1] = Math.sin(r) * zScale;
            out[2] = z * scale;
            return out;
        }
        /**
         * Transforms the vec3 with a mat4.
         * 4th vector component is implicitly '1'
         *
         * @param {vec3} out the receiving vector
         * @param {vec3} a the vector to transform
         * @param {mat4} m matrix to transform with
         * @returns {vec3} out
         */
        function transformMat4(out, a, m) {
            var x = a[0], y = a[1], z = a[2];
            var w = m[3] * x + m[7] * y + m[11] * z + m[15];
            w = w || 1.0;
            out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
            out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
            out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
            return out;
        }
        /**
         * Transforms the vec3 with a mat3.
         *
         * @param {vec3} out the receiving vector
         * @param {vec3} a the vector to transform
         * @param {mat3} m the 3x3 matrix to transform with
         * @returns {vec3} out
         */
        function transformMat3(out, a, m) {
            var x = a[0], y = a[1], z = a[2];
            out[0] = x * m[0] + y * m[3] + z * m[6];
            out[1] = x * m[1] + y * m[4] + z * m[7];
            out[2] = x * m[2] + y * m[5] + z * m[8];
            return out;
        }
        /**
         * Transforms the vec3 with a quat
         * Can also be used for dual quaternions. (Multiply it with the real part)
         *
         * @param {vec3} out the receiving vector
         * @param {vec3} a the vector to transform
         * @param {quat} q quaternion to transform with
         * @returns {vec3} out
         */
        function transformQuat(out, a, q) {
            // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
            var qx = q[0], qy = q[1], qz = q[2], qw = q[3];
            var x = a[0], y = a[1], z = a[2]; // var qvec = [qx, qy, qz];
            // var uv = vec3.cross([], qvec, a);
            var uvx = qy * z - qz * y, uvy = qz * x - qx * z, uvz = qx * y - qy * x; // var uuv = vec3.cross([], qvec, uv);
            var uuvx = qy * uvz - qz * uvy, uuvy = qz * uvx - qx * uvz, uuvz = qx * uvy - qy * uvx; // vec3.scale(uv, uv, 2 * w);
            var w2 = qw * 2;
            uvx *= w2;
            uvy *= w2;
            uvz *= w2; // vec3.scale(uuv, uuv, 2);
            uuvx *= 2;
            uuvy *= 2;
            uuvz *= 2; // return vec3.add(out, a, vec3.add(out, uv, uuv));
            out[0] = x + uvx + uuvx;
            out[1] = y + uvy + uuvy;
            out[2] = z + uvz + uuvz;
            return out;
        }
        /**
         * Rotate a 3D vector around the x-axis
         * @param {vec3} out The receiving vec3
         * @param {vec3} a The vec3 point to rotate
         * @param {vec3} b The origin of the rotation
         * @param {Number} c The angle of rotation
         * @returns {vec3} out
         */
        function rotateX(out, a, b, c) {
            var p = [], r = []; //Translate point to the origin
            p[0] = a[0] - b[0];
            p[1] = a[1] - b[1];
            p[2] = a[2] - b[2]; //perform rotation
            r[0] = p[0];
            r[1] = p[1] * Math.cos(c) - p[2] * Math.sin(c);
            r[2] = p[1] * Math.sin(c) + p[2] * Math.cos(c); //translate to correct position
            out[0] = r[0] + b[0];
            out[1] = r[1] + b[1];
            out[2] = r[2] + b[2];
            return out;
        }
        /**
         * Rotate a 3D vector around the y-axis
         * @param {vec3} out The receiving vec3
         * @param {vec3} a The vec3 point to rotate
         * @param {vec3} b The origin of the rotation
         * @param {Number} c The angle of rotation
         * @returns {vec3} out
         */
        function rotateY(out, a, b, c) {
            var p = [], r = []; //Translate point to the origin
            p[0] = a[0] - b[0];
            p[1] = a[1] - b[1];
            p[2] = a[2] - b[2]; //perform rotation
            r[0] = p[2] * Math.sin(c) + p[0] * Math.cos(c);
            r[1] = p[1];
            r[2] = p[2] * Math.cos(c) - p[0] * Math.sin(c); //translate to correct position
            out[0] = r[0] + b[0];
            out[1] = r[1] + b[1];
            out[2] = r[2] + b[2];
            return out;
        }
        /**
         * Rotate a 3D vector around the z-axis
         * @param {vec3} out The receiving vec3
         * @param {vec3} a The vec3 point to rotate
         * @param {vec3} b The origin of the rotation
         * @param {Number} c The angle of rotation
         * @returns {vec3} out
         */
        function rotateZ(out, a, b, c) {
            var p = [], r = []; //Translate point to the origin
            p[0] = a[0] - b[0];
            p[1] = a[1] - b[1];
            p[2] = a[2] - b[2]; //perform rotation
            r[0] = p[0] * Math.cos(c) - p[1] * Math.sin(c);
            r[1] = p[0] * Math.sin(c) + p[1] * Math.cos(c);
            r[2] = p[2]; //translate to correct position
            out[0] = r[0] + b[0];
            out[1] = r[1] + b[1];
            out[2] = r[2] + b[2];
            return out;
        }
        /**
         * Get the angle between two 3D vectors
         * @param {vec3} a The first operand
         * @param {vec3} b The second operand
         * @returns {Number} The angle in radians
         */
        function angle(a, b) {
            var tempA = fromValues(a[0], a[1], a[2]);
            var tempB = fromValues(b[0], b[1], b[2]);
            normalize(tempA, tempA);
            normalize(tempB, tempB);
            var cosine = dot(tempA, tempB);
            if (cosine > 1.0) {
                return 0;
            }
            else if (cosine < -1.0) {
                return Math.PI;
            }
            else {
                return Math.acos(cosine);
            }
        }
        /**
         * Set the components of a vec3 to zero
         *
         * @param {vec3} out the receiving vector
         * @returns {vec3} out
         */
        function zero(out) {
            out[0] = 0.0;
            out[1] = 0.0;
            out[2] = 0.0;
            return out;
        }
        /**
         * Returns a string representation of a vector
         *
         * @param {vec3} a vector to represent as a string
         * @returns {String} string representation of the vector
         */
        function str(a) {
            return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
        }
        /**
         * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
         *
         * @param {vec3} a The first vector.
         * @param {vec3} b The second vector.
         * @returns {Boolean} True if the vectors are equal, false otherwise.
         */
        function exactEquals(a, b) {
            return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
        }
        /**
         * Returns whether or not the vectors have approximately the same elements in the same position.
         *
         * @param {vec3} a The first vector.
         * @param {vec3} b The second vector.
         * @returns {Boolean} True if the vectors are equal, false otherwise.
         */
        function equals(a, b) {
            var a0 = a[0], a1 = a[1], a2 = a[2];
            var b0 = b[0], b1 = b[1], b2 = b[2];
            return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2));
        }
        /**
         * Alias for {@link vec3.subtract}
         * @function
         */
        var sub = subtract;
        /**
         * Alias for {@link vec3.multiply}
         * @function
         */
        var mul = multiply;
        /**
         * Alias for {@link vec3.divide}
         * @function
         */
        var div = divide;
        /**
         * Alias for {@link vec3.distance}
         * @function
         */
        var dist = distance;
        /**
         * Alias for {@link vec3.squaredDistance}
         * @function
         */
        var sqrDist = squaredDistance;
        /**
         * Alias for {@link vec3.length}
         * @function
         */
        var len = length;
        /**
         * Alias for {@link vec3.squaredLength}
         * @function
         */
        var sqrLen = squaredLength;
        /**
         * Perform some operation over an array of vec3s.
         *
         * @param {Array} a the array of vectors to iterate over
         * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
         * @param {Number} offset Number of elements to skip at the beginning of the array
         * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
         * @param {Function} fn Function to call for each vector in the array
         * @param {Object} [arg] additional argument to pass to fn
         * @returns {Array} a
         * @function
         */
        var forEach = function () {
            var vec = create();
            return function (a, stride, offset, count, fn, arg) {
                var i, l;
                if (!stride) {
                    stride = 3;
                }
                if (!offset) {
                    offset = 0;
                }
                if (count) {
                    l = Math.min(count * stride + offset, a.length);
                }
                else {
                    l = a.length;
                }
                for (i = offset; i < l; i += stride) {
                    vec[0] = a[i];
                    vec[1] = a[i + 1];
                    vec[2] = a[i + 2];
                    fn(vec, vec, arg);
                    a[i] = vec[0];
                    a[i + 1] = vec[1];
                    a[i + 2] = vec[2];
                }
                return a;
            };
        }();
        /***/ 
    }),
    /***/ "./node_modules/gl-matrix/esm/vec4.js": 
    /*!********************************************!*\
      !*** ./node_modules/gl-matrix/esm/vec4.js ***!
      \********************************************/
    /*! exports provided: create, clone, fromValues, copy, set, add, subtract, multiply, divide, ceil, floor, min, max, round, scale, scaleAndAdd, distance, squaredDistance, length, squaredLength, negate, inverse, normalize, dot, cross, lerp, random, transformMat4, transformQuat, zero, str, exactEquals, equals, sub, mul, div, dist, sqrDist, len, sqrLen, forEach */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function () { return create; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function () { return clone; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function () { return fromValues; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function () { return copy; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function () { return set; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function () { return add; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function () { return subtract; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function () { return multiply; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function () { return divide; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function () { return ceil; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function () { return floor; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function () { return min; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function () { return max; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function () { return round; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function () { return scale; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAndAdd", function () { return scaleAndAdd; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function () { return distance; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDistance", function () { return squaredDistance; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function () { return length; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function () { return squaredLength; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function () { return negate; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function () { return inverse; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function () { return normalize; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function () { return dot; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cross", function () { return cross; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function () { return lerp; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function () { return random; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat4", function () { return transformMat4; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformQuat", function () { return transformQuat; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zero", function () { return zero; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function () { return str; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function () { return exactEquals; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function () { return equals; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function () { return sub; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function () { return mul; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function () { return div; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function () { return dist; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function () { return sqrDist; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function () { return len; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function () { return sqrLen; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function () { return forEach; });
        /* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");
        /**
         * 4 Dimensional Vector
         * @module vec4
         */
        /**
         * Creates a new, empty vec4
         *
         * @returns {vec4} a new 4D vector
         */
        function create() {
            var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
            if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
                out[0] = 0;
                out[1] = 0;
                out[2] = 0;
                out[3] = 0;
            }
            return out;
        }
        /**
         * Creates a new vec4 initialized with values from an existing vector
         *
         * @param {vec4} a vector to clone
         * @returns {vec4} a new 4D vector
         */
        function clone(a) {
            var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
            out[0] = a[0];
            out[1] = a[1];
            out[2] = a[2];
            out[3] = a[3];
            return out;
        }
        /**
         * Creates a new vec4 initialized with the given values
         *
         * @param {Number} x X component
         * @param {Number} y Y component
         * @param {Number} z Z component
         * @param {Number} w W component
         * @returns {vec4} a new 4D vector
         */
        function fromValues(x, y, z, w) {
            var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
            out[0] = x;
            out[1] = y;
            out[2] = z;
            out[3] = w;
            return out;
        }
        /**
         * Copy the values from one vec4 to another
         *
         * @param {vec4} out the receiving vector
         * @param {vec4} a the source vector
         * @returns {vec4} out
         */
        function copy(out, a) {
            out[0] = a[0];
            out[1] = a[1];
            out[2] = a[2];
            out[3] = a[3];
            return out;
        }
        /**
         * Set the components of a vec4 to the given values
         *
         * @param {vec4} out the receiving vector
         * @param {Number} x X component
         * @param {Number} y Y component
         * @param {Number} z Z component
         * @param {Number} w W component
         * @returns {vec4} out
         */
        function set(out, x, y, z, w) {
            out[0] = x;
            out[1] = y;
            out[2] = z;
            out[3] = w;
            return out;
        }
        /**
         * Adds two vec4's
         *
         * @param {vec4} out the receiving vector
         * @param {vec4} a the first operand
         * @param {vec4} b the second operand
         * @returns {vec4} out
         */
        function add(out, a, b) {
            out[0] = a[0] + b[0];
            out[1] = a[1] + b[1];
            out[2] = a[2] + b[2];
            out[3] = a[3] + b[3];
            return out;
        }
        /**
         * Subtracts vector b from vector a
         *
         * @param {vec4} out the receiving vector
         * @param {vec4} a the first operand
         * @param {vec4} b the second operand
         * @returns {vec4} out
         */
        function subtract(out, a, b) {
            out[0] = a[0] - b[0];
            out[1] = a[1] - b[1];
            out[2] = a[2] - b[2];
            out[3] = a[3] - b[3];
            return out;
        }
        /**
         * Multiplies two vec4's
         *
         * @param {vec4} out the receiving vector
         * @param {vec4} a the first operand
         * @param {vec4} b the second operand
         * @returns {vec4} out
         */
        function multiply(out, a, b) {
            out[0] = a[0] * b[0];
            out[1] = a[1] * b[1];
            out[2] = a[2] * b[2];
            out[3] = a[3] * b[3];
            return out;
        }
        /**
         * Divides two vec4's
         *
         * @param {vec4} out the receiving vector
         * @param {vec4} a the first operand
         * @param {vec4} b the second operand
         * @returns {vec4} out
         */
        function divide(out, a, b) {
            out[0] = a[0] / b[0];
            out[1] = a[1] / b[1];
            out[2] = a[2] / b[2];
            out[3] = a[3] / b[3];
            return out;
        }
        /**
         * Math.ceil the components of a vec4
         *
         * @param {vec4} out the receiving vector
         * @param {vec4} a vector to ceil
         * @returns {vec4} out
         */
        function ceil(out, a) {
            out[0] = Math.ceil(a[0]);
            out[1] = Math.ceil(a[1]);
            out[2] = Math.ceil(a[2]);
            out[3] = Math.ceil(a[3]);
            return out;
        }
        /**
         * Math.floor the components of a vec4
         *
         * @param {vec4} out the receiving vector
         * @param {vec4} a vector to floor
         * @returns {vec4} out
         */
        function floor(out, a) {
            out[0] = Math.floor(a[0]);
            out[1] = Math.floor(a[1]);
            out[2] = Math.floor(a[2]);
            out[3] = Math.floor(a[3]);
            return out;
        }
        /**
         * Returns the minimum of two vec4's
         *
         * @param {vec4} out the receiving vector
         * @param {vec4} a the first operand
         * @param {vec4} b the second operand
         * @returns {vec4} out
         */
        function min(out, a, b) {
            out[0] = Math.min(a[0], b[0]);
            out[1] = Math.min(a[1], b[1]);
            out[2] = Math.min(a[2], b[2]);
            out[3] = Math.min(a[3], b[3]);
            return out;
        }
        /**
         * Returns the maximum of two vec4's
         *
         * @param {vec4} out the receiving vector
         * @param {vec4} a the first operand
         * @param {vec4} b the second operand
         * @returns {vec4} out
         */
        function max(out, a, b) {
            out[0] = Math.max(a[0], b[0]);
            out[1] = Math.max(a[1], b[1]);
            out[2] = Math.max(a[2], b[2]);
            out[3] = Math.max(a[3], b[3]);
            return out;
        }
        /**
         * Math.round the components of a vec4
         *
         * @param {vec4} out the receiving vector
         * @param {vec4} a vector to round
         * @returns {vec4} out
         */
        function round(out, a) {
            out[0] = Math.round(a[0]);
            out[1] = Math.round(a[1]);
            out[2] = Math.round(a[2]);
            out[3] = Math.round(a[3]);
            return out;
        }
        /**
         * Scales a vec4 by a scalar number
         *
         * @param {vec4} out the receiving vector
         * @param {vec4} a the vector to scale
         * @param {Number} b amount to scale the vector by
         * @returns {vec4} out
         */
        function scale(out, a, b) {
            out[0] = a[0] * b;
            out[1] = a[1] * b;
            out[2] = a[2] * b;
            out[3] = a[3] * b;
            return out;
        }
        /**
         * Adds two vec4's after scaling the second operand by a scalar value
         *
         * @param {vec4} out the receiving vector
         * @param {vec4} a the first operand
         * @param {vec4} b the second operand
         * @param {Number} scale the amount to scale b by before adding
         * @returns {vec4} out
         */
        function scaleAndAdd(out, a, b, scale) {
            out[0] = a[0] + b[0] * scale;
            out[1] = a[1] + b[1] * scale;
            out[2] = a[2] + b[2] * scale;
            out[3] = a[3] + b[3] * scale;
            return out;
        }
        /**
         * Calculates the euclidian distance between two vec4's
         *
         * @param {vec4} a the first operand
         * @param {vec4} b the second operand
         * @returns {Number} distance between a and b
         */
        function distance(a, b) {
            var x = b[0] - a[0];
            var y = b[1] - a[1];
            var z = b[2] - a[2];
            var w = b[3] - a[3];
            return Math.sqrt(x * x + y * y + z * z + w * w);
        }
        /**
         * Calculates the squared euclidian distance between two vec4's
         *
         * @param {vec4} a the first operand
         * @param {vec4} b the second operand
         * @returns {Number} squared distance between a and b
         */
        function squaredDistance(a, b) {
            var x = b[0] - a[0];
            var y = b[1] - a[1];
            var z = b[2] - a[2];
            var w = b[3] - a[3];
            return x * x + y * y + z * z + w * w;
        }
        /**
         * Calculates the length of a vec4
         *
         * @param {vec4} a vector to calculate length of
         * @returns {Number} length of a
         */
        function length(a) {
            var x = a[0];
            var y = a[1];
            var z = a[2];
            var w = a[3];
            return Math.sqrt(x * x + y * y + z * z + w * w);
        }
        /**
         * Calculates the squared length of a vec4
         *
         * @param {vec4} a vector to calculate squared length of
         * @returns {Number} squared length of a
         */
        function squaredLength(a) {
            var x = a[0];
            var y = a[1];
            var z = a[2];
            var w = a[3];
            return x * x + y * y + z * z + w * w;
        }
        /**
         * Negates the components of a vec4
         *
         * @param {vec4} out the receiving vector
         * @param {vec4} a vector to negate
         * @returns {vec4} out
         */
        function negate(out, a) {
            out[0] = -a[0];
            out[1] = -a[1];
            out[2] = -a[2];
            out[3] = -a[3];
            return out;
        }
        /**
         * Returns the inverse of the components of a vec4
         *
         * @param {vec4} out the receiving vector
         * @param {vec4} a vector to invert
         * @returns {vec4} out
         */
        function inverse(out, a) {
            out[0] = 1.0 / a[0];
            out[1] = 1.0 / a[1];
            out[2] = 1.0 / a[2];
            out[3] = 1.0 / a[3];
            return out;
        }
        /**
         * Normalize a vec4
         *
         * @param {vec4} out the receiving vector
         * @param {vec4} a vector to normalize
         * @returns {vec4} out
         */
        function normalize(out, a) {
            var x = a[0];
            var y = a[1];
            var z = a[2];
            var w = a[3];
            var len = x * x + y * y + z * z + w * w;
            if (len > 0) {
                len = 1 / Math.sqrt(len);
            }
            out[0] = x * len;
            out[1] = y * len;
            out[2] = z * len;
            out[3] = w * len;
            return out;
        }
        /**
         * Calculates the dot product of two vec4's
         *
         * @param {vec4} a the first operand
         * @param {vec4} b the second operand
         * @returns {Number} dot product of a and b
         */
        function dot(a, b) {
            return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
        }
        /**
         * Returns the cross-product of three vectors in a 4-dimensional space
         *
         * @param {vec4} result the receiving vector
         * @param {vec4} U the first vector
         * @param {vec4} V the second vector
         * @param {vec4} W the third vector
         * @returns {vec4} result
         */
        function cross(out, u, v, w) {
            var A = v[0] * w[1] - v[1] * w[0], B = v[0] * w[2] - v[2] * w[0], C = v[0] * w[3] - v[3] * w[0], D = v[1] * w[2] - v[2] * w[1], E = v[1] * w[3] - v[3] * w[1], F = v[2] * w[3] - v[3] * w[2];
            var G = u[0];
            var H = u[1];
            var I = u[2];
            var J = u[3];
            out[0] = H * F - I * E + J * D;
            out[1] = -(G * F) + I * C - J * B;
            out[2] = G * E - H * C + J * A;
            out[3] = -(G * D) + H * B - I * A;
            return out;
        }
        ;
        /**
         * Performs a linear interpolation between two vec4's
         *
         * @param {vec4} out the receiving vector
         * @param {vec4} a the first operand
         * @param {vec4} b the second operand
         * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
         * @returns {vec4} out
         */
        function lerp(out, a, b, t) {
            var ax = a[0];
            var ay = a[1];
            var az = a[2];
            var aw = a[3];
            out[0] = ax + t * (b[0] - ax);
            out[1] = ay + t * (b[1] - ay);
            out[2] = az + t * (b[2] - az);
            out[3] = aw + t * (b[3] - aw);
            return out;
        }
        /**
         * Generates a random vector with the given scale
         *
         * @param {vec4} out the receiving vector
         * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
         * @returns {vec4} out
         */
        function random(out, scale) {
            scale = scale || 1.0; // Marsaglia, George. Choosing a Point from the Surface of a
            // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
            // http://projecteuclid.org/euclid.aoms/1177692644;
            var v1, v2, v3, v4;
            var s1, s2;
            do {
                v1 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
                v2 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
                s1 = v1 * v1 + v2 * v2;
            } while (s1 >= 1);
            do {
                v3 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
                v4 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
                s2 = v3 * v3 + v4 * v4;
            } while (s2 >= 1);
            var d = Math.sqrt((1 - s1) / s2);
            out[0] = scale * v1;
            out[1] = scale * v2;
            out[2] = scale * v3 * d;
            out[3] = scale * v4 * d;
            return out;
        }
        /**
         * Transforms the vec4 with a mat4.
         *
         * @param {vec4} out the receiving vector
         * @param {vec4} a the vector to transform
         * @param {mat4} m matrix to transform with
         * @returns {vec4} out
         */
        function transformMat4(out, a, m) {
            var x = a[0], y = a[1], z = a[2], w = a[3];
            out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
            out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
            out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
            out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
            return out;
        }
        /**
         * Transforms the vec4 with a quat
         *
         * @param {vec4} out the receiving vector
         * @param {vec4} a the vector to transform
         * @param {quat} q quaternion to transform with
         * @returns {vec4} out
         */
        function transformQuat(out, a, q) {
            var x = a[0], y = a[1], z = a[2];
            var qx = q[0], qy = q[1], qz = q[2], qw = q[3]; // calculate quat * vec
            var ix = qw * x + qy * z - qz * y;
            var iy = qw * y + qz * x - qx * z;
            var iz = qw * z + qx * y - qy * x;
            var iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat
            out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
            out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
            out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
            out[3] = a[3];
            return out;
        }
        /**
         * Set the components of a vec4 to zero
         *
         * @param {vec4} out the receiving vector
         * @returns {vec4} out
         */
        function zero(out) {
            out[0] = 0.0;
            out[1] = 0.0;
            out[2] = 0.0;
            out[3] = 0.0;
            return out;
        }
        /**
         * Returns a string representation of a vector
         *
         * @param {vec4} a vector to represent as a string
         * @returns {String} string representation of the vector
         */
        function str(a) {
            return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
        }
        /**
         * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
         *
         * @param {vec4} a The first vector.
         * @param {vec4} b The second vector.
         * @returns {Boolean} True if the vectors are equal, false otherwise.
         */
        function exactEquals(a, b) {
            return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
        }
        /**
         * Returns whether or not the vectors have approximately the same elements in the same position.
         *
         * @param {vec4} a The first vector.
         * @param {vec4} b The second vector.
         * @returns {Boolean} True if the vectors are equal, false otherwise.
         */
        function equals(a, b) {
            var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
            var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
            return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3));
        }
        /**
         * Alias for {@link vec4.subtract}
         * @function
         */
        var sub = subtract;
        /**
         * Alias for {@link vec4.multiply}
         * @function
         */
        var mul = multiply;
        /**
         * Alias for {@link vec4.divide}
         * @function
         */
        var div = divide;
        /**
         * Alias for {@link vec4.distance}
         * @function
         */
        var dist = distance;
        /**
         * Alias for {@link vec4.squaredDistance}
         * @function
         */
        var sqrDist = squaredDistance;
        /**
         * Alias for {@link vec4.length}
         * @function
         */
        var len = length;
        /**
         * Alias for {@link vec4.squaredLength}
         * @function
         */
        var sqrLen = squaredLength;
        /**
         * Perform some operation over an array of vec4s.
         *
         * @param {Array} a the array of vectors to iterate over
         * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
         * @param {Number} offset Number of elements to skip at the beginning of the array
         * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
         * @param {Function} fn Function to call for each vector in the array
         * @param {Object} [arg] additional argument to pass to fn
         * @returns {Array} a
         * @function
         */
        var forEach = function () {
            var vec = create();
            return function (a, stride, offset, count, fn, arg) {
                var i, l;
                if (!stride) {
                    stride = 4;
                }
                if (!offset) {
                    offset = 0;
                }
                if (count) {
                    l = Math.min(count * stride + offset, a.length);
                }
                else {
                    l = a.length;
                }
                for (i = offset; i < l; i += stride) {
                    vec[0] = a[i];
                    vec[1] = a[i + 1];
                    vec[2] = a[i + 2];
                    vec[3] = a[i + 3];
                    fn(vec, vec, arg);
                    a[i] = vec[0];
                    a[i + 1] = vec[1];
                    a[i + 2] = vec[2];
                    a[i + 3] = vec[3];
                }
                return a;
            };
        }();
        /***/ 
    }),
    /***/ "./src/javascripts/engine/buffers.ts": 
    /*!*******************************************!*\
      !*** ./src/javascripts/engine/buffers.ts ***!
      \*******************************************/
    /*! exports provided: VertexBuffer, IndexBuffer, VertexBufferLayout, VertexBufferElement */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertexBuffer", function () { return VertexBuffer; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexBuffer", function () { return IndexBuffer; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertexBufferLayout", function () { return VertexBufferLayout; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertexBufferElement", function () { return VertexBufferElement; });
        var VertexBufferElement = /** @class */ (function () {
            function VertexBufferElement(count, name) {
                this.name = name;
                this.count = count;
            }
            return VertexBufferElement;
        }());
        var VertexBufferLayout = /** @class */ (function () {
            function VertexBufferLayout(elems, gl) {
                this.gl = gl;
                this.elems = elems;
                var totalCount = 0;
                elems.forEach(function (elem) {
                    totalCount += elem.count;
                });
                this.totalCount = totalCount;
            }
            VertexBufferLayout.prototype.bind = function (shader) {
                var _this = this;
                var gl = this.gl;
                var currentOffset = 0;
                this.elems.forEach(function (elem) {
                    var location = gl.getAttribLocation(shader.program, elem.name);
                    gl.vertexAttribPointer(location, elem.count, gl.FLOAT, true, _this.totalCount * Float32Array.BYTES_PER_ELEMENT, currentOffset * Float32Array.BYTES_PER_ELEMENT);
                    currentOffset += elem.count;
                    gl.enableVertexAttribArray(location);
                });
            };
            return VertexBufferLayout;
        }());
        var VertexBuffer = /** @class */ (function () {
            function VertexBuffer(gl, data) {
                this.bufferID = gl.createBuffer();
                this.gl = gl;
                gl.bindBuffer(gl.ARRAY_BUFFER, this.bufferID);
                gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.DYNAMIC_DRAW);
            }
            VertexBuffer.prototype.destroy = function () {
                this.gl.deleteBuffer(this.bufferID);
            };
            VertexBuffer.prototype.bind = function () {
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.bufferID);
            };
            VertexBuffer.prototype.unBind = function () {
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
            };
            return VertexBuffer;
        }());
        var IndexBuffer = /** @class */ (function () {
            function IndexBuffer(gl, data) {
                this.bufferID = gl.createBuffer();
                this.gl = gl;
                this.size = data.length;
                gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.bufferID);
                gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(data), gl.DYNAMIC_DRAW);
            }
            IndexBuffer.prototype.destroy = function () {
                this.gl.deleteBuffer(this.bufferID);
            };
            IndexBuffer.prototype.bind = function () {
                this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.bufferID);
            };
            IndexBuffer.prototype.unBind = function () {
                this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null);
            };
            return IndexBuffer;
        }());
        /***/ 
    }),
    /***/ "./src/javascripts/engine/entity.ts": 
    /*!******************************************!*\
      !*** ./src/javascripts/engine/entity.ts ***!
      \******************************************/
    /*! exports provided: Entity */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entity", function () { return Entity; });
        /* harmony import */ var _entityManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entityManager */ "./src/javascripts/engine/entityManager.ts");
        var Entity = /** @class */ (function () {
            function Entity(x, y, z, resource) {
                this.x = x;
                this.y = y;
                this.z = z;
                this.resource = resource;
                _entityManager__WEBPACK_IMPORTED_MODULE_0__["EntityManager"].addEntity(this);
            }
            return Entity;
        }());
        /***/ 
    }),
    /***/ "./src/javascripts/engine/entityManager.ts": 
    /*!*************************************************!*\
      !*** ./src/javascripts/engine/entityManager.ts ***!
      \*************************************************/
    /*! exports provided: EntityManager */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityManager", function () { return EntityManager; });
        /* harmony import */ var _buffers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buffers */ "./src/javascripts/engine/buffers.ts");
        var EntityManager = /** @class */ (function () {
            function EntityManager() {
            }
            EntityManager.getModel = function (name) {
                return this.resources.objects[name];
            };
            EntityManager.addEntity = function (e) {
                this.entities.push(e);
            };
            EntityManager.entityBuffers = function (gl) {
                var _this = this;
                var vert = [];
                var int = [];
                this.entities.forEach(function (e, i) {
                    var vertices = _this.multVerts(e.resource.vertices, e.x, e.y, e.z);
                    var indices = e.resource.indices.map(function (n) { return n + (24 * i); });
                    vert.push.apply(vert, vertices);
                    int.push.apply(int, indices);
                });
                return [new _buffers__WEBPACK_IMPORTED_MODULE_0__["VertexBuffer"](gl, vert), new _buffers__WEBPACK_IMPORTED_MODULE_0__["IndexBuffer"](gl, int)];
            };
            EntityManager.multVerts = function (verticesRef, x, y, z) {
                var vertices = verticesRef.slice();
                var size = 6;
                var rows = 24;
                for (var r = 0; r < rows; r++) {
                    for (var xyz = 0; xyz < 3; xyz++) {
                        var value = void 0;
                        if (xyz == 0)
                            value = x;
                        else if (xyz == 1)
                            value = y;
                        else if (xyz == 2)
                            value = z;
                        vertices[r * size + xyz] += value;
                    }
                }
                return vertices;
            };
            EntityManager.entities = [];
            return EntityManager;
        }());
        /***/ 
    }),
    /***/ "./src/javascripts/engine/glEngine.ts": 
    /*!********************************************!*\
      !*** ./src/javascripts/engine/glEngine.ts ***!
      \********************************************/
    /*! exports provided: GlEngine */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlEngine", function () { return GlEngine; });
        /* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
        /* harmony import */ var _shader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shader */ "./src/javascripts/engine/shader.ts");
        /* harmony import */ var _buffers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buffers */ "./src/javascripts/engine/buffers.ts");
        /* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderer */ "./src/javascripts/engine/renderer.ts");
        /* harmony import */ var _entityManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entityManager */ "./src/javascripts/engine/entityManager.ts");
        var GlEngine = /** @class */ (function () {
            function GlEngine(gl, canvas, resources, inputs) {
                this.gl = gl;
                this.canvas = canvas;
                this.shader = new _shader__WEBPACK_IMPORTED_MODULE_1__["Shader"](gl, resources.shaders);
                this.projMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].create();
                this.addOnResize();
                this.enableFrontFaceRendering(gl);
                _entityManager__WEBPACK_IMPORTED_MODULE_4__["EntityManager"].resources = resources;
                _entityManager__WEBPACK_IMPORTED_MODULE_4__["EntityManager"].inputs = inputs;
                var buffers = _entityManager__WEBPACK_IMPORTED_MODULE_4__["EntityManager"].entityBuffers(gl);
                this.vb = buffers[0];
                this.ib = buffers[1];
                var vbElems = [
                    new _buffers__WEBPACK_IMPORTED_MODULE_2__["VertexBufferElement"](3, "vertPosition"),
                    new _buffers__WEBPACK_IMPORTED_MODULE_2__["VertexBufferElement"](3, "vertColor")
                ];
                this.vbl = new _buffers__WEBPACK_IMPORTED_MODULE_2__["VertexBufferLayout"](vbElems, gl);
                this.vbl.bind(this.shader);
                this.modelMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].create();
                this.viewMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].create();
                this.projMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].create();
                gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].identity(this.modelMatrix);
                gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].lookAt(this.viewMatrix, [0, 0, 40], [0, 0, 0], [0, 1, 0]);
                gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].perspective(this.projMatrix, gl_matrix__WEBPACK_IMPORTED_MODULE_0__["glMatrix"].toRadian(45), canvas.width / canvas.height, 0.1, 1000);
                this.shader.bind();
                this.shader.setUniformMat4fv("mModel", this.modelMatrix);
                this.shader.setUniformMat4fv("mView", this.viewMatrix);
                this.shader.setUniformMat4fv("mProj", this.projMatrix);
                this.renderer = new _renderer__WEBPACK_IMPORTED_MODULE_3__["Renderer"](gl);
                this.shader.unBind();
            }
            GlEngine.prototype.addOnResize = function () {
                var _this = this;
                window.onresize = function (e) {
                    _this.changeCanvasSize(_this.gl, _this.canvas, window.innerWidth, window.innerHeight);
                };
                this.changeCanvasSize(this.gl, this.canvas, window.innerWidth, window.innerHeight);
            };
            GlEngine.prototype.changeCanvasSize = function (gl, canvas, width, height) {
                canvas.width = width;
                canvas.height = height;
                gl.viewport(0, 0, width, height);
                this.projMatrix = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].create();
                gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].perspective(this.projMatrix, gl_matrix__WEBPACK_IMPORTED_MODULE_0__["glMatrix"].toRadian(45), width / height, 0.1, 1000);
                this.shader.bind();
                this.shader.setUniformMat4fv("mProj", this.projMatrix);
            };
            GlEngine.prototype.onFrame = function (f) {
                var t = this;
                var loop = function () {
                    f(t.modelMatrix);
                    t.shader.bind();
                    t.shader.setUniformMat4fv("mModel", t.modelMatrix);
                    t.renderer.clear();
                    var buffers = _entityManager__WEBPACK_IMPORTED_MODULE_4__["EntityManager"].entityBuffers(t.gl);
                    t.renderer.draw(buffers[0], buffers[1], t.vbl, t.shader);
                    requestAnimationFrame(loop);
                };
                requestAnimationFrame(loop);
            };
            GlEngine.prototype.enableFrontFaceRendering = function (gl) {
                gl.enable(gl.DEPTH_TEST);
                gl.enable(gl.CULL_FACE);
                gl.frontFace(gl.CCW);
                gl.cullFace(gl.BACK);
            };
            return GlEngine;
        }());
        /***/ 
    }),
    /***/ "./src/javascripts/engine/glWindow.ts": 
    /*!********************************************!*\
      !*** ./src/javascripts/engine/glWindow.ts ***!
      \********************************************/
    /*! exports provided: glWindow */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glWindow", function () { return glWindow; });
        /* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources */ "./src/javascripts/engine/resources.ts");
        /* harmony import */ var _glApplication__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../glApplication */ "./src/javascripts/glApplication.ts");
        /* harmony import */ var _inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../inputs */ "./src/javascripts/inputs.ts");
        function glWindow(canvas) {
            var resourcesPromise = Object(_resources__WEBPACK_IMPORTED_MODULE_0__["loadResourcesPromise"])();
            function getGL() {
                var gl = canvas.getContext("webgl");
                if (!gl) {
                    gl = canvas.getContext("experimental-webgl");
                }
                return gl;
            }
            var gl = getGL();
            var inputs = Object(_inputs__WEBPACK_IMPORTED_MODULE_2__["assignInputHandlers"])(canvas);
            resourcesPromise.then(function (resources) {
                Object(_glApplication__WEBPACK_IMPORTED_MODULE_1__["glApp"])(gl, canvas, inputs, resources);
            });
        }
        /***/ 
    }),
    /***/ "./src/javascripts/engine/renderer.ts": 
    /*!********************************************!*\
      !*** ./src/javascripts/engine/renderer.ts ***!
      \********************************************/
    /*! exports provided: Renderer */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Renderer", function () { return Renderer; });
        var Renderer = /** @class */ (function () {
            function Renderer(gl) {
                this.gl = gl;
            }
            Renderer.prototype.draw = function (vb, ib, vbl, shader) {
                shader.bind();
                vb.bind();
                ib.bind();
                vbl.bind(shader);
                this.gl.drawElements(this.gl.TRIANGLES, ib.size, this.gl.UNSIGNED_SHORT, 0);
            };
            Renderer.prototype.clear = function () {
                var gl = this.gl;
                this.gl.clearColor(0.75, 0.85, 0.8, 1.0);
                this.gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT);
            };
            return Renderer;
        }());
        /***/ 
    }),
    /***/ "./src/javascripts/engine/resources.ts": 
    /*!*********************************************!*\
      !*** ./src/javascripts/engine/resources.ts ***!
      \*********************************************/
    /*! exports provided: loadResourcesPromise, Resources, Shaders */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadResourcesPromise", function () { return loadResourcesPromise; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resources", function () { return Resources; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shaders", function () { return Shaders; });
        var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
            return new (P || (P = Promise))(function (resolve, reject) {
                function fulfilled(value) { try {
                    step(generator.next(value));
                }
                catch (e) {
                    reject(e);
                } }
                function rejected(value) { try {
                    step(generator["throw"](value));
                }
                catch (e) {
                    reject(e);
                } }
                function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                step((generator = generator.apply(thisArg, _arguments || [])).next());
            });
        };
        var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
            var _ = { label: 0, sent: function () { if (t[0] & 1)
                    throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
            return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
            function verb(n) { return function (v) { return step([n, v]); }; }
            function step(op) {
                if (f)
                    throw new TypeError("Generator is already executing.");
                while (_)
                    try {
                        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                            return t;
                        if (y = 0, t)
                            op = [op[0] & 2, t.value];
                        switch (op[0]) {
                            case 0:
                            case 1:
                                t = op;
                                break;
                            case 4:
                                _.label++;
                                return { value: op[1], done: false };
                            case 5:
                                _.label++;
                                y = op[1];
                                op = [0];
                                continue;
                            case 7:
                                op = _.ops.pop();
                                _.trys.pop();
                                continue;
                            default:
                                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                    _ = 0;
                                    continue;
                                }
                                if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                    _.label = op[1];
                                    break;
                                }
                                if (op[0] === 6 && _.label < t[1]) {
                                    _.label = t[1];
                                    t = op;
                                    break;
                                }
                                if (t && _.label < t[2]) {
                                    _.label = t[2];
                                    _.ops.push(op);
                                    break;
                                }
                                if (t[2])
                                    _.ops.pop();
                                _.trys.pop();
                                continue;
                        }
                        op = body.call(thisArg, _);
                    }
                    catch (e) {
                        op = [6, e];
                        y = 0;
                    }
                    finally {
                        f = t = 0;
                    }
                if (op[0] & 5)
                    throw op[1];
                return { value: op[0] ? op[1] : void 0, done: true };
            }
        };
        var Resources = /** @class */ (function () {
            function Resources(shaders, objects) {
                this.shaders = shaders;
                this.objects = objects;
            }
            return Resources;
        }());
        var Shaders = /** @class */ (function () {
            function Shaders(vertexShader, fragmentShader) {
                this.vertexShader = vertexShader;
                this.fragmentShader = fragmentShader;
            }
            return Shaders;
        }());
        function loadResourcesPromise() {
            function xhr(url) {
                return __awaiter(this, void 0, void 0, function () {
                    var xhr, promise;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                xhr = new XMLHttpRequest();
                                promise = new Promise(function (resolve, reject) {
                                    xhr.onreadystatechange = function () {
                                        if (xhr.readyState == 4) {
                                            if (xhr.status == 200)
                                                resolve(xhr.responseText);
                                            else
                                                reject(xhr);
                                        }
                                    };
                                    xhr.open("GET", url);
                                    xhr.send();
                                });
                                return [4 /*yield*/, promise];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    });
                });
            }
            var shaders = xhr("shaders").then(function (shaders) {
                var shaderArray = shaders.split("#shader");
                shaderArray.splice(0, 1);
                return new Shaders(shaderArray[0], shaderArray[1]);
            });
            var objects = xhr("objects").then(function (str) { return JSON.parse(str); });
            var resources = Promise.all([shaders, objects]).then(function (results) {
                return new Resources(results[0], results[1]);
            });
            return resources;
        }
        /***/ 
    }),
    /***/ "./src/javascripts/engine/shader.ts": 
    /*!******************************************!*\
      !*** ./src/javascripts/engine/shader.ts ***!
      \******************************************/
    /*! exports provided: Shader */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shader", function () { return Shader; });
        var Shader = /** @class */ (function () {
            function Shader(gl, shadersResource) {
                this.uniformLocations = {};
                this.gl = gl;
                this.createShader(shadersResource);
            }
            Shader.prototype.bind = function () {
                this.gl.useProgram(this.program);
            };
            Shader.prototype.unBind = function () {
                this.gl.useProgram(null);
            };
            Shader.prototype.destroy = function () {
                this.gl.deleteProgram(this.program);
            };
            Shader.prototype.getUniformLocation = function (name) {
                if (this.uniformLocations[name] != undefined) {
                    return this.uniformLocations[name];
                }
                else {
                    var location_1 = this.gl.getUniformLocation(this.program, name);
                    this.uniformLocations[name] = location_1;
                    return location_1;
                }
            };
            Shader.prototype.setUniformMat4fv = function (name, matrix) {
                this.gl.uniformMatrix4fv(this.getUniformLocation(name), false, matrix);
            };
            Shader.prototype.createShader = function (shadersResource) {
                var gl = this.gl;
                this.program = gl.createProgram();
                var vertexShader = gl.createShader(gl.VERTEX_SHADER);
                var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
                gl.shaderSource(vertexShader, shadersResource.vertexShader);
                gl.shaderSource(fragmentShader, shadersResource.fragmentShader);
                gl.compileShader(vertexShader);
                gl.compileShader(fragmentShader);
                gl.attachShader(this.program, vertexShader);
                gl.attachShader(this.program, fragmentShader);
                gl.linkProgram(this.program);
                gl.validateProgram(this.program);
                gl.deleteShader(vertexShader);
                gl.deleteShader(fragmentShader);
            };
            return Shader;
        }());
        /***/ 
    }),
    /***/ "./src/javascripts/entities/box.ts": 
    /*!*****************************************!*\
      !*** ./src/javascripts/entities/box.ts ***!
      \*****************************************/
    /*! exports provided: Box */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function () { return Box; });
        /* harmony import */ var _engine_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../engine/entity */ "./src/javascripts/engine/entity.ts");
        /* harmony import */ var _engine_entityManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../engine/entityManager */ "./src/javascripts/engine/entityManager.ts");
        var __extends = (undefined && undefined.__extends) || (function () {
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            return function (d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
        })();
        var Box = /** @class */ (function (_super) {
            __extends(Box, _super);
            function Box(x, y, z) {
                return _super.call(this, x, y, z, _engine_entityManager__WEBPACK_IMPORTED_MODULE_1__["EntityManager"].getModel("Box")) || this;
            }
            return Box;
        }(_engine_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"]));
        /***/ 
    }),
    /***/ "./src/javascripts/glApplication.ts": 
    /*!******************************************!*\
      !*** ./src/javascripts/glApplication.ts ***!
      \******************************************/
    /*! exports provided: glApp */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glApp", function () { return glApp; });
        /* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");
        /* harmony import */ var _engine_glEngine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engine/glEngine */ "./src/javascripts/engine/glEngine.ts");
        /* harmony import */ var _entities_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entities/box */ "./src/javascripts/entities/box.ts");
        /* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ "./src/javascripts/player.ts");
        function glApp(gl, canvas, inputs, resources) {
            var engine = new _engine_glEngine__WEBPACK_IMPORTED_MODULE_1__["GlEngine"](gl, canvas, resources, inputs);
            var zangle = 0;
            var yangle = 0;
            var xangle = 0;
            var identityMatrix = new Float32Array(16);
            gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].identity(identityMatrix);
            var orientation = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["quat"].create();
            var quatAngles = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["quat"].create();
            gl_matrix__WEBPACK_IMPORTED_MODULE_0__["quat"].fromEuler(quatAngles, xangle, yangle, zangle);
            var map = [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ];
            var player = new _player__WEBPACK_IMPORTED_MODULE_3__["Player"](2, 0, 0, map);
            map.forEach(function (row, rowNum) {
                row.forEach(function (tile, tileNum) {
                    if (tile == 1) {
                        new _entities_box__WEBPACK_IMPORTED_MODULE_2__["Box"](tileNum - 4, -rowNum, 0);
                    }
                    else if (tile == 0) {
                    }
                });
            });
            engine.onFrame(function (modelMatrix) {
                player.handleMovement();
                var acc = 0.1;
                var friction = 0.95;
                if (!(inputs.W || inputs.S || inputs.A || inputs.D || inputs.Q || inputs.E)) {
                    xangle *= friction;
                    yangle *= friction;
                    zangle *= friction;
                }
                if (inputs.W) {
                    xangle += acc;
                }
                else if (inputs.S) {
                    xangle += -acc;
                }
                if (inputs.A) {
                    yangle += -acc;
                }
                else if (inputs.D) {
                    yangle += acc;
                }
                if (inputs.Q) {
                    zangle += acc;
                }
                else if (inputs.E) {
                    zangle += -acc;
                }
                gl_matrix__WEBPACK_IMPORTED_MODULE_0__["quat"].fromEuler(orientation, xangle, yangle, zangle);
                gl_matrix__WEBPACK_IMPORTED_MODULE_0__["quat"].mul(quatAngles, orientation, quatAngles);
                gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].fromQuat(modelMatrix, quatAngles);
            });
        }
        /***/ 
    }),
    /***/ "./src/javascripts/index.ts": 
    /*!**********************************!*\
      !*** ./src/javascripts/index.ts ***!
      \**********************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _engine_glWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine/glWindow */ "./src/javascripts/engine/glWindow.ts");
        var socket = new WebSocket("ws://localhost:3000");
        socket.addEventListener("open", function (e) {
            socket.send("Here I am");
        });
        socket.addEventListener("message", function (e) {
            if (e.data === "refresh") {
                window.location.reload();
            }
        });
        var canvas = document.createElement("canvas");
        document.getElementsByTagName("body")[0].appendChild(canvas);
        Object(_engine_glWindow__WEBPACK_IMPORTED_MODULE_0__["glWindow"])(canvas);
        /***/ 
    }),
    /***/ "./src/javascripts/inputs.ts": 
    /*!***********************************!*\
      !*** ./src/javascripts/inputs.ts ***!
      \***********************************/
    /*! exports provided: assignInputHandlers, Inputs */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignInputHandlers", function () { return assignInputHandlers; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inputs", function () { return Inputs; });
        var keyCodes = {
            "38": "UP",
            "40": "DOWN",
            "37": "LEFT",
            "39": "RIGHT",
            "81": "Q",
            "69": "E",
            "87": "W",
            "83": "S",
            "65": "A",
            "68": "D"
        };
        var Inputs = /** @class */ (function () {
            function Inputs() {
                this.UP = false;
                this.DOWN = false;
                this.LEFT = false;
                this.RIGHT = false;
                this.Q = false;
                this.E = false;
                this.W = false;
                this.A = false;
                this.S = false;
                this.D = false;
            }
            return Inputs;
        }());
        function assignInputHandlers(canvas) {
            var inputs = new Inputs();
            function keyEvent(event, result) {
                var key = event.keyCode || event.which;
                var keyName = keyCodes[key];
                inputs[keyName] = result;
            }
            window.onkeyup = function (e) {
                keyEvent(e, false);
            };
            window.onkeydown = function (e) {
                keyEvent(e, true);
            };
            window.ontouchstart = function (e) {
                canvas.requestFullscreen();
                var x = e.touches[0].clientX;
                var y = e.touches[0].clientY;
                if (x > window.innerWidth / 2 + window.innerWidth / 10)
                    inputs.RIGHT = true;
                else if (x <= window.innerWidth / 2 - window.innerWidth / 10)
                    inputs.LEFT = true;
                if (y > window.innerHeight / 2 + window.innerWidth / 10)
                    inputs.DOWN = true;
                else if (y <= window.innerHeight / 2 - window.innerWidth / 10)
                    inputs.RIGHT = true;
            };
            window.ontouchend = function (e) {
                inputs = new Inputs();
            };
            return inputs;
        }
        /***/ 
    }),
    /***/ "./src/javascripts/player.ts": 
    /*!***********************************!*\
      !*** ./src/javascripts/player.ts ***!
      \***********************************/
    /*! exports provided: Player */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function () { return Player; });
        /* harmony import */ var _entities_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entities/box */ "./src/javascripts/entities/box.ts");
        /* harmony import */ var _engine_entityManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engine/entityManager */ "./src/javascripts/engine/entityManager.ts");
        var __extends = (undefined && undefined.__extends) || (function () {
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            return function (d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
        })();
        var Player = /** @class */ (function (_super) {
            __extends(Player, _super);
            function Player(x, y, z, map) {
                var _this = _super.call(this, x, y, z) || this;
                _this.inputs = _engine_entityManager__WEBPACK_IMPORTED_MODULE_1__["EntityManager"].inputs;
                _this.ySpeed = 0;
                _this.gravity = 0.05;
                _this.grounded = true;
                _this.speed = 0.25;
                _this.sizeX = 1;
                _this.sizeY = 1;
                _this.map = map;
                return _this;
            }
            Player.prototype.handleMovement = function () {
                var moveX = 0;
                var moveY = 0;
                if (this.inputs.LEFT) {
                    moveX -= this.speed;
                }
                if (this.inputs.RIGHT) {
                    moveX += this.speed;
                }
                if (!this.grounded) {
                    moveY += this.ySpeed;
                    this.ySpeed -= this.gravity;
                }
                else {
                    this.ySpeed = 0;
                }
                if (this.grounded && this.inputs.UP) {
                    this.ySpeed = 1;
                    this.grounded = false;
                }
                this.move(moveX, moveY);
            };
            Player.prototype.move = function (moveX, moveY) {
                var location = this.getTileLocation();
                var xTile = location[0];
                var yTile = location[1];
                var downTileOccupied = this.getMapTile(xTile, yTile + 1) != 0;
                console.log(downTileOccupied);
                if (downTileOccupied) {
                    var tileOccupation = (this.sizeY / 2);
                    if (tileOccupation + moveY + (this.y % 1) > 0.5) {
                        this.grounded = true;
                        moveY = 0;
                        this.y = yTile + 0.5;
                    }
                }
                else {
                    this.grounded = false;
                }
                this.x += moveX;
                this.y += moveY;
            };
            Player.prototype.getMapTile = function (x, y) {
                var tile = 0;
                if (this.map[-y] != undefined && this.map[-y + 2][x] != undefined) {
                    tile = this.map[-y + 2][x];
                }
                return tile;
            };
            Player.prototype.getTileLocation = function () {
                return [Math.round(this.x) + 4, Math.round(this.y - 1)];
            };
            return Player;
        }(_entities_box__WEBPACK_IMPORTED_MODULE_0__["Box"]));
        /***/ 
    })
    /******/ 
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9lc20vY29tbW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvZXNtL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvZXNtL21hdDIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9lc20vbWF0MmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9lc20vbWF0My5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2wtbWF0cml4L2VzbS9tYXQ0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvZXNtL3F1YXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9lc20vcXVhdDIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9lc20vdmVjMi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2wtbWF0cml4L2VzbS92ZWMzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvZXNtL3ZlYzQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHRzL2VuZ2luZS9idWZmZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0cy9lbmdpbmUvZW50aXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0cy9lbmdpbmUvZW50aXR5TWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdHMvZW5naW5lL2dsRW5naW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0cy9lbmdpbmUvZ2xXaW5kb3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHRzL2VuZ2luZS9yZW5kZXJlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdHMvZW5naW5lL3Jlc291cmNlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdHMvZW5naW5lL3NoYWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdHMvZW50aXRpZXMvYm94LnRzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0cy9nbEFwcGxpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdHMvaW5wdXRzLnRzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0cy9wbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsTUFBTTtBQUNqQixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxLQUFLO0FBQ2YsVUFBVSxLQUFLO0FBQ2Y7QUFDQSxZQUFZLEtBQUs7QUFDakI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLEtBQUs7QUFDZixVQUFVLEtB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REFBbUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsTUFBTTtBQUNqQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQjtBQUNBLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsS0FBSztBQUNoQixhQUFhLE1BQU07QUFDbkI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsT0FBTztBQUNsQixhQUFhLE1BQU07QUFDbkI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGdEQUFZO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsT0FBTztBQUNsQixhQUFhLE1BQU07QUFDbkI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGdEQUFZO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsT0FBTztBQUNsQixhQUFhLE1BQU07QUFDbkI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGdEQUFZO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxN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V0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNB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O0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcs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SztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLEtBQUs7QUFDaEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FB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QWMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRTtnQkFDNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixLQUFLLEdBQUcsQ0FBQztnQkFDVCxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBQyxHQUFHO2FBQ3JCO1NBQ0o7YUFBTTtZQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSztTQUN4QjtRQUVELElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSztJQUNuQixDQUFDO0lBRUQsMkJBQVUsR0FBVixVQUFXLENBQUMsRUFBQyxDQUFDO1FBQ1YsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsSUFBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxFQUFFO1lBQzVELElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzQjtRQUNELE9BQU8sSUFBSTtJQUNmLENBQUM7SUFFRCxnQ0FBZSxHQUFmO1FBQ0ksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDLENBN0VvQixpREFBRyxHQTZFdkI7QUFFYyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qYXZhc2NyaXB0cy9pbmRleC50c1wiKTtcbiIsIi8qKlxyXG4gKiBDb21tb24gdXRpbGl0aWVzXHJcbiAqIEBtb2R1bGUgZ2xNYXRyaXhcclxuICovXG4vLyBDb25maWd1cmF0aW9uIENvbnN0YW50c1xuZXhwb3J0IHZhciBFUFNJTE9OID0gMC4wMDAwMDE7XG5leHBvcnQgdmFyIEFSUkFZX1RZUEUgPSB0eXBlb2YgRmxvYXQzMkFycmF5ICE9PSAndW5kZWZpbmVkJyA/IEZsb2F0MzJBcnJheSA6IEFycmF5O1xuZXhwb3J0IHZhciBSQU5ET00gPSBNYXRoLnJhbmRvbTtcbi8qKlxyXG4gKiBTZXRzIHRoZSB0eXBlIG9mIGFycmF5IHVzZWQgd2hlbiBjcmVhdGluZyBuZXcgdmVjdG9ycyBhbmQgbWF0cmljZXNcclxuICpcclxuICogQHBhcmFtIHtUeXBlfSB0eXBlIEFycmF5IHR5cGUsIHN1Y2ggYXMgRmxvYXQzMkFycmF5IG9yIEFycmF5XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0TWF0cml4QXJyYXlUeXBlKHR5cGUpIHtcbiAgQVJSQVlfVFlQRSA9IHR5cGU7XG59XG52YXIgZGVncmVlID0gTWF0aC5QSSAvIDE4MDtcbi8qKlxyXG4gKiBDb252ZXJ0IERlZ3JlZSBUbyBSYWRpYW5cclxuICpcclxuICogQHBhcmFtIHtOdW1iZXJ9IGEgQW5nbGUgaW4gRGVncmVlc1xyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRvUmFkaWFuKGEpIHtcbiAgcmV0dXJuIGEgKiBkZWdyZWU7XG59XG4vKipcclxuICogVGVzdHMgd2hldGhlciBvciBub3QgdGhlIGFyZ3VtZW50cyBoYXZlIGFwcHJveGltYXRlbHkgdGhlIHNhbWUgdmFsdWUsIHdpdGhpbiBhbiBhYnNvbHV0ZVxyXG4gKiBvciByZWxhdGl2ZSB0b2xlcmFuY2Ugb2YgZ2xNYXRyaXguRVBTSUxPTiAoYW4gYWJzb2x1dGUgdG9sZXJhbmNlIGlzIHVzZWQgZm9yIHZhbHVlcyBsZXNzXHJcbiAqIHRoYW4gb3IgZXF1YWwgdG8gMS4wLCBhbmQgYSByZWxhdGl2ZSB0b2xlcmFuY2UgaXMgdXNlZCBmb3IgbGFyZ2VyIHZhbHVlcylcclxuICpcclxuICogQHBhcmFtIHtOdW1iZXJ9IGEgVGhlIGZpcnN0IG51bWJlciB0byB0ZXN0LlxyXG4gKiBAcGFyYW0ge051bWJlcn0gYiBUaGUgc2Vjb25kIG51bWJlciB0byB0ZXN0LlxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgbnVtYmVycyBhcmUgYXBwcm94aW1hdGVseSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhhLCBiKSB7XG4gIHJldHVybiBNYXRoLmFicyhhIC0gYikgPD0gRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYSksIE1hdGguYWJzKGIpKTtcbn0iLCJpbXBvcnQgKiBhcyBnbE1hdHJpeCBmcm9tIFwiLi9jb21tb24uanNcIjtcbmltcG9ydCAqIGFzIG1hdDIgZnJvbSBcIi4vbWF0Mi5qc1wiO1xuaW1wb3J0ICogYXMgbWF0MmQgZnJvbSBcIi4vbWF0MmQuanNcIjtcbmltcG9ydCAqIGFzIG1hdDMgZnJvbSBcIi4vbWF0My5qc1wiO1xuaW1wb3J0ICogYXMgbWF0NCBmcm9tIFwiLi9tYXQ0LmpzXCI7XG5pbXBvcnQgKiBhcyBxdWF0IGZyb20gXCIuL3F1YXQuanNcIjtcbmltcG9ydCAqIGFzIHF1YXQyIGZyb20gXCIuL3F1YXQyLmpzXCI7XG5pbXBvcnQgKiBhcyB2ZWMyIGZyb20gXCIuL3ZlYzIuanNcIjtcbmltcG9ydCAqIGFzIHZlYzMgZnJvbSBcIi4vdmVjMy5qc1wiO1xuaW1wb3J0ICogYXMgdmVjNCBmcm9tIFwiLi92ZWM0LmpzXCI7XG5leHBvcnQgeyBnbE1hdHJpeCwgbWF0MiwgbWF0MmQsIG1hdDMsIG1hdDQsIHF1YXQsIHF1YXQyLCB2ZWMyLCB2ZWMzLCB2ZWM0IH07IiwiaW1wb3J0ICogYXMgZ2xNYXRyaXggZnJvbSBcIi4vY29tbW9uLmpzXCI7XG4vKipcclxuICogMngyIE1hdHJpeFxyXG4gKiBAbW9kdWxlIG1hdDJcclxuICovXG5cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IGlkZW50aXR5IG1hdDJcclxuICpcclxuICogQHJldHVybnMge21hdDJ9IGEgbmV3IDJ4MiBtYXRyaXhcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gIHZhciBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSg0KTtcblxuICBpZiAoZ2xNYXRyaXguQVJSQVlfVFlQRSAhPSBGbG9hdDMyQXJyYXkpIHtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gIH1cblxuICBvdXRbMF0gPSAxO1xuICBvdXRbM10gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgbWF0MiBpbml0aWFsaXplZCB3aXRoIHZhbHVlcyBmcm9tIGFuIGV4aXN0aW5nIG1hdHJpeFxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDJ9IGEgbWF0cml4IHRvIGNsb25lXHJcbiAqIEByZXR1cm5zIHttYXQyfSBhIG5ldyAyeDIgbWF0cml4XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUoYSkge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoNCk7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIG91dFszXSA9IGFbM107XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIG1hdDIgdG8gYW5vdGhlclxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDJ9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge21hdDJ9IGEgdGhlIHNvdXJjZSBtYXRyaXhcclxuICogQHJldHVybnMge21hdDJ9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIG91dFszXSA9IGFbM107XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogU2V0IGEgbWF0MiB0byB0aGUgaWRlbnRpdHkgbWF0cml4XHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0Mn0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEByZXR1cm5zIHttYXQyfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eShvdXQpIHtcbiAgb3V0WzBdID0gMTtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGUgYSBuZXcgbWF0MiB3aXRoIHRoZSBnaXZlbiB2YWx1ZXNcclxuICpcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMCBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAwKVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTAxIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDEgcG9zaXRpb24gKGluZGV4IDEpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTAgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggMilcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMSBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAzKVxyXG4gKiBAcmV0dXJucyB7bWF0Mn0gb3V0IEEgbmV3IDJ4MiBtYXRyaXhcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tVmFsdWVzKG0wMCwgbTAxLCBtMTAsIG0xMSkge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoNCk7XG4gIG91dFswXSA9IG0wMDtcbiAgb3V0WzFdID0gbTAxO1xuICBvdXRbMl0gPSBtMTA7XG4gIG91dFszXSA9IG0xMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSBtYXQyIHRvIHRoZSBnaXZlbiB2YWx1ZXNcclxuICpcclxuICogQHBhcmFtIHttYXQyfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMCBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAwKVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTAxIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDEgcG9zaXRpb24gKGluZGV4IDEpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTAgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggMilcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMSBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAzKVxyXG4gKiBAcmV0dXJucyB7bWF0Mn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0KG91dCwgbTAwLCBtMDEsIG0xMCwgbTExKSB7XG4gIG91dFswXSA9IG0wMDtcbiAgb3V0WzFdID0gbTAxO1xuICBvdXRbMl0gPSBtMTA7XG4gIG91dFszXSA9IG0xMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBUcmFuc3Bvc2UgdGhlIHZhbHVlcyBvZiBhIG1hdDJcclxuICpcclxuICogQHBhcmFtIHttYXQyfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHttYXQyfSBhIHRoZSBzb3VyY2UgbWF0cml4XHJcbiAqIEByZXR1cm5zIHttYXQyfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc3Bvc2Uob3V0LCBhKSB7XG4gIC8vIElmIHdlIGFyZSB0cmFuc3Bvc2luZyBvdXJzZWx2ZXMgd2UgY2FuIHNraXAgYSBmZXcgc3RlcHMgYnV0IGhhdmUgdG8gY2FjaGVcbiAgLy8gc29tZSB2YWx1ZXNcbiAgaWYgKG91dCA9PT0gYSkge1xuICAgIHZhciBhMSA9IGFbMV07XG4gICAgb3V0WzFdID0gYVsyXTtcbiAgICBvdXRbMl0gPSBhMTtcbiAgfSBlbHNlIHtcbiAgICBvdXRbMF0gPSBhWzBdO1xuICAgIG91dFsxXSA9IGFbMl07XG4gICAgb3V0WzJdID0gYVsxXTtcbiAgICBvdXRbM10gPSBhWzNdO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBJbnZlcnRzIGEgbWF0MlxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDJ9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge21hdDJ9IGEgdGhlIHNvdXJjZSBtYXRyaXhcclxuICogQHJldHVybnMge21hdDJ9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGludmVydChvdXQsIGEpIHtcbiAgdmFyIGEwID0gYVswXSxcbiAgICAgIGExID0gYVsxXSxcbiAgICAgIGEyID0gYVsyXSxcbiAgICAgIGEzID0gYVszXTsgLy8gQ2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudFxuXG4gIHZhciBkZXQgPSBhMCAqIGEzIC0gYTIgKiBhMTtcblxuICBpZiAoIWRldCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZGV0ID0gMS4wIC8gZGV0O1xuICBvdXRbMF0gPSBhMyAqIGRldDtcbiAgb3V0WzFdID0gLWExICogZGV0O1xuICBvdXRbMl0gPSAtYTIgKiBkZXQ7XG4gIG91dFszXSA9IGEwICogZGV0O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIGFkanVnYXRlIG9mIGEgbWF0MlxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDJ9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge21hdDJ9IGEgdGhlIHNvdXJjZSBtYXRyaXhcclxuICogQHJldHVybnMge21hdDJ9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGFkam9pbnQob3V0LCBhKSB7XG4gIC8vIENhY2hpbmcgdGhpcyB2YWx1ZSBpcyBuZXNzZWNhcnkgaWYgb3V0ID09IGFcbiAgdmFyIGEwID0gYVswXTtcbiAgb3V0WzBdID0gYVszXTtcbiAgb3V0WzFdID0gLWFbMV07XG4gIG91dFsyXSA9IC1hWzJdO1xuICBvdXRbM10gPSBhMDtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBkZXRlcm1pbmFudCBvZiBhIG1hdDJcclxuICpcclxuICogQHBhcmFtIHttYXQyfSBhIHRoZSBzb3VyY2UgbWF0cml4XHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRldGVybWluYW50IG9mIGFcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkZXRlcm1pbmFudChhKSB7XG4gIHJldHVybiBhWzBdICogYVszXSAtIGFbMl0gKiBhWzFdO1xufVxuLyoqXHJcbiAqIE11bHRpcGxpZXMgdHdvIG1hdDInc1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDJ9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge21hdDJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHttYXQyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7bWF0Mn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gIHZhciBhMCA9IGFbMF0sXG4gICAgICBhMSA9IGFbMV0sXG4gICAgICBhMiA9IGFbMl0sXG4gICAgICBhMyA9IGFbM107XG4gIHZhciBiMCA9IGJbMF0sXG4gICAgICBiMSA9IGJbMV0sXG4gICAgICBiMiA9IGJbMl0sXG4gICAgICBiMyA9IGJbM107XG4gIG91dFswXSA9IGEwICogYjAgKyBhMiAqIGIxO1xuICBvdXRbMV0gPSBhMSAqIGIwICsgYTMgKiBiMTtcbiAgb3V0WzJdID0gYTAgKiBiMiArIGEyICogYjM7XG4gIG91dFszXSA9IGExICogYjIgKyBhMyAqIGIzO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJvdGF0ZXMgYSBtYXQyIGJ5IHRoZSBnaXZlbiBhbmdsZVxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDJ9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge21hdDJ9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcclxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcclxuICogQHJldHVybnMge21hdDJ9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZShvdXQsIGEsIHJhZCkge1xuICB2YXIgYTAgPSBhWzBdLFxuICAgICAgYTEgPSBhWzFdLFxuICAgICAgYTIgPSBhWzJdLFxuICAgICAgYTMgPSBhWzNdO1xuICB2YXIgcyA9IE1hdGguc2luKHJhZCk7XG4gIHZhciBjID0gTWF0aC5jb3MocmFkKTtcbiAgb3V0WzBdID0gYTAgKiBjICsgYTIgKiBzO1xuICBvdXRbMV0gPSBhMSAqIGMgKyBhMyAqIHM7XG4gIG91dFsyXSA9IGEwICogLXMgKyBhMiAqIGM7XG4gIG91dFszXSA9IGExICogLXMgKyBhMyAqIGM7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogU2NhbGVzIHRoZSBtYXQyIGJ5IHRoZSBkaW1lbnNpb25zIGluIHRoZSBnaXZlbiB2ZWMyXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0Mn0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7bWF0Mn0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxyXG4gKiBAcGFyYW0ge3ZlYzJ9IHYgdGhlIHZlYzIgdG8gc2NhbGUgdGhlIG1hdHJpeCBieVxyXG4gKiBAcmV0dXJucyB7bWF0Mn0gb3V0XHJcbiAqKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlKG91dCwgYSwgdikge1xuICB2YXIgYTAgPSBhWzBdLFxuICAgICAgYTEgPSBhWzFdLFxuICAgICAgYTIgPSBhWzJdLFxuICAgICAgYTMgPSBhWzNdO1xuICB2YXIgdjAgPSB2WzBdLFxuICAgICAgdjEgPSB2WzFdO1xuICBvdXRbMF0gPSBhMCAqIHYwO1xuICBvdXRbMV0gPSBhMSAqIHYwO1xuICBvdXRbMl0gPSBhMiAqIHYxO1xuICBvdXRbM10gPSBhMyAqIHYxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIGdpdmVuIGFuZ2xlXHJcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxyXG4gKlxyXG4gKiAgICAgbWF0Mi5pZGVudGl0eShkZXN0KTtcclxuICogICAgIG1hdDIucm90YXRlKGRlc3QsIGRlc3QsIHJhZCk7XHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0Mn0gb3V0IG1hdDIgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcclxuICogQHJldHVybnMge21hdDJ9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21Sb3RhdGlvbihvdXQsIHJhZCkge1xuICB2YXIgcyA9IE1hdGguc2luKHJhZCk7XG4gIHZhciBjID0gTWF0aC5jb3MocmFkKTtcbiAgb3V0WzBdID0gYztcbiAgb3V0WzFdID0gcztcbiAgb3V0WzJdID0gLXM7XG4gIG91dFszXSA9IGM7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgdmVjdG9yIHNjYWxpbmdcclxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XHJcbiAqXHJcbiAqICAgICBtYXQyLmlkZW50aXR5KGRlc3QpO1xyXG4gKiAgICAgbWF0Mi5zY2FsZShkZXN0LCBkZXN0LCB2ZWMpO1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDJ9IG91dCBtYXQyIHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XHJcbiAqIEBwYXJhbSB7dmVjMn0gdiBTY2FsaW5nIHZlY3RvclxyXG4gKiBAcmV0dXJucyB7bWF0Mn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVNjYWxpbmcob3V0LCB2KSB7XG4gIG91dFswXSA9IHZbMF07XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IHZbMV07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIG1hdDJcclxuICpcclxuICogQHBhcmFtIHttYXQyfSBhIG1hdHJpeCB0byByZXByZXNlbnQgYXMgYSBzdHJpbmdcclxuICogQHJldHVybnMge1N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBtYXRyaXhcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzdHIoYSkge1xuICByZXR1cm4gJ21hdDIoJyArIGFbMF0gKyAnLCAnICsgYVsxXSArICcsICcgKyBhWzJdICsgJywgJyArIGFbM10gKyAnKSc7XG59XG4vKipcclxuICogUmV0dXJucyBGcm9iZW5pdXMgbm9ybSBvZiBhIG1hdDJcclxuICpcclxuICogQHBhcmFtIHttYXQyfSBhIHRoZSBtYXRyaXggdG8gY2FsY3VsYXRlIEZyb2Jlbml1cyBub3JtIG9mXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IEZyb2Jlbml1cyBub3JtXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvYihhKSB7XG4gIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coYVswXSwgMikgKyBNYXRoLnBvdyhhWzFdLCAyKSArIE1hdGgucG93KGFbMl0sIDIpICsgTWF0aC5wb3coYVszXSwgMikpO1xufVxuLyoqXHJcbiAqIFJldHVybnMgTCwgRCBhbmQgVSBtYXRyaWNlcyAoTG93ZXIgdHJpYW5ndWxhciwgRGlhZ29uYWwgYW5kIFVwcGVyIHRyaWFuZ3VsYXIpIGJ5IGZhY3Rvcml6aW5nIHRoZSBpbnB1dCBtYXRyaXhcclxuICogQHBhcmFtIHttYXQyfSBMIHRoZSBsb3dlciB0cmlhbmd1bGFyIG1hdHJpeFxyXG4gKiBAcGFyYW0ge21hdDJ9IEQgdGhlIGRpYWdvbmFsIG1hdHJpeFxyXG4gKiBAcGFyYW0ge21hdDJ9IFUgdGhlIHVwcGVyIHRyaWFuZ3VsYXIgbWF0cml4XHJcbiAqIEBwYXJhbSB7bWF0Mn0gYSB0aGUgaW5wdXQgbWF0cml4IHRvIGZhY3Rvcml6ZVxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIExEVShMLCBELCBVLCBhKSB7XG4gIExbMl0gPSBhWzJdIC8gYVswXTtcbiAgVVswXSA9IGFbMF07XG4gIFVbMV0gPSBhWzFdO1xuICBVWzNdID0gYVszXSAtIExbMl0gKiBVWzFdO1xuICByZXR1cm4gW0wsIEQsIFVdO1xufVxuLyoqXHJcbiAqIEFkZHMgdHdvIG1hdDInc1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDJ9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge21hdDJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHttYXQyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7bWF0Mn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXTtcbiAgb3V0WzFdID0gYVsxXSArIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gKyBiWzJdO1xuICBvdXRbM10gPSBhWzNdICsgYlszXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTdWJ0cmFjdHMgbWF0cml4IGIgZnJvbSBtYXRyaXggYVxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDJ9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge21hdDJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHttYXQyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7bWF0Mn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3Qob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLSBiWzBdO1xuICBvdXRbMV0gPSBhWzFdIC0gYlsxXTtcbiAgb3V0WzJdID0gYVsyXSAtIGJbMl07XG4gIG91dFszXSA9IGFbM10gLSBiWzNdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIG1hdHJpY2VzIGhhdmUgZXhhY3RseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbiAod2hlbiBjb21wYXJlZCB3aXRoID09PSlcclxuICpcclxuICogQHBhcmFtIHttYXQyfSBhIFRoZSBmaXJzdCBtYXRyaXguXHJcbiAqIEBwYXJhbSB7bWF0Mn0gYiBUaGUgc2Vjb25kIG1hdHJpeC5cclxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIG1hdHJpY2VzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGV4YWN0RXF1YWxzKGEsIGIpIHtcbiAgcmV0dXJuIGFbMF0gPT09IGJbMF0gJiYgYVsxXSA9PT0gYlsxXSAmJiBhWzJdID09PSBiWzJdICYmIGFbM10gPT09IGJbM107XG59XG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgbWF0cmljZXMgaGF2ZSBhcHByb3hpbWF0ZWx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uLlxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDJ9IGEgVGhlIGZpcnN0IG1hdHJpeC5cclxuICogQHBhcmFtIHttYXQyfSBiIFRoZSBzZWNvbmQgbWF0cml4LlxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgbWF0cmljZXMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgdmFyIGEwID0gYVswXSxcbiAgICAgIGExID0gYVsxXSxcbiAgICAgIGEyID0gYVsyXSxcbiAgICAgIGEzID0gYVszXTtcbiAgdmFyIGIwID0gYlswXSxcbiAgICAgIGIxID0gYlsxXSxcbiAgICAgIGIyID0gYlsyXSxcbiAgICAgIGIzID0gYlszXTtcbiAgcmV0dXJuIE1hdGguYWJzKGEwIC0gYjApIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEwKSwgTWF0aC5hYnMoYjApKSAmJiBNYXRoLmFicyhhMSAtIGIxKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMSksIE1hdGguYWJzKGIxKSkgJiYgTWF0aC5hYnMoYTIgLSBiMikgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTIpLCBNYXRoLmFicyhiMikpICYmIE1hdGguYWJzKGEzIC0gYjMpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEzKSwgTWF0aC5hYnMoYjMpKTtcbn1cbi8qKlxyXG4gKiBNdWx0aXBseSBlYWNoIGVsZW1lbnQgb2YgdGhlIG1hdHJpeCBieSBhIHNjYWxhci5cclxuICpcclxuICogQHBhcmFtIHttYXQyfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHttYXQyfSBhIHRoZSBtYXRyaXggdG8gc2NhbGVcclxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSBtYXRyaXgncyBlbGVtZW50cyBieVxyXG4gKiBAcmV0dXJucyB7bWF0Mn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHlTY2FsYXIob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKiBiO1xuICBvdXRbMV0gPSBhWzFdICogYjtcbiAgb3V0WzJdID0gYVsyXSAqIGI7XG4gIG91dFszXSA9IGFbM10gKiBiO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIEFkZHMgdHdvIG1hdDIncyBhZnRlciBtdWx0aXBseWluZyBlYWNoIGVsZW1lbnQgb2YgdGhlIHNlY29uZCBvcGVyYW5kIGJ5IGEgc2NhbGFyIHZhbHVlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge21hdDJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHttYXQyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGUgdGhlIGFtb3VudCB0byBzY2FsZSBiJ3MgZWxlbWVudHMgYnkgYmVmb3JlIGFkZGluZ1xyXG4gKiBAcmV0dXJucyB7bWF0Mn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHlTY2FsYXJBbmRBZGQob3V0LCBhLCBiLCBzY2FsZSkge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXSAqIHNjYWxlO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXSAqIHNjYWxlO1xuICBvdXRbMl0gPSBhWzJdICsgYlsyXSAqIHNjYWxlO1xuICBvdXRbM10gPSBhWzNdICsgYlszXSAqIHNjYWxlO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgbWF0Mi5tdWx0aXBseX1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIG11bCA9IG11bHRpcGx5O1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgbWF0Mi5zdWJ0cmFjdH1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIHN1YiA9IHN1YnRyYWN0OyIsImltcG9ydCAqIGFzIGdsTWF0cml4IGZyb20gXCIuL2NvbW1vbi5qc1wiO1xuLyoqXHJcbiAqIDJ4MyBNYXRyaXhcclxuICogQG1vZHVsZSBtYXQyZFxyXG4gKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBtYXQyZCBjb250YWlucyBzaXggZWxlbWVudHMgZGVmaW5lZCBhczpcclxuICogPHByZT5cclxuICogW2EsIGMsIHR4LFxyXG4gKiAgYiwgZCwgdHldXHJcbiAqIDwvcHJlPlxyXG4gKiBUaGlzIGlzIGEgc2hvcnQgZm9ybSBmb3IgdGhlIDN4MyBtYXRyaXg6XHJcbiAqIDxwcmU+XHJcbiAqIFthLCBjLCB0eCxcclxuICogIGIsIGQsIHR5LFxyXG4gKiAgMCwgMCwgMV1cclxuICogPC9wcmU+XHJcbiAqIFRoZSBsYXN0IHJvdyBpcyBpZ25vcmVkIHNvIHRoZSBhcnJheSBpcyBzaG9ydGVyIGFuZCBvcGVyYXRpb25zIGFyZSBmYXN0ZXIuXHJcbiAqL1xuXG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyBpZGVudGl0eSBtYXQyZFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7bWF0MmR9IGEgbmV3IDJ4MyBtYXRyaXhcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gIHZhciBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSg2KTtcblxuICBpZiAoZ2xNYXRyaXguQVJSQVlfVFlQRSAhPSBGbG9hdDMyQXJyYXkpIHtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzRdID0gMDtcbiAgICBvdXRbNV0gPSAwO1xuICB9XG5cbiAgb3V0WzBdID0gMTtcbiAgb3V0WzNdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IG1hdDJkIGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgbWF0cml4XHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0MmR9IGEgbWF0cml4IHRvIGNsb25lXHJcbiAqIEByZXR1cm5zIHttYXQyZH0gYSBuZXcgMngzIG1hdHJpeFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKGEpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDYpO1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICBvdXRbMl0gPSBhWzJdO1xuICBvdXRbM10gPSBhWzNdO1xuICBvdXRbNF0gPSBhWzRdO1xuICBvdXRbNV0gPSBhWzVdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSBtYXQyZCB0byBhbm90aGVyXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0MmR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge21hdDJkfSBhIHRoZSBzb3VyY2UgbWF0cml4XHJcbiAqIEByZXR1cm5zIHttYXQyZH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY29weShvdXQsIGEpIHtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgb3V0WzNdID0gYVszXTtcbiAgb3V0WzRdID0gYVs0XTtcbiAgb3V0WzVdID0gYVs1XTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTZXQgYSBtYXQyZCB0byB0aGUgaWRlbnRpdHkgbWF0cml4XHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0MmR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcmV0dXJucyB7bWF0MmR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5KG91dCkge1xuICBvdXRbMF0gPSAxO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAxO1xuICBvdXRbNF0gPSAwO1xuICBvdXRbNV0gPSAwO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZSBhIG5ldyBtYXQyZCB3aXRoIHRoZSBnaXZlbiB2YWx1ZXNcclxuICpcclxuICogQHBhcmFtIHtOdW1iZXJ9IGEgQ29tcG9uZW50IEEgKGluZGV4IDApXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBiIENvbXBvbmVudCBCIChpbmRleCAxKVxyXG4gKiBAcGFyYW0ge051bWJlcn0gYyBDb21wb25lbnQgQyAoaW5kZXggMilcclxuICogQHBhcmFtIHtOdW1iZXJ9IGQgQ29tcG9uZW50IEQgKGluZGV4IDMpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB0eCBDb21wb25lbnQgVFggKGluZGV4IDQpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB0eSBDb21wb25lbnQgVFkgKGluZGV4IDUpXHJcbiAqIEByZXR1cm5zIHttYXQyZH0gQSBuZXcgbWF0MmRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tVmFsdWVzKGEsIGIsIGMsIGQsIHR4LCB0eSkge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoNik7XG4gIG91dFswXSA9IGE7XG4gIG91dFsxXSA9IGI7XG4gIG91dFsyXSA9IGM7XG4gIG91dFszXSA9IGQ7XG4gIG91dFs0XSA9IHR4O1xuICBvdXRbNV0gPSB0eTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSBtYXQyZCB0byB0aGUgZ2l2ZW4gdmFsdWVzXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0MmR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge051bWJlcn0gYSBDb21wb25lbnQgQSAoaW5kZXggMClcclxuICogQHBhcmFtIHtOdW1iZXJ9IGIgQ29tcG9uZW50IEIgKGluZGV4IDEpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBjIENvbXBvbmVudCBDIChpbmRleCAyKVxyXG4gKiBAcGFyYW0ge051bWJlcn0gZCBDb21wb25lbnQgRCAoaW5kZXggMylcclxuICogQHBhcmFtIHtOdW1iZXJ9IHR4IENvbXBvbmVudCBUWCAoaW5kZXggNClcclxuICogQHBhcmFtIHtOdW1iZXJ9IHR5IENvbXBvbmVudCBUWSAoaW5kZXggNSlcclxuICogQHJldHVybnMge21hdDJkfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQob3V0LCBhLCBiLCBjLCBkLCB0eCwgdHkpIHtcbiAgb3V0WzBdID0gYTtcbiAgb3V0WzFdID0gYjtcbiAgb3V0WzJdID0gYztcbiAgb3V0WzNdID0gZDtcbiAgb3V0WzRdID0gdHg7XG4gIG91dFs1XSA9IHR5O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIEludmVydHMgYSBtYXQyZFxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDJkfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHttYXQyZH0gYSB0aGUgc291cmNlIG1hdHJpeFxyXG4gKiBAcmV0dXJucyB7bWF0MmR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGludmVydChvdXQsIGEpIHtcbiAgdmFyIGFhID0gYVswXSxcbiAgICAgIGFiID0gYVsxXSxcbiAgICAgIGFjID0gYVsyXSxcbiAgICAgIGFkID0gYVszXTtcbiAgdmFyIGF0eCA9IGFbNF0sXG4gICAgICBhdHkgPSBhWzVdO1xuICB2YXIgZGV0ID0gYWEgKiBhZCAtIGFiICogYWM7XG5cbiAgaWYgKCFkZXQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGRldCA9IDEuMCAvIGRldDtcbiAgb3V0WzBdID0gYWQgKiBkZXQ7XG4gIG91dFsxXSA9IC1hYiAqIGRldDtcbiAgb3V0WzJdID0gLWFjICogZGV0O1xuICBvdXRbM10gPSBhYSAqIGRldDtcbiAgb3V0WzRdID0gKGFjICogYXR5IC0gYWQgKiBhdHgpICogZGV0O1xuICBvdXRbNV0gPSAoYWIgKiBhdHggLSBhYSAqIGF0eSkgKiBkZXQ7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgZGV0ZXJtaW5hbnQgb2YgYSBtYXQyZFxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDJkfSBhIHRoZSBzb3VyY2UgbWF0cml4XHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRldGVybWluYW50IG9mIGFcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkZXRlcm1pbmFudChhKSB7XG4gIHJldHVybiBhWzBdICogYVszXSAtIGFbMV0gKiBhWzJdO1xufVxuLyoqXHJcbiAqIE11bHRpcGxpZXMgdHdvIG1hdDJkJ3NcclxuICpcclxuICogQHBhcmFtIHttYXQyZH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7bWF0MmR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHttYXQyZH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge21hdDJkfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgdmFyIGEwID0gYVswXSxcbiAgICAgIGExID0gYVsxXSxcbiAgICAgIGEyID0gYVsyXSxcbiAgICAgIGEzID0gYVszXSxcbiAgICAgIGE0ID0gYVs0XSxcbiAgICAgIGE1ID0gYVs1XTtcbiAgdmFyIGIwID0gYlswXSxcbiAgICAgIGIxID0gYlsxXSxcbiAgICAgIGIyID0gYlsyXSxcbiAgICAgIGIzID0gYlszXSxcbiAgICAgIGI0ID0gYls0XSxcbiAgICAgIGI1ID0gYls1XTtcbiAgb3V0WzBdID0gYTAgKiBiMCArIGEyICogYjE7XG4gIG91dFsxXSA9IGExICogYjAgKyBhMyAqIGIxO1xuICBvdXRbMl0gPSBhMCAqIGIyICsgYTIgKiBiMztcbiAgb3V0WzNdID0gYTEgKiBiMiArIGEzICogYjM7XG4gIG91dFs0XSA9IGEwICogYjQgKyBhMiAqIGI1ICsgYTQ7XG4gIG91dFs1XSA9IGExICogYjQgKyBhMyAqIGI1ICsgYTU7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUm90YXRlcyBhIG1hdDJkIGJ5IHRoZSBnaXZlbiBhbmdsZVxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDJkfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHttYXQyZH0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxyXG4gKiBAcmV0dXJucyB7bWF0MmR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZShvdXQsIGEsIHJhZCkge1xuICB2YXIgYTAgPSBhWzBdLFxuICAgICAgYTEgPSBhWzFdLFxuICAgICAgYTIgPSBhWzJdLFxuICAgICAgYTMgPSBhWzNdLFxuICAgICAgYTQgPSBhWzRdLFxuICAgICAgYTUgPSBhWzVdO1xuICB2YXIgcyA9IE1hdGguc2luKHJhZCk7XG4gIHZhciBjID0gTWF0aC5jb3MocmFkKTtcbiAgb3V0WzBdID0gYTAgKiBjICsgYTIgKiBzO1xuICBvdXRbMV0gPSBhMSAqIGMgKyBhMyAqIHM7XG4gIG91dFsyXSA9IGEwICogLXMgKyBhMiAqIGM7XG4gIG91dFszXSA9IGExICogLXMgKyBhMyAqIGM7XG4gIG91dFs0XSA9IGE0O1xuICBvdXRbNV0gPSBhNTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTY2FsZXMgdGhlIG1hdDJkIGJ5IHRoZSBkaW1lbnNpb25zIGluIHRoZSBnaXZlbiB2ZWMyXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0MmR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge21hdDJkfSBhIHRoZSBtYXRyaXggdG8gdHJhbnNsYXRlXHJcbiAqIEBwYXJhbSB7dmVjMn0gdiB0aGUgdmVjMiB0byBzY2FsZSB0aGUgbWF0cml4IGJ5XHJcbiAqIEByZXR1cm5zIHttYXQyZH0gb3V0XHJcbiAqKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlKG91dCwgYSwgdikge1xuICB2YXIgYTAgPSBhWzBdLFxuICAgICAgYTEgPSBhWzFdLFxuICAgICAgYTIgPSBhWzJdLFxuICAgICAgYTMgPSBhWzNdLFxuICAgICAgYTQgPSBhWzRdLFxuICAgICAgYTUgPSBhWzVdO1xuICB2YXIgdjAgPSB2WzBdLFxuICAgICAgdjEgPSB2WzFdO1xuICBvdXRbMF0gPSBhMCAqIHYwO1xuICBvdXRbMV0gPSBhMSAqIHYwO1xuICBvdXRbMl0gPSBhMiAqIHYxO1xuICBvdXRbM10gPSBhMyAqIHYxO1xuICBvdXRbNF0gPSBhNDtcbiAgb3V0WzVdID0gYTU7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogVHJhbnNsYXRlcyB0aGUgbWF0MmQgYnkgdGhlIGRpbWVuc2lvbnMgaW4gdGhlIGdpdmVuIHZlYzJcclxuICpcclxuICogQHBhcmFtIHttYXQyZH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7bWF0MmR9IGEgdGhlIG1hdHJpeCB0byB0cmFuc2xhdGVcclxuICogQHBhcmFtIHt2ZWMyfSB2IHRoZSB2ZWMyIHRvIHRyYW5zbGF0ZSB0aGUgbWF0cml4IGJ5XHJcbiAqIEByZXR1cm5zIHttYXQyZH0gb3V0XHJcbiAqKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZShvdXQsIGEsIHYpIHtcbiAgdmFyIGEwID0gYVswXSxcbiAgICAgIGExID0gYVsxXSxcbiAgICAgIGEyID0gYVsyXSxcbiAgICAgIGEzID0gYVszXSxcbiAgICAgIGE0ID0gYVs0XSxcbiAgICAgIGE1ID0gYVs1XTtcbiAgdmFyIHYwID0gdlswXSxcbiAgICAgIHYxID0gdlsxXTtcbiAgb3V0WzBdID0gYTA7XG4gIG91dFsxXSA9IGExO1xuICBvdXRbMl0gPSBhMjtcbiAgb3V0WzNdID0gYTM7XG4gIG91dFs0XSA9IGEwICogdjAgKyBhMiAqIHYxICsgYTQ7XG4gIG91dFs1XSA9IGExICogdjAgKyBhMyAqIHYxICsgYTU7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgZ2l2ZW4gYW5nbGVcclxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XHJcbiAqXHJcbiAqICAgICBtYXQyZC5pZGVudGl0eShkZXN0KTtcclxuICogICAgIG1hdDJkLnJvdGF0ZShkZXN0LCBkZXN0LCByYWQpO1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDJkfSBvdXQgbWF0MmQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcclxuICogQHJldHVybnMge21hdDJkfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUm90YXRpb24ob3V0LCByYWQpIHtcbiAgdmFyIHMgPSBNYXRoLnNpbihyYWQpLFxuICAgICAgYyA9IE1hdGguY29zKHJhZCk7XG4gIG91dFswXSA9IGM7XG4gIG91dFsxXSA9IHM7XG4gIG91dFsyXSA9IC1zO1xuICBvdXRbM10gPSBjO1xuICBvdXRbNF0gPSAwO1xuICBvdXRbNV0gPSAwO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHZlY3RvciBzY2FsaW5nXHJcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxyXG4gKlxyXG4gKiAgICAgbWF0MmQuaWRlbnRpdHkoZGVzdCk7XHJcbiAqICAgICBtYXQyZC5zY2FsZShkZXN0LCBkZXN0LCB2ZWMpO1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDJkfSBvdXQgbWF0MmQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcclxuICogQHBhcmFtIHt2ZWMyfSB2IFNjYWxpbmcgdmVjdG9yXHJcbiAqIEByZXR1cm5zIHttYXQyZH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVNjYWxpbmcob3V0LCB2KSB7XG4gIG91dFswXSA9IHZbMF07XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IHZbMV07XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IDA7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgdmVjdG9yIHRyYW5zbGF0aW9uXHJcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxyXG4gKlxyXG4gKiAgICAgbWF0MmQuaWRlbnRpdHkoZGVzdCk7XHJcbiAqICAgICBtYXQyZC50cmFuc2xhdGUoZGVzdCwgZGVzdCwgdmVjKTtcclxuICpcclxuICogQHBhcmFtIHttYXQyZH0gb3V0IG1hdDJkIHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XHJcbiAqIEBwYXJhbSB7dmVjMn0gdiBUcmFuc2xhdGlvbiB2ZWN0b3JcclxuICogQHJldHVybnMge21hdDJkfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tVHJhbnNsYXRpb24ob3V0LCB2KSB7XG4gIG91dFswXSA9IDE7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDE7XG4gIG91dFs0XSA9IHZbMF07XG4gIG91dFs1XSA9IHZbMV07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIG1hdDJkXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0MmR9IGEgbWF0cml4IHRvIHJlcHJlc2VudCBhcyBhIHN0cmluZ1xyXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1hdHJpeFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cihhKSB7XG4gIHJldHVybiAnbWF0MmQoJyArIGFbMF0gKyAnLCAnICsgYVsxXSArICcsICcgKyBhWzJdICsgJywgJyArIGFbM10gKyAnLCAnICsgYVs0XSArICcsICcgKyBhWzVdICsgJyknO1xufVxuLyoqXHJcbiAqIFJldHVybnMgRnJvYmVuaXVzIG5vcm0gb2YgYSBtYXQyZFxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDJkfSBhIHRoZSBtYXRyaXggdG8gY2FsY3VsYXRlIEZyb2Jlbml1cyBub3JtIG9mXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IEZyb2Jlbml1cyBub3JtXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvYihhKSB7XG4gIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coYVswXSwgMikgKyBNYXRoLnBvdyhhWzFdLCAyKSArIE1hdGgucG93KGFbMl0sIDIpICsgTWF0aC5wb3coYVszXSwgMikgKyBNYXRoLnBvdyhhWzRdLCAyKSArIE1hdGgucG93KGFbNV0sIDIpICsgMSk7XG59XG4vKipcclxuICogQWRkcyB0d28gbWF0MmQnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDJkfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHttYXQyZH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge21hdDJkfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7bWF0MmR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSArIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gKyBiWzFdO1xuICBvdXRbMl0gPSBhWzJdICsgYlsyXTtcbiAgb3V0WzNdID0gYVszXSArIGJbM107XG4gIG91dFs0XSA9IGFbNF0gKyBiWzRdO1xuICBvdXRbNV0gPSBhWzVdICsgYls1XTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTdWJ0cmFjdHMgbWF0cml4IGIgZnJvbSBtYXRyaXggYVxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDJkfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHttYXQyZH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge21hdDJkfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7bWF0MmR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdIC0gYlswXTtcbiAgb3V0WzFdID0gYVsxXSAtIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gLSBiWzJdO1xuICBvdXRbM10gPSBhWzNdIC0gYlszXTtcbiAgb3V0WzRdID0gYVs0XSAtIGJbNF07XG4gIG91dFs1XSA9IGFbNV0gLSBiWzVdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIE11bHRpcGx5IGVhY2ggZWxlbWVudCBvZiB0aGUgbWF0cml4IGJ5IGEgc2NhbGFyLlxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDJkfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHttYXQyZH0gYSB0aGUgbWF0cml4IHRvIHNjYWxlXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBiIGFtb3VudCB0byBzY2FsZSB0aGUgbWF0cml4J3MgZWxlbWVudHMgYnlcclxuICogQHJldHVybnMge21hdDJkfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseVNjYWxhcihvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAqIGI7XG4gIG91dFsxXSA9IGFbMV0gKiBiO1xuICBvdXRbMl0gPSBhWzJdICogYjtcbiAgb3V0WzNdID0gYVszXSAqIGI7XG4gIG91dFs0XSA9IGFbNF0gKiBiO1xuICBvdXRbNV0gPSBhWzVdICogYjtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBBZGRzIHR3byBtYXQyZCdzIGFmdGVyIG11bHRpcGx5aW5nIGVhY2ggZWxlbWVudCBvZiB0aGUgc2Vjb25kIG9wZXJhbmQgYnkgYSBzY2FsYXIgdmFsdWUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0MmR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge21hdDJkfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7bWF0MmR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZSB0aGUgYW1vdW50IHRvIHNjYWxlIGIncyBlbGVtZW50cyBieSBiZWZvcmUgYWRkaW5nXHJcbiAqIEByZXR1cm5zIHttYXQyZH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHlTY2FsYXJBbmRBZGQob3V0LCBhLCBiLCBzY2FsZSkge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXSAqIHNjYWxlO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXSAqIHNjYWxlO1xuICBvdXRbMl0gPSBhWzJdICsgYlsyXSAqIHNjYWxlO1xuICBvdXRbM10gPSBhWzNdICsgYlszXSAqIHNjYWxlO1xuICBvdXRbNF0gPSBhWzRdICsgYls0XSAqIHNjYWxlO1xuICBvdXRbNV0gPSBhWzVdICsgYls1XSAqIHNjYWxlO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIG1hdHJpY2VzIGhhdmUgZXhhY3RseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbiAod2hlbiBjb21wYXJlZCB3aXRoID09PSlcclxuICpcclxuICogQHBhcmFtIHttYXQyZH0gYSBUaGUgZmlyc3QgbWF0cml4LlxyXG4gKiBAcGFyYW0ge21hdDJkfSBiIFRoZSBzZWNvbmQgbWF0cml4LlxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgbWF0cmljZXMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZXhhY3RFcXVhbHMoYSwgYikge1xuICByZXR1cm4gYVswXSA9PT0gYlswXSAmJiBhWzFdID09PSBiWzFdICYmIGFbMl0gPT09IGJbMl0gJiYgYVszXSA9PT0gYlszXSAmJiBhWzRdID09PSBiWzRdICYmIGFbNV0gPT09IGJbNV07XG59XG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgbWF0cmljZXMgaGF2ZSBhcHByb3hpbWF0ZWx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uLlxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDJkfSBhIFRoZSBmaXJzdCBtYXRyaXguXHJcbiAqIEBwYXJhbSB7bWF0MmR9IGIgVGhlIHNlY29uZCBtYXRyaXguXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBtYXRyaWNlcyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICB2YXIgYTAgPSBhWzBdLFxuICAgICAgYTEgPSBhWzFdLFxuICAgICAgYTIgPSBhWzJdLFxuICAgICAgYTMgPSBhWzNdLFxuICAgICAgYTQgPSBhWzRdLFxuICAgICAgYTUgPSBhWzVdO1xuICB2YXIgYjAgPSBiWzBdLFxuICAgICAgYjEgPSBiWzFdLFxuICAgICAgYjIgPSBiWzJdLFxuICAgICAgYjMgPSBiWzNdLFxuICAgICAgYjQgPSBiWzRdLFxuICAgICAgYjUgPSBiWzVdO1xuICByZXR1cm4gTWF0aC5hYnMoYTAgLSBiMCkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTApLCBNYXRoLmFicyhiMCkpICYmIE1hdGguYWJzKGExIC0gYjEpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExKSwgTWF0aC5hYnMoYjEpKSAmJiBNYXRoLmFicyhhMiAtIGIyKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMiksIE1hdGguYWJzKGIyKSkgJiYgTWF0aC5hYnMoYTMgLSBiMykgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTMpLCBNYXRoLmFicyhiMykpICYmIE1hdGguYWJzKGE0IC0gYjQpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE0KSwgTWF0aC5hYnMoYjQpKSAmJiBNYXRoLmFicyhhNSAtIGI1KSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhNSksIE1hdGguYWJzKGI1KSk7XG59XG4vKipcclxuICogQWxpYXMgZm9yIHtAbGluayBtYXQyZC5tdWx0aXBseX1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIG11bCA9IG11bHRpcGx5O1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgbWF0MmQuc3VidHJhY3R9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBzdWIgPSBzdWJ0cmFjdDsiLCJpbXBvcnQgKiBhcyBnbE1hdHJpeCBmcm9tIFwiLi9jb21tb24uanNcIjtcbi8qKlxyXG4gKiAzeDMgTWF0cml4XHJcbiAqIEBtb2R1bGUgbWF0M1xyXG4gKi9cblxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgaWRlbnRpdHkgbWF0M1xyXG4gKlxyXG4gKiBAcmV0dXJucyB7bWF0M30gYSBuZXcgM3gzIG1hdHJpeFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDkpO1xuXG4gIGlmIChnbE1hdHJpeC5BUlJBWV9UWVBFICE9IEZsb2F0MzJBcnJheSkge1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs1XSA9IDA7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICB9XG5cbiAgb3V0WzBdID0gMTtcbiAgb3V0WzRdID0gMTtcbiAgb3V0WzhdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDb3BpZXMgdGhlIHVwcGVyLWxlZnQgM3gzIHZhbHVlcyBpbnRvIHRoZSBnaXZlbiBtYXQzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIDN4MyBtYXRyaXhcclxuICogQHBhcmFtIHttYXQ0fSBhICAgdGhlIHNvdXJjZSA0eDQgbWF0cml4XHJcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tTWF0NChvdXQsIGEpIHtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgb3V0WzNdID0gYVs0XTtcbiAgb3V0WzRdID0gYVs1XTtcbiAgb3V0WzVdID0gYVs2XTtcbiAgb3V0WzZdID0gYVs4XTtcbiAgb3V0WzddID0gYVs5XTtcbiAgb3V0WzhdID0gYVsxMF07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyBtYXQzIGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgbWF0cml4XHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0M30gYSBtYXRyaXggdG8gY2xvbmVcclxuICogQHJldHVybnMge21hdDN9IGEgbmV3IDN4MyBtYXRyaXhcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShhKSB7XG4gIHZhciBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSg5KTtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgb3V0WzNdID0gYVszXTtcbiAgb3V0WzRdID0gYVs0XTtcbiAgb3V0WzVdID0gYVs1XTtcbiAgb3V0WzZdID0gYVs2XTtcbiAgb3V0WzddID0gYVs3XTtcbiAgb3V0WzhdID0gYVs4XTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgbWF0MyB0byBhbm90aGVyXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgc291cmNlIG1hdHJpeFxyXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY29weShvdXQsIGEpIHtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgb3V0WzNdID0gYVszXTtcbiAgb3V0WzRdID0gYVs0XTtcbiAgb3V0WzVdID0gYVs1XTtcbiAgb3V0WzZdID0gYVs2XTtcbiAgb3V0WzddID0gYVs3XTtcbiAgb3V0WzhdID0gYVs4XTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGUgYSBuZXcgbWF0MyB3aXRoIHRoZSBnaXZlbiB2YWx1ZXNcclxuICpcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMCBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAwKVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTAxIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDEgcG9zaXRpb24gKGluZGV4IDEpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDIgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggMilcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMCBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAzKVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTExIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDEgcG9zaXRpb24gKGluZGV4IDQpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTIgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggNSlcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMCBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAwIHBvc2l0aW9uIChpbmRleCA2KVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTIxIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDEgcG9zaXRpb24gKGluZGV4IDcpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjIgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggOClcclxuICogQHJldHVybnMge21hdDN9IEEgbmV3IG1hdDNcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tVmFsdWVzKG0wMCwgbTAxLCBtMDIsIG0xMCwgbTExLCBtMTIsIG0yMCwgbTIxLCBtMjIpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDkpO1xuICBvdXRbMF0gPSBtMDA7XG4gIG91dFsxXSA9IG0wMTtcbiAgb3V0WzJdID0gbTAyO1xuICBvdXRbM10gPSBtMTA7XG4gIG91dFs0XSA9IG0xMTtcbiAgb3V0WzVdID0gbTEyO1xuICBvdXRbNl0gPSBtMjA7XG4gIG91dFs3XSA9IG0yMTtcbiAgb3V0WzhdID0gbTIyO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIG1hdDMgdG8gdGhlIGdpdmVuIHZhbHVlc1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTAwIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDAgcG9zaXRpb24gKGluZGV4IDApXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDEgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggMSlcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMiBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAyKVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTEwIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDAgcG9zaXRpb24gKGluZGV4IDMpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTEgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggNClcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMiBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAyIHBvc2l0aW9uIChpbmRleCA1KVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTIwIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDAgcG9zaXRpb24gKGluZGV4IDYpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjEgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggNylcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMiBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAyIHBvc2l0aW9uIChpbmRleCA4KVxyXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0KG91dCwgbTAwLCBtMDEsIG0wMiwgbTEwLCBtMTEsIG0xMiwgbTIwLCBtMjEsIG0yMikge1xuICBvdXRbMF0gPSBtMDA7XG4gIG91dFsxXSA9IG0wMTtcbiAgb3V0WzJdID0gbTAyO1xuICBvdXRbM10gPSBtMTA7XG4gIG91dFs0XSA9IG0xMTtcbiAgb3V0WzVdID0gbTEyO1xuICBvdXRbNl0gPSBtMjA7XG4gIG91dFs3XSA9IG0yMTtcbiAgb3V0WzhdID0gbTIyO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFNldCBhIG1hdDMgdG8gdGhlIGlkZW50aXR5IG1hdHJpeFxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkob3V0KSB7XG4gIG91dFswXSA9IDE7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDE7XG4gIG91dFs1XSA9IDA7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogVHJhbnNwb3NlIHRoZSB2YWx1ZXMgb2YgYSBtYXQzXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgc291cmNlIG1hdHJpeFxyXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNwb3NlKG91dCwgYSkge1xuICAvLyBJZiB3ZSBhcmUgdHJhbnNwb3Npbmcgb3Vyc2VsdmVzIHdlIGNhbiBza2lwIGEgZmV3IHN0ZXBzIGJ1dCBoYXZlIHRvIGNhY2hlIHNvbWUgdmFsdWVzXG4gIGlmIChvdXQgPT09IGEpIHtcbiAgICB2YXIgYTAxID0gYVsxXSxcbiAgICAgICAgYTAyID0gYVsyXSxcbiAgICAgICAgYTEyID0gYVs1XTtcbiAgICBvdXRbMV0gPSBhWzNdO1xuICAgIG91dFsyXSA9IGFbNl07XG4gICAgb3V0WzNdID0gYTAxO1xuICAgIG91dFs1XSA9IGFbN107XG4gICAgb3V0WzZdID0gYTAyO1xuICAgIG91dFs3XSA9IGExMjtcbiAgfSBlbHNlIHtcbiAgICBvdXRbMF0gPSBhWzBdO1xuICAgIG91dFsxXSA9IGFbM107XG4gICAgb3V0WzJdID0gYVs2XTtcbiAgICBvdXRbM10gPSBhWzFdO1xuICAgIG91dFs0XSA9IGFbNF07XG4gICAgb3V0WzVdID0gYVs3XTtcbiAgICBvdXRbNl0gPSBhWzJdO1xuICAgIG91dFs3XSA9IGFbNV07XG4gICAgb3V0WzhdID0gYVs4XTtcbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogSW52ZXJ0cyBhIG1hdDNcclxuICpcclxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBzb3VyY2UgbWF0cml4XHJcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQob3V0LCBhKSB7XG4gIHZhciBhMDAgPSBhWzBdLFxuICAgICAgYTAxID0gYVsxXSxcbiAgICAgIGEwMiA9IGFbMl07XG4gIHZhciBhMTAgPSBhWzNdLFxuICAgICAgYTExID0gYVs0XSxcbiAgICAgIGExMiA9IGFbNV07XG4gIHZhciBhMjAgPSBhWzZdLFxuICAgICAgYTIxID0gYVs3XSxcbiAgICAgIGEyMiA9IGFbOF07XG4gIHZhciBiMDEgPSBhMjIgKiBhMTEgLSBhMTIgKiBhMjE7XG4gIHZhciBiMTEgPSAtYTIyICogYTEwICsgYTEyICogYTIwO1xuICB2YXIgYjIxID0gYTIxICogYTEwIC0gYTExICogYTIwOyAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XG5cbiAgdmFyIGRldCA9IGEwMCAqIGIwMSArIGEwMSAqIGIxMSArIGEwMiAqIGIyMTtcblxuICBpZiAoIWRldCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZGV0ID0gMS4wIC8gZGV0O1xuICBvdXRbMF0gPSBiMDEgKiBkZXQ7XG4gIG91dFsxXSA9ICgtYTIyICogYTAxICsgYTAyICogYTIxKSAqIGRldDtcbiAgb3V0WzJdID0gKGExMiAqIGEwMSAtIGEwMiAqIGExMSkgKiBkZXQ7XG4gIG91dFszXSA9IGIxMSAqIGRldDtcbiAgb3V0WzRdID0gKGEyMiAqIGEwMCAtIGEwMiAqIGEyMCkgKiBkZXQ7XG4gIG91dFs1XSA9ICgtYTEyICogYTAwICsgYTAyICogYTEwKSAqIGRldDtcbiAgb3V0WzZdID0gYjIxICogZGV0O1xuICBvdXRbN10gPSAoLWEyMSAqIGEwMCArIGEwMSAqIGEyMCkgKiBkZXQ7XG4gIG91dFs4XSA9IChhMTEgKiBhMDAgLSBhMDEgKiBhMTApICogZGV0O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIGFkanVnYXRlIG9mIGEgbWF0M1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIHNvdXJjZSBtYXRyaXhcclxuICogQHJldHVybnMge21hdDN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGFkam9pbnQob3V0LCBhKSB7XG4gIHZhciBhMDAgPSBhWzBdLFxuICAgICAgYTAxID0gYVsxXSxcbiAgICAgIGEwMiA9IGFbMl07XG4gIHZhciBhMTAgPSBhWzNdLFxuICAgICAgYTExID0gYVs0XSxcbiAgICAgIGExMiA9IGFbNV07XG4gIHZhciBhMjAgPSBhWzZdLFxuICAgICAgYTIxID0gYVs3XSxcbiAgICAgIGEyMiA9IGFbOF07XG4gIG91dFswXSA9IGExMSAqIGEyMiAtIGExMiAqIGEyMTtcbiAgb3V0WzFdID0gYTAyICogYTIxIC0gYTAxICogYTIyO1xuICBvdXRbMl0gPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTE7XG4gIG91dFszXSA9IGExMiAqIGEyMCAtIGExMCAqIGEyMjtcbiAgb3V0WzRdID0gYTAwICogYTIyIC0gYTAyICogYTIwO1xuICBvdXRbNV0gPSBhMDIgKiBhMTAgLSBhMDAgKiBhMTI7XG4gIG91dFs2XSA9IGExMCAqIGEyMSAtIGExMSAqIGEyMDtcbiAgb3V0WzddID0gYTAxICogYTIwIC0gYTAwICogYTIxO1xuICBvdXRbOF0gPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTA7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgZGV0ZXJtaW5hbnQgb2YgYSBtYXQzXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgc291cmNlIG1hdHJpeFxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkZXRlcm1pbmFudCBvZiBhXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZGV0ZXJtaW5hbnQoYSkge1xuICB2YXIgYTAwID0gYVswXSxcbiAgICAgIGEwMSA9IGFbMV0sXG4gICAgICBhMDIgPSBhWzJdO1xuICB2YXIgYTEwID0gYVszXSxcbiAgICAgIGExMSA9IGFbNF0sXG4gICAgICBhMTIgPSBhWzVdO1xuICB2YXIgYTIwID0gYVs2XSxcbiAgICAgIGEyMSA9IGFbN10sXG4gICAgICBhMjIgPSBhWzhdO1xuICByZXR1cm4gYTAwICogKGEyMiAqIGExMSAtIGExMiAqIGEyMSkgKyBhMDEgKiAoLWEyMiAqIGExMCArIGExMiAqIGEyMCkgKyBhMDIgKiAoYTIxICogYTEwIC0gYTExICogYTIwKTtcbn1cbi8qKlxyXG4gKiBNdWx0aXBsaWVzIHR3byBtYXQzJ3NcclxuICpcclxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7bWF0M30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge21hdDN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5KG91dCwgYSwgYikge1xuICB2YXIgYTAwID0gYVswXSxcbiAgICAgIGEwMSA9IGFbMV0sXG4gICAgICBhMDIgPSBhWzJdO1xuICB2YXIgYTEwID0gYVszXSxcbiAgICAgIGExMSA9IGFbNF0sXG4gICAgICBhMTIgPSBhWzVdO1xuICB2YXIgYTIwID0gYVs2XSxcbiAgICAgIGEyMSA9IGFbN10sXG4gICAgICBhMjIgPSBhWzhdO1xuICB2YXIgYjAwID0gYlswXSxcbiAgICAgIGIwMSA9IGJbMV0sXG4gICAgICBiMDIgPSBiWzJdO1xuICB2YXIgYjEwID0gYlszXSxcbiAgICAgIGIxMSA9IGJbNF0sXG4gICAgICBiMTIgPSBiWzVdO1xuICB2YXIgYjIwID0gYls2XSxcbiAgICAgIGIyMSA9IGJbN10sXG4gICAgICBiMjIgPSBiWzhdO1xuICBvdXRbMF0gPSBiMDAgKiBhMDAgKyBiMDEgKiBhMTAgKyBiMDIgKiBhMjA7XG4gIG91dFsxXSA9IGIwMCAqIGEwMSArIGIwMSAqIGExMSArIGIwMiAqIGEyMTtcbiAgb3V0WzJdID0gYjAwICogYTAyICsgYjAxICogYTEyICsgYjAyICogYTIyO1xuICBvdXRbM10gPSBiMTAgKiBhMDAgKyBiMTEgKiBhMTAgKyBiMTIgKiBhMjA7XG4gIG91dFs0XSA9IGIxMCAqIGEwMSArIGIxMSAqIGExMSArIGIxMiAqIGEyMTtcbiAgb3V0WzVdID0gYjEwICogYTAyICsgYjExICogYTEyICsgYjEyICogYTIyO1xuICBvdXRbNl0gPSBiMjAgKiBhMDAgKyBiMjEgKiBhMTAgKyBiMjIgKiBhMjA7XG4gIG91dFs3XSA9IGIyMCAqIGEwMSArIGIyMSAqIGExMSArIGIyMiAqIGEyMTtcbiAgb3V0WzhdID0gYjIwICogYTAyICsgYjIxICogYTEyICsgYjIyICogYTIyO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFRyYW5zbGF0ZSBhIG1hdDMgYnkgdGhlIGdpdmVuIHZlY3RvclxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIG1hdHJpeCB0byB0cmFuc2xhdGVcclxuICogQHBhcmFtIHt2ZWMyfSB2IHZlY3RvciB0byB0cmFuc2xhdGUgYnlcclxuICogQHJldHVybnMge21hdDN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZShvdXQsIGEsIHYpIHtcbiAgdmFyIGEwMCA9IGFbMF0sXG4gICAgICBhMDEgPSBhWzFdLFxuICAgICAgYTAyID0gYVsyXSxcbiAgICAgIGExMCA9IGFbM10sXG4gICAgICBhMTEgPSBhWzRdLFxuICAgICAgYTEyID0gYVs1XSxcbiAgICAgIGEyMCA9IGFbNl0sXG4gICAgICBhMjEgPSBhWzddLFxuICAgICAgYTIyID0gYVs4XSxcbiAgICAgIHggPSB2WzBdLFxuICAgICAgeSA9IHZbMV07XG4gIG91dFswXSA9IGEwMDtcbiAgb3V0WzFdID0gYTAxO1xuICBvdXRbMl0gPSBhMDI7XG4gIG91dFszXSA9IGExMDtcbiAgb3V0WzRdID0gYTExO1xuICBvdXRbNV0gPSBhMTI7XG4gIG91dFs2XSA9IHggKiBhMDAgKyB5ICogYTEwICsgYTIwO1xuICBvdXRbN10gPSB4ICogYTAxICsgeSAqIGExMSArIGEyMTtcbiAgb3V0WzhdID0geCAqIGEwMiArIHkgKiBhMTIgKyBhMjI7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUm90YXRlcyBhIG1hdDMgYnkgdGhlIGdpdmVuIGFuZ2xlXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxyXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlKG91dCwgYSwgcmFkKSB7XG4gIHZhciBhMDAgPSBhWzBdLFxuICAgICAgYTAxID0gYVsxXSxcbiAgICAgIGEwMiA9IGFbMl0sXG4gICAgICBhMTAgPSBhWzNdLFxuICAgICAgYTExID0gYVs0XSxcbiAgICAgIGExMiA9IGFbNV0sXG4gICAgICBhMjAgPSBhWzZdLFxuICAgICAgYTIxID0gYVs3XSxcbiAgICAgIGEyMiA9IGFbOF0sXG4gICAgICBzID0gTWF0aC5zaW4ocmFkKSxcbiAgICAgIGMgPSBNYXRoLmNvcyhyYWQpO1xuICBvdXRbMF0gPSBjICogYTAwICsgcyAqIGExMDtcbiAgb3V0WzFdID0gYyAqIGEwMSArIHMgKiBhMTE7XG4gIG91dFsyXSA9IGMgKiBhMDIgKyBzICogYTEyO1xuICBvdXRbM10gPSBjICogYTEwIC0gcyAqIGEwMDtcbiAgb3V0WzRdID0gYyAqIGExMSAtIHMgKiBhMDE7XG4gIG91dFs1XSA9IGMgKiBhMTIgLSBzICogYTAyO1xuICBvdXRbNl0gPSBhMjA7XG4gIG91dFs3XSA9IGEyMTtcbiAgb3V0WzhdID0gYTIyO1xuICByZXR1cm4gb3V0O1xufVxuO1xuLyoqXHJcbiAqIFNjYWxlcyB0aGUgbWF0MyBieSB0aGUgZGltZW5zaW9ucyBpbiB0aGUgZ2l2ZW4gdmVjMlxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcclxuICogQHBhcmFtIHt2ZWMyfSB2IHRoZSB2ZWMyIHRvIHNjYWxlIHRoZSBtYXRyaXggYnlcclxuICogQHJldHVybnMge21hdDN9IG91dFxyXG4gKiovXG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZShvdXQsIGEsIHYpIHtcbiAgdmFyIHggPSB2WzBdLFxuICAgICAgeSA9IHZbMV07XG4gIG91dFswXSA9IHggKiBhWzBdO1xuICBvdXRbMV0gPSB4ICogYVsxXTtcbiAgb3V0WzJdID0geCAqIGFbMl07XG4gIG91dFszXSA9IHkgKiBhWzNdO1xuICBvdXRbNF0gPSB5ICogYVs0XTtcbiAgb3V0WzVdID0geSAqIGFbNV07XG4gIG91dFs2XSA9IGFbNl07XG4gIG91dFs3XSA9IGFbN107XG4gIG91dFs4XSA9IGFbOF07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgdmVjdG9yIHRyYW5zbGF0aW9uXHJcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxyXG4gKlxyXG4gKiAgICAgbWF0My5pZGVudGl0eShkZXN0KTtcclxuICogICAgIG1hdDMudHJhbnNsYXRlKGRlc3QsIGRlc3QsIHZlYyk7XHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0M30gb3V0IG1hdDMgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcclxuICogQHBhcmFtIHt2ZWMyfSB2IFRyYW5zbGF0aW9uIHZlY3RvclxyXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVRyYW5zbGF0aW9uKG91dCwgdikge1xuICBvdXRbMF0gPSAxO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAxO1xuICBvdXRbNV0gPSAwO1xuICBvdXRbNl0gPSB2WzBdO1xuICBvdXRbN10gPSB2WzFdO1xuICBvdXRbOF0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIGdpdmVuIGFuZ2xlXHJcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxyXG4gKlxyXG4gKiAgICAgbWF0My5pZGVudGl0eShkZXN0KTtcclxuICogICAgIG1hdDMucm90YXRlKGRlc3QsIGRlc3QsIHJhZCk7XHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0M30gb3V0IG1hdDMgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcclxuICogQHJldHVybnMge21hdDN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21Sb3RhdGlvbihvdXQsIHJhZCkge1xuICB2YXIgcyA9IE1hdGguc2luKHJhZCksXG4gICAgICBjID0gTWF0aC5jb3MocmFkKTtcbiAgb3V0WzBdID0gYztcbiAgb3V0WzFdID0gcztcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gLXM7XG4gIG91dFs0XSA9IGM7XG4gIG91dFs1XSA9IDA7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgdmVjdG9yIHNjYWxpbmdcclxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XHJcbiAqXHJcbiAqICAgICBtYXQzLmlkZW50aXR5KGRlc3QpO1xyXG4gKiAgICAgbWF0My5zY2FsZShkZXN0LCBkZXN0LCB2ZWMpO1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDN9IG91dCBtYXQzIHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XHJcbiAqIEBwYXJhbSB7dmVjMn0gdiBTY2FsaW5nIHZlY3RvclxyXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVNjYWxpbmcob3V0LCB2KSB7XG4gIG91dFswXSA9IHZbMF07XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IHZbMV07XG4gIG91dFs1XSA9IDA7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ29waWVzIHRoZSB2YWx1ZXMgZnJvbSBhIG1hdDJkIGludG8gYSBtYXQzXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7bWF0MmR9IGEgdGhlIG1hdHJpeCB0byBjb3B5XHJcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcclxuICoqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbU1hdDJkKG91dCwgYSkge1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSBhWzJdO1xuICBvdXRbNF0gPSBhWzNdO1xuICBvdXRbNV0gPSAwO1xuICBvdXRbNl0gPSBhWzRdO1xuICBvdXRbN10gPSBhWzVdO1xuICBvdXRbOF0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiogQ2FsY3VsYXRlcyBhIDN4MyBtYXRyaXggZnJvbSB0aGUgZ2l2ZW4gcXVhdGVybmlvblxyXG4qXHJcbiogQHBhcmFtIHttYXQzfSBvdXQgbWF0MyByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxyXG4qIEBwYXJhbSB7cXVhdH0gcSBRdWF0ZXJuaW9uIHRvIGNyZWF0ZSBtYXRyaXggZnJvbVxyXG4qXHJcbiogQHJldHVybnMge21hdDN9IG91dFxyXG4qL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVF1YXQob3V0LCBxKSB7XG4gIHZhciB4ID0gcVswXSxcbiAgICAgIHkgPSBxWzFdLFxuICAgICAgeiA9IHFbMl0sXG4gICAgICB3ID0gcVszXTtcbiAgdmFyIHgyID0geCArIHg7XG4gIHZhciB5MiA9IHkgKyB5O1xuICB2YXIgejIgPSB6ICsgejtcbiAgdmFyIHh4ID0geCAqIHgyO1xuICB2YXIgeXggPSB5ICogeDI7XG4gIHZhciB5eSA9IHkgKiB5MjtcbiAgdmFyIHp4ID0geiAqIHgyO1xuICB2YXIgenkgPSB6ICogeTI7XG4gIHZhciB6eiA9IHogKiB6MjtcbiAgdmFyIHd4ID0gdyAqIHgyO1xuICB2YXIgd3kgPSB3ICogeTI7XG4gIHZhciB3eiA9IHcgKiB6MjtcbiAgb3V0WzBdID0gMSAtIHl5IC0geno7XG4gIG91dFszXSA9IHl4IC0gd3o7XG4gIG91dFs2XSA9IHp4ICsgd3k7XG4gIG91dFsxXSA9IHl4ICsgd3o7XG4gIG91dFs0XSA9IDEgLSB4eCAtIHp6O1xuICBvdXRbN10gPSB6eSAtIHd4O1xuICBvdXRbMl0gPSB6eCAtIHd5O1xuICBvdXRbNV0gPSB6eSArIHd4O1xuICBvdXRbOF0gPSAxIC0geHggLSB5eTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4qIENhbGN1bGF0ZXMgYSAzeDMgbm9ybWFsIG1hdHJpeCAodHJhbnNwb3NlIGludmVyc2UpIGZyb20gdGhlIDR4NCBtYXRyaXhcclxuKlxyXG4qIEBwYXJhbSB7bWF0M30gb3V0IG1hdDMgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcclxuKiBAcGFyYW0ge21hdDR9IGEgTWF0NCB0byBkZXJpdmUgdGhlIG5vcm1hbCBtYXRyaXggZnJvbVxyXG4qXHJcbiogQHJldHVybnMge21hdDN9IG91dFxyXG4qL1xuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsRnJvbU1hdDQob3V0LCBhKSB7XG4gIHZhciBhMDAgPSBhWzBdLFxuICAgICAgYTAxID0gYVsxXSxcbiAgICAgIGEwMiA9IGFbMl0sXG4gICAgICBhMDMgPSBhWzNdO1xuICB2YXIgYTEwID0gYVs0XSxcbiAgICAgIGExMSA9IGFbNV0sXG4gICAgICBhMTIgPSBhWzZdLFxuICAgICAgYTEzID0gYVs3XTtcbiAgdmFyIGEyMCA9IGFbOF0sXG4gICAgICBhMjEgPSBhWzldLFxuICAgICAgYTIyID0gYVsxMF0sXG4gICAgICBhMjMgPSBhWzExXTtcbiAgdmFyIGEzMCA9IGFbMTJdLFxuICAgICAgYTMxID0gYVsxM10sXG4gICAgICBhMzIgPSBhWzE0XSxcbiAgICAgIGEzMyA9IGFbMTVdO1xuICB2YXIgYjAwID0gYTAwICogYTExIC0gYTAxICogYTEwO1xuICB2YXIgYjAxID0gYTAwICogYTEyIC0gYTAyICogYTEwO1xuICB2YXIgYjAyID0gYTAwICogYTEzIC0gYTAzICogYTEwO1xuICB2YXIgYjAzID0gYTAxICogYTEyIC0gYTAyICogYTExO1xuICB2YXIgYjA0ID0gYTAxICogYTEzIC0gYTAzICogYTExO1xuICB2YXIgYjA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyO1xuICB2YXIgYjA2ID0gYTIwICogYTMxIC0gYTIxICogYTMwO1xuICB2YXIgYjA3ID0gYTIwICogYTMyIC0gYTIyICogYTMwO1xuICB2YXIgYjA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwO1xuICB2YXIgYjA5ID0gYTIxICogYTMyIC0gYTIyICogYTMxO1xuICB2YXIgYjEwID0gYTIxICogYTMzIC0gYTIzICogYTMxO1xuICB2YXIgYjExID0gYTIyICogYTMzIC0gYTIzICogYTMyOyAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XG5cbiAgdmFyIGRldCA9IGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcblxuICBpZiAoIWRldCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZGV0ID0gMS4wIC8gZGV0O1xuICBvdXRbMF0gPSAoYTExICogYjExIC0gYTEyICogYjEwICsgYTEzICogYjA5KSAqIGRldDtcbiAgb3V0WzFdID0gKGExMiAqIGIwOCAtIGExMCAqIGIxMSAtIGExMyAqIGIwNykgKiBkZXQ7XG4gIG91dFsyXSA9IChhMTAgKiBiMTAgLSBhMTEgKiBiMDggKyBhMTMgKiBiMDYpICogZGV0O1xuICBvdXRbM10gPSAoYTAyICogYjEwIC0gYTAxICogYjExIC0gYTAzICogYjA5KSAqIGRldDtcbiAgb3V0WzRdID0gKGEwMCAqIGIxMSAtIGEwMiAqIGIwOCArIGEwMyAqIGIwNykgKiBkZXQ7XG4gIG91dFs1XSA9IChhMDEgKiBiMDggLSBhMDAgKiBiMTAgLSBhMDMgKiBiMDYpICogZGV0O1xuICBvdXRbNl0gPSAoYTMxICogYjA1IC0gYTMyICogYjA0ICsgYTMzICogYjAzKSAqIGRldDtcbiAgb3V0WzddID0gKGEzMiAqIGIwMiAtIGEzMCAqIGIwNSAtIGEzMyAqIGIwMSkgKiBkZXQ7XG4gIG91dFs4XSA9IChhMzAgKiBiMDQgLSBhMzEgKiBiMDIgKyBhMzMgKiBiMDApICogZGV0O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIEdlbmVyYXRlcyBhIDJEIHByb2plY3Rpb24gbWF0cml4IHdpdGggdGhlIGdpdmVuIGJvdW5kc1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDN9IG91dCBtYXQzIGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCBXaWR0aCBvZiB5b3VyIGdsIGNvbnRleHRcclxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBIZWlnaHQgb2YgZ2wgY29udGV4dFxyXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdGlvbihvdXQsIHdpZHRoLCBoZWlnaHQpIHtcbiAgb3V0WzBdID0gMiAvIHdpZHRoO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAtMiAvIGhlaWdodDtcbiAgb3V0WzVdID0gMDtcbiAgb3V0WzZdID0gLTE7XG4gIG91dFs3XSA9IDE7XG4gIG91dFs4XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIG1hdDNcclxuICpcclxuICogQHBhcmFtIHttYXQzfSBhIG1hdHJpeCB0byByZXByZXNlbnQgYXMgYSBzdHJpbmdcclxuICogQHJldHVybnMge1N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBtYXRyaXhcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzdHIoYSkge1xuICByZXR1cm4gJ21hdDMoJyArIGFbMF0gKyAnLCAnICsgYVsxXSArICcsICcgKyBhWzJdICsgJywgJyArIGFbM10gKyAnLCAnICsgYVs0XSArICcsICcgKyBhWzVdICsgJywgJyArIGFbNl0gKyAnLCAnICsgYVs3XSArICcsICcgKyBhWzhdICsgJyknO1xufVxuLyoqXHJcbiAqIFJldHVybnMgRnJvYmVuaXVzIG5vcm0gb2YgYSBtYXQzXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgbWF0cml4IHRvIGNhbGN1bGF0ZSBGcm9iZW5pdXMgbm9ybSBvZlxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBGcm9iZW5pdXMgbm9ybVxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb2IoYSkge1xuICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KGFbMF0sIDIpICsgTWF0aC5wb3coYVsxXSwgMikgKyBNYXRoLnBvdyhhWzJdLCAyKSArIE1hdGgucG93KGFbM10sIDIpICsgTWF0aC5wb3coYVs0XSwgMikgKyBNYXRoLnBvdyhhWzVdLCAyKSArIE1hdGgucG93KGFbNl0sIDIpICsgTWF0aC5wb3coYVs3XSwgMikgKyBNYXRoLnBvdyhhWzhdLCAyKSk7XG59XG4vKipcclxuICogQWRkcyB0d28gbWF0MydzXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7bWF0M30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge21hdDN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKyBiWzBdO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXTtcbiAgb3V0WzJdID0gYVsyXSArIGJbMl07XG4gIG91dFszXSA9IGFbM10gKyBiWzNdO1xuICBvdXRbNF0gPSBhWzRdICsgYls0XTtcbiAgb3V0WzVdID0gYVs1XSArIGJbNV07XG4gIG91dFs2XSA9IGFbNl0gKyBiWzZdO1xuICBvdXRbN10gPSBhWzddICsgYls3XTtcbiAgb3V0WzhdID0gYVs4XSArIGJbOF07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogU3VidHJhY3RzIG1hdHJpeCBiIGZyb20gbWF0cml4IGFcclxuICpcclxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7bWF0M30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge21hdDN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdIC0gYlswXTtcbiAgb3V0WzFdID0gYVsxXSAtIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gLSBiWzJdO1xuICBvdXRbM10gPSBhWzNdIC0gYlszXTtcbiAgb3V0WzRdID0gYVs0XSAtIGJbNF07XG4gIG91dFs1XSA9IGFbNV0gLSBiWzVdO1xuICBvdXRbNl0gPSBhWzZdIC0gYls2XTtcbiAgb3V0WzddID0gYVs3XSAtIGJbN107XG4gIG91dFs4XSA9IGFbOF0gLSBiWzhdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIE11bHRpcGx5IGVhY2ggZWxlbWVudCBvZiB0aGUgbWF0cml4IGJ5IGEgc2NhbGFyLlxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge21hdDN9IGEgdGhlIG1hdHJpeCB0byBzY2FsZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIG1hdHJpeCdzIGVsZW1lbnRzIGJ5XHJcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseVNjYWxhcihvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAqIGI7XG4gIG91dFsxXSA9IGFbMV0gKiBiO1xuICBvdXRbMl0gPSBhWzJdICogYjtcbiAgb3V0WzNdID0gYVszXSAqIGI7XG4gIG91dFs0XSA9IGFbNF0gKiBiO1xuICBvdXRbNV0gPSBhWzVdICogYjtcbiAgb3V0WzZdID0gYVs2XSAqIGI7XG4gIG91dFs3XSA9IGFbN10gKiBiO1xuICBvdXRbOF0gPSBhWzhdICogYjtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBBZGRzIHR3byBtYXQzJ3MgYWZ0ZXIgbXVsdGlwbHlpbmcgZWFjaCBlbGVtZW50IG9mIHRoZSBzZWNvbmQgb3BlcmFuZCBieSBhIHNjYWxhciB2YWx1ZS5cclxuICpcclxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHttYXQzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7bWF0M30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIHRoZSBhbW91bnQgdG8gc2NhbGUgYidzIGVsZW1lbnRzIGJ5IGJlZm9yZSBhZGRpbmdcclxuICogQHJldHVybnMge21hdDN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5U2NhbGFyQW5kQWRkKG91dCwgYSwgYiwgc2NhbGUpIHtcbiAgb3V0WzBdID0gYVswXSArIGJbMF0gKiBzY2FsZTtcbiAgb3V0WzFdID0gYVsxXSArIGJbMV0gKiBzY2FsZTtcbiAgb3V0WzJdID0gYVsyXSArIGJbMl0gKiBzY2FsZTtcbiAgb3V0WzNdID0gYVszXSArIGJbM10gKiBzY2FsZTtcbiAgb3V0WzRdID0gYVs0XSArIGJbNF0gKiBzY2FsZTtcbiAgb3V0WzVdID0gYVs1XSArIGJbNV0gKiBzY2FsZTtcbiAgb3V0WzZdID0gYVs2XSArIGJbNl0gKiBzY2FsZTtcbiAgb3V0WzddID0gYVs3XSArIGJbN10gKiBzY2FsZTtcbiAgb3V0WzhdID0gYVs4XSArIGJbOF0gKiBzY2FsZTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBtYXRyaWNlcyBoYXZlIGV4YWN0bHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24gKHdoZW4gY29tcGFyZWQgd2l0aCA9PT0pXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0M30gYSBUaGUgZmlyc3QgbWF0cml4LlxyXG4gKiBAcGFyYW0ge21hdDN9IGIgVGhlIHNlY29uZCBtYXRyaXguXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBtYXRyaWNlcyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBleGFjdEVxdWFscyhhLCBiKSB7XG4gIHJldHVybiBhWzBdID09PSBiWzBdICYmIGFbMV0gPT09IGJbMV0gJiYgYVsyXSA9PT0gYlsyXSAmJiBhWzNdID09PSBiWzNdICYmIGFbNF0gPT09IGJbNF0gJiYgYVs1XSA9PT0gYls1XSAmJiBhWzZdID09PSBiWzZdICYmIGFbN10gPT09IGJbN10gJiYgYVs4XSA9PT0gYls4XTtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBtYXRyaWNlcyBoYXZlIGFwcHJveGltYXRlbHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24uXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0M30gYSBUaGUgZmlyc3QgbWF0cml4LlxyXG4gKiBAcGFyYW0ge21hdDN9IGIgVGhlIHNlY29uZCBtYXRyaXguXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBtYXRyaWNlcyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICB2YXIgYTAgPSBhWzBdLFxuICAgICAgYTEgPSBhWzFdLFxuICAgICAgYTIgPSBhWzJdLFxuICAgICAgYTMgPSBhWzNdLFxuICAgICAgYTQgPSBhWzRdLFxuICAgICAgYTUgPSBhWzVdLFxuICAgICAgYTYgPSBhWzZdLFxuICAgICAgYTcgPSBhWzddLFxuICAgICAgYTggPSBhWzhdO1xuICB2YXIgYjAgPSBiWzBdLFxuICAgICAgYjEgPSBiWzFdLFxuICAgICAgYjIgPSBiWzJdLFxuICAgICAgYjMgPSBiWzNdLFxuICAgICAgYjQgPSBiWzRdLFxuICAgICAgYjUgPSBiWzVdLFxuICAgICAgYjYgPSBiWzZdLFxuICAgICAgYjcgPSBiWzddLFxuICAgICAgYjggPSBiWzhdO1xuICByZXR1cm4gTWF0aC5hYnMoYTAgLSBiMCkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTApLCBNYXRoLmFicyhiMCkpICYmIE1hdGguYWJzKGExIC0gYjEpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExKSwgTWF0aC5hYnMoYjEpKSAmJiBNYXRoLmFicyhhMiAtIGIyKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMiksIE1hdGguYWJzKGIyKSkgJiYgTWF0aC5hYnMoYTMgLSBiMykgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTMpLCBNYXRoLmFicyhiMykpICYmIE1hdGguYWJzKGE0IC0gYjQpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE0KSwgTWF0aC5hYnMoYjQpKSAmJiBNYXRoLmFicyhhNSAtIGI1KSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhNSksIE1hdGguYWJzKGI1KSkgJiYgTWF0aC5hYnMoYTYgLSBiNikgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTYpLCBNYXRoLmFicyhiNikpICYmIE1hdGguYWJzKGE3IC0gYjcpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE3KSwgTWF0aC5hYnMoYjcpKSAmJiBNYXRoLmFicyhhOCAtIGI4KSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhOCksIE1hdGguYWJzKGI4KSk7XG59XG4vKipcclxuICogQWxpYXMgZm9yIHtAbGluayBtYXQzLm11bHRpcGx5fVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgbXVsID0gbXVsdGlwbHk7XG4vKipcclxuICogQWxpYXMgZm9yIHtAbGluayBtYXQzLnN1YnRyYWN0fVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgc3ViID0gc3VidHJhY3Q7IiwiaW1wb3J0ICogYXMgZ2xNYXRyaXggZnJvbSBcIi4vY29tbW9uLmpzXCI7XG4vKipcclxuICogNHg0IE1hdHJpeDxicj5Gb3JtYXQ6IGNvbHVtbi1tYWpvciwgd2hlbiB0eXBlZCBvdXQgaXQgbG9va3MgbGlrZSByb3ctbWFqb3I8YnI+VGhlIG1hdHJpY2VzIGFyZSBiZWluZyBwb3N0IG11bHRpcGxpZWQuXHJcbiAqIEBtb2R1bGUgbWF0NFxyXG4gKi9cblxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgaWRlbnRpdHkgbWF0NFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7bWF0NH0gYSBuZXcgNHg0IG1hdHJpeFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDE2KTtcblxuICBpZiAoZ2xNYXRyaXguQVJSQVlfVFlQRSAhPSBGbG9hdDMyQXJyYXkpIHtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAwO1xuICAgIG91dFs2XSA9IDA7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAwO1xuICAgIG91dFs5XSA9IDA7XG4gICAgb3V0WzExXSA9IDA7XG4gICAgb3V0WzEyXSA9IDA7XG4gICAgb3V0WzEzXSA9IDA7XG4gICAgb3V0WzE0XSA9IDA7XG4gIH1cblxuICBvdXRbMF0gPSAxO1xuICBvdXRbNV0gPSAxO1xuICBvdXRbMTBdID0gMTtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyBtYXQ0IGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgbWF0cml4XHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gYSBtYXRyaXggdG8gY2xvbmVcclxuICogQHJldHVybnMge21hdDR9IGEgbmV3IDR4NCBtYXRyaXhcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShhKSB7XG4gIHZhciBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSgxNik7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIG91dFszXSA9IGFbM107XG4gIG91dFs0XSA9IGFbNF07XG4gIG91dFs1XSA9IGFbNV07XG4gIG91dFs2XSA9IGFbNl07XG4gIG91dFs3XSA9IGFbN107XG4gIG91dFs4XSA9IGFbOF07XG4gIG91dFs5XSA9IGFbOV07XG4gIG91dFsxMF0gPSBhWzEwXTtcbiAgb3V0WzExXSA9IGFbMTFdO1xuICBvdXRbMTJdID0gYVsxMl07XG4gIG91dFsxM10gPSBhWzEzXTtcbiAgb3V0WzE0XSA9IGFbMTRdO1xuICBvdXRbMTVdID0gYVsxNV07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIG1hdDQgdG8gYW5vdGhlclxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIG91dFszXSA9IGFbM107XG4gIG91dFs0XSA9IGFbNF07XG4gIG91dFs1XSA9IGFbNV07XG4gIG91dFs2XSA9IGFbNl07XG4gIG91dFs3XSA9IGFbN107XG4gIG91dFs4XSA9IGFbOF07XG4gIG91dFs5XSA9IGFbOV07XG4gIG91dFsxMF0gPSBhWzEwXTtcbiAgb3V0WzExXSA9IGFbMTFdO1xuICBvdXRbMTJdID0gYVsxMl07XG4gIG91dFsxM10gPSBhWzEzXTtcbiAgb3V0WzE0XSA9IGFbMTRdO1xuICBvdXRbMTVdID0gYVsxNV07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlIGEgbmV3IG1hdDQgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVzXHJcbiAqXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDAgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggMClcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMSBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAxKVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTAyIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDIgcG9zaXRpb24gKGluZGV4IDIpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDMgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMyBwb3NpdGlvbiAoaW5kZXggMylcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMCBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAwIHBvc2l0aW9uIChpbmRleCA0KVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTExIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDEgcG9zaXRpb24gKGluZGV4IDUpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTIgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggNilcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMyBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAzIHBvc2l0aW9uIChpbmRleCA3KVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTIwIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDAgcG9zaXRpb24gKGluZGV4IDgpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjEgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggOSlcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMiBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAxMClcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMyBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAzIHBvc2l0aW9uIChpbmRleCAxMSlcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0zMCBDb21wb25lbnQgaW4gY29sdW1uIDMsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAxMilcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0zMSBDb21wb25lbnQgaW4gY29sdW1uIDMsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAxMylcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0zMiBDb21wb25lbnQgaW4gY29sdW1uIDMsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAxNClcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0zMyBDb21wb25lbnQgaW4gY29sdW1uIDMsIHJvdyAzIHBvc2l0aW9uIChpbmRleCAxNSlcclxuICogQHJldHVybnMge21hdDR9IEEgbmV3IG1hdDRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tVmFsdWVzKG0wMCwgbTAxLCBtMDIsIG0wMywgbTEwLCBtMTEsIG0xMiwgbTEzLCBtMjAsIG0yMSwgbTIyLCBtMjMsIG0zMCwgbTMxLCBtMzIsIG0zMykge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoMTYpO1xuICBvdXRbMF0gPSBtMDA7XG4gIG91dFsxXSA9IG0wMTtcbiAgb3V0WzJdID0gbTAyO1xuICBvdXRbM10gPSBtMDM7XG4gIG91dFs0XSA9IG0xMDtcbiAgb3V0WzVdID0gbTExO1xuICBvdXRbNl0gPSBtMTI7XG4gIG91dFs3XSA9IG0xMztcbiAgb3V0WzhdID0gbTIwO1xuICBvdXRbOV0gPSBtMjE7XG4gIG91dFsxMF0gPSBtMjI7XG4gIG91dFsxMV0gPSBtMjM7XG4gIG91dFsxMl0gPSBtMzA7XG4gIG91dFsxM10gPSBtMzE7XG4gIG91dFsxNF0gPSBtMzI7XG4gIG91dFsxNV0gPSBtMzM7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgbWF0NCB0byB0aGUgZ2l2ZW4gdmFsdWVzXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDAgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggMClcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMSBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAxKVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTAyIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDIgcG9zaXRpb24gKGluZGV4IDIpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDMgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMyBwb3NpdGlvbiAoaW5kZXggMylcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMCBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAwIHBvc2l0aW9uIChpbmRleCA0KVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTExIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDEgcG9zaXRpb24gKGluZGV4IDUpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTIgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggNilcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMyBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAzIHBvc2l0aW9uIChpbmRleCA3KVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTIwIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDAgcG9zaXRpb24gKGluZGV4IDgpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjEgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggOSlcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMiBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAxMClcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMyBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAzIHBvc2l0aW9uIChpbmRleCAxMSlcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0zMCBDb21wb25lbnQgaW4gY29sdW1uIDMsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAxMilcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0zMSBDb21wb25lbnQgaW4gY29sdW1uIDMsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAxMylcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0zMiBDb21wb25lbnQgaW4gY29sdW1uIDMsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAxNClcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0zMyBDb21wb25lbnQgaW4gY29sdW1uIDMsIHJvdyAzIHBvc2l0aW9uIChpbmRleCAxNSlcclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNldChvdXQsIG0wMCwgbTAxLCBtMDIsIG0wMywgbTEwLCBtMTEsIG0xMiwgbTEzLCBtMjAsIG0yMSwgbTIyLCBtMjMsIG0zMCwgbTMxLCBtMzIsIG0zMykge1xuICBvdXRbMF0gPSBtMDA7XG4gIG91dFsxXSA9IG0wMTtcbiAgb3V0WzJdID0gbTAyO1xuICBvdXRbM10gPSBtMDM7XG4gIG91dFs0XSA9IG0xMDtcbiAgb3V0WzVdID0gbTExO1xuICBvdXRbNl0gPSBtMTI7XG4gIG91dFs3XSA9IG0xMztcbiAgb3V0WzhdID0gbTIwO1xuICBvdXRbOV0gPSBtMjE7XG4gIG91dFsxMF0gPSBtMjI7XG4gIG91dFsxMV0gPSBtMjM7XG4gIG91dFsxMl0gPSBtMzA7XG4gIG91dFsxM10gPSBtMzE7XG4gIG91dFsxNF0gPSBtMzI7XG4gIG91dFsxNV0gPSBtMzM7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogU2V0IGEgbWF0NCB0byB0aGUgaWRlbnRpdHkgbWF0cml4XHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eShvdXQpIHtcbiAgb3V0WzBdID0gMTtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gMDtcbiAgb3V0WzVdID0gMTtcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMDtcbiAgb3V0WzldID0gMDtcbiAgb3V0WzEwXSA9IDE7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gMDtcbiAgb3V0WzEzXSA9IDA7XG4gIG91dFsxNF0gPSAwO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBUcmFuc3Bvc2UgdGhlIHZhbHVlcyBvZiBhIG1hdDRcclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc3Bvc2Uob3V0LCBhKSB7XG4gIC8vIElmIHdlIGFyZSB0cmFuc3Bvc2luZyBvdXJzZWx2ZXMgd2UgY2FuIHNraXAgYSBmZXcgc3RlcHMgYnV0IGhhdmUgdG8gY2FjaGUgc29tZSB2YWx1ZXNcbiAgaWYgKG91dCA9PT0gYSkge1xuICAgIHZhciBhMDEgPSBhWzFdLFxuICAgICAgICBhMDIgPSBhWzJdLFxuICAgICAgICBhMDMgPSBhWzNdO1xuICAgIHZhciBhMTIgPSBhWzZdLFxuICAgICAgICBhMTMgPSBhWzddO1xuICAgIHZhciBhMjMgPSBhWzExXTtcbiAgICBvdXRbMV0gPSBhWzRdO1xuICAgIG91dFsyXSA9IGFbOF07XG4gICAgb3V0WzNdID0gYVsxMl07XG4gICAgb3V0WzRdID0gYTAxO1xuICAgIG91dFs2XSA9IGFbOV07XG4gICAgb3V0WzddID0gYVsxM107XG4gICAgb3V0WzhdID0gYTAyO1xuICAgIG91dFs5XSA9IGExMjtcbiAgICBvdXRbMTFdID0gYVsxNF07XG4gICAgb3V0WzEyXSA9IGEwMztcbiAgICBvdXRbMTNdID0gYTEzO1xuICAgIG91dFsxNF0gPSBhMjM7XG4gIH0gZWxzZSB7XG4gICAgb3V0WzBdID0gYVswXTtcbiAgICBvdXRbMV0gPSBhWzRdO1xuICAgIG91dFsyXSA9IGFbOF07XG4gICAgb3V0WzNdID0gYVsxMl07XG4gICAgb3V0WzRdID0gYVsxXTtcbiAgICBvdXRbNV0gPSBhWzVdO1xuICAgIG91dFs2XSA9IGFbOV07XG4gICAgb3V0WzddID0gYVsxM107XG4gICAgb3V0WzhdID0gYVsyXTtcbiAgICBvdXRbOV0gPSBhWzZdO1xuICAgIG91dFsxMF0gPSBhWzEwXTtcbiAgICBvdXRbMTFdID0gYVsxNF07XG4gICAgb3V0WzEyXSA9IGFbM107XG4gICAgb3V0WzEzXSA9IGFbN107XG4gICAgb3V0WzE0XSA9IGFbMTFdO1xuICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogSW52ZXJ0cyBhIG1hdDRcclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQob3V0LCBhKSB7XG4gIHZhciBhMDAgPSBhWzBdLFxuICAgICAgYTAxID0gYVsxXSxcbiAgICAgIGEwMiA9IGFbMl0sXG4gICAgICBhMDMgPSBhWzNdO1xuICB2YXIgYTEwID0gYVs0XSxcbiAgICAgIGExMSA9IGFbNV0sXG4gICAgICBhMTIgPSBhWzZdLFxuICAgICAgYTEzID0gYVs3XTtcbiAgdmFyIGEyMCA9IGFbOF0sXG4gICAgICBhMjEgPSBhWzldLFxuICAgICAgYTIyID0gYVsxMF0sXG4gICAgICBhMjMgPSBhWzExXTtcbiAgdmFyIGEzMCA9IGFbMTJdLFxuICAgICAgYTMxID0gYVsxM10sXG4gICAgICBhMzIgPSBhWzE0XSxcbiAgICAgIGEzMyA9IGFbMTVdO1xuICB2YXIgYjAwID0gYTAwICogYTExIC0gYTAxICogYTEwO1xuICB2YXIgYjAxID0gYTAwICogYTEyIC0gYTAyICogYTEwO1xuICB2YXIgYjAyID0gYTAwICogYTEzIC0gYTAzICogYTEwO1xuICB2YXIgYjAzID0gYTAxICogYTEyIC0gYTAyICogYTExO1xuICB2YXIgYjA0ID0gYTAxICogYTEzIC0gYTAzICogYTExO1xuICB2YXIgYjA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyO1xuICB2YXIgYjA2ID0gYTIwICogYTMxIC0gYTIxICogYTMwO1xuICB2YXIgYjA3ID0gYTIwICogYTMyIC0gYTIyICogYTMwO1xuICB2YXIgYjA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwO1xuICB2YXIgYjA5ID0gYTIxICogYTMyIC0gYTIyICogYTMxO1xuICB2YXIgYjEwID0gYTIxICogYTMzIC0gYTIzICogYTMxO1xuICB2YXIgYjExID0gYTIyICogYTMzIC0gYTIzICogYTMyOyAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XG5cbiAgdmFyIGRldCA9IGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcblxuICBpZiAoIWRldCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZGV0ID0gMS4wIC8gZGV0O1xuICBvdXRbMF0gPSAoYTExICogYjExIC0gYTEyICogYjEwICsgYTEzICogYjA5KSAqIGRldDtcbiAgb3V0WzFdID0gKGEwMiAqIGIxMCAtIGEwMSAqIGIxMSAtIGEwMyAqIGIwOSkgKiBkZXQ7XG4gIG91dFsyXSA9IChhMzEgKiBiMDUgLSBhMzIgKiBiMDQgKyBhMzMgKiBiMDMpICogZGV0O1xuICBvdXRbM10gPSAoYTIyICogYjA0IC0gYTIxICogYjA1IC0gYTIzICogYjAzKSAqIGRldDtcbiAgb3V0WzRdID0gKGExMiAqIGIwOCAtIGExMCAqIGIxMSAtIGExMyAqIGIwNykgKiBkZXQ7XG4gIG91dFs1XSA9IChhMDAgKiBiMTEgLSBhMDIgKiBiMDggKyBhMDMgKiBiMDcpICogZGV0O1xuICBvdXRbNl0gPSAoYTMyICogYjAyIC0gYTMwICogYjA1IC0gYTMzICogYjAxKSAqIGRldDtcbiAgb3V0WzddID0gKGEyMCAqIGIwNSAtIGEyMiAqIGIwMiArIGEyMyAqIGIwMSkgKiBkZXQ7XG4gIG91dFs4XSA9IChhMTAgKiBiMTAgLSBhMTEgKiBiMDggKyBhMTMgKiBiMDYpICogZGV0O1xuICBvdXRbOV0gPSAoYTAxICogYjA4IC0gYTAwICogYjEwIC0gYTAzICogYjA2KSAqIGRldDtcbiAgb3V0WzEwXSA9IChhMzAgKiBiMDQgLSBhMzEgKiBiMDIgKyBhMzMgKiBiMDApICogZGV0O1xuICBvdXRbMTFdID0gKGEyMSAqIGIwMiAtIGEyMCAqIGIwNCAtIGEyMyAqIGIwMCkgKiBkZXQ7XG4gIG91dFsxMl0gPSAoYTExICogYjA3IC0gYTEwICogYjA5IC0gYTEyICogYjA2KSAqIGRldDtcbiAgb3V0WzEzXSA9IChhMDAgKiBiMDkgLSBhMDEgKiBiMDcgKyBhMDIgKiBiMDYpICogZGV0O1xuICBvdXRbMTRdID0gKGEzMSAqIGIwMSAtIGEzMCAqIGIwMyAtIGEzMiAqIGIwMCkgKiBkZXQ7XG4gIG91dFsxNV0gPSAoYTIwICogYjAzIC0gYTIxICogYjAxICsgYTIyICogYjAwKSAqIGRldDtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBhZGp1Z2F0ZSBvZiBhIG1hdDRcclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGpvaW50KG91dCwgYSkge1xuICB2YXIgYTAwID0gYVswXSxcbiAgICAgIGEwMSA9IGFbMV0sXG4gICAgICBhMDIgPSBhWzJdLFxuICAgICAgYTAzID0gYVszXTtcbiAgdmFyIGExMCA9IGFbNF0sXG4gICAgICBhMTEgPSBhWzVdLFxuICAgICAgYTEyID0gYVs2XSxcbiAgICAgIGExMyA9IGFbN107XG4gIHZhciBhMjAgPSBhWzhdLFxuICAgICAgYTIxID0gYVs5XSxcbiAgICAgIGEyMiA9IGFbMTBdLFxuICAgICAgYTIzID0gYVsxMV07XG4gIHZhciBhMzAgPSBhWzEyXSxcbiAgICAgIGEzMSA9IGFbMTNdLFxuICAgICAgYTMyID0gYVsxNF0sXG4gICAgICBhMzMgPSBhWzE1XTtcbiAgb3V0WzBdID0gYTExICogKGEyMiAqIGEzMyAtIGEyMyAqIGEzMikgLSBhMjEgKiAoYTEyICogYTMzIC0gYTEzICogYTMyKSArIGEzMSAqIChhMTIgKiBhMjMgLSBhMTMgKiBhMjIpO1xuICBvdXRbMV0gPSAtKGEwMSAqIChhMjIgKiBhMzMgLSBhMjMgKiBhMzIpIC0gYTIxICogKGEwMiAqIGEzMyAtIGEwMyAqIGEzMikgKyBhMzEgKiAoYTAyICogYTIzIC0gYTAzICogYTIyKSk7XG4gIG91dFsyXSA9IGEwMSAqIChhMTIgKiBhMzMgLSBhMTMgKiBhMzIpIC0gYTExICogKGEwMiAqIGEzMyAtIGEwMyAqIGEzMikgKyBhMzEgKiAoYTAyICogYTEzIC0gYTAzICogYTEyKTtcbiAgb3V0WzNdID0gLShhMDEgKiAoYTEyICogYTIzIC0gYTEzICogYTIyKSAtIGExMSAqIChhMDIgKiBhMjMgLSBhMDMgKiBhMjIpICsgYTIxICogKGEwMiAqIGExMyAtIGEwMyAqIGExMikpO1xuICBvdXRbNF0gPSAtKGExMCAqIChhMjIgKiBhMzMgLSBhMjMgKiBhMzIpIC0gYTIwICogKGExMiAqIGEzMyAtIGExMyAqIGEzMikgKyBhMzAgKiAoYTEyICogYTIzIC0gYTEzICogYTIyKSk7XG4gIG91dFs1XSA9IGEwMCAqIChhMjIgKiBhMzMgLSBhMjMgKiBhMzIpIC0gYTIwICogKGEwMiAqIGEzMyAtIGEwMyAqIGEzMikgKyBhMzAgKiAoYTAyICogYTIzIC0gYTAzICogYTIyKTtcbiAgb3V0WzZdID0gLShhMDAgKiAoYTEyICogYTMzIC0gYTEzICogYTMyKSAtIGExMCAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMwICogKGEwMiAqIGExMyAtIGEwMyAqIGExMikpO1xuICBvdXRbN10gPSBhMDAgKiAoYTEyICogYTIzIC0gYTEzICogYTIyKSAtIGExMCAqIChhMDIgKiBhMjMgLSBhMDMgKiBhMjIpICsgYTIwICogKGEwMiAqIGExMyAtIGEwMyAqIGExMik7XG4gIG91dFs4XSA9IGExMCAqIChhMjEgKiBhMzMgLSBhMjMgKiBhMzEpIC0gYTIwICogKGExMSAqIGEzMyAtIGExMyAqIGEzMSkgKyBhMzAgKiAoYTExICogYTIzIC0gYTEzICogYTIxKTtcbiAgb3V0WzldID0gLShhMDAgKiAoYTIxICogYTMzIC0gYTIzICogYTMxKSAtIGEyMCAqIChhMDEgKiBhMzMgLSBhMDMgKiBhMzEpICsgYTMwICogKGEwMSAqIGEyMyAtIGEwMyAqIGEyMSkpO1xuICBvdXRbMTBdID0gYTAwICogKGExMSAqIGEzMyAtIGExMyAqIGEzMSkgLSBhMTAgKiAoYTAxICogYTMzIC0gYTAzICogYTMxKSArIGEzMCAqIChhMDEgKiBhMTMgLSBhMDMgKiBhMTEpO1xuICBvdXRbMTFdID0gLShhMDAgKiAoYTExICogYTIzIC0gYTEzICogYTIxKSAtIGExMCAqIChhMDEgKiBhMjMgLSBhMDMgKiBhMjEpICsgYTIwICogKGEwMSAqIGExMyAtIGEwMyAqIGExMSkpO1xuICBvdXRbMTJdID0gLShhMTAgKiAoYTIxICogYTMyIC0gYTIyICogYTMxKSAtIGEyMCAqIChhMTEgKiBhMzIgLSBhMTIgKiBhMzEpICsgYTMwICogKGExMSAqIGEyMiAtIGExMiAqIGEyMSkpO1xuICBvdXRbMTNdID0gYTAwICogKGEyMSAqIGEzMiAtIGEyMiAqIGEzMSkgLSBhMjAgKiAoYTAxICogYTMyIC0gYTAyICogYTMxKSArIGEzMCAqIChhMDEgKiBhMjIgLSBhMDIgKiBhMjEpO1xuICBvdXRbMTRdID0gLShhMDAgKiAoYTExICogYTMyIC0gYTEyICogYTMxKSAtIGExMCAqIChhMDEgKiBhMzIgLSBhMDIgKiBhMzEpICsgYTMwICogKGEwMSAqIGExMiAtIGEwMiAqIGExMSkpO1xuICBvdXRbMTVdID0gYTAwICogKGExMSAqIGEyMiAtIGExMiAqIGEyMSkgLSBhMTAgKiAoYTAxICogYTIyIC0gYTAyICogYTIxKSArIGEyMCAqIChhMDEgKiBhMTIgLSBhMDIgKiBhMTEpO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIGRldGVybWluYW50IG9mIGEgbWF0NFxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcclxuICogQHJldHVybnMge051bWJlcn0gZGV0ZXJtaW5hbnQgb2YgYVxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRldGVybWluYW50KGEpIHtcbiAgdmFyIGEwMCA9IGFbMF0sXG4gICAgICBhMDEgPSBhWzFdLFxuICAgICAgYTAyID0gYVsyXSxcbiAgICAgIGEwMyA9IGFbM107XG4gIHZhciBhMTAgPSBhWzRdLFxuICAgICAgYTExID0gYVs1XSxcbiAgICAgIGExMiA9IGFbNl0sXG4gICAgICBhMTMgPSBhWzddO1xuICB2YXIgYTIwID0gYVs4XSxcbiAgICAgIGEyMSA9IGFbOV0sXG4gICAgICBhMjIgPSBhWzEwXSxcbiAgICAgIGEyMyA9IGFbMTFdO1xuICB2YXIgYTMwID0gYVsxMl0sXG4gICAgICBhMzEgPSBhWzEzXSxcbiAgICAgIGEzMiA9IGFbMTRdLFxuICAgICAgYTMzID0gYVsxNV07XG4gIHZhciBiMDAgPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTA7XG4gIHZhciBiMDEgPSBhMDAgKiBhMTIgLSBhMDIgKiBhMTA7XG4gIHZhciBiMDIgPSBhMDAgKiBhMTMgLSBhMDMgKiBhMTA7XG4gIHZhciBiMDMgPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTE7XG4gIHZhciBiMDQgPSBhMDEgKiBhMTMgLSBhMDMgKiBhMTE7XG4gIHZhciBiMDUgPSBhMDIgKiBhMTMgLSBhMDMgKiBhMTI7XG4gIHZhciBiMDYgPSBhMjAgKiBhMzEgLSBhMjEgKiBhMzA7XG4gIHZhciBiMDcgPSBhMjAgKiBhMzIgLSBhMjIgKiBhMzA7XG4gIHZhciBiMDggPSBhMjAgKiBhMzMgLSBhMjMgKiBhMzA7XG4gIHZhciBiMDkgPSBhMjEgKiBhMzIgLSBhMjIgKiBhMzE7XG4gIHZhciBiMTAgPSBhMjEgKiBhMzMgLSBhMjMgKiBhMzE7XG4gIHZhciBiMTEgPSBhMjIgKiBhMzMgLSBhMjMgKiBhMzI7IC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcblxuICByZXR1cm4gYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2O1xufVxuLyoqXHJcbiAqIE11bHRpcGxpZXMgdHdvIG1hdDRzXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge21hdDR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgdmFyIGEwMCA9IGFbMF0sXG4gICAgICBhMDEgPSBhWzFdLFxuICAgICAgYTAyID0gYVsyXSxcbiAgICAgIGEwMyA9IGFbM107XG4gIHZhciBhMTAgPSBhWzRdLFxuICAgICAgYTExID0gYVs1XSxcbiAgICAgIGExMiA9IGFbNl0sXG4gICAgICBhMTMgPSBhWzddO1xuICB2YXIgYTIwID0gYVs4XSxcbiAgICAgIGEyMSA9IGFbOV0sXG4gICAgICBhMjIgPSBhWzEwXSxcbiAgICAgIGEyMyA9IGFbMTFdO1xuICB2YXIgYTMwID0gYVsxMl0sXG4gICAgICBhMzEgPSBhWzEzXSxcbiAgICAgIGEzMiA9IGFbMTRdLFxuICAgICAgYTMzID0gYVsxNV07IC8vIENhY2hlIG9ubHkgdGhlIGN1cnJlbnQgbGluZSBvZiB0aGUgc2Vjb25kIG1hdHJpeFxuXG4gIHZhciBiMCA9IGJbMF0sXG4gICAgICBiMSA9IGJbMV0sXG4gICAgICBiMiA9IGJbMl0sXG4gICAgICBiMyA9IGJbM107XG4gIG91dFswXSA9IGIwICogYTAwICsgYjEgKiBhMTAgKyBiMiAqIGEyMCArIGIzICogYTMwO1xuICBvdXRbMV0gPSBiMCAqIGEwMSArIGIxICogYTExICsgYjIgKiBhMjEgKyBiMyAqIGEzMTtcbiAgb3V0WzJdID0gYjAgKiBhMDIgKyBiMSAqIGExMiArIGIyICogYTIyICsgYjMgKiBhMzI7XG4gIG91dFszXSA9IGIwICogYTAzICsgYjEgKiBhMTMgKyBiMiAqIGEyMyArIGIzICogYTMzO1xuICBiMCA9IGJbNF07XG4gIGIxID0gYls1XTtcbiAgYjIgPSBiWzZdO1xuICBiMyA9IGJbN107XG4gIG91dFs0XSA9IGIwICogYTAwICsgYjEgKiBhMTAgKyBiMiAqIGEyMCArIGIzICogYTMwO1xuICBvdXRbNV0gPSBiMCAqIGEwMSArIGIxICogYTExICsgYjIgKiBhMjEgKyBiMyAqIGEzMTtcbiAgb3V0WzZdID0gYjAgKiBhMDIgKyBiMSAqIGExMiArIGIyICogYTIyICsgYjMgKiBhMzI7XG4gIG91dFs3XSA9IGIwICogYTAzICsgYjEgKiBhMTMgKyBiMiAqIGEyMyArIGIzICogYTMzO1xuICBiMCA9IGJbOF07XG4gIGIxID0gYls5XTtcbiAgYjIgPSBiWzEwXTtcbiAgYjMgPSBiWzExXTtcbiAgb3V0WzhdID0gYjAgKiBhMDAgKyBiMSAqIGExMCArIGIyICogYTIwICsgYjMgKiBhMzA7XG4gIG91dFs5XSA9IGIwICogYTAxICsgYjEgKiBhMTEgKyBiMiAqIGEyMSArIGIzICogYTMxO1xuICBvdXRbMTBdID0gYjAgKiBhMDIgKyBiMSAqIGExMiArIGIyICogYTIyICsgYjMgKiBhMzI7XG4gIG91dFsxMV0gPSBiMCAqIGEwMyArIGIxICogYTEzICsgYjIgKiBhMjMgKyBiMyAqIGEzMztcbiAgYjAgPSBiWzEyXTtcbiAgYjEgPSBiWzEzXTtcbiAgYjIgPSBiWzE0XTtcbiAgYjMgPSBiWzE1XTtcbiAgb3V0WzEyXSA9IGIwICogYTAwICsgYjEgKiBhMTAgKyBiMiAqIGEyMCArIGIzICogYTMwO1xuICBvdXRbMTNdID0gYjAgKiBhMDEgKyBiMSAqIGExMSArIGIyICogYTIxICsgYjMgKiBhMzE7XG4gIG91dFsxNF0gPSBiMCAqIGEwMiArIGIxICogYTEyICsgYjIgKiBhMjIgKyBiMyAqIGEzMjtcbiAgb3V0WzE1XSA9IGIwICogYTAzICsgYjEgKiBhMTMgKyBiMiAqIGEyMyArIGIzICogYTMzO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFRyYW5zbGF0ZSBhIG1hdDQgYnkgdGhlIGdpdmVuIHZlY3RvclxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byB0cmFuc2xhdGVcclxuICogQHBhcmFtIHt2ZWMzfSB2IHZlY3RvciB0byB0cmFuc2xhdGUgYnlcclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZShvdXQsIGEsIHYpIHtcbiAgdmFyIHggPSB2WzBdLFxuICAgICAgeSA9IHZbMV0sXG4gICAgICB6ID0gdlsyXTtcbiAgdmFyIGEwMCwgYTAxLCBhMDIsIGEwMztcbiAgdmFyIGExMCwgYTExLCBhMTIsIGExMztcbiAgdmFyIGEyMCwgYTIxLCBhMjIsIGEyMztcblxuICBpZiAoYSA9PT0gb3V0KSB7XG4gICAgb3V0WzEyXSA9IGFbMF0gKiB4ICsgYVs0XSAqIHkgKyBhWzhdICogeiArIGFbMTJdO1xuICAgIG91dFsxM10gPSBhWzFdICogeCArIGFbNV0gKiB5ICsgYVs5XSAqIHogKyBhWzEzXTtcbiAgICBvdXRbMTRdID0gYVsyXSAqIHggKyBhWzZdICogeSArIGFbMTBdICogeiArIGFbMTRdO1xuICAgIG91dFsxNV0gPSBhWzNdICogeCArIGFbN10gKiB5ICsgYVsxMV0gKiB6ICsgYVsxNV07XG4gIH0gZWxzZSB7XG4gICAgYTAwID0gYVswXTtcbiAgICBhMDEgPSBhWzFdO1xuICAgIGEwMiA9IGFbMl07XG4gICAgYTAzID0gYVszXTtcbiAgICBhMTAgPSBhWzRdO1xuICAgIGExMSA9IGFbNV07XG4gICAgYTEyID0gYVs2XTtcbiAgICBhMTMgPSBhWzddO1xuICAgIGEyMCA9IGFbOF07XG4gICAgYTIxID0gYVs5XTtcbiAgICBhMjIgPSBhWzEwXTtcbiAgICBhMjMgPSBhWzExXTtcbiAgICBvdXRbMF0gPSBhMDA7XG4gICAgb3V0WzFdID0gYTAxO1xuICAgIG91dFsyXSA9IGEwMjtcbiAgICBvdXRbM10gPSBhMDM7XG4gICAgb3V0WzRdID0gYTEwO1xuICAgIG91dFs1XSA9IGExMTtcbiAgICBvdXRbNl0gPSBhMTI7XG4gICAgb3V0WzddID0gYTEzO1xuICAgIG91dFs4XSA9IGEyMDtcbiAgICBvdXRbOV0gPSBhMjE7XG4gICAgb3V0WzEwXSA9IGEyMjtcbiAgICBvdXRbMTFdID0gYTIzO1xuICAgIG91dFsxMl0gPSBhMDAgKiB4ICsgYTEwICogeSArIGEyMCAqIHogKyBhWzEyXTtcbiAgICBvdXRbMTNdID0gYTAxICogeCArIGExMSAqIHkgKyBhMjEgKiB6ICsgYVsxM107XG4gICAgb3V0WzE0XSA9IGEwMiAqIHggKyBhMTIgKiB5ICsgYTIyICogeiArIGFbMTRdO1xuICAgIG91dFsxNV0gPSBhMDMgKiB4ICsgYTEzICogeSArIGEyMyAqIHogKyBhWzE1XTtcbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogU2NhbGVzIHRoZSBtYXQ0IGJ5IHRoZSBkaW1lbnNpb25zIGluIHRoZSBnaXZlbiB2ZWMzIG5vdCB1c2luZyB2ZWN0b3JpemF0aW9uXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHNjYWxlXHJcbiAqIEBwYXJhbSB7dmVjM30gdiB0aGUgdmVjMyB0byBzY2FsZSB0aGUgbWF0cml4IGJ5XHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICoqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUob3V0LCBhLCB2KSB7XG4gIHZhciB4ID0gdlswXSxcbiAgICAgIHkgPSB2WzFdLFxuICAgICAgeiA9IHZbMl07XG4gIG91dFswXSA9IGFbMF0gKiB4O1xuICBvdXRbMV0gPSBhWzFdICogeDtcbiAgb3V0WzJdID0gYVsyXSAqIHg7XG4gIG91dFszXSA9IGFbM10gKiB4O1xuICBvdXRbNF0gPSBhWzRdICogeTtcbiAgb3V0WzVdID0gYVs1XSAqIHk7XG4gIG91dFs2XSA9IGFbNl0gKiB5O1xuICBvdXRbN10gPSBhWzddICogeTtcbiAgb3V0WzhdID0gYVs4XSAqIHo7XG4gIG91dFs5XSA9IGFbOV0gKiB6O1xuICBvdXRbMTBdID0gYVsxMF0gKiB6O1xuICBvdXRbMTFdID0gYVsxMV0gKiB6O1xuICBvdXRbMTJdID0gYVsxMl07XG4gIG91dFsxM10gPSBhWzEzXTtcbiAgb3V0WzE0XSA9IGFbMTRdO1xuICBvdXRbMTVdID0gYVsxNV07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUm90YXRlcyBhIG1hdDQgYnkgdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgZ2l2ZW4gYXhpc1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcclxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcclxuICogQHBhcmFtIHt2ZWMzfSBheGlzIHRoZSBheGlzIHRvIHJvdGF0ZSBhcm91bmRcclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZShvdXQsIGEsIHJhZCwgYXhpcykge1xuICB2YXIgeCA9IGF4aXNbMF0sXG4gICAgICB5ID0gYXhpc1sxXSxcbiAgICAgIHogPSBheGlzWzJdO1xuICB2YXIgbGVuID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XG4gIHZhciBzLCBjLCB0O1xuICB2YXIgYTAwLCBhMDEsIGEwMiwgYTAzO1xuICB2YXIgYTEwLCBhMTEsIGExMiwgYTEzO1xuICB2YXIgYTIwLCBhMjEsIGEyMiwgYTIzO1xuICB2YXIgYjAwLCBiMDEsIGIwMjtcbiAgdmFyIGIxMCwgYjExLCBiMTI7XG4gIHZhciBiMjAsIGIyMSwgYjIyO1xuXG4gIGlmIChsZW4gPCBnbE1hdHJpeC5FUFNJTE9OKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBsZW4gPSAxIC8gbGVuO1xuICB4ICo9IGxlbjtcbiAgeSAqPSBsZW47XG4gIHogKj0gbGVuO1xuICBzID0gTWF0aC5zaW4ocmFkKTtcbiAgYyA9IE1hdGguY29zKHJhZCk7XG4gIHQgPSAxIC0gYztcbiAgYTAwID0gYVswXTtcbiAgYTAxID0gYVsxXTtcbiAgYTAyID0gYVsyXTtcbiAgYTAzID0gYVszXTtcbiAgYTEwID0gYVs0XTtcbiAgYTExID0gYVs1XTtcbiAgYTEyID0gYVs2XTtcbiAgYTEzID0gYVs3XTtcbiAgYTIwID0gYVs4XTtcbiAgYTIxID0gYVs5XTtcbiAgYTIyID0gYVsxMF07XG4gIGEyMyA9IGFbMTFdOyAvLyBDb25zdHJ1Y3QgdGhlIGVsZW1lbnRzIG9mIHRoZSByb3RhdGlvbiBtYXRyaXhcblxuICBiMDAgPSB4ICogeCAqIHQgKyBjO1xuICBiMDEgPSB5ICogeCAqIHQgKyB6ICogcztcbiAgYjAyID0geiAqIHggKiB0IC0geSAqIHM7XG4gIGIxMCA9IHggKiB5ICogdCAtIHogKiBzO1xuICBiMTEgPSB5ICogeSAqIHQgKyBjO1xuICBiMTIgPSB6ICogeSAqIHQgKyB4ICogcztcbiAgYjIwID0geCAqIHogKiB0ICsgeSAqIHM7XG4gIGIyMSA9IHkgKiB6ICogdCAtIHggKiBzO1xuICBiMjIgPSB6ICogeiAqIHQgKyBjOyAvLyBQZXJmb3JtIHJvdGF0aW9uLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuXG4gIG91dFswXSA9IGEwMCAqIGIwMCArIGExMCAqIGIwMSArIGEyMCAqIGIwMjtcbiAgb3V0WzFdID0gYTAxICogYjAwICsgYTExICogYjAxICsgYTIxICogYjAyO1xuICBvdXRbMl0gPSBhMDIgKiBiMDAgKyBhMTIgKiBiMDEgKyBhMjIgKiBiMDI7XG4gIG91dFszXSA9IGEwMyAqIGIwMCArIGExMyAqIGIwMSArIGEyMyAqIGIwMjtcbiAgb3V0WzRdID0gYTAwICogYjEwICsgYTEwICogYjExICsgYTIwICogYjEyO1xuICBvdXRbNV0gPSBhMDEgKiBiMTAgKyBhMTEgKiBiMTEgKyBhMjEgKiBiMTI7XG4gIG91dFs2XSA9IGEwMiAqIGIxMCArIGExMiAqIGIxMSArIGEyMiAqIGIxMjtcbiAgb3V0WzddID0gYTAzICogYjEwICsgYTEzICogYjExICsgYTIzICogYjEyO1xuICBvdXRbOF0gPSBhMDAgKiBiMjAgKyBhMTAgKiBiMjEgKyBhMjAgKiBiMjI7XG4gIG91dFs5XSA9IGEwMSAqIGIyMCArIGExMSAqIGIyMSArIGEyMSAqIGIyMjtcbiAgb3V0WzEwXSA9IGEwMiAqIGIyMCArIGExMiAqIGIyMSArIGEyMiAqIGIyMjtcbiAgb3V0WzExXSA9IGEwMyAqIGIyMCArIGExMyAqIGIyMSArIGEyMyAqIGIyMjtcblxuICBpZiAoYSAhPT0gb3V0KSB7XG4gICAgLy8gSWYgdGhlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gZGlmZmVyLCBjb3B5IHRoZSB1bmNoYW5nZWQgbGFzdCByb3dcbiAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICBvdXRbMTVdID0gYVsxNV07XG4gIH1cblxuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJvdGF0ZXMgYSBtYXRyaXggYnkgdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWCBheGlzXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWChvdXQsIGEsIHJhZCkge1xuICB2YXIgcyA9IE1hdGguc2luKHJhZCk7XG4gIHZhciBjID0gTWF0aC5jb3MocmFkKTtcbiAgdmFyIGExMCA9IGFbNF07XG4gIHZhciBhMTEgPSBhWzVdO1xuICB2YXIgYTEyID0gYVs2XTtcbiAgdmFyIGExMyA9IGFbN107XG4gIHZhciBhMjAgPSBhWzhdO1xuICB2YXIgYTIxID0gYVs5XTtcbiAgdmFyIGEyMiA9IGFbMTBdO1xuICB2YXIgYTIzID0gYVsxMV07XG5cbiAgaWYgKGEgIT09IG91dCkge1xuICAgIC8vIElmIHRoZSBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIGRpZmZlciwgY29weSB0aGUgdW5jaGFuZ2VkIHJvd3NcbiAgICBvdXRbMF0gPSBhWzBdO1xuICAgIG91dFsxXSA9IGFbMV07XG4gICAgb3V0WzJdID0gYVsyXTtcbiAgICBvdXRbM10gPSBhWzNdO1xuICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICBvdXRbMTNdID0gYVsxM107XG4gICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgfSAvLyBQZXJmb3JtIGF4aXMtc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG5cblxuICBvdXRbNF0gPSBhMTAgKiBjICsgYTIwICogcztcbiAgb3V0WzVdID0gYTExICogYyArIGEyMSAqIHM7XG4gIG91dFs2XSA9IGExMiAqIGMgKyBhMjIgKiBzO1xuICBvdXRbN10gPSBhMTMgKiBjICsgYTIzICogcztcbiAgb3V0WzhdID0gYTIwICogYyAtIGExMCAqIHM7XG4gIG91dFs5XSA9IGEyMSAqIGMgLSBhMTEgKiBzO1xuICBvdXRbMTBdID0gYTIyICogYyAtIGExMiAqIHM7XG4gIG91dFsxMV0gPSBhMjMgKiBjIC0gYTEzICogcztcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSb3RhdGVzIGEgbWF0cml4IGJ5IHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFkgYXhpc1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcclxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVkob3V0LCBhLCByYWQpIHtcbiAgdmFyIHMgPSBNYXRoLnNpbihyYWQpO1xuICB2YXIgYyA9IE1hdGguY29zKHJhZCk7XG4gIHZhciBhMDAgPSBhWzBdO1xuICB2YXIgYTAxID0gYVsxXTtcbiAgdmFyIGEwMiA9IGFbMl07XG4gIHZhciBhMDMgPSBhWzNdO1xuICB2YXIgYTIwID0gYVs4XTtcbiAgdmFyIGEyMSA9IGFbOV07XG4gIHZhciBhMjIgPSBhWzEwXTtcbiAgdmFyIGEyMyA9IGFbMTFdO1xuXG4gIGlmIChhICE9PSBvdXQpIHtcbiAgICAvLyBJZiB0aGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBkaWZmZXIsIGNvcHkgdGhlIHVuY2hhbmdlZCByb3dzXG4gICAgb3V0WzRdID0gYVs0XTtcbiAgICBvdXRbNV0gPSBhWzVdO1xuICAgIG91dFs2XSA9IGFbNl07XG4gICAgb3V0WzddID0gYVs3XTtcbiAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICBvdXRbMTVdID0gYVsxNV07XG4gIH0gLy8gUGVyZm9ybSBheGlzLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuXG5cbiAgb3V0WzBdID0gYTAwICogYyAtIGEyMCAqIHM7XG4gIG91dFsxXSA9IGEwMSAqIGMgLSBhMjEgKiBzO1xuICBvdXRbMl0gPSBhMDIgKiBjIC0gYTIyICogcztcbiAgb3V0WzNdID0gYTAzICogYyAtIGEyMyAqIHM7XG4gIG91dFs4XSA9IGEwMCAqIHMgKyBhMjAgKiBjO1xuICBvdXRbOV0gPSBhMDEgKiBzICsgYTIxICogYztcbiAgb3V0WzEwXSA9IGEwMiAqIHMgKyBhMjIgKiBjO1xuICBvdXRbMTFdID0gYTAzICogcyArIGEyMyAqIGM7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUm90YXRlcyBhIG1hdHJpeCBieSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBaIGF4aXNcclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVaKG91dCwgYSwgcmFkKSB7XG4gIHZhciBzID0gTWF0aC5zaW4ocmFkKTtcbiAgdmFyIGMgPSBNYXRoLmNvcyhyYWQpO1xuICB2YXIgYTAwID0gYVswXTtcbiAgdmFyIGEwMSA9IGFbMV07XG4gIHZhciBhMDIgPSBhWzJdO1xuICB2YXIgYTAzID0gYVszXTtcbiAgdmFyIGExMCA9IGFbNF07XG4gIHZhciBhMTEgPSBhWzVdO1xuICB2YXIgYTEyID0gYVs2XTtcbiAgdmFyIGExMyA9IGFbN107XG5cbiAgaWYgKGEgIT09IG91dCkge1xuICAgIC8vIElmIHRoZSBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIGRpZmZlciwgY29weSB0aGUgdW5jaGFuZ2VkIGxhc3Qgcm93XG4gICAgb3V0WzhdID0gYVs4XTtcbiAgICBvdXRbOV0gPSBhWzldO1xuICAgIG91dFsxMF0gPSBhWzEwXTtcbiAgICBvdXRbMTFdID0gYVsxMV07XG4gICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgb3V0WzE1XSA9IGFbMTVdO1xuICB9IC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cblxuXG4gIG91dFswXSA9IGEwMCAqIGMgKyBhMTAgKiBzO1xuICBvdXRbMV0gPSBhMDEgKiBjICsgYTExICogcztcbiAgb3V0WzJdID0gYTAyICogYyArIGExMiAqIHM7XG4gIG91dFszXSA9IGEwMyAqIGMgKyBhMTMgKiBzO1xuICBvdXRbNF0gPSBhMTAgKiBjIC0gYTAwICogcztcbiAgb3V0WzVdID0gYTExICogYyAtIGEwMSAqIHM7XG4gIG91dFs2XSA9IGExMiAqIGMgLSBhMDIgKiBzO1xuICBvdXRbN10gPSBhMTMgKiBjIC0gYTAzICogcztcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSB2ZWN0b3IgdHJhbnNsYXRpb25cclxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XHJcbiAqXHJcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xyXG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgZGVzdCwgdmVjKTtcclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxyXG4gKiBAcGFyYW0ge3ZlYzN9IHYgVHJhbnNsYXRpb24gdmVjdG9yXHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tVHJhbnNsYXRpb24ob3V0LCB2KSB7XG4gIG91dFswXSA9IDE7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IDE7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDA7XG4gIG91dFs5XSA9IDA7XG4gIG91dFsxMF0gPSAxO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IHZbMF07XG4gIG91dFsxM10gPSB2WzFdO1xuICBvdXRbMTRdID0gdlsyXTtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgdmVjdG9yIHNjYWxpbmdcclxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XHJcbiAqXHJcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xyXG4gKiAgICAgbWF0NC5zY2FsZShkZXN0LCBkZXN0LCB2ZWMpO1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XHJcbiAqIEBwYXJhbSB7dmVjM30gdiBTY2FsaW5nIHZlY3RvclxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVNjYWxpbmcob3V0LCB2KSB7XG4gIG91dFswXSA9IHZbMF07XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IHZbMV07XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDA7XG4gIG91dFs5XSA9IDA7XG4gIG91dFsxMF0gPSB2WzJdO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IDA7XG4gIG91dFsxM10gPSAwO1xuICBvdXRbMTRdID0gMDtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgZ2l2ZW4gYW5nbGUgYXJvdW5kIGEgZ2l2ZW4gYXhpc1xyXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcclxuICpcclxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XHJcbiAqICAgICBtYXQ0LnJvdGF0ZShkZXN0LCBkZXN0LCByYWQsIGF4aXMpO1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XHJcbiAqIEBwYXJhbSB7dmVjM30gYXhpcyB0aGUgYXhpcyB0byByb3RhdGUgYXJvdW5kXHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUm90YXRpb24ob3V0LCByYWQsIGF4aXMpIHtcbiAgdmFyIHggPSBheGlzWzBdLFxuICAgICAgeSA9IGF4aXNbMV0sXG4gICAgICB6ID0gYXhpc1syXTtcbiAgdmFyIGxlbiA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xuICB2YXIgcywgYywgdDtcblxuICBpZiAobGVuIDwgZ2xNYXRyaXguRVBTSUxPTikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgbGVuID0gMSAvIGxlbjtcbiAgeCAqPSBsZW47XG4gIHkgKj0gbGVuO1xuICB6ICo9IGxlbjtcbiAgcyA9IE1hdGguc2luKHJhZCk7XG4gIGMgPSBNYXRoLmNvcyhyYWQpO1xuICB0ID0gMSAtIGM7IC8vIFBlcmZvcm0gcm90YXRpb24tc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG5cbiAgb3V0WzBdID0geCAqIHggKiB0ICsgYztcbiAgb3V0WzFdID0geSAqIHggKiB0ICsgeiAqIHM7XG4gIG91dFsyXSA9IHogKiB4ICogdCAtIHkgKiBzO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSB4ICogeSAqIHQgLSB6ICogcztcbiAgb3V0WzVdID0geSAqIHkgKiB0ICsgYztcbiAgb3V0WzZdID0geiAqIHkgKiB0ICsgeCAqIHM7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IHggKiB6ICogdCArIHkgKiBzO1xuICBvdXRbOV0gPSB5ICogeiAqIHQgLSB4ICogcztcbiAgb3V0WzEwXSA9IHogKiB6ICogdCArIGM7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gMDtcbiAgb3V0WzEzXSA9IDA7XG4gIG91dFsxNF0gPSAwO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWCBheGlzXHJcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxyXG4gKlxyXG4gKiAgICAgbWF0NC5pZGVudGl0eShkZXN0KTtcclxuICogICAgIG1hdDQucm90YXRlWChkZXN0LCBkZXN0LCByYWQpO1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tWFJvdGF0aW9uKG91dCwgcmFkKSB7XG4gIHZhciBzID0gTWF0aC5zaW4ocmFkKTtcbiAgdmFyIGMgPSBNYXRoLmNvcyhyYWQpOyAvLyBQZXJmb3JtIGF4aXMtc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG5cbiAgb3V0WzBdID0gMTtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gMDtcbiAgb3V0WzVdID0gYztcbiAgb3V0WzZdID0gcztcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMDtcbiAgb3V0WzldID0gLXM7XG4gIG91dFsxMF0gPSBjO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IDA7XG4gIG91dFsxM10gPSAwO1xuICBvdXRbMTRdID0gMDtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFkgYXhpc1xyXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcclxuICpcclxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XHJcbiAqICAgICBtYXQ0LnJvdGF0ZVkoZGVzdCwgZGVzdCwgcmFkKTtcclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxyXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVlSb3RhdGlvbihvdXQsIHJhZCkge1xuICB2YXIgcyA9IE1hdGguc2luKHJhZCk7XG4gIHZhciBjID0gTWF0aC5jb3MocmFkKTsgLy8gUGVyZm9ybSBheGlzLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuXG4gIG91dFswXSA9IGM7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IC1zO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAwO1xuICBvdXRbNV0gPSAxO1xuICBvdXRbNl0gPSAwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSBzO1xuICBvdXRbOV0gPSAwO1xuICBvdXRbMTBdID0gYztcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE0XSA9IDA7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBaIGF4aXNcclxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XHJcbiAqXHJcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xyXG4gKiAgICAgbWF0NC5yb3RhdGVaKGRlc3QsIGRlc3QsIHJhZCk7XHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21aUm90YXRpb24ob3V0LCByYWQpIHtcbiAgdmFyIHMgPSBNYXRoLnNpbihyYWQpO1xuICB2YXIgYyA9IE1hdGguY29zKHJhZCk7IC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cblxuICBvdXRbMF0gPSBjO1xuICBvdXRbMV0gPSBzO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAtcztcbiAgb3V0WzVdID0gYztcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMDtcbiAgb3V0WzldID0gMDtcbiAgb3V0WzEwXSA9IDE7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gMDtcbiAgb3V0WzEzXSA9IDA7XG4gIG91dFsxNF0gPSAwO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSBxdWF0ZXJuaW9uIHJvdGF0aW9uIGFuZCB2ZWN0b3IgdHJhbnNsYXRpb25cclxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XHJcbiAqXHJcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xyXG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgdmVjKTtcclxuICogICAgIGxldCBxdWF0TWF0ID0gbWF0NC5jcmVhdGUoKTtcclxuICogICAgIHF1YXQ0LnRvTWF0NChxdWF0LCBxdWF0TWF0KTtcclxuICogICAgIG1hdDQubXVsdGlwbHkoZGVzdCwgcXVhdE1hdCk7XHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcclxuICogQHBhcmFtIHtxdWF0NH0gcSBSb3RhdGlvbiBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSB7dmVjM30gdiBUcmFuc2xhdGlvbiB2ZWN0b3JcclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uKG91dCwgcSwgdikge1xuICAvLyBRdWF0ZXJuaW9uIG1hdGhcbiAgdmFyIHggPSBxWzBdLFxuICAgICAgeSA9IHFbMV0sXG4gICAgICB6ID0gcVsyXSxcbiAgICAgIHcgPSBxWzNdO1xuICB2YXIgeDIgPSB4ICsgeDtcbiAgdmFyIHkyID0geSArIHk7XG4gIHZhciB6MiA9IHogKyB6O1xuICB2YXIgeHggPSB4ICogeDI7XG4gIHZhciB4eSA9IHggKiB5MjtcbiAgdmFyIHh6ID0geCAqIHoyO1xuICB2YXIgeXkgPSB5ICogeTI7XG4gIHZhciB5eiA9IHkgKiB6MjtcbiAgdmFyIHp6ID0geiAqIHoyO1xuICB2YXIgd3ggPSB3ICogeDI7XG4gIHZhciB3eSA9IHcgKiB5MjtcbiAgdmFyIHd6ID0gdyAqIHoyO1xuICBvdXRbMF0gPSAxIC0gKHl5ICsgenopO1xuICBvdXRbMV0gPSB4eSArIHd6O1xuICBvdXRbMl0gPSB4eiAtIHd5O1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSB4eSAtIHd6O1xuICBvdXRbNV0gPSAxIC0gKHh4ICsgenopO1xuICBvdXRbNl0gPSB5eiArIHd4O1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSB4eiArIHd5O1xuICBvdXRbOV0gPSB5eiAtIHd4O1xuICBvdXRbMTBdID0gMSAtICh4eCArIHl5KTtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSB2WzBdO1xuICBvdXRbMTNdID0gdlsxXTtcbiAgb3V0WzE0XSA9IHZbMl07XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgbWF0NCBmcm9tIGEgZHVhbCBxdWF0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCBNYXRyaXhcclxuICogQHBhcmFtIHtxdWF0Mn0gYSBEdWFsIFF1YXRlcm5pb25cclxuICogQHJldHVybnMge21hdDR9IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUXVhdDIob3V0LCBhKSB7XG4gIHZhciB0cmFuc2xhdGlvbiA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDMpO1xuICB2YXIgYnggPSAtYVswXSxcbiAgICAgIGJ5ID0gLWFbMV0sXG4gICAgICBieiA9IC1hWzJdLFxuICAgICAgYncgPSBhWzNdLFxuICAgICAgYXggPSBhWzRdLFxuICAgICAgYXkgPSBhWzVdLFxuICAgICAgYXogPSBhWzZdLFxuICAgICAgYXcgPSBhWzddO1xuICB2YXIgbWFnbml0dWRlID0gYnggKiBieCArIGJ5ICogYnkgKyBieiAqIGJ6ICsgYncgKiBidzsgLy9Pbmx5IHNjYWxlIGlmIGl0IG1ha2VzIHNlbnNlXG5cbiAgaWYgKG1hZ25pdHVkZSA+IDApIHtcbiAgICB0cmFuc2xhdGlvblswXSA9IChheCAqIGJ3ICsgYXcgKiBieCArIGF5ICogYnogLSBheiAqIGJ5KSAqIDIgLyBtYWduaXR1ZGU7XG4gICAgdHJhbnNsYXRpb25bMV0gPSAoYXkgKiBidyArIGF3ICogYnkgKyBheiAqIGJ4IC0gYXggKiBieikgKiAyIC8gbWFnbml0dWRlO1xuICAgIHRyYW5zbGF0aW9uWzJdID0gKGF6ICogYncgKyBhdyAqIGJ6ICsgYXggKiBieSAtIGF5ICogYngpICogMiAvIG1hZ25pdHVkZTtcbiAgfSBlbHNlIHtcbiAgICB0cmFuc2xhdGlvblswXSA9IChheCAqIGJ3ICsgYXcgKiBieCArIGF5ICogYnogLSBheiAqIGJ5KSAqIDI7XG4gICAgdHJhbnNsYXRpb25bMV0gPSAoYXkgKiBidyArIGF3ICogYnkgKyBheiAqIGJ4IC0gYXggKiBieikgKiAyO1xuICAgIHRyYW5zbGF0aW9uWzJdID0gKGF6ICogYncgKyBhdyAqIGJ6ICsgYXggKiBieSAtIGF5ICogYngpICogMjtcbiAgfVxuXG4gIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uKG91dCwgYSwgdHJhbnNsYXRpb24pO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJldHVybnMgdGhlIHRyYW5zbGF0aW9uIHZlY3RvciBjb21wb25lbnQgb2YgYSB0cmFuc2Zvcm1hdGlvblxyXG4gKiAgbWF0cml4LiBJZiBhIG1hdHJpeCBpcyBidWlsdCB3aXRoIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uLFxyXG4gKiAgdGhlIHJldHVybmVkIHZlY3RvciB3aWxsIGJlIHRoZSBzYW1lIGFzIHRoZSB0cmFuc2xhdGlvbiB2ZWN0b3JcclxuICogIG9yaWdpbmFsbHkgc3VwcGxpZWQuXHJcbiAqIEBwYXJhbSAge3ZlYzN9IG91dCBWZWN0b3IgdG8gcmVjZWl2ZSB0cmFuc2xhdGlvbiBjb21wb25lbnRcclxuICogQHBhcmFtICB7bWF0NH0gbWF0IE1hdHJpeCB0byBiZSBkZWNvbXBvc2VkIChpbnB1dClcclxuICogQHJldHVybiB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNsYXRpb24ob3V0LCBtYXQpIHtcbiAgb3V0WzBdID0gbWF0WzEyXTtcbiAgb3V0WzFdID0gbWF0WzEzXTtcbiAgb3V0WzJdID0gbWF0WzE0XTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBzY2FsaW5nIGZhY3RvciBjb21wb25lbnQgb2YgYSB0cmFuc2Zvcm1hdGlvblxyXG4gKiAgbWF0cml4LiBJZiBhIG1hdHJpeCBpcyBidWlsdCB3aXRoIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uU2NhbGVcclxuICogIHdpdGggYSBub3JtYWxpemVkIFF1YXRlcm5pb24gcGFyYW10ZXIsIHRoZSByZXR1cm5lZCB2ZWN0b3Igd2lsbCBiZVxyXG4gKiAgdGhlIHNhbWUgYXMgdGhlIHNjYWxpbmcgdmVjdG9yXHJcbiAqICBvcmlnaW5hbGx5IHN1cHBsaWVkLlxyXG4gKiBAcGFyYW0gIHt2ZWMzfSBvdXQgVmVjdG9yIHRvIHJlY2VpdmUgc2NhbGluZyBmYWN0b3IgY29tcG9uZW50XHJcbiAqIEBwYXJhbSAge21hdDR9IG1hdCBNYXRyaXggdG8gYmUgZGVjb21wb3NlZCAoaW5wdXQpXHJcbiAqIEByZXR1cm4ge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjYWxpbmcob3V0LCBtYXQpIHtcbiAgdmFyIG0xMSA9IG1hdFswXTtcbiAgdmFyIG0xMiA9IG1hdFsxXTtcbiAgdmFyIG0xMyA9IG1hdFsyXTtcbiAgdmFyIG0yMSA9IG1hdFs0XTtcbiAgdmFyIG0yMiA9IG1hdFs1XTtcbiAgdmFyIG0yMyA9IG1hdFs2XTtcbiAgdmFyIG0zMSA9IG1hdFs4XTtcbiAgdmFyIG0zMiA9IG1hdFs5XTtcbiAgdmFyIG0zMyA9IG1hdFsxMF07XG4gIG91dFswXSA9IE1hdGguc3FydChtMTEgKiBtMTEgKyBtMTIgKiBtMTIgKyBtMTMgKiBtMTMpO1xuICBvdXRbMV0gPSBNYXRoLnNxcnQobTIxICogbTIxICsgbTIyICogbTIyICsgbTIzICogbTIzKTtcbiAgb3V0WzJdID0gTWF0aC5zcXJ0KG0zMSAqIG0zMSArIG0zMiAqIG0zMiArIG0zMyAqIG0zMyk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUmV0dXJucyBhIHF1YXRlcm5pb24gcmVwcmVzZW50aW5nIHRoZSByb3RhdGlvbmFsIGNvbXBvbmVudFxyXG4gKiAgb2YgYSB0cmFuc2Zvcm1hdGlvbiBtYXRyaXguIElmIGEgbWF0cml4IGlzIGJ1aWx0IHdpdGhcclxuICogIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uLCB0aGUgcmV0dXJuZWQgcXVhdGVybmlvbiB3aWxsIGJlIHRoZVxyXG4gKiAgc2FtZSBhcyB0aGUgcXVhdGVybmlvbiBvcmlnaW5hbGx5IHN1cHBsaWVkLlxyXG4gKiBAcGFyYW0ge3F1YXR9IG91dCBRdWF0ZXJuaW9uIHRvIHJlY2VpdmUgdGhlIHJvdGF0aW9uIGNvbXBvbmVudFxyXG4gKiBAcGFyYW0ge21hdDR9IG1hdCBNYXRyaXggdG8gYmUgZGVjb21wb3NlZCAoaW5wdXQpXHJcbiAqIEByZXR1cm4ge3F1YXR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdGF0aW9uKG91dCwgbWF0KSB7XG4gIC8vIEFsZ29yaXRobSB0YWtlbiBmcm9tIGh0dHA6Ly93d3cuZXVjbGlkZWFuc3BhY2UuY29tL21hdGhzL2dlb21ldHJ5L3JvdGF0aW9ucy9jb252ZXJzaW9ucy9tYXRyaXhUb1F1YXRlcm5pb24vaW5kZXguaHRtXG4gIHZhciB0cmFjZSA9IG1hdFswXSArIG1hdFs1XSArIG1hdFsxMF07XG4gIHZhciBTID0gMDtcblxuICBpZiAodHJhY2UgPiAwKSB7XG4gICAgUyA9IE1hdGguc3FydCh0cmFjZSArIDEuMCkgKiAyO1xuICAgIG91dFszXSA9IDAuMjUgKiBTO1xuICAgIG91dFswXSA9IChtYXRbNl0gLSBtYXRbOV0pIC8gUztcbiAgICBvdXRbMV0gPSAobWF0WzhdIC0gbWF0WzJdKSAvIFM7XG4gICAgb3V0WzJdID0gKG1hdFsxXSAtIG1hdFs0XSkgLyBTO1xuICB9IGVsc2UgaWYgKG1hdFswXSA+IG1hdFs1XSAmJiBtYXRbMF0gPiBtYXRbMTBdKSB7XG4gICAgUyA9IE1hdGguc3FydCgxLjAgKyBtYXRbMF0gLSBtYXRbNV0gLSBtYXRbMTBdKSAqIDI7XG4gICAgb3V0WzNdID0gKG1hdFs2XSAtIG1hdFs5XSkgLyBTO1xuICAgIG91dFswXSA9IDAuMjUgKiBTO1xuICAgIG91dFsxXSA9IChtYXRbMV0gKyBtYXRbNF0pIC8gUztcbiAgICBvdXRbMl0gPSAobWF0WzhdICsgbWF0WzJdKSAvIFM7XG4gIH0gZWxzZSBpZiAobWF0WzVdID4gbWF0WzEwXSkge1xuICAgIFMgPSBNYXRoLnNxcnQoMS4wICsgbWF0WzVdIC0gbWF0WzBdIC0gbWF0WzEwXSkgKiAyO1xuICAgIG91dFszXSA9IChtYXRbOF0gLSBtYXRbMl0pIC8gUztcbiAgICBvdXRbMF0gPSAobWF0WzFdICsgbWF0WzRdKSAvIFM7XG4gICAgb3V0WzFdID0gMC4yNSAqIFM7XG4gICAgb3V0WzJdID0gKG1hdFs2XSArIG1hdFs5XSkgLyBTO1xuICB9IGVsc2Uge1xuICAgIFMgPSBNYXRoLnNxcnQoMS4wICsgbWF0WzEwXSAtIG1hdFswXSAtIG1hdFs1XSkgKiAyO1xuICAgIG91dFszXSA9IChtYXRbMV0gLSBtYXRbNF0pIC8gUztcbiAgICBvdXRbMF0gPSAobWF0WzhdICsgbWF0WzJdKSAvIFM7XG4gICAgb3V0WzFdID0gKG1hdFs2XSArIG1hdFs5XSkgLyBTO1xuICAgIG91dFsyXSA9IDAuMjUgKiBTO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSBxdWF0ZXJuaW9uIHJvdGF0aW9uLCB2ZWN0b3IgdHJhbnNsYXRpb24gYW5kIHZlY3RvciBzY2FsZVxyXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcclxuICpcclxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XHJcbiAqICAgICBtYXQ0LnRyYW5zbGF0ZShkZXN0LCB2ZWMpO1xyXG4gKiAgICAgbGV0IHF1YXRNYXQgPSBtYXQ0LmNyZWF0ZSgpO1xyXG4gKiAgICAgcXVhdDQudG9NYXQ0KHF1YXQsIHF1YXRNYXQpO1xyXG4gKiAgICAgbWF0NC5tdWx0aXBseShkZXN0LCBxdWF0TWF0KTtcclxuICogICAgIG1hdDQuc2NhbGUoZGVzdCwgc2NhbGUpXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcclxuICogQHBhcmFtIHtxdWF0NH0gcSBSb3RhdGlvbiBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSB7dmVjM30gdiBUcmFuc2xhdGlvbiB2ZWN0b3JcclxuICogQHBhcmFtIHt2ZWMzfSBzIFNjYWxpbmcgdmVjdG9yXHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUm90YXRpb25UcmFuc2xhdGlvblNjYWxlKG91dCwgcSwgdiwgcykge1xuICAvLyBRdWF0ZXJuaW9uIG1hdGhcbiAgdmFyIHggPSBxWzBdLFxuICAgICAgeSA9IHFbMV0sXG4gICAgICB6ID0gcVsyXSxcbiAgICAgIHcgPSBxWzNdO1xuICB2YXIgeDIgPSB4ICsgeDtcbiAgdmFyIHkyID0geSArIHk7XG4gIHZhciB6MiA9IHogKyB6O1xuICB2YXIgeHggPSB4ICogeDI7XG4gIHZhciB4eSA9IHggKiB5MjtcbiAgdmFyIHh6ID0geCAqIHoyO1xuICB2YXIgeXkgPSB5ICogeTI7XG4gIHZhciB5eiA9IHkgKiB6MjtcbiAgdmFyIHp6ID0geiAqIHoyO1xuICB2YXIgd3ggPSB3ICogeDI7XG4gIHZhciB3eSA9IHcgKiB5MjtcbiAgdmFyIHd6ID0gdyAqIHoyO1xuICB2YXIgc3ggPSBzWzBdO1xuICB2YXIgc3kgPSBzWzFdO1xuICB2YXIgc3ogPSBzWzJdO1xuICBvdXRbMF0gPSAoMSAtICh5eSArIHp6KSkgKiBzeDtcbiAgb3V0WzFdID0gKHh5ICsgd3opICogc3g7XG4gIG91dFsyXSA9ICh4eiAtIHd5KSAqIHN4O1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAoeHkgLSB3eikgKiBzeTtcbiAgb3V0WzVdID0gKDEgLSAoeHggKyB6eikpICogc3k7XG4gIG91dFs2XSA9ICh5eiArIHd4KSAqIHN5O1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAoeHogKyB3eSkgKiBzejtcbiAgb3V0WzldID0gKHl6IC0gd3gpICogc3o7XG4gIG91dFsxMF0gPSAoMSAtICh4eCArIHl5KSkgKiBzejtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSB2WzBdO1xuICBvdXRbMTNdID0gdlsxXTtcbiAgb3V0WzE0XSA9IHZbMl07XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHF1YXRlcm5pb24gcm90YXRpb24sIHZlY3RvciB0cmFuc2xhdGlvbiBhbmQgdmVjdG9yIHNjYWxlLCByb3RhdGluZyBhbmQgc2NhbGluZyBhcm91bmQgdGhlIGdpdmVuIG9yaWdpblxyXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcclxuICpcclxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XHJcbiAqICAgICBtYXQ0LnRyYW5zbGF0ZShkZXN0LCB2ZWMpO1xyXG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgb3JpZ2luKTtcclxuICogICAgIGxldCBxdWF0TWF0ID0gbWF0NC5jcmVhdGUoKTtcclxuICogICAgIHF1YXQ0LnRvTWF0NChxdWF0LCBxdWF0TWF0KTtcclxuICogICAgIG1hdDQubXVsdGlwbHkoZGVzdCwgcXVhdE1hdCk7XHJcbiAqICAgICBtYXQ0LnNjYWxlKGRlc3QsIHNjYWxlKVxyXG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgbmVnYXRpdmVPcmlnaW4pO1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XHJcbiAqIEBwYXJhbSB7cXVhdDR9IHEgUm90YXRpb24gcXVhdGVybmlvblxyXG4gKiBAcGFyYW0ge3ZlYzN9IHYgVHJhbnNsYXRpb24gdmVjdG9yXHJcbiAqIEBwYXJhbSB7dmVjM30gcyBTY2FsaW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge3ZlYzN9IG8gVGhlIG9yaWdpbiB2ZWN0b3IgYXJvdW5kIHdoaWNoIHRvIHNjYWxlIGFuZCByb3RhdGVcclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uU2NhbGVPcmlnaW4ob3V0LCBxLCB2LCBzLCBvKSB7XG4gIC8vIFF1YXRlcm5pb24gbWF0aFxuICB2YXIgeCA9IHFbMF0sXG4gICAgICB5ID0gcVsxXSxcbiAgICAgIHogPSBxWzJdLFxuICAgICAgdyA9IHFbM107XG4gIHZhciB4MiA9IHggKyB4O1xuICB2YXIgeTIgPSB5ICsgeTtcbiAgdmFyIHoyID0geiArIHo7XG4gIHZhciB4eCA9IHggKiB4MjtcbiAgdmFyIHh5ID0geCAqIHkyO1xuICB2YXIgeHogPSB4ICogejI7XG4gIHZhciB5eSA9IHkgKiB5MjtcbiAgdmFyIHl6ID0geSAqIHoyO1xuICB2YXIgenogPSB6ICogejI7XG4gIHZhciB3eCA9IHcgKiB4MjtcbiAgdmFyIHd5ID0gdyAqIHkyO1xuICB2YXIgd3ogPSB3ICogejI7XG4gIHZhciBzeCA9IHNbMF07XG4gIHZhciBzeSA9IHNbMV07XG4gIHZhciBzeiA9IHNbMl07XG4gIHZhciBveCA9IG9bMF07XG4gIHZhciBveSA9IG9bMV07XG4gIHZhciBveiA9IG9bMl07XG4gIHZhciBvdXQwID0gKDEgLSAoeXkgKyB6eikpICogc3g7XG4gIHZhciBvdXQxID0gKHh5ICsgd3opICogc3g7XG4gIHZhciBvdXQyID0gKHh6IC0gd3kpICogc3g7XG4gIHZhciBvdXQ0ID0gKHh5IC0gd3opICogc3k7XG4gIHZhciBvdXQ1ID0gKDEgLSAoeHggKyB6eikpICogc3k7XG4gIHZhciBvdXQ2ID0gKHl6ICsgd3gpICogc3k7XG4gIHZhciBvdXQ4ID0gKHh6ICsgd3kpICogc3o7XG4gIHZhciBvdXQ5ID0gKHl6IC0gd3gpICogc3o7XG4gIHZhciBvdXQxMCA9ICgxIC0gKHh4ICsgeXkpKSAqIHN6O1xuICBvdXRbMF0gPSBvdXQwO1xuICBvdXRbMV0gPSBvdXQxO1xuICBvdXRbMl0gPSBvdXQyO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSBvdXQ0O1xuICBvdXRbNV0gPSBvdXQ1O1xuICBvdXRbNl0gPSBvdXQ2O1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSBvdXQ4O1xuICBvdXRbOV0gPSBvdXQ5O1xuICBvdXRbMTBdID0gb3V0MTA7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gdlswXSArIG94IC0gKG91dDAgKiBveCArIG91dDQgKiBveSArIG91dDggKiBveik7XG4gIG91dFsxM10gPSB2WzFdICsgb3kgLSAob3V0MSAqIG94ICsgb3V0NSAqIG95ICsgb3V0OSAqIG96KTtcbiAgb3V0WzE0XSA9IHZbMl0gKyBveiAtIChvdXQyICogb3ggKyBvdXQ2ICogb3kgKyBvdXQxMCAqIG96KTtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ2FsY3VsYXRlcyBhIDR4NCBtYXRyaXggZnJvbSB0aGUgZ2l2ZW4gcXVhdGVybmlvblxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XHJcbiAqIEBwYXJhbSB7cXVhdH0gcSBRdWF0ZXJuaW9uIHRvIGNyZWF0ZSBtYXRyaXggZnJvbVxyXG4gKlxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVF1YXQob3V0LCBxKSB7XG4gIHZhciB4ID0gcVswXSxcbiAgICAgIHkgPSBxWzFdLFxuICAgICAgeiA9IHFbMl0sXG4gICAgICB3ID0gcVszXTtcbiAgdmFyIHgyID0geCArIHg7XG4gIHZhciB5MiA9IHkgKyB5O1xuICB2YXIgejIgPSB6ICsgejtcbiAgdmFyIHh4ID0geCAqIHgyO1xuICB2YXIgeXggPSB5ICogeDI7XG4gIHZhciB5eSA9IHkgKiB5MjtcbiAgdmFyIHp4ID0geiAqIHgyO1xuICB2YXIgenkgPSB6ICogeTI7XG4gIHZhciB6eiA9IHogKiB6MjtcbiAgdmFyIHd4ID0gdyAqIHgyO1xuICB2YXIgd3kgPSB3ICogeTI7XG4gIHZhciB3eiA9IHcgKiB6MjtcbiAgb3V0WzBdID0gMSAtIHl5IC0geno7XG4gIG91dFsxXSA9IHl4ICsgd3o7XG4gIG91dFsyXSA9IHp4IC0gd3k7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IHl4IC0gd3o7XG4gIG91dFs1XSA9IDEgLSB4eCAtIHp6O1xuICBvdXRbNl0gPSB6eSArIHd4O1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSB6eCArIHd5O1xuICBvdXRbOV0gPSB6eSAtIHd4O1xuICBvdXRbMTBdID0gMSAtIHh4IC0geXk7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gMDtcbiAgb3V0WzEzXSA9IDA7XG4gIG91dFsxNF0gPSAwO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSBmcnVzdHVtIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBib3VuZHNcclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xyXG4gKiBAcGFyYW0ge051bWJlcn0gbGVmdCBMZWZ0IGJvdW5kIG9mIHRoZSBmcnVzdHVtXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSByaWdodCBSaWdodCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxyXG4gKiBAcGFyYW0ge051bWJlcn0gYm90dG9tIEJvdHRvbSBib3VuZCBvZiB0aGUgZnJ1c3R1bVxyXG4gKiBAcGFyYW0ge051bWJlcn0gdG9wIFRvcCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBmYXIgRmFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcnVzdHVtKG91dCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIpIHtcbiAgdmFyIHJsID0gMSAvIChyaWdodCAtIGxlZnQpO1xuICB2YXIgdGIgPSAxIC8gKHRvcCAtIGJvdHRvbSk7XG4gIHZhciBuZiA9IDEgLyAobmVhciAtIGZhcik7XG4gIG91dFswXSA9IG5lYXIgKiAyICogcmw7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IG5lYXIgKiAyICogdGI7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IChyaWdodCArIGxlZnQpICogcmw7XG4gIG91dFs5XSA9ICh0b3AgKyBib3R0b20pICogdGI7XG4gIG91dFsxMF0gPSAoZmFyICsgbmVhcikgKiBuZjtcbiAgb3V0WzExXSA9IC0xO1xuICBvdXRbMTJdID0gMDtcbiAgb3V0WzEzXSA9IDA7XG4gIG91dFsxNF0gPSBmYXIgKiBuZWFyICogMiAqIG5mO1xuICBvdXRbMTVdID0gMDtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSBwZXJzcGVjdGl2ZSBwcm9qZWN0aW9uIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBib3VuZHMuXHJcbiAqIFBhc3NpbmcgbnVsbC91bmRlZmluZWQvbm8gdmFsdWUgZm9yIGZhciB3aWxsIGdlbmVyYXRlIGluZmluaXRlIHByb2plY3Rpb24gbWF0cml4LlxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBmb3Z5IFZlcnRpY2FsIGZpZWxkIG9mIHZpZXcgaW4gcmFkaWFuc1xyXG4gKiBAcGFyYW0ge251bWJlcn0gYXNwZWN0IEFzcGVjdCByYXRpby4gdHlwaWNhbGx5IHZpZXdwb3J0IHdpZHRoL2hlaWdodFxyXG4gKiBAcGFyYW0ge251bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBmYXIgRmFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtLCBjYW4gYmUgbnVsbCBvciBJbmZpbml0eVxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcGVyc3BlY3RpdmUob3V0LCBmb3Z5LCBhc3BlY3QsIG5lYXIsIGZhcikge1xuICB2YXIgZiA9IDEuMCAvIE1hdGgudGFuKGZvdnkgLyAyKSxcbiAgICAgIG5mO1xuICBvdXRbMF0gPSBmIC8gYXNwZWN0O1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAwO1xuICBvdXRbNV0gPSBmO1xuICBvdXRbNl0gPSAwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAwO1xuICBvdXRbOV0gPSAwO1xuICBvdXRbMTFdID0gLTE7XG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE1XSA9IDA7XG5cbiAgaWYgKGZhciAhPSBudWxsICYmIGZhciAhPT0gSW5maW5pdHkpIHtcbiAgICBuZiA9IDEgLyAobmVhciAtIGZhcik7XG4gICAgb3V0WzEwXSA9IChmYXIgKyBuZWFyKSAqIG5mO1xuICAgIG91dFsxNF0gPSAyICogZmFyICogbmVhciAqIG5mO1xuICB9IGVsc2Uge1xuICAgIG91dFsxMF0gPSAtMTtcbiAgICBvdXRbMTRdID0gLTIgKiBuZWFyO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSBwZXJzcGVjdGl2ZSBwcm9qZWN0aW9uIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBmaWVsZCBvZiB2aWV3LlxyXG4gKiBUaGlzIGlzIHByaW1hcmlseSB1c2VmdWwgZm9yIGdlbmVyYXRpbmcgcHJvamVjdGlvbiBtYXRyaWNlcyB0byBiZSB1c2VkXHJcbiAqIHdpdGggdGhlIHN0aWxsIGV4cGVyaWVtZW50YWwgV2ViVlIgQVBJLlxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBmb3YgT2JqZWN0IGNvbnRhaW5pbmcgdGhlIGZvbGxvd2luZyB2YWx1ZXM6IHVwRGVncmVlcywgZG93bkRlZ3JlZXMsIGxlZnREZWdyZWVzLCByaWdodERlZ3JlZXNcclxuICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxyXG4gKiBAcGFyYW0ge251bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcGVyc3BlY3RpdmVGcm9tRmllbGRPZlZpZXcob3V0LCBmb3YsIG5lYXIsIGZhcikge1xuICB2YXIgdXBUYW4gPSBNYXRoLnRhbihmb3YudXBEZWdyZWVzICogTWF0aC5QSSAvIDE4MC4wKTtcbiAgdmFyIGRvd25UYW4gPSBNYXRoLnRhbihmb3YuZG93bkRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwLjApO1xuICB2YXIgbGVmdFRhbiA9IE1hdGgudGFuKGZvdi5sZWZ0RGVncmVlcyAqIE1hdGguUEkgLyAxODAuMCk7XG4gIHZhciByaWdodFRhbiA9IE1hdGgudGFuKGZvdi5yaWdodERlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwLjApO1xuICB2YXIgeFNjYWxlID0gMi4wIC8gKGxlZnRUYW4gKyByaWdodFRhbik7XG4gIHZhciB5U2NhbGUgPSAyLjAgLyAodXBUYW4gKyBkb3duVGFuKTtcbiAgb3V0WzBdID0geFNjYWxlO1xuICBvdXRbMV0gPSAwLjA7XG4gIG91dFsyXSA9IDAuMDtcbiAgb3V0WzNdID0gMC4wO1xuICBvdXRbNF0gPSAwLjA7XG4gIG91dFs1XSA9IHlTY2FsZTtcbiAgb3V0WzZdID0gMC4wO1xuICBvdXRbN10gPSAwLjA7XG4gIG91dFs4XSA9IC0oKGxlZnRUYW4gLSByaWdodFRhbikgKiB4U2NhbGUgKiAwLjUpO1xuICBvdXRbOV0gPSAodXBUYW4gLSBkb3duVGFuKSAqIHlTY2FsZSAqIDAuNTtcbiAgb3V0WzEwXSA9IGZhciAvIChuZWFyIC0gZmFyKTtcbiAgb3V0WzExXSA9IC0xLjA7XG4gIG91dFsxMl0gPSAwLjA7XG4gIG91dFsxM10gPSAwLjA7XG4gIG91dFsxNF0gPSBmYXIgKiBuZWFyIC8gKG5lYXIgLSBmYXIpO1xuICBvdXRbMTVdID0gMC4wO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIEdlbmVyYXRlcyBhIG9ydGhvZ29uYWwgcHJvamVjdGlvbiBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gYm91bmRzXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cclxuICogQHBhcmFtIHtudW1iZXJ9IGxlZnQgTGVmdCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxyXG4gKiBAcGFyYW0ge251bWJlcn0gcmlnaHQgUmlnaHQgYm91bmQgb2YgdGhlIGZydXN0dW1cclxuICogQHBhcmFtIHtudW1iZXJ9IGJvdHRvbSBCb3R0b20gYm91bmQgb2YgdGhlIGZydXN0dW1cclxuICogQHBhcmFtIHtudW1iZXJ9IHRvcCBUb3AgYm91bmQgb2YgdGhlIGZydXN0dW1cclxuICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxyXG4gKiBAcGFyYW0ge251bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gb3J0aG8ob3V0LCBsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhcikge1xuICB2YXIgbHIgPSAxIC8gKGxlZnQgLSByaWdodCk7XG4gIHZhciBidCA9IDEgLyAoYm90dG9tIC0gdG9wKTtcbiAgdmFyIG5mID0gMSAvIChuZWFyIC0gZmFyKTtcbiAgb3V0WzBdID0gLTIgKiBscjtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gMDtcbiAgb3V0WzVdID0gLTIgKiBidDtcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMDtcbiAgb3V0WzldID0gMDtcbiAgb3V0WzEwXSA9IDIgKiBuZjtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAobGVmdCArIHJpZ2h0KSAqIGxyO1xuICBvdXRbMTNdID0gKHRvcCArIGJvdHRvbSkgKiBidDtcbiAgb3V0WzE0XSA9IChmYXIgKyBuZWFyKSAqIG5mO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSBsb29rLWF0IG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBleWUgcG9zaXRpb24sIGZvY2FsIHBvaW50LCBhbmQgdXAgYXhpcy5cclxuICogSWYgeW91IHdhbnQgYSBtYXRyaXggdGhhdCBhY3R1YWxseSBtYWtlcyBhbiBvYmplY3QgbG9vayBhdCBhbm90aGVyIG9iamVjdCwgeW91IHNob3VsZCB1c2UgdGFyZ2V0VG8gaW5zdGVhZC5cclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xyXG4gKiBAcGFyYW0ge3ZlYzN9IGV5ZSBQb3NpdGlvbiBvZiB0aGUgdmlld2VyXHJcbiAqIEBwYXJhbSB7dmVjM30gY2VudGVyIFBvaW50IHRoZSB2aWV3ZXIgaXMgbG9va2luZyBhdFxyXG4gKiBAcGFyYW0ge3ZlYzN9IHVwIHZlYzMgcG9pbnRpbmcgdXBcclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGxvb2tBdChvdXQsIGV5ZSwgY2VudGVyLCB1cCkge1xuICB2YXIgeDAsIHgxLCB4MiwgeTAsIHkxLCB5MiwgejAsIHoxLCB6MiwgbGVuO1xuICB2YXIgZXlleCA9IGV5ZVswXTtcbiAgdmFyIGV5ZXkgPSBleWVbMV07XG4gIHZhciBleWV6ID0gZXllWzJdO1xuICB2YXIgdXB4ID0gdXBbMF07XG4gIHZhciB1cHkgPSB1cFsxXTtcbiAgdmFyIHVweiA9IHVwWzJdO1xuICB2YXIgY2VudGVyeCA9IGNlbnRlclswXTtcbiAgdmFyIGNlbnRlcnkgPSBjZW50ZXJbMV07XG4gIHZhciBjZW50ZXJ6ID0gY2VudGVyWzJdO1xuXG4gIGlmIChNYXRoLmFicyhleWV4IC0gY2VudGVyeCkgPCBnbE1hdHJpeC5FUFNJTE9OICYmIE1hdGguYWJzKGV5ZXkgLSBjZW50ZXJ5KSA8IGdsTWF0cml4LkVQU0lMT04gJiYgTWF0aC5hYnMoZXlleiAtIGNlbnRlcnopIDwgZ2xNYXRyaXguRVBTSUxPTikge1xuICAgIHJldHVybiBpZGVudGl0eShvdXQpO1xuICB9XG5cbiAgejAgPSBleWV4IC0gY2VudGVyeDtcbiAgejEgPSBleWV5IC0gY2VudGVyeTtcbiAgejIgPSBleWV6IC0gY2VudGVyejtcbiAgbGVuID0gMSAvIE1hdGguc3FydCh6MCAqIHowICsgejEgKiB6MSArIHoyICogejIpO1xuICB6MCAqPSBsZW47XG4gIHoxICo9IGxlbjtcbiAgejIgKj0gbGVuO1xuICB4MCA9IHVweSAqIHoyIC0gdXB6ICogejE7XG4gIHgxID0gdXB6ICogejAgLSB1cHggKiB6MjtcbiAgeDIgPSB1cHggKiB6MSAtIHVweSAqIHowO1xuICBsZW4gPSBNYXRoLnNxcnQoeDAgKiB4MCArIHgxICogeDEgKyB4MiAqIHgyKTtcblxuICBpZiAoIWxlbikge1xuICAgIHgwID0gMDtcbiAgICB4MSA9IDA7XG4gICAgeDIgPSAwO1xuICB9IGVsc2Uge1xuICAgIGxlbiA9IDEgLyBsZW47XG4gICAgeDAgKj0gbGVuO1xuICAgIHgxICo9IGxlbjtcbiAgICB4MiAqPSBsZW47XG4gIH1cblxuICB5MCA9IHoxICogeDIgLSB6MiAqIHgxO1xuICB5MSA9IHoyICogeDAgLSB6MCAqIHgyO1xuICB5MiA9IHowICogeDEgLSB6MSAqIHgwO1xuICBsZW4gPSBNYXRoLnNxcnQoeTAgKiB5MCArIHkxICogeTEgKyB5MiAqIHkyKTtcblxuICBpZiAoIWxlbikge1xuICAgIHkwID0gMDtcbiAgICB5MSA9IDA7XG4gICAgeTIgPSAwO1xuICB9IGVsc2Uge1xuICAgIGxlbiA9IDEgLyBsZW47XG4gICAgeTAgKj0gbGVuO1xuICAgIHkxICo9IGxlbjtcbiAgICB5MiAqPSBsZW47XG4gIH1cblxuICBvdXRbMF0gPSB4MDtcbiAgb3V0WzFdID0geTA7XG4gIG91dFsyXSA9IHowO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSB4MTtcbiAgb3V0WzVdID0geTE7XG4gIG91dFs2XSA9IHoxO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSB4MjtcbiAgb3V0WzldID0geTI7XG4gIG91dFsxMF0gPSB6MjtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAtKHgwICogZXlleCArIHgxICogZXlleSArIHgyICogZXlleik7XG4gIG91dFsxM10gPSAtKHkwICogZXlleCArIHkxICogZXlleSArIHkyICogZXlleik7XG4gIG91dFsxNF0gPSAtKHowICogZXlleCArIHoxICogZXlleSArIHoyICogZXlleik7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIEdlbmVyYXRlcyBhIG1hdHJpeCB0aGF0IG1ha2VzIHNvbWV0aGluZyBsb29rIGF0IHNvbWV0aGluZyBlbHNlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXHJcbiAqIEBwYXJhbSB7dmVjM30gZXllIFBvc2l0aW9uIG9mIHRoZSB2aWV3ZXJcclxuICogQHBhcmFtIHt2ZWMzfSBjZW50ZXIgUG9pbnQgdGhlIHZpZXdlciBpcyBsb29raW5nIGF0XHJcbiAqIEBwYXJhbSB7dmVjM30gdXAgdmVjMyBwb2ludGluZyB1cFxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdGFyZ2V0VG8ob3V0LCBleWUsIHRhcmdldCwgdXApIHtcbiAgdmFyIGV5ZXggPSBleWVbMF0sXG4gICAgICBleWV5ID0gZXllWzFdLFxuICAgICAgZXlleiA9IGV5ZVsyXSxcbiAgICAgIHVweCA9IHVwWzBdLFxuICAgICAgdXB5ID0gdXBbMV0sXG4gICAgICB1cHogPSB1cFsyXTtcbiAgdmFyIHowID0gZXlleCAtIHRhcmdldFswXSxcbiAgICAgIHoxID0gZXlleSAtIHRhcmdldFsxXSxcbiAgICAgIHoyID0gZXlleiAtIHRhcmdldFsyXTtcbiAgdmFyIGxlbiA9IHowICogejAgKyB6MSAqIHoxICsgejIgKiB6MjtcblxuICBpZiAobGVuID4gMCkge1xuICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKTtcbiAgICB6MCAqPSBsZW47XG4gICAgejEgKj0gbGVuO1xuICAgIHoyICo9IGxlbjtcbiAgfVxuXG4gIHZhciB4MCA9IHVweSAqIHoyIC0gdXB6ICogejEsXG4gICAgICB4MSA9IHVweiAqIHowIC0gdXB4ICogejIsXG4gICAgICB4MiA9IHVweCAqIHoxIC0gdXB5ICogejA7XG4gIGxlbiA9IHgwICogeDAgKyB4MSAqIHgxICsgeDIgKiB4MjtcblxuICBpZiAobGVuID4gMCkge1xuICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKTtcbiAgICB4MCAqPSBsZW47XG4gICAgeDEgKj0gbGVuO1xuICAgIHgyICo9IGxlbjtcbiAgfVxuXG4gIG91dFswXSA9IHgwO1xuICBvdXRbMV0gPSB4MTtcbiAgb3V0WzJdID0geDI7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IHoxICogeDIgLSB6MiAqIHgxO1xuICBvdXRbNV0gPSB6MiAqIHgwIC0gejAgKiB4MjtcbiAgb3V0WzZdID0gejAgKiB4MSAtIHoxICogeDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IHowO1xuICBvdXRbOV0gPSB6MTtcbiAgb3V0WzEwXSA9IHoyO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IGV5ZXg7XG4gIG91dFsxM10gPSBleWV5O1xuICBvdXRbMTRdID0gZXllejtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG47XG4vKipcclxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIG1hdDRcclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBhIG1hdHJpeCB0byByZXByZXNlbnQgYXMgYSBzdHJpbmdcclxuICogQHJldHVybnMge1N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBtYXRyaXhcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzdHIoYSkge1xuICByZXR1cm4gJ21hdDQoJyArIGFbMF0gKyAnLCAnICsgYVsxXSArICcsICcgKyBhWzJdICsgJywgJyArIGFbM10gKyAnLCAnICsgYVs0XSArICcsICcgKyBhWzVdICsgJywgJyArIGFbNl0gKyAnLCAnICsgYVs3XSArICcsICcgKyBhWzhdICsgJywgJyArIGFbOV0gKyAnLCAnICsgYVsxMF0gKyAnLCAnICsgYVsxMV0gKyAnLCAnICsgYVsxMl0gKyAnLCAnICsgYVsxM10gKyAnLCAnICsgYVsxNF0gKyAnLCAnICsgYVsxNV0gKyAnKSc7XG59XG4vKipcclxuICogUmV0dXJucyBGcm9iZW5pdXMgbm9ybSBvZiBhIG1hdDRcclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gY2FsY3VsYXRlIEZyb2Jlbml1cyBub3JtIG9mXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IEZyb2Jlbml1cyBub3JtXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvYihhKSB7XG4gIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coYVswXSwgMikgKyBNYXRoLnBvdyhhWzFdLCAyKSArIE1hdGgucG93KGFbMl0sIDIpICsgTWF0aC5wb3coYVszXSwgMikgKyBNYXRoLnBvdyhhWzRdLCAyKSArIE1hdGgucG93KGFbNV0sIDIpICsgTWF0aC5wb3coYVs2XSwgMikgKyBNYXRoLnBvdyhhWzddLCAyKSArIE1hdGgucG93KGFbOF0sIDIpICsgTWF0aC5wb3coYVs5XSwgMikgKyBNYXRoLnBvdyhhWzEwXSwgMikgKyBNYXRoLnBvdyhhWzExXSwgMikgKyBNYXRoLnBvdyhhWzEyXSwgMikgKyBNYXRoLnBvdyhhWzEzXSwgMikgKyBNYXRoLnBvdyhhWzE0XSwgMikgKyBNYXRoLnBvdyhhWzE1XSwgMikpO1xufVxuLyoqXHJcbiAqIEFkZHMgdHdvIG1hdDQnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHttYXQ0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXTtcbiAgb3V0WzFdID0gYVsxXSArIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gKyBiWzJdO1xuICBvdXRbM10gPSBhWzNdICsgYlszXTtcbiAgb3V0WzRdID0gYVs0XSArIGJbNF07XG4gIG91dFs1XSA9IGFbNV0gKyBiWzVdO1xuICBvdXRbNl0gPSBhWzZdICsgYls2XTtcbiAgb3V0WzddID0gYVs3XSArIGJbN107XG4gIG91dFs4XSA9IGFbOF0gKyBiWzhdO1xuICBvdXRbOV0gPSBhWzldICsgYls5XTtcbiAgb3V0WzEwXSA9IGFbMTBdICsgYlsxMF07XG4gIG91dFsxMV0gPSBhWzExXSArIGJbMTFdO1xuICBvdXRbMTJdID0gYVsxMl0gKyBiWzEyXTtcbiAgb3V0WzEzXSA9IGFbMTNdICsgYlsxM107XG4gIG91dFsxNF0gPSBhWzE0XSArIGJbMTRdO1xuICBvdXRbMTVdID0gYVsxNV0gKyBiWzE1XTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTdWJ0cmFjdHMgbWF0cml4IGIgZnJvbSBtYXRyaXggYVxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHttYXQ0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3Qob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLSBiWzBdO1xuICBvdXRbMV0gPSBhWzFdIC0gYlsxXTtcbiAgb3V0WzJdID0gYVsyXSAtIGJbMl07XG4gIG91dFszXSA9IGFbM10gLSBiWzNdO1xuICBvdXRbNF0gPSBhWzRdIC0gYls0XTtcbiAgb3V0WzVdID0gYVs1XSAtIGJbNV07XG4gIG91dFs2XSA9IGFbNl0gLSBiWzZdO1xuICBvdXRbN10gPSBhWzddIC0gYls3XTtcbiAgb3V0WzhdID0gYVs4XSAtIGJbOF07XG4gIG91dFs5XSA9IGFbOV0gLSBiWzldO1xuICBvdXRbMTBdID0gYVsxMF0gLSBiWzEwXTtcbiAgb3V0WzExXSA9IGFbMTFdIC0gYlsxMV07XG4gIG91dFsxMl0gPSBhWzEyXSAtIGJbMTJdO1xuICBvdXRbMTNdID0gYVsxM10gLSBiWzEzXTtcbiAgb3V0WzE0XSA9IGFbMTRdIC0gYlsxNF07XG4gIG91dFsxNV0gPSBhWzE1XSAtIGJbMTVdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIE11bHRpcGx5IGVhY2ggZWxlbWVudCBvZiB0aGUgbWF0cml4IGJ5IGEgc2NhbGFyLlxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byBzY2FsZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIG1hdHJpeCdzIGVsZW1lbnRzIGJ5XHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseVNjYWxhcihvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAqIGI7XG4gIG91dFsxXSA9IGFbMV0gKiBiO1xuICBvdXRbMl0gPSBhWzJdICogYjtcbiAgb3V0WzNdID0gYVszXSAqIGI7XG4gIG91dFs0XSA9IGFbNF0gKiBiO1xuICBvdXRbNV0gPSBhWzVdICogYjtcbiAgb3V0WzZdID0gYVs2XSAqIGI7XG4gIG91dFs3XSA9IGFbN10gKiBiO1xuICBvdXRbOF0gPSBhWzhdICogYjtcbiAgb3V0WzldID0gYVs5XSAqIGI7XG4gIG91dFsxMF0gPSBhWzEwXSAqIGI7XG4gIG91dFsxMV0gPSBhWzExXSAqIGI7XG4gIG91dFsxMl0gPSBhWzEyXSAqIGI7XG4gIG91dFsxM10gPSBhWzEzXSAqIGI7XG4gIG91dFsxNF0gPSBhWzE0XSAqIGI7XG4gIG91dFsxNV0gPSBhWzE1XSAqIGI7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQWRkcyB0d28gbWF0NCdzIGFmdGVyIG11bHRpcGx5aW5nIGVhY2ggZWxlbWVudCBvZiB0aGUgc2Vjb25kIG9wZXJhbmQgYnkgYSBzY2FsYXIgdmFsdWUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge21hdDR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZSB0aGUgYW1vdW50IHRvIHNjYWxlIGIncyBlbGVtZW50cyBieSBiZWZvcmUgYWRkaW5nXHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseVNjYWxhckFuZEFkZChvdXQsIGEsIGIsIHNjYWxlKSB7XG4gIG91dFswXSA9IGFbMF0gKyBiWzBdICogc2NhbGU7XG4gIG91dFsxXSA9IGFbMV0gKyBiWzFdICogc2NhbGU7XG4gIG91dFsyXSA9IGFbMl0gKyBiWzJdICogc2NhbGU7XG4gIG91dFszXSA9IGFbM10gKyBiWzNdICogc2NhbGU7XG4gIG91dFs0XSA9IGFbNF0gKyBiWzRdICogc2NhbGU7XG4gIG91dFs1XSA9IGFbNV0gKyBiWzVdICogc2NhbGU7XG4gIG91dFs2XSA9IGFbNl0gKyBiWzZdICogc2NhbGU7XG4gIG91dFs3XSA9IGFbN10gKyBiWzddICogc2NhbGU7XG4gIG91dFs4XSA9IGFbOF0gKyBiWzhdICogc2NhbGU7XG4gIG91dFs5XSA9IGFbOV0gKyBiWzldICogc2NhbGU7XG4gIG91dFsxMF0gPSBhWzEwXSArIGJbMTBdICogc2NhbGU7XG4gIG91dFsxMV0gPSBhWzExXSArIGJbMTFdICogc2NhbGU7XG4gIG91dFsxMl0gPSBhWzEyXSArIGJbMTJdICogc2NhbGU7XG4gIG91dFsxM10gPSBhWzEzXSArIGJbMTNdICogc2NhbGU7XG4gIG91dFsxNF0gPSBhWzE0XSArIGJbMTRdICogc2NhbGU7XG4gIG91dFsxNV0gPSBhWzE1XSArIGJbMTVdICogc2NhbGU7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgbWF0cmljZXMgaGF2ZSBleGFjdGx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uICh3aGVuIGNvbXBhcmVkIHdpdGggPT09KVxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IGEgVGhlIGZpcnN0IG1hdHJpeC5cclxuICogQHBhcmFtIHttYXQ0fSBiIFRoZSBzZWNvbmQgbWF0cml4LlxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgbWF0cmljZXMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZXhhY3RFcXVhbHMoYSwgYikge1xuICByZXR1cm4gYVswXSA9PT0gYlswXSAmJiBhWzFdID09PSBiWzFdICYmIGFbMl0gPT09IGJbMl0gJiYgYVszXSA9PT0gYlszXSAmJiBhWzRdID09PSBiWzRdICYmIGFbNV0gPT09IGJbNV0gJiYgYVs2XSA9PT0gYls2XSAmJiBhWzddID09PSBiWzddICYmIGFbOF0gPT09IGJbOF0gJiYgYVs5XSA9PT0gYls5XSAmJiBhWzEwXSA9PT0gYlsxMF0gJiYgYVsxMV0gPT09IGJbMTFdICYmIGFbMTJdID09PSBiWzEyXSAmJiBhWzEzXSA9PT0gYlsxM10gJiYgYVsxNF0gPT09IGJbMTRdICYmIGFbMTVdID09PSBiWzE1XTtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBtYXRyaWNlcyBoYXZlIGFwcHJveGltYXRlbHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24uXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gYSBUaGUgZmlyc3QgbWF0cml4LlxyXG4gKiBAcGFyYW0ge21hdDR9IGIgVGhlIHNlY29uZCBtYXRyaXguXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBtYXRyaWNlcyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICB2YXIgYTAgPSBhWzBdLFxuICAgICAgYTEgPSBhWzFdLFxuICAgICAgYTIgPSBhWzJdLFxuICAgICAgYTMgPSBhWzNdO1xuICB2YXIgYTQgPSBhWzRdLFxuICAgICAgYTUgPSBhWzVdLFxuICAgICAgYTYgPSBhWzZdLFxuICAgICAgYTcgPSBhWzddO1xuICB2YXIgYTggPSBhWzhdLFxuICAgICAgYTkgPSBhWzldLFxuICAgICAgYTEwID0gYVsxMF0sXG4gICAgICBhMTEgPSBhWzExXTtcbiAgdmFyIGExMiA9IGFbMTJdLFxuICAgICAgYTEzID0gYVsxM10sXG4gICAgICBhMTQgPSBhWzE0XSxcbiAgICAgIGExNSA9IGFbMTVdO1xuICB2YXIgYjAgPSBiWzBdLFxuICAgICAgYjEgPSBiWzFdLFxuICAgICAgYjIgPSBiWzJdLFxuICAgICAgYjMgPSBiWzNdO1xuICB2YXIgYjQgPSBiWzRdLFxuICAgICAgYjUgPSBiWzVdLFxuICAgICAgYjYgPSBiWzZdLFxuICAgICAgYjcgPSBiWzddO1xuICB2YXIgYjggPSBiWzhdLFxuICAgICAgYjkgPSBiWzldLFxuICAgICAgYjEwID0gYlsxMF0sXG4gICAgICBiMTEgPSBiWzExXTtcbiAgdmFyIGIxMiA9IGJbMTJdLFxuICAgICAgYjEzID0gYlsxM10sXG4gICAgICBiMTQgPSBiWzE0XSxcbiAgICAgIGIxNSA9IGJbMTVdO1xuICByZXR1cm4gTWF0aC5hYnMoYTAgLSBiMCkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTApLCBNYXRoLmFicyhiMCkpICYmIE1hdGguYWJzKGExIC0gYjEpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExKSwgTWF0aC5hYnMoYjEpKSAmJiBNYXRoLmFicyhhMiAtIGIyKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMiksIE1hdGguYWJzKGIyKSkgJiYgTWF0aC5hYnMoYTMgLSBiMykgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTMpLCBNYXRoLmFicyhiMykpICYmIE1hdGguYWJzKGE0IC0gYjQpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE0KSwgTWF0aC5hYnMoYjQpKSAmJiBNYXRoLmFicyhhNSAtIGI1KSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhNSksIE1hdGguYWJzKGI1KSkgJiYgTWF0aC5hYnMoYTYgLSBiNikgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTYpLCBNYXRoLmFicyhiNikpICYmIE1hdGguYWJzKGE3IC0gYjcpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE3KSwgTWF0aC5hYnMoYjcpKSAmJiBNYXRoLmFicyhhOCAtIGI4KSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhOCksIE1hdGguYWJzKGI4KSkgJiYgTWF0aC5hYnMoYTkgLSBiOSkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTkpLCBNYXRoLmFicyhiOSkpICYmIE1hdGguYWJzKGExMCAtIGIxMCkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTEwKSwgTWF0aC5hYnMoYjEwKSkgJiYgTWF0aC5hYnMoYTExIC0gYjExKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMTEpLCBNYXRoLmFicyhiMTEpKSAmJiBNYXRoLmFicyhhMTIgLSBiMTIpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExMiksIE1hdGguYWJzKGIxMikpICYmIE1hdGguYWJzKGExMyAtIGIxMykgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTEzKSwgTWF0aC5hYnMoYjEzKSkgJiYgTWF0aC5hYnMoYTE0IC0gYjE0KSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMTQpLCBNYXRoLmFicyhiMTQpKSAmJiBNYXRoLmFicyhhMTUgLSBiMTUpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExNSksIE1hdGguYWJzKGIxNSkpO1xufVxuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgbWF0NC5tdWx0aXBseX1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIG11bCA9IG11bHRpcGx5O1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgbWF0NC5zdWJ0cmFjdH1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIHN1YiA9IHN1YnRyYWN0OyIsImltcG9ydCAqIGFzIGdsTWF0cml4IGZyb20gXCIuL2NvbW1vbi5qc1wiO1xuaW1wb3J0ICogYXMgbWF0MyBmcm9tIFwiLi9tYXQzLmpzXCI7XG5pbXBvcnQgKiBhcyB2ZWMzIGZyb20gXCIuL3ZlYzMuanNcIjtcbmltcG9ydCAqIGFzIHZlYzQgZnJvbSBcIi4vdmVjNC5qc1wiO1xuLyoqXHJcbiAqIFF1YXRlcm5pb25cclxuICogQG1vZHVsZSBxdWF0XHJcbiAqL1xuXG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyBpZGVudGl0eSBxdWF0XHJcbiAqXHJcbiAqIEByZXR1cm5zIHtxdWF0fSBhIG5ldyBxdWF0ZXJuaW9uXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKCkge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoNCk7XG5cbiAgaWYgKGdsTWF0cml4LkFSUkFZX1RZUEUgIT0gRmxvYXQzMkFycmF5KSB7XG4gICAgb3V0WzBdID0gMDtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gIH1cblxuICBvdXRbM10gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFNldCBhIHF1YXQgdG8gdGhlIGlkZW50aXR5IHF1YXRlcm5pb25cclxuICpcclxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXHJcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eShvdXQpIHtcbiAgb3V0WzBdID0gMDtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTZXRzIGEgcXVhdCBmcm9tIHRoZSBnaXZlbiBhbmdsZSBhbmQgcm90YXRpb24gYXhpcyxcclxuICogdGhlbiByZXR1cm5zIGl0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cclxuICogQHBhcmFtIHt2ZWMzfSBheGlzIHRoZSBheGlzIGFyb3VuZCB3aGljaCB0byByb3RhdGVcclxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgaW4gcmFkaWFuc1xyXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XHJcbiAqKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEF4aXNBbmdsZShvdXQsIGF4aXMsIHJhZCkge1xuICByYWQgPSByYWQgKiAwLjU7XG4gIHZhciBzID0gTWF0aC5zaW4ocmFkKTtcbiAgb3V0WzBdID0gcyAqIGF4aXNbMF07XG4gIG91dFsxXSA9IHMgKiBheGlzWzFdO1xuICBvdXRbMl0gPSBzICogYXhpc1syXTtcbiAgb3V0WzNdID0gTWF0aC5jb3MocmFkKTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBHZXRzIHRoZSByb3RhdGlvbiBheGlzIGFuZCBhbmdsZSBmb3IgYSBnaXZlblxyXG4gKiAgcXVhdGVybmlvbi4gSWYgYSBxdWF0ZXJuaW9uIGlzIGNyZWF0ZWQgd2l0aFxyXG4gKiAgc2V0QXhpc0FuZ2xlLCB0aGlzIG1ldGhvZCB3aWxsIHJldHVybiB0aGUgc2FtZVxyXG4gKiAgdmFsdWVzIGFzIHByb3ZpZGllZCBpbiB0aGUgb3JpZ2luYWwgcGFyYW1ldGVyIGxpc3RcclxuICogIE9SIGZ1bmN0aW9uYWxseSBlcXVpdmFsZW50IHZhbHVlcy5cclxuICogRXhhbXBsZTogVGhlIHF1YXRlcm5pb24gZm9ybWVkIGJ5IGF4aXMgWzAsIDAsIDFdIGFuZFxyXG4gKiAgYW5nbGUgLTkwIGlzIHRoZSBzYW1lIGFzIHRoZSBxdWF0ZXJuaW9uIGZvcm1lZCBieVxyXG4gKiAgWzAsIDAsIDFdIGFuZCAyNzAuIFRoaXMgbWV0aG9kIGZhdm9ycyB0aGUgbGF0dGVyLlxyXG4gKiBAcGFyYW0gIHt2ZWMzfSBvdXRfYXhpcyAgVmVjdG9yIHJlY2VpdmluZyB0aGUgYXhpcyBvZiByb3RhdGlvblxyXG4gKiBAcGFyYW0gIHtxdWF0fSBxICAgICBRdWF0ZXJuaW9uIHRvIGJlIGRlY29tcG9zZWRcclxuICogQHJldHVybiB7TnVtYmVyfSAgICAgQW5nbGUsIGluIHJhZGlhbnMsIG9mIHRoZSByb3RhdGlvblxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEF4aXNBbmdsZShvdXRfYXhpcywgcSkge1xuICB2YXIgcmFkID0gTWF0aC5hY29zKHFbM10pICogMi4wO1xuICB2YXIgcyA9IE1hdGguc2luKHJhZCAvIDIuMCk7XG5cbiAgaWYgKHMgPiBnbE1hdHJpeC5FUFNJTE9OKSB7XG4gICAgb3V0X2F4aXNbMF0gPSBxWzBdIC8gcztcbiAgICBvdXRfYXhpc1sxXSA9IHFbMV0gLyBzO1xuICAgIG91dF9heGlzWzJdID0gcVsyXSAvIHM7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWYgcyBpcyB6ZXJvLCByZXR1cm4gYW55IGF4aXMgKG5vIHJvdGF0aW9uIC0gYXhpcyBkb2VzIG5vdCBtYXR0ZXIpXG4gICAgb3V0X2F4aXNbMF0gPSAxO1xuICAgIG91dF9heGlzWzFdID0gMDtcbiAgICBvdXRfYXhpc1syXSA9IDA7XG4gIH1cblxuICByZXR1cm4gcmFkO1xufVxuLyoqXHJcbiAqIE11bHRpcGxpZXMgdHdvIHF1YXQnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cclxuICogQHBhcmFtIHtxdWF0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7cXVhdH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge3F1YXR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5KG91dCwgYSwgYikge1xuICB2YXIgYXggPSBhWzBdLFxuICAgICAgYXkgPSBhWzFdLFxuICAgICAgYXogPSBhWzJdLFxuICAgICAgYXcgPSBhWzNdO1xuICB2YXIgYnggPSBiWzBdLFxuICAgICAgYnkgPSBiWzFdLFxuICAgICAgYnogPSBiWzJdLFxuICAgICAgYncgPSBiWzNdO1xuICBvdXRbMF0gPSBheCAqIGJ3ICsgYXcgKiBieCArIGF5ICogYnogLSBheiAqIGJ5O1xuICBvdXRbMV0gPSBheSAqIGJ3ICsgYXcgKiBieSArIGF6ICogYnggLSBheCAqIGJ6O1xuICBvdXRbMl0gPSBheiAqIGJ3ICsgYXcgKiBieiArIGF4ICogYnkgLSBheSAqIGJ4O1xuICBvdXRbM10gPSBhdyAqIGJ3IC0gYXggKiBieCAtIGF5ICogYnkgLSBheiAqIGJ6O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJvdGF0ZXMgYSBxdWF0ZXJuaW9uIGJ5IHRoZSBnaXZlbiBhbmdsZSBhYm91dCB0aGUgWCBheGlzXHJcbiAqXHJcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHF1YXQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcclxuICogQHBhcmFtIHtxdWF0fSBhIHF1YXQgdG8gcm90YXRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWQgYW5nbGUgKGluIHJhZGlhbnMpIHRvIHJvdGF0ZVxyXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWChvdXQsIGEsIHJhZCkge1xuICByYWQgKj0gMC41O1xuICB2YXIgYXggPSBhWzBdLFxuICAgICAgYXkgPSBhWzFdLFxuICAgICAgYXogPSBhWzJdLFxuICAgICAgYXcgPSBhWzNdO1xuICB2YXIgYnggPSBNYXRoLnNpbihyYWQpLFxuICAgICAgYncgPSBNYXRoLmNvcyhyYWQpO1xuICBvdXRbMF0gPSBheCAqIGJ3ICsgYXcgKiBieDtcbiAgb3V0WzFdID0gYXkgKiBidyArIGF6ICogYng7XG4gIG91dFsyXSA9IGF6ICogYncgLSBheSAqIGJ4O1xuICBvdXRbM10gPSBhdyAqIGJ3IC0gYXggKiBieDtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSb3RhdGVzIGEgcXVhdGVybmlvbiBieSB0aGUgZ2l2ZW4gYW5nbGUgYWJvdXQgdGhlIFkgYXhpc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXR9IG91dCBxdWF0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XHJcbiAqIEBwYXJhbSB7cXVhdH0gYSBxdWF0IHRvIHJvdGF0ZVxyXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkIGFuZ2xlIChpbiByYWRpYW5zKSB0byByb3RhdGVcclxuICogQHJldHVybnMge3F1YXR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVkob3V0LCBhLCByYWQpIHtcbiAgcmFkICo9IDAuNTtcbiAgdmFyIGF4ID0gYVswXSxcbiAgICAgIGF5ID0gYVsxXSxcbiAgICAgIGF6ID0gYVsyXSxcbiAgICAgIGF3ID0gYVszXTtcbiAgdmFyIGJ5ID0gTWF0aC5zaW4ocmFkKSxcbiAgICAgIGJ3ID0gTWF0aC5jb3MocmFkKTtcbiAgb3V0WzBdID0gYXggKiBidyAtIGF6ICogYnk7XG4gIG91dFsxXSA9IGF5ICogYncgKyBhdyAqIGJ5O1xuICBvdXRbMl0gPSBheiAqIGJ3ICsgYXggKiBieTtcbiAgb3V0WzNdID0gYXcgKiBidyAtIGF5ICogYnk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUm90YXRlcyBhIHF1YXRlcm5pb24gYnkgdGhlIGdpdmVuIGFuZ2xlIGFib3V0IHRoZSBaIGF4aXNcclxuICpcclxuICogQHBhcmFtIHtxdWF0fSBvdXQgcXVhdCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxyXG4gKiBAcGFyYW0ge3F1YXR9IGEgcXVhdCB0byByb3RhdGVcclxuICogQHBhcmFtIHtudW1iZXJ9IHJhZCBhbmdsZSAoaW4gcmFkaWFucykgdG8gcm90YXRlXHJcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVaKG91dCwgYSwgcmFkKSB7XG4gIHJhZCAqPSAwLjU7XG4gIHZhciBheCA9IGFbMF0sXG4gICAgICBheSA9IGFbMV0sXG4gICAgICBheiA9IGFbMl0sXG4gICAgICBhdyA9IGFbM107XG4gIHZhciBieiA9IE1hdGguc2luKHJhZCksXG4gICAgICBidyA9IE1hdGguY29zKHJhZCk7XG4gIG91dFswXSA9IGF4ICogYncgKyBheSAqIGJ6O1xuICBvdXRbMV0gPSBheSAqIGJ3IC0gYXggKiBiejtcbiAgb3V0WzJdID0gYXogKiBidyArIGF3ICogYno7XG4gIG91dFszXSA9IGF3ICogYncgLSBheiAqIGJ6O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIFcgY29tcG9uZW50IG9mIGEgcXVhdCBmcm9tIHRoZSBYLCBZLCBhbmQgWiBjb21wb25lbnRzLlxyXG4gKiBBc3N1bWVzIHRoYXQgcXVhdGVybmlvbiBpcyAxIHVuaXQgaW4gbGVuZ3RoLlxyXG4gKiBBbnkgZXhpc3RpbmcgVyBjb21wb25lbnQgd2lsbCBiZSBpZ25vcmVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cclxuICogQHBhcmFtIHtxdWF0fSBhIHF1YXQgdG8gY2FsY3VsYXRlIFcgY29tcG9uZW50IG9mXHJcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVXKG91dCwgYSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgICB5ID0gYVsxXSxcbiAgICAgIHogPSBhWzJdO1xuICBvdXRbMF0gPSB4O1xuICBvdXRbMV0gPSB5O1xuICBvdXRbMl0gPSB6O1xuICBvdXRbM10gPSBNYXRoLnNxcnQoTWF0aC5hYnMoMS4wIC0geCAqIHggLSB5ICogeSAtIHogKiB6KSk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUGVyZm9ybXMgYSBzcGhlcmljYWwgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gcXVhdFxyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cclxuICogQHBhcmFtIHtxdWF0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7cXVhdH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQsIGluIHRoZSByYW5nZSBbMC0xXSwgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xyXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2xlcnAob3V0LCBhLCBiLCB0KSB7XG4gIC8vIGJlbmNobWFya3M6XG4gIC8vICAgIGh0dHA6Ly9qc3BlcmYuY29tL3F1YXRlcm5pb24tc2xlcnAtaW1wbGVtZW50YXRpb25zXG4gIHZhciBheCA9IGFbMF0sXG4gICAgICBheSA9IGFbMV0sXG4gICAgICBheiA9IGFbMl0sXG4gICAgICBhdyA9IGFbM107XG4gIHZhciBieCA9IGJbMF0sXG4gICAgICBieSA9IGJbMV0sXG4gICAgICBieiA9IGJbMl0sXG4gICAgICBidyA9IGJbM107XG4gIHZhciBvbWVnYSwgY29zb20sIHNpbm9tLCBzY2FsZTAsIHNjYWxlMTsgLy8gY2FsYyBjb3NpbmVcblxuICBjb3NvbSA9IGF4ICogYnggKyBheSAqIGJ5ICsgYXogKiBieiArIGF3ICogYnc7IC8vIGFkanVzdCBzaWducyAoaWYgbmVjZXNzYXJ5KVxuXG4gIGlmIChjb3NvbSA8IDAuMCkge1xuICAgIGNvc29tID0gLWNvc29tO1xuICAgIGJ4ID0gLWJ4O1xuICAgIGJ5ID0gLWJ5O1xuICAgIGJ6ID0gLWJ6O1xuICAgIGJ3ID0gLWJ3O1xuICB9IC8vIGNhbGN1bGF0ZSBjb2VmZmljaWVudHNcblxuXG4gIGlmICgxLjAgLSBjb3NvbSA+IGdsTWF0cml4LkVQU0lMT04pIHtcbiAgICAvLyBzdGFuZGFyZCBjYXNlIChzbGVycClcbiAgICBvbWVnYSA9IE1hdGguYWNvcyhjb3NvbSk7XG4gICAgc2lub20gPSBNYXRoLnNpbihvbWVnYSk7XG4gICAgc2NhbGUwID0gTWF0aC5zaW4oKDEuMCAtIHQpICogb21lZ2EpIC8gc2lub207XG4gICAgc2NhbGUxID0gTWF0aC5zaW4odCAqIG9tZWdhKSAvIHNpbm9tO1xuICB9IGVsc2Uge1xuICAgIC8vIFwiZnJvbVwiIGFuZCBcInRvXCIgcXVhdGVybmlvbnMgYXJlIHZlcnkgY2xvc2VcbiAgICAvLyAgLi4uIHNvIHdlIGNhbiBkbyBhIGxpbmVhciBpbnRlcnBvbGF0aW9uXG4gICAgc2NhbGUwID0gMS4wIC0gdDtcbiAgICBzY2FsZTEgPSB0O1xuICB9IC8vIGNhbGN1bGF0ZSBmaW5hbCB2YWx1ZXNcblxuXG4gIG91dFswXSA9IHNjYWxlMCAqIGF4ICsgc2NhbGUxICogYng7XG4gIG91dFsxXSA9IHNjYWxlMCAqIGF5ICsgc2NhbGUxICogYnk7XG4gIG91dFsyXSA9IHNjYWxlMCAqIGF6ICsgc2NhbGUxICogYno7XG4gIG91dFszXSA9IHNjYWxlMCAqIGF3ICsgc2NhbGUxICogYnc7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogR2VuZXJhdGVzIGEgcmFuZG9tIHF1YXRlcm5pb25cclxuICpcclxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXHJcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb20ob3V0KSB7XG4gIC8vIEltcGxlbWVudGF0aW9uIG9mIGh0dHA6Ly9wbGFubmluZy5jcy51aXVjLmVkdS9ub2RlMTk4Lmh0bWxcbiAgLy8gVE9ETzogQ2FsbGluZyByYW5kb20gMyB0aW1lcyBpcyBwcm9iYWJseSBub3QgdGhlIGZhc3Rlc3Qgc29sdXRpb25cbiAgdmFyIHUxID0gZ2xNYXRyaXguUkFORE9NKCk7XG4gIHZhciB1MiA9IGdsTWF0cml4LlJBTkRPTSgpO1xuICB2YXIgdTMgPSBnbE1hdHJpeC5SQU5ET00oKTtcbiAgdmFyIHNxcnQxTWludXNVMSA9IE1hdGguc3FydCgxIC0gdTEpO1xuICB2YXIgc3FydFUxID0gTWF0aC5zcXJ0KHUxKTtcbiAgb3V0WzBdID0gc3FydDFNaW51c1UxICogTWF0aC5zaW4oMi4wICogTWF0aC5QSSAqIHUyKTtcbiAgb3V0WzFdID0gc3FydDFNaW51c1UxICogTWF0aC5jb3MoMi4wICogTWF0aC5QSSAqIHUyKTtcbiAgb3V0WzJdID0gc3FydFUxICogTWF0aC5zaW4oMi4wICogTWF0aC5QSSAqIHUzKTtcbiAgb3V0WzNdID0gc3FydFUxICogTWF0aC5jb3MoMi4wICogTWF0aC5QSSAqIHUzKTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBpbnZlcnNlIG9mIGEgcXVhdFxyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cclxuICogQHBhcmFtIHtxdWF0fSBhIHF1YXQgdG8gY2FsY3VsYXRlIGludmVyc2Ugb2ZcclxuICogQHJldHVybnMge3F1YXR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGludmVydChvdXQsIGEpIHtcbiAgdmFyIGEwID0gYVswXSxcbiAgICAgIGExID0gYVsxXSxcbiAgICAgIGEyID0gYVsyXSxcbiAgICAgIGEzID0gYVszXTtcbiAgdmFyIGRvdCA9IGEwICogYTAgKyBhMSAqIGExICsgYTIgKiBhMiArIGEzICogYTM7XG4gIHZhciBpbnZEb3QgPSBkb3QgPyAxLjAgLyBkb3QgOiAwOyAvLyBUT0RPOiBXb3VsZCBiZSBmYXN0ZXIgdG8gcmV0dXJuIFswLDAsMCwwXSBpbW1lZGlhdGVseSBpZiBkb3QgPT0gMFxuXG4gIG91dFswXSA9IC1hMCAqIGludkRvdDtcbiAgb3V0WzFdID0gLWExICogaW52RG90O1xuICBvdXRbMl0gPSAtYTIgKiBpbnZEb3Q7XG4gIG91dFszXSA9IGEzICogaW52RG90O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIGNvbmp1Z2F0ZSBvZiBhIHF1YXRcclxuICogSWYgdGhlIHF1YXRlcm5pb24gaXMgbm9ybWFsaXplZCwgdGhpcyBmdW5jdGlvbiBpcyBmYXN0ZXIgdGhhbiBxdWF0LmludmVyc2UgYW5kIHByb2R1Y2VzIHRoZSBzYW1lIHJlc3VsdC5cclxuICpcclxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSB7cXVhdH0gYSBxdWF0IHRvIGNhbGN1bGF0ZSBjb25qdWdhdGUgb2ZcclxuICogQHJldHVybnMge3F1YXR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmp1Z2F0ZShvdXQsIGEpIHtcbiAgb3V0WzBdID0gLWFbMF07XG4gIG91dFsxXSA9IC1hWzFdO1xuICBvdXRbMl0gPSAtYVsyXTtcbiAgb3V0WzNdID0gYVszXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgcXVhdGVybmlvbiBmcm9tIHRoZSBnaXZlbiAzeDMgcm90YXRpb24gbWF0cml4LlxyXG4gKlxyXG4gKiBOT1RFOiBUaGUgcmVzdWx0YW50IHF1YXRlcm5pb24gaXMgbm90IG5vcm1hbGl6ZWQsIHNvIHlvdSBzaG91bGQgYmUgc3VyZVxyXG4gKiB0byByZW5vcm1hbGl6ZSB0aGUgcXVhdGVybmlvbiB5b3Vyc2VsZiB3aGVyZSBuZWNlc3NhcnkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxyXG4gKiBAcGFyYW0ge21hdDN9IG0gcm90YXRpb24gbWF0cml4XHJcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbU1hdDMob3V0LCBtKSB7XG4gIC8vIEFsZ29yaXRobSBpbiBLZW4gU2hvZW1ha2UncyBhcnRpY2xlIGluIDE5ODcgU0lHR1JBUEggY291cnNlIG5vdGVzXG4gIC8vIGFydGljbGUgXCJRdWF0ZXJuaW9uIENhbGN1bHVzIGFuZCBGYXN0IEFuaW1hdGlvblwiLlxuICB2YXIgZlRyYWNlID0gbVswXSArIG1bNF0gKyBtWzhdO1xuICB2YXIgZlJvb3Q7XG5cbiAgaWYgKGZUcmFjZSA+IDAuMCkge1xuICAgIC8vIHx3fCA+IDEvMiwgbWF5IGFzIHdlbGwgY2hvb3NlIHcgPiAxLzJcbiAgICBmUm9vdCA9IE1hdGguc3FydChmVHJhY2UgKyAxLjApOyAvLyAyd1xuXG4gICAgb3V0WzNdID0gMC41ICogZlJvb3Q7XG4gICAgZlJvb3QgPSAwLjUgLyBmUm9vdDsgLy8gMS8oNHcpXG5cbiAgICBvdXRbMF0gPSAobVs1XSAtIG1bN10pICogZlJvb3Q7XG4gICAgb3V0WzFdID0gKG1bNl0gLSBtWzJdKSAqIGZSb290O1xuICAgIG91dFsyXSA9IChtWzFdIC0gbVszXSkgKiBmUm9vdDtcbiAgfSBlbHNlIHtcbiAgICAvLyB8d3wgPD0gMS8yXG4gICAgdmFyIGkgPSAwO1xuICAgIGlmIChtWzRdID4gbVswXSkgaSA9IDE7XG4gICAgaWYgKG1bOF0gPiBtW2kgKiAzICsgaV0pIGkgPSAyO1xuICAgIHZhciBqID0gKGkgKyAxKSAlIDM7XG4gICAgdmFyIGsgPSAoaSArIDIpICUgMztcbiAgICBmUm9vdCA9IE1hdGguc3FydChtW2kgKiAzICsgaV0gLSBtW2ogKiAzICsgal0gLSBtW2sgKiAzICsga10gKyAxLjApO1xuICAgIG91dFtpXSA9IDAuNSAqIGZSb290O1xuICAgIGZSb290ID0gMC41IC8gZlJvb3Q7XG4gICAgb3V0WzNdID0gKG1baiAqIDMgKyBrXSAtIG1bayAqIDMgKyBqXSkgKiBmUm9vdDtcbiAgICBvdXRbal0gPSAobVtqICogMyArIGldICsgbVtpICogMyArIGpdKSAqIGZSb290O1xuICAgIG91dFtrXSA9IChtW2sgKiAzICsgaV0gKyBtW2kgKiAzICsga10pICogZlJvb3Q7XG4gIH1cblxuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBxdWF0ZXJuaW9uIGZyb20gdGhlIGdpdmVuIGV1bGVyIGFuZ2xlIHgsIHksIHouXHJcbiAqXHJcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxyXG4gKiBAcGFyYW0ge3h9IEFuZ2xlIHRvIHJvdGF0ZSBhcm91bmQgWCBheGlzIGluIGRlZ3JlZXMuXHJcbiAqIEBwYXJhbSB7eX0gQW5nbGUgdG8gcm90YXRlIGFyb3VuZCBZIGF4aXMgaW4gZGVncmVlcy5cclxuICogQHBhcmFtIHt6fSBBbmdsZSB0byByb3RhdGUgYXJvdW5kIFogYXhpcyBpbiBkZWdyZWVzLlxyXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21FdWxlcihvdXQsIHgsIHksIHopIHtcbiAgdmFyIGhhbGZUb1JhZCA9IDAuNSAqIE1hdGguUEkgLyAxODAuMDtcbiAgeCAqPSBoYWxmVG9SYWQ7XG4gIHkgKj0gaGFsZlRvUmFkO1xuICB6ICo9IGhhbGZUb1JhZDtcbiAgdmFyIHN4ID0gTWF0aC5zaW4oeCk7XG4gIHZhciBjeCA9IE1hdGguY29zKHgpO1xuICB2YXIgc3kgPSBNYXRoLnNpbih5KTtcbiAgdmFyIGN5ID0gTWF0aC5jb3MoeSk7XG4gIHZhciBzeiA9IE1hdGguc2luKHopO1xuICB2YXIgY3ogPSBNYXRoLmNvcyh6KTtcbiAgb3V0WzBdID0gc3ggKiBjeSAqIGN6IC0gY3ggKiBzeSAqIHN6O1xuICBvdXRbMV0gPSBjeCAqIHN5ICogY3ogKyBzeCAqIGN5ICogc3o7XG4gIG91dFsyXSA9IGN4ICogY3kgKiBzeiAtIHN4ICogc3kgKiBjejtcbiAgb3V0WzNdID0gY3ggKiBjeSAqIGN6ICsgc3ggKiBzeSAqIHN6O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBxdWF0ZW5pb25cclxuICpcclxuICogQHBhcmFtIHtxdWF0fSBhIHZlY3RvciB0byByZXByZXNlbnQgYXMgYSBzdHJpbmdcclxuICogQHJldHVybnMge1N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzdHIoYSkge1xuICByZXR1cm4gJ3F1YXQoJyArIGFbMF0gKyAnLCAnICsgYVsxXSArICcsICcgKyBhWzJdICsgJywgJyArIGFbM10gKyAnKSc7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyBxdWF0IGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgcXVhdGVybmlvblxyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXR9IGEgcXVhdGVybmlvbiB0byBjbG9uZVxyXG4gKiBAcmV0dXJucyB7cXVhdH0gYSBuZXcgcXVhdGVybmlvblxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgY2xvbmUgPSB2ZWM0LmNsb25lO1xuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgcXVhdCBpbml0aWFsaXplZCB3aXRoIHRoZSBnaXZlbiB2YWx1ZXNcclxuICpcclxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHcgVyBjb21wb25lbnRcclxuICogQHJldHVybnMge3F1YXR9IGEgbmV3IHF1YXRlcm5pb25cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIGZyb21WYWx1ZXMgPSB2ZWM0LmZyb21WYWx1ZXM7XG4vKipcclxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIHF1YXQgdG8gYW5vdGhlclxyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cclxuICogQHBhcmFtIHtxdWF0fSBhIHRoZSBzb3VyY2UgcXVhdGVybmlvblxyXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBjb3B5ID0gdmVjNC5jb3B5O1xuLyoqXHJcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIHF1YXQgdG8gdGhlIGdpdmVuIHZhbHVlc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cclxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHcgVyBjb21wb25lbnRcclxuICogQHJldHVybnMge3F1YXR9IG91dFxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgc2V0ID0gdmVjNC5zZXQ7XG4vKipcclxuICogQWRkcyB0d28gcXVhdCdzXHJcbiAqXHJcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxyXG4gKiBAcGFyYW0ge3F1YXR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtxdWF0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBhZGQgPSB2ZWM0LmFkZDtcbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHF1YXQubXVsdGlwbHl9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBtdWwgPSBtdWx0aXBseTtcbi8qKlxyXG4gKiBTY2FsZXMgYSBxdWF0IGJ5IGEgc2NhbGFyIG51bWJlclxyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge3F1YXR9IGEgdGhlIHZlY3RvciB0byBzY2FsZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIHZlY3RvciBieVxyXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBzY2FsZSA9IHZlYzQuc2NhbGU7XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHF1YXQnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtxdWF0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkb3QgcHJvZHVjdCBvZiBhIGFuZCBiXHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBkb3QgPSB2ZWM0LmRvdDtcbi8qKlxyXG4gKiBQZXJmb3JtcyBhIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gdHdvIHF1YXQnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cclxuICogQHBhcmFtIHtxdWF0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7cXVhdH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQsIGluIHRoZSByYW5nZSBbMC0xXSwgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xyXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBsZXJwID0gdmVjNC5sZXJwO1xuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIGxlbmd0aCBvZiBhIHF1YXRcclxuICpcclxuICogQHBhcmFtIHtxdWF0fSBhIHZlY3RvciB0byBjYWxjdWxhdGUgbGVuZ3RoIG9mXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGxlbmd0aCBvZiBhXHJcbiAqL1xuXG5leHBvcnQgdmFyIGxlbmd0aCA9IHZlYzQubGVuZ3RoO1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgcXVhdC5sZW5ndGh9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBsZW4gPSBsZW5ndGg7XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBsZW5ndGggb2YgYSBxdWF0XHJcbiAqXHJcbiAqIEBwYXJhbSB7cXVhdH0gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIHNxdWFyZWQgbGVuZ3RoIG9mXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgbGVuZ3RoIG9mIGFcclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIHNxdWFyZWRMZW5ndGggPSB2ZWM0LnNxdWFyZWRMZW5ndGg7XG4vKipcclxuICogQWxpYXMgZm9yIHtAbGluayBxdWF0LnNxdWFyZWRMZW5ndGh9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBzcXJMZW4gPSBzcXVhcmVkTGVuZ3RoO1xuLyoqXHJcbiAqIE5vcm1hbGl6ZSBhIHF1YXRcclxuICpcclxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSB7cXVhdH0gYSBxdWF0ZXJuaW9uIHRvIG5vcm1hbGl6ZVxyXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBub3JtYWxpemUgPSB2ZWM0Lm5vcm1hbGl6ZTtcbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBxdWF0ZXJuaW9ucyBoYXZlIGV4YWN0bHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24gKHdoZW4gY29tcGFyZWQgd2l0aCA9PT0pXHJcbiAqXHJcbiAqIEBwYXJhbSB7cXVhdH0gYSBUaGUgZmlyc3QgcXVhdGVybmlvbi5cclxuICogQHBhcmFtIHtxdWF0fSBiIFRoZSBzZWNvbmQgcXVhdGVybmlvbi5cclxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIHZlY3RvcnMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAqL1xuXG5leHBvcnQgdmFyIGV4YWN0RXF1YWxzID0gdmVjNC5leGFjdEVxdWFscztcbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBxdWF0ZXJuaW9ucyBoYXZlIGFwcHJveGltYXRlbHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24uXHJcbiAqXHJcbiAqIEBwYXJhbSB7cXVhdH0gYSBUaGUgZmlyc3QgdmVjdG9yLlxyXG4gKiBAcGFyYW0ge3F1YXR9IGIgVGhlIHNlY29uZCB2ZWN0b3IuXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSB2ZWN0b3JzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gKi9cblxuZXhwb3J0IHZhciBlcXVhbHMgPSB2ZWM0LmVxdWFscztcbi8qKlxyXG4gKiBTZXRzIGEgcXVhdGVybmlvbiB0byByZXByZXNlbnQgdGhlIHNob3J0ZXN0IHJvdGF0aW9uIGZyb20gb25lXHJcbiAqIHZlY3RvciB0byBhbm90aGVyLlxyXG4gKlxyXG4gKiBCb3RoIHZlY3RvcnMgYXJlIGFzc3VtZWQgdG8gYmUgdW5pdCBsZW5ndGguXHJcbiAqXHJcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvbi5cclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBpbml0aWFsIHZlY3RvclxyXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIGRlc3RpbmF0aW9uIHZlY3RvclxyXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgdmFyIHJvdGF0aW9uVG8gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB0bXB2ZWMzID0gdmVjMy5jcmVhdGUoKTtcbiAgdmFyIHhVbml0VmVjMyA9IHZlYzMuZnJvbVZhbHVlcygxLCAwLCAwKTtcbiAgdmFyIHlVbml0VmVjMyA9IHZlYzMuZnJvbVZhbHVlcygwLCAxLCAwKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChvdXQsIGEsIGIpIHtcbiAgICB2YXIgZG90ID0gdmVjMy5kb3QoYSwgYik7XG5cbiAgICBpZiAoZG90IDwgLTAuOTk5OTk5KSB7XG4gICAgICB2ZWMzLmNyb3NzKHRtcHZlYzMsIHhVbml0VmVjMywgYSk7XG4gICAgICBpZiAodmVjMy5sZW4odG1wdmVjMykgPCAwLjAwMDAwMSkgdmVjMy5jcm9zcyh0bXB2ZWMzLCB5VW5pdFZlYzMsIGEpO1xuICAgICAgdmVjMy5ub3JtYWxpemUodG1wdmVjMywgdG1wdmVjMyk7XG4gICAgICBzZXRBeGlzQW5nbGUob3V0LCB0bXB2ZWMzLCBNYXRoLlBJKTtcbiAgICAgIHJldHVybiBvdXQ7XG4gICAgfSBlbHNlIGlmIChkb3QgPiAwLjk5OTk5OSkge1xuICAgICAgb3V0WzBdID0gMDtcbiAgICAgIG91dFsxXSA9IDA7XG4gICAgICBvdXRbMl0gPSAwO1xuICAgICAgb3V0WzNdID0gMTtcbiAgICAgIHJldHVybiBvdXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZlYzMuY3Jvc3ModG1wdmVjMywgYSwgYik7XG4gICAgICBvdXRbMF0gPSB0bXB2ZWMzWzBdO1xuICAgICAgb3V0WzFdID0gdG1wdmVjM1sxXTtcbiAgICAgIG91dFsyXSA9IHRtcHZlYzNbMl07XG4gICAgICBvdXRbM10gPSAxICsgZG90O1xuICAgICAgcmV0dXJuIG5vcm1hbGl6ZShvdXQsIG91dCk7XG4gICAgfVxuICB9O1xufSgpO1xuLyoqXHJcbiAqIFBlcmZvcm1zIGEgc3BoZXJpY2FsIGxpbmVhciBpbnRlcnBvbGF0aW9uIHdpdGggdHdvIGNvbnRyb2wgcG9pbnRzXHJcbiAqXHJcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxyXG4gKiBAcGFyYW0ge3F1YXR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtxdWF0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge3F1YXR9IGMgdGhlIHRoaXJkIG9wZXJhbmRcclxuICogQHBhcmFtIHtxdWF0fSBkIHRoZSBmb3VydGggb3BlcmFuZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudCwgaW4gdGhlIHJhbmdlIFswLTFdLCBiZXR3ZWVuIHRoZSB0d28gaW5wdXRzXHJcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcclxuICovXG5cbmV4cG9ydCB2YXIgc3FsZXJwID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdGVtcDEgPSBjcmVhdGUoKTtcbiAgdmFyIHRlbXAyID0gY3JlYXRlKCk7XG4gIHJldHVybiBmdW5jdGlvbiAob3V0LCBhLCBiLCBjLCBkLCB0KSB7XG4gICAgc2xlcnAodGVtcDEsIGEsIGQsIHQpO1xuICAgIHNsZXJwKHRlbXAyLCBiLCBjLCB0KTtcbiAgICBzbGVycChvdXQsIHRlbXAxLCB0ZW1wMiwgMiAqIHQgKiAoMSAtIHQpKTtcbiAgICByZXR1cm4gb3V0O1xuICB9O1xufSgpO1xuLyoqXHJcbiAqIFNldHMgdGhlIHNwZWNpZmllZCBxdWF0ZXJuaW9uIHdpdGggdmFsdWVzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuXHJcbiAqIGF4ZXMuIEVhY2ggYXhpcyBpcyBhIHZlYzMgYW5kIGlzIGV4cGVjdGVkIHRvIGJlIHVuaXQgbGVuZ3RoIGFuZFxyXG4gKiBwZXJwZW5kaWN1bGFyIHRvIGFsbCBvdGhlciBzcGVjaWZpZWQgYXhlcy5cclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSB2aWV3ICB0aGUgdmVjdG9yIHJlcHJlc2VudGluZyB0aGUgdmlld2luZyBkaXJlY3Rpb25cclxuICogQHBhcmFtIHt2ZWMzfSByaWdodCB0aGUgdmVjdG9yIHJlcHJlc2VudGluZyB0aGUgbG9jYWwgXCJyaWdodFwiIGRpcmVjdGlvblxyXG4gKiBAcGFyYW0ge3ZlYzN9IHVwICAgIHRoZSB2ZWN0b3IgcmVwcmVzZW50aW5nIHRoZSBsb2NhbCBcInVwXCIgZGlyZWN0aW9uXHJcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcclxuICovXG5cbmV4cG9ydCB2YXIgc2V0QXhlcyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG1hdHIgPSBtYXQzLmNyZWF0ZSgpO1xuICByZXR1cm4gZnVuY3Rpb24gKG91dCwgdmlldywgcmlnaHQsIHVwKSB7XG4gICAgbWF0clswXSA9IHJpZ2h0WzBdO1xuICAgIG1hdHJbM10gPSByaWdodFsxXTtcbiAgICBtYXRyWzZdID0gcmlnaHRbMl07XG4gICAgbWF0clsxXSA9IHVwWzBdO1xuICAgIG1hdHJbNF0gPSB1cFsxXTtcbiAgICBtYXRyWzddID0gdXBbMl07XG4gICAgbWF0clsyXSA9IC12aWV3WzBdO1xuICAgIG1hdHJbNV0gPSAtdmlld1sxXTtcbiAgICBtYXRyWzhdID0gLXZpZXdbMl07XG4gICAgcmV0dXJuIG5vcm1hbGl6ZShvdXQsIGZyb21NYXQzKG91dCwgbWF0cikpO1xuICB9O1xufSgpOyIsImltcG9ydCAqIGFzIGdsTWF0cml4IGZyb20gXCIuL2NvbW1vbi5qc1wiO1xuaW1wb3J0ICogYXMgcXVhdCBmcm9tIFwiLi9xdWF0LmpzXCI7XG5pbXBvcnQgKiBhcyBtYXQ0IGZyb20gXCIuL21hdDQuanNcIjtcbi8qKlxyXG4gKiBEdWFsIFF1YXRlcm5pb248YnI+XHJcbiAqIEZvcm1hdDogW3JlYWwsIGR1YWxdPGJyPlxyXG4gKiBRdWF0ZXJuaW9uIGZvcm1hdDogWFlaVzxicj5cclxuICogTWFrZSBzdXJlIHRvIGhhdmUgbm9ybWFsaXplZCBkdWFsIHF1YXRlcm5pb25zLCBvdGhlcndpc2UgdGhlIGZ1bmN0aW9ucyBtYXkgbm90IHdvcmsgYXMgaW50ZW5kZWQuPGJyPlxyXG4gKiBAbW9kdWxlIHF1YXQyXHJcbiAqL1xuXG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyBpZGVudGl0eSBkdWFsIHF1YXRcclxuICpcclxuICogQHJldHVybnMge3F1YXQyfSBhIG5ldyBkdWFsIHF1YXRlcm5pb24gW3JlYWwgLT4gcm90YXRpb24sIGR1YWwgLT4gdHJhbnNsYXRpb25dXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKCkge1xuICB2YXIgZHEgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSg4KTtcblxuICBpZiAoZ2xNYXRyaXguQVJSQVlfVFlQRSAhPSBGbG9hdDMyQXJyYXkpIHtcbiAgICBkcVswXSA9IDA7XG4gICAgZHFbMV0gPSAwO1xuICAgIGRxWzJdID0gMDtcbiAgICBkcVs0XSA9IDA7XG4gICAgZHFbNV0gPSAwO1xuICAgIGRxWzZdID0gMDtcbiAgICBkcVs3XSA9IDA7XG4gIH1cblxuICBkcVszXSA9IDE7XG4gIHJldHVybiBkcTtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IHF1YXQgaW5pdGlhbGl6ZWQgd2l0aCB2YWx1ZXMgZnJvbSBhbiBleGlzdGluZyBxdWF0ZXJuaW9uXHJcbiAqXHJcbiAqIEBwYXJhbSB7cXVhdDJ9IGEgZHVhbCBxdWF0ZXJuaW9uIHRvIGNsb25lXHJcbiAqIEByZXR1cm5zIHtxdWF0Mn0gbmV3IGR1YWwgcXVhdGVybmlvblxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShhKSB7XG4gIHZhciBkcSA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDgpO1xuICBkcVswXSA9IGFbMF07XG4gIGRxWzFdID0gYVsxXTtcbiAgZHFbMl0gPSBhWzJdO1xuICBkcVszXSA9IGFbM107XG4gIGRxWzRdID0gYVs0XTtcbiAgZHFbNV0gPSBhWzVdO1xuICBkcVs2XSA9IGFbNl07XG4gIGRxWzddID0gYVs3XTtcbiAgcmV0dXJuIGRxO1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgZHVhbCBxdWF0IGluaXRpYWxpemVkIHdpdGggdGhlIGdpdmVuIHZhbHVlc1xyXG4gKlxyXG4gKiBAcGFyYW0ge051bWJlcn0geDEgWCBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHkxIFkgY29tcG9uZW50XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB6MSBaIGNvbXBvbmVudFxyXG4gKiBAcGFyYW0ge051bWJlcn0gdzEgVyBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHgyIFggY29tcG9uZW50XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB5MiBZIGNvbXBvbmVudFxyXG4gKiBAcGFyYW0ge051bWJlcn0gejIgWiBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHcyIFcgY29tcG9uZW50XHJcbiAqIEByZXR1cm5zIHtxdWF0Mn0gbmV3IGR1YWwgcXVhdGVybmlvblxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tVmFsdWVzKHgxLCB5MSwgejEsIHcxLCB4MiwgeTIsIHoyLCB3Mikge1xuICB2YXIgZHEgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSg4KTtcbiAgZHFbMF0gPSB4MTtcbiAgZHFbMV0gPSB5MTtcbiAgZHFbMl0gPSB6MTtcbiAgZHFbM10gPSB3MTtcbiAgZHFbNF0gPSB4MjtcbiAgZHFbNV0gPSB5MjtcbiAgZHFbNl0gPSB6MjtcbiAgZHFbN10gPSB3MjtcbiAgcmV0dXJuIGRxO1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgZHVhbCBxdWF0IGZyb20gdGhlIGdpdmVuIHZhbHVlcyAocXVhdCBhbmQgdHJhbnNsYXRpb24pXHJcbiAqXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB4MSBYIGNvbXBvbmVudFxyXG4gKiBAcGFyYW0ge051bWJlcn0geTEgWSBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHoxIFogY29tcG9uZW50XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB3MSBXIGNvbXBvbmVudFxyXG4gKiBAcGFyYW0ge051bWJlcn0geDIgWCBjb21wb25lbnQgKHRyYW5zbGF0aW9uKVxyXG4gKiBAcGFyYW0ge051bWJlcn0geTIgWSBjb21wb25lbnQgKHRyYW5zbGF0aW9uKVxyXG4gKiBAcGFyYW0ge051bWJlcn0gejIgWiBjb21wb25lbnQgKHRyYW5zbGF0aW9uKVxyXG4gKiBAcmV0dXJucyB7cXVhdDJ9IG5ldyBkdWFsIHF1YXRlcm5pb25cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVJvdGF0aW9uVHJhbnNsYXRpb25WYWx1ZXMoeDEsIHkxLCB6MSwgdzEsIHgyLCB5MiwgejIpIHtcbiAgdmFyIGRxID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoOCk7XG4gIGRxWzBdID0geDE7XG4gIGRxWzFdID0geTE7XG4gIGRxWzJdID0gejE7XG4gIGRxWzNdID0gdzE7XG4gIHZhciBheCA9IHgyICogMC41LFxuICAgICAgYXkgPSB5MiAqIDAuNSxcbiAgICAgIGF6ID0gejIgKiAwLjU7XG4gIGRxWzRdID0gYXggKiB3MSArIGF5ICogejEgLSBheiAqIHkxO1xuICBkcVs1XSA9IGF5ICogdzEgKyBheiAqIHgxIC0gYXggKiB6MTtcbiAgZHFbNl0gPSBheiAqIHcxICsgYXggKiB5MSAtIGF5ICogeDE7XG4gIGRxWzddID0gLWF4ICogeDEgLSBheSAqIHkxIC0gYXogKiB6MTtcbiAgcmV0dXJuIGRxO1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBkdWFsIHF1YXQgZnJvbSBhIHF1YXRlcm5pb24gYW5kIGEgdHJhbnNsYXRpb25cclxuICpcclxuICogQHBhcmFtIHtxdWF0Mn0gZHVhbCBxdWF0ZXJuaW9uIHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XHJcbiAqIEBwYXJhbSB7cXVhdH0gcSBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSB7dmVjM30gdCB0cmFubGF0aW9uIHZlY3RvclxyXG4gKiBAcmV0dXJucyB7cXVhdDJ9IGR1YWwgcXVhdGVybmlvbiByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUm90YXRpb25UcmFuc2xhdGlvbihvdXQsIHEsIHQpIHtcbiAgdmFyIGF4ID0gdFswXSAqIDAuNSxcbiAgICAgIGF5ID0gdFsxXSAqIDAuNSxcbiAgICAgIGF6ID0gdFsyXSAqIDAuNSxcbiAgICAgIGJ4ID0gcVswXSxcbiAgICAgIGJ5ID0gcVsxXSxcbiAgICAgIGJ6ID0gcVsyXSxcbiAgICAgIGJ3ID0gcVszXTtcbiAgb3V0WzBdID0gYng7XG4gIG91dFsxXSA9IGJ5O1xuICBvdXRbMl0gPSBiejtcbiAgb3V0WzNdID0gYnc7XG4gIG91dFs0XSA9IGF4ICogYncgKyBheSAqIGJ6IC0gYXogKiBieTtcbiAgb3V0WzVdID0gYXkgKiBidyArIGF6ICogYnggLSBheCAqIGJ6O1xuICBvdXRbNl0gPSBheiAqIGJ3ICsgYXggKiBieSAtIGF5ICogYng7XG4gIG91dFs3XSA9IC1heCAqIGJ4IC0gYXkgKiBieSAtIGF6ICogYno7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIGR1YWwgcXVhdCBmcm9tIGEgdHJhbnNsYXRpb25cclxuICpcclxuICogQHBhcmFtIHtxdWF0Mn0gZHVhbCBxdWF0ZXJuaW9uIHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XHJcbiAqIEBwYXJhbSB7dmVjM30gdCB0cmFuc2xhdGlvbiB2ZWN0b3JcclxuICogQHJldHVybnMge3F1YXQyfSBkdWFsIHF1YXRlcm5pb24gcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVRyYW5zbGF0aW9uKG91dCwgdCkge1xuICBvdXRbMF0gPSAwO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAxO1xuICBvdXRbNF0gPSB0WzBdICogMC41O1xuICBvdXRbNV0gPSB0WzFdICogMC41O1xuICBvdXRbNl0gPSB0WzJdICogMC41O1xuICBvdXRbN10gPSAwO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBkdWFsIHF1YXQgZnJvbSBhIHF1YXRlcm5pb25cclxuICpcclxuICogQHBhcmFtIHtxdWF0Mn0gZHVhbCBxdWF0ZXJuaW9uIHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XHJcbiAqIEBwYXJhbSB7cXVhdH0gcSB0aGUgcXVhdGVybmlvblxyXG4gKiBAcmV0dXJucyB7cXVhdDJ9IGR1YWwgcXVhdGVybmlvbiByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUm90YXRpb24ob3V0LCBxKSB7XG4gIG91dFswXSA9IHFbMF07XG4gIG91dFsxXSA9IHFbMV07XG4gIG91dFsyXSA9IHFbMl07XG4gIG91dFszXSA9IHFbM107XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IDA7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyBkdWFsIHF1YXQgZnJvbSBhIG1hdHJpeCAoNHg0KVxyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXQyfSBvdXQgdGhlIGR1YWwgcXVhdGVybmlvblxyXG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeFxyXG4gKiBAcmV0dXJucyB7cXVhdDJ9IGR1YWwgcXVhdCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tTWF0NChvdXQsIGEpIHtcbiAgLy9UT0RPIE9wdGltaXplIHRoaXNcbiAgdmFyIG91dGVyID0gcXVhdC5jcmVhdGUoKTtcbiAgbWF0NC5nZXRSb3RhdGlvbihvdXRlciwgYSk7XG4gIHZhciB0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoMyk7XG4gIG1hdDQuZ2V0VHJhbnNsYXRpb24odCwgYSk7XG4gIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uKG91dCwgb3V0ZXIsIHQpO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSBkdWFsIHF1YXQgdG8gYW5vdGhlclxyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXQyfSBvdXQgdGhlIHJlY2VpdmluZyBkdWFsIHF1YXRlcm5pb25cclxuICogQHBhcmFtIHtxdWF0Mn0gYSB0aGUgc291cmNlIGR1YWwgcXVhdGVybmlvblxyXG4gKiBAcmV0dXJucyB7cXVhdDJ9IG91dFxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KG91dCwgYSkge1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICBvdXRbMl0gPSBhWzJdO1xuICBvdXRbM10gPSBhWzNdO1xuICBvdXRbNF0gPSBhWzRdO1xuICBvdXRbNV0gPSBhWzVdO1xuICBvdXRbNl0gPSBhWzZdO1xuICBvdXRbN10gPSBhWzddO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFNldCBhIGR1YWwgcXVhdCB0byB0aGUgaWRlbnRpdHkgZHVhbCBxdWF0ZXJuaW9uXHJcbiAqXHJcbiAqIEBwYXJhbSB7cXVhdDJ9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cclxuICogQHJldHVybnMge3F1YXQyfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eShvdXQpIHtcbiAgb3V0WzBdID0gMDtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMTtcbiAgb3V0WzRdID0gMDtcbiAgb3V0WzVdID0gMDtcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSBkdWFsIHF1YXQgdG8gdGhlIGdpdmVuIHZhbHVlc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXQyfSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB4MSBYIGNvbXBvbmVudFxyXG4gKiBAcGFyYW0ge051bWJlcn0geTEgWSBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHoxIFogY29tcG9uZW50XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB3MSBXIGNvbXBvbmVudFxyXG4gKiBAcGFyYW0ge051bWJlcn0geDIgWCBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHkyIFkgY29tcG9uZW50XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB6MiBaIGNvbXBvbmVudFxyXG4gKiBAcGFyYW0ge051bWJlcn0gdzIgVyBjb21wb25lbnRcclxuICogQHJldHVybnMge3F1YXQyfSBvdXRcclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0KG91dCwgeDEsIHkxLCB6MSwgdzEsIHgyLCB5MiwgejIsIHcyKSB7XG4gIG91dFswXSA9IHgxO1xuICBvdXRbMV0gPSB5MTtcbiAgb3V0WzJdID0gejE7XG4gIG91dFszXSA9IHcxO1xuICBvdXRbNF0gPSB4MjtcbiAgb3V0WzVdID0geTI7XG4gIG91dFs2XSA9IHoyO1xuICBvdXRbN10gPSB3MjtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBHZXRzIHRoZSByZWFsIHBhcnQgb2YgYSBkdWFsIHF1YXRcclxuICogQHBhcmFtICB7cXVhdH0gb3V0IHJlYWwgcGFydFxyXG4gKiBAcGFyYW0gIHtxdWF0Mn0gYSBEdWFsIFF1YXRlcm5pb25cclxuICogQHJldHVybiB7cXVhdH0gcmVhbCBwYXJ0XHJcbiAqL1xuXG5leHBvcnQgdmFyIGdldFJlYWwgPSBxdWF0LmNvcHk7XG4vKipcclxuICogR2V0cyB0aGUgZHVhbCBwYXJ0IG9mIGEgZHVhbCBxdWF0XHJcbiAqIEBwYXJhbSAge3F1YXR9IG91dCBkdWFsIHBhcnRcclxuICogQHBhcmFtICB7cXVhdDJ9IGEgRHVhbCBRdWF0ZXJuaW9uXHJcbiAqIEByZXR1cm4ge3F1YXR9IGR1YWwgcGFydFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldER1YWwob3V0LCBhKSB7XG4gIG91dFswXSA9IGFbNF07XG4gIG91dFsxXSA9IGFbNV07XG4gIG91dFsyXSA9IGFbNl07XG4gIG91dFszXSA9IGFbN107XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogU2V0IHRoZSByZWFsIGNvbXBvbmVudCBvZiBhIGR1YWwgcXVhdCB0byB0aGUgZ2l2ZW4gcXVhdGVybmlvblxyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXQyfSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSB7cXVhdH0gcSBhIHF1YXRlcm5pb24gcmVwcmVzZW50aW5nIHRoZSByZWFsIHBhcnRcclxuICogQHJldHVybnMge3F1YXQyfSBvdXRcclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIHNldFJlYWwgPSBxdWF0LmNvcHk7XG4vKipcclxuICogU2V0IHRoZSBkdWFsIGNvbXBvbmVudCBvZiBhIGR1YWwgcXVhdCB0byB0aGUgZ2l2ZW4gcXVhdGVybmlvblxyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXQyfSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSB7cXVhdH0gcSBhIHF1YXRlcm5pb24gcmVwcmVzZW50aW5nIHRoZSBkdWFsIHBhcnRcclxuICogQHJldHVybnMge3F1YXQyfSBvdXRcclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0RHVhbChvdXQsIHEpIHtcbiAgb3V0WzRdID0gcVswXTtcbiAgb3V0WzVdID0gcVsxXTtcbiAgb3V0WzZdID0gcVsyXTtcbiAgb3V0WzddID0gcVszXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBHZXRzIHRoZSB0cmFuc2xhdGlvbiBvZiBhIG5vcm1hbGl6ZWQgZHVhbCBxdWF0XHJcbiAqIEBwYXJhbSAge3ZlYzN9IG91dCB0cmFuc2xhdGlvblxyXG4gKiBAcGFyYW0gIHtxdWF0Mn0gYSBEdWFsIFF1YXRlcm5pb24gdG8gYmUgZGVjb21wb3NlZFxyXG4gKiBAcmV0dXJuIHt2ZWMzfSB0cmFuc2xhdGlvblxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRyYW5zbGF0aW9uKG91dCwgYSkge1xuICB2YXIgYXggPSBhWzRdLFxuICAgICAgYXkgPSBhWzVdLFxuICAgICAgYXogPSBhWzZdLFxuICAgICAgYXcgPSBhWzddLFxuICAgICAgYnggPSAtYVswXSxcbiAgICAgIGJ5ID0gLWFbMV0sXG4gICAgICBieiA9IC1hWzJdLFxuICAgICAgYncgPSBhWzNdO1xuICBvdXRbMF0gPSAoYXggKiBidyArIGF3ICogYnggKyBheSAqIGJ6IC0gYXogKiBieSkgKiAyO1xuICBvdXRbMV0gPSAoYXkgKiBidyArIGF3ICogYnkgKyBheiAqIGJ4IC0gYXggKiBieikgKiAyO1xuICBvdXRbMl0gPSAoYXogKiBidyArIGF3ICogYnogKyBheCAqIGJ5IC0gYXkgKiBieCkgKiAyO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFRyYW5zbGF0ZXMgYSBkdWFsIHF1YXQgYnkgdGhlIGdpdmVuIHZlY3RvclxyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXQyfSBvdXQgdGhlIHJlY2VpdmluZyBkdWFsIHF1YXRlcm5pb25cclxuICogQHBhcmFtIHtxdWF0Mn0gYSB0aGUgZHVhbCBxdWF0ZXJuaW9uIHRvIHRyYW5zbGF0ZVxyXG4gKiBAcGFyYW0ge3ZlYzN9IHYgdmVjdG9yIHRvIHRyYW5zbGF0ZSBieVxyXG4gKiBAcmV0dXJucyB7cXVhdDJ9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZShvdXQsIGEsIHYpIHtcbiAgdmFyIGF4MSA9IGFbMF0sXG4gICAgICBheTEgPSBhWzFdLFxuICAgICAgYXoxID0gYVsyXSxcbiAgICAgIGF3MSA9IGFbM10sXG4gICAgICBieDEgPSB2WzBdICogMC41LFxuICAgICAgYnkxID0gdlsxXSAqIDAuNSxcbiAgICAgIGJ6MSA9IHZbMl0gKiAwLjUsXG4gICAgICBheDIgPSBhWzRdLFxuICAgICAgYXkyID0gYVs1XSxcbiAgICAgIGF6MiA9IGFbNl0sXG4gICAgICBhdzIgPSBhWzddO1xuICBvdXRbMF0gPSBheDE7XG4gIG91dFsxXSA9IGF5MTtcbiAgb3V0WzJdID0gYXoxO1xuICBvdXRbM10gPSBhdzE7XG4gIG91dFs0XSA9IGF3MSAqIGJ4MSArIGF5MSAqIGJ6MSAtIGF6MSAqIGJ5MSArIGF4MjtcbiAgb3V0WzVdID0gYXcxICogYnkxICsgYXoxICogYngxIC0gYXgxICogYnoxICsgYXkyO1xuICBvdXRbNl0gPSBhdzEgKiBiejEgKyBheDEgKiBieTEgLSBheTEgKiBieDEgKyBhejI7XG4gIG91dFs3XSA9IC1heDEgKiBieDEgLSBheTEgKiBieTEgLSBhejEgKiBiejEgKyBhdzI7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUm90YXRlcyBhIGR1YWwgcXVhdCBhcm91bmQgdGhlIFggYXhpc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXQyfSBvdXQgdGhlIHJlY2VpdmluZyBkdWFsIHF1YXRlcm5pb25cclxuICogQHBhcmFtIHtxdWF0Mn0gYSB0aGUgZHVhbCBxdWF0ZXJuaW9uIHRvIHJvdGF0ZVxyXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkIGhvdyBmYXIgc2hvdWxkIHRoZSByb3RhdGlvbiBiZVxyXG4gKiBAcmV0dXJucyB7cXVhdDJ9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVgob3V0LCBhLCByYWQpIHtcbiAgdmFyIGJ4ID0gLWFbMF0sXG4gICAgICBieSA9IC1hWzFdLFxuICAgICAgYnogPSAtYVsyXSxcbiAgICAgIGJ3ID0gYVszXSxcbiAgICAgIGF4ID0gYVs0XSxcbiAgICAgIGF5ID0gYVs1XSxcbiAgICAgIGF6ID0gYVs2XSxcbiAgICAgIGF3ID0gYVs3XSxcbiAgICAgIGF4MSA9IGF4ICogYncgKyBhdyAqIGJ4ICsgYXkgKiBieiAtIGF6ICogYnksXG4gICAgICBheTEgPSBheSAqIGJ3ICsgYXcgKiBieSArIGF6ICogYnggLSBheCAqIGJ6LFxuICAgICAgYXoxID0gYXogKiBidyArIGF3ICogYnogKyBheCAqIGJ5IC0gYXkgKiBieCxcbiAgICAgIGF3MSA9IGF3ICogYncgLSBheCAqIGJ4IC0gYXkgKiBieSAtIGF6ICogYno7XG4gIHF1YXQucm90YXRlWChvdXQsIGEsIHJhZCk7XG4gIGJ4ID0gb3V0WzBdO1xuICBieSA9IG91dFsxXTtcbiAgYnogPSBvdXRbMl07XG4gIGJ3ID0gb3V0WzNdO1xuICBvdXRbNF0gPSBheDEgKiBidyArIGF3MSAqIGJ4ICsgYXkxICogYnogLSBhejEgKiBieTtcbiAgb3V0WzVdID0gYXkxICogYncgKyBhdzEgKiBieSArIGF6MSAqIGJ4IC0gYXgxICogYno7XG4gIG91dFs2XSA9IGF6MSAqIGJ3ICsgYXcxICogYnogKyBheDEgKiBieSAtIGF5MSAqIGJ4O1xuICBvdXRbN10gPSBhdzEgKiBidyAtIGF4MSAqIGJ4IC0gYXkxICogYnkgLSBhejEgKiBiejtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSb3RhdGVzIGEgZHVhbCBxdWF0IGFyb3VuZCB0aGUgWSBheGlzXHJcbiAqXHJcbiAqIEBwYXJhbSB7cXVhdDJ9IG91dCB0aGUgcmVjZWl2aW5nIGR1YWwgcXVhdGVybmlvblxyXG4gKiBAcGFyYW0ge3F1YXQyfSBhIHRoZSBkdWFsIHF1YXRlcm5pb24gdG8gcm90YXRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWQgaG93IGZhciBzaG91bGQgdGhlIHJvdGF0aW9uIGJlXHJcbiAqIEByZXR1cm5zIHtxdWF0Mn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWShvdXQsIGEsIHJhZCkge1xuICB2YXIgYnggPSAtYVswXSxcbiAgICAgIGJ5ID0gLWFbMV0sXG4gICAgICBieiA9IC1hWzJdLFxuICAgICAgYncgPSBhWzNdLFxuICAgICAgYXggPSBhWzRdLFxuICAgICAgYXkgPSBhWzVdLFxuICAgICAgYXogPSBhWzZdLFxuICAgICAgYXcgPSBhWzddLFxuICAgICAgYXgxID0gYXggKiBidyArIGF3ICogYnggKyBheSAqIGJ6IC0gYXogKiBieSxcbiAgICAgIGF5MSA9IGF5ICogYncgKyBhdyAqIGJ5ICsgYXogKiBieCAtIGF4ICogYnosXG4gICAgICBhejEgPSBheiAqIGJ3ICsgYXcgKiBieiArIGF4ICogYnkgLSBheSAqIGJ4LFxuICAgICAgYXcxID0gYXcgKiBidyAtIGF4ICogYnggLSBheSAqIGJ5IC0gYXogKiBiejtcbiAgcXVhdC5yb3RhdGVZKG91dCwgYSwgcmFkKTtcbiAgYnggPSBvdXRbMF07XG4gIGJ5ID0gb3V0WzFdO1xuICBieiA9IG91dFsyXTtcbiAgYncgPSBvdXRbM107XG4gIG91dFs0XSA9IGF4MSAqIGJ3ICsgYXcxICogYnggKyBheTEgKiBieiAtIGF6MSAqIGJ5O1xuICBvdXRbNV0gPSBheTEgKiBidyArIGF3MSAqIGJ5ICsgYXoxICogYnggLSBheDEgKiBiejtcbiAgb3V0WzZdID0gYXoxICogYncgKyBhdzEgKiBieiArIGF4MSAqIGJ5IC0gYXkxICogYng7XG4gIG91dFs3XSA9IGF3MSAqIGJ3IC0gYXgxICogYnggLSBheTEgKiBieSAtIGF6MSAqIGJ6O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJvdGF0ZXMgYSBkdWFsIHF1YXQgYXJvdW5kIHRoZSBaIGF4aXNcclxuICpcclxuICogQHBhcmFtIHtxdWF0Mn0gb3V0IHRoZSByZWNlaXZpbmcgZHVhbCBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSB7cXVhdDJ9IGEgdGhlIGR1YWwgcXVhdGVybmlvbiB0byByb3RhdGVcclxuICogQHBhcmFtIHtudW1iZXJ9IHJhZCBob3cgZmFyIHNob3VsZCB0aGUgcm90YXRpb24gYmVcclxuICogQHJldHVybnMge3F1YXQyfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVaKG91dCwgYSwgcmFkKSB7XG4gIHZhciBieCA9IC1hWzBdLFxuICAgICAgYnkgPSAtYVsxXSxcbiAgICAgIGJ6ID0gLWFbMl0sXG4gICAgICBidyA9IGFbM10sXG4gICAgICBheCA9IGFbNF0sXG4gICAgICBheSA9IGFbNV0sXG4gICAgICBheiA9IGFbNl0sXG4gICAgICBhdyA9IGFbN10sXG4gICAgICBheDEgPSBheCAqIGJ3ICsgYXcgKiBieCArIGF5ICogYnogLSBheiAqIGJ5LFxuICAgICAgYXkxID0gYXkgKiBidyArIGF3ICogYnkgKyBheiAqIGJ4IC0gYXggKiBieixcbiAgICAgIGF6MSA9IGF6ICogYncgKyBhdyAqIGJ6ICsgYXggKiBieSAtIGF5ICogYngsXG4gICAgICBhdzEgPSBhdyAqIGJ3IC0gYXggKiBieCAtIGF5ICogYnkgLSBheiAqIGJ6O1xuICBxdWF0LnJvdGF0ZVoob3V0LCBhLCByYWQpO1xuICBieCA9IG91dFswXTtcbiAgYnkgPSBvdXRbMV07XG4gIGJ6ID0gb3V0WzJdO1xuICBidyA9IG91dFszXTtcbiAgb3V0WzRdID0gYXgxICogYncgKyBhdzEgKiBieCArIGF5MSAqIGJ6IC0gYXoxICogYnk7XG4gIG91dFs1XSA9IGF5MSAqIGJ3ICsgYXcxICogYnkgKyBhejEgKiBieCAtIGF4MSAqIGJ6O1xuICBvdXRbNl0gPSBhejEgKiBidyArIGF3MSAqIGJ6ICsgYXgxICogYnkgLSBheTEgKiBieDtcbiAgb3V0WzddID0gYXcxICogYncgLSBheDEgKiBieCAtIGF5MSAqIGJ5IC0gYXoxICogYno7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUm90YXRlcyBhIGR1YWwgcXVhdCBieSBhIGdpdmVuIHF1YXRlcm5pb24gKGEgKiBxKVxyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXQyfSBvdXQgdGhlIHJlY2VpdmluZyBkdWFsIHF1YXRlcm5pb25cclxuICogQHBhcmFtIHtxdWF0Mn0gYSB0aGUgZHVhbCBxdWF0ZXJuaW9uIHRvIHJvdGF0ZVxyXG4gKiBAcGFyYW0ge3F1YXR9IHEgcXVhdGVybmlvbiB0byByb3RhdGUgYnlcclxuICogQHJldHVybnMge3F1YXQyfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVCeVF1YXRBcHBlbmQob3V0LCBhLCBxKSB7XG4gIHZhciBxeCA9IHFbMF0sXG4gICAgICBxeSA9IHFbMV0sXG4gICAgICBxeiA9IHFbMl0sXG4gICAgICBxdyA9IHFbM10sXG4gICAgICBheCA9IGFbMF0sXG4gICAgICBheSA9IGFbMV0sXG4gICAgICBheiA9IGFbMl0sXG4gICAgICBhdyA9IGFbM107XG4gIG91dFswXSA9IGF4ICogcXcgKyBhdyAqIHF4ICsgYXkgKiBxeiAtIGF6ICogcXk7XG4gIG91dFsxXSA9IGF5ICogcXcgKyBhdyAqIHF5ICsgYXogKiBxeCAtIGF4ICogcXo7XG4gIG91dFsyXSA9IGF6ICogcXcgKyBhdyAqIHF6ICsgYXggKiBxeSAtIGF5ICogcXg7XG4gIG91dFszXSA9IGF3ICogcXcgLSBheCAqIHF4IC0gYXkgKiBxeSAtIGF6ICogcXo7XG4gIGF4ID0gYVs0XTtcbiAgYXkgPSBhWzVdO1xuICBheiA9IGFbNl07XG4gIGF3ID0gYVs3XTtcbiAgb3V0WzRdID0gYXggKiBxdyArIGF3ICogcXggKyBheSAqIHF6IC0gYXogKiBxeTtcbiAgb3V0WzVdID0gYXkgKiBxdyArIGF3ICogcXkgKyBheiAqIHF4IC0gYXggKiBxejtcbiAgb3V0WzZdID0gYXogKiBxdyArIGF3ICogcXogKyBheCAqIHF5IC0gYXkgKiBxeDtcbiAgb3V0WzddID0gYXcgKiBxdyAtIGF4ICogcXggLSBheSAqIHF5IC0gYXogKiBxejtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSb3RhdGVzIGEgZHVhbCBxdWF0IGJ5IGEgZ2l2ZW4gcXVhdGVybmlvbiAocSAqIGEpXHJcbiAqXHJcbiAqIEBwYXJhbSB7cXVhdDJ9IG91dCB0aGUgcmVjZWl2aW5nIGR1YWwgcXVhdGVybmlvblxyXG4gKiBAcGFyYW0ge3F1YXR9IHEgcXVhdGVybmlvbiB0byByb3RhdGUgYnlcclxuICogQHBhcmFtIHtxdWF0Mn0gYSB0aGUgZHVhbCBxdWF0ZXJuaW9uIHRvIHJvdGF0ZVxyXG4gKiBAcmV0dXJucyB7cXVhdDJ9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZUJ5UXVhdFByZXBlbmQob3V0LCBxLCBhKSB7XG4gIHZhciBxeCA9IHFbMF0sXG4gICAgICBxeSA9IHFbMV0sXG4gICAgICBxeiA9IHFbMl0sXG4gICAgICBxdyA9IHFbM10sXG4gICAgICBieCA9IGFbMF0sXG4gICAgICBieSA9IGFbMV0sXG4gICAgICBieiA9IGFbMl0sXG4gICAgICBidyA9IGFbM107XG4gIG91dFswXSA9IHF4ICogYncgKyBxdyAqIGJ4ICsgcXkgKiBieiAtIHF6ICogYnk7XG4gIG91dFsxXSA9IHF5ICogYncgKyBxdyAqIGJ5ICsgcXogKiBieCAtIHF4ICogYno7XG4gIG91dFsyXSA9IHF6ICogYncgKyBxdyAqIGJ6ICsgcXggKiBieSAtIHF5ICogYng7XG4gIG91dFszXSA9IHF3ICogYncgLSBxeCAqIGJ4IC0gcXkgKiBieSAtIHF6ICogYno7XG4gIGJ4ID0gYVs0XTtcbiAgYnkgPSBhWzVdO1xuICBieiA9IGFbNl07XG4gIGJ3ID0gYVs3XTtcbiAgb3V0WzRdID0gcXggKiBidyArIHF3ICogYnggKyBxeSAqIGJ6IC0gcXogKiBieTtcbiAgb3V0WzVdID0gcXkgKiBidyArIHF3ICogYnkgKyBxeiAqIGJ4IC0gcXggKiBiejtcbiAgb3V0WzZdID0gcXogKiBidyArIHF3ICogYnogKyBxeCAqIGJ5IC0gcXkgKiBieDtcbiAgb3V0WzddID0gcXcgKiBidyAtIHF4ICogYnggLSBxeSAqIGJ5IC0gcXogKiBiejtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSb3RhdGVzIGEgZHVhbCBxdWF0IGFyb3VuZCBhIGdpdmVuIGF4aXMuIERvZXMgdGhlIG5vcm1hbGlzYXRpb24gYXV0b21hdGljYWxseVxyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXQyfSBvdXQgdGhlIHJlY2VpdmluZyBkdWFsIHF1YXRlcm5pb25cclxuICogQHBhcmFtIHtxdWF0Mn0gYSB0aGUgZHVhbCBxdWF0ZXJuaW9uIHRvIHJvdGF0ZVxyXG4gKiBAcGFyYW0ge3ZlYzN9IGF4aXMgdGhlIGF4aXMgdG8gcm90YXRlIGFyb3VuZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIGhvdyBmYXIgdGhlIHJvdGF0aW9uIHNob3VsZCBiZVxyXG4gKiBAcmV0dXJucyB7cXVhdDJ9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZUFyb3VuZEF4aXMob3V0LCBhLCBheGlzLCByYWQpIHtcbiAgLy9TcGVjaWFsIGNhc2UgZm9yIHJhZCA9IDBcbiAgaWYgKE1hdGguYWJzKHJhZCkgPCBnbE1hdHJpeC5FUFNJTE9OKSB7XG4gICAgcmV0dXJuIGNvcHkob3V0LCBhKTtcbiAgfVxuXG4gIHZhciBheGlzTGVuZ3RoID0gTWF0aC5zcXJ0KGF4aXNbMF0gKiBheGlzWzBdICsgYXhpc1sxXSAqIGF4aXNbMV0gKyBheGlzWzJdICogYXhpc1syXSk7XG4gIHJhZCA9IHJhZCAqIDAuNTtcbiAgdmFyIHMgPSBNYXRoLnNpbihyYWQpO1xuICB2YXIgYnggPSBzICogYXhpc1swXSAvIGF4aXNMZW5ndGg7XG4gIHZhciBieSA9IHMgKiBheGlzWzFdIC8gYXhpc0xlbmd0aDtcbiAgdmFyIGJ6ID0gcyAqIGF4aXNbMl0gLyBheGlzTGVuZ3RoO1xuICB2YXIgYncgPSBNYXRoLmNvcyhyYWQpO1xuICB2YXIgYXgxID0gYVswXSxcbiAgICAgIGF5MSA9IGFbMV0sXG4gICAgICBhejEgPSBhWzJdLFxuICAgICAgYXcxID0gYVszXTtcbiAgb3V0WzBdID0gYXgxICogYncgKyBhdzEgKiBieCArIGF5MSAqIGJ6IC0gYXoxICogYnk7XG4gIG91dFsxXSA9IGF5MSAqIGJ3ICsgYXcxICogYnkgKyBhejEgKiBieCAtIGF4MSAqIGJ6O1xuICBvdXRbMl0gPSBhejEgKiBidyArIGF3MSAqIGJ6ICsgYXgxICogYnkgLSBheTEgKiBieDtcbiAgb3V0WzNdID0gYXcxICogYncgLSBheDEgKiBieCAtIGF5MSAqIGJ5IC0gYXoxICogYno7XG4gIHZhciBheCA9IGFbNF0sXG4gICAgICBheSA9IGFbNV0sXG4gICAgICBheiA9IGFbNl0sXG4gICAgICBhdyA9IGFbN107XG4gIG91dFs0XSA9IGF4ICogYncgKyBhdyAqIGJ4ICsgYXkgKiBieiAtIGF6ICogYnk7XG4gIG91dFs1XSA9IGF5ICogYncgKyBhdyAqIGJ5ICsgYXogKiBieCAtIGF4ICogYno7XG4gIG91dFs2XSA9IGF6ICogYncgKyBhdyAqIGJ6ICsgYXggKiBieSAtIGF5ICogYng7XG4gIG91dFs3XSA9IGF3ICogYncgLSBheCAqIGJ4IC0gYXkgKiBieSAtIGF6ICogYno7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQWRkcyB0d28gZHVhbCBxdWF0J3NcclxuICpcclxuICogQHBhcmFtIHtxdWF0Mn0gb3V0IHRoZSByZWNlaXZpbmcgZHVhbCBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSB7cXVhdDJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtxdWF0Mn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge3F1YXQyfSBvdXRcclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXTtcbiAgb3V0WzFdID0gYVsxXSArIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gKyBiWzJdO1xuICBvdXRbM10gPSBhWzNdICsgYlszXTtcbiAgb3V0WzRdID0gYVs0XSArIGJbNF07XG4gIG91dFs1XSA9IGFbNV0gKyBiWzVdO1xuICBvdXRbNl0gPSBhWzZdICsgYls2XTtcbiAgb3V0WzddID0gYVs3XSArIGJbN107XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogTXVsdGlwbGllcyB0d28gZHVhbCBxdWF0J3NcclxuICpcclxuICogQHBhcmFtIHtxdWF0Mn0gb3V0IHRoZSByZWNlaXZpbmcgZHVhbCBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSB7cXVhdDJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHtxdWF0Mn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge3F1YXQyfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgdmFyIGF4MCA9IGFbMF0sXG4gICAgICBheTAgPSBhWzFdLFxuICAgICAgYXowID0gYVsyXSxcbiAgICAgIGF3MCA9IGFbM10sXG4gICAgICBieDEgPSBiWzRdLFxuICAgICAgYnkxID0gYls1XSxcbiAgICAgIGJ6MSA9IGJbNl0sXG4gICAgICBidzEgPSBiWzddLFxuICAgICAgYXgxID0gYVs0XSxcbiAgICAgIGF5MSA9IGFbNV0sXG4gICAgICBhejEgPSBhWzZdLFxuICAgICAgYXcxID0gYVs3XSxcbiAgICAgIGJ4MCA9IGJbMF0sXG4gICAgICBieTAgPSBiWzFdLFxuICAgICAgYnowID0gYlsyXSxcbiAgICAgIGJ3MCA9IGJbM107XG4gIG91dFswXSA9IGF4MCAqIGJ3MCArIGF3MCAqIGJ4MCArIGF5MCAqIGJ6MCAtIGF6MCAqIGJ5MDtcbiAgb3V0WzFdID0gYXkwICogYncwICsgYXcwICogYnkwICsgYXowICogYngwIC0gYXgwICogYnowO1xuICBvdXRbMl0gPSBhejAgKiBidzAgKyBhdzAgKiBiejAgKyBheDAgKiBieTAgLSBheTAgKiBieDA7XG4gIG91dFszXSA9IGF3MCAqIGJ3MCAtIGF4MCAqIGJ4MCAtIGF5MCAqIGJ5MCAtIGF6MCAqIGJ6MDtcbiAgb3V0WzRdID0gYXgwICogYncxICsgYXcwICogYngxICsgYXkwICogYnoxIC0gYXowICogYnkxICsgYXgxICogYncwICsgYXcxICogYngwICsgYXkxICogYnowIC0gYXoxICogYnkwO1xuICBvdXRbNV0gPSBheTAgKiBidzEgKyBhdzAgKiBieTEgKyBhejAgKiBieDEgLSBheDAgKiBiejEgKyBheTEgKiBidzAgKyBhdzEgKiBieTAgKyBhejEgKiBieDAgLSBheDEgKiBiejA7XG4gIG91dFs2XSA9IGF6MCAqIGJ3MSArIGF3MCAqIGJ6MSArIGF4MCAqIGJ5MSAtIGF5MCAqIGJ4MSArIGF6MSAqIGJ3MCArIGF3MSAqIGJ6MCArIGF4MSAqIGJ5MCAtIGF5MSAqIGJ4MDtcbiAgb3V0WzddID0gYXcwICogYncxIC0gYXgwICogYngxIC0gYXkwICogYnkxIC0gYXowICogYnoxICsgYXcxICogYncwIC0gYXgxICogYngwIC0gYXkxICogYnkwIC0gYXoxICogYnowO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgcXVhdDIubXVsdGlwbHl9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBtdWwgPSBtdWx0aXBseTtcbi8qKlxyXG4gKiBTY2FsZXMgYSBkdWFsIHF1YXQgYnkgYSBzY2FsYXIgbnVtYmVyXHJcbiAqXHJcbiAqIEBwYXJhbSB7cXVhdDJ9IG91dCB0aGUgcmVjZWl2aW5nIGR1YWwgcXVhdFxyXG4gKiBAcGFyYW0ge3F1YXQyfSBhIHRoZSBkdWFsIHF1YXQgdG8gc2NhbGVcclxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSBkdWFsIHF1YXQgYnlcclxuICogQHJldHVybnMge3F1YXQyfSBvdXRcclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKiBiO1xuICBvdXRbMV0gPSBhWzFdICogYjtcbiAgb3V0WzJdID0gYVsyXSAqIGI7XG4gIG91dFszXSA9IGFbM10gKiBiO1xuICBvdXRbNF0gPSBhWzRdICogYjtcbiAgb3V0WzVdID0gYVs1XSAqIGI7XG4gIG91dFs2XSA9IGFbNl0gKiBiO1xuICBvdXRbN10gPSBhWzddICogYjtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBkb3QgcHJvZHVjdCBvZiB0d28gZHVhbCBxdWF0J3MgKFRoZSBkb3QgcHJvZHVjdCBvZiB0aGUgcmVhbCBwYXJ0cylcclxuICpcclxuICogQHBhcmFtIHtxdWF0Mn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge3F1YXQyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkb3QgcHJvZHVjdCBvZiBhIGFuZCBiXHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBkb3QgPSBxdWF0LmRvdDtcbi8qKlxyXG4gKiBQZXJmb3JtcyBhIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gdHdvIGR1YWwgcXVhdHMnc1xyXG4gKiBOT1RFOiBUaGUgcmVzdWx0aW5nIGR1YWwgcXVhdGVybmlvbnMgd29uJ3QgYWx3YXlzIGJlIG5vcm1hbGl6ZWQgKFRoZSBlcnJvciBpcyBtb3N0IG5vdGljZWFibGUgd2hlbiB0ID0gMC41KVxyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXQyfSBvdXQgdGhlIHJlY2VpdmluZyBkdWFsIHF1YXRcclxuICogQHBhcmFtIHtxdWF0Mn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge3F1YXQyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudCwgaW4gdGhlIHJhbmdlIFswLTFdLCBiZXR3ZWVuIHRoZSB0d28gaW5wdXRzXHJcbiAqIEByZXR1cm5zIHtxdWF0Mn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbGVycChvdXQsIGEsIGIsIHQpIHtcbiAgdmFyIG10ID0gMSAtIHQ7XG4gIGlmIChkb3QoYSwgYikgPCAwKSB0ID0gLXQ7XG4gIG91dFswXSA9IGFbMF0gKiBtdCArIGJbMF0gKiB0O1xuICBvdXRbMV0gPSBhWzFdICogbXQgKyBiWzFdICogdDtcbiAgb3V0WzJdID0gYVsyXSAqIG10ICsgYlsyXSAqIHQ7XG4gIG91dFszXSA9IGFbM10gKiBtdCArIGJbM10gKiB0O1xuICBvdXRbNF0gPSBhWzRdICogbXQgKyBiWzRdICogdDtcbiAgb3V0WzVdID0gYVs1XSAqIG10ICsgYls1XSAqIHQ7XG4gIG91dFs2XSA9IGFbNl0gKiBtdCArIGJbNl0gKiB0O1xuICBvdXRbN10gPSBhWzddICogbXQgKyBiWzddICogdDtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBpbnZlcnNlIG9mIGEgZHVhbCBxdWF0LiBJZiB0aGV5IGFyZSBub3JtYWxpemVkLCBjb25qdWdhdGUgaXMgY2hlYXBlclxyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXQyfSBvdXQgdGhlIHJlY2VpdmluZyBkdWFsIHF1YXRlcm5pb25cclxuICogQHBhcmFtIHtxdWF0Mn0gYSBkdWFsIHF1YXQgdG8gY2FsY3VsYXRlIGludmVyc2Ugb2ZcclxuICogQHJldHVybnMge3F1YXQyfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQob3V0LCBhKSB7XG4gIHZhciBzcWxlbiA9IHNxdWFyZWRMZW5ndGgoYSk7XG4gIG91dFswXSA9IC1hWzBdIC8gc3FsZW47XG4gIG91dFsxXSA9IC1hWzFdIC8gc3FsZW47XG4gIG91dFsyXSA9IC1hWzJdIC8gc3FsZW47XG4gIG91dFszXSA9IGFbM10gLyBzcWxlbjtcbiAgb3V0WzRdID0gLWFbNF0gLyBzcWxlbjtcbiAgb3V0WzVdID0gLWFbNV0gLyBzcWxlbjtcbiAgb3V0WzZdID0gLWFbNl0gLyBzcWxlbjtcbiAgb3V0WzddID0gYVs3XSAvIHNxbGVuO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIGNvbmp1Z2F0ZSBvZiBhIGR1YWwgcXVhdFxyXG4gKiBJZiB0aGUgZHVhbCBxdWF0ZXJuaW9uIGlzIG5vcm1hbGl6ZWQsIHRoaXMgZnVuY3Rpb24gaXMgZmFzdGVyIHRoYW4gcXVhdDIuaW52ZXJzZSBhbmQgcHJvZHVjZXMgdGhlIHNhbWUgcmVzdWx0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXQyfSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSB7cXVhdDJ9IGEgcXVhdCB0byBjYWxjdWxhdGUgY29uanVnYXRlIG9mXHJcbiAqIEByZXR1cm5zIHtxdWF0Mn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY29uanVnYXRlKG91dCwgYSkge1xuICBvdXRbMF0gPSAtYVswXTtcbiAgb3V0WzFdID0gLWFbMV07XG4gIG91dFsyXSA9IC1hWzJdO1xuICBvdXRbM10gPSBhWzNdO1xuICBvdXRbNF0gPSAtYVs0XTtcbiAgb3V0WzVdID0gLWFbNV07XG4gIG91dFs2XSA9IC1hWzZdO1xuICBvdXRbN10gPSBhWzddO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIGxlbmd0aCBvZiBhIGR1YWwgcXVhdFxyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXQyfSBhIGR1YWwgcXVhdCB0byBjYWxjdWxhdGUgbGVuZ3RoIG9mXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGxlbmd0aCBvZiBhXHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBsZW5ndGggPSBxdWF0Lmxlbmd0aDtcbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHF1YXQyLmxlbmd0aH1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIGxlbiA9IGxlbmd0aDtcbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGxlbmd0aCBvZiBhIGR1YWwgcXVhdFxyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXQyfSBhIGR1YWwgcXVhdCB0byBjYWxjdWxhdGUgc3F1YXJlZCBsZW5ndGggb2ZcclxuICogQHJldHVybnMge051bWJlcn0gc3F1YXJlZCBsZW5ndGggb2YgYVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgc3F1YXJlZExlbmd0aCA9IHF1YXQuc3F1YXJlZExlbmd0aDtcbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHF1YXQyLnNxdWFyZWRMZW5ndGh9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBzcXJMZW4gPSBzcXVhcmVkTGVuZ3RoO1xuLyoqXHJcbiAqIE5vcm1hbGl6ZSBhIGR1YWwgcXVhdFxyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXQyfSBvdXQgdGhlIHJlY2VpdmluZyBkdWFsIHF1YXRlcm5pb25cclxuICogQHBhcmFtIHtxdWF0Mn0gYSBkdWFsIHF1YXRlcm5pb24gdG8gbm9ybWFsaXplXHJcbiAqIEByZXR1cm5zIHtxdWF0Mn0gb3V0XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZShvdXQsIGEpIHtcbiAgdmFyIG1hZ25pdHVkZSA9IHNxdWFyZWRMZW5ndGgoYSk7XG5cbiAgaWYgKG1hZ25pdHVkZSA+IDApIHtcbiAgICBtYWduaXR1ZGUgPSBNYXRoLnNxcnQobWFnbml0dWRlKTtcbiAgICB2YXIgYTAgPSBhWzBdIC8gbWFnbml0dWRlO1xuICAgIHZhciBhMSA9IGFbMV0gLyBtYWduaXR1ZGU7XG4gICAgdmFyIGEyID0gYVsyXSAvIG1hZ25pdHVkZTtcbiAgICB2YXIgYTMgPSBhWzNdIC8gbWFnbml0dWRlO1xuICAgIHZhciBiMCA9IGFbNF07XG4gICAgdmFyIGIxID0gYVs1XTtcbiAgICB2YXIgYjIgPSBhWzZdO1xuICAgIHZhciBiMyA9IGFbN107XG4gICAgdmFyIGFfZG90X2IgPSBhMCAqIGIwICsgYTEgKiBiMSArIGEyICogYjIgKyBhMyAqIGIzO1xuICAgIG91dFswXSA9IGEwO1xuICAgIG91dFsxXSA9IGExO1xuICAgIG91dFsyXSA9IGEyO1xuICAgIG91dFszXSA9IGEzO1xuICAgIG91dFs0XSA9IChiMCAtIGEwICogYV9kb3RfYikgLyBtYWduaXR1ZGU7XG4gICAgb3V0WzVdID0gKGIxIC0gYTEgKiBhX2RvdF9iKSAvIG1hZ25pdHVkZTtcbiAgICBvdXRbNl0gPSAoYjIgLSBhMiAqIGFfZG90X2IpIC8gbWFnbml0dWRlO1xuICAgIG91dFs3XSA9IChiMyAtIGEzICogYV9kb3RfYikgLyBtYWduaXR1ZGU7XG4gIH1cblxuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBkdWFsIHF1YXRlbmlvblxyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXQyfSBhIGR1YWwgcXVhdGVybmlvbiB0byByZXByZXNlbnQgYXMgYSBzdHJpbmdcclxuICogQHJldHVybnMge1N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBkdWFsIHF1YXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzdHIoYSkge1xuICByZXR1cm4gJ3F1YXQyKCcgKyBhWzBdICsgJywgJyArIGFbMV0gKyAnLCAnICsgYVsyXSArICcsICcgKyBhWzNdICsgJywgJyArIGFbNF0gKyAnLCAnICsgYVs1XSArICcsICcgKyBhWzZdICsgJywgJyArIGFbN10gKyAnKSc7XG59XG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgZHVhbCBxdWF0ZXJuaW9ucyBoYXZlIGV4YWN0bHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24gKHdoZW4gY29tcGFyZWQgd2l0aCA9PT0pXHJcbiAqXHJcbiAqIEBwYXJhbSB7cXVhdDJ9IGEgdGhlIGZpcnN0IGR1YWwgcXVhdGVybmlvbi5cclxuICogQHBhcmFtIHtxdWF0Mn0gYiB0aGUgc2Vjb25kIGR1YWwgcXVhdGVybmlvbi5cclxuICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIGR1YWwgcXVhdGVybmlvbnMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZXhhY3RFcXVhbHMoYSwgYikge1xuICByZXR1cm4gYVswXSA9PT0gYlswXSAmJiBhWzFdID09PSBiWzFdICYmIGFbMl0gPT09IGJbMl0gJiYgYVszXSA9PT0gYlszXSAmJiBhWzRdID09PSBiWzRdICYmIGFbNV0gPT09IGJbNV0gJiYgYVs2XSA9PT0gYls2XSAmJiBhWzddID09PSBiWzddO1xufVxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIGR1YWwgcXVhdGVybmlvbnMgaGF2ZSBhcHByb3hpbWF0ZWx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3F1YXQyfSBhIHRoZSBmaXJzdCBkdWFsIHF1YXQuXHJcbiAqIEBwYXJhbSB7cXVhdDJ9IGIgdGhlIHNlY29uZCBkdWFsIHF1YXQuXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBkdWFsIHF1YXRzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhhLCBiKSB7XG4gIHZhciBhMCA9IGFbMF0sXG4gICAgICBhMSA9IGFbMV0sXG4gICAgICBhMiA9IGFbMl0sXG4gICAgICBhMyA9IGFbM10sXG4gICAgICBhNCA9IGFbNF0sXG4gICAgICBhNSA9IGFbNV0sXG4gICAgICBhNiA9IGFbNl0sXG4gICAgICBhNyA9IGFbN107XG4gIHZhciBiMCA9IGJbMF0sXG4gICAgICBiMSA9IGJbMV0sXG4gICAgICBiMiA9IGJbMl0sXG4gICAgICBiMyA9IGJbM10sXG4gICAgICBiNCA9IGJbNF0sXG4gICAgICBiNSA9IGJbNV0sXG4gICAgICBiNiA9IGJbNl0sXG4gICAgICBiNyA9IGJbN107XG4gIHJldHVybiBNYXRoLmFicyhhMCAtIGIwKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMCksIE1hdGguYWJzKGIwKSkgJiYgTWF0aC5hYnMoYTEgLSBiMSkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTEpLCBNYXRoLmFicyhiMSkpICYmIE1hdGguYWJzKGEyIC0gYjIpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEyKSwgTWF0aC5hYnMoYjIpKSAmJiBNYXRoLmFicyhhMyAtIGIzKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMyksIE1hdGguYWJzKGIzKSkgJiYgTWF0aC5hYnMoYTQgLSBiNCkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTQpLCBNYXRoLmFicyhiNCkpICYmIE1hdGguYWJzKGE1IC0gYjUpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE1KSwgTWF0aC5hYnMoYjUpKSAmJiBNYXRoLmFicyhhNiAtIGI2KSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhNiksIE1hdGguYWJzKGI2KSkgJiYgTWF0aC5hYnMoYTcgLSBiNykgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTcpLCBNYXRoLmFicyhiNykpO1xufSIsImltcG9ydCAqIGFzIGdsTWF0cml4IGZyb20gXCIuL2NvbW1vbi5qc1wiO1xuLyoqXHJcbiAqIDIgRGltZW5zaW9uYWwgVmVjdG9yXHJcbiAqIEBtb2R1bGUgdmVjMlxyXG4gKi9cblxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcsIGVtcHR5IHZlYzJcclxuICpcclxuICogQHJldHVybnMge3ZlYzJ9IGEgbmV3IDJEIHZlY3RvclxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDIpO1xuXG4gIGlmIChnbE1hdHJpeC5BUlJBWV9UWVBFICE9IEZsb2F0MzJBcnJheSkge1xuICAgIG91dFswXSA9IDA7XG4gICAgb3V0WzFdID0gMDtcbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyB2ZWMyIGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgdmVjdG9yXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjMn0gYSB2ZWN0b3IgdG8gY2xvbmVcclxuICogQHJldHVybnMge3ZlYzJ9IGEgbmV3IDJEIHZlY3RvclxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKGEpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDIpO1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgdmVjMiBpbml0aWFsaXplZCB3aXRoIHRoZSBnaXZlbiB2YWx1ZXNcclxuICpcclxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcclxuICogQHJldHVybnMge3ZlYzJ9IGEgbmV3IDJEIHZlY3RvclxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21WYWx1ZXMoeCwgeSkge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoMik7XG4gIG91dFswXSA9IHg7XG4gIG91dFsxXSA9IHk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIHZlYzIgdG8gYW5vdGhlclxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIHNvdXJjZSB2ZWN0b3JcclxuICogQHJldHVybnMge3ZlYzJ9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMiB0byB0aGUgZ2l2ZW4gdmFsdWVzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XHJcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQob3V0LCB4LCB5KSB7XG4gIG91dFswXSA9IHg7XG4gIG91dFsxXSA9IHk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQWRkcyB0d28gdmVjMidzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKyBiWzBdO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTdWJ0cmFjdHMgdmVjdG9yIGIgZnJvbSB2ZWN0b3IgYVxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3Qob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLSBiWzBdO1xuICBvdXRbMV0gPSBhWzFdIC0gYlsxXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBNdWx0aXBsaWVzIHR3byB2ZWMyJ3NcclxuICpcclxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge3ZlYzJ9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICogYlswXTtcbiAgb3V0WzFdID0gYVsxXSAqIGJbMV07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogRGl2aWRlcyB0d28gdmVjMidzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXZpZGUob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLyBiWzBdO1xuICBvdXRbMV0gPSBhWzFdIC8gYlsxXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBNYXRoLmNlaWwgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMyXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7dmVjMn0gYSB2ZWN0b3IgdG8gY2VpbFxyXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY2VpbChvdXQsIGEpIHtcbiAgb3V0WzBdID0gTWF0aC5jZWlsKGFbMF0pO1xuICBvdXRbMV0gPSBNYXRoLmNlaWwoYVsxXSk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogTWF0aC5mbG9vciB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzJcclxuICpcclxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHt2ZWMyfSBhIHZlY3RvciB0byBmbG9vclxyXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZmxvb3Iob3V0LCBhKSB7XG4gIG91dFswXSA9IE1hdGguZmxvb3IoYVswXSk7XG4gIG91dFsxXSA9IE1hdGguZmxvb3IoYVsxXSk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUmV0dXJucyB0aGUgbWluaW11bSBvZiB0d28gdmVjMidzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBtaW4ob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IE1hdGgubWluKGFbMF0sIGJbMF0pO1xuICBvdXRbMV0gPSBNYXRoLm1pbihhWzFdLCBiWzFdKTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBtYXhpbXVtIG9mIHR3byB2ZWMyJ3NcclxuICpcclxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge3ZlYzJ9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG1heChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gTWF0aC5tYXgoYVswXSwgYlswXSk7XG4gIG91dFsxXSA9IE1hdGgubWF4KGFbMV0sIGJbMV0pO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIE1hdGgucm91bmQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMyXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7dmVjMn0gYSB2ZWN0b3IgdG8gcm91bmRcclxuICogQHJldHVybnMge3ZlYzJ9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kKG91dCwgYSkge1xuICBvdXRbMF0gPSBNYXRoLnJvdW5kKGFbMF0pO1xuICBvdXRbMV0gPSBNYXRoLnJvdW5kKGFbMV0pO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFNjYWxlcyBhIHZlYzIgYnkgYSBzY2FsYXIgbnVtYmVyXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgdmVjdG9yIHRvIHNjYWxlXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBiIGFtb3VudCB0byBzY2FsZSB0aGUgdmVjdG9yIGJ5XHJcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZShvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAqIGI7XG4gIG91dFsxXSA9IGFbMV0gKiBiO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIEFkZHMgdHdvIHZlYzIncyBhZnRlciBzY2FsaW5nIHRoZSBzZWNvbmQgb3BlcmFuZCBieSBhIHNjYWxhciB2YWx1ZVxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGUgdGhlIGFtb3VudCB0byBzY2FsZSBiIGJ5IGJlZm9yZSBhZGRpbmdcclxuICogQHJldHVybnMge3ZlYzJ9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlQW5kQWRkKG91dCwgYSwgYiwgc2NhbGUpIHtcbiAgb3V0WzBdID0gYVswXSArIGJbMF0gKiBzY2FsZTtcbiAgb3V0WzFdID0gYVsxXSArIGJbMV0gKiBzY2FsZTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBldWNsaWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gdmVjMidzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlKGEsIGIpIHtcbiAgdmFyIHggPSBiWzBdIC0gYVswXSxcbiAgICAgIHkgPSBiWzFdIC0gYVsxXTtcbiAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWMyJ3NcclxuICpcclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge051bWJlcn0gc3F1YXJlZCBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmVkRGlzdGFuY2UoYSwgYikge1xuICB2YXIgeCA9IGJbMF0gLSBhWzBdLFxuICAgICAgeSA9IGJbMV0gLSBhWzFdO1xuICByZXR1cm4geCAqIHggKyB5ICogeTtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBsZW5ndGggb2YgYSB2ZWMyXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjMn0gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIGxlbmd0aCBvZlxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBsZW5ndGggb2YgYVxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbmd0aChhKSB7XG4gIHZhciB4ID0gYVswXSxcbiAgICAgIHkgPSBhWzFdO1xuICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgbGVuZ3RoIG9mIGEgdmVjMlxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBzcXVhcmVkIGxlbmd0aCBvZlxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGxlbmd0aCBvZiBhXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc3F1YXJlZExlbmd0aChhKSB7XG4gIHZhciB4ID0gYVswXSxcbiAgICAgIHkgPSBhWzFdO1xuICByZXR1cm4geCAqIHggKyB5ICogeTtcbn1cbi8qKlxyXG4gKiBOZWdhdGVzIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMlxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdmVjdG9yIHRvIG5lZ2F0ZVxyXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlKG91dCwgYSkge1xuICBvdXRbMF0gPSAtYVswXTtcbiAgb3V0WzFdID0gLWFbMV07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUmV0dXJucyB0aGUgaW52ZXJzZSBvZiB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzJcclxuICpcclxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHt2ZWMyfSBhIHZlY3RvciB0byBpbnZlcnRcclxuICogQHJldHVybnMge3ZlYzJ9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGludmVyc2Uob3V0LCBhKSB7XG4gIG91dFswXSA9IDEuMCAvIGFbMF07XG4gIG91dFsxXSA9IDEuMCAvIGFbMV07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogTm9ybWFsaXplIGEgdmVjMlxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdmVjdG9yIHRvIG5vcm1hbGl6ZVxyXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplKG91dCwgYSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgICB5ID0gYVsxXTtcbiAgdmFyIGxlbiA9IHggKiB4ICsgeSAqIHk7XG5cbiAgaWYgKGxlbiA+IDApIHtcbiAgICAvL1RPRE86IGV2YWx1YXRlIHVzZSBvZiBnbG1faW52c3FydCBoZXJlP1xuICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKTtcbiAgfVxuXG4gIG91dFswXSA9IGFbMF0gKiBsZW47XG4gIG91dFsxXSA9IGFbMV0gKiBsZW47XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHZlYzInc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHt2ZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkb3QgcHJvZHVjdCBvZiBhIGFuZCBiXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZG90KGEsIGIpIHtcbiAgcmV0dXJuIGFbMF0gKiBiWzBdICsgYVsxXSAqIGJbMV07XG59XG4vKipcclxuICogQ29tcHV0ZXMgdGhlIGNyb3NzIHByb2R1Y3Qgb2YgdHdvIHZlYzInc1xyXG4gKiBOb3RlIHRoYXQgdGhlIGNyb3NzIHByb2R1Y3QgbXVzdCBieSBkZWZpbml0aW9uIHByb2R1Y2UgYSAzRCB2ZWN0b3JcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyb3NzKG91dCwgYSwgYikge1xuICB2YXIgeiA9IGFbMF0gKiBiWzFdIC0gYVsxXSAqIGJbMF07XG4gIG91dFswXSA9IG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IHo7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUGVyZm9ybXMgYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byB2ZWMyJ3NcclxuICpcclxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7dmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQsIGluIHRoZSByYW5nZSBbMC0xXSwgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xyXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbGVycChvdXQsIGEsIGIsIHQpIHtcbiAgdmFyIGF4ID0gYVswXSxcbiAgICAgIGF5ID0gYVsxXTtcbiAgb3V0WzBdID0gYXggKyB0ICogKGJbMF0gLSBheCk7XG4gIG91dFsxXSA9IGF5ICsgdCAqIChiWzFdIC0gYXkpO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIEdlbmVyYXRlcyBhIHJhbmRvbSB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gc2NhbGVcclxuICpcclxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHtOdW1iZXJ9IFtzY2FsZV0gTGVuZ3RoIG9mIHRoZSByZXN1bHRpbmcgdmVjdG9yLiBJZiBvbW1pdHRlZCwgYSB1bml0IHZlY3RvciB3aWxsIGJlIHJldHVybmVkXHJcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb20ob3V0LCBzY2FsZSkge1xuICBzY2FsZSA9IHNjYWxlIHx8IDEuMDtcbiAgdmFyIHIgPSBnbE1hdHJpeC5SQU5ET00oKSAqIDIuMCAqIE1hdGguUEk7XG4gIG91dFswXSA9IE1hdGguY29zKHIpICogc2NhbGU7XG4gIG91dFsxXSA9IE1hdGguc2luKHIpICogc2NhbGU7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogVHJhbnNmb3JtcyB0aGUgdmVjMiB3aXRoIGEgbWF0MlxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge3ZlYzJ9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cclxuICogQHBhcmFtIHttYXQyfSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxyXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWF0MihvdXQsIGEsIG0pIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgICAgeSA9IGFbMV07XG4gIG91dFswXSA9IG1bMF0gKiB4ICsgbVsyXSAqIHk7XG4gIG91dFsxXSA9IG1bMV0gKiB4ICsgbVszXSAqIHk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogVHJhbnNmb3JtcyB0aGUgdmVjMiB3aXRoIGEgbWF0MmRcclxuICpcclxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXHJcbiAqIEBwYXJhbSB7bWF0MmR9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXHJcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NYXQyZChvdXQsIGEsIG0pIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgICAgeSA9IGFbMV07XG4gIG91dFswXSA9IG1bMF0gKiB4ICsgbVsyXSAqIHkgKyBtWzRdO1xuICBvdXRbMV0gPSBtWzFdICogeCArIG1bM10gKiB5ICsgbVs1XTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWMyIHdpdGggYSBtYXQzXHJcbiAqIDNyZCB2ZWN0b3IgY29tcG9uZW50IGlzIGltcGxpY2l0bHkgJzEnXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7dmVjMn0gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxyXG4gKiBAcGFyYW0ge21hdDN9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXHJcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NYXQzKG91dCwgYSwgbSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgICB5ID0gYVsxXTtcbiAgb3V0WzBdID0gbVswXSAqIHggKyBtWzNdICogeSArIG1bNl07XG4gIG91dFsxXSA9IG1bMV0gKiB4ICsgbVs0XSAqIHkgKyBtWzddO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzIgd2l0aCBhIG1hdDRcclxuICogM3JkIHZlY3RvciBjb21wb25lbnQgaXMgaW1wbGljaXRseSAnMCdcclxuICogNHRoIHZlY3RvciBjb21wb25lbnQgaXMgaW1wbGljaXRseSAnMSdcclxuICpcclxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHt2ZWMyfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXHJcbiAqIEBwYXJhbSB7bWF0NH0gbSBtYXRyaXggdG8gdHJhbnNmb3JtIHdpdGhcclxuICogQHJldHVybnMge3ZlYzJ9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybU1hdDQob3V0LCBhLCBtKSB7XG4gIHZhciB4ID0gYVswXTtcbiAgdmFyIHkgPSBhWzFdO1xuICBvdXRbMF0gPSBtWzBdICogeCArIG1bNF0gKiB5ICsgbVsxMl07XG4gIG91dFsxXSA9IG1bMV0gKiB4ICsgbVs1XSAqIHkgKyBtWzEzXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSb3RhdGUgYSAyRCB2ZWN0b3JcclxuICogQHBhcmFtIHt2ZWMyfSBvdXQgVGhlIHJlY2VpdmluZyB2ZWMyXHJcbiAqIEBwYXJhbSB7dmVjMn0gYSBUaGUgdmVjMiBwb2ludCB0byByb3RhdGVcclxuICogQHBhcmFtIHt2ZWMyfSBiIFRoZSBvcmlnaW4gb2YgdGhlIHJvdGF0aW9uXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBjIFRoZSBhbmdsZSBvZiByb3RhdGlvblxyXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlKG91dCwgYSwgYiwgYykge1xuICAvL1RyYW5zbGF0ZSBwb2ludCB0byB0aGUgb3JpZ2luXG4gIHZhciBwMCA9IGFbMF0gLSBiWzBdLFxuICAgICAgcDEgPSBhWzFdIC0gYlsxXSxcbiAgICAgIHNpbkMgPSBNYXRoLnNpbihjKSxcbiAgICAgIGNvc0MgPSBNYXRoLmNvcyhjKTsgLy9wZXJmb3JtIHJvdGF0aW9uIGFuZCB0cmFuc2xhdGUgdG8gY29ycmVjdCBwb3NpdGlvblxuXG4gIG91dFswXSA9IHAwICogY29zQyAtIHAxICogc2luQyArIGJbMF07XG4gIG91dFsxXSA9IHAwICogc2luQyArIHAxICogY29zQyArIGJbMV07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogR2V0IHRoZSBhbmdsZSBiZXR3ZWVuIHR3byAyRCB2ZWN0b3JzXHJcbiAqIEBwYXJhbSB7dmVjMn0gYSBUaGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgVGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBhbmdsZSBpbiByYWRpYW5zXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYW5nbGUoYSwgYikge1xuICB2YXIgeDEgPSBhWzBdLFxuICAgICAgeTEgPSBhWzFdLFxuICAgICAgeDIgPSBiWzBdLFxuICAgICAgeTIgPSBiWzFdO1xuICB2YXIgbGVuMSA9IHgxICogeDEgKyB5MSAqIHkxO1xuXG4gIGlmIChsZW4xID4gMCkge1xuICAgIC8vVE9ETzogZXZhbHVhdGUgdXNlIG9mIGdsbV9pbnZzcXJ0IGhlcmU/XG4gICAgbGVuMSA9IDEgLyBNYXRoLnNxcnQobGVuMSk7XG4gIH1cblxuICB2YXIgbGVuMiA9IHgyICogeDIgKyB5MiAqIHkyO1xuXG4gIGlmIChsZW4yID4gMCkge1xuICAgIC8vVE9ETzogZXZhbHVhdGUgdXNlIG9mIGdsbV9pbnZzcXJ0IGhlcmU/XG4gICAgbGVuMiA9IDEgLyBNYXRoLnNxcnQobGVuMik7XG4gIH1cblxuICB2YXIgY29zaW5lID0gKHgxICogeDIgKyB5MSAqIHkyKSAqIGxlbjEgKiBsZW4yO1xuXG4gIGlmIChjb3NpbmUgPiAxLjApIHtcbiAgICByZXR1cm4gMDtcbiAgfSBlbHNlIGlmIChjb3NpbmUgPCAtMS4wKSB7XG4gICAgcmV0dXJuIE1hdGguUEk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIE1hdGguYWNvcyhjb3NpbmUpO1xuICB9XG59XG4vKipcclxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMiB0byB6ZXJvXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB6ZXJvKG91dCkge1xuICBvdXRbMF0gPSAwLjA7XG4gIG91dFsxXSA9IDAuMDtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgdmVjdG9yXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjMn0gYSB2ZWN0b3IgdG8gcmVwcmVzZW50IGFzIGEgc3RyaW5nXHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyKGEpIHtcbiAgcmV0dXJuICd2ZWMyKCcgKyBhWzBdICsgJywgJyArIGFbMV0gKyAnKSc7XG59XG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgdmVjdG9ycyBleGFjdGx5IGhhdmUgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24gKHdoZW4gY29tcGFyZWQgd2l0aCA9PT0pXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjMn0gYSBUaGUgZmlyc3QgdmVjdG9yLlxyXG4gKiBAcGFyYW0ge3ZlYzJ9IGIgVGhlIHNlY29uZCB2ZWN0b3IuXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSB2ZWN0b3JzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGV4YWN0RXF1YWxzKGEsIGIpIHtcbiAgcmV0dXJuIGFbMF0gPT09IGJbMF0gJiYgYVsxXSA9PT0gYlsxXTtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSB2ZWN0b3JzIGhhdmUgYXBwcm94aW1hdGVseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbi5cclxuICpcclxuICogQHBhcmFtIHt2ZWMyfSBhIFRoZSBmaXJzdCB2ZWN0b3IuXHJcbiAqIEBwYXJhbSB7dmVjMn0gYiBUaGUgc2Vjb25kIHZlY3Rvci5cclxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIHZlY3RvcnMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgdmFyIGEwID0gYVswXSxcbiAgICAgIGExID0gYVsxXTtcbiAgdmFyIGIwID0gYlswXSxcbiAgICAgIGIxID0gYlsxXTtcbiAgcmV0dXJuIE1hdGguYWJzKGEwIC0gYjApIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEwKSwgTWF0aC5hYnMoYjApKSAmJiBNYXRoLmFicyhhMSAtIGIxKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMSksIE1hdGguYWJzKGIxKSk7XG59XG4vKipcclxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMyLmxlbmd0aH1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIGxlbiA9IGxlbmd0aDtcbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzIuc3VidHJhY3R9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBzdWIgPSBzdWJ0cmFjdDtcbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzIubXVsdGlwbHl9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBtdWwgPSBtdWx0aXBseTtcbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzIuZGl2aWRlfVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgZGl2ID0gZGl2aWRlO1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMi5kaXN0YW5jZX1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIGRpc3QgPSBkaXN0YW5jZTtcbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzIuc3F1YXJlZERpc3RhbmNlfVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgc3FyRGlzdCA9IHNxdWFyZWREaXN0YW5jZTtcbi8qKlxyXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzIuc3F1YXJlZExlbmd0aH1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIHNxckxlbiA9IHNxdWFyZWRMZW5ndGg7XG4vKipcclxuICogUGVyZm9ybSBzb21lIG9wZXJhdGlvbiBvdmVyIGFuIGFycmF5IG9mIHZlYzJzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0FycmF5fSBhIHRoZSBhcnJheSBvZiB2ZWN0b3JzIHRvIGl0ZXJhdGUgb3ZlclxyXG4gKiBAcGFyYW0ge051bWJlcn0gc3RyaWRlIE51bWJlciBvZiBlbGVtZW50cyBiZXR3ZWVuIHRoZSBzdGFydCBvZiBlYWNoIHZlYzIuIElmIDAgYXNzdW1lcyB0aWdodGx5IHBhY2tlZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gb2Zmc2V0IE51bWJlciBvZiBlbGVtZW50cyB0byBza2lwIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGFycmF5XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudCBOdW1iZXIgb2YgdmVjMnMgdG8gaXRlcmF0ZSBvdmVyLiBJZiAwIGl0ZXJhdGVzIG92ZXIgZW50aXJlIGFycmF5XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIEZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggdmVjdG9yIGluIHRoZSBhcnJheVxyXG4gKiBAcGFyYW0ge09iamVjdH0gW2FyZ10gYWRkaXRpb25hbCBhcmd1bWVudCB0byBwYXNzIHRvIGZuXHJcbiAqIEByZXR1cm5zIHtBcnJheX0gYVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgZm9yRWFjaCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHZlYyA9IGNyZWF0ZSgpO1xuICByZXR1cm4gZnVuY3Rpb24gKGEsIHN0cmlkZSwgb2Zmc2V0LCBjb3VudCwgZm4sIGFyZykge1xuICAgIHZhciBpLCBsO1xuXG4gICAgaWYgKCFzdHJpZGUpIHtcbiAgICAgIHN0cmlkZSA9IDI7XG4gICAgfVxuXG4gICAgaWYgKCFvZmZzZXQpIHtcbiAgICAgIG9mZnNldCA9IDA7XG4gICAgfVxuXG4gICAgaWYgKGNvdW50KSB7XG4gICAgICBsID0gTWF0aC5taW4oY291bnQgKiBzdHJpZGUgKyBvZmZzZXQsIGEubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbCA9IGEubGVuZ3RoO1xuICAgIH1cblxuICAgIGZvciAoaSA9IG9mZnNldDsgaSA8IGw7IGkgKz0gc3RyaWRlKSB7XG4gICAgICB2ZWNbMF0gPSBhW2ldO1xuICAgICAgdmVjWzFdID0gYVtpICsgMV07XG4gICAgICBmbih2ZWMsIHZlYywgYXJnKTtcbiAgICAgIGFbaV0gPSB2ZWNbMF07XG4gICAgICBhW2kgKyAxXSA9IHZlY1sxXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYTtcbiAgfTtcbn0oKTsiLCJpbXBvcnQgKiBhcyBnbE1hdHJpeCBmcm9tIFwiLi9jb21tb24uanNcIjtcbi8qKlxyXG4gKiAzIERpbWVuc2lvbmFsIFZlY3RvclxyXG4gKiBAbW9kdWxlIHZlYzNcclxuICovXG5cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3LCBlbXB0eSB2ZWMzXHJcbiAqXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBhIG5ldyAzRCB2ZWN0b3JcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gIHZhciBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSgzKTtcblxuICBpZiAoZ2xNYXRyaXguQVJSQVlfVFlQRSAhPSBGbG9hdDMyQXJyYXkpIHtcbiAgICBvdXRbMF0gPSAwO1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyB2ZWMzIGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgdmVjdG9yXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gY2xvbmVcclxuICogQHJldHVybnMge3ZlYzN9IGEgbmV3IDNEIHZlY3RvclxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKGEpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDMpO1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICBvdXRbMl0gPSBhWzJdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIGxlbmd0aCBvZiBhIHZlYzNcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBjYWxjdWxhdGUgbGVuZ3RoIG9mXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGxlbmd0aCBvZiBhXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoKGEpIHtcbiAgdmFyIHggPSBhWzBdO1xuICB2YXIgeSA9IGFbMV07XG4gIHZhciB6ID0gYVsyXTtcbiAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgdmVjMyBpbml0aWFsaXplZCB3aXRoIHRoZSBnaXZlbiB2YWx1ZXNcclxuICpcclxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcclxuICogQHJldHVybnMge3ZlYzN9IGEgbmV3IDNEIHZlY3RvclxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21WYWx1ZXMoeCwgeSwgeikge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoMyk7XG4gIG91dFswXSA9IHg7XG4gIG91dFsxXSA9IHk7XG4gIG91dFsyXSA9IHo7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ29weSB0aGUgdmFsdWVzIGZyb20gb25lIHZlYzMgdG8gYW5vdGhlclxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIHNvdXJjZSB2ZWN0b3JcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMyB0byB0aGUgZ2l2ZW4gdmFsdWVzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQob3V0LCB4LCB5LCB6KSB7XG4gIG91dFswXSA9IHg7XG4gIG91dFsxXSA9IHk7XG4gIG91dFsyXSA9IHo7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQWRkcyB0d28gdmVjMydzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKyBiWzBdO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXTtcbiAgb3V0WzJdID0gYVsyXSArIGJbMl07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogU3VidHJhY3RzIHZlY3RvciBiIGZyb20gdmVjdG9yIGFcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdIC0gYlswXTtcbiAgb3V0WzFdID0gYVsxXSAtIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gLSBiWzJdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIE11bHRpcGxpZXMgdHdvIHZlYzMnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKiBiWzBdO1xuICBvdXRbMV0gPSBhWzFdICogYlsxXTtcbiAgb3V0WzJdID0gYVsyXSAqIGJbMl07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogRGl2aWRlcyB0d28gdmVjMydzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXZpZGUob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLyBiWzBdO1xuICBvdXRbMV0gPSBhWzFdIC8gYlsxXTtcbiAgb3V0WzJdID0gYVsyXSAvIGJbMl07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogTWF0aC5jZWlsIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjM1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdmVjdG9yIHRvIGNlaWxcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNlaWwob3V0LCBhKSB7XG4gIG91dFswXSA9IE1hdGguY2VpbChhWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5jZWlsKGFbMV0pO1xuICBvdXRbMl0gPSBNYXRoLmNlaWwoYVsyXSk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogTWF0aC5mbG9vciB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzNcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBmbG9vclxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZmxvb3Iob3V0LCBhKSB7XG4gIG91dFswXSA9IE1hdGguZmxvb3IoYVswXSk7XG4gIG91dFsxXSA9IE1hdGguZmxvb3IoYVsxXSk7XG4gIG91dFsyXSA9IE1hdGguZmxvb3IoYVsyXSk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUmV0dXJucyB0aGUgbWluaW11bSBvZiB0d28gdmVjMydzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBtaW4ob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IE1hdGgubWluKGFbMF0sIGJbMF0pO1xuICBvdXRbMV0gPSBNYXRoLm1pbihhWzFdLCBiWzFdKTtcbiAgb3V0WzJdID0gTWF0aC5taW4oYVsyXSwgYlsyXSk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUmV0dXJucyB0aGUgbWF4aW11bSBvZiB0d28gdmVjMydzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBtYXgob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IE1hdGgubWF4KGFbMF0sIGJbMF0pO1xuICBvdXRbMV0gPSBNYXRoLm1heChhWzFdLCBiWzFdKTtcbiAgb3V0WzJdID0gTWF0aC5tYXgoYVsyXSwgYlsyXSk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogTWF0aC5yb3VuZCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzNcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byByb3VuZFxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcm91bmQob3V0LCBhKSB7XG4gIG91dFswXSA9IE1hdGgucm91bmQoYVswXSk7XG4gIG91dFsxXSA9IE1hdGgucm91bmQoYVsxXSk7XG4gIG91dFsyXSA9IE1hdGgucm91bmQoYVsyXSk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogU2NhbGVzIGEgdmVjMyBieSBhIHNjYWxhciBudW1iZXJcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSB2ZWN0b3IgdG8gc2NhbGVcclxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSB2ZWN0b3IgYnlcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICogYjtcbiAgb3V0WzFdID0gYVsxXSAqIGI7XG4gIG91dFsyXSA9IGFbMl0gKiBiO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIEFkZHMgdHdvIHZlYzMncyBhZnRlciBzY2FsaW5nIHRoZSBzZWNvbmQgb3BlcmFuZCBieSBhIHNjYWxhciB2YWx1ZVxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGUgdGhlIGFtb3VudCB0byBzY2FsZSBiIGJ5IGJlZm9yZSBhZGRpbmdcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlQW5kQWRkKG91dCwgYSwgYiwgc2NhbGUpIHtcbiAgb3V0WzBdID0gYVswXSArIGJbMF0gKiBzY2FsZTtcbiAgb3V0WzFdID0gYVsxXSArIGJbMV0gKiBzY2FsZTtcbiAgb3V0WzJdID0gYVsyXSArIGJbMl0gKiBzY2FsZTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBldWNsaWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gdmVjMydzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlKGEsIGIpIHtcbiAgdmFyIHggPSBiWzBdIC0gYVswXTtcbiAgdmFyIHkgPSBiWzFdIC0gYVsxXTtcbiAgdmFyIHogPSBiWzJdIC0gYVsyXTtcbiAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzMnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHt2ZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZWREaXN0YW5jZShhLCBiKSB7XG4gIHZhciB4ID0gYlswXSAtIGFbMF07XG4gIHZhciB5ID0gYlsxXSAtIGFbMV07XG4gIHZhciB6ID0gYlsyXSAtIGFbMl07XG4gIHJldHVybiB4ICogeCArIHkgKiB5ICsgeiAqIHo7XG59XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBsZW5ndGggb2YgYSB2ZWMzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIHNxdWFyZWQgbGVuZ3RoIG9mXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgbGVuZ3RoIG9mIGFcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmVkTGVuZ3RoKGEpIHtcbiAgdmFyIHggPSBhWzBdO1xuICB2YXIgeSA9IGFbMV07XG4gIHZhciB6ID0gYVsyXTtcbiAgcmV0dXJuIHggKiB4ICsgeSAqIHkgKyB6ICogejtcbn1cbi8qKlxyXG4gKiBOZWdhdGVzIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjM1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdmVjdG9yIHRvIG5lZ2F0ZVxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlKG91dCwgYSkge1xuICBvdXRbMF0gPSAtYVswXTtcbiAgb3V0WzFdID0gLWFbMV07XG4gIG91dFsyXSA9IC1hWzJdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGludmVyc2Ugb2YgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7dmVjM30gYSB2ZWN0b3IgdG8gaW52ZXJ0XHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnNlKG91dCwgYSkge1xuICBvdXRbMF0gPSAxLjAgLyBhWzBdO1xuICBvdXRbMV0gPSAxLjAgLyBhWzFdO1xuICBvdXRbMl0gPSAxLjAgLyBhWzJdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIE5vcm1hbGl6ZSBhIHZlYzNcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byBub3JtYWxpemVcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZShvdXQsIGEpIHtcbiAgdmFyIHggPSBhWzBdO1xuICB2YXIgeSA9IGFbMV07XG4gIHZhciB6ID0gYVsyXTtcbiAgdmFyIGxlbiA9IHggKiB4ICsgeSAqIHkgKyB6ICogejtcblxuICBpZiAobGVuID4gMCkge1xuICAgIC8vVE9ETzogZXZhbHVhdGUgdXNlIG9mIGdsbV9pbnZzcXJ0IGhlcmU/XG4gICAgbGVuID0gMSAvIE1hdGguc3FydChsZW4pO1xuICB9XG5cbiAgb3V0WzBdID0gYVswXSAqIGxlbjtcbiAgb3V0WzFdID0gYVsxXSAqIGxlbjtcbiAgb3V0WzJdID0gYVsyXSAqIGxlbjtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBkb3QgcHJvZHVjdCBvZiB0d28gdmVjMydzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRvdCBwcm9kdWN0IG9mIGEgYW5kIGJcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkb3QoYSwgYikge1xuICByZXR1cm4gYVswXSAqIGJbMF0gKyBhWzFdICogYlsxXSArIGFbMl0gKiBiWzJdO1xufVxuLyoqXHJcbiAqIENvbXB1dGVzIHRoZSBjcm9zcyBwcm9kdWN0IG9mIHR3byB2ZWMzJ3NcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyb3NzKG91dCwgYSwgYikge1xuICB2YXIgYXggPSBhWzBdLFxuICAgICAgYXkgPSBhWzFdLFxuICAgICAgYXogPSBhWzJdO1xuICB2YXIgYnggPSBiWzBdLFxuICAgICAgYnkgPSBiWzFdLFxuICAgICAgYnogPSBiWzJdO1xuICBvdXRbMF0gPSBheSAqIGJ6IC0gYXogKiBieTtcbiAgb3V0WzFdID0gYXogKiBieCAtIGF4ICogYno7XG4gIG91dFsyXSA9IGF4ICogYnkgLSBheSAqIGJ4O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFBlcmZvcm1zIGEgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gdmVjMydzXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge3ZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50LCBpbiB0aGUgcmFuZ2UgWzAtMV0sIGJldHdlZW4gdGhlIHR3byBpbnB1dHNcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGxlcnAob3V0LCBhLCBiLCB0KSB7XG4gIHZhciBheCA9IGFbMF07XG4gIHZhciBheSA9IGFbMV07XG4gIHZhciBheiA9IGFbMl07XG4gIG91dFswXSA9IGF4ICsgdCAqIChiWzBdIC0gYXgpO1xuICBvdXRbMV0gPSBheSArIHQgKiAoYlsxXSAtIGF5KTtcbiAgb3V0WzJdID0gYXogKyB0ICogKGJbMl0gLSBheik7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUGVyZm9ybXMgYSBoZXJtaXRlIGludGVycG9sYXRpb24gd2l0aCB0d28gY29udHJvbCBwb2ludHNcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHBhcmFtIHt2ZWMzfSBjIHRoZSB0aGlyZCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7dmVjM30gZCB0aGUgZm91cnRoIG9wZXJhbmRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQsIGluIHRoZSByYW5nZSBbMC0xXSwgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaGVybWl0ZShvdXQsIGEsIGIsIGMsIGQsIHQpIHtcbiAgdmFyIGZhY3RvclRpbWVzMiA9IHQgKiB0O1xuICB2YXIgZmFjdG9yMSA9IGZhY3RvclRpbWVzMiAqICgyICogdCAtIDMpICsgMTtcbiAgdmFyIGZhY3RvcjIgPSBmYWN0b3JUaW1lczIgKiAodCAtIDIpICsgdDtcbiAgdmFyIGZhY3RvcjMgPSBmYWN0b3JUaW1lczIgKiAodCAtIDEpO1xuICB2YXIgZmFjdG9yNCA9IGZhY3RvclRpbWVzMiAqICgzIC0gMiAqIHQpO1xuICBvdXRbMF0gPSBhWzBdICogZmFjdG9yMSArIGJbMF0gKiBmYWN0b3IyICsgY1swXSAqIGZhY3RvcjMgKyBkWzBdICogZmFjdG9yNDtcbiAgb3V0WzFdID0gYVsxXSAqIGZhY3RvcjEgKyBiWzFdICogZmFjdG9yMiArIGNbMV0gKiBmYWN0b3IzICsgZFsxXSAqIGZhY3RvcjQ7XG4gIG91dFsyXSA9IGFbMl0gKiBmYWN0b3IxICsgYlsyXSAqIGZhY3RvcjIgKyBjWzJdICogZmFjdG9yMyArIGRbMl0gKiBmYWN0b3I0O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFBlcmZvcm1zIGEgYmV6aWVyIGludGVycG9sYXRpb24gd2l0aCB0d28gY29udHJvbCBwb2ludHNcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7dmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHBhcmFtIHt2ZWMzfSBjIHRoZSB0aGlyZCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7dmVjM30gZCB0aGUgZm91cnRoIG9wZXJhbmRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQsIGluIHRoZSByYW5nZSBbMC0xXSwgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYmV6aWVyKG91dCwgYSwgYiwgYywgZCwgdCkge1xuICB2YXIgaW52ZXJzZUZhY3RvciA9IDEgLSB0O1xuICB2YXIgaW52ZXJzZUZhY3RvclRpbWVzVHdvID0gaW52ZXJzZUZhY3RvciAqIGludmVyc2VGYWN0b3I7XG4gIHZhciBmYWN0b3JUaW1lczIgPSB0ICogdDtcbiAgdmFyIGZhY3RvcjEgPSBpbnZlcnNlRmFjdG9yVGltZXNUd28gKiBpbnZlcnNlRmFjdG9yO1xuICB2YXIgZmFjdG9yMiA9IDMgKiB0ICogaW52ZXJzZUZhY3RvclRpbWVzVHdvO1xuICB2YXIgZmFjdG9yMyA9IDMgKiBmYWN0b3JUaW1lczIgKiBpbnZlcnNlRmFjdG9yO1xuICB2YXIgZmFjdG9yNCA9IGZhY3RvclRpbWVzMiAqIHQ7XG4gIG91dFswXSA9IGFbMF0gKiBmYWN0b3IxICsgYlswXSAqIGZhY3RvcjIgKyBjWzBdICogZmFjdG9yMyArIGRbMF0gKiBmYWN0b3I0O1xuICBvdXRbMV0gPSBhWzFdICogZmFjdG9yMSArIGJbMV0gKiBmYWN0b3IyICsgY1sxXSAqIGZhY3RvcjMgKyBkWzFdICogZmFjdG9yNDtcbiAgb3V0WzJdID0gYVsyXSAqIGZhY3RvcjEgKyBiWzJdICogZmFjdG9yMiArIGNbMl0gKiBmYWN0b3IzICsgZFsyXSAqIGZhY3RvcjQ7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogR2VuZXJhdGVzIGEgcmFuZG9tIHZlY3RvciB3aXRoIHRoZSBnaXZlbiBzY2FsZVxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge051bWJlcn0gW3NjYWxlXSBMZW5ndGggb2YgdGhlIHJlc3VsdGluZyB2ZWN0b3IuIElmIG9tbWl0dGVkLCBhIHVuaXQgdmVjdG9yIHdpbGwgYmUgcmV0dXJuZWRcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShvdXQsIHNjYWxlKSB7XG4gIHNjYWxlID0gc2NhbGUgfHwgMS4wO1xuICB2YXIgciA9IGdsTWF0cml4LlJBTkRPTSgpICogMi4wICogTWF0aC5QSTtcbiAgdmFyIHogPSBnbE1hdHJpeC5SQU5ET00oKSAqIDIuMCAtIDEuMDtcbiAgdmFyIHpTY2FsZSA9IE1hdGguc3FydCgxLjAgLSB6ICogeikgKiBzY2FsZTtcbiAgb3V0WzBdID0gTWF0aC5jb3MocikgKiB6U2NhbGU7XG4gIG91dFsxXSA9IE1hdGguc2luKHIpICogelNjYWxlO1xuICBvdXRbMl0gPSB6ICogc2NhbGU7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogVHJhbnNmb3JtcyB0aGUgdmVjMyB3aXRoIGEgbWF0NC5cclxuICogNHRoIHZlY3RvciBjb21wb25lbnQgaXMgaW1wbGljaXRseSAnMSdcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHt2ZWMzfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXHJcbiAqIEBwYXJhbSB7bWF0NH0gbSBtYXRyaXggdG8gdHJhbnNmb3JtIHdpdGhcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybU1hdDQob3V0LCBhLCBtKSB7XG4gIHZhciB4ID0gYVswXSxcbiAgICAgIHkgPSBhWzFdLFxuICAgICAgeiA9IGFbMl07XG4gIHZhciB3ID0gbVszXSAqIHggKyBtWzddICogeSArIG1bMTFdICogeiArIG1bMTVdO1xuICB3ID0gdyB8fCAxLjA7XG4gIG91dFswXSA9IChtWzBdICogeCArIG1bNF0gKiB5ICsgbVs4XSAqIHogKyBtWzEyXSkgLyB3O1xuICBvdXRbMV0gPSAobVsxXSAqIHggKyBtWzVdICogeSArIG1bOV0gKiB6ICsgbVsxM10pIC8gdztcbiAgb3V0WzJdID0gKG1bMl0gKiB4ICsgbVs2XSAqIHkgKyBtWzEwXSAqIHogKyBtWzE0XSkgLyB3O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzMgd2l0aCBhIG1hdDMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7dmVjM30gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxyXG4gKiBAcGFyYW0ge21hdDN9IG0gdGhlIDN4MyBtYXRyaXggdG8gdHJhbnNmb3JtIHdpdGhcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybU1hdDMob3V0LCBhLCBtKSB7XG4gIHZhciB4ID0gYVswXSxcbiAgICAgIHkgPSBhWzFdLFxuICAgICAgeiA9IGFbMl07XG4gIG91dFswXSA9IHggKiBtWzBdICsgeSAqIG1bM10gKyB6ICogbVs2XTtcbiAgb3V0WzFdID0geCAqIG1bMV0gKyB5ICogbVs0XSArIHogKiBtWzddO1xuICBvdXRbMl0gPSB4ICogbVsyXSArIHkgKiBtWzVdICsgeiAqIG1bOF07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogVHJhbnNmb3JtcyB0aGUgdmVjMyB3aXRoIGEgcXVhdFxyXG4gKiBDYW4gYWxzbyBiZSB1c2VkIGZvciBkdWFsIHF1YXRlcm5pb25zLiAoTXVsdGlwbHkgaXQgd2l0aCB0aGUgcmVhbCBwYXJ0KVxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge3ZlYzN9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cclxuICogQHBhcmFtIHtxdWF0fSBxIHF1YXRlcm5pb24gdG8gdHJhbnNmb3JtIHdpdGhcclxuICogQHJldHVybnMge3ZlYzN9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybVF1YXQob3V0LCBhLCBxKSB7XG4gIC8vIGJlbmNobWFya3M6IGh0dHBzOi8vanNwZXJmLmNvbS9xdWF0ZXJuaW9uLXRyYW5zZm9ybS12ZWMzLWltcGxlbWVudGF0aW9ucy1maXhlZFxuICB2YXIgcXggPSBxWzBdLFxuICAgICAgcXkgPSBxWzFdLFxuICAgICAgcXogPSBxWzJdLFxuICAgICAgcXcgPSBxWzNdO1xuICB2YXIgeCA9IGFbMF0sXG4gICAgICB5ID0gYVsxXSxcbiAgICAgIHogPSBhWzJdOyAvLyB2YXIgcXZlYyA9IFtxeCwgcXksIHF6XTtcbiAgLy8gdmFyIHV2ID0gdmVjMy5jcm9zcyhbXSwgcXZlYywgYSk7XG5cbiAgdmFyIHV2eCA9IHF5ICogeiAtIHF6ICogeSxcbiAgICAgIHV2eSA9IHF6ICogeCAtIHF4ICogeixcbiAgICAgIHV2eiA9IHF4ICogeSAtIHF5ICogeDsgLy8gdmFyIHV1diA9IHZlYzMuY3Jvc3MoW10sIHF2ZWMsIHV2KTtcblxuICB2YXIgdXV2eCA9IHF5ICogdXZ6IC0gcXogKiB1dnksXG4gICAgICB1dXZ5ID0gcXogKiB1dnggLSBxeCAqIHV2eixcbiAgICAgIHV1dnogPSBxeCAqIHV2eSAtIHF5ICogdXZ4OyAvLyB2ZWMzLnNjYWxlKHV2LCB1diwgMiAqIHcpO1xuXG4gIHZhciB3MiA9IHF3ICogMjtcbiAgdXZ4ICo9IHcyO1xuICB1dnkgKj0gdzI7XG4gIHV2eiAqPSB3MjsgLy8gdmVjMy5zY2FsZSh1dXYsIHV1diwgMik7XG5cbiAgdXV2eCAqPSAyO1xuICB1dXZ5ICo9IDI7XG4gIHV1dnogKj0gMjsgLy8gcmV0dXJuIHZlYzMuYWRkKG91dCwgYSwgdmVjMy5hZGQob3V0LCB1diwgdXV2KSk7XG5cbiAgb3V0WzBdID0geCArIHV2eCArIHV1dng7XG4gIG91dFsxXSA9IHkgKyB1dnkgKyB1dXZ5O1xuICBvdXRbMl0gPSB6ICsgdXZ6ICsgdXV2ejtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSb3RhdGUgYSAzRCB2ZWN0b3IgYXJvdW5kIHRoZSB4LWF4aXNcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgVGhlIHJlY2VpdmluZyB2ZWMzXHJcbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgdmVjMyBwb2ludCB0byByb3RhdGVcclxuICogQHBhcmFtIHt2ZWMzfSBiIFRoZSBvcmlnaW4gb2YgdGhlIHJvdGF0aW9uXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBjIFRoZSBhbmdsZSBvZiByb3RhdGlvblxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWChvdXQsIGEsIGIsIGMpIHtcbiAgdmFyIHAgPSBbXSxcbiAgICAgIHIgPSBbXTsgLy9UcmFuc2xhdGUgcG9pbnQgdG8gdGhlIG9yaWdpblxuXG4gIHBbMF0gPSBhWzBdIC0gYlswXTtcbiAgcFsxXSA9IGFbMV0gLSBiWzFdO1xuICBwWzJdID0gYVsyXSAtIGJbMl07IC8vcGVyZm9ybSByb3RhdGlvblxuXG4gIHJbMF0gPSBwWzBdO1xuICByWzFdID0gcFsxXSAqIE1hdGguY29zKGMpIC0gcFsyXSAqIE1hdGguc2luKGMpO1xuICByWzJdID0gcFsxXSAqIE1hdGguc2luKGMpICsgcFsyXSAqIE1hdGguY29zKGMpOyAvL3RyYW5zbGF0ZSB0byBjb3JyZWN0IHBvc2l0aW9uXG5cbiAgb3V0WzBdID0gclswXSArIGJbMF07XG4gIG91dFsxXSA9IHJbMV0gKyBiWzFdO1xuICBvdXRbMl0gPSByWzJdICsgYlsyXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSb3RhdGUgYSAzRCB2ZWN0b3IgYXJvdW5kIHRoZSB5LWF4aXNcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgVGhlIHJlY2VpdmluZyB2ZWMzXHJcbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgdmVjMyBwb2ludCB0byByb3RhdGVcclxuICogQHBhcmFtIHt2ZWMzfSBiIFRoZSBvcmlnaW4gb2YgdGhlIHJvdGF0aW9uXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBjIFRoZSBhbmdsZSBvZiByb3RhdGlvblxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWShvdXQsIGEsIGIsIGMpIHtcbiAgdmFyIHAgPSBbXSxcbiAgICAgIHIgPSBbXTsgLy9UcmFuc2xhdGUgcG9pbnQgdG8gdGhlIG9yaWdpblxuXG4gIHBbMF0gPSBhWzBdIC0gYlswXTtcbiAgcFsxXSA9IGFbMV0gLSBiWzFdO1xuICBwWzJdID0gYVsyXSAtIGJbMl07IC8vcGVyZm9ybSByb3RhdGlvblxuXG4gIHJbMF0gPSBwWzJdICogTWF0aC5zaW4oYykgKyBwWzBdICogTWF0aC5jb3MoYyk7XG4gIHJbMV0gPSBwWzFdO1xuICByWzJdID0gcFsyXSAqIE1hdGguY29zKGMpIC0gcFswXSAqIE1hdGguc2luKGMpOyAvL3RyYW5zbGF0ZSB0byBjb3JyZWN0IHBvc2l0aW9uXG5cbiAgb3V0WzBdID0gclswXSArIGJbMF07XG4gIG91dFsxXSA9IHJbMV0gKyBiWzFdO1xuICBvdXRbMl0gPSByWzJdICsgYlsyXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSb3RhdGUgYSAzRCB2ZWN0b3IgYXJvdW5kIHRoZSB6LWF4aXNcclxuICogQHBhcmFtIHt2ZWMzfSBvdXQgVGhlIHJlY2VpdmluZyB2ZWMzXHJcbiAqIEBwYXJhbSB7dmVjM30gYSBUaGUgdmVjMyBwb2ludCB0byByb3RhdGVcclxuICogQHBhcmFtIHt2ZWMzfSBiIFRoZSBvcmlnaW4gb2YgdGhlIHJvdGF0aW9uXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBjIFRoZSBhbmdsZSBvZiByb3RhdGlvblxyXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWihvdXQsIGEsIGIsIGMpIHtcbiAgdmFyIHAgPSBbXSxcbiAgICAgIHIgPSBbXTsgLy9UcmFuc2xhdGUgcG9pbnQgdG8gdGhlIG9yaWdpblxuXG4gIHBbMF0gPSBhWzBdIC0gYlswXTtcbiAgcFsxXSA9IGFbMV0gLSBiWzFdO1xuICBwWzJdID0gYVsyXSAtIGJbMl07IC8vcGVyZm9ybSByb3RhdGlvblxuXG4gIHJbMF0gPSBwWzBdICogTWF0aC5jb3MoYykgLSBwWzFdICogTWF0aC5zaW4oYyk7XG4gIHJbMV0gPSBwWzBdICogTWF0aC5zaW4oYykgKyBwWzFdICogTWF0aC5jb3MoYyk7XG4gIHJbMl0gPSBwWzJdOyAvL3RyYW5zbGF0ZSB0byBjb3JyZWN0IHBvc2l0aW9uXG5cbiAgb3V0WzBdID0gclswXSArIGJbMF07XG4gIG91dFsxXSA9IHJbMV0gKyBiWzFdO1xuICBvdXRbMl0gPSByWzJdICsgYlsyXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBHZXQgdGhlIGFuZ2xlIGJldHdlZW4gdHdvIDNEIHZlY3RvcnNcclxuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7dmVjM30gYiBUaGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge051bWJlcn0gVGhlIGFuZ2xlIGluIHJhZGlhbnNcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBhbmdsZShhLCBiKSB7XG4gIHZhciB0ZW1wQSA9IGZyb21WYWx1ZXMoYVswXSwgYVsxXSwgYVsyXSk7XG4gIHZhciB0ZW1wQiA9IGZyb21WYWx1ZXMoYlswXSwgYlsxXSwgYlsyXSk7XG4gIG5vcm1hbGl6ZSh0ZW1wQSwgdGVtcEEpO1xuICBub3JtYWxpemUodGVtcEIsIHRlbXBCKTtcbiAgdmFyIGNvc2luZSA9IGRvdCh0ZW1wQSwgdGVtcEIpO1xuXG4gIGlmIChjb3NpbmUgPiAxLjApIHtcbiAgICByZXR1cm4gMDtcbiAgfSBlbHNlIGlmIChjb3NpbmUgPCAtMS4wKSB7XG4gICAgcmV0dXJuIE1hdGguUEk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIE1hdGguYWNvcyhjb3NpbmUpO1xuICB9XG59XG4vKipcclxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMyB0byB6ZXJvXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB6ZXJvKG91dCkge1xuICBvdXRbMF0gPSAwLjA7XG4gIG91dFsxXSA9IDAuMDtcbiAgb3V0WzJdID0gMC4wO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSB2ZWN0b3JcclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBhIHZlY3RvciB0byByZXByZXNlbnQgYXMgYSBzdHJpbmdcclxuICogQHJldHVybnMge1N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzdHIoYSkge1xuICByZXR1cm4gJ3ZlYzMoJyArIGFbMF0gKyAnLCAnICsgYVsxXSArICcsICcgKyBhWzJdICsgJyknO1xufVxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHZlY3RvcnMgaGF2ZSBleGFjdGx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uICh3aGVuIGNvbXBhcmVkIHdpdGggPT09KVxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzN9IGEgVGhlIGZpcnN0IHZlY3Rvci5cclxuICogQHBhcmFtIHt2ZWMzfSBiIFRoZSBzZWNvbmQgdmVjdG9yLlxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmVjdG9ycyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBleGFjdEVxdWFscyhhLCBiKSB7XG4gIHJldHVybiBhWzBdID09PSBiWzBdICYmIGFbMV0gPT09IGJbMV0gJiYgYVsyXSA9PT0gYlsyXTtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSB2ZWN0b3JzIGhhdmUgYXBwcm94aW1hdGVseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbi5cclxuICpcclxuICogQHBhcmFtIHt2ZWMzfSBhIFRoZSBmaXJzdCB2ZWN0b3IuXHJcbiAqIEBwYXJhbSB7dmVjM30gYiBUaGUgc2Vjb25kIHZlY3Rvci5cclxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIHZlY3RvcnMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgdmFyIGEwID0gYVswXSxcbiAgICAgIGExID0gYVsxXSxcbiAgICAgIGEyID0gYVsyXTtcbiAgdmFyIGIwID0gYlswXSxcbiAgICAgIGIxID0gYlsxXSxcbiAgICAgIGIyID0gYlsyXTtcbiAgcmV0dXJuIE1hdGguYWJzKGEwIC0gYjApIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEwKSwgTWF0aC5hYnMoYjApKSAmJiBNYXRoLmFicyhhMSAtIGIxKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMSksIE1hdGguYWJzKGIxKSkgJiYgTWF0aC5hYnMoYTIgLSBiMikgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTIpLCBNYXRoLmFicyhiMikpO1xufVxuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5zdWJ0cmFjdH1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIHN1YiA9IHN1YnRyYWN0O1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5tdWx0aXBseX1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIG11bCA9IG11bHRpcGx5O1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5kaXZpZGV9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBkaXYgPSBkaXZpZGU7XG4vKipcclxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMzLmRpc3RhbmNlfVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgZGlzdCA9IGRpc3RhbmNlO1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5zcXVhcmVkRGlzdGFuY2V9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBzcXJEaXN0ID0gc3F1YXJlZERpc3RhbmNlO1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5sZW5ndGh9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBsZW4gPSBsZW5ndGg7XG4vKipcclxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMzLnNxdWFyZWRMZW5ndGh9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBzcXJMZW4gPSBzcXVhcmVkTGVuZ3RoO1xuLyoqXHJcbiAqIFBlcmZvcm0gc29tZSBvcGVyYXRpb24gb3ZlciBhbiBhcnJheSBvZiB2ZWMzcy5cclxuICpcclxuICogQHBhcmFtIHtBcnJheX0gYSB0aGUgYXJyYXkgb2YgdmVjdG9ycyB0byBpdGVyYXRlIG92ZXJcclxuICogQHBhcmFtIHtOdW1iZXJ9IHN0cmlkZSBOdW1iZXIgb2YgZWxlbWVudHMgYmV0d2VlbiB0aGUgc3RhcnQgb2YgZWFjaCB2ZWMzLiBJZiAwIGFzc3VtZXMgdGlnaHRseSBwYWNrZWRcclxuICogQHBhcmFtIHtOdW1iZXJ9IG9mZnNldCBOdW1iZXIgb2YgZWxlbWVudHMgdG8gc2tpcCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBhcnJheVxyXG4gKiBAcGFyYW0ge051bWJlcn0gY291bnQgTnVtYmVyIG9mIHZlYzNzIHRvIGl0ZXJhdGUgb3Zlci4gSWYgMCBpdGVyYXRlcyBvdmVyIGVudGlyZSBhcnJheVxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBGdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIHZlY3RvciBpbiB0aGUgYXJyYXlcclxuICogQHBhcmFtIHtPYmplY3R9IFthcmddIGFkZGl0aW9uYWwgYXJndW1lbnQgdG8gcGFzcyB0byBmblxyXG4gKiBAcmV0dXJucyB7QXJyYXl9IGFcclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIGZvckVhY2ggPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB2ZWMgPSBjcmVhdGUoKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhLCBzdHJpZGUsIG9mZnNldCwgY291bnQsIGZuLCBhcmcpIHtcbiAgICB2YXIgaSwgbDtcblxuICAgIGlmICghc3RyaWRlKSB7XG4gICAgICBzdHJpZGUgPSAzO1xuICAgIH1cblxuICAgIGlmICghb2Zmc2V0KSB7XG4gICAgICBvZmZzZXQgPSAwO1xuICAgIH1cblxuICAgIGlmIChjb3VudCkge1xuICAgICAgbCA9IE1hdGgubWluKGNvdW50ICogc3RyaWRlICsgb2Zmc2V0LCBhLmxlbmd0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGwgPSBhLmxlbmd0aDtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSBvZmZzZXQ7IGkgPCBsOyBpICs9IHN0cmlkZSkge1xuICAgICAgdmVjWzBdID0gYVtpXTtcbiAgICAgIHZlY1sxXSA9IGFbaSArIDFdO1xuICAgICAgdmVjWzJdID0gYVtpICsgMl07XG4gICAgICBmbih2ZWMsIHZlYywgYXJnKTtcbiAgICAgIGFbaV0gPSB2ZWNbMF07XG4gICAgICBhW2kgKyAxXSA9IHZlY1sxXTtcbiAgICAgIGFbaSArIDJdID0gdmVjWzJdO1xuICAgIH1cblxuICAgIHJldHVybiBhO1xuICB9O1xufSgpOyIsImltcG9ydCAqIGFzIGdsTWF0cml4IGZyb20gXCIuL2NvbW1vbi5qc1wiO1xuLyoqXHJcbiAqIDQgRGltZW5zaW9uYWwgVmVjdG9yXHJcbiAqIEBtb2R1bGUgdmVjNFxyXG4gKi9cblxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcsIGVtcHR5IHZlYzRcclxuICpcclxuICogQHJldHVybnMge3ZlYzR9IGEgbmV3IDREIHZlY3RvclxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDQpO1xuXG4gIGlmIChnbE1hdHJpeC5BUlJBWV9UWVBFICE9IEZsb2F0MzJBcnJheSkge1xuICAgIG91dFswXSA9IDA7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gIH1cblxuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgdmVjNCBpbml0aWFsaXplZCB3aXRoIHZhbHVlcyBmcm9tIGFuIGV4aXN0aW5nIHZlY3RvclxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdmVjdG9yIHRvIGNsb25lXHJcbiAqIEByZXR1cm5zIHt2ZWM0fSBhIG5ldyA0RCB2ZWN0b3JcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShhKSB7XG4gIHZhciBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSg0KTtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgb3V0WzNdID0gYVszXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IHZlYzQgaW5pdGlhbGl6ZWQgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVzXHJcbiAqXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB3IFcgY29tcG9uZW50XHJcbiAqIEByZXR1cm5zIHt2ZWM0fSBhIG5ldyA0RCB2ZWN0b3JcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tVmFsdWVzKHgsIHksIHosIHcpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDQpO1xuICBvdXRbMF0gPSB4O1xuICBvdXRbMV0gPSB5O1xuICBvdXRbMl0gPSB6O1xuICBvdXRbM10gPSB3O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSB2ZWM0IHRvIGFub3RoZXJcclxuICpcclxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBzb3VyY2UgdmVjdG9yXHJcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KG91dCwgYSkge1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICBvdXRbMl0gPSBhWzJdO1xuICBvdXRbM10gPSBhWzNdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzQgdG8gdGhlIGdpdmVuIHZhbHVlc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxyXG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxyXG4gKiBAcGFyYW0ge051bWJlcn0geiBaIGNvbXBvbmVudFxyXG4gKiBAcGFyYW0ge051bWJlcn0gdyBXIGNvbXBvbmVudFxyXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0KG91dCwgeCwgeSwgeiwgdykge1xuICBvdXRbMF0gPSB4O1xuICBvdXRbMV0gPSB5O1xuICBvdXRbMl0gPSB6O1xuICBvdXRbM10gPSB3O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIEFkZHMgdHdvIHZlYzQnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXTtcbiAgb3V0WzFdID0gYVsxXSArIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gKyBiWzJdO1xuICBvdXRbM10gPSBhWzNdICsgYlszXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTdWJ0cmFjdHMgdmVjdG9yIGIgZnJvbSB2ZWN0b3IgYVxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3Qob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLSBiWzBdO1xuICBvdXRbMV0gPSBhWzFdIC0gYlsxXTtcbiAgb3V0WzJdID0gYVsyXSAtIGJbMl07XG4gIG91dFszXSA9IGFbM10gLSBiWzNdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIE11bHRpcGxpZXMgdHdvIHZlYzQnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKiBiWzBdO1xuICBvdXRbMV0gPSBhWzFdICogYlsxXTtcbiAgb3V0WzJdID0gYVsyXSAqIGJbMl07XG4gIG91dFszXSA9IGFbM10gKiBiWzNdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIERpdmlkZXMgdHdvIHZlYzQnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZGl2aWRlKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdIC8gYlswXTtcbiAgb3V0WzFdID0gYVsxXSAvIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gLyBiWzJdO1xuICBvdXRbM10gPSBhWzNdIC8gYlszXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBNYXRoLmNlaWwgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWM0XHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gY2VpbFxyXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY2VpbChvdXQsIGEpIHtcbiAgb3V0WzBdID0gTWF0aC5jZWlsKGFbMF0pO1xuICBvdXRbMV0gPSBNYXRoLmNlaWwoYVsxXSk7XG4gIG91dFsyXSA9IE1hdGguY2VpbChhWzJdKTtcbiAgb3V0WzNdID0gTWF0aC5jZWlsKGFbM10pO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIE1hdGguZmxvb3IgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWM0XHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gZmxvb3JcclxuICogQHJldHVybnMge3ZlYzR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZsb29yKG91dCwgYSkge1xuICBvdXRbMF0gPSBNYXRoLmZsb29yKGFbMF0pO1xuICBvdXRbMV0gPSBNYXRoLmZsb29yKGFbMV0pO1xuICBvdXRbMl0gPSBNYXRoLmZsb29yKGFbMl0pO1xuICBvdXRbM10gPSBNYXRoLmZsb29yKGFbM10pO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJldHVybnMgdGhlIG1pbmltdW0gb2YgdHdvIHZlYzQnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbWluKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBNYXRoLm1pbihhWzBdLCBiWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5taW4oYVsxXSwgYlsxXSk7XG4gIG91dFsyXSA9IE1hdGgubWluKGFbMl0sIGJbMl0pO1xuICBvdXRbM10gPSBNYXRoLm1pbihhWzNdLCBiWzNdKTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBtYXhpbXVtIG9mIHR3byB2ZWM0J3NcclxuICpcclxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge3ZlYzR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG1heChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gTWF0aC5tYXgoYVswXSwgYlswXSk7XG4gIG91dFsxXSA9IE1hdGgubWF4KGFbMV0sIGJbMV0pO1xuICBvdXRbMl0gPSBNYXRoLm1heChhWzJdLCBiWzJdKTtcbiAgb3V0WzNdID0gTWF0aC5tYXgoYVszXSwgYlszXSk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogTWF0aC5yb3VuZCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzRcclxuICpcclxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHt2ZWM0fSBhIHZlY3RvciB0byByb3VuZFxyXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcm91bmQob3V0LCBhKSB7XG4gIG91dFswXSA9IE1hdGgucm91bmQoYVswXSk7XG4gIG91dFsxXSA9IE1hdGgucm91bmQoYVsxXSk7XG4gIG91dFsyXSA9IE1hdGgucm91bmQoYVsyXSk7XG4gIG91dFszXSA9IE1hdGgucm91bmQoYVszXSk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogU2NhbGVzIGEgdmVjNCBieSBhIHNjYWxhciBudW1iZXJcclxuICpcclxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSB2ZWN0b3IgdG8gc2NhbGVcclxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSB2ZWN0b3IgYnlcclxuICogQHJldHVybnMge3ZlYzR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICogYjtcbiAgb3V0WzFdID0gYVsxXSAqIGI7XG4gIG91dFsyXSA9IGFbMl0gKiBiO1xuICBvdXRbM10gPSBhWzNdICogYjtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBBZGRzIHR3byB2ZWM0J3MgYWZ0ZXIgc2NhbGluZyB0aGUgc2Vjb25kIG9wZXJhbmQgYnkgYSBzY2FsYXIgdmFsdWVcclxuICpcclxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIHRoZSBhbW91bnQgdG8gc2NhbGUgYiBieSBiZWZvcmUgYWRkaW5nXHJcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZUFuZEFkZChvdXQsIGEsIGIsIHNjYWxlKSB7XG4gIG91dFswXSA9IGFbMF0gKyBiWzBdICogc2NhbGU7XG4gIG91dFsxXSA9IGFbMV0gKyBiWzFdICogc2NhbGU7XG4gIG91dFsyXSA9IGFbMl0gKyBiWzJdICogc2NhbGU7XG4gIG91dFszXSA9IGFbM10gKyBiWzNdICogc2NhbGU7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzQnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZShhLCBiKSB7XG4gIHZhciB4ID0gYlswXSAtIGFbMF07XG4gIHZhciB5ID0gYlsxXSAtIGFbMV07XG4gIHZhciB6ID0gYlsyXSAtIGFbMl07XG4gIHZhciB3ID0gYlszXSAtIGFbM107XG4gIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6ICsgdyAqIHcpO1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzQnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZWREaXN0YW5jZShhLCBiKSB7XG4gIHZhciB4ID0gYlswXSAtIGFbMF07XG4gIHZhciB5ID0gYlsxXSAtIGFbMV07XG4gIHZhciB6ID0gYlsyXSAtIGFbMl07XG4gIHZhciB3ID0gYlszXSAtIGFbM107XG4gIHJldHVybiB4ICogeCArIHkgKiB5ICsgeiAqIHogKyB3ICogdztcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBsZW5ndGggb2YgYSB2ZWM0XHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIGxlbmd0aCBvZlxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBsZW5ndGggb2YgYVxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbmd0aChhKSB7XG4gIHZhciB4ID0gYVswXTtcbiAgdmFyIHkgPSBhWzFdO1xuICB2YXIgeiA9IGFbMl07XG4gIHZhciB3ID0gYVszXTtcbiAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHogKyB3ICogdyk7XG59XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBsZW5ndGggb2YgYSB2ZWM0XHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIHNxdWFyZWQgbGVuZ3RoIG9mXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgbGVuZ3RoIG9mIGFcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmVkTGVuZ3RoKGEpIHtcbiAgdmFyIHggPSBhWzBdO1xuICB2YXIgeSA9IGFbMV07XG4gIHZhciB6ID0gYVsyXTtcbiAgdmFyIHcgPSBhWzNdO1xuICByZXR1cm4geCAqIHggKyB5ICogeSArIHogKiB6ICsgdyAqIHc7XG59XG4vKipcclxuICogTmVnYXRlcyB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzRcclxuICpcclxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHt2ZWM0fSBhIHZlY3RvciB0byBuZWdhdGVcclxuICogQHJldHVybnMge3ZlYzR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZShvdXQsIGEpIHtcbiAgb3V0WzBdID0gLWFbMF07XG4gIG91dFsxXSA9IC1hWzFdO1xuICBvdXRbMl0gPSAtYVsyXTtcbiAgb3V0WzNdID0gLWFbM107XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUmV0dXJucyB0aGUgaW52ZXJzZSBvZiB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzRcclxuICpcclxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHt2ZWM0fSBhIHZlY3RvciB0byBpbnZlcnRcclxuICogQHJldHVybnMge3ZlYzR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGludmVyc2Uob3V0LCBhKSB7XG4gIG91dFswXSA9IDEuMCAvIGFbMF07XG4gIG91dFsxXSA9IDEuMCAvIGFbMV07XG4gIG91dFsyXSA9IDEuMCAvIGFbMl07XG4gIG91dFszXSA9IDEuMCAvIGFbM107XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogTm9ybWFsaXplIGEgdmVjNFxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdmVjdG9yIHRvIG5vcm1hbGl6ZVxyXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplKG91dCwgYSkge1xuICB2YXIgeCA9IGFbMF07XG4gIHZhciB5ID0gYVsxXTtcbiAgdmFyIHogPSBhWzJdO1xuICB2YXIgdyA9IGFbM107XG4gIHZhciBsZW4gPSB4ICogeCArIHkgKiB5ICsgeiAqIHogKyB3ICogdztcblxuICBpZiAobGVuID4gMCkge1xuICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKTtcbiAgfVxuXG4gIG91dFswXSA9IHggKiBsZW47XG4gIG91dFsxXSA9IHkgKiBsZW47XG4gIG91dFsyXSA9IHogKiBsZW47XG4gIG91dFszXSA9IHcgKiBsZW47XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHZlYzQnc1xyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcclxuICogQHBhcmFtIHt2ZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkb3QgcHJvZHVjdCBvZiBhIGFuZCBiXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZG90KGEsIGIpIHtcbiAgcmV0dXJuIGFbMF0gKiBiWzBdICsgYVsxXSAqIGJbMV0gKyBhWzJdICogYlsyXSArIGFbM10gKiBiWzNdO1xufVxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGNyb3NzLXByb2R1Y3Qgb2YgdGhyZWUgdmVjdG9ycyBpbiBhIDQtZGltZW5zaW9uYWwgc3BhY2VcclxuICpcclxuICogQHBhcmFtIHt2ZWM0fSByZXN1bHQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHt2ZWM0fSBVIHRoZSBmaXJzdCB2ZWN0b3JcclxuICogQHBhcmFtIHt2ZWM0fSBWIHRoZSBzZWNvbmQgdmVjdG9yXHJcbiAqIEBwYXJhbSB7dmVjNH0gVyB0aGUgdGhpcmQgdmVjdG9yXHJcbiAqIEByZXR1cm5zIHt2ZWM0fSByZXN1bHRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcm9zcyhvdXQsIHUsIHYsIHcpIHtcbiAgdmFyIEEgPSB2WzBdICogd1sxXSAtIHZbMV0gKiB3WzBdLFxuICAgICAgQiA9IHZbMF0gKiB3WzJdIC0gdlsyXSAqIHdbMF0sXG4gICAgICBDID0gdlswXSAqIHdbM10gLSB2WzNdICogd1swXSxcbiAgICAgIEQgPSB2WzFdICogd1syXSAtIHZbMl0gKiB3WzFdLFxuICAgICAgRSA9IHZbMV0gKiB3WzNdIC0gdlszXSAqIHdbMV0sXG4gICAgICBGID0gdlsyXSAqIHdbM10gLSB2WzNdICogd1syXTtcbiAgdmFyIEcgPSB1WzBdO1xuICB2YXIgSCA9IHVbMV07XG4gIHZhciBJID0gdVsyXTtcbiAgdmFyIEogPSB1WzNdO1xuICBvdXRbMF0gPSBIICogRiAtIEkgKiBFICsgSiAqIEQ7XG4gIG91dFsxXSA9IC0oRyAqIEYpICsgSSAqIEMgLSBKICogQjtcbiAgb3V0WzJdID0gRyAqIEUgLSBIICogQyArIEogKiBBO1xuICBvdXRbM10gPSAtKEcgKiBEKSArIEggKiBCIC0gSSAqIEE7XG4gIHJldHVybiBvdXQ7XG59XG47XG4vKipcclxuICogUGVyZm9ybXMgYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byB2ZWM0J3NcclxuICpcclxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHBhcmFtIHt2ZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7dmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQsIGluIHRoZSByYW5nZSBbMC0xXSwgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xyXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbGVycChvdXQsIGEsIGIsIHQpIHtcbiAgdmFyIGF4ID0gYVswXTtcbiAgdmFyIGF5ID0gYVsxXTtcbiAgdmFyIGF6ID0gYVsyXTtcbiAgdmFyIGF3ID0gYVszXTtcbiAgb3V0WzBdID0gYXggKyB0ICogKGJbMF0gLSBheCk7XG4gIG91dFsxXSA9IGF5ICsgdCAqIChiWzFdIC0gYXkpO1xuICBvdXRbMl0gPSBheiArIHQgKiAoYlsyXSAtIGF6KTtcbiAgb3V0WzNdID0gYXcgKyB0ICogKGJbM10gLSBhdyk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogR2VuZXJhdGVzIGEgcmFuZG9tIHZlY3RvciB3aXRoIHRoZSBnaXZlbiBzY2FsZVxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge051bWJlcn0gW3NjYWxlXSBMZW5ndGggb2YgdGhlIHJlc3VsdGluZyB2ZWN0b3IuIElmIG9tbWl0dGVkLCBhIHVuaXQgdmVjdG9yIHdpbGwgYmUgcmV0dXJuZWRcclxuICogQHJldHVybnMge3ZlYzR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShvdXQsIHNjYWxlKSB7XG4gIHNjYWxlID0gc2NhbGUgfHwgMS4wOyAvLyBNYXJzYWdsaWEsIEdlb3JnZS4gQ2hvb3NpbmcgYSBQb2ludCBmcm9tIHRoZSBTdXJmYWNlIG9mIGFcbiAgLy8gU3BoZXJlLiBBbm4uIE1hdGguIFN0YXRpc3QuIDQzICgxOTcyKSwgbm8uIDIsIDY0NS0tNjQ2LlxuICAvLyBodHRwOi8vcHJvamVjdGV1Y2xpZC5vcmcvZXVjbGlkLmFvbXMvMTE3NzY5MjY0NDtcblxuICB2YXIgdjEsIHYyLCB2MywgdjQ7XG4gIHZhciBzMSwgczI7XG5cbiAgZG8ge1xuICAgIHYxID0gZ2xNYXRyaXguUkFORE9NKCkgKiAyIC0gMTtcbiAgICB2MiA9IGdsTWF0cml4LlJBTkRPTSgpICogMiAtIDE7XG4gICAgczEgPSB2MSAqIHYxICsgdjIgKiB2MjtcbiAgfSB3aGlsZSAoczEgPj0gMSk7XG5cbiAgZG8ge1xuICAgIHYzID0gZ2xNYXRyaXguUkFORE9NKCkgKiAyIC0gMTtcbiAgICB2NCA9IGdsTWF0cml4LlJBTkRPTSgpICogMiAtIDE7XG4gICAgczIgPSB2MyAqIHYzICsgdjQgKiB2NDtcbiAgfSB3aGlsZSAoczIgPj0gMSk7XG5cbiAgdmFyIGQgPSBNYXRoLnNxcnQoKDEgLSBzMSkgLyBzMik7XG4gIG91dFswXSA9IHNjYWxlICogdjE7XG4gIG91dFsxXSA9IHNjYWxlICogdjI7XG4gIG91dFsyXSA9IHNjYWxlICogdjMgKiBkO1xuICBvdXRbM10gPSBzY2FsZSAqIHY0ICogZDtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWM0IHdpdGggYSBtYXQ0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gKiBAcGFyYW0ge3ZlYzR9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cclxuICogQHBhcmFtIHttYXQ0fSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxyXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWF0NChvdXQsIGEsIG0pIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgICAgeSA9IGFbMV0sXG4gICAgICB6ID0gYVsyXSxcbiAgICAgIHcgPSBhWzNdO1xuICBvdXRbMF0gPSBtWzBdICogeCArIG1bNF0gKiB5ICsgbVs4XSAqIHogKyBtWzEyXSAqIHc7XG4gIG91dFsxXSA9IG1bMV0gKiB4ICsgbVs1XSAqIHkgKyBtWzldICogeiArIG1bMTNdICogdztcbiAgb3V0WzJdID0gbVsyXSAqIHggKyBtWzZdICogeSArIG1bMTBdICogeiArIG1bMTRdICogdztcbiAgb3V0WzNdID0gbVszXSAqIHggKyBtWzddICogeSArIG1bMTFdICogeiArIG1bMTVdICogdztcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWM0IHdpdGggYSBxdWF0XHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7dmVjNH0gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxyXG4gKiBAcGFyYW0ge3F1YXR9IHEgcXVhdGVybmlvbiB0byB0cmFuc2Zvcm0gd2l0aFxyXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtUXVhdChvdXQsIGEsIHEpIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgICAgeSA9IGFbMV0sXG4gICAgICB6ID0gYVsyXTtcbiAgdmFyIHF4ID0gcVswXSxcbiAgICAgIHF5ID0gcVsxXSxcbiAgICAgIHF6ID0gcVsyXSxcbiAgICAgIHF3ID0gcVszXTsgLy8gY2FsY3VsYXRlIHF1YXQgKiB2ZWNcblxuICB2YXIgaXggPSBxdyAqIHggKyBxeSAqIHogLSBxeiAqIHk7XG4gIHZhciBpeSA9IHF3ICogeSArIHF6ICogeCAtIHF4ICogejtcbiAgdmFyIGl6ID0gcXcgKiB6ICsgcXggKiB5IC0gcXkgKiB4O1xuICB2YXIgaXcgPSAtcXggKiB4IC0gcXkgKiB5IC0gcXogKiB6OyAvLyBjYWxjdWxhdGUgcmVzdWx0ICogaW52ZXJzZSBxdWF0XG5cbiAgb3V0WzBdID0gaXggKiBxdyArIGl3ICogLXF4ICsgaXkgKiAtcXogLSBpeiAqIC1xeTtcbiAgb3V0WzFdID0gaXkgKiBxdyArIGl3ICogLXF5ICsgaXogKiAtcXggLSBpeCAqIC1xejtcbiAgb3V0WzJdID0gaXogKiBxdyArIGl3ICogLXF6ICsgaXggKiAtcXkgLSBpeSAqIC1xeDtcbiAgb3V0WzNdID0gYVszXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWM0IHRvIHplcm9cclxuICpcclxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICogQHJldHVybnMge3ZlYzR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHplcm8ob3V0KSB7XG4gIG91dFswXSA9IDAuMDtcbiAgb3V0WzFdID0gMC4wO1xuICBvdXRbMl0gPSAwLjA7XG4gIG91dFszXSA9IDAuMDtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgdmVjdG9yXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmVjNH0gYSB2ZWN0b3IgdG8gcmVwcmVzZW50IGFzIGEgc3RyaW5nXHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyKGEpIHtcbiAgcmV0dXJuICd2ZWM0KCcgKyBhWzBdICsgJywgJyArIGFbMV0gKyAnLCAnICsgYVsyXSArICcsICcgKyBhWzNdICsgJyknO1xufVxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHZlY3RvcnMgaGF2ZSBleGFjdGx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uICh3aGVuIGNvbXBhcmVkIHdpdGggPT09KVxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzR9IGEgVGhlIGZpcnN0IHZlY3Rvci5cclxuICogQHBhcmFtIHt2ZWM0fSBiIFRoZSBzZWNvbmQgdmVjdG9yLlxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmVjdG9ycyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBleGFjdEVxdWFscyhhLCBiKSB7XG4gIHJldHVybiBhWzBdID09PSBiWzBdICYmIGFbMV0gPT09IGJbMV0gJiYgYVsyXSA9PT0gYlsyXSAmJiBhWzNdID09PSBiWzNdO1xufVxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHZlY3RvcnMgaGF2ZSBhcHByb3hpbWF0ZWx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3ZlYzR9IGEgVGhlIGZpcnN0IHZlY3Rvci5cclxuICogQHBhcmFtIHt2ZWM0fSBiIFRoZSBzZWNvbmQgdmVjdG9yLlxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmVjdG9ycyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICB2YXIgYTAgPSBhWzBdLFxuICAgICAgYTEgPSBhWzFdLFxuICAgICAgYTIgPSBhWzJdLFxuICAgICAgYTMgPSBhWzNdO1xuICB2YXIgYjAgPSBiWzBdLFxuICAgICAgYjEgPSBiWzFdLFxuICAgICAgYjIgPSBiWzJdLFxuICAgICAgYjMgPSBiWzNdO1xuICByZXR1cm4gTWF0aC5hYnMoYTAgLSBiMCkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTApLCBNYXRoLmFicyhiMCkpICYmIE1hdGguYWJzKGExIC0gYjEpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExKSwgTWF0aC5hYnMoYjEpKSAmJiBNYXRoLmFicyhhMiAtIGIyKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMiksIE1hdGguYWJzKGIyKSkgJiYgTWF0aC5hYnMoYTMgLSBiMykgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTMpLCBNYXRoLmFicyhiMykpO1xufVxuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjNC5zdWJ0cmFjdH1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIHN1YiA9IHN1YnRyYWN0O1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjNC5tdWx0aXBseX1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIG11bCA9IG11bHRpcGx5O1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjNC5kaXZpZGV9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBkaXYgPSBkaXZpZGU7XG4vKipcclxuICogQWxpYXMgZm9yIHtAbGluayB2ZWM0LmRpc3RhbmNlfVxyXG4gKiBAZnVuY3Rpb25cclxuICovXG5cbmV4cG9ydCB2YXIgZGlzdCA9IGRpc3RhbmNlO1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjNC5zcXVhcmVkRGlzdGFuY2V9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBzcXJEaXN0ID0gc3F1YXJlZERpc3RhbmNlO1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjNC5sZW5ndGh9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBsZW4gPSBsZW5ndGg7XG4vKipcclxuICogQWxpYXMgZm9yIHtAbGluayB2ZWM0LnNxdWFyZWRMZW5ndGh9XHJcbiAqIEBmdW5jdGlvblxyXG4gKi9cblxuZXhwb3J0IHZhciBzcXJMZW4gPSBzcXVhcmVkTGVuZ3RoO1xuLyoqXHJcbiAqIFBlcmZvcm0gc29tZSBvcGVyYXRpb24gb3ZlciBhbiBhcnJheSBvZiB2ZWM0cy5cclxuICpcclxuICogQHBhcmFtIHtBcnJheX0gYSB0aGUgYXJyYXkgb2YgdmVjdG9ycyB0byBpdGVyYXRlIG92ZXJcclxuICogQHBhcmFtIHtOdW1iZXJ9IHN0cmlkZSBOdW1iZXIgb2YgZWxlbWVudHMgYmV0d2VlbiB0aGUgc3RhcnQgb2YgZWFjaCB2ZWM0LiBJZiAwIGFzc3VtZXMgdGlnaHRseSBwYWNrZWRcclxuICogQHBhcmFtIHtOdW1iZXJ9IG9mZnNldCBOdW1iZXIgb2YgZWxlbWVudHMgdG8gc2tpcCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBhcnJheVxyXG4gKiBAcGFyYW0ge051bWJlcn0gY291bnQgTnVtYmVyIG9mIHZlYzRzIHRvIGl0ZXJhdGUgb3Zlci4gSWYgMCBpdGVyYXRlcyBvdmVyIGVudGlyZSBhcnJheVxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBGdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIHZlY3RvciBpbiB0aGUgYXJyYXlcclxuICogQHBhcmFtIHtPYmplY3R9IFthcmddIGFkZGl0aW9uYWwgYXJndW1lbnQgdG8gcGFzcyB0byBmblxyXG4gKiBAcmV0dXJucyB7QXJyYXl9IGFcclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIGZvckVhY2ggPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB2ZWMgPSBjcmVhdGUoKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhLCBzdHJpZGUsIG9mZnNldCwgY291bnQsIGZuLCBhcmcpIHtcbiAgICB2YXIgaSwgbDtcblxuICAgIGlmICghc3RyaWRlKSB7XG4gICAgICBzdHJpZGUgPSA0O1xuICAgIH1cblxuICAgIGlmICghb2Zmc2V0KSB7XG4gICAgICBvZmZzZXQgPSAwO1xuICAgIH1cblxuICAgIGlmIChjb3VudCkge1xuICAgICAgbCA9IE1hdGgubWluKGNvdW50ICogc3RyaWRlICsgb2Zmc2V0LCBhLmxlbmd0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGwgPSBhLmxlbmd0aDtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSBvZmZzZXQ7IGkgPCBsOyBpICs9IHN0cmlkZSkge1xuICAgICAgdmVjWzBdID0gYVtpXTtcbiAgICAgIHZlY1sxXSA9IGFbaSArIDFdO1xuICAgICAgdmVjWzJdID0gYVtpICsgMl07XG4gICAgICB2ZWNbM10gPSBhW2kgKyAzXTtcbiAgICAgIGZuKHZlYywgdmVjLCBhcmcpO1xuICAgICAgYVtpXSA9IHZlY1swXTtcbiAgICAgIGFbaSArIDFdID0gdmVjWzFdO1xuICAgICAgYVtpICsgMl0gPSB2ZWNbMl07XG4gICAgICBhW2kgKyAzXSA9IHZlY1szXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYTtcbiAgfTtcbn0oKTsiLCJpbXBvcnQge1NoYWRlcn0gZnJvbSBcIi4vc2hhZGVyXCJcblxuY2xhc3MgVmVydGV4QnVmZmVyRWxlbWVudCB7XG4gICAgbmFtZTpzdHJpbmdcbiAgICBjb3VudDpudW1iZXJcbiAgICBjb25zdHJ1Y3Rvcihjb3VudDpudW1iZXIsbmFtZTpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLmNvdW50ID0gY291bnRcbiAgICB9XG59XG5cbmNsYXNzIFZlcnRleEJ1ZmZlckxheW91dCB7XG4gICAgcHJpdmF0ZSB0b3RhbENvdW50Om51bWJlcjtcbiAgICBwcml2YXRlIGVsZW1zOkFycmF5PFZlcnRleEJ1ZmZlckVsZW1lbnQ+XG4gICAgcHJpdmF0ZSBnbDpXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAgICBjb25zdHJ1Y3RvcihlbGVtczpBcnJheTxWZXJ0ZXhCdWZmZXJFbGVtZW50PixnbDpXZWJHTFJlbmRlcmluZ0NvbnRleHQpIHtcbiAgICAgICAgdGhpcy5nbCA9IGdsXG4gICAgICAgIHRoaXMuZWxlbXMgPSBlbGVtc1xuICAgICAgICBsZXQgdG90YWxDb3VudCA9IDA7XG4gICAgICAgIGVsZW1zLmZvckVhY2goIGVsZW0gPT4ge1xuICAgICAgICAgICAgdG90YWxDb3VudCArPSBlbGVtLmNvdW50XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy50b3RhbENvdW50ID0gdG90YWxDb3VudFxuICAgIH1cblxuICAgIGJpbmQoc2hhZGVyOlNoYWRlcikge1xuICAgICAgICBjb25zdCBnbCA9IHRoaXMuZ2xcbiAgICAgICAgbGV0IGN1cnJlbnRPZmZzZXQgPSAwXG4gICAgICAgIHRoaXMuZWxlbXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihzaGFkZXIucHJvZ3JhbSxlbGVtLm5hbWUpXG4gICAgICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLFxuICAgICAgICAgICAgICAgIGVsZW0uY291bnQsXG4gICAgICAgICAgICAgICAgZ2wuRkxPQVQsXG4gICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICB0aGlzLnRvdGFsQ291bnQgKiBGbG9hdDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlQsXG4gICAgICAgICAgICAgICAgY3VycmVudE9mZnNldCAqIEZsb2F0MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY3VycmVudE9mZnNldCArPSBlbGVtLmNvdW50XG5cbiAgICAgICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGxvY2F0aW9uKTtcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfVxufVxuXG5jbGFzcyBWZXJ0ZXhCdWZmZXIge1xuICAgIGdsOldlYkdMUmVuZGVyaW5nQ29udGV4dDtcbiAgICBidWZmZXJJRDpXZWJHTEJ1ZmZlclxuICAgIGNvbnN0cnVjdG9yKGdsOldlYkdMUmVuZGVyaW5nQ29udGV4dCxkYXRhKSB7XG4gICAgICAgIHRoaXMuYnVmZmVySUQgPSBnbC5jcmVhdGVCdWZmZXIoKVxuICAgICAgICB0aGlzLmdsID0gZ2w7XG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLHRoaXMuYnVmZmVySUQpXG4gICAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KGRhdGEpLCBnbC5EWU5BTUlDX0RSQVcpXG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5nbC5kZWxldGVCdWZmZXIodGhpcy5idWZmZXJJRClcbiAgICB9XG5cbiAgICBiaW5kKCkge1xuICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5BUlJBWV9CVUZGRVIsdGhpcy5idWZmZXJJRClcbiAgICB9XG5cbiAgICB1bkJpbmQoKSB7XG4gICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUixudWxsKVxuICAgIH1cbn1cblxuY2xhc3MgSW5kZXhCdWZmZXIge1xuICAgIGJ1ZmZlcklEOldlYkdMQnVmZmVyO1xuICAgIHNpemU6bnVtYmVyO1xuICAgIHByaXZhdGUgZ2w6V2ViR0xSZW5kZXJpbmdDb250ZXh0O1xuICAgIGNvbnN0cnVjdG9yKGdsOldlYkdMUmVuZGVyaW5nQ29udGV4dCxkYXRhKSB7XG4gICAgICAgIHRoaXMuYnVmZmVySUQgPSBnbC5jcmVhdGVCdWZmZXIoKVxuICAgICAgICB0aGlzLmdsID0gZ2xcbiAgICAgICAgdGhpcy5zaXplID0gZGF0YS5sZW5ndGg7XG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsdGhpcy5idWZmZXJJRClcbiAgICAgICAgZ2wuYnVmZmVyRGF0YShnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUixuZXcgVWludDE2QXJyYXkoZGF0YSksZ2wuRFlOQU1JQ19EUkFXKVxuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZ2wuZGVsZXRlQnVmZmVyKHRoaXMuYnVmZmVySUQpXG4gICAgfVxuXG4gICAgYmluZCgpIHtcbiAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsdGhpcy5idWZmZXJJRClcbiAgICB9XG5cbiAgICB1bkJpbmQoKSB7XG4gICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLG51bGwpXG4gICAgfVxufVxuXG5leHBvcnQge1ZlcnRleEJ1ZmZlcixJbmRleEJ1ZmZlcixWZXJ0ZXhCdWZmZXJMYXlvdXQsVmVydGV4QnVmZmVyRWxlbWVudH0iLCJpbXBvcnQgeyBPYmplY3REYXRhIH0gZnJvbSBcIi4vcmVzb3VyY2VzXCI7XG5pbXBvcnQgeyBFbnRpdHlNYW5hZ2VyIH0gZnJvbSBcIi4vZW50aXR5TWFuYWdlclwiO1xuY2xhc3MgRW50aXR5IHtcbiAgICB4OiBudW1iZXJcbiAgICB5OiBudW1iZXJcbiAgICB6OiBudW1iZXJcbiAgICByZXNvdXJjZTpPYmplY3REYXRhXG5cbiAgICBjb25zdHJ1Y3Rvcih4Om51bWJlcix5Om51bWJlcix6Om51bWJlcixyZXNvdXJjZTpPYmplY3REYXRhKSB7XG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgdGhpcy55ID0geVxuICAgICAgICB0aGlzLnogPSB6XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByZXNvdXJjZVxuICAgICAgICBcbiAgICAgICAgRW50aXR5TWFuYWdlci5hZGRFbnRpdHkodGhpcylcbiAgICB9XG59XG5cbmV4cG9ydCB7RW50aXR5fSIsImltcG9ydCB7RW50aXR5fSBmcm9tIFwiLi9lbnRpdHlcIlxuaW1wb3J0IHsgUmVzb3VyY2VzIH0gZnJvbSBcIi4vcmVzb3VyY2VzXCI7XG5pbXBvcnQgeyBWZXJ0ZXhCdWZmZXIsIEluZGV4QnVmZmVyIH0gZnJvbSBcIi4vYnVmZmVyc1wiO1xuaW1wb3J0IHsgSW5wdXRzIH0gZnJvbSBcIi4uL2lucHV0c1wiO1xuY2xhc3MgRW50aXR5TWFuYWdlciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgZW50aXRpZXM6QXJyYXk8RW50aXR5PiA9IFtdO1xuICAgIHN0YXRpYyByZXNvdXJjZXM6UmVzb3VyY2VzXG4gICAgc3RhdGljIGlucHV0czpJbnB1dHNcblxuICAgIHN0YXRpYyBnZXRNb2RlbChuYW1lOnN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXNvdXJjZXMub2JqZWN0c1tuYW1lXTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkRW50aXR5KGU6RW50aXR5KSB7XG4gICAgICAgIHRoaXMuZW50aXRpZXMucHVzaChlKVxuICAgIH1cblxuICAgIHN0YXRpYyBlbnRpdHlCdWZmZXJzKGdsOldlYkdMUmVuZGVyaW5nQ29udGV4dCkge1xuICAgICAgICBsZXQgdmVydDpBcnJheTxudW1iZXI+ID0gW11cblxuICAgICAgICBsZXQgaW50OkFycmF5PG51bWJlcj4gPSBbXVxuXG4gICAgICAgIHRoaXMuZW50aXRpZXMuZm9yRWFjaCggKGUsaSkgPT4ge1xuICAgICAgICAgICAgbGV0IHZlcnRpY2VzID0gdGhpcy5tdWx0VmVydHMoZS5yZXNvdXJjZS52ZXJ0aWNlcyxlLngsZS55LGUueilcblxuICAgICAgICAgICAgbGV0IGluZGljZXMgPSBlLnJlc291cmNlLmluZGljZXMubWFwKG4gPT4gbisoMjQqaSkpXG5cbiAgICAgICAgICAgIHZlcnQucHVzaCguLi52ZXJ0aWNlcylcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaW50LnB1c2goLi4uaW5kaWNlcylcbiAgICAgICAgfSlcbiAgICAgICAgXG5cbiAgICAgICAgcmV0dXJuIFtuZXcgVmVydGV4QnVmZmVyKGdsLHZlcnQpLG5ldyBJbmRleEJ1ZmZlcihnbCxpbnQpXVxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIG11bHRWZXJ0cyh2ZXJ0aWNlc1JlZix4LHkseik6QXJyYXk8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHZlcnRpY2VzID0gWy4uLnZlcnRpY2VzUmVmXVxuICAgICAgICBjb25zdCBzaXplID0gNlxuICAgICAgICBjb25zdCByb3dzID0gMjRcblxuICAgICAgICBmb3IodmFyIHIgPTA7cjxyb3dzO3IgKyspIHtcbiAgICAgICAgICAgIGZvcih2YXIgeHl6PTA7eHl6PDM7eHl6Kyspe1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZVxuICAgICAgICAgICAgICAgIGlmKHh5eiA9PSAwKSB2YWx1ZSA9IHhcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHh5eiA9PSAxKSB2YWx1ZSA9IHlcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHh5eiA9PSAyKSB2YWx1ZSA9IHpcbiAgICAgICAgICAgICAgICB2ZXJ0aWNlc1tyKnNpemUreHl6XSArPSB2YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2ZXJ0aWNlc1xuICAgIH1cbn1cblxuZXhwb3J0IHtFbnRpdHlNYW5hZ2VyfSIsImltcG9ydCB7IFJlc291cmNlcyB9IGZyb20gXCIuL3Jlc291cmNlc1wiO1xuaW1wb3J0IHsgZ2xNYXRyaXgsIG1hdDQgfSBmcm9tIFwiZ2wtbWF0cml4XCI7XG5pbXBvcnQgeyBTaGFkZXIgfSBmcm9tIFwiLi9zaGFkZXJcIjtcbmltcG9ydCB7IEluZGV4QnVmZmVyLCBWZXJ0ZXhCdWZmZXIsIFZlcnRleEJ1ZmZlckVsZW1lbnQsIFZlcnRleEJ1ZmZlckxheW91dCB9IGZyb20gXCIuL2J1ZmZlcnNcIjtcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSBcIi4vcmVuZGVyZXJcIjtcbmltcG9ydCB7IEVudGl0eU1hbmFnZXIgfSBmcm9tIFwiLi9lbnRpdHlNYW5hZ2VyXCI7XG5pbXBvcnQgeyBJbnB1dHMgfSBmcm9tIFwiLi4vaW5wdXRzXCI7XG5cbmNsYXNzIEdsRW5naW5lIHtcblxuICAgIHByaXZhdGUgZ2w6V2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gICAgcHJpdmF0ZSBjYW52YXM6SFRNTENhbnZhc0VsZW1lbnRcbiAgICBwcml2YXRlIHByb2pNYXRyaXg6bWF0NFxuICAgIHByaXZhdGUgc2hhZGVyOlNoYWRlclxuICAgIHByaXZhdGUgcmVuZGVyZXI6UmVuZGVyZXJcbiAgICBwcml2YXRlIG1vZGVsTWF0cml4Om1hdDRcbiAgICBwcml2YXRlIGliOkluZGV4QnVmZmVyXG4gICAgcHJpdmF0ZSB2YjpWZXJ0ZXhCdWZmZXJcbiAgICBwcml2YXRlIHZibDpWZXJ0ZXhCdWZmZXJMYXlvdXRcbiAgICBwcml2YXRlIHZpZXdNYXRyaXg6bWF0NDtcblxuICAgIGNvbnN0cnVjdG9yKGdsOldlYkdMUmVuZGVyaW5nQ29udGV4dCwgXG4gICAgICAgIGNhbnZhczpIVE1MQ2FudmFzRWxlbWVudCwgXG4gICAgICAgIHJlc291cmNlczpSZXNvdXJjZXMsXG4gICAgICAgIGlucHV0czpJbnB1dHMpIHtcbiAgICAgICAgICAgIHRoaXMuZ2wgPSBnbFxuICAgICAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgICAgICAgICAgIHRoaXMuc2hhZGVyID0gbmV3IFNoYWRlcihnbCxyZXNvdXJjZXMuc2hhZGVycylcbiAgICAgICAgICAgIHRoaXMucHJvak1hdHJpeCA9IG1hdDQuY3JlYXRlKClcbiAgICAgICAgICAgIHRoaXMuYWRkT25SZXNpemUoKVxuICAgICAgICAgICAgdGhpcy5lbmFibGVGcm9udEZhY2VSZW5kZXJpbmcoZ2wpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEVudGl0eU1hbmFnZXIucmVzb3VyY2VzID0gcmVzb3VyY2VzXG4gICAgICAgICAgICBFbnRpdHlNYW5hZ2VyLmlucHV0cyA9IGlucHV0c1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgYnVmZmVycyA9IEVudGl0eU1hbmFnZXIuZW50aXR5QnVmZmVycyhnbClcblxuICAgICAgICAgICAgdGhpcy52YiA9IGJ1ZmZlcnNbMF0gYXMgVmVydGV4QnVmZmVyXG5cbiAgICAgICAgICAgIHRoaXMuaWIgPSBidWZmZXJzWzFdIGFzIEluZGV4QnVmZmVyXG5cbiAgICAgICAgICAgIGNvbnN0IHZiRWxlbXMgPSBbXG4gICAgICAgICAgICAgICAgbmV3IFZlcnRleEJ1ZmZlckVsZW1lbnQoMyxcInZlcnRQb3NpdGlvblwiKSxcbiAgICAgICAgICAgICAgICBuZXcgVmVydGV4QnVmZmVyRWxlbWVudCgzLFwidmVydENvbG9yXCIpXG4gICAgICAgICAgICBdXG5cbiAgICAgICAgICAgIHRoaXMudmJsID0gbmV3IFZlcnRleEJ1ZmZlckxheW91dCh2YkVsZW1zLGdsKVxuXG4gICAgICAgICAgICB0aGlzLnZibC5iaW5kKHRoaXMuc2hhZGVyKVxuXG4gICAgICAgICAgICB0aGlzLm1vZGVsTWF0cml4ID0gbWF0NC5jcmVhdGUoKVxuICAgICAgICAgICAgdGhpcy52aWV3TWF0cml4ID0gbWF0NC5jcmVhdGUoKVxuICAgICAgICAgICAgdGhpcy5wcm9qTWF0cml4ID0gbWF0NC5jcmVhdGUoKVxuXG4gICAgICAgICAgICBtYXQ0LmlkZW50aXR5KHRoaXMubW9kZWxNYXRyaXgpXG4gICAgICAgICAgICBtYXQ0Lmxvb2tBdCh0aGlzLnZpZXdNYXRyaXgsIFswLCAwLCA0MF0sIFswLCAwLCAwXSwgWzAsIDEsIDBdKVxuICAgICAgICAgICAgbWF0NC5wZXJzcGVjdGl2ZShcbiAgICAgICAgICAgICAgICB0aGlzLnByb2pNYXRyaXgsXG4gICAgICAgICAgICAgICAgZ2xNYXRyaXgudG9SYWRpYW4oNDUpLFxuICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCAvIGNhbnZhcy5oZWlnaHQsXG4gICAgICAgICAgICAgICAgMC4xLFxuICAgICAgICAgICAgICAgIDEwMDApXG5cbiAgICAgICAgICAgIHRoaXMuc2hhZGVyLmJpbmQoKVxuICAgICAgICAgICAgdGhpcy5zaGFkZXIuc2V0VW5pZm9ybU1hdDRmdihcIm1Nb2RlbFwiLHRoaXMubW9kZWxNYXRyaXgpXG4gICAgICAgICAgICB0aGlzLnNoYWRlci5zZXRVbmlmb3JtTWF0NGZ2KFwibVZpZXdcIix0aGlzLnZpZXdNYXRyaXgpXG4gICAgICAgICAgICB0aGlzLnNoYWRlci5zZXRVbmlmb3JtTWF0NGZ2KFwibVByb2pcIix0aGlzLnByb2pNYXRyaXgpXG5cbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIgPSAgbmV3IFJlbmRlcmVyKGdsKVxuICAgICAgICAgICAgdGhpcy5zaGFkZXIudW5CaW5kKClcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZE9uUmVzaXplKCkge1xuICAgICAgICB3aW5kb3cub25yZXNpemUgPSAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VDYW52YXNTaXplKHRoaXMuZ2wsdGhpcy5jYW52YXMsd2luZG93LmlubmVyV2lkdGgsd2luZG93LmlubmVySGVpZ2h0KVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhbmdlQ2FudmFzU2l6ZSh0aGlzLmdsLCB0aGlzLmNhbnZhcywgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcbiAgICB9XG5cblxuICAgIHByaXZhdGUgY2hhbmdlQ2FudmFzU2l6ZShnbCwgY2FudmFzLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHRcbiAgICBcbiAgICAgICAgZ2wudmlld3BvcnQoMCwgMCwgd2lkdGgsIGhlaWdodClcbiAgICBcbiAgICAgICAgdGhpcy5wcm9qTWF0cml4ID0gbWF0NC5jcmVhdGUoKVxuICAgIFxuICAgICAgICBtYXQ0LnBlcnNwZWN0aXZlKFxuICAgICAgICAgICAgdGhpcy5wcm9qTWF0cml4LFxuICAgICAgICAgICAgZ2xNYXRyaXgudG9SYWRpYW4oNDUpLFxuICAgICAgICAgICAgd2lkdGggLyBoZWlnaHQsXG4gICAgICAgICAgICAwLjEsXG4gICAgICAgICAgICAxMDAwKVxuICAgICAgICAgICAgXG4gICAgICAgIHRoaXMuc2hhZGVyLmJpbmQoKVxuICAgICAgICB0aGlzLnNoYWRlci5zZXRVbmlmb3JtTWF0NGZ2KFwibVByb2pcIix0aGlzLnByb2pNYXRyaXgpXG4gICAgfVxuXG4gICAgb25GcmFtZShmOihtb2RlbE1hdHJpeCk9PnZvaWQpIHtcblxuICAgICAgICBsZXQgdCA9IHRoaXNcblxuICAgICAgICBsZXQgbG9vcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZih0Lm1vZGVsTWF0cml4KVxuICAgICAgICAgICAgdC5zaGFkZXIuYmluZCgpXG4gICAgICAgICAgICB0LnNoYWRlci5zZXRVbmlmb3JtTWF0NGZ2KFwibU1vZGVsXCIsdC5tb2RlbE1hdHJpeClcblxuICAgICAgICAgICAgdC5yZW5kZXJlci5jbGVhcigpICAgICAgICBcbiAgICAgICAgICAgIHZhciBidWZmZXJzID0gRW50aXR5TWFuYWdlci5lbnRpdHlCdWZmZXJzKHQuZ2wpXG4gICAgICAgICAgICB0LnJlbmRlcmVyLmRyYXcoYnVmZmVyc1swXSBhcyBWZXJ0ZXhCdWZmZXIsYnVmZmVyc1sxXSBhcyBJbmRleEJ1ZmZlcix0LnZibCx0LnNoYWRlcilcblxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICAgICAgICB9XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKVxuICAgIH1cblxuICAgIHByaXZhdGUgZW5hYmxlRnJvbnRGYWNlUmVuZGVyaW5nKGdsOldlYkdMUmVuZGVyaW5nQ29udGV4dCkge1xuICAgICAgICBnbC5lbmFibGUoZ2wuREVQVEhfVEVTVCk7XG4gICAgICAgIGdsLmVuYWJsZShnbC5DVUxMX0ZBQ0UpO1xuICAgICAgICBnbC5mcm9udEZhY2UoZ2wuQ0NXKTtcbiAgICAgICAgZ2wuY3VsbEZhY2UoZ2wuQkFDSyk7XG4gICAgfVxufVxuXG5leHBvcnQge0dsRW5naW5lfSIsImltcG9ydCB7IGxvYWRSZXNvdXJjZXNQcm9taXNlIH0gZnJvbSBcIi4vcmVzb3VyY2VzXCJcbmltcG9ydCB7Z2xBcHB9IGZyb20gXCIuLi9nbEFwcGxpY2F0aW9uXCJcbmltcG9ydCB7YXNzaWduSW5wdXRIYW5kbGVyc30gZnJvbSBcIi4uL2lucHV0c1wiXG5cbmZ1bmN0aW9uIGdsV2luZG93KGNhbnZhczpIVE1MQ2FudmFzRWxlbWVudCkge1xuXG4gICAgY29uc3QgcmVzb3VyY2VzUHJvbWlzZSA9IGxvYWRSZXNvdXJjZXNQcm9taXNlKClcblxuICAgIGZ1bmN0aW9uIGdldEdMKCkge1xuICAgICAgICBsZXQgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsXCIpXG4gICAgICAgIGlmICghZ2wpIHtcbiAgICAgICAgICAgIGdsID0gY2FudmFzLmdldENvbnRleHQoXCJleHBlcmltZW50YWwtd2ViZ2xcIilcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnbDtcbiAgICB9XG5cbiAgICBjb25zdCBnbCA9IGdldEdMKClcblxuICAgIGxldCBpbnB1dHMgPSBhc3NpZ25JbnB1dEhhbmRsZXJzKGNhbnZhcylcblxuICAgIHJlc291cmNlc1Byb21pc2UudGhlbihyZXNvdXJjZXMgPT4ge1xuICAgICAgICBnbEFwcChnbCxjYW52YXMsaW5wdXRzLHJlc291cmNlcylcbiAgICB9KVxuXG59XG5cbmV4cG9ydCB7IGdsV2luZG93IH0iLCJpbXBvcnQge1ZlcnRleEJ1ZmZlcixJbmRleEJ1ZmZlciwgVmVydGV4QnVmZmVyTGF5b3V0fSBmcm9tIFwiLi9idWZmZXJzXCJcbmltcG9ydCB7U2hhZGVyfSBmcm9tIFwiLi9zaGFkZXJcIlxuY2xhc3MgUmVuZGVyZXIge1xuICAgIHByaXZhdGUgZ2w6V2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gICAgY29uc3RydWN0b3IoZ2w6V2ViR0xSZW5kZXJpbmdDb250ZXh0KSB7XG4gICAgICAgIHRoaXMuZ2wgPSBnbFxuICAgIH1cblxuICAgIGRyYXcodmI6VmVydGV4QnVmZmVyLGliOkluZGV4QnVmZmVyLHZibDpWZXJ0ZXhCdWZmZXJMYXlvdXQsc2hhZGVyOlNoYWRlcikge1xuICAgICAgICBzaGFkZXIuYmluZCgpXG4gICAgICAgIHZiLmJpbmQoKVxuICAgICAgICBpYi5iaW5kKClcbiAgICAgICAgdmJsLmJpbmQoc2hhZGVyKVxuXG4gICAgICAgIHRoaXMuZ2wuZHJhd0VsZW1lbnRzKHRoaXMuZ2wuVFJJQU5HTEVTLGliLnNpemUsdGhpcy5nbC5VTlNJR05FRF9TSE9SVCwwKTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgY29uc3QgZ2wgPSB0aGlzLmdsXG4gICAgICAgIHRoaXMuZ2wuY2xlYXJDb2xvcigwLjc1LCAwLjg1LCAwLjgsIDEuMClcbiAgICAgICAgdGhpcy5nbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUIHwgZ2wuREVQVEhfQlVGRkVSX0JJVCB8IGdsLlNURU5DSUxfQlVGRkVSX0JJVClcbiAgICB9XG59XG5cbmV4cG9ydCB7UmVuZGVyZXJ9IiwiaW50ZXJmYWNlIE9iamVjdERhdGEge1xuICAgIHZlcnRpY2VzOkFycmF5PG51bWJlcj5cbiAgICBpbmRpY2VzOkFycmF5PG51bWJlcj5cbn1cblxuaW50ZXJmYWNlIE9iamVjdE1ldGFEYXRhIHtcbiAgICBba2V5OiBzdHJpbmddOk9iamVjdERhdGFcbn1cblxuY2xhc3MgUmVzb3VyY2VzIHtcbiAgICBzaGFkZXJzOlNoYWRlcnM7XG4gICAgb2JqZWN0czpPYmplY3RNZXRhRGF0YTtcbiAgICBjb25zdHJ1Y3RvcihzaGFkZXJzOlNoYWRlcnMsb2JqZWN0czpPYmplY3RNZXRhRGF0YSkge1xuICAgICAgICB0aGlzLnNoYWRlcnMgPSBzaGFkZXJzXG4gICAgICAgIHRoaXMub2JqZWN0cyA9IG9iamVjdHNcbiAgICB9XG59XG5cbmNsYXNzIFNoYWRlcnMge1xuICAgIHZlcnRleFNoYWRlcjpzdHJpbmc7XG4gICAgZnJhZ21lbnRTaGFkZXI6c3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHZlcnRleFNoYWRlcixmcmFnbWVudFNoYWRlcikge1xuICAgICAgICB0aGlzLnZlcnRleFNoYWRlciA9IHZlcnRleFNoYWRlclxuICAgICAgICB0aGlzLmZyYWdtZW50U2hhZGVyID0gZnJhZ21lbnRTaGFkZXJcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRSZXNvdXJjZXNQcm9taXNlKCk6UHJvbWlzZTxSZXNvdXJjZXM+IHtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIHhocih1cmwpOlByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIFxuICAgICAgICBsZXQgcHJvbWlzZTpQcm9taXNlPHN0cmluZz4gPSBuZXcgUHJvbWlzZSggKHJlc29sdmUscmVqZWN0KSA9PntcbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoeGhyLnJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgICAgICAgICAgICAgICBpZih4aHIuc3RhdHVzID09IDIwMCkgcmVzb2x2ZSh4aHIucmVzcG9uc2VUZXh0KVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHJlamVjdCh4aHIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIHhoci5vcGVuKFwiR0VUXCIsdXJsKVxuICAgICAgICBcbiAgICAgICAgICAgIHhoci5zZW5kKClcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIHJldHVybiBhd2FpdCBwcm9taXNlXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHNoYWRlcnM6UHJvbWlzZTxTaGFkZXJzPiA9IHhocihcInNoYWRlcnNcIikudGhlbihzaGFkZXJzID0+IHtcbiAgICAgICAgbGV0IHNoYWRlckFycmF5ID0gc2hhZGVycy5zcGxpdChcIiNzaGFkZXJcIilcbiAgICAgICAgc2hhZGVyQXJyYXkuc3BsaWNlKDAsMSk7XG4gICAgICAgIHJldHVybiBuZXcgU2hhZGVycyhzaGFkZXJBcnJheVswXSxzaGFkZXJBcnJheVsxXSlcbiAgICB9KVxuXG4gICAgY29uc3Qgb2JqZWN0czpQcm9taXNlPE9iamVjdE1ldGFEYXRhPiA9IHhocihcIm9iamVjdHNcIikudGhlbihzdHIgPT4gSlNPTi5wYXJzZShzdHIpKVxuXG4gICAgIGxldCByZXNvdXJjZXMgPSBQcm9taXNlLmFsbChbc2hhZGVycyxvYmplY3RzXSkudGhlbihyZXN1bHRzID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXNvdXJjZXMoXG4gICAgICAgICAgICByZXN1bHRzWzBdLFxuICAgICAgICAgICAgcmVzdWx0c1sxXVxuICAgICAgICApXG4gICAgfSlcblxuICAgIHJldHVybiByZXNvdXJjZXNcbiAgICBcbn1cblxuZXhwb3J0IHtcbiAgICBsb2FkUmVzb3VyY2VzUHJvbWlzZSxcbiAgICBSZXNvdXJjZXMsXG4gICAgU2hhZGVycyxcbiAgICBPYmplY3RNZXRhRGF0YSxcbiAgICBPYmplY3REYXRhXG59ICIsImltcG9ydCB7bWF0NH0gZnJvbSBcImdsLW1hdHJpeFwiXG5pbXBvcnQge1NoYWRlcnN9IGZyb20gXCIuL3Jlc291cmNlc1wiXG5cbmNsYXNzIFNoYWRlciB7XG5cbiAgICBwcml2YXRlIHVuaWZvcm1Mb2NhdGlvbnMgPSB7fVxuICAgIHByaXZhdGUgZ2w6V2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gICAgcHJvZ3JhbTpXZWJHTFByb2dyYW07XG5cbiAgICBjb25zdHJ1Y3RvcihnbDpXZWJHTFJlbmRlcmluZ0NvbnRleHQsc2hhZGVyc1Jlc291cmNlOlNoYWRlcnMpIHtcbiAgICAgICAgdGhpcy5nbCA9IGdsO1xuICAgICAgICB0aGlzLmNyZWF0ZVNoYWRlcihzaGFkZXJzUmVzb3VyY2UpXG4gICAgfVxuXG4gICAgYmluZCgpIHtcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbSlcbiAgICB9XG5cbiAgICB1bkJpbmQoKSB7XG4gICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbShudWxsKVxuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZ2wuZGVsZXRlUHJvZ3JhbSh0aGlzLnByb2dyYW0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRVbmlmb3JtTG9jYXRpb24obmFtZTpzdHJpbmcpIHtcbiAgICAgICAgaWYodGhpcy51bmlmb3JtTG9jYXRpb25zW25hbWVdICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9uc1tuYW1lXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGxvY2F0aW9uID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9ncmFtLG5hbWUpXG4gICAgICAgICAgICB0aGlzLnVuaWZvcm1Mb2NhdGlvbnNbbmFtZV0gPSBsb2NhdGlvblxuICAgICAgICAgICAgcmV0dXJuIGxvY2F0aW9uXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRVbmlmb3JtTWF0NGZ2KG5hbWU6c3RyaW5nLG1hdHJpeDptYXQ0KSB7XG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybU1hdHJpeDRmdih0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbihuYW1lKSxmYWxzZSxtYXRyaXgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVTaGFkZXIoc2hhZGVyc1Jlc291cmNlOlNoYWRlcnMpIHtcbiAgICAgICAgY29uc3QgZ2wgPSB0aGlzLmdsXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcblxuICAgICAgICB2YXIgdmVydGV4U2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKGdsLlZFUlRFWF9TSEFERVIpXG4gICAgICAgIHZhciBmcmFnbWVudFNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcihnbC5GUkFHTUVOVF9TSEFERVIpXG5cbiAgICAgICAgZ2wuc2hhZGVyU291cmNlKHZlcnRleFNoYWRlciwgc2hhZGVyc1Jlc291cmNlLnZlcnRleFNoYWRlcilcbiAgICAgICAgZ2wuc2hhZGVyU291cmNlKGZyYWdtZW50U2hhZGVyLCBzaGFkZXJzUmVzb3VyY2UuZnJhZ21lbnRTaGFkZXIpXG5cbiAgICAgICAgZ2wuY29tcGlsZVNoYWRlcih2ZXJ0ZXhTaGFkZXIpXG4gICAgICAgIGdsLmNvbXBpbGVTaGFkZXIoZnJhZ21lbnRTaGFkZXIpXG5cbiAgICAgICAgZ2wuYXR0YWNoU2hhZGVyKHRoaXMucHJvZ3JhbSwgdmVydGV4U2hhZGVyKVxuICAgICAgICBnbC5hdHRhY2hTaGFkZXIodGhpcy5wcm9ncmFtLCBmcmFnbWVudFNoYWRlcilcblxuICAgICAgICBnbC5saW5rUHJvZ3JhbSh0aGlzLnByb2dyYW0pXG5cbiAgICAgICAgZ2wudmFsaWRhdGVQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XG5cbiAgICAgICAgZ2wuZGVsZXRlU2hhZGVyKHZlcnRleFNoYWRlcilcbiAgICAgICAgZ2wuZGVsZXRlU2hhZGVyKGZyYWdtZW50U2hhZGVyKVxuICAgIH1cbn1cblxuZXhwb3J0IHtTaGFkZXJ9IiwiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSBcIi4uL2VuZ2luZS9lbnRpdHlcIjtcbmltcG9ydCB7IE9iamVjdERhdGEgfSBmcm9tIFwiLi4vZW5naW5lL3Jlc291cmNlc1wiO1xuaW1wb3J0IHsgRW50aXR5TWFuYWdlciB9IGZyb20gXCIuLi9lbmdpbmUvZW50aXR5TWFuYWdlclwiO1xuXG5jbGFzcyBCb3ggZXh0ZW5kcyBFbnRpdHkge1xuXG4gICAgY29uc3RydWN0b3IoeCx5LHopIHtcbiAgICAgICAgc3VwZXIoeCx5LHosRW50aXR5TWFuYWdlci5nZXRNb2RlbChcIkJveFwiKSlcbiAgICB9XG59XG5cbmV4cG9ydCB7IEJveCB9IiwiaW1wb3J0IHsgIG1hdDQsIHF1YXQgfSBmcm9tIFwiZ2wtbWF0cml4XCI7XG5pbXBvcnQgeyBSZXNvdXJjZXMgfSBmcm9tIFwiLi9lbmdpbmUvcmVzb3VyY2VzXCI7XG5pbXBvcnQge0lucHV0c30gZnJvbSBcIi4vaW5wdXRzXCJcbmltcG9ydCB7IEdsRW5naW5lIH0gZnJvbSBcIi4vZW5naW5lL2dsRW5naW5lXCI7XG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiLi9lbnRpdGllcy9ib3hcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuXG5mdW5jdGlvbiBnbEFwcCggZ2w6V2ViR0xSZW5kZXJpbmdDb250ZXh0LCBcbiAgICAgICAgICAgICAgICBjYW52YXM6SFRNTENhbnZhc0VsZW1lbnQsIFxuICAgICAgICAgICAgICAgIGlucHV0czpJbnB1dHMsIFxuICAgICAgICAgICAgICAgIHJlc291cmNlczpSZXNvdXJjZXMpIHtcblxuICAgIGxldCBlbmdpbmUgPSBuZXcgR2xFbmdpbmUoZ2wsY2FudmFzLHJlc291cmNlcyxpbnB1dHMpXG5cbiAgICB2YXIgemFuZ2xlID0gMFxuICAgIHZhciB5YW5nbGUgPSAwXG4gICAgdmFyIHhhbmdsZSA9IDBcblxuICAgIHZhciBpZGVudGl0eU1hdHJpeCA9IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuICAgIG1hdDQuaWRlbnRpdHkoaWRlbnRpdHlNYXRyaXggYXMgbWF0NCk7XG5cbiAgICB2YXIgb3JpZW50YXRpb24gPSBxdWF0LmNyZWF0ZSgpXG5cbiAgICB2YXIgcXVhdEFuZ2xlcyA9IHF1YXQuY3JlYXRlKClcbiAgICBxdWF0LmZyb21FdWxlcihxdWF0QW5nbGVzLCB4YW5nbGUsIHlhbmdsZSwgemFuZ2xlKVxuXG4gICAgXG5cbiAgICB2YXIgbWFwID0gW1xuICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMF0sXG4gICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwXSxcbiAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDFdXG4gICAgXVxuICAgIFxuICAgIHZhciBwbGF5ZXIgPSBuZXcgUGxheWVyKDIsMCwwLG1hcClcblxuICAgIG1hcC5mb3JFYWNoKChyb3cscm93TnVtKSA9PiB7XG4gICAgICAgIHJvdy5mb3JFYWNoKCAodGlsZSx0aWxlTnVtKSA9PiB7XG4gICAgICAgICAgICBpZih0aWxlID09IDEpIHtcbiAgICAgICAgICAgICAgICBuZXcgQm94KHRpbGVOdW0tNCwtcm93TnVtLDApXG4gICAgICAgICAgICB9IGVsc2UgaWYodGlsZSA9PSAwKSB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgZW5naW5lLm9uRnJhbWUoZnVuY3Rpb24gKG1vZGVsTWF0cml4KSB7XG4gICAgICAgXG4gICAgICAgIHBsYXllci5oYW5kbGVNb3ZlbWVudCgpXG4gICAgICAgIGxldCBhY2MgPSAwLjFcbiAgICAgICAgbGV0IGZyaWN0aW9uID0gMC45NVxuICAgICAgICBpZiAoIShpbnB1dHMuVyB8fCBpbnB1dHMuUyB8fCBpbnB1dHMuQSB8fCBpbnB1dHMuRCB8fCBpbnB1dHMuUSB8fCBpbnB1dHMuRSkpIHtcbiAgICAgICAgICAgIHhhbmdsZSAqPSBmcmljdGlvblxuICAgICAgICAgICAgeWFuZ2xlICo9IGZyaWN0aW9uXG4gICAgICAgICAgICB6YW5nbGUgKj0gZnJpY3Rpb25cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbnB1dHMuVykge1xuICAgICAgICAgICAgeGFuZ2xlICs9IGFjY1xuXG4gICAgICAgIH0gZWxzZSBpZiAoaW5wdXRzLlMpIHtcbiAgICAgICAgICAgIHhhbmdsZSArPSAtYWNjXG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmIChpbnB1dHMuQSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB5YW5nbGUgKz0gLWFjY1xuXG4gICAgICAgIH0gZWxzZSBpZiAoaW5wdXRzLkQpIHtcbiAgICAgICAgICAgIHlhbmdsZSArPSBhY2NcblxuICAgICAgICB9XG4gICAgICAgIGlmIChpbnB1dHMuUSkge1xuICAgICAgICAgICAgemFuZ2xlICs9IGFjY1xuICAgICAgICB9IGVsc2UgaWYgKGlucHV0cy5FKSB7XG4gICAgICAgICAgICB6YW5nbGUgKz0gLWFjY1xuICAgICAgICB9XG5cbiAgICAgICAgcXVhdC5mcm9tRXVsZXIob3JpZW50YXRpb24sIHhhbmdsZSwgeWFuZ2xlLCB6YW5nbGUpXG5cbiAgICAgICAgcXVhdC5tdWwocXVhdEFuZ2xlcywgb3JpZW50YXRpb24sIHF1YXRBbmdsZXMpXG5cbiAgICAgICAgbWF0NC5mcm9tUXVhdChtb2RlbE1hdHJpeCwgcXVhdEFuZ2xlcylcbiAgICB9KVxuXG59XG5cbmV4cG9ydCB7IGdsQXBwIH07XG4iLCJpbXBvcnQge2dsV2luZG93fSBmcm9tIFwiLi9lbmdpbmUvZ2xXaW5kb3dcIlxuXG5jb25zdCBzb2NrZXQgPSBuZXcgV2ViU29ja2V0KFwid3M6Ly9sb2NhbGhvc3Q6MzAwMFwiKVxuXG5zb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwgKGUpID0+IHtcbiAgc29ja2V0LnNlbmQoXCJIZXJlIEkgYW1cIilcbn0pXG5cbnNvY2tldC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLChlOk1lc3NhZ2VFdmVudCkgPT4ge1xuICBpZihlLmRhdGEgPT09IFwicmVmcmVzaFwiKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cbn0pXG5cbmxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpXG5cbmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5hcHBlbmRDaGlsZChjYW52YXMpXG5cbmdsV2luZG93KGNhbnZhcykiLCJjb25zdCBrZXlDb2RlcyA9IHtcbiAgICBcIjM4XCI6XCJVUFwiLFxuICAgIFwiNDBcIjpcIkRPV05cIixcbiAgICBcIjM3XCI6XCJMRUZUXCIsXG4gICAgXCIzOVwiOlwiUklHSFRcIixcbiAgICBcIjgxXCI6XCJRXCIsXG4gICAgXCI2OVwiOlwiRVwiLFxuICAgIFwiODdcIjpcIldcIixcbiAgICBcIjgzXCI6XCJTXCIsXG4gICAgXCI2NVwiOlwiQVwiLFxuICAgIFwiNjhcIjpcIkRcIlxufVxuXG5jbGFzcyBJbnB1dHMge1xuICAgIFVQID0gZmFsc2VcbiAgICBET1dOID0gZmFsc2VcbiAgICBMRUZUID0gZmFsc2VcbiAgICBSSUdIVCA9IGZhbHNlXG4gICAgUSA9IGZhbHNlXG4gICAgRSA9IGZhbHNlXG4gICAgVyA9IGZhbHNlXG4gICAgQSA9IGZhbHNlXG4gICAgUyA9IGZhbHNlXG4gICAgRCA9IGZhbHNlXG59XG5cbmZ1bmN0aW9uIGFzc2lnbklucHV0SGFuZGxlcnMoY2FudmFzOkhUTUxDYW52YXNFbGVtZW50KTpJbnB1dHMge1xuXG4gICAgdmFyIGlucHV0czpJbnB1dHMgPSBuZXcgSW5wdXRzKClcblxuICAgIGZ1bmN0aW9uIGtleUV2ZW50KGV2ZW50OktleWJvYXJkRXZlbnQscmVzdWx0OkJvb2xlYW4pIHtcbiAgICAgICAgY29uc3Qga2V5ID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC53aGljaDtcbiAgICAgICAgY29uc3Qga2V5TmFtZSA9IGtleUNvZGVzW2tleV1cbiAgICAgICAgaW5wdXRzW2tleU5hbWVdID0gcmVzdWx0XG4gICAgfVxuXG4gICAgd2luZG93Lm9ua2V5dXAgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBrZXlFdmVudChlLGZhbHNlKVxuICAgIH1cblxuICAgIHdpbmRvdy5vbmtleWRvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBrZXlFdmVudChlLHRydWUpXG4gICAgfVxuXG4gICAgd2luZG93Lm9udG91Y2hzdGFydCA9IChlKSA9PiB7XG4gICAgICAgIGNhbnZhcy5yZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgICBsZXQgeCA9IGUudG91Y2hlc1swXS5jbGllbnRYXG4gICAgICAgIGxldCB5ID0gZS50b3VjaGVzWzBdLmNsaWVudFlcbiAgICAgICAgaWYoeCA+IHdpbmRvdy5pbm5lcldpZHRoLzIrd2luZG93LmlubmVyV2lkdGgvMTAgKSBpbnB1dHMuUklHSFQgPSB0cnVlXG4gICAgICAgIGVsc2UgaWYoeCA8PSB3aW5kb3cuaW5uZXJXaWR0aC8yLXdpbmRvdy5pbm5lcldpZHRoLzEwICkgaW5wdXRzLkxFRlQgPSB0cnVlXG4gICAgICAgIGlmKHkgPiB3aW5kb3cuaW5uZXJIZWlnaHQvMit3aW5kb3cuaW5uZXJXaWR0aC8xMCAgKSBpbnB1dHMuRE9XTiA9IHRydWVcbiAgICAgICAgZWxzZSBpZih5IDw9IHdpbmRvdy5pbm5lckhlaWdodC8yLXdpbmRvdy5pbm5lcldpZHRoLzEwICkgaW5wdXRzLlJJR0hUID0gdHJ1ZVxuICAgIH1cblxuICAgIHdpbmRvdy5vbnRvdWNoZW5kID0gKGUpID0+IHtcbiAgICAgICAgaW5wdXRzID0gbmV3IElucHV0cygpXG4gICAgfVxuXG4gICAgcmV0dXJuIGlucHV0cztcbn1cblxuZXhwb3J0IHsgYXNzaWduSW5wdXRIYW5kbGVycyAsIElucHV0cyB9IiwiaW1wb3J0IHsgQm94IH0gZnJvbSBcIi4vZW50aXRpZXMvYm94XCI7XG5pbXBvcnQgeyBFbnRpdHlNYW5hZ2VyIH0gZnJvbSBcIi4vZW5naW5lL2VudGl0eU1hbmFnZXJcIjtcblxuY2xhc3MgUGxheWVyIGV4dGVuZHMgQm94IHtcbiAgICBwcml2YXRlIGlucHV0cyA9IEVudGl0eU1hbmFnZXIuaW5wdXRzXG4gICAgcHJpdmF0ZSB5U3BlZWQgPSAwO1xuICAgIHByaXZhdGUgZ3Jhdml0eSA9IDAuMDU7XG4gICAgcHJpdmF0ZSBncm91bmRlZCA9IHRydWU7XG4gICAgcHJpdmF0ZSBzcGVlZCA9IDAuMjU7XG4gICAgcHJpdmF0ZSBzaXplWCA9IDE7XG4gICAgcHJpdmF0ZSBzaXplWSA9IDE7XG4gICAgcHJpdmF0ZSBtYXA7XG4gICAgY29uc3RydWN0b3IoeCx5LHosbWFwKSB7XG4gICAgICAgIHN1cGVyKHgseSx6KVxuICAgICAgICB0aGlzLm1hcCA9IG1hcFxuICAgIH1cblxuICAgIGhhbmRsZU1vdmVtZW50KCkge1xuICAgICAgICBsZXQgbW92ZVggPSAwXG4gICAgICAgIGxldCBtb3ZlWSA9IDBcblxuICAgICAgICBpZiAodGhpcy5pbnB1dHMuTEVGVCkge1xuICAgICAgICAgICAgbW92ZVggLT0gdGhpcy5zcGVlZFxuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5pbnB1dHMuUklHSFQpIHtcbiAgICAgICAgICAgIG1vdmVYICs9IHRoaXMuc3BlZWRcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYoIXRoaXMuZ3JvdW5kZWQpIHtcbiAgICAgICAgICAgIG1vdmVZICs9IHRoaXMueVNwZWVkO1xuICAgICAgICAgICAgdGhpcy55U3BlZWQgLT0gdGhpcy5ncmF2aXR5XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnlTcGVlZCA9IDBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuZ3JvdW5kZWQgJiYgdGhpcy5pbnB1dHMuVVApIHtcbiAgICAgICAgICAgIHRoaXMueVNwZWVkID0gMTtcbiAgICAgICAgICAgIHRoaXMuZ3JvdW5kZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubW92ZShtb3ZlWCxtb3ZlWSlcbiAgICB9XG5cbiAgICBtb3ZlKG1vdmVYLG1vdmVZKSB7XG5cbiAgICAgICAgbGV0IGxvY2F0aW9uID0gdGhpcy5nZXRUaWxlTG9jYXRpb24oKVxuICAgICAgICBsZXQgeFRpbGUgPSBsb2NhdGlvblswXVxuICAgICAgICBsZXQgeVRpbGUgPSBsb2NhdGlvblsxXVxuICAgICAgICBcbiAgICAgICAgbGV0IGRvd25UaWxlT2NjdXBpZWQgPSB0aGlzLmdldE1hcFRpbGUoeFRpbGUseVRpbGUrMSkgIT0gMFxuXG4gICAgICAgIGNvbnNvbGUubG9nKGRvd25UaWxlT2NjdXBpZWQpXG5cbiAgICAgICAgaWYoZG93blRpbGVPY2N1cGllZCkge1xuICAgICAgICAgICAgbGV0IHRpbGVPY2N1cGF0aW9uID0gKHRoaXMuc2l6ZVkgLyAyKVxuICAgICAgICAgICAgaWYodGlsZU9jY3VwYXRpb24gKyBtb3ZlWSArICh0aGlzLnkgJSAxKSA+IDAuNSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JvdW5kZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgbW92ZVkgPSAwXG4gICAgICAgICAgICAgICAgdGhpcy55ID0geVRpbGUrMC41XG4gICAgICAgICAgICB9IFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ncm91bmRlZCA9IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnggKz0gbW92ZVg7XG4gICAgICAgIHRoaXMueSArPSBtb3ZlWVxuICAgIH1cblxuICAgIGdldE1hcFRpbGUoeCx5KSB7XG4gICAgICAgIGxldCB0aWxlID0gMDtcbiAgICAgICAgaWYodGhpcy5tYXBbLXldICE9IHVuZGVmaW5lZCAmJiB0aGlzLm1hcFsteSsyXVt4XSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRpbGUgPSB0aGlzLm1hcFsteSsyXVt4XSBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGlsZVxuICAgIH1cblxuICAgIGdldFRpbGVMb2NhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFtNYXRoLnJvdW5kKHRoaXMueCkrNCxNYXRoLnJvdW5kKHRoaXMueS0xKV1cbiAgICB9XG59XG5cbmV4cG9ydCB7UGxheWVyfSJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceMappingURL=bundle.js.map