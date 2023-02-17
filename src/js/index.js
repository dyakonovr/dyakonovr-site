// Раскоментировать, если нужен .webp
// import { isWebp } from "./functions/isWebp.js";
// isWebp();

import "./default/_vendor.js";

import "./components/aosInit.js";
import "./components/preloader.js";
import "./components/skillsSwiper.js";
import "./components/reviewsSwiper.js";
import "./components/notification.js";
import "./functions/burger.js";

// Рендер блоков
import renderProjects from './components/renderProjects.js';
import renderReviews from './components/renderReviews.js';
import vars from './default/_vars.js';

fetch(vars.url)
  .then(response => response.json())
  .then(response => {
    const data = response[0];

    renderProjects(data.projects);
    renderReviews(data.reviews);
  })
