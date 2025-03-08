// Naive
// function countInversion(arr) {
//     const n = arr.length;
//     let count = 0;
//     for (let idx = 0; idx < n - 1; idx++) {
//         for (let jdx = idx + 1; jdx < n; jdx++) {
//             if (arr[idx] > arr[jdx]) count++;
//         }
//     }

//     return count;
// }

function countInversion(arr, l, r) {
  res = 0;

  if (l < r) {
    const m = Math.floor((l + (r - l)) / 2);

    res += countInversion(arr, l, m);
    res += countInversion(arr, m + 1, r);
    res += countInversionMerge(arr, l, m, r);
  }

  return res;
}

function countInversionMerge(arr, l, m, r) {}

const arr = [2, 4, 1, 3, 5];
const result = countInversion(arr);
console.log(result);

// inversion meaning
// a pair form (arr[i] , arr[j]) an inversion when i < j and arr[i] > arr[jdx]
