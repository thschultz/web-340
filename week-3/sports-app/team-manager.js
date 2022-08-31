// import module
const team = require("./team.js");
const moment = require("moment");
const time = moment;

//creating teams
function findTeams() {
  const TEAMS_ARRAY = [
    new team("Alabama", "Crimson Tide", "54"),
    new team("LSU", "Tigers", "54"),
    new team("Georgia", "Bulldogs", "54"),
    new team("Texas", "Longhorns", "54"),
    new team("USC", "Trojans", "54")
  ];
  
  return TEAMS_ARRAY;
}

//for loop for teams
function findTeam(name) {
  const TEAMS = findTeams();
  for(let i = 0; i < TEAMS.length; i++) {
    if(TEAMS[i].name === name) return TEAMS[i];
  }
}

//championship game function
function getGame() {
  const Alabama = findTeam("Alabama");
  const Lousiana = findTeam("LSU");

  return `${Alabama.name} ${Alabama.mascot} is playing ${Lousiana.name} `+
          `${Lousiana.mascot} on ${time().add(7, "days").format("MM-DD-YYYY")} ` +
          `at ${time('7:30 PM', 'h:mm A').format("h:mm A")} CST.`
}

//exports module
module.exports = {findTeams, getGame}