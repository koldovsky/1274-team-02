document.querySelector('.header__navigation-drop_down_menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header__navigation-menu').classList.toggle('button_open');
})