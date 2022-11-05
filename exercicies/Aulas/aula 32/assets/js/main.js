//Funcão para fabricar objetos, neste exemplo agrupar dados de uma pessoa.
function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade };
}

const pessoa1 = criaPessoa ('Luiz', 'Miranda', 25);
const pessoa2 = criaPessoa ('Ana', 'Maria', 55);
const pessoa3 = criaPessoa ('Bia', 'Moraes', 29);
const pessoa4 = criaPessoa ('Bruno', 'Marques', 42);

console.log(pessoa1.nome, pessoa4.idade);
console.log(pessoa2.nome, pessoa3.idade);
console.log(pessoa3.nome, pessoa2.idade);
console.log(pessoa4.nome, pessoa1.idade);




//Criando função com incremento de objeto 
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
       console.log (`A minha idade atual é ${this.idade}.`);
    },
    incrementaIdade () {
        this.idade++;
    }
};

pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade();