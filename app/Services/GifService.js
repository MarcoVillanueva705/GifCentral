import _store from "../store.js";
import Gif from "../Models/Gif.js";
import store from "../store.js";

// @ts-ignore
let _gifApi = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs/random?api_key=WWGiWwHjjgJ2QJKGQBQm431sdzeRkfDb&tag=&rating=G',
  timeout:3000

})
// @ts-ignore
let _sandbox = axios.create({

  baseURL: 'http://bcw-sandbox.herokuapp.com/api/marco/gifs',

  timeout:3000

})
class GifService {
  constructor(){
    console.log("hello from gif service")
  }
  async getGifsAsync(){
    let res = await _gifApi.get("")
    console.log("from get Gif Async", res.data.data)
    _store.commit("gifs", res.data.data)
    console.log("gifs from store", store.State.gifs)
  }
}

const service = new GifService();
export default service;
