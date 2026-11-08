// ------ Variables ------
const choices = ["Rock", "Paper", "Scissors"];

let humanChoice = prompt("What is your choice?");
let humanScore = 0;
let computerScore = 0;


// ------ A function that returns computer's choices. ------
const getComputerChoice = () => {

    let randomChoice = Math.floor(Math.random() * choices.length)

    console.log(`Computer's random choice:  ${randomChoice}`);

    if (randomChoice === 0) {
        return choices[0]
    } else if (randomChoice === 1) {
        return choices[1]
    } else if (randomChoice === 2) {
        return choices[2]
    }
}

console.log(`The computer chosed: ${getComputerChoice()}`);

// ------ A function that returns the playe's choice. ------
const getHumanChoice = () => {
    return humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
}

console.log(`My choice: ${getHumanChoice()}`);
