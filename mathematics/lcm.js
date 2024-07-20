/**
 * Naive Solution
 */
// function lcm(a, b) {
//     let res = Math.max(a, b);

//     while (true) {
//         if ((res % a == 0) && (res % b == 0))
//             return res;

//         res++;
//     }
// }

/**
 * Effective Solution
 */
function gcd(a, b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

const result = lcm(6, 12);
console.log(result);