export default function renderProperties(project) {
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