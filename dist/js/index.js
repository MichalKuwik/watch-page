const hamburger_menu = document.querySelector('.header__menu-hamburger-div');



hamburger_menu.addEventListener('click', () => {
  const lines = document.querySelectorAll('.header__menu-hamburger-div > div');
  lines.forEach(line => {
    line.classList.toggle('active');
  });
});