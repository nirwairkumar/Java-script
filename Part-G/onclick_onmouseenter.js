// let btn1 = document.querySelector('button')

// // // ------for one particular button------
// btn1.onclick = function(){
//     alert("Massage recived")
// }


let btns = document.querySelectorAll("button");
for (b of btns){
   
    // b.onclick = forclick;
    b.onmouseenter = function (){
        console.log("touched")
    }
}
function forclick() {
    alert("your emotion send to server");
}

