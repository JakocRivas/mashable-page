// var uniqid = require("uniqid");

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
