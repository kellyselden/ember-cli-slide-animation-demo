var express = require('express');

var server = express();

server.use(express.static(__dirname + '/public'));

server.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

server.listen(process.env.PORT || 3000);