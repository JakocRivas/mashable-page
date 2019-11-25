const menus = [
  { name: "MOVIES", type: "no-menu" },
  { name: "ENTERTAINMENT", subMenus: ["gaming", "movies"], type: "subMenu" },
  { name: "CULTURE", subMenus: ["memes", "celebrities"], type: "subMenu" },
  { name: "TECH", subMenus: ["Business", "apps"], type: "subMenu" },
  { name: "SCIENCE", subMenus: ["climate", "space"], type: "subMenu" },
  { name: "SOCIAL GOOD", subMenus: ["activism", "profits"], type: "subMenu" }
];

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

const icons = [
  {
    name: "search"
  },
  { name: "facebook" },
  { name: "twitter" },
  { name: "profile" }
];

export { menus, menuMore, icons };
