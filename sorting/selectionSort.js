function selectionSort(arr) {
   
    for (let idx = 0; idx < arr.length - 1; idx++) {
        
        let smallest = idx;

        for (let jdx = 1 + idx; jdx < arr.length; jdx++) {

            if (arr[jdx] < arr[smallest]) {
                smallest = jdx;
            }
            
        }

        const temp = arr[smallest];

        arr[smallest] = arr[idx];
        arr[idx] = temp;

    }

    return arr;

}

// Time Complexity: O(n^2);

const result = selectionSort([101, 23, 10, 9, 56]);
console.log(result);