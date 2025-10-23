let result = document.querySelector("#result")

let intNumber = 3

if (intNumber % 2 == 0) {
    result.innerText = "it is an even number"
} else {
    result.innerText = "it is an odd number"
}

/* let user_name = prompt("enter user name")
let user_password = prompt("enter password")
let name = "george"
let password = "root" */

/* if (user_name == name && user_password == password) {
    alert("login!")
} else {
    alert("log out")
} */

/* user_name == name && user_password == password ? alert("login!") : alert("log out"); */


let temperature = 250;

if (temperature < 0 && temperature > -4) {
    console.log("Wear a heavy winter coat, gloves, and a scarf")
} else if (temperature == 0 && temperature < 12) {
    console.log("Wear a jacket and a warm hat")
} else if (temperature > 16 && temperature < 25) {
    console.log("Wear a light jacket or sweater")
} else if (temperature > 25 && temperature < 40) {
    console.log("Wear light clothing and sunglasses")
} else if (temperature < -5) {
    console.log("Wear heavy, it's cold out there")
} else if (temperature >= 40) {
    console.log("do whatever, you will be roasted anyways")
} else {
    console.log("kheee");
}

const divMoreInfo = document.querySelector("#moreInfo")
const divMoreInfo2 = document.querySelector("#moreInfo2")

let moreInfo = false;

if (moreInfo) {
    divMoreInfo.innerHTML = `<h1>este div si tiene more info ${moreInfo}</h1>`
    console.log("moreInfo")
} else {
    divMoreInfo.innerHTML = `<h1>este div no tiene more info ${moreInfo}</h1>`
    console.log("Not moreInfo")
}

let adult = 15;

if (adult >= 18) {
    divMoreInfo2.innerHTML = `<h1>puede pasar, tiene ${adult} años de edad.</h1>`
    console.log("moreInfo")
} else {
    divMoreInfo2.innerHTML = `<h1>no puede pasar porque es menor de edad.</h1>`
    console.log("Not moreInfo")
}


let divAddImg = document.querySelector("#divAddImg")
let num = 4;
const image1 = document.createElement("img")
image1.style.background = "blue"
image1.style.width = "100px"
image1.style.height = "100px"
const image2 = document.createElement("img")
image2.style.background = "black"
image2.style.width = "100px"
image2.style.height = "100px"
const image3 = document.createElement("img")
image3.style.background = "grey"
image3.style.width = "100px"
image3.style.height = "100px"
const image4 = document.createElement("img")
Object.assign(image4.style, {
    backgroundColor: "green",
    width: "100px",
    height: "100px"
});

if (num === 1) {
    divAddImg.appendChild(image1)

} else if (num === 2) {
    divAddImg.appendChild(image2)

} else if (num === 3) {
    divAddImg.appendChild(image3)

} else if (num === 4) {
    divAddImg.appendChild(image4)

} else {
    const parra = document.createElement("h2")
    parra.innerText = "Ingresa un número de 1 al 4"
    divAddImg.appendChild(parra)
}


const perros = [
    { name: "god1", edad: 2 },
    { name: "god2", edad: 3 },
    { name: "god3", edad: 4 }
];
const perrosMapeo = perros.map(perro => {
    const { name, edad } = perro;

    console.log(name, edad);
    return { name, edad }
})
console.log(perrosMapeo);

