let h2 = document.querySelector('.this h2')
let h4 = document.querySelector('.this h4')
let h6 = document.querySelector('.this h6')
let p = document.querySelector('.this p')
let btn = document.querySelector('.this button')

h2.addEventListener('click',function(){
    // console.dir(this)
    // console.log(this)
    console.log(this.innerText)
    this.style.backgroundColor= "green"   // use of this 
})

function colorChange(){
    this.style.backgroundColor = 'yellow';
}
h4.addEventListener('click', colorChange)
h6.addEventListener('click', colorChange)
p.addEventListener('click', colorChange)
btn.addEventListener('click', colorChange)