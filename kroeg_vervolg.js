const age = "16";
if (age > 18) {
    console.log("You can come in");
} else if (age == 18) {
    console.log("You can come in");
} else {
    console.log("you are too young, please go");
}

const isFemale = false;
if (isFemale) {
    console.log("Welcome inn Lady");
} else {
    console.log("Sorry dude, it is lady night");
}

const driverStatus = "bob";
if (driverStatus === "bob") {
    console.log("You are be BoB");
} else {
    console.log("You can't drive and need to find a BoB");
}

const myAge = 25;
if (myAge >= 18 && myAge <= 25) {
    console.log("Je krijgt 50% korting!");
} else {
    console.log("Welkom zonder korting");
}

const firstName = "Evelien";
if (firstName === "Bram" || firstName === "Sarah") {
    console.log("Je krijgt een gratis biertje!");
} else {
    console.log("Geen gratis biertje voor jou");
}

const totalAmount = "50";
if (totalAmount >= 25 && totalAmount <= 49) {
    console.log("Je krijgt gratis vegabitterballen!");
} else if (totalAmount <= 50 && totalAmount >= 99) {
    console.log("Je krijgt een gratis portie nachos!");
} else if (totalAmount >= 100) {
    console.log("Jij krijgt een fles champagne!");
}