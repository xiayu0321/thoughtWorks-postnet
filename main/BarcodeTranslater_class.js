'use strict';
let _ = require('lodash');
let loadIt = require("../spec/fixtures");
let BarcodeResponse = require('./BarcodeResponse');

class BarcodeTranslater_class{
    execute(barcode) {
        return this.buildBarcodeToZipcode(barcode)
        
    }
    checkBarcodeFormate(barcode) {
    let judge = false;

    for(let i = 0; i < barcode.length ;i++) {
        judge =  _.isEqual(barcode[i],':')  || _.isEqual(barcode[i],'|');
    }

    if(judge === true) {
        if (barcode.length === 32 || barcode.length === 52) {
            return barcode;
        } else {
            return false;
        }
    }
}

    getFormatedBarcode(testedBarcode) {
    let formatedBarcode = [];

    if(testedBarcode === false){
        return false;
    }else {
        if(testedBarcode.length < 5){
            return false;
        }else {
            for (let i = 1; i < testedBarcode.length - 1; i += 5) {
                formatedBarcode.push(testedBarcode.substring(i, i + 5));
            }
        }
        return formatedBarcode;
    }
}

    getElementByBarcode(array, barcode) {
    return array.find((element) => element.barcode === barcode);
}

    matchByTableZipcode(formatedBarcodes, allItems) {
    let matchedZipcode = [];

    if(formatedBarcodes === false){
        return false;
    }else {
        for (let formatedBarcode of formatedBarcodes) {
            let found = this.getElementByBarcode(allItems, formatedBarcode);
            if(found) {
                matchedZipcode.push(found.id);
            } else {
                return false;
            }
        }
        return matchedZipcode;
    }
}

    calculateCd(matchedBarcode) {
    if (matchedBarcode === false) {
        return false;
    } else {
        let cd = 0;
        let sum = 0;
        for (let i = 0; i < matchedBarcode.length - 1; i++) {
            sum += matchedBarcode[i];
        }
        if (sum % 10 === 0) {
            cd = 0;
        } else {
            cd = 10 - sum % 10;
        }
        return true;
    }
}

    recheckFormate(matchedBarcode) {
    if(matchedBarcode === false){
        return false;
    }else {
        let sum = 0;
        let cd = 0;
        let finalZipcode = '';

        for (let i = 0; i < matchedBarcode.length - 1; i++) {
            sum += matchedBarcode[i];
        }
        if (sum % 10 !== 0) {
            cd = 10 - sum % 10;
        }
        if (matchedBarcode[matchedBarcode.length - 1] === cd) {
            for (let i = 0; i < matchedBarcode.length - 1; i++) {
                finalZipcode += matchedBarcode[i];
            }
        } else {
            return false;
        }
        return finalZipcode;
    }
}

    buildZipcodeModel(finalZipcode) {
    if(finalZipcode === false){
        return false;
    }else {
        let zipcodeModel = [];
        let zipcodeModels = '';

        for (let i = 0; i < 5; i++) {
            zipcodeModel.push(finalZipcode[i]);
        }
        zipcodeModel.push('-');
        for (let i = 5; i < finalZipcode.length; i++) {
            zipcodeModel.push(finalZipcode[i]);
        }

        for (let i = 0; i < zipcodeModel.length; i++) {
            zipcodeModels += zipcodeModel[i];
        }

        return zipcodeModels;
    }
}

    buildBarcodeToZipcode(barcode) {
    let testedBarcode = this.checkBarcodeFormate(barcode);
    let formateBarcode = this.getFormatedBarcode(testedBarcode);
    let matchedZipcode = this.matchByTableZipcode(formateBarcode, loadIt());
    let cd = this.calculateCd(matchedZipcode);
    if(cd === false){
        return false;
    }

    let finalZipcode = this.recheckFormate(matchedZipcode);
    let zipcodeModel = this.buildZipcodeModel(finalZipcode);
        
        return  new BarcodeResponse(zipcodeModel);
}
}

module.exports = BarcodeTranslater_class;