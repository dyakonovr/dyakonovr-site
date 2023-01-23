(function () {
  fetch("https://63cd060bfba6420d4d67391b.mockapi.io/dyakonovr_site")
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

  function renderHero(project, projectName) {
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

  function renderProperties(project) {
    const parentBlock = document.querySelector('#properties-list');

    for (let property in project.properties) {

      parentBlock.innerHTML += `
      <li class="properties__item property box-shadow">
        <strong class="property__title">${property}</strong>
        <span class="property__value">${project.properties[property]}</span>
      </li>
    `;
    }
  }

  function renderDescription(project, review) {
    const parentBlock = document.querySelector('#description');

    for (let descr of project.large_descr) {
      parentBlock.innerHTML += `<p class="description__text">${descr}</p>`;
    }

    parentBlock.innerHTML += `
      <li class="description__review review">
        <div class="review__left">
          <div class="review__image"><img src="${review.img}" alt="${review.name}, ${review.position}"></div>
          <strong class="review__title">${review.name}</strong>
          <span class="review__position">${review.position}</span>
        </div>
        <div class="review__right box-shadow">
          <p class="review__text">${review.text}</p>
        </div>
      </li>
  `;
  }
})()