var express = require('express');
var fs = require('fs');
var app = express();
buf=new Buffer('utf8');

app.use(express.logger());

app.get('/', function(request, response) {
  fs.readFileSync('index.html');
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
