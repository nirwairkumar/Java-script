let array = [2,3,5,6,7,8];

function print(ar){
    console.log(ar)
}

array.forEach(print)
// or
array.forEach(function(el) {
    console.log(el)
})


// another example
let arr = [
    {   name: "nirwair",
        place: "Dubai"
    },
    {
        name: "XIImark",
        place: "canada"
    },
    {
        name: "peaceElon",
        place: "new youk",
    },
    {
        name: "jorge",
        place: "london"
    }
]

arr.forEach((student) => {
    console.log(student.place)
})

