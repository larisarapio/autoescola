// manipulação de strings
let nome = 'Kristoper Mazzini';

const qtLetras = nome.replace(" ","").length;
console.log(`Meu nome é ${nome} e ele contém ${qtLetras} letras`);

console.log(nome.replaceAll("i","Y"));
console.log(nome.toUpperCase());
console.log(nome.toLowerCase());

// limitando casas decimais

const valor = 10;
const desconto = 0.05;
const novoValor = valor * (1 - desconto);

console.log(`Valor com desconto ficou R${novoValor.toFixed(2)}`);