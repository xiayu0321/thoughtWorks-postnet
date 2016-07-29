'use strict';

let _ = require('lodash');
let loadIt = require("../spec/fixtures");
let ExitResponse = require('./CommandResponse');

class Exit_class {
    execute() {
        return this.exit();
    }

    exit() {
        let text = `exit`
        return new ExitResponse(text,false,false,false);
    }

}
module.exports = Exit_class;
