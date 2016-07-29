'use strict';

let Route = require('./main/Route_class');
let readlineSync = require('readline-sync');

let result = new Route().execute("main");
console.log(result);
let route = new Route();
let input;
let ok=true;
do {
    input= readlineSync.question();

    let result = route.execute(input);
    console.log(result);
    if(result==="exit")
    {
        ok=false;
    }
} while (ok);