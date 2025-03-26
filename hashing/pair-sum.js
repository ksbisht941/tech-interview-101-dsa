function pairSum(arr, sum) {
  const hash = new Map();

  for (let idx = 0; idx < arr.length; idx++) {
    const potentialCount = sum - arr[idx];

    if (hash.has(potentialCount)) {
      return true;
    }

    hash.set(arr[idx], true);
  }

  return false;
}

const arr = [3, 2, 8, 15, -8];
const sum = 17;

const result = pairSum(arr, sum);
console.log(result);
