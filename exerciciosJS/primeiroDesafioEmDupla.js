const prompt = require('prompt-sync')();

let nomeAgente = prompt("Digite o seu nome: ");
let especialidade = prompt("Digite a sua especialidade: ");
let idade = Number(prompt("Digite a sua idade: "));
let pontuacaoHacking = Number(prompt("Digite a sua pontuação em hacking:"));
let simboloDigital = prompt("Digite um caractere: ");
let veterano = prompt("Voce é veterano(logico, verdadeiro ou falso)? ").toLowerCase();

if (veterano === "logico" || veterano === "verdadeiro" ) {
    veterano = true;
} else {
    veterano = false;
}

console.log(`Bem-vindo, ${nomeAgente}. Um(a) ${especialidade} destemido(a) de ${idade} anos. Sua jornada contra as IAs rebeldes começa agora!`);

veterano === true ? pontuacaoHacking * 0.10 : pontuacaoHacking + 5;

if (idade >= 18 && pontuacaoHacking > 75.5 || veterano === true) {
    console.log(`Parabéns, ${nomeAgente}! Você invadiu os servidores e a Resistência conta com sua força!`);
} else {
    console.log(`Infelizmente, ${nomeAgente}, suas defesas foram insuficientes. Mas a Resistência sempre estará esperando por você.`);
}



