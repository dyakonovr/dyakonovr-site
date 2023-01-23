import { isDesktop } from '../../functions/checkViewport.js';
import disableScroll from '../../functions/disableScroll.js';
import enableScroll from '../../functions/enableScroll.js';

(function () {
  const preloader = document.querySelector('.preloader');
  const preloaderLogo = document.querySelector('.preloader__logo')
  const preloaderLogoAfter = document.querySelector('.preloader__shadow');
  const headerLogoСoordinates = document.querySelector('.header__logo')?.getBoundingClientRect();
  const preloaderLogoСoordinates = preloaderLogo?.getBoundingClientRect();

  // Определяю <section class="hero"></section> и удаляю класс для последующей анимации
  const heroBlockContainer = document.querySelector('#hero-container');
  heroBlockContainer.classList.remove('aos-animate');
  // Определяю <section class="hero"></section> и удаляю класс для последующей анимации END

  const preloaderLogoPos = {
    top: preloaderLogoСoordinates?.top + window.pageYOffset,
    left: preloaderLogoСoordinates?.left + window.pageXOffset
  };

  const headerLogoPos = {
    top: headerLogoСoordinates?.top + window.pageYOffset,
    left: headerLogoСoordinates?.left + window.pageXOffset
  };

  const images = document.images;
  const imagesTotal = images.length;
  let imagesLoaded = 0;


  if (preloader) {

    disableScroll();

    if (imagesTotal > 0) {
      for (let i = 0; i < imagesTotal; i++) {
        let imageClone = new Image();
        imageClone.onload = imageLoaded;
        imageClone.onerror = imageLoaded;
        imageClone.src = images[i].src;
      }
    } else imageLoaded();

    function imageLoaded() {
      imagesLoaded++;
      let percent = (((100 / (imagesTotal || 1)) * imagesLoaded) << 0);
      preloaderLogoAfter.style.width = `${percent}%`;

      if (imagesLoaded >= imagesTotal) {
        setTimeout(function () {
          if (!preloader.classList.contains('preloader__done')) {
            if (isDesktop()) {
              preloaderLogo.classList.add("preloader__logo--done");
              preloaderLogo.style.transform = `translate(-${preloaderLogoPos.left - headerLogoPos.left + 88}px, -${preloaderLogoPos.top - headerLogoPos.top + 28}px)`;
            }
            preloader.classList.add('preloader__done');
            setTimeout(enableScroll, 100);
            setTimeout(function () { heroBlockContainer.classList.add('aos-animate') }, 700); // Анимирую <section class="hero"></section>
          }
        }, 1200)
      }
    }
  }
})()