//import the data from games-data.js
import { videoGames } from './games-data.js';

//get the container from html
const gamesContainer = document.querySelector('#gamesContainer');
const menuBtn = document.querySelector('#menuBtn');
const menuDisplay = document.querySelector('#menuDisplay');
const loops = document.querySelector('#loops');
const gamesListDiv = document.querySelector('#gamesList');

//map the list and return the objects printing them 
const games = videoGames.map(game => {

    const { name, releaseYear, genre, creator } = game

    return `
        
            <div class="game">
                <h2 class="game__title">Title: ${name}</h2>
                <p class="game__year__release">Año de lanzamiento: ${releaseYear}</p>
                <p class="game__genre">Género: ${genre}</p>
                <p class="game__creator">Creador: ${creator}</p>
            </div>
   
    `;

}).join("");

gamesContainer.innerHTML = games;


let isMenuOpen = false;

function showMenu() {
    menuDisplay.style.transform = "translatey(0)";
    menuDisplay.style.opacity = "1";
    menuDisplay.style.transition = "all 600ms ease-in-out";
    console.log("Show menu")
}
function hideMenu() {
    menuDisplay.style.transform = "translatey(-100%)";
    menuDisplay.style.opacity = "0.7";
    menuDisplay.style.transition = "all 600ms ease-in-out";
    console.log("Hide menu")
}

function menuBtnHandler() {
    if (isMenuOpen) {
        hideMenu();
    } else {
        showMenu();
    }
    isMenuOpen = !isMenuOpen; // flip state
}

menuBtn.addEventListener("click", menuBtnHandler);
let animals = ["dog", "cat", "owl"]
for (let i = 0; i < animals.length; i++) {
    loops.innerHTML += `<p>looping round : ${i}, ${animals[i]}</p>`
}


let word = "hola"
for (let i = 0; i < word.length; i++) {
    console.log(word[i])
}

let num = 0;
while (num < 10) {
    console.log(num)
    num++
    console.log("this is number ", num)
}

/* let answer = "";
while (answer !== "yes") {
    answer = prompt("yes or not?")
} */



const gamesList = [
    { name: "game-0", year: 1983, gender: "shooter" },
    { name: "game-1", year: 1981, gender: "racing" },
    { name: "game-2", year: 1982, gender: "fighting" },
    { name: "game-3", year: 1983, gender: "shooter" },
    { name: "game-4", year: 1983, gender: "sports" },
    { name: "game-5", year: 1983, gender: "shooter" }
]


let gamesFilteredByYear = gamesList.filter((game) => game.gender === "shooter" && game.year === 1983)
const newGameToList = { name: "game-6", year: 1987, gender: "racing" }
gamesFilteredByYear.push(newGameToList)
console.log(gamesFilteredByYear)



gamesList.forEach(game => {
    const methods = document.querySelector("#methods");

    methods.innerHTML += `

    <div>
        <p class="text-md font-semibold text-white">${game.name}</p>
        <p class="text-md font-semibold text-white">${game.year}</p>
        <p class="text-md font-semibold text-white">${game.gender}</p>
    </div>
    
    `
})


const arrayOfNmumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arrayOfNmumbers.forEach(item => console.log("Number", item))

const tasks = ["buy milk", "do laundry", "call mom", "clean room"];
const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
console.log(randomTask)
console.log(Math.random())


let tasksmap = tasks.map(item => {

    console.log("do this:", item)

})











