// it filters on the bassis of return by function. If function returns true then value added in newArray otherwise element skip and move to other element of the array to further check.

let num = [1,2,3,4,5,6,7,8,11,22,33,44,55,66,77,88,99];
let even = num.filter((el)=>{
    return el%2==0;
})
let odd = num.filter((el)=>{
    return el%2!=0;
})

console.log(even)
console.log(odd)
