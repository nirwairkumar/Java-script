// <!-- JS (Part 4)
// Practice Questions
// Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
//     Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
//     Result should be arr = [1, 3, 4, 5, 6, 3]
// Qs2. Write a JS program to find the no of digits in a number.
//     Example : if number = 287152, count = 6
// Qs3. Write a JS program to find the sum of digits in a number.
//     Example : if number = 287152, sum = 25
// Qs4. Print the factorial of a number n.
//     [Factorial of a number n is the product of all positive integers less than or equal to a
//     given positive integer and denoted by that integer. ]
//     Example :
//     7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040
//     5! (factorial of 5) = 1x2x3x4x5 = 120
//     3! (factorial of 3) = 1x2x3 = 6
//     0! Is always 1
// Qs5. Find the largest number in an array with only positive numbers.
//  -->


// 1
let arr = [2,4,6,7,8,2,3,2,2,2,2,9,0,7,6,5,6,2,3,2];
let num=2;
let i=0;
while (i<=arr.length){
    if (arr[i]==num){
        arr.splice(i,1)
    }
    else{
        i++
    }
}
console.log(arr);


// 2

let number2= 23245243004300;
let a2 = 0;
while (number2>0){
    a2 =a2+1;
    number2 = Math.floor(number2/10);
}
console.log(a2);

// 3
let number3 = 532; 
let sum = 0;
let copy3 = number3;
while (copy3>0){
    sum = copy3%10 + sum;
    copy3 = Math.floor(copy3/10);
}
console.log(sum)

// 4
let number4 = 7;
let copy4 = number4;
let mult4 = 1;
while(copy4>0){
    mult4 = mult4*copy4;
    copy4 = copy4-1;
}
console.log(mult4);


// 5
console.log("Answer of 5th question")
let number5 = [3,4,5,3,2,7,88,35,6765,34,2345,0];
let big = null;
i=0;
for (elmt of number5){
    if (i+1<=number5.length){
        if (elmt>big){
            big = elmt;
        }
    }
    i=i+1;
}
console.log(big);