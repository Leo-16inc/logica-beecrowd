const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split(/\s+/);

var valorkm = parseInt(lines.shift());
var valorLt = parseFloat(lines.shift());

var consumo = valorkm / valorLt

console.log(consumo.toFixed(3) + " km/l");