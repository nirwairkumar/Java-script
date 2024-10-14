let h1 = document.querySelector('h1')


// this is long method [1]
// setTimeout(() => {
//     h1.style.color= 'red'
// }, 1000);
// setTimeout(() => {
//     h1.style.color= 'green'
// }, 2000);
// setTimeout(() => {
//     h1.style.color= 'blue'
// }, 3000);
// setTimeout(() => {
//     h1.style.color= 'yellow'
// }, 4000);
// setTimeout(() => {
//     h1.style='none'
// }, 5000);



// this is another methon [2]
// function changeColor(prop,color, timeout){
//     setTimeout(() => {
//         prop.style.color=color;
//     }, timeout);
// }
// changeColor(h1,'green',1000)
// changeColor(h1,'red',2000)
// changeColor(h1,'blue',3000)
// changeColor(h1,'yellow',4000)
// changeColor(h1,'black',5000)



// callback Hell type 1
function changeColor(prop,color, timeout, nextColorChange){
    setTimeout(() => {
        prop.style.color=color;
        if (nextColorChange) nextColorChange();
    }, timeout);
}
changeColor(h1,'green',1000, ()=>{
    changeColor(h1,'red',1000,()=>{
        changeColor(h1,'blue',1000,()=>{
            changeColor(h1,'yellow',1000,()=>{
                changeColor(h1,'black',1000)
            })
        })
    })
})


// callback hell type 2
function savetoDB(data,success, failed){
    let internetSpeed = Math.floor(Math.random()*10)+1

    if (internetSpeed > 4){
        success();
    } else{
        failed();
    }
}

savetoDB('nirwair',()=>{
    console.log('Success: your data is saved')
    savetoDB('anotherdata nirwair2', ()=>{
        console.log('success2: your data2 is saved')
        savetoDB('nirwair3',()=>{
            console.log('success3: your data3 is saved')
            savetoDB('nirwair4',()=>{
                console.log('success4 : your data4 is saved')
            },()=>{
                console.log('failed: your data4 is not saved!')
            })
        },()=>{
            console.log('failde3: your data3 is not saved')
        })
    },()=>{
        console.log('failde2: your data is not saved!')
    })
},()=>{
    console.log('failde: your data is not saved!')
})



