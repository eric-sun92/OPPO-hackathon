let burger = document.querySelector('.navbar-burger');
let mainMenu = document.querySelector('.main-menu');

burger.addEventListener('click', () => {
  // const target = document.querySelector('.navbar-menu');
  burger.classList.toggle('is-active');
  mainMenu.classList.toggle('hidden');
});