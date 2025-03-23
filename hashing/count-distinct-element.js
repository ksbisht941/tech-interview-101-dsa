function countDistinct(arr) {
    const set = new Set();

    for (let idx = 0; idx < arr.length; idx++) {
        set.add(arr[idx]);
    }

    return set.size;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3];
const result = countDistinct(arr);
console.log(result); // 10
// Time complexity: O(n)