function set(x) {
    if (x >> k & 1) {
        return 1;
    }
    return 0;
}

const x = 5;
const k = 3;
const result = set(x, k); 
console.log(result); // 1
