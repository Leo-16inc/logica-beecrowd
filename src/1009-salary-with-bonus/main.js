const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split(/\s+/);

var Nome = lines.shift();
var salariofixo = parseFloat(lines.shift());
var salariovendas = parseFloat(lines.shift());
var salarioComBonus = salariofixo + (salariovendas * 0.15);
console.log("TOTAL = R$ "+salarioComBonus.toFixed(2));
