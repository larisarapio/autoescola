/* Você deve criar uma função que recebe o nome e a data de
nascimento (no formato DD/MM/AAAA) da pessoa como parâmetros,
sendo os dois parâmetros do tipo string; */
const nome = 'Larissa';
const dataNasc = '23/10/2000';

const dadosUsuario = (nome, dataNasc) => {
    console.log(`Nome:${nome} - Data de Nascimento: ${dataNasc}`);
    let ano = dataNasc.slice(4);
    let idade = 2024 - Number(ano);
}

const validaAnoNascimento = (dataNasc) => {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); 
    const ano = dataAtual.getFullYear();

    if (dataNasc == mes) {
        // compara aniversario
        if (Math.abs(dia - dataNasc.slice(0,2)) === 1) {
            console.log('Há um dia de diferença!')
        } else {
            console.log('Não se encaixa para ganhar desconto, você não faz 18 amanhã!')
        }
    }


    // se hoje for dia 19 e eu faço aniversario no dia 20
    // primeiro comparo o mês
    // como faço isso? pego o dia de hoje e comparo com o próximo
    // se ele bater com o dataNasc e vai fazer 18 entao ok
    // senaõ - n da pra fazer a carteira ainda e nem pegar promo

    
}


/* Porto Seguro é 1800 reais, porém os gerentes estão criando uma
promoção para atrair mais clientes:
 Caso a pessoa tenha entre 16 e 18 anos (exclusive), ela pode fazer uma
matrícula antecipada com desconto de 20%.
 Clientes nessa condição só poderão dar início às aulas no dia
seguinte ao completarem 18 anos;
 Clientes com menos de 16 anos não podem fazer a matrícula
antecipada, logo não podem aproveitar a promoção
 Caso a pessoa tenha entre 18 e 40 anos (inclusive), ela pagará o preço
normal, mas poderá iniciar as aulas imediatamente;
 Caso a pessoa tenha mais de 40 anos, ela recebe um desconto de
40% e poderá iniciar as aulas imediatamente
Crie um script para exibir uma mensagem para um cliente que quer se
matricular na autoescola, informando:
 Se está apto ou não a fazer a matrícula;
 Caso esteja apto, qual o valor a pagar;
 Partindo do princípio que qualquer pessoa pode iniciar as aulas no
dia seguinte após completarem 18 anos, caso essa data já tenha
chegado, informar que ela já pode iniciar automaticamente, senão
informar a data na qual a pessoa poderá iniciar. */

const validaPromocao = (idade) => {

    const valorTotal = 1800;

    if (idade >= 17) {
        validaAnoNascimento(idade);
    }
    // 17 - 18 >> 20% de desconto
        // qm tem 17 só vai poder fazer a inscrição se fizer aniversário de 18 no dia seguinte
        // abaixo de 18 só podem iniciar quando completarem 18 e paga o valor cheio
    
    // 18 - 40 >> preço normal, aulas imediatamente
    // >40 aulas imediatament 40%
    


}

let idade = 17;
validaPromocao(idade);


// vou ter que verificar a data 