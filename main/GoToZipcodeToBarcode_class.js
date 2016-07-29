'use strict';

let TanslateZipcodeToBarcodeCommand =  require('./TranslateZipcodeToBarcode_class.js');

class GoToZipcodeToBarcode_class{
    execute() {
        return goToZipToBarcodePage();
    }
}
function goToZipToBarcodePage () {
    return {
        text: `Please input zip code:`,
        newMapping: {'*': new TanslateZipcodeToBarcodeCommand(goToZipToBarcodePage)}
    };
}
module.exports = GoToZipcodeToBarcode_class;
