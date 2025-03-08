function containerMostWater(height) {

    let idx = 0;
    let jdx = height.length - 1;

    let max = 0;

    while (idx < jdx) {
        const h = Math.min(height[idx], height[jdx]);
        const w = jdx - idx;
        const area = h * w;

        if (area > max) max = area;

        if (height[idx] < height[jdx]) idx++;
        else jdx--;
    }

    return max;
}

const result = containerMostWater([1,8,6,2,5,4,8,3,7])
console.log(result);