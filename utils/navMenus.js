import Search from "../configuration/config";

import key from "../credentials";

import { menuMore, icons, menus } from "./menuObjects";

const data = {};

async function createSubMenu(
  numberOfSubMenus,
  arrayOfSubMenus,
  query,
  current,
  next
) {
  const subArticlesArray = [];

  for (let index = 0; index < numberOfSubMenus; index += 1) {
    const searchResults = await query.getResults(arrayOfSubMenus[index]);
    const subArticle = {
      title: arrayOfSubMenus[index],
      subArticles: await Promise.all(
        searchResults.slice(current, next).map(elem => {
          return {
            title: elem.title,
            url: elem.urlToImage,
            source: elem.source,
            author: elem.author,
            link: elem.url
          };
        })
      )
    };
    subArticlesArray.push(subArticle);
    current += 5;
    next += 5;
  }
  return subArticlesArray;
}

const searchControl = async () => {
  data.search = new Search(key.firstKey);
  const current = 0;
  const next = 5;
  const menuNames = menus;
  const allMenus = menuNames.concat(menuMore);

  try {
    const values = allMenus.map(async menu => {
      if (menu.type === "subMenu") {
        return {
          name: menu.name,
          subMenu: await createSubMenu(
            menu.subMenus.length,
            menu.subMenus,
            data.search,
            current,
            next
          ),
          type: menu.type
        };
      }
      if (menu.type === "menu-more") {
        return menu;
      }
      return menu;
    });
    return await values;
  } catch (error) {
    console.error(`there seems to be a problem fetching the data ${error}`);
  }
};
const elems = searchControl();

export { elems, icons };
