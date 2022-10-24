var express = require('express');
var app = express();
var fs = require("fs");
var count = null;
var PROD = "Production";
var DEV = "Development";

app.get('/', function (req, res) {


    res.status(200).send({
        "message": "Welcome to the world of tomorrow!",
        "status": "success"
    })
    

});

app.get('/418', function (req, res) {


    res.status(418).send({
      "Teapot":"IDIOT YOUR A TEAPOT NOT ME!!!"
    })


})

app.get('/api/randstr', function (req, res) {


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

    var bruh = makeid(100);
    var bruh_2 = makeid(100);
    var bruh_3 = makeid(100);
    var bruh_4 = makeid(100);

    var outmain = rand + h;

    var defmain = String(outmain)

    var out = bruh + defmain + bruh_2 + bruh_3 + hi + bruh_4 + hi + bruh + defmain + bruh_2 + bruh_3 + hi + bruh_4
        + hi + bruh + defmain + bruh_2 + bruh_3 + hi + bruh_4 + hi + bruh + defmain + bruh_2 + bruh_3 + hi + bruh_4
        + hi + bruh + defmain + bruh_2 + bruh_3 + hi + bruh_4 + hi + bruh + defmain + bruh_2 + bruh_3 + hi + bruh_4
        + hi + bruh + defmain + bruh_2 + bruh_3 + hi + bruh_4 + hi + bruh + defmain + bruh_2 + bruh_3 + hi + bruh_4
        + hi + bruh + defmain + bruh_2 + bruh_3 + hi + bruh_4 + hi + bruh + defmain + bruh_2 + bruh_3 + hi + bruh_4
        + hi + bruh + defmain + bruh_2 + bruh_3 + hi + bruh_4 + hi + bruh + defmain + bruh_2 + bruh_3 + hi + bruh_4
        + hi + bruh + defmain + bruh_2 + bruh_3 + hi + bruh_4 + hi + bruh + defmain + bruh_2 + bruh_3 + hi + bruh_4
        + hi + bruh + defmain + bruh_2 + bruh_3 + hi + bruh_4 + hi + bruh + defmain + bruh_2 + bruh_3 + hi + bruh_4
        + hi + bruh + defmain + bruh_2 + bruh_3 + hi + bruh_4 + hi + bruh + defmain + bruh_2 + bruh_3 + hi + bruh_4
        + hi + bruh + defmain + bruh_2 + bruh_3 + hi + bruh_4 + hi + bruh + defmain + bruh_2 + bruh_3 + hi + bruh_4
        + hi;

    //res.send(out)

    c_out = count + 1;

    var h = Date.now();


    res.status(200).send({
        epoch : h,
        servergen : c_out,
        ranum : out
    })
    

})


app.get('/api/randnum', function (req, res) {

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

    const secondsSinceEpoch = Math.round(Date.now() / 1000)
    const minutesSinceEpoch = Math.round(Date.now() / 10000)
    const hoursSinceEpoch = Math.round(Date.now() / 100000)
    const daysSinceEpoch = Math.round(Date.now() / 1000000)


    var h = Date.now();
    var hi = String(h);

    var outmain = rand + h;

    var defmain = String(outmain)

    var out = defmain + hi + hi;

    //res.send(out)


    res.status(200).send({
        ranum : out
    })
    

})

app.get('/api/epoch', function (req, res) {

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

    const secondsSinceEpoch = Math.round(Date.now() / 1000)
    const minutesSinceEpoch = Math.round(Date.now() / 10000)
    const hoursSinceEpoch = Math.round(Date.now() / 100000)
    const daysSinceEpoch = Math.round(Date.now() / 1000000)


    var h = Date.now();
    var hi = String(h);

    var outmain = rand + h;

    var defmain = String(outmain)

    var out = defmain + hi + hi;

    //res.send(out)


    res.status(200).send({
        epoch: h,
        daysSinceEpoch : daysSinceEpoch,
        hoursSinceEpoch : hoursSinceEpoch,
        minutesSinceEpoch : minutesSinceEpoch,
        secondsSinceEpoch : secondsSinceEpoch,
    })
    

})

app.get('/api', function (req, res) {

    const secondsSinceEpoch = Math.round(Date.now() / 1000)
    const minutesSinceEpoch = Math.round(Date.now() / 10000)
    const hoursSinceEpoch = Math.round(Date.now() / 100000)
    const daysSinceEpoch = Math.round(Date.now() / 1000000)


    var h = Date.now();
    var hi = String(h);


    res.status(200).send({
        authentication : 'awaiting authentication',
        serverUpdate : '09/6/2022',
        serverVersion : '2022.0.1',
        serverStatus : DEV,
    })
    

})


var server = app.listen(80, 443, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://localhost:80")
})