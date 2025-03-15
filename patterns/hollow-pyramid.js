function pyramid(n) {
    const m = Math.floor(n / 2);
    let pattern = '';
    for (let idx = 0; idx <= m; idx++) {
        for (let jdx = 0; jdx < n; jdx++) {
            if (jdx == m || (jdx >= (m - idx) && jdx <= (m + idx))) {
                pattern += '* '
            } else {
                pattern += '  '
            }
        }
        pattern += '\n'
    }

    console.log(pattern);
    
}

pyramid(10)