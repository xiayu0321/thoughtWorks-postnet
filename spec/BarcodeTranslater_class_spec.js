'use strict';
let BarcodeTranslater = require("../main/BarcodeTranslater_class");
let BarcodeResponse = require('../main/BarcodeResponse');

let barcodeTranslate = new BarcodeTranslater();

describe('bulid zipcode to barcode', () => {
    it('get barcode model', function () {
        let barcode = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';

        let excepted = new BarcodeResponse('45056-1234');
        expect(barcodeTranslate.execute(barcode)).toEqual(excepted);
    });


    it('get barcode model', function () {
        let barcode = '|:|::|:|:|:||::::|:|:||:::|';

        let excepted = false;
        expect(barcodeTranslate.execute(barcode)).toEqual(excepted);
    });
});
