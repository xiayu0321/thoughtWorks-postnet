'use strict';

let Route = require('../main/Route_class');

describe('postnet', function () {
    it('input 2 and input right', function () {
        var router = new Route();
        router.execute("2");

        let result = router.execute("|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|")
        const expected =
            "45056-1234";

        expect(result).toEqual(expected);
    });
    
    
    it('input 2 and input wrong', function () {
        var router = new Route();
        router.execute("2");

        let result = router.execute("|::||:||:::|");

        const expected = 'Please give right input:Please input bar code:';

        expect(result).toEqual(expected);
    });
});
