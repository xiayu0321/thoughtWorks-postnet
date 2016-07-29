'use strict';

let _ = require('lodash');
let loadIt = require("../spec/fixtures");

function checkZipcodeFormate(zipcode) {
    if (zipcode.length !== 5 && zipcode.length !== 9 && zipcode.length != 10) {
        return false;
    }
    return zipcode;
}

function getFormatedZipcode(testedZipcode) {
    let formatedZipcode = [];

    if (testedZipcode.length === 10) {
        if (testedZipcode.indexOf('-') === 5 && testedZipcode.lastIndexOf('-') === 5) {
            let temp = testedZipcode.split('-');
            formatedZipcode.push(temp[0].concat(temp[1]));
        } else {
            return false;
        }
    } else {
        formatedZipcode.push(testedZipcode);
    }
    return formatedZipcode;
}

function getElementById(array, id) {
    return array[id];
}

function matchByTableBarcode(formatedZipcode, allItems) {
    let line = '';
    let sum = 0;
    let matchedBarcode = [];
    let formatedZipcodeString = formatedZipcode.toString();

    for (let i = 0; i < formatedZipcodeString.length; i++) {
        let found = getElementById(allItems, formatedZipcodeString[i]);
        if (found === undefined) {
            return false;
        } else {
            line += found.barcode;
            sum += Number(formatedZipcodeString[i]);
        }
    }
    if (sum % 10 === 0) {
        line += (getElementById(allItems, '0')).barcode;
    } else {
        line += (getElementById(allItems, 10 - sum % 10)).barcode;
    }

    matchedBarcode.push(line);
    return matchedBarcode;
}
function addExtraForm(matchedBarcode) {
    let title = '|' + matchedBarcode.toString() + '|';
    let finalBarcode = [];

    finalBarcode.push(title);
    return finalBarcode;
}
function buildBarcodeModel(finalBarcode) {
    return finalBarcode.toString();
}


function checkBarcodeFormate(barcode) {
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
  
function getFormatedBarcode(testedBarcode) {
    let formatedBarcode = [];

    if(testedBarcode === false){
        return false;
    }else {
        for (let i = 1; i < testedBarcode.length - 1; i += 5) {
            formatedBarcode.push(testedBarcode.substring(i, i + 5));
        }
        return formatedBarcode;
    }
}

function getElementByBarcode(array, barcode) {
    return array.find((element) => element.barcode === barcode);
}

function matchByTableZipcode(formatedBarcodes, allItems) {
    let matchedZipcode = [];

    if(formatedBarcodes === false){
        return false;
    }else {
        for (let formatedBarcode of formatedBarcodes) {
            let found = getElementByBarcode(allItems, formatedBarcode);
            matchedZipcode.push(found.id);
        }
        return matchedZipcode;
    }
}

function calculateCd(matchedBarcode) {
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

function recheckFormate(matchedBarcode) {
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

function buildZipcodeModel(finalZipcode) {
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

function buildZipcodeToBarcode(zipcode) {
    let testedZipcode = checkZipcodeFormate(zipcode);
    let formatedZipcode = getFormatedZipcode(testedZipcode);
    let matchedBarcode = matchByTableBarcode(formatedZipcode, loadIt());
    let finalBarcode = addExtraForm(matchedBarcode);
    let barcodeModel = buildBarcodeModel(finalBarcode);

    return barcodeModel;
}

function buildBarcodeToZipcode(barcode) {
    let testedBarcode = checkBarcodeFormate(barcode);
    let formateBarcode = getFormatedBarcode(testedBarcode);
    let matchedZipcode = matchByTableZipcode(formateBarcode, loadIt());
    let cd = calculateCd(matchedZipcode);
    if(cd === false){
        return false;
    }
    
    let finalZipcode = recheckFormate(matchedZipcode);
    let zipcodeModel = buildZipcodeModel(finalZipcode);

    return zipcodeModel;
}

module.exports = {
    checkZipcodeFormate,
    getFormatedZipcode,
    matchByTableBarcode,
    addExtraForm,
    buildBarcodeModel,
    checkBarcodeFormate,
    getFormatedBarcode,
    matchByTableZipcode,
    calculateCd,
    recheckFormate,
    buildZipcodeModel,
    buildZipcodeToBarcode,
    buildBarcodeToZipcode
}