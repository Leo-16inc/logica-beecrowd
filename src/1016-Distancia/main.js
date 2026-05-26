const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split(/\s+/);

var distancia = parseInt(lines.shift())

var tempo = distancia * 2

console.log(tempo + " minutos");