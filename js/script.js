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
function getPlayerChoice() {
    return prompt("Choose between rock, paper, or scissors");
}


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


function playRound() {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    playerChoice = playerChoice.toLowerCase();
    console.log("Player choice is: " + playerChoice);
    console.log("Computer choice is: " + computerChoice);

    if (playerChoice === computerChoice) {
        console.log("This rounds a tie")
    } else if (playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice ==="rock" || playerChoice === "scissors" && computerChoice === "paper") {
        playerScore++;
        console.log("Human wins this round")
        console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
    } else {
        computerScore++;
        console.log("Computer wins this round");
        console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
    }
}

//Create function playGame
    //IF player score or computer score = 5
        //game over
    //ELSE
        //play another round
function playGame() {
    playRound();

    if (computerScore >= 5) {
        console.log("Computer wins this game");
        playerScore = 0;
        computerScore = 0;
        return;
    } else if (playerScore >= 5) {
        console.log("Congrats! You won this game");
        playerScore = 0;
        computerScore = 0;
        return;
    } else {
        playGame();
    }
}


