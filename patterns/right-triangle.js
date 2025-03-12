function rightTriangle(n) {
    let pattern = '';
    for (let idx = 1; idx <= n; idx++) {
        for (let jdx = 1; jdx <= n; jdx++) {
            if (jdx >= idx) {
                pattern += '* '
            } else {
                pattern += '  '
            }
        }
        pattern += '\n'
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