const rl = require("readline");

const prompt = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});

// for(inicialização, condição, execução){
// linha de código
//}

for(let i = 0; i <10; i++) {
    console.log(i);
}

//Inserido uma nova possibilidade com array(lista):
const numbers = [];

for (let i = 0; i <=10; i++) {
    numbers.push(i);
}

console.log(numbers);

//Novo exemplo:
const fruits = ["maça", "banana", "laranja", "uva"];

for (let i = 0; i < fruits.length; i ++) { //length da lista, é a quantidade de itens do array, que é igual a 4.
    console.log(fruits[i]); //acessando o index do array que é o zero, e vai executando cada item por vez.
}

//Iterando um array.
const text = "Se inscreva no canal do youtube: Rincko Dev";
const letter = "a";
let times = 0;

for(const char of text.toLowerCase()){ //Para saber quantas vezes a letra "a" aparece na variável anterior.
    if (char === letter) times++;
} 
console.log(`A letra (${letter}) se repete ${times} vezes`);

prompt.question("Qual número você deseja ver a tabuada?", answer => {
    const number = Number.parseInt(answer); //Transformando a resposta em número, pois anteriormente está como string.
    
    if (Number.isNaN(number)){
        console.log("O número digitado é inválido!");
    } else {
        console.log(`A tabuada do ${number} é: `);
        for(let i = 1; i <= 10; i++){
            console.log(`${i} x ${number} = ${i * number}`);
        }
    }
    prompt.close();//Pra fechar o prompt, caso contrário o programa não encerra.
})