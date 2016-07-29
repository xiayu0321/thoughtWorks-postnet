'use strict';

let Route = require('../main/Route_class');

describe('postnet', function () {
    beforeEach(() => {
        new  Route().reset();
    });

    it('input 2', function () {
        var response = new Route();
        let result = response.execute("2")
        expect(result).toEqual(`Please input bar code:`)
    });

});