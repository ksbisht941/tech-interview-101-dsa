/**
 * Naive Solution
 */
// function isPrime(n) {
//     if (n == 1) return false;

//     for (let idx = 2; idx < n; idx++) {
//         if (n % idx == 0) 
//             return false;
//     }

//     return true;
// }

/**
 * Time Complexity: O(n)
 */


/**
 * Effective Solution
 * 
 * Idea: Divisor always appear in pairs
 * 
 * 30: (1, 30), (2, 15), (10, 3), (5, 6)
 * 65: (1, 65), (5, 13)
 * 
 * if (x, y) is a pair 
 *  x * y = n
 * 
 * And if x <= y
 *  x * x <= n
 *  x = root(n) 
 */
// function isPrime(n) {
//     if (n == 1) return false;

//     for (let idx = 2; (idx * idx) < n; idx++) {
//         if (n % idx == 0) {
//             return false;
//         }
//     }

//     return true;
// }

/**
 * Time Complexity: O(root(n))
 */



/**
 * More Effective Solution
 */

function isPrime(n) {
    if (n == 1) return false;
    if (n == 2 || n == 3) return true;
    if ((n % 2 == 0) || (n % 3 == 0)) return false;

    for (let idx = 5; idx < n; idx = idx + 6) {
        
        if ((n % idx == 0) || (n % (idx + 2) == 0)) {
            return false;
        }

    }

    return true;
}

const result = isPrime(23);
console.log(result);