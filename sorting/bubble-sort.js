function bubbleSort(arr) {
    for (let idx = 0; idx < arr.length - 1; idx++) {
        
        for (let jdx = 0; jdx < arr.length - idx - 1; jdx++) {
            
            if (arr[jdx] > arr[jdx + 1]) {
                const temp = arr[jdx];
                arr[jdx] = arr[jdx + 1];
                arr[jdx + 1] = temp;
            }
            
        }
        
    }

    return arr;
}

// Time Complexity: O(n^2);

const result = bubbleSort([101, 23, 10, 9, 56]);
console.log(result);