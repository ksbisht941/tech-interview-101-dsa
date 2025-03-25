// function rhombus(n) {
//   let pattern = "";
//   const c = ((n * 2) - 1);
//   for (let idx = 1; idx <= n; idx++) {
//     for (let jdx = 1; jdx <= c; jdx++) {
//       if (jdx >= idx && jdx < n + idx) {
//           pattern += "* ";
//       } else {
//           pattern += "  ";
//       }

//       if (jdx == c) pattern += "\n";
//     }
//   }

//   console.log(pattern);
// }

function rhombus(n) {
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    pattern += " ".repeat(n - i) + "* ".repeat(i) + "\n";
  }
  console.log(pattern);
}

rhombus(10);
