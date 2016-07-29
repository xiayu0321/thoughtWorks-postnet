'use strict';
/*let response = require('../main/CommandResponse');
let TanslateZipcodeToBarcodeCommand =  require('../main/TranslateZipcodeToBarcode_class');

let mainCommand = require("../main/BuildStart_class");
let command1 = require("../main/GoToZipcodeToBarcode_class");
let command2 = require("../main/GoToBarcodeToZipcode_class");*/
/*let command3 = require("../main/TranslateZipcodeToBarcode_class");
/*let command4 = require("../main/TranslateBarcodeToZipcode_class");
let command5 = require("../main/Exit_class");

describe('#1', () => {

    it("main command", function() {
        let mainCom = new mainCommand();
        let text = `1. Translate zip code to bar code
    2. Translate bar code to zip code
    3. Quit
    Please input your choices(1~3)`;

        const result = new response(text,false,false,false)
        expect(mainCom.execute()).toEqual(result);
    });
});
*/
/*describe('#2', () => {
   it("goToZipcodeToBarcode", function() {
        let goToZipcodeToBarcode = command1;
        let text = `Please input zip code:`;
        let newmapping = {"*":translateZipcodeToBarcode};

        const result = new response(text,newmapping,false,false)
        expect(goToZipcodeToBarcode.execute()).toEqual(result);
    });
    it("# goToZipcodeToBarcodePage",() =>{
        let expected = {
            text:`Please input zip code:`,
            newmapping:{'*':new TanslateZipcodeToBarcodeCommand(goToZipToBarcodePage).execute}
        };
        var response =  goToZipToBarcodePage;
        
        expect(response.text).toEqual(expected.text);
        expect(response.newmapping['*']).toEqual(expected.newmapping['*']);
    })
});*/
/*
describe('#3', () => {
    it("goToBarcodeToZipcode", function() {
        let barcodeToZipcode= command.goToBarcodeToZipcode().text;

        const result = `Please input bar code:`;
        expect(barcodeToZipcode).toEqual(result);
    });
});
*/
/*
describe('#4.1', () => {
    it("translateZipcodeToBarcode", function() {
        let zipcode = '45056-1234';
        let barcode = new TanslateZipcodeToBarcodeCommand().execute(zipcode);
        let text = '|:|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';
        
        expect(barcode.text).toEqual(text);
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
*/
