/**
 * Naive Solution
 */
function factorial(n) {
    if (n == 0) return 1;

    let res = 1;
    for (let idx = 2; idx <= n; idx++) {
        res = res * idx;
    }

    return res;
}

/**
 * Effective Solution
 */
// function factorial(n) {
//     if (n == 0) return 1;

//     return n * factorial(n - 1);
// }

const result = factorial(3);
console.log(result);