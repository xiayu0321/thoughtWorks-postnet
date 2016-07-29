'use strict';

class CommandResponse {
    constructor(text,newmapping,next,reset) {
        this._text = text;
        this._newmapping = newmapping;
        this._next = next;
        this._reset = reset
    }

    get text() {
        return this._text;
    }

    set text(text) {
        this._text = text;
    }

    get newmapping() {
        return this._newmapping;
    }

    set newmaaping(newmapping) {
        this._newmapping = newmapping;
    }

    get next() {
        return this._next;
    }

    set next(next) {
        this._next = next;
    }

    get reset() {
        return this._reset;
    }

    set reset(reset) {
        this._reset = reset;
    }
}

module.exports = CommandResponse;