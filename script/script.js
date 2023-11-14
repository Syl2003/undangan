const btn = document.querySelector('a');
const home = document.querySelector('.home');

btn.addEventListener('click', () => {
    home.style.translate = '0 -100%';
});