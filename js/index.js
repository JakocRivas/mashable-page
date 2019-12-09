import lozad from "lozad";
import checkElement from "../utils/dom";

import Menu from "./models/menu";
import * as menuView from "./views/menuView";

import * as navMenus from "../utils/navMenus";

const state = {};

function addDisplayOnHover() {
  const elementContained = document.querySelectorAll(".article");
  let clickedElement;
  [...elementContained].forEach(async elem => {
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
}
const controlMenu = async () => {
  if (!state.menu) state.menu = new Menu();

  const elemsData = await navMenus.elems;
  const elems = await Promise.all(
    elemsData.map(async elem => {
      return elem;
    })
  );
  elems.forEach(async elem => {
    state.menu.addMenu(elem);
  });

  const { icons } = navMenus;

  icons.forEach(elem => state.menu.addMenu(elem));

  state.menu.menus.forEach(menu => {
    menuView.renderMenus(menu);
  });
  state.menu.more.forEach(menu => {
    menuView.renderSocial(menu);
  });
  addDisplayOnHover();
  const observer = lozad(); // lazy loads elements with default selector as '.lozad'
  observer.observe();
  [].forEach.call(document.querySelectorAll("img"), el => {
    el.onerror = () => {
      if (el.getAttribute("src") !== "../img/lazy_pixel.jpg") {
        el.src =
          "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-stock-vector-no-image-available-icon-flat-vector.jpg?ver=6";
      }
    };
  });
};

/* HAMBURGER CONTROLLER */
const navSlide = async () => {
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector(".menu-links");
  const navLinks = await checkElement(".title-menu:not(:first-child)");

  console.log(burger);
  console.log(nav);
  console.log(navLinks);

  // Toggle nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // Animate links
    navLinks.forEach((link, index) => {
      console.log(link);
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          1.5}s`;
      }
      console.log(link.style.animation);
    });

    // Burger animation
    burger.classList.toggle("toggle");
  });
};

async function init() {
  await controlMenu();
  await navSlide();
}

init();
