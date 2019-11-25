import "@babel/polyfill";

const checkElement = async selector => {
  while (document.querySelectorAll(selector) === null) {
    await new Promise(resolve => window.requestAnimationFrame(resolve));
  }

  return document.querySelectorAll(selector);
};

export default checkElement;
