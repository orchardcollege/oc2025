let dog = "Tomy"
let dogOwner = "Peter"
let dogAge = 2 + " years"
let div = document.querySelector("#div")
let calculator = document.querySelector("#calculations__div")



let text = `the dog's name is ${dog} , his owner is ${dogOwner}, the dog is ${dogAge}`;
let text2 = `${dog} is very happy , ${dogOwner} is too.`;

let textToDisplay = div.innerHTML = `<p>${text} and ${text2}</p>` 


let a = 345
let b = 100
let result = a + b

let calculateDisplay = calculator.innerHTML = `<p>the result is:  <strong>${result}</strong></p>` 

console.log(text)

//select image__container from dom, then appendChild() function.
let img_container = document.querySelector("#image__container")

//create element img
let image = document.createElement("img")


// include img.src = "path"
image.src = "./img/lizzard.jpg"
//Image.className = ""
image.className = "image"
//Image.alt = ""
image.alt = "this is a lizzard"
image.style.width = "450px"
image.style.borderRadius = "10px"
image.style.boxShadow = "1px 2px 2px 1px pink"



img_container.appendChild(image)