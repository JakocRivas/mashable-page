import Search from "../configuration/config";

import key from "../credentials";

import { menuMore, icons, menus } from "./menuObjects";

/**
 * Creates an object for each sub-menu that contains a title property and a subArticles property
 * that contains an object that will generate a number of subArticles for each sub-menu, this number being 5.
 *
 *
 * @param {int} numberOfSubMenus Takes the length of the array of the sub menus to now how many sub menus are.
 * @param {array} arrayOfSubMenus An array for all the menus of the navbar
 * @param {string} query A string that will be used to search the articles for each submenu.
 * @param {int} current Controls the number of sub-menus that each menu should have(5)
 * @param {int} next Controls the number of sub-menus that each menu should have(5)
 * @returns {Array} An array of all the subMenus and Articles that have each sub-menu
 */
async function createSubMenu(
  numberOfSubMenus,
  arrayOfSubMenus,
  query,
  minNumberOfSubArticles = 0,
  maxNumberOfSubArticles = 5
) {
  const subArticlesArray = await Promise.all(
    arrayOfSubMenus.map(async subMenu => {
      const searchResults = await query.getResults(subMenu);

      const subArticle = {
        title: subMenu,
        subArticles: searchResults
          .slice(minNumberOfSubArticles, maxNumberOfSubArticles)
          .map(elem => {
            return {
              title: elem.title,
              url: elem.urlToImage,
              source: elem.source,
              author: elem.author,
              link: elem.url
            };
          })
      };
      minNumberOfSubArticles += 5;
      maxNumberOfSubArticles += 5;
      return subArticle;
    })
  );

  return subArticlesArray;
}

/**
 * Takes the menus with type menu and type more concat them in a list creates and object and fill them with the createSubMenu function with the data that it fetches from the news api
 */
const searchControl = async () => {
  const search = new Search(key.NEWS_API_KEY);
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
            search,
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
    return values;
  } catch (error) {
    console.error(`there seems to be a problem fetching the data ${error}`);
  }
};
const elems = searchControl();

export { elems, icons };
