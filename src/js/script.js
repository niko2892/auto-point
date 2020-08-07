function hamburger() {
    const hamMenu = document.querySelector('.header__list'),
      btn = document.querySelector('.hamburger'),
      links = document.querySelectorAll('.header__link');


    btn.addEventListener('click', () => {
        btn.classList.toggle('hamburger_active');
        hamMenu.classList.toggle('header__list_active');
    });
    links.forEach(link => {
        link.addEventListener('click', () => {
            hamMenu.classList.remove('header__list_active');
        });
    });
}

hamburger();
