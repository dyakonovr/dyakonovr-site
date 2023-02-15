import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('#skills-swiper', {
  slidesPerView: 5,
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
});