function powerOfNumber(N, R) {

    if (R == 1) return N;

    return N * powerOfNumber(N, R - 1);
}

const result = powerOfNumber(2, 11);
console.log(result);
