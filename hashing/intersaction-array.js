
function intersectionArrar(arr1, arr2) {
    const hash = {};
    const result = [];
    
    for (let i = 0; i < arr1.length; i++) {
        hash[arr1[i]] = true;
    }
    
    for (let i = 0; i < arr2.length; i++) {
        if (hash[arr2[i]]) {
        result.push(arr2[i]);
        }
    }
    
    return result;
}

const arr1 = [10, 15, 20, 25, 30, 50];
const arr2 = [30, 5, 15, 80];

const result = intersectionArrar(arr1, arr2);
console.log(result);
