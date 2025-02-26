const arrA = [3, 5, 10, 10, 10, 15, 15, 20]
const arrB = [5, 10, 10, 15, 30]

function intersectionArray(arrA, arrB) {
    while (arrA.length && arrB.length) {
        if (arrA[0] === arrB[0]) {
            return arrA[0];
        }
        if (arrA[0] < arrB[0]) {
            arrA.shift();
        } else {
            arrB.shift();
        }
    }
}

const result = intersectionArray(arrA, arrB);
console.log(result); // [5, 10, 10, 15]