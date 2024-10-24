const pessoas = [
    { nome: 'Ana', idade: 28 },
    { nome: 'Carlos', idade: 22 },
    { nome: 'Larissa', idade: 24 }
];


console.log('Esta mensagem será apagada');
console.clear();
console.log('Console limpo!');

console.table(pessoas);

console.count('Clique');
console.count('Clique');
console.count('Clique');
// Saída: Clique: 1, Clique: 2, Clique: 3

console.warn('Este é um aviso!');

console.error('Ocorreu um erro!');

