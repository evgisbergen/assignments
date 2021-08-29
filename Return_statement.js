/* opdracht1 const biggerthan100 = function (number) {
    if (number > 101) {
        return "true";
    }
    return "false";
};

const result = biggerthan100(90);
console.log(result);
*/

/* // AI BOUNCER: BRENDA THE BOUNCER BOT //
const maxpeople = function (age, peopleinclub, numberofguest) {
    if (age < 17) {
        return "this is a club for adults"
    };
    const sum = peopleinclub + numberofguest;
    if (sum > 101) {
        return "it's too busy now, come back later"
    }
    return "come in";
};

const result = maxpeople(21, 50, 9);
console.log(result);
*/

// CALCULATING AVERAGE
const calculateAverage = function (number1, number2, number3, number4, number5) {
    const sum = (number1 + number2 + number3 + number4 + number5) / 5;
    return sum;
}

const result = calculateAverage(5, 5, 6, 7, 5);

console.log(result);
