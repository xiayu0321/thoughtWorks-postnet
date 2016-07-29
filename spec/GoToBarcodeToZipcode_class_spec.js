'use strict';

let TanslateBarcodeToZipcodeCommand =  require('../main/TranslateBarcodeToZipcode_class');

let goToBarToZipcodePage = require("../main/GoToBarcodeToZipcode_class");

describe('#1', () => {
    it("# goToBarcodeToZipcodePage",() =>{
        let expected = {
            text:`Please input bar code:`,
            newmapping:{'*':new TanslateBarcodeToZipcodeCommand(new goToBarToZipcodePage().execute())}

        };
        var response = new goToBarToZipcodePage().execute();

        expect(response.text).toEqual(expected.text);
    })
});