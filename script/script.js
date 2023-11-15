const btn = document.querySelector('a');
const home = document.querySelector('.home');
const contai = document.querySelector('.contai');
const hal1 = document.querySelector('.hal1');

btn.addEventListener('click', () => {
    home.style.translate = '0 -100%';
    contai.style.display = "block";
    hal1.style.display = 'grid';
});