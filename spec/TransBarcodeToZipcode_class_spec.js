'use strict';

let TanslateBarcodeToZipcodeCommand =  require('../main/TranslateBarcodeToZipcode_class');

describe('command-spec', function () {

    it('#1.right input', () => {
        let barcode = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';
        let result = new TanslateBarcodeToZipcodeCommand().execute(barcode);
        let expected = {
            text: '45056-1234',
            reset:true
        };
        expect(result.message).toEqual(expected.text);
        expect(result.reset).toEqual(expected.reset);
    });


    it('#1.wrong input', () => {
        let zipcode = '|:|::|:|:|:||::::|:|::||:::::||';
        var next = function(){};
        let result = new TanslateBarcodeToZipcodeCommand(next).execute(zipcode);
        let expected = {
            text: 'Please give right input:',
            next
        };
        expect(result.message).toEqual(expected.text);
    });
});
