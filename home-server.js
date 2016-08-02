let express = require('express');
let bodyParser=require('body-parser');
let ZipcodeToBarcode = require('./bar-zip/main/ZipcodeTranslater_class');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function (req, res) {
    res.sendfile('./home.html');
})

app.post('/zipcode',function (req, res) {

    let translator = new ZipcodeToBarcode().execute(req.body.zipcode)._message;

    if(translator !== '|false|'){
        res.send("barcode" + translator);
    }else{
        res.send("输入错误！请返回上一页面重新输入！");
    }
});

app.listen(3000, function () {
    console.log('Home-server listening on port 3000!');
});