// This function is to create the html snippet for all the li articles in each sub menu
const noStyle = "no-style";
export const articleLiMarkUp = function(subMenuLI) {
  if (typeof subMenuLI === "string") {
    return `
          <li class="menu-more-sub-article">
              <a class="title-label">${subMenuLI}</a>
          </li>
          `;
  }

  let img = subMenuLI.url;
  const defaultImg = "./img/lazy_pixel.jpg";

  if (subMenuLI.url) {
    const alt = subMenuLI.source.name;
    img = `<img class="article-img lozad" src="${defaultImg}" data-src="${img}" alt="${alt}">`;
  } else {
    img = "<p>no image</p>";
  }
  // console.log(typeof subMenuLI === "string");
  return `
        <li class="menu-subMenu-sub-article">
          
            ${img}
            <a href="${subMenuLI.link}" class="title-label">${subMenuLI.title}</a>
        </li>
        `;
};

// This is to create the html snippet of all the ul elements inside the sub menus with the type of more
export const columnMarkUp = function(element, article) {
  return ` 
        <ul class="menu-more-articles ${noStyle}">
            <li class="title-menu-more">${element.title}</li>${article}
        </ul>
        `;
};

// This is to create al the sub articles html snippets for the articles in the sub menus of the type sub menu
export const subArticleMarkUp = function(ID, article) {
  return `
        <div class="subArticles ${ID}">
            <ul class="article-post ${noStyle}">${article}</ul>
        </div>
        `;
};

// This is for the menus of the left side of the nav bar with the class menu
export const menuMarkUp = function(id, elem) {
  return `
        <li class="article ${id}">
            <a class="article-font">${elem.title}</a>
        </li>
        `;
};

// This is for the menus of the left side of the nav bar with the class social
export const navBarSocialMarkUp = function(name) {
  return `
        <li class="title-social">
            <a class="title-name">${name}</a>
        </li>
        `;
};

// This is to make up the html snippet for the nav bar
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
                      ? `<div class='submenu-container'><div class="subArticles-sibling"><ul class='${className} ${noStyle}'>${menu}</ul></div><div class="sub-articles-container">${subArticle}</div></div>`
                      : `<div class='submenu-container'><ul class='${className}'>${column}</ul></div>`
                    : ""
                }
        </li>
`;
};
