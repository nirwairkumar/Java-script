//Qs1. Create a new input and button element on the page using JavaScript only. Set the text of button to “Click me”;

let body = document.querySelector('body')
let input = document.createElement('input')
let btn1 = document.createElement('button')
btn1.innerText = "Click me!"

let div = document.createElement('div')

// body > div > input
body.appendChild(div)
div.appendChild(input)
//inserting button after end of the div element
div.insertAdjacentElement('afterend',btn1)


//Qs2. Add following attributes to the element :
        //- Change placeholder value of input to “username”
        //- Change the id of button to “btn”

//setting placeholder of input
input.setAttribute('placeholder', 'username')

//setting id of button
btn1.setAttribute('id', 'btn1')

// Qs3. Access the btn using the querySelector and button id. Change the button background color to blue and text color to white.

btn1.style.backgroundColor = 'blue'
btn1.style.color = 'white'

// Qs4. Create an h1 element on the page and set its text to “DOM Practice” underlined. Change its color to purple.

let h1 = document.createElement('h1')
h1.innerText = 'DOM Practice'
// h1.innerHTML = '<u>DOM Practice</u>'
h1.style.textDecoration = 'underline wavy'
h1.style.textDecorationColor = 'green'
h1.style.color = 'purple'
body.appendChild(h1)


//Qs5. Create a p tag on the page and set its text to “Apna College Delta Practice”, where Delta is bold.

let p = document.createElement('p')
p.innerHTML = 'NirachI Enterprises <br> <b>Indias biggest cloudStorage services</b>'
body.appendChild(p)