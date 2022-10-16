export function headerBurger() {
  const burgerOpen = document.querySelector('.burger-open');
  const burgerClose = document.querySelector('.burger-close');
  const burgerContent = document.querySelector('.header__bottom');

  burgerOpen.addEventListener('click', () => {
    burgerOpen.classList.add('active');
    burgerClose.classList.add('active');
    burgerContent.classList.add('active');
  });

  burgerClose.addEventListener('click', () => {
    burgerClose.classList.remove('active');
    burgerOpen.classList.remove('active');
    burgerContent.classList.remove('active');
  });
}
