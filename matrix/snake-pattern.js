function snakePattern(arr) {
  const result = [];
  for (let idx = 0; idx < arr.length; idx++) {
    if (idx % 2 == 0) {
      for (let jdx = 0; jdx < arr[idx].length; jdx++) {
        result.push(arr[idx][jdx]);
      }
    } else {
      for (let jdx = arr[idx].length - 1; jdx >= 0; jdx--) {
        result.push(arr[idx][jdx]);
      }
    }
  }

  return result;
}

const snake = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
const result = snakePattern(snake);
console.log(result);
