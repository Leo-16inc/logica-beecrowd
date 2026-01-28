const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split(/\s+/);

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());

var pesoA = 2;
var pesoB = 3;
var pesoC = 5;


var multiplicacaoA = A * pesoA;
var multiplicacaoB = B * pesoB;
var multiplicacaoC = C * pesoC
var resultado = multiplicacaoA + multiplicacaoB + multiplicacaoC;

var somapeso = pesoA + pesoB + pesoC;

var resultadoP = somapeso;
var MEDIA = resultado / somapeso;

console.log("MEDIA = " + MEDIA.toFixed(1));

//var resultado = (A * pesoA) + (B * pesoB) + (C * pesoC);
//var somaPesos = pesoA + pesoB + pesoC;
//forma alternativa 