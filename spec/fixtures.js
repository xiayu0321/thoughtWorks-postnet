'use strict';

/*
*  1	:::||
 2	::|:|
 3	::||:
 4	:|::|
 5	:|:|:
 6	:||::
 7	|:::|
 8	|::|:
 9	|:|::
 0	||:::*/
function loadAllItems(){
    return [{
        id: 0,
        zipcode:'11000',
        barcode:'||:::'
    },{
        id: 1,
        zipcode:'00011',
        barcode:':::||'
    },{
        id: 2,
        zipcode:'00101',
        barcode:'::|:|'
    },{
        id: 3,
        zipcode:'00110',
        barcode:'::||:'
    },{
        id: 4,
        zipcode:'01001',
        barcode:':|::|'
    },{
        id: 5,
        zipcode:'01010',
        barcode:':|:|:'
    },{
        id: 6,
        zipcode:'01100',
        barcode:':||::'
    },{
        id: 7,
        zipcode:'10001',
        barcode:'|:::|'
    },{
        id: 8,
        zipcode:'10010',
        barcode:'|::|:'
    },{
        id: 9,
        zipcode:'10100',
        barcode:'|:|::'
    }];
}

module.exports = loadAllItems;
