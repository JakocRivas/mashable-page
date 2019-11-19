import Search from "../configuration/config";

const icons = [
  {
    name: "search"
  },
  { name: "facebook" },
  { name: "twitter" },
  { name: "profile" }
];

const data = {};

async function createSubMenu(numberOfSubmenus, arrayOfSubMenus, query) {
  const subArticlesArray = [];
  let current = 0;
  let next = 5;
  for (let index = 0; index < numberOfSubmenus; index += 1) {
    const subArticle = {
      title: arrayOfSubMenus[index],
      subArticles: await Promise.all(
        query.slice(current, next).map(elem => {
          return elem.title;
        })
      )
    };
    subArticlesArray.push(subArticle);
    current += 5;
    next += 5;
  }
  // console.log("array of each submenu", subArticlesArray);
  return subArticlesArray;
}

const searchControl = async () => {
  data.search = new Search("us");
  const menuNames = [
    { name: "ENTERTAINMENT", subMenus: ["gaming", "movies"] },
    { name: "CULTURE", subMenus: ["memes", "celebrities"] },
    { name: "TECH", subMenus: ["Business", "apps"] },
    { name: "SCIENCE", subMenus: ["climate", "space"] },
    { name: "SOCIAL GOOD", subMenus: ["activism", "profits"] }
  ];

  try {
    const values = menuNames.map(async (menu, index) => {
      // console.log(menu);
      const dataArticles = await data.search.getResults(
        `${menu[index]} ${menu.subMenus[index]}`
      );
      // console.log(`this is article`, dataArticles);
      return {
        name: menu.name,
        subMenu: await createSubMenu(2, menu.subMenus, dataArticles),
        type: "subMenu"
      };
    });
    console.log("this are the menu objects", await values);
    return await values;
  } catch (error) {
    console.error(`there seems to be a problem fetching the data ${error}`);
  }
};
const elems = searchControl();
// title
// urlToImage
export { elems, icons };
