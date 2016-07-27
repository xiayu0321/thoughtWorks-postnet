'use strict';

let route = require('../main/route');

describe('postnet', function () {
    beforeEach(() => {
        route.reset();
    })
    it('start', function () {
        var response = route("main");
        expect(response).toEqual( `1. Translate zip code to bar code
    2. Translate bar code to zip code
    3. Quit
    Please input your choices(1~3)`)
    });

    it('input 1', function () {
        var response = route("1");
        expect(response).toEqual(`Please input zip code:`)
    });
   

    it('input 2', function () {
        var response = route("2");
        expect(response).toEqual(`Please input bar code:`)
    });

    it('translate', function () {
        route("1");
        var response = route("45056-1234");
        expect(response).toEqual("translateResult is :|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|")
    });

    it('translate', function () {
        route("1");
        var response = route("4505");

        const result =
            'please input right inputPlease input zip code:'
        
        expect(response).toEqual(result);
    });

    it('translate', function () {
        route("2");
        var response = route("|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|");
        expect(response).toEqual("translateResult is :45056-1234")
    });

    it('translate', function () {
        route("2");
        var response = route("|::||:||:::|");

        const result = 'please input right inputPlease input bar code:'
        expect(response).toEqual(result);
    });
       
});