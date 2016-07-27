'use strict';

let command = require("../main/command");

describe('#1', () => {

    it("main command", function() { 
        let main = command.bulidStart().text;

        const result = `1. Translate zip code to bar code
    2. Translate bar code to zip code
    3. Quit
    Please input your choices(1~3)`;
        expect(main).toEqual(result);
    });
});

describe('#2', () => {
    it("goToZipcodeToBarcode", function() {
        let zipcodeToBarcode = command.goToZipcodeToBarcode().text;

        const result = `Please input zip code:`;
        expect(zipcodeToBarcode).toEqual(result);
    });
});

describe('#3', () => {
    it("goToBarcodeToZipcode", function() {
        let barcodeToZipcode= command.goToBarcodeToZipcode().text;

        const result = `Please input bar code:`;
        expect(barcodeToZipcode).toEqual(result);
    });
});

describe('#4.1', () => {
    it("translateZipcodeToBarcode", function() {
        let zipcode = '45056-1234';
        let barcode = command.translateZipcodeToBarcode(zipcode) ;

        const result ={
            text:'translateResult is :|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|',
            reset:true
        }
        expect(barcode).toEqual(result);
    });
});

describe('#4.2', () => {
    it("translateZipcodeToBarcode", function() {
        let zipcode = '4505634'
        let barcode = command.translateZipcodeToBarcode(zipcode) ;

        const result ={
            text:'please input right input',
            next:command.goToZipcodeToBarcode
        }
        expect(barcode).toEqual(result);
    });
});

describe('#5.1', () => {
    it("translateBarcodeToZipcode", function() {
        let barcode = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|'
        let zipcode = command.translateBarcodeToZipcode(barcode) ;

        const result ={
            text:'translateResult is :45056-1234',
            reset:true
        }
        expect(zipcode).toEqual(result);
    });
});

describe('#5.2', () => {
    it("translateBarcodeToZipcode", function() {
        let barcode = '|:|::|:|:|:||::::|:|::||:::::||::|:||'
        let zipcode = command.translateBarcodeToZipcode(barcode) ;

        const result = {
            text:'please input right input',
            next:command.goToBarcodeToZipcode
        }
        expect(zipcode).toEqual(result);
    });
});


describe('#6', () => {
    it("exit func", function() {
        let res = command.exitCommand()  ;

        const result ='Quit';
        expect(res).toEqual(result);
    });
});

