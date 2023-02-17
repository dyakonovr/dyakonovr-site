export default function renderReviews(data) {
  const parentBlock = document.querySelector('#reviews-list');
  for (let projectName in data) {
    const project = data[projectName];

    parentBlock.innerHTML += `
      <div class="swiper-slide reviews__item review">
        <div class="review__top">
          <div class="review__image"><img src="${project.img}" alt="${project.name}, ${project.position}"></div>
          <strong class="review__title">${project.name}</strong>
          <span class="review__position">${project.position}</span>
        </div>
        <div class="review__bottom">
          <p class="review__text">${project.text}</p>
        </div>
      </div>
    `;
  }
}