function paindromeDigit(n) {
    let rev = 0, temp = n;

    while (temp > 0) {
        const digit = Math.trunc(temp % 10);
        rev = (rev * 10) + digit;

        temp = Math.trunc(temp / 10);
    }

    return rev == n;

}

const result = paindromeDigit(202);
console.log(result);