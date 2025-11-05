console.log("Hello, World!");
const nba = require('./nbaPlayers.json');
console.log(nba);
nbaToJson = JSON.stringify(nba);
console.log(nbaToJson);

nba.forEach(player => {
    console.log(`Name: ${player.name}, Position: ${player.position}, Height: ${player.height}, Country: ${player.country}, Plays for the ${player.team}`);
});


