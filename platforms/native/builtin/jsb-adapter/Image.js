let HTMLImageElement = require('./HTMLImageElement');

class Image extends HTMLImageElement {
    constructor(data, width, height) {
        if (!height) {
            height = width;
            width = data;
            data = null;
        }
        super(width, height, true)
        
        this._data = data;
        this.complete = true;
        if (data) {
            var event = new Event('load');
            this.dispatchEvent(event);
        }
    }
}

module.exports = Image;
