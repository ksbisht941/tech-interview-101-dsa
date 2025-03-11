function printBoundaryElement(arr) {
  const result = [];
  let leftIdx = 0, rightIdx = arr[0].length - 1;
  let topIdx = 0, bottomIdx = arr.length - 1;

  while (topIdx < bottomIdx) {
    
    for (let idx = leftIdx; idx <= rightIdx; idx++) {
        result.push(arr[topIdx][idx]);
    }

    topIdx++;

    for (let idx = topIdx; idx <= bottomIdx; idx++) {
        result.push(arr[idx][rightIdx]);
    }

    rightIdx--;

    for (let idx = rightIdx; idx >= leftIdx; idx--) {
        result.push(arr[bottomIdx][idx]);
    }
    
    bottomIdx--;

    for (let idx = bottomIdx; idx >= topIdx; idx--) {
        result.push(arr[idx][leftIdx]);
    }

    leftIdx++;

  }

  return result;
}

const arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
const result = printBoundaryElement(arr);
console.log(result);
