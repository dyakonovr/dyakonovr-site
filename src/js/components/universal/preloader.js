import disableScroll from '../../functions/disableScroll.js';
import enableScroll from '../../functions/enableScroll.js';

const preloader = document.querySelector('.preloader');
const preloaderLogo = document.querySelector('.preloader__logo')
const preloaderLogoAfter = document.querySelector('.preloader__shadow');
const headerLogoСoordinates = document.querySelector('.header__logo').getBoundingClientRect();
const preloaderLogoСoordinates = preloaderLogo.getBoundingClientRect();

const preloaderLogoPos = {
  top: preloaderLogoСoordinates.top + window.pageYOffset,
  left: preloaderLogoСoordinates.left + window.pageXOffset
};

const headerLogoPos = {
  top: headerLogoСoordinates.top + window.pageYOffset,
  left: headerLogoСoordinates.left + window.pageXOffset
};

const images = document.images;
const imagesTotal = images.length;
let imagesLoaded = 0;


if (preloader) {

  disableScroll();

  for (let i = 0; i < imagesTotal; i++) {
    let imageClone = new Image();
    imageClone.onload = imageLoaded;
    imageClone.onerror = imageLoaded;
    imageClone.src = images[i].src;
  }

  function imageLoaded() {
    imagesLoaded++;
    let percent = (((100 / imagesTotal) * imagesLoaded) << 0);
    preloaderLogoAfter.style.width = `${percent}%`;

    if (imagesLoaded >= imagesTotal) {
      setTimeout(function () {
        if (!preloader.classList.contains('preloader__done')) {
          preloaderLogo.classList.add("preloader__logo--done");
          preloaderLogo.style.transform = `translate(-${preloaderLogoPos.left - headerLogoPos.left + 88}px, -${preloaderLogoPos.top - headerLogoPos.top + 28}px)`
          preloader.classList.add('preloader__done');
          setTimeout(enableScroll, 100);
        }
      }, 1200)
    }
  }
}