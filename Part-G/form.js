let form = document.querySelector('form')
// form.addEventListener('submit', function (event){
//     event.preventDefault();

//     let user = document.querySelector('#user');
//     let pass = document.querySelector('#pass');
//     console.log(user.value)
//     console.log(pass.value)
//     console.log('form submitted');
//     alert(`Hi ${user.value} your password is set to ${pass.value}`);
// })

console.dir(form)
console.dir(form.elements[0])
console.dir(form.elements[1])
console.dir(form.elements[2])
// although we have already selected form so we can access there value without querySelector;

form.addEventListener('submit', function (event){
    event.preventDefault();

    let user = form.elements[0]   // another way to select input withort quarySelector
    let pass = this.elements[1]   // another way to select input without quarySelector
    console.log(user.value)
    console.log(pass.value)
    console.log('form submitted');
    alert(`Hi ${user.value} your password is set to ${pass.value}`);
})

// change and input elements in form
// change element: -
let span1 = document.querySelector("#input1")
let input1 = document.querySelector('#form2input1');
input1.addEventListener('change', function(){
    console.log('change event')
    console.log('final value= ', this.value)
    span1.innerText = this.value              // to display input value after final change
})

// input element: -
let span2 = document.querySelector("#input2")
let input2 = document.querySelector('#form2input2');
input2.addEventListener('input', function(){
    console.log('change event')
    console.log('final value= ', this.value)
    span2.innerText = this.value            // to display input value instantly 
})