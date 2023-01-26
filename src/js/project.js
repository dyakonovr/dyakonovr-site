// Раскоментировать, если нужен .webp
// import { isWebp } from "./functions/isWebp.js";
// isWebp();

import "./default/_vendor.js";

import "./components/universal/aosInit.js";
import "./components/universal/anchors.js";
import "./components/universal/preloader.js";
import "./functions/burger.js";

// Рендер блоков
import vars from './default/_vars.js';
import renderHero from './components/project/renderHero.js';
import renderProperties from './components/project/renderProperties.js';
import renderDescription from './components/project/renderDescription.js';

fetch(vars.url)
  .then(response => response.json())
  .then(response => {
    const data = response[0];

    const GETparams = (new URL(document.location)).searchParams;
    const projectName = GETparams.get("name");
    const project = data.projects[projectName];
    const review = data.reviews[projectName];

    renderHero(project, projectName);
    renderProperties(project);
    renderDescription(project, review);
  })