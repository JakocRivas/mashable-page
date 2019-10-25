export default class Menu {
  constructor() {
    this.menus = [];
  }

  addMenu(name) {
    const menu = {
      name,
      subMenu: {}
    };

    if (this.menus.length < 8 && name.length > 0) {
      this.menus.push(menu);
      return menu;
    }

    if (name.length > 0) {
      this.more.push(menu);
      return menu;
    }
  }
}
