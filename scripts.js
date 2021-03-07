const entrarBtn = document.querySelector('#entrar-btn');
const cadastrarBtn = document.querySelector('#cadastrar-btn');
const container = document.querySelector('.container');

cadastrarBtn.addEventListener('click',() => {
    container.classList.add('modo-entrar');
});

entrarBtn.addEventListener('click',() => {
    container.classList.remove('modo-entrar');
});