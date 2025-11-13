let targetNumber = 6; //Add comments

let guess = prompt("Guess number");
guess = Number(guess);

let resultBox = document.getElementById("result");

if (targetNumber === guess) {
    resultBox.textContent = "Correct!";
}
else {
    resultBox.textContent = "Wrong!";
}

