const prompt = require('prompt-sync')();
//Primeira função de teste
function saudar(nome = "visitante") {
    console.log(`Olá, ${nome}! Seja bem-vindo(a)!`);
}

saudar("Maria");

//Segunda função de teste
function saudar(nome, idade, cidade) {
    console.log(`Olá, meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`);
}

saudar();
saudar("Maíra", 29, "Recife");

function formatarValor (valor) { //O valor nesse caso não é uma variável, é um parâmetro
    return `R$ ${valor.toFixed(2).replace(".", ",")}`; //toFixed também é uma função, porém já pronta, onde aqui estou determinando as casas decimais. E o replace vai realizar a substituição do ponto pela vírgula.
}

function solicitandoValorAoUsuario() {
    let valorDigitado = parseFloat(prompt("Digite o valor da compra: ")); //O parseFloat serve para solicitação de números decimais.
    
    if (isNaN(valorDigitado)) { //Verifica se não é um número.
        console.log("valor inválido");
        return null;
    }

    let valorFormatado = formatarValor(valorDigitado); //Aqui estou passando pra função formatarValor o argumento "valorDigitado".
    return valorFormatado;
}

let final = solicitandoValorAoUsuario();
console.log(`Valor da compra: ${final}`);