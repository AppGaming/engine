let HTMLImageElement = require('./HTMLImageElement');

class Image extends HTMLImageElement {
    constructor(data, width, height) {
        if (!height) {
            height = width;
            width = data;
            data = null;
        }
        super(width, height, true)
        
        if (data) {
            this._data = data;
            this.complete = true;
            var event = new Event('load');
            this.dispatchEvent(event);
        }
    }
}

module.exports = Image;
