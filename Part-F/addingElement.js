// creating element
document.createElement('p')
let newP = document.createElement('p')
console.dir(newP)
newP.innerText = "hi i am new parragraph added by appendChild element";
let body = document.querySelector('body')
body.appendChild(newP)   // append at last as child of object

// add in a particular class
let box = document.querySelector('.box')
box.appendChild(newP)

//add button
let btn = document.createElement('button')
btn.innerText = "click me!"
box.appendChild(btn)

// to add something in previously defined variables
newP.append(btn)
newP.append(" additional material")

//prepend
prependPara = document.createElement('p')
prependPara.innerText = "I'm added by prepend element";
box.prepend(prependPara)


// insertAdjacentElement(where, element)
let btn1 = document.createElement('button')
let btn2 = document.createElement('button')
let btn3 = document.createElement('button')
let btn4 = document.createElement('button')
btn1.innerText = "beforebegin"
btn2.innerText = "afterbegin"
btn3.innerText = "beforeend"
btn4.innerText = "afterend"
let AboutP = document.querySelector('p')
AboutP.insertAdjacentElement('beforebegin', btn1)
AboutP.insertAdjacentElement('afterbegin', btn2)
AboutP.insertAdjacentElement('beforeend', btn3)
AboutP.insertAdjacentElement('afterend', btn4)
