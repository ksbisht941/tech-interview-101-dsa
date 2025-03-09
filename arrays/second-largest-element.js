function secondLargestElement(arr) {
    let largest = 0;
    let result = -1;

    for (let idx = 1; idx < arr.length; idx++) {

        if (arr[idx] > arr[largest]) {
            result = largest;
            largest = idx;
        } else if (arr[idx] !== largest) {
            if (result !== -1 || arr[idx] > arr[result]) result = idx;
        }
    }

    return result;
}

const arr = [10, 5, 20, 8, 15];
const result = secondLargestElement(arr);
console.log(result);
