// function isZeroSubArr(arr) {
//     for (let idx = 0; idx < arr.length; idx++) {
//         let curr_sum = 0;

//         for (let jdx = idx; jdx < arr.length; jdx++) {
//             curr_sum += arr[jdx];
//             if (curr_sum == 0) return true;
//         }
//     }

//     return false;
// }

function isZeroSubArr(arr) {
    const hash = new Set();
    let prev_sum = 0;

    for (let idx = 0; idx < arr.length; idx++) {
        prev_sum += arr[idx];

        if (hash.has(prev_sum)) {
            return true;
        }

        if (prev_sum == 0) {
            return true;
        }

        hash.add(prev_sum);
        
    }

    return false;
}

const arr = [1, 4, 13, -3, -10, 5];
// const arr = [3, 1, -2, 5, 6];
const result = isZeroSubArr(arr);
console.log(result);
