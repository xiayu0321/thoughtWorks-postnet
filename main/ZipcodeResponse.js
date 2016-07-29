'use strict';

let ZipcodeTranslater = require('./ZipcodeTranslater_class');

class ZipcodeResponse {
    constructor(message) {
        this.message = message;
    }

    get message() {
        return this._message;
    }

    set message(message) {
        this._message = message;
    }
}

module.exports = ZipcodeResponse;
