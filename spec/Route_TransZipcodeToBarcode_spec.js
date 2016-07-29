'use strict';

let Route = require('../main/Route_class');

describe('postnet', function () {

    it('input 1 and input right', function () {
        var router = new Route();
        router.execute("1");

        let result = router.execute("45056-1234")
        const expected =
            "|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|";

            expect(result).toEqual(expected);
        });

    fit('translate', function () {
        var response = new Route();
        response.execute("1");

        let result = response.execute("4505");

        const expected = `Please give right input:Please input zip code:`;

        expect(result).toEqual(expected);
    });
    
});
