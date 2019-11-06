import { elements } from "./base";
var uniqid = require("uniqid");
export const createMenu = ({ name, subMenu, type, id }) => {
  let menu = "";
  let className = type === "menu-more" ? "more" : "submenu";
  let subArticle = "";
  // console.log(id);

  // subMenu.forEach((elem, index) => {
  //   if (elem.subArticles && elem.subArticles.length > 0) {
  //     for (let article in elem.subArticles) {

  //       subArticle += `<li class="sub-article ${index}"><a class="title-name">${elem.subArticles[article]}</a></li>`;
  //     }
  //   }
  // });
  // console.log(subMenu.length);
  function createArticleLI(macaco, id) {
    let map = macaco.subArticles.map(li => {
      return `<li class="sub-article ${id}"><a class="title-label">${li}</a></li>`;
    });
    return map.join().replace(/,/g, "");
  }

  subMenu.forEach((elem, index) => {
    id = uniqid();
    // console.log(id);
    let article = "";

    if (elem.subArticles && elem.subArticles.length > 0) {
      console.log(id, "this is inside sub articles");
      id = id;
      article += createArticleLI(elem, id);
    }
    console.log(article);

    console.log(id, "this one is inside the submenus");
    subArticle += `<div class="${id}"><ul class="article-post">${article}</ul></div>`;
    menu += `<li class="article ${id}"><a class="article-font">${elem.title}</a></li>`;
  });

  return `
    <li class="title-menu">
      <a class="title-name">${name}</a>
        ${
          subMenu.length > 0
            ? type !== "menu-more"
              ? `<div class='submenu-container'><div><ul class='${className}'>${menu}</ul></div><div class="sub-articles-container">${subArticle}</div></div>`
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
// console.log(elements.subMenuContainer);
// export const renderSubMenus = subMenu => {
//   const markup = createSubMenus(subMenu);
//   ".article-post".insertAdjacentHTML("beforeend", markup);
// };

export const renderSocial = menu => {
  const markup = createSocial(menu);
  elements.socialContainer.insertAdjacentHTML("beforeend", markup);
};
