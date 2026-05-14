const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split(/\s+/);

var code1 = parseInt(lines.shift());
var qnt1 = parseInt(lines.shift());
var valoruntario1 = parseFloat(lines.shift());
var code2 = parseInt(lines.shift());
var qnt2 = parseInt(lines.shift());
var valoruntario2 = parseFloat(lines.shift());

var valorApagar = (qnt1 * valoruntario1) + (qnt2 * valoruntario2)
console.log("VALOR A PAGAR: R$ " + valorApagar.toFixed(2));



