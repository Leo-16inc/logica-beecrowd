const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split(/\s+/);

  var valor = parseInt(lines.shift());
  var tipo = parseInt(lines.shift());

  if (tipo === 1)
  {
    var horas = Math.floor(valor / 3600);
    valor = valor % 3600;

    var minutos = Math.floor(valor / 60);
    valor = valor % 60;

    var segundos = valor;
  
  console.log(`${horas}:${minutos}:${segundos}`);
  }
    else if (tipo === 2){
    var anos = Math.floor(valor / 365);
    valor = valor % 365;

    var meses = Math.floor(valor / 30);
    valor = valor % 30;

    var dias = valor;
  
  console.log(`${anos} ano(s)`);
  console.log(`${meses} mes(es)`);
  console.log(`${dias} dia(s)`);
    }
    else {
  console.log("Tipo inválido");
}
  
  

 