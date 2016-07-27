'use strict';

let commands = require("./command");

let mapping = {
    "1":commands.goToZipcodeToBarcode,
    "2":commands.goToBarcodeToZipcode,
    "3":'exit',
    "main":commands.bulidStart
}

function route(input) {
    let response ="";
    let command = mapping[input];
    
    let result = "";

    if(command){
        response = command(input);
        result += response.text;
    }
    else if(mapping["*"]){
        response = mapping["*"](input);
        result+=response.text;
    }else {
        return "no command";
    }

    if(response.reset){
        route.reset();
    }
    if(response.newmapping){
        mapping=response.newmapping;
    }

    if(response.next){
        let newResponse;
        do{
            newResponse = response.next();
            result+=newResponse.text;
        }while (newResponse.next);
    }
    
    return result;
}
route.reset = function () {
    mapping={
        "1":commands.goToZipcodeToBarcode,
        "2":commands.goToBarcodeToZipcode,
        "3":'exit',
        "main":commands.bulidStart
    }
}

module.exports = route;

