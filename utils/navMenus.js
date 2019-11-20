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

async function createSubMenu(
  numberOfSubmenus,
  arrayOfSubMenus,
  query,
  current,
  next
) {
  const subArticlesArray = [];

  for (let index = 0; index < numberOfSubmenus; index += 1) {
    const searchResults = await query.getResults(arrayOfSubMenus[index]);
    const subArticle = {
      title: arrayOfSubMenus[index],
      subArticles: await Promise.all(
        searchResults.slice(current, next).map(elem => {
          return { title: elem.title, url: elem.urlToImage };
        })
      )
    };
    subArticlesArray.push(subArticle);
    current += 5;
    next += 5;
  }
  return subArticlesArray;
}
const menuMore = [
  {
    name: "SHOP",
    subMenu: [
      {
        title: "Tech",
        subArticles: [
          "VPN",
          "Headphones",
          "Speakers",
          "Laptops",
          "Web Hosting",
          "Antivirus"
        ]
      },
      {
        title: "LifeStyle",
        subArticles: ["Home", "Kitchen", "Gift Guides", "Gaming"]
      },
      {
        title: "Culture",
        subArticles: ["Dating", "Pets", "Subscription Boxes"]
      },
      {
        title: "Best of Tech",
        subArticles: [
          "Best VPN",
          "Best Cheap VPN",
          "Best Streaming Services",
          "Best Cheap Laptops",
          "Best Running Headphones",
          "Best Bluetooth Speakers"
        ]
      },
      {
        title: "Best of Culture",
        subArticles: [
          "Best Dating Sites",
          "Best Free Dating Sites",
          "Best Dating Sites for Introverts",
          "Best DNA Tests",
          "Best Dog DNA Tests",
          "Best Subscription Boxes"
        ]
      },
      {
        title: "Best of LifeStyle",
        subArticles: [
          "Best Airfryer",
          "Best Cordless Vacuum",
          "Best Instant Pot",
          "Best Gifts Under $50",
          "Best Robot Vacuums",
          "Best Vacuums for Pet Hair"
        ]
      }
    ],
    type: "menu-more"
  },
  {
    name: "MORE",
    subMenu: [
      {
        title: "channels",
        subArticles: [
          "video",
          "entertainment",
          "culture",
          "tech",
          "science",
          "social good"
        ]
      },
      {
        title: "Company",
        subArticles: ["Licensing & Reprints", "archive", "Mashable careers"]
      },
      {
        title: "Contact",
        subArticles: ["Contact Us", "Submit News", "Mashable Shop"]
      },
      {
        title: "Legal",
        subArticles: [
          "Privacy Policy",
          "Term of Use",
          "Cookie Policy",
          "Accessibility Statement"
        ]
      },
      {
        title: "Resources",
        subArticles: [
          "Travel",
          "Security",
          "How To",
          "Mashable Deals",
          "Gift Guides"
        ]
      },
      { title: "Sites", subArticles: ["Job Board", "Social Good Summit"] },
      {
        title: "International",
        subArticles: [
          "Mashable Australia",
          "Mashable India",
          "Mashable ME",
          "Mashable SE Asia",
          "Mashable UK"
        ]
      }
    ],
    type: "menu-more"
  }
];

const searchControl = async () => {
  data.search = new Search("us");
  const current = 0;
  const next = 5;
  const menuNames = [
    { name: "MOVIES" },
    { name: "ENTERTAINMENT", subMenus: ["gaming", "movies"], type: "subMenu" },
    { name: "CULTURE", subMenus: ["memes", "celebrities"], type: "subMenu" },
    { name: "TECH", subMenus: ["Business", "apps"], type: "subMenu" },
    { name: "SCIENCE", subMenus: ["climate", "space"], type: "subMenu" },
    { name: "SOCIAL GOOD", subMenus: ["activism", "profits"], type: "subMenu" }
  ];
  const allMenus = menuNames.concat(menuMore);

  try {
    const values = allMenus.map(async (menu, index) => {
      if (menu.type === "subMenu") {
        const dataArticles = await data.search.getResults(`apps}`);
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
