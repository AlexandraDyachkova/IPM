document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu__toggle');
    var header = document.querySelector('.header');

    menuToggle.addEventListener('change', function() {
        if (this.checked) {
            header.classList.add('menu-open');
        } else {
            header.classList.remove('menu-open');
        }
    });
});