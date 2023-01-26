export default function renderProjects(data) {
  const parentBlock = document.querySelector('#projects-list');

  for (let projectName in data) {
    const project = data[projectName];

    parentBlock.innerHTML += `
      <li class="projects__item project box-shadow">
          <a href="project.html?name=${projectName}" class="project__ref">
            <div class="project__image" style="background-color: ${project.main_color};"><img src="${project.img}" alt="${projectName}"></div>
            <div class="project__right">
              <strong class="project__title" style="color: ${project.main_color};">${projectName}</strong>
              <p class="project__descr">${project.descr}</p>
              <span class="project__link">Посмотреть проект</span>
            </div>
          </a>
      </li>
    `;
  }
}