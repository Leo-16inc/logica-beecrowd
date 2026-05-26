const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split(/\s+/);

var x1 = parseFloat(lines.shift())
var y1 = parseFloat(lines.shift())
var x2 = parseFloat(lines.shift())
var y2 = parseFloat(lines.shift())

var distance = Math.sqrt(
    (x2 - x1) ** 2 +
    (y2 - y1) ** 2
);
console.log(distance.toFixed(4));

// nova funcão aprendida // Math.sqrt() - retorna a raiz quadrada de um número