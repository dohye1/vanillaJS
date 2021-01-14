const slideList = document.querySelector('.slide_list');
const slideContents = document.querySelectorAll('.slide_img');
const pageDots = document.querySelectorAll('.dot_btn');

const SLIDE_LEN = slideContents.length;
const SLIDE_WIDTH = 1920;
const SLIDE_SPEED = 400;
const DOT_ACTIVE = 'dot_active';

let curDot = 0;

pageDots[curDot].classList.add(DOT_ACTIVE);
let curSlide = slideContents[curDot];

const handleClick = (dotIndex) => {
  pageDots[curDot].classList.remove(DOT_ACTIVE);
  pageDots[dotIndex].classList.add(DOT_ACTIVE);
  console.log(SLIDE_WIDTH * dotIndex);
  slideList.style.transition = `${SLIDE_SPEED}ms`;
  slideList.style.transform = `translate3d(-${
    SLIDE_WIDTH * dotIndex
  }px, 0px, 0px)`;
  curDot = dotIndex;
};

function init() {
  for (let i = 0; i < pageDots.length; i++) {
    pageDots[i].addEventListener('click', () => handleClick(i));
  }
}

init();
