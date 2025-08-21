const prompt = require('prompt-sync')();

//Crie um programa que receba a idade de uma pessoa e informe se ela é maior de idade ou menor de idade, utilizando o operador ternário.
let idade = Number(prompt("Digite a sua idade: "));

let mensagem = idade >= 18 ? "Você é maior de idade!" : "Você é menor de idade!";
console.log(mensagem);

//Crie um programa que verifique se a cor escolhida pelo usuário é verde. Se for, mostre "Você escolheu a cor certa!". Caso contrário, mostre "Cor incorreta!".
let cor = prompt("Digite uma cor: ");

let corEscolhida = cor.toLowerCase() === "verde" ? "Você escolheu a cor certa!" : "Cor incorreta!";
console.log(corEscolhida);

//Um sistema deve permitir o acesso apenas se o usuário estiver logado. Use o operador ternário para mostrar "Acesso permitido" ou "Acesso negado".
let logado = true;

let acesso = logado === true ? "Acesso permitido!" : "Acesso negado!";
console.log(acesso);


