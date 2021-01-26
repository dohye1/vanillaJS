function handleLoad() {
  const lazyloadImage = document.querySelectorAll('img.lazy');
  let lazyloadThrottleTimeout;

  function lazyload() {
    if (lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }

    lazyloadThrottleTimeout = setTimeout(function () {
      // 현재 스크롤이 위치한 y좌표
      const scrollTop = window.pageYOffset;

      lazyloadImage.forEach(function (img) {
        if (img.offsetTop < scrollTop + window.innerHeight) {
          img.src = img.dataset.src;
          img.classList.remove('lazy');
        }
      });

      // 모든 이미지가 로드된 상태
      if (!lazyloadImage.length) {
        document.removeEventListener('scroll', lazyload);
        window.removeEventListener('resize', lazyload);
        window.removeEventListener('orientationChange', lazyload);
      }
    }, 20);
  }

  document.addEventListener('scroll', lazyload);
  window.addEventListener('resize', lazyload);
  window.addEventListener('orientationChange', lazyload);
}

function init() {
  document.addEventListener('DOMContentLoaded', handleLoad);
}

init();
