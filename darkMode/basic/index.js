const background = document.querySelector('body');
const modeButton = document.querySelector('button');

function handleChangeMode() {
  modeButton.innerText = background.classList.contains('dark')
    ? 'LIGHT MODE'
    : 'DARK MODE';
  background.classList.toggle('dark');
  modeButton.classList.toggle('dark-button');
}

function init() {
  modeButton.addEventListener('click', handleChangeMode);
}

init();
