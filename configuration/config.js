import "@babel/polyfill";

import axios from "axios";

/**
 * @export
 * @class Search Class that contains the logic to handle the fetch of the news api
 */
export default class Search {
  /**
   *
   * @param {string} key A parameter tha contains the key of the api
   */
  constructor(key) {
    this.key = key;
  }

  /**
   *
   * @param {string} query A parameter query that will be used to search different types of articles for each menu
   * @return {promise<object{}>} A resolved json with the articles that match the query parameter.
   * @memberof Search
   */
  async getResults(query) {
    try {
      const res = await axios(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=${this.key}`
      );

      this.results = Object.values(res.data.articles);
      return this.results;
    } catch (error) {
      alert(`wrong api key error: ${error}`);
    }
  }
}
