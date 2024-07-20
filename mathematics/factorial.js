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
 * Time Complexity: Theta(n)
 */

/**
 * Effective Solution
 */
// function factorial(n) {
//     if (n == 0) return 1;

//     return n * factorial(n - 1);
// }

/**
 * Time Complexity: T(n) = T(n - 1) + Theta(1)
 */

const result = factorial(3);
console.log(result);