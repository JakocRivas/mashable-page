const { elements } = require("./base");

const createMenu = menu => ` 
        <li>
            <a>${menu.name}</a>
        </li>
`;

const renderMenus = menu => {
  const markup = createMenu(menu);
  elements.menuContainer.insertAdjacentHTML("beforeend", markup);
};
