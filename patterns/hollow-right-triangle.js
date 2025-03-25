// function rightTriangle(n) {
//     let pattern = '';
//     for (let idx = 1; idx <= n; idx++) {
//         for (let jdx = 1; jdx <= n; jdx++) {
//             if (idx == 1 || jdx == n || idx == jdx) {
//                 pattern += '* '
//             } else {
//                 pattern += '  '
//             }
//         }
//         pattern += '\n'
//     }
//     console.log(pattern);
    
// }

function rightTriangle(n) {
    let pattern = '';
    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= n; col++) {
            pattern += (row === 1 || col === n || row === col) ? '* ' : '  ';
        }
        pattern += '\n';
    }
    console.log(pattern);
}

rightTriangle(6)

// * * * * * *
//   * * * * *
    // * * * *
    //   * * *
        // * *
        //   *