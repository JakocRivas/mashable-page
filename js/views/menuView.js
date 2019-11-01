import { elements } from "./base";

export const createMenu = ({ name, subMenu, type }) => {
  let menu = "";
  let className = type === "menu-more" ? "more" : "submenu";
  console.log(subMenu.length);

  subMenu.map(elem => {
    console.log(elem.title);
    console.log(elem.subArticles);
    menu += `<li class="article"><a class="article-font">${elem.title}</a></li>`;
  });

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

  return markUp;
};

export const renderMenus = menu => {
  const markup = createMenu(menu);
  elements.menuContainer.insertAdjacentHTML("beforeend", markup);
};

export const renderSocial = menu => {
  const markup = createSocial(menu);
  elements.socialContainer.insertAdjacentHTML("beforeend", markup);
};
