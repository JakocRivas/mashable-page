import Menu from "./models/menu";
import * as menuView from "./views/menuView";

import * as navMenus from "../utils/navMenus";

const state = {};

const controlMenu = async () => {
  if (!state.menu) state.menu = new Menu();
  // console.log(await navMenus.elems);

  const elems = await navMenus.elems;
  elems.map(async elem => console.log(await elem));
  elems.map(async elem => state.menu.addMenu(await elem));

  const { icons } = navMenus;

  icons.forEach(elem => state.menu.addMenu(elem));

  state.menu.menus.forEach(menu => {
    menuView.renderMenus(menu);
  });
  state.menu.more.forEach(menu => {
    menuView.renderSocial(menu);
  });
};
controlMenu();

const elementContained = document.querySelectorAll(".article");
let clickedElement;

Array.from(elementContained).forEach(elem => {
  elem.addEventListener("mouseover", function() {
    const id = elem.getAttribute("class").split(" ");
    if (clickedElement) {
      clickedElement.classList.remove("hidden");
    }
    const hoveredElement = document.querySelector(`div.${id[1]}`);
    clickedElement = hoveredElement;
    document.querySelector(`div.${id[1]}`).classList.toggle("hidden");
  });
});

/* HAMBURGER CONTROLLER */
const navSlide = () => {
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector(".menu-links");
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
