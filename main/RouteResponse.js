'use strict';

let route= require('./route_class');

class RouteResponse {
    constructor(message) {
        this._message = message;
    }

    get message() {
        return this._message;
    }

    set message(message) {
        this._message = message;
    }
}

module.exports = RouteResponse;