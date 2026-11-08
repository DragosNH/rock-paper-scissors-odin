const choices = ["Rock", "Paper", "Scissors"];


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

console.log(getComputerChoice());

