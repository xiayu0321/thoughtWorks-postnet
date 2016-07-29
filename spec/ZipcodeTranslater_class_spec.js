'use strict';
let ZipcodeTranslater = require("../main/ZipcodeTranslater_class");
let ZipcodeResponse = require('../main/ZipcodeResponse');

let zipcodeTranslate = new ZipcodeTranslater();

describe('bulid zipcode to barcode', () => {


    it('get zipcode model', function () {
        let zipcode = '45056';

        let excepted = new ZipcodeResponse('|:|::|:|:|:||::::|:|::||::||:::|' );
        expect(zipcodeTranslate.execute(zipcode)).toEqual(excepted);
    });


    it('get zipcode model', function () {
        let zipcode = '45056-1234';

        let excepted = new ZipcodeResponse('|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|' );
        // console.log(excepted)
        expect(zipcodeTranslate.execute(zipcode)).toEqual(excepted);
    });
});
