// ------ Variables ------
const choices = ["Rock", "Paper", "Scissors"];

let humanChoice = prompt(`What is your choice?`);
let humanScore = 0;
let computerScore = 0;
let round = 0;



// ------ A function that returns computer's choices. ------
const getComputerChoice = () => {

    let randomChoice = Math.floor(Math.random() * choices.length)

    // console.log(`Computer's random choice:  ${randomChoice}`);

    if (randomChoice === 0) {
        return choices[0]
    } else if (randomChoice === 1) {
        return choices[1]
    } else if (randomChoice === 2) {
        return choices[2]
    }
}

// console.log(`The computer chosed: ${getComputerChoice()}`);

// ------ A function that returns the playe's choice. ------
const getHumanChoice = () => {

    return humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
}







const playGame = () => {
    const playRound = (humanChoice, computerChoice) => {
        humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();

        // Rock Conditions
        if (humanChoice === "Rock" && computerChoice === "Rock") {
            return `It's a tie!\nYou: ${humanScore} Computer: ${computerScore}`;

        } else if (humanChoice === "Rock" && computerChoice === "Paper") {
            computerScore++;
            return `Paper beats rock, Computer wins!\nYou: ${humanScore} Computer: ${computerScore}`;

        } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
            humanScore++;
            return `Rock beats Scissors, You win!\nYou: ${humanScore} Computer: ${computerScore}`;

            // Paper conditions
        } else if (humanChoice === "Paper" && computerChoice === "Paper") {
            return `It's a tie!\nYou: ${humanScore} Computer: ${computerScore}`;

        } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
            computerScore++;
            return `Scissors beats Paper, Computer wins!\nYou: ${humanScore} Computer: ${computerScore}`;

        } else if (humanChoice === "Paper" && computerChoice === "Rock") {
            humanScore++;
            return `Paper beats Rock, You win!\nYou: ${humanScore} Computer: ${computerScore}`;

            // Scissors conditions
        } else if (humanChoice === "Scissors" && computerChoice === "Scissors") {
            return `It's a tie!\nYou: ${humanScore} Computer: ${computerScore}`;

        } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
            computerScore++;
            return `Rock beats Scissors, Computer wins!\nYou: ${humanScore} Computer: ${computerScore}`;

        } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
            humanScore++;
            return `Scissors beats Paper, You win!\nYou: ${humanScore} Computer: ${computerScore}`;
        }


    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();


    console.log(playRound(humanSelection, computerSelection));

}


while (round < 5) {
    humanChoice = prompt(`What is your choice?`);
    round++;
    console.log(`Round: ${round}`);
    console.log(`My choice: ${getHumanChoice()}`);
    playGame();
    if (round > 4 && humanScore > computerScore){
        console.log(`Congratulations! You won!`);
    } else if (round > 4 && humanScore < computerScore){
        console.log(`Computer won!`)
    } else {
        console.log("It's a tie!");
    }
}