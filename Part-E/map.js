// array method

let arr2 = [
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

let allPlace = arr2.map((student)=>{
    return student.place;
})
console.log(allPlace)