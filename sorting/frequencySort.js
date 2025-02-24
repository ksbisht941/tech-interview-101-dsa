function frequencySort(nums) {
    // const sortedObj = {};
    // nums.map((el) => {
    //     if (!(el in sortedObj)) sortedObj[el] = 0;
    //     sortedObj[el] += 1;
    // });

    // console.log(sortedObj)

    // const result = [];
    // for (x in sortedObj) {
    //     result.push(...new Array(sortedObj[x]).fill(x));
    // }

    // return result;

    const obj = {};

    nums.map(el => {
        if (!(el in obj)) obj[el] = true;
    });

    return Object.keys(obj).map(el => +el);
};

const result = frequencySort([1,1,2]);
console.log(result);