import "@babel/polyfill";

import axios from "axios";

// const proxy = "https://cors-anywhere.herokuapp.com/";
const key = "7cf0171f9a004bd386992a39ec8f8fd6";
// const country = "us";

export default class Search {
  constructor(country) {
    this.country = country;
  }

  async getResults() {
    try {
      const res = await axios(
        `https://newsapi.org/v2/top-headlines?country=${this.country}&apiKey=${key}`
      );
      this.results = res.data.articles;
      console.log(this.results);
      // console.log(this.results);
    } catch (error) {
      alert(`wrong api key error: ${error}`);
    }
  }
}
