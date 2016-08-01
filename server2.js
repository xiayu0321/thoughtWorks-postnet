let express = require('express');
let app = new express();
let path = require('path');
let ZipcodeTranslater = require('./bar-zip/main/ZipcodeTranslater_class');

app.get('/',function (req,res) {
    res.sendfile('./index2.html');
});

app.get('/result',function (req,res) {
   let zipcode = new ZipcodeTranslater().execute(req.query.Zipcode)._message;
    console.log(zipcode);

    if(zipcode !== '|false|'){
        res.send("zipcode" + zipcode);
    }else{
        res.send("输入错误！请返回上一页面重新输入！");
    }
});

app.listen(3000,function (req,res) {
   console.log("Example app listening on port 3000!");
});