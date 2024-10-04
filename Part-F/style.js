let heading = document.querySelector("h1")
console.log(heading.style)          //you can show all style properties
heading.style.color ='white'
heading.style.backgroundColor = 'blue'
// heading.s = 'blue'
heading.style.border =' solid #050561'
heading.style.borderWidth = '2px'
heading.style.display = 'flex'
heading.style.justifyContent = 'center'

let links = document.querySelectorAll('.box a')
for (el of links){
    el.style.color = 'purple'
}