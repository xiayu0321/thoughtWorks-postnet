let express = require('express');
let BarcodeToZipcode = require('./bar-zip/main/BarcodeTranslater_class');
let app = express();
let path = require('path');

app.get('/',function (req,res) {
    res.sendfile('./index.html');
})
app.get('/result', function (req, res) {
    let barcode = new BarcodeToZipcode().execute(req.query.Barcode);
        if(barcode !== false){
            res.send("Barcode: " + barcode);
        }else{
            res.send("输入错误！请返回上一页面重新输入！");
        }
    });

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});