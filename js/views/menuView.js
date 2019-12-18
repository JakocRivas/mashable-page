import elements from "./base";

/**
 * @typedef {import('../../utils/markUp.js')}
 */
import {
  articleLiMarkUp,
  columnMarkUp,
  subArticleMarkUp,
  menuMarkUp,
  navBarSocialMarkUp,
  navBarMenuMarkUp
} from "../../utils/markUp";

const uniqid = require("uniqid");

/**
 *
 * @param { string } name
 * @param { object } subMenu
 * @param { string } type
 * @param { string } id An string that each subMenu and they submenu articles will have to identified witch subArticle belongs to each submenu.
 * this id will be assigned when the subArticle and the submenu is created.
 *
 * @returns { string } Returns an html snippet with all the menus that will be inserted in the html.
 */
const createMenu = ({ name, subMenu, type, id }) => {
  let menu = "";
  const className = type === "menu-more" ? "more" : "submenu";
  let subArticle = "";
  let column = "";

  /**
   *
   * @param { object } submenu Creates an html snippet using the submenu object of the menu
   * @returns { string } Html snippet created with the imported function
   */
  function createArticleLI(submenu) {
    const map = submenu.subArticles.map(subMenuLI => {
      return articleLiMarkUp(subMenuLI);
    });
    return map.join().replace(/,/g, "");
  }
  // check the type of the menu and creates the html snippet of the subMenus and subArticles and creates the id for each one
  if (type === "menu-more") {
    subMenu.forEach(element => {
      const newID = uniqid();
      let article = "";
      if (element.subArticles && element.subArticles.length > 0) {
        id = newID;
        article += createArticleLI(element, id);
      }

      column += columnMarkUp(element, article);
    });
  }

  subMenu.forEach(elem => {
    const newID = uniqid("id-");
    let article = "";

    if (elem.subArticles && elem.subArticles.length > 0) {
      id = newID;
      article += createArticleLI(elem, id);
    }

    subArticle += subArticleMarkUp(newID, article);

    menu += menuMarkUp(id, elem);
  });

  // Returns the html snippet for the navbar
  return navBarMenuMarkUp(
    id,
    name,
    subMenu,
    type,
    className,
    menu,
    subArticle,
    column
  );
};

export const renderMenus = menu => {
  const markup = createMenu(menu);
  elements.menuContainer.insertAdjacentHTML("beforeend", markup);
};

export const renderSocial = menu => {
  const markup = navBarSocialMarkUp(menu.name);
  elements.socialContainer.insertAdjacentHTML("beforeend", markup);
};
