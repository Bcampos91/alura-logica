alert('Boas vindas');
let Nome = prompt ('Qual é seu nome?');
let idade = prompt ('Qual sua idade');
let numeroDeVendas = 50 ;
let saldoDisponivel = 1000;


if (idade < 18){
    alert(`Olá ${Nome},sua idade é ${idade } e você é menor de idade `)
}else{
    alert(`Olá ${Nome},sua idade é ${idade } e você é maior de idade `)

}


//Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}
//Crie um contador que comece em 10 e vá até 0 usando um loop while. Mostre cada número.
let contador = 10;
while (contador >= 0) {
    console.log(contador);
    contador--;
}
//Crie um programa de contagem regressiva. Peça um número ao usuario e conte deste número até 0, usando um loop while no console do navegador.
let numeroMaximo = prompt("Digite um número para a contagem regressiva:");

while (numeroMaximo >= 0) {
    console.log(numeroMaximo);
    numeroMaximo--;
}
//Crie um programa de contagem progressiva. Peça um número ao usuario e conte de 0 até esté número, usando um loop while no console do navegador.

let numeroMaximo = prompt("Digite um número para a contagem progregressiva:");;
let contador = 0;

while (contador <= numeroMaximo) {
    console.log(contador);
    contador++
}

//O operador AND, representado pelos símbolos "&&", é utilizado para combinar duas condições e avaliar se ambas são verdadeiras. Se ambas as condições forem verdadeiras, o resultado será… verdadeiro. Caso contrário, logicamente será falso. Por exemplo:

let idade = 25;
let possuiCarteira = true;

// se idade é maior que 18 e possui carteira…
if (idade > 18 && possuiCarteira) {
  console.log("Pode dirigir!");
} else {
  console.log("Não pode dirigir.");
}


//O operador OR, representado pelos símbolos "||", é usado para verificar se pelo menos uma das condições é verdadeira. Se uma das condições for verdadeira, o resultado será verdadeiro. Se ambas forem falsas, o resultado será falso. Veja um exemplo:

let temMaça = false;
let temBanana = true;

// se tem maça ou tem banana…
if (temMaça || temBanana) {
  console.log("Você tem frutas!");
} else {
  console.log("Não tem frutas.");
}