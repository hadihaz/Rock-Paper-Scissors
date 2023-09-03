const items = document.querySelectorAll(".item");
const playAgain = document.querySelector(".playAgain");
const computerImg = document.querySelector("#computerImg");
const playerImg =document.querySelector("#playerImg")
const computerScoreId= document.querySelector("#computerScore")
const playerScoreId= document.querySelector("#playerScore")
const statusTextId=document.querySelector("#statusText")

let playerScore = 0;
let computerScore = 0;
let statusText = 0;
let gameEnd = false;

function getComputerChoice() {
    let items = ["Rock", "Paper", "Scissors"]
    return items[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    computerImg.src = `img/${computerSelection}.png`;
    playerImg.src = `img/${playerSelection}.png`;
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

function game(getPlayerChoice) {
    const playerSelection = getPlayerChoice;
    const computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    if (result == "Player Won!") {
        playerScore += 1
    }
    else if (result == "Computer Won!") {
        computerScore += 1
    }
    if (playerScore == 3) {
        statusTextId.innerHTML = "Player Won!";
        gameEnd = true;
    }
    else if (computerScore == 3) {
        statusTextId.innerHTML = "Computer Won!";
        gameEnd = true;
    }
    if (gameEnd) {
        items.forEach(item => {
            item.style.display = "none";
        });
        playAgain.style.display = "inline";
    }
}

items.forEach(item => {
    item.addEventListener('click', () => {
        game(item.id);
        statusText += 1
        computerScoreId.innerHTML = computerScore;
        playerScoreId.innerHTML = playerScore;
        if (!gameEnd) statusTextId.innerHTML = `Round ${statusText}`;

    })
});

playAgain.addEventListener('click', () => {
    items.forEach(item => {
        item.style.display = "inline";
    });
    playAgain.style.display = "none";
    gameEnd = false;
    playerScore = 0;
    computerScore = 0;
    statusText= 0;
    computerImg.src = ``;
    playerImg.src = ``;
    computerScoreId.innerHTML = 0;
    playerScoreId.innerHTML = 0;
    statusTextId.innerHTML = `Hello!`;

})