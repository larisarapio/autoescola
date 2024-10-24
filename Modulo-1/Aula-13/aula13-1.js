//Function expression
//Arrow function
//aqui essas funções não podem ser chamadas antes de serem declaradas, ou seja: não são roinster

const darUmAlo = function() {
    console.log('Eaeeeeeeee!')
}

/* const darUmTchauzinho = () => {
    console.log('Falouuuu!')
} */

// como não temos nenhum retorno assim seria uma forma mais otimizada
const darUmTchauzinho = () => console.log('Falouuuu!');

darUmAlo();
darUmTchauzinho();

