function reverseDigit(n) {
    let result = 0;

    while (n > 0) {
        const digit = Math.trunc(n % 10);
        result = (result * 10) + digit;
        n = Math.trunc(n / 10);
    }

    return result;
}

const result = reverseDigit(200);
console.log(result);