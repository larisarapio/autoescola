// ordem das coisas pra variaveis

/* console.log(darAlo);

let darAlo = 'oie';  */// vai dar erro

//vai dar certo
let darAlo = 'oie'; 

console.log(darAlo);

// pra função não interfere
function darUmAlo(nome = "rapazeada") {
    console.log(`Eae, ${nome}`)
}

darUmAlo(); //enviando sem argumento R: "Eae, rapazeada";
darUmAlo('Lari'); //enviando com argumento R: "Eae, Lari";