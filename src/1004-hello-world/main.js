const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split(/\s+/);

var A = parseInt(lines.shift());
var B = parseInt(lines.shift());

var PROD = A * B 

console.log("PROD = " + PROD);

