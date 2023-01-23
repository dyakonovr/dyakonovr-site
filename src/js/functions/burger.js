import { isMobile } from './checkViewport.js';

(function () {
  const burger = document?.querySelector('[data-burger]');
  const menu = isMobile() ? document?.querySelector('[data-menu-mobile]') : document?.querySelector('[data-menu]');
  menu.classList.add("menu"); // Добавляю класс "текущему меню" (для мобилок - header__menu, для планшетов и выше - header__nav)
  
  const menuItems = document?.querySelectorAll('[data-menu-item]');
  const bodyEl = document?.querySelector('body');
  // const overlay = document?.querySelector('[data-menu-overlay]');


  burger?.addEventListener('click', (e) => {
    burger?.classList.toggle('burger--active');
    menu?.classList.toggle('menu--active');

    if (menu?.classList.contains('menu--active')) {
      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Закрыть меню');
      bodyEl.style.overflowY = "hidden";
    } else {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      bodyEl.style.overflowY = "scroll";
    }
  });

  // overlay?.addEventListener('click', () => {
  //   burger?.setAttribute('aria-expanded', 'false');
  //   burger?.setAttribute('aria-label', 'Открыть меню');
  //   burger.classList.remove('burger--active');
  //   menu.classList.remove('menu--active');
  //   enableScroll();
  // });

  menuItems?.forEach(el => {
    el.addEventListener('click', () => {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('burger--active');
      menu.classList.remove('menu--active');
      bodyEl.style.overflowY = "scroll";
    });
  });
})();
