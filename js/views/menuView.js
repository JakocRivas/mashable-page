import { elements } from "./base";

export const createMenu = ({ name, subMenu, type }) => {
  let menu = "";
  let className = type === "menu-more" ? "more" : "submenu";
  let subArticle = "";

  // subMenu.forEach((elem, index) => {
  //   if (elem.subArticles && elem.subArticles.length > 0) {
  //     for (let article in elem.subArticles) {

  //       subArticle += `<li class="sub-article ${index}"><a class="title-name">${elem.subArticles[article]}</a></li>`;
  //     }
  //   }
  // });
  // console.log(subMenu.length);

  subMenu.forEach((elem, index) => {
    let article = ''
    if (elem.subArticles && elem.subArticles.length > 0) {
    elem.subArticles.forEach((elem,index) => {
      article += `<li class="sub-article ${index}"><a class="title-name">${elem}</a></li>`
    })}
    menu += `<li class="article ${index}"><a class="article-font">${elem.title}<ul class="article-post">${article}</ul></a></li>`
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

// export const createSubMenus = ({ subMenu }) => {
//   let subArticle = "";
//   subMenu.map((elem, index) => {
//     if (elem.subArticles && elem.subArticles.length > 0) {
//       for (let article in elem.subArticles) {
//         console.log(elem.subArticles[article]);

//         subArticle += `<li class="sub-article ${index}"><a class="title-name">${elem.subArticles[article]}</a></li>`;
//       }
//     }
//   });
//   return subArticle;
// };

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
console.log(elements.subMenuContainer);
// export const renderSubMenus = subMenu => {
//   const markup = createSubMenus(subMenu);
//   ".article-post".insertAdjacentHTML("beforeend", markup);
// };

export const renderSocial = menu => {
  const markup = createSocial(menu);
  elements.socialContainer.insertAdjacentHTML("beforeend", markup);
};
