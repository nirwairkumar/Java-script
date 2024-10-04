//parentElement
let h4 = document.querySelector("h4")
console.log(h4.parentElement)

//"children" "child" "childElementCount"
let div = document.querySelector(".box")
console.log(div.children)
console.log(div.childElementCount)

//"previousElementSibling"  "nextElementSibling"
let ul = document.querySelector("ul")
ul.children   //HTMLCollection(3) [li, li, li]
ul.children[1].previousElementSibling  // <li>...</li>
ul.children[1].nextElementSibling

// How to add "style" using these method
let img1 = document.querySelector("img")
img1.previousElementSibling.style.color = 'green'