// function square(n) {
//   let pattern = "";
//   for (let idx = 1; idx <= n; idx++) {
//     for (let jdx = 1; jdx <= n; jdx++) {
//       pattern += "* ";
//       if (jdx == n) pattern += "\n";
//     }
//   }

//   console.log(pattern);
// }

function square(n) {
  let pattern = Array(n)
    .fill("* ".repeat(n).trim())
    .join("\n");

  console.log(pattern);
}

square(4);
