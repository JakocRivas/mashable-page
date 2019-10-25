import Menu from "./models/menu";
import * as menuView from "./views/menuView";
console.log(menuView);
import { elements } from "./views/base";

let state = {};

const controlMenu = () => {
  if (!state.menu) state.menu = new Menu();
  state.menu.addMenu("new Menu");
  state.menu.addMenu("new Menu 2");
  console.log(state.menu.menus);

  state.menu.menus.forEach(menu => {
    console.log(menu.name);
    menuView.renderMenus(menu.name);
  });
};
controlMenu();

// const navSlide = () => {
//   const burger = document.querySelector(".hamburger");
//   const nav = document.querySelector(".menu-links");
//   const navLinks = document.querySelectorAll(".menu-links li");

//   // Toggle nav
//   burger.addEventListener("click", () => {
//     nav.classList.toggle("nav-active");

//     // Animate links
//     navLinks.forEach((link, index) => {
//       if (link.style.animation) {
//         link.style.animation = "";
//       } else {
//         link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
//           1.5}s`;
//       }
//     });
//     // Burger animation
//     burger.classList.toggle("toggle");
//   });
// };
// navSlide();
