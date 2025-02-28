import {animals} from './animalsList.js'

const animalsList = document.querySelector('#animals__container');

/* animals.map(animal => {

    const animalCard = `
    
    <div class="card">
        <h3 class="name">Name: ${animal.name}</h3>
        <p>Country: ${animal.country}</p>
        <p>Food: ${animal.whatTheyEat}</p>
        <p>Predadores: ${animal.predators}</p>
    </div>
    
    `;
}) 

animalsList.innerHTML += animalCard; */

    animals.map(({ name, country, whatTheyEat, predators }) => {
        const animalCard = `
            <div class="card">
                <h3 class="name">Name: ${name}</h3>
                <p>Country: ${country}</p>
                <p>Food: ${whatTheyEat}</p>
                <p>Predators: ${predators}</p>
            </div>
        `;
    
        animalsList.innerHTML += animalCard;
    });