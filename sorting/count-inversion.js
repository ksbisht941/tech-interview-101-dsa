// Naive
// function countInversion(arr, left, right) {
//     let count = 0;
//     for (let idx = 0; idx < right - 1; idx++) {
//         for (let jdx = idx + 1; jdx < right; jdx++) {
//             if (arr[idx] > arr[jdx]) count++;
//         }
//     }

//     return count;
// }

function countInversion(arr, l, r) {
  res = 0;

  if (l < r) {
    const m = Math.floor(l + (r - l) / 2);

    res += countInversion(arr, l, m);
    res += countInversion(arr, m + 1, r);
    res += countInversionMerge(arr, l, m, r);
  }

  return res;
}

function countInversionMerge(arr, l, m, r) {
    let n1 = m - l + 1;
    let n2 = r - m;

    const leftArr = new Array(n1);
    const rightArr = new Array(n2);

    for (let idx = 0; idx < n1; idx++) leftArr[idx] = arr[l + idx];
    for (let idx = 0; idx < n2; idx++) rightArr[idx] = arr[m + 1 + idx];

    let count = 0, idx = 0, jdx = 0, kdx = l;

    while (idx < n1 && jdx < n2) {
        if (leftArr[idx] <= rightArr[jdx]) {
            arr[kdx] = leftArr[idx];
            idx++;
        } else {
            arr[kdx] = rightArr[jdx];
            count = count + (n1 - idx);
            jdx++;
        }

        kdx++;
    }

    while (idx < n1) {
        arr[kdx] = leftArr[idx];
        idx++;
        kdx++;
    }

    while (jdx < n2) {
        arr[kdx] = rightArr[jdx];
        jdx++;
        kdx++;
    }

    return count;
    
}

const arr = [2, 4, 1, 3, 5];
const left = 0;
const right = arr.length;
const result = countInversion(arr, left, right);
console.log(result);

// inversion meaning
// a pair form (arr[i] , arr[j]) an inversion when i < j and arr[i] > arr[jdx]
