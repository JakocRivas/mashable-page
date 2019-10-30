import { elements } from "./base";

export const createMenu = ({ name, subMenu, type }) => {
  let menu = "";
  let className = type === "menu-more" ? "more" : "submenu";

  for (let elem of subMenu) menu += `<li><a>${elem}</a></li>`;

  return `
    <li>
      <a>${name}</a>
        ${
          subMenu.length > 0
            ? `
          <div class='submenu-container'>
            <ul class='${className}'>
              ${menu}
            </ul>
          </div>
        `
            : ""
        }
    </li>
  `;
};

export const renderMenus = menu => {
  const markup = createMenu(menu);
  elements.menuContainer.insertAdjacentHTML("beforeend", markup);
};
