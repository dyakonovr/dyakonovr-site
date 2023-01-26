export default function renderHero(project, projectName) {
  const parentBlock = document.querySelector('#hero-container');

  parentBlock.innerHTML += `
      <div class="hero__wrapper">
        <h1 class="hero__title">${projectName}</h1>
        <p class="hero__descr">${project.descr}</p>
        <a href="#" class="hero__link btn">Посмотреть работу</a>
      </div>
      <div class="hero__image">
        <img src="${project.img}" alt="${projectName} screenshot">
      </div>
    `;
}