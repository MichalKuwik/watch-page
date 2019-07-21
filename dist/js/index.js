//Get dom element
const hamburger_menu = document.querySelector('.header__menu-hamburger-div');

//state of menu flag
let activeMenu = false;

//onclick
hamburger_menu.addEventListener('click', () => {
  const lines = document.querySelectorAll('.header__menu-hamburger-div > div');
  if (!activeMenu) {
    lines.forEach(line => {
      line.classList.add('active');
      activeMenu = true;
    });
  } else {
    lines.forEach(line => {
      line.classList.remove('active');
      activeMenu = false;
    });
  }
});

//hie menu on scroll,show menu on scroll top
let scrollPos = 0;
const nav = document.querySelector('.header');

function checkPosition() {
  let windowY = window.scrollY;
  if (windowY < scrollPos) {
    // Scrolling UP
    nav.classList.add('is-visible');
    nav.classList.remove('is-hidden');
  } else {
    // Scrolling DOWN
    nav.classList.add('is-hidden');
    nav.classList.remove('is-visible');
  }
  scrollPos = windowY;
}
window.addEventListener('scroll', checkPosition);