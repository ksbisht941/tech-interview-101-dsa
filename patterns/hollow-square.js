// function square(n) {
//   let pattern = "";
//   for (let idx = 1; idx <= n; idx++) {
//     for (let jdx = 1; jdx <= n; jdx++) {
//       if (idx == 1 || jdx == 1 || idx == n || jdx == n) {
//         pattern += "* ";
//       } else {
//         pattern += "  ";
//       }
      
//       if (jdx == n) pattern += "\n";
//     }
//   }

//   console.log(pattern);
// }


function square(n) {
  let pattern = "";

  for (let idx = 1; idx <= n; idx++) {
    for (let jdx = 1; jdx <= n; jdx++) {
      pattern += (idx === 1 || jdx === 1 || idx === n || jdx === n) ? "* " : "  ";
    }
    pattern += "\n";
  }

  console.log(pattern);
}

square(4);
