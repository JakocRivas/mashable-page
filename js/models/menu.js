/**
 * Object to replace the magic numbers inside the class Menu.
 *
 * @typedef {Object}
 * @property {Number} maxNumberOfMenus Contains the max number of submenu that there should be on the navbar.
 * @property {Number} nameWithLengthZero Indicates when the menu have a name but this is an empty string or have a length of zero.
 */
const constants = {
  maxNumberOfMenus: 8,
  nameWithLengthZero: 0,
  subMenuTypeGeneral: "subMenu",
  subMenuTypeMore: "menu-more",
  noType: "no-menu"
};
/**
 *
 * @export
 * @class Menu Creates a menu container for all the menus
 */
export default class Menu {
  constructor() {
    this.menus = [];
    this.icons = [];
  }

  /**
   *
   * @param {string} The name of the menu
   * @param {Array} An array ob objects containing the subMenus of the menu. It will be an empty array by default.
   * @param {string} The type of the menu. It will push the menu too this.menus or this.more depending on the type of the menu(menu or menu-more).
   * @returns menu A menu object with name, subMenu, type and an empty id property.
   * @memberof Menu
   */
  addMenu({ name, subMenu = [], type }) {
    const menu = {
      name,
      subMenu,
      type,
      id: ""
    };

    if (
      (this.menus.length < constants.maxNumberOfMenus &&
        name.length &&
        type === constants.subMenuTypeGeneral) ||
      type === constants.noType ||
      type === constants.subMenuTypeMore
    ) {
      this.menus.push(menu);
      return menu;
    }

    this.icons.push(menu);
    return menu;
  }
}
