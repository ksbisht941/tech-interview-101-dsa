function lomutoPartition(arr, l, r) {

    let idx = l - 1;

    for (let jdx = l; jdx < r; jdx++) {
        if (arr[jdx] < arr[r]) {
            idx++;
            swap(arr, idx, jdx);
        }
    }

    swap(arr, idx + 1, r);
    
    return idx + 1;
}

function swap(arr, idx, jdx) {
    const temp = arr[idx];
    arr[idx] = arr[jdx];
    arr[jdx] = temp;
}

const arr = [10, 20, 30, 40, 50];
const result = lomutoPartition(arr, 0, arr.length - 1);
console.log(result);
