import Menu from "./models/menu";
import * as menuView from "./views/menuView";
import { elements } from "./views/base";

let state = {};

const controlMenu = () => {
  if (!state.menu) state.menu = new Menu();

  const elems = [
    {
      name: "VIDEO"
    },
    {
      name: "ENTERTAINMENT",
      subMenu: [
        "menusito 1",
        "menusito 2",
        "menusito 3",
        "menusito super especial"
      ],
      type: "submenu"
    },
    {
      name: "CULTURE",
      subMenu: ["bimbo"],
      type: "submenu"
    },
    {
      name: "TECH",
      subMenu: ["simbo"],
      type: "submenu"
    },
    {
      name: "SCIENCE",
      subMenu: ["jimbo"],
      type: "submenu"
    },
    {
      name: "SOCIAL GOOD",
      subMenu: ["dumbo"],
      type: "submenu"
    },
    {
      name: "SHOP",
      subMenu: ["sumbo"],
      type: "menu-more"
    },
    {
      name: "MORE",
      subMenu: ["jumbo"],
      type: "menu-more"
    }
  ];

  for (let elem of elems) state.menu.addMenu(elem);

  const icons = [
    {
      name: "search"
    },
    { name: "facebook" },
    { name: "twitter" },
    { name: "profile" }
  ];
  for (let elem of icons) {
    console.log(elem);
    state.menu.addMenu(elem);
  }
  console.log(state.menu);

  state.menu.menus.forEach(menu => {
    menuView.renderMenus(menu);
  });
  state.menu.more.forEach(menu => {
    menuView.renderSocial(menu);
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
