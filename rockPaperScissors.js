let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);  
    return choices[randomIndex];
}

//function getHumanChoice() {
    //const choices = ['rock', 'paper', 'scissors'];
    //let choice;
    //do {
        //choice = prompt("Enter rock, paper, or scissors: ").toLowerCase();
    //} while (!choices.includes(choice));
    //return choice;
//}

function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        return `it's a tie!` + " " + `Current Score - You: ${humanScore}, Computer: ${computerScore}`;
    } else if (
        (humanSelection === 'rock' && computerSelection === 'scissors') ||
        (humanSelection === 'paper' && computerSelection === 'rock') ||
        (humanSelection === 'scissors' && computerSelection === 'paper')
    ) {
        if (humanScore < 4) {
            humanScore++; 
            return `You win! ${humanSelection} beats ${computerSelection}.` + " " + `Current Score - You: ${humanScore}, Computer: ${computerScore}`;  
        } else if (humanScore === 4) {
            humanScore = 0; // Reset score after winning
            computerScore = 0; // Reset computer score after winning
            return `You win! ${humanSelection} beats ${computerSelection}.` + " " + "Congratulations! You win the game!";
        }
    } else {
        if (computerScore < 4) {
            computerScore++;
            return `You lose! ${computerSelection} beats ${humanSelection}.` + " " + `Current Score - You: ${humanScore}, Computer: ${computerScore}`;
        } else if (computerScore === 4) {
            humanScore = 0; // Reset score after losing
            computerScore = 0; // Reset computer score after losing
            return `You lose! ${computerSelection} beats ${humanSelection}.` + " " + "Sorry! The computer wins the game.";
        }
    }
}

//for (let i = 0; i < 5; i++) {
    //const humanSelection = getHumanChoice();
    //const computerSelection = getComputerChoice();
    //playRound(humanSelection, computerSelection);
//}
    
// console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
// if (humanScore > computerScore) {
//     console.log("Congratulations! You win the game!");
// } else if (computerScore > humanScore) {
//     console.log("Sorry! The computer wins the game.");
// } else {
//     console.log("The game is a tie!");
// }


document.addEventListener('DOMContentLoaded', () => {
    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');
    const resultDiv = document.getElementById('result');
    const scoreDiv = document.getElementById('score');

    rock.addEventListener('click', () => {
        resultDiv.textContent = "You chose rock.";
        let text = playRound('rock', getComputerChoice());
        scoreDiv.textContent = text;
    });
    
    paper.addEventListener('click', () => {
        resultDiv.textContent = "You chose paper.";
        let text = playRound('paper', getComputerChoice());
        scoreDiv.textContent = text;
    });
    
    scissors.addEventListener('click', () => {      
        resultDiv.textContent = "You chose scissors.";
        let text = playRound('scissors', getComputerChoice());
        scoreDiv.textContent = text;
    });
});


