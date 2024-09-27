let number = prompt("Enter a number");

let randomNumber = Math.floor(Math.random()*number+1);
let guess = prompt("Guess the number");

while (true){
    if (guess =="quit"){
        console.log("you quit");
        console.log(`number was ${randomNumber}`);
        break;
    }
    else if (guess > randomNumber){
        guess = prompt(`Ooh! hint: you entered large number. please try again or quit`);
        // console.log(randomNumber);
    }
    else if (guess < randomNumber){
        guess = prompt(`Ooh! hint: you entered small number. please try again or quit`);
    }
    else if (guess == randomNumber){
        console.log("congratulations!!... you are correct");
        console.log(`random number was ${randomNumber}`);
        break;
    }
    
}