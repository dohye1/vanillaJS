const inputBox = document.querySelector('input');
const showText = document.querySelector('.search-text');

let throttle = null;

function handleInput(e) {
  if (throttle) {
    return false;
  }

  throttle = setTimeout(() => {
    console.log('thorottle > ' + e.target.value);
    showText.innerHTML = e.target.value;
    throttle = null;
  }, 2000);
}

function init() {
  inputBox.addEventListener('keyup', handleInput);
}

init();
