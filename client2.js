const request = require('request');
let readlineSync = require('readline-sync');


console.log('client is coming');
function getInput() {
    let barcode = readlineSync.question('please input the zipcode:');
    translate(barcode);
}

function translate(barcode) {
    const option = {
        url:"http://localhost:3000/barcode",
        method:"POST",
        json:true,
        body:{barcode:barcode}
    };

    request(option,function (err,response,body) {
        console.log(body);
        getInput();
    });
}

getInput();
