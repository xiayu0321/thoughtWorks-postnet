'use strict';

let _ = require('lodash');
let loadIt = require("../spec/fixtures");
let ZipcodeResponse = require('./ZipcodeResponse');

class ZipcodeTranslater_class {
    execute(zipcode) {
        return this.buildZipcodeToBarcode(zipcode);
    }

    checkZipcodeFormate(zipcode) {
        if (zipcode.length !== 5 && zipcode.length !== 9 && zipcode.length != 10) {
            return false;
        }
        return zipcode;
    }

    getFormatedZipcode(testedZipcode) {
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

    getElementById(array, id) {
        return array[id];
    }

    matchByTableBarcode(formatedZipcode, allItems) {
        let line = '';
        let sum = 0;
        let matchedBarcode = [];
        let formatedZipcodeString = formatedZipcode.toString();

        for (let i = 0; i < formatedZipcodeString.length; i++) {
            let found = this.getElementById(allItems, formatedZipcodeString[i]);
            if (found === undefined) {
                return false;
            } else {
                line += found.barcode;
                sum += Number(formatedZipcodeString[i]);
            }
        }
        if (sum % 10 === 0) {
            line += (this.getElementById(allItems, '0')).barcode;
        } else {
            line += (this.getElementById(allItems, 10 - sum % 10)).barcode;
        }

        matchedBarcode.push(line);
        return matchedBarcode;
    }

    addExtraForm(matchedBarcode) {
        let title = '|' + matchedBarcode.toString() + '|';
        let finalBarcode = [];

        finalBarcode.push(title);
        return finalBarcode;
    }

    buildBarcodeModel(finalBarcode) {
        return finalBarcode.toString();
    }

    buildZipcodeToBarcode(zipcode) {
        let testedZipcode = this.checkZipcodeFormate(zipcode);
        let formatedZipcode = this.getFormatedZipcode(testedZipcode);
        let matchedBarcode = this.matchByTableBarcode(formatedZipcode, loadIt());
        let finalBarcode = this.addExtraForm(matchedBarcode);
        let barcodeModel = this.buildBarcodeModel(finalBarcode);

        return new ZipcodeResponse(barcodeModel);
    }
}

module.exports = ZipcodeTranslater_class;
