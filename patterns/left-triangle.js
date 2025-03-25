
// function leftTriangle(n) {
//     let pattern = '';
//     for (let idx = 1; idx <= n; idx++) {
//         for (let jdx = 1; jdx <= idx; jdx++) {
//             pattern += '* '
//         }
//         pattern += '\n'
//     }
//     console.log(pattern);
    
// }


function leftTriangle(n) {
    let pattern = '';
    for (let idx = 1; idx <= n; idx++) {
        pattern += '* '.repeat(idx) + '\n';
    }
    console.log(pattern);
}

leftTriangle(6)

// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *