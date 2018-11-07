var express = require('express');
var app = express();

// Routes
app.get('/', function(req, res) {
  res.type('text');   

  if (req.query.q == "Phone"){
    res.send('9179249076');
  }
  if (req.query.q == "Puzzle"){
    res.send(' ABCD\n'
    +'A=<><\n'
    +'B>=><\n'
    +'C<<=<\n'
    +'D>>>=');
  }
  res.send('OK');
});


// Listen
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on localhost:'+ port);