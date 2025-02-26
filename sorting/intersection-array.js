const arrA = [3, 5, 10, 10, 10, 15, 15, 20]
const arrB = [5, 10, 10, 15, 30]

function intersectionArray(arrA, arrB) {
    let idx = 0, jdx = 0;
    const result = [];
    
    while (idx < arrA.length && jdx < arrB.length) {
        if (arrA[idx] == arrB[jdx]) {
            result.push(arrA[idx]);
            idx++;
            jdx++;
        } else if (arrA[idx] < arrB[jdx]) {
            idx++;
        } else {
            jdx++;
        }
    }
    
    return result;
}

const result = intersectionArray(arrA, arrB);
console.log(result); // [5, 10, 10, 15]
