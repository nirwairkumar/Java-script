//act like And if all elements return true then overall return will be true.

let number2 = [2,4,6,8]
number2.every((el) => (el%2==0));   //true


//act like Or if all elements return true then overall return will be true.

let number3 = [2,3,5,7]
number2.some((el) => (el%2==0));  //true

// checking if all number in our array are multiple of 10 or not....

let pArray = [20,40,50,60]
let val = pArray.every((elem) => (elem%10==0));
console.log(val)
