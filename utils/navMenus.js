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

const searchControl = async () => {
  data.search = new Search("us");
  const menuNames = [
    "ENTERTAINMENT",
    "CULTURE",
    "TECH",
    "SCIENCE",
    "SOCIAL GOOD"
  ];

  try {
    const values = menuNames.map(async (menu, index) => {
      // console.log(menu);
      const dataArticles = await data.search.getResults(menu[index]);
      console.log(`this is article`, dataArticles);
      return {
        name: menu,
        subMenu: [
          {
            title: `menu${index}`,
            subArticles: dataArticles.slice(0, 5).map(elem => {
              // console.log(elem);
              return elem.title;
            })
          }
        ],
        type: "subMenu"
      };
    });
    return await values;
  } catch (error) {
    console.error(`there seems to be a problem fetching the data ${error}`);
  }
};

const elems = searchControl();
// title
// urlToImage
export { elems, icons };
