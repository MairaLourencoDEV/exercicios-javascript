const prompt = require('prompt-sync')();

//Crie um programa que guarde os nomes de 5 frutas em um array e depois exiba todas elas no console, um por linha:
let frutas = ["Maçã", "Banana", "Laranja", "Uva", "Manga"];

for (let i = 0; i < frutas.length; i++) { // Percorre o array e exibe cada fruta em uma linha
  console.log(frutas[i]);
}

//Faça um programa que armazene as notas de 4 alunos em um array e calcule a média das notas: 
let notas = [7.5, 8.0, 6.5, 9.0];
let soma = 0;

for (let i = 0; i < notas.length; i++) { // Soma todas as notas
  soma += notas[i];
}

let media = soma / notas.length;
console.log("A média das notas é: " + media.toFixed(2));

//Monte um programa que guarde uma lista de números inteiros e mostre apenas os que são pares: 
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) { // Percorre o array e mostra apenas os pares
  if (numeros[i] % 2 === 0) {
    console.log(numeros[i] + " é par");
  }
}

//Segundo dia de aula, novas práticas.

//Crie um Array com 5 nomes em minúsculo, em seguida utilize o .map para transformar em letras maiúsculas com no toUpperCase(). Utilize Arrow function.
const nomes = ["arthur", "vic", "adriana", "mateus", "junior"];

const nomesMaiusculos = nomes.map(nome => nome.toUpperCase()); //.map() percorre cada item do array e aplica a função de transformação. nome => nome.toUpperCase() é uma arrow function que converte o nome para maiúsculas.

console.log(nomesMaiusculos);

//Utilize o mesmo Array e ordene os nomes em ordem alfabética utilizando o .sort.

nomesMaiusculos.sort();
console.log(nomesMaiusculos);

//Peça pro usuário digitar 3 números (data do aniversário) armazene esses 3 números em um array em seguida personalize no formato de data utilizando o .join.
const dia = prompt("Digite o dia do seu aniversário:");
const mes = prompt("Digite o mês do seu aniversário:");
const ano = prompt("Digite o ano do seu aniversário:");

const dataArray = [dia, mes, ano];

const dataFormatada = dataArray.join('/');// Formata a data no estilo DD/MM/AAAA

console.log("Data de aniversário formatada:", dataFormatada);



