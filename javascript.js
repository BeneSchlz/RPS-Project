function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return "rock";
    } else if (random === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Choose Rock, Paper, or Scissors");
    humanChoice = humanChoice.toLowerCase();
    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        humanChoice = prompt("Invalid choice. Please choose Rock, Paper, or Scissors").toLowerCase();
    }
    return humanChoice;
}

function playRound(humanChoice, computerChoice, scores) {
    const choices = ["rock", "paper", "scissors"];
    const humanChoiceIndex = choices.indexOf(humanChoice);
    const computerChoiceIndex = choices.indexOf(computerChoice);

    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoiceIndex === (computerChoiceIndex + 1) % 3) {
        console.log(`You win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}.`);
        scores.humanScore++;
    } else if (computerChoiceIndex === (humanChoiceIndex + 1) % 3) {
        console.log(`You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}.`);
        scores.computerScore++;
    } else {
        console.log(`Draw! Both players chose ${computerChoice.toUpperCase()}.`);
    }

    console.log("Current Scores:");
    console.log(`Player Score: ${scores.humanScore}`);
    console.log(`Computer Score: ${scores.computerScore}`);
}

function playGame(rounds = 5) {
    let scores = { humanScore: 0, computerScore: 0 };

    for (let i = 0; i < rounds; i++) {
        playRound(getHumanChoice(), getComputerChoice(), scores);
    }

    console.log("Final Scores:");
    console.log(`Player Score: ${scores.humanScore}`);
    console.log(`Computer Score: ${scores.computerScore}`);
}

playGame();