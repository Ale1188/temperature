function practice(){
    let number=99;
    if(number==99){
        console.log("The num1 is greater than num2");
    }
    if(num1<num2){
        console.log("The num2 is greater than num1");
    }
    if(num1==num2){
        console.log("The values are the same");
    }
}

// Challenge: driving licence
function getDriveLicence(){
    let age=prompt("Enter age:");
    if(age>=18){
        console.log("Congratulations! You can get your driving license")
    }else{
        console.log("Sorry! You are too young to get a driving license")
    }
}

function guessNumber(){
    let randomNumer=Math.floor(Math.random()*10)+1;
    let userGuess=prompt("Guess the number between 1 and 10: ");
    if(userGuess==randomNumer){
        console.log("Congratulations! You guessed the number")
    }else{
        console.log("Sorry, thats not correct. The number was" + randomNumer);
    }
}