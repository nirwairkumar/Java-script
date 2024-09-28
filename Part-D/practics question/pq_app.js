// question 1
let arrayAverage = (arr) => {
    sum = 0;
    for (elem of arr) {
        sum += elem;
    }
    return (sum / arr.length)
}


// 2
let Even = (a) => {
    if (a % 2 == 0) {
        console.log("even");
    } else {
        console.log("not")
    }
}

// 3
const object = {
    message: 'Hello,World!',
    logMessage() {
        console.log(this.message);   // here it is global because of setTimeout function.... if you refers without setTimeout then it will print Hello,World
    }
};
message = "hahaah"
setTimeout(object.logMessage, 1000);


// 4
let length = 4;
function callback() {
    console.log(this.length)
}
const object4 = {
    length: 5,
    method(callback) { 
        callback(); 
    },
}; 

object.method(callback, 1, 2);




// Ans 3
// After a delay of 1 second, undefined is logged to the console.
// While the setTimeout() function uses the object.logMessage as a callback, still, it
// invokes object.logMessage as a regular function, rather than a method.
// And during a regular function invocation this equals the global object, which is a
// window in the case of the browser environment.
// That's why console.log(this.message) inside logMessage method logs
// window.message, which is undefined.
// Ans 4
// 'Hello, World!' is logged to the console.
// object.getMessage() is a method invocation, that's why this inside the method equals
// object.
// There's also a variable declaration const message = 'Hello, Earth!' inside the method.
// The variable doesn't influence the value of this.message.