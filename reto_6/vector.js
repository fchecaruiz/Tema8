"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(n, k) {
        if (k === void 0) { k = 10; }
        this.elements = [];
        for (var i = 0; i < n; i++) {
            this.elements.push(Math.floor(Math.random() * k));
        }
    }
    Vector.prototype.print = function () {
        console.log(this.elements);
    };
    Vector.prototype.add = function (v1) {
        var suma = [];
        for (var i = 0; i < this.elements.length; i++) {
            suma[i] = this.elements[i] + v1.elements[i];
        }
        return suma;
    };
    Vector.prototype.subs = function (v1) {
        var resta = [];
        for (var i = 0; i < this.elements.length; i++) {
            resta[i] = this.elements[i] - v1.elements[i];
        }
        return resta;
    };
    Vector.prototype.mult = function (v1) {
        var producto = [];
        for (var i = 0; i < this.elements.length; i++) {
            producto[i] = this.elements[i] - v1.elements[i];
        }
        return producto;
    };
    Vector.prototype.multNumber = function (n) {
        var resultado = [];
        for (var i = 0; i < this.elements.length; i++) {
            resultado[i] = this.elements[i] * n;
        }
        return resultado;
    };
    return Vector;
}());
exports.Vector = Vector;
