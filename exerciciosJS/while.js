const rl = require("readline");

const prompt = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});

//while(condição){
//    bloco de código;
//}

let count = 0; //Contagem inicial
while(count < 10){  //Bloco de código será executado enquanto a variável "count" for menor do que 10.
    console.log(count);
    count++;
}

// Segundo exercício:
const x = 20; //Variável que irá representar uma coordenada.
let playerX = 0; //Coordenada do jogador

while(playerX < x){ //Enquanto coordenada do jogador for menor que coordenada x.
  console.log("🏃‍♂️‍➡️".padStart(playerX, ".")); //O padStart coloca o "." um tanto de vezes que a gente passar no primeiro argumento, antes da string.
  playerX++;
}

// Terceiro exercício:
let current; //Não está recebendo nada por enquanto.
let times = 0; //Registra quantas vezes o loop ocorreu.
const expected = 8;

while(current !== expected){
  current = Math.floor(Math.random() *(50 + 1)) //Math.floor serve para arredondar o número, e o Math.random irá gerar um número aleatório.
  console.log(current);
  times++;
}
console.log(times);


