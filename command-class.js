class GoToXXXXPageCommand{
    constructor(){

    }

    execute(input){
        privateFunction(this.param1, this.xxx);
    }

    _somePrivate(){

    }
}


function privateFunction(param1, param){
    "use strict";

}
module.exports = GoToXXXXPageCommand;



///another file

let GoToXXXPageCommand = require("../src/command-class.js");

let command = new GoToXXXPageCommand();

command.execute(input);