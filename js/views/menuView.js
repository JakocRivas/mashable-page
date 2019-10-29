import { elements } from "./base";

export const createMenu = ({ name }) => ` 
        <li>
            <a>${name}</a>
        </li>
`;

export const renderMenus = menu => {
  console.log(menu)
  const markup = createMenu(menu);
  elements.menuContainer.insertAdjacentHTML("beforeend", markup);
};
