const areYouAdult = function (age) {
    if (age > 18) {
        return true;
    } else if (age < 17) {
        return false;
    }
}

console.log(areYouAdult(21));

const greetingAdult = function (age) {
    const isAdult = areYouAdult(age);

    if (isAdult) {
        return "Hello there";
    } else {
        return "Hello Kiddo";
    }
}
console.log(greetingAdult(12));

// VAT exercise 1
const price = function (baseprice, VAT) {
    const totalprice = baseprice * VAT;
    return totalprice;
};

const priceInclVAT = function (baseprice, VAT) {
    const InclVAT = price(baseprice, VAT);
    return InclVAT
};

console.log(priceInclVAT(100, 1.21));
console.log(priceInclVAT(200, 1.21));
console.log(priceInclVAT(400, 1.21));


// VAT excercise 2
const price2 = function (grossPrice, VAT) {
    const baseprice = grossPrice / VAT;
    const VATamount = grossPrice - baseprice;
    return [baseprice, VATamount];
};

const nettoprice = function (baseprice, VAT) {
    const ExclVAT = price2(grossPrice, VAT);
    return ExclVAT
};

console.log(priceInclVAT(100, 1.21));
console.log(priceInclVAT(200, 1.21));
console.log(priceInclVAT(400, 1.21));
