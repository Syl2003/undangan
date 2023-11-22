const btn = document.querySelector('a');
const home = document.querySelector('.home');
const contai = document.querySelector('.contai');
const hal1 = document.querySelector('.hal1');
const music = document.querySelector('.music');
const myMusic = document.querySelector('.my-music');
const btnCopy1 = document.getElementById('btnCopy1');
const btnCopy2 = document.getElementById('btnCopy2');

const audio = new Audio('https://tikcdn.io/ssstik/aHR0cHM6Ly9zZjE2LWllcy1tdXNpYy50aWt0b2tjZG4uY29tL29iai9pZXMtbXVzaWMtYWlzby83MDA0ODExMjIwODM4OTc2MjgyLm1wMw==');

btn.addEventListener('click', () => {
    home.style.translate = '0 -100%';
    contai.style.display = "block";
    hal1.style.display = 'grid';
    music.style.display = 'block';
      audio.play();
    
    myMusic.addEventListener('click', () => {
      if(audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    });
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