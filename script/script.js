const btn = document.querySelector('a');
const home = document.querySelector('.home');
const contai = document.querySelector('.contai');
const hal1 = document.querySelector('.hal1');
const btnCopy1 = document.getElementById('btnCopy1');
const btnCopy2 = document.getElementById('btnCopy2');

btn.addEventListener('click', () => {
    home.style.translate = '0 -100%';
    contai.style.display = "block";
    hal1.style.display = 'grid';
});

function copy1() {
    navigator.clipboard.writeText(document.getElementById('txt1').innerHTML);
    
    btnCopy1.innerHTML = "copy berhasil"
    setTimeout( () => {
      btnCopy1.innerHTML = "copy rekening"
    },900);
}

function copy2() {
    navigator.clipboard.writeText(document.getElementById('txt2').innerHTML);
    
    btnCopy2.innerHTML = "copy berhasil"
    setTimeout( () => {
      btnCopy2.innerHTML = "copy rekening"
    },900);
}