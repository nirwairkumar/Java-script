function savetoDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve('success: data is saved')
        } else {
            reject('failure: data is not saved!')
        }
    })
}

// let request = savetoDb("'nirwair's data")
// console.log(request)


// then and catch   (resolve.then and reject.catch)
// savetoDb("nirwair's data")
//     .then(() => {
//         console.log("promise is resolved")
//     })
//     .catch(() => {
//         console.log('promoise is rejected')
//     })

    // taking argument (our argument is nothing but inside the resolve and reject)

savetoDb("nirwair's data")
    .then((event) => {
        console.log("promise is resolved")
        console.log(event)
    })
    .catch((error) => {
        console.log('promoise is rejected')
        console.log(error)
    })



    // converting callback hell code into promises (look at background color)
let h4 = document.querySelector("h4")
function colorChangebyPromises(color,delay){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            h4.style.backgroundColor=color;
            resolve("BackgroundColor changed!")
        }, delay)
    })
}
colorChangebyPromises('gray',1000)
    .then(()=>{
        console.log('changed to gray')
        return colorChangebyPromises('yellow',1000)
    })
    .then(()=>{
        console.log('changed to yellow')
        return colorChangebyPromises('pink',1000)
    })
    .then(()=>{
        console.log('changed to pink')
        return colorChangebyPromises('green', 1000)
    })
    .then(()=>{
        console.log('change completed')
    })
