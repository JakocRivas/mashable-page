import { elements } from "./base";

export const createMenu = ({ name, subMenu, type }) => {
  let menu = "";
  let subArticle = "";
  let className = type === "menu-more" ? "more" : "submenu";
  // console.log(subMenu.length);

  subMenu.map((elem, index) => {
    // console.log(elem.title);
    // console.log(elem.subArticles[0]);
    menu += `<li class="article ${index}"><a class="article-font">${elem.title}</a></li>`;

    if (elem.subArticles) {
      subArticle += `<li class="article ${index}"><a class="article-font">${elem.subArticles[index]}</a></li>`;
    }
  });
  console.log(subArticle);

  return `
    <li class="title-menu">
      <a class="title-name">${name}</a>
        ${
          subMenu.length > 0
            ? type !== "menu-more"
              ? `<div class='submenu-container'><ul class='${className}'>${menu}</ul></div>`
              : `<div class='submenu-container'><ul class='${className}'>${"more menu"}</ul></div>`
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
