(function () {
  const sectionsList = document.querySelectorAll('section[data-section-title]');
  const navLists = document.querySelectorAll('nav ul[data-section]');
  
  for (let i = 0; i < sectionsList.length; i++) {
    const section = sectionsList[i];
    const sectionID = section.getAttribute('id');
    const sectionTitle = section.getAttribute('data-section-title');
    
    for (let i = 0; i < navLists.length; i++) {
      const list = navLists[i];
      const currentSection = list.getAttribute('data-section'); // В какой секции находится NAV
      list.innerHTML += `<li class="${currentSection}__item nav__item" data-menu-item><a href="#${sectionID}"
        class="${currentSection}__link nav__link link-hover">${sectionTitle}</a></li>`
    }
  };
  
})()