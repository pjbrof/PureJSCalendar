var express = require('express');
var path = require('path');

var app = express();
var port = 3000;

app.use(express.static(path.join(__dirname, '/src')));

app.get('/', function (req, res){
  res.sendFile(path.join(__dirname, 'src/demo.html'))
});

app.listen(port, function (req, res) {
  console.log('Now listening on port: ' + port);
});
