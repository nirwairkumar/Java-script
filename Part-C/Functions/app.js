console.log("app.js file")
function isAdult(name, age) {
    // let age = 18;
    if (age >= 18) {
        console.log(`${name} is adult ${age}`);
    }
    else {
        console.log(`${name} is not adult ${age}`);
    }
}
isAdult("karan", 23);

// dice

function dice() {
    num = Math.floor(Math.random() * 6 + 1);
    console.log(num)
}
dice();
console.log("....................")
//printing the table
function table(n) {
    for (let i = n; i <= n * 10; i = i + n) {
        console.log(i);
    }
}

table(100);

let arr = [null];
function concat(arr) {
    // len = array.length;
    let str = "";
    for (elem of arr) {
        // str=`${str} ${elem}`
        str = str + elem
    }
    return str
}

let array = ['Nirwair', 'kumar', 'chaudhary']
console.log(concat(array))



// lexical scope
function outer() {
    let x = 23;
    let y = 45;
    function inner() {
        console.log(x)    //it is possible
        let z = 20;
    }
    inner()
    // console.log(z)   
}

outer()


//function expression
let name = "nirwair";
const sum = function (a, b) {
    return a + b;
}
let greet = function () {
    console.log("namaste");
}
console.log("----------")



function multipleTimeRun(func , count){
    for (let i=1; i<=count; i++){
        func();
    }
}
let greet2 = function(){
    console.log("good morning");
}

////////////////   

// let odd = function(n){
//     console.log(!(n%2==0));
// }
// let even = function(n){
//     console.log(n%2==0);
// }

function oddEvenTest(request){
    if (request=="odd"){
        let odd = function(n){
            console.log(!(n%2 ==0));
        }
        return odd;
    }
    else if (request =="even"){
        let even =function(n){
            console.log(n%2==0);
        }
        return even;
    }
}

//methods
const calculator = {
    add : function(a,b) {
        return a + b;
    },
    sub : function(a,b) {
        return a-b;
    },
    mul(a,b) {return a*b}
}






console.log("________________________")