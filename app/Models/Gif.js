export default class Gif {
    constructor(data) {
        // this.info is what your Gif will have saved as its properties = data.info is that info that your gif is receiving when it is created. 
        this.url = data.img_url
        this.id = data.id

    }

    get Template() {
        return
    }
}