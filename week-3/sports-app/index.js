//Web 340 - Node JS
//Student: Thomas Schultz
//Instructor: Richard Krasso


const searchTeams = require("./team-manager");
const TEAMS = searchTeams.findTeams();

//Display teams
console.log(
  "-- DISPLAYING TEAMS --"
);

//Printing teams
TEAMS.forEach(element => {
  console.log(
    `Name: ${element.name} \n`+
    `Mascot: ${element.mascot} \n`+
    `Player Count: ${element.playerCount} \n`
  );
});
//Championship game
console.log("-- CHAMPIONSHIP GAME -- \n", searchTeams.getGame());