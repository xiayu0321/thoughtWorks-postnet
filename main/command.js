'use strict'
let translate = require('./core');

function bulidStart() {
    return  {text:`1. Translate zip code to bar code
    2. Translate bar code to zip code
    3. Quit
    Please input your choices(1~3)`,
    };
}

function goToZipcodeToBarcode() {
    return {
        text:`Please input zip code:`,
        newmapping:{"*":translateZipcodeToBarcode}
    }
}
 
function goToBarcodeToZipcode() {
    return {
        text:`Please input bar code:`,
        newmapping:{"*":translateBarcodeToZipcode}
    }
}

function translateZipcodeToBarcode(zipcode){
    let coreResponse = translate.buildZipcodeToBarcode(zipcode);

    if(coreResponse === '|false|'){
        let result = {
            text:'please input right input',
            next:goToZipcodeToBarcode
        }
        return result;
    }else{
        return {
            text:'translateResult is :' + coreResponse,
            reset:true
        };
    }
}

function translateBarcodeToZipcode(barcode)  {
    let coreResponse = translate.buildBarcodeToZipcode(barcode);

    if(coreResponse === false){
        let result = {
            text:'please input right input',
            next:goToBarcodeToZipcode
        };
        return result;
    }else{
        return {
            text:'translateResult is :' + coreResponse,
            reset:true
        };
    }
}

function exitCommand(input) {
    return 'Quit';
}

module.exports = {
    bulidStart,
    goToZipcodeToBarcode,
    goToBarcodeToZipcode,
    translateZipcodeToBarcode,
    translateBarcodeToZipcode,
    exitCommand
}