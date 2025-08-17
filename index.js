const prompt = require('prompt-sync')();

//Exercício 1
let idade = Number(prompt("Digite a sua idade: "));
let CNH = (prompt("Você possui CNH?"));
CNH = CNH.toLowerCase();

if (idade >= 18 && CNH === "sim") {
    console.log("Pode dirigir!");
} else {
    console.log("Não pode dirigir!");
}

//Exercício 2
let media = Number(prompt("Digite a média final do aluno(a): "));
let frequencia = Number(prompt("Digite a frequência do aluno: "));

if (media >= 7 && frequencia >= 75) {
    console.log("APROVADO!");
} else {
    console.log("REPROVADO!");
}

//Exercicío 3
let diaDaSemana = prompt("Digite o dia da semana: ");
diaDaSemana = diaDaSemana.toLowerCase().trim();

if(diaDaSemana === "segunda-feira" || diaDaSemana === "segunda") {
    console.log("Hoje é segunda-feira. Que você tenha uma semana incrível. Sou mais você nessa guerra!");
} else if (diaDaSemana === "terça-feira" || diaDaSemana === "terça") {
    console.log("Uma ótima terça-feira pra você!");
}  else if (diaDaSemana === "quarta-feira" || diaDaSemana === "quarta") {
    console.log("Uma ótima quarta-feira pra você!");
} else if (diaDaSemana === "quinta-feira" || diaDaSemana === "quinta") {
    console.log("Uma ótima quinta-feira pra você!");
} else if (diaDaSemana === "sexta-feira" || diaDaSemana === "sexta") {
    console.log("Uma ótima sexta-feira pra você!");
} else if (diaDaSemana === "sábado" || diaDaSemana === "sabado" || diaDaSemana === "domingo") {
    console.log("Chegou o tão esperado descanso. Bom fim de semana!");
} else {
    console.log("Você digitou um dia inválido. Por favor, digite um dia da semana válido: ");
}
//Exercício 4
let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));
let operadorNumerico = prompt("Digite um operador númerico que seja: +, -, * ou /");
let resultado;

if (isNaN(num1) || isNaN(num2)) {
  alert("Por favor, insira números válidos.");
} else if (operadorNumerico === "+") {
    resultado = num1 + num2;
    console.log(`Resultado: ${resultado}`);
} else if (operadorNumerico === "-") {
    resultado = num1 - num2;
    console.log(`Resultado: ${resultado}`);
} else if (operadorNumerico === "*") {
    resultado = num1 * num2;
    console.log(`Resultado: ${resultado}`);
} else if (operadorNumerico === "/") {
    if (num2 === 0) {
        console.log("Erro: Divisão por zero não é permitida.");
    } else {
        resultado = num1 / num2;
        console.log(`Resultado: ${resultado}`);
    }
} else {
    console.log("Operação inválida. Use apenas +, -, * ou /.");
}

//Exercício 5
let age = Number(prompt("Digite a sua idade: "));

if (age >=0 && age < 12) {
    console.log("Você é uma criança.");
} else if (age >= 12 && age <= 17) {
    console.log("Você é um adolescente.");
} else if (age >= 18 && age <= 59) {
    console.log("Você é um adulto");
} else if (age >= 60) {
    console.log("Você é um idoso.");
} else {
    console.log("Idade inválida. Tente novamente.");
}

//Exerício 6
let totalCompra = Number(prompt("Digite o valor total da compra: "));
let valorFinal;


if (totalCompra < 100) {
    console.log("Sem desconto.");
} else if (totalCompra >= 100 && totalCompra <= 199) {
    valorFinal = totalCompra - (totalCompra * 0.10);
    console.log(`Preço final: R$ ${valorFinal.toFixed(2)}`);
} else if (totalCompra >= 200 && totalCompra <= 499) {
    valorFinal = totalCompra - (totalCompra * 0.20);
    console.log(`Preço final: R$ ${valorFinal.toFixed(2)}`);
} else if (totalCompra >= 500) {
    valorFinal = (totalCompra - (totalCompra * 0.30));
    console.log(`Preço final: R$ ${valorFinal.toFixed(2)}`);
} else {
    console.log("Por favor, digite um valor válido.");
}

//Exercício 7
let numero = Number(prompt("Digite um número inteiro: "));

if (isNaN(numero) || !Number.isInteger(numero)) {
    console.log("Número inválido! Por favor, digite um número válido.");
} else if (numero %2 ===0) {
    console.log(`O número ${numero}, é par!`);
} else {
    console.log(`O número ${numero}, é ímpar!`);
}

//Exercício 8
let idadeUsuario = Number(prompt("Digite a sua idade: "));
let autorizacaoPais = prompt("Você possui a permissão dos seus pais? ");
autorizacaoPais = autorizacaoPais.toLowerCase().trim();

if (isNaN(idadeUsuario) || idadeUsuario <0) {
    console.log("Idade inválida. Digite novamente.");
}else if (idadeUsuario >= 18) {
    console.log("Acesso permitido ao programa! Seja bem-vindo!");
} else if (idadeUsuario < 18 && autorizacaoPais === "sim") {
    console.log("Acesso permitido ao programa! Seja bem-vindo!");
} else {
    console.log("Acesso negado!");
}