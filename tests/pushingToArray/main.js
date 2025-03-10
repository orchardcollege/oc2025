const arrayOfPlayers = document.querySelector("#array");
const nameInput = document.querySelector("#name");
const lastnameInput = document.querySelector("#lastname");
const addingPlayer = document.querySelector("#addPlayer");

const nbaPlayers = [
    { firstName: "LeBron", lastName: "James" },
    { firstName: "Stephen", lastName: "Curry" },
    { firstName: "Kevin", lastName: "Durant" },
    { firstName: "Giannis", lastName: "Antetokounmpo" },
    { firstName: "Luka", lastName: "Doncic" },
    { firstName: "Nikola", lastName: "Jokic" },
    { firstName: "Joel", lastName: "Embiid" },
    { firstName: "Jayson", lastName: "Tatum" },
    { firstName: "Jimmy", lastName: "Butler" },
    { firstName: "Ja", lastName: "Morant" },
    { firstName: "Kawhi", lastName: "Leonard" },
    { firstName: "Devin", lastName: "Booker" },
    { firstName: "Anthony", lastName: "Davis" },
    { firstName: "Damian", lastName: "Lillard" },
    { firstName: "Zion", lastName: "Williamson" }
];

// Function to render players
const renderPlayers = () => {
    arrayOfPlayers.innerHTML = ""; // Clear list before updating
    nbaPlayers.forEach(player => {
        arrayOfPlayers.innerHTML += `<li>${player.firstName} ${player.lastName}</li>`;
    });
};

// Initial render
renderPlayers();

// Add event listener to button
addingPlayer.addEventListener("click", () => {
    const playerName = nameInput.value.trim();
    const playerLastname = lastnameInput.value.trim();

    if (playerName && playerLastname) {
        // Add new player to array
        nbaPlayers.push({ firstName: playerName, lastName: playerLastname });

        // Re-render the updated list
        renderPlayers();

        // Clear input fields
        nameInput.value = "";
        lastnameInput.value = "";
    } else {
        alert("Please enter both first and last name!");
    }
});
