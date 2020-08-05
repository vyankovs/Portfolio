const menuBurger = document.querySelector(".menu-burger");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const main = document.querySelector("main");

let showMenu = false;

menuBurger.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBurger.classList.add("close");
    menu.classList.add("show");
    menuBranding.classList.add("show");
    menuNav.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));
    main.classList.add("hide");

    showMenu = true;
  } else {
    menuBurger.classList.remove("close");
    menu.classList.remove("show");
    menuBranding.classList.remove("show");
    menuNav.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));
    main.classList.remove("hide");
    showMenu = false;
  }
}
