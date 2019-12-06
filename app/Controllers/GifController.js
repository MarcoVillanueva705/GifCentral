import GifService from "../Services/GifService.js";
import _store from "../store.js";

//Private
function _drawGifs() {
   let template = "";
   let gifs = _store.State.gifs;
   console.log("some gifs", gifs);
  template += `<image src="${gifs.image_url}" onclick="app.gifController.selectGifAsync('${gifs.image_url}, ${gifs.id}')"/>` 
  // spells.forEach(s=> template += `<li onclick="app.spellsController.selectMySpellAsync('${s.id}')"> ${s.name}</li>`)
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
  await GifService.selectGifAsync(id)
}catch (error){
  debugger
  console.error(error)
}
  }
}
