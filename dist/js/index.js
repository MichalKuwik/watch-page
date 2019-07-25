//Get dom element
const hamburger_menu = document.querySelector('.header__menu-hamburger-div');
const menu = document.querySelector('.header__menu');
const menu__items = document.querySelectorAll('.header__menu-link');

// menu flag
let activeMenu = false;

//First function to do menu's actions
const menuActions = () => {

  const lines = document.querySelectorAll('.header__menu-hamburger-div > div');

  if (!activeMenu) {
    lines.forEach(line => {
      line.classList.add('active');
      activeMenu = true;
    });
    menu__items.forEach(item => {
      item.classList.add('active__link');
      activeMenu = true;
    })
    menu.classList.add('active__menu');
    activeMenu = true;
  } else {
    lines.forEach(line => {
      line.classList.remove('active');
      activeMenu = false;
    });
    menu__items.forEach(item => {
      item.classList.remove('active__link');
      activeMenu = false;
    });

    menu.classList.remove('active__menu');
    activeMenu = false;
  }
}
//onclick function menuActions
hamburger_menu.addEventListener('click', menuActions);

//--------------------------------------------------------------------------------------------//

//hie menu on scroll,show menu on scroll top
let scrollPos = 0;
const nav = document.querySelector('.header');

const checkPosition = () => {
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



// //function change img onclick
//Get DOM elements for change watch's image
const watch_arr = ['./img/watch-light.png', './img/watch-dark.png', './img/watch.png'];
const img_div = document.getElementById('main__section2-img');
const dots = document.querySelectorAll('.main__section2-dot');

function initAllTime(){
  dots.forEach((dot, index) => {
    dot.addEventListener('click', function () {
      if (index === 0) {
        img_div.setAttribute('src', watch_arr[0]);
      } else if (index === 1) {
        img_div.setAttribute('src', watch_arr[1]);
      } else {
        img_div.setAttribute('src', watch_arr[2]);
      }
    })
  })
}
initAllTime(); //call the function


