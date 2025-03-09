function largestElement(arr) {
    let result = -1;

    for (let idx = 0; idx < arr.length; idx++) {
        if (arr[idx] > result) result = arr[idx];
    }

    return result;
}

const arr = [10, 5, 20, 8];
const result = largestElement(arr);
console.log(result);
