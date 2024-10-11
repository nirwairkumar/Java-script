let btn = document.querySelector('button') // selecting our button
let div = document.querySelector('div')   // selecting div
let h3 = document.querySelector('h3');   // selecting heading
btn.addEventListener('click', function(){  
    let color = randomColor();           // picking a random color
    console.log(color)                   // printing color code on console
    h3.innerText = color;                // change heading to color number
    div.style.backgroundColor= color;    // for div background color change
})
function randomColor(){               // for generating a random rgb color code
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)

    return color =`rgb(${red}, ${green}, ${blue})`;
}

