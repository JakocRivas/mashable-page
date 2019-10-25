import { elements } from "./base";

export const createMenu = menu => ` 
        <li>
            <a>${menu.name}</a>
        </li>
`;

export const renderMenus = menu => {
  const markup = createMenu(menu);
  elements.menuContainer.insertAdjacentHTML("beforeend", markup);
};
