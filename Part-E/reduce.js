// reduce the array to a single value by any method of function

let value = [1,2,3,4].reduce((store , ele) => (store + ele));
console.log(value)         // >> 10
 
//     logic           store   ele
// for first element:    0   +  1   = 1
// for secone element:   1   +  2   = 3
// for third element:    3   +  3   = 6
// for forth element:    6   +  4   = 10


//maximun number finder with reduce function
let number4 = [22,33,44,34,45,56,65,32,43,54]
let maxNum = number4.reduce((max, ele)=> {
    if (max > ele){
        return max;
    } else{
        return ele;
    }
})
console.log(maxNum)


// create a function to find the minimum number in an array
let minNum= number4.reduce((min, ele) => {
    if (min < ele){
        return min;
    } else{
        return ele;
    }
})
console.log(minNum)