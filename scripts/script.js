// console.log("script");

// var userName;
// userName = prompt("Enter your name:");
// console.log(userName);

// userName = 15;

//user enter a number.
var num1=Number(prompt('Enter first number'));
var num2=Number(prompt('Enter second number'));
//present a menu:
var option = prompt("Select 1) Multiplication, 2) Division, 3) Addition, 4) Subtraction");
var result;
//do the calculation.
if(option==1){
    result = num1 * num2;
}
if(option==2){
    result = num1 / num2;
}
if(option==3){
    result = num1 + num2;
}
if(option==4){
    result = num1 - num2;
}
//present the result on the console.
console.log("The result is: "+result);