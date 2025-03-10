function mergeOverlayIntervals(arr) {
  const intervals = arr
    .map((el) => {
      return {
        start: el[0],
        end: el[1],
      };
    })
    .sort((a, b) => (a.start < b.start ? -1 : 1));

  // [
  //     { start: 1, end: 3 },
  //     { start: 2, end: 4 },
  //     { start: 4, end: 5 },
  //     { start: 6, end: 10 },
  //     { start: 7, end: 9 }
  // ]

  let res = 0;

  for (let idx = 1; idx < intervals.length; idx++) {
    if (intervals[res].end >= intervals[idx].start) {
      intervals[res].end = Math.max(intervals[res].end, intervals[idx].end);
      intervals[res].start = Math.min(
        intervals[res].start,
        intervals[idx].start
      );
    } else {
      res++;
      intervals[res] = intervals[idx];
    }
  }

  const result = [];
  for (let idx = 0; idx <= res; idx++) {
    result.push([intervals[idx].start, intervals[idx].end]);
  }

  return result;
}

// const arr = [[1, 3], [2, 4], [5, 7], [6, 8]];
const arr = [
  [7, 9],
  [6, 10],
  [4, 5],
  [1, 3],
  [2, 4],
];
const result = mergeOverlayIntervals(arr);
console.log(result);
