function tripletSumInArray(arr, x) {

    for (let idx = 0; idx < arr.length - 2; idx++) {
        for (let jdx = idx + 1; jdx < arr.length - 1; jdx++) {
            for (let kdx = idx + 2; kdx < arr.length; kdx++) {
                
                if (arr[idx] + arr[jdx] + arr[kdx] == x) {
                    console.log(`${arr[idx]} ${arr[jdx]} ${arr[kdx]}`);
                    return;
                }
                
            }
        }
    }

}

const result = tripletSumInArray([1,4,45,6,10,8], 13);
// console.log(result);