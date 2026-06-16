const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split(/\s+/);

 var valor = parseInt(lines.shift());
var original = valor;

 var notas100 = Math.floor(valor / 100);
  valor = valor % 100;

    var notas50 = Math.floor(valor / 50);   
    valor = valor % 50;

    var notas20 = Math.floor(valor / 20);
    valor = valor % 20;

    var notas10 = Math.floor(valor / 10);
    valor = valor % 10;

    var notas5 = Math.floor(valor / 5);
    valor = valor % 5;

    var notas2 = Math.floor(valor / 2);
    valor = valor % 2;

    var notas1 = Math.floor(valor / 1);
  
console.log(original);
 console.log(`${notas100} nota(s) de R$ 100,00`);
 console.log(`${notas50} nota(s) de R$ 50,00`);
 console.log(`${notas20} nota(s) de R$ 20,00`);
 console.log(`${notas10} nota(s) de R$ 10,00`);
 console.log(`${notas5} nota(s) de R$ 5,00`);
 console.log(`${notas2} nota(s) de R$ 2,00`);
 console.log(`${notas1} nota(s) de R$ 1,00`);