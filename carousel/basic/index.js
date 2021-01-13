const slideList = document.querySelector('.slide_list');
const slideContents = document.querySelectorAll('.list_box');
const slideNextBtn = document.querySelector('.next_btn');
const slidePrevBtn = document.querySelector('.prev_btn');

const SLIDE_LEN = slideContents.length;
const SLIDE_WIDTH = 500;
const SLIDE_SPEED = 300;
const SLIDE_ACTIVE = 'active';

// 맨 앞, 뒤쪽에 slide 추가하기
const firstChild = slideList.firstElementChild;
const lastChild = slideList.lastElementChild;
const clonedFirst = firstChild.cloneNode(true);
const clonedLast = lastChild.cloneNode(true);

slideList.appendChild(clonedFirst);
slideList.insertBefore(clonedLast, slideList.firstElementChild);

slideList.style.transform = `translate3d(-${SLIDE_WIDTH}px, 0px, 0px)`;

let curIndex = 0;
let curSlide = slideContents[curIndex];
curSlide.classList.add(SLIDE_ACTIVE);

/*Next Button Event*/
slideNextBtn.addEventListener('click', () => {
  if (curIndex <= SLIDE_LEN - 1) {
    slideList.style.transition = `${SLIDE_SPEED}ms`;
    slideList.style.transform = `translate3d(-${
      SLIDE_WIDTH * (curIndex + 2)
    }px, 0px, 0px)`;
    if (curIndex === SLIDE_LEN - 1) {
      setTimeout(() => {
        slideList.style.transition = '0ms';
        slideList.style.transform = `translate3d(-${SLIDE_WIDTH}px, 0px, 0px)`;
      }, SLIDE_SPEED);
      curIndex = -1;
    }
    curSlide.classList.remove(SLIDE_ACTIVE);
    curSlide = slideContents[++curIndex];
    curSlide.classList.add(SLIDE_ACTIVE);
  }
});

/*Prev Button Event*/
slidePrevBtn.addEventListener('click', () => {
  if (curIndex >= 0) {
    slideList.style.transition = `${SLIDE_SPEED}ms`;
    slideList.style.transform = `translate3d(-${
      SLIDE_WIDTH * curIndex
    }px, 0px, 0px)`;
    if (curIndex === 0) {
      setTimeout(() => {
        slideList.style.transition = '0ms';
        slideList.style.transform = `translate3d(-${
          SLIDE_WIDTH * SLIDE_LEN
        }px, 0px, 0px)`;
      }, SLIDE_SPEED);
      curIndex = SLIDE_LEN;
    }
    curSlide.classList.remove(SLIDE_ACTIVE);
    curSlide = slideContents[--curIndex];
    curSlide.classList.add(SLIDE_ACTIVE);
  }
});
