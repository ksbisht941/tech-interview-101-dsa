function leaders(n, arr) {
    let result = new Array();
    let leader = arr[n - 1];
    
    for(let idx = arr.length - 1; idx >= 0; idx--) {
        if (arr[idx] >= leader) {
         result.push(arr[idx])   
         leader = arr[idx];
        }
    }
    
    return result.reverse();
}

const result = leaders(6, [16,17,4,3,5,2]);
console.log(result);


