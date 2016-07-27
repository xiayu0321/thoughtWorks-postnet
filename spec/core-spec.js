'use strict';
let bulidModel = require("../main/core");
let loadIt = require("./fixtures");
describe('#1', () => {
    let zipcode = '45056';
    let testedZipcode=bulidModel.checkZipcodeFormate(zipcode);

    const result = '45056';
    it("check the form of zipcode", function() {
        expect(testedZipcode).toEqual(result);
    });
});

describe('#2', () => {
    let testedZipcode = '45056-1234';
    let finalBarcode =bulidModel.addExtraForm(bulidModel.matchByTableBarcode(bulidModel.getFormatedZipcode(testedZipcode),loadIt()));

    const result =['|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|'];
    it("zipTransFormBarcode", function() {
        expect(finalBarcode).toEqual(result);
    });
});

describe('#3', () => {
    let testedZipcode = '450561234';
    let formatedZipcode = bulidModel.getFormatedZipcode(testedZipcode);

    const result = ['450561234'];
    it("get the right zipcode form", function() {
        expect(formatedZipcode).toEqual(result);
    });
});


describe('#4', () => {
    let formatedZipcode = ['45056'];
    let matchedBarcode = bulidModel.matchByTableBarcode(formatedZipcode,loadIt());

    const result = [':|::|:|:|:||::::|:|::||::||:::'];
    it("get matched barcode", function() {
        expect(matchedBarcode).toEqual(result);
    });
});

describe('#5', () => {
    let matchedBarcode = [':|::|:|:|:||::::|:|::||::||:::'];
    let finalBarcode= bulidModel.addExtraForm(matchedBarcode);

    const result = ['|:|::|:|:|:||::::|:|::||::||:::|'];
    it("get final barcode", function() {
        expect(finalBarcode).toEqual(result);
    });
});


describe('#6', () => {
    let finalBarcode = ['|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|'];

    let barcodeModel = bulidModel.buildBarcodeModel(finalBarcode);

    const result = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';
    it('get zipcode map barcode',function () {
        expect(barcodeModel).toEqual(result);
    })
})

describe('#7', () => {
    let barcode = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';
    
    let testedBarcode=bulidModel.checkBarcodeFormate(barcode);
    
    const result = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';
    it('check the form of barcode',function () {
        expect(testedBarcode).toEqual(result);
    });
});

describe('#8', () => {
    let testedBarcode = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';

    let finalZipcode =bulidModel.recheckFormate(bulidModel.matchByTableZipcode(bulidModel.getFormatedBarcode(testedBarcode),loadIt()));

    const result = '450561234';
    it('check the form of barcode',function () {
        expect(finalZipcode).toEqual(result);
    });
});

describe('#9', () => {
    let testedBarcode = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';
    
    let formotedBarcode =bulidModel.getFormatedBarcode(testedBarcode);
    
    const result = [':|::|',':|:|:','||:::',':|:|:',':||::',':::||','::|:|','::||:',':|::|','||:::'];
    
    it('get formated barcode', function () {
        expect(formotedBarcode).toEqual(result);
    });
});

describe('#10', () => {
    let formatedBarcode = [':|::|',':|:|:','||:::',':|:|:',':||::',':::||','::|:|','::||:',':|::|','||:::'];
    
    let matchedBarcode = bulidModel.matchByTableZipcode(formatedBarcode,loadIt());

    const result = [4,5,0,5,6,1,2,3,4,0];

    it('get formatedBarcode map matchedBarcode', function () {
        expect(matchedBarcode).toEqual(result);
    });
});

describe('#11', () => {
    let matchedBarcode = [4,5,0,5,6,1,2,3,4,0];

    let cd = bulidModel.calculateCd(matchedBarcode);

    const result = true;

    it('get formatedBarcode map matchedBarcode', function () {
        expect(cd).toEqual(result);
    });
});

describe('#12', () => {
    let matchedBarcode = [4,5,0,5,6,1,2,3,4,0];

    let finallZipcode = bulidModel.recheckFormate(matchedBarcode);

    const result = '450561234';

    it('get final form of zipcode', function () {
        expect(finallZipcode).toEqual(result);
    });
});

describe('#13', () => {
    let finalZipcode = '450561234';
    let zipcodeModel = bulidModel.buildZipcodeModel(finalZipcode);

    const result = '45056-1234';

    it('get zipcode model', function () {
        expect(zipcodeModel).toEqual(result);
    });
});

describe('bulid zipcode to barcode', () => {
    let zipcode = '45056';
    let barcode = bulidModel.buildZipcodeToBarcode(zipcode);

    const result = '|:|::|:|:|:||::::|:|::||::||:::|';

    it('get zipcode model', function () {
        expect(barcode).toEqual(result);
    });
});


describe('bulid zipcode to barcode', () => {
    let zipcode = '4505';
    let barcode = bulidModel.buildZipcodeToBarcode(zipcode);

    const result = '|false|';

    it('get zipcode model', function () {
        expect(barcode).toEqual(result);
    });
});

describe('bulid barcode to zipcode', () => {
    let barcode = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';
    let zipcode = bulidModel.buildBarcodeToZipcode(barcode);

    const result = '45056-1234';

    it('get barcodecode model', function () {
        expect(zipcode).toEqual(result);
    });
});
