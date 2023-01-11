const $menuIcon = document.getElementById("navbar__menu-icon");
const $menu = document.getElementById("menu");

$menuIcon.addEventListener("click", () => $menu.classList.toggle("show"));