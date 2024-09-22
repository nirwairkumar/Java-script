const fevPlace = "London";
let guess = prompt("Guess my Favourit place or quit");
while((guess!=fevPlace) && (guess != "quit")){
    guess=prompt("worng guess, please try again or quit");
}
if (guess ===fevPlace){
    alert("congratulation!")
}
else{
    alert("ooh!")
}