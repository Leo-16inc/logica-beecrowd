const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split(/\s+/);

var valorA = parseInt(lines.shift())
var valorB = parseInt(lines.shift())
var valorC = parseInt(lines.shift())

var maiorAB = (valorA +  valorB + Math.abs((valorA - valorB))) / 2
var maior = (maiorAB + valorC + Math.abs((maiorAB - valorC))) / 2

console.log(maior + " eh o maior");