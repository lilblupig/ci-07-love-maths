//Have game start only when page has loaded, then have game listen for input.

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

function runGame() {
    // Generate two random numbers between 1 and 25
    // Math.random generates random numbers between 0 and 1
    // Math.floor rounds down to the whole number
    // Generates numbers between 0 and 24 so add 1 (Use Math.ceiling instead?)

    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractionQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivisionQuestion() {

}