'use strict';
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));	//where static files will be
app.set('views', __dirname +'/views');
app.set('view engine', 'jade');	//using Jade
app.get('/', function(req, res){
  res.render('index');
  console.log("entering '/'");
  //http.run(req,res);
  console.log("Exiting '/' ")

});
app.get('/test',function (req,res) {
   console.log("Entering '/test'");
   res.render('index');
   console.log("Exiting '/test' ");
});

app.listen(3000);
