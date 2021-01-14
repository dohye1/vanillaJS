const slideList = document.querySelector('.slide_list');
const pageDots = document.querySelectorAll('.dot_btn');

const SLIDE_WIDTH = 1920;
const SLIDE_SPEED = 400;
const DOT_ACTIVE = 'dot_active';

let curIndex = 0;

const handleClick = (selectedIndex) => {
  pageDots[curIndex].classList.remove(DOT_ACTIVE);
  pageDots[selectedIndex].classList.add(DOT_ACTIVE);

  slideList.style.transition = `${SLIDE_SPEED}ms`;
  slideList.style.transform = `translate3d(-${
    SLIDE_WIDTH * selectedIndex
  }px, 0px, 0px)`;

  curIndex = selectedIndex;
};

function init() {
  pageDots[curIndex].classList.add(DOT_ACTIVE);
  for (let i = 0; i < pageDots.length; i++) {
    pageDots[i].addEventListener('click', () => handleClick(i));
  }
}

init();
