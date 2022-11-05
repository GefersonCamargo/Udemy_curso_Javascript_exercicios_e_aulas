// Escreva uma função cahamda ePaisagem que recebe
// dois valores de argumentos, largura e altura de uma
// imagem (number).
// Retorne true se a imagem estiver no modo paisagem.

//function normal
/*
function ePaisagem(largura, alatura) {
    return largura > alatura;
}
console.log(ePaisagem(1090, 1020));
*/

//arrow function

const ePaisagem = (largura, alatura) => largura > alatura;
console.log(ePaisagem(1080, 1920));
