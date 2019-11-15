export const articleLiMarkUp = function(subMenuLI) {
  return `
        <li class="menu__more-sub-article">
            <a class="title-label">${subMenuLI}</a>
        </li>
        `;
};

export const columnMarkUp = function(element, article) {
  return ` 
            <ul class="menu__more-articles">
                <li class="title-menu-more">${element.title}</li>${article}
            </ul>
        `;
};

export const subArticleMarkUp = function(ID, article) {
  return `
        <div class="subArticles ${ID}">
            <ul class="article-post">${article}</ul>
        </div>
    `;
};

export const menuMarkUp = function(id, elem) {
  return `
        <li class="article ${id}">
            <a class="article-font">${elem.title}</a>
        </li>
    `;
};
export const navBarSocialMarkUp = function(name) {
  return `
        <li class="title-social">
            <a class="title-name">${name}</a>
        </li>
        `;
};

export const navBarMenuMarkUp = function(
  id,
  name,
  subMenu,
  type,
  className,
  menu,
  subArticle,
  column
) {
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
