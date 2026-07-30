const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split(/\s+/);

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let C = parseFloat(lines.shift());

let delta = B ** 2 - 4 * A * C;

if (delta < 0 || A === 0) {
    console.log("Impossivel calcular");
} else {
    let R1 = (-B + Math.sqrt(delta)) / (2 * A);
    let R2 = (-B - Math.sqrt(delta)) / (2 * A);

    console.log(`R1 = ${R1.toFixed(5)}`);
    console.log(`R2 = ${R2.toFixed(5)}`);
}

"&& siginifica E, exmplo: 1 && 2 = 2, 1 && 0 = 0, 0 && 1 = 0, 0 && 0 = 0"
"math.sqrt() é a função que calcula a raiz quadrada de um número, exmplo: math.sqrt(4) = 2, math.sqrt(9) = 3, math.sqrt(16) = 4"