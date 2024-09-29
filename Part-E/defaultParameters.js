// Giving a default value to the arguments but it will be using  if you are not assigning the parameter of that argument. 


function sum(a, b=2){
    return a+b;
}
console.log(sum(3,4))   //>> 7
console.log(sum(2))   //>> 4
