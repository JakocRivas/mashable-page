import Menu from "./models/menu";
import * as menuView from "./views/menuView";
import { elements } from "./views/base";

let state = {};

const controlMenu = () => {
  if (!state.menu) state.menu = new Menu();
  
  const elems = [
    {
      name: 'VIDEO',
      subMenu: []
    },
    {
      name: 'ENTERTAINMENT',
      subMenu: ['TOTO1', 'TOTO2', 'Y TOTO 3'],
    },
    {
      name: 'CULTURE',
      subMenu: [],
    },
    {
      name: 'TECH',
      subMenu: []
    },
    {
      name: 'SCIENCE',
      subMenu: [],
    },
    {
      name: 'SOCIAL GOOD',
      subMenu: [],
    },
    {
      name: 'SHOP',
      subMenu: [],
    },
    {
      name: 'MORE',
      subMenu: [],
    },
  ];

  for (let elem of elems) 
    state.menu.addMenu(elem);

  state.menu.menus.forEach(menu => {
    menuView.renderMenus(menu);
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
