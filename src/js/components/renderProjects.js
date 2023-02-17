export default function renderProjects(data) {
  const parentBlock = document.querySelector('#projects-list');

  for (let projectName in data) {
    const project = data[projectName];

    parentBlock.innerHTML += `
      <li class="projects__item project">
        <img src="${project.imgs.preview}" alt="${projectName} preview" class="project__preview"/>
        <a href="${project.src}" class="project__wrapper">
          <p class="project__descr">${project.descr}</p>
          <span class="project__link">Посмотреть проект</span>
        </a>
      </li>
    `;

  }
}