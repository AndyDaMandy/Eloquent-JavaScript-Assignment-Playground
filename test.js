//Fizzbuzz

var num = 0
function fizzbuzz(){
  for (var i = 0; i <= 100; i++)
  {
   
   if (num % 3 === 0 && num % 5 === 0)
   { console.log("FizzBuzz")
   num++
     }
    if (num % 3 === 0) {
   console.log("Fizz");
   num++;}
    if (num % 5 === 0) {
      console.log("Buzz");
      num++;
    }
    else{
      console.log(num);
      num++;
      };
      };
    };
fizzbuzz();
//My indentation is kind of off, because I used the javascript tutor tool to check my answers.

//Chessboard
var board = ""

function chessBoard(size) {
  //this loop is for the outer part of the board
  for (var i = 0; i < size; i++){
   //this loop is for the individual pieces
   if(i % 2){
    for (var b = 0; b < size; b++)
    {
      board += "# ";          
      }
   }
   else {
     for (var b = 0; b < size; b++)
    {
      board += " #";          
      }
   }
    board+= "\n";
  }
};

chessBoard(6);

