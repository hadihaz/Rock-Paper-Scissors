

function getComputerChoice() {
    let items = ["Rock", "Paper", "Scissors"]
    return items[Math.floor(Math.random() * 3)]
}
function getPlayerChoice() {
    let items = ["Rock", "Paper", "Scissors"]
    return items[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("=")
        return "="
    }
    else if (
        (playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Scissors" && computerSelection == "Paper") ||
        (playerSelection == "Paper" && computerSelection == "Rock")
    ) {
        console.log("Player Won!");
        return "Player Won!"
    }
    else if (
        (playerSelection == "Rock" && computerSelection == "Paper") ||
        (playerSelection == "Paper" && computerSelection == "Scissors") ||
        (playerSelection == "Scissors" && computerSelection == "Rock")
    ) {
        console.log("Computer Won!");
        return "Computer Won!"
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    while (true) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result == "Player Won!") {
            playerScore += 1
        }
        else if (result == "Computer Won!") {
            computerScore += 1
        }
        if (playerScore == 3) {
            console.log(" won!!!!!");
            break;
        }
        else if (computerScore == 3) {
            console.log("lose!!!!!");
            break;
        }
    }
}

game()
