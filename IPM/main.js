document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu__toggle");
    const headerList = document.querySelector(".header__list");

    menuToggle.addEventListener("change", function() {
        if (this.checked) {
            headerList.style.display = "flex";
        } else {
            headerList.style.display = "none";
        }
    });
});