(function () {
  fetch("https://63cd060bfba6420d4d67391b.mockapi.io/dyakonovr_site")
    .then(response => response.json())
    .then(response => {
      const data = response[0];

      renderProjects(data.projects);
      renderReviews(data.reviews);
    })

  function renderProjects(data) {
    const parentBlock = document.querySelector('#projects-list');

    for (let projectName in data) {
      const project = data[projectName];

      parentBlock.innerHTML += `
      <li class="projects__item project box-shadow">
        <div class="project__image" style="background-color: ${project.main_color};"><img src="${project.img}" alt="${projectName}"></div>
        <div class="project__right">
          <strong class="project__title" style="color: ${project.main_color};">${projectName}</strong>
          <p class="project__descr">${project.descr}</p>
          <a href="project.html?name=${projectName}" class="project__link link-hover">Посмотреть проект</a>
        </div>
      </li>
    `;
    }
  }

  function renderReviews(data) {
    const parentBlock = document.querySelector('#reviews-list');
    for (let projectName in data) {
      const project = data[projectName];

      parentBlock.innerHTML += `
      <li class="reviews__item review">
        <div class="review__left">
          <div class="review__image"><img src="${project.img}" alt="${project.name}, ${project.position}"></div>
          <strong class="review__title">${project.name}</strong>
          <span class="review__position">${project.position}</span>
        </div>
        <div class="review__right box-shadow">
          <p class="review__text">${project.text}</p>
        </div>
      </li>
    `;
    }
  }
})();