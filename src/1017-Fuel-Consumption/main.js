const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split(/\s+/);

var tempo = parseInt(lines.shift());
var velocidade = parseInt(lines.shift());

var distancia = tempo * velocidade;
var litros = distancia / 12;

console.log(litros.toFixed(3)); 