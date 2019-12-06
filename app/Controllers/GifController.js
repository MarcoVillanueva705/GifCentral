import GifService from "../Services/GifService.js";
import _store from "../store.js";

//Private
function _drawGifs() {
   let template = "";
   let gifs = _store.State.gifs;
   console.log("some gifs", gifs);
  template += `<image src="${gifs.image_url}" onclick="app.gifController.selectGifsAsync("${gifs.id}")"/>` 
  document.getElementById("gifs").innerHTML = template
}

//Public
export default class GifController {
  constructor() {
    console.log("hello from the controller")
    GifService.getGifsAsync();
     _store.subscribe("gifs", _drawGifs);
  }

  async selectGifAsync(id) {
try {
  //make method in service
  await GifService.selectGifAsync()
}catch (error){
  console.error(error)
}
  }
}
