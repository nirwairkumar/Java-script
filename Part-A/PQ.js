// question 1
let num = 28;
if (num%10 ==0){
    console.log("good");
}
else{
    console.log("bad");
}


// question 2
let name = prompt("Enter your Name");
let age = prompt("Enter your age");
alert(`${name} is ${age} years old`);


// question 3
let quater = 2;
switch (quater){
    case 1:
        console.log("April,May,June");
        break;
    case 2:
        console.log("July,August,September")
        break;
    case 3:
        console.log("October,November,December");
        break;
    case 4:
        console.log("January,February,March");
        break
    default:
        console.warn("Enter a valid quater")
}


// // question 4    
// // golden string if starts from 'N', 'n',
let string = "Nirwair";
let len = string.length;
if ( len>5 && (string[0].toLowerCase() =="n" || string[0].toLowerCase()=="r")){
    console.log("golden string");
}
else{
    console.log("not golden string");
}



// // question 5
let a= 5;
let b= 1;
let c= 5;

if (a>c && a>b){
    console.log(a);
}
else if (b>a && b>c){
    console.log(b);
}
else if (c>a && c> b){
    console.log(c)
}


// question 6 
let x= 3434345;
let y= 3345;

if (x%10==y%10){
    console.log(`same last digit: ${x%10}`);
}
else{
    console.log("not same");
}