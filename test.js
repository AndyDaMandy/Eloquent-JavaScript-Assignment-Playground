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

/* Recursion! I actually figured it out! 
The reason why you'd use rescursion here is becaue you want to use a function that requires a return statement!
This is important for checking the absolute value of a negative number before checking if it's even or odd.  */

function isEven(x) {
  
  function abCheck (y){
   return Math.abs(y);
};
x = abCheck(x);
  for (x; x >= 0; x = x - 2) {
   if (x == 0){
     
   return true }
   
    if (x == 1) {
    return false
  }
  };
};

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
console.log(isEven(-25));
console.log(isEven(-36));
