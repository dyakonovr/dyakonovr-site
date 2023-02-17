import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const reviewsSwiper = new Swiper('#reviews-swiper', {
  // spaceBetween: 15,
  slidesPerView: 1,
  loop: true,
  modules: [Navigation, Pagination, Autoplay],
  direction: 'horizontal',

  pagination: {
    el: '.swiper-pagination--reviews',
    clickable: true,
  },

  speed: 1000,

  autoplay: {
    delay: 6000,
  },

  navigation: {
    nextEl: '.swiper-button-next--reviews',
    prevEl: '.swiper-button-prev--reviews',
  },
});
