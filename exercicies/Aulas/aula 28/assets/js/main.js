    
    const num1 = Number (prompt('Digite um número:'));
    const numeroTitulo = document.getElementById('numero-titulo');
    const texto = document.getElementById('texto');

    numeroTitulo.innerHTML = num1;
    texto.innerHTML = '',    
    texto.innerHTML += `<p>A raiz quadrada do seu número é:${num1 ** 0.5}.</p>`;
    texto.innerHTML += `<p>${num1} é NaN: ${Number.isNaN(num1)}.</p>`;
    texto.innerHTML += `<p>${num1} é inteiro: ${Number.isInteger(num1)}.</p>`;
    texto.innerHTML += `<p>Arendondado para cima: ${Math.ceil(num1)}.</p>`;
    texto.innerHTML += `<p>Arendondado para baixo: ${Math.floor(num1)}.</p>`;
    texto.innerHTML += `<p>Com duas casa decinais: ${num1.toFixed(2)}.</p>`;