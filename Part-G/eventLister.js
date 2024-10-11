let btnAll = document.querySelectorAll("button");
for (b of btnAll){
//    b.addEventListener('click', forclick)
//    b.addEventListener('click', sayHello)
   b.addEventListener('dblclick', function(){
    console.log("you double clicked me")
   })
    
}
function forclick() {
    alert("your emotion send to server");
}
function sayHello() {
    alert("Hello!");
}

// for .box
let box = document.querySelector('.box')
box.addEventListener('mouseenter', function(){
    console.log('Mouse entered into the box')
})
//paragraph click
box.previousElementSibling.addEventListener('click', function(){
    console.log('paragraph trigred')
})