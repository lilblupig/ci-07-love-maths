//Have game start only when page has loaded, then have game listen for input.

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    runGame("addition");
})

function runGame(gameType) {
    // Generate two random numbers between 1 and 25
    // Math.random generates random numbers between 0 and 1
    // Math.floor rounds down to the whole number
    // Generates numbers between 0 and 24 so add 1 (Use Math.ceiling instead?)

    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    } else {
        alert(`Unknown game type ${gameType}`);
        throw `Unknown game type ${gameType}, aborting!`;
    }
}

function checkAnswer() {

    // Checks the user answer against the checkCalculatedAnswer index 0 below

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey!  You got it right! :D");
        incrementScore();
    } else {
        alert(`Awwww... you answered ${userAnswer}.  The correct answer was ${calculatedAnswer[0]}`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);

}

function calculateCorrectAnswer() {

        // Gets the operands and operator directly from the DOM, parseInt to change string to number

        let operand1 = parseInt(document.getElementById("operand1").innerText);
        let operand2 = parseInt(document.getElementById("operand2").innerText);
        let operator = document.getElementById("operator").innerText;

        // Returns an array containing the correct answer, and then instructs the next game type, default is addtion

        if (operator === "+") {
            return [operand1 + operand2, "addition"];
        } else {
            alert(`Unimplemented operator ${operator}`);
            throw `Unimplemented operator ${operator}, aborting!`;
        }

}

function incrementScore() {

    // Gets current correct score from DOM and increments it

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

function incrementWrongAnswer() {

    // Gets current incorrect score from DOM and increments it

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

}

function displayAdditionQuestion(operand1, operand2) {

    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";

}

function displaySubtractionQuestion() {

}

function displayMultiplyQuestion(operand1, operand2) {

    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "x";

}

function displayDivisionQuestion() {

}