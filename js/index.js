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
          subArticles: [
            "article 1",
            "article 2",
            "super articulo numero tres",
            "number four",
            "and five"
          ]
        },

        {
          title: "menusito 2",
          subArticles: [
            "article 3",
            "article 4",
            "super articulo numero cuatro"
          ]
        },

        {
          title: "menusito 3",
          subArticles: ["article 5", "article 6", "super articulo numero cinco"]
        }
      ],
      type: "subMenu"
    },

    {
      name: "CULTURE",
      subMenu: [
        { title: "bimbo", subArticles: ["super", "super 2", "super3"] },
        { title: "holiwis", subArticles: ["hyper", "super 4", "incredible"] }
      ],
      type: "submenu"
    },
    {
      name: "TECH",
      subMenu: [{ title: "simbo", subArticles: ["dembow"] }],
      type: "submenu"
    },
    {
      name: "SCIENCE",
      subMenu: [{ title: "jimbo", subArticles: ["cyka blyat", "motolcito"] }],
      type: "submenu"
    },
    {
      name: "SOCIAL GOOD",
      subMenu: [{ title: "dumbo", subArticles: ["ypa", "comrade"] }],
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

  for (let elem of elems) state.menu.addMenu(elem);

  const icons = [
    {
      name: "search"
    },
    { name: "facebook" },
    { name: "twitter" },
    { name: "profile" }
  ];

  for (let elem of icons) state.menu.addMenu(elem);

  state.menu.menus.map(menu => {
    menuView.renderMenus(menu);
  });
  state.menu.more.map(menu => {
    menuView.renderSocial(menu);
  });
};
controlMenu();

Array.from(document.querySelectorAll(".article")).forEach(elem => {
  elem.addEventListener("mouseover", function() {
    const id = elem.getAttribute("class").split(" ");
    console.log(id[1]);
    document.querySelector(`div.${id[1]}`).classList.add("hidden");
  });
});
Array.from(document.querySelectorAll(".article")).forEach(elem => {
  elem.addEventListener("mouseout", function() {
    const id = elem.getAttribute("class").split(" ");
    console.log(id[1]);
    document.querySelector(`div.${id[1]}`).classList.remove("hidden");
  });
});

/* HAMBURGER CONTROLLLER */
const navSlide = () => {
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector(".menu-links");
  // ".menu-links li.title-menu:not(:first-child)"
  const navLinks = document.querySelectorAll(".title-menu");

  // Toggle nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          1.5}s`;
      }
    });
    // Burger animation
    burger.classList.toggle("toggle");
  });
};
navSlide();
