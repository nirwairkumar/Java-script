// console.dir(document.all[9].innerText="Nirwair")
// document.all[9].innerText="Nirwair"

//getElementById
let imgobj = document.getElementById("mainImg")

console.dir(imgobj)         //will give all properties in object form

console.dir(imgobj.src)      //it give the source of image

// // we can change the source
imgobj.src = "assets/creation_3.jpeg"


console.log(document.getElementById("description")) //open simply the element
console.dir(document.getElementById("description"))  //open in the object form

//getElementByClassName
console.dir(document.getElementsByClassName("oldImg"))  // collection of all images in object form which have class "oldImg"

console.dir(document.getElementsByClassName("oldImg")[0])  //give elements of first element in the firm of object

let smallImage = document.getElementsByClassName("oldImg");
for (i=0; i< smallImage.length; i++)
{
    console.dir(smallImage[i].src)
    // console.dir(smallImage[i].src="assets/spiderman_img.png")
    console.dir(smallImage[i].tagName)
    console.log(`value of ${i}th image changed to new image`)
}
// for (i=0; i< smallImage.length; i++)
// {
//     console.dir(smallImage[i].tagName)
// }

//  getElementByTagName
let tagname = document.getElementsByTagName("p")
console.dir(tagname)          //give all paragraph elements in object form

// let tagNam = document.getElementsByTagName("p")[1].innerText="nirwair"   //the inner text will change to nirwair;