const colorBox = document.querySelectorAll('.box');
const pageButtonArr = document.querySelectorAll('li');

function handleScroll(e) {
  const target =
    e.wheelDeltaY > 0
      ? Math.floor((window.scrollY - 1) / window.innerHeight)
      : Math.ceil((window.scrollY + 1) / window.innerHeight);
  window.scrollTo({ top: window.innerHeight * target, behavior: 'smooth' });
}

function handleButtonClick(index) {
  window.scrollTo({
    top: window.innerHeight * index,
    behavior: 'smooth'
  });
}

function init() {
  document.addEventListener('wheel', handleScroll);
  pageButtonArr.forEach((button, index) =>
    button.addEventListener('click', () => handleButtonClick(index))
  );
}

init();
