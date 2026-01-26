// Leitura da entrada padrão (stdin) usando file descriptor 0.
// Essa abordagem é compatível tanto com o Beecrowd (Linux)
// quanto com testes locais no Windows (PowerShell).
// Os dados são separados por espaços/quebras de linha
// e consumidos com shift().

const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split(/\s+/);

const A = parseInt(lines.shift(), 10);
const B = parseInt(lines.shift(), 10);

const X = A + B;

console.log("X = " + X);


