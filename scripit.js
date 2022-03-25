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
