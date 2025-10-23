const container = document.querySelector("#container")
const container2 = document.querySelector("#container2")
const container3 = document.querySelector("#container3")
const body = document.querySelector("body")

body.style.backgroundColor = "#F5F5F7"
body.style.fontFamily = "SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif"
/* Object.assign(body.style, {
    backgroundColor: "#F5F5F7",
    color: "#333",
    fontFamily: "Arial, sans-serif",
    margin: "0",
    padding: "20px"
}); */


body.style.cssText = `
    background-color: #F5F5F7;
    color: #333;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    border: 50px solid grey;
`;
let popupContainer = document.createElement("div")
popupContainer.style.display = "flex"
popupContainer.style.flexDirection = "row"
popupContainer.style.alignItems = "center"
popupContainer.style.justifyContent = "center"

let popup = document.createElement("button")
popup.innerText = "delete?"
popup.style.padding = "5px"
popup.style.width = "100px"
popup.style.borderRadius = "10px"
popup.style.marginLeft = "10px"
popup.style.display = "none"
popupContainer.appendChild(popup)

const users = [
    { name: "A", lastname: "G" },
    { name: "B", lastname: "F" },
    { name: "C", lastname: "E" },
    { name: "D", lastname: "D" },
    { name: "E", lastname: "C" },
    { name: "F", lastname: "B" },
    { name: "G", lastname: "A" }
]

const userInfo = users.map(user => {
    container.innerHTML +=
        `
        <p>name: ${user.name}</p>
        <p>lastname: ${user.lastname}</p>

    `
})



const btn = document.createElement("button")

btn.innerText = "do sth"
btn.style.padding = "5px"
btn.style.width = "80px"
btn.style.borderRadius = "10px"
container2.appendChild(btn)

btn.addEventListener("click", () => {
    console.log("btn clicked")

    body.style.backgroundColor = "black"

    if (body.style.backgroundColor == "black") {
        setTimeout(() => {
            body.style.backgroundColor = "white"
            body.style.transition = "all 0.3s ease-in-out"
            body.style.borderRadius = "50%"
        }, 1500)
    }


})


const animales = [
    "León", "Tigre", "Elefante", "Jirafa", "Zebra",
    "Rinoceronte", "Hipopótamo", "Cocodrilo", "Serpiente", "Águila",
    "Halcón", "Búho", "Loro", "Pingüino", "Flamenco",
    "Delfín", "Ballena", "Tiburón", "Pulpo", "Medusa",
    "Oso", "Lobo", "Zorro", "Conejo", "Ardilla",
    "Ciervo", "Alce", "Bisonte", "Cabra", "Oveja",
    "Caballo", "Vaca", "Cerdo", "Pollo", "Pato",
    "Gato", "Perro", "Ratón", "Murciélago", "Mono",
    "Gorila", "Chimpancé", "Orangután", "Lemur", "Canguro",
    "Koala", "Panda", "Rana", "Salamandra", "Tortuga"
];

console.log(animales)

const btn2 = document.createElement("button")
btn2.innerText = "show animals"
btn2.style.padding = "5px"
btn2.style.width = "100px"
btn2.style.borderRadius = "10px"
btn2.style.marginLeft = "10px"

container2.appendChild(btn2)
container3.appendChild(popupContainer)


btn2.addEventListener("click", () => {

    let div = document.createElement("div")
    animales.forEach(animal => {
        let p = document.createElement("p")
        p.textContent = animal
        div.style.display = "flex"
        div.style.flexDirection = "row"
        div.style.gap = "3px"
        div.style.flexWrap = "wrap";
        div.appendChild(p)
    })
    container2.appendChild(div)

    btn2.disabled = true

})


