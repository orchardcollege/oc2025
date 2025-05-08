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


let temperature = 11;

if (temperature < 0 && temperature > -4) {
    console.log("Wear a heavy winter coat, gloves, and a scarf")
} else if (temperature == 0 && temperature < 12) {
    console.log("Wear a jacket and a warm hat")
} else if (temperature > 16 && temperature < 25) {
    console.log("Wear a light jacket or sweater")
} else if (temperature > 25) {
    console.log("Wear light clothing and sunglasses")
} else if (temperature < -5) {
    console.log("Wear heavy, it's cold out there")
} else if (temperature > 40) {
    console.log("do whatever, you will be roated anyways")
} else {
    console.log("kheee");
}