
function countInversion(arr, l, r) {
    
    res = 0;
    
    if (l < r) {
        const m = Math.floor((l + (r - l)) / 2);
        
        res += countInversion(arr, l, m);
        res += countInversion(arr, m + 1, r);
        res += countInversionMerge(arr, l, m, r);
    }
    
    return res;
}

fucntion countInversionMerge(arr, l, m, r) {
    const n = 
}

const arr = [2, 4, 1, 3, 5];
const result = countInversion(arr, 0, arr.length - 1);
