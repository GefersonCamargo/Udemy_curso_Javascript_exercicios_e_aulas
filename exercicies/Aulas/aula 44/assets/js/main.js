// captura evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('evento previnido.');
    setResultado ('Olá mundo!');

});

function criaP () {
    const p = document.createElement('p');
    
}

function setResultado (msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    
}