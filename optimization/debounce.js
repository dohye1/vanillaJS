const inputBox = document.querySelector('input');
const showText = document.querySelector('.search-text');

let debounce = null;

function handleInput(e) {
  clearTimeout(debounce);
  debounce = setTimeout(() => {
    console.log('debounce > ' + e.target.value);
    showText.innerHTML = e.target.value;
  }, 500);
}

function init() {
  inputBox.addEventListener('input', handleInput);
}

init();
