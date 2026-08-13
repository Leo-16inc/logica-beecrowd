const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split(/\s+/);

let codigo = parseInt(lines.shift());
let quantidade = parseInt(lines.shift());

let preco;

if (codigo === 1) {
    preco = 4.00;
} else if (codigo === 2) {
    preco = 4.50;
} else if (codigo === 3) {
    preco = 5.00;
} else if (codigo === 4) {
    preco = 2.00;
} else if (codigo === 5) {
    preco = 1.50;
}

let total = preco * quantidade;

console.log(`Total: R$ ${total.toFixed(2)}`);