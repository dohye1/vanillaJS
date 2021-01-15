const PLAYING = 'playing';

const removeTransition = (e) => {
  if (e.propertyName !== 'transform') {
    return;
  }
  e.target.classList.remove(PLAYING);
};
const playAudio = (keyCode) => {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`div[data-key="${keyCode}"]`);
  if (!audio) {
    return;
  }
  key.classList.add(PLAYING);
  audio.currentTime = 0;
  audio.play();
};

const pushCharacter = (e) => {
  playAudio(e.keyCode);
};

const clickCaracter = (e) => {
  let keyCode;
  if (e.target.nodeName === 'DIV') {
    keyCode = e.target.dataset.key;
  } else {
    keyCode = e.target.parentNode.dataset.key;
  }
  playAudio(keyCode);
};

const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
keys.forEach((key) => key.addEventListener('click', clickCaracter));
window.addEventListener('keydown', pushCharacter);
