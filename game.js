const winningNumber = Math.floor(Math.random() * 26);

const person = prompt("Welkom! Wat is je naam?", "Harry Potter");

alert("Hey " + person);

let numberguess = prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden...");

while (winningNumber !== numberguess) {
    alert("Dat is niet correct. Probeer het nog een keer");
    numberguess = parseInt(prompt("Voer nog een keer een nummer in van 0 tot 25 om te beginnen met raden..."));
}
alert("Gefeliciteerd je hebt gewonnen");

alert("Dag " + person + ".Tot de volgende keer!");

