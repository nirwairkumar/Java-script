//Qs1 Square and sum the array elements using the arrow function and then find the average of the array.
console.log("give a array and call the function avg to square, sum, and average")
function avg(array) {

    const square = array.map((el) => (el * el));

    const sum = square.reduce((sum, el) => (sum + el));
    return (sum / array.length);
}


//Qs2. Create a new array using the map function whose each element is equal to the original element plus 5;

console.log("give an array and call the function 'add5' to add 5 in all elements")
function add5(array) {
    const sum5 = array.map((el) => (el + 5));
    return sum5;
}

//Qs3.Create a new array whose elements are in upper case of words present in the original array.

let array3 = ["n", "i", "r", "i", "c", "h", "a"];
const upWord = (array3) => {
   newArray = array3.map((el) => el.toUpperCase());
    console.log(newArray);
}
upWord(array3)
//Qs4. Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled.

const doubleAndReturnArgs = (arg, ...args)=> [...arg, ...args.map((el)=>el*2),];

console.log(doubleAndReturnArgs([2,3,4],3,4,5))

//Qs5. Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

let student1 ={
    name1: "sham",
    place1:"bhutan"
}
let student2 ={
    name2: "romio",
    place2: "New York"
}
console.log(mergeObjects(student1,student2))
