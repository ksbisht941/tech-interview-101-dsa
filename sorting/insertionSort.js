function insertionSort(arr) {
    
    for (let idx = 1; idx < arr.length; idx++) {
        const current = arr[idx];
        let jdx = idx - 1;

        while (jdx >= 0 && current < arr[jdx]) {
            arr[jdx + 1] = arr[jdx];

            jdx--;
        }

        arr[jdx + 1] = current;

    }

    return arr;
}

// Time Complexity: O(n^2);

const result = insertionSort([101, 23, 10, 9, 56]);
console.log(result);