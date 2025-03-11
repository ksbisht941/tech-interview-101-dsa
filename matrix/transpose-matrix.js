
function transposeMatrix(arr) {

  for (let idx = 0; idx < arr.length; idx++) {
    for (let jdx = idx + 1; jdx < arr.length; jdx++) {
      // swap(arr[idx][jdx], arr[jdx][idx]);

      const temp = arr[idx][jdx];
      arr[idx][jdx] = arr[jdx][idx];
      arr[jdx][idx] = temp;
    }
  }

  return arr;
}

function swap(a, b) {

}

const arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];
  const result = transposeMatrix(arr);
  console.log(result);
  