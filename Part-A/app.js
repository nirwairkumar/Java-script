console.log("Hello world");
console.log("wow!");
a=23;
b=34;
area = a*b;
console.log("area is",area);
// here is your commented statement

//switch statement
let color = "red";
switch(color) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Slow down");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Broken Light")
}

let day = 3;
switch (day){
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("wednesday")
        break
    case 4:
        console.log("Thrusday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunaday")
        break
    default:
        console.log("wrong day")
}


// alert and prompt

// alert("something is wrong!")

// console.error("this is an error massage")
// console.warn("this is a warning")

// let roll = prompt("enter your rollnumber")
// console.log(roll)

let firstName = prompt("Enter your first name");
let lastName = prompt("Enter your last name");
msg = "Welcome "+ firstName +" " +lastName+"!";
console.log(msg);