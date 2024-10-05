let keyBtn = document.querySelector('.key')

//mouse event
// keyBtn.addEventListener('click', function(event){
//     console.log(event)
//     console.log('button Clicked')
// })
keyBtn.addEventListener('dblclick', function(event){
    console.log(event)
    console.log('button Clicked')
})


//key event
let input = document.querySelector('.keyboard input')
// input.addEventListener('keydown', function(){   //count during press
//     console.log('key was pressed')
// })
input.addEventListener('keyup', function(event){    //count after release
    console.log(event)    // we can check all properties of particular key
    console.log('key was released')
})

// traking which key has pressed!!   [evnet.code, event.key]
let k= document.querySelector('.keyboardGame input')
k.addEventListener('keydown',function(event){
    console.log(event.key)
    console.log(event.code)
    if (event.code == 'ArrowUp'){
        console.log("charactor moveing forward")
    }
    else if(event.code == 'ArrowDown'){
        console.log("charactor moveing backward")
    }
    else if(event.code == 'ArrowLeft'){
        console.log("charactor moveing Left")
    }
    else if(event.code == 'ArrowRight'){
        console.log("charactor moveing Right")
    }
    else {
        console.log('you pressed worng key')
    }
})


