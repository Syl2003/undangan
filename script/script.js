const btn = document.querySelector('a');
const home = document.querySelector('.home');
const hal1 = document.querySelector('.hal1');

btn.addEventListener('click', () => {
    home.style.translate = '0 -100%';
    hal1.style.display = 'block'
});