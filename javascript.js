function getComputerChoice () {
    let random = Math.floor(Math.random()*3)
    if (random === 1) {
        return "rock"
    } else if (random === 2){
        return "paper"
    }
    else {
        return "scissors"
    }
}
getComputerChoice ()
console.log(getComputerChoice());

function getHumanChoice () {
    let humanChoice = prompt("Choose Rock, Paper, or Scissors");
    humanChoice = humanChoice.toLowerCase();
    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        humanChoice = prompt("Invalid choice. Please choose Rock, Paper, or Scissors").toLowerCase();
    }
    return humanChoice;
}
console.log(getHumanChoice());

