'use strict';

let Route = require('../main/Route_class');

describe('postnet', function () {
    beforeEach(() => {
        new  Route().reset();
    });

    it('input 1', function () {
        var response = new Route();
        let result = response.execute("1")
        expect(result).toEqual(`Please input zip code:`)
    });

});