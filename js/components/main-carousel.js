/* Isso é uma caixa troll
alert("Bem- vindo!"); */

/* // Fluxo para acessar elementos com JS
1 pegar a janela(browser)
2 Pegar a pagina
3 Pegar o elemento desejado
4 Pegar o click 
5 Repetir os passos do 1 ao 3
5 Mover o elemento para a direita ou esquerda*/

/* Para guardar em um variavel podemos definir usando, essa variavel é imutável
para variaveis mutaveis usar let */

/* Eventos que podem acontecer, eventos que o usuario executa
Click right or left, double click, mouse hoover, scrol, */

/* Podemos ignorar o windows pq ele é referente ao browser */
const btnLeft = window.document.querySelector('.button-arrow.-left');
const btnRight = window.document.querySelector('.button-arrow.-right');
const elements = window.document.querySelector('.element');
let pixels = 0

btnLeft.addEventListener('click', function() {
    pixels = pixels - 150
    elements.style = `transform: translateX(${pixels}px)`
});

btnRight.addEventListener('click', function() {
    pixels = pixels + 150
    elements.style = `transform: translateX(${pixels}px)`
});