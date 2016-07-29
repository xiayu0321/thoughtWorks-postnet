'use strict';

let TanslateBarcodeToZipcodeCommand =  require('./TranslateBarcodeToZipcode_class.js');

class GoToBarcodeToZipcode_class{
    execute() {
        return goToBarToZipcodePage();
    }
}
function goToBarToZipcodePage () {
    return {
        text: `Please input bar code:`,
        newMapping: {'*': new TanslateBarcodeToZipcodeCommand(goToBarToZipcodePage)}
    };
}
module.exports = GoToBarcodeToZipcode_class;
