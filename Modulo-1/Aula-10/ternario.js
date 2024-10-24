
/* 
const idade = 19;
const resultado = idade >= 18 ? "Aprovado" : "Reprovado";

console.log(resultado); */

// outro caso
const idade = 16;
const pais = "BR";

let resultado = idade>=18 ? "Aprovado" : pais === "EUA" && idade >= 16 ? "Aprovado" : "Reprovado";

console.log(resultado)