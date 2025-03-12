// function rotate90(arr, n) {
//   const result = Array.from({ length: n }, () => Array(n).fill(0));
//   console.log(result);

//   for (let idx = 0; idx < arr.length; idx++) {
//     for (let jdx = 0; jdx < arr.length; jdx++) {
//       result[n - jdx - 1][idx] = arr[idx][jdx];
//     }
//   }

//   return result;
// }

function rotate90(arr, n) {
  //   const result = Array.from({ length: n }, () => Array(n).fill(0));

  for (let idx = 0; idx < arr.length; idx++) {
    for (let jdx = idx + 1; jdx < arr.length; jdx++) {
      const temp = arr[idx][jdx];
      arr[idx][jdx] = arr[jdx][idx];
      arr[jdx][idx] = temp;
    }
  }

  for (let idx = 0; idx < arr.length; idx++) {
    let top = 0,
      bottom = n - 1;

    while (top < bottom) {
      const temp = arr[top][idx];
      arr[top][idx] = arr[bottom][idx];
      arr[bottom][idx] = temp;

      top++;
      bottom--;
    }
  }

  return arr;
}

const arr = [
  [1, 2, 3, 4, 10],
  [5, 6, 7, 8, 10],
  [9, 10, 11, 12, 10],
  [13, 14, 15, 16, 10],
  [17, 18, 19, 20, 10],
];
const result = rotate90(arr, 5);
console.log(result);
