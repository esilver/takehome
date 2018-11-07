var express = require('express');
var app = express();

// Routes
app.get('/', function(req, res) {
  if (req.query.q == "Phone"){
    res.send('9179249076');
  }
  if (req.query.q == "Puzzle"){
    res.send('&nbsp' + 'ABCD' +'</br>'
    +'A=>>>' +'</br>'
    +'B<=<<' +'</br>'
    +'C<>=>' +'</br>'
    +'D<><=');
  }
  res.send('OK');
});



// Listen
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on localhost:'+ port);