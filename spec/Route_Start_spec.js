'use strict';

let Route = require('../main/Route_class');

describe('postnet', function () {
    beforeEach(() => {
        new  Route().reset();
    });

    it('start', function () {
        var response = new Route();
        let result = response.execute("main")
        expect(result).toEqual(`1. Translate zip code to bar code
    2. Translate bar code to zip code
    3. Quit
    Please input your choices(1~3)`)
    });

});