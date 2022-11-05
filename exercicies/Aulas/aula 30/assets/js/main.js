//Os dados dentro da function não podem ser acessados.
//Mas podemos enviar dados, para elas como neste exemplo abaixo.
function soma(x, y) {
    const resultado = x + y;
    return resultado;
}
console.log(soma(2, 4));
console.log(soma(7, 9));





// Pode adicionar parametros, definido caso não enviem dados para a função
//Ela usar os dados que foram definidos para ser executada.
function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
}
const resultado = soma(4, 5);
console.log(resultado);





//Podemos criar funções anonimas, como valor de variável.
//Por exemplo.
const raizQuadrada = function (n){
    return n ** 0.5;
}
console.log(raizQuadrada(25));
console.log(raizQuadrada(49));
console.log(raizQuadrada(36));





// podemos usar, arrow function (=>) também, que ira funcionar da mesma forma.
const raiz = n => n ** 0.5;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
