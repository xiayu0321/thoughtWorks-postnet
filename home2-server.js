let express = require('express');
let bodyParser=require('body-parser');
let BarcodeToZipcode = require('./bar-zip/main/BarcodeTranslater_class');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function (req, res) {
    res.sendfile('./home2.html');
})

app.post('/barcode',function (req, res) {

    let translator = new BarcodeToZipcode().execute(req.body.barcode);
    console.log(translator);

    if(translator !== false ){
        res.send("zipcode" + translator);
    }else{
        res.send("输入错误！请返回上一页面重新输入！");
    }
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});