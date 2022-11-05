ca/*
Geferson Camargo tem 28 anos, pesa 90 kg
tem 1.83 de altura e seu IMC é de 26.874496103198062
Geferson nasceu em 1993
*/
const nome = 'Geferson';
const sobreNome = 'Camargo';
const idade = 29;
const peso = 102;
const alturaEmM = 1.83;
let imc; //peso / (dividido) pela (altura * altura) (altura ao quadrado).
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2022 - idade;

console.log(`${nome} ${sobreNome} tem ${idade} anos e pesa ${peso} kg.`);
console.log(`Sua altura é de: ${alturaEmM} e seu IMC é de: ${imc}.`);
console.log(`${nome} ${sobreNome} nasceu no ano de ${anoNascimento}.`);