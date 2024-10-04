let aboutPara = document.querySelector("p")
console.log(aboutPara.classList)
aboutPara.classList.add('extraCss')
aboutPara.classList.remove('extraCss') //remove the class
aboutPara.setAttribute('class', 'extraCss') //it adds a class but it remove all previous class that's why we don't use 'setAttribute' to add class or id.

//classList.toggle:  it a class present then it removes and if class is not present in that element then toggle add it.
aboutPara.classList.toggle('backBlack')  // .backBlack is not present so backBlack added into it.
aboutPara.classList.toggle('backBlack')  // .backBlack already present that's why it toggled.