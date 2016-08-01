var ex = require('./lyrics.js');
var express = require('express');
var app = express();

//respond with "Hello World!" on the homepage

app.get('/', function (request, response) {
  var newLyrics = '';
  for (var i = 0; i < ex.length-1; i++){
    var selection = Math.floor(Math.random()*ex.length);
    newLyrics = newLyrics + ex[selection] + '<br>';

  };

  response.send(newLyrics);
});

app.post('/', function (request, response) {
  response.send('Got a POST request');
});

//then start Server

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http//' + host + ':' + port);

});










// var http = require('http');


// http.createServer(function(request, response){
//   var selection = Math.floor(Math.random()*ex.length);
//   response.writeHead(200, {"Content-type": "text/plain"});
//   response.write(ex[selection]);
//   response.end();
//
// }).listen(8888);
