/** Naive Solution */
// function gcd(a, b) {
//     let res = Math.min(a, b);

//     while (res > 0) {
//         if ((a % res == 0) && (b % res == 0))
//             break;

//         res--;
//     }

//     return res;
// }

/** Euclidean Algorithm */
/**
 * Basic Idea: let 'b' be smaller than 'a'
 * gcd(a, b) = gcd(a - b, b)
 * 
 * Why?
 * let 'g' be GCD of 'a' and 'b'
 * a = gx, b = gy and GCD(x, y)
 * (a - b) = g(x - y)
 */
// function gcd(a, b) {
//     while (a != b) {
//         if (a > b) {
//             a = b - a;
//         } else {
//             b = b - a;
//         }

//         return a;
//     }
// }

/**
 * Optimitize Implementation of Euclidean Algorithm
 */
function gcd(a, b) {
    if (b == 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

/**
 * Time Complexity: O(log(min(a, b)));
 */



const result = gcd(4, 6);
console.log(result);