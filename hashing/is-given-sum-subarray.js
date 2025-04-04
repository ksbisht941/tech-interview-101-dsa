// function isGivenSumSubarray(arr, sum) {
//     for (let idx = 0; idx < arr.length; idx++) {
        
//         let curr_sum = 0;

//         for (let jdx = idx; jdx < arr.length; jdx++) {
//             curr_sum += arr[jdx];

//             if (curr_sum == sum) {
//                 return true;
//             }
            
//         }
        
//     }

//     return false
// }

function isGivenSumSubarray(arr, sum) {
    const hash = new Set();
    let pre_sum = 0;

    for (let idx = 0; idx < arr.length; idx++) {
        pre_sum += arr[idx];

        if (pre_sum == sum) return true;
        if (hash.has(pre_sum - sum)) return true;
        
        hash.add(pre_sum);
    }

    return false;
}

const arr = [5, 8, 6, 13, 3, -1];
const sum = 14;
const result = isGivenSumSubarray(arr, sum);
console.log(result);
