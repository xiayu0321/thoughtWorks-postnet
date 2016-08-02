const request = require('request');
let readlineSync = require('readline-sync');


console.log('client is coming');
function getInput() {
    let zipcode = readlineSync.question('please input the zipcode:');
    translate(zipcode);
}

function translate(zipcode) {
    const option = {
        url:"http://localhost:3000/zipcode",
        method:"POST",
        json:true,
        body:{zipcode:zipcode}
    };

    request(option,function (err,response,body) {
        console.log(body);
        getInput();
    });
}

getInput();
