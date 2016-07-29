'use strict';
let response = require('../main/CommandResponse');
let ExitCommand = require("../main/Exit_class");

describe('#1', () => {

    it("main command", function() {
        let ExitCom = new ExitCommand();
        let text = 'exit';

        const result = new response(text,false,false,false)
        expect(ExitCom.execute()).toEqual(result);
    });
});