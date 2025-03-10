function isSorted(arr) {
    
    for (let idx = 1; idx < arr.length; idx++) {
        if (arr[idx] < arr[idx - 1]) {
            return false;
        }
    }

    return true;
}

// const arr = [10, 5, 20, 8, 15];
const arr = [10, 20, 20, 30, 40];
const result = isSorted(arr);
console.log(result);
