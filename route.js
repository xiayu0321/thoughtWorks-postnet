

let commands = require('./command');
module.exports = route;
let mapping = {
    "1":commands.gotoZipcodeBarcodePage,
    "2":commands.gotoBarcodeZipcodePage,
    "3":'exit',
    "main":commands.mainCommand
}

function route(input) {
    let response;
    let command = mapping[input];

    let result ="";

    if(command){
        response = command(input);
        result+=response.text;
    }else if(mapping["*"]){
        response = mapping["*"](input);
        result+=response.text;
    }else {
        return "no command";

    }



    if(response.reset){
        mapping={
            "1":commands.gotoZipcodeBarcodePage,
            "2":commands.gotoBarcodeZipcodePage,
            "3":'exit',
            "main":commands.mainCommand
        }
    }
    if(response.newMapping){
        mapping=response.newMapping;
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

