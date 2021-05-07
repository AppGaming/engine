let HTMLImageElement = require('./HTMLImageElement');

class Image extends HTMLImageElement {
    constructor(width, height, data) {
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
