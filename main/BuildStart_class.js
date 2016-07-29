'use strict';

let _ = require('lodash');
let BuildStartResponse = require('./CommandResponse');

class BuildStart_class{
    constructor(){
        
    }
    execute() {
        return this.bulidStart();
    }
    bulidStart() {
        let text = `1. Translate zip code to bar code
    2. Translate bar code to zip code
    3. Quit
    Please input your choices(1~3)`;

        return new BuildStartResponse(text, false, false, false);
    }
}

module.exports = BuildStart_class;