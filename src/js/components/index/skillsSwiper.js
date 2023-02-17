import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('#skills-swiper', {
  // spaceBetween: 15,
  modules: [Navigation, Pagination, Autoplay],
  direction: 'horizontal',

  pagination: {
    el: '.swiper-pagination--skills',
    clickable: true,
  },

  autoplay: {
    delay: 3000,
  },

  navigation: {
    nextEl: '.swiper-button-next--skills',
    prevEl: '.swiper-button-prev--skills',
  },

  breakpoints: {
    1100: {
      slidesPerView: 5,
    },

    1024: {
      slidesPerView: 4,
      loop: true
    },

    768: {
      slidesPerView: 3,
      loop: true
    },

    500: {
      slidesPerView: 2,
      loop: true
    },

    320: {
      slidesPerView: 1,
      loop: true
    }
  }
});