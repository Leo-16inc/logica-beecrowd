// o  input.txt está servindo como um array uma lista, já que no becrowd essa list já está lá e apenas preciso acessar é mais facil
// aqui o  input.txt simula um banco de dados uma list que acesso e pego os valores que preciso com o // const fs = require("fs"); e 
//const lines = fs.readFileSync(0, "utf8").trim().split(/\s+/);
const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split(/\s+/);

var raio = parseFloat(lines.shift());
var n = 3.14159

var area = n * raio * raio 

console.log("A="+ area.toFixed(4))
