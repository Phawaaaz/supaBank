'use strict';
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', (e) => {
  // Matching Strategy
  const clicked = e.target.closest('.operations__tab');

  // Gaurd Clause
  if (!clicked) return;

  // Active tab
  tabs.forEach((tabelement) =>
    tabelement.classList.remove('operations__tab--active')
  );
  clicked.classList.add('operations__tab--active');

  // Activate content area
  tabsContent.forEach((content) =>
    content.classList.remove('operations__content--active')
  );
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
