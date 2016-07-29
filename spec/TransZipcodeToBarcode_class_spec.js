'use strict';

let TanslateZipcodeToBarcodeCommand =  require('../main/TranslateZipcodeToBarcode_class');

describe('command-spec', function () {

    it('#1.right input', () => {
        let zipcode = '45056-1234';
        let result = new TanslateZipcodeToBarcodeCommand().execute(zipcode);
        let expected = {
            text:  '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|',
            reset:true
        };
        expect(result._text).toEqual(expected.text);
        expect(result.reset).toEqual(expected.reset);
    });
    

    it('#1.wrong input', () => {
        let zipcode = '2345';
        var next = function(){};
        let result = new TanslateZipcodeToBarcodeCommand(next).execute(zipcode);
        let expected = {
            text: 'Please give right input:',
            next
        };
        expect(result._text).toEqual(expected.text);
    });
});
