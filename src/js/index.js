// Раскоментировать, если нужен .webp
// import { isWebp } from "./functions/isWebp.js";
// isWebp();

import "./default/_vendor.js";

import "./components/universal/aosInit.js";
import "./components/universal/preloader.js";
import "./components/universal/anchors.js";
import "./components/index/skillsSwiper.js";
import "./components/index/reviewsSwiper.js";
import "./functions/burger.js";

// Рендер блоков
import renderProjects from './components/index/renderProjects.js';
import renderReviews from './components/index/renderReviews.js';
import vars from './default/_vars.js';

fetch(vars.url)
  .then(response => response.json())
  .then(response => {
    const data = response[0];

    renderProjects(data.projects);
    // renderReviews(data.reviews);
  })
