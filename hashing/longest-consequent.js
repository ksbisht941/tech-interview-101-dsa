function longestConsequent(arr) {
    const hash = new Set();
    let res = 0;

    for (let idx = 0; idx < arr.length; idx++) {
        hash.add(arr[idx]);
    }

    for (const x of hash) {
        if (!hash.has(x - 1)) {
            let curr = 1;
        
            while (hash.has(x + curr)) {
                curr += 1;
            }

            res = Math.max(res, curr);
            
        }
    }

    return res;

}

const arr = [1, 3, 9, 2, 8, 11, 12];
const result = longestConsequent(arr);
console.log(result);
