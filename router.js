var express = require('express');
var router = express();

function router(rep,res) {
    res.send({name:"xxx",age:18});
}

module.exports = router;

