let array43 = [32,23,34,45,32]
let max43 = Math.max(array43[0],array43[1],array43[2],array43[3],array43[4]);  // it will give maximum number
console.log(max43);
// by spread function
let max44 = Math.max(...array43)      
console.log(max44)

name43 = "nirwair"
console.log(...name43)   // n i r w a i r

let copyArray43 = [...array43]
console.log(copyArray43)  //we can change anything in new copy array. original array will change.

let chars4 = [..."hello"]
console.log(chars4)

// spread object literal
let data = {
    email: "nirwairkumar1@gmail.com",
    password: "your first vehicle number"
}
let copydata = {...data, pan: "ABCDE1234F"}
