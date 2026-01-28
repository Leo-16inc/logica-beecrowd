const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split(/\s+/);

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());

var pesoA = 3.5;
var pesoB = 7.5;

var multiplicacaoA = A * pesoA;
var multiplicacaoB = B * pesoB;
var resultado = multiplicacaoA + multiplicacaoB;

var somapeso = pesoA + pesoB;

var resultadoP = somapeso;
var MEDIA = resultado / somapeso;

console.log("MEDIA = " + MEDIA.toFixed(5));

