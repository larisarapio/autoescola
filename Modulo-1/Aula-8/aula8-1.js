const n1 = 9;
const n2 = "9";

let soma = n1 + n2;
console.log(soma); //99

console.log(typeof soma); //string

soma = n1 + Number(n2); //posso fazer ele virar string tb...
console.log(soma); //18

const letras = 'abc';
console.log(Number(letras)); // NaN