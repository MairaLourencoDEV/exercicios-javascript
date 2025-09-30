const rl = require("readline");

const prompt = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Exercício 01:
const stuff = "gato";

switch(stuff){
    case "pizza":
    case "bolo":
    case "hamburguer":
    case "pastel":{
        console.log("Comida");
        break;
    }
    case "gato":
    case "cachorro":
    case "galinha":   
    case "vaca":{
        console.log("Animal");
        break;
    }
    case "pá":
    case "martelo":
    case "enxada":
    case "marreta":{
        console.log("Ferramenta");
        break;
    }
    default:{ //Será executado quando nenhum caso acima for executado, por exemplo digitar "queijo".
        console.log("Não listado")
    }
}

//Exercício 02 com um nova possibilidade para utilização do SwitchCase:
console.log("Bem vindo ao programa!");
console.log("[1] Data atual");
console.log("[2] Horário atual");
console.log("[3] Ver animais");
console.log("[4] Ver comidas");
console.log("[5] Ver linguagens");
console.log("[0] Sair");

prompt.question("> Selecione o que deseja fazer ", answer => {
    switch(answer){
        case "1":{
            const date = new Date(); //Vai pegar a data atual.
            const day = date.getDate(); //Obter o dia dessa data.
            const month = date.getMonth()+1; //A contagem se inicia em zero, então se é inserido o +1 para se iniciar corretamente janeiro como mês 1.
            const year = date.getFullYear(); //Para obter o ano.
            console.log(`📆 Hoje é ${day}/${month}/${year}`);
            break;
        }
         case "2":{
            const date = new Date();
            const hours = date.getHours(); //Obter as horas atuais;
            const minutes = date.getMinutes(); //Obter os minutos;
            console.log(`🕔 Agora são ${hours}:${minutes}`);
            break;
        }
         case "3":{
            console.log("🐓 Galinha");
            console.log("🐄 Vaca");
            console.log("🐈‍⬛ Gato");
            console.log("🐩 Cachorro");
            break;
        }
         case "4":{
            console.log("🍕 Pizza");
            console.log("🍰 Bolo");
            console.log("🍜 Macarrão");
            console.log("🍨Sorvete");
            break;
        }
         case "5":{
            console.log("JavaScript");
            console.log("Java");
            console.log("C++");
            console.log("Rust");
            break;
        }
        default:{
            console.log("Fim do programa");
        }
    }
    prompt.close();
})