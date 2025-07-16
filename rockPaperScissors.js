function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);  
    return choices[randomIndex];
}

function getHumanChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let choice;
    do {
        choice = prompt("Enter rock, paper, or scissors: ").toLowerCase();
    } while (!choices.includes(choice));
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanSelection, computerSelection) {
            if (humanSelection === computerSelection) {
                console.log("It's a tie!");
                return;
            } else if (
                (humanSelection === 'rock' && computerSelection === 'scissors') ||
                (humanSelection === 'paper' && computerSelection === 'rock') ||
                (humanSelection === 'scissors' && computerSelection === 'paper')
            ) {
                humanScore++;
                console.log(`You win! ${humanSelection} beats ${computerSelection}.`);
                return;
            } else {
                computerScore++;
                console.log(`You lose! ${computerSelection} beats ${humanSelection}.`);
                return;
            }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Sorry! The computer wins the game.");
    } else {
        console.log("The game is a tie!");
    }
}