
function unionTwoArr(arr1, arr2) {
  let idx = 0, jdx = 0;
  const result = [];

  while (idx < arr1.length && jdx < arr2.length) {
    if (idx > 0 && arr1[idx] == arr1[idx - 1]) {
      idx++;
      continue;
    }
    
    if (jdx > 0 && arr2[jdx] == arr2[jdx - 1]) {
      jdx++;
      continue;
    }
    
    if (arr1[idx] < arr2[jdx]) {
        result.push(arr1[idx]);
        idx++;
    } else if (arr1[idx] > arr2[jdx]) {
        result.push(arr2[jdx]);
        jdx++;
    } else {
        result.push(arr1[idx]);
        idx++;
        jdx++;
    }
  }
  
  while (idx < arr1.length) {
    if (idx > 0 && arr1[idx] == arr1[idx - 1]) {
      idx++;
      continue;
    }
    
    result.push(arr1[idx]);
    idx++
  }
  
  while (jdx < arr2.length) {
      
    if (jdx > 0 && arr2[jdx] == arr2[jdx - 1]) {
      jdx++;
      continue;
    }
    
    result.push(arr2[jdx]);
    jdx++
  }
  
  return result;
}

const arr1 = [3, 5, 8, 8, 8 ,8, 9, 9, 9, 9, 9, 10, 12, 12];
const arr2 = [2, 8, 8, 8, 8, 9, 10, 15];
  
const result = unionTwoArr(arr1, arr2);
console.log(result); // 2 3 5 8 9 10 15
