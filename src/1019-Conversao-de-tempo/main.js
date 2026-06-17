const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split(/\s+/);

 var valor = parseInt(lines.shift());
  
 var horas = Math.floor(valor / 3600);
    valor = valor % 3600;

    var minutos = Math.floor(valor / 60);
    valor = valor % 60;

    segundos = valor;
  
console.log(`${horas}:${minutos}:${segundos}`);
