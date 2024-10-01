function sum(...args){
    for (let i=0; i< args.length; i++){
        console.log("you gave us:", args[i]);
    }
}
// arguments
function min(){
    console.log(arguments[2])
    console.log(arguments.length)
}
console.log(min(2,3,4,5,6,-22,-20))


//rest
function add(...arg){
   return arg.reduce((add, ele) => add+ ele);
}

function Iseven(...ev){
    return ev.some((ele) => (ele%2==0))
}
// //  input : Iseven(3,5,7,8)
// //  output: true -- bcz 8 is even and it is some menthod.


// Destructuring
let names = ["Nirwair", "kumar", "chaudhary", "chaudhary2", "chaudhary3"];
let [firstName, middleName]= names;
console.log(firstName)     //Nirwair
console.log(middleName)    //kumar
let [first, middle, ...others] = names
console.log(first)  //Nirwair
console.log(middle)  //kumar
console.log(others) // it is a array of rest of the element

// Destructuring object
let student54={
    name:"Nirwair",
    city: "New York",
    beauty: "Natural",
    comapny: "Nirmanam",
    part: "Neck",
    fruit: "Nariyal",
    color: "Neon Green",
    username: "nirwairkumar",
    password: "in the moon light night"
};
const {username, password} = student54;   
const{ username: id, password: code}= student54; 
// you can directly access username and password
// or by id and code
//  > username
//  <.'nirwairkumar'
//  > id
//  < 'nirwairkumar'