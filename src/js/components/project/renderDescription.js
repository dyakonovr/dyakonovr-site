export default function renderDescription(project, review) {
  const parentBlock = document.querySelector('#description-content');

  for (let descr of project.large_descr) {
    parentBlock.innerHTML += `<p class="description__text" data-aos="fade-up" data-aos-offset="200">${descr}</p>`;
  }

  parentBlock.innerHTML += `
      <li class="description__review review" data-aos="fade-up" data-aos-offset="200">
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