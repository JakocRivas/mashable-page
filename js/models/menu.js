class Menu {
  constructor() {
    this.menus = [];
  }

  addMenu(name) {
    const menu = {
      name
    };
    this.menus.push(menu);
    return menu;
  }
}
module.exports = { Menu };
