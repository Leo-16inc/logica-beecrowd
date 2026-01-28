const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split(/\s+/);

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());
var D = parseFloat(lines.shift());

var DIFERENCA = (A * B) - (C * D);

console.log("DIFERENCA = " + DIFERENCA);
