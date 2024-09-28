// array element larger then a number
let array = [1,2,3,4,5,6,7,8,9,10,11,12]
let n = 5;

function filter(Array, Number){
    newArray=[];
    for (elem of Array){
        if (elem > Number){
            newArray.push(elem);
        }
    }
    return newArray;
}
console.log(filter(array, n))


// 2

let str = "NnniiIIrrrwairrr";
function uniqExtract(word){
    arr=[];
    for(i=0; i<word.length; i++){
        if (arr.indexOf(word[i])== -1){
            arr.push(word[i]);
        }
    }
    return arr.join('')
}

console.log(uniqExtract(str))

// 3
let country=["Australia","United States of America", "Indiaaaaaaaaaaaaaaaaaaaaaaaaaa" ,"Germany"];

function longestName(arr){
    let longe="" ;
    for (i=0; i< arr.length; i++)
        if (longe.length< arr[i].length){
            longe =arr[i];
        }
    return longe
}

console.log(longestName(country));



// 4 counting number of vowels in the string;

let myStr = "Nirwair";
function countVowel(word){
    arrVowel = ['A', 'E','I','O','U', 'a','e','i','o','u'];
    count = 0;
    for (i=0; i< word.length; i++){
        if(arrVowel.indexOf(word[i]) !== -1){
            count +=1;
        }
    }
    return count;
}

console.log(countVowel(myStr));

// 5
let a = 90;
let b = 100;
function rndm(start, end){
    while (true){
        num = Math.floor(Math.random()*end+1)
        if (num>=start){
            console.log(num);
            break;
        }else{continue;}
        
    }
}
console.log(rndm(a,b));
console.log()


