import GifController from "./Controllers/GifController.js";
class App {
  gifController = new GifController();
}

window["app"] = new App();
