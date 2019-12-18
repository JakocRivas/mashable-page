import lozad from "lozad";

import checkElement from "../utils/dom";
import Menu from "./models/menu";
import * as menuView from "./views/menuView";
import * as navMenus from "../utils/navMenus";

const state = {};

/**
 * On mouse over event
 *
 * @event <.article>#[event:]<mouseover>
 *
 * @desc Looks for al the elements with class .articles and applies mouseover event. When the mouse is over the element it adds the "hidden" class to them
 * and instantiate them in the let "clicked element" so the page nows what was the last element to have triggered this event and remove the class "hidden" when another element triggers the event.
 *
 */
function addDisplayOnHover() {
  const elementContained = document.querySelectorAll(".article");
  let clickedElement;
  [...elementContained].forEach(elem => {
    elem.addEventListener("mouseover", function() {
      const dynamicClassName = elem.getAttribute("class").split(" ");
      if (clickedElement) {
        clickedElement.classList.remove("hidden");
      }
      clickedElement = document.querySelector(`div.${dynamicClassName[1]}`);
      document
        .querySelector(`div.${dynamicClassName[1]}`)
        .classList.toggle("hidden");
    });
  });
}
const controlMenu = async () => {
  // Creates instance of Menu if there is not to store all the menu types.
  if (!state.menu) state.menu = new Menu();

  // Waits for all the menu items
  const elemsData = await navMenus.elems;

  // Creates a list of all the menus after waiting for it's subArticles property to resolve.
  const elems = await Promise.all(
    elemsData.map(elem => {
      return elem;
    })
  );
  // Push each resolve menu element with type "menu" to the state.
  elems.forEach(elem => {
    state.menu.addMenu(elem);
  });

  // Push all the social media icons to the state after pushing all menus with type "menu"
  navMenus.icons.forEach(elem => state.menu.addMenu(elem));

  // Render all the menus of the state with type "menu".
  state.menu.menus.forEach(menu => {
    menuView.renderMenus(menu);
  });
  // Render all the menus of the state with type "menu-more".
  state.menu.more.forEach(menu => {
    menuView.renderSocial(menu);
  });
  addDisplayOnHover();

  // An instance of lozad
  const observer = lozad(); // lazy loads elements with default selector as '.lozad'
  observer.observe();
  // Checks each image element of the site and applies lazy loading with lozad.
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

  // Toggle nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // Animate links
    navLinks.forEach((link, index) => {
      link.style.animation = link.style.animation
        ? ""
        : `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
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
