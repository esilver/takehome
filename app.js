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
   

  

    res.send(solution(puzzle));
    
  }
  if (req.query.q == "Ping"){
    res.send('9179249076');
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
  let equalIndex = findEqualIndex(arr)


  let solution = " ABCD\n"
  + solutionValue(0, arr, equalIndex) + '\n'
  + solutionValue(1, arr, equalIndex) + '\n'
  + solutionValue(2, arr, equalIndex) + '\n'
  + solutionValue(3, arr, equalIndex)

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