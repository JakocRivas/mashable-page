import "@babel/polyfill";

/**
 * @description Waits for an element of the page to load.
 * @param {string} selector A css selector
 * @returns {nodeList} return an array of webElements when the load on the page.
 */
const checkElement = async selector => {
  while (document.querySelectorAll(selector) === null) {
    await new Promise(resolve => window.requestAnimationFrame(resolve));
  }

  return document.querySelectorAll(selector);
};

export default checkElement;
