function invertedRightTriangle(n) {
    let pattern = '';
    for (let idx = 1; idx <= n; idx++) {
        for (let jdx = 1; jdx <= n; jdx++) {
            if (idx == 1 || jdx == 1 || jdx <= (n - idx + 1)) {
                pattern += '* ';
            } else {
                pattern += '  ';
            }
        }
        pattern += '\n';
    }

    console.log(pattern);
    
}

invertedRightTriangle(4);