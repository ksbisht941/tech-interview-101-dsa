function naivePartition(arr, l, r, p) {
  const tempArr = new Array(r - l + 1).fill(0);
  let jdx = l;

  for (let idx = l; idx <= r; idx++) {
    if (arr[idx] <= arr[p] && idx != p) {
      tempArr[jdx] = arr[idx];
      jdx++;
    }
  }

  tempArr[jdx++] = arr[p];

  for (let idx = l; idx <= r; idx++) {
    if (arr[idx] > arr[p]) {
      tempArr[jdx] = arr[idx];
      jdx++;
    }
  }

  return tempArr;
}

const arr = [5, 13, 6, 9, 12, 11, 8];
const p = 6;
const left = 0;
const right = 5;
const result = naivePartition(arr, left, right, p);
console.log(result);
