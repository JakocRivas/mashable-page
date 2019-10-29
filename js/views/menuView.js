import { elements } from "./base";

export const createMenu = ({ name, subMenu }) => {
  let menu = '';

  for (let elem of subMenu) 
    menu += `<li><a>${elem}</a></li>`;

  return ` 
    <li>
      <a>${name}</a>
        <div>
          <ul>
             ${menu}
          </ul>
        </div>
    </li>
  `;
}

export const renderMenus = menu => {
  console.log(menu)
  const markup = createMenu(menu);
  elements.menuContainer.insertAdjacentHTML("beforeend", markup);
};
