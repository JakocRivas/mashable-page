import elements from "./base";

import {
  articleLiMarkUp,
  columnMarkUp,
  subArticleMarkUp,
  menuMarkUp,
  navBarSocialMarkUp,
  navBarMenuMarkUp
} from "../../utils/markUp";

const uniqid = require("uniqid");

export const createMenu = ({ name, subMenu, type, id }) => {
  let menu = "";
  const className = type === "menu-more" ? "more" : "submenu";
  let subArticle = "";
  let column = "";

  function createArticleLI(submenu) {
    const map = submenu.subArticles.map(subMenuLI => {
      return articleLiMarkUp(subMenuLI);
    });
    return map.join().replace(/,/g, "");
  }

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

export const createSocial = ({ name }) => {
  return navBarSocialMarkUp(name);
};

export const renderMenus = menu => {
  const markup = createMenu(menu);
  elements.menuContainer.insertAdjacentHTML("beforeend", markup);
};

export const renderSocial = menu => {
  const markup = createSocial(menu);
  elements.socialContainer.insertAdjacentHTML("beforeend", markup);
};
