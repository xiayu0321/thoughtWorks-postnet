'use strict';
let response = require('../main/CommandResponse');
let mainCommand = require("../main/BuildStart_class");

describe('#1', () => {

    it("main command", function() {
        let mainCom = new mainCommand();
        let text = `1. Translate zip code to bar code
    2. Translate bar code to zip code
    3. Quit
    Please input your choices(1~3)`;

        const result = new response(text,false,false,false)
        expect(mainCom.execute()).toEqual(result);
    });
});