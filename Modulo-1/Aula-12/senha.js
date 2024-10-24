function gerarSenha() {
    const senha = Math.round(Math.random()  * (999999 - 100000) + 100000);
    return senha;

}

console.log(gerarSenha())