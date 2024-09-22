// <!-- JS (Part 3)
// Practice Questions
// Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
//     positive number].
//     For example: for array [7, 9, 0, -2] and n=3
//     Print, [7, 9, 0]
// Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any
//     positive number].
//     For example: for array [7, 9, 0, -2] and n=3
//     Print, [9, 0, -2]
// Qs3. Write a JavaScript program to check whether a string is blank or not.
// Qs4. Write a JavaScript program to test whether the character at the given (character) index is lower case.
// Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.
// Qs6. Write a JavaScript program to check if an element exists in an array or not.  -->

// 1
let n=4;
let array = [1,9,3,7,54,67,5]
console.log(array.slice(0,n));

// 2
console.log(array.slice(-n));

// 3
let str = "nirWair";
if (str.length==0){
    console.log("blank");
}else{
    console.log("not blank")
}

// 4
let index = 3;
if (str[index].toLowerCase() ==str[index]){
    console.log("lower case");
}else{
    console.log("not lower case");
}

// 5
let name34 = "    hii mr.    "
name34.trim()
console.log(name34)
console.log(name34.trim())

// 6
let arr34 =[];
if (arr34.length==0){
    console.log("blank");
}else{
    console.log("not blank")
}