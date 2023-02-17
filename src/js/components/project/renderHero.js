export default function renderHero(project, projectName) {
  const parentBlock = document.querySelector('#hero-container');

  parentBlock.innerHTML += `
      <div class="hero__wrapper">
        <h1 class="hero__title">${projectName}</h1>
        <p class="hero__descr">${project.descr}</p>
        <a href="#" class="hero__link link-hover link-hover-different">Ссылка на работу</a>
      </div>
      <div class="hero__image">
        <img src="${project.imgs.fullscreen}" alt="${projectName} screenshot">
      </div>
    `;
}