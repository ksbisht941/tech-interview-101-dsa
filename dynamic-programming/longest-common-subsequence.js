const s1 = 'ABCDGH';
const s2 = 'AEDFHR';

// Plain Recusion
// const lcs = (s1, s2, m, n) => {
//     if (m === 0 || n === 0) {
//         return 0;
//     }
    
//     if (s1[m - 1] === s2[n - 1]) {
//         return 1 + lcs(s1, s2, m - 1, n - 1);
//     } else {
//         return Math.max(lcs(s1, s2, m - 1, n), lcs(s1, s2, m, n - 1));
//     }
// };


// Memoization
// const memo = new Array(s1.length + 1).fill(0).map(() => new Array(s2.length + 1).fill(0));

// const lcs = (s1, s2, m, n) => {
//     if (m === 0 || n === 0) {
//         return 0;
//     }

//     if (memo[m][n] !== 0) {
//         return memo[m][n];
//     }

//     if (s1[m - 1] === s2[n - 1]) {
//         memo[m][n] = 1 + lcs(s1, s2, m - 1, n - 1);
//     } else {
//         memo[m][n] = Math.max(lcs(s1, s2, m - 1, n), lcs(s1, s2, m, n - 1));
//     }

//     return memo[m][n];
// }


const lcs = (s1, s2, m, n) => {
    const memo = new Array(s1.length + 1).fill(0).map(() => new Array(s2.length + 1).fill(0));
    
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0 || j === 0) {
                memo[i][j] = 0;
            } else if (s1[i - 1] === s2[j - 1]) {
                memo[i][j] = 1 + memo[i - 1][j - 1];
            } else {
                memo[i][j] = Math.max(memo[i - 1][j], memo[i][j - 1]);
            }
        }
    }

    return memo[m][n];
}

console.log(lcs(s1, s2, s1.length, s2.length)); // 3