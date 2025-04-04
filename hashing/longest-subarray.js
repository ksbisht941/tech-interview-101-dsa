// function longestSubarray(arr, sum) {
//     let res = 0;
//     for (let idx = 0; idx < arr.length; idx++) {

//         let curr_sum = 0;
//         for (let jdx = idx; jdx < arr.length; jdx++) {
//             curr_sum += arr[jdx];

//             if (curr_sum == sum) {
//                 res = Math.max(res, jdx - idx + 1);
//             }
//         }

//     }

//     return res;
// }

function longestSubarray(arr, sum) {
  const hash = new Map();
  let pre_sum = 0;
  let res = 0;

  for (let idx = 0; idx < arr.length; idx++) {
    pre_sum += arr[idx];

    if (pre_sum === sum) res = idx + 1;
    if (!hash.has(pre_sum)) hash.set(pre_sum, idx);

    if (hash.has(pre_sum - sum)) {
      res = Math.max(res, idx - hash.get(pre_sum - sum));
    }
  }

  return res;
}

const arr = [5, 2, 3, 4];
const result = longestSubarray(arr, 7);
console.log(result);
