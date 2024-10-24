let blusa = 50;
let calca = 50;
let tenis = 50;

blusa = aplicaDesconto(blusa);
calca = aplicaDesconto(calca);
tenis = aplicaDesconto(tenis);

console.log(blusa);
console.log(calca);
console.log(tenis);

function aplicaDesconto(precoOriginal){
    const precoComDesconto = precoOriginal > 50 ? precoOriginal * 0.5 : precoOriginal * 0.7;
    return precoComDesconto;
}