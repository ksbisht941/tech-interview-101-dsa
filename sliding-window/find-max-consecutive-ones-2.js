function findMaxConsecutiveOnes(nums) {
    let l = 0, r = 0, mx = 0, zeroes = 0, n = nums.length;

    while (r < n) {
        if (nums[r] == 0) {
            zeroes++;
        }

        while (l <= r && zeroes == 2) {
            if (nums[l] == 0) {
                zeroes--;
            }

            l++;
        }

        let len = r - l + 1;
        if (len > mx) mx++;

        r++;
    }

    return mx;
}

const result = findMaxConsecutiveOnes([1, 0, 1, 1, 0]);
console.log(result);