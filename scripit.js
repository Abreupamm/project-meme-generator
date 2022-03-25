const inputText = document.querySelector('#text-input');
const txt = document.getElementById('meme-text');
const uplImg = document.getElementById('meme-insert');
let img = document.getElementById('meme-image');
const reader = new FileReader();
function criaTexto() {
  const text = inputText.value;
  txt.innerHTML = text;
}
function criaImg() {
  reader.readAsDataURL(uplImg.files[0]);
  reader.onload = function () {
    img.src = reader.result;
  };
}

uplImg.addEventListener('change', criaImg);
inputText.addEventListener('input', criaTexto);

const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');
let container = document.getElementById('meme-image-container');
container.style.border = 'solid black 1px';

function btnFire() {
  container.style.border = '';
  container.style.border = '3px dashed red';
}
function btnWater() {
  container.style.border = '';
  container.style.border = '5px double blue';
}
function btnEarth() {
  container.style.border = '';
  container.style.border = '6px groove green';
}
fire.addEventListener('click', btnFire);
water.addEventListener('click', btnWater);
earth.addEventListener('click', btnEarth);
