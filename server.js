var express= require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Article = require('./models/article.js');


var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));
var request = require('request');

mongoose.connect('mongodb://localhost/nyt');
var db = mongoose.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});

app.get('/', function(req, res){
  res.sendFile('./public/index.html');
})

//========================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
