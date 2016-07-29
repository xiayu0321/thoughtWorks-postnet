'use strict';

let BarcodeToZipcode  = require('./BarcodeTranslater_class.js');

class TranslateBarcodeToZipcode_class {
    constructor(next){
        this.next = next;
    }
    execute(barcode) {
        let coreResponse = new BarcodeToZipcode().buildBarcodeToZipcode(barcode);

        if (coreResponse._message) {
            return {
                message: coreResponse._message,
                reset: true
            };
        } else {
            return {
                message: 'Please give right input:',
                next: this.next
            }
        }
    }

}
module.exports = TranslateBarcodeToZipcode_class;