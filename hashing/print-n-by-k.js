function printNByK(arr, k) {
    const hash = new Map();
    const n = arr.length
    
    for (let idx = 0; idx < n; idx++) {
        if (hash.has(arr[idx])) {
            hash.set(arr[idx], hash.get(arr[idx]) + 1);
        } else if (hash.size < (k - 1)) {
            hash.set(arr[idx], 1);
        } else {
            for (let [key, value] of hash) {
                hash.set(key, value - 1);
                if (hash.get(key) === 0) {
                    hash.delete(key);
                }
            }
        }
    }

    const result = [];
    for (const el of hash) {
        if (el[1] >= Math.floor(n / k)) {
            result.push(el[0]);
        }
    }

    return result;
}

// const arr = [10, 20, 30, 20, 30, 40, 60, 20];
const arr = [30, 10, 20, 20, 20, 10, 40, 30, 30];
const k = 4;
const result = printNByK(arr, k);
console.log(result);