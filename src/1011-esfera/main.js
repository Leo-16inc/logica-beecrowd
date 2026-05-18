const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split(/\s+/);

var R = parseFloat(lines.shift());
var pi = 3.14159;

var Volume =  (4 / 3.0) * pi * (R * R * R);

console.log("VOLUME = " + Volume.toFixed(3));


