
const nome = prompt('Digite o seu nome completo:');

document.body.innerHTML += `O seu nome é: <strong>${nome}</strong><br />`;

document.body.innerHTML += `O seu nome tem: <strong>${nome.length}</strong> letras <br />`;

document.body.innerHTML += `A segunda letra do seu nome é:<strong>${nome.charAt(1)}</strong> <br />`;

document.body.innerHTML += `Qual o primeiro índice da letra E no seu nome:<strong> ${nome.indexOf('e')} </strong> <br />`;

document.body.innerHTML += `Qual o último índice da letra no seu nome: <strong> ${nome.lastIndexOf('e')} </strong> <br />`;

document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong> ${nome.slice(-3, nome.length)} </strong> <br />`;

document.body.innerHTML += `As palavras do seu nome são: <strong> ${nome.split(' ')} </strong> <br />`;

document.body.innerHTML += `Seu nome com letras maiusculas: <strong> ${nome.toUpperCase ()} </strong> <br />`;

document.body.innerHTML += `Seu nome é com letras minusculas: <strong> ${nome.toLowrCase()} </strong> <br />`;
