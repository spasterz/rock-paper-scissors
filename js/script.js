console.log("Hello World");

//Create function get computer choice
//Generate random number 
//Create an array of the 3 possible options
//If number is between 0-33 choose rock
    //Else if number is between 34-66 choose paper
    //Else choose scissors
let options = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
const selectionBtnCont = document.getElementById("select-btn-cont");
const selectionBtns = document.querySelectorAll('.select-btn');
const statusTxt = document.getElementById("status-txt");
const computerChoiceTxt = document.getElementById("computer-choice");
const playerChoiceTxt = document.getElementById("player-choice");
const playerScoreTxt = document.getElementById("player-score");
const computerScoreTxt = document.getElementById('computer-score');
const playBtn = document.querySelector('.play-btn');

selectionBtns.forEach(function(btn) {
    btn.addEventListener('click', () => {
        let playerSelection = btn.getAttribute('data-selection');
        //console.log(playerSelection);
        playRound(playerSelection, getComputerChoice())
    })
})

playBtn.addEventListener('click', () => {
    playBtn.classList.toggle('deactive');
    selectionBtnCont.classList.toggle('deactive');
    playerScoreTxt.innerText = "0";
    playerChoiceTxt.innerText = "";
    computerScoreTxt.innerText = "0";
    computerChoiceTxt.innerText = "";

    playGame();
});

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function toggleBtns(btn) {

}

function getComputerChoice() {
    let num = Math.random();

    if (num <= .33) {
        return options[0];
    } else if (num >= .34 && num <= .65) {
        return options[1];
    } else {
        return options[2];
    }

}

//Create function getHumanChoice
//Prompt user to enter value
// function getPlayerChoice() {
//     return prompt("Choose between rock, paper, or scissors");
// }


//Create playRound function with two parameters playerChoice & computerChoice
//Change playerChoice to string to lower case
//IF the strings are the same restart round and no score
    //ELSE IF playerChoice = rock & computerChoice = scissors
        //Player wins round and gets a score
    //ELSE IF playerChoice = scissors & computerChoice = paper
        //Player winds round and gets a score
    //ELSE IF playerChoice = paper & computerChoice = rock
        //Player wins and gets a score
    //ELSE
        //Computer wins and gets a score?


function playRound(playerSelection, computerSelection) {
    let computerChoice = computerSelection;
    let playerChoice = playerSelection;
    //playerChoice = playerChoice.toLowerCase();
    computerChoiceTxt.innerText = capitalize(computerChoice);
    playerChoiceTxt.innerText = capitalize(playerChoice);
    // console.log("Player choice is: " + playerChoice);
    // console.log("Computer choice is: " + computerChoice);

    if (playerChoice === computerChoice) {
        statusTxt.innerText = "This Rounds a Tie"
        //console.log("This rounds a tie")
    } else if (playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice ==="rock" || playerChoice === "scissors" && computerChoice === "paper") {
        playerScore++;
        statusTxt.innerText = "Player Wins This Round"
        //console.log("Human wins this round")
        playerScoreTxt.innerText = playerScore;
        computerScoreTxt.innerText = computerScore;
        //console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
    } else {
        computerScore++;
        statusTxt.innerText = "Computer Wins This Round"
        //console.log("Computer wins this round");
        playerScoreTxt.innerText = playerScore;
        computerScoreTxt.innerText = computerScore;
        //console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
    }

    playGame();

    //playGame();
}

//Create function playGame
    //IF player score or computer score = 5
        //game over
    //ELSE
        //play another round
function playGame() {
    // playBtn.classList.toggle('deactive');
    // selectionBtnCont.classList.toggle('deactive');

    if (computerScore >= 5) {
        playBtn.innerText = "Play Again?"
        playBtn.classList.toggle('deactive');
        selectionBtnCont.classList.toggle('deactive');
        statusTxt.innerText = "Computer Wins This Game!";
        playerScore = 0;
        computerScore = 0;
        return;
    } else if (playerScore >= 5) {
        playBtn.innerText = "Play Again?";
        playBtn.classList.toggle('deactive');
        selectionBtnCont.classList.toggle('deactive');
        statusTxt.innerText = "Congrats! You won this game";
        playerScore = 0;
        computerScore = 0;
        return;
    } else {
        //playGame();
    }
}


