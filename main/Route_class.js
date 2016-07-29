'use strict';
let mainCommand = require('./BuildStart_class');
let GoToZipcodeToBarcode = require('./GoToZipcodeToBarcode_class');
let GoToBarcodeToZipcode = require('./GoToBarcodeToZipcode_class');
let TranslateBarcodeToZipcode = require('./TranslateZipcodeToBarcode_class');
let TranslateZipcodeToBarcode = require('./TranslateBarcodeToZipcode_class');
let Exit = require('./Exit_class');

class Route_class {
    constructor() {
        this.mapping = {
            "1": new GoToZipcodeToBarcode(),
            "2":new GoToBarcodeToZipcode(),
            "3":new Exit(),
            "main":new mainCommand()
        }
    }
    execute(input) {
        {
            let response = "";
            let command = this.mapping[input];

            let result = "";

            if (command) {
                response = command.execute(input);
                result += response.text;
            }
            else if (this.mapping["*"]) {
                response = this.mapping["*"].execute(input);
                result += response.message;
            }else {
                return "no command:\n please input new choise";
            }
            if(response.next){
                let newResponse;
                do{
                    newResponse = response.next();
                    result+=newResponse.text;
                }while (newResponse.next);
            }
            if (response.reset) {
                this.reset();
                result += "\n";
                result += this.mapping['main'].execute().text;
            }
            if (response.newMapping) {
                this.mapping = response.newMapping;
            }
            return result;
        }
    }
        reset() {
           this.mapping={
               "1": new GoToZipcodeToBarcode(),
               "2":new GoToBarcodeToZipcode(),
               "3":new Exit(),
               "main":new mainCommand()
            }
        }
}
module.exports = Route_class;