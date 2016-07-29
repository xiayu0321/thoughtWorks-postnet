'use strict';

let ZipcodeToBarcode  = require('./ZipcodeTranslater_class.js');

class TranslateZipcodeToBarcode_class {
    constructor(next){
        this.next = next;
    }
    execute(zipcode) {
        let coreResponse = new ZipcodeToBarcode().buildZipcodeToBarcode(zipcode);

        if (coreResponse._message !== '|false|') {
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
module.exports = TranslateZipcodeToBarcode_class;