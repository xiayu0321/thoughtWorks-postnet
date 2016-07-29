'use strict';
let TanslateZipcodeToBarcodeCommand =  require('../main/TranslateZipcodeToBarcode_class');

let goToZipToBarcodePage = require("../main/GoToZipcodeToBarcode_class");

describe('#1', () => {

    it("# goToZipcodeToBarcodePage",() =>{
        let expected = {
            text:`Please input zip code:`,
            newmapping:{'*':new TanslateZipcodeToBarcodeCommand(new goToZipToBarcodePage().execute())}
        };
        var response =  new goToZipToBarcodePage().execute();
        console.log(response);

        expect(response.text).toEqual(expected.text);
    })
});

