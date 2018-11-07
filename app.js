var express = require('express');
var app = express();

// Routes
app.get('/', function(req, res) {
  if (req.query.q == "Phone"){
    res.send('9179249076');
  }
  res.send('OK');
});



// Listen
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on localhost:'+ port);