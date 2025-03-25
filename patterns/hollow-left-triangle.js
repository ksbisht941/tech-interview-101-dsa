// function hollowLeftTriangle(n) {
//     let pattern = '';
//     for (let idx = 1; idx <= n; idx++) {
//         for (let jdx = 1; jdx <= idx; jdx++) {
//             if (idx == jdx || idx == n || jdx == 1) {
//                 pattern += '* '
//             } else {
//                 pattern += '  '
//             }
//         }
//         pattern += '\n'
//     }
//     console.log(pattern);
    
// }

function hollowLeftTriangle(n) {
    let pattern = '';
    for (let idx = 1; idx <= n; idx++) {
        for (let jdx = 1; jdx <= idx; jdx++) {
            pattern += (idx === jdx || idx === n || jdx === 1) ? '* ' : '  ';
        }
        pattern += '\n';
    }
    console.log(pattern);
}


hollowLeftTriangle(6)

// * 
// * * 
// *   * 
// *     * 
// *       * 
// * * * * * * 