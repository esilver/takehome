var express = require('express');
var app = express();

// Routes
app.get('/', function(req, res) {

  switch(req.query.q) {
    case "Name":
      res.send('Eli Silver');
    case "Email Address":
    res.send('esilver17@gmail.com');
    case "Phone":
      res.send('9179249076');
    case "Position":
      res.send("Fullstack engineer");
    case "Years":
      res.send("Four years");
    case "Referrer":
      res.send("Jenny");
    case "Degree":
      res.send("B.A. Computer Science Yeshiva University");
    case "Resume":
      res.send("https://docs.google.com/document/d/1uSxYFH_uq1G19ISMAGlH13o56PMc5J33MjhSPBvVIrY/edit?usp=sharing");
    case "Source":
      res.send("https://github.com/esilver/takehome");
    case "Status":
      res.send("Yes");
    case "Puzzle":
      {
        let puzzle = req.query.d.split('\n');
        res.send(solution(puzzle));
      }
    default:
      res.send('OK');
  }
});


// Listen
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on localhost:'+ port);


function solution(puzzle) {
  let a = getValueAndPosition(puzzle[2]);
  let b = getValueAndPosition(puzzle[3]);
  let c = getValueAndPosition(puzzle[4]);
  let d = getValueAndPosition(puzzle[5]);
  
  let arr = [a, b, c, d];
  let equalIndex = findEqualIndex(arr);

  let solution = " ABCD\n"
  + 'A' + solutionValue(0, arr, equalIndex) + '\n'
  + 'B' + solutionValue(1, arr, equalIndex) + '\n'
  + 'C' + solutionValue(2, arr, equalIndex) + '\n'
  + 'D' + solutionValue(3, arr, equalIndex)

  return solution;
}


function getValueAndPosition(str){
  for(let i = 1; i < str.length; i++){
    if(str[i] !== '-')
    {
      return[i-1, str[i]];
    }
  }
}

function solutionValue(index, arr, equalIndex){
  let result = '';
  for (let i = 0; i < 4; i++){
    if(i === index){
      result += '=';
    } else if (arr[index][1] === '<'){
      result += '<';
    } else if (arr[index][1] === '>') {
      if(arr[index][0] !== equalIndex){
        result += '>';
      } else {
        if (i === equalIndex) {
          result += arr[index][1];
        } else {
          result += (arr[i][1] === '<') ? '>' : '<'; 
        }
      }
    } else if (arr[index][1] === '='){
      result += (arr[i][1] === '<') ? '>' : '<';
    }
  }
  return result;
}

function findEqualIndex(arr){
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] === '=') {
      return i;
    }
  }
}