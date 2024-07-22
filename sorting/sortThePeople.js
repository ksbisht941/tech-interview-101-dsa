/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  // const obj = {};
  // names.map((el, idx) => {
  //     Object.assign(obj, {
  //         [el]: heights[idx]
  //     });
  // });

  // const sortable = Object.fromEntries(
  //     Object.entries(obj).sort(([,a],[,b]) => b-a)
  // );

  // return Object.keys(sortable);

  const namesArr = names.map((name, idx) => ({ name, height: heights[idx] }));
  namesArr.sort((a, b) => b.height - a.height);
  return namesArr.map((el) => el.name);
};

const result = sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150]);
console.log(result);
