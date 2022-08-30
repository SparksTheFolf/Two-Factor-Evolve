var express = require('express');
var app = express();
var fs = require("fs");


app.get('/randnum', function (req, res) {

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    var rand = getRndInteger(1111111111111, 9999999999999999999);

    function makeid(length){
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }


    var h = Date.now();
    var hi = String(h);

    var outmain = rand + h;

    var defmain = String(outmain)

    var out = defmain + hi + hi;

    //res.send(out)


    res.status(200).send({
        epoch : h,
        ranum : out,
        serverUpdate : '08/20/2022',
        serverVersion : '2022.0.1'
    })
    

})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://localhost:8081")
})