export default class Menu {
  constructor() {
    this.menus = [];
    this.more = [];
  }

  addMenu({ name, subMenu = [], type }) {
    const menu = {
      name,
      subMenu,
      type,
      id: ""
    };

    if (
      (this.menus.length < 8 && name.length > 0 && type === "subMenu") ||
      type === "no-menu"
    ) {
      this.menus.push(menu);
      return menu;
    }

    if (name.length > 0 && type === "menu-more") {
      this.menus.push(menu);
      return menu;
    }
    this.more.push(menu);
  }
}
