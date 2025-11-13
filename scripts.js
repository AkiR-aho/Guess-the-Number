let targetNumber = 6;

let guess = prompt("Arvaa numero");
guess = Number(guess);

let tulosLaatikko = document.getElementById("tulos");

if (targetNumber === guess) {
    resultBox.textContent = "Oikein!";
}
else {
    resultBox.textContent = "Väärin!";
}

