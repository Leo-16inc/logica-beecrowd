const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split(/\s+/);

 var valor = parseInt(lines.shift());
  
 var anos = Math.floor(valor / 365);
    valor = valor % 365;

    var meses = Math.floor(valor / 30);
    valor = valor % 30;

    var dias = valor;
  
console.log(`${anos} ano(s)`);
 console.log(`${meses} mes(es)`);
 console.log(`${dias} dia(s)`); 
