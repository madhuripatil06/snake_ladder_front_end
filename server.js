var express = require('express')
var app = express()
var fs = require('fs');

app.get('/', function (req, res) {
    res.redirect("/src/client/login.html")
})

app.get('/board', function(req, res){
    res.redirect("/src/client/index.html")
})

app.use(express.static('.'));

var server = app.listen(3000, function () {
    console.log("hello the server started to port 3000")
})