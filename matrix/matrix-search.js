function matrixSearch(arr, n) {
    let rowIdx = arr.length - 1, colIdx = 0; // Start from the bottom-left corner

    while (rowIdx >= 0 && colIdx < arr[0].length) {
        console.log(arr[rowIdx][colIdx]);

        if (arr[rowIdx][colIdx] === n) {
            return true;
        } else if (arr[rowIdx][colIdx] > n) {
            rowIdx--; // Move up
        } else {
            colIdx++; // Move right
        }
    }

    return false;
}

// Test matrix
const arr = [
    [1, 2, 4, 7],
    [5, 10, 20, 30],
    [200, 210, 360, 400]
];

const n = 2;
const result = matrixSearch(arr, n);
console.log(result);
