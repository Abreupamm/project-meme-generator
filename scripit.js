const inputText = document.querySelector('#text-input');
const txt = document.getElementById('meme-text');

function criaTexto() {
  const text = inputText.value;
  txt.innerHTML = text;
}

inputText.addEventListener('input', criaTexto);
