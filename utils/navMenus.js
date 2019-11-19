import Search from "../configuration/config";

const elesms = [
  {
    name: "VIDEO"
  },

  {
    name: "ENTERTAINMENT",
    subMenu: [
      {
        title: "title",
        subArticles: [
          "article 1",
          "article 2",
          "super articulo numero tres",
          "number four",
          "and five"
        ]
      },

      {
        title: "menusito 2",
        subArticles: ["article 3", "article 4", "super articulo numero cuatro"]
      },

      {
        title: "menusito 3",
        subArticles: ["article 5", "article 6", "super articulo numero cinco"]
      }
    ],
    type: "subMenu"
  },

  // {
  //   name: "CULTURE",
  //   subMenu: [
  //     { title: "bimbo", subArticles: ["super", "super 2", "super3"] },
  //     { title: "holiwis", subArticles: ["hyper", "super 4", "incredible"] }
  //   ],
  //   type: "submenu"
  // },
  // {
  //   name: "TECH",
  //   subMenu: [{ title: "simbo", subArticles: ["dembow"] }],
  //   type: "submenu"
  // },
  // {
  //   name: "SCIENCE",
  //   subMenu: [{ title: "jimbo", subArticles: ["cyka blyat", "motolcito"] }],
  //   type: "submenu"
  // },
  // {
  //   name: "SOCIAL GOOD",
  //   subMenu: [{ title: "dumbo", subArticles: ["ypa", "comrade"] }],
  //   type: "submenu"
  // },
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
  const countries = ["kr", "gb", "us", "ve", "pl"];

  try {
    // await data.search.getResults();
    // console.log(data.search.results[0].title);
    // const template = [
    //   {
    //     name: "",
    //     subMenu: [{ title: "", subArticles: [] }]
    //   }
    // ];
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
    // console.log(await values);
    return await values;

    // if (data.search.results) {
    //   const menus = data.search.results.map(elem => {
    //     return {
    //       title: elem.title
    //     };
    //   });
    // }
  } catch (error) {
    console.error(`there seems to be a problem fetching the data ${error}`);
  }
};

const elems = searchControl();
// console.log(data.search);
// title
// urlToImage
export { elems, icons };
