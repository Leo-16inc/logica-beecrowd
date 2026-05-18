const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split(/\s+/);

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());

var RetanguloTriangulo = (A * C) / 2;
var Circulo = 3.14159 * C * C;
var Trapezio = (A + B) * C / 2;
var Quadrado = B * B;
var Retangulo = A * B;

console.log("TRIANGULO: " + RetanguloTriangulo.toFixed(3));
console.log("CIRCULO: " + Circulo.toFixed(3));
console.log("TRAPEZIO: " + Trapezio.toFixed(3));
console.log("QUADRADO: " + Quadrado.toFixed(3));
console.log("RETANGULO: " + Retangulo.toFixed(3));



