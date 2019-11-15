import elements from "./base";

const uniqid = require("uniqid");

export const createMenu = ({ name, subMenu, type, id }) => {
  let menu = "";
  const className = type === "menu-more" ? "more" : "submenu";
  let subArticle = "";
  let column = "";

  function createArticleLI(submenu) {
    const map = submenu.subArticles.map(subMenuLI => {
      return `<li class="menu__more-sub-article">
                  <a class="title-label">${subMenuLI}</a>
              </li>
              `;
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

      column += ` 
                <ul class="menu__more-articles">
                    <li class="title-menu-more">${element.title}</li>${article}
                </ul>
                `;
    });
  }

  subMenu.forEach(elem => {
    const newID = uniqid("id-");
    let article = "";

    if (elem.subArticles && elem.subArticles.length > 0) {
      id = newID;
      article += createArticleLI(elem, id);
    }

    subArticle += `
                  <div class="subArticles ${newID}">
                      <ul class="article-post">${article}</ul>
                  </div>
                  `;

    menu += `
            <li class="article ${newID}">
                <a class="article-font">${elem.title}</a>
            </li>
            `;
  });
  return `
        <li class="title-menu">
          <a class="title-name ${id}">${name}</a>
            ${
              subMenu.length > 0
                ? type !== "menu-more"
                  ? `<div class='submenu-container'><div><ul class='${className}'>${menu}</ul></div><div class="sub-articles-container">${subArticle}</div></div>`
                  : `<div class='submenu-container'><ul class='${className}'>${column}</ul></div>`
                : ""
            }
        </li>
  `;
};

export const createSocial = ({ name }) => {
  return `
        <li class="title-social">
            <a class="title-name">${name}</a>
        </li>
      `;
};

export const renderMenus = menu => {
  const markup = createMenu(menu);
  elements.menuContainer.insertAdjacentHTML("beforeend", markup);
};

export const renderSocial = menu => {
  const markup = createSocial(menu);
  elements.socialContainer.insertAdjacentHTML("beforeend", markup);
};
