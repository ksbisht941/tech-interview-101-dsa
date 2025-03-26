function unionUnsortedArray(arr1, arr2) {
    const hash = new Set();
    
    for (let idx = 0; idx < arr1.length; idx++) {
        hash.add(arr1[idx]);
    }

    for (let idx = 0; idx < arr2.length; idx++) {
        hash.add(arr2[idx]);
    }

    return hash.size;
}

const arr1 = [15, 20, 5, 15];
const arr2 = [15, 15, 15, 20, 10];

const result = unionUnsortedArray(arr1, arr2);
console.log(result);