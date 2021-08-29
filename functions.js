function calculation1(number1, number2) {
    const squaredNumber1 = number1 * number1;
    const squaredNumber2 = number2 * number2;
    const add = squaredNumber1 + squaredNumber2;
    const squaredNumber3 = add * add;
    return squaredNumber3;
};
console.log(calculation1(5, 3));

const calculation2 = function (number1, number2) {
    const squaredNumber1 = number1 * number1;
    const squaredNumber2 = number2 * number2;
    const add = squaredNumber1 + squaredNumber2;
    const squaredNumber3 = add * add;
    return squaredNumber3;
};

console.log(calculation2(5, 3));

const calculation3 = (number1, number2) => {
    const squaredNumber1 = number1 * number1;
    const squaredNumber2 = number2 * number2;
    const add = squaredNumber1 + squaredNumber2;
    const squaredNumber3 = add * add;
    return squaredNumber3;
};

console.log(calculation3(5, 3));


