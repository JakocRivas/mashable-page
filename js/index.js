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
        {
          title: "menusito 1",
          subArticles: ["article 1", "article 2", "super articulo numero tres"]
        },

        {
          title: "menusito 2",
          subArticles: ["article 1", "article 2", "super articulo numero tres"]
        },

        {
          title: "menusito 3",
          subArticles: ["article 1", "article 2", "super articulo numero tres"]
        }
      ],
      type: "subMenu"
    },

    {
      name: "CULTURE",
      subMenu: [{ title: "bimbo" }, { title: "holiwis" }],
      type: "submenu"
    },
    {
      name: "TECH",
      subMenu: [{ title: "simbo" }],
      type: "submenu"
    },
    {
      name: "SCIENCE",
      subMenu: [{ title: "jimbo" }],
      type: "submenu"
    },
    {
      name: "SOCIAL GOOD",
      subMenu: [{ title: "dumbo" }],
      type: "submenu"
    },
    {
      name: "SHOP",
      subMenu: [{ title: "sumbo" }],
      type: "menu-more"
    },
    {
      name: "MORE",
      subMenu: [{ title: "jumbo" }],
      type: "menu-more"
    }
  ];
  // console.log(elems);

  // for (let elem of elems) {
  //   console.log(elem);
  // }
  // elems.forEach((element, index, array) => {
  //   console.log(element.name); // 100, 200, 300
  //   console.log(element.subMenu); // 0, 1, 2
  //   console.log(element.type); // same myArray object 3 times
  // });
  for (let elem of elems) state.menu.addMenu(elem);
  // console.log(elems);

  const icons = [
    {
      name: "search"
    },
    { name: "facebook" },
    { name: "twitter" },
    { name: "profile" }
  ];
  for (let elem of icons) {
    state.menu.addMenu(elem);
  }
  // console.log(state.menu);

  state.menu.menus.map(menu => {
    menuView.renderMenus(menu);
  });
  state.menu.more.map(menu => {
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
