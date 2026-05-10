alert("Hello");

let userOneValue = prompt("User Input Data One");
let userTwoValue = prompt("User Input Data Two");

userOneValue = parseInt(userOneValue);
userTwoValue = parseInt(userTwoValue);

const Result = userOneValue + userTwoValue;
const ResultTwo = userOneValue - userTwoValue;
const ResultThree = userOneValue * userTwoValue;
const ResultFour = userOneValue / userTwoValue;
const ResultFive = userOneValue % userTwoValue;

document.write("Input One : " + userOneValue + "<br>");
document.write("Input Two : "+ userTwoValue + "<br>" + "<br>");
//output
document.write("output ADD : " + Result +"<br>" );
document.write("output SUB : " + ResultTwo +"<br>" );
document.write("output MUL : " + ResultThree +"<br>" );
document.write("output DIV : " + ResultFour +"<br>" );
document.write("output REM : " + ResultFive +"<br>" );
