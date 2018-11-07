var express = require('express');
var app = express();

// Routes
app.get('/', function(req, res) {
  res.type('text');   

  if (req.query.q == "Phone"){
    res.send('9179249076');
  }
  if (req.query.q == "Puzzle"){
    let puzzle = req.query.d.split('\n');
    let equalPosition;
    let a = puzzle[2];
    let b = puzzle[3];
    let c = puzzle[4];
    let d = puzzle[5];
    res.send(a+b+c+d);
    
  }
  res.send('OK');
});


// Listen
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on localhost:'+ port);