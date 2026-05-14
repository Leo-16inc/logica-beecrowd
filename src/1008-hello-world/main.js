const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split(/\s+/);

var N = parseInt(lines.shift());
var H = parseInt(lines.shift());
var VPH = parseFloat(lines.shift());

var salario = H * VPH;
console.log("NUMBER = "+N);
console.log("SALARY = U$ "+salario.toFixed(2));
