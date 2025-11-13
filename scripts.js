let arvattava = 6;

let arvaus = prompt("Arvaa numero");
arvaus = Number(arvaus);

let tulosLaatikko = document.getElementById("tulos");

if (arvattava === arvaus) {
    tulosLaatikko.textContent = "Oikein!";
}
else {
    tulosLaatikko.textContent = "Väärin!";
}

