function lazyLoad() {
  const lazyImgArr = document.querySelectorAll('.lazy');
  if (lazyImgArr.length === 0) {
    document.removeEventListener('scroll', lazyLoad);
    window.removeEventListener('resize', lazyLoad);
    window.removeEventListener('orientationchange', lazyLoad);
    return;
  }

  lazyImgArr.forEach((img) => {
    if (img.offsetTop < window.innerHeight + window.scrollY) {
      img.src = img.dataset.src;
      img.classList.remove('lazy');
    }
  });
}

function handleUpload() {
  document.addEventListener('scroll', lazyLoad);
  window.addEventListener('resize', lazyLoad);
  window.addEventListener('orientationchange', lazyLoad);
}

function init() {
  document.addEventListener('DOMContentLoaded', handleUpload);
}

init();
