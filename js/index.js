import Menu from "./models/menu";
import * as menuView from "./views/menuView";
import { elements } from "./views/base";

let state = {};

const controlMenu = () => {
  if (!state.menu) state.menu = new Menu();

  const elems = [
    {
      name: "VIDEO"
    },
    {
      name: "ENTERTAINMENT",
      subMenu: [
        {
          title: "menusito 1",
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
          subArticles: [
            "article 3",
            "article 4",
            "super articulo numero cuatro"
          ]
        },

        {
          title: "menusito 3",
          subArticles: ["article 5", "article 6", "super articulo numero cinco"]
        }
      ],
      type: "subMenu"
    },

    {
      name: "CULTURE",
      subMenu: [
        { title: "bimbo", subArticles: ["super", "super 2", "super3"] },
        { title: "holiwis", subArticles: ["hyper", "super 4", "incredible"] }
      ],
      type: "submenu"
    },
    {
      name: "TECH",
      subMenu: [{ title: "simbo", subArticles: ["dembow"] }],
      type: "submenu"
    },
    {
      name: "SCIENCE",
      subMenu: [{ title: "jimbo", subArticles: ["cyka blyat", "motolcito"] }],
      type: "submenu"
    },
    {
      name: "SOCIAL GOOD",
      subMenu: [{ title: "dumbo", subArticles: ["ypa", "comrade"] }],
      type: "submenu"
    },
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

  for (let elem of elems) state.menu.addMenu(elem);

  const icons = [
    {
      name: "search"
    },
    { name: "facebook" },
    { name: "twitter" },
    { name: "profile" }
  ];

  for (let elem of icons) state.menu.addMenu(elem);

  state.menu.menus.map(menu => {
    menuView.renderMenus(menu);
  });
  state.menu.more.map(menu => {
    menuView.renderSocial(menu);
  });
};
controlMenu();

let container = document.querySelector(".sub-articles-container");
let elementContained = document.querySelectorAll(".article");
let clickedElement;

Array.from(elementContained).forEach(elem => {
  elem.addEventListener("mouseover", function() {
    const id = elem.getAttribute("class").split(" ");
    console.log(id[1]);
    if (clickedElement) {
      clickedElement.classList.remove("hidden");
    }
    const hoveredElement = document.querySelector(`div.${id[1]}`);
    clickedElement = hoveredElement;
    document.querySelector(`div.${id[1]}`).classList.toggle("hidden");
  });
});

/* HAMBURGER CONTROLLER */
const navSlide = () => {
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector(".menu-links");
  // ".menu-links li.title-menu:not(:first-child)"
  const navLinks = document.querySelectorAll(".title-menu");

  // Toggle nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          1.5}s`;
      }
    });
    // Burger animation
    burger.classList.toggle("toggle");
  });
};
navSlide();
