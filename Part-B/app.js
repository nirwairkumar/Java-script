// practice questions of part B

// Q1   For the given string:
//     "     Hi Chaudhary     "
//     trim it and convert it to uppercase. 

// Q2   for the string "IIT Madras" precict the output for following:
//         name.slice(4,9)
//         name.indexOf("Ma")
//         name.replace("Madras", "Delhi")


let name = "     Hi Chaudhary     ";
let newName= name.trim().toUpperCase()
console.log(newName);

let Insti = "IIT Madras";
console.log(Insti.slice(4,9));
console.log(Insti.indexOf("Ma"));


let oldWord = "Madras";
let newWord = "Delhi";
if (Insti.includes(oldWord)){
    console.log(Insti.replace(oldWord, newWord));
}
else{
    console.warn("Incorrect replacer");
    
}

// Array
let students = ["saras", "chandu", "Popu", "Gagan", "Mintu"];
console.log(students[3][3])
console.log(students.length)
let info = ["Nirwair", 332, 6.3];


let cars = ["BMW", "Mercedes", "Tesla", "Audi"];


// // Practice Qs
// Qs. For the given start state of an array, change it to final form using
// start: ['january', 'july', 'march', 'august']
// final: ['july', 'june', 'march', 'august']

let month = ["january", "july", "march", "august"];
month.shift()
month.shift()
month.unshift("june")
month.unshift("july")
console.log(month)


// using splice
let month2 = ["january", "july", "march", "august"];
month2.splice(0,2, "july", "june")
console.log(month2)

month.reverse().indexOf("june")
const arr= [1,2,3,4,5]